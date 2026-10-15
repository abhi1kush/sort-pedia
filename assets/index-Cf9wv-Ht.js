(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yl={exports:{}},Ri={},Zl={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),zd=Symbol.for("react.portal"),Cd=Symbol.for("react.fragment"),Nd=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),Od=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),Fd=Symbol.for("react.suspense"),Ld=Symbol.for("react.memo"),Md=Symbol.for("react.lazy"),Ts=Symbol.iterator;function Rd(e){return e===null||typeof e!="object"?null:(e=Ts&&e[Ts]||e["@@iterator"],typeof e=="function"?e:null)}var Xl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jl=Object.assign,eu={};function zn(e,t,n){this.props=e,this.context=t,this.refs=eu,this.updater=n||Xl}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tu(){}tu.prototype=zn.prototype;function Ao(e,t,n){this.props=e,this.context=t,this.refs=eu,this.updater=n||Xl}var Oo=Ao.prototype=new tu;Oo.constructor=Ao;Jl(Oo,zn.prototype);Oo.isPureReactComponent=!0;var As=Array.isArray,nu=Object.prototype.hasOwnProperty,Io={current:null},ru={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)nu.call(t,r)&&!ru.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:jr,type:e,key:a,ref:o,props:i,_owner:Io.current}}function $d(e,t){return{$$typeof:jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fo(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function Dd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Os=/\/+/g;function na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dd(""+e.key):t.toString(36)}function Yr(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case jr:case zd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+na(o,0):r,As(i)?(n="",e!=null&&(n=e.replace(Os,"$&/")+"/"),Yr(i,t,n,"",function(f){return f})):i!=null&&(Fo(i)&&(i=$d(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Os,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",As(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+na(a,s);o+=Yr(a,t,n,u,i)}else if(u=Rd(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+na(a,s++),o+=Yr(a,t,n,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ar(e,t,n){if(e==null)return e;var r=[],i=0;return Yr(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Ud(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Zr={transition:null},Bd={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Zr,ReactCurrentOwner:Io};function au(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Ar,forEach:function(e,t,n){Ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ar(e,function(){t++}),t},toArray:function(e){return Ar(e,function(t){return t})||[]},only:function(e){if(!Fo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=zn;F.Fragment=Cd;F.Profiler=Td;F.PureComponent=Ao;F.StrictMode=Nd;F.Suspense=Fd;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd;F.act=au;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jl({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=Io.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)nu.call(t,u)&&!ru.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:jr,type:e.type,key:i,ref:a,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Od,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ad,_context:e},e.Consumer=e};F.createElement=iu;F.createFactory=function(e){var t=iu.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Id,render:e}};F.isValidElement=Fo;F.lazy=function(e){return{$$typeof:Md,_payload:{_status:-1,_result:e},_init:Ud}};F.memo=function(e,t){return{$$typeof:Ld,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Zr.transition;Zr.transition={};try{e()}finally{Zr.transition=t}};F.unstable_act=au;F.useCallback=function(e,t){return ge.current.useCallback(e,t)};F.useContext=function(e){return ge.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};F.useEffect=function(e,t){return ge.current.useEffect(e,t)};F.useId=function(){return ge.current.useId()};F.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return ge.current.useMemo(e,t)};F.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};F.useRef=function(e){return ge.current.useRef(e)};F.useState=function(e){return ge.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return ge.current.useTransition()};F.version="18.3.1";Zl.exports=F;var R=Zl.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd=R,Hd=Symbol.for("react.element"),Wd=Symbol.for("react.fragment"),qd=Object.prototype.hasOwnProperty,Qd=Vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gd={key:!0,ref:!0,__self:!0,__source:!0};function ou(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)qd.call(t,r)&&!Gd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Hd,type:e,key:a,ref:o,props:i,_owner:Qd.current}}Ri.Fragment=Wd;Ri.jsx=ou;Ri.jsxs=ou;Yl.exports=Ri;var d=Yl.exports,su={exports:{}},ze={},lu={exports:{}},uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,O){var I=z.length;z.push(O);e:for(;0<I;){var j=I-1>>>1,N=z[j];if(0<i(N,O))z[j]=O,z[I]=N,I=j;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var O=z[0],I=z.pop();if(I!==O){z[0]=I;e:for(var j=0,N=z.length,q=N>>>1;j<q;){var $=2*(j+1)-1,ue=z[$],re=$+1,ye=z[re];if(0>i(ue,I))re<N&&0>i(ye,ue)?(z[j]=ye,z[re]=I,j=re):(z[j]=ue,z[$]=I,j=$);else if(re<N&&0>i(ye,I))z[j]=ye,z[re]=I,j=re;else break e}}return O}function i(z,O){var I=z.sortIndex-O.sortIndex;return I!==0?I:z.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],f=[],m=1,y=null,v=3,P=!1,E=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,l=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(z){for(var O=n(f);O!==null;){if(O.callback===null)r(f);else if(O.startTime<=z)r(f),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(f)}}function h(z){if(_=!1,c(z),!E)if(n(u)!==null)E=!0,It(g);else{var O=n(f);O!==null&&ct(h,O.startTime-z)}}function g(z,O){E=!1,_&&(_=!1,p(b),b=-1),P=!0;var I=v;try{for(c(O),y=n(u);y!==null&&(!(y.expirationTime>O)||z&&!M());){var j=y.callback;if(typeof j=="function"){y.callback=null,v=y.priorityLevel;var N=j(y.expirationTime<=O);O=e.unstable_now(),typeof N=="function"?y.callback=N:y===n(u)&&r(u),c(O)}else r(u);y=n(u)}if(y!==null)var q=!0;else{var $=n(f);$!==null&&ct(h,$.startTime-O),q=!1}return q}finally{y=null,v=I,P=!1}}var w=!1,k=null,b=-1,C=5,A=-1;function M(){return!(e.unstable_now()-A<C)}function ne(){if(k!==null){var z=e.unstable_now();A=z;var O=!0;try{O=k(!0,z)}finally{O?qe():(w=!1,k=null)}}else w=!1}var qe;if(typeof l=="function")qe=function(){l(ne)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,Ot=Je.port2;Je.port1.onmessage=ne,qe=function(){Ot.postMessage(null)}}else qe=function(){x(ne,0)};function It(z){k=z,w||(w=!0,qe())}function ct(z,O){b=x(function(){z(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){E||P||(E=!0,It(g))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(v){case 1:case 2:case 3:var O=3;break;default:O=v}var I=v;v=O;try{return z()}finally{v=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,O){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=v;v=z;try{return O()}finally{v=I}},e.unstable_scheduleCallback=function(z,O,I){var j=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?j+I:j):I=j,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=I+N,z={id:m++,callback:O,priorityLevel:z,startTime:I,expirationTime:N,sortIndex:-1},I>j?(z.sortIndex=I,t(f,z),n(u)===null&&z===n(f)&&(_?(p(b),b=-1):_=!0,ct(h,I-j))):(z.sortIndex=N,t(u,z),E||P||(E=!0,It(g))),z},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(z){var O=v;return function(){var I=v;v=O;try{return z.apply(this,arguments)}finally{v=I}}}})(uu);lu.exports=uu;var Kd=lu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=R,Ee=Kd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cu=new Set,ar={};function Kt(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(ar[e]=t,e=0;e<t.length;e++)cu.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fa=Object.prototype.hasOwnProperty,Zd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Is={},Fs={};function Xd(e){return Fa.call(Fs,e)?!0:Fa.call(Is,e)?!1:Zd.test(e)?Fs[e]=!0:(Is[e]=!0,!1)}function Jd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ef(e,t,n,r){if(t===null||typeof t>"u"||Jd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lo=/[\-:]([a-z])/g;function Mo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Lo,Mo);le[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Lo,Mo);le[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Lo,Mo);le[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ro(e,t,n,r){var i=le.hasOwnProperty(t)?le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ef(t,n,i,r)&&(n=null),r||i===null?Xd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ut=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),en=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),$o=Symbol.for("react.strict_mode"),La=Symbol.for("react.profiler"),du=Symbol.for("react.provider"),fu=Symbol.for("react.context"),Do=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),Uo=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),pu=Symbol.for("react.offscreen"),Ls=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=Ls&&e[Ls]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,ra;function Un(e){if(ra===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ra=t&&t[1]||""}return`
`+ra+e}var ia=!1;function aa(e,t){if(!e||ia)return"";ia=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{ia=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function tf(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=aa(e.type,!1),e;case 11:return e=aa(e.type.render,!1),e;case 1:return e=aa(e.type,!0),e;default:return""}}function $a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tn:return"Fragment";case en:return"Portal";case La:return"Profiler";case $o:return"StrictMode";case Ma:return"Suspense";case Ra:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fu:return(e.displayName||"Context")+".Consumer";case du:return(e._context.displayName||"Context")+".Provider";case Do:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uo:return t=e.displayName||null,t!==null?t:$a(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return $a(e(t))}catch{}}return null}function nf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $a(t);case 8:return t===$o?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rf(e){var t=hu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=rf(e))}function mu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ms(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gu(e,t){t=t.checked,t!=null&&Ro(e,"checked",t,!1)}function Ua(e,t){gu(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ba(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ba(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Rs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ba(e,t,n){(t!=="number"||di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bn=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $s(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Bn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function vu(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ds(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ha(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fr,_u=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fr=Fr||document.createElement("div"),Fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},af=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){af.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function wu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function ku(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var of=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(e,t){if(t){if(of[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function qa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function Bo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ga=null,hn=null,mn=null;function Us(e){if(e=Cr(e)){if(typeof Ga!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Vi(t),Ga(e.stateNode,e.type,t))}}function xu(e){hn?mn?mn.push(e):mn=[e]:hn=e}function bu(){if(hn){var e=hn,t=mn;if(mn=hn=null,Us(e),t)for(e=0;e<t.length;e++)Us(t[e])}}function Su(e,t){return e(t)}function Pu(){}var oa=!1;function ju(e,t,n){if(oa)return e(t,n);oa=!0;try{return Su(e,t,n)}finally{oa=!1,(hn!==null||mn!==null)&&(Pu(),bu())}}function sr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ka=!1;if(at)try{var On={};Object.defineProperty(On,"passive",{get:function(){Ka=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Ka=!1}function sf(e,t,n,r,i,a,o,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var Yn=!1,fi=null,pi=!1,Ya=null,lf={onError:function(e){Yn=!0,fi=e}};function uf(e,t,n,r,i,a,o,s,u){Yn=!1,fi=null,sf.apply(lf,arguments)}function cf(e,t,n,r,i,a,o,s,u){if(uf.apply(this,arguments),Yn){if(Yn){var f=fi;Yn=!1,fi=null}else throw Error(S(198));pi||(pi=!0,Ya=f)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Eu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bs(e){if(Yt(e)!==e)throw Error(S(188))}function df(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return Bs(i),e;if(a===r)return Bs(i),t;a=a.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function zu(e){return e=df(e),e!==null?Cu(e):null}function Cu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cu(e);if(t!==null)return t;e=e.sibling}return null}var Nu=Ee.unstable_scheduleCallback,Vs=Ee.unstable_cancelCallback,ff=Ee.unstable_shouldYield,pf=Ee.unstable_requestPaint,Z=Ee.unstable_now,hf=Ee.unstable_getCurrentPriorityLevel,Vo=Ee.unstable_ImmediatePriority,Tu=Ee.unstable_UserBlockingPriority,hi=Ee.unstable_NormalPriority,mf=Ee.unstable_LowPriority,Au=Ee.unstable_IdlePriority,$i=null,Ze=null;function gf(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:_f,vf=Math.log,yf=Math.LN2;function _f(e){return e>>>=0,e===0?32:31-(vf(e)/yf|0)|0}var Lr=64,Mr=4194304;function Vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Vn(s):(a&=o,a!==0&&(r=Vn(a)))}else o=n&~i,o!==0?r=Vn(o):a!==0&&(r=Vn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ve(t),i=1<<n,r|=e[n],t&=~i;return r}function wf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ve(a),s=1<<o,u=i[o];u===-1?(!(s&n)||s&r)&&(i[o]=wf(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function Za(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ou(){var e=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),e}function sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ve(t),e[t]=n}function xf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ve(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ho(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ve(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function Iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,Wo,Lu,Mu,Ru,Xa=!1,Rr=[],wt=null,kt=null,xt=null,lr=new Map,ur=new Map,gt=[],bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hs(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(t.pointerId)}}function In(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Cr(t),t!==null&&Wo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Sf(e,t,n,r,i){switch(t){case"focusin":return wt=In(wt,e,t,n,r,i),!0;case"dragenter":return kt=In(kt,e,t,n,r,i),!0;case"mouseover":return xt=In(xt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return lr.set(a,In(lr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ur.set(a,In(ur.get(a)||null,e,t,n,r,i)),!0}return!1}function $u(e){var t=Rt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=Eu(n),t!==null){e.blockedOn=t,Ru(e.priority,function(){Lu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ja(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Qa=r,n.target.dispatchEvent(r),Qa=null}else return t=Cr(n),t!==null&&Wo(t),e.blockedOn=n,!1;t.shift()}return!0}function Ws(e,t,n){Xr(e)&&n.delete(t)}function Pf(){Xa=!1,wt!==null&&Xr(wt)&&(wt=null),kt!==null&&Xr(kt)&&(kt=null),xt!==null&&Xr(xt)&&(xt=null),lr.forEach(Ws),ur.forEach(Ws)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,Xa||(Xa=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Pf)))}function cr(e){function t(i){return Fn(i,e)}if(0<Rr.length){Fn(Rr[0],e);for(var n=1;n<Rr.length;n++){var r=Rr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&Fn(wt,e),kt!==null&&Fn(kt,e),xt!==null&&Fn(xt,e),lr.forEach(t),ur.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)$u(n),n.blockedOn===null&&gt.shift()}var gn=ut.ReactCurrentBatchConfig,gi=!0;function jf(e,t,n,r){var i=U,a=gn.transition;gn.transition=null;try{U=1,qo(e,t,n,r)}finally{U=i,gn.transition=a}}function Ef(e,t,n,r){var i=U,a=gn.transition;gn.transition=null;try{U=4,qo(e,t,n,r)}finally{U=i,gn.transition=a}}function qo(e,t,n,r){if(gi){var i=Ja(e,t,n,r);if(i===null)va(e,t,r,vi,n),Hs(e,r);else if(Sf(i,e,t,n,r))r.stopPropagation();else if(Hs(e,r),t&4&&-1<bf.indexOf(e)){for(;i!==null;){var a=Cr(i);if(a!==null&&Fu(a),a=Ja(e,t,n,r),a===null&&va(e,t,r,vi,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else va(e,t,r,null,n)}}var vi=null;function Ja(e,t,n,r){if(vi=null,e=Bo(r),e=Rt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Eu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return vi=e,null}function Du(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hf()){case Vo:return 1;case Tu:return 4;case hi:case mf:return 16;case Au:return 536870912;default:return 16}default:return 16}}var yt=null,Qo=null,Jr=null;function Uu(){if(Jr)return Jr;var e,t=Qo,n=t.length,r,i="value"in yt?yt.value:yt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Jr=i.slice(e,1<r?1-r:void 0)}function ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function qs(){return!1}function Ce(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?$r:qs,this.isPropagationStopped=qs,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Ce(Cn),zr=K({},Cn,{view:0,detail:0}),zf=Ce(zr),la,ua,Ln,Di=K({},zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ln&&(Ln&&e.type==="mousemove"?(la=e.screenX-Ln.screenX,ua=e.screenY-Ln.screenY):ua=la=0,Ln=e),la)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),Qs=Ce(Di),Cf=K({},Di,{dataTransfer:0}),Nf=Ce(Cf),Tf=K({},zr,{relatedTarget:0}),ca=Ce(Tf),Af=K({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Of=Ce(Af),If=K({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ff=Ce(If),Lf=K({},Cn,{data:0}),Gs=Ce(Lf),Mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$f={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$f[e])?!!t[e]:!1}function Ko(){return Df}var Uf=K({},zr,{key:function(e){if(e.key){var t=Mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ko,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bf=Ce(Uf),Vf=K({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ks=Ce(Vf),Hf=K({},zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ko}),Wf=Ce(Hf),qf=K({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qf=Ce(qf),Gf=K({},Di,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kf=Ce(Gf),Yf=[9,13,27,32],Yo=at&&"CompositionEvent"in window,Zn=null;at&&"documentMode"in document&&(Zn=document.documentMode);var Zf=at&&"TextEvent"in window&&!Zn,Bu=at&&(!Yo||Zn&&8<Zn&&11>=Zn),Ys=" ",Zs=!1;function Vu(e,t){switch(e){case"keyup":return Yf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function Xf(e,t){switch(e){case"compositionend":return Hu(t);case"keypress":return t.which!==32?null:(Zs=!0,Ys);case"textInput":return e=t.data,e===Ys&&Zs?null:e;default:return null}}function Jf(e,t){if(nn)return e==="compositionend"||!Yo&&Vu(e,t)?(e=Uu(),Jr=Qo=yt=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bu&&t.locale!=="ko"?null:t.data;default:return null}}var ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ep[e.type]:t==="textarea"}function Wu(e,t,n,r){xu(r),t=yi(t,"onChange"),0<t.length&&(n=new Go("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,dr=null;function tp(e){nc(e,0)}function Ui(e){var t=on(e);if(mu(t))return e}function np(e,t){if(e==="change")return t}var qu=!1;if(at){var da;if(at){var fa="oninput"in document;if(!fa){var Js=document.createElement("div");Js.setAttribute("oninput","return;"),fa=typeof Js.oninput=="function"}da=fa}else da=!1;qu=da&&(!document.documentMode||9<document.documentMode)}function el(){Xn&&(Xn.detachEvent("onpropertychange",Qu),dr=Xn=null)}function Qu(e){if(e.propertyName==="value"&&Ui(dr)){var t=[];Wu(t,dr,e,Bo(e)),ju(tp,t)}}function rp(e,t,n){e==="focusin"?(el(),Xn=t,dr=n,Xn.attachEvent("onpropertychange",Qu)):e==="focusout"&&el()}function ip(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(dr)}function ap(e,t){if(e==="click")return Ui(t)}function op(e,t){if(e==="input"||e==="change")return Ui(t)}function sp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:sp;function fr(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fa.call(t,i)||!We(e[i],t[i]))return!1}return!0}function tl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nl(e,t){var n=tl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tl(n)}}function Gu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ku(){for(var e=window,t=di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=di(e.document)}return t}function Zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lp(e){var t=Ku(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gu(n.ownerDocument.documentElement,n)){if(r!==null&&Zo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=nl(n,a);var o=nl(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var up=at&&"documentMode"in document&&11>=document.documentMode,rn=null,eo=null,Jn=null,to=!1;function rl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;to||rn==null||rn!==di(r)||(r=rn,"selectionStart"in r&&Zo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&fr(Jn,r)||(Jn=r,r=yi(eo,"onSelect"),0<r.length&&(t=new Go("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rn)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var an={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},pa={},Yu={};at&&(Yu=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Bi(e){if(pa[e])return pa[e];if(!an[e])return e;var t=an[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yu)return pa[e]=t[n];return e}var Zu=Bi("animationend"),Xu=Bi("animationiteration"),Ju=Bi("animationstart"),ec=Bi("transitionend"),tc=new Map,il="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){tc.set(e,t),Kt(t,[e])}for(var ha=0;ha<il.length;ha++){var ma=il[ha],cp=ma.toLowerCase(),dp=ma[0].toUpperCase()+ma.slice(1);Nt(cp,"on"+dp)}Nt(Zu,"onAnimationEnd");Nt(Xu,"onAnimationIteration");Nt(Ju,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(ec,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function al(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,cf(r,t,void 0,e),e.currentTarget=null}function nc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==a&&i.isPropagationStopped())break e;al(i,s,f),a=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,f=s.currentTarget,s=s.listener,u!==a&&i.isPropagationStopped())break e;al(i,s,f),a=u}}}if(pi)throw e=Ya,pi=!1,Ya=null,e}function V(e,t){var n=t[oo];n===void 0&&(n=t[oo]=new Set);var r=e+"__bubble";n.has(r)||(rc(t,e,2,!1),n.add(r))}function ga(e,t,n){var r=0;t&&(r|=4),rc(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function pr(e){if(!e[Ur]){e[Ur]=!0,cu.forEach(function(n){n!=="selectionchange"&&(fp.has(n)||ga(n,!1,e),ga(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ur]||(t[Ur]=!0,ga("selectionchange",!1,t))}}function rc(e,t,n,r){switch(Du(t)){case 1:var i=jf;break;case 4:i=Ef;break;default:i=qo}n=i.bind(null,t,n,e),i=void 0,!Ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function va(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Rt(s),o===null)return;if(u=o.tag,u===5||u===6){r=a=o;continue e}s=s.parentNode}}r=r.return}ju(function(){var f=a,m=Bo(n),y=[];e:{var v=tc.get(e);if(v!==void 0){var P=Go,E=e;switch(e){case"keypress":if(ei(n)===0)break e;case"keydown":case"keyup":P=Bf;break;case"focusin":E="focus",P=ca;break;case"focusout":E="blur",P=ca;break;case"beforeblur":case"afterblur":P=ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Nf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Wf;break;case Zu:case Xu:case Ju:P=Of;break;case ec:P=Qf;break;case"scroll":P=zf;break;case"wheel":P=Kf;break;case"copy":case"cut":case"paste":P=Ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Ks}var _=(t&4)!==0,x=!_&&e==="scroll",p=_?v!==null?v+"Capture":null:v;_=[];for(var l=f,c;l!==null;){c=l;var h=c.stateNode;if(c.tag===5&&h!==null&&(c=h,p!==null&&(h=sr(l,p),h!=null&&_.push(hr(l,h,c)))),x)break;l=l.return}0<_.length&&(v=new P(v,E,null,n,m),y.push({event:v,listeners:_}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",v&&n!==Qa&&(E=n.relatedTarget||n.fromElement)&&(Rt(E)||E[ot]))break e;if((P||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,P?(E=n.relatedTarget||n.toElement,P=f,E=E?Rt(E):null,E!==null&&(x=Yt(E),E!==x||E.tag!==5&&E.tag!==6)&&(E=null)):(P=null,E=f),P!==E)){if(_=Qs,h="onMouseLeave",p="onMouseEnter",l="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ks,h="onPointerLeave",p="onPointerEnter",l="pointer"),x=P==null?v:on(P),c=E==null?v:on(E),v=new _(h,l+"leave",P,n,m),v.target=x,v.relatedTarget=c,h=null,Rt(m)===f&&(_=new _(p,l+"enter",E,n,m),_.target=c,_.relatedTarget=x,h=_),x=h,P&&E)t:{for(_=P,p=E,l=0,c=_;c;c=Zt(c))l++;for(c=0,h=p;h;h=Zt(h))c++;for(;0<l-c;)_=Zt(_),l--;for(;0<c-l;)p=Zt(p),c--;for(;l--;){if(_===p||p!==null&&_===p.alternate)break t;_=Zt(_),p=Zt(p)}_=null}else _=null;P!==null&&ol(y,v,P,_,!1),E!==null&&x!==null&&ol(y,x,E,_,!0)}}e:{if(v=f?on(f):window,P=v.nodeName&&v.nodeName.toLowerCase(),P==="select"||P==="input"&&v.type==="file")var g=np;else if(Xs(v))if(qu)g=op;else{g=ip;var w=rp}else(P=v.nodeName)&&P.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(g=ap);if(g&&(g=g(e,f))){Wu(y,g,n,m);break e}w&&w(e,v,f),e==="focusout"&&(w=v._wrapperState)&&w.controlled&&v.type==="number"&&Ba(v,"number",v.value)}switch(w=f?on(f):window,e){case"focusin":(Xs(w)||w.contentEditable==="true")&&(rn=w,eo=f,Jn=null);break;case"focusout":Jn=eo=rn=null;break;case"mousedown":to=!0;break;case"contextmenu":case"mouseup":case"dragend":to=!1,rl(y,n,m);break;case"selectionchange":if(up)break;case"keydown":case"keyup":rl(y,n,m)}var k;if(Yo)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else nn?Vu(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Bu&&n.locale!=="ko"&&(nn||b!=="onCompositionStart"?b==="onCompositionEnd"&&nn&&(k=Uu()):(yt=m,Qo="value"in yt?yt.value:yt.textContent,nn=!0)),w=yi(f,b),0<w.length&&(b=new Gs(b,e,null,n,m),y.push({event:b,listeners:w}),k?b.data=k:(k=Hu(n),k!==null&&(b.data=k)))),(k=Zf?Xf(e,n):Jf(e,n))&&(f=yi(f,"onBeforeInput"),0<f.length&&(m=new Gs("onBeforeInput","beforeinput",null,n,m),y.push({event:m,listeners:f}),m.data=k))}nc(y,t)})}function hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=sr(e,n),a!=null&&r.unshift(hr(e,a,i)),a=sr(e,t),a!=null&&r.push(hr(e,a,i))),e=e.return}return r}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ol(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,f=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&f!==null&&(s=f,i?(u=sr(n,a),u!=null&&o.unshift(hr(n,u,s))):i||(u=sr(n,a),u!=null&&o.push(hr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var pp=/\r\n?/g,hp=/\u0000|\uFFFD/g;function sl(e){return(typeof e=="string"?e:""+e).replace(pp,`
`).replace(hp,"")}function Br(e,t,n){if(t=sl(t),sl(e)!==t&&n)throw Error(S(425))}function _i(){}var no=null,ro=null;function io(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ao=typeof setTimeout=="function"?setTimeout:void 0,mp=typeof clearTimeout=="function"?clearTimeout:void 0,ll=typeof Promise=="function"?Promise:void 0,gp=typeof queueMicrotask=="function"?queueMicrotask:typeof ll<"u"?function(e){return ll.resolve(null).then(e).catch(vp)}:ao;function vp(e){setTimeout(function(){throw e})}function ya(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ul(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Nn,mr="__reactProps$"+Nn,ot="__reactContainer$"+Nn,oo="__reactEvents$"+Nn,yp="__reactListeners$"+Nn,_p="__reactHandles$"+Nn;function Rt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ul(e);e!==null;){if(n=e[Ye])return n;e=ul(e)}return t}e=n,n=e.parentNode}return null}function Cr(e){return e=e[Ye]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Vi(e){return e[mr]||null}var so=[],sn=-1;function Tt(e){return{current:e}}function H(e){0>sn||(e.current=so[sn],so[sn]=null,sn--)}function B(e,t){sn++,so[sn]=e.current,e.current=t}var Ct={},pe=Tt(Ct),ke=Tt(!1),Vt=Ct;function wn(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function wi(){H(ke),H(pe)}function cl(e,t,n){if(pe.current!==Ct)throw Error(S(168));B(pe,t),B(ke,n)}function ic(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,nf(e)||"Unknown",i));return K({},n,r)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Vt=pe.current,B(pe,e),B(ke,ke.current),!0}function dl(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=ic(e,t,Vt),r.__reactInternalMemoizedMergedChildContext=e,H(ke),H(pe),B(pe,e)):H(ke),B(ke,n)}var tt=null,Hi=!1,_a=!1;function ac(e){tt===null?tt=[e]:tt.push(e)}function wp(e){Hi=!0,ac(e)}function At(){if(!_a&&tt!==null){_a=!0;var e=0,t=U;try{var n=tt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Hi=!1}catch(i){throw tt!==null&&(tt=tt.slice(e+1)),Nu(Vo,At),i}finally{U=t,_a=!1}}return null}var ln=[],un=0,xi=null,bi=0,Te=[],Ae=0,Ht=null,nt=1,rt="";function Lt(e,t){ln[un++]=bi,ln[un++]=xi,xi=e,bi=t}function oc(e,t,n){Te[Ae++]=nt,Te[Ae++]=rt,Te[Ae++]=Ht,Ht=e;var r=nt;e=rt;var i=32-Ve(r)-1;r&=~(1<<i),n+=1;var a=32-Ve(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nt=1<<32-Ve(t)+i|n<<i|r,rt=a+e}else nt=1<<a|n<<i|r,rt=e}function Xo(e){e.return!==null&&(Lt(e,1),oc(e,1,0))}function Jo(e){for(;e===xi;)xi=ln[--un],ln[un]=null,bi=ln[--un],ln[un]=null;for(;e===Ht;)Ht=Te[--Ae],Te[Ae]=null,rt=Te[--Ae],Te[Ae]=null,nt=Te[--Ae],Te[Ae]=null}var je=null,Pe=null,W=!1,Be=null;function sc(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Pe=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ht!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Pe=null,!0):!1;default:return!1}}function lo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function uo(e){if(W){var t=Pe;if(t){var n=t;if(!fl(e,t)){if(lo(e))throw Error(S(418));t=bt(n.nextSibling);var r=je;t&&fl(e,t)?sc(r,n):(e.flags=e.flags&-4097|2,W=!1,je=e)}}else{if(lo(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,je=e}}}function pl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Vr(e){if(e!==je)return!1;if(!W)return pl(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!io(e.type,e.memoizedProps)),t&&(t=Pe)){if(lo(e))throw lc(),Error(S(418));for(;t;)sc(e,t),t=bt(t.nextSibling)}if(pl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=je?bt(e.stateNode.nextSibling):null;return!0}function lc(){for(var e=Pe;e;)e=bt(e.nextSibling)}function kn(){Pe=je=null,W=!1}function es(e){Be===null?Be=[e]:Be.push(e)}var kp=ut.ReactCurrentBatchConfig;function Mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Hr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hl(e){var t=e._init;return t(e._payload)}function uc(e){function t(p,l){if(e){var c=p.deletions;c===null?(p.deletions=[l],p.flags|=16):c.push(l)}}function n(p,l){if(!e)return null;for(;l!==null;)t(p,l),l=l.sibling;return null}function r(p,l){for(p=new Map;l!==null;)l.key!==null?p.set(l.key,l):p.set(l.index,l),l=l.sibling;return p}function i(p,l){return p=Et(p,l),p.index=0,p.sibling=null,p}function a(p,l,c){return p.index=c,e?(c=p.alternate,c!==null?(c=c.index,c<l?(p.flags|=2,l):c):(p.flags|=2,l)):(p.flags|=1048576,l)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,l,c,h){return l===null||l.tag!==6?(l=ja(c,p.mode,h),l.return=p,l):(l=i(l,c),l.return=p,l)}function u(p,l,c,h){var g=c.type;return g===tn?m(p,l,c.props.children,h,c.key):l!==null&&(l.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ht&&hl(g)===l.type)?(h=i(l,c.props),h.ref=Mn(p,l,c),h.return=p,h):(h=si(c.type,c.key,c.props,null,p.mode,h),h.ref=Mn(p,l,c),h.return=p,h)}function f(p,l,c,h){return l===null||l.tag!==4||l.stateNode.containerInfo!==c.containerInfo||l.stateNode.implementation!==c.implementation?(l=Ea(c,p.mode,h),l.return=p,l):(l=i(l,c.children||[]),l.return=p,l)}function m(p,l,c,h,g){return l===null||l.tag!==7?(l=Bt(c,p.mode,h,g),l.return=p,l):(l=i(l,c),l.return=p,l)}function y(p,l,c){if(typeof l=="string"&&l!==""||typeof l=="number")return l=ja(""+l,p.mode,c),l.return=p,l;if(typeof l=="object"&&l!==null){switch(l.$$typeof){case Or:return c=si(l.type,l.key,l.props,null,p.mode,c),c.ref=Mn(p,null,l),c.return=p,c;case en:return l=Ea(l,p.mode,c),l.return=p,l;case ht:var h=l._init;return y(p,h(l._payload),c)}if(Bn(l)||An(l))return l=Bt(l,p.mode,c,null),l.return=p,l;Hr(p,l)}return null}function v(p,l,c,h){var g=l!==null?l.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return g!==null?null:s(p,l,""+c,h);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Or:return c.key===g?u(p,l,c,h):null;case en:return c.key===g?f(p,l,c,h):null;case ht:return g=c._init,v(p,l,g(c._payload),h)}if(Bn(c)||An(c))return g!==null?null:m(p,l,c,h,null);Hr(p,c)}return null}function P(p,l,c,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return p=p.get(c)||null,s(l,p,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Or:return p=p.get(h.key===null?c:h.key)||null,u(l,p,h,g);case en:return p=p.get(h.key===null?c:h.key)||null,f(l,p,h,g);case ht:var w=h._init;return P(p,l,c,w(h._payload),g)}if(Bn(h)||An(h))return p=p.get(c)||null,m(l,p,h,g,null);Hr(l,h)}return null}function E(p,l,c,h){for(var g=null,w=null,k=l,b=l=0,C=null;k!==null&&b<c.length;b++){k.index>b?(C=k,k=null):C=k.sibling;var A=v(p,k,c[b],h);if(A===null){k===null&&(k=C);break}e&&k&&A.alternate===null&&t(p,k),l=a(A,l,b),w===null?g=A:w.sibling=A,w=A,k=C}if(b===c.length)return n(p,k),W&&Lt(p,b),g;if(k===null){for(;b<c.length;b++)k=y(p,c[b],h),k!==null&&(l=a(k,l,b),w===null?g=k:w.sibling=k,w=k);return W&&Lt(p,b),g}for(k=r(p,k);b<c.length;b++)C=P(k,p,b,c[b],h),C!==null&&(e&&C.alternate!==null&&k.delete(C.key===null?b:C.key),l=a(C,l,b),w===null?g=C:w.sibling=C,w=C);return e&&k.forEach(function(M){return t(p,M)}),W&&Lt(p,b),g}function _(p,l,c,h){var g=An(c);if(typeof g!="function")throw Error(S(150));if(c=g.call(c),c==null)throw Error(S(151));for(var w=g=null,k=l,b=l=0,C=null,A=c.next();k!==null&&!A.done;b++,A=c.next()){k.index>b?(C=k,k=null):C=k.sibling;var M=v(p,k,A.value,h);if(M===null){k===null&&(k=C);break}e&&k&&M.alternate===null&&t(p,k),l=a(M,l,b),w===null?g=M:w.sibling=M,w=M,k=C}if(A.done)return n(p,k),W&&Lt(p,b),g;if(k===null){for(;!A.done;b++,A=c.next())A=y(p,A.value,h),A!==null&&(l=a(A,l,b),w===null?g=A:w.sibling=A,w=A);return W&&Lt(p,b),g}for(k=r(p,k);!A.done;b++,A=c.next())A=P(k,p,b,A.value,h),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?b:A.key),l=a(A,l,b),w===null?g=A:w.sibling=A,w=A);return e&&k.forEach(function(ne){return t(p,ne)}),W&&Lt(p,b),g}function x(p,l,c,h){if(typeof c=="object"&&c!==null&&c.type===tn&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Or:e:{for(var g=c.key,w=l;w!==null;){if(w.key===g){if(g=c.type,g===tn){if(w.tag===7){n(p,w.sibling),l=i(w,c.props.children),l.return=p,p=l;break e}}else if(w.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ht&&hl(g)===w.type){n(p,w.sibling),l=i(w,c.props),l.ref=Mn(p,w,c),l.return=p,p=l;break e}n(p,w);break}else t(p,w);w=w.sibling}c.type===tn?(l=Bt(c.props.children,p.mode,h,c.key),l.return=p,p=l):(h=si(c.type,c.key,c.props,null,p.mode,h),h.ref=Mn(p,l,c),h.return=p,p=h)}return o(p);case en:e:{for(w=c.key;l!==null;){if(l.key===w)if(l.tag===4&&l.stateNode.containerInfo===c.containerInfo&&l.stateNode.implementation===c.implementation){n(p,l.sibling),l=i(l,c.children||[]),l.return=p,p=l;break e}else{n(p,l);break}else t(p,l);l=l.sibling}l=Ea(c,p.mode,h),l.return=p,p=l}return o(p);case ht:return w=c._init,x(p,l,w(c._payload),h)}if(Bn(c))return E(p,l,c,h);if(An(c))return _(p,l,c,h);Hr(p,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,l!==null&&l.tag===6?(n(p,l.sibling),l=i(l,c),l.return=p,p=l):(n(p,l),l=ja(c,p.mode,h),l.return=p,p=l),o(p)):n(p,l)}return x}var xn=uc(!0),cc=uc(!1),Si=Tt(null),Pi=null,cn=null,ts=null;function ns(){ts=cn=Pi=null}function rs(e){var t=Si.current;H(Si),e._currentValue=t}function co(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vn(e,t){Pi=e,ts=cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(ts!==e)if(e={context:e,memoizedValue:t,next:null},cn===null){if(Pi===null)throw Error(S(308));cn=e,Pi.dependencies={lanes:0,firstContext:e}}else cn=cn.next=e;return t}var $t=null;function is(e){$t===null?$t=[e]:$t.push(e)}function dc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,is(t)):(n.next=i.next,i.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function as(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,st(e,n)}return i=r.interleaved,i===null?(t.next=t,is(r)):(t.next=i.next,i.next=t),r.interleaved=t,st(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ho(e,n)}}function ml(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ji(e,t,n,r){var i=e.updateQueue;mt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,f=u.next;u.next=null,o===null?a=f:o.next=f,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=f:s.next=f,m.lastBaseUpdate=u))}if(a!==null){var y=i.baseState;o=0,m=f=u=null,s=a;do{var v=s.lane,P=s.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:P,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,_=s;switch(v=t,P=n,_.tag){case 1:if(E=_.payload,typeof E=="function"){y=E.call(P,y,v);break e}y=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=_.payload,v=typeof E=="function"?E.call(P,y,v):E,v==null)break e;y=K({},y,v);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[s]:v.push(s))}else P={eventTime:P,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(f=m=P,u=y):m=m.next=P,o|=v;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;v=s,s=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(m===null&&(u=y),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);qt|=o,e.lanes=o,e.memoizedState=y}}function gl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Nr={},Xe=Tt(Nr),gr=Tt(Nr),vr=Tt(Nr);function Dt(e){if(e===Nr)throw Error(S(174));return e}function os(e,t){switch(B(vr,t),B(gr,e),B(Xe,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ha(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ha(t,e)}H(Xe),B(Xe,t)}function bn(){H(Xe),H(gr),H(vr)}function pc(e){Dt(vr.current);var t=Dt(Xe.current),n=Ha(t,e.type);t!==n&&(B(gr,e),B(Xe,n))}function ss(e){gr.current===e&&(H(Xe),H(gr))}var Q=Tt(0);function Ei(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wa=[];function ls(){for(var e=0;e<wa.length;e++)wa[e]._workInProgressVersionPrimary=null;wa.length=0}var ni=ut.ReactCurrentDispatcher,ka=ut.ReactCurrentBatchConfig,Wt=0,G=null,ee=null,ie=null,zi=!1,er=!1,yr=0,xp=0;function ce(){throw Error(S(321))}function us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function cs(e,t,n,r,i,a){if(Wt=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ni.current=e===null||e.memoizedState===null?jp:Ep,e=n(r,i),er){a=0;do{if(er=!1,yr=0,25<=a)throw Error(S(301));a+=1,ie=ee=null,t.updateQueue=null,ni.current=zp,e=n(r,i)}while(er)}if(ni.current=Ci,t=ee!==null&&ee.next!==null,Wt=0,ie=ee=G=null,zi=!1,t)throw Error(S(300));return e}function ds(){var e=yr!==0;return yr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?G.memoizedState=ie=e:ie=ie.next=e,ie}function Le(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ie===null?G.memoizedState:ie.next;if(t!==null)ie=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ie===null?G.memoizedState=ie=e:ie=ie.next=e}return ie}function _r(e,t){return typeof t=="function"?t(e):t}function xa(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,u=null,f=a;do{var m=f.lane;if((Wt&m)===m)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=y,o=r):u=u.next=y,G.lanes|=m,qt|=m}f=f.next}while(f!==null&&f!==a);u===null?o=r:u.next=s,We(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,G.lanes|=a,qt|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ba(e){var t=Le(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);We(a,t.memoizedState)||(we=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function hc(){}function mc(e,t){var n=G,r=Le(),i=t(),a=!We(r.memoizedState,i);if(a&&(r.memoizedState=i,we=!0),r=r.queue,fs(yc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,wr(9,vc.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(S(349));Wt&30||gc(n,t,i)}return i}function gc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vc(e,t,n,r){t.value=n,t.getSnapshot=r,_c(t)&&wc(e)}function yc(e,t,n){return n(function(){_c(t)&&wc(e)})}function _c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function wc(e){var t=st(e,1);t!==null&&He(t,e,1,-1)}function vl(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:e},t.queue=e,e=e.dispatch=Pp.bind(null,G,e),[t.memoizedState,e]}function wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kc(){return Le().memoizedState}function ri(e,t,n,r){var i=Ke();G.flags|=e,i.memoizedState=wr(1|t,n,void 0,r===void 0?null:r)}function Wi(e,t,n,r){var i=Le();r=r===void 0?null:r;var a=void 0;if(ee!==null){var o=ee.memoizedState;if(a=o.destroy,r!==null&&us(r,o.deps)){i.memoizedState=wr(t,n,a,r);return}}G.flags|=e,i.memoizedState=wr(1|t,n,a,r)}function yl(e,t){return ri(8390656,8,e,t)}function fs(e,t){return Wi(2048,8,e,t)}function xc(e,t){return Wi(4,2,e,t)}function bc(e,t){return Wi(4,4,e,t)}function Sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pc(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4,4,Sc.bind(null,t,e),n)}function ps(){}function jc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&us(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ec(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&us(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zc(e,t,n){return Wt&21?(We(n,t)||(n=Ou(),G.lanes|=n,qt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function bp(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=ka.transition;ka.transition={};try{e(!1),t()}finally{U=n,ka.transition=r}}function Cc(){return Le().memoizedState}function Sp(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nc(e))Tc(t,n);else if(n=dc(e,t,n,r),n!==null){var i=me();He(n,e,r,i),Ac(n,t,r)}}function Pp(e,t,n){var r=jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))Tc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,We(s,o)){var u=t.interleaved;u===null?(i.next=i,is(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=dc(e,t,i,r),n!==null&&(i=me(),He(n,e,r,i),Ac(n,t,r))}}function Nc(e){var t=e.alternate;return e===G||t!==null&&t===G}function Tc(e,t){er=zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ac(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ho(e,n)}}var Ci={readContext:Fe,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},jp={readContext:Fe,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:yl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ri(4194308,4,Sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return ri(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sp.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:vl,useDebugValue:ps,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=vl(!1),t=e[0];return e=bp.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,i=Ke();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ae===null)throw Error(S(349));Wt&30||gc(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,yl(yc.bind(null,r,a,e),[e]),r.flags|=2048,wr(9,vc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ke(),t=ae.identifierPrefix;if(W){var n=rt,r=nt;n=(r&~(1<<32-Ve(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ep={readContext:Fe,useCallback:jc,useContext:Fe,useEffect:fs,useImperativeHandle:Pc,useInsertionEffect:xc,useLayoutEffect:bc,useMemo:Ec,useReducer:xa,useRef:kc,useState:function(){return xa(_r)},useDebugValue:ps,useDeferredValue:function(e){var t=Le();return zc(t,ee.memoizedState,e)},useTransition:function(){var e=xa(_r)[0],t=Le().memoizedState;return[e,t]},useMutableSource:hc,useSyncExternalStore:mc,useId:Cc,unstable_isNewReconciler:!1},zp={readContext:Fe,useCallback:jc,useContext:Fe,useEffect:fs,useImperativeHandle:Pc,useInsertionEffect:xc,useLayoutEffect:bc,useMemo:Ec,useReducer:ba,useRef:kc,useState:function(){return ba(_r)},useDebugValue:ps,useDeferredValue:function(e){var t=Le();return ee===null?t.memoizedState=e:zc(t,ee.memoizedState,e)},useTransition:function(){var e=ba(_r)[0],t=Le().memoizedState;return[e,t]},useMutableSource:hc,useSyncExternalStore:mc,useId:Cc,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qi={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),i=jt(e),a=it(r,i);a.payload=t,n!=null&&(a.callback=n),t=St(e,a,i),t!==null&&(He(t,e,i,r),ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),i=jt(e),a=it(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=St(e,a,i),t!==null&&(He(t,e,i,r),ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=jt(e),i=it(n,r);i.tag=2,t!=null&&(i.callback=t),t=St(e,i,r),t!==null&&(He(t,e,r,n),ti(t,e,r))}};function _l(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!fr(n,r)||!fr(i,a):!0}function Oc(e,t,n){var r=!1,i=Ct,a=t.contextType;return typeof a=="object"&&a!==null?a=Fe(a):(i=xe(t)?Vt:pe.current,r=t.contextTypes,a=(r=r!=null)?wn(e,i):Ct),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function wl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qi.enqueueReplaceState(t,t.state,null)}function po(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},as(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Fe(a):(a=xe(t)?Vt:pe.current,i.context=wn(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(fo(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&qi.enqueueReplaceState(i,i.state,null),ji(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Sn(e,t){try{var n="",r=t;do n+=tf(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ho(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Cp=typeof WeakMap=="function"?WeakMap:Map;function Ic(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ti||(Ti=!0,So=r),ho(e,t)},n}function Fc(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ho(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ho(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function kl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Cp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Vp.bind(null,e,t,n),t.then(e,e))}function xl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var Np=ut.ReactCurrentOwner,we=!1;function he(e,t,n,r){t.child=e===null?cc(t,null,n,r):xn(t,e.child,n,r)}function Sl(e,t,n,r,i){n=n.render;var a=t.ref;return vn(t,i),r=cs(e,t,n,r,a,i),n=ds(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lt(e,t,i)):(W&&n&&Xo(t),t.flags|=1,he(e,t,r,i),t.child)}function Pl(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!ks(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Lc(e,t,a,r,i)):(e=si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:fr,n(o,r)&&e.ref===t.ref)return lt(e,t,i)}return t.flags|=1,e=Et(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(fr(a,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,lt(e,t,i)}return mo(e,t,n,r,i)}function Mc(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(fn,Se),Se|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(fn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,B(fn,Se),Se|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,B(fn,Se),Se|=r;return he(e,t,i,n),t.child}function Rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mo(e,t,n,r,i){var a=xe(n)?Vt:pe.current;return a=wn(t,a),vn(t,i),n=cs(e,t,n,r,a,i),r=ds(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lt(e,t,i)):(W&&r&&Xo(t),t.flags|=1,he(e,t,n,i),t.child)}function jl(e,t,n,r,i){if(xe(n)){var a=!0;ki(t)}else a=!1;if(vn(t,i),t.stateNode===null)ii(e,t),Oc(t,n,r),po(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Fe(f):(f=xe(n)?Vt:pe.current,f=wn(t,f));var m=n.getDerivedStateFromProps,y=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==f)&&wl(t,o,r,f),mt=!1;var v=t.memoizedState;o.state=v,ji(t,r,o,i),u=t.memoizedState,s!==r||v!==u||ke.current||mt?(typeof m=="function"&&(fo(t,n,m,r),u=t.memoizedState),(s=mt||_l(t,n,s,r,v,u,f))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=f,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fc(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:De(t.type,s),o.props=f,y=t.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Fe(u):(u=xe(n)?Vt:pe.current,u=wn(t,u));var P=n.getDerivedStateFromProps;(m=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==y||v!==u)&&wl(t,o,r,u),mt=!1,v=t.memoizedState,o.state=v,ji(t,r,o,i);var E=t.memoizedState;s!==y||v!==E||ke.current||mt?(typeof P=="function"&&(fo(t,n,P,r),E=t.memoizedState),(f=mt||_l(t,n,f,r,v,E,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return go(e,t,n,r,a,i)}function go(e,t,n,r,i,a){Rc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&dl(t,n,!1),lt(e,t,a);r=t.stateNode,Np.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=xn(t,e.child,null,a),t.child=xn(t,null,s,a)):he(e,t,s,a),t.memoizedState=r.state,i&&dl(t,n,!0),t.child}function $c(e){var t=e.stateNode;t.pendingContext?cl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cl(e,t.context,!1),os(e,t.containerInfo)}function El(e,t,n,r,i){return kn(),es(i),t.flags|=256,he(e,t,n,r),t.child}var vo={dehydrated:null,treeContext:null,retryLane:0};function yo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dc(e,t,n){var r=t.pendingProps,i=Q.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),B(Q,i&1),e===null)return uo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ki(o,r,0,null),e=Bt(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=yo(n),t.memoizedState=vo,e):hs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Tp(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Et(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Et(s,a):(a=Bt(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?yo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=vo,r}return a=e.child,e=a.sibling,r=Et(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hs(e,t){return t=Ki({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wr(e,t,n,r){return r!==null&&es(r),xn(t,e.child,null,n),e=hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tp(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Sa(Error(S(422))),Wr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Ki({mode:"visible",children:r.children},i,0,null),a=Bt(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&xn(t,e.child,null,o),t.child.memoizedState=yo(o),t.memoizedState=vo,a);if(!(t.mode&1))return Wr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(S(419)),r=Sa(a,r,void 0),Wr(e,t,o,r)}if(s=(o&e.childLanes)!==0,we||s){if(r=ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,st(e,i),He(r,e,i,-1))}return ws(),r=Sa(Error(S(421))),Wr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hp.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Pe=bt(i.nextSibling),je=t,W=!0,Be=null,e!==null&&(Te[Ae++]=nt,Te[Ae++]=rt,Te[Ae++]=Ht,nt=e.id,rt=e.overflow,Ht=t),t=hs(t,r.children),t.flags|=4096,t)}function zl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),co(e.return,t,n)}function Pa(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Uc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(he(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zl(e,n,t);else if(e.tag===19)zl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ei(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pa(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ei(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pa(t,!0,n,null,a);break;case"together":Pa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ii(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ap(e,t,n){switch(t.tag){case 3:$c(t),kn();break;case 5:pc(t);break;case 1:xe(t.type)&&ki(t);break;case 4:os(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;B(Si,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?Dc(e,t,n):(B(Q,Q.current&1),e=lt(e,t,n),e!==null?e.sibling:null);B(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Mc(e,t,n)}return lt(e,t,n)}var Bc,_o,Vc,Hc;Bc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_o=function(){};Vc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Dt(Xe.current);var a=null;switch(n){case"input":i=Da(e,i),r=Da(e,r),a=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),a=[];break;case"textarea":i=Va(e,i),r=Va(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=_i)}Wa(n,r);var o;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var s=i[f];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ar.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var u=r[f];if(s=i?.[f],r.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(ar.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&V("scroll",e),a||s===u||(a=[])):(a=a||[]).push(f,u))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};Hc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Op(e,t,n){var r=t.pendingProps;switch(Jo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return xe(t.type)&&wi(),de(t),null;case 3:return r=t.stateNode,bn(),H(ke),H(pe),ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Be!==null&&(Eo(Be),Be=null))),_o(e,t),de(t),null;case 5:ss(t);var i=Dt(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=Dt(Xe.current),Vr(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ye]=t,r[mr]=a,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Hn.length;i++)V(Hn[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Ms(r,a),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},V("invalid",r);break;case"textarea":$s(r,a),V("invalid",r)}Wa(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Br(r.textContent,s,e),i=["children",""+s]):ar.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":Ir(r),Rs(r,a,!0);break;case"textarea":Ir(r),Ds(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=_i)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ye]=t,e[mr]=r,Bc(e,t,!1,!1),t.stateNode=e;e:{switch(o=qa(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Hn.length;i++)V(Hn[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Ms(e,r),i=Da(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),V("invalid",e);break;case"textarea":$s(e,r),i=Va(e,r),V("invalid",e);break;default:i=r}Wa(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?ku(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_u(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&or(e,u):typeof u=="number"&&or(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ar.hasOwnProperty(a)?u!=null&&a==="onScroll"&&V("scroll",e):u!=null&&Ro(e,a,u,o))}switch(n){case"input":Ir(e),Rs(e,r,!1);break;case"textarea":Ir(e),Ds(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?pn(e,!!r.multiple,a,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=_i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)Hc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Dt(vr.current),Dt(Xe.current),Vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(a=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return de(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Pe!==null&&t.mode&1&&!(t.flags&128))lc(),kn(),t.flags|=98560,a=!1;else if(a=Vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[Ye]=t}else kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),a=!1}else Be!==null&&(Eo(Be),Be=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?te===0&&(te=3):ws())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return bn(),_o(e,t),e===null&&pr(t.stateNode.containerInfo),de(t),null;case 10:return rs(t.type._context),de(t),null;case 17:return xe(t.type)&&wi(),de(t),null;case 19:if(H(Q),a=t.memoizedState,a===null)return de(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Rn(a,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ei(e),o!==null){for(t.flags|=128,Rn(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Q,Q.current&1|2),t.child}e=e.sibling}a.tail!==null&&Z()>Pn&&(t.flags|=128,r=!0,Rn(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ei(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!W)return de(t),null}else 2*Z()-a.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Z(),t.sibling=null,n=Q.current,B(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return _s(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Ip(e,t){switch(Jo(t),t.tag){case 1:return xe(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(),H(ke),H(pe),ls(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ss(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return bn(),null;case 10:return rs(t.type._context),null;case 22:case 23:return _s(),null;case 24:return null;default:return null}}var qr=!1,fe=!1,Fp=typeof WeakSet=="function"?WeakSet:Set,T=null;function dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function wo(e,t,n){try{n()}catch(r){Y(e,t,r)}}var Cl=!1;function Lp(e,t){if(no=gi,e=Ku(),Zo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,f=0,m=0,y=e,v=null;t:for(;;){for(var P;y!==n||i!==0&&y.nodeType!==3||(s=o+i),y!==a||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(P=y.firstChild)!==null;)v=y,y=P;for(;;){if(y===e)break t;if(v===n&&++f===i&&(s=o),v===a&&++m===r&&(u=o),(P=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=P}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ro={focusedElem:e,selectionRange:n},gi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var _=E.memoizedProps,x=E.memoizedState,p=t.stateNode,l=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:De(t.type,_),x);p.__reactInternalSnapshotBeforeUpdate=l}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(h){Y(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return E=Cl,Cl=!1,E}function tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&wo(t,n,a)}i=i.next}while(i!==r)}}function Qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ko(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wc(e){var t=e.alternate;t!==null&&(e.alternate=null,Wc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[mr],delete t[oo],delete t[yp],delete t[_p])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qc(e){return e.tag===5||e.tag===3||e.tag===4}function Nl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=_i));else if(r!==4&&(e=e.child,e!==null))for(xo(e,t,n),e=e.sibling;e!==null;)xo(e,t,n),e=e.sibling}function bo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bo(e,t,n),e=e.sibling;e!==null;)bo(e,t,n),e=e.sibling}var oe=null,Ue=!1;function dt(e,t,n){for(n=n.child;n!==null;)Qc(e,t,n),n=n.sibling}function Qc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount($i,n)}catch{}switch(n.tag){case 5:fe||dn(n,t);case 6:var r=oe,i=Ue;oe=null,dt(e,t,n),oe=r,Ue=i,oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ue?(e=oe,n=n.stateNode,e.nodeType===8?ya(e.parentNode,n):e.nodeType===1&&ya(e,n),cr(e)):ya(oe,n.stateNode));break;case 4:r=oe,i=Ue,oe=n.stateNode.containerInfo,Ue=!0,dt(e,t,n),oe=r,Ue=i;break;case 0:case 11:case 14:case 15:if(!fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&wo(n,t,o),i=i.next}while(i!==r)}dt(e,t,n);break;case 1:if(!fe&&(dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Y(n,t,s)}dt(e,t,n);break;case 21:dt(e,t,n);break;case 22:n.mode&1?(fe=(r=fe)||n.memoizedState!==null,dt(e,t,n),fe=r):dt(e,t,n);break;default:dt(e,t,n)}}function Tl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fp),t.forEach(function(r){var i=Wp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Ue=!1;break e;case 3:oe=s.stateNode.containerInfo,Ue=!0;break e;case 4:oe=s.stateNode.containerInfo,Ue=!0;break e}s=s.return}if(oe===null)throw Error(S(160));Qc(a,o,i),oe=null,Ue=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){Y(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gc(t,e),t=t.sibling}function Gc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Qe(e),r&4){try{tr(3,e,e.return),Qi(3,e)}catch(_){Y(e,e.return,_)}try{tr(5,e,e.return)}catch(_){Y(e,e.return,_)}}break;case 1:Me(t,e),Qe(e),r&512&&n!==null&&dn(n,n.return);break;case 5:if(Me(t,e),Qe(e),r&512&&n!==null&&dn(n,n.return),e.flags&32){var i=e.stateNode;try{or(i,"")}catch(_){Y(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&gu(i,a),qa(s,o);var f=qa(s,a);for(o=0;o<u.length;o+=2){var m=u[o],y=u[o+1];m==="style"?ku(i,y):m==="dangerouslySetInnerHTML"?_u(i,y):m==="children"?or(i,y):Ro(i,m,y,f)}switch(s){case"input":Ua(i,a);break;case"textarea":vu(i,a);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var P=a.value;P!=null?pn(i,!!a.multiple,P,!1):v!==!!a.multiple&&(a.defaultValue!=null?pn(i,!!a.multiple,a.defaultValue,!0):pn(i,!!a.multiple,a.multiple?[]:"",!1))}i[mr]=a}catch(_){Y(e,e.return,_)}}break;case 6:if(Me(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(_){Y(e,e.return,_)}}break;case 3:if(Me(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cr(t.containerInfo)}catch(_){Y(e,e.return,_)}break;case 4:Me(t,e),Qe(e);break;case 13:Me(t,e),Qe(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(vs=Z())),r&4&&Tl(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(fe=(f=fe)||m,Me(t,e),fe=f):Me(t,e),Qe(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(y=T=m;T!==null;){switch(v=T,P=v.child,v.tag){case 0:case 11:case 14:case 15:tr(4,v,v.return);break;case 1:dn(v,v.return);var E=v.stateNode;if(typeof E.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(_){Y(r,n,_)}}break;case 5:dn(v,v.return);break;case 22:if(v.memoizedState!==null){Ol(y);continue}}P!==null?(P.return=v,T=P):Ol(y)}m=m.sibling}e:for(m=null,y=e;;){if(y.tag===5){if(m===null){m=y;try{i=y.stateNode,f?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=wu("display",o))}catch(_){Y(e,e.return,_)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(_){Y(e,e.return,_)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Me(t,e),Qe(e),r&4&&Tl(e);break;case 21:break;default:Me(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(or(i,""),r.flags&=-33);var a=Nl(e);bo(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Nl(e);xo(e,s,o);break;default:throw Error(S(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mp(e,t,n){T=e,Kc(e)}function Kc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||qr;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||fe;s=qr;var f=fe;if(qr=o,(fe=u)&&!f)for(T=i;T!==null;)o=T,u=o.child,o.tag===22&&o.memoizedState!==null?Il(i):u!==null?(u.return=o,T=u):Il(i);for(;a!==null;)T=a,Kc(a),a=a.sibling;T=i,qr=s,fe=f}Al(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,T=a):Al(e)}}function Al(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:fe||Qi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&gl(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gl(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&cr(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}fe||t.flags&512&&ko(t)}catch(v){Y(t,t.return,v)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Ol(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Il(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qi(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Y(t,i,u)}}var a=t.return;try{ko(t)}catch(u){Y(t,a,u)}break;case 5:var o=t.return;try{ko(t)}catch(u){Y(t,o,u)}}}catch(u){Y(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Rp=Math.ceil,Ni=ut.ReactCurrentDispatcher,ms=ut.ReactCurrentOwner,Ie=ut.ReactCurrentBatchConfig,L=0,ae=null,X=null,se=0,Se=0,fn=Tt(0),te=0,kr=null,qt=0,Gi=0,gs=0,nr=null,_e=null,vs=0,Pn=1/0,et=null,Ti=!1,So=null,Pt=null,Qr=!1,_t=null,Ai=0,rr=0,Po=null,ai=-1,oi=0;function me(){return L&6?Z():ai!==-1?ai:ai=Z()}function jt(e){return e.mode&1?L&2&&se!==0?se&-se:kp.transition!==null?(oi===0&&(oi=Ou()),oi):(e=U,e!==0||(e=window.event,e=e===void 0?16:Du(e.type)),e):1}function He(e,t,n,r){if(50<rr)throw rr=0,Po=null,Error(S(185));Er(e,n,r),(!(L&2)||e!==ae)&&(e===ae&&(!(L&2)&&(Gi|=n),te===4&&vt(e,se)),be(e,r),n===1&&L===0&&!(t.mode&1)&&(Pn=Z()+500,Hi&&At()))}function be(e,t){var n=e.callbackNode;kf(e,t);var r=mi(e,e===ae?se:0);if(r===0)n!==null&&Vs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Vs(n),t===1)e.tag===0?wp(Fl.bind(null,e)):ac(Fl.bind(null,e)),gp(function(){!(L&6)&&At()}),n=null;else{switch(Iu(r)){case 1:n=Vo;break;case 4:n=Tu;break;case 16:n=hi;break;case 536870912:n=Au;break;default:n=hi}n=rd(n,Yc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yc(e,t){if(ai=-1,oi=0,L&6)throw Error(S(327));var n=e.callbackNode;if(yn()&&e.callbackNode!==n)return null;var r=mi(e,e===ae?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Oi(e,r);else{t=r;var i=L;L|=2;var a=Xc();(ae!==e||se!==t)&&(et=null,Pn=Z()+500,Ut(e,t));do try{Up();break}catch(s){Zc(e,s)}while(!0);ns(),Ni.current=a,L=i,X!==null?t=0:(ae=null,se=0,t=te)}if(t!==0){if(t===2&&(i=Za(e),i!==0&&(r=i,t=jo(e,i))),t===1)throw n=kr,Ut(e,0),vt(e,r),be(e,Z()),n;if(t===6)vt(e,r);else{if(i=e.current.alternate,!(r&30)&&!$p(i)&&(t=Oi(e,r),t===2&&(a=Za(e),a!==0&&(r=a,t=jo(e,a))),t===1))throw n=kr,Ut(e,0),vt(e,r),be(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Mt(e,_e,et);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=vs+500-Z(),10<t)){if(mi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ao(Mt.bind(null,e,_e,et),t);break}Mt(e,_e,et);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ve(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rp(r/1960))-r,10<r){e.timeoutHandle=ao(Mt.bind(null,e,_e,et),r);break}Mt(e,_e,et);break;case 5:Mt(e,_e,et);break;default:throw Error(S(329))}}}return be(e,Z()),e.callbackNode===n?Yc.bind(null,e):null}function jo(e,t){var n=nr;return e.current.memoizedState.isDehydrated&&(Ut(e,t).flags|=256),e=Oi(e,t),e!==2&&(t=_e,_e=n,t!==null&&Eo(t)),e}function Eo(e){_e===null?_e=e:_e.push.apply(_e,e)}function $p(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!We(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~gs,t&=~Gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ve(t),r=1<<n;e[n]=-1,t&=~r}}function Fl(e){if(L&6)throw Error(S(327));yn();var t=mi(e,0);if(!(t&1))return be(e,Z()),null;var n=Oi(e,t);if(e.tag!==0&&n===2){var r=Za(e);r!==0&&(t=r,n=jo(e,r))}if(n===1)throw n=kr,Ut(e,0),vt(e,t),be(e,Z()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,_e,et),be(e,Z()),null}function ys(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Pn=Z()+500,Hi&&At())}}function Qt(e){_t!==null&&_t.tag===0&&!(L&6)&&yn();var t=L;L|=1;var n=Ie.transition,r=U;try{if(Ie.transition=null,U=1,e)return e()}finally{U=r,Ie.transition=n,L=t,!(L&6)&&At()}}function _s(){Se=fn.current,H(fn)}function Ut(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,mp(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Jo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wi();break;case 3:bn(),H(ke),H(pe),ls();break;case 5:ss(r);break;case 4:bn();break;case 13:H(Q);break;case 19:H(Q);break;case 10:rs(r.type._context);break;case 22:case 23:_s()}n=n.return}if(ae=e,X=e=Et(e.current,null),se=Se=t,te=0,kr=null,gs=Gi=qt=0,_e=nr=null,$t!==null){for(t=0;t<$t.length;t++)if(n=$t[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}$t=null}return e}function Zc(e,t){do{var n=X;try{if(ns(),ni.current=Ci,zi){for(var r=G.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zi=!1}if(Wt=0,ie=ee=G=null,er=!1,yr=0,ms.current=null,n===null||n.return===null){te=1,kr=t,X=null;break}e:{var a=e,o=n.return,s=n,u=t;if(t=se,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,m=s,y=m.tag;if(!(m.mode&1)&&(y===0||y===11||y===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var P=xl(o);if(P!==null){P.flags&=-257,bl(P,o,s,a,t),P.mode&1&&kl(a,f,t),t=P,u=f;var E=t.updateQueue;if(E===null){var _=new Set;_.add(u),t.updateQueue=_}else E.add(u);break e}else{if(!(t&1)){kl(a,f,t),ws();break e}u=Error(S(426))}}else if(W&&s.mode&1){var x=xl(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),bl(x,o,s,a,t),es(Sn(u,s));break e}}a=u=Sn(u,s),te!==4&&(te=2),nr===null?nr=[a]:nr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=Ic(a,u,t);ml(a,p);break e;case 1:s=u;var l=a.type,c=a.stateNode;if(!(a.flags&128)&&(typeof l.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Pt===null||!Pt.has(c)))){a.flags|=65536,t&=-t,a.lanes|=t;var h=Fc(a,s,t);ml(a,h);break e}}a=a.return}while(a!==null)}ed(n)}catch(g){t=g,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Xc(){var e=Ni.current;return Ni.current=Ci,e===null?Ci:e}function ws(){(te===0||te===3||te===2)&&(te=4),ae===null||!(qt&268435455)&&!(Gi&268435455)||vt(ae,se)}function Oi(e,t){var n=L;L|=2;var r=Xc();(ae!==e||se!==t)&&(et=null,Ut(e,t));do try{Dp();break}catch(i){Zc(e,i)}while(!0);if(ns(),L=n,Ni.current=r,X!==null)throw Error(S(261));return ae=null,se=0,te}function Dp(){for(;X!==null;)Jc(X)}function Up(){for(;X!==null&&!ff();)Jc(X)}function Jc(e){var t=nd(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?ed(e):X=t,ms.current=null}function ed(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ip(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,X=null;return}}else if(n=Op(n,t,Se),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);te===0&&(te=5)}function Mt(e,t,n){var r=U,i=Ie.transition;try{Ie.transition=null,U=1,Bp(e,t,n,r)}finally{Ie.transition=i,U=r}return null}function Bp(e,t,n,r){do yn();while(_t!==null);if(L&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(xf(e,a),e===ae&&(X=ae=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qr||(Qr=!0,rd(hi,function(){return yn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ie.transition,Ie.transition=null;var o=U;U=1;var s=L;L|=4,ms.current=null,Lp(e,n),Gc(n,e),lp(ro),gi=!!no,ro=no=null,e.current=n,Mp(n),pf(),L=s,U=o,Ie.transition=a}else e.current=n;if(Qr&&(Qr=!1,_t=e,Ai=i),a=e.pendingLanes,a===0&&(Pt=null),gf(n.stateNode),be(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ti)throw Ti=!1,e=So,So=null,e;return Ai&1&&e.tag!==0&&yn(),a=e.pendingLanes,a&1?e===Po?rr++:(rr=0,Po=e):rr=0,At(),null}function yn(){if(_t!==null){var e=Iu(Ai),t=Ie.transition,n=U;try{if(Ie.transition=null,U=16>e?16:e,_t===null)var r=!1;else{if(e=_t,_t=null,Ai=0,L&6)throw Error(S(331));var i=L;for(L|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(T=f;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:tr(8,m,a)}var y=m.child;if(y!==null)y.return=m,T=y;else for(;T!==null;){m=T;var v=m.sibling,P=m.return;if(Wc(m),m===f){T=null;break}if(v!==null){v.return=P,T=v;break}T=P}}}var E=a.alternate;if(E!==null){var _=E.child;if(_!==null){E.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:tr(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,T=p;break e}T=a.return}}var l=e.current;for(T=l;T!==null;){o=T;var c=o.child;if(o.subtreeFlags&2064&&c!==null)c.return=o,T=c;else e:for(o=l;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Qi(9,s)}}catch(g){Y(s,s.return,g)}if(s===o){T=null;break e}var h=s.sibling;if(h!==null){h.return=s.return,T=h;break e}T=s.return}}if(L=i,At(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot($i,e)}catch{}r=!0}return r}finally{U=n,Ie.transition=t}}return!1}function Ll(e,t,n){t=Sn(n,t),t=Ic(e,t,1),e=St(e,t,1),t=me(),e!==null&&(Er(e,1,t),be(e,t))}function Y(e,t,n){if(e.tag===3)Ll(e,e,n);else for(;t!==null;){if(t.tag===3){Ll(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=Sn(n,e),e=Fc(t,e,1),t=St(t,e,1),e=me(),t!==null&&(Er(t,1,e),be(t,e));break}}t=t.return}}function Vp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(se&n)===n&&(te===4||te===3&&(se&130023424)===se&&500>Z()-vs?Ut(e,0):gs|=n),be(e,t)}function td(e,t){t===0&&(e.mode&1?(t=Mr,Mr<<=1,!(Mr&130023424)&&(Mr=4194304)):t=1);var n=me();e=st(e,t),e!==null&&(Er(e,t,n),be(e,n))}function Hp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),td(e,n)}function Wp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),td(e,n)}var nd;nd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Ap(e,t,n);we=!!(e.flags&131072)}else we=!1,W&&t.flags&1048576&&oc(t,bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ii(e,t),e=t.pendingProps;var i=wn(t,pe.current);vn(t,n),i=cs(null,t,r,e,i,n);var a=ds();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(a=!0,ki(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,as(t),i.updater=qi,t.stateNode=i,i._reactInternals=t,po(t,r,e,n),t=go(null,t,r,!0,a,n)):(t.tag=0,W&&a&&Xo(t),he(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ii(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qp(r),e=De(r,e),i){case 0:t=mo(null,t,r,e,n);break e;case 1:t=jl(null,t,r,e,n);break e;case 11:t=Sl(null,t,r,e,n);break e;case 14:t=Pl(null,t,r,De(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),mo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),jl(e,t,r,i,n);case 3:e:{if($c(t),e===null)throw Error(S(387));r=t.pendingProps,a=t.memoizedState,i=a.element,fc(e,t),ji(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Sn(Error(S(423)),t),t=El(e,t,r,n,i);break e}else if(r!==i){i=Sn(Error(S(424)),t),t=El(e,t,r,n,i);break e}else for(Pe=bt(t.stateNode.containerInfo.firstChild),je=t,W=!0,Be=null,n=cc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kn(),r===i){t=lt(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return pc(t),e===null&&uo(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,io(r,i)?o=null:a!==null&&io(r,a)&&(t.flags|=32),Rc(e,t),he(e,t,o,n),t.child;case 6:return e===null&&uo(t),null;case 13:return Dc(e,t,n);case 4:return os(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Sl(e,t,r,i,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,B(Si,r._currentValue),r._currentValue=o,a!==null)if(We(a.value,o)){if(a.children===i.children&&!ke.current){t=lt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=it(-1,n&-n),u.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?u.next=u:(u.next=m.next,m.next=u),f.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),co(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(S(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),co(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}he(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,vn(t,n),i=Fe(i),r=r(i),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,i=De(r,t.pendingProps),i=De(r.type,i),Pl(e,t,r,i,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),ii(e,t),t.tag=1,xe(r)?(e=!0,ki(t)):e=!1,vn(t,n),Oc(t,r,i),po(t,r,i,n),go(null,t,r,!0,e,n);case 19:return Uc(e,t,n);case 22:return Mc(e,t,n)}throw Error(S(156,t.tag))};function rd(e,t){return Nu(e,t)}function qp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new qp(e,t,n,r)}function ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qp(e){if(typeof e=="function")return ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Do)return 11;if(e===Uo)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function si(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")ks(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case tn:return Bt(n.children,i,a,t);case $o:o=8,i|=8;break;case La:return e=Oe(12,n,t,i|2),e.elementType=La,e.lanes=a,e;case Ma:return e=Oe(13,n,t,i),e.elementType=Ma,e.lanes=a,e;case Ra:return e=Oe(19,n,t,i),e.elementType=Ra,e.lanes=a,e;case pu:return Ki(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case du:o=10;break e;case fu:o=9;break e;case Do:o=11;break e;case Uo:o=14;break e;case ht:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Oe(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Bt(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function Ki(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=pu,e.lanes=n,e.stateNode={isHidden:!1},e}function ja(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xs(e,t,n,r,i,a,o,s,u){return e=new Gp(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Oe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},as(a),e}function Kp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:en,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function id(e){if(!e)return Ct;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(xe(n))return ic(e,n,t)}return t}function ad(e,t,n,r,i,a,o,s,u){return e=xs(n,r,!0,e,i,a,o,s,u),e.context=id(null),n=e.current,r=me(),i=jt(n),a=it(r,i),a.callback=t??null,St(n,a,i),e.current.lanes=i,Er(e,i,r),be(e,r),e}function Yi(e,t,n,r){var i=t.current,a=me(),o=jt(i);return n=id(n),t.context===null?t.context=n:t.pendingContext=n,t=it(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(i,t,o),e!==null&&(He(e,i,o,a),ti(e,i,o)),o}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ml(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bs(e,t){Ml(e,t),(e=e.alternate)&&Ml(e,t)}function Yp(){return null}var od=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ss(e){this._internalRoot=e}Zi.prototype.render=Ss.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Yi(e,t,null,null)};Zi.prototype.unmount=Ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qt(function(){Yi(null,e,null,null)}),t[ot]=null}};function Zi(e){this._internalRoot=e}Zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&$u(e)}};function Ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rl(){}function Zp(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var f=Ii(o);a.call(f)}}var o=ad(t,r,e,0,null,!1,!1,"",Rl);return e._reactRootContainer=o,e[ot]=o.current,pr(e.nodeType===8?e.parentNode:e),Qt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var f=Ii(u);s.call(f)}}var u=xs(e,0,!1,null,null,!1,!1,"",Rl);return e._reactRootContainer=u,e[ot]=u.current,pr(e.nodeType===8?e.parentNode:e),Qt(function(){Yi(t,u,n,r)}),u}function Ji(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var u=Ii(o);s.call(u)}}Yi(t,o,e,i)}else o=Zp(n,t,e,i,r);return Ii(o)}Fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vn(t.pendingLanes);n!==0&&(Ho(t,n|1),be(t,Z()),!(L&6)&&(Pn=Z()+500,At()))}break;case 13:Qt(function(){var r=st(e,1);if(r!==null){var i=me();He(r,e,1,i)}}),bs(e,1)}};Wo=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=me();He(t,e,134217728,n)}bs(e,134217728)}};Lu=function(e){if(e.tag===13){var t=jt(e),n=st(e,t);if(n!==null){var r=me();He(n,e,t,r)}bs(e,t)}};Mu=function(){return U};Ru=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Ga=function(e,t,n){switch(t){case"input":if(Ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vi(r);if(!i)throw Error(S(90));mu(r),Ua(r,i)}}}break;case"textarea":vu(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};Su=ys;Pu=Qt;var Xp={usingClientEntryPoint:!1,Events:[Cr,on,Vi,xu,bu,ys]},$n={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jp={bundleType:$n.bundleType,version:$n.version,rendererPackageName:$n.rendererPackageName,rendererConfig:$n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zu(e),e===null?null:e.stateNode},findFiberByHostInstance:$n.findFiberByHostInstance||Yp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{$i=Gr.inject(Jp),Ze=Gr}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xp;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ps(t))throw Error(S(200));return Kp(e,t,null,n)};ze.createRoot=function(e,t){if(!Ps(e))throw Error(S(299));var n=!1,r="",i=od;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xs(e,1,!1,null,null,n,!1,r,i),e[ot]=t.current,pr(e.nodeType===8?e.parentNode:e),new Ss(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=zu(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return Qt(e)};ze.hydrate=function(e,t,n){if(!Xi(t))throw Error(S(200));return Ji(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Ps(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=od;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ad(t,null,e,1,n??null,i,!1,a,o),e[ot]=t.current,pr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Zi(t)};ze.render=function(e,t,n){if(!Xi(t))throw Error(S(200));return Ji(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Xi(e))throw Error(S(40));return e._reactRootContainer?(Qt(function(){Ji(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};ze.unstable_batchedUpdates=ys;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xi(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ji(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function sd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sd)}catch(e){console.error(e)}}sd(),su.exports=ze;var eh=su.exports,ld,$l=eh;ld=$l.createRoot,$l.hydrateRoot;function Dl(e){const n=e.replace(/^#\/?/,"").match(/^algo\/([\w-]+)/);return n?{page:"algo",id:n[1]}:{page:"home"}}function th(){const[e,t]=R.useState(()=>Dl(window.location.hash));return R.useEffect(()=>{const n=()=>t(Dl(window.location.hash));return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),e}const nh=["Practical performance first: how fast it is on real hardware for typical inputs (cache behaviour, constant factors, adaptivity to presorted data).","Then average and worst-case complexity: O(n log n) comparison sorts beat O(n²) ones; guaranteed worst cases beat ones that can degrade.","Stability and generality break ties: a stable, general-purpose comparison sort beats one that only works on bounded integers or needs extra conditions.","Non-comparison sorts (radix, counting, bucket) can be the fastest of all on integer keys, but they are ranked below the general-purpose sorts because they only work on keys with bounded size or range.","Novelty / teaching-only algorithms (pancake, bogo) come last."],rh="Notation: arr = the array being sorted; n = number of elements in arr; arr[i] = the element at index i (counting from 0); lo..hi = the range currently being worked on; O(...) = how the work grows with n.",Re=[1e3,5e3,2e4,5e4,1e5],ft=[100,500,1e3,2e3,4e3],$e=1e5,pt=2e4,J=120,jn=[{id:"timsort",name:"Timsort (hybrid)",rank:1,family:"Hybrid merge + insertion",summary:"Finds naturally ordered runs, extends short runs with binary insertion sort, and merges runs with a balanced stack.",why:"Default sort in Python, Java (objects), Android, V8: stable, O(n log n) worst case and O(n) on already-sorted or run-structured data.",best:"O(n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(n)",stable:!0,inPlace:!1,growth:"nlogn",suitable:"General-purpose sorting, especially real-world data that is partially sorted, and whenever stability matters.",bad:"Random data of primitives where an unstable in-place quicksort variant is slightly faster and needs no buffer.",uses:["Python list.sort / sorted","Java Arrays.sort for objects, Collections.sort","V8 Array.prototype.sort","Rust slice::sort (driftsort, a descendant)"],steps:["Pick a minimum run length, minRun, between 32 and 64 so that n / minRun (n = number of elements) is close to a power of two.","Scan left to right for a natural run: an ascending or strictly descending sequence (reverse descending runs).","If the run is shorter than minRun, extend it with binary insertion sort.","Push the run onto a stack. Look at the lengths of the three runs on top (A, B, and C on the very top); while A ≤ B + C or B ≤ C, merge neighbouring runs so the stack stays balanced.","At the end, merge everything left on the stack. Merges take from the left run on ties, keeping the sort stable."],pseudocode:`timsort(arr):
  minRun ← computeMinRun(n)
  runs ← empty stack
  lo ← 0
  while lo < n:
    hi ← end of the natural run starting at lo
    if run is strictly descending: reverse arr[lo..hi)
    runEnd ← max(hi, min(n, lo + minRun))
    binaryInsertionSort(arr, lo, hi, runEnd)
    push (lo, runEnd - lo) on runs
    mergeCollapse(runs)       // top run lengths A, B, C: keep A > B + C and B > C
    lo ← runEnd
  merge all remaining runs`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"introsort",name:"Introsort",rank:2,family:"Hybrid quick + heap + insertion",summary:"Quicksort with median-of-three pivots that switches to heapsort when recursion gets too deep and to insertion sort for tiny ranges.",why:"Quicksort speed with a guaranteed O(n log n) worst case and O(log n) space; the basis of C++ std::sort and .NET Array.Sort. Unstable, so ranked just below Timsort.",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(log n)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Sorting primitives in place when stability is not needed and worst-case guarantees are.",bad:"When stability is required, or data is mostly sorted (it does not exploit existing order like Timsort).",uses:["C++ std::sort (libstdc++, MSVC)",".NET Array.Sort","Go sort.Sort (pdqsort, a descendant)"],steps:["Set a depth limit of about 2·log2(n), where n = number of elements.","While the range has more than 16 elements: if the depth limit hits 0, heapsort this range and stop.","Otherwise put the median of first, middle and last at the end as the pivot, then partition: i walks the range and every element smaller than the pivot is swapped to storePos, which then moves right.","Swap the pivot into storePos (its final place). Recurse into the smaller side and loop on the larger one (bounded stack).","Finish small ranges with insertion sort."],pseudocode:`introsort(arr, lo, hi, depth):
  while hi - lo > 16:
    if depth = 0:
      heapsort(arr, lo, hi); return
    depth ← depth - 1
    pivotPos ← hi - 1   // after moving the median of three there
    storePos ← lo
    for i ← lo to pivotPos - 1:
      if arr[i] < arr[pivotPos]: swap arr[storePos], arr[i]; storePos++
    swap arr[storePos], arr[pivotPos]
    recurse on smaller of [lo, storePos) and [storePos+1, hi); loop on the other
  insertionSort(arr, lo, hi)`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"quick",name:"Quick sort (3-way)",rank:3,family:"Divide & conquer (partition)",summary:"Pick a random element as the pivot, split the array into three blocks (smaller than, equal to, and larger than the pivot; Dijkstra 3-way partitioning), then sort the smaller and larger blocks the same way.",why:"Usually the fastest pure comparison sort in practice thanks to cache-friendly in-place partitioning; the 3-way variant handles duplicates in linear time. Worst case is still O(n²) (very unlikely with random pivots).",best:"O(n)",avg:"O(n log n)",worst:"O(n²)",space:"O(log n)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Large arrays of primitives in memory, especially with many duplicate keys (3-way).",bad:"Adversarial inputs against a fixed pivot rule, or when stability / a hard worst-case bound is required.",uses:["Building block of introsort / pdqsort","Java Arrays.sort for primitives (dual-pivot quicksort)","C qsort implementations"],steps:["Work on the range lo..hi (at first, the whole array). If it has fewer than two elements, it is already sorted.","Pick a random element as the pivot and move it to the front of the range.",'Move i from left to right over the range and compare each element with the pivot. Elements smaller than the pivot are swapped into the "less" block at the left (less end grows by one). Elements larger than the pivot are swapped into the "greater" block at the right (greater start moves one left). Elements equal to the pivot stay in the middle.',"When i passes greater start, the range is split into three blocks: smaller than the pivot, equal to the pivot (already in their final place), and larger than the pivot.","Sort the less and greater blocks the same way (the smaller block first, to keep the recursion shallow)."],pseudocode:`quick3(arr, lo, hi):
  if hi ≤ lo: return
  swap arr[lo], arr[random index in lo..hi]
  pivot ← arr[lo]
  lessEnd ← lo; i ← lo + 1; greaterStart ← hi
  while i ≤ greaterStart:
    if arr[i] < pivot: swap arr[lessEnd], arr[i]; lessEnd++; i++
    else if arr[i] > pivot: swap arr[i], arr[greaterStart]; greaterStart--
    else: i++
  quick3(arr, lo, lessEnd - 1)
  quick3(arr, greaterStart + 1, hi)`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"merge",name:"Merge sort",rank:4,family:"Divide & conquer (merge)",summary:"Top-down recursion: split the range lo..hi at mid, sort the left half lo..mid and then the right half mid + 1..hi recursively, then merge the two sorted halves.",why:"Stable with a guaranteed O(n log n) worst case and very predictable; needs O(n) extra memory and does not adapt to presorted input (Timsort fixes that).",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(n)",stable:!0,inPlace:!1,growth:"nlogn",suitable:"Stable sorting, linked lists, external (on-disk) sorting, parallel sorting.",bad:"Memory-constrained environments (O(n) buffer) and tiny arrays (recursion overhead).",uses:["External sorting of huge files","Sorting linked lists","Counting inversions","GNU sort"],steps:["Start with one call on the whole array: lo = 0, hi = n - 1 (n = number of elements).","Divide: if the range lo..hi has one element (lo = hi), it is already sorted (the base case). Otherwise compute mid = lo + (hi - lo) / 2, rounded down.","Sort the left half lo..mid with a recursive call first, then the right half mid + 1..hi. Each call splits again, so the recursion goes deeper until every range has one element.","Conquer: when both halves of a call are sorted, merge them. leftPos walks the left half, rightPos walks the right half, and the smaller of the two values is written at writePos (the left one on ties, so the sort is stable).","Copy whatever remains of either half. The call returns, and its parent merges the next level up, until the first call merges 0..mid with mid + 1..n - 1."],pseudocode:`mergeSort(arr, lo, hi):          // first call: mergeSort(arr, 0, n - 1)
  if lo >= hi: return              // one element: already sorted
  mid ← lo + (hi - lo) / 2         // rounded down
  mergeSort(arr, lo, mid)          // sort the left half
  mergeSort(arr, mid + 1, hi)      // sort the right half
  merge(arr, lo, mid, hi)

merge(arr, lo, mid, hi):           // halves lo..mid and mid + 1..hi are sorted
  leftPos ← lo; rightPos ← mid + 1
  for writePos ← lo to hi:
    if rightPos > hi or (leftPos ≤ mid and arr[leftPos] ≤ arr[rightPos]):
      temp[writePos] ← arr[leftPos]; leftPos ← leftPos + 1
    else: temp[writePos] ← arr[rightPos]; rightPos ← rightPos + 1
  copy temp[lo..hi] to arr[lo..hi]`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"heap",name:"Heap sort",rank:5,family:"Selection via binary heap",summary:"Build a max-heap in the array, then repeatedly swap the maximum to the end and restore the heap.",why:"Guaranteed O(n log n) with O(1) extra space, but poor cache locality makes it 2-3x slower than quicksort in practice, and it is unstable.",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(1)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Hard real-time or memory-constrained systems that need a worst-case bound with no extra memory; partial sorting / top-k.",bad:"Large arrays on modern CPUs (cache misses), and when stability is needed.",uses:["Introsort fallback","Priority queues / top-k selection","Embedded systems (Linux kernel lib/sort.c)"],steps:["Heapify (n = number of elements): sift down every parent node from n/2 - 1 to 0, so every node ≥ its children.","Swap the root (maximum) with the element at heapEnd, the last slot of the heap; that slot is now final and heapEnd moves left.","Sift the new root down: compare the node with its larger child and swap while the child is bigger.","Repeat until the heap has one element."],pseudocode:`heapSort(arr):
  for node ← n/2 - 1 downto 0: siftDown(arr, node, n)
  for heapEnd ← n - 1 downto 1:
    swap arr[0], arr[heapEnd]
    siftDown(arr, 0, heapEnd)    // heap is now arr[0..heapEnd)

siftDown(arr, node, size):
  while 2·node + 1 < size:
    child ← larger of the children of node
    if arr[node] ≥ arr[child]: return
    swap arr[node], arr[child]; node ← child`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"radix",name:"Radix sort (LSD)",rank:6,family:"Non-comparison (digit distribution)",summary:"Sort by one byte (digit) at a time from least to most significant, using a stable counting pass per digit.",why:"Linear time O(n·k) (n = number of elements, k = number of byte digits per key) for fixed-width integer keys and often the fastest option for large integer arrays, but only works for keys that decompose into digits.",best:"O(n·k)",avg:"O(n·k)",worst:"O(n·k)",space:"O(n + b)",stable:!0,inPlace:!1,growth:"nk",suitable:"Large arrays of integers or fixed-length strings (k = number of digits, b = radix 256 here).",bad:"Floating point or arbitrary comparison-based keys; small arrays where the per-pass overhead dominates; very wide keys.",uses:["GPU sorting (CUB, Thrust)","Suffix-array construction","Sorting IP addresses / fixed-width IDs","Database column stores"],steps:["Offset every value by the minimum so keys are non-negative.","For each byte position from the lowest: count how many keys have each byte value (0-255).","Prefix-sum the counts into starting positions and place each key stably into an output buffer.","Swap buffers and continue with the next byte until the highest non-zero byte of the max key.","Add the minimum back."],pseudocode:`radixLSD(arr):
  for each index i: key[i] ← arr[i] - min(arr)
  for shift ← 0, 8, 16, ... while (maxKey >> shift) > 0:
    count[0..256] ← 0
    for each keyValue in key: count[digit(keyValue, shift) + 1]++   // digit = (keyValue >> shift) & 255
    prefix-sum count            // count[digit] = first output slot for that digit
    for each keyValue in key: output[count[digit(keyValue, shift)]++] ← keyValue
    swap key, output
  for each index i: arr[i] ← key[i] + min(arr)`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"counting",name:"Counting sort",rank:7,family:"Non-comparison (counting)",summary:"Count how many times each value occurs, then write the values back in order.",why:"O(n + k) (n = number of elements, k = max - min + 1, the size of the value range) and extremely fast when k is small, but memory grows with the range so it is useless for wide keys (this site limits max - min to under 1,000,000).",best:"O(n + k)",avg:"O(n + k)",worst:"O(n + k)",space:"O(k)",stable:!0,inPlace:!1,growth:"n",suitable:"Integers in a small known range: ages, grades, bytes, histogram buckets.",bad:"Large value ranges (k ≫ n) or non-integer keys.",uses:["Building block of radix sort","Sorting bytes / characters","Histogram equalisation in image processing"],steps:["Find the minimum and maximum value; k = max - min + 1.","Allocate k counters and count occurrences of each value.","Walk the counters in increasing order and write each value at writePos as many times as it was counted."],pseudocode:`countingSort(arr):
  lo ← min(arr); hi ← max(arr)
  count[0..hi-lo] ← 0
  for value in arr: count[value - lo]++
  writePos ← 0
  for offset ← 0 to hi - lo:
    repeat count[offset] times: arr[writePos++] ← offset + lo`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"bucket",name:"Bucket sort",rank:8,family:"Non-comparison (distribution)",summary:"Scatter values into n buckets by value range, sort each bucket with insertion sort, then concatenate.",why:"Expected O(n + k) (n = number of elements, k = number of buckets, here k = n) for uniformly distributed data, but skewed data piles into a few buckets and degrades to O(n²) (insertion sort inside a bucket).",best:"O(n + k)",avg:"O(n + k)",worst:"O(n²)",space:"O(n + k)",stable:!0,inPlace:!1,growth:"n",suitable:"Uniformly distributed keys (e.g. random floats in [0, 1)) and as a parallel / external sorting stage.",bad:"Clustered or skewed distributions, where many values land in the same bucket.",uses:["Sorting uniformly distributed floats","Histogram-based parallel sorts (sample sort)","Graphics: depth bucketing"],steps:["Find min and max. Each value goes to bucket number (value - min) · n / (max - min + 1), where n = number of elements (also the number of buckets).","Append every value to its bucket.","Sort each bucket with insertion sort (buckets are small on uniform data).","Concatenate the buckets in order."],pseudocode:`bucketSort(arr):
  lo ← min(arr); range ← max(arr) - lo + 1
  buckets[0..n-1] ← empty lists
  for value in arr: append value to buckets[(value - lo) · n / range]
  for each bucket: insertionSort(bucket)
  arr ← buckets[0] + buckets[1] + ... + buckets[n-1]`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"shell",name:"Shell sort",rank:9,family:"Insertion (diminishing gaps)",summary:"Insertion sort over elements a gap apart, with the gap shrinking (Ciura sequence 701, 301, 132, 57, 23, 10, 4, 1).",why:"Simple, in place, no recursion and surprisingly fast for medium-sized arrays (roughly O(n^1.3) in practice, n = number of elements), but no proven O(n log n) bound and unstable.",best:"O(n log n)",avg:"≈ O(n^1.3) (gap dependent)",worst:"O(n^1.5) or worse",space:"O(1)",stable:!1,inPlace:!0,growth:"n32",suitable:"Embedded systems and medium-sized arrays where code size and no-recursion matter.",bad:"Very large arrays (falls behind O(n log n) sorts) and when stability is needed.",uses:["uClibc qsort","bzip2 compressor","Embedded firmware"],steps:["Choose a decreasing gap sequence ending in 1.","For each gap: do an insertion sort where the key (taken from current) is compared with the element gap positions to the left of the hole.","Large gaps move far-away elements quickly; the final gap = 1 pass is a plain insertion sort on nearly sorted data."],pseudocode:`shellSort(arr):
  for gap in [..., 701, 301, 132, 57, 23, 10, 4, 1] with gap < n:
    for current ← gap to n - 1:
      key ← arr[current]; hole ← current
      while hole ≥ gap and key < arr[hole - gap]:
        arr[hole] ← arr[hole - gap]; hole ← hole - gap
      arr[hole] ← key`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"comb",name:"Comb sort",rank:10,family:"Exchange (shrinking gap)",summary:'Bubble sort that compares elements a gap apart, shrinking the gap by 1.3 each pass to kill "turtles" (small values near the end).',why:"Much faster than bubble sort (close to O(n log n) on random data) with tiny code, but O(n²) worst case and unstable.",best:"O(n log n)",avg:"Ω(n² / 2^p), p = number of gap shrinks; ≈ n log n in practice",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"When you need something tiny and much better than bubble sort.",bad:"Large data sets where real O(n log n) sorts win, and stability requirements.",uses:["Teaching gap-based improvements","Tiny embedded code"],steps:["Start with gap = n, the number of elements.","Each pass: gap ← floor(gap / 1.3) (at least 1); compare-and-swap every pair (left, right = left + gap).","Stop after a pass with gap = 1 that made no swaps."],pseudocode:`combSort(arr):
  gap ← n; sorted ← false
  while not sorted:
    gap ← floor(gap / 1.3)
    if gap ≤ 1: gap ← 1; sorted ← true
    for left ← 0 to n - gap - 1:
      right ← left + gap
      if arr[right] < arr[left]:
        swap arr[left], arr[right]; sorted ← false`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"bitonic",name:"Bitonic sort",rank:11,family:"Sorting network",summary:"Recursively build bitonic sequences (ascending then descending) and merge them with a fixed pattern of compare-exchanges.",why:"Data-independent compare pattern is ideal for GPUs, SIMD and hardware, but O(n log² n) comparisons make it slower than O(n log n) sorts on a CPU.",best:"O(n log² n)",avg:"O(n log² n)",worst:"O(n log² n)",space:"O(log n) recursion",stable:!1,inPlace:!0,growth:"nlog2n",suitable:"Parallel hardware: GPUs, FPGAs, SIMD lanes, sorting networks.",bad:"Sequential CPU code, where the extra log factor costs real time.",uses:["GPU sorting kernels","Hardware sorting networks","SIMD sorting of small blocks"],steps:["Sort the first half ascending-reversed (descending) and the second half ascending, recursively; together they form a bitonic sequence.","Bitonic merge: let distance = the largest power of two below the length; compare-exchange each element left with the element distance positions to its right, in the requested direction.","Recursively bitonic-merge both parts. This generalisation works for any number of elements, not just powers of two."],pseudocode:`bitonicSort(arr, lo, count, ascending):   // sort count elements starting at lo
  if count ≤ 1: return
  half ← count / 2
  bitonicSort(arr, lo, half, not ascending)
  bitonicSort(arr, lo + half, count - half, ascending)
  bitonicMerge(arr, lo, count, ascending)

bitonicMerge(arr, lo, count, ascending):
  if count ≤ 1: return
  distance ← greatest power of two < count
  for left ← lo to lo + count - distance - 1:
    if (arr[left] > arr[left + distance]) = ascending: swap arr[left], arr[left + distance]
  bitonicMerge(arr, lo, distance, ascending)
  bitonicMerge(arr, lo + distance, count - distance, ascending)`,maxInput:$e,maxViz:J,benchSizes:Re},{id:"insertion",name:"Insertion sort",rank:12,family:"Insertion",summary:"Grow a sorted prefix by taking the next element and shifting larger elements right until its slot is found.",why:"The best O(n²) sort: stable, in place, adaptive (O(n) on nearly sorted data) and the fastest choice for tiny arrays, which is why hybrids use it.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Small arrays (< ~20-50 elements), nearly sorted data, online sorting as items arrive.",bad:"Large or reverse-ordered arrays (quadratic shifts).",uses:["Small-range base case in Timsort, introsort, pdqsort","Online insertion into a sorted list","Card players sorting a hand"],steps:["Treat arr[0] as a sorted part.","Take the next element, current, out of the array: its value is the key and its slot becomes the hole.","While the element left of the hole is larger than the key, shift it right into the hole; the hole moves one step left.","Drop the key into the hole. The sorted part is one longer."],pseudocode:`insertionSort(arr):
  for current ← 1 to n - 1:
    key ← arr[current]; hole ← current
    while hole > 0 and key < arr[hole - 1]:
      arr[hole] ← arr[hole - 1]; hole ← hole - 1
    arr[hole] ← key`,maxInput:pt,maxViz:J,benchSizes:ft},{id:"selection",name:"Selection sort",rank:13,family:"Selection",summary:"Repeatedly find the minimum of the unsorted suffix and swap it to the front.",why:"Always about n²/2 comparisons (n = number of elements) (not adaptive) and unstable, but makes at most n - 1 swaps, which helps when writes are expensive.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"Tiny arrays where swaps (writes) are much more expensive than comparisons.",bad:"Anything large; it never benefits from presorted input.",uses:["Teaching","Flash/EEPROM where writes wear the memory","Selecting the few smallest items (stop the outer loop early)"],steps:["For each fillPos from left to right:","move i over the unsorted part arr[fillPos..n) and remember minIndex, the index of the smallest value seen;","swap arr[minIndex] into fillPos. That slot is now final."],pseudocode:`selectionSort(arr):
  for fillPos ← 0 to n - 2:
    minIndex ← fillPos
    for i ← fillPos + 1 to n - 1:
      if arr[i] < arr[minIndex]: minIndex ← i
    swap arr[fillPos], arr[minIndex]`,maxInput:pt,maxViz:J,benchSizes:ft},{id:"cocktail",name:"Cocktail shaker sort",rank:14,family:"Exchange",summary:"Bubble sort that alternates forward and backward passes, moving large values right and small values left each round.",why:"Slightly better than bubble sort (turtles move left fast) and stable/adaptive, but still O(n²) with lots of swaps.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching; nearly sorted data with a few misplaced elements at either end.",bad:"Random or large data.",uses:["Teaching bidirectional passes"],steps:["Forward pass: move i from lo to hi, bubbling the largest unsorted value to hi.","Backward pass: move i from hi back to lo, bubbling the smallest unsorted value to lo.","Move lo right and hi left (everything outside lo..hi is final) and repeat until a full round makes no swap."],pseudocode:`cocktailSort(arr):
  lo ← 0; hi ← n - 1; swapped ← true
  while swapped and lo < hi:
    swapped ← false
    for i ← lo to hi - 1: if arr[i+1] < arr[i]: swap arr[i], arr[i+1]; swapped ← true
    hi ← hi - 1
    for i ← hi downto lo + 1: if arr[i] < arr[i-1]: swap arr[i], arr[i-1]; swapped ← true
    lo ← lo + 1`,maxInput:pt,maxViz:J,benchSizes:ft},{id:"bubble",name:"Bubble sort",rank:15,family:"Exchange",summary:"Repeatedly swap adjacent out-of-order pairs; each pass bubbles the largest remaining value to the end.",why:"Stable and adaptive with an early exit, but the most swaps of any common algorithm and poor practical speed.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching, or checking whether a tiny array is already sorted (one pass).",bad:'Everything else, especially small values near the end ("turtles").',uses:["Teaching","Detecting a nearly sorted array in one pass"],steps:["Move i through the unsorted part, comparing each neighbouring pair arr[i - 1] and arr[i]; swap them if they are out of order.","After a pass, the largest remaining value has bubbled to the end, so sortedFrom moves left: from sortedFrom to the end everything is final.","Stop early if a pass makes no swaps."],pseudocode:`bubbleSort(arr):
  sortedFrom ← n
  while sortedFrom > 1:
    swapped ← false
    for i ← 1 to sortedFrom - 1:
      if arr[i] < arr[i - 1]: swap arr[i], arr[i - 1]; swapped ← true
    sortedFrom ← sortedFrom - 1
    if not swapped: break`,maxInput:pt,maxViz:J,benchSizes:ft},{id:"odd-even",name:"Odd-even sort",rank:16,family:"Exchange (parallel)",summary:"Alternate compare-swap passes over odd-indexed pairs (1,2), (3,4)... and even-indexed pairs (0,1), (2,3)... until sorted.",why:"Each phase is fully parallel (n/2 independent compare-swaps, n = number of elements), which suits SIMD/processor arrays, but sequentially it is as slow as bubble sort.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Parallel processor arrays / meshes where each processor holds one element.",bad:"Sequential code on large data.",uses:["Parallel sorting on processor arrays","Teaching sorting networks"],steps:["Odd phase: compare-swap the pairs starting at odd indexes: (1,2), (3,4), (5,6), ...","Even phase: compare-swap the pairs starting at even indexes: (0,1), (2,3), (4,5), ...","Repeat both phases until a full round makes no swap. pairStart marks the first element of the pair being compared."],pseudocode:`oddEvenSort(arr):
  sorted ← false
  while not sorted:
    sorted ← true
    for phase in [1, 0]:
      for pairStart ← phase; pairStart + 1 < n; pairStart ← pairStart + 2:
        if arr[pairStart+1] < arr[pairStart]:
          swap arr[pairStart], arr[pairStart+1]; sorted ← false`,maxInput:pt,maxViz:J,benchSizes:ft},{id:"gnome",name:"Gnome sort",rank:17,family:"Exchange (insertion-like)",summary:"A garden gnome walks forward while pots are in order; when two are out of order he swaps them and steps back.",why:"Conceptually insertion sort done with swaps: stable and adaptive but does about 3x the work of insertion sort.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching; extremely small code size.",bad:"Any real workload.",uses:["Teaching","Code-golf"],steps:["The gnome starts at gnomePos = 0.","If it is at the start or arr[gnomePos] ≥ arr[gnomePos - 1], it steps forward.","Otherwise it swaps the two and steps back.","Done when the gnome walks off the end."],pseudocode:`gnomeSort(arr):
  gnomePos ← 0
  while gnomePos < n:
    if gnomePos = 0 or arr[gnomePos] ≥ arr[gnomePos - 1]: gnomePos++
    else: swap arr[gnomePos], arr[gnomePos - 1]; gnomePos--`,maxInput:pt,maxViz:J,benchSizes:ft},{id:"cycle",name:"Cycle sort",rank:18,family:"Selection (cycle rotation)",summary:"For each position, count how many elements are smaller to find where its item belongs, and rotate the whole permutation cycle into place.",why:"Theoretically optimal number of memory writes (each element written at most once), but always Θ(n²) comparisons and unstable.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"Memory where writes are extremely expensive (EEPROM, flash) and n is small.",bad:"Anything where comparisons cost time: it is never adaptive.",uses:["Minimising writes to flash / EEPROM","Finding the minimum swaps to sort a permutation"],steps:["Pick up item = arr[cycleStart]; its targetPos is cycleStart + (the number of later elements smaller than it, counted by moving i over them).","Skip past equal values, then put the item at targetPos and pick up the value that was there.","Repeat for the carried value until the cycle returns to cycleStart.","Move cycleStart to the next position."],pseudocode:`cycleSort(arr):
  for cycleStart ← 0 to n - 2:
    item ← arr[cycleStart]
    targetPos ← cycleStart + (number of indexes i > cycleStart with arr[i] < item)
    if targetPos = cycleStart: continue
    while item = arr[targetPos]: targetPos++
    swap item, arr[targetPos]
    while targetPos ≠ cycleStart:
      targetPos ← cycleStart + (number of indexes i > cycleStart with arr[i] < item)
      while item = arr[targetPos]: targetPos++
      if item ≠ arr[targetPos]: swap item, arr[targetPos]`,maxInput:pt,maxViz:J,benchSizes:ft},{id:"pancake",name:"Pancake sort",rank:19,family:"Selection (prefix reversal)",summary:'Only allowed operation is "flip the top few pancakes": flip the largest to the top, then flip it to the bottom of the unsorted stack.',why:"A puzzle-inspired sort: O(n) flips (n = number of elements) but each flip costs O(n) element moves, so O(n²) overall with heavy data movement.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"When prefix reversal is the only primitive available (e.g. some hardware / genome rearrangement models).",bad:"Any practical sorting task.",uses:["Genome rearrangement research","Interconnection-network routing (pancake graphs)","Bill Gates's only research paper"],steps:["The unsorted part is arr[0..lastUnsorted]; it starts as the whole array.","move i over it to find maxIndex, the position of its largest value;","flip the prefix ending at maxIndex (the maximum comes to the front), then flip the prefix ending at lastUnsorted (the maximum goes to lastUnsorted). lastUnsorted moves one left."],pseudocode:`pancakeSort(arr):
  for unsortedSize ← n downto 2:
    lastUnsorted ← unsortedSize - 1
    maxIndex ← index of max(arr[0..lastUnsorted])
    if maxIndex ≠ lastUnsorted:
      flip(arr, maxIndex)       // reverse arr[0..maxIndex]
      flip(arr, lastUnsorted)   // reverse arr[0..lastUnsorted]`,maxInput:pt,maxViz:J,benchSizes:ft},{id:"bogo",name:"Bogo sort",rank:20,family:"Randomised (joke)",summary:"Check if the array is sorted; if not, shuffle it randomly and try again.",why:"Expected O(n·n!) time (n = number of elements) and unbounded worst case: the canonical example of the worst possible sorting algorithm. Capped at 8 elements here.",best:"O(n)",avg:"O(n · n!)",worst:"Unbounded",space:"O(1)",stable:!1,inPlace:!0,growth:"nfact",suitable:"Jokes, teaching probability, and stress-testing a shuffle.",bad:"Any input larger than a handful of elements.",uses:["Teaching expected running time","Humour"],steps:["If the array is sorted, stop.","Otherwise shuffle it uniformly at random (Fisher-Yates) and go back to step 1."],pseudocode:`bogoSort(arr):
  while not isSorted(arr):
    for i ← n - 1 downto 1:
      other ← random index in 0..i
      swap arr[i], arr[other]`,maxInput:8,maxViz:7,benchSizes:[3,4,5,6,7]}],ih=Object.fromEntries(jn.map(e=>[e.id,e]));function ah(){return d.jsxs("div",{className:"landing",children:[d.jsxs("section",{className:"hero",children:[d.jsx("h1",{children:"Sort Pedia"}),d.jsx("p",{children:"Every common sorting algorithm, ranked from best to worst, explained in plain language, with verified code in C, C++, Java, Go, Rust and Python, live benchmarks and step-by-step visualizations. Every sort on this site runs in Rust compiled to WebAssembly."})]}),d.jsxs("section",{className:"card","aria-labelledby":"index-h",children:[d.jsx("h2",{id:"index-h",children:"Index"}),d.jsx("nav",{className:"index","data-testid":"algo-index",children:jn.map(e=>d.jsxs("a",{href:`#/algo/${e.id}`,className:"chip",children:[d.jsx("b",{children:e.rank})," ",e.name]},e.id))})]}),d.jsxs("section",{className:"card","aria-labelledby":"why-h",children:[d.jsx("h2",{id:"why-h",children:"How the ranking works"}),d.jsx("ol",{className:"rationale",children:nh.map(e=>d.jsx("li",{children:e},e))})]}),d.jsxs("section",{"aria-labelledby":"rank-h",children:[d.jsx("h2",{id:"rank-h",children:"Ranking: best to worst"}),d.jsx("ol",{className:"ranking","data-testid":"ranking",children:jn.map(e=>d.jsxs("li",{className:"rank-card",children:[d.jsxs("div",{className:"rank-num",children:["#",e.rank]}),d.jsxs("div",{className:"rank-body",children:[d.jsx("h3",{children:d.jsx("a",{href:`#/algo/${e.id}`,children:e.name})}),d.jsxs("div",{className:"badges",children:[d.jsxs("span",{className:"badge",children:["avg ",e.avg]}),d.jsxs("span",{className:"badge",children:["worst ",e.worst]}),d.jsxs("span",{className:"badge",children:["space ",e.space]}),d.jsx("span",{className:`badge ${e.stable?"yes":"no"}`,children:e.stable?"stable":"unstable"}),d.jsx("span",{className:`badge ${e.inPlace?"yes":"no"}`,children:e.inPlace?"in-place":"not in-place"})]}),d.jsx("p",{children:e.why})]})]},e.id))})]})]})}var ud={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,o={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function l(c){return c instanceof u?new u(c.type,l(c.content),c.alias):Array.isArray(c)?c.map(l):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++a}),l.__id},clone:function l(c,h){h=h||{};var g,w;switch(s.util.type(c)){case"Object":if(w=s.util.objId(c),h[w])return h[w];g={},h[w]=g;for(var k in c)c.hasOwnProperty(k)&&(g[k]=l(c[k],h));return g;case"Array":return w=s.util.objId(c),h[w]?h[w]:(g=[],h[w]=g,c.forEach(function(b,C){g[C]=l(b,h)}),g);default:return c}},getLanguage:function(l){for(;l;){var c=i.exec(l.className);if(c)return c[1].toLowerCase();l=l.parentElement}return"none"},setLanguage:function(l,c){l.className=l.className.replace(RegExp(i,"gi"),""),l.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(g){var l=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack)||[])[1];if(l){var c=document.getElementsByTagName("script");for(var h in c)if(c[h].src==l)return c[h]}return null}},isActive:function(l,c,h){for(var g="no-"+c;l;){var w=l.classList;if(w.contains(c))return!0;if(w.contains(g))return!1;l=l.parentElement}return!!h}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(l,c){var h=s.util.clone(s.languages[l]);for(var g in c)h[g]=c[g];return h},insertBefore:function(l,c,h,g){g=g||s.languages;var w=g[l],k={};for(var b in w)if(w.hasOwnProperty(b)){if(b==c)for(var C in h)h.hasOwnProperty(C)&&(k[C]=h[C]);h.hasOwnProperty(b)||(k[b]=w[b])}var A=g[l];return g[l]=k,s.languages.DFS(s.languages,function(M,ne){ne===A&&M!=l&&(this[M]=k)}),k},DFS:function l(c,h,g,w){w=w||{};var k=s.util.objId;for(var b in c)if(c.hasOwnProperty(b)){h.call(c,b,c[b],g||b);var C=c[b],A=s.util.type(C);A==="Object"&&!w[k(C)]?(w[k(C)]=!0,l(C,h,null,w)):A==="Array"&&!w[k(C)]&&(w[k(C)]=!0,l(C,h,b,w))}}},plugins:{},highlightAll:function(l,c){s.highlightAllUnder(document,l,c)},highlightAllUnder:function(l,c,h){var g={callback:h,container:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",g),g.elements=Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)),s.hooks.run("before-all-elements-highlight",g);for(var w=0,k;k=g.elements[w++];)s.highlightElement(k,c===!0,g.callback)},highlightElement:function(l,c,h){var g=s.util.getLanguage(l),w=s.languages[g];s.util.setLanguage(l,g);var k=l.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(k,g);var b=l.textContent,C={element:l,language:g,grammar:w,code:b};function A(ne){C.highlightedCode=ne,s.hooks.run("before-insert",C),C.element.innerHTML=C.highlightedCode,s.hooks.run("after-highlight",C),s.hooks.run("complete",C),h&&h.call(C.element)}if(s.hooks.run("before-sanity-check",C),k=C.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!C.code){s.hooks.run("complete",C),h&&h.call(C.element);return}if(s.hooks.run("before-highlight",C),!C.grammar){A(s.util.encode(C.code));return}if(c&&r.Worker){var M=new Worker(s.filename);M.onmessage=function(ne){A(ne.data)},M.postMessage(JSON.stringify({language:C.language,code:C.code,immediateClose:!0}))}else A(s.highlight(C.code,C.grammar,C.language))},highlight:function(l,c,h){var g={code:l,grammar:c,language:h};if(s.hooks.run("before-tokenize",g),!g.grammar)throw new Error('The language "'+g.language+'" has no grammar.');return g.tokens=s.tokenize(g.code,g.grammar),s.hooks.run("after-tokenize",g),u.stringify(s.util.encode(g.tokens),g.language)},tokenize:function(l,c){var h=c.rest;if(h){for(var g in h)c[g]=h[g];delete c.rest}var w=new y;return v(w,w.head,l),m(l,w,c,w.head,0),E(w)},hooks:{all:{},add:function(l,c){var h=s.hooks.all;h[l]=h[l]||[],h[l].push(c)},run:function(l,c){var h=s.hooks.all[l];if(!(!h||!h.length))for(var g=0,w;w=h[g++];)w(c)}},Token:u};r.Prism=s;function u(l,c,h,g){this.type=l,this.content=c,this.alias=h,this.length=(g||"").length|0}u.stringify=function l(c,h){if(typeof c=="string")return c;if(Array.isArray(c)){var g="";return c.forEach(function(A){g+=l(A,h)}),g}var w={type:c.type,content:l(c.content,h),tag:"span",classes:["token",c.type],attributes:{},language:h},k=c.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(w.classes,k):w.classes.push(k)),s.hooks.run("wrap",w);var b="";for(var C in w.attributes)b+=" "+C+'="'+(w.attributes[C]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+b+">"+w.content+"</"+w.tag+">"};function f(l,c,h,g){l.lastIndex=c;var w=l.exec(h);if(w&&g&&w[1]){var k=w[1].length;w.index+=k,w[0]=w[0].slice(k)}return w}function m(l,c,h,g,w,k){for(var b in h)if(!(!h.hasOwnProperty(b)||!h[b])){var C=h[b];C=Array.isArray(C)?C:[C];for(var A=0;A<C.length;++A){if(k&&k.cause==b+","+A)return;var M=C[A],ne=M.inside,qe=!!M.lookbehind,Je=!!M.greedy,Ot=M.alias;if(Je&&!M.pattern.global){var It=M.pattern.toString().match(/[imsuy]*$/)[0];M.pattern=RegExp(M.pattern.source,It+"g")}for(var ct=M.pattern||M,z=g.next,O=w;z!==c.tail&&!(k&&O>=k.reach);O+=z.value.length,z=z.next){var I=z.value;if(c.length>l.length)return;if(!(I instanceof u)){var j=1,N;if(Je){if(N=f(ct,O,l,qe),!N||N.index>=l.length)break;var re=N.index,q=N.index+N[0].length,$=O;for($+=z.value.length;re>=$;)z=z.next,$+=z.value.length;if($-=z.value.length,O=$,z.value instanceof u)continue;for(var ue=z;ue!==c.tail&&($<q||typeof ue.value=="string");ue=ue.next)j++,$+=ue.value.length;j--,I=l.slice(O,$),N.index-=O}else if(N=f(ct,0,I,qe),!N)continue;var re=N.index,ye=N[0],Tn=I.slice(0,re),Cs=I.slice(re+ye.length),ea=O+I.length;k&&ea>k.reach&&(k.reach=ea);var Tr=z.prev;Tn&&(Tr=v(c,Tr,Tn),O+=Tn.length),P(c,Tr,j);var jd=new u(b,ne?s.tokenize(ye,ne):ye,Ot,ye);if(z=v(c,Tr,jd),Cs&&v(c,z,Cs),j>1){var ta={cause:b+","+A,reach:ea};m(l,c,h,z.prev,O,ta),k&&ta.reach>k.reach&&(k.reach=ta.reach)}}}}}}function y(){var l={value:null,prev:null,next:null},c={value:null,prev:l,next:null};l.next=c,this.head=l,this.tail=c,this.length=0}function v(l,c,h){var g=c.next,w={value:h,prev:c,next:g};return c.next=w,g.prev=w,l.length++,w}function P(l,c,h){for(var g=c.next,w=0;w<h&&g!==l.tail;w++)g=g.next;c.next=g,g.prev=c,l.length-=w}function E(l){for(var c=[],h=l.head.next;h!==l.tail;)c.push(h.value),h=h.next;return c}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(l){var c=JSON.parse(l.data),h=c.language,g=c.code,w=c.immediateClose;r.postMessage(s.highlight(g,s.languages[h],h)),w&&r.close()},!1)),s;var _=s.util.currentScript();_&&(s.filename=_.src,_.hasAttribute("data-manual")&&(s.manual=!0));function x(){s.manual||s.highlightAll()}if(!s.manual){var p=document.readyState;p==="loading"||p==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",x):window.requestAnimationFrame?window.requestAnimationFrame(x):window.setTimeout(x,16)}return s}(t);e.exports&&(e.exports=n),typeof Ns<"u"&&(Ns.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,a){var o={};o["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[a]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};s["language-"+a]={pattern:/[\s\S]+/,inside:n.languages[a]};var u={};u[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var a=r.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(_,x){return"✖ Error "+_+" while fetching file: "+x},a="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",u="loading",f="loaded",m="failed",y="pre[data-src]:not(["+s+'="'+f+'"]):not(['+s+'="'+u+'"])';function v(_,x,p){var l=new XMLHttpRequest;l.open("GET",_,!0),l.onreadystatechange=function(){l.readyState==4&&(l.status<400&&l.responseText?x(l.responseText):l.status>=400?p(i(l.status,l.statusText)):p(a))},l.send(null)}function P(_){var x=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(x){var p=Number(x[1]),l=x[2],c=x[3];return l?c?[p,Number(c)]:[p,void 0]:[p,p]}}n.hooks.add("before-highlightall",function(_){_.selector+=", "+y}),n.hooks.add("before-sanity-check",function(_){var x=_.element;if(x.matches(y)){_.code="",x.setAttribute(s,u);var p=x.appendChild(document.createElement("CODE"));p.textContent=r;var l=x.getAttribute("data-src"),c=_.language;if(c==="none"){var h=(/\.(\w+)$/.exec(l)||[,"none"])[1];c=o[h]||h}n.util.setLanguage(p,c),n.util.setLanguage(x,c);var g=n.plugins.autoloader;g&&g.loadLanguages(c),v(l,function(w){x.setAttribute(s,f);var k=P(x.getAttribute("data-range"));if(k){var b=w.split(/\r\n?|\n/g),C=k[0],A=k[1]==null?b.length:k[1];C<0&&(C+=b.length),C=Math.max(0,Math.min(C-1,b.length)),A<0&&(A+=b.length),A=Math.max(0,Math.min(A,b.length)),w=b.slice(C,A).join(`
`),x.hasAttribute("data-start")||x.setAttribute("data-start",String(C+1))}p.textContent=w,n.highlightElement(p)},function(w){x.setAttribute(s,m),p.textContent=w})}}),n.plugins.fileHighlight={highlight:function(x){for(var p=(x||document).querySelectorAll(y),l=0,c;c=p[l++];)n.highlightElement(c)}};var E=!1;n.fileHighlight=function(){E||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),E=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ud);var oh=ud.exports;const Ul=Ed(oh);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])})(Prism);(function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:r.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+n+/[A-Z]\w*\b/.source),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+n+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+n+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];(function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;const Fi=[{id:"java",label:"Java",file:"java.java",prism:"java"},{id:"c",label:"C",file:"c.c",prism:"c"},{id:"cpp",label:"C++",file:"cpp.cpp",prism:"cpp"},{id:"go",label:"Golang",file:"go.go",prism:"go"},{id:"rust",label:"Rust",file:"rust.rs",prism:"rust"},{id:"python",label:"Python",file:"python.py",prism:"python"}],sh="java",cd="sort-pedia:default-language";function xr(e){return typeof e=="string"&&Fi.some(t=>t.id===e)}function dd(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function fd(){const e=dd()?.getItem(cd);return xr(e)?e:sh}function lh(e){if(!xr(e))throw new Error(`Unknown language: ${String(e)}`);dd()?.setItem(cd,e)}const uh=`/* Bitonic sort generalised to any n: sort halves in opposite directions,
 * then bitonic-merge using the greatest power of two below n. */
static int pow2_below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

static void bitonic_merge(int *arr, int lo, int n, int up) {
    if (n <= 1) return;
    int distance = pow2_below(n);
    for (int left = lo; left < lo + n - distance; left++)
        if (up ? arr[left] > arr[left + distance] : arr[left] < arr[left + distance]) { int t = arr[left]; arr[left] = arr[left + distance]; arr[left + distance] = t; }
    bitonic_merge(arr, lo, distance, up);
    bitonic_merge(arr, lo + distance, n - distance, up);
}

static void bitonic(int *arr, int lo, int n, int up) {
    if (n <= 1) return;
    int half = n / 2;
    bitonic(arr, lo, half, !up);
    bitonic(arr, lo + half, n - half, up);
    bitonic_merge(arr, lo, n, up);
}

void sort_array(int *arr, int n) { bitonic(arr, 0, n, 1); }
`,ch=`// Bitonic sort generalised to any n.
#include <utility>
#include <vector>

static int pow2Below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

static void bitonicMerge(std::vector<int>& arr, int lo, int n, bool up) {
    if (n <= 1) return;
    int distance = pow2Below(n);
    for (int left = lo; left < lo + n - distance; left++)
        if (up ? arr[left] > arr[left + distance] : arr[left] < arr[left + distance]) std::swap(arr[left], arr[left + distance]);
    bitonicMerge(arr, lo, distance, up);
    bitonicMerge(arr, lo + distance, n - distance, up);
}

static void bitonic(std::vector<int>& arr, int lo, int n, bool up) {
    if (n <= 1) return;
    int half = n / 2;
    bitonic(arr, lo, half, !up);
    bitonic(arr, lo + half, n - half, up);
    bitonicMerge(arr, lo, n, up);
}

void sortArray(std::vector<int>& arr) { bitonic(arr, 0, static_cast<int>(arr.size()), true); }
`,dh=`package main

// Bitonic sort generalised to any n.

func pow2Below(n int) int {
	k := 1
	for k<<1 < n {
		k <<= 1
	}
	return k
}

func bitonicMerge(arr []int, lo, n int, up bool) {
	if n <= 1 {
		return
	}
	distance := pow2Below(n)
	for left := lo; left < lo+n-distance; left++ {
		if (up && arr[left] > arr[left+distance]) || (!up && arr[left] < arr[left+distance]) {
			arr[left], arr[left+distance] = arr[left+distance], arr[left]
		}
	}
	bitonicMerge(arr, lo, distance, up)
	bitonicMerge(arr, lo+distance, n-distance, up)
}

func bitonic(arr []int, lo, n int, up bool) {
	if n <= 1 {
		return
	}
	half := n / 2
	bitonic(arr, lo, half, !up)
	bitonic(arr, lo+half, n-half, up)
	bitonicMerge(arr, lo, n, up)
}

func sortArray(arr []int) { bitonic(arr, 0, len(arr), true) }
`,fh=`// Bitonic sort generalised to any n.
class BitonicSort {
    static int pow2Below(int n) { int k = 1; while ((k << 1) < n) k <<= 1; return k; }

    static void merge(int[] arr, int lo, int n, boolean up) {
        if (n <= 1) return;
        int distance = pow2Below(n);
        for (int left = lo; left < lo + n - distance; left++)
            if (up ? arr[left] > arr[left + distance] : arr[left] < arr[left + distance]) { int t = arr[left]; arr[left] = arr[left + distance]; arr[left + distance] = t; }
        merge(arr, lo, distance, up);
        merge(arr, lo + distance, n - distance, up);
    }

    static void bitonic(int[] arr, int lo, int n, boolean up) {
        if (n <= 1) return;
        int half = n / 2;
        bitonic(arr, lo, half, !up);
        bitonic(arr, lo + half, n - half, up);
        merge(arr, lo, n, up);
    }

    public static void sort(int[] arr) { bitonic(arr, 0, arr.length, true); }
}
`,ph=`"""Bitonic sort generalised to any n."""


def _pow2_below(n):
    k = 1
    while k << 1 < n:
        k <<= 1
    return k


def _merge(arr, lo, n, up):
    if n <= 1:
        return
    distance = _pow2_below(n)
    for left in range(lo, lo + n - distance):
        if (arr[left] > arr[left + distance]) == up:
            arr[left], arr[left + distance] = arr[left + distance], arr[left]
    _merge(arr, lo, distance, up)
    _merge(arr, lo + distance, n - distance, up)


def _bitonic(arr, lo, n, up):
    if n <= 1:
        return
    half = n // 2
    _bitonic(arr, lo, half, not up)
    _bitonic(arr, lo + half, n - half, up)
    _merge(arr, lo, n, up)


def sort_array(arr):
    _bitonic(arr, 0, len(arr), True)
    return arr
`,hh=`// Bitonic sort generalised to any n.

fn pow2_below(n: usize) -> usize {
    let mut k = 1;
    while k << 1 < n {
        k <<= 1;
    }
    k
}

fn bitonic_merge(arr: &mut [i32], lo: usize, n: usize, up: bool) {
    if n <= 1 {
        return;
    }
    let distance = pow2_below(n);
    for left in lo..lo + n - distance {
        if (up && arr[left] > arr[left + distance]) || (!up && arr[left] < arr[left + distance]) {
            arr.swap(left, left + distance);
        }
    }
    bitonic_merge(arr, lo, distance, up);
    bitonic_merge(arr, lo + distance, n - distance, up);
}

fn bitonic(arr: &mut [i32], lo: usize, n: usize, up: bool) {
    if n <= 1 {
        return;
    }
    let half = n / 2;
    bitonic(arr, lo, half, !up);
    bitonic(arr, lo + half, n - half, up);
    bitonic_merge(arr, lo, n, up);
}

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    bitonic(arr, 0, n, true);
}
`,mh=`/* Bogo sort: shuffle until sorted. Expected O(n * n!) - only for tiny n! */
#include <stdlib.h>

static int is_sorted(const int *arr, int n) {
    for (int i = 1; i < n; i++) if (arr[i] < arr[i - 1]) return 0;
    return 1;
}

void sort_array(int *arr, int n) {
    while (!is_sorted(arr, n)) {
        for (int i = n - 1; i > 0; i--) {      /* Fisher-Yates shuffle */
            int j = rand() % (i + 1);
            int t = arr[i]; arr[i] = arr[j]; arr[j] = t;
        }
    }
}
`,gh=`// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
#include <algorithm>
#include <random>
#include <vector>

void sortArray(std::vector<int>& arr) {
    std::mt19937 rng(42);
    while (!std::is_sorted(arr.begin(), arr.end())) std::shuffle(arr.begin(), arr.end(), rng);
}
`,vh=`package main

import "math/rand"

// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!

func isSorted(arr []int) bool {
	for i := 1; i < len(arr); i++ {
		if arr[i] < arr[i-1] {
			return false
		}
	}
	return true
}

func sortArray(arr []int) {
	for !isSorted(arr) {
		rand.Shuffle(len(arr), func(i, j int) { arr[i], arr[j] = arr[j], arr[i] })
	}
}
`,yh=`import java.util.Random;

// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
class BogoSort {
    static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) if (arr[i] < arr[i - 1]) return false;
        return true;
    }

    public static void sort(int[] arr) {
        Random rnd = new Random();
        while (!isSorted(arr)) {
            for (int i = arr.length - 1; i > 0; i--) {   // Fisher-Yates shuffle
                int j = rnd.nextInt(i + 1);
                int t = arr[i]; arr[i] = arr[j]; arr[j] = t;
            }
        }
    }
}
`,_h=`"""Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!"""
import random


def sort_array(arr):
    while any(arr[i] > arr[i + 1] for i in range(len(arr) - 1)):
        random.shuffle(arr)
    return arr
`,wh=`// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
// A tiny xorshift PRNG keeps the snippet dependency-free.

pub fn sort_array(arr: &mut [i32]) {
    let mut state = 0x9E37_79B9_7F4A_7C15_u64;
    while !arr.windows(2).all(|w| w[0] <= w[1]) {
        for i in (1..arr.len()).rev() {
            // Fisher-Yates shuffle
            state ^= state << 13;
            state ^= state >> 7;
            state ^= state << 17;
            let j = (state % (i as u64 + 1)) as usize;
            arr.swap(i, j);
        }
    }
}
`,kh=`/* Bubble sort with early exit when a pass makes no swaps. */
void sort_array(int *arr, int n) {
    for (int sorted_from = n; sorted_from > 1; sorted_from--) {
        int swapped = 0;
        for (int i = 1; i < sorted_from; i++)
            if (arr[i] < arr[i - 1]) { int t = arr[i]; arr[i] = arr[i - 1]; arr[i - 1] = t; swapped = 1; }
        if (!swapped) break;
    }
}
`,xh=`// Bubble sort with early exit when a pass makes no swaps.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t sortedFrom = arr.size(); sortedFrom > 1; sortedFrom--) {
        bool swapped = false;
        for (size_t i = 1; i < sortedFrom; i++)
            if (arr[i] < arr[i - 1]) { std::swap(arr[i], arr[i - 1]); swapped = true; }
        if (!swapped) break;
    }
}
`,bh=`package main

// Bubble sort with early exit when a pass makes no swaps.

func sortArray(arr []int) {
	for sortedFrom := len(arr); sortedFrom > 1; sortedFrom-- {
		swapped := false
		for i := 1; i < sortedFrom; i++ {
			if arr[i] < arr[i-1] {
				arr[i], arr[i-1] = arr[i-1], arr[i]
				swapped = true
			}
		}
		if !swapped {
			break
		}
	}
}
`,Sh=`// Bubble sort with early exit when a pass makes no swaps.
class BubbleSort {
    public static void sort(int[] arr) {
        for (int sortedFrom = arr.length; sortedFrom > 1; sortedFrom--) {
            boolean swapped = false;
            for (int i = 1; i < sortedFrom; i++)
                if (arr[i] < arr[i - 1]) { int t = arr[i]; arr[i] = arr[i - 1]; arr[i - 1] = t; swapped = true; }
            if (!swapped) break;
        }
    }
}
`,Ph=`"""Bubble sort with early exit when a pass makes no swaps."""


def sort_array(arr):
    for sorted_from in range(len(arr), 1, -1):
        swapped = False
        for i in range(1, sorted_from):
            if arr[i] < arr[i - 1]:
                arr[i], arr[i - 1] = arr[i - 1], arr[i]
                swapped = True
        if not swapped:
            break
    return arr
`,jh=`// Bubble sort with early exit when a pass makes no swaps.

pub fn sort_array(arr: &mut [i32]) {
    let mut sorted_from = arr.len();
    while sorted_from > 1 {
        let mut swapped = false;
        for i in 1..sorted_from {
            if arr[i] < arr[i - 1] {
                arr.swap(i, i - 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
        sorted_from -= 1;
    }
}
`,Eh=`/* Bucket sort: scatter values into n buckets by value range, sort each
 * bucket with insertion sort, then concatenate the buckets. */
#include <stdlib.h>

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int min = arr[0], max = arr[0];
    for (int i = 1; i < n; i++) { if (arr[i] < min) min = arr[i]; if (arr[i] > max) max = arr[i]; }
    long long range = (long long)max - min + 1;
    int *count = calloc(n + 1, sizeof(int)), *output = malloc(sizeof(int) * n);
    #define BUCKET(v) ((int)(((long long)(v) - min) * n / range))
    for (int i = 0; i < n; i++) count[BUCKET(arr[i]) + 1]++;
    for (int bucket = 0; bucket < n; bucket++) count[bucket + 1] += count[bucket];       /* bucket start offsets */
    int *pos = malloc(sizeof(int) * n);
    for (int bucket = 0; bucket < n; bucket++) pos[bucket] = count[bucket];
    for (int i = 0; i < n; i++) output[pos[BUCKET(arr[i])]++] = arr[i];
    for (int bucket = 0; bucket < n; bucket++)                                 /* insertion sort each bucket */
        for (int i = count[bucket] + 1; i < count[bucket + 1]; i++) {
            int key = output[i], j = i;
            while (j > count[bucket] && key < output[j - 1]) { output[j] = output[j - 1]; j--; }
            output[j] = key;
        }
    for (int i = 0; i < n; i++) arr[i] = output[i];
    #undef BUCKET
    free(count); free(output); free(pos);
}
`,zh=`// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& arr) {
    size_t n = arr.size();
    if (n < 2) return;
    auto [mnIt, mxIt] = std::minmax_element(arr.begin(), arr.end());
    long long mn = *mnIt, range = static_cast<long long>(*mxIt) - mn + 1;
    std::vector<std::vector<int>> buckets(n);
    for (int v : arr) buckets[static_cast<size_t>((v - mn) * static_cast<long long>(n) / range)].push_back(v);
    size_t writePos = 0;
    for (auto& bucket : buckets) {
        for (size_t i = 1; i < bucket.size(); i++) {  // insertion sort
            int key = bucket[i];
            size_t j = i;
            while (j > 0 && key < bucket[j - 1]) { bucket[j] = bucket[j - 1]; j--; }
            bucket[j] = key;
        }
        for (int v : bucket) arr[writePos++] = v;
    }
}
`,Ch=`package main

// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.

func sortArray(arr []int) {
	n := len(arr)
	if n < 2 {
		return
	}
	min, max := arr[0], arr[0]
	for _, v := range arr {
		if v < min {
			min = v
		}
		if v > max {
			max = v
		}
	}
	rng := max - min + 1
	buckets := make([][]int, n)
	for _, v := range arr {
		bucket := (v - min) * n / rng
		buckets[bucket] = append(buckets[bucket], v)
	}
	writePos := 0
	for _, bucket := range buckets {
		for i := 1; i < len(bucket); i++ { // insertion sort
			key, j := bucket[i], i
			for j > 0 && key < bucket[j-1] {
				bucket[j] = bucket[j-1]
				j--
			}
			bucket[j] = key
		}
		writePos += copy(arr[writePos:], bucket)
	}
}
`,Nh=`import java.util.ArrayList;
import java.util.List;

// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.
class BucketSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        if (n < 2) return;
        long min = arr[0], max = arr[0];
        for (int v : arr) { min = Math.min(min, v); max = Math.max(max, v); }
        long range = max - min + 1;
        List<List<Integer>> buckets = new ArrayList<>();
        for (int i = 0; i < n; i++) buckets.add(new ArrayList<>());
        for (int v : arr) buckets.get((int) ((v - min) * n / range)).add(v);
        int writePos = 0;
        for (List<Integer> bucket : buckets) {
            for (int i = 1; i < bucket.size(); i++) {      // insertion sort
                int key = bucket.get(i), j = i;
                while (j > 0 && key < bucket.get(j - 1)) { bucket.set(j, bucket.get(j - 1)); j--; }
                bucket.set(j, key);
            }
            for (int v : bucket) arr[writePos++] = v;
        }
    }
}
`,Th=`"""Bucket sort: scatter into n buckets by value range, insertion-sort
each bucket, then concatenate."""


