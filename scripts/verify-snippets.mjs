#!/usr/bin/env node
// Compiles and runs every code snippet in snippets/<algo>/<lang>.<ext> against
// test arrays and compares the output with a reference sort.
// Usage: node scripts/verify-snippets.mjs [--only=<algo>] [--lang=<lang>]
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, readdirSync, existsSync, rmSync } from 'node:fs';
import { tmpdir, cpus } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, '').split('=')));

let seed = 42;
const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const randArr = (n, lo, hi) => Array.from({ length: n }, () => lo + Math.floor(rnd() * (hi - lo + 1)));

function cases(algo) {
  if (algo === 'bogo') return [[], [1], [2, 1], [3, -1, 2], [5, 5, 1, -2], [4, 3, 2, 1, 0, -1], randArr(7, -9, 9)];
  const asc = Array.from({ length: 64 }, (_, i) => i - 10);
  const all = [
    [], [1], [2, 1], [1, 2], [3, 3, 3], [5, -1, 5, -1, 0], [0, -7, 7, -2147483647, 2147483647],
    randArr(100, -1000, 1000), asc, [...asc].reverse(), Array(20).fill(9), randArr(200, 0, 3),
    randArr(1000, -1000000, 1000000), randArr(257, -50, 50),
  ];
  // counting sort allocates max-min+1 counters, so skip the full-int-range case for it
  return algo === 'counting' ? all.filter((c) => Math.max(...c, 0) - Math.min(...c, 0) <= 2_000_001) : all;
}

const harness = {
  c: {
    ext: 'c',
    files: (src) => ({
      'snippet.c': src,
      'main.c': `#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include "snippet.c"\nint main(void){static char line[1<<20];int *a=malloc(sizeof(int)*200000);while(fgets(line,sizeof line,stdin)){int n=0;char*p=strtok(line," \\n");while(p){a[n++]=atoi(p);p=strtok(NULL," \\n");}sort_array(a,n);for(int i=0;i<n;i++)printf(i?" %d":"%d",a[i]);printf("\\n");}return 0;}\n`,
    }),
    build: ['gcc', '-O2', '-std=c11', '-Wall', '-Werror', '-o', 'prog', 'main.c'],
    run: ['./prog'],
  },
  cpp: {
    ext: 'cpp',
    files: (src) => ({
      'snippet.cpp': src,
      'main.cpp': `#include <iostream>\n#include <sstream>\n#include <string>\n#include <vector>\n#include "snippet.cpp"\nint main(){std::string line;while(std::getline(std::cin,line)){std::istringstream ss(line);std::vector<int> a;int x;while(ss>>x)a.push_back(x);sortArray(a);for(size_t i=0;i<a.size();i++)std::cout<<(i?" ":"")<<a[i];std::cout<<"\\n";}}\n`,
    }),
    build: ['g++', '-O2', '-std=c++17', '-Wall', '-Werror', '-o', 'prog', 'main.cpp'],
    run: ['./prog'],
  },
  java: {
    ext: 'java',
    files: (src) => {
      const cls = src.match(/class\s+(\w+)/)[1];
      return {
        [`${cls}.java`]: src,
        'Main.java': `import java.io.*;\nimport java.util.*;\npublic class Main{public static void main(String[] x)throws IOException{BufferedReader r=new BufferedReader(new InputStreamReader(System.in));StringBuilder out=new StringBuilder();String line;while((line=r.readLine())!=null){line=line.trim();int[] a=line.isEmpty()?new int[0]:Arrays.stream(line.split("\\\\s+")).mapToInt(Integer::parseInt).toArray();${cls}.sort(a);StringBuilder sb=new StringBuilder();for(int i=0;i<a.length;i++){if(i>0)sb.append(' ');sb.append(a[i]);}out.append(sb).append('\\n');}System.out.print(out);}}\n`,
      };
    },
    build: ['sh', '-c', 'javac -Xlint:all -Werror *.java'],
    run: ['java', '-cp', '.', 'Main'],
  },
  go: {
    ext: 'go',
    files: (src) => ({
      'snippet.go': src,
      'main.go': `package main\nimport ("bufio";"fmt";"os";"strconv";"strings")\nfunc main(){sc:=bufio.NewScanner(os.Stdin);sc.Buffer(make([]byte,1<<20),1<<22);w:=bufio.NewWriter(os.Stdout);defer w.Flush();for sc.Scan(){f:=strings.Fields(sc.Text());a:=make([]int,len(f));for i,s:=range f{a[i],_=strconv.Atoi(s)};sortArray(a);p:=make([]string,len(a));for i,v:=range a{p[i]=strconv.Itoa(v)};fmt.Fprintln(w,strings.Join(p," "))}}\n`,
      'go.mod': 'module snippet\n\ngo 1.18\n',
    }),
    build: ['go', 'build', '-o', 'prog', '.'],
    run: ['./prog'],
  },
  rust: {
    ext: 'rs',
    files: (src) => ({
      'snippet.rs': src,
      'main.rs': `#![deny(warnings)]\nmod snippet { include!("snippet.rs"); }\nuse std::io::{BufRead, Write};\nfn main(){let stdin=std::io::stdin();let mut out=String::new();for line in stdin.lock().lines(){let line=line.unwrap();let mut a:Vec<i32>=line.split_whitespace().map(|s|s.parse().unwrap()).collect();snippet::sort_array(&mut a);let s:Vec<String>=a.iter().map(|v|v.to_string()).collect();out.push_str(&s.join(" "));out.push('\\n');}std::io::stdout().write_all(out.as_bytes()).unwrap();}\n`,
    }),
    build: ['rustc', '-O', '--edition=2021', '-o', 'prog', 'main.rs'],
    run: ['./prog'],
  },
  python: {
    ext: 'py',
    files: (src) => ({
      'snippet.py': src,
      'main.py': `import sys\nfrom snippet import sort_array\nout=[]\nfor line in sys.stdin.read().split("\\n")[:-1]:\n    a=[int(s) for s in line.split()]\n    sort_array(a)\n    out.append(" ".join(map(str,a)))\nprint("\\n".join(out))\n`,
    }),
    build: ['python3', '-m', 'py_compile', 'snippet.py'],
    run: ['python3', 'main.py'],
  },
};
export const LANGS = Object.keys(harness);

