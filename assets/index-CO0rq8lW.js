(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hl={exports:{}},Fr={},Wl={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Si=Symbol.for("react.element"),_d=Symbol.for("react.portal"),kd=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),Sd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Ed=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Ad=Symbol.for("react.memo"),Cd=Symbol.for("react.lazy"),Es=Symbol.iterator;function Nd(e){return e===null||typeof e!="object"?null:(e=Es&&e[Es]||e["@@iterator"],typeof e=="function"?e:null)}var ql={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ql=Object.assign,Gl={};function zt(e,n,t){this.props=e,this.context=n,this.refs=Gl,this.updater=t||ql}zt.prototype.isReactComponent={};zt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};zt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kl(){}Kl.prototype=zt.prototype;function zo(e,n,t){this.props=e,this.context=n,this.refs=Gl,this.updater=t||ql}var Ao=zo.prototype=new Kl;Ao.constructor=zo;Ql(Ao,zt.prototype);Ao.isPureReactComponent=!0;var zs=Array.isArray,Yl=Object.prototype.hasOwnProperty,Co={current:null},Zl={key:!0,ref:!0,__self:!0,__source:!0};function Xl(e,n,t){var i,r={},a=null,o=null;if(n!=null)for(i in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)Yl.call(n,i)&&!Zl.hasOwnProperty(i)&&(r[i]=n[i]);var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];r.children=u}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:Si,type:e,key:a,ref:o,props:r,_owner:Co.current}}function Pd(e,n){return{$$typeof:Si,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function No(e){return typeof e=="object"&&e!==null&&e.$$typeof===Si}function Td(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var As=/\/+/g;function na(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Td(""+e.key):n.toString(36)}function Gi(e,n,t,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Si:case _d:o=!0}}if(o)return o=e,r=r(o),e=i===""?"."+na(o,0):i,zs(r)?(t="",e!=null&&(t=e.replace(As,"$&/")+"/"),Gi(r,n,t,"",function(f){return f})):r!=null&&(No(r)&&(r=Pd(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(As,"$&/")+"/")+e)),n.push(r)),1;if(o=0,i=i===""?".":i+":",zs(e))for(var s=0;s<e.length;s++){a=e[s];var u=i+na(a,s);o+=Gi(a,n,t,u,r)}else if(u=Nd(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=i+na(a,s++),o+=Gi(a,n,t,u,r);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Ni(e,n,t){if(e==null)return e;var i=[],r=0;return Gi(e,i,"","",function(a){return n.call(t,a,r++)}),i}function Od(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Ki={transition:null},Ld={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Ki,ReactCurrentOwner:Co};function Jl(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Ni,forEach:function(e,n,t){Ni(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ni(e,function(){n++}),n},toArray:function(e){return Ni(e,function(n){return n})||[]},only:function(e){if(!No(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=zt;M.Fragment=kd;M.Profiler=bd;M.PureComponent=zo;M.StrictMode=xd;M.Suspense=zd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ld;M.act=Jl;M.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Ql({},e.props),r=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=Co.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)Yl.call(n,u)&&!Zl.hasOwnProperty(u)&&(i[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];i.children=s}return{$$typeof:Si,type:e.type,key:r,ref:a,props:i,_owner:o}};M.createContext=function(e){return e={$$typeof:jd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sd,_context:e},e.Consumer=e};M.createElement=Xl;M.createFactory=function(e){var n=Xl.bind(null,e);return n.type=e,n};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Ed,render:e}};M.isValidElement=No;M.lazy=function(e){return{$$typeof:Cd,_payload:{_status:-1,_result:e},_init:Od}};M.memo=function(e,n){return{$$typeof:Ad,type:e,compare:n===void 0?null:n}};M.startTransition=function(e){var n=Ki.transition;Ki.transition={};try{e()}finally{Ki.transition=n}};M.unstable_act=Jl;M.useCallback=function(e,n){return pe.current.useCallback(e,n)};M.useContext=function(e){return pe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};M.useEffect=function(e,n){return pe.current.useEffect(e,n)};M.useId=function(){return pe.current.useId()};M.useImperativeHandle=function(e,n,t){return pe.current.useImperativeHandle(e,n,t)};M.useInsertionEffect=function(e,n){return pe.current.useInsertionEffect(e,n)};M.useLayoutEffect=function(e,n){return pe.current.useLayoutEffect(e,n)};M.useMemo=function(e,n){return pe.current.useMemo(e,n)};M.useReducer=function(e,n,t){return pe.current.useReducer(e,n,t)};M.useRef=function(e){return pe.current.useRef(e)};M.useState=function(e){return pe.current.useState(e)};M.useSyncExternalStore=function(e,n,t){return pe.current.useSyncExternalStore(e,n,t)};M.useTransition=function(){return pe.current.useTransition()};M.version="18.3.1";Wl.exports=M;var R=Wl.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md=R,Fd=Symbol.for("react.element"),Rd=Symbol.for("react.fragment"),Id=Object.prototype.hasOwnProperty,$d=Md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dd={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var i,r={},a=null,o=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(i in n)Id.call(n,i)&&!Dd.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:Fd,type:e,key:a,ref:o,props:r,_owner:$d.current}}Fr.Fragment=Rd;Fr.jsx=eu;Fr.jsxs=eu;Hl.exports=Fr;var d=Hl.exports,nu={exports:{}},ze={},tu={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,x){var C=A.length;A.push(x);e:for(;0<C;){var O=C-1>>>1,L=A[O];if(0<r(L,x))A[O]=x,A[C]=L,C=O;else break e}}function t(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var x=A[0],C=A.pop();if(C!==x){A[0]=C;e:for(var O=0,L=A.length,xe=L>>>1;O<xe;){var G=2*(O+1)-1,me=A[G],ge=G+1,Je=A[ge];if(0>r(me,C))ge<L&&0>r(Je,me)?(A[O]=Je,A[ge]=C,O=ge):(A[O]=me,A[G]=C,O=G);else if(ge<L&&0>r(Je,C))A[O]=Je,A[ge]=C,O=ge;else break e}}return x}function r(A,x){var C=A.sortIndex-x.sortIndex;return C!==0?C:A.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],f=[],m=1,v=null,y=3,E=!1,z=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,l=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(A){for(var x=t(f);x!==null;){if(x.callback===null)i(f);else if(x.startTime<=A)i(f),x.sortIndex=x.expirationTime,n(u,x);else break;x=t(f)}}function h(A){if(w=!1,c(A),!z)if(t(u)!==null)z=!0,dn(g);else{var x=t(f);x!==null&&Ne(h,x.startTime-A)}}function g(A,x){z=!1,w&&(w=!1,p(S),S=-1),E=!0;var C=y;try{for(c(x),v=t(u);v!==null&&(!(v.expirationTime>x)||A&&!I());){var O=v.callback;if(typeof O=="function"){v.callback=null,y=v.priorityLevel;var L=O(v.expirationTime<=x);x=e.unstable_now(),typeof L=="function"?v.callback=L:v===t(u)&&i(u),c(x)}else i(u);v=t(u)}if(v!==null)var xe=!0;else{var G=t(f);G!==null&&Ne(h,G.startTime-x),xe=!1}return xe}finally{v=null,y=C,E=!1}}var _=!1,k=null,S=-1,N=5,T=-1;function I(){return!(e.unstable_now()-T<N)}function ne(){if(k!==null){var A=e.unstable_now();T=A;var x=!0;try{x=k(!0,A)}finally{x?Ce():(_=!1,k=null)}}else _=!1}var Ce;if(typeof l=="function")Ce=function(){l(ne)};else if(typeof MessageChannel<"u"){var Ln=new MessageChannel,Nt=Ln.port2;Ln.port1.onmessage=ne,Ce=function(){Nt.postMessage(null)}}else Ce=function(){b(ne,0)};function dn(A){k=A,_||(_=!0,Ce())}function Ne(A,x){S=b(function(){A(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){z||E||(z=!0,dn(g))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(A){switch(y){case 1:case 2:case 3:var x=3;break;default:x=y}var C=y;y=x;try{return A()}finally{y=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,x){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var C=y;y=A;try{return x()}finally{y=C}},e.unstable_scheduleCallback=function(A,x,C){var O=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?O+C:O):C=O,A){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=C+L,A={id:m++,callback:x,priorityLevel:A,startTime:C,expirationTime:L,sortIndex:-1},C>O?(A.sortIndex=C,n(f,A),t(u)===null&&A===t(f)&&(w?(p(S),S=-1):w=!0,Ne(h,C-O))):(A.sortIndex=L,n(u,A),z||E||(z=!0,dn(g))),A},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(A){var x=y;return function(){var C=y;y=x;try{return A.apply(this,arguments)}finally{y=C}}}})(iu);tu.exports=iu;var Bd=tu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=R,Ee=Bd;function j(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ru=new Set,ii={};function Kn(e,n){vt(e,n),vt(e+"Capture",n)}function vt(e,n){for(ii[e]=n,e=0;e<n.length;e++)ru.add(n[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ta=Object.prototype.hasOwnProperty,Vd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cs={},Ns={};function Hd(e){return Ta.call(Ns,e)?!0:Ta.call(Cs,e)?!1:Vd.test(e)?Ns[e]=!0:(Cs[e]=!0,!1)}function Wd(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qd(e,n,t,i){if(n===null||typeof n>"u"||Wd(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function he(e,n,t,i,r,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];oe[n]=new he(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Po=/[\-:]([a-z])/g;function To(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Po,To);oe[n]=new he(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Po,To);oe[n]=new he(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Po,To);oe[n]=new he(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Oo(e,n,t,i){var r=oe.hasOwnProperty(n)?oe[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(qd(n,t,r,i)&&(t=null),i||r===null?Hd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,i=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var cn=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pi=Symbol.for("react.element"),et=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),Lo=Symbol.for("react.strict_mode"),Oa=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),ou=Symbol.for("react.context"),Mo=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),Ma=Symbol.for("react.suspense_list"),Fo=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),su=Symbol.for("react.offscreen"),Ps=Symbol.iterator;function Pt(e){return e===null||typeof e!="object"?null:(e=Ps&&e[Ps]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ta;function Dt(e){if(ta===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ta=n&&n[1]||""}return`
`+ta+e}var ia=!1;function ra(e,n){if(!e||ia)return"";ia=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var i=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){i=f}e.call(n.prototype)}else{try{throw Error()}catch(f){i=f}e()}}catch(f){if(f&&i&&typeof f.stack=="string"){for(var r=f.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var u=`
`+r[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{ia=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Dt(e):""}function Qd(e){switch(e.tag){case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 2:case 15:return e=ra(e.type,!1),e;case 11:return e=ra(e.type.render,!1),e;case 1:return e=ra(e.type,!0),e;default:return""}}function Fa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nt:return"Fragment";case et:return"Portal";case Oa:return"Profiler";case Lo:return"StrictMode";case La:return"Suspense";case Ma:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ou:return(e.displayName||"Context")+".Consumer";case au:return(e._context.displayName||"Context")+".Provider";case Mo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fo:return n=e.displayName||null,n!==null?n:Fa(e.type)||"Memo";case mn:n=e._payload,e=e._init;try{return Fa(e(n))}catch{}}return null}function Gd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fa(n);case 8:return n===Lo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kd(e){var n=lu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ti(e){e._valueTracker||(e._valueTracker=Kd(e))}function uu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=lu(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ra(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ts(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=Cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function cu(e,n){n=n.checked,n!=null&&Oo(e,"checked",n,!1)}function Ia(e,n){cu(e,n);var t=Cn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?$a(e,n.type,t):n.hasOwnProperty("defaultValue")&&$a(e,n.type,Cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Os(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function $a(e,n,t){(n!=="number"||ur(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Bt=Array.isArray;function ft(e,n,t,i){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&i&&(e[t].defaultSelected=!0)}else{for(t=""+Cn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Da(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(j(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ls(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(j(92));if(Bt(t)){if(1<t.length)throw Error(j(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Cn(t)}}function du(e,n){var t=Cn(n.value),i=Cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Ms(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ba(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oi,pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Oi=Oi||document.createElement("div"),Oi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ri(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yd=["Webkit","ms","Moz","O"];Object.keys(Qt).forEach(function(e){Yd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Qt[n]=Qt[e]})});function hu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Qt.hasOwnProperty(e)&&Qt[e]?(""+n).trim():n+"px"}function mu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=hu(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,r):e[t]=r}}var Zd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(e,n){if(n){if(Zd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(j(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(j(61))}if(n.style!=null&&typeof n.style!="object")throw Error(j(62))}}function Va(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function Ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,pt=null,ht=null;function Fs(e){if(e=zi(e)){if(typeof Wa!="function")throw Error(j(280));var n=e.stateNode;n&&(n=Br(n),Wa(e.stateNode,e.type,n))}}function gu(e){pt?ht?ht.push(e):ht=[e]:pt=e}function yu(){if(pt){var e=pt,n=ht;if(ht=pt=null,Fs(e),n)for(e=0;e<n.length;e++)Fs(n[e])}}function vu(e,n){return e(n)}function wu(){}var aa=!1;function _u(e,n,t){if(aa)return e(n,t);aa=!0;try{return vu(e,n,t)}finally{aa=!1,(pt!==null||ht!==null)&&(wu(),yu())}}function ai(e,n){var t=e.stateNode;if(t===null)return null;var i=Br(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(j(231,n,typeof t));return t}var qa=!1;if(on)try{var Tt={};Object.defineProperty(Tt,"passive",{get:function(){qa=!0}}),window.addEventListener("test",Tt,Tt),window.removeEventListener("test",Tt,Tt)}catch{qa=!1}function Xd(e,n,t,i,r,a,o,s,u){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(m){this.onError(m)}}var Gt=!1,cr=null,dr=!1,Qa=null,Jd={onError:function(e){Gt=!0,cr=e}};function ef(e,n,t,i,r,a,o,s,u){Gt=!1,cr=null,Xd.apply(Jd,arguments)}function nf(e,n,t,i,r,a,o,s,u){if(ef.apply(this,arguments),Gt){if(Gt){var f=cr;Gt=!1,cr=null}else throw Error(j(198));dr||(dr=!0,Qa=f)}}function Yn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ku(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Rs(e){if(Yn(e)!==e)throw Error(j(188))}function tf(e){var n=e.alternate;if(!n){if(n=Yn(e),n===null)throw Error(j(188));return n!==e?null:e}for(var t=e,i=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return Rs(r),e;if(a===i)return Rs(r),n;a=a.sibling}throw Error(j(188))}if(t.return!==i.return)t=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===t){o=!0,t=r,i=a;break}if(s===i){o=!0,i=r,t=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===t){o=!0,t=a,i=r;break}if(s===i){o=!0,i=a,t=r;break}s=s.sibling}if(!o)throw Error(j(189))}}if(t.alternate!==i)throw Error(j(190))}if(t.tag!==3)throw Error(j(188));return t.stateNode.current===t?e:n}function xu(e){return e=tf(e),e!==null?bu(e):null}function bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=bu(e);if(n!==null)return n;e=e.sibling}return null}var Su=Ee.unstable_scheduleCallback,Is=Ee.unstable_cancelCallback,rf=Ee.unstable_shouldYield,af=Ee.unstable_requestPaint,Y=Ee.unstable_now,of=Ee.unstable_getCurrentPriorityLevel,Io=Ee.unstable_ImmediatePriority,ju=Ee.unstable_UserBlockingPriority,fr=Ee.unstable_NormalPriority,sf=Ee.unstable_LowPriority,Eu=Ee.unstable_IdlePriority,Rr=null,Ze=null;function lf(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Rr,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:df,uf=Math.log,cf=Math.LN2;function df(e){return e>>>=0,e===0?32:31-(uf(e)/cf|0)|0}var Li=64,Mi=4194304;function Ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pr(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~r;s!==0?i=Ut(s):(a&=o,a!==0&&(i=Ut(a)))}else o=t&~r,o!==0?i=Ut(o):a!==0&&(i=Ut(a));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,a=n&-n,r>=a||r===16&&(a&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-He(n),r=1<<t,i|=e[t],n&=~r;return i}function ff(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pf(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-He(a),s=1<<o,u=r[o];u===-1?(!(s&t)||s&i)&&(r[o]=ff(s,n)):u<=n&&(e.expiredLanes|=s),a&=~s}}function Ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zu(){var e=Li;return Li<<=1,!(Li&4194240)&&(Li=64),e}function oa(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ji(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-He(n),e[n]=t}function hf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-He(t),a=1<<r;n[r]=0,i[r]=-1,e[r]=-1,t&=~a}}function $o(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-He(t),r=1<<i;r&n|e[i]&n&&(e[i]|=n),t&=~r}}var D=0;function Au(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cu,Do,Nu,Pu,Tu,Ka=!1,Fi=[],kn=null,xn=null,bn=null,oi=new Map,si=new Map,yn=[],mf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $s(e,n){switch(e){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":oi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(n.pointerId)}}function Ot(e,n,t,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},n!==null&&(n=zi(n),n!==null&&Do(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function gf(e,n,t,i,r){switch(n){case"focusin":return kn=Ot(kn,e,n,t,i,r),!0;case"dragenter":return xn=Ot(xn,e,n,t,i,r),!0;case"mouseover":return bn=Ot(bn,e,n,t,i,r),!0;case"pointerover":var a=r.pointerId;return oi.set(a,Ot(oi.get(a)||null,e,n,t,i,r)),!0;case"gotpointercapture":return a=r.pointerId,si.set(a,Ot(si.get(a)||null,e,n,t,i,r)),!0}return!1}function Ou(e){var n=In(e.target);if(n!==null){var t=Yn(n);if(t!==null){if(n=t.tag,n===13){if(n=ku(t),n!==null){e.blockedOn=n,Tu(e.priority,function(){Nu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ya(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);Ha=i,t.target.dispatchEvent(i),Ha=null}else return n=zi(t),n!==null&&Do(n),e.blockedOn=t,!1;n.shift()}return!0}function Ds(e,n,t){Yi(e)&&t.delete(n)}function yf(){Ka=!1,kn!==null&&Yi(kn)&&(kn=null),xn!==null&&Yi(xn)&&(xn=null),bn!==null&&Yi(bn)&&(bn=null),oi.forEach(Ds),si.forEach(Ds)}function Lt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ka||(Ka=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,yf)))}function li(e){function n(r){return Lt(r,e)}if(0<Fi.length){Lt(Fi[0],e);for(var t=1;t<Fi.length;t++){var i=Fi[t];i.blockedOn===e&&(i.blockedOn=null)}}for(kn!==null&&Lt(kn,e),xn!==null&&Lt(xn,e),bn!==null&&Lt(bn,e),oi.forEach(n),si.forEach(n),t=0;t<yn.length;t++)i=yn[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<yn.length&&(t=yn[0],t.blockedOn===null);)Ou(t),t.blockedOn===null&&yn.shift()}var mt=cn.ReactCurrentBatchConfig,hr=!0;function vf(e,n,t,i){var r=D,a=mt.transition;mt.transition=null;try{D=1,Bo(e,n,t,i)}finally{D=r,mt.transition=a}}function wf(e,n,t,i){var r=D,a=mt.transition;mt.transition=null;try{D=4,Bo(e,n,t,i)}finally{D=r,mt.transition=a}}function Bo(e,n,t,i){if(hr){var r=Ya(e,n,t,i);if(r===null)ga(e,n,i,mr,t),$s(e,i);else if(gf(r,e,n,t,i))i.stopPropagation();else if($s(e,i),n&4&&-1<mf.indexOf(e)){for(;r!==null;){var a=zi(r);if(a!==null&&Cu(a),a=Ya(e,n,t,i),a===null&&ga(e,n,i,mr,t),a===r)break;r=a}r!==null&&i.stopPropagation()}else ga(e,n,i,null,t)}}var mr=null;function Ya(e,n,t,i){if(mr=null,e=Ro(i),e=In(e),e!==null)if(n=Yn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ku(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return mr=e,null}function Lu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(of()){case Io:return 1;case ju:return 4;case fr:case sf:return 16;case Eu:return 536870912;default:return 16}default:return 16}}var wn=null,Uo=null,Zi=null;function Mu(){if(Zi)return Zi;var e,n=Uo,t=n.length,i,r="value"in wn?wn.value:wn.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var o=t-e;for(i=1;i<=o&&n[t-i]===r[a-i];i++);return Zi=r.slice(e,1<i?1-i:void 0)}function Xi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function Bs(){return!1}function Ae(e){function n(t,i,r,a,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ri:Bs,this.isPropagationStopped=Bs,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),n}var At={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=Ae(At),Ei=Q({},At,{view:0,detail:0}),_f=Ae(Ei),sa,la,Mt,Ir=Q({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mt&&(Mt&&e.type==="mousemove"?(sa=e.screenX-Mt.screenX,la=e.screenY-Mt.screenY):la=sa=0,Mt=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),Us=Ae(Ir),kf=Q({},Ir,{dataTransfer:0}),xf=Ae(kf),bf=Q({},Ei,{relatedTarget:0}),ua=Ae(bf),Sf=Q({},At,{animationName:0,elapsedTime:0,pseudoElement:0}),jf=Ae(Sf),Ef=Q({},At,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zf=Ae(Ef),Af=Q({},At,{data:0}),Vs=Ae(Af),Cf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Pf[e])?!!n[e]:!1}function Ho(){return Tf}var Of=Q({},Ei,{key:function(e){if(e.key){var n=Cf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ho,charCode:function(e){return e.type==="keypress"?Xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lf=Ae(Of),Mf=Q({},Ir,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hs=Ae(Mf),Ff=Q({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ho}),Rf=Ae(Ff),If=Q({},At,{propertyName:0,elapsedTime:0,pseudoElement:0}),$f=Ae(If),Df=Q({},Ir,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bf=Ae(Df),Uf=[9,13,27,32],Wo=on&&"CompositionEvent"in window,Kt=null;on&&"documentMode"in document&&(Kt=document.documentMode);var Vf=on&&"TextEvent"in window&&!Kt,Fu=on&&(!Wo||Kt&&8<Kt&&11>=Kt),Ws=" ",qs=!1;function Ru(e,n){switch(e){case"keyup":return Uf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tt=!1;function Hf(e,n){switch(e){case"compositionend":return Iu(n);case"keypress":return n.which!==32?null:(qs=!0,Ws);case"textInput":return e=n.data,e===Ws&&qs?null:e;default:return null}}function Wf(e,n){if(tt)return e==="compositionend"||!Wo&&Ru(e,n)?(e=Mu(),Zi=Uo=wn=null,tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fu&&n.locale!=="ko"?null:n.data;default:return null}}var qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!qf[e.type]:n==="textarea"}function $u(e,n,t,i){gu(i),n=gr(n,"onChange"),0<n.length&&(t=new Vo("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var Yt=null,ui=null;function Qf(e){Yu(e,0)}function $r(e){var n=at(e);if(uu(n))return e}function Gf(e,n){if(e==="change")return n}var Du=!1;if(on){var ca;if(on){var da="oninput"in document;if(!da){var Gs=document.createElement("div");Gs.setAttribute("oninput","return;"),da=typeof Gs.oninput=="function"}ca=da}else ca=!1;Du=ca&&(!document.documentMode||9<document.documentMode)}function Ks(){Yt&&(Yt.detachEvent("onpropertychange",Bu),ui=Yt=null)}function Bu(e){if(e.propertyName==="value"&&$r(ui)){var n=[];$u(n,ui,e,Ro(e)),_u(Qf,n)}}function Kf(e,n,t){e==="focusin"?(Ks(),Yt=n,ui=t,Yt.attachEvent("onpropertychange",Bu)):e==="focusout"&&Ks()}function Yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $r(ui)}function Zf(e,n){if(e==="click")return $r(n)}function Xf(e,n){if(e==="input"||e==="change")return $r(n)}function Jf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qe=typeof Object.is=="function"?Object.is:Jf;function ci(e,n){if(qe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ta.call(n,r)||!qe(e[r],n[r]))return!1}return!0}function Ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zs(e,n){var t=Ys(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ys(t)}}function Uu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Uu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vu(){for(var e=window,n=ur();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ur(e.document)}return n}function qo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function ep(e){var n=Vu(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Uu(t.ownerDocument.documentElement,t)){if(i!==null&&qo(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=Zs(t,a);var o=Zs(t,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var np=on&&"documentMode"in document&&11>=document.documentMode,it=null,Za=null,Zt=null,Xa=!1;function Xs(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Xa||it==null||it!==ur(i)||(i=it,"selectionStart"in i&&qo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zt&&ci(Zt,i)||(Zt=i,i=gr(Za,"onSelect"),0<i.length&&(n=new Vo("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=it)))}function Ii(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var rt={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionend:Ii("Transition","TransitionEnd")},fa={},Hu={};on&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete rt.animationend.animation,delete rt.animationiteration.animation,delete rt.animationstart.animation),"TransitionEvent"in window||delete rt.transitionend.transition);function Dr(e){if(fa[e])return fa[e];if(!rt[e])return e;var n=rt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Hu)return fa[e]=n[t];return e}var Wu=Dr("animationend"),qu=Dr("animationiteration"),Qu=Dr("animationstart"),Gu=Dr("transitionend"),Ku=new Map,Js="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,n){Ku.set(e,n),Kn(n,[e])}for(var pa=0;pa<Js.length;pa++){var ha=Js[pa],tp=ha.toLowerCase(),ip=ha[0].toUpperCase()+ha.slice(1);Pn(tp,"on"+ip)}Pn(Wu,"onAnimationEnd");Pn(qu,"onAnimationIteration");Pn(Qu,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(Gu,"onTransitionEnd");vt("onMouseEnter",["mouseout","mouseover"]);vt("onMouseLeave",["mouseout","mouseover"]);vt("onPointerEnter",["pointerout","pointerover"]);vt("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vt));function el(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,nf(i,n,void 0,e),e.currentTarget=null}function Yu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],r=i.event;i=i.listeners;e:{var a=void 0;if(n)for(var o=i.length-1;0<=o;o--){var s=i[o],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==a&&r.isPropagationStopped())break e;el(r,s,f),a=u}else for(o=0;o<i.length;o++){if(s=i[o],u=s.instance,f=s.currentTarget,s=s.listener,u!==a&&r.isPropagationStopped())break e;el(r,s,f),a=u}}}if(dr)throw e=Qa,dr=!1,Qa=null,e}function U(e,n){var t=n[io];t===void 0&&(t=n[io]=new Set);var i=e+"__bubble";t.has(i)||(Zu(n,e,2,!1),t.add(i))}function ma(e,n,t){var i=0;n&&(i|=4),Zu(t,e,i,n)}var $i="_reactListening"+Math.random().toString(36).slice(2);function di(e){if(!e[$i]){e[$i]=!0,ru.forEach(function(t){t!=="selectionchange"&&(rp.has(t)||ma(t,!1,e),ma(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$i]||(n[$i]=!0,ma("selectionchange",!1,n))}}function Zu(e,n,t,i){switch(Lu(n)){case 1:var r=vf;break;case 4:r=wf;break;default:r=Bo}t=r.bind(null,n,t,e),r=void 0,!qa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function ga(e,n,t,i,r){var a=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;o=o.return}for(;s!==null;){if(o=In(s),o===null)return;if(u=o.tag,u===5||u===6){i=a=o;continue e}s=s.parentNode}}i=i.return}_u(function(){var f=a,m=Ro(t),v=[];e:{var y=Ku.get(e);if(y!==void 0){var E=Vo,z=e;switch(e){case"keypress":if(Xi(t)===0)break e;case"keydown":case"keyup":E=Lf;break;case"focusin":z="focus",E=ua;break;case"focusout":z="blur",E=ua;break;case"beforeblur":case"afterblur":E=ua;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Rf;break;case Wu:case qu:case Qu:E=jf;break;case Gu:E=$f;break;case"scroll":E=_f;break;case"wheel":E=Bf;break;case"copy":case"cut":case"paste":E=zf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Hs}var w=(n&4)!==0,b=!w&&e==="scroll",p=w?y!==null?y+"Capture":null:y;w=[];for(var l=f,c;l!==null;){c=l;var h=c.stateNode;if(c.tag===5&&h!==null&&(c=h,p!==null&&(h=ai(l,p),h!=null&&w.push(fi(l,h,c)))),b)break;l=l.return}0<w.length&&(y=new E(y,z,null,t,m),v.push({event:y,listeners:w}))}}if(!(n&7)){e:{if(y=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",y&&t!==Ha&&(z=t.relatedTarget||t.fromElement)&&(In(z)||z[sn]))break e;if((E||y)&&(y=m.window===m?m:(y=m.ownerDocument)?y.defaultView||y.parentWindow:window,E?(z=t.relatedTarget||t.toElement,E=f,z=z?In(z):null,z!==null&&(b=Yn(z),z!==b||z.tag!==5&&z.tag!==6)&&(z=null)):(E=null,z=f),E!==z)){if(w=Us,h="onMouseLeave",p="onMouseEnter",l="mouse",(e==="pointerout"||e==="pointerover")&&(w=Hs,h="onPointerLeave",p="onPointerEnter",l="pointer"),b=E==null?y:at(E),c=z==null?y:at(z),y=new w(h,l+"leave",E,t,m),y.target=b,y.relatedTarget=c,h=null,In(m)===f&&(w=new w(p,l+"enter",z,t,m),w.target=c,w.relatedTarget=b,h=w),b=h,E&&z)n:{for(w=E,p=z,l=0,c=w;c;c=Zn(c))l++;for(c=0,h=p;h;h=Zn(h))c++;for(;0<l-c;)w=Zn(w),l--;for(;0<c-l;)p=Zn(p),c--;for(;l--;){if(w===p||p!==null&&w===p.alternate)break n;w=Zn(w),p=Zn(p)}w=null}else w=null;E!==null&&nl(v,y,E,w,!1),z!==null&&b!==null&&nl(v,b,z,w,!0)}}e:{if(y=f?at(f):window,E=y.nodeName&&y.nodeName.toLowerCase(),E==="select"||E==="input"&&y.type==="file")var g=Gf;else if(Qs(y))if(Du)g=Xf;else{g=Yf;var _=Kf}else(E=y.nodeName)&&E.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(g=Zf);if(g&&(g=g(e,f))){$u(v,g,t,m);break e}_&&_(e,y,f),e==="focusout"&&(_=y._wrapperState)&&_.controlled&&y.type==="number"&&$a(y,"number",y.value)}switch(_=f?at(f):window,e){case"focusin":(Qs(_)||_.contentEditable==="true")&&(it=_,Za=f,Zt=null);break;case"focusout":Zt=Za=it=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Xs(v,t,m);break;case"selectionchange":if(np)break;case"keydown":case"keyup":Xs(v,t,m)}var k;if(Wo)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else tt?Ru(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(Fu&&t.locale!=="ko"&&(tt||S!=="onCompositionStart"?S==="onCompositionEnd"&&tt&&(k=Mu()):(wn=m,Uo="value"in wn?wn.value:wn.textContent,tt=!0)),_=gr(f,S),0<_.length&&(S=new Vs(S,e,null,t,m),v.push({event:S,listeners:_}),k?S.data=k:(k=Iu(t),k!==null&&(S.data=k)))),(k=Vf?Hf(e,t):Wf(e,t))&&(f=gr(f,"onBeforeInput"),0<f.length&&(m=new Vs("onBeforeInput","beforeinput",null,t,m),v.push({event:m,listeners:f}),m.data=k))}Yu(v,n)})}function fi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function gr(e,n){for(var t=n+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=ai(e,t),a!=null&&i.unshift(fi(e,a,r)),a=ai(e,n),a!=null&&i.push(fi(e,a,r))),e=e.return}return i}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nl(e,n,t,i,r){for(var a=n._reactName,o=[];t!==null&&t!==i;){var s=t,u=s.alternate,f=s.stateNode;if(u!==null&&u===i)break;s.tag===5&&f!==null&&(s=f,r?(u=ai(t,a),u!=null&&o.unshift(fi(t,u,s))):r||(u=ai(t,a),u!=null&&o.push(fi(t,u,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var ap=/\r\n?/g,op=/\u0000|\uFFFD/g;function tl(e){return(typeof e=="string"?e:""+e).replace(ap,`
`).replace(op,"")}function Di(e,n,t){if(n=tl(n),tl(e)!==n&&t)throw Error(j(425))}function yr(){}var Ja=null,eo=null;function no(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var to=typeof setTimeout=="function"?setTimeout:void 0,sp=typeof clearTimeout=="function"?clearTimeout:void 0,il=typeof Promise=="function"?Promise:void 0,lp=typeof queueMicrotask=="function"?queueMicrotask:typeof il<"u"?function(e){return il.resolve(null).then(e).catch(up)}:to;function up(e){setTimeout(function(){throw e})}function ya(e,n){var t=n,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){e.removeChild(r),li(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);li(n)}function Sn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function rl(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ct=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Ct,pi="__reactProps$"+Ct,sn="__reactContainer$"+Ct,io="__reactEvents$"+Ct,cp="__reactListeners$"+Ct,dp="__reactHandles$"+Ct;function In(e){var n=e[Ye];if(n)return n;for(var t=e.parentNode;t;){if(n=t[sn]||t[Ye]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=rl(e);e!==null;){if(t=e[Ye])return t;e=rl(e)}return n}e=t,t=e.parentNode}return null}function zi(e){return e=e[Ye]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function at(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Br(e){return e[pi]||null}var ro=[],ot=-1;function Tn(e){return{current:e}}function V(e){0>ot||(e.current=ro[ot],ro[ot]=null,ot--)}function B(e,n){ot++,ro[ot]=e.current,e.current=n}var Nn={},ce=Tn(Nn),we=Tn(!1),Vn=Nn;function wt(e,n){var t=e.type.contextTypes;if(!t)return Nn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in t)r[a]=n[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function _e(e){return e=e.childContextTypes,e!=null}function vr(){V(we),V(ce)}function al(e,n,t){if(ce.current!==Nn)throw Error(j(168));B(ce,n),B(we,t)}function Xu(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(j(108,Gd(e)||"Unknown",r));return Q({},t,i)}function wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Vn=ce.current,B(ce,e),B(we,we.current),!0}function ol(e,n,t){var i=e.stateNode;if(!i)throw Error(j(169));t?(e=Xu(e,n,Vn),i.__reactInternalMemoizedMergedChildContext=e,V(we),V(ce),B(ce,e)):V(we),B(we,t)}var nn=null,Ur=!1,va=!1;function Ju(e){nn===null?nn=[e]:nn.push(e)}function fp(e){Ur=!0,Ju(e)}function On(){if(!va&&nn!==null){va=!0;var e=0,n=D;try{var t=nn;for(D=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}nn=null,Ur=!1}catch(r){throw nn!==null&&(nn=nn.slice(e+1)),Su(Io,On),r}finally{D=n,va=!1}}return null}var st=[],lt=0,_r=null,kr=0,Te=[],Oe=0,Hn=null,tn=1,rn="";function Fn(e,n){st[lt++]=kr,st[lt++]=_r,_r=e,kr=n}function ec(e,n,t){Te[Oe++]=tn,Te[Oe++]=rn,Te[Oe++]=Hn,Hn=e;var i=tn;e=rn;var r=32-He(i)-1;i&=~(1<<r),t+=1;var a=32-He(n)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,tn=1<<32-He(n)+r|t<<r|i,rn=a+e}else tn=1<<a|t<<r|i,rn=e}function Qo(e){e.return!==null&&(Fn(e,1),ec(e,1,0))}function Go(e){for(;e===_r;)_r=st[--lt],st[lt]=null,kr=st[--lt],st[lt]=null;for(;e===Hn;)Hn=Te[--Oe],Te[Oe]=null,rn=Te[--Oe],Te[Oe]=null,tn=Te[--Oe],Te[Oe]=null}var je=null,Se=null,H=!1,Ve=null;function nc(e,n){var t=Le(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function sl(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,je=e,Se=Sn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,je=e,Se=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Hn!==null?{id:tn,overflow:rn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Le(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,je=e,Se=null,!0):!1;default:return!1}}function ao(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oo(e){if(H){var n=Se;if(n){var t=n;if(!sl(e,n)){if(ao(e))throw Error(j(418));n=Sn(t.nextSibling);var i=je;n&&sl(e,n)?nc(i,t):(e.flags=e.flags&-4097|2,H=!1,je=e)}}else{if(ao(e))throw Error(j(418));e.flags=e.flags&-4097|2,H=!1,je=e}}}function ll(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Bi(e){if(e!==je)return!1;if(!H)return ll(e),H=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!no(e.type,e.memoizedProps)),n&&(n=Se)){if(ao(e))throw tc(),Error(j(418));for(;n;)nc(e,n),n=Sn(n.nextSibling)}if(ll(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Se=Sn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Se=null}}else Se=je?Sn(e.stateNode.nextSibling):null;return!0}function tc(){for(var e=Se;e;)e=Sn(e.nextSibling)}function _t(){Se=je=null,H=!1}function Ko(e){Ve===null?Ve=[e]:Ve.push(e)}var pp=cn.ReactCurrentBatchConfig;function Ft(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(j(309));var i=t.stateNode}if(!i)throw Error(j(147,e));var r=i,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var s=r.refs;o===null?delete s[a]:s[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(j(284));if(!t._owner)throw Error(j(290,e))}return e}function Ui(e,n){throw e=Object.prototype.toString.call(n),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ul(e){var n=e._init;return n(e._payload)}function ic(e){function n(p,l){if(e){var c=p.deletions;c===null?(p.deletions=[l],p.flags|=16):c.push(l)}}function t(p,l){if(!e)return null;for(;l!==null;)n(p,l),l=l.sibling;return null}function i(p,l){for(p=new Map;l!==null;)l.key!==null?p.set(l.key,l):p.set(l.index,l),l=l.sibling;return p}function r(p,l){return p=An(p,l),p.index=0,p.sibling=null,p}function a(p,l,c){return p.index=c,e?(c=p.alternate,c!==null?(c=c.index,c<l?(p.flags|=2,l):c):(p.flags|=2,l)):(p.flags|=1048576,l)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,l,c,h){return l===null||l.tag!==6?(l=ja(c,p.mode,h),l.return=p,l):(l=r(l,c),l.return=p,l)}function u(p,l,c,h){var g=c.type;return g===nt?m(p,l,c.props.children,h,c.key):l!==null&&(l.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===mn&&ul(g)===l.type)?(h=r(l,c.props),h.ref=Ft(p,l,c),h.return=p,h):(h=ar(c.type,c.key,c.props,null,p.mode,h),h.ref=Ft(p,l,c),h.return=p,h)}function f(p,l,c,h){return l===null||l.tag!==4||l.stateNode.containerInfo!==c.containerInfo||l.stateNode.implementation!==c.implementation?(l=Ea(c,p.mode,h),l.return=p,l):(l=r(l,c.children||[]),l.return=p,l)}function m(p,l,c,h,g){return l===null||l.tag!==7?(l=Un(c,p.mode,h,g),l.return=p,l):(l=r(l,c),l.return=p,l)}function v(p,l,c){if(typeof l=="string"&&l!==""||typeof l=="number")return l=ja(""+l,p.mode,c),l.return=p,l;if(typeof l=="object"&&l!==null){switch(l.$$typeof){case Pi:return c=ar(l.type,l.key,l.props,null,p.mode,c),c.ref=Ft(p,null,l),c.return=p,c;case et:return l=Ea(l,p.mode,c),l.return=p,l;case mn:var h=l._init;return v(p,h(l._payload),c)}if(Bt(l)||Pt(l))return l=Un(l,p.mode,c,null),l.return=p,l;Ui(p,l)}return null}function y(p,l,c,h){var g=l!==null?l.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return g!==null?null:s(p,l,""+c,h);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Pi:return c.key===g?u(p,l,c,h):null;case et:return c.key===g?f(p,l,c,h):null;case mn:return g=c._init,y(p,l,g(c._payload),h)}if(Bt(c)||Pt(c))return g!==null?null:m(p,l,c,h,null);Ui(p,c)}return null}function E(p,l,c,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return p=p.get(c)||null,s(l,p,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Pi:return p=p.get(h.key===null?c:h.key)||null,u(l,p,h,g);case et:return p=p.get(h.key===null?c:h.key)||null,f(l,p,h,g);case mn:var _=h._init;return E(p,l,c,_(h._payload),g)}if(Bt(h)||Pt(h))return p=p.get(c)||null,m(l,p,h,g,null);Ui(l,h)}return null}function z(p,l,c,h){for(var g=null,_=null,k=l,S=l=0,N=null;k!==null&&S<c.length;S++){k.index>S?(N=k,k=null):N=k.sibling;var T=y(p,k,c[S],h);if(T===null){k===null&&(k=N);break}e&&k&&T.alternate===null&&n(p,k),l=a(T,l,S),_===null?g=T:_.sibling=T,_=T,k=N}if(S===c.length)return t(p,k),H&&Fn(p,S),g;if(k===null){for(;S<c.length;S++)k=v(p,c[S],h),k!==null&&(l=a(k,l,S),_===null?g=k:_.sibling=k,_=k);return H&&Fn(p,S),g}for(k=i(p,k);S<c.length;S++)N=E(k,p,S,c[S],h),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?S:N.key),l=a(N,l,S),_===null?g=N:_.sibling=N,_=N);return e&&k.forEach(function(I){return n(p,I)}),H&&Fn(p,S),g}function w(p,l,c,h){var g=Pt(c);if(typeof g!="function")throw Error(j(150));if(c=g.call(c),c==null)throw Error(j(151));for(var _=g=null,k=l,S=l=0,N=null,T=c.next();k!==null&&!T.done;S++,T=c.next()){k.index>S?(N=k,k=null):N=k.sibling;var I=y(p,k,T.value,h);if(I===null){k===null&&(k=N);break}e&&k&&I.alternate===null&&n(p,k),l=a(I,l,S),_===null?g=I:_.sibling=I,_=I,k=N}if(T.done)return t(p,k),H&&Fn(p,S),g;if(k===null){for(;!T.done;S++,T=c.next())T=v(p,T.value,h),T!==null&&(l=a(T,l,S),_===null?g=T:_.sibling=T,_=T);return H&&Fn(p,S),g}for(k=i(p,k);!T.done;S++,T=c.next())T=E(k,p,S,T.value,h),T!==null&&(e&&T.alternate!==null&&k.delete(T.key===null?S:T.key),l=a(T,l,S),_===null?g=T:_.sibling=T,_=T);return e&&k.forEach(function(ne){return n(p,ne)}),H&&Fn(p,S),g}function b(p,l,c,h){if(typeof c=="object"&&c!==null&&c.type===nt&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Pi:e:{for(var g=c.key,_=l;_!==null;){if(_.key===g){if(g=c.type,g===nt){if(_.tag===7){t(p,_.sibling),l=r(_,c.props.children),l.return=p,p=l;break e}}else if(_.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===mn&&ul(g)===_.type){t(p,_.sibling),l=r(_,c.props),l.ref=Ft(p,_,c),l.return=p,p=l;break e}t(p,_);break}else n(p,_);_=_.sibling}c.type===nt?(l=Un(c.props.children,p.mode,h,c.key),l.return=p,p=l):(h=ar(c.type,c.key,c.props,null,p.mode,h),h.ref=Ft(p,l,c),h.return=p,p=h)}return o(p);case et:e:{for(_=c.key;l!==null;){if(l.key===_)if(l.tag===4&&l.stateNode.containerInfo===c.containerInfo&&l.stateNode.implementation===c.implementation){t(p,l.sibling),l=r(l,c.children||[]),l.return=p,p=l;break e}else{t(p,l);break}else n(p,l);l=l.sibling}l=Ea(c,p.mode,h),l.return=p,p=l}return o(p);case mn:return _=c._init,b(p,l,_(c._payload),h)}if(Bt(c))return z(p,l,c,h);if(Pt(c))return w(p,l,c,h);Ui(p,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,l!==null&&l.tag===6?(t(p,l.sibling),l=r(l,c),l.return=p,p=l):(t(p,l),l=ja(c,p.mode,h),l.return=p,p=l),o(p)):t(p,l)}return b}var kt=ic(!0),rc=ic(!1),xr=Tn(null),br=null,ut=null,Yo=null;function Zo(){Yo=ut=br=null}function Xo(e){var n=xr.current;V(xr),e._currentValue=n}function so(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function gt(e,n){br=e,Yo=ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ve=!0),e.firstContext=null)}function Fe(e){var n=e._currentValue;if(Yo!==e)if(e={context:e,memoizedValue:n,next:null},ut===null){if(br===null)throw Error(j(308));ut=e,br.dependencies={lanes:0,firstContext:e}}else ut=ut.next=e;return n}var $n=null;function Jo(e){$n===null?$n=[e]:$n.push(e)}function ac(e,n,t,i){var r=n.interleaved;return r===null?(t.next=t,Jo(n)):(t.next=r.next,r.next=t),n.interleaved=t,ln(e,i)}function ln(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var gn=!1;function es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function an(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function jn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,F&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,ln(e,t)}return r=i.interleaved,r===null?(n.next=n,Jo(i)):(n.next=r.next,r.next=n),i.interleaved=n,ln(e,t)}function Ji(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,$o(e,t)}}function cl(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?r=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Sr(e,n,t,i){var r=e.updateQueue;gn=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var u=s,f=u.next;u.next=null,o===null?a=f:o.next=f,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=f:s.next=f,m.lastBaseUpdate=u))}if(a!==null){var v=r.baseState;o=0,m=f=u=null,s=a;do{var y=s.lane,E=s.eventTime;if((i&y)===y){m!==null&&(m=m.next={eventTime:E,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var z=e,w=s;switch(y=n,E=t,w.tag){case 1:if(z=w.payload,typeof z=="function"){v=z.call(E,v,y);break e}v=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=w.payload,y=typeof z=="function"?z.call(E,v,y):z,y==null)break e;v=Q({},v,y);break e;case 2:gn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=r.effects,y===null?r.effects=[s]:y.push(s))}else E={eventTime:E,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(f=m=E,u=v):m=m.next=E,o|=y;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;y=s,s=y.next,y.next=null,r.lastBaseUpdate=y,r.shared.pending=null}}while(!0);if(m===null&&(u=v),r.baseState=u,r.firstBaseUpdate=f,r.lastBaseUpdate=m,n=r.shared.interleaved,n!==null){r=n;do o|=r.lane,r=r.next;while(r!==n)}else a===null&&(r.shared.lanes=0);qn|=o,e.lanes=o,e.memoizedState=v}}function dl(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(j(191,r));r.call(i)}}}var Ai={},Xe=Tn(Ai),hi=Tn(Ai),mi=Tn(Ai);function Dn(e){if(e===Ai)throw Error(j(174));return e}function ns(e,n){switch(B(mi,n),B(hi,e),B(Xe,Ai),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ba(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ba(n,e)}V(Xe),B(Xe,n)}function xt(){V(Xe),V(hi),V(mi)}function sc(e){Dn(mi.current);var n=Dn(Xe.current),t=Ba(n,e.type);n!==t&&(B(hi,e),B(Xe,t))}function ts(e){hi.current===e&&(V(Xe),V(hi))}var W=Tn(0);function jr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wa=[];function is(){for(var e=0;e<wa.length;e++)wa[e]._workInProgressVersionPrimary=null;wa.length=0}var er=cn.ReactCurrentDispatcher,_a=cn.ReactCurrentBatchConfig,Wn=0,q=null,J=null,te=null,Er=!1,Xt=!1,gi=0,hp=0;function se(){throw Error(j(321))}function rs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!qe(e[t],n[t]))return!1;return!0}function as(e,n,t,i,r,a){if(Wn=a,q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,er.current=e===null||e.memoizedState===null?vp:wp,e=t(i,r),Xt){a=0;do{if(Xt=!1,gi=0,25<=a)throw Error(j(301));a+=1,te=J=null,n.updateQueue=null,er.current=_p,e=t(i,r)}while(Xt)}if(er.current=zr,n=J!==null&&J.next!==null,Wn=0,te=J=q=null,Er=!1,n)throw Error(j(300));return e}function os(){var e=gi!==0;return gi=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return te===null?q.memoizedState=te=e:te=te.next=e,te}function Re(){if(J===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var n=te===null?q.memoizedState:te.next;if(n!==null)te=n,J=e;else{if(e===null)throw Error(j(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},te===null?q.memoizedState=te=e:te=te.next=e}return te}function yi(e,n){return typeof n=="function"?n(e):n}function ka(e){var n=Re(),t=n.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var i=J,r=i.baseQueue,a=t.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,t.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,u=null,f=a;do{var m=f.lane;if((Wn&m)===m)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),i=f.hasEagerState?f.eagerState:e(i,f.action);else{var v={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=v,o=i):u=u.next=v,q.lanes|=m,qn|=m}f=f.next}while(f!==null&&f!==a);u===null?o=i:u.next=s,qe(i,n.memoizedState)||(ve=!0),n.memoizedState=i,n.baseState=o,n.baseQueue=u,t.lastRenderedState=i}if(e=t.interleaved,e!==null){r=e;do a=r.lane,q.lanes|=a,qn|=a,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xa(e){var n=Re(),t=n.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var i=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);qe(a,n.memoizedState)||(ve=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,i]}function lc(){}function uc(e,n){var t=q,i=Re(),r=n(),a=!qe(i.memoizedState,r);if(a&&(i.memoizedState=r,ve=!0),i=i.queue,ss(fc.bind(null,t,i,e),[e]),i.getSnapshot!==n||a||te!==null&&te.memoizedState.tag&1){if(t.flags|=2048,vi(9,dc.bind(null,t,i,r,n),void 0,null),ie===null)throw Error(j(349));Wn&30||cc(t,n,r)}return r}function cc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function dc(e,n,t,i){n.value=t,n.getSnapshot=i,pc(n)&&hc(e)}function fc(e,n,t){return t(function(){pc(n)&&hc(e)})}function pc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!qe(e,t)}catch{return!0}}function hc(e){var n=ln(e,1);n!==null&&We(n,e,1,-1)}function fl(e){var n=Ke();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},n.queue=e,e=e.dispatch=yp.bind(null,q,e),[n.memoizedState,e]}function vi(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function mc(){return Re().memoizedState}function nr(e,n,t,i){var r=Ke();q.flags|=e,r.memoizedState=vi(1|n,t,void 0,i===void 0?null:i)}function Vr(e,n,t,i){var r=Re();i=i===void 0?null:i;var a=void 0;if(J!==null){var o=J.memoizedState;if(a=o.destroy,i!==null&&rs(i,o.deps)){r.memoizedState=vi(n,t,a,i);return}}q.flags|=e,r.memoizedState=vi(1|n,t,a,i)}function pl(e,n){return nr(8390656,8,e,n)}function ss(e,n){return Vr(2048,8,e,n)}function gc(e,n){return Vr(4,2,e,n)}function yc(e,n){return Vr(4,4,e,n)}function vc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function wc(e,n,t){return t=t!=null?t.concat([e]):null,Vr(4,4,vc.bind(null,n,e),t)}function ls(){}function _c(e,n){var t=Re();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&rs(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function kc(e,n){var t=Re();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&rs(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function xc(e,n,t){return Wn&21?(qe(t,n)||(t=zu(),q.lanes|=t,qn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=t)}function mp(e,n){var t=D;D=t!==0&&4>t?t:4,e(!0);var i=_a.transition;_a.transition={};try{e(!1),n()}finally{D=t,_a.transition=i}}function bc(){return Re().memoizedState}function gp(e,n,t){var i=zn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Sc(e))jc(n,t);else if(t=ac(e,n,t,i),t!==null){var r=fe();We(t,e,i,r),Ec(t,n,i)}}function yp(e,n,t){var i=zn(e),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))jc(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,s=a(o,t);if(r.hasEagerState=!0,r.eagerState=s,qe(s,o)){var u=n.interleaved;u===null?(r.next=r,Jo(n)):(r.next=u.next,u.next=r),n.interleaved=r;return}}catch{}finally{}t=ac(e,n,r,i),t!==null&&(r=fe(),We(t,e,i,r),Ec(t,n,i))}}function Sc(e){var n=e.alternate;return e===q||n!==null&&n===q}function jc(e,n){Xt=Er=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ec(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,$o(e,t)}}var zr={readContext:Fe,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},vp={readContext:Fe,useCallback:function(e,n){return Ke().memoizedState=[e,n===void 0?null:n],e},useContext:Fe,useEffect:pl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,nr(4194308,4,vc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return nr(4194308,4,e,n)},useInsertionEffect:function(e,n){return nr(4,2,e,n)},useMemo:function(e,n){var t=Ke();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=Ke();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=gp.bind(null,q,e),[i.memoizedState,e]},useRef:function(e){var n=Ke();return e={current:e},n.memoizedState=e},useState:fl,useDebugValue:ls,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=fl(!1),n=e[0];return e=mp.bind(null,e[1]),Ke().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=q,r=Ke();if(H){if(t===void 0)throw Error(j(407));t=t()}else{if(t=n(),ie===null)throw Error(j(349));Wn&30||cc(i,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,pl(fc.bind(null,i,a,e),[e]),i.flags|=2048,vi(9,dc.bind(null,i,a,t,n),void 0,null),t},useId:function(){var e=Ke(),n=ie.identifierPrefix;if(H){var t=rn,i=tn;t=(i&~(1<<32-He(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=gi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=hp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},wp={readContext:Fe,useCallback:_c,useContext:Fe,useEffect:ss,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:yc,useMemo:kc,useReducer:ka,useRef:mc,useState:function(){return ka(yi)},useDebugValue:ls,useDeferredValue:function(e){var n=Re();return xc(n,J.memoizedState,e)},useTransition:function(){var e=ka(yi)[0],n=Re().memoizedState;return[e,n]},useMutableSource:lc,useSyncExternalStore:uc,useId:bc,unstable_isNewReconciler:!1},_p={readContext:Fe,useCallback:_c,useContext:Fe,useEffect:ss,useImperativeHandle:wc,useInsertionEffect:gc,useLayoutEffect:yc,useMemo:kc,useReducer:xa,useRef:mc,useState:function(){return xa(yi)},useDebugValue:ls,useDeferredValue:function(e){var n=Re();return J===null?n.memoizedState=e:xc(n,J.memoizedState,e)},useTransition:function(){var e=xa(yi)[0],n=Re().memoizedState;return[e,n]},useMutableSource:lc,useSyncExternalStore:uc,useId:bc,unstable_isNewReconciler:!1};function Be(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function lo(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Hr={isMounted:function(e){return(e=e._reactInternals)?Yn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=fe(),r=zn(e),a=an(i,r);a.payload=n,t!=null&&(a.callback=t),n=jn(e,a,r),n!==null&&(We(n,e,r,i),Ji(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=fe(),r=zn(e),a=an(i,r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=jn(e,a,r),n!==null&&(We(n,e,r,i),Ji(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=fe(),i=zn(e),r=an(t,i);r.tag=2,n!=null&&(r.callback=n),n=jn(e,r,i),n!==null&&(We(n,e,i,t),Ji(n,e,i))}};function hl(e,n,t,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):n.prototype&&n.prototype.isPureReactComponent?!ci(t,i)||!ci(r,a):!0}function zc(e,n,t){var i=!1,r=Nn,a=n.contextType;return typeof a=="object"&&a!==null?a=Fe(a):(r=_e(n)?Vn:ce.current,i=n.contextTypes,a=(i=i!=null)?wt(e,r):Nn),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Hr,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),n}function ml(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Hr.enqueueReplaceState(n,n.state,null)}function uo(e,n,t,i){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},es(e);var a=n.contextType;typeof a=="object"&&a!==null?r.context=Fe(a):(a=_e(n)?Vn:ce.current,r.context=wt(e,a)),r.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(lo(e,n,a,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Hr.enqueueReplaceState(r,r.state,null),Sr(e,t,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function bt(e,n){try{var t="",i=n;do t+=Qd(i),i=i.return;while(i);var r=t}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:r,digest:null}}function ba(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function co(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var kp=typeof WeakMap=="function"?WeakMap:Map;function Ac(e,n,t){t=an(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){Cr||(Cr=!0,ko=i),co(e,n)},t}function Cc(e,n,t){t=an(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){co(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){co(e,n),typeof i!="function"&&(En===null?En=new Set([this]):En.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function gl(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new kp;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(t)||(r.add(t),e=Mp.bind(null,e,n,t),n.then(e,e))}function yl(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function vl(e,n,t,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=an(-1,1),n.tag=2,jn(t,n,1))),t.lanes|=1),e)}var xp=cn.ReactCurrentOwner,ve=!1;function de(e,n,t,i){n.child=e===null?rc(n,null,t,i):kt(n,e.child,t,i)}function wl(e,n,t,i,r){t=t.render;var a=n.ref;return gt(n,r),i=as(e,n,t,i,a,r),t=os(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,un(e,n,r)):(H&&t&&Qo(n),n.flags|=1,de(e,n,i,r),n.child)}function _l(e,n,t,i,r){if(e===null){var a=t.type;return typeof a=="function"&&!gs(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,Nc(e,n,a,i,r)):(e=ar(t.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&r)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:ci,t(o,i)&&e.ref===n.ref)return un(e,n,r)}return n.flags|=1,e=An(a,i),e.ref=n.ref,e.return=n,n.child=e}function Nc(e,n,t,i,r){if(e!==null){var a=e.memoizedProps;if(ci(a,i)&&e.ref===n.ref)if(ve=!1,n.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(ve=!0);else return n.lanes=e.lanes,un(e,n,r)}return fo(e,n,t,i,r)}function Pc(e,n,t){var i=n.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(dt,be),be|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(dt,be),be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:t,B(dt,be),be|=i}else a!==null?(i=a.baseLanes|t,n.memoizedState=null):i=t,B(dt,be),be|=i;return de(e,n,r,t),n.child}function Tc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function fo(e,n,t,i,r){var a=_e(t)?Vn:ce.current;return a=wt(n,a),gt(n,r),t=as(e,n,t,i,a,r),i=os(),e!==null&&!ve?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,un(e,n,r)):(H&&i&&Qo(n),n.flags|=1,de(e,n,t,r),n.child)}function kl(e,n,t,i,r){if(_e(t)){var a=!0;wr(n)}else a=!1;if(gt(n,r),n.stateNode===null)tr(e,n),zc(n,t,i),uo(n,t,i,r),i=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var u=o.context,f=t.contextType;typeof f=="object"&&f!==null?f=Fe(f):(f=_e(t)?Vn:ce.current,f=wt(n,f));var m=t.getDerivedStateFromProps,v=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||u!==f)&&ml(n,o,i,f),gn=!1;var y=n.memoizedState;o.state=y,Sr(n,i,o,r),u=n.memoizedState,s!==i||y!==u||we.current||gn?(typeof m=="function"&&(lo(n,t,m,i),u=n.memoizedState),(s=gn||hl(n,t,s,i,y,u,f))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=u),o.props=i,o.state=u,o.context=f,i=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{o=n.stateNode,oc(e,n),s=n.memoizedProps,f=n.type===n.elementType?s:Be(n.type,s),o.props=f,v=n.pendingProps,y=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Fe(u):(u=_e(t)?Vn:ce.current,u=wt(n,u));var E=t.getDerivedStateFromProps;(m=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==v||y!==u)&&ml(n,o,i,u),gn=!1,y=n.memoizedState,o.state=y,Sr(n,i,o,r);var z=n.memoizedState;s!==v||y!==z||we.current||gn?(typeof E=="function"&&(lo(n,t,E,i),z=n.memoizedState),(f=gn||hl(n,t,f,i,y,z,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,z,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,z,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=z),o.props=i,o.state=z,o.context=u,i=f):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(n.flags|=1024),i=!1)}return po(e,n,t,i,a,r)}function po(e,n,t,i,r,a){Tc(e,n);var o=(n.flags&128)!==0;if(!i&&!o)return r&&ol(n,t,!1),un(e,n,a);i=n.stateNode,xp.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&o?(n.child=kt(n,e.child,null,a),n.child=kt(n,null,s,a)):de(e,n,s,a),n.memoizedState=i.state,r&&ol(n,t,!0),n.child}function Oc(e){var n=e.stateNode;n.pendingContext?al(e,n.pendingContext,n.pendingContext!==n.context):n.context&&al(e,n.context,!1),ns(e,n.containerInfo)}function xl(e,n,t,i,r){return _t(),Ko(r),n.flags|=256,de(e,n,t,i),n.child}var ho={dehydrated:null,treeContext:null,retryLane:0};function mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lc(e,n,t){var i=n.pendingProps,r=W.current,a=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),B(W,r&1),e===null)return oo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=i.children,e=i.fallback,a?(i=n.mode,a=n.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Qr(o,i,0,null),e=Un(e,i,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=mo(t),n.memoizedState=ho,e):us(n,o));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return bp(e,n,o,i,s,r,t);if(a){a=i.fallback,o=n.mode,r=e.child,s=r.sibling;var u={mode:"hidden",children:i.children};return!(o&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=u,n.deletions=null):(i=An(r,u),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=An(s,a):(a=Un(a,o,t,null),a.flags|=2),a.return=n,i.return=n,i.sibling=a,n.child=i,i=a,a=n.child,o=e.child.memoizedState,o=o===null?mo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~t,n.memoizedState=ho,i}return a=e.child,e=a.sibling,i=An(a,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function us(e,n){return n=Qr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Vi(e,n,t,i){return i!==null&&Ko(i),kt(n,e.child,null,t),e=us(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bp(e,n,t,i,r,a,o){if(t)return n.flags&256?(n.flags&=-257,i=ba(Error(j(422))),Vi(e,n,o,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=i.fallback,r=n.mode,i=Qr({mode:"visible",children:i.children},r,0,null),a=Un(a,r,o,null),a.flags|=2,i.return=n,a.return=n,i.sibling=a,n.child=i,n.mode&1&&kt(n,e.child,null,o),n.child.memoizedState=mo(o),n.memoizedState=ho,a);if(!(n.mode&1))return Vi(e,n,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(j(419)),i=ba(a,i,void 0),Vi(e,n,o,i)}if(s=(o&e.childLanes)!==0,ve||s){if(i=ie,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,ln(e,r),We(i,e,r,-1))}return ms(),i=ba(Error(j(421))),Vi(e,n,o,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Fp.bind(null,e),r._reactRetry=n,null):(e=a.treeContext,Se=Sn(r.nextSibling),je=n,H=!0,Ve=null,e!==null&&(Te[Oe++]=tn,Te[Oe++]=rn,Te[Oe++]=Hn,tn=e.id,rn=e.overflow,Hn=n),n=us(n,i.children),n.flags|=4096,n)}function bl(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),so(e.return,n,t)}function Sa(e,n,t,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=t,a.tailMode=r)}function Mc(e,n,t){var i=n.pendingProps,r=i.revealOrder,a=i.tail;if(de(e,n,i.children,t),i=W.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bl(e,t,n);else if(e.tag===19)bl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(B(W,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&jr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Sa(n,!1,r,t,a);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&jr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Sa(n,!0,t,null,a);break;case"together":Sa(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function tr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),qn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(j(153));if(n.child!==null){for(e=n.child,t=An(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=An(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Sp(e,n,t){switch(n.tag){case 3:Oc(n),_t();break;case 5:sc(n);break;case 1:_e(n.type)&&wr(n);break;case 4:ns(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;B(xr,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(B(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?Lc(e,n,t):(B(W,W.current&1),e=un(e,n,t),e!==null?e.sibling:null);B(W,W.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return Mc(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),B(W,W.current),i)break;return null;case 22:case 23:return n.lanes=0,Pc(e,n,t)}return un(e,n,t)}var Fc,go,Rc,Ic;Fc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};go=function(){};Rc=function(e,n,t,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,Dn(Xe.current);var a=null;switch(t){case"input":r=Ra(e,r),i=Ra(e,i),a=[];break;case"select":r=Q({},r,{value:void 0}),i=Q({},i,{value:void 0}),a=[];break;case"textarea":r=Da(e,r),i=Da(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=yr)}Ua(t,i);var o;t=null;for(f in r)if(!i.hasOwnProperty(f)&&r.hasOwnProperty(f)&&r[f]!=null)if(f==="style"){var s=r[f];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ii.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in i){var u=i[f];if(s=r?.[f],i.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(a||(a=[]),a.push(f,t)),t=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(ii.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&U("scroll",e),a||s===u||(a=[])):(a=a||[]).push(f,u))}t&&(a=a||[]).push("style",t);var f=a;(n.updateQueue=f)&&(n.flags|=4)}};Ic=function(e,n,t,i){t!==i&&(n.flags|=4)};function Rt(e,n){if(!H)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function jp(e,n,t){var i=n.pendingProps;switch(Go(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(n),null;case 1:return _e(n.type)&&vr(),le(n),null;case 3:return i=n.stateNode,xt(),V(we),V(ce),is(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Bi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ve!==null&&(So(Ve),Ve=null))),go(e,n),le(n),null;case 5:ts(n);var r=Dn(mi.current);if(t=n.type,e!==null&&n.stateNode!=null)Rc(e,n,t,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(j(166));return le(n),null}if(e=Dn(Xe.current),Bi(n)){i=n.stateNode,t=n.type;var a=n.memoizedProps;switch(i[Ye]=n,i[pi]=a,e=(n.mode&1)!==0,t){case"dialog":U("cancel",i),U("close",i);break;case"iframe":case"object":case"embed":U("load",i);break;case"video":case"audio":for(r=0;r<Vt.length;r++)U(Vt[r],i);break;case"source":U("error",i);break;case"img":case"image":case"link":U("error",i),U("load",i);break;case"details":U("toggle",i);break;case"input":Ts(i,a),U("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},U("invalid",i);break;case"textarea":Ls(i,a),U("invalid",i)}Ua(t,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&Di(i.textContent,s,e),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Di(i.textContent,s,e),r=["children",""+s]):ii.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&U("scroll",i)}switch(t){case"input":Ti(i),Os(i,a,!0);break;case"textarea":Ti(i),Ms(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=yr)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(t,{is:i.is}):(e=o.createElement(t),t==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,t),e[Ye]=n,e[pi]=i,Fc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Va(t,i),t){case"dialog":U("cancel",e),U("close",e),r=i;break;case"iframe":case"object":case"embed":U("load",e),r=i;break;case"video":case"audio":for(r=0;r<Vt.length;r++)U(Vt[r],e);r=i;break;case"source":U("error",e),r=i;break;case"img":case"image":case"link":U("error",e),U("load",e),r=i;break;case"details":U("toggle",e),r=i;break;case"input":Ts(e,i),r=Ra(e,i),U("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=Q({},i,{value:void 0}),U("invalid",e);break;case"textarea":Ls(e,i),r=Da(e,i),U("invalid",e);break;default:r=i}Ua(t,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?mu(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pu(e,u)):a==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ri(e,u):typeof u=="number"&&ri(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ii.hasOwnProperty(a)?u!=null&&a==="onScroll"&&U("scroll",e):u!=null&&Oo(e,a,u,o))}switch(t){case"input":Ti(e),Os(e,i,!1);break;case"textarea":Ti(e),Ms(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Cn(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?ft(e,!!i.multiple,a,!1):i.defaultValue!=null&&ft(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=yr)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return le(n),null;case 6:if(e&&n.stateNode!=null)Ic(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(j(166));if(t=Dn(mi.current),Dn(Xe.current),Bi(n)){if(i=n.stateNode,t=n.memoizedProps,i[Ye]=n,(a=i.nodeValue!==t)&&(e=je,e!==null))switch(e.tag){case 3:Di(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(i.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ye]=n,n.stateNode=i}return le(n),null;case 13:if(V(W),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Se!==null&&n.mode&1&&!(n.flags&128))tc(),_t(),n.flags|=98560,a=!1;else if(a=Bi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(j(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(j(317));a[Ye]=n}else _t(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;le(n),a=!1}else Ve!==null&&(So(Ve),Ve=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?ee===0&&(ee=3):ms())),n.updateQueue!==null&&(n.flags|=4),le(n),null);case 4:return xt(),go(e,n),e===null&&di(n.stateNode.containerInfo),le(n),null;case 10:return Xo(n.type._context),le(n),null;case 17:return _e(n.type)&&vr(),le(n),null;case 19:if(V(W),a=n.memoizedState,a===null)return le(n),null;if(i=(n.flags&128)!==0,o=a.rendering,o===null)if(i)Rt(a,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=jr(e),o!==null){for(n.flags|=128,Rt(a,!1),i=o.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)a=t,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(W,W.current&1|2),n.child}e=e.sibling}a.tail!==null&&Y()>St&&(n.flags|=128,i=!0,Rt(a,!1),n.lanes=4194304)}else{if(!i)if(e=jr(o),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Rt(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!H)return le(n),null}else 2*Y()-a.renderingStartTime>St&&t!==1073741824&&(n.flags|=128,i=!0,Rt(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(t=a.last,t!==null?t.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Y(),n.sibling=null,t=W.current,B(W,i?t&1|2:t&1),n):(le(n),null);case 22:case 23:return hs(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?be&1073741824&&(le(n),n.subtreeFlags&6&&(n.flags|=8192)):le(n),null;case 24:return null;case 25:return null}throw Error(j(156,n.tag))}function Ep(e,n){switch(Go(n),n.tag){case 1:return _e(n.type)&&vr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return xt(),V(we),V(ce),is(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ts(n),null;case 13:if(V(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(j(340));_t()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(W),null;case 4:return xt(),null;case 10:return Xo(n.type._context),null;case 22:case 23:return hs(),null;case 24:return null;default:return null}}var Hi=!1,ue=!1,zp=typeof WeakSet=="function"?WeakSet:Set,P=null;function ct(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){K(e,n,i)}else t.current=null}function yo(e,n,t){try{t()}catch(i){K(e,n,i)}}var Sl=!1;function Ap(e,n){if(Ja=hr,e=Vu(),qo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,s=-1,u=-1,f=0,m=0,v=e,y=null;n:for(;;){for(var E;v!==t||r!==0&&v.nodeType!==3||(s=o+r),v!==a||i!==0&&v.nodeType!==3||(u=o+i),v.nodeType===3&&(o+=v.nodeValue.length),(E=v.firstChild)!==null;)y=v,v=E;for(;;){if(v===e)break n;if(y===t&&++f===r&&(s=o),y===a&&++m===i&&(u=o),(E=v.nextSibling)!==null)break;v=y,y=v.parentNode}v=E}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(eo={focusedElem:e,selectionRange:t},hr=!1,P=n;P!==null;)if(n=P,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,P=e;else for(;P!==null;){n=P;try{var z=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var w=z.memoizedProps,b=z.memoizedState,p=n.stateNode,l=p.getSnapshotBeforeUpdate(n.elementType===n.type?w:Be(n.type,w),b);p.__reactInternalSnapshotBeforeUpdate=l}break;case 3:var c=n.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(h){K(n,n.return,h)}if(e=n.sibling,e!==null){e.return=n.return,P=e;break}P=n.return}return z=Sl,Sl=!1,z}function Jt(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&yo(n,t,a)}r=r.next}while(r!==i)}}function Wr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function vo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function $c(e){var n=e.alternate;n!==null&&(e.alternate=null,$c(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ye],delete n[pi],delete n[io],delete n[cp],delete n[dp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function jl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wo(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=yr));else if(i!==4&&(e=e.child,e!==null))for(wo(e,n,t),e=e.sibling;e!==null;)wo(e,n,t),e=e.sibling}function _o(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(_o(e,n,t),e=e.sibling;e!==null;)_o(e,n,t),e=e.sibling}var re=null,Ue=!1;function fn(e,n,t){for(t=t.child;t!==null;)Bc(e,n,t),t=t.sibling}function Bc(e,n,t){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Rr,t)}catch{}switch(t.tag){case 5:ue||ct(t,n);case 6:var i=re,r=Ue;re=null,fn(e,n,t),re=i,Ue=r,re!==null&&(Ue?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(Ue?(e=re,t=t.stateNode,e.nodeType===8?ya(e.parentNode,t):e.nodeType===1&&ya(e,t),li(e)):ya(re,t.stateNode));break;case 4:i=re,r=Ue,re=t.stateNode.containerInfo,Ue=!0,fn(e,n,t),re=i,Ue=r;break;case 0:case 11:case 14:case 15:if(!ue&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&yo(t,n,o),r=r.next}while(r!==i)}fn(e,n,t);break;case 1:if(!ue&&(ct(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(s){K(t,n,s)}fn(e,n,t);break;case 21:fn(e,n,t);break;case 22:t.mode&1?(ue=(i=ue)||t.memoizedState!==null,fn(e,n,t),ue=i):fn(e,n,t);break;default:fn(e,n,t)}}function El(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new zp),n.forEach(function(i){var r=Rp.bind(null,e,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ie(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var a=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Ue=!1;break e;case 3:re=s.stateNode.containerInfo,Ue=!0;break e;case 4:re=s.stateNode.containerInfo,Ue=!0;break e}s=s.return}if(re===null)throw Error(j(160));Bc(a,o,r),re=null,Ue=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(f){K(r,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Uc(n,e),n=n.sibling}function Uc(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(n,e),Qe(e),i&4){try{Jt(3,e,e.return),Wr(3,e)}catch(w){K(e,e.return,w)}try{Jt(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:Ie(n,e),Qe(e),i&512&&t!==null&&ct(t,t.return);break;case 5:if(Ie(n,e),Qe(e),i&512&&t!==null&&ct(t,t.return),e.flags&32){var r=e.stateNode;try{ri(r,"")}catch(w){K(e,e.return,w)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,o=t!==null?t.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&cu(r,a),Va(s,o);var f=Va(s,a);for(o=0;o<u.length;o+=2){var m=u[o],v=u[o+1];m==="style"?mu(r,v):m==="dangerouslySetInnerHTML"?pu(r,v):m==="children"?ri(r,v):Oo(r,m,v,f)}switch(s){case"input":Ia(r,a);break;case"textarea":du(r,a);break;case"select":var y=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var E=a.value;E!=null?ft(r,!!a.multiple,E,!1):y!==!!a.multiple&&(a.defaultValue!=null?ft(r,!!a.multiple,a.defaultValue,!0):ft(r,!!a.multiple,a.multiple?[]:"",!1))}r[pi]=a}catch(w){K(e,e.return,w)}}break;case 6:if(Ie(n,e),Qe(e),i&4){if(e.stateNode===null)throw Error(j(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(w){K(e,e.return,w)}}break;case 3:if(Ie(n,e),Qe(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{li(n.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:Ie(n,e),Qe(e);break;case 13:Ie(n,e),Qe(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(fs=Y())),i&4&&El(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(ue=(f=ue)||m,Ie(n,e),ue=f):Ie(n,e),Qe(e),i&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(v=P=m;P!==null;){switch(y=P,E=y.child,y.tag){case 0:case 11:case 14:case 15:Jt(4,y,y.return);break;case 1:ct(y,y.return);var z=y.stateNode;if(typeof z.componentWillUnmount=="function"){i=y,t=y.return;try{n=i,z.props=n.memoizedProps,z.state=n.memoizedState,z.componentWillUnmount()}catch(w){K(i,t,w)}}break;case 5:ct(y,y.return);break;case 22:if(y.memoizedState!==null){Al(v);continue}}E!==null?(E.return=y,P=E):Al(v)}m=m.sibling}e:for(m=null,v=e;;){if(v.tag===5){if(m===null){m=v;try{r=v.stateNode,f?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=v.stateNode,u=v.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=hu("display",o))}catch(w){K(e,e.return,w)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=f?"":v.memoizedProps}catch(w){K(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ie(n,e),Qe(e),i&4&&El(e);break;case 21:break;default:Ie(n,e),Qe(e)}}function Qe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Dc(t)){var i=t;break e}t=t.return}throw Error(j(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ri(r,""),i.flags&=-33);var a=jl(e);_o(e,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=jl(e);wo(e,s,o);break;default:throw Error(j(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cp(e,n,t){P=e,Vc(e)}function Vc(e,n,t){for(var i=(e.mode&1)!==0;P!==null;){var r=P,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Hi;if(!o){var s=r.alternate,u=s!==null&&s.memoizedState!==null||ue;s=Hi;var f=ue;if(Hi=o,(ue=u)&&!f)for(P=r;P!==null;)o=P,u=o.child,o.tag===22&&o.memoizedState!==null?Cl(r):u!==null?(u.return=o,P=u):Cl(r);for(;a!==null;)P=a,Vc(a),a=a.sibling;P=r,Hi=s,ue=f}zl(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,P=a):zl(e)}}function zl(e){for(;P!==null;){var n=P;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ue||Wr(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!ue)if(t===null)i.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Be(n.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&dl(n,a,i);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}dl(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&li(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ue||n.flags&512&&vo(n)}catch(y){K(n,n.return,y)}}if(n===e){P=null;break}if(t=n.sibling,t!==null){t.return=n.return,P=t;break}P=n.return}}function Al(e){for(;P!==null;){var n=P;if(n===e){P=null;break}var t=n.sibling;if(t!==null){t.return=n.return,P=t;break}P=n.return}}function Cl(e){for(;P!==null;){var n=P;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Wr(4,n)}catch(u){K(n,t,u)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(u){K(n,r,u)}}var a=n.return;try{vo(n)}catch(u){K(n,a,u)}break;case 5:var o=n.return;try{vo(n)}catch(u){K(n,o,u)}}}catch(u){K(n,n.return,u)}if(n===e){P=null;break}var s=n.sibling;if(s!==null){s.return=n.return,P=s;break}P=n.return}}var Np=Math.ceil,Ar=cn.ReactCurrentDispatcher,cs=cn.ReactCurrentOwner,Me=cn.ReactCurrentBatchConfig,F=0,ie=null,Z=null,ae=0,be=0,dt=Tn(0),ee=0,wi=null,qn=0,qr=0,ds=0,ei=null,ye=null,fs=0,St=1/0,en=null,Cr=!1,ko=null,En=null,Wi=!1,_n=null,Nr=0,ni=0,xo=null,ir=-1,rr=0;function fe(){return F&6?Y():ir!==-1?ir:ir=Y()}function zn(e){return e.mode&1?F&2&&ae!==0?ae&-ae:pp.transition!==null?(rr===0&&(rr=zu()),rr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Lu(e.type)),e):1}function We(e,n,t,i){if(50<ni)throw ni=0,xo=null,Error(j(185));ji(e,t,i),(!(F&2)||e!==ie)&&(e===ie&&(!(F&2)&&(qr|=t),ee===4&&vn(e,ae)),ke(e,i),t===1&&F===0&&!(n.mode&1)&&(St=Y()+500,Ur&&On()))}function ke(e,n){var t=e.callbackNode;pf(e,n);var i=pr(e,e===ie?ae:0);if(i===0)t!==null&&Is(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&Is(t),n===1)e.tag===0?fp(Nl.bind(null,e)):Ju(Nl.bind(null,e)),lp(function(){!(F&6)&&On()}),t=null;else{switch(Au(i)){case 1:t=Io;break;case 4:t=ju;break;case 16:t=fr;break;case 536870912:t=Eu;break;default:t=fr}t=Zc(t,Hc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Hc(e,n){if(ir=-1,rr=0,F&6)throw Error(j(327));var t=e.callbackNode;if(yt()&&e.callbackNode!==t)return null;var i=pr(e,e===ie?ae:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=Pr(e,i);else{n=i;var r=F;F|=2;var a=qc();(ie!==e||ae!==n)&&(en=null,St=Y()+500,Bn(e,n));do try{Op();break}catch(s){Wc(e,s)}while(!0);Zo(),Ar.current=a,F=r,Z!==null?n=0:(ie=null,ae=0,n=ee)}if(n!==0){if(n===2&&(r=Ga(e),r!==0&&(i=r,n=bo(e,r))),n===1)throw t=wi,Bn(e,0),vn(e,i),ke(e,Y()),t;if(n===6)vn(e,i);else{if(r=e.current.alternate,!(i&30)&&!Pp(r)&&(n=Pr(e,i),n===2&&(a=Ga(e),a!==0&&(i=a,n=bo(e,a))),n===1))throw t=wi,Bn(e,0),vn(e,i),ke(e,Y()),t;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(j(345));case 2:Rn(e,ye,en);break;case 3:if(vn(e,i),(i&130023424)===i&&(n=fs+500-Y(),10<n)){if(pr(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){fe(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=to(Rn.bind(null,e,ye,en),n);break}Rn(e,ye,en);break;case 4:if(vn(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var o=31-He(i);a=1<<o,o=n[o],o>r&&(r=o),i&=~a}if(i=r,i=Y()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Np(i/1960))-i,10<i){e.timeoutHandle=to(Rn.bind(null,e,ye,en),i);break}Rn(e,ye,en);break;case 5:Rn(e,ye,en);break;default:throw Error(j(329))}}}return ke(e,Y()),e.callbackNode===t?Hc.bind(null,e):null}function bo(e,n){var t=ei;return e.current.memoizedState.isDehydrated&&(Bn(e,n).flags|=256),e=Pr(e,n),e!==2&&(n=ye,ye=t,n!==null&&So(n)),e}function So(e){ye===null?ye=e:ye.push.apply(ye,e)}function Pp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],a=r.getSnapshot;r=r.value;try{if(!qe(a(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vn(e,n){for(n&=~ds,n&=~qr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-He(n),i=1<<t;e[t]=-1,n&=~i}}function Nl(e){if(F&6)throw Error(j(327));yt();var n=pr(e,0);if(!(n&1))return ke(e,Y()),null;var t=Pr(e,n);if(e.tag!==0&&t===2){var i=Ga(e);i!==0&&(n=i,t=bo(e,i))}if(t===1)throw t=wi,Bn(e,0),vn(e,n),ke(e,Y()),t;if(t===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rn(e,ye,en),ke(e,Y()),null}function ps(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(St=Y()+500,Ur&&On())}}function Qn(e){_n!==null&&_n.tag===0&&!(F&6)&&yt();var n=F;F|=1;var t=Me.transition,i=D;try{if(Me.transition=null,D=1,e)return e()}finally{D=i,Me.transition=t,F=n,!(F&6)&&On()}}function hs(){be=dt.current,V(dt)}function Bn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,sp(t)),Z!==null)for(t=Z.return;t!==null;){var i=t;switch(Go(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vr();break;case 3:xt(),V(we),V(ce),is();break;case 5:ts(i);break;case 4:xt();break;case 13:V(W);break;case 19:V(W);break;case 10:Xo(i.type._context);break;case 22:case 23:hs()}t=t.return}if(ie=e,Z=e=An(e.current,null),ae=be=n,ee=0,wi=null,ds=qr=qn=0,ye=ei=null,$n!==null){for(n=0;n<$n.length;n++)if(t=$n[n],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,a=t.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}t.pending=i}$n=null}return e}function Wc(e,n){do{var t=Z;try{if(Zo(),er.current=zr,Er){for(var i=q.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Er=!1}if(Wn=0,te=J=q=null,Xt=!1,gi=0,cs.current=null,t===null||t.return===null){ee=1,wi=n,Z=null;break}e:{var a=e,o=t.return,s=t,u=n;if(n=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,m=s,v=m.tag;if(!(m.mode&1)&&(v===0||v===11||v===15)){var y=m.alternate;y?(m.updateQueue=y.updateQueue,m.memoizedState=y.memoizedState,m.lanes=y.lanes):(m.updateQueue=null,m.memoizedState=null)}var E=yl(o);if(E!==null){E.flags&=-257,vl(E,o,s,a,n),E.mode&1&&gl(a,f,n),n=E,u=f;var z=n.updateQueue;if(z===null){var w=new Set;w.add(u),n.updateQueue=w}else z.add(u);break e}else{if(!(n&1)){gl(a,f,n),ms();break e}u=Error(j(426))}}else if(H&&s.mode&1){var b=yl(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),vl(b,o,s,a,n),Ko(bt(u,s));break e}}a=u=bt(u,s),ee!==4&&(ee=2),ei===null?ei=[a]:ei.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var p=Ac(a,u,n);cl(a,p);break e;case 1:s=u;var l=a.type,c=a.stateNode;if(!(a.flags&128)&&(typeof l.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(En===null||!En.has(c)))){a.flags|=65536,n&=-n,a.lanes|=n;var h=Cc(a,s,n);cl(a,h);break e}}a=a.return}while(a!==null)}Gc(t)}catch(g){n=g,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function qc(){var e=Ar.current;return Ar.current=zr,e===null?zr:e}function ms(){(ee===0||ee===3||ee===2)&&(ee=4),ie===null||!(qn&268435455)&&!(qr&268435455)||vn(ie,ae)}function Pr(e,n){var t=F;F|=2;var i=qc();(ie!==e||ae!==n)&&(en=null,Bn(e,n));do try{Tp();break}catch(r){Wc(e,r)}while(!0);if(Zo(),F=t,Ar.current=i,Z!==null)throw Error(j(261));return ie=null,ae=0,ee}function Tp(){for(;Z!==null;)Qc(Z)}function Op(){for(;Z!==null&&!rf();)Qc(Z)}function Qc(e){var n=Yc(e.alternate,e,be);e.memoizedProps=e.pendingProps,n===null?Gc(e):Z=n,cs.current=null}function Gc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ep(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,Z=null;return}}else if(t=jp(t,n,be),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);ee===0&&(ee=5)}function Rn(e,n,t){var i=D,r=Me.transition;try{Me.transition=null,D=1,Lp(e,n,t,i)}finally{Me.transition=r,D=i}return null}function Lp(e,n,t,i){do yt();while(_n!==null);if(F&6)throw Error(j(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(hf(e,a),e===ie&&(Z=ie=null,ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Wi||(Wi=!0,Zc(fr,function(){return yt(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=Me.transition,Me.transition=null;var o=D;D=1;var s=F;F|=4,cs.current=null,Ap(e,t),Uc(t,e),ep(eo),hr=!!Ja,eo=Ja=null,e.current=t,Cp(t),af(),F=s,D=o,Me.transition=a}else e.current=t;if(Wi&&(Wi=!1,_n=e,Nr=r),a=e.pendingLanes,a===0&&(En=null),lf(t.stateNode),ke(e,Y()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cr)throw Cr=!1,e=ko,ko=null,e;return Nr&1&&e.tag!==0&&yt(),a=e.pendingLanes,a&1?e===xo?ni++:(ni=0,xo=e):ni=0,On(),null}function yt(){if(_n!==null){var e=Au(Nr),n=Me.transition,t=D;try{if(Me.transition=null,D=16>e?16:e,_n===null)var i=!1;else{if(e=_n,_n=null,Nr=0,F&6)throw Error(j(331));var r=F;for(F|=4,P=e.current;P!==null;){var a=P,o=a.child;if(P.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(P=f;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Jt(8,m,a)}var v=m.child;if(v!==null)v.return=m,P=v;else for(;P!==null;){m=P;var y=m.sibling,E=m.return;if($c(m),m===f){P=null;break}if(y!==null){y.return=E,P=y;break}P=E}}}var z=a.alternate;if(z!==null){var w=z.child;if(w!==null){z.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}P=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,P=o;else e:for(;P!==null;){if(a=P,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Jt(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,P=p;break e}P=a.return}}var l=e.current;for(P=l;P!==null;){o=P;var c=o.child;if(o.subtreeFlags&2064&&c!==null)c.return=o,P=c;else e:for(o=l;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Wr(9,s)}}catch(g){K(s,s.return,g)}if(s===o){P=null;break e}var h=s.sibling;if(h!==null){h.return=s.return,P=h;break e}P=s.return}}if(F=r,On(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Rr,e)}catch{}i=!0}return i}finally{D=t,Me.transition=n}}return!1}function Pl(e,n,t){n=bt(t,n),n=Ac(e,n,1),e=jn(e,n,1),n=fe(),e!==null&&(ji(e,1,n),ke(e,n))}function K(e,n,t){if(e.tag===3)Pl(e,e,t);else for(;n!==null;){if(n.tag===3){Pl(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(En===null||!En.has(i))){e=bt(t,e),e=Cc(n,e,1),n=jn(n,e,1),e=fe(),n!==null&&(ji(n,1,e),ke(n,e));break}}n=n.return}}function Mp(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=fe(),e.pingedLanes|=e.suspendedLanes&t,ie===e&&(ae&t)===t&&(ee===4||ee===3&&(ae&130023424)===ae&&500>Y()-fs?Bn(e,0):ds|=t),ke(e,n)}function Kc(e,n){n===0&&(e.mode&1?(n=Mi,Mi<<=1,!(Mi&130023424)&&(Mi=4194304)):n=1);var t=fe();e=ln(e,n),e!==null&&(ji(e,n,t),ke(e,t))}function Fp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Kc(e,t)}function Rp(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(j(314))}i!==null&&i.delete(n),Kc(e,t)}var Yc;Yc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||we.current)ve=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ve=!1,Sp(e,n,t);ve=!!(e.flags&131072)}else ve=!1,H&&n.flags&1048576&&ec(n,kr,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;tr(e,n),e=n.pendingProps;var r=wt(n,ce.current);gt(n,t),r=as(null,n,i,e,r,t);var a=os();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,_e(i)?(a=!0,wr(n)):a=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,es(n),r.updater=Hr,n.stateNode=r,r._reactInternals=n,uo(n,i,e,t),n=po(null,n,i,!0,a,t)):(n.tag=0,H&&a&&Qo(n),de(null,n,r,t),n=n.child),n;case 16:i=n.elementType;e:{switch(tr(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=$p(i),e=Be(i,e),r){case 0:n=fo(null,n,i,e,t);break e;case 1:n=kl(null,n,i,e,t);break e;case 11:n=wl(null,n,i,e,t);break e;case 14:n=_l(null,n,i,Be(i.type,e),t);break e}throw Error(j(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Be(i,r),fo(e,n,i,r,t);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Be(i,r),kl(e,n,i,r,t);case 3:e:{if(Oc(n),e===null)throw Error(j(387));i=n.pendingProps,a=n.memoizedState,r=a.element,oc(e,n),Sr(n,i,null,t);var o=n.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){r=bt(Error(j(423)),n),n=xl(e,n,i,t,r);break e}else if(i!==r){r=bt(Error(j(424)),n),n=xl(e,n,i,t,r);break e}else for(Se=Sn(n.stateNode.containerInfo.firstChild),je=n,H=!0,Ve=null,t=rc(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(_t(),i===r){n=un(e,n,t);break e}de(e,n,i,t)}n=n.child}return n;case 5:return sc(n),e===null&&oo(n),i=n.type,r=n.pendingProps,a=e!==null?e.memoizedProps:null,o=r.children,no(i,r)?o=null:a!==null&&no(i,a)&&(n.flags|=32),Tc(e,n),de(e,n,o,t),n.child;case 6:return e===null&&oo(n),null;case 13:return Lc(e,n,t);case 4:return ns(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=kt(n,null,i,t):de(e,n,i,t),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Be(i,r),wl(e,n,i,r,t);case 7:return de(e,n,n.pendingProps,t),n.child;case 8:return de(e,n,n.pendingProps.children,t),n.child;case 12:return de(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,a=n.memoizedProps,o=r.value,B(xr,i._currentValue),i._currentValue=o,a!==null)if(qe(a.value,o)){if(a.children===r.children&&!we.current){n=un(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===i){if(a.tag===1){u=an(-1,t&-t),u.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?u.next=u:(u.next=m.next,m.next=u),f.pending=u}}a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),so(a.return,t,n),s.lanes|=t;break}u=u.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(j(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),so(o,t,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}de(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,gt(n,t),r=Fe(r),i=i(r),n.flags|=1,de(e,n,i,t),n.child;case 14:return i=n.type,r=Be(i,n.pendingProps),r=Be(i.type,r),_l(e,n,i,r,t);case 15:return Nc(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Be(i,r),tr(e,n),n.tag=1,_e(i)?(e=!0,wr(n)):e=!1,gt(n,t),zc(n,i,r),uo(n,i,r,t),po(null,n,i,!0,e,t);case 19:return Mc(e,n,t);case 22:return Pc(e,n,t)}throw Error(j(156,n.tag))};function Zc(e,n){return Su(e,n)}function Ip(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,n,t,i){return new Ip(e,n,t,i)}function gs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $p(e){if(typeof e=="function")return gs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mo)return 11;if(e===Fo)return 14}return 2}function An(e,n){var t=e.alternate;return t===null?(t=Le(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ar(e,n,t,i,r,a){var o=2;if(i=e,typeof e=="function")gs(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case nt:return Un(t.children,r,a,n);case Lo:o=8,r|=8;break;case Oa:return e=Le(12,t,n,r|2),e.elementType=Oa,e.lanes=a,e;case La:return e=Le(13,t,n,r),e.elementType=La,e.lanes=a,e;case Ma:return e=Le(19,t,n,r),e.elementType=Ma,e.lanes=a,e;case su:return Qr(t,r,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case au:o=10;break e;case ou:o=9;break e;case Mo:o=11;break e;case Fo:o=14;break e;case mn:o=16,i=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return n=Le(o,t,n,r),n.elementType=e,n.type=i,n.lanes=a,n}function Un(e,n,t,i){return e=Le(7,e,i,n),e.lanes=t,e}function Qr(e,n,t,i){return e=Le(22,e,i,n),e.elementType=su,e.lanes=t,e.stateNode={isHidden:!1},e}function ja(e,n,t){return e=Le(6,e,null,n),e.lanes=t,e}function Ea(e,n,t){return n=Le(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Dp(e,n,t,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ys(e,n,t,i,r,a,o,s,u){return e=new Dp(e,n,t,s,u),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Le(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},es(a),e}function Bp(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:et,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function Xc(e){if(!e)return Nn;e=e._reactInternals;e:{if(Yn(e)!==e||e.tag!==1)throw Error(j(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(_e(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(j(171))}if(e.tag===1){var t=e.type;if(_e(t))return Xu(e,t,n)}return n}function Jc(e,n,t,i,r,a,o,s,u){return e=ys(t,i,!0,e,r,a,o,s,u),e.context=Xc(null),t=e.current,i=fe(),r=zn(t),a=an(i,r),a.callback=n??null,jn(t,a,r),e.current.lanes=r,ji(e,r,i),ke(e,i),e}function Gr(e,n,t,i){var r=n.current,a=fe(),o=zn(r);return t=Xc(t),n.context===null?n.context=t:n.pendingContext=t,n=an(a,o),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=jn(r,n,o),e!==null&&(We(e,r,o,a),Ji(e,r,o)),o}function Tr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function vs(e,n){Tl(e,n),(e=e.alternate)&&Tl(e,n)}function Up(){return null}var ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function ws(e){this._internalRoot=e}Kr.prototype.render=ws.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(j(409));Gr(e,n,null,null)};Kr.prototype.unmount=ws.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Qn(function(){Gr(null,e,null,null)}),n[sn]=null}};function Kr(e){this._internalRoot=e}Kr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<yn.length&&n!==0&&n<yn[t].priority;t++);yn.splice(t,0,e),t===0&&Ou(e)}};function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ol(){}function Vp(e,n,t,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var f=Tr(o);a.call(f)}}var o=Jc(n,i,e,0,null,!1,!1,"",Ol);return e._reactRootContainer=o,e[sn]=o.current,di(e.nodeType===8?e.parentNode:e),Qn(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var f=Tr(u);s.call(f)}}var u=ys(e,0,!1,null,null,!1,!1,"",Ol);return e._reactRootContainer=u,e[sn]=u.current,di(e.nodeType===8?e.parentNode:e),Qn(function(){Gr(n,u,t,i)}),u}function Zr(e,n,t,i,r){var a=t._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var u=Tr(o);s.call(u)}}Gr(n,o,e,r)}else o=Vp(t,n,e,r,i);return Tr(o)}Cu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ut(n.pendingLanes);t!==0&&($o(n,t|1),ke(n,Y()),!(F&6)&&(St=Y()+500,On()))}break;case 13:Qn(function(){var i=ln(e,1);if(i!==null){var r=fe();We(i,e,1,r)}}),vs(e,1)}};Do=function(e){if(e.tag===13){var n=ln(e,134217728);if(n!==null){var t=fe();We(n,e,134217728,t)}vs(e,134217728)}};Nu=function(e){if(e.tag===13){var n=zn(e),t=ln(e,n);if(t!==null){var i=fe();We(t,e,n,i)}vs(e,n)}};Pu=function(){return D};Tu=function(e,n){var t=D;try{return D=e,n()}finally{D=t}};Wa=function(e,n,t){switch(n){case"input":if(Ia(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var r=Br(i);if(!r)throw Error(j(90));uu(i),Ia(i,r)}}}break;case"textarea":du(e,t);break;case"select":n=t.value,n!=null&&ft(e,!!t.multiple,n,!1)}};vu=ps;wu=Qn;var Hp={usingClientEntryPoint:!1,Events:[zi,at,Br,gu,yu,ps]},It={findFiberByHostInstance:In,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wp={bundleType:It.bundleType,version:It.version,rendererPackageName:It.rendererPackageName,rendererConfig:It.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xu(e),e===null?null:e.stateNode},findFiberByHostInstance:It.findFiberByHostInstance||Up,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qi.isDisabled&&qi.supportsFiber)try{Rr=qi.inject(Wp),Ze=qi}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hp;ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_s(n))throw Error(j(200));return Bp(e,n,null,t)};ze.createRoot=function(e,n){if(!_s(e))throw Error(j(299));var t=!1,i="",r=ed;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ys(e,1,!1,null,null,t,!1,i,r),e[sn]=n.current,di(e.nodeType===8?e.parentNode:e),new ws(n)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=xu(n),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Qn(e)};ze.hydrate=function(e,n,t){if(!Yr(n))throw Error(j(200));return Zr(null,e,n,!0,t)};ze.hydrateRoot=function(e,n,t){if(!_s(e))throw Error(j(405));var i=t!=null&&t.hydratedSources||null,r=!1,a="",o=ed;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Jc(n,null,e,1,t??null,r,!1,a,o),e[sn]=n.current,di(e),i)for(e=0;e<i.length;e++)t=i[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Kr(n)};ze.render=function(e,n,t){if(!Yr(n))throw Error(j(200));return Zr(null,e,n,!1,t)};ze.unmountComponentAtNode=function(e){if(!Yr(e))throw Error(j(40));return e._reactRootContainer?(Qn(function(){Zr(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};ze.unstable_batchedUpdates=ps;ze.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!Yr(t))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Zr(e,n,t,!1,i)};ze.version="18.3.1-next-f1338f8080-20240426";function nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd)}catch(e){console.error(e)}}nd(),nu.exports=ze;var qp=nu.exports,td,Ll=qp;td=Ll.createRoot,Ll.hydrateRoot;function Ml(e){const t=e.replace(/^#\/?/,"").match(/^algo\/([\w-]+)/);return t?{page:"algo",id:t[1]}:{page:"home"}}function Qp(){const[e,n]=R.useState(()=>Ml(window.location.hash));return R.useEffect(()=>{const t=()=>n(Ml(window.location.hash));return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[]),e}const Gp=["Practical performance first: how fast it is on real hardware for typical inputs (cache behaviour, constant factors, adaptivity to presorted data).","Then average and worst-case complexity: O(n log n) comparison sorts beat O(n²) ones; guaranteed worst cases beat ones that can degrade.","Stability and generality break ties: a stable, general-purpose comparison sort beats one that only works on bounded integers or needs extra conditions.","Non-comparison sorts (radix, counting, bucket) can be the fastest of all on integer keys, but they are ranked below the general-purpose sorts because they only work on keys with bounded size or range.","Novelty / teaching-only algorithms (pancake, bogo) come last."],$e=[1e3,5e3,2e4,5e4,1e5],pn=[100,500,1e3,2e3,4e3],De=1e5,hn=2e4,X=120,jt=[{id:"timsort",name:"Timsort (hybrid)",rank:1,family:"Hybrid merge + insertion",summary:"Finds naturally ordered runs, extends short runs with binary insertion sort, and merges runs with a balanced stack.",why:"Default sort in Python, Java (objects), Android, V8: stable, O(n log n) worst case and O(n) on already-sorted or run-structured data.",best:"O(n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(n)",stable:!0,inPlace:!1,growth:"nlogn",suitable:"General-purpose sorting, especially real-world data that is partially sorted, and whenever stability matters.",bad:"Random data of primitives where an unstable in-place quicksort variant is slightly faster and needs no buffer.",uses:["Python list.sort / sorted","Java Arrays.sort for objects, Collections.sort","V8 Array.prototype.sort","Rust slice::sort (driftsort, a descendant)"],steps:["Pick MINRUN between 32 and 64 so that n / MINRUN is close to a power of two.","Scan left to right for a natural run: an ascending or strictly descending sequence (reverse descending runs).","If the run is shorter than MINRUN, extend it with binary insertion sort.","Push the run onto a stack; while the top runs violate the size invariants (A > B + C and B > C), merge adjacent runs.","At the end, merge everything left on the stack. Merges take from the left run on ties, keeping the sort stable."],pseudocode:`timsort(A):
  minrun ← computeMinRun(n)
  runs ← empty stack
  lo ← 0
  while lo < n:
    hi ← end of natural run starting at lo
    if run is strictly descending: reverse A[lo..hi)
    end ← max(hi, min(n, lo + minrun))
    binaryInsertionSort(A, lo, hi, end)
    push (lo, end - lo) on runs
    mergeCollapse(runs)       // keep |A| > |B|+|C|, |B| > |C|
    lo ← end
  merge all remaining runs`,maxInput:De,maxViz:X,benchSizes:$e},{id:"introsort",name:"Introsort",rank:2,family:"Hybrid quick + heap + insertion",summary:"Quicksort with median-of-three pivots that switches to heapsort when recursion gets too deep and to insertion sort for tiny ranges.",why:"Quicksort speed with a guaranteed O(n log n) worst case and O(log n) space; the basis of C++ std::sort and .NET Array.Sort. Unstable, so ranked just below Timsort.",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(log n)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Sorting primitives in place when stability is not needed and worst-case guarantees are.",bad:"When stability is required, or data is mostly sorted (it does not exploit existing order like Timsort).",uses:["C++ std::sort (libstdc++, MSVC)",".NET Array.Sort","Go sort.Sort (pdqsort, a descendant)"],steps:["Set a depth limit of about 2·log2(n).","While the range has more than 16 elements: if the depth limit hits 0, heapsort this range and stop.","Otherwise choose the median of first, middle and last as pivot and partition around it.","Recurse into the smaller side and loop on the larger one (bounded stack).","Finish small ranges with insertion sort."],pseudocode:`introsort(A, lo, hi, depth):
  while hi - lo > 16:
    if depth = 0:
      heapsort(A, lo, hi); return
    depth ← depth - 1
    p ← partition(A, lo, hi, medianOf3(lo, mid, hi-1))
    recurse on smaller of [lo, p) and [p+1, hi); loop on the other
  insertionSort(A, lo, hi)`,maxInput:De,maxViz:X,benchSizes:$e},{id:"quick",name:"Quick sort (3-way)",rank:3,family:"Divide & conquer (partition)",summary:"Pick a random pivot and partition into < pivot, = pivot and > pivot (Dijkstra 3-way), then recurse on the outer parts.",why:"Usually the fastest pure comparison sort in practice thanks to cache-friendly in-place partitioning; the 3-way variant handles duplicates in linear time. Worst case is still O(n²) (very unlikely with random pivots).",best:"O(n)",avg:"O(n log n)",worst:"O(n²)",space:"O(log n)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Large arrays of primitives in memory, especially with many duplicate keys (3-way).",bad:"Adversarial inputs against a fixed pivot rule, or when stability / a hard worst-case bound is required.",uses:["Building block of introsort / pdqsort","Java Arrays.sort for primitives (dual-pivot quicksort)","C qsort implementations"],steps:["If the range has fewer than two elements, stop.","Choose a random pivot v and move it to the front.","Scan with three pointers lt, i, gt: values < v go left of lt, values > v go right of gt, equal values stay in the middle.","Recurse on the smaller outer part and loop on the larger one; the middle (= v) block is already in place."],pseudocode:`quick3(A, lo, hi):
  if hi ≤ lo: return
  swap A[lo], A[random(lo..hi)]
  v ← A[lo]; lt ← lo; i ← lo + 1; gt ← hi
  while i ≤ gt:
    if A[i] < v: swap A[lt++], A[i++]
    else if A[i] > v: swap A[i], A[gt--]
    else: i++
  quick3(A, lo, lt - 1)
  quick3(A, gt + 1, hi)`,maxInput:De,maxViz:X,benchSizes:$e},{id:"merge",name:"Merge sort",rank:4,family:"Divide & conquer (merge)",summary:"Split the array in half, sort each half recursively, then merge the two sorted halves.",why:"Stable with a guaranteed O(n log n) worst case and very predictable; needs O(n) extra memory and does not adapt to presorted input (Timsort fixes that).",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(n)",stable:!0,inPlace:!1,growth:"nlogn",suitable:"Stable sorting, linked lists, external (on-disk) sorting, parallel sorting.",bad:"Memory-constrained environments (O(n) buffer) and tiny arrays (recursion overhead).",uses:["External sorting of huge files","Sorting linked lists","Counting inversions","GNU sort"],steps:["If the range has fewer than two elements, it is sorted.","Split it at the midpoint and sort both halves recursively.","Merge: repeatedly take the smaller head of the two halves (the left one on ties, for stability) into a buffer.","Copy the buffer back."],pseudocode:`mergeSort(A, lo, hi):
  if hi - lo < 2: return
  mid ← (lo + hi) / 2
  mergeSort(A, lo, mid); mergeSort(A, mid, hi)
  i ← lo; j ← mid
  for k in lo..hi-1:
    if j ≥ hi or (i < mid and A[i] ≤ A[j]): T[k] ← A[i++]
    else: T[k] ← A[j++]
  copy T[lo..hi) to A[lo..hi)`,maxInput:De,maxViz:X,benchSizes:$e},{id:"heap",name:"Heap sort",rank:5,family:"Selection via binary heap",summary:"Build a max-heap in the array, then repeatedly swap the maximum to the end and restore the heap.",why:"Guaranteed O(n log n) with O(1) extra space, but poor cache locality makes it 2-3x slower than quicksort in practice, and it is unstable.",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(1)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Hard real-time or memory-constrained systems that need a worst-case bound with no extra memory; partial sorting / top-k.",bad:"Large arrays on modern CPUs (cache misses), and when stability is needed.",uses:["Introsort fallback","Priority queues / top-k selection","Embedded systems (Linux kernel lib/sort.c)"],steps:["Heapify: sift down every internal node from n/2 - 1 to 0, so every parent ≥ its children.","Swap the root (maximum) with the last element of the heap; the heap shrinks by one.","Sift the new root down to restore the heap property.","Repeat until the heap has one element."],pseudocode:`heapSort(A):
  for i ← n/2 - 1 downto 0: siftDown(A, i, n)
  for end ← n - 1 downto 1:
    swap A[0], A[end]
    siftDown(A, 0, end)

siftDown(A, root, n):
  while 2·root + 1 < n:
    child ← larger of the children of root
    if A[root] ≥ A[child]: return
    swap A[root], A[child]; root ← child`,maxInput:De,maxViz:X,benchSizes:$e},{id:"radix",name:"Radix sort (LSD)",rank:6,family:"Non-comparison (digit distribution)",summary:"Sort by one byte (digit) at a time from least to most significant, using a stable counting pass per digit.",why:"Linear time O(n·k) for fixed-width integer keys and often the fastest option for large integer arrays, but only works for keys that decompose into digits.",best:"O(n·k)",avg:"O(n·k)",worst:"O(n·k)",space:"O(n + b)",stable:!0,inPlace:!1,growth:"nk",suitable:"Large arrays of integers or fixed-length strings (k = number of digits, b = radix 256 here).",bad:"Floating point or arbitrary comparison-based keys; small arrays where the per-pass overhead dominates; very wide keys.",uses:["GPU sorting (CUB, Thrust)","Suffix-array construction","Sorting IP addresses / fixed-width IDs","Database column stores"],steps:["Offset every value by the minimum so keys are non-negative.","For each byte position from the lowest: count how many keys have each byte value (0-255).","Prefix-sum the counts into starting positions and place each key stably into an output buffer.","Swap buffers and continue with the next byte until the highest non-zero byte of the max key.","Add the minimum back."],pseudocode:`radixLSD(A):
  key[i] ← A[i] - min(A)
  for shift ← 0, 8, 16, ... while (maxKey >> shift) > 0:
    count[0..256] ← 0
    for k in key: count[((k >> shift) & 255) + 1]++
    prefix-sum count
    for k in key: out[count[(k >> shift) & 255]++] ← k
    swap key, out
  A[i] ← key[i] + min(A)`,maxInput:De,maxViz:X,benchSizes:$e},{id:"counting",name:"Counting sort",rank:7,family:"Non-comparison (counting)",summary:"Count how many times each value occurs, then write the values back in order.",why:"O(n + k) and extremely fast when the value range k is small, but memory grows with the range so it is useless for wide keys (this site limits max - min to under 1,000,000).",best:"O(n + k)",avg:"O(n + k)",worst:"O(n + k)",space:"O(k)",stable:!0,inPlace:!1,growth:"n",suitable:"Integers in a small known range: ages, grades, bytes, histogram buckets.",bad:"Large value ranges (k ≫ n) or non-integer keys.",uses:["Building block of radix sort","Sorting bytes / characters","Histogram equalisation in image processing"],steps:["Find the minimum and maximum value; k = max - min + 1.","Allocate k counters and count occurrences of each value.","Walk the counters in increasing order and write each value as many times as it was counted."],pseudocode:`countingSort(A):
  lo ← min(A); hi ← max(A)
  count[0..hi-lo] ← 0
  for v in A: count[v - lo]++
  k ← 0
  for v ← 0 to hi - lo:
    repeat count[v] times: A[k++] ← v + lo`,maxInput:De,maxViz:X,benchSizes:$e},{id:"bucket",name:"Bucket sort",rank:8,family:"Non-comparison (distribution)",summary:"Scatter values into n buckets by value range, sort each bucket with insertion sort, then concatenate.",why:"Expected O(n) for uniformly distributed data, but skewed data piles into a few buckets and degrades to O(n²) (insertion sort inside a bucket).",best:"O(n + k)",avg:"O(n + k)",worst:"O(n²)",space:"O(n + k)",stable:!0,inPlace:!1,growth:"n",suitable:"Uniformly distributed keys (e.g. random floats in [0, 1)) and as a parallel / external sorting stage.",bad:"Clustered or skewed distributions, where many values land in the same bucket.",uses:["Sorting uniformly distributed floats","Histogram-based parallel sorts (sample sort)","Graphics: depth bucketing"],steps:["Find min and max; bucket index of v = (v - min) · n / (max - min + 1).","Append every value to its bucket.","Sort each bucket with insertion sort (buckets are small on uniform data).","Concatenate the buckets in order."],pseudocode:`bucketSort(A):
  lo ← min(A); range ← max(A) - lo + 1
  B[0..n-1] ← empty lists
  for v in A: append v to B[(v - lo) · n / range]
  for each bucket b: insertionSort(b)
  A ← concatenation of B[0], B[1], ..., B[n-1]`,maxInput:De,maxViz:X,benchSizes:$e},{id:"shell",name:"Shell sort",rank:9,family:"Insertion (diminishing gaps)",summary:"Insertion sort over elements a gap apart, with the gap shrinking (Ciura sequence 701, 301, 132, 57, 23, 10, 4, 1).",why:"Simple, in place, no recursion and surprisingly fast for medium n (roughly O(n^1.3) in practice), but no proven O(n log n) bound and unstable.",best:"O(n log n)",avg:"≈ O(n^1.3) (gap dependent)",worst:"O(n^1.5) or worse",space:"O(1)",stable:!1,inPlace:!0,growth:"n32",suitable:"Embedded systems and medium-sized arrays where code size and no-recursion matter.",bad:"Very large arrays (falls behind O(n log n) sorts) and when stability is needed.",uses:["uClibc qsort","bzip2 compressor","Embedded firmware"],steps:["Choose a decreasing gap sequence ending in 1.","For each gap g: do an insertion sort where each element is compared with the one g positions earlier.","Large gaps move far-away elements quickly; the final g = 1 pass is a plain insertion sort on nearly sorted data."],pseudocode:`shellSort(A):
  for g in [..., 701, 301, 132, 57, 23, 10, 4, 1] with g < n:
    for i ← g to n - 1:
      key ← A[i]; j ← i
      while j ≥ g and key < A[j - g]:
        A[j] ← A[j - g]; j ← j - g
      A[j] ← key`,maxInput:De,maxViz:X,benchSizes:$e},{id:"comb",name:"Comb sort",rank:10,family:"Exchange (shrinking gap)",summary:'Bubble sort that compares elements a gap apart, shrinking the gap by 1.3 each pass to kill "turtles" (small values near the end).',why:"Much faster than bubble sort (close to O(n log n) on random data) with tiny code, but O(n²) worst case and unstable.",best:"O(n log n)",avg:"Ω(n² / 2^p) ≈ n log n in practice",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"When you need something tiny and much better than bubble sort.",bad:"Large data sets where real O(n log n) sorts win, and stability requirements.",uses:["Teaching gap-based improvements","Tiny embedded code"],steps:["Start with gap = n.","Each pass: gap ← floor(gap / 1.3) (at least 1); compare-and-swap every pair (i, i + gap).","Stop after a pass with gap = 1 that made no swaps."],pseudocode:`combSort(A):
  gap ← n; sorted ← false
  while not sorted:
    gap ← floor(gap / 1.3)
    if gap ≤ 1: gap ← 1; sorted ← true
    for i ← 0 to n - gap - 1:
      if A[i + gap] < A[i]:
        swap A[i], A[i + gap]; sorted ← false`,maxInput:De,maxViz:X,benchSizes:$e},{id:"bitonic",name:"Bitonic sort",rank:11,family:"Sorting network",summary:"Recursively build bitonic sequences (ascending then descending) and merge them with a fixed pattern of compare-exchanges.",why:"Data-independent compare pattern is ideal for GPUs, SIMD and hardware, but O(n log² n) comparisons make it slower than O(n log n) sorts on a CPU.",best:"O(n log² n)",avg:"O(n log² n)",worst:"O(n log² n)",space:"O(log n) recursion",stable:!1,inPlace:!0,growth:"nlog2n",suitable:"Parallel hardware: GPUs, FPGAs, SIMD lanes, sorting networks.",bad:"Sequential CPU code, where the extra log factor costs real time.",uses:["GPU sorting kernels","Hardware sorting networks","SIMD sorting of small blocks"],steps:["Sort the first half ascending-reversed (descending) and the second half ascending, recursively; together they form a bitonic sequence.","Bitonic merge: with m = largest power of two below the length, compare-exchange element i with i + m in the requested direction.","Recursively bitonic-merge both parts. This generalisation works for any n, not just powers of two."],pseudocode:`bitonicSort(A, lo, n, up):
  if n ≤ 1: return
  m ← n / 2
  bitonicSort(A, lo, m, not up)
  bitonicSort(A, lo + m, n - m, up)
  bitonicMerge(A, lo, n, up)

bitonicMerge(A, lo, n, up):
  if n ≤ 1: return
  m ← greatest power of two < n
  for i ← lo to lo + n - m - 1:
    if (A[i] > A[i + m]) = up: swap A[i], A[i + m]
  bitonicMerge(A, lo, m, up); bitonicMerge(A, lo + m, n - m, up)`,maxInput:De,maxViz:X,benchSizes:$e},{id:"insertion",name:"Insertion sort",rank:12,family:"Insertion",summary:"Grow a sorted prefix by taking the next element and shifting larger elements right until its slot is found.",why:"The best O(n²) sort: stable, in place, adaptive (O(n) on nearly sorted data) and the fastest choice for tiny arrays, which is why hybrids use it.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Small arrays (< ~20-50 elements), nearly sorted data, online sorting as items arrive.",bad:"Large or reverse-ordered arrays (quadratic shifts).",uses:["Small-range base case in Timsort, introsort, pdqsort","Online insertion into a sorted list","Card players sorting a hand"],steps:["Treat A[0] as a sorted prefix.","For each next element (the key), shift every larger element of the prefix one slot right.","Drop the key into the gap. The prefix is one longer and still sorted."],pseudocode:`insertionSort(A):
  for i ← 1 to n - 1:
    key ← A[i]; j ← i
    while j > 0 and key < A[j - 1]:
      A[j] ← A[j - 1]; j ← j - 1
    A[j] ← key`,maxInput:hn,maxViz:X,benchSizes:pn},{id:"selection",name:"Selection sort",rank:13,family:"Selection",summary:"Repeatedly find the minimum of the unsorted suffix and swap it to the front.",why:"Always n²/2 comparisons (not adaptive) and unstable, but makes at most n - 1 swaps, which helps when writes are expensive.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"Tiny arrays where swaps (writes) are much more expensive than comparisons.",bad:"Anything large; it never benefits from presorted input.",uses:["Teaching","Flash/EEPROM where writes wear the memory","Selecting the k smallest items (partial run)"],steps:["For each position i from left to right:","scan the unsorted suffix A[i..n) to find the index of its minimum;","swap that minimum into position i."],pseudocode:`selectionSort(A):
  for i ← 0 to n - 2:
    m ← i
    for j ← i + 1 to n - 1:
      if A[j] < A[m]: m ← j
    swap A[i], A[m]`,maxInput:hn,maxViz:X,benchSizes:pn},{id:"cocktail",name:"Cocktail shaker sort",rank:14,family:"Exchange",summary:"Bubble sort that alternates forward and backward passes, moving large values right and small values left each round.",why:"Slightly better than bubble sort (turtles move left fast) and stable/adaptive, but still O(n²) with lots of swaps.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching; nearly sorted data with a few misplaced elements at either end.",bad:"Random or large data.",uses:["Teaching bidirectional passes"],steps:["Forward pass: bubble the largest unsorted value to the right end.","Backward pass: bubble the smallest unsorted value to the left end.","Shrink both ends and repeat until a full round makes no swap."],pseudocode:`cocktailSort(A):
  lo ← 0; hi ← n - 1; swapped ← true
  while swapped and lo < hi:
    swapped ← false
    for i ← lo to hi - 1: if A[i+1] < A[i]: swap; swapped ← true
    hi ← hi - 1
    for i ← hi downto lo + 1: if A[i] < A[i-1]: swap; swapped ← true
    lo ← lo + 1`,maxInput:hn,maxViz:X,benchSizes:pn},{id:"bubble",name:"Bubble sort",rank:15,family:"Exchange",summary:"Repeatedly swap adjacent out-of-order pairs; each pass bubbles the largest remaining value to the end.",why:"Stable and adaptive with an early exit, but the most swaps of any common algorithm and poor practical speed.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching, or checking whether a tiny array is already sorted (one pass).",bad:'Everything else, especially small values near the end ("turtles").',uses:["Teaching","Detecting a nearly sorted array in one pass"],steps:["Walk the array comparing each adjacent pair; swap if out of order.","After a pass, the largest remaining value is at the end, so the next pass can stop one earlier.","Stop early if a pass makes no swaps."],pseudocode:`bubbleSort(A):
  for end ← n downto 2:
    swapped ← false
    for i ← 1 to end - 1:
      if A[i] < A[i - 1]: swap A[i], A[i - 1]; swapped ← true
    if not swapped: break`,maxInput:hn,maxViz:X,benchSizes:pn},{id:"odd-even",name:"Odd-even sort",rank:16,family:"Exchange (parallel)",summary:"Alternate compare-swap passes over odd-indexed pairs (1,2), (3,4)... and even-indexed pairs (0,1), (2,3)... until sorted.",why:"Each phase is fully parallel (n/2 independent compare-swaps), which suits SIMD/processor arrays, but sequentially it is as slow as bubble sort.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Parallel processor arrays / meshes where each processor holds one element.",bad:"Sequential code on large data.",uses:["Parallel sorting on processor arrays","Teaching sorting networks"],steps:["Odd phase: compare-swap pairs (1,2), (3,4), (5,6), ...","Even phase: compare-swap pairs (0,1), (2,3), (4,5), ...","Repeat both phases until a full round makes no swap."],pseudocode:`oddEvenSort(A):
  sorted ← false
  while not sorted:
    sorted ← true
    for start in [1, 0]:
      for i ← start; i + 1 < n; i ← i + 2:
        if A[i+1] < A[i]: swap A[i], A[i+1]; sorted ← false`,maxInput:hn,maxViz:X,benchSizes:pn},{id:"gnome",name:"Gnome sort",rank:17,family:"Exchange (insertion-like)",summary:"A garden gnome walks forward while pots are in order; when two are out of order he swaps them and steps back.",why:"Conceptually insertion sort done with swaps: stable and adaptive but does about 3x the work of insertion sort.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching; extremely small code size.",bad:"Any real workload.",uses:["Teaching","Code-golf"],steps:["Start at index 0.","If at the start or A[i] ≥ A[i-1], step forward.","Otherwise swap A[i] and A[i-1] and step back.","Done when the gnome walks off the end."],pseudocode:`gnomeSort(A):
  i ← 0
  while i < n:
    if i = 0 or A[i] ≥ A[i - 1]: i ← i + 1
    else: swap A[i], A[i - 1]; i ← i - 1`,maxInput:hn,maxViz:X,benchSizes:pn},{id:"cycle",name:"Cycle sort",rank:18,family:"Selection (cycle rotation)",summary:"For each position, count how many elements are smaller to find where its item belongs, and rotate the whole permutation cycle into place.",why:"Theoretically optimal number of memory writes (each element written at most once), but always Θ(n²) comparisons and unstable.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"Memory where writes are extremely expensive (EEPROM, flash) and n is small.",bad:"Anything where comparisons cost time: it is never adaptive.",uses:["Minimising writes to flash / EEPROM","Finding the minimum swaps to sort a permutation"],steps:["Take item = A[start]; its final position is start + (number of later elements smaller than it).","Skip past equal values, then write the item there and pick up the value that was displaced.","Repeat for the displaced value until the cycle returns to start.","Move on to the next start position."],pseudocode:`cycleSort(A):
  for start ← 0 to n - 2:
    item ← A[start]
    pos ← start + count of A[j] < item for j > start
    if pos = start: continue
    while item = A[pos]: pos++
    swap item, A[pos]
    while pos ≠ start:
      pos ← start + count of A[j] < item for j > start
      while item = A[pos]: pos++
      if item ≠ A[pos]: swap item, A[pos]`,maxInput:hn,maxViz:X,benchSizes:pn},{id:"pancake",name:"Pancake sort",rank:19,family:"Selection (prefix reversal)",summary:'Only allowed operation is "flip the top k pancakes": flip the largest to the top, then flip it to the bottom of the unsorted stack.',why:"A puzzle-inspired sort: O(n) flips but each flip costs O(n) element moves, so O(n²) overall with heavy data movement.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"When prefix reversal is the only primitive available (e.g. some hardware / genome rearrangement models).",bad:"Any practical sorting task.",uses:["Genome rearrangement research","Interconnection-network routing (pancake graphs)","Bill Gates's only research paper"],steps:["For size = n down to 2:","find the index of the maximum within the first size elements;","flip the prefix ending there (maximum goes to the front), then flip the first size elements (maximum goes to position size - 1)."],pseudocode:`pancakeSort(A):
  for size ← n downto 2:
    mi ← index of max(A[0..size))
    if mi ≠ size - 1:
      flip(A, mi)        // reverse A[0..mi]
      flip(A, size - 1)  // reverse A[0..size-1]`,maxInput:hn,maxViz:X,benchSizes:pn},{id:"bogo",name:"Bogo sort",rank:20,family:"Randomised (joke)",summary:"Check if the array is sorted; if not, shuffle it randomly and try again.",why:"Expected O(n·n!) time and unbounded worst case: the canonical example of the worst possible sorting algorithm. Capped at 8 elements here.",best:"O(n)",avg:"O(n · n!)",worst:"Unbounded",space:"O(1)",stable:!1,inPlace:!0,growth:"nfact",suitable:"Jokes, teaching probability, and stress-testing a shuffle.",bad:"Any input larger than a handful of elements.",uses:["Teaching expected running time","Humour"],steps:["If the array is sorted, stop.","Otherwise shuffle it uniformly at random (Fisher-Yates) and go back to step 1."],pseudocode:`bogoSort(A):
  while not isSorted(A):
    for i ← n - 1 downto 1:
      j ← random(0..i)
      swap A[i], A[j]`,maxInput:8,maxViz:7,benchSizes:[3,4,5,6,7]}],Kp=Object.fromEntries(jt.map(e=>[e.id,e]));function Yp(){return d.jsxs("div",{className:"landing",children:[d.jsxs("section",{className:"hero",children:[d.jsx("h1",{children:"Sort Pedia"}),d.jsx("p",{children:"Every common sorting algorithm, ranked from best to worst, explained in plain language, with verified code in C, C++, Java, Go, Rust and Python, live benchmarks and step-by-step visualizations. Every sort on this site runs in Rust compiled to WebAssembly."})]}),d.jsxs("section",{className:"card","aria-labelledby":"index-h",children:[d.jsx("h2",{id:"index-h",children:"Index"}),d.jsx("nav",{className:"index","data-testid":"algo-index",children:jt.map(e=>d.jsxs("a",{href:`#/algo/${e.id}`,className:"chip",children:[d.jsx("b",{children:e.rank})," ",e.name]},e.id))})]}),d.jsxs("section",{className:"card","aria-labelledby":"why-h",children:[d.jsx("h2",{id:"why-h",children:"How the ranking works"}),d.jsx("ol",{className:"rationale",children:Gp.map(e=>d.jsx("li",{children:e},e))})]}),d.jsxs("section",{"aria-labelledby":"rank-h",children:[d.jsx("h2",{id:"rank-h",children:"Ranking: best to worst"}),d.jsx("ol",{className:"ranking","data-testid":"ranking",children:jt.map(e=>d.jsxs("li",{className:"rank-card",children:[d.jsxs("div",{className:"rank-num",children:["#",e.rank]}),d.jsxs("div",{className:"rank-body",children:[d.jsx("h3",{children:d.jsx("a",{href:`#/algo/${e.id}`,children:e.name})}),d.jsxs("div",{className:"badges",children:[d.jsxs("span",{className:"badge",children:["avg ",e.avg]}),d.jsxs("span",{className:"badge",children:["worst ",e.worst]}),d.jsxs("span",{className:"badge",children:["space ",e.space]}),d.jsx("span",{className:`badge ${e.stable?"yes":"no"}`,children:e.stable?"stable":"unstable"}),d.jsx("span",{className:`badge ${e.inPlace?"yes":"no"}`,children:e.inPlace?"in-place":"not in-place"})]}),d.jsx("p",{children:e.why})]})]},e.id))})]})]})}var id={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(i){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,o={},s={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function l(c){return c instanceof u?new u(c.type,l(c.content),c.alias):Array.isArray(c)?c.map(l):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++a}),l.__id},clone:function l(c,h){h=h||{};var g,_;switch(s.util.type(c)){case"Object":if(_=s.util.objId(c),h[_])return h[_];g={},h[_]=g;for(var k in c)c.hasOwnProperty(k)&&(g[k]=l(c[k],h));return g;case"Array":return _=s.util.objId(c),h[_]?h[_]:(g=[],h[_]=g,c.forEach(function(S,N){g[N]=l(S,h)}),g);default:return c}},getLanguage:function(l){for(;l;){var c=r.exec(l.className);if(c)return c[1].toLowerCase();l=l.parentElement}return"none"},setLanguage:function(l,c){l.className=l.className.replace(RegExp(r,"gi"),""),l.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(g){var l=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack)||[])[1];if(l){var c=document.getElementsByTagName("script");for(var h in c)if(c[h].src==l)return c[h]}return null}},isActive:function(l,c,h){for(var g="no-"+c;l;){var _=l.classList;if(_.contains(c))return!0;if(_.contains(g))return!1;l=l.parentElement}return!!h}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(l,c){var h=s.util.clone(s.languages[l]);for(var g in c)h[g]=c[g];return h},insertBefore:function(l,c,h,g){g=g||s.languages;var _=g[l],k={};for(var S in _)if(_.hasOwnProperty(S)){if(S==c)for(var N in h)h.hasOwnProperty(N)&&(k[N]=h[N]);h.hasOwnProperty(S)||(k[S]=_[S])}var T=g[l];return g[l]=k,s.languages.DFS(s.languages,function(I,ne){ne===T&&I!=l&&(this[I]=k)}),k},DFS:function l(c,h,g,_){_=_||{};var k=s.util.objId;for(var S in c)if(c.hasOwnProperty(S)){h.call(c,S,c[S],g||S);var N=c[S],T=s.util.type(N);T==="Object"&&!_[k(N)]?(_[k(N)]=!0,l(N,h,null,_)):T==="Array"&&!_[k(N)]&&(_[k(N)]=!0,l(N,h,S,_))}}},plugins:{},highlightAll:function(l,c){s.highlightAllUnder(document,l,c)},highlightAllUnder:function(l,c,h){var g={callback:h,container:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",g),g.elements=Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)),s.hooks.run("before-all-elements-highlight",g);for(var _=0,k;k=g.elements[_++];)s.highlightElement(k,c===!0,g.callback)},highlightElement:function(l,c,h){var g=s.util.getLanguage(l),_=s.languages[g];s.util.setLanguage(l,g);var k=l.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(k,g);var S=l.textContent,N={element:l,language:g,grammar:_,code:S};function T(ne){N.highlightedCode=ne,s.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,s.hooks.run("after-highlight",N),s.hooks.run("complete",N),h&&h.call(N.element)}if(s.hooks.run("before-sanity-check",N),k=N.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!N.code){s.hooks.run("complete",N),h&&h.call(N.element);return}if(s.hooks.run("before-highlight",N),!N.grammar){T(s.util.encode(N.code));return}if(c&&i.Worker){var I=new Worker(s.filename);I.onmessage=function(ne){T(ne.data)},I.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else T(s.highlight(N.code,N.grammar,N.language))},highlight:function(l,c,h){var g={code:l,grammar:c,language:h};if(s.hooks.run("before-tokenize",g),!g.grammar)throw new Error('The language "'+g.language+'" has no grammar.');return g.tokens=s.tokenize(g.code,g.grammar),s.hooks.run("after-tokenize",g),u.stringify(s.util.encode(g.tokens),g.language)},tokenize:function(l,c){var h=c.rest;if(h){for(var g in h)c[g]=h[g];delete c.rest}var _=new v;return y(_,_.head,l),m(l,_,c,_.head,0),z(_)},hooks:{all:{},add:function(l,c){var h=s.hooks.all;h[l]=h[l]||[],h[l].push(c)},run:function(l,c){var h=s.hooks.all[l];if(!(!h||!h.length))for(var g=0,_;_=h[g++];)_(c)}},Token:u};i.Prism=s;function u(l,c,h,g){this.type=l,this.content=c,this.alias=h,this.length=(g||"").length|0}u.stringify=function l(c,h){if(typeof c=="string")return c;if(Array.isArray(c)){var g="";return c.forEach(function(T){g+=l(T,h)}),g}var _={type:c.type,content:l(c.content,h),tag:"span",classes:["token",c.type],attributes:{},language:h},k=c.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(_.classes,k):_.classes.push(k)),s.hooks.run("wrap",_);var S="";for(var N in _.attributes)S+=" "+N+'="'+(_.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+_.tag+' class="'+_.classes.join(" ")+'"'+S+">"+_.content+"</"+_.tag+">"};function f(l,c,h,g){l.lastIndex=c;var _=l.exec(h);if(_&&g&&_[1]){var k=_[1].length;_.index+=k,_[0]=_[0].slice(k)}return _}function m(l,c,h,g,_,k){for(var S in h)if(!(!h.hasOwnProperty(S)||!h[S])){var N=h[S];N=Array.isArray(N)?N:[N];for(var T=0;T<N.length;++T){if(k&&k.cause==S+","+T)return;var I=N[T],ne=I.inside,Ce=!!I.lookbehind,Ln=!!I.greedy,Nt=I.alias;if(Ln&&!I.pattern.global){var dn=I.pattern.toString().match(/[imsuy]*$/)[0];I.pattern=RegExp(I.pattern.source,dn+"g")}for(var Ne=I.pattern||I,A=g.next,x=_;A!==c.tail&&!(k&&x>=k.reach);x+=A.value.length,A=A.next){var C=A.value;if(c.length>l.length)return;if(!(C instanceof u)){var O=1,L;if(Ln){if(L=f(Ne,x,l,Ce),!L||L.index>=l.length)break;var ge=L.index,xe=L.index+L[0].length,G=x;for(G+=A.value.length;ge>=G;)A=A.next,G+=A.value.length;if(G-=A.value.length,x=G,A.value instanceof u)continue;for(var me=A;me!==c.tail&&(G<xe||typeof me.value=="string");me=me.next)O++,G+=me.value.length;O--,C=l.slice(x,G),L.index-=x}else if(L=f(Ne,0,C,Ce),!L)continue;var ge=L.index,Je=L[0],Xr=C.slice(0,ge),Ss=C.slice(ge+Je.length),Jr=x+C.length;k&&Jr>k.reach&&(k.reach=Jr);var Ci=A.prev;Xr&&(Ci=y(c,Ci,Xr),x+=Xr.length),E(c,Ci,O);var vd=new u(S,ne?s.tokenize(Je,ne):Je,Nt,Je);if(A=y(c,Ci,vd),Ss&&y(c,A,Ss),O>1){var ea={cause:S+","+T,reach:Jr};m(l,c,h,A.prev,x,ea),k&&ea.reach>k.reach&&(k.reach=ea.reach)}}}}}}function v(){var l={value:null,prev:null,next:null},c={value:null,prev:l,next:null};l.next=c,this.head=l,this.tail=c,this.length=0}function y(l,c,h){var g=c.next,_={value:h,prev:c,next:g};return c.next=_,g.prev=_,l.length++,_}function E(l,c,h){for(var g=c.next,_=0;_<h&&g!==l.tail;_++)g=g.next;c.next=g,g.prev=c,l.length-=_}function z(l){for(var c=[],h=l.head.next;h!==l.tail;)c.push(h.value),h=h.next;return c}if(!i.document)return i.addEventListener&&(s.disableWorkerMessageHandler||i.addEventListener("message",function(l){var c=JSON.parse(l.data),h=c.language,g=c.code,_=c.immediateClose;i.postMessage(s.highlight(g,s.languages[h],h)),_&&i.close()},!1)),s;var w=s.util.currentScript();w&&(s.filename=w.src,w.hasAttribute("data-manual")&&(s.manual=!0));function b(){s.manual||s.highlightAll()}if(!s.manual){var p=document.readyState;p==="loading"||p==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return s}(n);e.exports&&(e.exports=t),typeof js<"u"&&(js.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,a){var o={};o["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[a]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};s["language-"+a]={pattern:/[\s\S]+/,inside:t.languages[a]};var u={};u[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(i,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(i){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var a=i.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading…",r=function(w,b){return"✖ Error "+w+" while fetching file: "+b},a="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",u="loading",f="loaded",m="failed",v="pre[data-src]:not(["+s+'="'+f+'"]):not(['+s+'="'+u+'"])';function y(w,b,p){var l=new XMLHttpRequest;l.open("GET",w,!0),l.onreadystatechange=function(){l.readyState==4&&(l.status<400&&l.responseText?b(l.responseText):l.status>=400?p(r(l.status,l.statusText)):p(a))},l.send(null)}function E(w){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if(b){var p=Number(b[1]),l=b[2],c=b[3];return l?c?[p,Number(c)]:[p,void 0]:[p,p]}}t.hooks.add("before-highlightall",function(w){w.selector+=", "+v}),t.hooks.add("before-sanity-check",function(w){var b=w.element;if(b.matches(v)){w.code="",b.setAttribute(s,u);var p=b.appendChild(document.createElement("CODE"));p.textContent=i;var l=b.getAttribute("data-src"),c=w.language;if(c==="none"){var h=(/\.(\w+)$/.exec(l)||[,"none"])[1];c=o[h]||h}t.util.setLanguage(p,c),t.util.setLanguage(b,c);var g=t.plugins.autoloader;g&&g.loadLanguages(c),y(l,function(_){b.setAttribute(s,f);var k=E(b.getAttribute("data-range"));if(k){var S=_.split(/\r\n?|\n/g),N=k[0],T=k[1]==null?S.length:k[1];N<0&&(N+=S.length),N=Math.max(0,Math.min(N-1,S.length)),T<0&&(T+=S.length),T=Math.max(0,Math.min(T,S.length)),_=S.slice(N,T).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(N+1))}p.textContent=_,t.highlightElement(p)},function(_){b.setAttribute(s,m),p.textContent=_})}}),t.plugins.fileHighlight={highlight:function(b){for(var p=(b||document).querySelectorAll(v),l=0,c;c=p[l++];)t.highlightElement(c)}};var z=!1;t.fileHighlight=function(){z||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),z=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(id);var Zp=id.exports;const Fl=wd(Zp);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(e){var n=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,t=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return n.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return n.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:n,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return t})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])})(Prism);(function(e){var n=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,t=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,i={pattern:RegExp(/(^|[^\w.])/.source+t+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[i,{pattern:RegExp(/(^|[^\w.])/.source+t+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:i.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+t+/[A-Z]\w*\b/.source),lookbehind:!0,inside:i.inside}],keyword:n,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":i,keyword:n,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+t+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:i.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+t+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:i.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return n.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];(function(e){for(var n=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,t=0;t<2;t++)n=n.replace(/<self>/g,function(){return n});n=n.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+n),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;const Or=[{id:"java",label:"Java",file:"java.java",prism:"java"},{id:"c",label:"C",file:"c.c",prism:"c"},{id:"cpp",label:"C++",file:"cpp.cpp",prism:"cpp"},{id:"go",label:"Golang",file:"go.go",prism:"go"},{id:"rust",label:"Rust",file:"rust.rs",prism:"rust"},{id:"python",label:"Python",file:"python.py",prism:"python"}],Xp="java",rd="sort-pedia:default-language";function _i(e){return typeof e=="string"&&Or.some(n=>n.id===e)}function ad(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function od(){const e=ad()?.getItem(rd);return _i(e)?e:Xp}function Jp(e){if(!_i(e))throw new Error(`Unknown language: ${String(e)}`);ad()?.setItem(rd,e)}const eh=`/* Bitonic sort generalised to any n: sort halves in opposite directions,
 * then bitonic-merge using the greatest power of two below n. */
static int pow2_below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

static void bitonic_merge(int *a, int lo, int n, int up) {
    if (n <= 1) return;
    int m = pow2_below(n);
    for (int i = lo; i < lo + n - m; i++)
        if (up ? a[i] > a[i + m] : a[i] < a[i + m]) { int t = a[i]; a[i] = a[i + m]; a[i + m] = t; }
    bitonic_merge(a, lo, m, up);
    bitonic_merge(a, lo + m, n - m, up);
}

static void bitonic(int *a, int lo, int n, int up) {
    if (n <= 1) return;
    int m = n / 2;
    bitonic(a, lo, m, !up);
    bitonic(a, lo + m, n - m, up);
    bitonic_merge(a, lo, n, up);
}

void sort_array(int *a, int n) { bitonic(a, 0, n, 1); }
`,nh=`// Bitonic sort generalised to any n.
#include <utility>
#include <vector>

static int pow2Below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

static void bitonicMerge(std::vector<int>& a, int lo, int n, bool up) {
    if (n <= 1) return;
    int m = pow2Below(n);
    for (int i = lo; i < lo + n - m; i++)
        if (up ? a[i] > a[i + m] : a[i] < a[i + m]) std::swap(a[i], a[i + m]);
    bitonicMerge(a, lo, m, up);
    bitonicMerge(a, lo + m, n - m, up);
}

static void bitonic(std::vector<int>& a, int lo, int n, bool up) {
    if (n <= 1) return;
    int m = n / 2;
    bitonic(a, lo, m, !up);
    bitonic(a, lo + m, n - m, up);
    bitonicMerge(a, lo, n, up);
}

void sortArray(std::vector<int>& a) { bitonic(a, 0, static_cast<int>(a.size()), true); }
`,th=`package main

// Bitonic sort generalised to any n.

func pow2Below(n int) int {
	k := 1
	for k<<1 < n {
		k <<= 1
	}
	return k
}

func bitonicMerge(a []int, lo, n int, up bool) {
	if n <= 1 {
		return
	}
	m := pow2Below(n)
	for i := lo; i < lo+n-m; i++ {
		if (up && a[i] > a[i+m]) || (!up && a[i] < a[i+m]) {
			a[i], a[i+m] = a[i+m], a[i]
		}
	}
	bitonicMerge(a, lo, m, up)
	bitonicMerge(a, lo+m, n-m, up)
}

func bitonic(a []int, lo, n int, up bool) {
	if n <= 1 {
		return
	}
	m := n / 2
	bitonic(a, lo, m, !up)
	bitonic(a, lo+m, n-m, up)
	bitonicMerge(a, lo, n, up)
}

func sortArray(a []int) { bitonic(a, 0, len(a), true) }
`,ih=`// Bitonic sort generalised to any n.
class BitonicSort {
    static int pow2Below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

    static void merge(int[] a, int lo, int n, boolean up) {
        if (n <= 1) return;
        int m = pow2Below(n);
        for (int i = lo; i < lo + n - m; i++)
            if (up ? a[i] > a[i + m] : a[i] < a[i + m]) { int t = a[i]; a[i] = a[i + m]; a[i + m] = t; }
        merge(a, lo, m, up);
        merge(a, lo + m, n - m, up);
    }

    static void bitonic(int[] a, int lo, int n, boolean up) {
        if (n <= 1) return;
        int m = n / 2;
        bitonic(a, lo, m, !up);
        bitonic(a, lo + m, n - m, up);
        merge(a, lo, n, up);
    }

    public static void sort(int[] a) { bitonic(a, 0, a.length, true); }
}
`,rh=`"""Bitonic sort generalised to any n."""


def _pow2_below(n):
    k = 1
    while k << 1 < n:
        k <<= 1
    return k


def _merge(a, lo, n, up):
    if n <= 1:
        return
    m = _pow2_below(n)
    for i in range(lo, lo + n - m):
        if (a[i] > a[i + m]) == up:
            a[i], a[i + m] = a[i + m], a[i]
    _merge(a, lo, m, up)
    _merge(a, lo + m, n - m, up)


def _bitonic(a, lo, n, up):
    if n <= 1:
        return
    m = n // 2
    _bitonic(a, lo, m, not up)
    _bitonic(a, lo + m, n - m, up)
    _merge(a, lo, n, up)


def sort_array(a):
    _bitonic(a, 0, len(a), True)
    return a
`,ah=`// Bitonic sort generalised to any n.

fn pow2_below(n: usize) -> usize {
    let mut k = 1;
    while k << 1 < n {
        k <<= 1;
    }
    k
}

fn bitonic_merge(a: &mut [i32], lo: usize, n: usize, up: bool) {
    if n <= 1 {
        return;
    }
    let m = pow2_below(n);
    for i in lo..lo + n - m {
        if (up && a[i] > a[i + m]) || (!up && a[i] < a[i + m]) {
            a.swap(i, i + m);
        }
    }
    bitonic_merge(a, lo, m, up);
    bitonic_merge(a, lo + m, n - m, up);
}

fn bitonic(a: &mut [i32], lo: usize, n: usize, up: bool) {
    if n <= 1 {
        return;
    }
    let m = n / 2;
    bitonic(a, lo, m, !up);
    bitonic(a, lo + m, n - m, up);
    bitonic_merge(a, lo, n, up);
}

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    bitonic(a, 0, n, true);
}
`,oh=`/* Bogo sort: shuffle until sorted. Expected O(n * n!) - only for tiny n! */
#include <stdlib.h>

static int is_sorted(const int *a, int n) {
    for (int i = 1; i < n; i++) if (a[i] < a[i - 1]) return 0;
    return 1;
}

void sort_array(int *a, int n) {
    while (!is_sorted(a, n)) {
        for (int i = n - 1; i > 0; i--) {      /* Fisher-Yates shuffle */
            int j = rand() % (i + 1);
            int t = a[i]; a[i] = a[j]; a[j] = t;
        }
    }
}
`,sh=`// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
#include <algorithm>
#include <random>
#include <vector>

void sortArray(std::vector<int>& a) {
    std::mt19937 rng(42);
    while (!std::is_sorted(a.begin(), a.end())) std::shuffle(a.begin(), a.end(), rng);
}
`,lh=`package main

import "math/rand"

// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!

func isSorted(a []int) bool {
	for i := 1; i < len(a); i++ {
		if a[i] < a[i-1] {
			return false
		}
	}
	return true
}

func sortArray(a []int) {
	for !isSorted(a) {
		rand.Shuffle(len(a), func(i, j int) { a[i], a[j] = a[j], a[i] })
	}
}
`,uh=`import java.util.Random;

// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
class BogoSort {
    static boolean isSorted(int[] a) {
        for (int i = 1; i < a.length; i++) if (a[i] < a[i - 1]) return false;
        return true;
    }

    public static void sort(int[] a) {
        Random rnd = new Random();
        while (!isSorted(a)) {
            for (int i = a.length - 1; i > 0; i--) {   // Fisher-Yates shuffle
                int j = rnd.nextInt(i + 1);
                int t = a[i]; a[i] = a[j]; a[j] = t;
            }
        }
    }
}
`,ch=`"""Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!"""
import random


def sort_array(a):
    while any(a[i] > a[i + 1] for i in range(len(a) - 1)):
        random.shuffle(a)
    return a
`,dh=`// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
// A tiny xorshift PRNG keeps the snippet dependency-free.

pub fn sort_array(a: &mut [i32]) {
    let mut state = 0x9E37_79B9_7F4A_7C15_u64;
    while !a.windows(2).all(|w| w[0] <= w[1]) {
        for i in (1..a.len()).rev() {
            // Fisher-Yates shuffle
            state ^= state << 13;
            state ^= state >> 7;
            state ^= state << 17;
            let j = (state % (i as u64 + 1)) as usize;
            a.swap(i, j);
        }
    }
}
`,fh=`/* Bubble sort with early exit when a pass makes no swaps. */
void sort_array(int *a, int n) {
    for (int end = n; end > 1; end--) {
        int swapped = 0;
        for (int i = 1; i < end; i++)
            if (a[i] < a[i - 1]) { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; swapped = 1; }
        if (!swapped) break;
    }
}
`,ph=`// Bubble sort with early exit when a pass makes no swaps.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    for (size_t end = a.size(); end > 1; end--) {
        bool swapped = false;
        for (size_t i = 1; i < end; i++)
            if (a[i] < a[i - 1]) { std::swap(a[i], a[i - 1]); swapped = true; }
        if (!swapped) break;
    }
}
`,hh=`package main

// Bubble sort with early exit when a pass makes no swaps.

func sortArray(a []int) {
	for end := len(a); end > 1; end-- {
		swapped := false
		for i := 1; i < end; i++ {
			if a[i] < a[i-1] {
				a[i], a[i-1] = a[i-1], a[i]
				swapped = true
			}
		}
		if !swapped {
			break
		}
	}
}
`,mh=`// Bubble sort with early exit when a pass makes no swaps.
class BubbleSort {
    public static void sort(int[] a) {
        for (int end = a.length; end > 1; end--) {
            boolean swapped = false;
            for (int i = 1; i < end; i++)
                if (a[i] < a[i - 1]) { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; swapped = true; }
            if (!swapped) break;
        }
    }
}
`,gh=`"""Bubble sort with early exit when a pass makes no swaps."""


def sort_array(a):
    for end in range(len(a), 1, -1):
        swapped = False
        for i in range(1, end):
            if a[i] < a[i - 1]:
                a[i], a[i - 1] = a[i - 1], a[i]
                swapped = True
        if not swapped:
            break
    return a
`,yh=`// Bubble sort with early exit when a pass makes no swaps.

pub fn sort_array(a: &mut [i32]) {
    let mut end = a.len();
    while end > 1 {
        let mut swapped = false;
        for i in 1..end {
            if a[i] < a[i - 1] {
                a.swap(i, i - 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
        end -= 1;
    }
}
`,vh=`/* Bucket sort: scatter values into n buckets by value range, sort each
 * bucket with insertion sort, then concatenate the buckets. */
#include <stdlib.h>

void sort_array(int *a, int n) {
    if (n < 2) return;
    int min = a[0], max = a[0];
    for (int i = 1; i < n; i++) { if (a[i] < min) min = a[i]; if (a[i] > max) max = a[i]; }
    long long range = (long long)max - min + 1;
    int *count = calloc(n + 1, sizeof(int)), *out = malloc(sizeof(int) * n);
    #define BUCKET(v) ((int)(((long long)(v) - min) * n / range))
    for (int i = 0; i < n; i++) count[BUCKET(a[i]) + 1]++;
    for (int b = 0; b < n; b++) count[b + 1] += count[b];       /* bucket start offsets */
    int *pos = malloc(sizeof(int) * n);
    for (int b = 0; b < n; b++) pos[b] = count[b];
    for (int i = 0; i < n; i++) out[pos[BUCKET(a[i])]++] = a[i];
    for (int b = 0; b < n; b++)                                 /* insertion sort each bucket */
        for (int i = count[b] + 1; i < count[b + 1]; i++) {
            int key = out[i], j = i;
            while (j > count[b] && key < out[j - 1]) { out[j] = out[j - 1]; j--; }
            out[j] = key;
        }
    for (int i = 0; i < n; i++) a[i] = out[i];
    #undef BUCKET
    free(count); free(out); free(pos);
}
`,wh=`// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& a) {
    size_t n = a.size();
    if (n < 2) return;
    auto [mnIt, mxIt] = std::minmax_element(a.begin(), a.end());
    long long mn = *mnIt, range = static_cast<long long>(*mxIt) - mn + 1;
    std::vector<std::vector<int>> buckets(n);
    for (int v : a) buckets[static_cast<size_t>((v - mn) * static_cast<long long>(n) / range)].push_back(v);
    size_t k = 0;
    for (auto& b : buckets) {
        for (size_t i = 1; i < b.size(); i++) {  // insertion sort
            int key = b[i];
            size_t j = i;
            while (j > 0 && key < b[j - 1]) { b[j] = b[j - 1]; j--; }
            b[j] = key;
        }
        for (int v : b) a[k++] = v;
    }
}
`,_h=`package main

// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.

func sortArray(a []int) {
	n := len(a)
	if n < 2 {
		return
	}
	min, max := a[0], a[0]
	for _, v := range a {
		if v < min {
			min = v
		}
		if v > max {
			max = v
		}
	}
	rng := max - min + 1
	buckets := make([][]int, n)
	for _, v := range a {
		b := (v - min) * n / rng
		buckets[b] = append(buckets[b], v)
	}
	k := 0
	for _, b := range buckets {
		for i := 1; i < len(b); i++ { // insertion sort
			key, j := b[i], i
			for j > 0 && key < b[j-1] {
				b[j] = b[j-1]
				j--
			}
			b[j] = key
		}
		k += copy(a[k:], b)
	}
}
`,kh=`import java.util.ArrayList;
import java.util.List;

// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.
class BucketSort {
    public static void sort(int[] a) {
        int n = a.length;
        if (n < 2) return;
        long min = a[0], max = a[0];
        for (int v : a) { min = Math.min(min, v); max = Math.max(max, v); }
        long range = max - min + 1;
        List<List<Integer>> buckets = new ArrayList<>();
        for (int i = 0; i < n; i++) buckets.add(new ArrayList<>());
        for (int v : a) buckets.get((int) ((v - min) * n / range)).add(v);
        int k = 0;
        for (List<Integer> b : buckets) {
            for (int i = 1; i < b.size(); i++) {      // insertion sort
                int key = b.get(i), j = i;
                while (j > 0 && key < b.get(j - 1)) { b.set(j, b.get(j - 1)); j--; }
                b.set(j, key);
            }
            for (int v : b) a[k++] = v;
        }
    }
}
`,xh=`"""Bucket sort: scatter into n buckets by value range, insertion-sort
each bucket, then concatenate."""


def sort_array(a):
    n = len(a)
    if n < 2:
        return a
    lo = min(a)
    rng = max(a) - lo + 1
    buckets = [[] for _ in range(n)]
    for v in a:
        buckets[(v - lo) * n // rng].append(v)
    k = 0
    for b in buckets:
        for i in range(1, len(b)):  # insertion sort
            key, j = b[i], i
            while j > 0 and key < b[j - 1]:
                b[j] = b[j - 1]
                j -= 1
            b[j] = key
        a[k:k + len(b)] = b
        k += len(b)
    return a
`,bh=`// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    if n < 2 {
        return;
    }
    let min = *a.iter().min().unwrap() as i64;
    let range = *a.iter().max().unwrap() as i64 - min + 1;
    let mut buckets: Vec<Vec<i32>> = vec![Vec::new(); n];
    for &v in a.iter() {
        buckets[((v as i64 - min) * n as i64 / range) as usize].push(v);
    }
    let mut k = 0;
    for mut b in buckets {
        for i in 1..b.len() {
            // insertion sort
            let key = b[i];
            let mut j = i;
            while j > 0 && key < b[j - 1] {
                b[j] = b[j - 1];
                j -= 1;
            }
            b[j] = key;
        }
        a[k..k + b.len()].copy_from_slice(&b);
        k += b.len();
    }
}
`,Sh=`/* Cocktail shaker sort: bubble passes alternating left->right and right->left. */
void sort_array(int *a, int n) {
    int lo = 0, hi = n - 1, swapped = 1;
    while (swapped && lo < hi) {
        swapped = 0;
        for (int i = lo; i < hi; i++)
            if (a[i + 1] < a[i]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; swapped = 1; }
        hi--;
        for (int i = hi; i > lo; i--)
            if (a[i] < a[i - 1]) { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; swapped = 1; }
        lo++;
    }
}
`,jh=`// Cocktail shaker sort: bubble passes in both directions.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    int lo = 0, hi = static_cast<int>(a.size()) - 1;
    bool swapped = true;
    while (swapped && lo < hi) {
        swapped = false;
        for (int i = lo; i < hi; i++)
            if (a[i + 1] < a[i]) { std::swap(a[i], a[i + 1]); swapped = true; }
        hi--;
        for (int i = hi; i > lo; i--)
            if (a[i] < a[i - 1]) { std::swap(a[i], a[i - 1]); swapped = true; }
        lo++;
    }
}
`,Eh=`package main

// Cocktail shaker sort: bubble passes in both directions.

func sortArray(a []int) {
	lo, hi, swapped := 0, len(a)-1, true
	for swapped && lo < hi {
		swapped = false
		for i := lo; i < hi; i++ {
			if a[i+1] < a[i] {
				a[i], a[i+1] = a[i+1], a[i]
				swapped = true
			}
		}
		hi--
		for i := hi; i > lo; i-- {
			if a[i] < a[i-1] {
				a[i], a[i-1] = a[i-1], a[i]
				swapped = true
			}
		}
		lo++
	}
}
`,zh=`// Cocktail shaker sort: bubble passes in both directions.
class CocktailShakerSort {
    public static void sort(int[] a) {
        int lo = 0, hi = a.length - 1;
        boolean swapped = true;
        while (swapped && lo < hi) {
            swapped = false;
            for (int i = lo; i < hi; i++)
                if (a[i + 1] < a[i]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; swapped = true; }
            hi--;
            for (int i = hi; i > lo; i--)
                if (a[i] < a[i - 1]) { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; swapped = true; }
            lo++;
        }
    }
}
`,Ah=`"""Cocktail shaker sort: bubble passes in both directions."""


def sort_array(a):
    lo, hi, swapped = 0, len(a) - 1, True
    while swapped and lo < hi:
        swapped = False
        for i in range(lo, hi):
            if a[i + 1] < a[i]:
                a[i], a[i + 1] = a[i + 1], a[i]
                swapped = True
        hi -= 1
        for i in range(hi, lo, -1):
            if a[i] < a[i - 1]:
                a[i], a[i - 1] = a[i - 1], a[i]
                swapped = True
        lo += 1
    return a
`,Ch=`// Cocktail shaker sort: bubble passes in both directions.

pub fn sort_array(a: &mut [i32]) {
    if a.len() < 2 {
        return;
    }
    let (mut lo, mut hi) = (0, a.len() - 1);
    let mut swapped = true;
    while swapped && lo < hi {
        swapped = false;
        for i in lo..hi {
            if a[i + 1] < a[i] {
                a.swap(i, i + 1);
                swapped = true;
            }
        }
        hi -= 1;
        for i in (lo + 1..=hi).rev() {
            if a[i] < a[i - 1] {
                a.swap(i, i - 1);
                swapped = true;
            }
        }
        lo += 1;
    }
}
`,Nh=`/* Comb sort: bubble sort over a shrinking gap (factor 1.3). */
void sort_array(int *a, int n) {
    int gap = n, sorted = 0;
    while (!sorted) {
        gap = (int)(gap / 1.3);
        if (gap <= 1) { gap = 1; sorted = 1; }
        for (int i = 0; i + gap < n; i++)
            if (a[i + gap] < a[i]) {
                int t = a[i]; a[i] = a[i + gap]; a[i + gap] = t;
                sorted = 0;
            }
    }
}
`,Ph=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    size_t n = a.size(), gap = n;
    bool sorted = false;
    while (!sorted) {
        gap = static_cast<size_t>(gap / 1.3);
        if (gap <= 1) { gap = 1; sorted = true; }
        for (size_t i = 0; i + gap < n; i++)
            if (a[i + gap] < a[i]) { std::swap(a[i], a[i + gap]); sorted = false; }
    }
}
`,Th=`package main

// Comb sort: bubble sort over a shrinking gap (factor 1.3).

func sortArray(a []int) {
	gap, sorted := len(a), false
	for !sorted {
		gap = int(float64(gap) / 1.3)
		if gap <= 1 {
			gap, sorted = 1, true
		}
		for i := 0; i+gap < len(a); i++ {
			if a[i+gap] < a[i] {
				a[i], a[i+gap] = a[i+gap], a[i]
				sorted = false
			}
		}
	}
}
`,Oh=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).
class CombSort {
    public static void sort(int[] a) {
        int gap = a.length;
        boolean sorted = false;
        while (!sorted) {
            gap = (int) (gap / 1.3);
            if (gap <= 1) { gap = 1; sorted = true; }
            for (int i = 0; i + gap < a.length; i++)
                if (a[i + gap] < a[i]) {
                    int t = a[i]; a[i] = a[i + gap]; a[i + gap] = t;
                    sorted = false;
                }
        }
    }
}
`,Lh=`"""Comb sort: bubble sort over a shrinking gap (factor 1.3)."""


def sort_array(a):
    gap, done = len(a), False
    while not done:
        gap = int(gap / 1.3)
        if gap <= 1:
            gap, done = 1, True
        for i in range(len(a) - gap):
            if a[i + gap] < a[i]:
                a[i], a[i + gap] = a[i + gap], a[i]
                done = False
    return a
`,Mh=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).

pub fn sort_array(a: &mut [i32]) {
    let mut gap = a.len();
    let mut sorted = false;
    while !sorted {
        gap = (gap as f64 / 1.3) as usize;
        if gap <= 1 {
            gap = 1;
            sorted = true;
        }
        for i in 0..a.len().saturating_sub(gap) {
            if a[i + gap] < a[i] {
                a.swap(i, i + gap);
                sorted = false;
            }
        }
    }
}
`,Fh=`/* Counting sort for integers in a known (small) range [min, max]. */
#include <stdlib.h>

void sort_array(int *a, int n) {
    if (n < 2) return;
    int min = a[0], max = a[0];
    for (int i = 1; i < n; i++) { if (a[i] < min) min = a[i]; if (a[i] > max) max = a[i]; }
    size_t range = (size_t)((long long)max - min + 1);
    size_t *count = calloc(range, sizeof(size_t));
    for (int i = 0; i < n; i++) count[(long long)a[i] - min]++;
    int k = 0;
    for (size_t v = 0; v < range; v++)
        while (count[v]--) a[k++] = (int)((long long)v + min);
    free(count);
}
`,Rh=`// Counting sort for integers in a known (small) range [min, max].
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& a) {
    if (a.size() < 2) return;
    auto [mnIt, mxIt] = std::minmax_element(a.begin(), a.end());
    long long mn = *mnIt, mx = *mxIt;
    std::vector<size_t> count(static_cast<size_t>(mx - mn + 1));
    for (int v : a) count[v - mn]++;
    size_t k = 0;
    for (size_t v = 0; v < count.size(); v++)
        for (size_t c = 0; c < count[v]; c++) a[k++] = static_cast<int>(v + mn);
}
`,Ih=`package main

// Counting sort for integers in a known (small) range [min, max].

func sortArray(a []int) {
	if len(a) < 2 {
		return
	}
	min, max := a[0], a[0]
	for _, v := range a {
		if v < min {
			min = v
		}
		if v > max {
			max = v
		}
	}
	count := make([]int, max-min+1)
	for _, v := range a {
		count[v-min]++
	}
	k := 0
	for v, c := range count {
		for ; c > 0; c-- {
			a[k] = v + min
			k++
		}
	}
}
`,$h=`// Counting sort for integers in a known (small) range [min, max].
class CountingSort {
    public static void sort(int[] a) {
        if (a.length < 2) return;
        int min = a[0], max = a[0];
        for (int v : a) { min = Math.min(min, v); max = Math.max(max, v); }
        int[] count = new int[(int) ((long) max - min + 1)];
        for (int v : a) count[v - min]++;
        int k = 0;
        for (int v = 0; v < count.length; v++)
            for (int c = 0; c < count[v]; c++) a[k++] = v + min;
    }
}
`,Dh=`"""Counting sort for integers in a known (small) range [min, max]."""


def sort_array(a):
    if len(a) < 2:
        return a
    lo, hi = min(a), max(a)
    count = [0] * (hi - lo + 1)
    for v in a:
        count[v - lo] += 1
    k = 0
    for offset, c in enumerate(count):
        for _ in range(c):
            a[k] = offset + lo
            k += 1
    return a
`,Bh=`// Counting sort for integers in a known (small) range [min, max].

pub fn sort_array(a: &mut [i32]) {
    if a.len() < 2 {
        return;
    }
    let min = *a.iter().min().unwrap() as i64;
    let max = *a.iter().max().unwrap() as i64;
    let mut count = vec![0usize; (max - min + 1) as usize];
    for &v in a.iter() {
        count[(v as i64 - min) as usize] += 1;
    }
    let mut k = 0;
    for (v, &c) in count.iter().enumerate() {
        for _ in 0..c {
            a[k] = (v as i64 + min) as i32;
            k += 1;
        }
    }
}
`,Uh=`/* Cycle sort: rotate each cycle of the permutation into place, writing
 * every element at most once (minimum number of memory writes). */
void sort_array(int *a, int n) {
    for (int start = 0; start < n - 1; start++) {
        int item = a[start], pos = start;
        for (int i = start + 1; i < n; i++) if (a[i] < item) pos++;
        if (pos == start) continue;
        while (item == a[pos]) pos++;
        int t = a[pos]; a[pos] = item; item = t;
        while (pos != start) {
            pos = start;
            for (int i = start + 1; i < n; i++) if (a[i] < item) pos++;
            while (item == a[pos]) pos++;
            if (item != a[pos]) { t = a[pos]; a[pos] = item; item = t; }
        }
    }
}
`,Vh=`// Cycle sort: rotate each permutation cycle into place (minimum writes).
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    size_t n = a.size();
    for (size_t start = 0; start + 1 < n; start++) {
        int item = a[start];
        size_t pos = start;
        for (size_t i = start + 1; i < n; i++) if (a[i] < item) pos++;
        if (pos == start) continue;
        while (item == a[pos]) pos++;
        std::swap(item, a[pos]);
        while (pos != start) {
            pos = start;
            for (size_t i = start + 1; i < n; i++) if (a[i] < item) pos++;
            while (item == a[pos]) pos++;
            if (item != a[pos]) std::swap(item, a[pos]);
        }
    }
}
`,Hh=`package main

// Cycle sort: rotate each permutation cycle into place (minimum writes).

func sortArray(a []int) {
	n := len(a)
	for start := 0; start < n-1; start++ {
		item, pos := a[start], start
		for i := start + 1; i < n; i++ {
			if a[i] < item {
				pos++
			}
		}
		if pos == start {
			continue
		}
		for item == a[pos] {
			pos++
		}
		a[pos], item = item, a[pos]
		for pos != start {
			pos = start
			for i := start + 1; i < n; i++ {
				if a[i] < item {
					pos++
				}
			}
			for item == a[pos] {
				pos++
			}
			if item != a[pos] {
				a[pos], item = item, a[pos]
			}
		}
	}
}
`,Wh=`// Cycle sort: rotate each permutation cycle into place (minimum writes).
class CycleSort {
    public static void sort(int[] a) {
        int n = a.length;
        for (int start = 0; start < n - 1; start++) {
            int item = a[start], pos = start;
            for (int i = start + 1; i < n; i++) if (a[i] < item) pos++;
            if (pos == start) continue;
            while (item == a[pos]) pos++;
            int t = a[pos]; a[pos] = item; item = t;
            while (pos != start) {
                pos = start;
                for (int i = start + 1; i < n; i++) if (a[i] < item) pos++;
                while (item == a[pos]) pos++;
                if (item != a[pos]) { t = a[pos]; a[pos] = item; item = t; }
            }
        }
    }
}
`,qh=`"""Cycle sort: rotate each permutation cycle into place (minimum writes)."""


def sort_array(a):
    n = len(a)
    for start in range(n - 1):
        item = a[start]
        pos = start + sum(1 for x in a[start + 1:] if x < item)
        if pos == start:
            continue
        while item == a[pos]:
            pos += 1
        a[pos], item = item, a[pos]
        while pos != start:
            pos = start + sum(1 for x in a[start + 1:] if x < item)
            while item == a[pos]:
                pos += 1
            if item != a[pos]:
                a[pos], item = item, a[pos]
    return a
`,Qh=`// Cycle sort: rotate each permutation cycle into place (minimum writes).

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    for start in 0..n.saturating_sub(1) {
        let mut item = a[start];
        let mut pos = start + a[start + 1..].iter().filter(|&&x| x < item).count();
        if pos == start {
            continue;
        }
        while item == a[pos] {
            pos += 1;
        }
        std::mem::swap(&mut item, &mut a[pos]);
        while pos != start {
            pos = start + a[start + 1..].iter().filter(|&&x| x < item).count();
            while item == a[pos] {
                pos += 1;
            }
            if item != a[pos] {
                std::mem::swap(&mut item, &mut a[pos]);
            }
        }
    }
}
`,Gh=`/* Gnome sort: step forward while in order, otherwise swap and step back. */
void sort_array(int *a, int n) {
    int i = 0;
    while (i < n) {
        if (i == 0 || a[i] >= a[i - 1]) i++;
        else { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; i--; }
    }
}
`,Kh=`// Gnome sort: step forward while in order, otherwise swap and step back.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    size_t i = 0;
    while (i < a.size()) {
        if (i == 0 || a[i] >= a[i - 1]) i++;
        else { std::swap(a[i], a[i - 1]); i--; }
    }
}
`,Yh=`package main

// Gnome sort: step forward while in order, otherwise swap and step back.

func sortArray(a []int) {
	i := 0
	for i < len(a) {
		if i == 0 || a[i] >= a[i-1] {
			i++
		} else {
			a[i], a[i-1] = a[i-1], a[i]
			i--
		}
	}
}
`,Zh=`// Gnome sort: step forward while in order, otherwise swap and step back.
class GnomeSort {
    public static void sort(int[] a) {
        int i = 0;
        while (i < a.length) {
            if (i == 0 || a[i] >= a[i - 1]) i++;
            else { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; i--; }
        }
    }
}
`,Xh=`"""Gnome sort: step forward while in order, otherwise swap and step back."""


def sort_array(a):
    i = 0
    while i < len(a):
        if i == 0 or a[i] >= a[i - 1]:
            i += 1
        else:
            a[i], a[i - 1] = a[i - 1], a[i]
            i -= 1
    return a
`,Jh=`// Gnome sort: step forward while in order, otherwise swap and step back.

pub fn sort_array(a: &mut [i32]) {
    let mut i = 0;
    while i < a.len() {
        if i == 0 || a[i] >= a[i - 1] {
            i += 1;
        } else {
            a.swap(i, i - 1);
            i -= 1;
        }
    }
}
`,em=`/* Heap sort: build a max-heap, then repeatedly move the max to the end. */
static void sift_down(int *a, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && a[child] < a[child + 1]) child++;
        if (a[root] >= a[child]) return;
        int t = a[root]; a[root] = a[child]; a[child] = t;
        root = child;
    }
}

void sort_array(int *a, int n) {
    for (int i = n / 2 - 1; i >= 0; i--) sift_down(a, i, n);
    for (int end = n - 1; end > 0; end--) {
        int t = a[0]; a[0] = a[end]; a[end] = t;
        sift_down(a, 0, end);
    }
}
`,nm=`// Heap sort: build a max-heap, then repeatedly move the max to the end.
#include <utility>
#include <vector>

static void siftDown(std::vector<int>& a, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && a[child] < a[child + 1]) child++;
        if (a[root] >= a[child]) return;
        std::swap(a[root], a[child]);
        root = child;
    }
}

void sortArray(std::vector<int>& a) {
    int n = static_cast<int>(a.size());
    for (int i = n / 2 - 1; i >= 0; i--) siftDown(a, i, n);
    for (int end = n - 1; end > 0; end--) {
        std::swap(a[0], a[end]);
        siftDown(a, 0, end);
    }
}
`,tm=`package main

// Heap sort: build a max-heap, then repeatedly move the max to the end.

func siftDown(a []int, root, n int) {
	for {
		child := 2*root + 1
		if child >= n {
			return
		}
		if child+1 < n && a[child] < a[child+1] {
			child++
		}
		if a[root] >= a[child] {
			return
		}
		a[root], a[child] = a[child], a[root]
		root = child
	}
}

func sortArray(a []int) {
	n := len(a)
	for i := n/2 - 1; i >= 0; i-- {
		siftDown(a, i, n)
	}
	for end := n - 1; end > 0; end-- {
		a[0], a[end] = a[end], a[0]
		siftDown(a, 0, end)
	}
}
`,im=`// Heap sort: build a max-heap, then repeatedly move the max to the end.
class HeapSort {
    static void siftDown(int[] a, int root, int n) {
        while (true) {
            int child = 2 * root + 1;
            if (child >= n) return;
            if (child + 1 < n && a[child] < a[child + 1]) child++;
            if (a[root] >= a[child]) return;
            int t = a[root]; a[root] = a[child]; a[child] = t;
            root = child;
        }
    }

    public static void sort(int[] a) {
        int n = a.length;
        for (int i = n / 2 - 1; i >= 0; i--) siftDown(a, i, n);
        for (int end = n - 1; end > 0; end--) {
            int t = a[0]; a[0] = a[end]; a[end] = t;
            siftDown(a, 0, end);
        }
    }
}
`,rm=`"""Heap sort: build a max-heap, then repeatedly move the max to the end."""


def _sift_down(a, root, n):
    while True:
        child = 2 * root + 1
        if child >= n:
            return
        if child + 1 < n and a[child] < a[child + 1]:
            child += 1
        if a[root] >= a[child]:
            return
        a[root], a[child] = a[child], a[root]
        root = child


def sort_array(a):
    n = len(a)
    for i in range(n // 2 - 1, -1, -1):
        _sift_down(a, i, n)
    for end in range(n - 1, 0, -1):
        a[0], a[end] = a[end], a[0]
        _sift_down(a, 0, end)
    return a
`,am=`// Heap sort: build a max-heap, then repeatedly move the max to the end.

fn sift_down(a: &mut [i32], mut root: usize, n: usize) {
    loop {
        let mut child = 2 * root + 1;
        if child >= n {
            return;
        }
        if child + 1 < n && a[child] < a[child + 1] {
            child += 1;
        }
        if a[root] >= a[child] {
            return;
        }
        a.swap(root, child);
        root = child;
    }
}

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    for i in (0..n / 2).rev() {
        sift_down(a, i, n);
    }
    for end in (1..n).rev() {
        a.swap(0, end);
        sift_down(a, 0, end);
    }
}
`,om=`/* Insertion sort: grow a sorted prefix by inserting one element at a time. */
void sort_array(int *a, int n) {
    for (int i = 1; i < n; i++) {
        int key = a[i], j = i;
        while (j > 0 && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
        a[j] = key;
    }
}
`,sm=`// Insertion sort: grow a sorted prefix one element at a time.
#include <vector>

void sortArray(std::vector<int>& a) {
    for (size_t i = 1; i < a.size(); i++) {
        int key = a[i];
        size_t j = i;
        while (j > 0 && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
        a[j] = key;
    }
}
`,lm=`package main

// Insertion sort: grow a sorted prefix one element at a time.

func sortArray(a []int) {
	for i := 1; i < len(a); i++ {
		key, j := a[i], i
		for j > 0 && key < a[j-1] {
			a[j] = a[j-1]
			j--
		}
		a[j] = key
	}
}
`,um=`// Insertion sort: grow a sorted prefix one element at a time.
class InsertionSort {
    public static void sort(int[] a) {
        for (int i = 1; i < a.length; i++) {
            int key = a[i], j = i;
            while (j > 0 && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
            a[j] = key;
        }
    }
}
`,cm=`"""Insertion sort: grow a sorted prefix one element at a time."""


def sort_array(a):
    for i in range(1, len(a)):
        key, j = a[i], i
        while j > 0 and key < a[j - 1]:
            a[j] = a[j - 1]
            j -= 1
        a[j] = key
    return a
`,dm=`// Insertion sort: grow a sorted prefix one element at a time.

pub fn sort_array(a: &mut [i32]) {
    for i in 1..a.len() {
        let key = a[i];
        let mut j = i;
        while j > 0 && key < a[j - 1] {
            a[j] = a[j - 1];
            j -= 1;
        }
        a[j] = key;
    }
}
`,fm=`/* Introsort: quicksort (median-of-three) that switches to heapsort when
 * recursion gets too deep and to insertion sort for small ranges. */
static void swap(int *a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }

static void insertion(int *a, int lo, int hi) {
    for (int i = lo + 1; i < hi; i++) {
        int key = a[i], j = i;
        while (j > lo && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
        a[j] = key;
    }
}

static void sift(int *a, int lo, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && a[lo + child] < a[lo + child + 1]) child++;
        if (a[lo + root] >= a[lo + child]) return;
        swap(a, lo + root, lo + child);
        root = child;
    }
}

static void heapsort_range(int *a, int lo, int hi) {
    int n = hi - lo;
    for (int i = n / 2 - 1; i >= 0; i--) sift(a, lo, i, n);
    for (int end = n - 1; end > 0; end--) { swap(a, lo, lo + end); sift(a, lo, 0, end); }
}

static void intro(int *a, int lo, int hi, int depth) {
    while (hi - lo > 16) {
        if (depth-- == 0) { heapsort_range(a, lo, hi); return; }
        int mid = lo + (hi - lo) / 2, p = hi - 1;
        if (a[mid] < a[lo]) swap(a, mid, lo);
        if (a[p] < a[lo]) swap(a, p, lo);
        if (a[mid] < a[p]) swap(a, mid, p);      /* median now at a[p] */
        int i = lo;
        for (int j = lo; j < p; j++) if (a[j] < a[p]) swap(a, i++, j);
        swap(a, i, p);
        if (i - lo < hi - i - 1) { intro(a, lo, i, depth); lo = i + 1; }
        else { intro(a, i + 1, hi, depth); hi = i; }
    }
    insertion(a, lo, hi);
}

void sort_array(int *a, int n) {
    int depth = 0;
    for (int m = n; m > 0; m >>= 1) depth += 2;
    intro(a, 0, n, depth);
}
`,pm=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.
#include <utility>
#include <vector>

static void insertion(std::vector<int>& a, int lo, int hi) {
    for (int i = lo + 1; i < hi; i++) {
        int key = a[i], j = i;
        while (j > lo && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
        a[j] = key;
    }
}

static void sift(std::vector<int>& a, int lo, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && a[lo + child] < a[lo + child + 1]) child++;
        if (a[lo + root] >= a[lo + child]) return;
        std::swap(a[lo + root], a[lo + child]);
        root = child;
    }
}

static void heapsortRange(std::vector<int>& a, int lo, int hi) {
    int n = hi - lo;
    for (int i = n / 2 - 1; i >= 0; i--) sift(a, lo, i, n);
    for (int end = n - 1; end > 0; end--) { std::swap(a[lo], a[lo + end]); sift(a, lo, 0, end); }
}

static void intro(std::vector<int>& a, int lo, int hi, int depth) {
    while (hi - lo > 16) {
        if (depth-- == 0) { heapsortRange(a, lo, hi); return; }
        int mid = lo + (hi - lo) / 2, p = hi - 1;
        if (a[mid] < a[lo]) std::swap(a[mid], a[lo]);
        if (a[p] < a[lo]) std::swap(a[p], a[lo]);
        if (a[mid] < a[p]) std::swap(a[mid], a[p]);  // median now at a[p]
        int i = lo;
        for (int j = lo; j < p; j++) if (a[j] < a[p]) std::swap(a[i++], a[j]);
        std::swap(a[i], a[p]);
        if (i - lo < hi - i - 1) { intro(a, lo, i, depth); lo = i + 1; }
        else { intro(a, i + 1, hi, depth); hi = i; }
    }
    insertion(a, lo, hi);
}

void sortArray(std::vector<int>& a) {
    int n = static_cast<int>(a.size()), depth = 0;
    for (int m = n; m > 0; m >>= 1) depth += 2;
    intro(a, 0, n, depth);
}
`,hm=`package main

// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.

func insertionRange(a []int, lo, hi int) {
	for i := lo + 1; i < hi; i++ {
		key, j := a[i], i
		for j > lo && key < a[j-1] {
			a[j] = a[j-1]
			j--
		}
		a[j] = key
	}
}

func sift(a []int, lo, root, n int) {
	for {
		child := 2*root + 1
		if child >= n {
			return
		}
		if child+1 < n && a[lo+child] < a[lo+child+1] {
			child++
		}
		if a[lo+root] >= a[lo+child] {
			return
		}
		a[lo+root], a[lo+child] = a[lo+child], a[lo+root]
		root = child
	}
}

func heapsortRange(a []int, lo, hi int) {
	n := hi - lo
	for i := n/2 - 1; i >= 0; i-- {
		sift(a, lo, i, n)
	}
	for end := n - 1; end > 0; end-- {
		a[lo], a[lo+end] = a[lo+end], a[lo]
		sift(a, lo, 0, end)
	}
}

func intro(a []int, lo, hi, depth int) {
	for hi-lo > 16 {
		if depth == 0 {
			heapsortRange(a, lo, hi)
			return
		}
		depth--
		mid, p := lo+(hi-lo)/2, hi-1
		if a[mid] < a[lo] {
			a[mid], a[lo] = a[lo], a[mid]
		}
		if a[p] < a[lo] {
			a[p], a[lo] = a[lo], a[p]
		}
		if a[mid] < a[p] { // median now at a[p]
			a[mid], a[p] = a[p], a[mid]
		}
		i := lo
		for j := lo; j < p; j++ {
			if a[j] < a[p] {
				a[i], a[j] = a[j], a[i]
				i++
			}
		}
		a[i], a[p] = a[p], a[i]
		if i-lo < hi-i-1 {
			intro(a, lo, i, depth)
			lo = i + 1
		} else {
			intro(a, i+1, hi, depth)
			hi = i
		}
	}
	insertionRange(a, lo, hi)
}

func sortArray(a []int) {
	depth := 0
	for m := len(a); m > 0; m >>= 1 {
		depth += 2
	}
	intro(a, 0, len(a), depth)
}
`,mm=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.
class IntroSort {
    static void swap(int[] a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }

    static void insertion(int[] a, int lo, int hi) {
        for (int i = lo + 1; i < hi; i++) {
            int key = a[i], j = i;
            while (j > lo && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
            a[j] = key;
        }
    }

    static void sift(int[] a, int lo, int root, int n) {
        while (true) {
            int child = 2 * root + 1;
            if (child >= n) return;
            if (child + 1 < n && a[lo + child] < a[lo + child + 1]) child++;
            if (a[lo + root] >= a[lo + child]) return;
            swap(a, lo + root, lo + child);
            root = child;
        }
    }

    static void heapsort(int[] a, int lo, int hi) {
        int n = hi - lo;
        for (int i = n / 2 - 1; i >= 0; i--) sift(a, lo, i, n);
        for (int end = n - 1; end > 0; end--) { swap(a, lo, lo + end); sift(a, lo, 0, end); }
    }

    static void intro(int[] a, int lo, int hi, int depth) {
        while (hi - lo > 16) {
            if (depth-- == 0) { heapsort(a, lo, hi); return; }
            int mid = lo + (hi - lo) / 2, p = hi - 1;
            if (a[mid] < a[lo]) swap(a, mid, lo);
            if (a[p] < a[lo]) swap(a, p, lo);
            if (a[mid] < a[p]) swap(a, mid, p);   // median now at a[p]
            int i = lo;
            for (int j = lo; j < p; j++) if (a[j] < a[p]) swap(a, i++, j);
            swap(a, i, p);
            if (i - lo < hi - i - 1) { intro(a, lo, i, depth); lo = i + 1; }
            else { intro(a, i + 1, hi, depth); hi = i; }
        }
        insertion(a, lo, hi);
    }

    public static void sort(int[] a) {
        int depth = 0;
        for (int m = a.length; m > 0; m >>= 1) depth += 2;
        intro(a, 0, a.length, depth);
    }
}
`,gm=`"""Introsort: median-of-three quicksort, heapsort fallback when recursion
is too deep, insertion sort for small ranges."""


def _insertion(a, lo, hi):
    for i in range(lo + 1, hi):
        key, j = a[i], i
        while j > lo and key < a[j - 1]:
            a[j] = a[j - 1]
            j -= 1
        a[j] = key


def _sift(a, lo, root, n):
    while True:
        child = 2 * root + 1
        if child >= n:
            return
        if child + 1 < n and a[lo + child] < a[lo + child + 1]:
            child += 1
        if a[lo + root] >= a[lo + child]:
            return
        a[lo + root], a[lo + child] = a[lo + child], a[lo + root]
        root = child


def _heapsort(a, lo, hi):
    n = hi - lo
    for i in range(n // 2 - 1, -1, -1):
        _sift(a, lo, i, n)
    for end in range(n - 1, 0, -1):
        a[lo], a[lo + end] = a[lo + end], a[lo]
        _sift(a, lo, 0, end)


def _intro(a, lo, hi, depth):
    while hi - lo > 16:
        if depth == 0:
            _heapsort(a, lo, hi)
            return
        depth -= 1
        mid, p = lo + (hi - lo) // 2, hi - 1
        if a[mid] < a[lo]:
            a[mid], a[lo] = a[lo], a[mid]
        if a[p] < a[lo]:
            a[p], a[lo] = a[lo], a[p]
        if a[mid] < a[p]:  # median now at a[p]
            a[mid], a[p] = a[p], a[mid]
        i = lo
        for j in range(lo, p):
            if a[j] < a[p]:
                a[i], a[j] = a[j], a[i]
                i += 1
        a[i], a[p] = a[p], a[i]
        if i - lo < hi - i - 1:
            _intro(a, lo, i, depth)
            lo = i + 1
        else:
            _intro(a, i + 1, hi, depth)
            hi = i
    _insertion(a, lo, hi)


def sort_array(a):
    _intro(a, 0, len(a), 2 * len(a).bit_length())
    return a
`,ym=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small slices.

fn insertion(a: &mut [i32]) {
    for i in 1..a.len() {
        let key = a[i];
        let mut j = i;
        while j > 0 && key < a[j - 1] {
            a[j] = a[j - 1];
            j -= 1;
        }
        a[j] = key;
    }
}

fn sift(a: &mut [i32], mut root: usize, n: usize) {
    loop {
        let mut child = 2 * root + 1;
        if child >= n {
            return;
        }
        if child + 1 < n && a[child] < a[child + 1] {
            child += 1;
        }
        if a[root] >= a[child] {
            return;
        }
        a.swap(root, child);
        root = child;
    }
}

fn heapsort(a: &mut [i32]) {
    let n = a.len();
    for i in (0..n / 2).rev() {
        sift(a, i, n);
    }
    for end in (1..n).rev() {
        a.swap(0, end);
        sift(a, 0, end);
    }
}

fn intro(mut a: &mut [i32], mut depth: u32) {
    while a.len() > 16 {
        if depth == 0 {
            heapsort(a);
            return;
        }
        depth -= 1;
        let (mid, p) = (a.len() / 2, a.len() - 1);
        if a[mid] < a[0] { a.swap(mid, 0); }
        if a[p] < a[0] { a.swap(p, 0); }
        if a[mid] < a[p] { a.swap(mid, p); } // median now at a[p]
        let mut i = 0;
        for j in 0..p {
            if a[j] < a[p] {
                a.swap(i, j);
                i += 1;
            }
        }
        a.swap(i, p);
        let (left, right) = a.split_at_mut(i);
        let right = &mut right[1..];
        // recurse into the smaller side, loop on the larger one
        if left.len() < right.len() {
            intro(left, depth);
            a = right;
        } else {
            intro(right, depth);
            a = left;
        }
    }
    insertion(a);
}

pub fn sort_array(a: &mut [i32]) {
    let depth = 2 * (usize::BITS - a.len().leading_zeros());
    intro(a, depth);
}
`,vm=`/* Top-down merge sort with one auxiliary buffer. Stable, O(n log n). */
#include <stdlib.h>

static void merge_sort(int *a, int *tmp, int lo, int hi) {
    if (hi - lo < 2) return;
    int mid = lo + (hi - lo) / 2;
    merge_sort(a, tmp, lo, mid);
    merge_sort(a, tmp, mid, hi);
    int i = lo, j = mid, k = lo;
    while (i < mid && j < hi) tmp[k++] = (a[j] < a[i]) ? a[j++] : a[i++];
    while (i < mid) tmp[k++] = a[i++];
    while (j < hi) tmp[k++] = a[j++];
    for (k = lo; k < hi; k++) a[k] = tmp[k];
}

void sort_array(int *a, int n) {
    if (n < 2) return;
    int *tmp = malloc(sizeof(int) * n);
    merge_sort(a, tmp, 0, n);
    free(tmp);
}
`,wm=`// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).
#include <vector>

static void mergeSort(std::vector<int>& a, std::vector<int>& tmp, int lo, int hi) {
    if (hi - lo < 2) return;
    int mid = lo + (hi - lo) / 2;
    mergeSort(a, tmp, lo, mid);
    mergeSort(a, tmp, mid, hi);
    int i = lo, j = mid, k = lo;
    while (i < mid && j < hi) tmp[k++] = (a[j] < a[i]) ? a[j++] : a[i++];
    while (i < mid) tmp[k++] = a[i++];
    while (j < hi) tmp[k++] = a[j++];
    for (k = lo; k < hi; k++) a[k] = tmp[k];
}

void sortArray(std::vector<int>& a) {
    std::vector<int> tmp(a.size());
    mergeSort(a, tmp, 0, static_cast<int>(a.size()));
}
`,_m=`package main

// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).

func mergeSort(a, tmp []int, lo, hi int) {
	if hi-lo < 2 {
		return
	}
	mid := lo + (hi-lo)/2
	mergeSort(a, tmp, lo, mid)
	mergeSort(a, tmp, mid, hi)
	i, j, k := lo, mid, lo
	for i < mid && j < hi {
		if a[j] < a[i] {
			tmp[k] = a[j]
			j++
		} else {
			tmp[k] = a[i]
			i++
		}
		k++
	}
	k += copy(tmp[k:], a[i:mid])
	copy(tmp[k:], a[j:hi])
	copy(a[lo:hi], tmp[lo:hi])
}

func sortArray(a []int) { mergeSort(a, make([]int, len(a)), 0, len(a)) }
`,km=`// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).
class MergeSort {
    static void mergeSort(int[] a, int[] tmp, int lo, int hi) {
        if (hi - lo < 2) return;
        int mid = (lo + hi) >>> 1;
        mergeSort(a, tmp, lo, mid);
        mergeSort(a, tmp, mid, hi);
        int i = lo, j = mid, k = lo;
        while (i < mid && j < hi) tmp[k++] = (a[j] < a[i]) ? a[j++] : a[i++];
        while (i < mid) tmp[k++] = a[i++];
        while (j < hi) tmp[k++] = a[j++];
        System.arraycopy(tmp, lo, a, lo, hi - lo);
    }

    public static void sort(int[] a) { mergeSort(a, new int[a.length], 0, a.length); }
}
`,xm=`"""Top-down merge sort. Stable, O(n log n)."""


def _merge_sort(a, lo, hi):
    if hi - lo < 2:
        return
    mid = (lo + hi) // 2
    _merge_sort(a, lo, mid)
    _merge_sort(a, mid, hi)
    merged, i, j = [], lo, mid
    while i < mid and j < hi:
        if a[j] < a[i]:
            merged.append(a[j])
            j += 1
        else:
            merged.append(a[i])
            i += 1
    merged.extend(a[i:mid])
    merged.extend(a[j:hi])
    a[lo:hi] = merged


def sort_array(a):
    _merge_sort(a, 0, len(a))
    return a
`,bm=`// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).

fn merge_sort(a: &mut [i32], tmp: &mut [i32]) {
    let n = a.len();
    if n < 2 {
        return;
    }
    let mid = n / 2;
    merge_sort(&mut a[..mid], &mut tmp[..mid]);
    merge_sort(&mut a[mid..], &mut tmp[mid..]);
    let (mut i, mut j) = (0, mid);
    for slot in tmp.iter_mut().take(n) {
        if j >= n || (i < mid && a[i] <= a[j]) {
            *slot = a[i];
            i += 1;
        } else {
            *slot = a[j];
            j += 1;
        }
    }
    a.copy_from_slice(&tmp[..n]);
}

pub fn sort_array(a: &mut [i32]) {
    let mut tmp = vec![0; a.len()];
    merge_sort(a, &mut tmp);
}
`,Sm=`/* Odd-even (brick) sort: alternate compare-swaps on odd and even pairs. */
void sort_array(int *a, int n) {
    int sorted = 0;
    while (!sorted) {
        sorted = 1;
        for (int start = 1; start >= 0; start--)
            for (int i = start; i + 1 < n; i += 2)
                if (a[i + 1] < a[i]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; sorted = 0; }
    }
}
`,jm=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    bool sorted = false;
    while (!sorted) {
        sorted = true;
        for (size_t start : {1, 0})
            for (size_t i = start; i + 1 < a.size(); i += 2)
                if (a[i + 1] < a[i]) { std::swap(a[i], a[i + 1]); sorted = false; }
    }
}
`,Em=`package main

// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.

func sortArray(a []int) {
	sorted := false
	for !sorted {
		sorted = true
		for _, start := range []int{1, 0} {
			for i := start; i+1 < len(a); i += 2 {
				if a[i+1] < a[i] {
					a[i], a[i+1] = a[i+1], a[i]
					sorted = false
				}
			}
		}
	}
}
`,zm=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
class OddEvenSort {
    public static void sort(int[] a) {
        boolean sorted = false;
        while (!sorted) {
            sorted = true;
            for (int start = 1; start >= 0; start--)
                for (int i = start; i + 1 < a.length; i += 2)
                    if (a[i + 1] < a[i]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; sorted = false; }
        }
    }
}
`,Am=`"""Odd-even (brick) sort: alternate compare-swaps on odd and even pairs."""


def sort_array(a):
    done = False
    while not done:
        done = True
        for start in (1, 0):
            for i in range(start, len(a) - 1, 2):
                if a[i + 1] < a[i]:
                    a[i], a[i + 1] = a[i + 1], a[i]
                    done = False
    return a
`,Cm=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.

pub fn sort_array(a: &mut [i32]) {
    let mut sorted = false;
    while !sorted {
        sorted = true;
        for start in [1, 0] {
            let mut i = start;
            while i + 1 < a.len() {
                if a[i + 1] < a[i] {
                    a.swap(i, i + 1);
                    sorted = false;
                }
                i += 2;
            }
        }
    }
}
`,Nm=`/* Pancake sort: flip the maximum to the front, then flip it to the end. */
static void flip(int *a, int k) {
    for (int i = 0; i < k; i++, k--) { int t = a[i]; a[i] = a[k]; a[k] = t; }
}

void sort_array(int *a, int n) {
    for (int size = n; size > 1; size--) {
        int mi = 0;
        for (int i = 1; i < size; i++) if (a[i] > a[mi]) mi = i;
        if (mi != size - 1) {
            flip(a, mi);
            flip(a, size - 1);
        }
    }
}
`,Pm=`// Pancake sort: flip the max to the front, then flip it to the end.
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& a) {
    for (size_t size = a.size(); size > 1; size--) {
        size_t mi = std::max_element(a.begin(), a.begin() + size) - a.begin();
        if (mi != size - 1) {
            std::reverse(a.begin(), a.begin() + mi + 1);   // flip max to front
            std::reverse(a.begin(), a.begin() + size);     // flip it to the end
        }
    }
}
`,Tm=`package main

// Pancake sort: flip the max to the front, then flip it to the end.

func flip(a []int, k int) {
	for i := 0; i < k; i, k = i+1, k-1 {
		a[i], a[k] = a[k], a[i]
	}
}

func sortArray(a []int) {
	for size := len(a); size > 1; size-- {
		mi := 0
		for i := 1; i < size; i++ {
			if a[i] > a[mi] {
				mi = i
			}
		}
		if mi != size-1 {
			flip(a, mi)
			flip(a, size-1)
		}
	}
}
`,Om=`// Pancake sort: flip the max to the front, then flip it to the end.
class PancakeSort {
    static void flip(int[] a, int k) {
        for (int i = 0; i < k; i++, k--) { int t = a[i]; a[i] = a[k]; a[k] = t; }
    }

    public static void sort(int[] a) {
        for (int size = a.length; size > 1; size--) {
            int mi = 0;
            for (int i = 1; i < size; i++) if (a[i] > a[mi]) mi = i;
            if (mi != size - 1) {
                flip(a, mi);
                flip(a, size - 1);
            }
        }
    }
}
`,Lm=`"""Pancake sort: flip the max to the front, then flip it to the end."""


def sort_array(a):
    for size in range(len(a), 1, -1):
        mi = max(range(size), key=a.__getitem__)
        if mi != size - 1:
            a[:mi + 1] = a[:mi + 1][::-1]  # flip max to the front
            a[:size] = a[:size][::-1]      # flip it to the end
    return a
`,Mm=`// Pancake sort: flip the max to the front, then flip it to the end.

pub fn sort_array(a: &mut [i32]) {
    for size in (2..=a.len()).rev() {
        let mut mi = 0;
        for i in 1..size {
            if a[i] > a[mi] {
                mi = i;
            }
        }
        if mi != size - 1 {
            a[..=mi].reverse(); // flip max to the front
            a[..size].reverse(); // flip it to the end
        }
    }
}
`,Fm=`/* 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well. */
#include <stdlib.h>

static void swap(int *a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }

static void quick(int *a, int lo, int hi) {
    while (lo < hi) {
        swap(a, lo, lo + rand() % (hi - lo + 1));
        int v = a[lo], lt = lo, i = lo + 1, gt = hi;
        while (i <= gt) {
            if (a[i] < v) swap(a, lt++, i++);
            else if (a[i] > v) swap(a, i, gt--);
            else i++;
        }
        /* recurse on the smaller part, loop on the larger one */
        if (lt - lo < hi - gt) { quick(a, lo, lt - 1); lo = gt + 1; }
        else { quick(a, gt + 1, hi); hi = lt - 1; }
    }
}

void sort_array(int *a, int n) { quick(a, 0, n - 1); }
`,Rm=`// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
#include <random>
#include <utility>
#include <vector>

static std::mt19937 rng(12345);

static void quick(std::vector<int>& a, int lo, int hi) {
    while (lo < hi) {
        std::uniform_int_distribution<int> pick(lo, hi);
        std::swap(a[lo], a[pick(rng)]);
        int v = a[lo], lt = lo, i = lo + 1, gt = hi;
        while (i <= gt) {
            if (a[i] < v) std::swap(a[lt++], a[i++]);
            else if (a[i] > v) std::swap(a[i], a[gt--]);
            else i++;
        }
        if (lt - lo < hi - gt) { quick(a, lo, lt - 1); lo = gt + 1; }
        else { quick(a, gt + 1, hi); hi = lt - 1; }
    }
}

void sortArray(std::vector<int>& a) { quick(a, 0, static_cast<int>(a.size()) - 1); }
`,Im=`package main

import "math/rand"

// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.

func quick(a []int, lo, hi int) {
	for lo < hi {
		p := lo + rand.Intn(hi-lo+1)
		a[lo], a[p] = a[p], a[lo]
		v, lt, i, gt := a[lo], lo, lo+1, hi
		for i <= gt {
			if a[i] < v {
				a[lt], a[i] = a[i], a[lt]
				lt++
				i++
			} else if a[i] > v {
				a[i], a[gt] = a[gt], a[i]
				gt--
			} else {
				i++
			}
		}
		if lt-lo < hi-gt {
			quick(a, lo, lt-1)
			lo = gt + 1
		} else {
			quick(a, gt+1, hi)
			hi = lt - 1
		}
	}
}

func sortArray(a []int) { quick(a, 0, len(a)-1) }
`,$m=`import java.util.concurrent.ThreadLocalRandom;

// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
class QuickSort {
    static void swap(int[] a, int i, int j) { int t = a[i]; a[i] = a[j]; a[j] = t; }

    static void quick(int[] a, int lo, int hi) {
        while (lo < hi) {
            swap(a, lo, ThreadLocalRandom.current().nextInt(lo, hi + 1));
            int v = a[lo], lt = lo, i = lo + 1, gt = hi;
            while (i <= gt) {
                if (a[i] < v) swap(a, lt++, i++);
                else if (a[i] > v) swap(a, i, gt--);
                else i++;
            }
            if (lt - lo < hi - gt) { quick(a, lo, lt - 1); lo = gt + 1; }
            else { quick(a, gt + 1, hi); hi = lt - 1; }
        }
    }

    public static void sort(int[] a) { quick(a, 0, a.length - 1); }
}
`,Dm=`"""3-way (Dijkstra) quicksort with a random pivot: handles duplicates well."""
import random


def _quick(a, lo, hi):
    while lo < hi:
        p = random.randint(lo, hi)
        a[lo], a[p] = a[p], a[lo]
        v, lt, i, gt = a[lo], lo, lo + 1, hi
        while i <= gt:
            if a[i] < v:
                a[lt], a[i] = a[i], a[lt]
                lt += 1
                i += 1
            elif a[i] > v:
                a[i], a[gt] = a[gt], a[i]
                gt -= 1
            else:
                i += 1
        # recurse on the smaller part, loop on the larger one
        if lt - lo < hi - gt:
            _quick(a, lo, lt - 1)
            lo = gt + 1
        else:
            _quick(a, gt + 1, hi)
            hi = lt - 1


def sort_array(a):
    _quick(a, 0, len(a) - 1)
    return a
`,Bm=`// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
// A tiny xorshift PRNG keeps the snippet dependency-free.

fn next_rand(state: &mut u64) -> u64 {
    *state ^= *state << 13;
    *state ^= *state >> 7;
    *state ^= *state << 17;
    *state
}

fn quick(a: &mut [i32], rng: &mut u64) {
    let (mut lo, mut hi) = (0usize, a.len());
    // sort a[lo..hi)
    while hi - lo > 1 {
        let p = lo + (next_rand(rng) % (hi - lo) as u64) as usize;
        a.swap(lo, p);
        let v = a[lo];
        let (mut lt, mut i, mut gt) = (lo, lo + 1, hi);
        while i < gt {
            if a[i] < v {
                a.swap(lt, i);
                lt += 1;
                i += 1;
            } else if a[i] > v {
                gt -= 1;
                a.swap(i, gt);
            } else {
                i += 1;
            }
        }
        // a[lo..lt) < v, a[lt..gt) == v, a[gt..hi) > v
        if lt - lo < hi - gt {
            quick(&mut a[lo..lt], rng);
            lo = gt;
        } else {
            quick(&mut a[gt..hi], rng);
            hi = lt;
        }
    }
}

pub fn sort_array(a: &mut [i32]) {
    let mut rng = 0x2545_F491_4F6C_DD1D_u64;
    quick(a, &mut rng);
}
`,Um=`/* LSD radix sort, base 256. Negative numbers are handled by sorting
 * the offset key (value - min) as an unsigned 32-bit number. */
#include <stdlib.h>
#include <string.h>

void sort_array(int *a, int n) {
    if (n < 2) return;
    int min = a[0];
    for (int i = 1; i < n; i++) if (a[i] < min) min = a[i];
    unsigned *key = malloc(sizeof(unsigned) * n), *out = malloc(sizeof(unsigned) * n), max = 0;
    for (int i = 0; i < n; i++) {
        key[i] = (unsigned)((long long)a[i] - min);
        if (key[i] > max) max = key[i];
    }
    for (int shift = 0; shift < 32 && (max >> shift) > 0; shift += 8) {
        size_t count[257];
        memset(count, 0, sizeof count);
        for (int i = 0; i < n; i++) count[((key[i] >> shift) & 255) + 1]++;
        for (int d = 0; d < 256; d++) count[d + 1] += count[d];
        for (int i = 0; i < n; i++) out[count[(key[i] >> shift) & 255]++] = key[i];
        unsigned *t = key; key = out; out = t;
    }
    for (int i = 0; i < n; i++) a[i] = (int)((long long)key[i] + min);
    free(key); free(out);
}
`,Vm=`// LSD radix sort, base 256, on the unsigned offset key (value - min).
#include <algorithm>
#include <array>
#include <cstdint>
#include <vector>

void sortArray(std::vector<int>& a) {
    if (a.size() < 2) return;
    long long mn = *std::min_element(a.begin(), a.end());
    std::vector<uint32_t> key(a.size()), out(a.size());
    uint32_t mx = 0;
    for (size_t i = 0; i < a.size(); i++) {
        key[i] = static_cast<uint32_t>(a[i] - mn);
        mx = std::max(mx, key[i]);
    }
    for (int shift = 0; shift < 32 && (mx >> shift) > 0; shift += 8) {
        std::array<size_t, 257> count{};
        for (uint32_t k : key) count[((k >> shift) & 255) + 1]++;
        for (int d = 0; d < 256; d++) count[d + 1] += count[d];
        for (uint32_t k : key) out[count[(k >> shift) & 255]++] = k;
        key.swap(out);
    }
    for (size_t i = 0; i < a.size(); i++) a[i] = static_cast<int>(key[i] + mn);
}
`,Hm=`package main

// LSD radix sort, base 256, on the unsigned offset key (value - min).

func sortArray(a []int) {
	n := len(a)
	if n < 2 {
		return
	}
	min := a[0]
	for _, v := range a {
		if v < min {
			min = v
		}
	}
	key, out := make([]uint64, n), make([]uint64, n)
	var max uint64
	for i, v := range a {
		key[i] = uint64(v - min)
		if key[i] > max {
			max = key[i]
		}
	}
	for shift := uint(0); shift < 64 && max>>shift > 0; shift += 8 {
		var count [257]int
		for _, k := range key {
			count[(k>>shift)&255+1]++
		}
		for d := 0; d < 256; d++ {
			count[d+1] += count[d]
		}
		for _, k := range key {
			d := (k >> shift) & 255
			out[count[d]] = k
			count[d]++
		}
		key, out = out, key
	}
	for i, k := range key {
		a[i] = int(k) + min
	}
}
`,Wm=`// LSD radix sort, base 256, on the offset key (value - min) as a long.
class RadixSort {
    public static void sort(int[] a) {
        int n = a.length;
        if (n < 2) return;
        long min = a[0];
        for (int v : a) min = Math.min(min, v);
        long[] key = new long[n], out = new long[n];
        long max = 0;
        for (int i = 0; i < n; i++) { key[i] = a[i] - min; max = Math.max(max, key[i]); }
        for (int shift = 0; shift < 40 && (max >> shift) > 0; shift += 8) {
            int[] count = new int[257];
            for (long k : key) count[(int) ((k >> shift) & 255) + 1]++;
            for (int d = 0; d < 256; d++) count[d + 1] += count[d];
            for (long k : key) out[count[(int) ((k >> shift) & 255)]++] = k;
            long[] t = key; key = out; out = t;
        }
        for (int i = 0; i < n; i++) a[i] = (int) (key[i] + min);
    }
}
`,qm=`"""LSD radix sort, base 256, on the offset key (value - min)."""


def sort_array(a):
    if len(a) < 2:
        return a
    lo = min(a)
    keys = [v - lo for v in a]
    max_key, shift = max(keys), 0
    while (max_key >> shift) > 0:
        buckets = [[] for _ in range(256)]
        for k in keys:
            buckets[(k >> shift) & 255].append(k)
        keys = [k for b in buckets for k in b]
        shift += 8
    a[:] = [k + lo for k in keys]
    return a
`,Qm=`// LSD radix sort, base 256, on the unsigned offset key (value - min).

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    if n < 2 {
        return;
    }
    let min = *a.iter().min().unwrap() as i64;
    let mut key: Vec<u32> = a.iter().map(|&v| (v as i64 - min) as u32).collect();
    let max = *key.iter().max().unwrap();
    let mut out = vec![0u32; n];
    let mut shift = 0;
    while shift < 32 && (max >> shift) > 0 {
        let mut count = [0usize; 257];
        for &k in &key {
            count[((k >> shift) & 255) as usize + 1] += 1;
        }
        for d in 0..256 {
            count[d + 1] += count[d];
        }
        for &k in &key {
            let d = ((k >> shift) & 255) as usize;
            out[count[d]] = k;
            count[d] += 1;
        }
        std::mem::swap(&mut key, &mut out);
        shift += 8;
    }
    for (slot, &k) in a.iter_mut().zip(&key) {
        *slot = (k as i64 + min) as i32;
    }
}
`,Gm=`/* Selection sort: repeatedly select the minimum of the unsorted suffix. */
void sort_array(int *a, int n) {
    for (int i = 0; i + 1 < n; i++) {
        int m = i;
        for (int j = i + 1; j < n; j++) if (a[j] < a[m]) m = j;
        int t = a[i]; a[i] = a[m]; a[m] = t;
    }
}
`,Km=`// Selection sort: repeatedly select the minimum of the unsorted suffix.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    for (size_t i = 0; i + 1 < a.size(); i++) {
        size_t m = i;
        for (size_t j = i + 1; j < a.size(); j++) if (a[j] < a[m]) m = j;
        std::swap(a[i], a[m]);
    }
}
`,Ym=`package main

// Selection sort: repeatedly select the minimum of the unsorted suffix.

func sortArray(a []int) {
	for i := 0; i+1 < len(a); i++ {
		m := i
		for j := i + 1; j < len(a); j++ {
			if a[j] < a[m] {
				m = j
			}
		}
		a[i], a[m] = a[m], a[i]
	}
}
`,Zm=`// Selection sort: repeatedly select the minimum of the unsorted suffix.
class SelectionSort {
    public static void sort(int[] a) {
        for (int i = 0; i + 1 < a.length; i++) {
            int m = i;
            for (int j = i + 1; j < a.length; j++) if (a[j] < a[m]) m = j;
            int t = a[i]; a[i] = a[m]; a[m] = t;
        }
    }
}
`,Xm=`"""Selection sort: repeatedly select the minimum of the unsorted suffix."""


def sort_array(a):
    n = len(a)
    for i in range(n - 1):
        m = i
        for j in range(i + 1, n):
            if a[j] < a[m]:
                m = j
        a[i], a[m] = a[m], a[i]
    return a
`,Jm=`// Selection sort: repeatedly select the minimum of the unsorted suffix.

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    for i in 0..n.saturating_sub(1) {
        let mut m = i;
        for j in i + 1..n {
            if a[j] < a[m] {
                m = j;
            }
        }
        a.swap(i, m);
    }
}
`,eg=`/* Shell sort with the Ciura gap sequence (extended by x2.25). */
void sort_array(int *a, int n) {
    int gaps[64] = {1, 4, 10, 23, 57, 132, 301, 701}, g = 8;
    while (gaps[g - 1] < n / 2 && g < 64) { gaps[g] = (int)(gaps[g - 1] * 2.25); g++; }
    for (int k = g - 1; k >= 0; k--) {
        int gap = gaps[k];
        for (int i = gap; i < n; i++) {
            int key = a[i], j = i;
            while (j >= gap && key < a[j - gap]) { a[j] = a[j - gap]; j -= gap; }
            a[j] = key;
        }
    }
}
`,ng=`// Shell sort with the Ciura gap sequence (extended by x2.25).
#include <vector>

void sortArray(std::vector<int>& a) {
    int n = static_cast<int>(a.size());
    std::vector<int> gaps = {1, 4, 10, 23, 57, 132, 301, 701};
    while (gaps.back() < n / 2) gaps.push_back(static_cast<int>(gaps.back() * 2.25));
    for (auto it = gaps.rbegin(); it != gaps.rend(); ++it) {
        int gap = *it;
        for (int i = gap; i < n; i++) {
            int key = a[i], j = i;
            while (j >= gap && key < a[j - gap]) { a[j] = a[j - gap]; j -= gap; }
            a[j] = key;
        }
    }
}
`,tg=`package main

// Shell sort with the Ciura gap sequence (extended by x2.25).

func sortArray(a []int) {
	n := len(a)
	gaps := []int{1, 4, 10, 23, 57, 132, 301, 701}
	for gaps[len(gaps)-1] < n/2 {
		gaps = append(gaps, int(float64(gaps[len(gaps)-1])*2.25))
	}
	for g := len(gaps) - 1; g >= 0; g-- {
		gap := gaps[g]
		for i := gap; i < n; i++ {
			key, j := a[i], i
			for j >= gap && key < a[j-gap] {
				a[j] = a[j-gap]
				j -= gap
			}
			a[j] = key
		}
	}
}
`,ig=`import java.util.ArrayList;
import java.util.List;

// Shell sort with the Ciura gap sequence (extended by x2.25).
class ShellSort {
    public static void sort(int[] a) {
        int n = a.length;
        List<Integer> gaps = new ArrayList<>(List.of(1, 4, 10, 23, 57, 132, 301, 701));
        while (gaps.get(gaps.size() - 1) < n / 2) gaps.add((int) (gaps.get(gaps.size() - 1) * 2.25));
        for (int g = gaps.size() - 1; g >= 0; g--) {
            int gap = gaps.get(g);
            for (int i = gap; i < n; i++) {
                int key = a[i], j = i;
                while (j >= gap && key < a[j - gap]) { a[j] = a[j - gap]; j -= gap; }
                a[j] = key;
            }
        }
    }
}
`,rg=`"""Shell sort with the Ciura gap sequence (extended by x2.25)."""


def sort_array(a):
    n = len(a)
    gaps = [1, 4, 10, 23, 57, 132, 301, 701]
    while gaps[-1] < n // 2:
        gaps.append(int(gaps[-1] * 2.25))
    for gap in reversed(gaps):
        for i in range(gap, n):
            key, j = a[i], i
            while j >= gap and key < a[j - gap]:
                a[j] = a[j - gap]
                j -= gap
            a[j] = key
    return a
`,ag=`// Shell sort with the Ciura gap sequence (extended by x2.25).

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    let mut gaps = vec![1usize, 4, 10, 23, 57, 132, 301, 701];
    while *gaps.last().unwrap() < n / 2 {
        let next = (*gaps.last().unwrap() as f64 * 2.25) as usize;
        gaps.push(next);
    }
    for &gap in gaps.iter().rev() {
        for i in gap..n {
            let key = a[i];
            let mut j = i;
            while j >= gap && key < a[j - gap] {
                a[j] = a[j - gap];
                j -= gap;
            }
            a[j] = key;
        }
    }
}
`,og=`/* Simplified Timsort: natural runs extended to MINRUN with binary
 * insertion sort, then merged with a stack that keeps run lengths balanced. */
#include <stdlib.h>
#include <string.h>

static int min_run(int n) {
    int r = 0;
    while (n >= 32) { r |= n & 1; n >>= 1; }
    return n + r;
}

static void merge_runs(int *a, int lo, int mid, int hi) {
    int len = mid - lo;
    int *tmp = malloc(sizeof(int) * (len > 0 ? len : 1));
    memcpy(tmp, a + lo, sizeof(int) * len);
    int i = 0, j = mid, k = lo;
    while (i < len && j < hi) a[k++] = (a[j] < tmp[i]) ? a[j++] : tmp[i++];
    while (i < len) a[k++] = tmp[i++];
    free(tmp);
}

void sort_array(int *a, int n) {
    if (n < 2) return;
    int minrun = min_run(n);
    int *start = malloc(sizeof(int) * (n + 1)), *len = malloc(sizeof(int) * (n + 1));
    int top = 0, lo = 0;
    while (lo < n) {
        int hi = lo + 1;
        if (hi < n) {
            if (a[hi] < a[lo]) {               /* strictly descending run: reverse it */
                while (hi + 1 < n && a[hi + 1] < a[hi]) hi++;
                for (int x = lo, y = hi; x < y; x++, y--) { int t = a[x]; a[x] = a[y]; a[y] = t; }
            } else {
                while (hi + 1 < n && a[hi + 1] >= a[hi]) hi++;
            }
            hi++;
        }
        int end = lo + minrun < n ? lo + minrun : n;
        if (end < hi) end = hi;
        for (int i = hi; i < end; i++) {      /* binary insertion sort */
            int key = a[i], l = lo, r = i;
            while (l < r) { int m = (l + r) / 2; if (key < a[m]) r = m; else l = m + 1; }
            memmove(a + l + 1, a + l, sizeof(int) * (i - l));
            a[l] = key;
        }
        start[top] = lo; len[top] = end - lo; top++;
        lo = end;
        while (top > 1) {                     /* keep the run stack balanced */
            int b = len[top - 2], c = len[top - 1], at;
            if ((top >= 3 && len[top - 3] <= b + c) || (top >= 4 && len[top - 4] <= len[top - 3] + b))
                at = (len[top - 3] < c) ? top - 3 : top - 2;
            else if (b <= c) at = top - 2;
            else break;
            merge_runs(a, start[at], start[at] + len[at], start[at] + len[at] + len[at + 1]);
            len[at] += len[at + 1];
            for (int k = at + 1; k < top - 1; k++) { start[k] = start[k + 1]; len[k] = len[k + 1]; }
            top--;
        }
    }
    while (top > 1) {
        int at = top - 2;
        merge_runs(a, start[at], start[at] + len[at], start[at] + len[at] + len[at + 1]);
        len[at] += len[at + 1];
        top--;
    }
    free(start); free(len);
}
`,sg=`// Simplified Timsort: natural runs extended to MINRUN with binary
// insertion sort, merged via a stack that keeps run lengths balanced.
#include <algorithm>
#include <utility>
#include <vector>

static int minRun(int n) {
    int r = 0;
    while (n >= 32) { r |= n & 1; n >>= 1; }
    return n + r;
}

static void mergeRuns(std::vector<int>& a, int lo, int mid, int hi) {
    std::vector<int> tmp(a.begin() + lo, a.begin() + mid);
    size_t i = 0;
    int j = mid, k = lo;
    while (i < tmp.size() && j < hi) a[k++] = (a[j] < tmp[i]) ? a[j++] : tmp[i++];
    while (i < tmp.size()) a[k++] = tmp[i++];
}

void sortArray(std::vector<int>& a) {
    int n = static_cast<int>(a.size());
    if (n < 2) return;
    int minrun = minRun(n);
    std::vector<std::pair<int, int>> runs;  // (start, length)
    auto mergeAt = [&](size_t i) {
        mergeRuns(a, runs[i].first, runs[i].first + runs[i].second,
                  runs[i].first + runs[i].second + runs[i + 1].second);
        runs[i].second += runs[i + 1].second;
        runs.erase(runs.begin() + i + 1);
    };
    for (int lo = 0; lo < n;) {
        int hi = lo + 1;
        if (hi < n) {
            if (a[hi] < a[lo]) {  // strictly descending: reverse
                while (hi + 1 < n && a[hi + 1] < a[hi]) hi++;
                std::reverse(a.begin() + lo, a.begin() + hi + 1);
            } else {
                while (hi + 1 < n && a[hi + 1] >= a[hi]) hi++;
            }
            hi++;
        }
        int end = std::max(std::min(n, lo + minrun), hi);
        for (int i = hi; i < end; i++) {  // binary insertion sort
            int key = a[i];
            auto pos = std::upper_bound(a.begin() + lo, a.begin() + i, key);
            std::move_backward(pos, a.begin() + i, a.begin() + i + 1);
            *pos = key;
        }
        runs.push_back({lo, end - lo});
        lo = end;
        while (runs.size() > 1) {
            size_t m = runs.size();
            int b = runs[m - 2].second, c = runs[m - 1].second;
            if ((m >= 3 && runs[m - 3].second <= b + c) ||
                (m >= 4 && runs[m - 4].second <= runs[m - 3].second + b)) {
                mergeAt(runs[m - 3].second < c ? m - 3 : m - 2);
            } else if (b <= c) {
                mergeAt(m - 2);
            } else {
                break;
            }
        }
    }
    while (runs.size() > 1) mergeAt(runs.size() - 2);
}
`,lg=`package main

// Simplified Timsort: natural runs extended to minRun with binary
// insertion sort, merged via a stack that keeps run lengths balanced.

func minRun(n int) int {
	r := 0
	for n >= 32 {
		r |= n & 1
		n >>= 1
	}
	return n + r
}

func mergeRuns(a []int, lo, mid, hi int) {
	tmp := append([]int(nil), a[lo:mid]...)
	i, j, k := 0, mid, lo
	for i < len(tmp) && j < hi {
		if a[j] < tmp[i] {
			a[k] = a[j]
			j++
		} else {
			a[k] = tmp[i]
			i++
		}
		k++
	}
	copy(a[k:], tmp[i:])
}

type run struct{ start, length int }

func sortArray(a []int) {
	n := len(a)
	if n < 2 {
		return
	}
	mr := minRun(n)
	var runs []run
	mergeAt := func(i int) {
		x, y := runs[i], runs[i+1]
		mergeRuns(a, x.start, x.start+x.length, x.start+x.length+y.length)
		runs[i].length += y.length
		runs = append(runs[:i+1], runs[i+2:]...)
	}
	for lo := 0; lo < n; {
		hi := lo + 1
		if hi < n {
			if a[hi] < a[lo] { // strictly descending: reverse
				for hi+1 < n && a[hi+1] < a[hi] {
					hi++
				}
				for x, y := lo, hi; x < y; x, y = x+1, y-1 {
					a[x], a[y] = a[y], a[x]
				}
			} else {
				for hi+1 < n && a[hi+1] >= a[hi] {
					hi++
				}
			}
			hi++
		}
		end := lo + mr
		if end > n {
			end = n
		}
		if end < hi {
			end = hi
		}
		for i := hi; i < end; i++ { // binary insertion sort
			key, l, r := a[i], lo, i
			for l < r {
				m := (l + r) / 2
				if key < a[m] {
					r = m
				} else {
					l = m + 1
				}
			}
			copy(a[l+1:i+1], a[l:i])
			a[l] = key
		}
		runs = append(runs, run{lo, end - lo})
		lo = end
		for len(runs) > 1 {
			m := len(runs)
			b, c := runs[m-2].length, runs[m-1].length
			if (m >= 3 && runs[m-3].length <= b+c) || (m >= 4 && runs[m-4].length <= runs[m-3].length+b) {
				if runs[m-3].length < c {
					mergeAt(m - 3)
				} else {
					mergeAt(m - 2)
				}
			} else if b <= c {
				mergeAt(m - 2)
			} else {
				break
			}
		}
	}
	for len(runs) > 1 {
		mergeAt(len(runs) - 2)
	}
}
`,ug=`import java.util.ArrayList;
import java.util.List;

// Simplified Timsort: natural runs extended to MINRUN with binary
// insertion sort, merged via a stack that keeps run lengths balanced.
class TimSort {
    static int minRun(int n) {
        int r = 0;
        while (n >= 32) { r |= n & 1; n >>= 1; }
        return n + r;
    }

    static void mergeRuns(int[] a, int lo, int mid, int hi) {
        int[] tmp = java.util.Arrays.copyOfRange(a, lo, mid);
        int i = 0, j = mid, k = lo;
        while (i < tmp.length && j < hi) a[k++] = (a[j] < tmp[i]) ? a[j++] : tmp[i++];
        while (i < tmp.length) a[k++] = tmp[i++];
    }

    static void mergeAt(int[] a, List<int[]> runs, int i) {
        int[] x = runs.get(i), y = runs.get(i + 1);
        mergeRuns(a, x[0], x[0] + x[1], x[0] + x[1] + y[1]);
        x[1] += y[1];
        runs.remove(i + 1);
    }

    public static void sort(int[] a) {
        int n = a.length;
        if (n < 2) return;
        int minrun = minRun(n);
        List<int[]> runs = new ArrayList<>();   // {start, length}
        for (int lo = 0; lo < n; ) {
            int hi = lo + 1;
            if (hi < n) {
                if (a[hi] < a[lo]) {             // strictly descending: reverse
                    while (hi + 1 < n && a[hi + 1] < a[hi]) hi++;
                    for (int x = lo, y = hi; x < y; x++, y--) { int t = a[x]; a[x] = a[y]; a[y] = t; }
                } else {
                    while (hi + 1 < n && a[hi + 1] >= a[hi]) hi++;
                }
                hi++;
            }
            int end = Math.max(Math.min(n, lo + minrun), hi);
            for (int i = hi; i < end; i++) {      // binary insertion sort
                int key = a[i], l = lo, r = i;
                while (l < r) { int m = (l + r) >>> 1; if (key < a[m]) r = m; else l = m + 1; }
                System.arraycopy(a, l, a, l + 1, i - l);
                a[l] = key;
            }
            runs.add(new int[] {lo, end - lo});
            lo = end;
            while (runs.size() > 1) {
                int m = runs.size(), b = runs.get(m - 2)[1], c = runs.get(m - 1)[1];
                if ((m >= 3 && runs.get(m - 3)[1] <= b + c) || (m >= 4 && runs.get(m - 4)[1] <= runs.get(m - 3)[1] + b)) {
                    mergeAt(a, runs, runs.get(m - 3)[1] < c ? m - 3 : m - 2);
                } else if (b <= c) {
                    mergeAt(a, runs, m - 2);
                } else {
                    break;
                }
            }
        }
        while (runs.size() > 1) mergeAt(a, runs, runs.size() - 2);
    }
}
`,cg=`"""Simplified Timsort: natural runs extended to MIN_RUN with binary
insertion sort, merged via a stack that keeps run lengths balanced."""
from bisect import bisect_right


def _min_run(n):
    r = 0
    while n >= 32:
        r |= n & 1
        n >>= 1
    return n + r


def _merge(a, lo, mid, hi):
    tmp = a[lo:mid]
    i, j, k = 0, mid, lo
    while i < len(tmp) and j < hi:
        if a[j] < tmp[i]:
            a[k] = a[j]
            j += 1
        else:
            a[k] = tmp[i]
            i += 1
        k += 1
    a[k:k + len(tmp) - i] = tmp[i:]


def sort_array(a):
    n = len(a)
    if n < 2:
        return a
    min_run = _min_run(n)
    runs = []  # [start, length]

    def merge_at(i):
        s, l1 = runs[i]
        l2 = runs[i + 1][1]
        _merge(a, s, s + l1, s + l1 + l2)
        runs[i] = [s, l1 + l2]
        del runs[i + 1]

    lo = 0
    while lo < n:
        hi = lo + 1
        if hi < n:
            if a[hi] < a[lo]:  # strictly descending: reverse
                while hi + 1 < n and a[hi + 1] < a[hi]:
                    hi += 1
                a[lo:hi + 1] = a[lo:hi + 1][::-1]
            else:
                while hi + 1 < n and a[hi + 1] >= a[hi]:
                    hi += 1
            hi += 1
        end = max(min(n, lo + min_run), hi)
        for i in range(hi, end):  # binary insertion sort
            key = a[i]
            pos = bisect_right(a, key, lo, i)
            a[pos + 1:i + 1] = a[pos:i]
            a[pos] = key
        runs.append([lo, end - lo])
        lo = end
        while len(runs) > 1:
            m = len(runs)
            b, c = runs[m - 2][1], runs[m - 1][1]
            if (m >= 3 and runs[m - 3][1] <= b + c) or (m >= 4 and runs[m - 4][1] <= runs[m - 3][1] + b):
                merge_at(m - 3 if runs[m - 3][1] < c else m - 2)
            elif b <= c:
                merge_at(m - 2)
            else:
                break
    while len(runs) > 1:
        merge_at(len(runs) - 2)
    return a
`,dg=`// Simplified Timsort: natural runs extended to MIN_RUN with binary
// insertion sort, merged via a stack that keeps run lengths balanced.

fn min_run(mut n: usize) -> usize {
    let mut r = 0;
    while n >= 32 {
        r |= n & 1;
        n >>= 1;
    }
    n + r
}

fn merge_runs(a: &mut [i32], lo: usize, mid: usize, hi: usize) {
    let tmp = a[lo..mid].to_vec();
    let (mut i, mut j, mut k) = (0, mid, lo);
    while i < tmp.len() && j < hi {
        if a[j] < tmp[i] {
            a[k] = a[j];
            j += 1;
        } else {
            a[k] = tmp[i];
            i += 1;
        }
        k += 1;
    }
    a[k..k + tmp.len() - i].copy_from_slice(&tmp[i..]);
}

fn merge_at(a: &mut [i32], runs: &mut Vec<(usize, usize)>, i: usize) {
    let ((s, l1), (_, l2)) = (runs[i], runs[i + 1]);
    merge_runs(a, s, s + l1, s + l1 + l2);
    runs[i].1 = l1 + l2;
    runs.remove(i + 1);
}

pub fn sort_array(a: &mut [i32]) {
    let n = a.len();
    if n < 2 {
        return;
    }
    let minrun = min_run(n);
    let mut runs: Vec<(usize, usize)> = Vec::new(); // (start, len)
    let mut lo = 0;
    while lo < n {
        let mut hi = lo + 1;
        if hi < n {
            if a[hi] < a[lo] {
                // strictly descending: reverse
                while hi + 1 < n && a[hi + 1] < a[hi] {
                    hi += 1;
                }
                a[lo..=hi].reverse();
            } else {
                while hi + 1 < n && a[hi + 1] >= a[hi] {
                    hi += 1;
                }
            }
            hi += 1;
        }
        let end = (lo + minrun).min(n).max(hi);
        for i in hi..end {
            // binary insertion sort
            let key = a[i];
            let pos = lo + a[lo..i].partition_point(|&x| x <= key);
            a[pos..=i].rotate_right(1);
            a[pos] = key;
        }
        runs.push((lo, end - lo));
        lo = end;
        while runs.len() > 1 {
            let m = runs.len();
            let (b, c) = (runs[m - 2].1, runs[m - 1].1);
            if (m >= 3 && runs[m - 3].1 <= b + c) || (m >= 4 && runs[m - 4].1 <= runs[m - 3].1 + b) {
                let at = if runs[m - 3].1 < c { m - 3 } else { m - 2 };
                merge_at(a, &mut runs, at);
            } else if b <= c {
                merge_at(a, &mut runs, m - 2);
            } else {
                break;
            }
        }
    }
    while runs.len() > 1 {
        let at = runs.len() - 2;
        merge_at(a, &mut runs, at);
    }
}
`,sd=Object.assign({"../snippets/bitonic/c.c":eh,"../snippets/bitonic/cpp.cpp":nh,"../snippets/bitonic/go.go":th,"../snippets/bitonic/java.java":ih,"../snippets/bitonic/python.py":rh,"../snippets/bitonic/rust.rs":ah,"../snippets/bogo/c.c":oh,"../snippets/bogo/cpp.cpp":sh,"../snippets/bogo/go.go":lh,"../snippets/bogo/java.java":uh,"../snippets/bogo/python.py":ch,"../snippets/bogo/rust.rs":dh,"../snippets/bubble/c.c":fh,"../snippets/bubble/cpp.cpp":ph,"../snippets/bubble/go.go":hh,"../snippets/bubble/java.java":mh,"../snippets/bubble/python.py":gh,"../snippets/bubble/rust.rs":yh,"../snippets/bucket/c.c":vh,"../snippets/bucket/cpp.cpp":wh,"../snippets/bucket/go.go":_h,"../snippets/bucket/java.java":kh,"../snippets/bucket/python.py":xh,"../snippets/bucket/rust.rs":bh,"../snippets/cocktail/c.c":Sh,"../snippets/cocktail/cpp.cpp":jh,"../snippets/cocktail/go.go":Eh,"../snippets/cocktail/java.java":zh,"../snippets/cocktail/python.py":Ah,"../snippets/cocktail/rust.rs":Ch,"../snippets/comb/c.c":Nh,"../snippets/comb/cpp.cpp":Ph,"../snippets/comb/go.go":Th,"../snippets/comb/java.java":Oh,"../snippets/comb/python.py":Lh,"../snippets/comb/rust.rs":Mh,"../snippets/counting/c.c":Fh,"../snippets/counting/cpp.cpp":Rh,"../snippets/counting/go.go":Ih,"../snippets/counting/java.java":$h,"../snippets/counting/python.py":Dh,"../snippets/counting/rust.rs":Bh,"../snippets/cycle/c.c":Uh,"../snippets/cycle/cpp.cpp":Vh,"../snippets/cycle/go.go":Hh,"../snippets/cycle/java.java":Wh,"../snippets/cycle/python.py":qh,"../snippets/cycle/rust.rs":Qh,"../snippets/gnome/c.c":Gh,"../snippets/gnome/cpp.cpp":Kh,"../snippets/gnome/go.go":Yh,"../snippets/gnome/java.java":Zh,"../snippets/gnome/python.py":Xh,"../snippets/gnome/rust.rs":Jh,"../snippets/heap/c.c":em,"../snippets/heap/cpp.cpp":nm,"../snippets/heap/go.go":tm,"../snippets/heap/java.java":im,"../snippets/heap/python.py":rm,"../snippets/heap/rust.rs":am,"../snippets/insertion/c.c":om,"../snippets/insertion/cpp.cpp":sm,"../snippets/insertion/go.go":lm,"../snippets/insertion/java.java":um,"../snippets/insertion/python.py":cm,"../snippets/insertion/rust.rs":dm,"../snippets/introsort/c.c":fm,"../snippets/introsort/cpp.cpp":pm,"../snippets/introsort/go.go":hm,"../snippets/introsort/java.java":mm,"../snippets/introsort/python.py":gm,"../snippets/introsort/rust.rs":ym,"../snippets/merge/c.c":vm,"../snippets/merge/cpp.cpp":wm,"../snippets/merge/go.go":_m,"../snippets/merge/java.java":km,"../snippets/merge/python.py":xm,"../snippets/merge/rust.rs":bm,"../snippets/odd-even/c.c":Sm,"../snippets/odd-even/cpp.cpp":jm,"../snippets/odd-even/go.go":Em,"../snippets/odd-even/java.java":zm,"../snippets/odd-even/python.py":Am,"../snippets/odd-even/rust.rs":Cm,"../snippets/pancake/c.c":Nm,"../snippets/pancake/cpp.cpp":Pm,"../snippets/pancake/go.go":Tm,"../snippets/pancake/java.java":Om,"../snippets/pancake/python.py":Lm,"../snippets/pancake/rust.rs":Mm,"../snippets/quick/c.c":Fm,"../snippets/quick/cpp.cpp":Rm,"../snippets/quick/go.go":Im,"../snippets/quick/java.java":$m,"../snippets/quick/python.py":Dm,"../snippets/quick/rust.rs":Bm,"../snippets/radix/c.c":Um,"../snippets/radix/cpp.cpp":Vm,"../snippets/radix/go.go":Hm,"../snippets/radix/java.java":Wm,"../snippets/radix/python.py":qm,"../snippets/radix/rust.rs":Qm,"../snippets/selection/c.c":Gm,"../snippets/selection/cpp.cpp":Km,"../snippets/selection/go.go":Ym,"../snippets/selection/java.java":Zm,"../snippets/selection/python.py":Xm,"../snippets/selection/rust.rs":Jm,"../snippets/shell/c.c":eg,"../snippets/shell/cpp.cpp":ng,"../snippets/shell/go.go":tg,"../snippets/shell/java.java":ig,"../snippets/shell/python.py":rg,"../snippets/shell/rust.rs":ag,"../snippets/timsort/c.c":og,"../snippets/timsort/cpp.cpp":sg,"../snippets/timsort/go.go":lg,"../snippets/timsort/java.java":ug,"../snippets/timsort/python.py":cg,"../snippets/timsort/rust.rs":dg});function fg(e,n){return sd[`../snippets/${e}/${n}`]}Object.keys(sd).length;const jo="sort-pedia:default-language";function pg(){const[e,n]=R.useState(od());return d.jsxs("label",{className:"settings",children:[d.jsx("span",{children:"Default code language"}),d.jsx("select",{"aria-label":"Default code language","data-testid":"default-lang",value:e,onChange:t=>{const i=t.target.value;_i(i)&&(Jp(i),n(i),window.dispatchEvent(new CustomEvent(jo,{detail:i})))},children:Or.map(t=>d.jsx("option",{value:t.id,children:t.label},t.id))})]})}const hg={java:"Call: <Class>.sort(int[] a)",c:"Call: sort_array(int *a, int n)",cpp:"Call: sortArray(std::vector<int>& a)",go:"Call: sortArray(a []int)",rust:"Call: sort_array(&mut [i32])",python:"Call: sort_array(list)"};function mg({algoId:e}){const[n,t]=R.useState(od()),[i,r]=R.useState(!1);R.useEffect(()=>{const u=f=>{const m=f.detail;_i(m)&&t(m)};return window.addEventListener(jo,u),()=>window.removeEventListener(jo,u)},[]);const a=Or.find(u=>u.id===n),o=fg(e,a.file)??"// snippet missing",s=R.useMemo(()=>Fl.highlight(o,Fl.languages[a.prism],a.prism),[o,a.prism]);return d.jsxs("div",{className:"code-panel",children:[d.jsxs("div",{className:"code-toolbar",children:[d.jsxs("label",{children:[d.jsx("span",{children:"Language"}),d.jsx("select",{"data-testid":"lang-select",value:n,onChange:u=>_i(u.target.value)&&t(u.target.value),children:Or.map(u=>d.jsx("option",{value:u.id,children:u.label},u.id))})]}),d.jsx("button",{type:"button",className:"btn small",onClick:()=>{navigator.clipboard?.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),1200)},()=>{})},children:i?"Copied":"Copy"})]}),d.jsxs("p",{className:"muted small",children:[hg[n]," · compiled and tested by scripts/verify-snippets.mjs"]}),d.jsx("pre",{className:`language-${a.prism}`,"data-testid":"code-block","data-lang":n,children:d.jsx("code",{className:`language-${a.prism}`,dangerouslySetInnerHTML:{__html:s}})})]})}const Rl=[{id:"n",label:"n (n + k)",f:e=>e,color:"var(--c1)"},{id:"nk",label:"n·k (k = 4)",f:e=>4*e,color:"var(--c2)"},{id:"nlogn",label:"n log n",f:e=>e*Math.log2(Math.max(e,1)),color:"var(--c3)"},{id:"n32",label:"n^1.5",f:e=>e**1.5,color:"var(--c4)"},{id:"nlog2n",label:"n log² n",f:e=>e*Math.log2(Math.max(e,1))**2,color:"var(--c5)"},{id:"n2",label:"n²",f:e=>e*e,color:"var(--c6)"},{id:"nfact",label:"n · n!",f:e=>{let n=e;for(let t=2;t<=e;t++)n*=t;return n},color:"var(--c7)"}],$t=360,Ge=240,Pe=34,za=64,Xn=1200;function gg({highlight:e}){const n=i=>Pe+(i-1)/(za-1)*($t-Pe-8),t=i=>Ge-Pe-Math.min(i,Xn)/Xn*(Ge-Pe-8);return d.jsxs("figure",{className:"chart","data-testid":"growth-chart",children:[d.jsxs("svg",{viewBox:`0 0 ${$t} ${Ge}`,role:"img","aria-label":"Complexity growth curves",children:[[.25,.5,.75,1].map(i=>d.jsx("line",{className:"grid",x1:Pe,x2:$t-8,y1:t(Xn*i),y2:t(Xn*i)},i)),[16,32,48,64].map(i=>d.jsx("line",{className:"grid",x1:n(i),x2:n(i),y1:8,y2:Ge-Pe},i)),d.jsx("line",{x1:Pe,y1:Ge-Pe,x2:$t-8,y2:Ge-Pe,className:"axis"}),d.jsx("line",{x1:Pe,y1:8,x2:Pe,y2:Ge-Pe,className:"axis"}),d.jsxs("text",{x:$t/2,y:Ge-6,className:"axis-label",textAnchor:"middle",children:["n (input size, 1–",za,")"]}),d.jsxs("text",{x:10,y:Ge/2,className:"axis-label",textAnchor:"middle",transform:`rotate(-90 10 ${Ge/2})`,children:["operations (clipped at ",Xn,")"]}),Rl.map(i=>{const r=[];for(let o=1;o<=za&&(r.push(`${n(o).toFixed(1)},${t(i.f(o)).toFixed(1)}`),!(i.f(o)>Xn));o++);const a=i.id===e;return d.jsx("polyline",{points:r.join(" "),fill:"none",style:{stroke:i.color},strokeWidth:a?4:1.5,opacity:a?1:.55,children:d.jsx("title",{children:i.label})},i.id)})]}),d.jsx("figcaption",{className:"legend",children:Rl.map(i=>d.jsxs("span",{className:i.id===e?"on":"",children:[d.jsx("i",{style:{background:i.color}})," ",i.label,i.id===e?" ← this algorithm (average)":""]},i.id))})]})}const Il=-1e9,$l=1e9;function yg(e,n){const t=e.trim();if(t==="")return{ok:!1,error:"Please enter at least one number."};const i=t.split(/[\s,]+/).filter(a=>a!=="");if(i.length===0)return{ok:!1,error:"Please enter at least one number."};if(i.length>n)return{ok:!1,error:`Too many numbers: ${i.length}. This algorithm accepts at most ${n}.`};const r=[];for(let a=0;a<i.length;a++){const o=i[a];if(!/^[+-]?\d+$/.test(o))return{ok:!1,error:`"${o}" (item ${a+1}) is not a whole number. Use integers separated by commas or spaces.`};const s=Number(o);if(!Number.isSafeInteger(s)||s<Il||s>$l)return{ok:!1,error:`"${o}" (item ${a+1}) is out of range. Values must be between ${Il} and ${$l}.`};r.push(s)}return{ok:!0,values:r}}function vg(e){let n=e>>>0;return()=>{n=n+1831565813>>>0;let t=n;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Mn=[{id:"random",label:"Random"},{id:"sorted",label:"Sorted"},{id:"reversed",label:"Reversed"},{id:"nearly",label:"Nearly sorted"},{id:"few",label:"Few unique"}];function ld(e,n,t=1,i=Math.max(n*4,100)){const r=vg(t),a=()=>1+Math.floor(r()*i);switch(e){case"random":return Array.from({length:n},a);case"sorted":return Array.from({length:n},a).sort((o,s)=>o-s);case"reversed":return Array.from({length:n},a).sort((o,s)=>s-o);case"nearly":{const o=Array.from({length:n},a).sort((u,f)=>u-f),s=Math.max(1,Math.floor(n/20));for(let u=0;u<s&&n>1;u++){const f=Math.floor(r()*n),m=Math.floor(r()*n);[o[f],o[m]]=[o[m],o[f]]}return o}case"few":{const o=Math.min(5,Math.max(1,n)),s=Array.from({length:o},(u,f)=>Math.round((f+1)*i/o));return Array.from({length:n},()=>s[Math.floor(r()*o)])}}}class ki{static __wrap(n){const t=Object.create(ki.prototype);return t.__wbg_ptr=n,Dl.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Dl.unregister(this),n}free(){const n=this.__destroy_into_raw();$.__wbg_sortresult_free(n,0)}get comparisons(){return $.sortresult_comparisons(this.__wbg_ptr)}get sorted(){const n=$.sortresult_sorted(this.__wbg_ptr);var t=Bl(n[0],n[1]).slice();return $.__wbindgen_free(n[0],n[1]*4,4),t}get swaps(){return $.sortresult_swaps(this.__wbg_ptr)}get trace(){const n=$.sortresult_trace(this.__wbg_ptr);var t=Bl(n[0],n[1]).slice();return $.__wbindgen_free(n[0],n[1]*4,4),t}get truncated(){return $.sortresult_truncated(this.__wbg_ptr)!==0}get writes(){return $.sortresult_writes(this.__wbg_ptr)}}Symbol.dispose&&(ki.prototype[Symbol.dispose]=ki.prototype.free);function wg(e,n,t){const i=cd(e,$.__wbindgen_malloc,$.__wbindgen_realloc),r=Gn,a=ud(n,$.__wbindgen_malloc),o=Gn,s=$.sort(i,r,a,o,t);if(s[2])throw dd(s[1]);return ki.__wrap(s[0])}function _g(e,n){const t=cd(e,$.__wbindgen_malloc,$.__wbindgen_realloc),i=Gn,r=ud(n,$.__wbindgen_malloc),a=Gn,o=$.sort_only(t,i,r,a);if(o[2])throw dd(o[1]);return o[0]}function kg(){return{__proto__:null,"./sortcore_bg.js":{__proto__:null,__wbg_Error_30c8987f7c2ed4e2:function(n,t){return Error(Aa(n,t))},__wbg___wbindgen_throw_41e9ee4f547fc59a:function(n,t){throw new Error(Aa(n,t))},__wbindgen_generic_0000000000000001:function(n,t){return Aa(n,t)},__wbindgen_init_externref_table:function(){const n=$.__wbindgen_externrefs,t=n.grow(4);n.set(0,void 0),n.set(t+0,void 0),n.set(t+1,null),n.set(t+2,!0),n.set(t+3,!1)}}}}const Dl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>$.__wbg_sortresult_free(e,1));function Bl(e,n){return e=e>>>0,xg().subarray(e/4,e/4+n)}let Ht=null;function xg(){return(Ht===null||Ht.byteLength===0)&&(Ht=new Int32Array($.memory.buffer)),Ht}function Aa(e,n){return jg(e>>>0,n)}let Wt=null;function bg(){return(Wt===null||Wt.byteLength===0)&&(Wt=new Uint32Array($.memory.buffer)),Wt}let qt=null;function or(){return(qt===null||qt.byteLength===0)&&(qt=new Uint8Array($.memory.buffer)),qt}function ud(e,n){const t=n(e.length*4,4)>>>0;return bg().set(e,t/4),Gn=e.length,t}function cd(e,n,t){if(t===void 0){const s=ti.encode(e),u=n(s.length,1)>>>0;return or().subarray(u,u+s.length).set(s),Gn=s.length,u}let i=e.length,r=n(i,1)>>>0;const a=or();let o=0;for(;o<i;o++){const s=e.charCodeAt(o);if(s>127)break;a[r+o]=s}if(o!==i){o!==0&&(e=e.slice(o)),r=t(r,i,i=o+e.length*3,1)>>>0;const s=or().subarray(r+o,r+i),u=ti.encodeInto(e,s);o+=u.written,r=t(r,i,o,1)>>>0}return Gn=o,r}function dd(e){const n=$.__wbindgen_externrefs.get(e);return $.__externref_table_dealloc(e),n}let sr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});sr.decode();const Sg=2146435072;let Ca=0;function jg(e,n){return Ca+=n,Ca>=Sg&&(sr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),sr.decode(),Ca=n),sr.decode(or().subarray(e,e+n))}const ti=new TextEncoder;"encodeInto"in ti||(ti.encodeInto=function(e,n){const t=ti.encode(e);return n.set(t),{read:e.length,written:t.length}});let Gn=0,$;function Eg(e,n){return $=e.exports,Ht=null,Wt=null,qt=null,$.__wbindgen_start(),$}async function zg(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const i=await e.arrayBuffer();return await WebAssembly.instantiate(i,n)}else{const i=await WebAssembly.instantiate(e,n);return i instanceof WebAssembly.Instance?{instance:i,module:e}:i}function t(i){switch(i){case"basic":case"cors":case"default":return!0}return!1}}async function Ag(e){if($!==void 0)return $;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/sort-pedia/assets/sortcore_bg-CAVmsPsg.wasm",import.meta.url));const n=kg();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:i}=await zg(await e,n);return Eg(t)}let Na=null;function ks(){return Na||(Na=Ag()),Na}async function Ul(e,n,t){await ks();const i=Int32Array.from(n),r=performance.now(),a=wg(e,i,t),o=performance.now()-r;try{return{sorted:Array.from(a.sorted),trace:t?a.trace:null,comparisons:a.comparisons,swaps:a.swaps,writes:a.writes,truncated:a.truncated,ms:o}}finally{a.free()}}async function Cg(e,n){await ks();const t=performance.now();return _g(e,n),performance.now()-t}const Pa={random:"var(--s-random)",sorted:"var(--s-sorted)",reversed:"var(--s-reversed)",nearly:"var(--s-nearly)",few:"var(--s-few)"};async function Ng(e,n){let t=1/0,i=0,r=0;for(;r<5&&(r===0||i<30);){const a=await Cg(e,Int32Array.from(n));t=Math.min(t,a),i+=a,r++}return t}function Pg({algo:e}){const[n,t]=R.useState([]),[i,r]=R.useState("idle"),[a,o]=R.useState("");async function s(){r("running"),t([]);try{await ks();const w=[];for(const b of e.benchSizes){const p={n:b};for(const l of Mn)o(`n = ${b.toLocaleString()}, ${l.label.toLowerCase()}…`),await new Promise(c=>setTimeout(c,0)),p[l.id]=await Ng(e.id,ld(l.id,b,b+7));w.push(p),t([...w])}r("done"),o("")}catch(w){r("error"),o(String(w instanceof Error?w.message:w))}}const u=360,f=220,m=40,v=Math.max(.01,...n.flatMap(w=>Mn.map(b=>w[b.id]??0))),y=e.benchSizes[e.benchSizes.length-1],E=w=>m+w/y*(u-m-10),z=w=>f-m-w/v*(f-m-10);return d.jsxs("div",{className:"bench","data-testid":"benchmark",children:[d.jsxs("p",{className:"muted small",children:["Sizes ",e.benchSizes.map(w=>w.toLocaleString()).join(", ")," × 5 input shapes, timed with performance.now() around the WASM call in your browser (best of up to 5 runs)."]}),d.jsx("button",{type:"button",className:"btn",onClick:s,disabled:i==="running","data-testid":"bench-run",children:i==="running"?"Running…":n.length?"Run again":"Run benchmark"}),a&&d.jsx("p",{className:i==="error"?"error":"muted small",children:a}),n.length>0&&d.jsxs(d.Fragment,{children:[d.jsxs("figure",{className:"chart",children:[d.jsxs("svg",{viewBox:`0 0 ${u} ${f}`,role:"img","aria-label":"Benchmark chart",children:[[.25,.5,.75,1].map(w=>d.jsx("line",{className:"grid",x1:m,x2:u-10,y1:z(v*w),y2:z(v*w)},w)),d.jsx("line",{x1:m,y1:f-m,x2:u-10,y2:f-m,className:"axis"}),d.jsx("line",{x1:m,y1:10,x2:m,y2:f-m,className:"axis"}),d.jsx("text",{x:u/2,y:f-8,className:"axis-label",textAnchor:"middle",children:"n"}),d.jsxs("text",{x:4,y:14,className:"axis-label",children:[v.toFixed(2)," ms"]}),Mn.map(w=>d.jsx("polyline",{fill:"none",style:{stroke:Pa[w.id]},strokeWidth:2,points:n.filter(b=>b[w.id]!==void 0).map(b=>`${E(b.n).toFixed(1)},${z(b[w.id]).toFixed(1)}`).join(" ")},w.id)),Mn.flatMap(w=>n.filter(b=>b[w.id]!==void 0).map(b=>d.jsx("circle",{cx:E(b.n),cy:z(b[w.id]),r:3,style:{fill:Pa[w.id]},children:d.jsx("title",{children:`${w.label}, n = ${b.n.toLocaleString()}: ${b[w.id].toFixed(3)} ms`})},`${w.id}-${b.n}`)))]}),d.jsx("figcaption",{className:"legend",children:Mn.map(w=>d.jsxs("span",{children:[d.jsx("i",{style:{background:Pa[w.id]}})," ",w.label]},w.id))})]}),d.jsx("div",{className:"table-wrap",children:d.jsxs("table",{className:"bench-table","data-testid":"bench-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"n"}),Mn.map(w=>d.jsx("th",{children:w.label},w.id))]})}),d.jsx("tbody",{children:n.map(w=>d.jsxs("tr",{children:[d.jsx("td",{children:w.n.toLocaleString()}),Mn.map(b=>d.jsx("td",{children:w[b.id]?.toFixed(3)??"…"},b.id))]},w.n))})]})}),d.jsx("p",{className:"muted small",children:"Times in milliseconds."})]})]})}const xi=0,Et=1,bi=2,Tg=3,Og=4,Lr=5,Lg=["i","j","k","pivot","lo","hi","min","key","gap","mid","right","heap","node","child","end","lt","gt","start","pos","size","max"],fd=new Set(["gap"]),Mg={insertion:"key",shell:"key",timsort:"key",introsort:"key",bucket:"key",merge:"left-run value",cycle:"item"},Fg=e=>e===xi||e===Et||e===bi||e===Lr;function Rg(e,n,t){const i=n[3*t],r=n[3*t+1],a=n[3*t+2];if(i===Et){const o=e[r];e[r]=e[a],e[a]=o}else i===bi&&(e[r]=a);return{op:i,i:r,j:a}}const Qi=256;class Ig{constructor(n,t,i=""){this.input=n,this.trace=t,this.algoId=i,this.steps=[],this.checkpoints=[],this.step=0,this.last=null,this.caption="";for(let r=0;r<t.length/3;r++)Fg(t[3*r])&&this.steps.push(r);this.total=this.steps.length,this.cur={arr:[...n],ptrs:new Map,sorted:new Uint8Array(n.length),cmp:0,swaps:0,writes:0,raw:0},this.checkpoints.push(this.clone(this.cur))}get array(){return this.cur.arr}get pointers(){return this.cur.ptrs}get sortedMask(){return this.cur.sorted}get comparisons(){return this.cur.cmp}get swaps(){return this.cur.swaps}get writes(){return this.cur.writes}get done(){return this.step>=this.total}clone(n){return{arr:[...n.arr],ptrs:new Map(n.ptrs),sorted:n.sorted.slice(),cmp:n.cmp,swaps:n.swaps,writes:n.writes,raw:n.raw}}advance(n){const t=this.cur,i=this.trace,r=this.step+1<this.total?this.steps[this.step]:i.length/3-1,a=this.steps[this.step];for(;t.raw<=r;t.raw++){const o=t.raw,s=i[3*o],u=i[3*o+1],f=i[3*o+2];if(s===Tg){const m=Lg[u];f<0?t.ptrs.delete(m):t.ptrs.set(m,f)}else s===Og?t.sorted.fill(1,u,f):o===a&&(n&&(this.caption=this.describe(s,u,f)),s===xi||s===Lr?t.cmp++:s===Et?t.swaps++:s===bi&&t.writes++,Rg(t.arr,i,o),this.last={op:s,i:u,j:f})}this.step++,this.step%Qi===0&&this.checkpoints.length===this.step/Qi&&this.checkpoints.push(this.clone(t)),this.done&&(t.ptrs.clear(),this.caption="Done: every element is in its final sorted position.",this.last=null)}forward(){return this.done?!1:(this.advance(!0),!0)}back(){return this.step===0?!1:(this.seek(this.step-1),!0)}seek(n){if(n=Math.max(0,Math.min(this.total,Math.floor(n))),n<this.step||n===0){const t=Math.min(Math.floor(n/Qi),this.checkpoints.length-1);this.cur=this.clone(this.checkpoints[t]),this.step=t*Qi,this.last=null,this.caption=n===0?"Ready. Press Play or Step forward to begin.":""}for(;this.step<n;)this.advance(this.step===n-1)}label(n){const t=[];for(const[i,r]of this.cur.ptrs)r===n&&!fd.has(i)&&t.push(i);return t.length?` (${t.join(", ")})`:""}describe(n,t,i){const r=this.cur.arr,a=f=>`a[${f}]=${r[f]}${this.label(f)}`,o=(f,m)=>f<m?"<":f>m?">":"=",s=this.cur.ptrs.get("gap"),u=s!==void 0?` [gap ${s}]`:"";switch(n){case xi:{const f=this.cur.ptrs.get("pivot");if(f!==void 0&&(t===f||i===f)&&t!==i){const m=t===f?i:t,v=o(r[m],r[f]),y=v==="<"?"goes left of the pivot":v===">"?"goes right of the pivot":"equals the pivot";return`Compare ${a(m)} with pivot ${r[f]}: ${r[m]} ${v} ${r[f]}, so it ${y}.`}return`Compare ${a(t)} with ${a(i)}: ${r[t]} ${o(r[t],r[i])} ${r[i]}.${u}`}case Lr:{const f=Mg[this.algoId]??"held value",m=o(i,r[t]),v=this.algoId==="merge"?r[t]<i?`take the right value ${r[t]}`:`take the left value ${i}`:m==="<"?`${r[t]} must shift right`:"stop here";return`Compare ${f} ${i} with ${a(t)}: ${i} ${m} ${r[t]}, so ${v}.${u}`}case Et:return`Swap ${a(t)} and ${a(i)}.`;case bi:return`Write ${i} into a[${t}]${this.label(t)} (was ${r[t]}).`;default:return""}}}const Mr=.25,pd=200,xs=1e3,$g=2,Dg=[{label:"Very slow",sps:.5},{label:"Slow",sps:2},{label:"Normal",sps:10},{label:"Fast",sps:60}],hd=Math.log(pd/Mr);function Bg(e){const n=Math.min(1,Math.max(0,e/xs)),t=Mr*Math.exp(n*hd);return Math.round(t*100)/100}function Ug(e){const n=Math.min(pd,Math.max(Mr,e));return Math.round(Math.log(n/Mr)/hd*xs)}function Vg(e){const n=1e3/e;if(n>=16)return{delayMs:n,stepsPerTick:1};const t=Math.ceil(16/n);return{delayMs:t*n,stepsPerTick:t}}function Vl(e){return e<1?`${e.toFixed(2)} steps/s`:e<10?`${e.toFixed(1)} steps/s`:`${Math.round(e)} steps/s`}function Hg({algoId:e,input:n,trace:t,sorted:i,truncated:r}){const a=R.useMemo(()=>new Ig(n,t,e),[n,t,e]),[,o]=R.useState(0),s=()=>o(x=>x+1),[u,f]=R.useState(!0),[m,v]=R.useState($g),y=R.useRef(null),[E,z]=R.useState(600);R.useEffect(()=>{const x=y.current;if(!x||typeof ResizeObserver>"u")return;const C=new ResizeObserver(()=>z(x.clientWidth||600));return C.observe(x),()=>C.disconnect()},[]),R.useEffect(()=>{a.seek(0),s()},[a]),R.useEffect(()=>{if(!u)return;if(a.done){f(!1);return}const{delayMs:x,stepsPerTick:C}=Vg(m),O=window.setTimeout(()=>{for(let L=0;L<C&&a.forward();L++);s()},x);return()=>window.clearTimeout(O)});const w=()=>{f(!1),a.forward(),s()},b=()=>{f(!1),a.back(),s()},p=()=>{a.done?(a.seek(0),f(!0)):f(x=>!x),s()};R.useEffect(()=>{const x=C=>{const O=C.target;if(!(!y.current||C.altKey||C.ctrlKey||C.metaKey)&&!(O&&(O.tagName==="TEXTAREA"||O.tagName==="SELECT"||O.tagName==="INPUT"||O.isContentEditable)))if(C.key===" "||C.code==="Space"){if(O?.tagName==="BUTTON")return;C.preventDefault(),p()}else C.key==="ArrowRight"?(C.preventDefault(),w()):C.key==="ArrowLeft"&&(C.preventDefault(),b())};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)});const l=a.array,c=l.length,h=Math.min(...n,...i),g=Math.max(...n,...i),_=x=>g===h?60:6+(x-h)/(g-h)*94,k=a.last,S=a.done,N=S&&l.every((x,C)=>x===i[C]),T=a.sortedMask,I=x=>{if(S)return"bar done";let C=T[x]?"bar sorted":"bar";return k&&(x===k.i||(k.op===xi||k.op===Et)&&x===k.j)&&(C+=k.op===xi||k.op===Lr?" cmp":k.op===Et?" swap":k.op===bi?" set":""),C},ne=new Map,Ce=[];for(const[x,C]of a.pointers){if(fd.has(x)){Ce.push(`${x} = ${C}`);continue}C<0||C>=c||ne.set(C,[...ne.get(C)??[],x])}const Ln=c<=32,Nt=Math.max(1,(E-8)/Math.max(1,c)),dn=[],Ne=[];for(const[x,C]of[...ne.entries()].sort((O,L)=>O[0]-L[0])){const O=C.join(","),L=(O.length*7+8)/2,xe=Math.max(2*L,E-10),G=Math.min(Math.max((x+.5)*Nt,L),xe-L);let me=Ne.findIndex(ge=>ge+3<G-L);me===-1&&(me=Ne.length,Ne.push(0)),Ne[me]=G+L,dn.push({idx:x,text:O,names:C,row:me,center:G})}const A=Math.max(1,Ne.length);return d.jsxs("div",{className:"viz","data-testid":"viz",ref:y,children:[d.jsx("div",{className:"bars","data-testid":"viz-bars",children:l.map((x,C)=>d.jsx("div",{className:I(C),style:{height:`${_(x)}%`},"data-value":x,"data-tip":`a[${C}] = ${x}`,children:Ln&&d.jsx("span",{className:"bar-val",children:x})},C))}),d.jsx("div",{className:"pointers","data-testid":"viz-pointers","aria-label":"Pointers",style:{height:`${.9+A*1.35}rem`},children:dn.map(({idx:x,names:C,row:O,center:L})=>d.jsxs("div",{className:"ptr",style:{left:`${L+4}px`,top:`${O*1.35}rem`},"data-index":x,children:[d.jsx("span",{className:"ptr-arrow","aria-hidden":"true",children:"▲"}),d.jsx("span",{className:"ptr-name",children:C.map((xe,G)=>d.jsxs("span",{className:`ptr-${xe}`,"data-ptr":xe,children:[G?",":"",xe]},xe))})]},x))}),Ce.length>0&&d.jsx("div",{className:"small muted","data-testid":"viz-value-ptrs",children:Ce.join(" · ")}),d.jsx("p",{className:"viz-caption","data-testid":"viz-caption","aria-live":"polite",children:a.caption||" "}),d.jsxs("div",{className:"viz-counters small","data-testid":"viz-status",children:[d.jsxs("span",{children:["Step ",d.jsx("b",{"data-testid":"viz-step-num",children:a.step.toLocaleString()})," / ",a.total.toLocaleString()]}),d.jsxs("span",{children:["Comparisons ",d.jsx("b",{children:a.comparisons.toLocaleString()})]}),d.jsxs("span",{children:["Swaps ",d.jsx("b",{children:a.swaps.toLocaleString()})]}),d.jsxs("span",{children:["Writes ",d.jsx("b",{children:a.writes.toLocaleString()})]}),S&&d.jsx("span",{children:N?"✓ sorted":r?"trace truncated (too many operations to record)":"✗ mismatch"})]}),d.jsxs("label",{className:"scrub",children:[d.jsx("span",{className:"sr-only",children:"Progress"}),d.jsx("input",{type:"range",min:0,max:a.total,value:a.step,"aria-label":"Progress (step)","data-testid":"viz-scrub",onChange:x=>{f(!1),a.seek(Number(x.target.value)),s()}})]}),d.jsxs("div",{className:"viz-controls",children:[d.jsx("button",{type:"button",className:"btn small",onClick:()=>{f(!1),a.seek(0),s()},"data-testid":"viz-reset","aria-label":"Reset to start",children:"⏮ Reset"}),d.jsx("button",{type:"button",className:"btn small",onClick:b,disabled:a.step===0,"data-testid":"viz-back","aria-label":"Step back",children:"◀ Back"}),d.jsx("button",{type:"button",className:"btn small primary",onClick:p,"data-testid":"viz-play",children:u?"❚❚ Pause":S?"↻ Replay":"▶ Play"}),d.jsx("button",{type:"button",className:"btn small",onClick:w,disabled:S,"data-testid":"viz-step","aria-label":"Step forward",children:"Step ▶"}),d.jsx("button",{type:"button",className:"btn small",onClick:()=>{f(!1),a.seek(a.total),s()},disabled:S,"data-testid":"viz-end","aria-label":"Jump to end",children:"End ⏭"})]}),d.jsxs("div",{className:"speed-row",children:[d.jsx("div",{className:"presets",role:"group","aria-label":"Speed presets",children:Dg.map(x=>d.jsx("button",{type:"button",className:`btn small ${Math.abs(m-x.sps)<1e-9?"active":""}`,"aria-pressed":Math.abs(m-x.sps)<1e-9,onClick:()=>v(x.sps),"data-testid":`speed-${x.label.toLowerCase().replace(" ","-")}`,children:x.label},x.label))}),d.jsxs("label",{className:"speed",children:[d.jsx("span",{children:"Speed"}),d.jsx("input",{type:"range",min:0,max:xs,value:Ug(m),onChange:x=>v(Bg(Number(x.target.value))),"data-testid":"viz-speed","aria-label":"Animation speed (steps per second)","aria-valuetext":Vl(m)}),d.jsx("output",{"data-testid":"viz-speed-value",children:Vl(m)})]})]}),d.jsxs("div",{className:"viz-legend small",children:[d.jsxs("span",{children:[d.jsx("i",{className:"sw cmp"})," compare"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw swap"})," swap"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw set"})," write"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw sorted"})," final position"]}),d.jsx("span",{className:"muted",children:"Keys: Space play/pause · ← back · → forward"})]})]})}const Jn=e=>e.toLocaleString();function Wg({algo:e}){const n=Math.min(e.id==="bogo"?6:24,e.maxViz),[t,i]=R.useState(""),[r,a]=R.useState(""),[o,s]=R.useState(null),[u,f]=R.useState(null),[m,v]=R.useState(!1);async function y(b){v(!0),a("");try{const p=await Ul(e.id,b,!1);s({...p,input:b})}catch(p){a(p instanceof Error?p.message:String(p)),s(null)}finally{v(!1)}}function E(b){const p=yg(t,b);return p.ok?p.values:(a(p.error),null)}async function z(){const b=ld("random",n,Date.now()%1e5,99);i(b.join(", ")),f(null),await y(b)}async function w(){const b=E(e.maxViz);if(b){v(!0),a("");try{const p=await Ul(e.id,b,!0);s({...p,input:b}),f({input:b,trace:p.trace,sorted:p.sorted,truncated:p.truncated,key:Date.now()})}catch(p){a(p instanceof Error?p.message:String(p))}finally{v(!1)}}}return d.jsxs("div",{className:"playground","data-testid":"playground",children:[d.jsxs("p",{className:"muted small",children:["Enter whole numbers separated by commas or spaces (values between -1,000,000,000 and 1,000,000,000). Limits for ",e.name,": up to ",Jn(e.maxInput)," numbers for a plain run, up to ",e.maxViz," for the visualization.",e.id==="counting"&&" Counting sort also needs max - min < 1,000,000."]}),d.jsx("label",{className:"sr-only",htmlFor:"pg-input",children:"Numbers to sort"}),d.jsx("textarea",{id:"pg-input","data-testid":"pg-input",rows:3,value:t,placeholder:"e.g. 5, 3, 9, -2, 7 1 4",onChange:b=>i(b.target.value),"aria-invalid":!!r,"aria-describedby":"pg-error"}),d.jsxs("div",{className:"btn-row",children:[d.jsx("button",{type:"button",className:"btn",onClick:z,disabled:m,"data-testid":"pg-sample",children:"Sort sample data"}),d.jsx("button",{type:"button",className:"btn",onClick:()=>{const b=E(e.maxInput);b&&(f(null),y(b))},disabled:m,"data-testid":"pg-run",children:"Run (no GUI)"}),d.jsx("button",{type:"button",className:"btn primary",onClick:w,disabled:m,"data-testid":"pg-viz",children:"Run with visualization"})]}),d.jsx("p",{id:"pg-error",className:"error",role:"alert","data-testid":"pg-error",children:r}),o&&!r&&d.jsxs("div",{className:"result","data-testid":"pg-result",children:[d.jsxs("div",{className:"stats",children:[d.jsxs("span",{children:[d.jsx("b",{children:"Time"})," ",d.jsxs("span",{"data-testid":"pg-time",children:[o.ms<.1?o.ms.toFixed(3):o.ms.toFixed(2)," ms"]})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Comparisons"})," ",d.jsx("span",{"data-testid":"pg-cmp",children:Jn(o.comparisons)})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Swaps"})," ",d.jsx("span",{"data-testid":"pg-swaps",children:Jn(o.swaps)})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Writes"})," ",Jn(o.writes)]}),d.jsxs("span",{children:[d.jsx("b",{children:"n"})," ",Jn(o.input.length)]})]}),d.jsx("div",{className:"out-label",children:"Sorted output"}),d.jsx("output",{className:"output","data-testid":"pg-output",children:o.sorted.length>2e3?`${o.sorted.slice(0,2e3).join(", ")}, … (${Jn(o.sorted.length-2e3)} more)`:o.sorted.join(", ")}),d.jsx("p",{className:"muted small",children:"Swaps = element exchanges; writes = single-element stores (used by merge, insertion, shell, counting, radix, bucket, cycle and Timsort)."})]}),u&&d.jsx(Hg,{algoId:e.id,input:u.input,trace:u.trace,sorted:u.sorted,truncated:u.truncated},u.key)]})}function qg({algo:e}){const n=jt[e.rank-2],t=jt[e.rank];return d.jsxs("article",{className:"algo","data-testid":"algo-page",children:[d.jsxs("nav",{className:"crumbs",children:[d.jsx("a",{href:"#/",children:"← Index"}),d.jsx("span",{className:"spacer"}),n&&d.jsxs("a",{href:`#/algo/${n.id}`,children:["‹ ",n.name]}),t&&d.jsxs("a",{href:`#/algo/${t.id}`,children:[t.name," ›"]})]}),d.jsxs("h1",{children:[d.jsxs("span",{className:"rank-pill",children:["#",e.rank]})," ",e.name]}),d.jsx("p",{className:"lead",children:e.summary}),d.jsxs("div",{className:"two-col",children:[d.jsxs("section",{className:"card","aria-label":"Algorithm explanation",children:[d.jsx("h2",{children:"How it works"}),d.jsx("ol",{className:"steps",children:e.steps.map(i=>d.jsx("li",{children:i},i))}),d.jsx("h3",{children:"Pseudocode"}),d.jsx("pre",{className:"pseudo",children:e.pseudocode})]}),d.jsxs("section",{className:"card","aria-label":"Code",children:[d.jsx("h2",{children:"Code"}),d.jsx(mg,{algoId:e.id})]})]}),d.jsxs("section",{className:"card","aria-labelledby":"info-h",children:[d.jsx("h2",{id:"info-h",children:"At a glance"}),d.jsx("div",{className:"table-wrap",children:d.jsx("table",{className:"info","data-testid":"info-table",children:d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("th",{children:"Time (best)"}),d.jsx("td",{children:e.best})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Time (average)"}),d.jsx("td",{children:e.avg})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Time (worst)"}),d.jsx("td",{children:e.worst})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Space"}),d.jsx("td",{children:e.space})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Stable"}),d.jsx("td",{children:e.stable?"Yes":"No"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"In-place"}),d.jsx("td",{children:e.inPlace?"Yes":"No"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Family"}),d.jsx("td",{children:e.family})]})]})})}),d.jsxs("div",{className:"facts",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"Most suitable when"}),d.jsx("p",{children:e.suitable})]}),d.jsxs("div",{children:[d.jsx("h3",{children:"Performs badly when"}),d.jsx("p",{children:e.bad})]}),d.jsxs("div",{children:[d.jsx("h3",{children:"Practical uses"}),d.jsx("ul",{children:e.uses.map(i=>d.jsx("li",{children:i},i))})]}),d.jsxs("div",{children:[d.jsxs("h3",{children:["Why rank #",e.rank]}),d.jsx("p",{children:e.why})]})]})]}),d.jsxs("div",{className:"two-col",children:[d.jsxs("section",{className:"card",children:[d.jsx("h2",{children:"Complexity growth"}),d.jsx(gg,{highlight:e.growth})]}),d.jsxs("section",{className:"card",children:[d.jsx("h2",{children:"Measured benchmark (WASM)"}),d.jsx(Pg,{algo:e})]})]}),d.jsxs("section",{className:"card","aria-labelledby":"play-h",children:[d.jsx("h2",{id:"play-h",children:"Playground"}),d.jsx(Wg,{algo:e})]})]})}const lr=6,Eo=18,md="sort-pedia:theme",Qg=["auto","light","dark"],bs=e=>typeof e=="string"&&Qg.includes(e);function Gg(e){const n=e.getHours();return n>=lr&&n<Eo?"light":"dark"}function Kg(e,n=new Date){return e==="auto"?Gg(n):e}function Yg(e){const n=new Date(e.getTime());n.setMinutes(0,0,0);const t=e.getHours();return t<lr?n.setHours(lr):t<Eo?n.setHours(Eo):(n.setDate(n.getDate()+1),n.setHours(lr)),Math.max(0,n.getTime()-e.getTime())}function gd(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function yd(){const e=gd()?.getItem(md);return bs(e)?e:"auto"}function Zg(e){if(!bs(e))throw new Error(`Unknown theme mode: ${String(e)}`);gd()?.setItem(md,e)}function Xg(e,n=document.documentElement){n.dataset.theme=e,n.style.colorScheme=e}function Jg(e=yd,n=()=>new Date){let t;const i=()=>{clearTimeout(t);const a=e(),o=n();Xg(Kg(a,o)),a==="auto"&&(t=setTimeout(i,Yg(o)+1e3))},r=()=>{document.visibilityState==="visible"&&i()};return document.addEventListener("visibilitychange",r),i(),()=>{clearTimeout(t),document.removeEventListener("visibilitychange",r)}}function ey(){const[e,n]=R.useState(yd());return R.useEffect(()=>Jg(()=>e),[e]),d.jsxs("label",{className:"settings",children:[d.jsx("span",{children:"Theme"}),d.jsxs("select",{"aria-label":"Color theme","data-testid":"theme-select",value:e,onChange:t=>{const i=t.target.value;bs(i)&&(Zg(i),n(i))},children:[d.jsx("option",{value:"auto",children:"Auto (light 06–18, dark 18–06)"}),d.jsx("option",{value:"light",children:"Light"}),d.jsx("option",{value:"dark",children:"Dark"})]})]})}function ny(){const e=Qp(),n=e.page==="algo"?Kp[e.id]:void 0;return R.useEffect(()=>{document.title=n?`${n.name} · Sort Pedia`:"Sort Pedia",window.scrollTo(0,0)},[n]),d.jsxs(d.Fragment,{children:[d.jsxs("header",{className:"topbar",children:[d.jsx("a",{className:"brand",href:"#/",children:"Sort Pedia"}),d.jsxs("label",{className:"jump",children:[d.jsx("span",{className:"sr-only",children:"Jump to algorithm"}),d.jsxs("select",{"aria-label":"Jump to algorithm","data-testid":"jump-select",value:n?.id??"",onChange:t=>{t.target.value&&(window.location.hash=`#/algo/${t.target.value}`)},children:[d.jsx("option",{value:"",children:"Jump to algorithm…"}),jt.map(t=>d.jsxs("option",{value:t.id,children:[t.rank,". ",t.name]},t.id))]})]}),d.jsx(pg,{}),d.jsx(ey,{})]}),d.jsx("main",{className:"container",children:e.page==="algo"&&!n?d.jsxs("div",{className:"card",children:[d.jsx("h2",{children:"Unknown algorithm"}),d.jsx("p",{children:d.jsx("a",{href:"#/",children:"Back to the index"})})]}):n?d.jsx(qg,{algo:n},n.id):d.jsx(Yp,{})}),d.jsxs("footer",{className:"footer",children:["All sorting runs in Rust compiled to WebAssembly. ",d.jsx("a",{href:"https://github.com/abhi1kush/sort-pedia",children:"Source on GitHub"})]})]})}td(document.getElementById("root")).render(d.jsx(R.StrictMode,{children:d.jsx(ny,{})}));