def sort_array(arr):
    n = len(arr)
    if n < 2:
        return arr
    lo = min(arr)
    rng = max(arr) - lo + 1
    buckets = [[] for _ in range(n)]
    for v in arr:
        buckets[(v - lo) * n // rng].append(v)
    write_pos = 0
    for bucket in buckets:
        for i in range(1, len(bucket)):  # insertion sort
            key, j = bucket[i], i
            while j > 0 and key < bucket[j - 1]:
                bucket[j] = bucket[j - 1]
                j -= 1
            bucket[j] = key
        arr[write_pos:write_pos + len(bucket)] = bucket
        write_pos += len(bucket)
    return arr
`,Ah=`// Bucket sort: scatter into n buckets by value range, insertion-sort
// each bucket, then concatenate.

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    if n < 2 {
        return;
    }
    let min = *arr.iter().min().unwrap() as i64;
    let range = *arr.iter().max().unwrap() as i64 - min + 1;
    let mut buckets: Vec<Vec<i32>> = vec![Vec::new(); n];
    for &v in arr.iter() {
        buckets[((v as i64 - min) * n as i64 / range) as usize].push(v);
    }
    let mut write_pos = 0;
    for mut bucket in buckets {
        for i in 1..bucket.len() {
            // insertion sort
            let key = bucket[i];
            let mut j = i;
            while j > 0 && key < bucket[j - 1] {
                bucket[j] = bucket[j - 1];
                j -= 1;
            }
            bucket[j] = key;
        }
        arr[write_pos..write_pos + bucket.len()].copy_from_slice(&bucket);
        write_pos += bucket.len();
    }
}
`,Oh=`/* Cocktail shaker sort: bubble passes alternating left->right and right->left. */
void sort_array(int *arr, int n) {
    int lo = 0, hi = n - 1, swapped = 1;
    while (swapped && lo < hi) {
        swapped = 0;
        for (int i = lo; i < hi; i++)
            if (arr[i + 1] < arr[i]) { int t = arr[i]; arr[i] = arr[i + 1]; arr[i + 1] = t; swapped = 1; }
        hi--;
        for (int i = hi; i > lo; i--)
            if (arr[i] < arr[i - 1]) { int t = arr[i]; arr[i] = arr[i - 1]; arr[i - 1] = t; swapped = 1; }
        lo++;
    }
}
`,Ih=`// Cocktail shaker sort: bubble passes in both directions.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    int lo = 0, hi = static_cast<int>(arr.size()) - 1;
    bool swapped = true;
    while (swapped && lo < hi) {
        swapped = false;
        for (int i = lo; i < hi; i++)
            if (arr[i + 1] < arr[i]) { std::swap(arr[i], arr[i + 1]); swapped = true; }
        hi--;
        for (int i = hi; i > lo; i--)
            if (arr[i] < arr[i - 1]) { std::swap(arr[i], arr[i - 1]); swapped = true; }
        lo++;
    }
}
`,Fh=`package main