function verifyOne(algo, lang) {
  const file = join(root, 'snippets', algo, `${lang}.${harness[lang].ext}`);
  if (!existsSync(file)) return { ok: false, msg: 'missing file' };
  const dir = mkdtempSync(join(tmpdir(), `snip-${algo}-${lang}-`));
  try {
    for (const [name, content] of Object.entries(harness[lang].files(readFileSync(file, 'utf8')))) writeFileSync(join(dir, name), content);
    const b = spawnSync(harness[lang].build[0], harness[lang].build.slice(1), { cwd: dir, encoding: 'utf8', env: { ...process.env, GOFLAGS: '-mod=mod' } });
    if (b.status !== 0) return { ok: false, msg: `build failed:\n${b.stderr || b.stdout}` };
    const cs = cases(algo);
    const input = cs.map((c) => c.join(' ')).join('\n') + '\n';
    const r = spawnSync(harness[lang].run[0], harness[lang].run.slice(1), { cwd: dir, input, encoding: 'utf8', timeout: 60000 });
    if (r.status !== 0) return { ok: false, msg: `run failed (${r.status ?? r.signal}):\n${r.stderr}` };
    const lines = r.stdout.split('\n');
    for (let i = 0; i < cs.length; i++) {
      const exp = [...cs[i]].sort((x, y) => x - y).join(' ');
      if ((lines[i] ?? '').trim() !== exp) return { ok: false, msg: `case ${i} mismatch:\n input ${cs[i].join(' ').slice(0, 200)}\n got   ${(lines[i] ?? '').slice(0, 200)}\n want  ${exp.slice(0, 200)}` };
    }
    return { ok: true, cases: cs.length };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const algos = readdirSync(join(root, 'snippets')).filter((d) => !args.only || d === args.only).sort();
const langs = LANGS.filter((l) => !args.lang || l === args.lang);
let pass = 0, fail = 0, totalCases = 0;
const failures = [];
for (const algo of algos) {
  const row = [];
  for (const lang of langs) {
    const res = verifyOne(algo, lang);
    if (res.ok) { pass++; totalCases += res.cases; row.push(`${lang}:ok`); }
    else { fail++; failures.push(`${algo}/${lang}: ${res.msg}`); row.push(`${lang}:FAIL`); }
  }
  console.log(`${algo.padEnd(10)} ${row.join(' ')}`);
}
for (const f of failures) console.log(`\n--- ${f}`);
console.log(`\nSnippets passed: ${pass}/${pass + fail} (${totalCases} test arrays checked)`);
process.exit(fail ? 1 : 0);