// Cocktail shaker sort: bubble passes in both directions.

func sortArray(arr []int) {
	lo, hi, swapped := 0, len(arr)-1, true
	for swapped && lo < hi {
		swapped = false
		for i := lo; i < hi; i++ {
			if arr[i+1] < arr[i] {
				arr[i], arr[i+1] = arr[i+1], arr[i]
				swapped = true
			}
		}
		hi--
		for i := hi; i > lo; i-- {
			if arr[i] < arr[i-1] {
				arr[i], arr[i-1] = arr[i-1], arr[i]
				swapped = true
			}
		}
		lo++
	}
}
`,Lh=`// Cocktail shaker sort: bubble passes in both directions.
class CocktailShakerSort {
    public static void sort(int[] arr) {
        int lo = 0, hi = arr.length - 1;
        boolean swapped = true;
        while (swapped && lo < hi) {
            swapped = false;
            for (int i = lo; i < hi; i++)
                if (arr[i + 1] < arr[i]) { int t = arr[i]; arr[i] = arr[i + 1]; arr[i + 1] = t; swapped = true; }
            hi--;
            for (int i = hi; i > lo; i--)
                if (arr[i] < arr[i - 1]) { int t = arr[i]; arr[i] = arr[i - 1]; arr[i - 1] = t; swapped = true; }
            lo++;
        }
    }
}
`,Mh=`"""Cocktail shaker sort: bubble passes in both directions."""


def sort_array(arr):
    lo, hi, swapped = 0, len(arr) - 1, True
    while swapped and lo < hi:
        swapped = False
        for i in range(lo, hi):
            if arr[i + 1] < arr[i]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True
        hi -= 1
        for i in range(hi, lo, -1):
            if arr[i] < arr[i - 1]:
                arr[i], arr[i - 1] = arr[i - 1], arr[i]
                swapped = True
        lo += 1
    return arr
`,Rh=`// Cocktail shaker sort: bubble passes in both directions.

pub fn sort_array(arr: &mut [i32]) {
    if arr.len() < 2 {
        return;
    }
    let (mut lo, mut hi) = (0, arr.len() - 1);
    let mut swapped = true;
    while swapped && lo < hi {
        swapped = false;
        for i in lo..hi {
            if arr[i + 1] < arr[i] {
                arr.swap(i, i + 1);
                swapped = true;
            }
        }
        hi -= 1;
        for i in (lo + 1..=hi).rev() {
            if arr[i] < arr[i - 1] {
                arr.swap(i, i - 1);
                swapped = true;
            }
        }
        lo += 1;
    }
}
`,$h=`/* Comb sort: bubble sort over a shrinking gap (factor 1.3). */
void sort_array(int *arr, int n) {
    int gap = n, sorted = 0;
    while (!sorted) {
        gap = (int)(gap / 1.3);
        if (gap <= 1) { gap = 1; sorted = 1; }
        for (int left = 0; left + gap < n; left++)
            if (arr[left + gap] < arr[left]) {
                int t = arr[left]; arr[left] = arr[left + gap]; arr[left + gap] = t;
                sorted = 0;
            }
    }
}
`,Dh=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    size_t n = arr.size(), gap = n;
    bool sorted = false;
    while (!sorted) {
        gap = static_cast<size_t>(gap / 1.3);
        if (gap <= 1) { gap = 1; sorted = true; }
        for (size_t left = 0; left + gap < n; left++)
            if (arr[left + gap] < arr[left]) { std::swap(arr[left], arr[left + gap]); sorted = false; }
    }
}
`,Uh=`package main

// Comb sort: bubble sort over a shrinking gap (factor 1.3).

func sortArray(arr []int) {
	gap, sorted := len(arr), false
	for !sorted {
		gap = int(float64(gap) / 1.3)
		if gap <= 1 {
			gap, sorted = 1, true
		}
		for left := 0; left+gap < len(arr); left++ {
			if arr[left+gap] < arr[left] {
				arr[left], arr[left+gap] = arr[left+gap], arr[left]
				sorted = false
			}
		}
	}
}
`,Bh=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).
class CombSort {
    public static void sort(int[] arr) {
        int gap = arr.length;
        boolean sorted = false;
        while (!sorted) {
            gap = (int) (gap / 1.3);
            if (gap <= 1) { gap = 1; sorted = true; }
            for (int left = 0; left + gap < arr.length; left++)
                if (arr[left + gap] < arr[left]) {
                    int t = arr[left]; arr[left] = arr[left + gap]; arr[left + gap] = t;
                    sorted = false;
                }
        }
    }
}
`,Vh=`"""Comb sort: bubble sort over a shrinking gap (factor 1.3)."""


def sort_array(arr):
    gap, done = len(arr), False
    while not done:
        gap = int(gap / 1.3)
        if gap <= 1:
            gap, done = 1, True
        for left in range(len(arr) - gap):
            if arr[left + gap] < arr[left]:
                arr[left], arr[left + gap] = arr[left + gap], arr[left]
                done = False
    return arr
`,Hh=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).

pub fn sort_array(arr: &mut [i32]) {
    let mut gap = arr.len();
    let mut sorted = false;
    while !sorted {
        gap = (gap as f64 / 1.3) as usize;
        if gap <= 1 {
            gap = 1;
            sorted = true;
        }
        for left in 0..arr.len().saturating_sub(gap) {
            if arr[left + gap] < arr[left] {
                arr.swap(left, left + gap);
                sorted = false;
            }
        }
    }
}
`,Wh=`/* Counting sort for integers in a known (small) range [min, max]. */
#include <stdlib.h>

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int min = arr[0], max = arr[0];
    for (int i = 1; i < n; i++) { if (arr[i] < min) min = arr[i]; if (arr[i] > max) max = arr[i]; }
    size_t range = (size_t)((long long)max - min + 1);
    size_t *count = calloc(range, sizeof(size_t));
    for (int i = 0; i < n; i++) count[(long long)arr[i] - min]++;
    int write_pos = 0;
    for (size_t v = 0; v < range; v++)
        while (count[v]--) arr[write_pos++] = (int)((long long)v + min);
    free(count);
}
`,qh=`// Counting sort for integers in a known (small) range [min, max].
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& arr) {
    if (arr.size() < 2) return;
    auto [mnIt, mxIt] = std::minmax_element(arr.begin(), arr.end());
    long long mn = *mnIt, mx = *mxIt;
    std::vector<size_t> count(static_cast<size_t>(mx - mn + 1));
    for (int v : arr) count[v - mn]++;
    size_t writePos = 0;
    for (size_t v = 0; v < count.size(); v++)
        for (size_t c = 0; c < count[v]; c++) arr[writePos++] = static_cast<int>(v + mn);
}
`,Qh=`package main

// Counting sort for integers in a known (small) range [min, max].

func sortArray(arr []int) {
	if len(arr) < 2 {
		return
	}
	min, max := arr[0], arr[0]
	for _, v := range arr {
		if v < min {
			min = v
		}
		if v > max {
			max = v
		}
	}
	count := make([]int, max-min+1)
	for _, v := range arr {
		count[v-min]++
	}
	writePos := 0
	for v, c := range count {
		for ; c > 0; c-- {
			arr[writePos] = v + min
			writePos++
		}
	}
}
`,Gh=`// Counting sort for integers in a known (small) range [min, max].
class CountingSort {
    public static void sort(int[] arr) {
        if (arr.length < 2) return;
        int min = arr[0], max = arr[0];
        for (int v : arr) { min = Math.min(min, v); max = Math.max(max, v); }
        int[] count = new int[(int) ((long) max - min + 1)];
        for (int v : arr) count[v - min]++;
        int writePos = 0;
        for (int v = 0; v < count.length; v++)
            for (int c = 0; c < count[v]; c++) arr[writePos++] = v + min;
    }
}
`,Kh=`"""Counting sort for integers in a known (small) range [min, max]."""


def sort_array(arr):
    if len(arr) < 2:
        return arr
    lo, hi = min(arr), max(arr)
    count = [0] * (hi - lo + 1)
    for v in arr:
        count[v - lo] += 1
    write_pos = 0
    for offset, c in enumerate(count):
        for _ in range(c):
            arr[write_pos] = offset + lo
            write_pos += 1
    return arr
`,Yh=`// Counting sort for integers in a known (small) range [min, max].

pub fn sort_array(arr: &mut [i32]) {
    if arr.len() < 2 {
        return;
    }
    let min = *arr.iter().min().unwrap() as i64;
    let max = *arr.iter().max().unwrap() as i64;
    let mut count = vec![0usize; (max - min + 1) as usize];
    for &v in arr.iter() {
        count[(v as i64 - min) as usize] += 1;
    }
    let mut write_pos = 0;
    for (v, &c) in count.iter().enumerate() {
        for _ in 0..c {
            arr[write_pos] = (v as i64 + min) as i32;
            write_pos += 1;
        }
    }
}
`,Zh=`/* Cycle sort: rotate each cycle of the permutation into place, writing
 * every element at most once (minimum number of memory writes). */
void sort_array(int *arr, int n) {
    for (int cycle_start = 0; cycle_start < n - 1; cycle_start++) {
        int item = arr[cycle_start], target_pos = cycle_start;
        for (int i = cycle_start + 1; i < n; i++) if (arr[i] < item) target_pos++;
        if (target_pos == cycle_start) continue;
        while (item == arr[target_pos]) target_pos++;
        int t = arr[target_pos]; arr[target_pos] = item; item = t;
        while (target_pos != cycle_start) {
            target_pos = cycle_start;
            for (int i = cycle_start + 1; i < n; i++) if (arr[i] < item) target_pos++;
            while (item == arr[target_pos]) target_pos++;
            if (item != arr[target_pos]) { t = arr[target_pos]; arr[target_pos] = item; item = t; }
        }
    }
}
`,Xh=`// Cycle sort: rotate each permutation cycle into place (minimum writes).
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    size_t n = arr.size();
    for (size_t cycleStart = 0; cycleStart + 1 < n; cycleStart++) {
        int item = arr[cycleStart];
        size_t targetPos = cycleStart;
        for (size_t i = cycleStart + 1; i < n; i++) if (arr[i] < item) targetPos++;
        if (targetPos == cycleStart) continue;
        while (item == arr[targetPos]) targetPos++;
        std::swap(item, arr[targetPos]);
        while (targetPos != cycleStart) {
            targetPos = cycleStart;
            for (size_t i = cycleStart + 1; i < n; i++) if (arr[i] < item) targetPos++;
            while (item == arr[targetPos]) targetPos++;
            if (item != arr[targetPos]) std::swap(item, arr[targetPos]);
        }
    }
}
`,Jh=`package main

// Cycle sort: rotate each permutation cycle into place (minimum writes).

func sortArray(arr []int) {
	n := len(arr)
	for cycleStart := 0; cycleStart < n-1; cycleStart++ {
		item, targetPos := arr[cycleStart], cycleStart
		for i := cycleStart + 1; i < n; i++ {
			if arr[i] < item {
				targetPos++
			}
		}
		if targetPos == cycleStart {
			continue
		}
		for item == arr[targetPos] {
			targetPos++
		}
		arr[targetPos], item = item, arr[targetPos]
		for targetPos != cycleStart {
			targetPos = cycleStart
			for i := cycleStart + 1; i < n; i++ {
				if arr[i] < item {
					targetPos++
				}
			}
			for item == arr[targetPos] {
				targetPos++
			}
			if item != arr[targetPos] {
				arr[targetPos], item = item, arr[targetPos]
			}
		}
	}
}
`,em=`// Cycle sort: rotate each permutation cycle into place (minimum writes).
class CycleSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        for (int cycleStart = 0; cycleStart < n - 1; cycleStart++) {
            int item = arr[cycleStart], targetPos = cycleStart;
            for (int i = cycleStart + 1; i < n; i++) if (arr[i] < item) targetPos++;
            if (targetPos == cycleStart) continue;
            while (item == arr[targetPos]) targetPos++;
            int t = arr[targetPos]; arr[targetPos] = item; item = t;
            while (targetPos != cycleStart) {
                targetPos = cycleStart;
                for (int i = cycleStart + 1; i < n; i++) if (arr[i] < item) targetPos++;
                while (item == arr[targetPos]) targetPos++;
                if (item != arr[targetPos]) { t = arr[targetPos]; arr[targetPos] = item; item = t; }
            }
        }
    }
}
`,tm=`"""Cycle sort: rotate each permutation cycle into place (minimum writes)."""


def sort_array(arr):
    n = len(arr)
    for cycle_start in range(n - 1):
        item = arr[cycle_start]
        target_pos = cycle_start + sum(1 for x in arr[cycle_start + 1:] if x < item)
        if target_pos == cycle_start:
            continue
        while item == arr[target_pos]:
            target_pos += 1
        arr[target_pos], item = item, arr[target_pos]
        while target_pos != cycle_start:
            target_pos = cycle_start + sum(1 for x in arr[cycle_start + 1:] if x < item)
            while item == arr[target_pos]:
                target_pos += 1
            if item != arr[target_pos]:
                arr[target_pos], item = item, arr[target_pos]
    return arr
`,nm=`// Cycle sort: rotate each permutation cycle into place (minimum writes).

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    for cycle_start in 0..n.saturating_sub(1) {
        let mut item = arr[cycle_start];
        let mut target_pos = cycle_start + arr[cycle_start + 1..].iter().filter(|&&x| x < item).count();
        if target_pos == cycle_start {
            continue;
        }
        while item == arr[target_pos] {
            target_pos += 1;
        }
        std::mem::swap(&mut item, &mut arr[target_pos]);
        while target_pos != cycle_start {
            target_pos = cycle_start + arr[cycle_start + 1..].iter().filter(|&&x| x < item).count();
            while item == arr[target_pos] {
                target_pos += 1;
            }
            if item != arr[target_pos] {
                std::mem::swap(&mut item, &mut arr[target_pos]);
            }
        }
    }
}
`,rm=`/* Gnome sort: step forward while in order, otherwise swap and step back. */
void sort_array(int *arr, int n) {
    int gnome_pos = 0;
    while (gnome_pos < n) {
        if (gnome_pos == 0 || arr[gnome_pos] >= arr[gnome_pos - 1]) gnome_pos++;
        else { int t = arr[gnome_pos]; arr[gnome_pos] = arr[gnome_pos - 1]; arr[gnome_pos - 1] = t; gnome_pos--; }
    }
}
`,im=`// Gnome sort: step forward while in order, otherwise swap and step back.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    size_t gnomePos = 0;
    while (gnomePos < arr.size()) {
        if (gnomePos == 0 || arr[gnomePos] >= arr[gnomePos - 1]) gnomePos++;
        else { std::swap(arr[gnomePos], arr[gnomePos - 1]); gnomePos--; }
    }
}
`,am=`package main

// Gnome sort: step forward while in order, otherwise swap and step back.

func sortArray(arr []int) {
	gnomePos := 0
	for gnomePos < len(arr) {
		if gnomePos == 0 || arr[gnomePos] >= arr[gnomePos-1] {
			gnomePos++
		} else {
			arr[gnomePos], arr[gnomePos-1] = arr[gnomePos-1], arr[gnomePos]
			gnomePos--
		}
	}
}
`,om=`// Gnome sort: step forward while in order, otherwise swap and step back.
class GnomeSort {
    public static void sort(int[] arr) {
        int gnomePos = 0;
        while (gnomePos < arr.length) {
            if (gnomePos == 0 || arr[gnomePos] >= arr[gnomePos - 1]) gnomePos++;
            else { int t = arr[gnomePos]; arr[gnomePos] = arr[gnomePos - 1]; arr[gnomePos - 1] = t; gnomePos--; }
        }
    }
}
`,sm=`"""Gnome sort: step forward while in order, otherwise swap and step back."""


def sort_array(arr):
    gnome_pos = 0
    while gnome_pos < len(arr):
        if gnome_pos == 0 or arr[gnome_pos] >= arr[gnome_pos - 1]:
            gnome_pos += 1
        else:
            arr[gnome_pos], arr[gnome_pos - 1] = arr[gnome_pos - 1], arr[gnome_pos]
            gnome_pos -= 1
    return arr
`,lm=`// Gnome sort: step forward while in order, otherwise swap and step back.

pub fn sort_array(arr: &mut [i32]) {
    let mut gnome_pos = 0;
    while gnome_pos < arr.len() {
        if gnome_pos == 0 || arr[gnome_pos] >= arr[gnome_pos - 1] {
            gnome_pos += 1;
        } else {
            arr.swap(gnome_pos, gnome_pos - 1);
            gnome_pos -= 1;
        }
    }
}
`,um=`/* Heap sort: build a max-heap, then repeatedly move the max to the end. */
static void sift_down(int *arr, int node, int n) {
    for (;;) {
        int child = 2 * node + 1;
        if (child >= n) return;
        if (child + 1 < n && arr[child] < arr[child + 1]) child++;
        if (arr[node] >= arr[child]) return;
        int t = arr[node]; arr[node] = arr[child]; arr[child] = t;
        node = child;
    }
}

void sort_array(int *arr, int n) {
    for (int node = n / 2 - 1; node >= 0; node--) sift_down(arr, node, n);
    for (int heap_end = n - 1; heap_end > 0; heap_end--) {
        int t = arr[0]; arr[0] = arr[heap_end]; arr[heap_end] = t;
        sift_down(arr, 0, heap_end);
    }
}
`,cm=`// Heap sort: build a max-heap, then repeatedly move the max to the end.
#include <utility>
#include <vector>

static void siftDown(std::vector<int>& arr, int node, int n) {
    for (;;) {
        int child = 2 * node + 1;
        if (child >= n) return;
        if (child + 1 < n && arr[child] < arr[child + 1]) child++;
        if (arr[node] >= arr[child]) return;
        std::swap(arr[node], arr[child]);
        node = child;
    }
}

void sortArray(std::vector<int>& arr) {
    int n = static_cast<int>(arr.size());
    for (int node = n / 2 - 1; node >= 0; node--) siftDown(arr, node, n);
    for (int heapEnd = n - 1; heapEnd > 0; heapEnd--) {
        std::swap(arr[0], arr[heapEnd]);
        siftDown(arr, 0, heapEnd);
    }
}
`,dm=`package main

// Heap sort: build a max-heap, then repeatedly move the max to the end.

func siftDown(arr []int, node, n int) {
	for {
		child := 2*node + 1
		if child >= n {
			return
		}
		if child+1 < n && arr[child] < arr[child+1] {
			child++
		}
		if arr[node] >= arr[child] {
			return
		}
		arr[node], arr[child] = arr[child], arr[node]
		node = child
	}
}

func sortArray(arr []int) {
	n := len(arr)
	for node := n/2 - 1; node >= 0; node-- {
		siftDown(arr, node, n)
	}
	for heapEnd := n - 1; heapEnd > 0; heapEnd-- {
		arr[0], arr[heapEnd] = arr[heapEnd], arr[0]
		siftDown(arr, 0, heapEnd)
	}
}
`,fm=`// Heap sort: build a max-heap, then repeatedly move the max to the end.
class HeapSort {
    static void siftDown(int[] arr, int node, int n) {
        while (true) {
            int child = 2 * node + 1;
            if (child >= n) return;
            if (child + 1 < n && arr[child] < arr[child + 1]) child++;
            if (arr[node] >= arr[child]) return;
            int t = arr[node]; arr[node] = arr[child]; arr[child] = t;
            node = child;
        }
    }

    public static void sort(int[] arr) {
        int n = arr.length;
        for (int node = n / 2 - 1; node >= 0; node--) siftDown(arr, node, n);
        for (int heapEnd = n - 1; heapEnd > 0; heapEnd--) {
            int t = arr[0]; arr[0] = arr[heapEnd]; arr[heapEnd] = t;
            siftDown(arr, 0, heapEnd);
        }
    }
}
`,pm=`"""Heap sort: build a max-heap, then repeatedly move the max to the end."""


def _sift_down(arr, node, n):
    while True:
        child = 2 * node + 1
        if child >= n:
            return
        if child + 1 < n and arr[child] < arr[child + 1]:
            child += 1
        if arr[node] >= arr[child]:
            return
        arr[node], arr[child] = arr[child], arr[node]
        node = child


def sort_array(arr):
    n = len(arr)
    for node in range(n // 2 - 1, -1, -1):
        _sift_down(arr, node, n)
    for heap_end in range(n - 1, 0, -1):
        arr[0], arr[heap_end] = arr[heap_end], arr[0]
        _sift_down(arr, 0, heap_end)
    return arr
`,hm=`// Heap sort: build a max-heap, then repeatedly move the max to the end.

fn sift_down(arr: &mut [i32], mut node: usize, n: usize) {
    loop {
        let mut child = 2 * node + 1;
        if child >= n {
            return;
        }
        if child + 1 < n && arr[child] < arr[child + 1] {
            child += 1;
        }
        if arr[node] >= arr[child] {
            return;
        }
        arr.swap(node, child);
        node = child;
    }
}

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    for node in (0..n / 2).rev() {
        sift_down(arr, node, n);
    }
    for heap_end in (1..n).rev() {
        arr.swap(0, heap_end);
        sift_down(arr, 0, heap_end);
    }
}
`,mm=`/* Insertion sort: grow a sorted prefix by inserting one element at a time. */
void sort_array(int *arr, int n) {
    for (int current = 1; current < n; current++) {
        int key = arr[current], hole = current;
        while (hole > 0 && key < arr[hole - 1]) { arr[hole] = arr[hole - 1]; hole--; }
        arr[hole] = key;
    }
}
`,gm=`// Insertion sort: grow a sorted prefix one element at a time.
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t current = 1; current < arr.size(); current++) {
        int key = arr[current];
        size_t hole = current;
        while (hole > 0 && key < arr[hole - 1]) { arr[hole] = arr[hole - 1]; hole--; }
        arr[hole] = key;
    }
}
`,vm=`package main

// Insertion sort: grow a sorted prefix one element at a time.

func sortArray(arr []int) {
	for current := 1; current < len(arr); current++ {
		key, hole := arr[current], current
		for hole > 0 && key < arr[hole-1] {
			arr[hole] = arr[hole-1]
			hole--
		}
		arr[hole] = key
	}
}
`,ym=`// Insertion sort: grow a sorted prefix one element at a time.
class InsertionSort {
    public static void sort(int[] arr) {
        for (int current = 1; current < arr.length; current++) {
            int key = arr[current], hole = current;
            while (hole > 0 && key < arr[hole - 1]) { arr[hole] = arr[hole - 1]; hole--; }
            arr[hole] = key;
        }
    }
}
`,_m=`"""Insertion sort: grow a sorted prefix one element at a time."""


def sort_array(arr):
    for current in range(1, len(arr)):
        key, hole = arr[current], current
        while hole > 0 and key < arr[hole - 1]:
            arr[hole] = arr[hole - 1]
            hole -= 1
        arr[hole] = key
    return arr
`,wm=`// Insertion sort: grow a sorted prefix one element at a time.

pub fn sort_array(arr: &mut [i32]) {
    for current in 1..arr.len() {
        let key = arr[current];
        let mut hole = current;
        while hole > 0 && key < arr[hole - 1] {
            arr[hole] = arr[hole - 1];
            hole -= 1;
        }
        arr[hole] = key;
    }
}
`,km=`/* Introsort: quicksort (median-of-three) that switches to heapsort when
 * recursion gets too deep and to insertion sort for small ranges. */
static void swap(int *arr, int i, int j) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

static void insertion(int *arr, int lo, int hi) {
    for (int i = lo + 1; i < hi; i++) {
        int key = arr[i], j = i;
        while (j > lo && key < arr[j - 1]) { arr[j] = arr[j - 1]; j--; }
        arr[j] = key;
    }
}

static void sift(int *arr, int lo, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && arr[lo + child] < arr[lo + child + 1]) child++;
        if (arr[lo + root] >= arr[lo + child]) return;
        swap(arr, lo + root, lo + child);
        root = child;
    }
}

static void heapsort_range(int *arr, int lo, int hi) {
    int n = hi - lo;
    for (int i = n / 2 - 1; i >= 0; i--) sift(arr, lo, i, n);
    for (int end = n - 1; end > 0; end--) { swap(arr, lo, lo + end); sift(arr, lo, 0, end); }
}

static void intro(int *arr, int lo, int hi, int depth) {
    while (hi - lo > 16) {
        if (depth-- == 0) { heapsort_range(arr, lo, hi); return; }
        int mid = lo + (hi - lo) / 2, pivot_pos = hi - 1;
        if (arr[mid] < arr[lo]) swap(arr, mid, lo);
        if (arr[pivot_pos] < arr[lo]) swap(arr, pivot_pos, lo);
        if (arr[mid] < arr[pivot_pos]) swap(arr, mid, pivot_pos);      /* median now at arr[pivot_pos] */
        int store_pos = lo;
        for (int i = lo; i < pivot_pos; i++) if (arr[i] < arr[pivot_pos]) swap(arr, store_pos++, i);
        swap(arr, store_pos, pivot_pos);
        if (store_pos - lo < hi - store_pos - 1) { intro(arr, lo, store_pos, depth); lo = store_pos + 1; }
        else { intro(arr, store_pos + 1, hi, depth); hi = store_pos; }
    }
    insertion(arr, lo, hi);
}

void sort_array(int *arr, int n) {
    int depth = 0;
    for (int m = n; m > 0; m >>= 1) depth += 2;
    intro(arr, 0, n, depth);
}
`,xm=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.
#include <utility>
#include <vector>

static void insertion(std::vector<int>& arr, int lo, int hi) {
    for (int i = lo + 1; i < hi; i++) {
        int key = arr[i], j = i;
        while (j > lo && key < arr[j - 1]) { arr[j] = arr[j - 1]; j--; }
        arr[j] = key;
    }
}

static void sift(std::vector<int>& arr, int lo, int root, int n) {
    for (;;) {
        int child = 2 * root + 1;
        if (child >= n) return;
        if (child + 1 < n && arr[lo + child] < arr[lo + child + 1]) child++;
        if (arr[lo + root] >= arr[lo + child]) return;
        std::swap(arr[lo + root], arr[lo + child]);
        root = child;
    }
}

static void heapsortRange(std::vector<int>& arr, int lo, int hi) {
    int n = hi - lo;
    for (int i = n / 2 - 1; i >= 0; i--) sift(arr, lo, i, n);
    for (int end = n - 1; end > 0; end--) { std::swap(arr[lo], arr[lo + end]); sift(arr, lo, 0, end); }
}

static void intro(std::vector<int>& arr, int lo, int hi, int depth) {
    while (hi - lo > 16) {
        if (depth-- == 0) { heapsortRange(arr, lo, hi); return; }
        int mid = lo + (hi - lo) / 2, pivotPos = hi - 1;
        if (arr[mid] < arr[lo]) std::swap(arr[mid], arr[lo]);
        if (arr[pivotPos] < arr[lo]) std::swap(arr[pivotPos], arr[lo]);
        if (arr[mid] < arr[pivotPos]) std::swap(arr[mid], arr[pivotPos]);  // median now at arr[pivotPos]
        int storePos = lo;
        for (int i = lo; i < pivotPos; i++) if (arr[i] < arr[pivotPos]) std::swap(arr[storePos++], arr[i]);
        std::swap(arr[storePos], arr[pivotPos]);
        if (storePos - lo < hi - storePos - 1) { intro(arr, lo, storePos, depth); lo = storePos + 1; }
        else { intro(arr, storePos + 1, hi, depth); hi = storePos; }
    }
    insertion(arr, lo, hi);
}

void sortArray(std::vector<int>& arr) {
    int n = static_cast<int>(arr.size()), depth = 0;
    for (int m = n; m > 0; m >>= 1) depth += 2;
    intro(arr, 0, n, depth);
}
`,bm=`package main

// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.

func insertionRange(arr []int, lo, hi int) {
	for i := lo + 1; i < hi; i++ {
		key, j := arr[i], i
		for j > lo && key < arr[j-1] {
			arr[j] = arr[j-1]
			j--
		}
		arr[j] = key
	}
}

func sift(arr []int, lo, root, n int) {
	for {
		child := 2*root + 1
		if child >= n {
			return
		}
		if child+1 < n && arr[lo+child] < arr[lo+child+1] {
			child++
		}
		if arr[lo+root] >= arr[lo+child] {
			return
		}
		arr[lo+root], arr[lo+child] = arr[lo+child], arr[lo+root]
		root = child
	}
}

func heapsortRange(arr []int, lo, hi int) {
	n := hi - lo
	for i := n/2 - 1; i >= 0; i-- {
		sift(arr, lo, i, n)
	}
	for end := n - 1; end > 0; end-- {
		arr[lo], arr[lo+end] = arr[lo+end], arr[lo]
		sift(arr, lo, 0, end)
	}
}

func intro(arr []int, lo, hi, depth int) {
	for hi-lo > 16 {
		if depth == 0 {
			heapsortRange(arr, lo, hi)
			return
		}
		depth--
		mid, pivotPos := lo+(hi-lo)/2, hi-1
		if arr[mid] < arr[lo] {
			arr[mid], arr[lo] = arr[lo], arr[mid]
		}
		if arr[pivotPos] < arr[lo] {
			arr[pivotPos], arr[lo] = arr[lo], arr[pivotPos]
		}
		if arr[mid] < arr[pivotPos] { // median now at arr[pivotPos]
			arr[mid], arr[pivotPos] = arr[pivotPos], arr[mid]
		}
		storePos := lo
		for i := lo; i < pivotPos; i++ {
			if arr[i] < arr[pivotPos] {
				arr[storePos], arr[i] = arr[i], arr[storePos]
				storePos++
			}
		}
		arr[storePos], arr[pivotPos] = arr[pivotPos], arr[storePos]
		if storePos-lo < hi-storePos-1 {
			intro(arr, lo, storePos, depth)
			lo = storePos + 1
		} else {
			intro(arr, storePos+1, hi, depth)
			hi = storePos
		}
	}
	insertionRange(arr, lo, hi)
}

func sortArray(arr []int) {
	depth := 0
	for m := len(arr); m > 0; m >>= 1 {
		depth += 2
	}
	intro(arr, 0, len(arr), depth)
}
`,Sm=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small ranges.
class IntroSort {
    static void swap(int[] arr, int i, int j) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

    static void insertion(int[] arr, int lo, int hi) {
        for (int i = lo + 1; i < hi; i++) {
            int key = arr[i], j = i;
            while (j > lo && key < arr[j - 1]) { arr[j] = arr[j - 1]; j--; }
            arr[j] = key;
        }
    }

    static void sift(int[] arr, int lo, int root, int n) {
        while (true) {
            int child = 2 * root + 1;
            if (child >= n) return;
            if (child + 1 < n && arr[lo + child] < arr[lo + child + 1]) child++;
            if (arr[lo + root] >= arr[lo + child]) return;
            swap(arr, lo + root, lo + child);
            root = child;
        }
    }

    static void heapsort(int[] arr, int lo, int hi) {
        int n = hi - lo;
        for (int i = n / 2 - 1; i >= 0; i--) sift(arr, lo, i, n);
        for (int end = n - 1; end > 0; end--) { swap(arr, lo, lo + end); sift(arr, lo, 0, end); }
    }

    static void intro(int[] arr, int lo, int hi, int depth) {
        while (hi - lo > 16) {
            if (depth-- == 0) { heapsort(arr, lo, hi); return; }
            int mid = lo + (hi - lo) / 2, pivotPos = hi - 1;
            if (arr[mid] < arr[lo]) swap(arr, mid, lo);
            if (arr[pivotPos] < arr[lo]) swap(arr, pivotPos, lo);
            if (arr[mid] < arr[pivotPos]) swap(arr, mid, pivotPos);   // median now at arr[pivotPos]
            int storePos = lo;
            for (int i = lo; i < pivotPos; i++) if (arr[i] < arr[pivotPos]) swap(arr, storePos++, i);
            swap(arr, storePos, pivotPos);
            if (storePos - lo < hi - storePos - 1) { intro(arr, lo, storePos, depth); lo = storePos + 1; }
            else { intro(arr, storePos + 1, hi, depth); hi = storePos; }
        }
        insertion(arr, lo, hi);
    }

    public static void sort(int[] arr) {
        int depth = 0;
        for (int m = arr.length; m > 0; m >>= 1) depth += 2;
        intro(arr, 0, arr.length, depth);
    }
}
`,Pm=`"""Introsort: median-of-three quicksort, heapsort fallback when recursion
is too deep, insertion sort for small ranges."""


def _insertion(arr, lo, hi):
    for i in range(lo + 1, hi):
        key, j = arr[i], i
        while j > lo and key < arr[j - 1]:
            arr[j] = arr[j - 1]
            j -= 1
        arr[j] = key


def _sift(arr, lo, root, n):
    while True:
        child = 2 * root + 1
        if child >= n:
            return
        if child + 1 < n and arr[lo + child] < arr[lo + child + 1]:
            child += 1
        if arr[lo + root] >= arr[lo + child]:
            return
        arr[lo + root], arr[lo + child] = arr[lo + child], arr[lo + root]
        root = child


def _heapsort(arr, lo, hi):
    n = hi - lo
    for i in range(n // 2 - 1, -1, -1):
        _sift(arr, lo, i, n)
    for end in range(n - 1, 0, -1):
        arr[lo], arr[lo + end] = arr[lo + end], arr[lo]
        _sift(arr, lo, 0, end)


def _intro(arr, lo, hi, depth):
    while hi - lo > 16:
        if depth == 0:
            _heapsort(arr, lo, hi)
            return
        depth -= 1
        mid, pivot_pos = lo + (hi - lo) // 2, hi - 1
        if arr[mid] < arr[lo]:
            arr[mid], arr[lo] = arr[lo], arr[mid]
        if arr[pivot_pos] < arr[lo]:
            arr[pivot_pos], arr[lo] = arr[lo], arr[pivot_pos]
        if arr[mid] < arr[pivot_pos]:  # median now at arr[pivot_pos]
            arr[mid], arr[pivot_pos] = arr[pivot_pos], arr[mid]
        store_pos = lo
        for i in range(lo, pivot_pos):
            if arr[i] < arr[pivot_pos]:
                arr[store_pos], arr[i] = arr[i], arr[store_pos]
                store_pos += 1
        arr[store_pos], arr[pivot_pos] = arr[pivot_pos], arr[store_pos]
        if store_pos - lo < hi - store_pos - 1:
            _intro(arr, lo, store_pos, depth)
            lo = store_pos + 1
        else:
            _intro(arr, store_pos + 1, hi, depth)
            hi = store_pos
    _insertion(arr, lo, hi)


def sort_array(arr):
    _intro(arr, 0, len(arr), 2 * len(arr).bit_length())
    return arr
`,jm=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
// is too deep, insertion sort for small slices.

fn insertion(arr: &mut [i32]) {
    for i in 1..arr.len() {
        let key = arr[i];
        let mut j = i;
        while j > 0 && key < arr[j - 1] {
            arr[j] = arr[j - 1];
            j -= 1;
        }
        arr[j] = key;
    }
}

fn sift(arr: &mut [i32], mut root: usize, n: usize) {
    loop {
        let mut child = 2 * root + 1;
        if child >= n {
            return;
        }
        if child + 1 < n && arr[child] < arr[child + 1] {
            child += 1;
        }
        if arr[root] >= arr[child] {
            return;
        }
        arr.swap(root, child);
        root = child;
    }
}

fn heapsort(arr: &mut [i32]) {
    let n = arr.len();
    for i in (0..n / 2).rev() {
        sift(arr, i, n);
    }
    for end in (1..n).rev() {
        arr.swap(0, end);
        sift(arr, 0, end);
    }
}

fn intro(mut arr: &mut [i32], mut depth: u32) {
    while arr.len() > 16 {
        if depth == 0 {
            heapsort(arr);
            return;
        }
        depth -= 1;
        let (mid, pivot_pos) = (arr.len() / 2, arr.len() - 1);
        if arr[mid] < arr[0] { arr.swap(mid, 0); }
        if arr[pivot_pos] < arr[0] { arr.swap(pivot_pos, 0); }
        if arr[mid] < arr[pivot_pos] { arr.swap(mid, pivot_pos); } // median now at arr[pivot_pos]
        let mut store_pos = 0;
        for i in 0..pivot_pos {
            if arr[i] < arr[pivot_pos] {
                arr.swap(store_pos, i);
                store_pos += 1;
            }
        }
        arr.swap(store_pos, pivot_pos);
        let (left, right) = arr.split_at_mut(store_pos);
        let right = &mut right[1..];
        // recurse into the smaller side, loop on the larger one
        if left.len() < right.len() {
            intro(left, depth);
            arr = right;
        } else {
            intro(right, depth);
            arr = left;
        }
    }
    insertion(arr);
}

pub fn sort_array(arr: &mut [i32]) {
    let depth = 2 * (usize::BITS - arr.len().leading_zeros());
    intro(arr, depth);
}
`,Em=`/* Top-down recursive merge sort on the inclusive range arr[lo..hi]. Stable, O(n log n). */
#include <stdlib.h>

/* Merge the sorted halves arr[lo..mid] and arr[mid+1..hi] using the buffer temp. */
static void merge(int *arr, int *temp, int lo, int mid, int hi) {
    int left_pos = lo, right_pos = mid + 1, write_pos = lo;
    while (left_pos <= mid && right_pos <= hi)
        temp[write_pos++] = (arr[right_pos] < arr[left_pos]) ? arr[right_pos++] : arr[left_pos++];
    while (left_pos <= mid) temp[write_pos++] = arr[left_pos++];
    while (right_pos <= hi) temp[write_pos++] = arr[right_pos++];
    for (write_pos = lo; write_pos <= hi; write_pos++) arr[write_pos] = temp[write_pos];
}

static void merge_sort(int *arr, int *temp, int lo, int hi) {
    if (lo >= hi) return;                 /* zero or one element: already sorted */
    int mid = lo + (hi - lo) / 2;
    merge_sort(arr, temp, lo, mid);       /* sort the left half */
    merge_sort(arr, temp, mid + 1, hi);   /* sort the right half */
    merge(arr, temp, lo, mid, hi);        /* merge the two sorted halves */
}

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int *temp = malloc(sizeof(int) * n);
    merge_sort(arr, temp, 0, n - 1);
    free(temp);
}
`,zm=`// Top-down recursive merge sort on the inclusive range arr[lo..hi]. Stable, O(n log n).
#include <vector>

// Merge the sorted halves arr[lo..mid] and arr[mid+1..hi] using the buffer temp.
static void merge(std::vector<int>& arr, std::vector<int>& temp, int lo, int mid, int hi) {
    int leftPos = lo, rightPos = mid + 1, writePos = lo;
    while (leftPos <= mid && rightPos <= hi)
        temp[writePos++] = (arr[rightPos] < arr[leftPos]) ? arr[rightPos++] : arr[leftPos++];
    while (leftPos <= mid) temp[writePos++] = arr[leftPos++];
    while (rightPos <= hi) temp[writePos++] = arr[rightPos++];
    for (writePos = lo; writePos <= hi; writePos++) arr[writePos] = temp[writePos];
}

static void mergeSort(std::vector<int>& arr, std::vector<int>& temp, int lo, int hi) {
    if (lo >= hi) return;                // zero or one element: already sorted
    int mid = lo + (hi - lo) / 2;
    mergeSort(arr, temp, lo, mid);       // sort the left half
    mergeSort(arr, temp, mid + 1, hi);   // sort the right half
    merge(arr, temp, lo, mid, hi);       // merge the two sorted halves
}

void sortArray(std::vector<int>& arr) {
    std::vector<int> temp(arr.size());
    mergeSort(arr, temp, 0, static_cast<int>(arr.size()) - 1);
}
`,Cm=`package main

// Top-down recursive merge sort on the inclusive range arr[lo..hi]. Stable, O(n log n).

// merge combines the sorted halves arr[lo..mid] and arr[mid+1..hi] using the buffer temp.
func merge(arr, temp []int, lo, mid, hi int) {
	leftPos, rightPos, writePos := lo, mid+1, lo
	for leftPos <= mid && rightPos <= hi {
		if arr[rightPos] < arr[leftPos] {
			temp[writePos] = arr[rightPos]
			rightPos++
		} else {
			temp[writePos] = arr[leftPos]
			leftPos++
		}
		writePos++
	}
	writePos += copy(temp[writePos:], arr[leftPos:mid+1])
	copy(temp[writePos:], arr[rightPos:hi+1])
	copy(arr[lo:hi+1], temp[lo:hi+1])
}

func mergeSort(arr, temp []int, lo, hi int) {
	if lo >= hi { // zero or one element: already sorted
		return
	}
	mid := lo + (hi-lo)/2
	mergeSort(arr, temp, lo, mid)   // sort the left half
	mergeSort(arr, temp, mid+1, hi) // sort the right half
	merge(arr, temp, lo, mid, hi)   // merge the two sorted halves
}

func sortArray(arr []int) { mergeSort(arr, make([]int, len(arr)), 0, len(arr)-1) }
`,Nm=`// Top-down recursive merge sort on the inclusive range arr[lo..hi]. Stable, O(n log n).
class MergeSort {
    // Merge the sorted halves arr[lo..mid] and arr[mid+1..hi] using the buffer temp.
    static void merge(int[] arr, int[] temp, int lo, int mid, int hi) {
        int leftPos = lo, rightPos = mid + 1, writePos = lo;
        while (leftPos <= mid && rightPos <= hi)
            temp[writePos++] = (arr[rightPos] < arr[leftPos]) ? arr[rightPos++] : arr[leftPos++];
        while (leftPos <= mid) temp[writePos++] = arr[leftPos++];
        while (rightPos <= hi) temp[writePos++] = arr[rightPos++];
        System.arraycopy(temp, lo, arr, lo, hi - lo + 1);
    }

    static void mergeSort(int[] arr, int[] temp, int lo, int hi) {
        if (lo >= hi) return;                // zero or one element: already sorted
        int mid = lo + (hi - lo) / 2;
        mergeSort(arr, temp, lo, mid);       // sort the left half
        mergeSort(arr, temp, mid + 1, hi);   // sort the right half
        merge(arr, temp, lo, mid, hi);       // merge the two sorted halves
    }

    public static void sort(int[] arr) { mergeSort(arr, new int[arr.length], 0, arr.length - 1); }
}
`,Tm=`"""Top-down recursive merge sort on the inclusive range arr[lo..hi]. Stable, O(n log n)."""


def _merge(arr, lo, mid, hi):
    """Merge the sorted halves arr[lo..mid] and arr[mid+1..hi]."""
    merged, left_pos, right_pos = [], lo, mid + 1
    while left_pos <= mid and right_pos <= hi:
        if arr[right_pos] < arr[left_pos]:
            merged.append(arr[right_pos])
            right_pos += 1
        else:
            merged.append(arr[left_pos])
            left_pos += 1
    merged.extend(arr[left_pos:mid + 1])
    merged.extend(arr[right_pos:hi + 1])
    arr[lo:hi + 1] = merged


def _merge_sort(arr, lo, hi):
    if lo >= hi:  # zero or one element: already sorted
        return
    mid = lo + (hi - lo) // 2
    _merge_sort(arr, lo, mid)       # sort the left half
    _merge_sort(arr, mid + 1, hi)   # sort the right half
    _merge(arr, lo, mid, hi)        # merge the two sorted halves


def sort_array(arr):
    _merge_sort(arr, 0, len(arr) - 1)
    return arr
`,Am=`// Top-down recursive merge sort on the inclusive range arr[lo..=hi]. Stable, O(n log n).

/// Merge the sorted halves arr[lo..=mid] and arr[mid+1..=hi] using the buffer temp.
fn merge(arr: &mut [i32], temp: &mut [i32], lo: usize, mid: usize, hi: usize) {
    let (mut left_pos, mut right_pos) = (lo, mid + 1);
    for write_pos in lo..=hi {
        if right_pos > hi || (left_pos <= mid && arr[left_pos] <= arr[right_pos]) {
            temp[write_pos] = arr[left_pos];
            left_pos += 1;
        } else {
            temp[write_pos] = arr[right_pos];
            right_pos += 1;
        }
    }
    arr[lo..=hi].copy_from_slice(&temp[lo..=hi]);
}

fn merge_sort(arr: &mut [i32], temp: &mut [i32], lo: usize, hi: usize) {
    if lo >= hi {
        return; // zero or one element: already sorted
    }
    let mid = lo + (hi - lo) / 2;
    merge_sort(arr, temp, lo, mid); // sort the left half
    merge_sort(arr, temp, mid + 1, hi); // sort the right half
    merge(arr, temp, lo, mid, hi); // merge the two sorted halves
}

pub fn sort_array(arr: &mut [i32]) {
    if arr.len() < 2 {
        return;
    }
    let mut temp = vec![0; arr.len()];
    let hi = arr.len() - 1;
    merge_sort(arr, &mut temp, 0, hi);
}
`,Om=`/* Odd-even (brick) sort: alternate compare-swaps on odd and even pairs. */
void sort_array(int *arr, int n) {
    int sorted = 0;
    while (!sorted) {
        sorted = 1;
        for (int phase = 1; phase >= 0; phase--)
            for (int pair_start = phase; pair_start + 1 < n; pair_start += 2)
                if (arr[pair_start + 1] < arr[pair_start]) { int t = arr[pair_start]; arr[pair_start] = arr[pair_start + 1]; arr[pair_start + 1] = t; sorted = 0; }
    }
}
`,Im=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    bool sorted = false;
    while (!sorted) {
        sorted = true;
        for (size_t phase : {1, 0})
            for (size_t pairStart = phase; pairStart + 1 < arr.size(); pairStart += 2)
                if (arr[pairStart + 1] < arr[pairStart]) { std::swap(arr[pairStart], arr[pairStart + 1]); sorted = false; }
    }
}
`,Fm=`package main

// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.

func sortArray(arr []int) {
	sorted := false
	for !sorted {
		sorted = true
		for _, phase := range []int{1, 0} {
			for pairStart := phase; pairStart+1 < len(arr); pairStart += 2 {
				if arr[pairStart+1] < arr[pairStart] {
					arr[pairStart], arr[pairStart+1] = arr[pairStart+1], arr[pairStart]
					sorted = false
				}
			}
		}
	}
}
`,Lm=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
class OddEvenSort {
    public static void sort(int[] arr) {
        boolean sorted = false;
        while (!sorted) {
            sorted = true;
            for (int phase = 1; phase >= 0; phase--)
                for (int pairStart = phase; pairStart + 1 < arr.length; pairStart += 2)
                    if (arr[pairStart + 1] < arr[pairStart]) { int t = arr[pairStart]; arr[pairStart] = arr[pairStart + 1]; arr[pairStart + 1] = t; sorted = false; }
        }
    }
}
`,Mm=`"""Odd-even (brick) sort: alternate compare-swaps on odd and even pairs."""


def sort_array(arr):
    done = False
    while not done:
        done = True
        for phase in (1, 0):
            for pair_start in range(phase, len(arr) - 1, 2):
                if arr[pair_start + 1] < arr[pair_start]:
                    arr[pair_start], arr[pair_start + 1] = arr[pair_start + 1], arr[pair_start]
                    done = False
    return arr
`,Rm=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.

pub fn sort_array(arr: &mut [i32]) {
    let mut sorted = false;
    while !sorted {
        sorted = true;
        for phase in [1, 0] {
            let mut pair_start = phase;
            while pair_start + 1 < arr.len() {
                if arr[pair_start + 1] < arr[pair_start] {
                    arr.swap(pair_start, pair_start + 1);
                    sorted = false;
                }
                pair_start += 2;
            }
        }
    }
}
`,$m=`/* Pancake sort: flip the maximum to the front, then flip it to the end. */
static void flip(int *arr, int k) {
    for (int i = 0; i < k; i++, k--) { int t = arr[i]; arr[i] = arr[k]; arr[k] = t; }
}

void sort_array(int *arr, int n) {
    for (int unsorted_size = n; unsorted_size > 1; unsorted_size--) {
        int max_index = 0;
        for (int i = 1; i < unsorted_size; i++) if (arr[i] > arr[max_index]) max_index = i;
        if (max_index != unsorted_size - 1) {
            flip(arr, max_index);
            flip(arr, unsorted_size - 1);
        }
    }
}
`,Dm=`// Pancake sort: flip the max to the front, then flip it to the end.
#include <algorithm>
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t unsortedSize = arr.size(); unsortedSize > 1; unsortedSize--) {
        size_t maxIndex = std::max_element(arr.begin(), arr.begin() + unsortedSize) - arr.begin();
        if (maxIndex != unsortedSize - 1) {
            std::reverse(arr.begin(), arr.begin() + maxIndex + 1);   // flip max to front
            std::reverse(arr.begin(), arr.begin() + unsortedSize);     // flip it to the end
        }
    }
}
`,Um=`package main

// Pancake sort: flip the max to the front, then flip it to the end.

func flip(arr []int, k int) {
	for i := 0; i < k; i, k = i+1, k-1 {
		arr[i], arr[k] = arr[k], arr[i]
	}
}

func sortArray(arr []int) {
	for unsortedSize := len(arr); unsortedSize > 1; unsortedSize-- {
		maxIndex := 0
		for i := 1; i < unsortedSize; i++ {
			if arr[i] > arr[maxIndex] {
				maxIndex = i
			}
		}
		if maxIndex != unsortedSize-1 {
			flip(arr, maxIndex)
			flip(arr, unsortedSize-1)
		}
	}
}
`,Bm=`// Pancake sort: flip the max to the front, then flip it to the end.
class PancakeSort {
    static void flip(int[] arr, int k) {
        for (int i = 0; i < k; i++, k--) { int t = arr[i]; arr[i] = arr[k]; arr[k] = t; }
    }

    public static void sort(int[] arr) {
        for (int unsortedSize = arr.length; unsortedSize > 1; unsortedSize--) {
            int maxIndex = 0;
            for (int i = 1; i < unsortedSize; i++) if (arr[i] > arr[maxIndex]) maxIndex = i;
            if (maxIndex != unsortedSize - 1) {
                flip(arr, maxIndex);
                flip(arr, unsortedSize - 1);
            }
        }
    }
}
`,Vm=`"""Pancake sort: flip the max to the front, then flip it to the end."""


def sort_array(arr):
    for unsorted_size in range(len(arr), 1, -1):
        max_index = max(range(unsorted_size), key=arr.__getitem__)
        if max_index != unsorted_size - 1:
            arr[:max_index + 1] = arr[:max_index + 1][::-1]  # flip max to the front
            arr[:unsorted_size] = arr[:unsorted_size][::-1]      # flip it to the end
    return arr
`,Hm=`// Pancake sort: flip the max to the front, then flip it to the end.

pub fn sort_array(arr: &mut [i32]) {
    for unsorted_size in (2..=arr.len()).rev() {
        let mut max_index = 0;
        for i in 1..unsorted_size {
            if arr[i] > arr[max_index] {
                max_index = i;
            }
        }
        if max_index != unsorted_size - 1 {
            arr[..=max_index].reverse(); // flip max to the front
            arr[..unsorted_size].reverse(); // flip it to the end
        }
    }
}
`,Wm=`/* 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well. */
#include <stdlib.h>

static void swap(int *arr, int i, int j) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

static void quick(int *arr, int lo, int hi) {
    while (lo < hi) {
        swap(arr, lo, lo + rand() % (hi - lo + 1));
        int pivot = arr[lo], less_end = lo, i = lo + 1, greater_start = hi;
        while (i <= greater_start) {
            if (arr[i] < pivot) swap(arr, less_end++, i++);
            else if (arr[i] > pivot) swap(arr, i, greater_start--);
            else i++;
        }
        /* recurse on the smaller part, loop on the larger one */
        if (less_end - lo < hi - greater_start) { quick(arr, lo, less_end - 1); lo = greater_start + 1; }
        else { quick(arr, greater_start + 1, hi); hi = less_end - 1; }
    }
}

void sort_array(int *arr, int n) { quick(arr, 0, n - 1); }
`,qm=`// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
#include <random>
#include <utility>
#include <vector>

static std::mt19937 rng(12345);

static void quick(std::vector<int>& arr, int lo, int hi) {
    while (lo < hi) {
        std::uniform_int_distribution<int> pick(lo, hi);
        std::swap(arr[lo], arr[pick(rng)]);
        int pivot = arr[lo], lessEnd = lo, i = lo + 1, greaterStart = hi;
        while (i <= greaterStart) {
            if (arr[i] < pivot) std::swap(arr[lessEnd++], arr[i++]);
            else if (arr[i] > pivot) std::swap(arr[i], arr[greaterStart--]);
            else i++;
        }
        if (lessEnd - lo < hi - greaterStart) { quick(arr, lo, lessEnd - 1); lo = greaterStart + 1; }
        else { quick(arr, greaterStart + 1, hi); hi = lessEnd - 1; }
    }
}

void sortArray(std::vector<int>& arr) { quick(arr, 0, static_cast<int>(arr.size()) - 1); }
`,Qm=`package main

import "math/rand"

// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.

func quick(arr []int, lo, hi int) {
	for lo < hi {
		pivotIndex := lo + rand.Intn(hi-lo+1)
		arr[lo], arr[pivotIndex] = arr[pivotIndex], arr[lo]
		pivot, lessEnd, i, greaterStart := arr[lo], lo, lo+1, hi
		for i <= greaterStart {
			if arr[i] < pivot {
				arr[lessEnd], arr[i] = arr[i], arr[lessEnd]
				lessEnd++
				i++
			} else if arr[i] > pivot {
				arr[i], arr[greaterStart] = arr[greaterStart], arr[i]
				greaterStart--
			} else {
				i++
			}
		}
		if lessEnd-lo < hi-greaterStart {
			quick(arr, lo, lessEnd-1)
			lo = greaterStart + 1
		} else {
			quick(arr, greaterStart+1, hi)
			hi = lessEnd - 1
		}
	}
}

func sortArray(arr []int) { quick(arr, 0, len(arr)-1) }
`,Gm=`import java.util.concurrent.ThreadLocalRandom;

// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
class QuickSort {
    static void swap(int[] arr, int i, int j) { int t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

    static void quick(int[] arr, int lo, int hi) {
        while (lo < hi) {
            swap(arr, lo, ThreadLocalRandom.current().nextInt(lo, hi + 1));
            int pivot = arr[lo], lessEnd = lo, i = lo + 1, greaterStart = hi;
            while (i <= greaterStart) {
                if (arr[i] < pivot) swap(arr, lessEnd++, i++);
                else if (arr[i] > pivot) swap(arr, i, greaterStart--);
                else i++;
            }
            if (lessEnd - lo < hi - greaterStart) { quick(arr, lo, lessEnd - 1); lo = greaterStart + 1; }
            else { quick(arr, greaterStart + 1, hi); hi = lessEnd - 1; }
        }
    }

    public static void sort(int[] arr) { quick(arr, 0, arr.length - 1); }
}
`,Km=`"""3-way (Dijkstra) quicksort with a random pivot: handles duplicates well."""
import random


def _quick(arr, lo, hi):
    while lo < hi:
        pivot_index = random.randint(lo, hi)
        arr[lo], arr[pivot_index] = arr[pivot_index], arr[lo]
        pivot, less_end, i, greater_start = arr[lo], lo, lo + 1, hi
        while i <= greater_start:
            if arr[i] < pivot:
                arr[less_end], arr[i] = arr[i], arr[less_end]
                less_end += 1
                i += 1
            elif arr[i] > pivot:
                arr[i], arr[greater_start] = arr[greater_start], arr[i]
                greater_start -= 1
            else:
                i += 1
        # recurse on the smaller part, loop on the larger one
        if less_end - lo < hi - greater_start:
            _quick(arr, lo, less_end - 1)
            lo = greater_start + 1
        else:
            _quick(arr, greater_start + 1, hi)
            hi = less_end - 1


def sort_array(arr):
    _quick(arr, 0, len(arr) - 1)
    return arr
`,Ym=`// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
// A tiny xorshift PRNG keeps the snippet dependency-free.

fn next_rand(state: &mut u64) -> u64 {
    *state ^= *state << 13;
    *state ^= *state >> 7;
    *state ^= *state << 17;
    *state
}

fn quick(arr: &mut [i32], rng: &mut u64) {
    let (mut lo, mut hi) = (0usize, arr.len());
    // sort arr[lo..hi)
    while hi - lo > 1 {
        let pivot_index = lo + (next_rand(rng) % (hi - lo) as u64) as usize;
        arr.swap(lo, pivot_index);
        let pivot = arr[lo];
        let (mut less_end, mut i, mut greater_start) = (lo, lo + 1, hi);
        while i < greater_start {
            if arr[i] < pivot {
                arr.swap(less_end, i);
                less_end += 1;
                i += 1;
            } else if arr[i] > pivot {
                greater_start -= 1;
                arr.swap(i, greater_start);
            } else {
                i += 1;
            }
        }
        // arr[lo..less_end) < pivot, arr[less_end..greater_start) == pivot, arr[greater_start..hi) > pivot
        if less_end - lo < hi - greater_start {
            quick(&mut arr[lo..less_end], rng);
            lo = greater_start;
        } else {
            quick(&mut arr[greater_start..hi], rng);
            hi = less_end;
        }
    }
}

pub fn sort_array(arr: &mut [i32]) {
    let mut rng = 0x2545_F491_4F6C_DD1D_u64;
    quick(arr, &mut rng);
}
`,Zm=`/* LSD radix sort, base 256. Negative numbers are handled by sorting
 * the offset key (value - min) as an unsigned 32-bit number. */
#include <stdlib.h>
#include <string.h>

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int min = arr[0];
    for (int i = 1; i < n; i++) if (arr[i] < min) min = arr[i];
    unsigned *key = malloc(sizeof(unsigned) * n), *output = malloc(sizeof(unsigned) * n), max = 0;
    for (int i = 0; i < n; i++) {
        key[i] = (unsigned)((long long)arr[i] - min);
        if (key[i] > max) max = key[i];
    }
    for (int shift = 0; shift < 32 && (max >> shift) > 0; shift += 8) {
        size_t count[257];
        memset(count, 0, sizeof count);
        for (int i = 0; i < n; i++) count[((key[i] >> shift) & 255) + 1]++;
        for (int d = 0; d < 256; d++) count[d + 1] += count[d];
        for (int i = 0; i < n; i++) output[count[(key[i] >> shift) & 255]++] = key[i];
        unsigned *t = key; key = output; output = t;
    }
    for (int i = 0; i < n; i++) arr[i] = (int)((long long)key[i] + min);
    free(key); free(output);
}
`,Xm=`// LSD radix sort, base 256, on the unsigned offset key (value - min).
#include <algorithm>
#include <array>
#include <cstdint>
#include <vector>

void sortArray(std::vector<int>& arr) {
    if (arr.size() < 2) return;
    long long mn = *std::min_element(arr.begin(), arr.end());
    std::vector<uint32_t> key(arr.size()), output(arr.size());
    uint32_t mx = 0;
    for (size_t i = 0; i < arr.size(); i++) {
        key[i] = static_cast<uint32_t>(arr[i] - mn);
        mx = std::max(mx, key[i]);
    }
    for (int shift = 0; shift < 32 && (mx >> shift) > 0; shift += 8) {
        std::array<size_t, 257> count{};
        for (uint32_t k : key) count[((k >> shift) & 255) + 1]++;
        for (int d = 0; d < 256; d++) count[d + 1] += count[d];
        for (uint32_t k : key) output[count[(k >> shift) & 255]++] = k;
        key.swap(output);
    }
    for (size_t i = 0; i < arr.size(); i++) arr[i] = static_cast<int>(key[i] + mn);
}
`,Jm=`package main

// LSD radix sort, base 256, on the unsigned offset key (value - min).

func sortArray(arr []int) {
	n := len(arr)
	if n < 2 {
		return
	}
	min := arr[0]
	for _, v := range arr {
		if v < min {
			min = v
		}
	}
	key, output := make([]uint64, n), make([]uint64, n)
	var max uint64
	for i, v := range arr {
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
			output[count[d]] = k
			count[d]++
		}
		key, output = output, key
	}
	for i, k := range key {
		arr[i] = int(k) + min
	}
}
`,eg=`// LSD radix sort, base 256, on the offset key (value - min) as a long.
class RadixSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        if (n < 2) return;
        long min = arr[0];
        for (int v : arr) min = Math.min(min, v);
        long[] key = new long[n], output = new long[n];
        long max = 0;
        for (int i = 0; i < n; i++) { key[i] = arr[i] - min; max = Math.max(max, key[i]); }
        for (int shift = 0; shift < 40 && (max >> shift) > 0; shift += 8) {
            int[] count = new int[257];
            for (long k : key) count[(int) ((k >> shift) & 255) + 1]++;
            for (int d = 0; d < 256; d++) count[d + 1] += count[d];
            for (long k : key) output[count[(int) ((k >> shift) & 255)]++] = k;
            long[] t = key; key = output; output = t;
        }
        for (int i = 0; i < n; i++) arr[i] = (int) (key[i] + min);
    }
}
`,tg=`"""LSD radix sort, base 256, on the offset key (value - min)."""


def sort_array(arr):
    if len(arr) < 2:
        return arr
    lo = min(arr)
    keys = [v - lo for v in arr]
    max_key, shift = max(keys), 0
    while (max_key >> shift) > 0:
        buckets = [[] for _ in range(256)]
        for k in keys:
            buckets[(k >> shift) & 255].append(k)
        keys = [k for bucket in buckets for k in bucket]
        shift += 8
    arr[:] = [k + lo for k in keys]
    return arr
`,ng=`// LSD radix sort, base 256, on the unsigned offset key (value - min).

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    if n < 2 {
        return;
    }
    let min = *arr.iter().min().unwrap() as i64;
    let mut key: Vec<u32> = arr.iter().map(|&v| (v as i64 - min) as u32).collect();
    let max = *key.iter().max().unwrap();
    let mut output = vec![0u32; n];
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
            output[count[d]] = k;
            count[d] += 1;
        }
        std::mem::swap(&mut key, &mut output);
        shift += 8;
    }
    for (slot, &k) in arr.iter_mut().zip(&key) {
        *slot = (k as i64 + min) as i32;
    }
}
`,rg=`/* Selection sort: repeatedly select the minimum of the unsorted suffix. */
void sort_array(int *arr, int n) {
    for (int fill_pos = 0; fill_pos + 1 < n; fill_pos++) {
        int min_index = fill_pos;
        for (int i = fill_pos + 1; i < n; i++) if (arr[i] < arr[min_index]) min_index = i;
        int t = arr[fill_pos]; arr[fill_pos] = arr[min_index]; arr[min_index] = t;
    }
}
`,ig=`// Selection sort: repeatedly select the minimum of the unsorted suffix.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t fillPos = 0; fillPos + 1 < arr.size(); fillPos++) {
        size_t minIndex = fillPos;
        for (size_t i = fillPos + 1; i < arr.size(); i++) if (arr[i] < arr[minIndex]) minIndex = i;
        std::swap(arr[fillPos], arr[minIndex]);
    }
}
`,ag=`package main

// Selection sort: repeatedly select the minimum of the unsorted suffix.

func sortArray(arr []int) {
	for fillPos := 0; fillPos+1 < len(arr); fillPos++ {
		minIndex := fillPos
		for i := fillPos + 1; i < len(arr); i++ {
			if arr[i] < arr[minIndex] {
				minIndex = i
			}
		}
		arr[fillPos], arr[minIndex] = arr[minIndex], arr[fillPos]
	}
}
`,og=`// Selection sort: repeatedly select the minimum of the unsorted suffix.
class SelectionSort {
    public static void sort(int[] arr) {
        for (int fillPos = 0; fillPos + 1 < arr.length; fillPos++) {
            int minIndex = fillPos;
            for (int i = fillPos + 1; i < arr.length; i++) if (arr[i] < arr[minIndex]) minIndex = i;
            int t = arr[fillPos]; arr[fillPos] = arr[minIndex]; arr[minIndex] = t;
        }
    }
}
`,sg=`"""Selection sort: repeatedly select the minimum of the unsorted suffix."""


def sort_array(arr):
    n = len(arr)
    for fill_pos in range(n - 1):
        min_index = fill_pos
        for i in range(fill_pos + 1, n):
            if arr[i] < arr[min_index]:
                min_index = i
        arr[fill_pos], arr[min_index] = arr[min_index], arr[fill_pos]
    return arr
`,lg=`// Selection sort: repeatedly select the minimum of the unsorted suffix.

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    for fill_pos in 0..n.saturating_sub(1) {
        let mut min_index = fill_pos;
        for i in fill_pos + 1..n {
            if arr[i] < arr[min_index] {
                min_index = i;
            }
        }
        arr.swap(fill_pos, min_index);
    }
}
`,ug=`/* Shell sort with the Ciura gap sequence (extended by x2.25). */
void sort_array(int *arr, int n) {
    int gaps[64] = {1, 4, 10, 23, 57, 132, 301, 701}, g = 8;
    while (gaps[g - 1] < n / 2 && g < 64) { gaps[g] = (int)(gaps[g - 1] * 2.25); g++; }
    for (int k = g - 1; k >= 0; k--) {
        int gap = gaps[k];
        for (int current = gap; current < n; current++) {
            int key = arr[current], hole = current;
            while (hole >= gap && key < arr[hole - gap]) { arr[hole] = arr[hole - gap]; hole -= gap; }
            arr[hole] = key;
        }
    }
}
`,cg=`// Shell sort with the Ciura gap sequence (extended by x2.25).
#include <vector>

void sortArray(std::vector<int>& arr) {
    int n = static_cast<int>(arr.size());
    std::vector<int> gaps = {1, 4, 10, 23, 57, 132, 301, 701};
    while (gaps.back() < n / 2) gaps.push_back(static_cast<int>(gaps.back() * 2.25));
    for (auto it = gaps.rbegin(); it != gaps.rend(); ++it) {
        int gap = *it;
        for (int current = gap; current < n; current++) {
            int key = arr[current], hole = current;
            while (hole >= gap && key < arr[hole - gap]) { arr[hole] = arr[hole - gap]; hole -= gap; }
            arr[hole] = key;
        }
    }
}
`,dg=`package main

// Shell sort with the Ciura gap sequence (extended by x2.25).

func sortArray(arr []int) {
	n := len(arr)
	gaps := []int{1, 4, 10, 23, 57, 132, 301, 701}
	for gaps[len(gaps)-1] < n/2 {
		gaps = append(gaps, int(float64(gaps[len(gaps)-1])*2.25))
	}
	for g := len(gaps) - 1; g >= 0; g-- {
		gap := gaps[g]
		for current := gap; current < n; current++ {
			key, hole := arr[current], current
			for hole >= gap && key < arr[hole-gap] {
				arr[hole] = arr[hole-gap]
				hole -= gap
			}
			arr[hole] = key
		}
	}
}
`,fg=`import java.util.ArrayList;
import java.util.List;

// Shell sort with the Ciura gap sequence (extended by x2.25).
class ShellSort {
    public static void sort(int[] arr) {
        int n = arr.length;
        List<Integer> gaps = new ArrayList<>(List.of(1, 4, 10, 23, 57, 132, 301, 701));
        while (gaps.get(gaps.size() - 1) < n / 2) gaps.add((int) (gaps.get(gaps.size() - 1) * 2.25));
        for (int g = gaps.size() - 1; g >= 0; g--) {
            int gap = gaps.get(g);
            for (int current = gap; current < n; current++) {
                int key = arr[current], hole = current;
                while (hole >= gap && key < arr[hole - gap]) { arr[hole] = arr[hole - gap]; hole -= gap; }
                arr[hole] = key;
            }
        }
    }
}
`,pg=`"""Shell sort with the Ciura gap sequence (extended by x2.25)."""


def sort_array(arr):
    n = len(arr)
    gaps = [1, 4, 10, 23, 57, 132, 301, 701]
    while gaps[-1] < n // 2:
        gaps.append(int(gaps[-1] * 2.25))
    for gap in reversed(gaps):
        for current in range(gap, n):
            key, hole = arr[current], current
            while hole >= gap and key < arr[hole - gap]:
                arr[hole] = arr[hole - gap]
                hole -= gap
            arr[hole] = key
    return arr
`,hg=`// Shell sort with the Ciura gap sequence (extended by x2.25).

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    let mut gaps = vec![1usize, 4, 10, 23, 57, 132, 301, 701];
    while *gaps.last().unwrap() < n / 2 {
        let next = (*gaps.last().unwrap() as f64 * 2.25) as usize;
        gaps.push(next);
    }
    for &gap in gaps.iter().rev() {
        for current in gap..n {
            let key = arr[current];
            let mut hole = current;
            while hole >= gap && key < arr[hole - gap] {
                arr[hole] = arr[hole - gap];
                hole -= gap;
            }
            arr[hole] = key;
        }
    }
}
`,mg=`/* Simplified Timsort: natural runs extended to MINRUN with binary
 * insertion sort, then merged with a stack that keeps run lengths balanced. */
#include <stdlib.h>
#include <string.h>

static int min_run(int n) {
    int r = 0;
    while (n >= 32) { r |= n & 1; n >>= 1; }
    return n + r;
}

static void merge_runs(int *arr, int lo, int mid, int hi) {
    int len = mid - lo;
    int *temp = malloc(sizeof(int) * (len > 0 ? len : 1));
    memcpy(temp, arr + lo, sizeof(int) * len);
    int i = 0, j = mid, k = lo;
    while (i < len && j < hi) arr[k++] = (arr[j] < temp[i]) ? arr[j++] : temp[i++];
    while (i < len) arr[k++] = temp[i++];
    free(temp);
}

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int minrun = min_run(n);
    int *start = malloc(sizeof(int) * (n + 1)), *len = malloc(sizeof(int) * (n + 1));
    int top = 0, lo = 0;
    while (lo < n) {
        int hi = lo + 1;
        if (hi < n) {
            if (arr[hi] < arr[lo]) {               /* strictly descending run: reverse it */
                while (hi + 1 < n && arr[hi + 1] < arr[hi]) hi++;
                for (int x = lo, y = hi; x < y; x++, y--) { int t = arr[x]; arr[x] = arr[y]; arr[y] = t; }
            } else {
                while (hi + 1 < n && arr[hi + 1] >= arr[hi]) hi++;
            }
            hi++;
        }
        int end = lo + minrun < n ? lo + minrun : n;
        if (end < hi) end = hi;
        for (int i = hi; i < end; i++) {      /* binary insertion sort */
            int key = arr[i], l = lo, r = i;
            while (l < r) { int m = (l + r) / 2; if (key < arr[m]) r = m; else l = m + 1; }
            memmove(arr + l + 1, arr + l, sizeof(int) * (i - l));
            arr[l] = key;
        }
        start[top] = lo; len[top] = end - lo; top++;
        lo = end;
        while (top > 1) {                     /* keep the run stack balanced */
            int b = len[top - 2], c = len[top - 1], at;
            if ((top >= 3 && len[top - 3] <= b + c) || (top >= 4 && len[top - 4] <= len[top - 3] + b))
                at = (len[top - 3] < c) ? top - 3 : top - 2;
            else if (b <= c) at = top - 2;
            else break;
            merge_runs(arr, start[at], start[at] + len[at], start[at] + len[at] + len[at + 1]);
            len[at] += len[at + 1];
            for (int k = at + 1; k < top - 1; k++) { start[k] = start[k + 1]; len[k] = len[k + 1]; }
            top--;
        }
    }
    while (top > 1) {
        int at = top - 2;
        merge_runs(arr, start[at], start[at] + len[at], start[at] + len[at] + len[at + 1]);
        len[at] += len[at + 1];
        top--;
    }
    free(start); free(len);
}
`,gg=`// Simplified Timsort: natural runs extended to MINRUN with binary
// insertion sort, merged via a stack that keeps run lengths balanced.
#include <algorithm>
#include <utility>
#include <vector>

static int minRun(int n) {
    int r = 0;
    while (n >= 32) { r |= n & 1; n >>= 1; }
    return n + r;
}

static void mergeRuns(std::vector<int>& arr, int lo, int mid, int hi) {
    std::vector<int> temp(arr.begin() + lo, arr.begin() + mid);
    size_t i = 0;
    int j = mid, k = lo;
    while (i < temp.size() && j < hi) arr[k++] = (arr[j] < temp[i]) ? arr[j++] : temp[i++];
    while (i < temp.size()) arr[k++] = temp[i++];
}

void sortArray(std::vector<int>& arr) {
    int n = static_cast<int>(arr.size());
    if (n < 2) return;
    int minrun = minRun(n);
    std::vector<std::pair<int, int>> runs;  // (start, length)
    auto mergeAt = [&](size_t i) {
        mergeRuns(arr, runs[i].first, runs[i].first + runs[i].second,
                  runs[i].first + runs[i].second + runs[i + 1].second);
        runs[i].second += runs[i + 1].second;
        runs.erase(runs.begin() + i + 1);
    };
    for (int lo = 0; lo < n;) {
        int hi = lo + 1;
        if (hi < n) {
            if (arr[hi] < arr[lo]) {  // strictly descending: reverse
                while (hi + 1 < n && arr[hi + 1] < arr[hi]) hi++;
                std::reverse(arr.begin() + lo, arr.begin() + hi + 1);
            } else {
                while (hi + 1 < n && arr[hi + 1] >= arr[hi]) hi++;
            }
            hi++;
        }
        int end = std::max(std::min(n, lo + minrun), hi);
        for (int i = hi; i < end; i++) {  // binary insertion sort
            int key = arr[i];
            auto pos = std::upper_bound(arr.begin() + lo, arr.begin() + i, key);
            std::move_backward(pos, arr.begin() + i, arr.begin() + i + 1);
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
`,vg=`package main

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

func mergeRuns(arr []int, lo, mid, hi int) {
	temp := append([]int(nil), arr[lo:mid]...)
	i, j, k := 0, mid, lo
	for i < len(temp) && j < hi {
		if arr[j] < temp[i] {
			arr[k] = arr[j]
			j++
		} else {
			arr[k] = temp[i]
			i++
		}
		k++
	}
	copy(arr[k:], temp[i:])
}

type run struct{ start, length int }

func sortArray(arr []int) {
	n := len(arr)
	if n < 2 {
		return
	}
	mr := minRun(n)
	var runs []run
	mergeAt := func(i int) {
		x, y := runs[i], runs[i+1]
		mergeRuns(arr, x.start, x.start+x.length, x.start+x.length+y.length)
		runs[i].length += y.length
		runs = append(runs[:i+1], runs[i+2:]...)
	}
	for lo := 0; lo < n; {
		hi := lo + 1
		if hi < n {
			if arr[hi] < arr[lo] { // strictly descending: reverse
				for hi+1 < n && arr[hi+1] < arr[hi] {
					hi++
				}
				for x, y := lo, hi; x < y; x, y = x+1, y-1 {
					arr[x], arr[y] = arr[y], arr[x]
				}
			} else {
				for hi+1 < n && arr[hi+1] >= arr[hi] {
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
			key, l, r := arr[i], lo, i
			for l < r {
				m := (l + r) / 2
				if key < arr[m] {
					r = m
				} else {
					l = m + 1
				}
			}
			copy(arr[l+1:i+1], arr[l:i])
			arr[l] = key
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
`,yg=`import java.util.ArrayList;
import java.util.List;

// Simplified Timsort: natural runs extended to MINRUN with binary
// insertion sort, merged via a stack that keeps run lengths balanced.
class TimSort {
    static int minRun(int n) {
        int r = 0;
        while (n >= 32) { r |= n & 1; n >>= 1; }
        return n + r;
    }

    static void mergeRuns(int[] arr, int lo, int mid, int hi) {
        int[] temp = java.util.Arrays.copyOfRange(arr, lo, mid);
        int i = 0, j = mid, k = lo;
        while (i < temp.length && j < hi) arr[k++] = (arr[j] < temp[i]) ? arr[j++] : temp[i++];
        while (i < temp.length) arr[k++] = temp[i++];
    }

    static void mergeAt(int[] arr, List<int[]> runs, int i) {
        int[] x = runs.get(i), y = runs.get(i + 1);
        mergeRuns(arr, x[0], x[0] + x[1], x[0] + x[1] + y[1]);
        x[1] += y[1];
        runs.remove(i + 1);
    }

    public static void sort(int[] arr) {
        int n = arr.length;
        if (n < 2) return;
        int minrun = minRun(n);
        List<int[]> runs = new ArrayList<>();   // {start, length}
        for (int lo = 0; lo < n; ) {
            int hi = lo + 1;
            if (hi < n) {
                if (arr[hi] < arr[lo]) {             // strictly descending: reverse
                    while (hi + 1 < n && arr[hi + 1] < arr[hi]) hi++;
                    for (int x = lo, y = hi; x < y; x++, y--) { int t = arr[x]; arr[x] = arr[y]; arr[y] = t; }
                } else {
                    while (hi + 1 < n && arr[hi + 1] >= arr[hi]) hi++;
                }
                hi++;
            }
            int end = Math.max(Math.min(n, lo + minrun), hi);
            for (int i = hi; i < end; i++) {      // binary insertion sort
                int key = arr[i], l = lo, r = i;
                while (l < r) { int m = (l + r) >>> 1; if (key < arr[m]) r = m; else l = m + 1; }
                System.arraycopy(arr, l, arr, l + 1, i - l);
                arr[l] = key;
            }
            runs.add(new int[] {lo, end - lo});
            lo = end;
            while (runs.size() > 1) {
                int m = runs.size(), b = runs.get(m - 2)[1], c = runs.get(m - 1)[1];
                if ((m >= 3 && runs.get(m - 3)[1] <= b + c) || (m >= 4 && runs.get(m - 4)[1] <= runs.get(m - 3)[1] + b)) {
                    mergeAt(arr, runs, runs.get(m - 3)[1] < c ? m - 3 : m - 2);
                } else if (b <= c) {
                    mergeAt(arr, runs, m - 2);
                } else {
                    break;
                }
            }
        }
        while (runs.size() > 1) mergeAt(arr, runs, runs.size() - 2);
    }
}
`,_g=`"""Simplified Timsort: natural runs extended to MIN_RUN with binary
insertion sort, merged via a stack that keeps run lengths balanced."""
from bisect import bisect_right


def _min_run(n):
    r = 0
    while n >= 32:
        r |= n & 1
        n >>= 1
    return n + r


def _merge(arr, lo, mid, hi):
    temp = arr[lo:mid]
    i, j, k = 0, mid, lo
    while i < len(temp) and j < hi:
        if arr[j] < temp[i]:
            arr[k] = arr[j]
            j += 1
        else:
            arr[k] = temp[i]
            i += 1
        k += 1
    arr[k:k + len(temp) - i] = temp[i:]


def sort_array(arr):
    n = len(arr)
    if n < 2:
        return arr
    min_run = _min_run(n)
    runs = []  # [start, length]

    def merge_at(i):
        s, l1 = runs[i]
        l2 = runs[i + 1][1]
        _merge(arr, s, s + l1, s + l1 + l2)
        runs[i] = [s, l1 + l2]
        del runs[i + 1]

    lo = 0
    while lo < n:
        hi = lo + 1
        if hi < n:
            if arr[hi] < arr[lo]:  # strictly descending: reverse
                while hi + 1 < n and arr[hi + 1] < arr[hi]:
                    hi += 1
                arr[lo:hi + 1] = arr[lo:hi + 1][::-1]
            else:
                while hi + 1 < n and arr[hi + 1] >= arr[hi]:
                    hi += 1
            hi += 1
        end = max(min(n, lo + min_run), hi)
        for i in range(hi, end):  # binary insertion sort
            key = arr[i]
            pos = bisect_right(arr, key, lo, i)
            arr[pos + 1:i + 1] = arr[pos:i]
            arr[pos] = key
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
    return arr
`,wg=`// Simplified Timsort: natural runs extended to MIN_RUN with binary
// insertion sort, merged via a stack that keeps run lengths balanced.

fn min_run(mut n: usize) -> usize {
    let mut r = 0;
    while n >= 32 {
        r |= n & 1;
        n >>= 1;
    }
    n + r
}

fn merge_runs(arr: &mut [i32], lo: usize, mid: usize, hi: usize) {
    let temp = arr[lo..mid].to_vec();
    let (mut i, mut j, mut k) = (0, mid, lo);
    while i < temp.len() && j < hi {
        if arr[j] < temp[i] {
            arr[k] = arr[j];
            j += 1;
        } else {
            arr[k] = temp[i];
            i += 1;
        }
        k += 1;
    }
    arr[k..k + temp.len() - i].copy_from_slice(&temp[i..]);
}

fn merge_at(arr: &mut [i32], runs: &mut Vec<(usize, usize)>, i: usize) {
    let ((s, l1), (_, l2)) = (runs[i], runs[i + 1]);
    merge_runs(arr, s, s + l1, s + l1 + l2);
    runs[i].1 = l1 + l2;
    runs.remove(i + 1);
}

pub fn sort_array(arr: &mut [i32]) {
    let n = arr.len();
    if n < 2 {
        return;
    }
    let minrun = min_run(n);
    let mut runs: Vec<(usize, usize)> = Vec::new(); // (start, len)
    let mut lo = 0;
    while lo < n {
        let mut hi = lo + 1;
        if hi < n {
            if arr[hi] < arr[lo] {
                // strictly descending: reverse
                while hi + 1 < n && arr[hi + 1] < arr[hi] {
                    hi += 1;
                }
                arr[lo..=hi].reverse();
            } else {
                while hi + 1 < n && arr[hi + 1] >= arr[hi] {
                    hi += 1;
                }
            }
            hi += 1;
        }
        let end = (lo + minrun).min(n).max(hi);
        for i in hi..end {
            // binary insertion sort
            let key = arr[i];
            let pos = lo + arr[lo..i].partition_point(|&x| x <= key);
            arr[pos..=i].rotate_right(1);
            arr[pos] = key;
        }
        runs.push((lo, end - lo));
        lo = end;
        while runs.len() > 1 {
            let m = runs.len();
            let (b, c) = (runs[m - 2].1, runs[m - 1].1);
            if (m >= 3 && runs[m - 3].1 <= b + c) || (m >= 4 && runs[m - 4].1 <= runs[m - 3].1 + b) {
                let at = if runs[m - 3].1 < c { m - 3 } else { m - 2 };
                merge_at(arr, &mut runs, at);
            } else if b <= c {
                merge_at(arr, &mut runs, m - 2);
            } else {
                break;
            }
        }
    }
    while runs.len() > 1 {
        let at = runs.len() - 2;
        merge_at(arr, &mut runs, at);
    }
}
`,pd=Object.assign({"../snippets/bitonic/c.c":uh,"../snippets/bitonic/cpp.cpp":ch,"../snippets/bitonic/go.go":dh,"../snippets/bitonic/java.java":fh,"../snippets/bitonic/python.py":ph,"../snippets/bitonic/rust.rs":hh,"../snippets/bogo/c.c":mh,"../snippets/bogo/cpp.cpp":gh,"../snippets/bogo/go.go":vh,"../snippets/bogo/java.java":yh,"../snippets/bogo/python.py":_h,"../snippets/bogo/rust.rs":wh,"../snippets/bubble/c.c":kh,"../snippets/bubble/cpp.cpp":xh,"../snippets/bubble/go.go":bh,"../snippets/bubble/java.java":Sh,"../snippets/bubble/python.py":Ph,"../snippets/bubble/rust.rs":jh,"../snippets/bucket/c.c":Eh,"../snippets/bucket/cpp.cpp":zh,"../snippets/bucket/go.go":Ch,"../snippets/bucket/java.java":Nh,"../snippets/bucket/python.py":Th,"../snippets/bucket/rust.rs":Ah,"../snippets/cocktail/c.c":Oh,"../snippets/cocktail/cpp.cpp":Ih,"../snippets/cocktail/go.go":Fh,"../snippets/cocktail/java.java":Lh,"../snippets/cocktail/python.py":Mh,"../snippets/cocktail/rust.rs":Rh,"../snippets/comb/c.c":$h,"../snippets/comb/cpp.cpp":Dh,"../snippets/comb/go.go":Uh,"../snippets/comb/java.java":Bh,"../snippets/comb/python.py":Vh,"../snippets/comb/rust.rs":Hh,"../snippets/counting/c.c":Wh,"../snippets/counting/cpp.cpp":qh,"../snippets/counting/go.go":Qh,"../snippets/counting/java.java":Gh,"../snippets/counting/python.py":Kh,"../snippets/counting/rust.rs":Yh,"../snippets/cycle/c.c":Zh,"../snippets/cycle/cpp.cpp":Xh,"../snippets/cycle/go.go":Jh,"../snippets/cycle/java.java":em,"../snippets/cycle/python.py":tm,"../snippets/cycle/rust.rs":nm,"../snippets/gnome/c.c":rm,"../snippets/gnome/cpp.cpp":im,"../snippets/gnome/go.go":am,"../snippets/gnome/java.java":om,"../snippets/gnome/python.py":sm,"../snippets/gnome/rust.rs":lm,"../snippets/heap/c.c":um,"../snippets/heap/cpp.cpp":cm,"../snippets/heap/go.go":dm,"../snippets/heap/java.java":fm,"../snippets/heap/python.py":pm,"../snippets/heap/rust.rs":hm,"../snippets/insertion/c.c":mm,"../snippets/insertion/cpp.cpp":gm,"../snippets/insertion/go.go":vm,"../snippets/insertion/java.java":ym,"../snippets/insertion/python.py":_m,"../snippets/insertion/rust.rs":wm,"../snippets/introsort/c.c":km,"../snippets/introsort/cpp.cpp":xm,"../snippets/introsort/go.go":bm,"../snippets/introsort/java.java":Sm,"../snippets/introsort/python.py":Pm,"../snippets/introsort/rust.rs":jm,"../snippets/merge/c.c":Em,"../snippets/merge/cpp.cpp":zm,"../snippets/merge/go.go":Cm,"../snippets/merge/java.java":Nm,"../snippets/merge/python.py":Tm,"../snippets/merge/rust.rs":Am,"../snippets/odd-even/c.c":Om,"../snippets/odd-even/cpp.cpp":Im,"../snippets/odd-even/go.go":Fm,"../snippets/odd-even/java.java":Lm,"../snippets/odd-even/python.py":Mm,"../snippets/odd-even/rust.rs":Rm,"../snippets/pancake/c.c":$m,"../snippets/pancake/cpp.cpp":Dm,"../snippets/pancake/go.go":Um,"../snippets/pancake/java.java":Bm,"../snippets/pancake/python.py":Vm,"../snippets/pancake/rust.rs":Hm,"../snippets/quick/c.c":Wm,"../snippets/quick/cpp.cpp":qm,"../snippets/quick/go.go":Qm,"../snippets/quick/java.java":Gm,"../snippets/quick/python.py":Km,"../snippets/quick/rust.rs":Ym,"../snippets/radix/c.c":Zm,"../snippets/radix/cpp.cpp":Xm,"../snippets/radix/go.go":Jm,"../snippets/radix/java.java":eg,"../snippets/radix/python.py":tg,"../snippets/radix/rust.rs":ng,"../snippets/selection/c.c":rg,"../snippets/selection/cpp.cpp":ig,"../snippets/selection/go.go":ag,"../snippets/selection/java.java":og,"../snippets/selection/python.py":sg,"../snippets/selection/rust.rs":lg,"../snippets/shell/c.c":ug,"../snippets/shell/cpp.cpp":cg,"../snippets/shell/go.go":dg,"../snippets/shell/java.java":fg,"../snippets/shell/python.py":pg,"../snippets/shell/rust.rs":hg,"../snippets/timsort/c.c":mg,"../snippets/timsort/cpp.cpp":gg,"../snippets/timsort/go.go":vg,"../snippets/timsort/java.java":yg,"../snippets/timsort/python.py":_g,"../snippets/timsort/rust.rs":wg});function kg(e,t){return pd[`../snippets/${e}/${t}`]}Object.keys(pd).length;const zo="sort-pedia:default-language";function xg(){const[e,t]=R.useState(fd());return d.jsxs("label",{className:"settings",children:[d.jsx("span",{children:"Default code language"}),d.jsx("select",{"aria-label":"Default code language","data-testid":"default-lang",value:e,onChange:n=>{const r=n.target.value;xr(r)&&(lh(r),t(r),window.dispatchEvent(new CustomEvent(zo,{detail:r})))},children:Fi.map(n=>d.jsx("option",{value:n.id,children:n.label},n.id))})]})}const bg={java:"Call: <Class>.sort(int[] a)",c:"Call: sort_array(int *a, int n)",cpp:"Call: sortArray(std::vector<int>& a)",go:"Call: sortArray(a []int)",rust:"Call: sort_array(&mut [i32])",python:"Call: sort_array(list)"};function Sg({algoId:e}){const[t,n]=R.useState(fd()),[r,i]=R.useState(!1);R.useEffect(()=>{const u=f=>{const m=f.detail;xr(m)&&n(m)};return window.addEventListener(zo,u),()=>window.removeEventListener(zo,u)},[]);const a=Fi.find(u=>u.id===t),o=kg(e,a.file)??"// snippet missing",s=R.useMemo(()=>Ul.highlight(o,Ul.languages[a.prism],a.prism),[o,a.prism]);return d.jsxs("div",{className:"code-panel",children:[d.jsxs("div",{className:"code-toolbar",children:[d.jsxs("label",{children:[d.jsx("span",{children:"Language"}),d.jsx("select",{"data-testid":"lang-select",value:t,onChange:u=>xr(u.target.value)&&n(u.target.value),children:Fi.map(u=>d.jsx("option",{value:u.id,children:u.label},u.id))})]}),d.jsx("button",{type:"button",className:"btn small",onClick:()=>{navigator.clipboard?.writeText(o).then(()=>{i(!0),setTimeout(()=>i(!1),1200)},()=>{})},children:r?"Copied":"Copy"})]}),d.jsxs("p",{className:"muted small",children:[bg[t]," · compiled and tested by scripts/verify-snippets.mjs"]}),d.jsx("pre",{className:`language-${a.prism}`,"data-testid":"code-block","data-lang":t,children:d.jsx("code",{className:`language-${a.prism}`,dangerouslySetInnerHTML:{__html:s}})})]})}const Bl=[{id:"n",label:"n (n + k)",f:e=>e,color:"var(--c1)"},{id:"nk",label:"n·k (k = 4)",f:e=>4*e,color:"var(--c2)"},{id:"nlogn",label:"n log n",f:e=>e*Math.log2(Math.max(e,1)),color:"var(--c3)"},{id:"n32",label:"n^1.5",f:e=>e**1.5,color:"var(--c4)"},{id:"nlog2n",label:"n log² n",f:e=>e*Math.log2(Math.max(e,1))**2,color:"var(--c5)"},{id:"n2",label:"n²",f:e=>e*e,color:"var(--c6)"},{id:"nfact",label:"n · n!",f:e=>{let t=e;for(let n=2;n<=e;n++)t*=n;return t},color:"var(--c7)"}],Dn=360,Ge=240,Ne=34,za=64,Xt=1200;function Pg({highlight:e}){const t=r=>Ne+(r-1)/(za-1)*(Dn-Ne-8),n=r=>Ge-Ne-Math.min(r,Xt)/Xt*(Ge-Ne-8);return d.jsxs("figure",{className:"chart","data-testid":"growth-chart",children:[d.jsxs("svg",{viewBox:`0 0 ${Dn} ${Ge}`,role:"img","aria-label":"Complexity growth curves",children:[[.25,.5,.75,1].map(r=>d.jsx("line",{className:"grid",x1:Ne,x2:Dn-8,y1:n(Xt*r),y2:n(Xt*r)},r)),[16,32,48,64].map(r=>d.jsx("line",{className:"grid",x1:t(r),x2:t(r),y1:8,y2:Ge-Ne},r)),d.jsx("line",{x1:Ne,y1:Ge-Ne,x2:Dn-8,y2:Ge-Ne,className:"axis"}),d.jsx("line",{x1:Ne,y1:8,x2:Ne,y2:Ge-Ne,className:"axis"}),d.jsxs("text",{x:Dn/2,y:Ge-6,className:"axis-label",textAnchor:"middle",children:["n (input size, 1–",za,")"]}),d.jsxs("text",{x:10,y:Ge/2,className:"axis-label",textAnchor:"middle",transform:`rotate(-90 10 ${Ge/2})`,children:["operations (clipped at ",Xt,")"]}),Bl.map(r=>{const i=[];for(let o=1;o<=za&&(i.push(`${t(o).toFixed(1)},${n(r.f(o)).toFixed(1)}`),!(r.f(o)>Xt));o++);const a=r.id===e;return d.jsx("polyline",{points:i.join(" "),fill:"none",style:{stroke:r.color},strokeWidth:a?4:1.5,opacity:a?1:.55,children:d.jsx("title",{children:r.label})},r.id)})]}),d.jsx("figcaption",{className:"legend",children:Bl.map(r=>d.jsxs("span",{className:r.id===e?"on":"",children:[d.jsx("i",{style:{background:r.color}})," ",r.label,r.id===e?" ← this algorithm (average)":""]},r.id))})]})}const Vl=-1e9,Hl=1e9;function jg(e,t){const n=e.trim();if(n==="")return{ok:!1,error:"Please enter at least one number."};const r=n.split(/[\s,]+/).filter(a=>a!=="");if(r.length===0)return{ok:!1,error:"Please enter at least one number."};if(r.length>t)return{ok:!1,error:`Too many numbers: ${r.length}. This algorithm accepts at most ${t}.`};const i=[];for(let a=0;a<r.length;a++){const o=r[a];if(!/^[+-]?\d+$/.test(o))return{ok:!1,error:`"${o}" (item ${a+1}) is not a whole number. Use integers separated by commas or spaces.`};const s=Number(o);if(!Number.isSafeInteger(s)||s<Vl||s>Hl)return{ok:!1,error:`"${o}" (item ${a+1}) is out of range. Values must be between ${Vl} and ${Hl}.`};i.push(s)}return{ok:!0,values:i}}function Eg(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const Ft=[{id:"random",label:"Random"},{id:"sorted",label:"Sorted"},{id:"reversed",label:"Reversed"},{id:"nearly",label:"Nearly sorted"},{id:"few",label:"Few unique"}];function hd(e,t,n=1,r=Math.max(t*4,100)){const i=Eg(n),a=()=>1+Math.floor(i()*r);switch(e){case"random":return Array.from({length:t},a);case"sorted":return Array.from({length:t},a).sort((o,s)=>o-s);case"reversed":return Array.from({length:t},a).sort((o,s)=>s-o);case"nearly":{const o=Array.from({length:t},a).sort((u,f)=>u-f),s=Math.max(1,Math.floor(t/20));for(let u=0;u<s&&t>1;u++){const f=Math.floor(i()*t),m=Math.floor(i()*t);[o[f],o[m]]=[o[m],o[f]]}return o}case"few":{const o=Math.min(5,Math.max(1,t)),s=Array.from({length:o},(u,f)=>Math.round((f+1)*r/o));return Array.from({length:t},()=>s[Math.floor(i()*o)])}}}class br{static __wrap(t){const n=Object.create(br.prototype);return n.__wbg_ptr=t,Wl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Wl.unregister(this),t}free(){const t=this.__destroy_into_raw();D.__wbg_sortresult_free(t,0)}get comparisons(){return D.sortresult_comparisons(this.__wbg_ptr)}get sorted(){const t=D.sortresult_sorted(this.__wbg_ptr);var n=ql(t[0],t[1]).slice();return D.__wbindgen_free(t[0],t[1]*4,4),n}get swaps(){return D.sortresult_swaps(this.__wbg_ptr)}get trace(){const t=D.sortresult_trace(this.__wbg_ptr);var n=ql(t[0],t[1]).slice();return D.__wbindgen_free(t[0],t[1]*4,4),n}get truncated(){return D.sortresult_truncated(this.__wbg_ptr)!==0}get writes(){return D.sortresult_writes(this.__wbg_ptr)}}Symbol.dispose&&(br.prototype[Symbol.dispose]=br.prototype.free);function zg(e,t,n){const r=gd(e,D.__wbindgen_malloc,D.__wbindgen_realloc),i=Gt,a=md(t,D.__wbindgen_malloc),o=Gt,s=D.sort(r,i,a,o,n);if(s[2])throw vd(s[1]);return br.__wrap(s[0])}function Cg(e,t){const n=gd(e,D.__wbindgen_malloc,D.__wbindgen_realloc),r=Gt,i=md(t,D.__wbindgen_malloc),a=Gt,o=D.sort_only(n,r,i,a);if(o[2])throw vd(o[1]);return o[0]}function Ng(){return{__proto__:null,"./sortcore_bg.js":{__proto__:null,__wbg_Error_30c8987f7c2ed4e2:function(t,n){return Error(Ca(t,n))},__wbg___wbindgen_throw_41e9ee4f547fc59a:function(t,n){throw new Error(Ca(t,n))},__wbindgen_generic_0000000000000001:function(t,n){return Ca(t,n)},__wbindgen_init_externref_table:function(){const t=D.__wbindgen_externrefs,n=t.grow(4);t.set(0,void 0),t.set(n+0,void 0),t.set(n+1,null),t.set(n+2,!0),t.set(n+3,!1)}}}}const Wl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>D.__wbg_sortresult_free(e,1));function ql(e,t){return e=e>>>0,Tg().subarray(e/4,e/4+t)}let Wn=null;function Tg(){return(Wn===null||Wn.byteLength===0)&&(Wn=new Int32Array(D.memory.buffer)),Wn}function Ca(e,t){return Ig(e>>>0,t)}let qn=null;function Ag(){return(qn===null||qn.byteLength===0)&&(qn=new Uint32Array(D.memory.buffer)),qn}let Qn=null;function li(){return(Qn===null||Qn.byteLength===0)&&(Qn=new Uint8Array(D.memory.buffer)),Qn}function md(e,t){const n=t(e.length*4,4)>>>0;return Ag().set(e,n/4),Gt=e.length,n}function gd(e,t,n){if(n===void 0){const s=ir.encode(e),u=t(s.length,1)>>>0;return li().subarray(u,u+s.length).set(s),Gt=s.length,u}let r=e.length,i=t(r,1)>>>0;const a=li();let o=0;for(;o<r;o++){const s=e.charCodeAt(o);if(s>127)break;a[i+o]=s}if(o!==r){o!==0&&(e=e.slice(o)),i=n(i,r,r=o+e.length*3,1)>>>0;const s=li().subarray(i+o,i+r),u=ir.encodeInto(e,s);o+=u.written,i=n(i,r,o,1)>>>0}return Gt=o,i}function vd(e){const t=D.__wbindgen_externrefs.get(e);return D.__externref_table_dealloc(e),t}let ui=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});ui.decode();const Og=2146435072;let Na=0;function Ig(e,t){return Na+=t,Na>=Og&&(ui=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),ui.decode(),Na=t),ui.decode(li().subarray(e,e+t))}const ir=new TextEncoder;"encodeInto"in ir||(ir.encodeInto=function(e,t){const n=ir.encode(e);return t.set(n),{read:e.length,written:n.length}});let Gt=0,D;function Fg(e,t){return D=e.exports,Wn=null,qn=null,Qn=null,D.__wbindgen_start(),D}async function Lg(e,t){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(i){if(n(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,t)}else{const r=await WebAssembly.instantiate(e,t);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function n(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function Mg(e){if(D!==void 0)return D;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/sort-pedia/assets/sortcore_bg-og0z-ZYF.wasm",import.meta.url));const t=Ng();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await Lg(await e,t);return Fg(n)}let Ta=null;function js(){return Ta||(Ta=Mg()),Ta}async function Ql(e,t,n){await js();const r=Int32Array.from(t),i=performance.now(),a=zg(e,r,n),o=performance.now()-i;try{return{sorted:Array.from(a.sorted),trace:n?a.trace:null,comparisons:a.comparisons,swaps:a.swaps,writes:a.writes,truncated:a.truncated,ms:o}}finally{a.free()}}async function Rg(e,t){await js();const n=performance.now();return Cg(e,t),performance.now()-n}const Aa={random:"var(--s-random)",sorted:"var(--s-sorted)",reversed:"var(--s-reversed)",nearly:"var(--s-nearly)",few:"var(--s-few)"};async function $g(e,t){let n=1/0,r=0,i=0;for(;i<5&&(i===0||r<30);){const a=await Rg(e,Int32Array.from(t));n=Math.min(n,a),r+=a,i++}return n}function Dg({algo:e}){const[t,n]=R.useState([]),[r,i]=R.useState("idle"),[a,o]=R.useState("");async function s(){i("running"),n([]);try{await js();const _=[];for(const x of e.benchSizes){const p={n:x};for(const l of Ft)o(`n = ${x.toLocaleString()}, ${l.label.toLowerCase()}…`),await new Promise(c=>setTimeout(c,0)),p[l.id]=await $g(e.id,hd(l.id,x,x+7));_.push(p),n([..._])}i("done"),o("")}catch(_){i("error"),o(String(_ instanceof Error?_.message:_))}}const u=360,f=220,m=40,y=Math.max(.01,...t.flatMap(_=>Ft.map(x=>_[x.id]??0))),v=e.benchSizes[e.benchSizes.length-1],P=_=>m+_/v*(u-m-10),E=_=>f-m-_/y*(f-m-10);return d.jsxs("div",{className:"bench","data-testid":"benchmark",children:[d.jsxs("p",{className:"muted small",children:["Sizes ",e.benchSizes.map(_=>_.toLocaleString()).join(", ")," × 5 input shapes, timed with performance.now() around the WASM call in your browser (best of up to 5 runs)."]}),d.jsx("button",{type:"button",className:"btn",onClick:s,disabled:r==="running","data-testid":"bench-run",children:r==="running"?"Running…":t.length?"Run again":"Run benchmark"}),a&&d.jsx("p",{className:r==="error"?"error":"muted small",children:a}),t.length>0&&d.jsxs(d.Fragment,{children:[d.jsxs("figure",{className:"chart",children:[d.jsxs("svg",{viewBox:`0 0 ${u} ${f}`,role:"img","aria-label":"Benchmark chart",children:[[.25,.5,.75,1].map(_=>d.jsx("line",{className:"grid",x1:m,x2:u-10,y1:E(y*_),y2:E(y*_)},_)),d.jsx("line",{x1:m,y1:f-m,x2:u-10,y2:f-m,className:"axis"}),d.jsx("line",{x1:m,y1:10,x2:m,y2:f-m,className:"axis"}),d.jsx("text",{x:u/2,y:f-8,className:"axis-label",textAnchor:"middle",children:"n"}),d.jsxs("text",{x:4,y:14,className:"axis-label",children:[y.toFixed(2)," ms"]}),Ft.map(_=>d.jsx("polyline",{fill:"none",style:{stroke:Aa[_.id]},strokeWidth:2,points:t.filter(x=>x[_.id]!==void 0).map(x=>`${P(x.n).toFixed(1)},${E(x[_.id]).toFixed(1)}`).join(" ")},_.id)),Ft.flatMap(_=>t.filter(x=>x[_.id]!==void 0).map(x=>d.jsx("circle",{cx:P(x.n),cy:E(x[_.id]),r:3,style:{fill:Aa[_.id]},children:d.jsx("title",{children:`${_.label}, n = ${x.n.toLocaleString()}: ${x[_.id].toFixed(3)} ms`})},`${_.id}-${x.n}`)))]}),d.jsx("figcaption",{className:"legend",children:Ft.map(_=>d.jsxs("span",{children:[d.jsx("i",{style:{background:Aa[_.id]}})," ",_.label]},_.id))})]}),d.jsx("div",{className:"table-wrap",children:d.jsxs("table",{className:"bench-table","data-testid":"bench-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"n"}),Ft.map(_=>d.jsx("th",{children:_.label},_.id))]})}),d.jsx("tbody",{children:t.map(_=>d.jsxs("tr",{children:[d.jsx("td",{children:_.n.toLocaleString()}),Ft.map(x=>d.jsx("td",{children:_[x.id]?.toFixed(3)??"…"},x.id))]},_.n))})]})}),d.jsx("p",{className:"muted small",children:"Times in milliseconds."})]})]})}const Sr=0,En=1,Pr=2,Gl=3,Ug=4,Li=5,yd=6,Co=7,No=8,Oa=(e,t)=>e+Math.floor((t-e)/2),Ia=["lo","hi","mid","pivot","lessEnd","greaterStart","i","storePos","current","hole","key","gap","runStart","fillPos","minIndex","sortedFrom","writePos","rightPos","heapEnd","node","child","left","right","pairStart","gnomePos","cycleStart","targetPos","lastUnsorted","maxIndex"];function Gn(e){return e.replace(/([A-Z])/g," $1").toLowerCase()}const Bg={lo:"first index of the range being worked on",hi:"last index of the range being worked on",mid:"last index of the left half: the left half is lo..mid, the right half is mid + 1..hi",pivot:"position of the pivot value everything is compared with",lessEnd:'end of the "less than pivot" block: everything left of it is smaller than the pivot',greaterStart:'start of the "greater than pivot" block: everything right of it is larger than the pivot',i:"the current index: the element being examined right now",storePos:"next slot for an element smaller than the pivot",current:"the element being inserted into the sorted part on its left",hole:"the empty slot the key moves through while larger elements shift right",key:"where the value being inserted (the key) currently sits / will be placed",gap:"distance between the two elements being compared",runStart:"start of the run being built or extended",fillPos:"the slot being filled with the next smallest value",minIndex:"index of the smallest value found so far in the unsorted part",sortedFrom:"first index of the sorted tail: from here to the end is final",writePos:"next output slot being written",rightPos:"next unused element of the right half",heapEnd:"last element still inside the heap; everything after it is sorted",node:"the parent being sifted down",child:"the larger child the parent is compared with",left:"left element of the compared pair",right:"right element of the compared pair (left + gap)",pairStart:"first element of the pair being compared",gnomePos:"where the gnome stands: it compares this element with the one on its left",cycleStart:"start of the cycle being rotated into place",targetPos:"final position of the item being carried (number of smaller elements)",lastUnsorted:"last slot of the unsorted part: the maximum gets flipped here",maxIndex:"index of the largest value found so far in the unsorted part"},Vg={cocktail:{lo:"first unsorted index (everything left of it is final)",hi:"last unsorted index (everything right of it is final)"},merge:{lo:"first index of the current recursive call's range",hi:"last index of the current recursive call's range (the first call has lo = 0, hi = n - 1)"},quick:{i:"the current index: the element being compared with the pivot right now"},timsort:{key:"the element being binary-inserted into the run"}};function Hg(e,t){return Vg[e]?.[t]??Bg[t]??""}const _d=new Set(["gap"]),Wg={insertion:"key",shell:"key",timsort:"key",introsort:"key",bucket:"key",merge:"left-run value",cycle:"item"},wd=e=>e===yd||e===Co||e===No,qg=e=>e===Sr||e===En||e===Pr||e===Li||wd(e);function Qg(e,t,n){const r=t[3*n],i=t[3*n+1],a=t[3*n+2];if(r===En){const o=e[i];e[i]=e[a],e[a]=o}else r===Pr&&(e[i]=a);return{op:r,i,j:a}}const Kr=256;class Gg{constructor(t,n,r=""){this.input=t,this.trace=n,this.algoId=r,this.steps=[],this.checkpoints=[],this.step=0,this.last=null,this.caption="";const i=new Set;for(let a=0;a<n.length/3;a++)qg(n[3*a])?this.steps.push(a):n[3*a]===Gl&&n[3*a+2]>=0&&i.add(Ia[n[3*a+1]]);this.pointerNamesUsed=Ia.filter(a=>i.has(a)),this.total=this.steps.length,this.cur={arr:[...t],ptrs:new Map,sorted:new Uint8Array(t.length),cmp:0,swaps:0,writes:0,raw:0,stack:[],range:null},this.checkpoints.push(this.clone(this.cur))}get array(){return this.cur.arr}get pointers(){return this.cur.ptrs}get sortedMask(){return this.cur.sorted}get comparisons(){return this.cur.cmp}get swaps(){return this.cur.swaps}get writes(){return this.cur.writes}get done(){return this.step>=this.total}get activeRange(){return this.cur.range}get callStack(){return this.cur.stack}get depth(){return this.cur.stack.length-1}clone(t){return{arr:[...t.arr],ptrs:new Map(t.ptrs),sorted:t.sorted.slice(),cmp:t.cmp,swaps:t.swaps,writes:t.writes,raw:t.raw,stack:t.stack.map(n=>[n[0],n[1]]),range:t.range?[t.range[0],t.range[1]]:null}}advance(t){const n=this.cur,r=this.trace,i=this.step+1<this.total?this.steps[this.step]:r.length/3-1,a=this.steps[this.step];for(;n.raw<=i;n.raw++){const o=n.raw,s=r[3*o],u=r[3*o+1],f=r[3*o+2];if(s===Gl){const m=Ia[u];f<0?n.ptrs.delete(m):n.ptrs.set(m,f)}else s===Ug?n.sorted.fill(1,u,f):o===a&&(t&&(this.caption=this.describe(s,u,f)),s===Sr||s===Li?n.cmp++:s===En?n.swaps++:s===Pr&&n.writes++,Qg(n.arr,r,o),wd(s)&&this.enterCall(n,s,u,f),this.last={op:s,i:u,j:f})}this.step++,this.step%Kr===0&&this.checkpoints.length===this.step/Kr&&this.checkpoints.push(this.clone(n)),this.done&&(n.ptrs.clear(),n.stack=[],n.range=null,this.caption="Done: every element is in its final sorted position.",this.last=null)}enterCall(t,n,r,i){const a=o=>o[0]===r&&o[1]===i;if(n===No)for(;t.stack.length&&!a(t.stack[t.stack.length-1]);)t.stack.pop();else{for(;t.stack.length;){const o=t.stack[t.stack.length-1];if(o[0]<=r&&i<=o[1]&&!a(o))break;t.stack.pop()}t.stack.push([r,i])}t.range=[r,i];for(const o of["writePos","rightPos"])t.ptrs.delete(o);t.ptrs.set("lo",r),t.ptrs.set("hi",i),n===Co?t.ptrs.delete("mid"):t.ptrs.set("mid",Oa(r,i))}forward(){return this.done?!1:(this.advance(!0),!0)}back(){return this.step===0?!1:(this.seek(this.step-1),!0)}seek(t){if(t=Math.max(0,Math.min(this.total,Math.floor(t))),t<this.step||t===0){const n=Math.min(Math.floor(t/Kr),this.checkpoints.length-1);this.cur=this.clone(this.checkpoints[n]),this.step=n*Kr,this.last=null,this.caption=t===0?"Ready. Press Play or Step forward to begin.":""}for(;this.step<t;)this.advance(this.step===t-1)}label(t){const n=[];for(const[r,i]of this.cur.ptrs)i===t&&!_d.has(r)&&n.push(Gn(r));return n.length?` (${n.join(", ")})`:""}describe(t,n,r){const i=this.cur.arr,a=f=>`arr[${f}]=${i[f]}${this.label(f)}`,o=(f,m)=>f<m?"<":f>m?">":"=",s=this.cur.ptrs.get("gap"),u=s!==void 0?` [gap ${s}]`:"";switch(t){case Sr:{const f=this.cur.ptrs.get("pivot");if(f!==void 0&&(n===f||r===f)&&n!==r){const m=n===f?r:n,y=o(i[m],i[f]),v=this.algoId==="quick"?y==="<"?'it joins the "less" block (swap to less end; less end and i move right)':y===">"?'it joins the "greater" block (swap to greater start; greater start moves left)':"it stays with the pivot copies (i moves right)":y==="<"?"it goes left of the pivot":y===">"?"it goes right of the pivot":"it equals the pivot";return`Compare ${a(m)} with pivot ${i[f]}: ${i[m]} ${y} ${i[f]}, so ${v}.`}return`Compare ${a(n)} with ${a(r)}: ${i[n]} ${o(i[n],i[r])} ${i[r]}.${u}`}case Li:{const f=Wg[this.algoId]??"held value",m=o(r,i[n]),y=this.algoId==="merge"?i[n]<r?`take the right value ${i[n]}`:`take the left value ${r}`:m==="<"?`${i[n]} must shift right`:"stop here";return`Compare ${f} ${r} with ${a(n)}: ${r} ${m} ${i[n]}, so ${y}.${u}`}case En:return`Swap ${a(n)} and ${a(r)}.`;case Pr:return`Write ${r} into arr[${n}]${this.label(n)} (was ${i[n]}).`;case yd:{const f=Oa(n,r);return`Split range lo=${n}..hi=${r} at mid=${f}: sort the left half ${n}..${f} first, then the right half ${f+1}..${r}.`}case Co:return`Range ${n}..${r} has one element, already sorted.`;case No:{const f=Oa(n,r);return`Merge ${n}..${f} and ${f+1}..${r} into one sorted range ${n}..${r}.`}default:return""}}}const Mi=.25,kd=200,Es=1e3,Kg=2,Yg=[{label:"Very slow",sps:.5},{label:"Slow",sps:2},{label:"Normal",sps:10},{label:"Fast",sps:60}],xd=Math.log(kd/Mi);function Zg(e){const t=Math.min(1,Math.max(0,e/Es)),n=Mi*Math.exp(t*xd);return Math.round(n*100)/100}function Xg(e){const t=Math.min(kd,Math.max(Mi,e));return Math.round(Math.log(t/Mi)/xd*Es)}function Jg(e){const t=1e3/e;if(t>=16)return{delayMs:t,stepsPerTick:1};const n=Math.ceil(16/t);return{delayMs:n*t,stepsPerTick:n}}function Kl(e){return e<1?`${e.toFixed(2)} steps/s`:e<10?`${e.toFixed(1)} steps/s`:`${Math.round(e)} steps/s`}function ev({algoId:e,input:t,trace:n,sorted:r,truncated:i}){const a=R.useMemo(()=>new Gg(t,n,e),[t,n,e]),[,o]=R.useState(0),s=()=>o(j=>j+1),[u,f]=R.useState(!0),[m,y]=R.useState(Kg),v=R.useRef(null),[P,E]=R.useState(600);R.useEffect(()=>{const j=v.current;if(!j||typeof ResizeObserver>"u")return;const N=new ResizeObserver(()=>E(j.clientWidth||600));return N.observe(j),()=>N.disconnect()},[]),R.useEffect(()=>{a.seek(0),s()},[a]),R.useEffect(()=>{if(!u)return;if(a.done){f(!1);return}const{delayMs:j,stepsPerTick:N}=Jg(m),q=window.setTimeout(()=>{for(let $=0;$<N&&a.forward();$++);s()},j);return()=>window.clearTimeout(q)});const _=()=>{f(!1),a.forward(),s()},x=()=>{f(!1),a.back(),s()},p=()=>{a.done?(a.seek(0),f(!0)):f(j=>!j),s()};R.useEffect(()=>{const j=N=>{const q=N.target;if(!(!v.current||N.altKey||N.ctrlKey||N.metaKey)&&!(q&&(q.tagName==="TEXTAREA"||q.tagName==="SELECT"||q.tagName==="INPUT"||q.isContentEditable)))if(N.key===" "||N.code==="Space"){if(q?.tagName==="BUTTON")return;N.preventDefault(),p()}else N.key==="ArrowRight"?(N.preventDefault(),_()):N.key==="ArrowLeft"&&(N.preventDefault(),x())};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)});const l=a.array,c=l.length,h=Math.min(...t,...r),g=Math.max(...t,...r),w=j=>g===h?60:6+(j-h)/(g-h)*94,k=a.last,b=a.done,C=b&&l.every((j,N)=>j===r[N]),A=a.sortedMask,M=a.activeRange,ne=a.callStack,qe=j=>{if(b)return"bar done";let N=A[j]?"bar sorted":"bar";return M&&(j<M[0]||j>M[1])&&(N+=" dim"),k&&(j===k.i||(k.op===Sr||k.op===En)&&j===k.j)&&(N+=k.op===Sr||k.op===Li?" cmp":k.op===En?" swap":k.op===Pr?" set":""),N},Je=new Map,Ot=[];for(const[j,N]of a.pointers){if(_d.has(j)){Ot.push(`${Gn(j)} = ${N}`);continue}N<0||N>=c||Je.set(N,[...Je.get(N)??[],j])}const It=c<=32,ct=Math.max(1,(P-8)/Math.max(1,c)),z=[],O=[];for(const[j,N]of[...Je.entries()].sort((q,$)=>q[0]-$[0])){const q=N.map(Gn).join(", "),$=(q.length*7+8)/2,ue=Math.max(2*$,P-10),re=Math.min(Math.max((j+.5)*ct,$),ue-$);let ye=O.findIndex(Tn=>Tn+3<re-$);ye===-1&&(ye=O.length,O.push(0)),O[ye]=re+$,z.push({idx:j,text:q,names:N,row:ye,center:re})}const I=Math.max(1,O.length);return d.jsxs("div",{className:"viz","data-testid":"viz",ref:v,children:[ne.length>0&&d.jsxs("div",{className:"callstack small","data-testid":"viz-callstack","aria-label":"Recursion call stack",children:[d.jsxs("span",{className:"callstack-depth","data-testid":"viz-depth",children:["depth ",a.depth]}),ne.map((j,N)=>d.jsxs("span",{className:"call-wrap",children:[N>0&&d.jsx("span",{className:"call-sep","aria-hidden":"true",children:"›"}),d.jsxs("span",{className:N===ne.length-1?"call current":"call","data-range":`${j[0]}..${j[1]}`,children:[j[0],"..",j[1]]})]},N))]}),d.jsx("div",{className:"bars","data-testid":"viz-bars",children:l.map((j,N)=>d.jsx("div",{className:qe(N),style:{height:`${w(j)}%`},"data-value":j,"data-tip":`arr[${N}] = ${j}`,children:It&&d.jsx("span",{className:"bar-val",children:j})},N))}),d.jsx("div",{className:"pointers","data-testid":"viz-pointers","aria-label":"Pointers",style:{height:`${.9+I*1.35}rem`},children:z.map(({idx:j,names:N,row:q,center:$})=>d.jsxs("div",{className:"ptr",style:{left:`${$+4}px`,top:`${q*1.35}rem`},"data-index":j,children:[d.jsx("span",{className:"ptr-arrow","aria-hidden":"true",children:"▲"}),d.jsx("span",{className:"ptr-name",children:N.map((ue,re)=>d.jsxs("span",{className:`ptr-${ue}`,"data-ptr":ue,children:[re?", ":"",Gn(ue)]},ue))})]},j))}),Ot.length>0&&d.jsx("div",{className:"small muted","data-testid":"viz-value-ptrs",children:Ot.join(" · ")}),d.jsx("p",{className:"viz-caption","data-testid":"viz-caption","aria-live":"polite",children:a.caption||" "}),d.jsxs("div",{className:"viz-counters small","data-testid":"viz-status",children:[d.jsxs("span",{children:["Step ",d.jsx("b",{"data-testid":"viz-step-num",children:a.step.toLocaleString()})," / ",a.total.toLocaleString()]}),d.jsxs("span",{children:["Comparisons ",d.jsx("b",{children:a.comparisons.toLocaleString()})]}),d.jsxs("span",{children:["Swaps ",d.jsx("b",{children:a.swaps.toLocaleString()})]}),d.jsxs("span",{children:["Writes ",d.jsx("b",{children:a.writes.toLocaleString()})]}),b&&d.jsx("span",{children:C?"✓ sorted":i?"trace truncated (too many operations to record)":"✗ mismatch"})]}),d.jsxs("label",{className:"scrub",children:[d.jsx("span",{className:"sr-only",children:"Progress"}),d.jsx("input",{type:"range",min:0,max:a.total,value:a.step,"aria-label":"Progress (step)","data-testid":"viz-scrub",onChange:j=>{f(!1),a.seek(Number(j.target.value)),s()}})]}),d.jsxs("div",{className:"viz-controls",children:[d.jsx("button",{type:"button",className:"btn small",onClick:()=>{f(!1),a.seek(0),s()},"data-testid":"viz-reset","aria-label":"Reset to start",children:"⏮ Reset"}),d.jsx("button",{type:"button",className:"btn small",onClick:x,disabled:a.step===0,"data-testid":"viz-back","aria-label":"Step back",children:"◀ Back"}),d.jsx("button",{type:"button",className:"btn small primary",onClick:p,"data-testid":"viz-play",children:u?"❚❚ Pause":b?"↻ Replay":"▶ Play"}),d.jsx("button",{type:"button",className:"btn small",onClick:_,disabled:b,"data-testid":"viz-step","aria-label":"Step forward",children:"Step ▶"}),d.jsx("button",{type:"button",className:"btn small",onClick:()=>{f(!1),a.seek(a.total),s()},disabled:b,"data-testid":"viz-end","aria-label":"Jump to end",children:"End ⏭"})]}),d.jsxs("div",{className:"speed-row",children:[d.jsx("div",{className:"presets",role:"group","aria-label":"Speed presets",children:Yg.map(j=>d.jsx("button",{type:"button",className:`btn small ${Math.abs(m-j.sps)<1e-9?"active":""}`,"aria-pressed":Math.abs(m-j.sps)<1e-9,onClick:()=>y(j.sps),"data-testid":`speed-${j.label.toLowerCase().replace(" ","-")}`,children:j.label},j.label))}),d.jsxs("label",{className:"speed",children:[d.jsx("span",{children:"Speed"}),d.jsx("input",{type:"range",min:0,max:Es,value:Xg(m),onChange:j=>y(Zg(Number(j.target.value))),"data-testid":"viz-speed","aria-label":"Animation speed (steps per second)","aria-valuetext":Kl(m)}),d.jsx("output",{"data-testid":"viz-speed-value",children:Kl(m)})]})]}),a.pointerNamesUsed.length>0&&d.jsxs("details",{className:"ptr-legend small",open:!0,"data-testid":"viz-ptr-legend",children:[d.jsx("summary",{children:"What the pointers mean"}),d.jsx("dl",{children:a.pointerNamesUsed.map(j=>d.jsxs("div",{className:a.pointers.has(j)?"active":"","data-legend":j,children:[d.jsx("dt",{className:`ptr-${j}`,children:Gn(j)}),d.jsx("dd",{children:Hg(e,j)})]},j))})]}),d.jsxs("div",{className:"viz-legend small",children:[d.jsxs("span",{children:[d.jsx("i",{className:"sw cmp"})," compare"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw swap"})," swap"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw set"})," write"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw sorted"})," final position"]}),d.jsx("span",{className:"muted",children:"Keys: Space play/pause · ← back · → forward"})]})]})}const Jt=e=>e.toLocaleString();function tv({algo:e}){const t=Math.min(e.id==="bogo"?6:24,e.maxViz),[n,r]=R.useState(""),[i,a]=R.useState(""),[o,s]=R.useState(null),[u,f]=R.useState(null),[m,y]=R.useState(!1);async function v(x){y(!0),a("");try{const p=await Ql(e.id,x,!1);s({...p,input:x})}catch(p){a(p instanceof Error?p.message:String(p)),s(null)}finally{y(!1)}}function P(x){const p=jg(n,x);return p.ok?p.values:(a(p.error),null)}async function E(){const x=hd("random",t,Date.now()%1e5,99);r(x.join(", ")),f(null),await v(x)}async function _(){const x=P(e.maxViz);if(x){y(!0),a("");try{const p=await Ql(e.id,x,!0);s({...p,input:x}),f({input:x,trace:p.trace,sorted:p.sorted,truncated:p.truncated,key:Date.now()})}catch(p){a(p instanceof Error?p.message:String(p))}finally{y(!1)}}}return d.jsxs("div",{className:"playground","data-testid":"playground",children:[d.jsxs("p",{className:"muted small",children:["Enter whole numbers separated by commas or spaces (values between -1,000,000,000 and 1,000,000,000). Limits for ",e.name,": up to ",Jt(e.maxInput)," numbers for a plain run, up to ",e.maxViz," for the visualization.",e.id==="counting"&&" Counting sort also needs max - min < 1,000,000."]}),d.jsx("label",{className:"sr-only",htmlFor:"pg-input",children:"Numbers to sort"}),d.jsx("textarea",{id:"pg-input","data-testid":"pg-input",rows:3,value:n,placeholder:"e.g. 5, 3, 9, -2, 7 1 4",onChange:x=>r(x.target.value),"aria-invalid":!!i,"aria-describedby":"pg-error"}),d.jsxs("div",{className:"btn-row",children:[d.jsx("button",{type:"button",className:"btn",onClick:E,disabled:m,"data-testid":"pg-sample",children:"Sort sample data"}),d.jsx("button",{type:"button",className:"btn",onClick:()=>{const x=P(e.maxInput);x&&(f(null),v(x))},disabled:m,"data-testid":"pg-run",children:"Run (no GUI)"}),d.jsx("button",{type:"button",className:"btn primary",onClick:_,disabled:m,"data-testid":"pg-viz",children:"Run with visualization"})]}),d.jsx("p",{id:"pg-error",className:"error",role:"alert","data-testid":"pg-error",children:i}),o&&!i&&d.jsxs("div",{className:"result","data-testid":"pg-result",children:[d.jsxs("div",{className:"stats",children:[d.jsxs("span",{children:[d.jsx("b",{children:"Time"})," ",d.jsxs("span",{"data-testid":"pg-time",children:[o.ms<.1?o.ms.toFixed(3):o.ms.toFixed(2)," ms"]})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Comparisons"})," ",d.jsx("span",{"data-testid":"pg-cmp",children:Jt(o.comparisons)})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Swaps"})," ",d.jsx("span",{"data-testid":"pg-swaps",children:Jt(o.swaps)})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Writes"})," ",Jt(o.writes)]}),d.jsxs("span",{children:[d.jsx("b",{children:"n"})," ",Jt(o.input.length)]})]}),d.jsx("div",{className:"out-label",children:"Sorted output"}),d.jsx("output",{className:"output","data-testid":"pg-output",children:o.sorted.length>2e3?`${o.sorted.slice(0,2e3).join(", ")}, … (${Jt(o.sorted.length-2e3)} more)`:o.sorted.join(", ")}),d.jsx("p",{className:"muted small",children:"Swaps = element exchanges; writes = single-element stores (used by merge, insertion, shell, counting, radix, bucket, cycle and Timsort)."})]}),u&&d.jsx(ev,{algoId:e.id,input:u.input,trace:u.trace,sorted:u.sorted,truncated:u.truncated},u.key)]})}function nv({algo:e}){const t=jn[e.rank-2],n=jn[e.rank];return d.jsxs("article",{className:"algo","data-testid":"algo-page",children:[d.jsxs("nav",{className:"crumbs",children:[d.jsx("a",{href:"#/",children:"← Index"}),d.jsx("span",{className:"spacer"}),t&&d.jsxs("a",{href:`#/algo/${t.id}`,children:["‹ ",t.name]}),n&&d.jsxs("a",{href:`#/algo/${n.id}`,children:[n.name," ›"]})]}),d.jsxs("h1",{children:[d.jsxs("span",{className:"rank-pill",children:["#",e.rank]})," ",e.name]}),d.jsx("p",{className:"lead",children:e.summary}),d.jsxs("div",{className:"two-col",children:[d.jsxs("section",{className:"card","aria-label":"Algorithm explanation",children:[d.jsx("h2",{children:"How it works"}),d.jsx("p",{className:"notation","data-testid":"notation",children:rh}),d.jsx("ol",{className:"steps",children:e.steps.map(r=>d.jsx("li",{children:r},r))}),d.jsx("h3",{children:"Pseudocode"}),d.jsx("pre",{className:"pseudo",children:e.pseudocode})]}),d.jsxs("section",{className:"card","aria-label":"Code",children:[d.jsx("h2",{children:"Code"}),d.jsx(Sg,{algoId:e.id})]})]}),d.jsxs("section",{className:"card","aria-labelledby":"info-h",children:[d.jsx("h2",{id:"info-h",children:"At a glance"}),d.jsx("div",{className:"table-wrap",children:d.jsx("table",{className:"info","data-testid":"info-table",children:d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("th",{children:"Time (best)"}),d.jsx("td",{children:e.best})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Time (average)"}),d.jsx("td",{children:e.avg})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Time (worst)"}),d.jsx("td",{children:e.worst})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Space"}),d.jsx("td",{children:e.space})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Stable"}),d.jsx("td",{children:e.stable?"Yes":"No"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"In-place"}),d.jsx("td",{children:e.inPlace?"Yes":"No"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Family"}),d.jsx("td",{children:e.family})]})]})})}),d.jsxs("div",{className:"facts",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"Most suitable when"}),d.jsx("p",{children:e.suitable})]}),d.jsxs("div",{children:[d.jsx("h3",{children:"Performs badly when"}),d.jsx("p",{children:e.bad})]}),d.jsxs("div",{children:[d.jsx("h3",{children:"Practical uses"}),d.jsx("ul",{children:e.uses.map(r=>d.jsx("li",{children:r},r))})]}),d.jsxs("div",{children:[d.jsxs("h3",{children:["Why rank #",e.rank]}),d.jsx("p",{children:e.why})]})]})]}),d.jsxs("div",{className:"two-col",children:[d.jsxs("section",{className:"card",children:[d.jsx("h2",{children:"Complexity growth"}),d.jsx(Pg,{highlight:e.growth})]}),d.jsxs("section",{className:"card",children:[d.jsx("h2",{children:"Measured benchmark (WASM)"}),d.jsx(Dg,{algo:e})]})]}),d.jsxs("section",{className:"card","aria-labelledby":"play-h",children:[d.jsx("h2",{id:"play-h",children:"Playground"}),d.jsx(tv,{algo:e})]})]})}const ci=6,To=18,bd="sort-pedia:theme",rv=["auto","light","dark"],zs=e=>typeof e=="string"&&rv.includes(e);function iv(e){const t=e.getHours();return t>=ci&&t<To?"light":"dark"}function av(e,t=new Date){return e==="auto"?iv(t):e}function ov(e){const t=new Date(e.getTime());t.setMinutes(0,0,0);const n=e.getHours();return n<ci?t.setHours(ci):n<To?t.setHours(To):(t.setDate(t.getDate()+1),t.setHours(ci)),Math.max(0,t.getTime()-e.getTime())}function Sd(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function Pd(){const e=Sd()?.getItem(bd);return zs(e)?e:"auto"}function sv(e){if(!zs(e))throw new Error(`Unknown theme mode: ${String(e)}`);Sd()?.setItem(bd,e)}function lv(e,t=document.documentElement){t.dataset.theme=e,t.style.colorScheme=e}function uv(e=Pd,t=()=>new Date){let n;const r=()=>{clearTimeout(n);const a=e(),o=t();lv(av(a,o)),a==="auto"&&(n=setTimeout(r,ov(o)+1e3))},i=()=>{document.visibilityState==="visible"&&r()};return document.addEventListener("visibilitychange",i),r(),()=>{clearTimeout(n),document.removeEventListener("visibilitychange",i)}}function cv(){const[e,t]=R.useState(Pd());return R.useEffect(()=>uv(()=>e),[e]),d.jsxs("label",{className:"settings",children:[d.jsx("span",{children:"Theme"}),d.jsxs("select",{"aria-label":"Color theme","data-testid":"theme-select",value:e,onChange:n=>{const r=n.target.value;zs(r)&&(sv(r),t(r))},children:[d.jsx("option",{value:"auto",children:"Auto (light 06–18, dark 18–06)"}),d.jsx("option",{value:"light",children:"Light"}),d.jsx("option",{value:"dark",children:"Dark"})]})]})}function dv(){const e=th(),t=e.page==="algo"?ih[e.id]:void 0;return R.useEffect(()=>{document.title=t?`${t.name} · Sort Pedia`:"Sort Pedia",window.scrollTo(0,0)},[t]),d.jsxs(d.Fragment,{children:[d.jsxs("header",{className:"topbar",children:[d.jsx("a",{className:"brand",href:"#/",children:"Sort Pedia"}),d.jsxs("label",{className:"jump",children:[d.jsx("span",{className:"sr-only",children:"Jump to algorithm"}),d.jsxs("select",{"aria-label":"Jump to algorithm","data-testid":"jump-select",value:t?.id??"",onChange:n=>{n.target.value&&(window.location.hash=`#/algo/${n.target.value}`)},children:[d.jsx("option",{value:"",children:"Jump to algorithm…"}),jn.map(n=>d.jsxs("option",{value:n.id,children:[n.rank,". ",n.name]},n.id))]})]}),d.jsx(xg,{}),d.jsx(cv,{})]}),d.jsx("main",{className:"container",children:e.page==="algo"&&!t?d.jsxs("div",{className:"card",children:[d.jsx("h2",{children:"Unknown algorithm"}),d.jsx("p",{children:d.jsx("a",{href:"#/",children:"Back to the index"})})]}):t?d.jsx(nv,{algo:t},t.id):d.jsx(ah,{})}),d.jsxs("footer",{className:"footer",children:["All sorting runs in Rust compiled to WebAssembly. ",d.jsx("a",{href:"https://github.com/abhi1kush/sort-pedia",children:"Source on GitHub"})]})]})}ld(document.getElementById("root")).render(d.jsx(R.StrictMode,{children:d.jsx(dv,{})}));
