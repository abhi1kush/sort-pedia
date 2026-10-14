(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Es=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ql={exports:{}},Mi={},Gl={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),bd=Symbol.for("react.portal"),Sd=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),Ed=Symbol.for("react.provider"),zd=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Td=Symbol.for("react.memo"),Ad=Symbol.for("react.lazy"),zs=Symbol.iterator;function Od(e){return e===null||typeof e!="object"?null:(e=zs&&e[zs]||e["@@iterator"],typeof e=="function"?e:null)}var Kl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yl=Object.assign,Zl={};function En(e,t,n){this.props=e,this.context=t,this.refs=Zl,this.updater=n||Kl}En.prototype.isReactComponent={};En.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};En.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xl(){}Xl.prototype=En.prototype;function Co(e,t,n){this.props=e,this.context=t,this.refs=Zl,this.updater=n||Kl}var No=Co.prototype=new Xl;No.constructor=Co;Yl(No,En.prototype);No.isPureReactComponent=!0;var Cs=Array.isArray,Jl=Object.prototype.hasOwnProperty,To={current:null},eu={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Jl.call(t,r)&&!eu.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),f=0;f<s;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Pr,type:e,key:a,ref:o,props:i,_owner:To.current}}function Id(e,t){return{$$typeof:Pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ao(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function Fd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ns=/\/+/g;function na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fd(""+e.key):t.toString(36)}function Kr(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Pr:case bd:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+na(o,0):r,Cs(i)?(n="",e!=null&&(n=e.replace(Ns,"$&/")+"/"),Kr(i,t,n,"",function(f){return f})):i!=null&&(Ao(i)&&(i=Id(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ns,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Cs(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+na(a,s);o+=Kr(a,t,n,u,i)}else if(u=Od(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+na(a,s++),o+=Kr(a,t,n,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Tr(e,t,n){if(e==null)return e;var r=[],i=0;return Kr(e,r,"","",function(a){return t.call(n,a,i++)}),r}function Ld(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},Yr={transition:null},Md={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Yr,ReactCurrentOwner:To};function nu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Tr,forEach:function(e,t,n){Tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Tr(e,function(){t++}),t},toArray:function(e){return Tr(e,function(t){return t})||[]},only:function(e){if(!Ao(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=En;F.Fragment=Sd;F.Profiler=jd;F.PureComponent=Co;F.StrictMode=Pd;F.Suspense=Nd;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md;F.act=nu;F.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yl({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=To.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Jl.call(t,u)&&!eu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Pr,type:e.type,key:i,ref:a,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:zd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ed,_context:e},e.Consumer=e};F.createElement=tu;F.createFactory=function(e){var t=tu.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Cd,render:e}};F.isValidElement=Ao;F.lazy=function(e){return{$$typeof:Ad,_payload:{_status:-1,_result:e},_init:Ld}};F.memo=function(e,t){return{$$typeof:Td,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=Yr.transition;Yr.transition={};try{e()}finally{Yr.transition=t}};F.unstable_act=nu;F.useCallback=function(e,t){return pe.current.useCallback(e,t)};F.useContext=function(e){return pe.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};F.useEffect=function(e,t){return pe.current.useEffect(e,t)};F.useId=function(){return pe.current.useId()};F.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};F.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return pe.current.useMemo(e,t)};F.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};F.useRef=function(e){return pe.current.useRef(e)};F.useState=function(e){return pe.current.useState(e)};F.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};F.useTransition=function(){return pe.current.useTransition()};F.version="18.3.1";Gl.exports=F;var M=Gl.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=M,$d=Symbol.for("react.element"),Dd=Symbol.for("react.fragment"),Ud=Object.prototype.hasOwnProperty,Bd=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vd={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ud.call(t,r)&&!Vd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:$d,type:e,key:a,ref:o,props:i,_owner:Bd.current}}Mi.Fragment=Dd;Mi.jsx=ru;Mi.jsxs=ru;Ql.exports=Mi;var d=Ql.exports,iu={exports:{}},Ee={},au={exports:{}},ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,x){var C=z.length;z.push(x);e:for(;0<C;){var O=C-1>>>1,I=z[O];if(0<i(I,x))z[O]=x,z[C]=I,C=O;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var x=z[0],C=z.pop();if(C!==x){z[0]=C;e:for(var O=0,I=z.length,xe=I>>>1;O<xe;){var G=2*(O+1)-1,me=z[G],ge=G+1,Je=z[ge];if(0>i(me,C))ge<I&&0>i(Je,me)?(z[O]=Je,z[ge]=C,O=ge):(z[O]=me,z[G]=C,O=G);else if(ge<I&&0>i(Je,C))z[O]=Je,z[ge]=C,O=ge;else break e}}return x}function i(z,x){var C=z.sortIndex-x.sortIndex;return C!==0?C:z.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],f=[],m=1,y=null,v=3,j=!1,E=!1,_=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,l=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(z){for(var x=n(f);x!==null;){if(x.callback===null)r(f);else if(x.startTime<=z)r(f),x.sortIndex=x.expirationTime,t(u,x);else break;x=n(f)}}function h(z){if(_=!1,c(z),!E)if(n(u)!==null)E=!0,ct(g);else{var x=n(f);x!==null&&Ne(h,x.startTime-z)}}function g(z,x){E=!1,_&&(_=!1,p(S),S=-1),j=!0;var C=v;try{for(c(x),y=n(u);y!==null&&(!(y.expirationTime>x)||z&&!R());){var O=y.callback;if(typeof O=="function"){y.callback=null,v=y.priorityLevel;var I=O(y.expirationTime<=x);x=e.unstable_now(),typeof I=="function"?y.callback=I:y===n(u)&&r(u),c(x)}else r(u);y=n(u)}if(y!==null)var xe=!0;else{var G=n(f);G!==null&&Ne(h,G.startTime-x),xe=!1}return xe}finally{y=null,v=C,j=!1}}var w=!1,k=null,S=-1,N=5,A=-1;function R(){return!(e.unstable_now()-A<N)}function te(){if(k!==null){var z=e.unstable_now();A=z;var x=!0;try{x=k(!0,z)}finally{x?Ce():(w=!1,k=null)}}else w=!1}var Ce;if(typeof l=="function")Ce=function(){l(te)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,Nn=Ot.port2;Ot.port1.onmessage=te,Ce=function(){Nn.postMessage(null)}}else Ce=function(){b(te,0)};function ct(z){k=z,w||(w=!0,Ce())}function Ne(z,x){S=b(function(){z(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){E||j||(E=!0,ct(g))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(v){case 1:case 2:case 3:var x=3;break;default:x=v}var C=v;v=x;try{return z()}finally{v=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,x){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var C=v;v=z;try{return x()}finally{v=C}},e.unstable_scheduleCallback=function(z,x,C){var O=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?O+C:O):C=O,z){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=C+I,z={id:m++,callback:x,priorityLevel:z,startTime:C,expirationTime:I,sortIndex:-1},C>O?(z.sortIndex=C,t(f,z),n(u)===null&&z===n(f)&&(_?(p(S),S=-1):_=!0,Ne(h,C-O))):(z.sortIndex=I,t(u,z),E||j||(E=!0,ct(g))),z},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(z){var x=v;return function(){var C=v;v=x;try{return z.apply(this,arguments)}finally{v=C}}}})(ou);au.exports=ou;var Hd=au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=M,je=Hd;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var su=new Set,ir={};function Gt(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(ir[e]=t,e=0;e<t.length;e++)su.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ia=Object.prototype.hasOwnProperty,qd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ts={},As={};function Qd(e){return Ia.call(As,e)?!0:Ia.call(Ts,e)?!1:qd.test(e)?As[e]=!0:(Ts[e]=!0,!1)}function Gd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kd(e,t,n,r){if(t===null||typeof t>"u"||Gd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Oo=/[\-:]([a-z])/g;function Io(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Oo,Io);oe[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Oo,Io);oe[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Oo,Io);oe[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fo(e,t,n,r){var i=oe.hasOwnProperty(t)?oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kd(t,n,i,r)&&(n=null),r||i===null?Qd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ut=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ar=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),Lo=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),lu=Symbol.for("react.provider"),uu=Symbol.for("react.context"),Mo=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),Ma=Symbol.for("react.suspense_list"),Ro=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),cu=Symbol.for("react.offscreen"),Os=Symbol.iterator;function Tn(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ra;function Dn(e){if(ra===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ra=t&&t[1]||""}return`
`+ra+e}var ia=!1;function aa(e,t){if(!e||ia)return"";ia=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{ia=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function Yd(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=aa(e.type,!1),e;case 11:return e=aa(e.type.render,!1),e;case 1:return e=aa(e.type,!0),e;default:return""}}function Ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case en:return"Fragment";case Jt:return"Portal";case Fa:return"Profiler";case Lo:return"StrictMode";case La:return"Suspense";case Ma:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uu:return(e.displayName||"Context")+".Consumer";case lu:return(e._context.displayName||"Context")+".Provider";case Mo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ro:return t=e.displayName||null,t!==null?t:Ra(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return Ra(e(t))}catch{}}return null}function Zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ra(t);case 8:return t===Lo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xd(e){var t=du(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){e._valueTracker||(e._valueTracker=Xd(e))}function fu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=du(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $a(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Is(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pu(e,t){t=t.checked,t!=null&&Fo(e,"checked",t,!1)}function Da(e,t){pu(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ua(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ua(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ua(e,t,n){(t!=="number"||ci(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ba(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ls(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Un(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function hu(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ms(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ar(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Gn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jd=["Webkit","ms","Moz","O"];Object.keys(Gn).forEach(function(e){Jd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Gn[t]=Gn[e]})});function vu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Gn.hasOwnProperty(e)&&Gn[e]?(""+t).trim():t+"px"}function yu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ef=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ha(e,t){if(t){if(ef[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qa=null;function $o(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,pn=null,hn=null;function Rs(e){if(e=zr(e)){if(typeof Qa!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Bi(t),Qa(e.stateNode,e.type,t))}}function _u(e){pn?hn?hn.push(e):hn=[e]:pn=e}function wu(){if(pn){var e=pn,t=hn;if(hn=pn=null,Rs(e),t)for(e=0;e<t.length;e++)Rs(t[e])}}function ku(e,t){return e(t)}function xu(){}var oa=!1;function bu(e,t,n){if(oa)return e(t,n);oa=!0;try{return ku(e,t,n)}finally{oa=!1,(pn!==null||hn!==null)&&(xu(),wu())}}function or(e,t){var n=e.stateNode;if(n===null)return null;var r=Bi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ga=!1;if(at)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ga=!1}function tf(e,t,n,r,i,a,o,s,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(m){this.onError(m)}}var Kn=!1,di=null,fi=!1,Ka=null,nf={onError:function(e){Kn=!0,di=e}};function rf(e,t,n,r,i,a,o,s,u){Kn=!1,di=null,tf.apply(nf,arguments)}function af(e,t,n,r,i,a,o,s,u){if(rf.apply(this,arguments),Kn){if(Kn){var f=di;Kn=!1,di=null}else throw Error(P(198));fi||(fi=!0,Ka=f)}}function Kt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Su(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $s(e){if(Kt(e)!==e)throw Error(P(188))}function of(e){var t=e.alternate;if(!t){if(t=Kt(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return $s(i),e;if(a===r)return $s(i),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Pu(e){return e=of(e),e!==null?ju(e):null}function ju(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ju(e);if(t!==null)return t;e=e.sibling}return null}var Eu=je.unstable_scheduleCallback,Ds=je.unstable_cancelCallback,sf=je.unstable_shouldYield,lf=je.unstable_requestPaint,Y=je.unstable_now,uf=je.unstable_getCurrentPriorityLevel,Do=je.unstable_ImmediatePriority,zu=je.unstable_UserBlockingPriority,pi=je.unstable_NormalPriority,cf=je.unstable_LowPriority,Cu=je.unstable_IdlePriority,Ri=null,Ze=null;function df(e){if(Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:hf,ff=Math.log,pf=Math.LN2;function hf(e){return e>>>=0,e===0?32:31-(ff(e)/pf|0)|0}var Fr=64,Lr=4194304;function Bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Bn(s):(a&=o,a!==0&&(r=Bn(a)))}else o=n&~i,o!==0?r=Bn(o):a!==0&&(r=Bn(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-He(t),i=1<<n,r|=e[n],t&=~i;return r}function mf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-He(a),s=1<<o,u=i[o];u===-1?(!(s&n)||s&r)&&(i[o]=mf(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function Ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nu(){var e=Fr;return Fr<<=1,!(Fr&4194240)&&(Fr=64),e}function sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-He(t),e[t]=n}function vf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-He(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Uo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Tu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Au,Bo,Ou,Iu,Fu,Za=!1,Mr=[],wt=null,kt=null,xt=null,sr=new Map,lr=new Map,gt=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Us(e,t){switch(e){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":lr.delete(t.pointerId)}}function On(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=zr(t),t!==null&&Bo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function _f(e,t,n,r,i){switch(t){case"focusin":return wt=On(wt,e,t,n,r,i),!0;case"dragenter":return kt=On(kt,e,t,n,r,i),!0;case"mouseover":return xt=On(xt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return sr.set(a,On(sr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,lr.set(a,On(lr.get(a)||null,e,t,n,r,i)),!0}return!1}function Lu(e){var t=Mt(e.target);if(t!==null){var n=Kt(t);if(n!==null){if(t=n.tag,t===13){if(t=Su(n),t!==null){e.blockedOn=t,Fu(e.priority,function(){Ou(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qa=r,n.target.dispatchEvent(r),qa=null}else return t=zr(n),t!==null&&Bo(t),e.blockedOn=n,!1;t.shift()}return!0}function Bs(e,t,n){Zr(e)&&n.delete(t)}function wf(){Za=!1,wt!==null&&Zr(wt)&&(wt=null),kt!==null&&Zr(kt)&&(kt=null),xt!==null&&Zr(xt)&&(xt=null),sr.forEach(Bs),lr.forEach(Bs)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Za||(Za=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,wf)))}function ur(e){function t(i){return In(i,e)}if(0<Mr.length){In(Mr[0],e);for(var n=1;n<Mr.length;n++){var r=Mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wt!==null&&In(wt,e),kt!==null&&In(kt,e),xt!==null&&In(xt,e),sr.forEach(t),lr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)Lu(n),n.blockedOn===null&&gt.shift()}var mn=ut.ReactCurrentBatchConfig,mi=!0;function kf(e,t,n,r){var i=D,a=mn.transition;mn.transition=null;try{D=1,Vo(e,t,n,r)}finally{D=i,mn.transition=a}}function xf(e,t,n,r){var i=D,a=mn.transition;mn.transition=null;try{D=4,Vo(e,t,n,r)}finally{D=i,mn.transition=a}}function Vo(e,t,n,r){if(mi){var i=Xa(e,t,n,r);if(i===null)va(e,t,r,gi,n),Us(e,r);else if(_f(i,e,t,n,r))r.stopPropagation();else if(Us(e,r),t&4&&-1<yf.indexOf(e)){for(;i!==null;){var a=zr(i);if(a!==null&&Au(a),a=Xa(e,t,n,r),a===null&&va(e,t,r,gi,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else va(e,t,r,null,n)}}var gi=null;function Xa(e,t,n,r){if(gi=null,e=$o(r),e=Mt(e),e!==null)if(t=Kt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Su(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function Mu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uf()){case Do:return 1;case zu:return 4;case pi:case cf:return 16;case Cu:return 536870912;default:return 16}default:return 16}}var yt=null,Ho=null,Xr=null;function Ru(){if(Xr)return Xr;var e,t=Ho,n=t.length,r,i="value"in yt?yt.value:yt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Xr=i.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rr(){return!0}function Vs(){return!1}function ze(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Rr:Vs,this.isPropagationStopped=Vs,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rr)},persist:function(){},isPersistent:Rr}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=ze(zn),Er=Q({},zn,{view:0,detail:0}),bf=ze(Er),la,ua,Fn,$i=Q({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fn&&(Fn&&e.type==="mousemove"?(la=e.screenX-Fn.screenX,ua=e.screenY-Fn.screenY):ua=la=0,Fn=e),la)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),Hs=ze($i),Sf=Q({},$i,{dataTransfer:0}),Pf=ze(Sf),jf=Q({},Er,{relatedTarget:0}),ca=ze(jf),Ef=Q({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),zf=ze(Ef),Cf=Q({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nf=ze(Cf),Tf=Q({},zn,{data:0}),Ws=ze(Tf),Af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Of={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},If={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ff(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=If[e])?!!t[e]:!1}function qo(){return Ff}var Lf=Q({},Er,{key:function(e){if(e.key){var t=Af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Of[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qo,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mf=ze(Lf),Rf=Q({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qs=ze(Rf),$f=Q({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qo}),Df=ze($f),Uf=Q({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bf=ze(Uf),Vf=Q({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hf=ze(Vf),Wf=[9,13,27,32],Qo=at&&"CompositionEvent"in window,Yn=null;at&&"documentMode"in document&&(Yn=document.documentMode);var qf=at&&"TextEvent"in window&&!Yn,$u=at&&(!Qo||Yn&&8<Yn&&11>=Yn),Qs=" ",Gs=!1;function Du(e,t){switch(e){case"keyup":return Wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function Qf(e,t){switch(e){case"compositionend":return Uu(t);case"keypress":return t.which!==32?null:(Gs=!0,Qs);case"textInput":return e=t.data,e===Qs&&Gs?null:e;default:return null}}function Gf(e,t){if(tn)return e==="compositionend"||!Qo&&Du(e,t)?(e=Ru(),Xr=Ho=yt=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $u&&t.locale!=="ko"?null:t.data;default:return null}}var Kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ks(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kf[e.type]:t==="textarea"}function Bu(e,t,n,r){_u(r),t=vi(t,"onChange"),0<t.length&&(n=new Wo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,cr=null;function Yf(e){Ju(e,0)}function Di(e){var t=an(e);if(fu(t))return e}function Zf(e,t){if(e==="change")return t}var Vu=!1;if(at){var da;if(at){var fa="oninput"in document;if(!fa){var Ys=document.createElement("div");Ys.setAttribute("oninput","return;"),fa=typeof Ys.oninput=="function"}da=fa}else da=!1;Vu=da&&(!document.documentMode||9<document.documentMode)}function Zs(){Zn&&(Zn.detachEvent("onpropertychange",Hu),cr=Zn=null)}function Hu(e){if(e.propertyName==="value"&&Di(cr)){var t=[];Bu(t,cr,e,$o(e)),bu(Yf,t)}}function Xf(e,t,n){e==="focusin"?(Zs(),Zn=t,cr=n,Zn.attachEvent("onpropertychange",Hu)):e==="focusout"&&Zs()}function Jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(cr)}function ep(e,t){if(e==="click")return Di(t)}function tp(e,t){if(e==="input"||e==="change")return Di(t)}function np(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:np;function dr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ia.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function Xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Js(e,t){var n=Xs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xs(n)}}function Wu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qu(){for(var e=window,t=ci();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ci(e.document)}return t}function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rp(e){var t=qu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wu(n.ownerDocument.documentElement,n)){if(r!==null&&Go(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Js(n,a);var o=Js(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ip=at&&"documentMode"in document&&11>=document.documentMode,nn=null,Ja=null,Xn=null,eo=!1;function el(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eo||nn==null||nn!==ci(r)||(r=nn,"selectionStart"in r&&Go(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&dr(Xn,r)||(Xn=r,r=vi(Ja,"onSelect"),0<r.length&&(t=new Wo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nn)))}function $r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rn={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},pa={},Qu={};at&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Ui(e){if(pa[e])return pa[e];if(!rn[e])return e;var t=rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qu)return pa[e]=t[n];return e}var Gu=Ui("animationend"),Ku=Ui("animationiteration"),Yu=Ui("animationstart"),Zu=Ui("transitionend"),Xu=new Map,tl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){Xu.set(e,t),Gt(t,[e])}for(var ha=0;ha<tl.length;ha++){var ma=tl[ha],ap=ma.toLowerCase(),op=ma[0].toUpperCase()+ma.slice(1);Nt(ap,"on"+op)}Nt(Gu,"onAnimationEnd");Nt(Ku,"onAnimationIteration");Nt(Yu,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(Zu,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function nl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,af(r,t,void 0,e),e.currentTarget=null}function Ju(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,f=s.currentTarget;if(s=s.listener,u!==a&&i.isPropagationStopped())break e;nl(i,s,f),a=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,f=s.currentTarget,s=s.listener,u!==a&&i.isPropagationStopped())break e;nl(i,s,f),a=u}}}if(fi)throw e=Ka,fi=!1,Ka=null,e}function B(e,t){var n=t[ao];n===void 0&&(n=t[ao]=new Set);var r=e+"__bubble";n.has(r)||(ec(t,e,2,!1),n.add(r))}function ga(e,t,n){var r=0;t&&(r|=4),ec(n,e,r,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[Dr]){e[Dr]=!0,su.forEach(function(n){n!=="selectionchange"&&(sp.has(n)||ga(n,!1,e),ga(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dr]||(t[Dr]=!0,ga("selectionchange",!1,t))}}function ec(e,t,n,r){switch(Mu(t)){case 1:var i=kf;break;case 4:i=xf;break;default:i=Vo}n=i.bind(null,t,n,e),i=void 0,!Ga||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function va(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Mt(s),o===null)return;if(u=o.tag,u===5||u===6){r=a=o;continue e}s=s.parentNode}}r=r.return}bu(function(){var f=a,m=$o(n),y=[];e:{var v=Xu.get(e);if(v!==void 0){var j=Wo,E=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":j=Mf;break;case"focusin":E="focus",j=ca;break;case"focusout":E="blur",j=ca;break;case"beforeblur":case"afterblur":j=ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Pf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Df;break;case Gu:case Ku:case Yu:j=zf;break;case Zu:j=Bf;break;case"scroll":j=bf;break;case"wheel":j=Hf;break;case"copy":case"cut":case"paste":j=Nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=qs}var _=(t&4)!==0,b=!_&&e==="scroll",p=_?v!==null?v+"Capture":null:v;_=[];for(var l=f,c;l!==null;){c=l;var h=c.stateNode;if(c.tag===5&&h!==null&&(c=h,p!==null&&(h=or(l,p),h!=null&&_.push(pr(l,h,c)))),b)break;l=l.return}0<_.length&&(v=new j(v,E,null,n,m),y.push({event:v,listeners:_}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",v&&n!==qa&&(E=n.relatedTarget||n.fromElement)&&(Mt(E)||E[ot]))break e;if((j||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,j?(E=n.relatedTarget||n.toElement,j=f,E=E?Mt(E):null,E!==null&&(b=Kt(E),E!==b||E.tag!==5&&E.tag!==6)&&(E=null)):(j=null,E=f),j!==E)){if(_=Hs,h="onMouseLeave",p="onMouseEnter",l="mouse",(e==="pointerout"||e==="pointerover")&&(_=qs,h="onPointerLeave",p="onPointerEnter",l="pointer"),b=j==null?v:an(j),c=E==null?v:an(E),v=new _(h,l+"leave",j,n,m),v.target=b,v.relatedTarget=c,h=null,Mt(m)===f&&(_=new _(p,l+"enter",E,n,m),_.target=c,_.relatedTarget=b,h=_),b=h,j&&E)t:{for(_=j,p=E,l=0,c=_;c;c=Yt(c))l++;for(c=0,h=p;h;h=Yt(h))c++;for(;0<l-c;)_=Yt(_),l--;for(;0<c-l;)p=Yt(p),c--;for(;l--;){if(_===p||p!==null&&_===p.alternate)break t;_=Yt(_),p=Yt(p)}_=null}else _=null;j!==null&&rl(y,v,j,_,!1),E!==null&&b!==null&&rl(y,b,E,_,!0)}}e:{if(v=f?an(f):window,j=v.nodeName&&v.nodeName.toLowerCase(),j==="select"||j==="input"&&v.type==="file")var g=Zf;else if(Ks(v))if(Vu)g=tp;else{g=Jf;var w=Xf}else(j=v.nodeName)&&j.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(g=ep);if(g&&(g=g(e,f))){Bu(y,g,n,m);break e}w&&w(e,v,f),e==="focusout"&&(w=v._wrapperState)&&w.controlled&&v.type==="number"&&Ua(v,"number",v.value)}switch(w=f?an(f):window,e){case"focusin":(Ks(w)||w.contentEditable==="true")&&(nn=w,Ja=f,Xn=null);break;case"focusout":Xn=Ja=nn=null;break;case"mousedown":eo=!0;break;case"contextmenu":case"mouseup":case"dragend":eo=!1,el(y,n,m);break;case"selectionchange":if(ip)break;case"keydown":case"keyup":el(y,n,m)}var k;if(Qo)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else tn?Du(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&($u&&n.locale!=="ko"&&(tn||S!=="onCompositionStart"?S==="onCompositionEnd"&&tn&&(k=Ru()):(yt=m,Ho="value"in yt?yt.value:yt.textContent,tn=!0)),w=vi(f,S),0<w.length&&(S=new Ws(S,e,null,n,m),y.push({event:S,listeners:w}),k?S.data=k:(k=Uu(n),k!==null&&(S.data=k)))),(k=qf?Qf(e,n):Gf(e,n))&&(f=vi(f,"onBeforeInput"),0<f.length&&(m=new Ws("onBeforeInput","beforeinput",null,n,m),y.push({event:m,listeners:f}),m.data=k))}Ju(y,t)})}function pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=or(e,n),a!=null&&r.unshift(pr(e,a,i)),a=or(e,t),a!=null&&r.push(pr(e,a,i))),e=e.return}return r}function Yt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rl(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,f=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&f!==null&&(s=f,i?(u=or(n,a),u!=null&&o.unshift(pr(n,u,s))):i||(u=or(n,a),u!=null&&o.push(pr(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var lp=/\r\n?/g,up=/\u0000|\uFFFD/g;function il(e){return(typeof e=="string"?e:""+e).replace(lp,`
`).replace(up,"")}function Ur(e,t,n){if(t=il(t),il(e)!==t&&n)throw Error(P(425))}function yi(){}var to=null,no=null;function ro(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var io=typeof setTimeout=="function"?setTimeout:void 0,cp=typeof clearTimeout=="function"?clearTimeout:void 0,al=typeof Promise=="function"?Promise:void 0,dp=typeof queueMicrotask=="function"?queueMicrotask:typeof al<"u"?function(e){return al.resolve(null).then(e).catch(fp)}:io;function fp(e){setTimeout(function(){throw e})}function ya(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ur(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ol(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Cn,hr="__reactProps$"+Cn,ot="__reactContainer$"+Cn,ao="__reactEvents$"+Cn,pp="__reactListeners$"+Cn,hp="__reactHandles$"+Cn;function Mt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ol(e);e!==null;){if(n=e[Ye])return n;e=ol(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[Ye]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function an(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Bi(e){return e[hr]||null}var oo=[],on=-1;function Tt(e){return{current:e}}function V(e){0>on||(e.current=oo[on],oo[on]=null,on--)}function U(e,t){on++,oo[on]=e.current,e.current=t}var Ct={},ce=Tt(Ct),_e=Tt(!1),Bt=Ct;function _n(e,t){var n=e.type.contextTypes;if(!n)return Ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function _i(){V(_e),V(ce)}function sl(e,t,n){if(ce.current!==Ct)throw Error(P(168));U(ce,t),U(_e,n)}function tc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Zd(e)||"Unknown",i));return Q({},n,r)}function wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Bt=ce.current,U(ce,e),U(_e,_e.current),!0}function ll(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=tc(e,t,Bt),r.__reactInternalMemoizedMergedChildContext=e,V(_e),V(ce),U(ce,e)):V(_e),U(_e,n)}var tt=null,Vi=!1,_a=!1;function nc(e){tt===null?tt=[e]:tt.push(e)}function mp(e){Vi=!0,nc(e)}function At(){if(!_a&&tt!==null){_a=!0;var e=0,t=D;try{var n=tt;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tt=null,Vi=!1}catch(i){throw tt!==null&&(tt=tt.slice(e+1)),Eu(Do,At),i}finally{D=t,_a=!1}}return null}var sn=[],ln=0,ki=null,xi=0,Ae=[],Oe=0,Vt=null,nt=1,rt="";function Ft(e,t){sn[ln++]=xi,sn[ln++]=ki,ki=e,xi=t}function rc(e,t,n){Ae[Oe++]=nt,Ae[Oe++]=rt,Ae[Oe++]=Vt,Vt=e;var r=nt;e=rt;var i=32-He(r)-1;r&=~(1<<i),n+=1;var a=32-He(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,nt=1<<32-He(t)+i|n<<i|r,rt=a+e}else nt=1<<a|n<<i|r,rt=e}function Ko(e){e.return!==null&&(Ft(e,1),rc(e,1,0))}function Yo(e){for(;e===ki;)ki=sn[--ln],sn[ln]=null,xi=sn[--ln],sn[ln]=null;for(;e===Vt;)Vt=Ae[--Oe],Ae[Oe]=null,rt=Ae[--Oe],Ae[Oe]=null,nt=Ae[--Oe],Ae[Oe]=null}var Pe=null,Se=null,H=!1,Ve=null;function ic(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ul(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Se=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vt!==null?{id:nt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Se=null,!0):!1;default:return!1}}function so(e){return(e.mode&1)!==0&&(e.flags&128)===0}function lo(e){if(H){var t=Se;if(t){var n=t;if(!ul(e,t)){if(so(e))throw Error(P(418));t=bt(n.nextSibling);var r=Pe;t&&ul(e,t)?ic(r,n):(e.flags=e.flags&-4097|2,H=!1,Pe=e)}}else{if(so(e))throw Error(P(418));e.flags=e.flags&-4097|2,H=!1,Pe=e}}}function cl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Br(e){if(e!==Pe)return!1;if(!H)return cl(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ro(e.type,e.memoizedProps)),t&&(t=Se)){if(so(e))throw ac(),Error(P(418));for(;t;)ic(e,t),t=bt(t.nextSibling)}if(cl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Se=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=Pe?bt(e.stateNode.nextSibling):null;return!0}function ac(){for(var e=Se;e;)e=bt(e.nextSibling)}function wn(){Se=Pe=null,H=!1}function Zo(e){Ve===null?Ve=[e]:Ve.push(e)}var gp=ut.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Vr(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dl(e){var t=e._init;return t(e._payload)}function oc(e){function t(p,l){if(e){var c=p.deletions;c===null?(p.deletions=[l],p.flags|=16):c.push(l)}}function n(p,l){if(!e)return null;for(;l!==null;)t(p,l),l=l.sibling;return null}function r(p,l){for(p=new Map;l!==null;)l.key!==null?p.set(l.key,l):p.set(l.index,l),l=l.sibling;return p}function i(p,l){return p=Et(p,l),p.index=0,p.sibling=null,p}function a(p,l,c){return p.index=c,e?(c=p.alternate,c!==null?(c=c.index,c<l?(p.flags|=2,l):c):(p.flags|=2,l)):(p.flags|=1048576,l)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,l,c,h){return l===null||l.tag!==6?(l=ja(c,p.mode,h),l.return=p,l):(l=i(l,c),l.return=p,l)}function u(p,l,c,h){var g=c.type;return g===en?m(p,l,c.props.children,h,c.key):l!==null&&(l.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ht&&dl(g)===l.type)?(h=i(l,c.props),h.ref=Ln(p,l,c),h.return=p,h):(h=oi(c.type,c.key,c.props,null,p.mode,h),h.ref=Ln(p,l,c),h.return=p,h)}function f(p,l,c,h){return l===null||l.tag!==4||l.stateNode.containerInfo!==c.containerInfo||l.stateNode.implementation!==c.implementation?(l=Ea(c,p.mode,h),l.return=p,l):(l=i(l,c.children||[]),l.return=p,l)}function m(p,l,c,h,g){return l===null||l.tag!==7?(l=Ut(c,p.mode,h,g),l.return=p,l):(l=i(l,c),l.return=p,l)}function y(p,l,c){if(typeof l=="string"&&l!==""||typeof l=="number")return l=ja(""+l,p.mode,c),l.return=p,l;if(typeof l=="object"&&l!==null){switch(l.$$typeof){case Ar:return c=oi(l.type,l.key,l.props,null,p.mode,c),c.ref=Ln(p,null,l),c.return=p,c;case Jt:return l=Ea(l,p.mode,c),l.return=p,l;case ht:var h=l._init;return y(p,h(l._payload),c)}if(Un(l)||Tn(l))return l=Ut(l,p.mode,c,null),l.return=p,l;Vr(p,l)}return null}function v(p,l,c,h){var g=l!==null?l.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return g!==null?null:s(p,l,""+c,h);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ar:return c.key===g?u(p,l,c,h):null;case Jt:return c.key===g?f(p,l,c,h):null;case ht:return g=c._init,v(p,l,g(c._payload),h)}if(Un(c)||Tn(c))return g!==null?null:m(p,l,c,h,null);Vr(p,c)}return null}function j(p,l,c,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return p=p.get(c)||null,s(l,p,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ar:return p=p.get(h.key===null?c:h.key)||null,u(l,p,h,g);case Jt:return p=p.get(h.key===null?c:h.key)||null,f(l,p,h,g);case ht:var w=h._init;return j(p,l,c,w(h._payload),g)}if(Un(h)||Tn(h))return p=p.get(c)||null,m(l,p,h,g,null);Vr(l,h)}return null}function E(p,l,c,h){for(var g=null,w=null,k=l,S=l=0,N=null;k!==null&&S<c.length;S++){k.index>S?(N=k,k=null):N=k.sibling;var A=v(p,k,c[S],h);if(A===null){k===null&&(k=N);break}e&&k&&A.alternate===null&&t(p,k),l=a(A,l,S),w===null?g=A:w.sibling=A,w=A,k=N}if(S===c.length)return n(p,k),H&&Ft(p,S),g;if(k===null){for(;S<c.length;S++)k=y(p,c[S],h),k!==null&&(l=a(k,l,S),w===null?g=k:w.sibling=k,w=k);return H&&Ft(p,S),g}for(k=r(p,k);S<c.length;S++)N=j(k,p,S,c[S],h),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?S:N.key),l=a(N,l,S),w===null?g=N:w.sibling=N,w=N);return e&&k.forEach(function(R){return t(p,R)}),H&&Ft(p,S),g}function _(p,l,c,h){var g=Tn(c);if(typeof g!="function")throw Error(P(150));if(c=g.call(c),c==null)throw Error(P(151));for(var w=g=null,k=l,S=l=0,N=null,A=c.next();k!==null&&!A.done;S++,A=c.next()){k.index>S?(N=k,k=null):N=k.sibling;var R=v(p,k,A.value,h);if(R===null){k===null&&(k=N);break}e&&k&&R.alternate===null&&t(p,k),l=a(R,l,S),w===null?g=R:w.sibling=R,w=R,k=N}if(A.done)return n(p,k),H&&Ft(p,S),g;if(k===null){for(;!A.done;S++,A=c.next())A=y(p,A.value,h),A!==null&&(l=a(A,l,S),w===null?g=A:w.sibling=A,w=A);return H&&Ft(p,S),g}for(k=r(p,k);!A.done;S++,A=c.next())A=j(k,p,S,A.value,h),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?S:A.key),l=a(A,l,S),w===null?g=A:w.sibling=A,w=A);return e&&k.forEach(function(te){return t(p,te)}),H&&Ft(p,S),g}function b(p,l,c,h){if(typeof c=="object"&&c!==null&&c.type===en&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case Ar:e:{for(var g=c.key,w=l;w!==null;){if(w.key===g){if(g=c.type,g===en){if(w.tag===7){n(p,w.sibling),l=i(w,c.props.children),l.return=p,p=l;break e}}else if(w.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===ht&&dl(g)===w.type){n(p,w.sibling),l=i(w,c.props),l.ref=Ln(p,w,c),l.return=p,p=l;break e}n(p,w);break}else t(p,w);w=w.sibling}c.type===en?(l=Ut(c.props.children,p.mode,h,c.key),l.return=p,p=l):(h=oi(c.type,c.key,c.props,null,p.mode,h),h.ref=Ln(p,l,c),h.return=p,p=h)}return o(p);case Jt:e:{for(w=c.key;l!==null;){if(l.key===w)if(l.tag===4&&l.stateNode.containerInfo===c.containerInfo&&l.stateNode.implementation===c.implementation){n(p,l.sibling),l=i(l,c.children||[]),l.return=p,p=l;break e}else{n(p,l);break}else t(p,l);l=l.sibling}l=Ea(c,p.mode,h),l.return=p,p=l}return o(p);case ht:return w=c._init,b(p,l,w(c._payload),h)}if(Un(c))return E(p,l,c,h);if(Tn(c))return _(p,l,c,h);Vr(p,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,l!==null&&l.tag===6?(n(p,l.sibling),l=i(l,c),l.return=p,p=l):(n(p,l),l=ja(c,p.mode,h),l.return=p,p=l),o(p)):n(p,l)}return b}var kn=oc(!0),sc=oc(!1),bi=Tt(null),Si=null,un=null,Xo=null;function Jo(){Xo=un=Si=null}function es(e){var t=bi.current;V(bi),e._currentValue=t}function uo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gn(e,t){Si=e,Xo=un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(Xo!==e)if(e={context:e,memoizedValue:t,next:null},un===null){if(Si===null)throw Error(P(308));un=e,Si.dependencies={lanes:0,firstContext:e}}else un=un.next=e;return t}var Rt=null;function ts(e){Rt===null?Rt=[e]:Rt.push(e)}function lc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ts(t)):(n.next=i.next,i.next=n),t.interleaved=n,st(e,r)}function st(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function St(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,st(e,n)}return i=r.interleaved,i===null?(t.next=t,ts(r)):(t.next=i.next,i.next=t),r.interleaved=t,st(e,n)}function ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Uo(e,n)}}function fl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Pi(e,t,n,r){var i=e.updateQueue;mt=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,f=u.next;u.next=null,o===null?a=f:o.next=f,o=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=f:s.next=f,m.lastBaseUpdate=u))}if(a!==null){var y=i.baseState;o=0,m=f=u=null,s=a;do{var v=s.lane,j=s.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:j,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,_=s;switch(v=t,j=n,_.tag){case 1:if(E=_.payload,typeof E=="function"){y=E.call(j,y,v);break e}y=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=_.payload,v=typeof E=="function"?E.call(j,y,v):E,v==null)break e;y=Q({},y,v);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[s]:v.push(s))}else j={eventTime:j,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(f=m=j,u=y):m=m.next=j,o|=v;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;v=s,s=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(m===null&&(u=y),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Wt|=o,e.lanes=o,e.memoizedState=y}}function pl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Cr={},Xe=Tt(Cr),mr=Tt(Cr),gr=Tt(Cr);function $t(e){if(e===Cr)throw Error(P(174));return e}function rs(e,t){switch(U(gr,t),U(mr,e),U(Xe,Cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Va(t,e)}V(Xe),U(Xe,t)}function xn(){V(Xe),V(mr),V(gr)}function cc(e){$t(gr.current);var t=$t(Xe.current),n=Va(t,e.type);t!==n&&(U(mr,e),U(Xe,n))}function is(e){mr.current===e&&(V(Xe),V(mr))}var W=Tt(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wa=[];function as(){for(var e=0;e<wa.length;e++)wa[e]._workInProgressVersionPrimary=null;wa.length=0}var ti=ut.ReactCurrentDispatcher,ka=ut.ReactCurrentBatchConfig,Ht=0,q=null,J=null,ne=null,Ei=!1,Jn=!1,vr=0,vp=0;function se(){throw Error(P(321))}function os(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function ss(e,t,n,r,i,a){if(Ht=a,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?kp:xp,e=n(r,i),Jn){a=0;do{if(Jn=!1,vr=0,25<=a)throw Error(P(301));a+=1,ne=J=null,t.updateQueue=null,ti.current=bp,e=n(r,i)}while(Jn)}if(ti.current=zi,t=J!==null&&J.next!==null,Ht=0,ne=J=q=null,Ei=!1,t)throw Error(P(300));return e}function ls(){var e=vr!==0;return vr=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?q.memoizedState=ne=e:ne=ne.next=e,ne}function Me(){if(J===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ne===null?q.memoizedState:ne.next;if(t!==null)ne=t,J=e;else{if(e===null)throw Error(P(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ne===null?q.memoizedState=ne=e:ne=ne.next=e}return ne}function yr(e,t){return typeof t=="function"?t(e):t}function xa(e){var t=Me(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,u=null,f=a;do{var m=f.lane;if((Ht&m)===m)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var y={lane:m,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(s=u=y,o=r):u=u.next=y,q.lanes|=m,Wt|=m}f=f.next}while(f!==null&&f!==a);u===null?o=r:u.next=s,qe(r,t.memoizedState)||(ye=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,q.lanes|=a,Wt|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ba(e){var t=Me(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);qe(a,t.memoizedState)||(ye=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function dc(){}function fc(e,t){var n=q,r=Me(),i=t(),a=!qe(r.memoizedState,i);if(a&&(r.memoizedState=i,ye=!0),r=r.queue,us(mc.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,_r(9,hc.bind(null,n,r,i,t),void 0,null),re===null)throw Error(P(349));Ht&30||pc(n,t,i)}return i}function pc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hc(e,t,n,r){t.value=n,t.getSnapshot=r,gc(t)&&vc(e)}function mc(e,t,n){return n(function(){gc(t)&&vc(e)})}function gc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function vc(e){var t=st(e,1);t!==null&&We(t,e,1,-1)}function hl(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:e},t.queue=e,e=e.dispatch=wp.bind(null,q,e),[t.memoizedState,e]}function _r(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yc(){return Me().memoizedState}function ni(e,t,n,r){var i=Ke();q.flags|=e,i.memoizedState=_r(1|t,n,void 0,r===void 0?null:r)}function Hi(e,t,n,r){var i=Me();r=r===void 0?null:r;var a=void 0;if(J!==null){var o=J.memoizedState;if(a=o.destroy,r!==null&&os(r,o.deps)){i.memoizedState=_r(t,n,a,r);return}}q.flags|=e,i.memoizedState=_r(1|t,n,a,r)}function ml(e,t){return ni(8390656,8,e,t)}function us(e,t){return Hi(2048,8,e,t)}function _c(e,t){return Hi(4,2,e,t)}function wc(e,t){return Hi(4,4,e,t)}function kc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xc(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4,4,kc.bind(null,t,e),n)}function cs(){}function bc(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&os(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sc(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&os(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pc(e,t,n){return Ht&21?(qe(n,t)||(n=Nu(),q.lanes|=n,Wt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=n)}function yp(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=ka.transition;ka.transition={};try{e(!1),t()}finally{D=n,ka.transition=r}}function jc(){return Me().memoizedState}function _p(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ec(e))zc(t,n);else if(n=lc(e,t,n,r),n!==null){var i=fe();We(n,e,r,i),Cc(n,t,r)}}function wp(e,t,n){var r=jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ec(e))zc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,qe(s,o)){var u=t.interleaved;u===null?(i.next=i,ts(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=lc(e,t,i,r),n!==null&&(i=fe(),We(n,e,r,i),Cc(n,t,r))}}function Ec(e){var t=e.alternate;return e===q||t!==null&&t===q}function zc(e,t){Jn=Ei=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Uo(e,n)}}var zi={readContext:Le,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},kp={readContext:Le,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:ml,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ni(4194308,4,kc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return ni(4,2,e,t)},useMemo:function(e,t){var n=Ke();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ke();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_p.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:hl,useDebugValue:cs,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=hl(!1),t=e[0];return e=yp.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=Ke();if(H){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),re===null)throw Error(P(349));Ht&30||pc(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ml(mc.bind(null,r,a,e),[e]),r.flags|=2048,_r(9,hc.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ke(),t=re.identifierPrefix;if(H){var n=rt,r=nt;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xp={readContext:Le,useCallback:bc,useContext:Le,useEffect:us,useImperativeHandle:xc,useInsertionEffect:_c,useLayoutEffect:wc,useMemo:Sc,useReducer:xa,useRef:yc,useState:function(){return xa(yr)},useDebugValue:cs,useDeferredValue:function(e){var t=Me();return Pc(t,J.memoizedState,e)},useTransition:function(){var e=xa(yr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:fc,useId:jc,unstable_isNewReconciler:!1},bp={readContext:Le,useCallback:bc,useContext:Le,useEffect:us,useImperativeHandle:xc,useInsertionEffect:_c,useLayoutEffect:wc,useMemo:Sc,useReducer:ba,useRef:yc,useState:function(){return ba(yr)},useDebugValue:cs,useDeferredValue:function(e){var t=Me();return J===null?t.memoizedState=e:Pc(t,J.memoizedState,e)},useTransition:function(){var e=ba(yr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:dc,useSyncExternalStore:fc,useId:jc,unstable_isNewReconciler:!1};function Ue(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function co(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wi={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=jt(e),a=it(r,i);a.payload=t,n!=null&&(a.callback=n),t=St(e,a,i),t!==null&&(We(t,e,i,r),ei(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=jt(e),a=it(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=St(e,a,i),t!==null&&(We(t,e,i,r),ei(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=jt(e),i=it(n,r);i.tag=2,t!=null&&(i.callback=t),t=St(e,i,r),t!==null&&(We(t,e,r,n),ei(t,e,r))}};function gl(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!dr(n,r)||!dr(i,a):!0}function Nc(e,t,n){var r=!1,i=Ct,a=t.contextType;return typeof a=="object"&&a!==null?a=Le(a):(i=we(t)?Bt:ce.current,r=t.contextTypes,a=(r=r!=null)?_n(e,i):Ct),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function vl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wi.enqueueReplaceState(t,t.state,null)}function fo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ns(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Le(a):(a=we(t)?Bt:ce.current,i.context=_n(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(co(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wi.enqueueReplaceState(i,i.state,null),Pi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function bn(e,t){try{var n="",r=t;do n+=Yd(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function po(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sp=typeof WeakMap=="function"?WeakMap:Map;function Tc(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ni||(Ni=!0,bo=r),po(e,t)},n}function Ac(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){po(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){po(e,t),typeof r!="function"&&(Pt===null?Pt=new Set([this]):Pt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function yl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Sp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Rp.bind(null,e,t,n),t.then(e,e))}function _l(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,St(n,t,1))),n.lanes|=1),e)}var Pp=ut.ReactCurrentOwner,ye=!1;function de(e,t,n,r){t.child=e===null?sc(t,null,n,r):kn(t,e.child,n,r)}function kl(e,t,n,r,i){n=n.render;var a=t.ref;return gn(t,i),r=ss(e,t,n,r,a,i),n=ls(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lt(e,t,i)):(H&&n&&Ko(t),t.flags|=1,de(e,t,r,i),t.child)}function xl(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!ys(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Oc(e,t,a,r,i)):(e=oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:dr,n(o,r)&&e.ref===t.ref)return lt(e,t,i)}return t.flags|=1,e=Et(a,r),e.ref=t.ref,e.return=t,t.child=e}function Oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(dr(a,r)&&e.ref===t.ref)if(ye=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,lt(e,t,i)}return ho(e,t,n,r,i)}function Ic(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(dn,be),be|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(dn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,U(dn,be),be|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,U(dn,be),be|=r;return de(e,t,i,n),t.child}function Fc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ho(e,t,n,r,i){var a=we(n)?Bt:ce.current;return a=_n(t,a),gn(t,i),n=ss(e,t,n,r,a,i),r=ls(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lt(e,t,i)):(H&&r&&Ko(t),t.flags|=1,de(e,t,n,i),t.child)}function bl(e,t,n,r,i){if(we(n)){var a=!0;wi(t)}else a=!1;if(gn(t,i),t.stateNode===null)ri(e,t),Nc(t,n,r),fo(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,f=n.contextType;typeof f=="object"&&f!==null?f=Le(f):(f=we(n)?Bt:ce.current,f=_n(t,f));var m=n.getDerivedStateFromProps,y=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==f)&&vl(t,o,r,f),mt=!1;var v=t.memoizedState;o.state=v,Pi(t,r,o,i),u=t.memoizedState,s!==r||v!==u||_e.current||mt?(typeof m=="function"&&(co(t,n,m,r),u=t.memoizedState),(s=mt||gl(t,n,s,r,v,u,f))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=f,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,uc(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:Ue(t.type,s),o.props=f,y=t.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=we(n)?Bt:ce.current,u=_n(t,u));var j=n.getDerivedStateFromProps;(m=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==y||v!==u)&&vl(t,o,r,u),mt=!1,v=t.memoizedState,o.state=v,Pi(t,r,o,i);var E=t.memoizedState;s!==y||v!==E||_e.current||mt?(typeof j=="function"&&(co(t,n,j,r),E=t.memoizedState),(f=mt||gl(t,n,f,r,v,E,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),o.props=r,o.state=E,o.context=u,r=f):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return mo(e,t,n,r,a,i)}function mo(e,t,n,r,i,a){Fc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ll(t,n,!1),lt(e,t,a);r=t.stateNode,Pp.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=kn(t,e.child,null,a),t.child=kn(t,null,s,a)):de(e,t,s,a),t.memoizedState=r.state,i&&ll(t,n,!0),t.child}function Lc(e){var t=e.stateNode;t.pendingContext?sl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sl(e,t.context,!1),rs(e,t.containerInfo)}function Sl(e,t,n,r,i){return wn(),Zo(i),t.flags|=256,de(e,t,n,r),t.child}var go={dehydrated:null,treeContext:null,retryLane:0};function vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mc(e,t,n){var r=t.pendingProps,i=W.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(W,i&1),e===null)return lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Gi(o,r,0,null),e=Ut(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=vo(n),t.memoizedState=go,e):ds(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return jp(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Et(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Et(s,a):(a=Ut(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?vo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=go,r}return a=e.child,e=a.sibling,r=Et(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ds(e,t){return t=Gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hr(e,t,n,r){return r!==null&&Zo(r),kn(t,e.child,null,n),e=ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jp(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=Sa(Error(P(422))),Hr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Gi({mode:"visible",children:r.children},i,0,null),a=Ut(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&kn(t,e.child,null,o),t.child.memoizedState=vo(o),t.memoizedState=go,a);if(!(t.mode&1))return Hr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(P(419)),r=Sa(a,r,void 0),Hr(e,t,o,r)}if(s=(o&e.childLanes)!==0,ye||s){if(r=re,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,st(e,i),We(r,e,i,-1))}return vs(),r=Sa(Error(P(421))),Hr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$p.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Se=bt(i.nextSibling),Pe=t,H=!0,Ve=null,e!==null&&(Ae[Oe++]=nt,Ae[Oe++]=rt,Ae[Oe++]=Vt,nt=e.id,rt=e.overflow,Vt=t),t=ds(t,r.children),t.flags|=4096,t)}function Pl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),uo(e.return,t,n)}function Pa(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Rc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(de(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pl(e,n,t);else if(e.tag===19)Pl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ji(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pa(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pa(t,!0,n,null,a);break;case"together":Pa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Et(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Et(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ep(e,t,n){switch(t.tag){case 3:Lc(t),wn();break;case 5:cc(t);break;case 1:we(t.type)&&wi(t);break;case 4:rs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(bi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Mc(e,t,n):(U(W,W.current&1),e=lt(e,t,n),e!==null?e.sibling:null);U(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Ic(e,t,n)}return lt(e,t,n)}var $c,yo,Dc,Uc;$c=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yo=function(){};Dc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$t(Xe.current);var a=null;switch(n){case"input":i=$a(e,i),r=$a(e,r),a=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),a=[];break;case"textarea":i=Ba(e,i),r=Ba(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yi)}Ha(n,r);var o;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var s=i[f];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(ir.hasOwnProperty(f)?a||(a=[]):(a=a||[]).push(f,null));for(f in r){var u=r[f];if(s=i?.[f],r.hasOwnProperty(f)&&u!==s&&(u!=null||s!=null))if(f==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(ir.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&B("scroll",e),a||s===u||(a=[])):(a=a||[]).push(f,u))}n&&(a=a||[]).push("style",n);var f=a;(t.updateQueue=f)&&(t.flags|=4)}};Uc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zp(e,t,n){var r=t.pendingProps;switch(Yo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return we(t.type)&&_i(),le(t),null;case 3:return r=t.stateNode,xn(),V(_e),V(ce),as(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(jo(Ve),Ve=null))),yo(e,t),le(t),null;case 5:is(t);var i=$t(gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Dc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return le(t),null}if(e=$t(Xe.current),Br(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Ye]=t,r[hr]=a,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Vn.length;i++)B(Vn[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Is(r,a),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},B("invalid",r);break;case"textarea":Ls(r,a),B("invalid",r)}Ha(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&Ur(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Ur(r.textContent,s,e),i=["children",""+s]):ir.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":Or(r),Fs(r,a,!0);break;case"textarea":Or(r),Ms(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=yi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ye]=t,e[hr]=r,$c(e,t,!1,!1),t.stateNode=e;e:{switch(o=Wa(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<Vn.length;i++)B(Vn[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Is(e,r),i=$a(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),B("invalid",e);break;case"textarea":Ls(e,r),i=Ba(e,r),B("invalid",e);break;default:i=r}Ha(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?yu(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gu(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ar(e,u):typeof u=="number"&&ar(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ir.hasOwnProperty(a)?u!=null&&a==="onScroll"&&B("scroll",e):u!=null&&Fo(e,a,u,o))}switch(n){case"input":Or(e),Fs(e,r,!1);break;case"textarea":Or(e),Ms(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?fn(e,!!r.multiple,a,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Uc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=$t(gr.current),$t(Xe.current),Br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(a=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Ur(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ur(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return le(t),null;case 13:if(V(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Se!==null&&t.mode&1&&!(t.flags&128))ac(),wn(),t.flags|=98560,a=!1;else if(a=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[Ye]=t}else wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),a=!1}else Ve!==null&&(jo(Ve),Ve=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?ee===0&&(ee=3):vs())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return xn(),yo(e,t),e===null&&fr(t.stateNode.containerInfo),le(t),null;case 10:return es(t.type._context),le(t),null;case 17:return we(t.type)&&_i(),le(t),null;case 19:if(V(W),a=t.memoizedState,a===null)return le(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)Mn(a,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ji(e),o!==null){for(t.flags|=128,Mn(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(W,W.current&1|2),t.child}e=e.sibling}a.tail!==null&&Y()>Sn&&(t.flags|=128,r=!0,Mn(a,!1),t.lanes=4194304)}else{if(!r)if(e=ji(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!H)return le(t),null}else 2*Y()-a.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Y(),t.sibling=null,n=W.current,U(W,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return gs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Cp(e,t){switch(Yo(t),t.tag){case 1:return we(t.type)&&_i(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),V(_e),V(ce),as(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return is(t),null;case 13:if(V(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(W),null;case 4:return xn(),null;case 10:return es(t.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var Wr=!1,ue=!1,Np=typeof WeakSet=="function"?WeakSet:Set,T=null;function cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function _o(e,t,n){try{n()}catch(r){K(e,t,r)}}var jl=!1;function Tp(e,t){if(to=mi,e=qu(),Go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,f=0,m=0,y=e,v=null;t:for(;;){for(var j;y!==n||i!==0&&y.nodeType!==3||(s=o+i),y!==a||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(j=y.firstChild)!==null;)v=y,y=j;for(;;){if(y===e)break t;if(v===n&&++f===i&&(s=o),v===a&&++m===r&&(u=o),(j=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=j}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(no={focusedElem:e,selectionRange:n},mi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var _=E.memoizedProps,b=E.memoizedState,p=t.stateNode,l=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:Ue(t.type,_),b);p.__reactInternalSnapshotBeforeUpdate=l}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(h){K(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return E=jl,jl=!1,E}function er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&_o(t,n,a)}i=i.next}while(i!==r)}}function qi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bc(e){var t=e.alternate;t!==null&&(e.alternate=null,Bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[hr],delete t[ao],delete t[pp],delete t[hp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vc(e){return e.tag===5||e.tag===3||e.tag===4}function El(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ko(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yi));else if(r!==4&&(e=e.child,e!==null))for(ko(e,t,n),e=e.sibling;e!==null;)ko(e,t,n),e=e.sibling}function xo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xo(e,t,n),e=e.sibling;e!==null;)xo(e,t,n),e=e.sibling}var ie=null,Be=!1;function dt(e,t,n){for(n=n.child;n!==null;)Hc(e,t,n),n=n.sibling}function Hc(e,t,n){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Ri,n)}catch{}switch(n.tag){case 5:ue||cn(n,t);case 6:var r=ie,i=Be;ie=null,dt(e,t,n),ie=r,Be=i,ie!==null&&(Be?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Be?(e=ie,n=n.stateNode,e.nodeType===8?ya(e.parentNode,n):e.nodeType===1&&ya(e,n),ur(e)):ya(ie,n.stateNode));break;case 4:r=ie,i=Be,ie=n.stateNode.containerInfo,Be=!0,dt(e,t,n),ie=r,Be=i;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&_o(n,t,o),i=i.next}while(i!==r)}dt(e,t,n);break;case 1:if(!ue&&(cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){K(n,t,s)}dt(e,t,n);break;case 21:dt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,dt(e,t,n),ue=r):dt(e,t,n);break;default:dt(e,t,n)}}function zl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Np),t.forEach(function(r){var i=Dp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ie=s.stateNode,Be=!1;break e;case 3:ie=s.stateNode.containerInfo,Be=!0;break e;case 4:ie=s.stateNode.containerInfo,Be=!0;break e}s=s.return}if(ie===null)throw Error(P(160));Hc(a,o,i),ie=null,Be=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){K(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wc(t,e),t=t.sibling}function Wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Qe(e),r&4){try{er(3,e,e.return),qi(3,e)}catch(_){K(e,e.return,_)}try{er(5,e,e.return)}catch(_){K(e,e.return,_)}}break;case 1:Re(t,e),Qe(e),r&512&&n!==null&&cn(n,n.return);break;case 5:if(Re(t,e),Qe(e),r&512&&n!==null&&cn(n,n.return),e.flags&32){var i=e.stateNode;try{ar(i,"")}catch(_){K(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&pu(i,a),Wa(s,o);var f=Wa(s,a);for(o=0;o<u.length;o+=2){var m=u[o],y=u[o+1];m==="style"?yu(i,y):m==="dangerouslySetInnerHTML"?gu(i,y):m==="children"?ar(i,y):Fo(i,m,y,f)}switch(s){case"input":Da(i,a);break;case"textarea":hu(i,a);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var j=a.value;j!=null?fn(i,!!a.multiple,j,!1):v!==!!a.multiple&&(a.defaultValue!=null?fn(i,!!a.multiple,a.defaultValue,!0):fn(i,!!a.multiple,a.multiple?[]:"",!1))}i[hr]=a}catch(_){K(e,e.return,_)}}break;case 6:if(Re(t,e),Qe(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(_){K(e,e.return,_)}}break;case 3:if(Re(t,e),Qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ur(t.containerInfo)}catch(_){K(e,e.return,_)}break;case 4:Re(t,e),Qe(e);break;case 13:Re(t,e),Qe(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(hs=Y())),r&4&&zl(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(f=ue)||m,Re(t,e),ue=f):Re(t,e),Qe(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!m&&e.mode&1)for(T=e,m=e.child;m!==null;){for(y=T=m;T!==null;){switch(v=T,j=v.child,v.tag){case 0:case 11:case 14:case 15:er(4,v,v.return);break;case 1:cn(v,v.return);var E=v.stateNode;if(typeof E.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(_){K(r,n,_)}}break;case 5:cn(v,v.return);break;case 22:if(v.memoizedState!==null){Nl(y);continue}}j!==null?(j.return=v,T=j):Nl(y)}m=m.sibling}e:for(m=null,y=e;;){if(y.tag===5){if(m===null){m=y;try{i=y.stateNode,f?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=vu("display",o))}catch(_){K(e,e.return,_)}}}else if(y.tag===6){if(m===null)try{y.stateNode.nodeValue=f?"":y.memoizedProps}catch(_){K(e,e.return,_)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;m===y&&(m=null),y=y.return}m===y&&(m=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Re(t,e),Qe(e),r&4&&zl(e);break;case 21:break;default:Re(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vc(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ar(i,""),r.flags&=-33);var a=El(e);xo(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=El(e);ko(e,s,o);break;default:throw Error(P(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ap(e,t,n){T=e,qc(e)}function qc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wr;if(!o){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ue;s=Wr;var f=ue;if(Wr=o,(ue=u)&&!f)for(T=i;T!==null;)o=T,u=o.child,o.tag===22&&o.memoizedState!==null?Tl(i):u!==null?(u.return=o,T=u):Tl(i);for(;a!==null;)T=a,qc(a),a=a.sibling;T=i,Wr=s,ue=f}Cl(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,T=a):Cl(e)}}function Cl(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||qi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ue(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&pl(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pl(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var m=f.memoizedState;if(m!==null){var y=m.dehydrated;y!==null&&ur(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ue||t.flags&512&&wo(t)}catch(v){K(t,t.return,v)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Nl(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Tl(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qi(4,t)}catch(u){K(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){K(t,i,u)}}var a=t.return;try{wo(t)}catch(u){K(t,a,u)}break;case 5:var o=t.return;try{wo(t)}catch(u){K(t,o,u)}}}catch(u){K(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Op=Math.ceil,Ci=ut.ReactCurrentDispatcher,fs=ut.ReactCurrentOwner,Fe=ut.ReactCurrentBatchConfig,L=0,re=null,Z=null,ae=0,be=0,dn=Tt(0),ee=0,wr=null,Wt=0,Qi=0,ps=0,tr=null,ve=null,hs=0,Sn=1/0,et=null,Ni=!1,bo=null,Pt=null,qr=!1,_t=null,Ti=0,nr=0,So=null,ii=-1,ai=0;function fe(){return L&6?Y():ii!==-1?ii:ii=Y()}function jt(e){return e.mode&1?L&2&&ae!==0?ae&-ae:gp.transition!==null?(ai===0&&(ai=Nu()),ai):(e=D,e!==0||(e=window.event,e=e===void 0?16:Mu(e.type)),e):1}function We(e,t,n,r){if(50<nr)throw nr=0,So=null,Error(P(185));jr(e,n,r),(!(L&2)||e!==re)&&(e===re&&(!(L&2)&&(Qi|=n),ee===4&&vt(e,ae)),ke(e,r),n===1&&L===0&&!(t.mode&1)&&(Sn=Y()+500,Vi&&At()))}function ke(e,t){var n=e.callbackNode;gf(e,t);var r=hi(e,e===re?ae:0);if(r===0)n!==null&&Ds(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ds(n),t===1)e.tag===0?mp(Al.bind(null,e)):nc(Al.bind(null,e)),dp(function(){!(L&6)&&At()}),n=null;else{switch(Tu(r)){case 1:n=Do;break;case 4:n=zu;break;case 16:n=pi;break;case 536870912:n=Cu;break;default:n=pi}n=ed(n,Qc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qc(e,t){if(ii=-1,ai=0,L&6)throw Error(P(327));var n=e.callbackNode;if(vn()&&e.callbackNode!==n)return null;var r=hi(e,e===re?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ai(e,r);else{t=r;var i=L;L|=2;var a=Kc();(re!==e||ae!==t)&&(et=null,Sn=Y()+500,Dt(e,t));do try{Lp();break}catch(s){Gc(e,s)}while(!0);Jo(),Ci.current=a,L=i,Z!==null?t=0:(re=null,ae=0,t=ee)}if(t!==0){if(t===2&&(i=Ya(e),i!==0&&(r=i,t=Po(e,i))),t===1)throw n=wr,Dt(e,0),vt(e,r),ke(e,Y()),n;if(t===6)vt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ip(i)&&(t=Ai(e,r),t===2&&(a=Ya(e),a!==0&&(r=a,t=Po(e,a))),t===1))throw n=wr,Dt(e,0),vt(e,r),ke(e,Y()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Lt(e,ve,et);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=hs+500-Y(),10<t)){if(hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=io(Lt.bind(null,e,ve,et),t);break}Lt(e,ve,et);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-He(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Op(r/1960))-r,10<r){e.timeoutHandle=io(Lt.bind(null,e,ve,et),r);break}Lt(e,ve,et);break;case 5:Lt(e,ve,et);break;default:throw Error(P(329))}}}return ke(e,Y()),e.callbackNode===n?Qc.bind(null,e):null}function Po(e,t){var n=tr;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=Ai(e,t),e!==2&&(t=ve,ve=n,t!==null&&jo(t)),e}function jo(e){ve===null?ve=e:ve.push.apply(ve,e)}function Ip(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!qe(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~ps,t&=~Qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-He(t),r=1<<n;e[n]=-1,t&=~r}}function Al(e){if(L&6)throw Error(P(327));vn();var t=hi(e,0);if(!(t&1))return ke(e,Y()),null;var n=Ai(e,t);if(e.tag!==0&&n===2){var r=Ya(e);r!==0&&(t=r,n=Po(e,r))}if(n===1)throw n=wr,Dt(e,0),vt(e,t),ke(e,Y()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,ve,et),ke(e,Y()),null}function ms(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Sn=Y()+500,Vi&&At())}}function qt(e){_t!==null&&_t.tag===0&&!(L&6)&&vn();var t=L;L|=1;var n=Fe.transition,r=D;try{if(Fe.transition=null,D=1,e)return e()}finally{D=r,Fe.transition=n,L=t,!(L&6)&&At()}}function gs(){be=dn.current,V(dn)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cp(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Yo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_i();break;case 3:xn(),V(_e),V(ce),as();break;case 5:is(r);break;case 4:xn();break;case 13:V(W);break;case 19:V(W);break;case 10:es(r.type._context);break;case 22:case 23:gs()}n=n.return}if(re=e,Z=e=Et(e.current,null),ae=be=t,ee=0,wr=null,ps=Qi=Wt=0,ve=tr=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Rt=null}return e}function Gc(e,t){do{var n=Z;try{if(Jo(),ti.current=zi,Ei){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ei=!1}if(Ht=0,ne=J=q=null,Jn=!1,vr=0,fs.current=null,n===null||n.return===null){ee=1,wr=t,Z=null;break}e:{var a=e,o=n.return,s=n,u=t;if(t=ae,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,m=s,y=m.tag;if(!(m.mode&1)&&(y===0||y===11||y===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var j=_l(o);if(j!==null){j.flags&=-257,wl(j,o,s,a,t),j.mode&1&&yl(a,f,t),t=j,u=f;var E=t.updateQueue;if(E===null){var _=new Set;_.add(u),t.updateQueue=_}else E.add(u);break e}else{if(!(t&1)){yl(a,f,t),vs();break e}u=Error(P(426))}}else if(H&&s.mode&1){var b=_l(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),wl(b,o,s,a,t),Zo(bn(u,s));break e}}a=u=bn(u,s),ee!==4&&(ee=2),tr===null?tr=[a]:tr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=Tc(a,u,t);fl(a,p);break e;case 1:s=u;var l=a.type,c=a.stateNode;if(!(a.flags&128)&&(typeof l.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Pt===null||!Pt.has(c)))){a.flags|=65536,t&=-t,a.lanes|=t;var h=Ac(a,s,t);fl(a,h);break e}}a=a.return}while(a!==null)}Zc(n)}catch(g){t=g,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Kc(){var e=Ci.current;return Ci.current=zi,e===null?zi:e}function vs(){(ee===0||ee===3||ee===2)&&(ee=4),re===null||!(Wt&268435455)&&!(Qi&268435455)||vt(re,ae)}function Ai(e,t){var n=L;L|=2;var r=Kc();(re!==e||ae!==t)&&(et=null,Dt(e,t));do try{Fp();break}catch(i){Gc(e,i)}while(!0);if(Jo(),L=n,Ci.current=r,Z!==null)throw Error(P(261));return re=null,ae=0,ee}function Fp(){for(;Z!==null;)Yc(Z)}function Lp(){for(;Z!==null&&!sf();)Yc(Z)}function Yc(e){var t=Jc(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Zc(e):Z=t,fs.current=null}function Zc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cp(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,Z=null;return}}else if(n=zp(n,t,be),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ee===0&&(ee=5)}function Lt(e,t,n){var r=D,i=Fe.transition;try{Fe.transition=null,D=1,Mp(e,t,n,r)}finally{Fe.transition=i,D=r}return null}function Mp(e,t,n,r){do vn();while(_t!==null);if(L&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(vf(e,a),e===re&&(Z=re=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qr||(qr=!0,ed(pi,function(){return vn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Fe.transition,Fe.transition=null;var o=D;D=1;var s=L;L|=4,fs.current=null,Tp(e,n),Wc(n,e),rp(no),mi=!!to,no=to=null,e.current=n,Ap(n),lf(),L=s,D=o,Fe.transition=a}else e.current=n;if(qr&&(qr=!1,_t=e,Ti=i),a=e.pendingLanes,a===0&&(Pt=null),df(n.stateNode),ke(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ni)throw Ni=!1,e=bo,bo=null,e;return Ti&1&&e.tag!==0&&vn(),a=e.pendingLanes,a&1?e===So?nr++:(nr=0,So=e):nr=0,At(),null}function vn(){if(_t!==null){var e=Tu(Ti),t=Fe.transition,n=D;try{if(Fe.transition=null,D=16>e?16:e,_t===null)var r=!1;else{if(e=_t,_t=null,Ti=0,L&6)throw Error(P(331));var i=L;for(L|=4,T=e.current;T!==null;){var a=T,o=a.child;if(T.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var f=s[u];for(T=f;T!==null;){var m=T;switch(m.tag){case 0:case 11:case 15:er(8,m,a)}var y=m.child;if(y!==null)y.return=m,T=y;else for(;T!==null;){m=T;var v=m.sibling,j=m.return;if(Bc(m),m===f){T=null;break}if(v!==null){v.return=j,T=v;break}T=j}}}var E=a.alternate;if(E!==null){var _=E.child;if(_!==null){E.child=null;do{var b=_.sibling;_.sibling=null,_=b}while(_!==null)}}T=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,T=o;else e:for(;T!==null;){if(a=T,a.flags&2048)switch(a.tag){case 0:case 11:case 15:er(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,T=p;break e}T=a.return}}var l=e.current;for(T=l;T!==null;){o=T;var c=o.child;if(o.subtreeFlags&2064&&c!==null)c.return=o,T=c;else e:for(o=l;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:qi(9,s)}}catch(g){K(s,s.return,g)}if(s===o){T=null;break e}var h=s.sibling;if(h!==null){h.return=s.return,T=h;break e}T=s.return}}if(L=i,At(),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Ri,e)}catch{}r=!0}return r}finally{D=n,Fe.transition=t}}return!1}function Ol(e,t,n){t=bn(n,t),t=Tc(e,t,1),e=St(e,t,1),t=fe(),e!==null&&(jr(e,1,t),ke(e,t))}function K(e,t,n){if(e.tag===3)Ol(e,e,n);else for(;t!==null;){if(t.tag===3){Ol(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pt===null||!Pt.has(r))){e=bn(n,e),e=Ac(t,e,1),t=St(t,e,1),e=fe(),t!==null&&(jr(t,1,e),ke(t,e));break}}t=t.return}}function Rp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(ae&n)===n&&(ee===4||ee===3&&(ae&130023424)===ae&&500>Y()-hs?Dt(e,0):ps|=n),ke(e,t)}function Xc(e,t){t===0&&(e.mode&1?(t=Lr,Lr<<=1,!(Lr&130023424)&&(Lr=4194304)):t=1);var n=fe();e=st(e,t),e!==null&&(jr(e,t,n),ke(e,n))}function $p(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xc(e,n)}function Dp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Xc(e,n)}var Jc;Jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ye=!1,Ep(e,t,n);ye=!!(e.flags&131072)}else ye=!1,H&&t.flags&1048576&&rc(t,xi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ri(e,t),e=t.pendingProps;var i=_n(t,ce.current);gn(t,n),i=ss(null,t,r,e,i,n);var a=ls();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(a=!0,wi(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ns(t),i.updater=Wi,t.stateNode=i,i._reactInternals=t,fo(t,r,e,n),t=mo(null,t,r,!0,a,n)):(t.tag=0,H&&a&&Ko(t),de(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ri(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Bp(r),e=Ue(r,e),i){case 0:t=ho(null,t,r,e,n);break e;case 1:t=bl(null,t,r,e,n);break e;case 11:t=kl(null,t,r,e,n);break e;case 14:t=xl(null,t,r,Ue(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),ho(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),bl(e,t,r,i,n);case 3:e:{if(Lc(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,i=a.element,uc(e,t),Pi(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=bn(Error(P(423)),t),t=Sl(e,t,r,n,i);break e}else if(r!==i){i=bn(Error(P(424)),t),t=Sl(e,t,r,n,i);break e}else for(Se=bt(t.stateNode.containerInfo.firstChild),Pe=t,H=!0,Ve=null,n=sc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===i){t=lt(e,t,n);break e}de(e,t,r,n)}t=t.child}return t;case 5:return cc(t),e===null&&lo(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,ro(r,i)?o=null:a!==null&&ro(r,a)&&(t.flags|=32),Fc(e,t),de(e,t,o,n),t.child;case 6:return e===null&&lo(t),null;case 13:return Mc(e,t,n);case 4:return rs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kn(t,null,r,n):de(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),kl(e,t,r,i,n);case 7:return de(e,t,t.pendingProps,n),t.child;case 8:return de(e,t,t.pendingProps.children,n),t.child;case 12:return de(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,U(bi,r._currentValue),r._currentValue=o,a!==null)if(qe(a.value,o)){if(a.children===i.children&&!_e.current){t=lt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=it(-1,n&-n),u.tag=2;var f=a.updateQueue;if(f!==null){f=f.shared;var m=f.pending;m===null?u.next=u:(u.next=m.next,m.next=u),f.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),uo(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(P(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),uo(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}de(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,gn(t,n),i=Le(i),r=r(i),t.flags|=1,de(e,t,r,n),t.child;case 14:return r=t.type,i=Ue(r,t.pendingProps),i=Ue(r.type,i),xl(e,t,r,i,n);case 15:return Oc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ue(r,i),ri(e,t),t.tag=1,we(r)?(e=!0,wi(t)):e=!1,gn(t,n),Nc(t,r,i),fo(t,r,i,n),mo(null,t,r,!0,e,n);case 19:return Rc(e,t,n);case 22:return Ic(e,t,n)}throw Error(P(156,t.tag))};function ed(e,t){return Eu(e,t)}function Up(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new Up(e,t,n,r)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bp(e){if(typeof e=="function")return ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mo)return 11;if(e===Ro)return 14}return 2}function Et(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oi(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")ys(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case en:return Ut(n.children,i,a,t);case Lo:o=8,i|=8;break;case Fa:return e=Ie(12,n,t,i|2),e.elementType=Fa,e.lanes=a,e;case La:return e=Ie(13,n,t,i),e.elementType=La,e.lanes=a,e;case Ma:return e=Ie(19,n,t,i),e.elementType=Ma,e.lanes=a,e;case cu:return Gi(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lu:o=10;break e;case uu:o=9;break e;case Mo:o=11;break e;case Ro:o=14;break e;case ht:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Ie(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ut(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Gi(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=cu,e.lanes=n,e.stateNode={isHidden:!1},e}function ja(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _s(e,t,n,r,i,a,o,s,u){return e=new Vp(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ie(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ns(a),e}function Hp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function td(e){if(!e)return Ct;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(we(n))return tc(e,n,t)}return t}function nd(e,t,n,r,i,a,o,s,u){return e=_s(n,r,!0,e,i,a,o,s,u),e.context=td(null),n=e.current,r=fe(),i=jt(n),a=it(r,i),a.callback=t??null,St(n,a,i),e.current.lanes=i,jr(e,i,r),ke(e,r),e}function Ki(e,t,n,r){var i=t.current,a=fe(),o=jt(i);return n=td(n),t.context===null?t.context=n:t.pendingContext=n,t=it(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=St(i,t,o),e!==null&&(We(e,i,o,a),ei(e,i,o)),o}function Oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Il(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ws(e,t){Il(e,t),(e=e.alternate)&&Il(e,t)}function Wp(){return null}var rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ks(e){this._internalRoot=e}Yi.prototype.render=ks.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ki(e,t,null,null)};Yi.prototype.unmount=ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){Ki(null,e,null,null)}),t[ot]=null}};function Yi(e){this._internalRoot=e}Yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Iu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&Lu(e)}};function xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fl(){}function qp(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var f=Oi(o);a.call(f)}}var o=nd(t,r,e,0,null,!1,!1,"",Fl);return e._reactRootContainer=o,e[ot]=o.current,fr(e.nodeType===8?e.parentNode:e),qt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var f=Oi(u);s.call(f)}}var u=_s(e,0,!1,null,null,!1,!1,"",Fl);return e._reactRootContainer=u,e[ot]=u.current,fr(e.nodeType===8?e.parentNode:e),qt(function(){Ki(t,u,n,r)}),u}function Xi(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var u=Oi(o);s.call(u)}}Ki(t,o,e,i)}else o=qp(n,t,e,i,r);return Oi(o)}Au=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bn(t.pendingLanes);n!==0&&(Uo(t,n|1),ke(t,Y()),!(L&6)&&(Sn=Y()+500,At()))}break;case 13:qt(function(){var r=st(e,1);if(r!==null){var i=fe();We(r,e,1,i)}}),ws(e,1)}};Bo=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var n=fe();We(t,e,134217728,n)}ws(e,134217728)}};Ou=function(e){if(e.tag===13){var t=jt(e),n=st(e,t);if(n!==null){var r=fe();We(n,e,t,r)}ws(e,t)}};Iu=function(){return D};Fu=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Qa=function(e,t,n){switch(t){case"input":if(Da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bi(r);if(!i)throw Error(P(90));fu(r),Da(r,i)}}}break;case"textarea":hu(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};ku=ms;xu=qt;var Qp={usingClientEntryPoint:!1,Events:[zr,an,Bi,_u,wu,ms]},Rn={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gp={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||Wp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Ri=Qr.inject(Gp),Ze=Qr}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;Ee.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xs(t))throw Error(P(200));return Hp(e,t,null,n)};Ee.createRoot=function(e,t){if(!xs(e))throw Error(P(299));var n=!1,r="",i=rd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_s(e,1,!1,null,null,n,!1,r,i),e[ot]=t.current,fr(e.nodeType===8?e.parentNode:e),new ks(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Pu(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return qt(e)};Ee.hydrate=function(e,t,n){if(!Zi(t))throw Error(P(200));return Xi(null,e,t,!0,n)};Ee.hydrateRoot=function(e,t,n){if(!xs(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=rd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=nd(t,null,e,1,n??null,i,!1,a,o),e[ot]=t.current,fr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yi(t)};Ee.render=function(e,t,n){if(!Zi(t))throw Error(P(200));return Xi(null,e,t,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Zi(e))throw Error(P(40));return e._reactRootContainer?(qt(function(){Xi(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};Ee.unstable_batchedUpdates=ms;Ee.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zi(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Xi(e,t,n,!1,r)};Ee.version="18.3.1-next-f1338f8080-20240426";function id(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(id)}catch(e){console.error(e)}}id(),iu.exports=Ee;var Kp=iu.exports,ad,Ll=Kp;ad=Ll.createRoot,Ll.hydrateRoot;function Ml(e){const n=e.replace(/^#\/?/,"").match(/^algo\/([\w-]+)/);return n?{page:"algo",id:n[1]}:{page:"home"}}function Yp(){const[e,t]=M.useState(()=>Ml(window.location.hash));return M.useEffect(()=>{const n=()=>t(Ml(window.location.hash));return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),e}const Zp=["Practical performance first: how fast it is on real hardware for typical inputs (cache behaviour, constant factors, adaptivity to presorted data).","Then average and worst-case complexity: O(n log n) comparison sorts beat O(n²) ones; guaranteed worst cases beat ones that can degrade.","Stability and generality break ties: a stable, general-purpose comparison sort beats one that only works on bounded integers or needs extra conditions.","Non-comparison sorts (radix, counting, bucket) can be the fastest of all on integer keys, but they are ranked below the general-purpose sorts because they only work on keys with bounded size or range.","Novelty / teaching-only algorithms (pancake, bogo) come last."],Xp="Notation: arr = the array being sorted; n = number of elements in arr; arr[i] = the element at index i (counting from 0); lo..hi = the range currently being worked on; O(...) = how the work grows with n.",$e=[1e3,5e3,2e4,5e4,1e5],ft=[100,500,1e3,2e3,4e3],De=1e5,pt=2e4,X=120,Pn=[{id:"timsort",name:"Timsort (hybrid)",rank:1,family:"Hybrid merge + insertion",summary:"Finds naturally ordered runs, extends short runs with binary insertion sort, and merges runs with a balanced stack.",why:"Default sort in Python, Java (objects), Android, V8: stable, O(n log n) worst case and O(n) on already-sorted or run-structured data.",best:"O(n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(n)",stable:!0,inPlace:!1,growth:"nlogn",suitable:"General-purpose sorting, especially real-world data that is partially sorted, and whenever stability matters.",bad:"Random data of primitives where an unstable in-place quicksort variant is slightly faster and needs no buffer.",uses:["Python list.sort / sorted","Java Arrays.sort for objects, Collections.sort","V8 Array.prototype.sort","Rust slice::sort (driftsort, a descendant)"],steps:["Pick a minimum run length, minRun, between 32 and 64 so that n / minRun (n = number of elements) is close to a power of two.","Scan left to right for a natural run: an ascending or strictly descending sequence (reverse descending runs).","If the run is shorter than minRun, extend it with binary insertion sort.","Push the run onto a stack. Look at the lengths of the three runs on top (A, B, and C on the very top); while A ≤ B + C or B ≤ C, merge neighbouring runs so the stack stays balanced.","At the end, merge everything left on the stack. Merges take from the left run on ties, keeping the sort stable."],pseudocode:`timsort(arr):
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
  merge all remaining runs`,maxInput:De,maxViz:X,benchSizes:$e},{id:"introsort",name:"Introsort",rank:2,family:"Hybrid quick + heap + insertion",summary:"Quicksort with median-of-three pivots that switches to heapsort when recursion gets too deep and to insertion sort for tiny ranges.",why:"Quicksort speed with a guaranteed O(n log n) worst case and O(log n) space; the basis of C++ std::sort and .NET Array.Sort. Unstable, so ranked just below Timsort.",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(log n)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Sorting primitives in place when stability is not needed and worst-case guarantees are.",bad:"When stability is required, or data is mostly sorted (it does not exploit existing order like Timsort).",uses:["C++ std::sort (libstdc++, MSVC)",".NET Array.Sort","Go sort.Sort (pdqsort, a descendant)"],steps:["Set a depth limit of about 2·log2(n), where n = number of elements.","While the range has more than 16 elements: if the depth limit hits 0, heapsort this range and stop.","Otherwise put the median of first, middle and last at the end as the pivot, then partition: i walks the range and every element smaller than the pivot is swapped to storePos, which then moves right.","Swap the pivot into storePos (its final place). Recurse into the smaller side and loop on the larger one (bounded stack).","Finish small ranges with insertion sort."],pseudocode:`introsort(arr, lo, hi, depth):
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
  insertionSort(arr, lo, hi)`,maxInput:De,maxViz:X,benchSizes:$e},{id:"quick",name:"Quick sort (3-way)",rank:3,family:"Divide & conquer (partition)",summary:"Pick a random element as the pivot, split the array into three blocks (smaller than, equal to, and larger than the pivot; Dijkstra 3-way partitioning), then sort the smaller and larger blocks the same way.",why:"Usually the fastest pure comparison sort in practice thanks to cache-friendly in-place partitioning; the 3-way variant handles duplicates in linear time. Worst case is still O(n²) (very unlikely with random pivots).",best:"O(n)",avg:"O(n log n)",worst:"O(n²)",space:"O(log n)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Large arrays of primitives in memory, especially with many duplicate keys (3-way).",bad:"Adversarial inputs against a fixed pivot rule, or when stability / a hard worst-case bound is required.",uses:["Building block of introsort / pdqsort","Java Arrays.sort for primitives (dual-pivot quicksort)","C qsort implementations"],steps:["Work on the range lo..hi (at first, the whole array). If it has fewer than two elements, it is already sorted.","Pick a random element as the pivot and move it to the front of the range.",'Move i from left to right over the range and compare each element with the pivot. Elements smaller than the pivot are swapped into the "less" block at the left (less end grows by one). Elements larger than the pivot are swapped into the "greater" block at the right (greater start moves one left). Elements equal to the pivot stay in the middle.',"When i passes greater start, the range is split into three blocks: smaller than the pivot, equal to the pivot (already in their final place), and larger than the pivot.","Sort the less and greater blocks the same way (the smaller block first, to keep the recursion shallow)."],pseudocode:`quick3(arr, lo, hi):
  if hi ≤ lo: return
  swap arr[lo], arr[random index in lo..hi]
  pivot ← arr[lo]
  lessEnd ← lo; i ← lo + 1; greaterStart ← hi
  while i ≤ greaterStart:
    if arr[i] < pivot: swap arr[lessEnd], arr[i]; lessEnd++; i++
    else if arr[i] > pivot: swap arr[i], arr[greaterStart]; greaterStart--
    else: i++
  quick3(arr, lo, lessEnd - 1)
  quick3(arr, greaterStart + 1, hi)`,maxInput:De,maxViz:X,benchSizes:$e},{id:"merge",name:"Merge sort",rank:4,family:"Divide & conquer (merge)",summary:"Split the array in half, sort each half recursively, then merge the two sorted halves.",why:"Stable with a guaranteed O(n log n) worst case and very predictable; needs O(n) extra memory and does not adapt to presorted input (Timsort fixes that).",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(n)",stable:!0,inPlace:!1,growth:"nlogn",suitable:"Stable sorting, linked lists, external (on-disk) sorting, parallel sorting.",bad:"Memory-constrained environments (O(n) buffer) and tiny arrays (recursion overhead).",uses:["External sorting of huge files","Sorting linked lists","Counting inversions","GNU sort"],steps:["If the range lo..hi has fewer than two elements, it is sorted.","Split it at mid and sort both halves recursively.","Merge: leftPos and rightPos walk the two halves; repeatedly copy the smaller of arr[leftPos] and arr[rightPos] to writePos (the left one on ties, for stability).","Copy whatever remains of either half."],pseudocode:`mergeSort(arr, lo, hi):
  if hi - lo < 2: return
  mid ← (lo + hi) / 2
  mergeSort(arr, lo, mid); mergeSort(arr, mid, hi)
  leftPos ← lo; rightPos ← mid
  for writePos in lo..hi-1:
    if rightPos ≥ hi or (leftPos < mid and arr[leftPos] ≤ arr[rightPos]):
      temp[writePos] ← arr[leftPos++]
    else: temp[writePos] ← arr[rightPos++]
  copy temp[lo..hi) to arr[lo..hi)`,maxInput:De,maxViz:X,benchSizes:$e},{id:"heap",name:"Heap sort",rank:5,family:"Selection via binary heap",summary:"Build a max-heap in the array, then repeatedly swap the maximum to the end and restore the heap.",why:"Guaranteed O(n log n) with O(1) extra space, but poor cache locality makes it 2-3x slower than quicksort in practice, and it is unstable.",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(1)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Hard real-time or memory-constrained systems that need a worst-case bound with no extra memory; partial sorting / top-k.",bad:"Large arrays on modern CPUs (cache misses), and when stability is needed.",uses:["Introsort fallback","Priority queues / top-k selection","Embedded systems (Linux kernel lib/sort.c)"],steps:["Heapify (n = number of elements): sift down every parent node from n/2 - 1 to 0, so every node ≥ its children.","Swap the root (maximum) with the element at heapEnd, the last slot of the heap; that slot is now final and heapEnd moves left.","Sift the new root down: compare the node with its larger child and swap while the child is bigger.","Repeat until the heap has one element."],pseudocode:`heapSort(arr):
  for node ← n/2 - 1 downto 0: siftDown(arr, node, n)
  for heapEnd ← n - 1 downto 1:
    swap arr[0], arr[heapEnd]
    siftDown(arr, 0, heapEnd)    // heap is now arr[0..heapEnd)

siftDown(arr, node, size):
  while 2·node + 1 < size:
    child ← larger of the children of node
    if arr[node] ≥ arr[child]: return
    swap arr[node], arr[child]; node ← child`,maxInput:De,maxViz:X,benchSizes:$e},{id:"radix",name:"Radix sort (LSD)",rank:6,family:"Non-comparison (digit distribution)",summary:"Sort by one byte (digit) at a time from least to most significant, using a stable counting pass per digit.",why:"Linear time O(n·k) (n = number of elements, k = number of byte digits per key) for fixed-width integer keys and often the fastest option for large integer arrays, but only works for keys that decompose into digits.",best:"O(n·k)",avg:"O(n·k)",worst:"O(n·k)",space:"O(n + b)",stable:!0,inPlace:!1,growth:"nk",suitable:"Large arrays of integers or fixed-length strings (k = number of digits, b = radix 256 here).",bad:"Floating point or arbitrary comparison-based keys; small arrays where the per-pass overhead dominates; very wide keys.",uses:["GPU sorting (CUB, Thrust)","Suffix-array construction","Sorting IP addresses / fixed-width IDs","Database column stores"],steps:["Offset every value by the minimum so keys are non-negative.","For each byte position from the lowest: count how many keys have each byte value (0-255).","Prefix-sum the counts into starting positions and place each key stably into an output buffer.","Swap buffers and continue with the next byte until the highest non-zero byte of the max key.","Add the minimum back."],pseudocode:`radixLSD(arr):
  for each index i: key[i] ← arr[i] - min(arr)
  for shift ← 0, 8, 16, ... while (maxKey >> shift) > 0:
    count[0..256] ← 0
    for each keyValue in key: count[digit(keyValue, shift) + 1]++   // digit = (keyValue >> shift) & 255
    prefix-sum count            // count[digit] = first output slot for that digit
    for each keyValue in key: output[count[digit(keyValue, shift)]++] ← keyValue
    swap key, output
  for each index i: arr[i] ← key[i] + min(arr)`,maxInput:De,maxViz:X,benchSizes:$e},{id:"counting",name:"Counting sort",rank:7,family:"Non-comparison (counting)",summary:"Count how many times each value occurs, then write the values back in order.",why:"O(n + k) (n = number of elements, k = max - min + 1, the size of the value range) and extremely fast when k is small, but memory grows with the range so it is useless for wide keys (this site limits max - min to under 1,000,000).",best:"O(n + k)",avg:"O(n + k)",worst:"O(n + k)",space:"O(k)",stable:!0,inPlace:!1,growth:"n",suitable:"Integers in a small known range: ages, grades, bytes, histogram buckets.",bad:"Large value ranges (k ≫ n) or non-integer keys.",uses:["Building block of radix sort","Sorting bytes / characters","Histogram equalisation in image processing"],steps:["Find the minimum and maximum value; k = max - min + 1.","Allocate k counters and count occurrences of each value.","Walk the counters in increasing order and write each value at writePos as many times as it was counted."],pseudocode:`countingSort(arr):
  lo ← min(arr); hi ← max(arr)
  count[0..hi-lo] ← 0
  for value in arr: count[value - lo]++
  writePos ← 0
  for offset ← 0 to hi - lo:
    repeat count[offset] times: arr[writePos++] ← offset + lo`,maxInput:De,maxViz:X,benchSizes:$e},{id:"bucket",name:"Bucket sort",rank:8,family:"Non-comparison (distribution)",summary:"Scatter values into n buckets by value range, sort each bucket with insertion sort, then concatenate.",why:"Expected O(n + k) (n = number of elements, k = number of buckets, here k = n) for uniformly distributed data, but skewed data piles into a few buckets and degrades to O(n²) (insertion sort inside a bucket).",best:"O(n + k)",avg:"O(n + k)",worst:"O(n²)",space:"O(n + k)",stable:!0,inPlace:!1,growth:"n",suitable:"Uniformly distributed keys (e.g. random floats in [0, 1)) and as a parallel / external sorting stage.",bad:"Clustered or skewed distributions, where many values land in the same bucket.",uses:["Sorting uniformly distributed floats","Histogram-based parallel sorts (sample sort)","Graphics: depth bucketing"],steps:["Find min and max. Each value goes to bucket number (value - min) · n / (max - min + 1), where n = number of elements (also the number of buckets).","Append every value to its bucket.","Sort each bucket with insertion sort (buckets are small on uniform data).","Concatenate the buckets in order."],pseudocode:`bucketSort(arr):
  lo ← min(arr); range ← max(arr) - lo + 1
  buckets[0..n-1] ← empty lists
  for value in arr: append value to buckets[(value - lo) · n / range]
  for each bucket: insertionSort(bucket)
  arr ← buckets[0] + buckets[1] + ... + buckets[n-1]`,maxInput:De,maxViz:X,benchSizes:$e},{id:"shell",name:"Shell sort",rank:9,family:"Insertion (diminishing gaps)",summary:"Insertion sort over elements a gap apart, with the gap shrinking (Ciura sequence 701, 301, 132, 57, 23, 10, 4, 1).",why:"Simple, in place, no recursion and surprisingly fast for medium-sized arrays (roughly O(n^1.3) in practice, n = number of elements), but no proven O(n log n) bound and unstable.",best:"O(n log n)",avg:"≈ O(n^1.3) (gap dependent)",worst:"O(n^1.5) or worse",space:"O(1)",stable:!1,inPlace:!0,growth:"n32",suitable:"Embedded systems and medium-sized arrays where code size and no-recursion matter.",bad:"Very large arrays (falls behind O(n log n) sorts) and when stability is needed.",uses:["uClibc qsort","bzip2 compressor","Embedded firmware"],steps:["Choose a decreasing gap sequence ending in 1.","For each gap: do an insertion sort where the key (taken from current) is compared with the element gap positions to the left of the hole.","Large gaps move far-away elements quickly; the final gap = 1 pass is a plain insertion sort on nearly sorted data."],pseudocode:`shellSort(arr):
  for gap in [..., 701, 301, 132, 57, 23, 10, 4, 1] with gap < n:
    for current ← gap to n - 1:
      key ← arr[current]; hole ← current
      while hole ≥ gap and key < arr[hole - gap]:
        arr[hole] ← arr[hole - gap]; hole ← hole - gap
      arr[hole] ← key`,maxInput:De,maxViz:X,benchSizes:$e},{id:"comb",name:"Comb sort",rank:10,family:"Exchange (shrinking gap)",summary:'Bubble sort that compares elements a gap apart, shrinking the gap by 1.3 each pass to kill "turtles" (small values near the end).',why:"Much faster than bubble sort (close to O(n log n) on random data) with tiny code, but O(n²) worst case and unstable.",best:"O(n log n)",avg:"Ω(n² / 2^p), p = number of gap shrinks; ≈ n log n in practice",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"When you need something tiny and much better than bubble sort.",bad:"Large data sets where real O(n log n) sorts win, and stability requirements.",uses:["Teaching gap-based improvements","Tiny embedded code"],steps:["Start with gap = n, the number of elements.","Each pass: gap ← floor(gap / 1.3) (at least 1); compare-and-swap every pair (left, right = left + gap).","Stop after a pass with gap = 1 that made no swaps."],pseudocode:`combSort(arr):
  gap ← n; sorted ← false
  while not sorted:
    gap ← floor(gap / 1.3)
    if gap ≤ 1: gap ← 1; sorted ← true
    for left ← 0 to n - gap - 1:
      right ← left + gap
      if arr[right] < arr[left]:
        swap arr[left], arr[right]; sorted ← false`,maxInput:De,maxViz:X,benchSizes:$e},{id:"bitonic",name:"Bitonic sort",rank:11,family:"Sorting network",summary:"Recursively build bitonic sequences (ascending then descending) and merge them with a fixed pattern of compare-exchanges.",why:"Data-independent compare pattern is ideal for GPUs, SIMD and hardware, but O(n log² n) comparisons make it slower than O(n log n) sorts on a CPU.",best:"O(n log² n)",avg:"O(n log² n)",worst:"O(n log² n)",space:"O(log n) recursion",stable:!1,inPlace:!0,growth:"nlog2n",suitable:"Parallel hardware: GPUs, FPGAs, SIMD lanes, sorting networks.",bad:"Sequential CPU code, where the extra log factor costs real time.",uses:["GPU sorting kernels","Hardware sorting networks","SIMD sorting of small blocks"],steps:["Sort the first half ascending-reversed (descending) and the second half ascending, recursively; together they form a bitonic sequence.","Bitonic merge: let distance = the largest power of two below the length; compare-exchange each element left with the element distance positions to its right, in the requested direction.","Recursively bitonic-merge both parts. This generalisation works for any number of elements, not just powers of two."],pseudocode:`bitonicSort(arr, lo, count, ascending):   // sort count elements starting at lo
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
  bitonicMerge(arr, lo + distance, count - distance, ascending)`,maxInput:De,maxViz:X,benchSizes:$e},{id:"insertion",name:"Insertion sort",rank:12,family:"Insertion",summary:"Grow a sorted prefix by taking the next element and shifting larger elements right until its slot is found.",why:"The best O(n²) sort: stable, in place, adaptive (O(n) on nearly sorted data) and the fastest choice for tiny arrays, which is why hybrids use it.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Small arrays (< ~20-50 elements), nearly sorted data, online sorting as items arrive.",bad:"Large or reverse-ordered arrays (quadratic shifts).",uses:["Small-range base case in Timsort, introsort, pdqsort","Online insertion into a sorted list","Card players sorting a hand"],steps:["Treat arr[0] as a sorted part.","Take the next element, current, out of the array: its value is the key and its slot becomes the hole.","While the element left of the hole is larger than the key, shift it right into the hole; the hole moves one step left.","Drop the key into the hole. The sorted part is one longer."],pseudocode:`insertionSort(arr):
  for current ← 1 to n - 1:
    key ← arr[current]; hole ← current
    while hole > 0 and key < arr[hole - 1]:
      arr[hole] ← arr[hole - 1]; hole ← hole - 1
    arr[hole] ← key`,maxInput:pt,maxViz:X,benchSizes:ft},{id:"selection",name:"Selection sort",rank:13,family:"Selection",summary:"Repeatedly find the minimum of the unsorted suffix and swap it to the front.",why:"Always about n²/2 comparisons (n = number of elements) (not adaptive) and unstable, but makes at most n - 1 swaps, which helps when writes are expensive.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"Tiny arrays where swaps (writes) are much more expensive than comparisons.",bad:"Anything large; it never benefits from presorted input.",uses:["Teaching","Flash/EEPROM where writes wear the memory","Selecting the few smallest items (stop the outer loop early)"],steps:["For each fillPos from left to right:","move i over the unsorted part arr[fillPos..n) and remember minIndex, the index of the smallest value seen;","swap arr[minIndex] into fillPos. That slot is now final."],pseudocode:`selectionSort(arr):
  for fillPos ← 0 to n - 2:
    minIndex ← fillPos
    for i ← fillPos + 1 to n - 1:
      if arr[i] < arr[minIndex]: minIndex ← i
    swap arr[fillPos], arr[minIndex]`,maxInput:pt,maxViz:X,benchSizes:ft},{id:"cocktail",name:"Cocktail shaker sort",rank:14,family:"Exchange",summary:"Bubble sort that alternates forward and backward passes, moving large values right and small values left each round.",why:"Slightly better than bubble sort (turtles move left fast) and stable/adaptive, but still O(n²) with lots of swaps.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching; nearly sorted data with a few misplaced elements at either end.",bad:"Random or large data.",uses:["Teaching bidirectional passes"],steps:["Forward pass: move i from lo to hi, bubbling the largest unsorted value to hi.","Backward pass: move i from hi back to lo, bubbling the smallest unsorted value to lo.","Move lo right and hi left (everything outside lo..hi is final) and repeat until a full round makes no swap."],pseudocode:`cocktailSort(arr):
  lo ← 0; hi ← n - 1; swapped ← true
  while swapped and lo < hi:
    swapped ← false
    for i ← lo to hi - 1: if arr[i+1] < arr[i]: swap arr[i], arr[i+1]; swapped ← true
    hi ← hi - 1
    for i ← hi downto lo + 1: if arr[i] < arr[i-1]: swap arr[i], arr[i-1]; swapped ← true
    lo ← lo + 1`,maxInput:pt,maxViz:X,benchSizes:ft},{id:"bubble",name:"Bubble sort",rank:15,family:"Exchange",summary:"Repeatedly swap adjacent out-of-order pairs; each pass bubbles the largest remaining value to the end.",why:"Stable and adaptive with an early exit, but the most swaps of any common algorithm and poor practical speed.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching, or checking whether a tiny array is already sorted (one pass).",bad:'Everything else, especially small values near the end ("turtles").',uses:["Teaching","Detecting a nearly sorted array in one pass"],steps:["Move i through the unsorted part, comparing each neighbouring pair arr[i - 1] and arr[i]; swap them if they are out of order.","After a pass, the largest remaining value has bubbled to the end, so sortedFrom moves left: from sortedFrom to the end everything is final.","Stop early if a pass makes no swaps."],pseudocode:`bubbleSort(arr):
  sortedFrom ← n
  while sortedFrom > 1:
    swapped ← false
    for i ← 1 to sortedFrom - 1:
      if arr[i] < arr[i - 1]: swap arr[i], arr[i - 1]; swapped ← true
    sortedFrom ← sortedFrom - 1
    if not swapped: break`,maxInput:pt,maxViz:X,benchSizes:ft},{id:"odd-even",name:"Odd-even sort",rank:16,family:"Exchange (parallel)",summary:"Alternate compare-swap passes over odd-indexed pairs (1,2), (3,4)... and even-indexed pairs (0,1), (2,3)... until sorted.",why:"Each phase is fully parallel (n/2 independent compare-swaps, n = number of elements), which suits SIMD/processor arrays, but sequentially it is as slow as bubble sort.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Parallel processor arrays / meshes where each processor holds one element.",bad:"Sequential code on large data.",uses:["Parallel sorting on processor arrays","Teaching sorting networks"],steps:["Odd phase: compare-swap the pairs starting at odd indexes: (1,2), (3,4), (5,6), ...","Even phase: compare-swap the pairs starting at even indexes: (0,1), (2,3), (4,5), ...","Repeat both phases until a full round makes no swap. pairStart marks the first element of the pair being compared."],pseudocode:`oddEvenSort(arr):
  sorted ← false
  while not sorted:
    sorted ← true
    for phase in [1, 0]:
      for pairStart ← phase; pairStart + 1 < n; pairStart ← pairStart + 2:
        if arr[pairStart+1] < arr[pairStart]:
          swap arr[pairStart], arr[pairStart+1]; sorted ← false`,maxInput:pt,maxViz:X,benchSizes:ft},{id:"gnome",name:"Gnome sort",rank:17,family:"Exchange (insertion-like)",summary:"A garden gnome walks forward while pots are in order; when two are out of order he swaps them and steps back.",why:"Conceptually insertion sort done with swaps: stable and adaptive but does about 3x the work of insertion sort.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching; extremely small code size.",bad:"Any real workload.",uses:["Teaching","Code-golf"],steps:["The gnome starts at gnomePos = 0.","If it is at the start or arr[gnomePos] ≥ arr[gnomePos - 1], it steps forward.","Otherwise it swaps the two and steps back.","Done when the gnome walks off the end."],pseudocode:`gnomeSort(arr):
  gnomePos ← 0
  while gnomePos < n:
    if gnomePos = 0 or arr[gnomePos] ≥ arr[gnomePos - 1]: gnomePos++
    else: swap arr[gnomePos], arr[gnomePos - 1]; gnomePos--`,maxInput:pt,maxViz:X,benchSizes:ft},{id:"cycle",name:"Cycle sort",rank:18,family:"Selection (cycle rotation)",summary:"For each position, count how many elements are smaller to find where its item belongs, and rotate the whole permutation cycle into place.",why:"Theoretically optimal number of memory writes (each element written at most once), but always Θ(n²) comparisons and unstable.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"Memory where writes are extremely expensive (EEPROM, flash) and n is small.",bad:"Anything where comparisons cost time: it is never adaptive.",uses:["Minimising writes to flash / EEPROM","Finding the minimum swaps to sort a permutation"],steps:["Pick up item = arr[cycleStart]; its targetPos is cycleStart + (the number of later elements smaller than it, counted by moving i over them).","Skip past equal values, then put the item at targetPos and pick up the value that was there.","Repeat for the carried value until the cycle returns to cycleStart.","Move cycleStart to the next position."],pseudocode:`cycleSort(arr):
  for cycleStart ← 0 to n - 2:
    item ← arr[cycleStart]
    targetPos ← cycleStart + (number of indexes i > cycleStart with arr[i] < item)
    if targetPos = cycleStart: continue
    while item = arr[targetPos]: targetPos++
    swap item, arr[targetPos]
    while targetPos ≠ cycleStart:
      targetPos ← cycleStart + (number of indexes i > cycleStart with arr[i] < item)
      while item = arr[targetPos]: targetPos++
      if item ≠ arr[targetPos]: swap item, arr[targetPos]`,maxInput:pt,maxViz:X,benchSizes:ft},{id:"pancake",name:"Pancake sort",rank:19,family:"Selection (prefix reversal)",summary:'Only allowed operation is "flip the top few pancakes": flip the largest to the top, then flip it to the bottom of the unsorted stack.',why:"A puzzle-inspired sort: O(n) flips (n = number of elements) but each flip costs O(n) element moves, so O(n²) overall with heavy data movement.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"When prefix reversal is the only primitive available (e.g. some hardware / genome rearrangement models).",bad:"Any practical sorting task.",uses:["Genome rearrangement research","Interconnection-network routing (pancake graphs)","Bill Gates's only research paper"],steps:["The unsorted part is arr[0..lastUnsorted]; it starts as the whole array.","move i over it to find maxIndex, the position of its largest value;","flip the prefix ending at maxIndex (the maximum comes to the front), then flip the prefix ending at lastUnsorted (the maximum goes to lastUnsorted). lastUnsorted moves one left."],pseudocode:`pancakeSort(arr):
  for unsortedSize ← n downto 2:
    lastUnsorted ← unsortedSize - 1
    maxIndex ← index of max(arr[0..lastUnsorted])
    if maxIndex ≠ lastUnsorted:
      flip(arr, maxIndex)       // reverse arr[0..maxIndex]
      flip(arr, lastUnsorted)   // reverse arr[0..lastUnsorted]`,maxInput:pt,maxViz:X,benchSizes:ft},{id:"bogo",name:"Bogo sort",rank:20,family:"Randomised (joke)",summary:"Check if the array is sorted; if not, shuffle it randomly and try again.",why:"Expected O(n·n!) time (n = number of elements) and unbounded worst case: the canonical example of the worst possible sorting algorithm. Capped at 8 elements here.",best:"O(n)",avg:"O(n · n!)",worst:"Unbounded",space:"O(1)",stable:!1,inPlace:!0,growth:"nfact",suitable:"Jokes, teaching probability, and stress-testing a shuffle.",bad:"Any input larger than a handful of elements.",uses:["Teaching expected running time","Humour"],steps:["If the array is sorted, stop.","Otherwise shuffle it uniformly at random (Fisher-Yates) and go back to step 1."],pseudocode:`bogoSort(arr):
  while not isSorted(arr):
    for i ← n - 1 downto 1:
      other ← random index in 0..i
      swap arr[i], arr[other]`,maxInput:8,maxViz:7,benchSizes:[3,4,5,6,7]}],Jp=Object.fromEntries(Pn.map(e=>[e.id,e]));function eh(){return d.jsxs("div",{className:"landing",children:[d.jsxs("section",{className:"hero",children:[d.jsx("h1",{children:"Sort Pedia"}),d.jsx("p",{children:"Every common sorting algorithm, ranked from best to worst, explained in plain language, with verified code in C, C++, Java, Go, Rust and Python, live benchmarks and step-by-step visualizations. Every sort on this site runs in Rust compiled to WebAssembly."})]}),d.jsxs("section",{className:"card","aria-labelledby":"index-h",children:[d.jsx("h2",{id:"index-h",children:"Index"}),d.jsx("nav",{className:"index","data-testid":"algo-index",children:Pn.map(e=>d.jsxs("a",{href:`#/algo/${e.id}`,className:"chip",children:[d.jsx("b",{children:e.rank})," ",e.name]},e.id))})]}),d.jsxs("section",{className:"card","aria-labelledby":"why-h",children:[d.jsx("h2",{id:"why-h",children:"How the ranking works"}),d.jsx("ol",{className:"rationale",children:Zp.map(e=>d.jsx("li",{children:e},e))})]}),d.jsxs("section",{"aria-labelledby":"rank-h",children:[d.jsx("h2",{id:"rank-h",children:"Ranking: best to worst"}),d.jsx("ol",{className:"ranking","data-testid":"ranking",children:Pn.map(e=>d.jsxs("li",{className:"rank-card",children:[d.jsxs("div",{className:"rank-num",children:["#",e.rank]}),d.jsxs("div",{className:"rank-body",children:[d.jsx("h3",{children:d.jsx("a",{href:`#/algo/${e.id}`,children:e.name})}),d.jsxs("div",{className:"badges",children:[d.jsxs("span",{className:"badge",children:["avg ",e.avg]}),d.jsxs("span",{className:"badge",children:["worst ",e.worst]}),d.jsxs("span",{className:"badge",children:["space ",e.space]}),d.jsx("span",{className:`badge ${e.stable?"yes":"no"}`,children:e.stable?"stable":"unstable"}),d.jsx("span",{className:`badge ${e.inPlace?"yes":"no"}`,children:e.inPlace?"in-place":"not in-place"})]}),d.jsx("p",{children:e.why})]})]},e.id))})]})]})}var od={exports:{}};(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(r){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,o={},s={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function l(c){return c instanceof u?new u(c.type,l(c.content),c.alias):Array.isArray(c)?c.map(l):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++a}),l.__id},clone:function l(c,h){h=h||{};var g,w;switch(s.util.type(c)){case"Object":if(w=s.util.objId(c),h[w])return h[w];g={},h[w]=g;for(var k in c)c.hasOwnProperty(k)&&(g[k]=l(c[k],h));return g;case"Array":return w=s.util.objId(c),h[w]?h[w]:(g=[],h[w]=g,c.forEach(function(S,N){g[N]=l(S,h)}),g);default:return c}},getLanguage:function(l){for(;l;){var c=i.exec(l.className);if(c)return c[1].toLowerCase();l=l.parentElement}return"none"},setLanguage:function(l,c){l.className=l.className.replace(RegExp(i,"gi"),""),l.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(g){var l=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack)||[])[1];if(l){var c=document.getElementsByTagName("script");for(var h in c)if(c[h].src==l)return c[h]}return null}},isActive:function(l,c,h){for(var g="no-"+c;l;){var w=l.classList;if(w.contains(c))return!0;if(w.contains(g))return!1;l=l.parentElement}return!!h}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(l,c){var h=s.util.clone(s.languages[l]);for(var g in c)h[g]=c[g];return h},insertBefore:function(l,c,h,g){g=g||s.languages;var w=g[l],k={};for(var S in w)if(w.hasOwnProperty(S)){if(S==c)for(var N in h)h.hasOwnProperty(N)&&(k[N]=h[N]);h.hasOwnProperty(S)||(k[S]=w[S])}var A=g[l];return g[l]=k,s.languages.DFS(s.languages,function(R,te){te===A&&R!=l&&(this[R]=k)}),k},DFS:function l(c,h,g,w){w=w||{};var k=s.util.objId;for(var S in c)if(c.hasOwnProperty(S)){h.call(c,S,c[S],g||S);var N=c[S],A=s.util.type(N);A==="Object"&&!w[k(N)]?(w[k(N)]=!0,l(N,h,null,w)):A==="Array"&&!w[k(N)]&&(w[k(N)]=!0,l(N,h,S,w))}}},plugins:{},highlightAll:function(l,c){s.highlightAllUnder(document,l,c)},highlightAllUnder:function(l,c,h){var g={callback:h,container:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",g),g.elements=Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)),s.hooks.run("before-all-elements-highlight",g);for(var w=0,k;k=g.elements[w++];)s.highlightElement(k,c===!0,g.callback)},highlightElement:function(l,c,h){var g=s.util.getLanguage(l),w=s.languages[g];s.util.setLanguage(l,g);var k=l.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(k,g);var S=l.textContent,N={element:l,language:g,grammar:w,code:S};function A(te){N.highlightedCode=te,s.hooks.run("before-insert",N),N.element.innerHTML=N.highlightedCode,s.hooks.run("after-highlight",N),s.hooks.run("complete",N),h&&h.call(N.element)}if(s.hooks.run("before-sanity-check",N),k=N.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!N.code){s.hooks.run("complete",N),h&&h.call(N.element);return}if(s.hooks.run("before-highlight",N),!N.grammar){A(s.util.encode(N.code));return}if(c&&r.Worker){var R=new Worker(s.filename);R.onmessage=function(te){A(te.data)},R.postMessage(JSON.stringify({language:N.language,code:N.code,immediateClose:!0}))}else A(s.highlight(N.code,N.grammar,N.language))},highlight:function(l,c,h){var g={code:l,grammar:c,language:h};if(s.hooks.run("before-tokenize",g),!g.grammar)throw new Error('The language "'+g.language+'" has no grammar.');return g.tokens=s.tokenize(g.code,g.grammar),s.hooks.run("after-tokenize",g),u.stringify(s.util.encode(g.tokens),g.language)},tokenize:function(l,c){var h=c.rest;if(h){for(var g in h)c[g]=h[g];delete c.rest}var w=new y;return v(w,w.head,l),m(l,w,c,w.head,0),E(w)},hooks:{all:{},add:function(l,c){var h=s.hooks.all;h[l]=h[l]||[],h[l].push(c)},run:function(l,c){var h=s.hooks.all[l];if(!(!h||!h.length))for(var g=0,w;w=h[g++];)w(c)}},Token:u};r.Prism=s;function u(l,c,h,g){this.type=l,this.content=c,this.alias=h,this.length=(g||"").length|0}u.stringify=function l(c,h){if(typeof c=="string")return c;if(Array.isArray(c)){var g="";return c.forEach(function(A){g+=l(A,h)}),g}var w={type:c.type,content:l(c.content,h),tag:"span",classes:["token",c.type],attributes:{},language:h},k=c.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(w.classes,k):w.classes.push(k)),s.hooks.run("wrap",w);var S="";for(var N in w.attributes)S+=" "+N+'="'+(w.attributes[N]||"").replace(/"/g,"&quot;")+'"';return"<"+w.tag+' class="'+w.classes.join(" ")+'"'+S+">"+w.content+"</"+w.tag+">"};function f(l,c,h,g){l.lastIndex=c;var w=l.exec(h);if(w&&g&&w[1]){var k=w[1].length;w.index+=k,w[0]=w[0].slice(k)}return w}function m(l,c,h,g,w,k){for(var S in h)if(!(!h.hasOwnProperty(S)||!h[S])){var N=h[S];N=Array.isArray(N)?N:[N];for(var A=0;A<N.length;++A){if(k&&k.cause==S+","+A)return;var R=N[A],te=R.inside,Ce=!!R.lookbehind,Ot=!!R.greedy,Nn=R.alias;if(Ot&&!R.pattern.global){var ct=R.pattern.toString().match(/[imsuy]*$/)[0];R.pattern=RegExp(R.pattern.source,ct+"g")}for(var Ne=R.pattern||R,z=g.next,x=w;z!==c.tail&&!(k&&x>=k.reach);x+=z.value.length,z=z.next){var C=z.value;if(c.length>l.length)return;if(!(C instanceof u)){var O=1,I;if(Ot){if(I=f(Ne,x,l,Ce),!I||I.index>=l.length)break;var ge=I.index,xe=I.index+I[0].length,G=x;for(G+=z.value.length;ge>=G;)z=z.next,G+=z.value.length;if(G-=z.value.length,x=G,z.value instanceof u)continue;for(var me=z;me!==c.tail&&(G<xe||typeof me.value=="string");me=me.next)O++,G+=me.value.length;O--,C=l.slice(x,G),I.index-=x}else if(I=f(Ne,0,C,Ce),!I)continue;var ge=I.index,Je=I[0],Ji=C.slice(0,ge),js=C.slice(ge+Je.length),ea=x+C.length;k&&ea>k.reach&&(k.reach=ea);var Nr=z.prev;Ji&&(Nr=v(c,Nr,Ji),x+=Ji.length),j(c,Nr,O);var kd=new u(S,te?s.tokenize(Je,te):Je,Nn,Je);if(z=v(c,Nr,kd),js&&v(c,z,js),O>1){var ta={cause:S+","+A,reach:ea};m(l,c,h,z.prev,x,ta),k&&ta.reach>k.reach&&(k.reach=ta.reach)}}}}}}function y(){var l={value:null,prev:null,next:null},c={value:null,prev:l,next:null};l.next=c,this.head=l,this.tail=c,this.length=0}function v(l,c,h){var g=c.next,w={value:h,prev:c,next:g};return c.next=w,g.prev=w,l.length++,w}function j(l,c,h){for(var g=c.next,w=0;w<h&&g!==l.tail;w++)g=g.next;c.next=g,g.prev=c,l.length-=w}function E(l){for(var c=[],h=l.head.next;h!==l.tail;)c.push(h.value),h=h.next;return c}if(!r.document)return r.addEventListener&&(s.disableWorkerMessageHandler||r.addEventListener("message",function(l){var c=JSON.parse(l.data),h=c.language,g=c.code,w=c.immediateClose;r.postMessage(s.highlight(g,s.languages[h],h)),w&&r.close()},!1)),s;var _=s.util.currentScript();_&&(s.filename=_.src,_.hasAttribute("data-manual")&&(s.manual=!0));function b(){s.manual||s.highlightAll()}if(!s.manual){var p=document.readyState;p==="loading"||p==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return s}(t);e.exports&&(e.exports=n),typeof Es<"u"&&(Es.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,a){var o={};o["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[a]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};s["language-"+a]={pattern:/[\s\S]+/,inside:n.languages[a]};var u={};u[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(r,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(r){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var a=r.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",i=function(_,b){return"✖ Error "+_+" while fetching file: "+b},a="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",u="loading",f="loaded",m="failed",y="pre[data-src]:not(["+s+'="'+f+'"]):not(['+s+'="'+u+'"])';function v(_,b,p){var l=new XMLHttpRequest;l.open("GET",_,!0),l.onreadystatechange=function(){l.readyState==4&&(l.status<400&&l.responseText?b(l.responseText):l.status>=400?p(i(l.status,l.statusText)):p(a))},l.send(null)}function j(_){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(b){var p=Number(b[1]),l=b[2],c=b[3];return l?c?[p,Number(c)]:[p,void 0]:[p,p]}}n.hooks.add("before-highlightall",function(_){_.selector+=", "+y}),n.hooks.add("before-sanity-check",function(_){var b=_.element;if(b.matches(y)){_.code="",b.setAttribute(s,u);var p=b.appendChild(document.createElement("CODE"));p.textContent=r;var l=b.getAttribute("data-src"),c=_.language;if(c==="none"){var h=(/\.(\w+)$/.exec(l)||[,"none"])[1];c=o[h]||h}n.util.setLanguage(p,c),n.util.setLanguage(b,c);var g=n.plugins.autoloader;g&&g.loadLanguages(c),v(l,function(w){b.setAttribute(s,f);var k=j(b.getAttribute("data-range"));if(k){var S=w.split(/\r\n?|\n/g),N=k[0],A=k[1]==null?S.length:k[1];N<0&&(N+=S.length),N=Math.max(0,Math.min(N-1,S.length)),A<0&&(A+=S.length),A=Math.max(0,Math.min(A,S.length)),w=S.slice(N,A).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(N+1))}p.textContent=w,n.highlightElement(p)},function(w){b.setAttribute(s,m),p.textContent=w})}}),n.plugins.fileHighlight={highlight:function(b){for(var p=(b||document).querySelectorAll(y),l=0,c;c=p[l++];)n.highlightElement(c)}};var E=!1;n.fileHighlight=function(){E||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),E=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(od);var th=od.exports;const Rl=xd(th);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(e){var t=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,n=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return t.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:t,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return n})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])})(Prism);(function(e){var t=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,n=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(/(^|[^\w.])/.source+n+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:r.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+n+/[A-Z]\w*\b/.source),lookbehind:!0,inside:r.inside}],keyword:t,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+n+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+n+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return t.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];(function(e){for(var t=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,n=0;n<2;n++)t=t.replace(/<self>/g,function(){return t});t=t.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+t),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;const Ii=[{id:"java",label:"Java",file:"java.java",prism:"java"},{id:"c",label:"C",file:"c.c",prism:"c"},{id:"cpp",label:"C++",file:"cpp.cpp",prism:"cpp"},{id:"go",label:"Golang",file:"go.go",prism:"go"},{id:"rust",label:"Rust",file:"rust.rs",prism:"rust"},{id:"python",label:"Python",file:"python.py",prism:"python"}],nh="java",sd="sort-pedia:default-language";function kr(e){return typeof e=="string"&&Ii.some(t=>t.id===e)}function ld(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function ud(){const e=ld()?.getItem(sd);return kr(e)?e:nh}function rh(e){if(!kr(e))throw new Error(`Unknown language: ${String(e)}`);ld()?.setItem(sd,e)}const ih=`/* Bitonic sort generalised to any n: sort halves in opposite directions,
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
`,ah=`// Bitonic sort generalised to any n.
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
`,oh=`package main

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
`,sh=`// Bitonic sort generalised to any n.
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
`,lh=`"""Bitonic sort generalised to any n."""


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
`,uh=`// Bitonic sort generalised to any n.

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
`,ch=`/* Bogo sort: shuffle until sorted. Expected O(n * n!) - only for tiny n! */
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
`,dh=`// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
#include <algorithm>
#include <random>
#include <vector>

void sortArray(std::vector<int>& arr) {
    std::mt19937 rng(42);
    while (!std::is_sorted(arr.begin(), arr.end())) std::shuffle(arr.begin(), arr.end(), rng);
}
`,fh=`package main

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
`,ph=`import java.util.Random;

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
`,hh=`"""Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!"""
import random


def sort_array(arr):
    while any(arr[i] > arr[i + 1] for i in range(len(arr) - 1)):
        random.shuffle(arr)
    return arr
`,mh=`// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
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
`,gh=`/* Bubble sort with early exit when a pass makes no swaps. */
void sort_array(int *arr, int n) {
    for (int sorted_from = n; sorted_from > 1; sorted_from--) {
        int swapped = 0;
        for (int i = 1; i < sorted_from; i++)
            if (arr[i] < arr[i - 1]) { int t = arr[i]; arr[i] = arr[i - 1]; arr[i - 1] = t; swapped = 1; }
        if (!swapped) break;
    }
}
`,vh=`// Bubble sort with early exit when a pass makes no swaps.
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
`,yh=`package main

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
`,_h=`// Bubble sort with early exit when a pass makes no swaps.
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
`,wh=`"""Bubble sort with early exit when a pass makes no swaps."""


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
`,kh=`// Bubble sort with early exit when a pass makes no swaps.

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
`,xh=`/* Bucket sort: scatter values into n buckets by value range, sort each
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
`,bh=`// Bucket sort: scatter into n buckets by value range, insertion-sort
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
`,Sh=`package main

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
`,Ph=`import java.util.ArrayList;
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
`,jh=`"""Bucket sort: scatter into n buckets by value range, insertion-sort
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
`,Eh=`// Bucket sort: scatter into n buckets by value range, insertion-sort
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
`,zh=`/* Cocktail shaker sort: bubble passes alternating left->right and right->left. */
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
`,Ch=`// Cocktail shaker sort: bubble passes in both directions.
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
`,Nh=`package main

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
`,Th=`// Cocktail shaker sort: bubble passes in both directions.
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
`,Ah=`"""Cocktail shaker sort: bubble passes in both directions."""


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
`,Oh=`// Cocktail shaker sort: bubble passes in both directions.

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
`,Ih=`/* Comb sort: bubble sort over a shrinking gap (factor 1.3). */
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
`,Fh=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).
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
`,Lh=`package main

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
`,Mh=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).
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
`,Rh=`"""Comb sort: bubble sort over a shrinking gap (factor 1.3)."""


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
`,$h=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).

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
`,Dh=`/* Counting sort for integers in a known (small) range [min, max]. */
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
`,Uh=`// Counting sort for integers in a known (small) range [min, max].
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
`,Bh=`package main

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
`,Vh=`// Counting sort for integers in a known (small) range [min, max].
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
`,Hh=`"""Counting sort for integers in a known (small) range [min, max]."""


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
`,Wh=`// Counting sort for integers in a known (small) range [min, max].

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
`,qh=`/* Cycle sort: rotate each cycle of the permutation into place, writing
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
`,Qh=`// Cycle sort: rotate each permutation cycle into place (minimum writes).
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
`,Gh=`package main

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
`,Kh=`// Cycle sort: rotate each permutation cycle into place (minimum writes).
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
`,Yh=`"""Cycle sort: rotate each permutation cycle into place (minimum writes)."""


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
`,Zh=`// Cycle sort: rotate each permutation cycle into place (minimum writes).

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
`,Xh=`/* Gnome sort: step forward while in order, otherwise swap and step back. */
void sort_array(int *arr, int n) {
    int gnome_pos = 0;
    while (gnome_pos < n) {
        if (gnome_pos == 0 || arr[gnome_pos] >= arr[gnome_pos - 1]) gnome_pos++;
        else { int t = arr[gnome_pos]; arr[gnome_pos] = arr[gnome_pos - 1]; arr[gnome_pos - 1] = t; gnome_pos--; }
    }
}
`,Jh=`// Gnome sort: step forward while in order, otherwise swap and step back.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    size_t gnomePos = 0;
    while (gnomePos < arr.size()) {
        if (gnomePos == 0 || arr[gnomePos] >= arr[gnomePos - 1]) gnomePos++;
        else { std::swap(arr[gnomePos], arr[gnomePos - 1]); gnomePos--; }
    }
}
`,em=`package main

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
`,tm=`// Gnome sort: step forward while in order, otherwise swap and step back.
class GnomeSort {
    public static void sort(int[] arr) {
        int gnomePos = 0;
        while (gnomePos < arr.length) {
            if (gnomePos == 0 || arr[gnomePos] >= arr[gnomePos - 1]) gnomePos++;
            else { int t = arr[gnomePos]; arr[gnomePos] = arr[gnomePos - 1]; arr[gnomePos - 1] = t; gnomePos--; }
        }
    }
}
`,nm=`"""Gnome sort: step forward while in order, otherwise swap and step back."""


def sort_array(arr):
    gnome_pos = 0
    while gnome_pos < len(arr):
        if gnome_pos == 0 or arr[gnome_pos] >= arr[gnome_pos - 1]:
            gnome_pos += 1
        else:
            arr[gnome_pos], arr[gnome_pos - 1] = arr[gnome_pos - 1], arr[gnome_pos]
            gnome_pos -= 1
    return arr
`,rm=`// Gnome sort: step forward while in order, otherwise swap and step back.

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
`,im=`/* Heap sort: build a max-heap, then repeatedly move the max to the end. */
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
`,am=`// Heap sort: build a max-heap, then repeatedly move the max to the end.
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
`,om=`package main

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
`,sm=`// Heap sort: build a max-heap, then repeatedly move the max to the end.
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
`,lm=`"""Heap sort: build a max-heap, then repeatedly move the max to the end."""


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
`,um=`// Heap sort: build a max-heap, then repeatedly move the max to the end.

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
`,cm=`/* Insertion sort: grow a sorted prefix by inserting one element at a time. */
void sort_array(int *arr, int n) {
    for (int current = 1; current < n; current++) {
        int key = arr[current], hole = current;
        while (hole > 0 && key < arr[hole - 1]) { arr[hole] = arr[hole - 1]; hole--; }
        arr[hole] = key;
    }
}
`,dm=`// Insertion sort: grow a sorted prefix one element at a time.
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t current = 1; current < arr.size(); current++) {
        int key = arr[current];
        size_t hole = current;
        while (hole > 0 && key < arr[hole - 1]) { arr[hole] = arr[hole - 1]; hole--; }
        arr[hole] = key;
    }
}
`,fm=`package main

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
`,pm=`// Insertion sort: grow a sorted prefix one element at a time.
class InsertionSort {
    public static void sort(int[] arr) {
        for (int current = 1; current < arr.length; current++) {
            int key = arr[current], hole = current;
            while (hole > 0 && key < arr[hole - 1]) { arr[hole] = arr[hole - 1]; hole--; }
            arr[hole] = key;
        }
    }
}
`,hm=`"""Insertion sort: grow a sorted prefix one element at a time."""


def sort_array(arr):
    for current in range(1, len(arr)):
        key, hole = arr[current], current
        while hole > 0 and key < arr[hole - 1]:
            arr[hole] = arr[hole - 1]
            hole -= 1
        arr[hole] = key
    return arr
`,mm=`// Insertion sort: grow a sorted prefix one element at a time.

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
`,gm=`/* Introsort: quicksort (median-of-three) that switches to heapsort when
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
`,vm=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
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
`,ym=`package main

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
`,_m=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
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
`,wm=`"""Introsort: median-of-three quicksort, heapsort fallback when recursion
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
`,km=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
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
`,xm=`/* Top-down merge sort with one auxiliary buffer. Stable, O(n log n). */
#include <stdlib.h>

static void merge_sort(int *arr, int *temp, int lo, int hi) {
    if (hi - lo < 2) return;
    int mid = lo + (hi - lo) / 2;
    merge_sort(arr, temp, lo, mid);
    merge_sort(arr, temp, mid, hi);
    int left_pos = lo, right_pos = mid, write_pos = lo;
    while (left_pos < mid && right_pos < hi) temp[write_pos++] = (arr[right_pos] < arr[left_pos]) ? arr[right_pos++] : arr[left_pos++];
    while (left_pos < mid) temp[write_pos++] = arr[left_pos++];
    while (right_pos < hi) temp[write_pos++] = arr[right_pos++];
    for (write_pos = lo; write_pos < hi; write_pos++) arr[write_pos] = temp[write_pos];
}

void sort_array(int *arr, int n) {
    if (n < 2) return;
    int *temp = malloc(sizeof(int) * n);
    merge_sort(arr, temp, 0, n);
    free(temp);
}
`,bm=`// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).
#include <vector>

static void mergeSort(std::vector<int>& arr, std::vector<int>& temp, int lo, int hi) {
    if (hi - lo < 2) return;
    int mid = lo + (hi - lo) / 2;
    mergeSort(arr, temp, lo, mid);
    mergeSort(arr, temp, mid, hi);
    int leftPos = lo, rightPos = mid, writePos = lo;
    while (leftPos < mid && rightPos < hi) temp[writePos++] = (arr[rightPos] < arr[leftPos]) ? arr[rightPos++] : arr[leftPos++];
    while (leftPos < mid) temp[writePos++] = arr[leftPos++];
    while (rightPos < hi) temp[writePos++] = arr[rightPos++];
    for (writePos = lo; writePos < hi; writePos++) arr[writePos] = temp[writePos];
}

void sortArray(std::vector<int>& arr) {
    std::vector<int> temp(arr.size());
    mergeSort(arr, temp, 0, static_cast<int>(arr.size()));
}
`,Sm=`package main

// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).

func mergeSort(arr, temp []int, lo, hi int) {
	if hi-lo < 2 {
		return
	}
	mid := lo + (hi-lo)/2
	mergeSort(arr, temp, lo, mid)
	mergeSort(arr, temp, mid, hi)
	leftPos, rightPos, writePos := lo, mid, lo
	for leftPos < mid && rightPos < hi {
		if arr[rightPos] < arr[leftPos] {
			temp[writePos] = arr[rightPos]
			rightPos++
		} else {
			temp[writePos] = arr[leftPos]
			leftPos++
		}
		writePos++
	}
	writePos += copy(temp[writePos:], arr[leftPos:mid])
	copy(temp[writePos:], arr[rightPos:hi])
	copy(arr[lo:hi], temp[lo:hi])
}

func sortArray(arr []int) { mergeSort(arr, make([]int, len(arr)), 0, len(arr)) }
`,Pm=`// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).
class MergeSort {
    static void mergeSort(int[] arr, int[] temp, int lo, int hi) {
        if (hi - lo < 2) return;
        int mid = (lo + hi) >>> 1;
        mergeSort(arr, temp, lo, mid);
        mergeSort(arr, temp, mid, hi);
        int leftPos = lo, rightPos = mid, writePos = lo;
        while (leftPos < mid && rightPos < hi) temp[writePos++] = (arr[rightPos] < arr[leftPos]) ? arr[rightPos++] : arr[leftPos++];
        while (leftPos < mid) temp[writePos++] = arr[leftPos++];
        while (rightPos < hi) temp[writePos++] = arr[rightPos++];
        System.arraycopy(temp, lo, arr, lo, hi - lo);
    }

    public static void sort(int[] arr) { mergeSort(arr, new int[arr.length], 0, arr.length); }
}
`,jm=`"""Top-down merge sort. Stable, O(n log n)."""


def _merge_sort(arr, lo, hi):
    if hi - lo < 2:
        return
    mid = (lo + hi) // 2
    _merge_sort(arr, lo, mid)
    _merge_sort(arr, mid, hi)
    merged, left_pos, right_pos = [], lo, mid
    while left_pos < mid and right_pos < hi:
        if arr[right_pos] < arr[left_pos]:
            merged.append(arr[right_pos])
            right_pos += 1
        else:
            merged.append(arr[left_pos])
            left_pos += 1
    merged.extend(arr[left_pos:mid])
    merged.extend(arr[right_pos:hi])
    arr[lo:hi] = merged


def sort_array(arr):
    _merge_sort(arr, 0, len(arr))
    return arr
`,Em=`// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).

fn merge_sort(arr: &mut [i32], temp: &mut [i32]) {
    let n = arr.len();
    if n < 2 {
        return;
    }
    let mid = n / 2;
    merge_sort(&mut arr[..mid], &mut temp[..mid]);
    merge_sort(&mut arr[mid..], &mut temp[mid..]);
    let (mut left_pos, mut right_pos) = (0, mid);
    for slot in temp.iter_mut().take(n) {
        if right_pos >= n || (left_pos < mid && arr[left_pos] <= arr[right_pos]) {
            *slot = arr[left_pos];
            left_pos += 1;
        } else {
            *slot = arr[right_pos];
            right_pos += 1;
        }
    }
    arr.copy_from_slice(&temp[..n]);
}

pub fn sort_array(arr: &mut [i32]) {
    let mut temp = vec![0; arr.len()];
    merge_sort(arr, &mut temp);
}
`,zm=`/* Odd-even (brick) sort: alternate compare-swaps on odd and even pairs. */
void sort_array(int *arr, int n) {
    int sorted = 0;
    while (!sorted) {
        sorted = 1;
        for (int phase = 1; phase >= 0; phase--)
            for (int pair_start = phase; pair_start + 1 < n; pair_start += 2)
                if (arr[pair_start + 1] < arr[pair_start]) { int t = arr[pair_start]; arr[pair_start] = arr[pair_start + 1]; arr[pair_start + 1] = t; sorted = 0; }
    }
}
`,Cm=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
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
`,Nm=`package main

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
`,Tm=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
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
`,Am=`"""Odd-even (brick) sort: alternate compare-swaps on odd and even pairs."""


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
`,Om=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.

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
`,Im=`/* Pancake sort: flip the maximum to the front, then flip it to the end. */
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
`,Fm=`// Pancake sort: flip the max to the front, then flip it to the end.
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
`,Lm=`package main

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
`,Mm=`// Pancake sort: flip the max to the front, then flip it to the end.
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
`,Rm=`"""Pancake sort: flip the max to the front, then flip it to the end."""


def sort_array(arr):
    for unsorted_size in range(len(arr), 1, -1):
        max_index = max(range(unsorted_size), key=arr.__getitem__)
        if max_index != unsorted_size - 1:
            arr[:max_index + 1] = arr[:max_index + 1][::-1]  # flip max to the front
            arr[:unsorted_size] = arr[:unsorted_size][::-1]      # flip it to the end
    return arr
`,$m=`// Pancake sort: flip the max to the front, then flip it to the end.

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
`,Dm=`/* 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well. */
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
`,Um=`// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
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
`,Bm=`package main

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
`,Vm=`import java.util.concurrent.ThreadLocalRandom;

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
`,Hm=`"""3-way (Dijkstra) quicksort with a random pivot: handles duplicates well."""
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
`,Wm=`// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
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
`,qm=`/* LSD radix sort, base 256. Negative numbers are handled by sorting
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
`,Qm=`// LSD radix sort, base 256, on the unsigned offset key (value - min).
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
`,Gm=`package main

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
`,Km=`// LSD radix sort, base 256, on the offset key (value - min) as a long.
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
`,Ym=`"""LSD radix sort, base 256, on the offset key (value - min)."""


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
`,Zm=`// LSD radix sort, base 256, on the unsigned offset key (value - min).

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
`,Xm=`/* Selection sort: repeatedly select the minimum of the unsorted suffix. */
void sort_array(int *arr, int n) {
    for (int fill_pos = 0; fill_pos + 1 < n; fill_pos++) {
        int min_index = fill_pos;
        for (int i = fill_pos + 1; i < n; i++) if (arr[i] < arr[min_index]) min_index = i;
        int t = arr[fill_pos]; arr[fill_pos] = arr[min_index]; arr[min_index] = t;
    }
}
`,Jm=`// Selection sort: repeatedly select the minimum of the unsorted suffix.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& arr) {
    for (size_t fillPos = 0; fillPos + 1 < arr.size(); fillPos++) {
        size_t minIndex = fillPos;
        for (size_t i = fillPos + 1; i < arr.size(); i++) if (arr[i] < arr[minIndex]) minIndex = i;
        std::swap(arr[fillPos], arr[minIndex]);
    }
}
`,eg=`package main

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
`,tg=`// Selection sort: repeatedly select the minimum of the unsorted suffix.
class SelectionSort {
    public static void sort(int[] arr) {
        for (int fillPos = 0; fillPos + 1 < arr.length; fillPos++) {
            int minIndex = fillPos;
            for (int i = fillPos + 1; i < arr.length; i++) if (arr[i] < arr[minIndex]) minIndex = i;
            int t = arr[fillPos]; arr[fillPos] = arr[minIndex]; arr[minIndex] = t;
        }
    }
}
`,ng=`"""Selection sort: repeatedly select the minimum of the unsorted suffix."""


def sort_array(arr):
    n = len(arr)
    for fill_pos in range(n - 1):
        min_index = fill_pos
        for i in range(fill_pos + 1, n):
            if arr[i] < arr[min_index]:
                min_index = i
        arr[fill_pos], arr[min_index] = arr[min_index], arr[fill_pos]
    return arr
`,rg=`// Selection sort: repeatedly select the minimum of the unsorted suffix.

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
`,ig=`/* Shell sort with the Ciura gap sequence (extended by x2.25). */
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
`,ag=`// Shell sort with the Ciura gap sequence (extended by x2.25).
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
`,og=`package main

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
`,sg=`import java.util.ArrayList;
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
`,lg=`"""Shell sort with the Ciura gap sequence (extended by x2.25)."""


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
`,ug=`// Shell sort with the Ciura gap sequence (extended by x2.25).

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
`,cg=`/* Simplified Timsort: natural runs extended to MINRUN with binary
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
`,dg=`// Simplified Timsort: natural runs extended to MINRUN with binary
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
`,fg=`package main

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
`,pg=`import java.util.ArrayList;
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
`,hg=`"""Simplified Timsort: natural runs extended to MIN_RUN with binary
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
`,mg=`// Simplified Timsort: natural runs extended to MIN_RUN with binary
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
`,cd=Object.assign({"../snippets/bitonic/c.c":ih,"../snippets/bitonic/cpp.cpp":ah,"../snippets/bitonic/go.go":oh,"../snippets/bitonic/java.java":sh,"../snippets/bitonic/python.py":lh,"../snippets/bitonic/rust.rs":uh,"../snippets/bogo/c.c":ch,"../snippets/bogo/cpp.cpp":dh,"../snippets/bogo/go.go":fh,"../snippets/bogo/java.java":ph,"../snippets/bogo/python.py":hh,"../snippets/bogo/rust.rs":mh,"../snippets/bubble/c.c":gh,"../snippets/bubble/cpp.cpp":vh,"../snippets/bubble/go.go":yh,"../snippets/bubble/java.java":_h,"../snippets/bubble/python.py":wh,"../snippets/bubble/rust.rs":kh,"../snippets/bucket/c.c":xh,"../snippets/bucket/cpp.cpp":bh,"../snippets/bucket/go.go":Sh,"../snippets/bucket/java.java":Ph,"../snippets/bucket/python.py":jh,"../snippets/bucket/rust.rs":Eh,"../snippets/cocktail/c.c":zh,"../snippets/cocktail/cpp.cpp":Ch,"../snippets/cocktail/go.go":Nh,"../snippets/cocktail/java.java":Th,"../snippets/cocktail/python.py":Ah,"../snippets/cocktail/rust.rs":Oh,"../snippets/comb/c.c":Ih,"../snippets/comb/cpp.cpp":Fh,"../snippets/comb/go.go":Lh,"../snippets/comb/java.java":Mh,"../snippets/comb/python.py":Rh,"../snippets/comb/rust.rs":$h,"../snippets/counting/c.c":Dh,"../snippets/counting/cpp.cpp":Uh,"../snippets/counting/go.go":Bh,"../snippets/counting/java.java":Vh,"../snippets/counting/python.py":Hh,"../snippets/counting/rust.rs":Wh,"../snippets/cycle/c.c":qh,"../snippets/cycle/cpp.cpp":Qh,"../snippets/cycle/go.go":Gh,"../snippets/cycle/java.java":Kh,"../snippets/cycle/python.py":Yh,"../snippets/cycle/rust.rs":Zh,"../snippets/gnome/c.c":Xh,"../snippets/gnome/cpp.cpp":Jh,"../snippets/gnome/go.go":em,"../snippets/gnome/java.java":tm,"../snippets/gnome/python.py":nm,"../snippets/gnome/rust.rs":rm,"../snippets/heap/c.c":im,"../snippets/heap/cpp.cpp":am,"../snippets/heap/go.go":om,"../snippets/heap/java.java":sm,"../snippets/heap/python.py":lm,"../snippets/heap/rust.rs":um,"../snippets/insertion/c.c":cm,"../snippets/insertion/cpp.cpp":dm,"../snippets/insertion/go.go":fm,"../snippets/insertion/java.java":pm,"../snippets/insertion/python.py":hm,"../snippets/insertion/rust.rs":mm,"../snippets/introsort/c.c":gm,"../snippets/introsort/cpp.cpp":vm,"../snippets/introsort/go.go":ym,"../snippets/introsort/java.java":_m,"../snippets/introsort/python.py":wm,"../snippets/introsort/rust.rs":km,"../snippets/merge/c.c":xm,"../snippets/merge/cpp.cpp":bm,"../snippets/merge/go.go":Sm,"../snippets/merge/java.java":Pm,"../snippets/merge/python.py":jm,"../snippets/merge/rust.rs":Em,"../snippets/odd-even/c.c":zm,"../snippets/odd-even/cpp.cpp":Cm,"../snippets/odd-even/go.go":Nm,"../snippets/odd-even/java.java":Tm,"../snippets/odd-even/python.py":Am,"../snippets/odd-even/rust.rs":Om,"../snippets/pancake/c.c":Im,"../snippets/pancake/cpp.cpp":Fm,"../snippets/pancake/go.go":Lm,"../snippets/pancake/java.java":Mm,"../snippets/pancake/python.py":Rm,"../snippets/pancake/rust.rs":$m,"../snippets/quick/c.c":Dm,"../snippets/quick/cpp.cpp":Um,"../snippets/quick/go.go":Bm,"../snippets/quick/java.java":Vm,"../snippets/quick/python.py":Hm,"../snippets/quick/rust.rs":Wm,"../snippets/radix/c.c":qm,"../snippets/radix/cpp.cpp":Qm,"../snippets/radix/go.go":Gm,"../snippets/radix/java.java":Km,"../snippets/radix/python.py":Ym,"../snippets/radix/rust.rs":Zm,"../snippets/selection/c.c":Xm,"../snippets/selection/cpp.cpp":Jm,"../snippets/selection/go.go":eg,"../snippets/selection/java.java":tg,"../snippets/selection/python.py":ng,"../snippets/selection/rust.rs":rg,"../snippets/shell/c.c":ig,"../snippets/shell/cpp.cpp":ag,"../snippets/shell/go.go":og,"../snippets/shell/java.java":sg,"../snippets/shell/python.py":lg,"../snippets/shell/rust.rs":ug,"../snippets/timsort/c.c":cg,"../snippets/timsort/cpp.cpp":dg,"../snippets/timsort/go.go":fg,"../snippets/timsort/java.java":pg,"../snippets/timsort/python.py":hg,"../snippets/timsort/rust.rs":mg});function gg(e,t){return cd[`../snippets/${e}/${t}`]}Object.keys(cd).length;const Eo="sort-pedia:default-language";function vg(){const[e,t]=M.useState(ud());return d.jsxs("label",{className:"settings",children:[d.jsx("span",{children:"Default code language"}),d.jsx("select",{"aria-label":"Default code language","data-testid":"default-lang",value:e,onChange:n=>{const r=n.target.value;kr(r)&&(rh(r),t(r),window.dispatchEvent(new CustomEvent(Eo,{detail:r})))},children:Ii.map(n=>d.jsx("option",{value:n.id,children:n.label},n.id))})]})}const yg={java:"Call: <Class>.sort(int[] a)",c:"Call: sort_array(int *a, int n)",cpp:"Call: sortArray(std::vector<int>& a)",go:"Call: sortArray(a []int)",rust:"Call: sort_array(&mut [i32])",python:"Call: sort_array(list)"};function _g({algoId:e}){const[t,n]=M.useState(ud()),[r,i]=M.useState(!1);M.useEffect(()=>{const u=f=>{const m=f.detail;kr(m)&&n(m)};return window.addEventListener(Eo,u),()=>window.removeEventListener(Eo,u)},[]);const a=Ii.find(u=>u.id===t),o=gg(e,a.file)??"// snippet missing",s=M.useMemo(()=>Rl.highlight(o,Rl.languages[a.prism],a.prism),[o,a.prism]);return d.jsxs("div",{className:"code-panel",children:[d.jsxs("div",{className:"code-toolbar",children:[d.jsxs("label",{children:[d.jsx("span",{children:"Language"}),d.jsx("select",{"data-testid":"lang-select",value:t,onChange:u=>kr(u.target.value)&&n(u.target.value),children:Ii.map(u=>d.jsx("option",{value:u.id,children:u.label},u.id))})]}),d.jsx("button",{type:"button",className:"btn small",onClick:()=>{navigator.clipboard?.writeText(o).then(()=>{i(!0),setTimeout(()=>i(!1),1200)},()=>{})},children:r?"Copied":"Copy"})]}),d.jsxs("p",{className:"muted small",children:[yg[t]," · compiled and tested by scripts/verify-snippets.mjs"]}),d.jsx("pre",{className:`language-${a.prism}`,"data-testid":"code-block","data-lang":t,children:d.jsx("code",{className:`language-${a.prism}`,dangerouslySetInnerHTML:{__html:s}})})]})}const $l=[{id:"n",label:"n (n + k)",f:e=>e,color:"var(--c1)"},{id:"nk",label:"n·k (k = 4)",f:e=>4*e,color:"var(--c2)"},{id:"nlogn",label:"n log n",f:e=>e*Math.log2(Math.max(e,1)),color:"var(--c3)"},{id:"n32",label:"n^1.5",f:e=>e**1.5,color:"var(--c4)"},{id:"nlog2n",label:"n log² n",f:e=>e*Math.log2(Math.max(e,1))**2,color:"var(--c5)"},{id:"n2",label:"n²",f:e=>e*e,color:"var(--c6)"},{id:"nfact",label:"n · n!",f:e=>{let t=e;for(let n=2;n<=e;n++)t*=n;return t},color:"var(--c7)"}],$n=360,Ge=240,Te=34,za=64,Zt=1200;function wg({highlight:e}){const t=r=>Te+(r-1)/(za-1)*($n-Te-8),n=r=>Ge-Te-Math.min(r,Zt)/Zt*(Ge-Te-8);return d.jsxs("figure",{className:"chart","data-testid":"growth-chart",children:[d.jsxs("svg",{viewBox:`0 0 ${$n} ${Ge}`,role:"img","aria-label":"Complexity growth curves",children:[[.25,.5,.75,1].map(r=>d.jsx("line",{className:"grid",x1:Te,x2:$n-8,y1:n(Zt*r),y2:n(Zt*r)},r)),[16,32,48,64].map(r=>d.jsx("line",{className:"grid",x1:t(r),x2:t(r),y1:8,y2:Ge-Te},r)),d.jsx("line",{x1:Te,y1:Ge-Te,x2:$n-8,y2:Ge-Te,className:"axis"}),d.jsx("line",{x1:Te,y1:8,x2:Te,y2:Ge-Te,className:"axis"}),d.jsxs("text",{x:$n/2,y:Ge-6,className:"axis-label",textAnchor:"middle",children:["n (input size, 1–",za,")"]}),d.jsxs("text",{x:10,y:Ge/2,className:"axis-label",textAnchor:"middle",transform:`rotate(-90 10 ${Ge/2})`,children:["operations (clipped at ",Zt,")"]}),$l.map(r=>{const i=[];for(let o=1;o<=za&&(i.push(`${t(o).toFixed(1)},${n(r.f(o)).toFixed(1)}`),!(r.f(o)>Zt));o++);const a=r.id===e;return d.jsx("polyline",{points:i.join(" "),fill:"none",style:{stroke:r.color},strokeWidth:a?4:1.5,opacity:a?1:.55,children:d.jsx("title",{children:r.label})},r.id)})]}),d.jsx("figcaption",{className:"legend",children:$l.map(r=>d.jsxs("span",{className:r.id===e?"on":"",children:[d.jsx("i",{style:{background:r.color}})," ",r.label,r.id===e?" ← this algorithm (average)":""]},r.id))})]})}const Dl=-1e9,Ul=1e9;function kg(e,t){const n=e.trim();if(n==="")return{ok:!1,error:"Please enter at least one number."};const r=n.split(/[\s,]+/).filter(a=>a!=="");if(r.length===0)return{ok:!1,error:"Please enter at least one number."};if(r.length>t)return{ok:!1,error:`Too many numbers: ${r.length}. This algorithm accepts at most ${t}.`};const i=[];for(let a=0;a<r.length;a++){const o=r[a];if(!/^[+-]?\d+$/.test(o))return{ok:!1,error:`"${o}" (item ${a+1}) is not a whole number. Use integers separated by commas or spaces.`};const s=Number(o);if(!Number.isSafeInteger(s)||s<Dl||s>Ul)return{ok:!1,error:`"${o}" (item ${a+1}) is out of range. Values must be between ${Dl} and ${Ul}.`};i.push(s)}return{ok:!0,values:i}}function xg(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}const It=[{id:"random",label:"Random"},{id:"sorted",label:"Sorted"},{id:"reversed",label:"Reversed"},{id:"nearly",label:"Nearly sorted"},{id:"few",label:"Few unique"}];function dd(e,t,n=1,r=Math.max(t*4,100)){const i=xg(n),a=()=>1+Math.floor(i()*r);switch(e){case"random":return Array.from({length:t},a);case"sorted":return Array.from({length:t},a).sort((o,s)=>o-s);case"reversed":return Array.from({length:t},a).sort((o,s)=>s-o);case"nearly":{const o=Array.from({length:t},a).sort((u,f)=>u-f),s=Math.max(1,Math.floor(t/20));for(let u=0;u<s&&t>1;u++){const f=Math.floor(i()*t),m=Math.floor(i()*t);[o[f],o[m]]=[o[m],o[f]]}return o}case"few":{const o=Math.min(5,Math.max(1,t)),s=Array.from({length:o},(u,f)=>Math.round((f+1)*r/o));return Array.from({length:t},()=>s[Math.floor(i()*o)])}}}class xr{static __wrap(t){const n=Object.create(xr.prototype);return n.__wbg_ptr=t,Bl.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Bl.unregister(this),t}free(){const t=this.__destroy_into_raw();$.__wbg_sortresult_free(t,0)}get comparisons(){return $.sortresult_comparisons(this.__wbg_ptr)}get sorted(){const t=$.sortresult_sorted(this.__wbg_ptr);var n=Vl(t[0],t[1]).slice();return $.__wbindgen_free(t[0],t[1]*4,4),n}get swaps(){return $.sortresult_swaps(this.__wbg_ptr)}get trace(){const t=$.sortresult_trace(this.__wbg_ptr);var n=Vl(t[0],t[1]).slice();return $.__wbindgen_free(t[0],t[1]*4,4),n}get truncated(){return $.sortresult_truncated(this.__wbg_ptr)!==0}get writes(){return $.sortresult_writes(this.__wbg_ptr)}}Symbol.dispose&&(xr.prototype[Symbol.dispose]=xr.prototype.free);function bg(e,t,n){const r=pd(e,$.__wbindgen_malloc,$.__wbindgen_realloc),i=Qt,a=fd(t,$.__wbindgen_malloc),o=Qt,s=$.sort(r,i,a,o,n);if(s[2])throw hd(s[1]);return xr.__wrap(s[0])}function Sg(e,t){const n=pd(e,$.__wbindgen_malloc,$.__wbindgen_realloc),r=Qt,i=fd(t,$.__wbindgen_malloc),a=Qt,o=$.sort_only(n,r,i,a);if(o[2])throw hd(o[1]);return o[0]}function Pg(){return{__proto__:null,"./sortcore_bg.js":{__proto__:null,__wbg_Error_30c8987f7c2ed4e2:function(t,n){return Error(Ca(t,n))},__wbg___wbindgen_throw_41e9ee4f547fc59a:function(t,n){throw new Error(Ca(t,n))},__wbindgen_generic_0000000000000001:function(t,n){return Ca(t,n)},__wbindgen_init_externref_table:function(){const t=$.__wbindgen_externrefs,n=t.grow(4);t.set(0,void 0),t.set(n+0,void 0),t.set(n+1,null),t.set(n+2,!0),t.set(n+3,!1)}}}}const Bl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>$.__wbg_sortresult_free(e,1));function Vl(e,t){return e=e>>>0,jg().subarray(e/4,e/4+t)}let Hn=null;function jg(){return(Hn===null||Hn.byteLength===0)&&(Hn=new Int32Array($.memory.buffer)),Hn}function Ca(e,t){return Cg(e>>>0,t)}let Wn=null;function Eg(){return(Wn===null||Wn.byteLength===0)&&(Wn=new Uint32Array($.memory.buffer)),Wn}let qn=null;function si(){return(qn===null||qn.byteLength===0)&&(qn=new Uint8Array($.memory.buffer)),qn}function fd(e,t){const n=t(e.length*4,4)>>>0;return Eg().set(e,n/4),Qt=e.length,n}function pd(e,t,n){if(n===void 0){const s=rr.encode(e),u=t(s.length,1)>>>0;return si().subarray(u,u+s.length).set(s),Qt=s.length,u}let r=e.length,i=t(r,1)>>>0;const a=si();let o=0;for(;o<r;o++){const s=e.charCodeAt(o);if(s>127)break;a[i+o]=s}if(o!==r){o!==0&&(e=e.slice(o)),i=n(i,r,r=o+e.length*3,1)>>>0;const s=si().subarray(i+o,i+r),u=rr.encodeInto(e,s);o+=u.written,i=n(i,r,o,1)>>>0}return Qt=o,i}function hd(e){const t=$.__wbindgen_externrefs.get(e);return $.__externref_table_dealloc(e),t}let li=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});li.decode();const zg=2146435072;let Na=0;function Cg(e,t){return Na+=t,Na>=zg&&(li=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),li.decode(),Na=t),li.decode(si().subarray(e,e+t))}const rr=new TextEncoder;"encodeInto"in rr||(rr.encodeInto=function(e,t){const n=rr.encode(e);return t.set(n),{read:e.length,written:n.length}});let Qt=0,$;function Ng(e,t){return $=e.exports,Hn=null,Wn=null,qn=null,$.__wbindgen_start(),$}async function Tg(e,t){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(i){if(n(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,t)}else{const r=await WebAssembly.instantiate(e,t);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}function n(r){switch(r){case"basic":case"cors":case"default":return!0}return!1}}async function Ag(e){if($!==void 0)return $;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/sort-pedia/assets/sortcore_bg-sJhWb08Z.wasm",import.meta.url));const t=Pg();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await Tg(await e,t);return Ng(n)}let Ta=null;function bs(){return Ta||(Ta=Ag()),Ta}async function Hl(e,t,n){await bs();const r=Int32Array.from(t),i=performance.now(),a=bg(e,r,n),o=performance.now()-i;try{return{sorted:Array.from(a.sorted),trace:n?a.trace:null,comparisons:a.comparisons,swaps:a.swaps,writes:a.writes,truncated:a.truncated,ms:o}}finally{a.free()}}async function Og(e,t){await bs();const n=performance.now();return Sg(e,t),performance.now()-n}const Aa={random:"var(--s-random)",sorted:"var(--s-sorted)",reversed:"var(--s-reversed)",nearly:"var(--s-nearly)",few:"var(--s-few)"};async function Ig(e,t){let n=1/0,r=0,i=0;for(;i<5&&(i===0||r<30);){const a=await Og(e,Int32Array.from(t));n=Math.min(n,a),r+=a,i++}return n}function Fg({algo:e}){const[t,n]=M.useState([]),[r,i]=M.useState("idle"),[a,o]=M.useState("");async function s(){i("running"),n([]);try{await bs();const _=[];for(const b of e.benchSizes){const p={n:b};for(const l of It)o(`n = ${b.toLocaleString()}, ${l.label.toLowerCase()}…`),await new Promise(c=>setTimeout(c,0)),p[l.id]=await Ig(e.id,dd(l.id,b,b+7));_.push(p),n([..._])}i("done"),o("")}catch(_){i("error"),o(String(_ instanceof Error?_.message:_))}}const u=360,f=220,m=40,y=Math.max(.01,...t.flatMap(_=>It.map(b=>_[b.id]??0))),v=e.benchSizes[e.benchSizes.length-1],j=_=>m+_/v*(u-m-10),E=_=>f-m-_/y*(f-m-10);return d.jsxs("div",{className:"bench","data-testid":"benchmark",children:[d.jsxs("p",{className:"muted small",children:["Sizes ",e.benchSizes.map(_=>_.toLocaleString()).join(", ")," × 5 input shapes, timed with performance.now() around the WASM call in your browser (best of up to 5 runs)."]}),d.jsx("button",{type:"button",className:"btn",onClick:s,disabled:r==="running","data-testid":"bench-run",children:r==="running"?"Running…":t.length?"Run again":"Run benchmark"}),a&&d.jsx("p",{className:r==="error"?"error":"muted small",children:a}),t.length>0&&d.jsxs(d.Fragment,{children:[d.jsxs("figure",{className:"chart",children:[d.jsxs("svg",{viewBox:`0 0 ${u} ${f}`,role:"img","aria-label":"Benchmark chart",children:[[.25,.5,.75,1].map(_=>d.jsx("line",{className:"grid",x1:m,x2:u-10,y1:E(y*_),y2:E(y*_)},_)),d.jsx("line",{x1:m,y1:f-m,x2:u-10,y2:f-m,className:"axis"}),d.jsx("line",{x1:m,y1:10,x2:m,y2:f-m,className:"axis"}),d.jsx("text",{x:u/2,y:f-8,className:"axis-label",textAnchor:"middle",children:"n"}),d.jsxs("text",{x:4,y:14,className:"axis-label",children:[y.toFixed(2)," ms"]}),It.map(_=>d.jsx("polyline",{fill:"none",style:{stroke:Aa[_.id]},strokeWidth:2,points:t.filter(b=>b[_.id]!==void 0).map(b=>`${j(b.n).toFixed(1)},${E(b[_.id]).toFixed(1)}`).join(" ")},_.id)),It.flatMap(_=>t.filter(b=>b[_.id]!==void 0).map(b=>d.jsx("circle",{cx:j(b.n),cy:E(b[_.id]),r:3,style:{fill:Aa[_.id]},children:d.jsx("title",{children:`${_.label}, n = ${b.n.toLocaleString()}: ${b[_.id].toFixed(3)} ms`})},`${_.id}-${b.n}`)))]}),d.jsx("figcaption",{className:"legend",children:It.map(_=>d.jsxs("span",{children:[d.jsx("i",{style:{background:Aa[_.id]}})," ",_.label]},_.id))})]}),d.jsx("div",{className:"table-wrap",children:d.jsxs("table",{className:"bench-table","data-testid":"bench-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"n"}),It.map(_=>d.jsx("th",{children:_.label},_.id))]})}),d.jsx("tbody",{children:t.map(_=>d.jsxs("tr",{children:[d.jsx("td",{children:_.n.toLocaleString()}),It.map(b=>d.jsx("td",{children:_[b.id]?.toFixed(3)??"…"},b.id))]},_.n))})]})}),d.jsx("p",{className:"muted small",children:"Times in milliseconds."})]})]})}const br=0,jn=1,Sr=2,Wl=3,Lg=4,Fi=5,Oa=["lo","hi","mid","pivot","lessEnd","greaterStart","i","storePos","current","hole","key","gap","runStart","fillPos","minIndex","sortedFrom","writePos","rightPos","heapEnd","node","child","left","right","pairStart","gnomePos","cycleStart","targetPos","lastUnsorted","maxIndex"];function Qn(e){return e.replace(/([A-Z])/g," $1").toLowerCase()}const Mg={lo:"first index of the range being worked on",hi:"last index of the range being worked on",mid:"where the left half ends and the right half begins",pivot:"position of the pivot value everything is compared with",lessEnd:'end of the "less than pivot" block: everything left of it is smaller than the pivot',greaterStart:'start of the "greater than pivot" block: everything right of it is larger than the pivot',i:"the current index: the element being examined right now",storePos:"next slot for an element smaller than the pivot",current:"the element being inserted into the sorted part on its left",hole:"the empty slot the key moves through while larger elements shift right",key:"where the value being inserted (the key) currently sits / will be placed",gap:"distance between the two elements being compared",runStart:"start of the run being built or extended",fillPos:"the slot being filled with the next smallest value",minIndex:"index of the smallest value found so far in the unsorted part",sortedFrom:"first index of the sorted tail: from here to the end is final",writePos:"next output slot being written",rightPos:"next unused element of the right half",heapEnd:"last element still inside the heap; everything after it is sorted",node:"the parent being sifted down",child:"the larger child the parent is compared with",left:"left element of the compared pair",right:"right element of the compared pair (left + gap)",pairStart:"first element of the pair being compared",gnomePos:"where the gnome stands: it compares this element with the one on its left",cycleStart:"start of the cycle being rotated into place",targetPos:"final position of the item being carried (number of smaller elements)",lastUnsorted:"last slot of the unsorted part: the maximum gets flipped here",maxIndex:"index of the largest value found so far in the unsorted part"},Rg={cocktail:{lo:"first unsorted index (everything left of it is final)",hi:"last unsorted index (everything right of it is final)"},merge:{lo:"first index of the two halves being merged",hi:"last index of the two halves being merged"},quick:{i:"the current index: the element being compared with the pivot right now"},timsort:{key:"the element being binary-inserted into the run"}};function $g(e,t){return Rg[e]?.[t]??Mg[t]??""}const md=new Set(["gap"]),Dg={insertion:"key",shell:"key",timsort:"key",introsort:"key",bucket:"key",merge:"left-run value",cycle:"item"},Ug=e=>e===br||e===jn||e===Sr||e===Fi;function Bg(e,t,n){const r=t[3*n],i=t[3*n+1],a=t[3*n+2];if(r===jn){const o=e[i];e[i]=e[a],e[a]=o}else r===Sr&&(e[i]=a);return{op:r,i,j:a}}const Gr=256;class Vg{constructor(t,n,r=""){this.input=t,this.trace=n,this.algoId=r,this.steps=[],this.checkpoints=[],this.step=0,this.last=null,this.caption="";const i=new Set;for(let a=0;a<n.length/3;a++)Ug(n[3*a])?this.steps.push(a):n[3*a]===Wl&&n[3*a+2]>=0&&i.add(Oa[n[3*a+1]]);this.pointerNamesUsed=Oa.filter(a=>i.has(a)),this.total=this.steps.length,this.cur={arr:[...t],ptrs:new Map,sorted:new Uint8Array(t.length),cmp:0,swaps:0,writes:0,raw:0},this.checkpoints.push(this.clone(this.cur))}get array(){return this.cur.arr}get pointers(){return this.cur.ptrs}get sortedMask(){return this.cur.sorted}get comparisons(){return this.cur.cmp}get swaps(){return this.cur.swaps}get writes(){return this.cur.writes}get done(){return this.step>=this.total}clone(t){return{arr:[...t.arr],ptrs:new Map(t.ptrs),sorted:t.sorted.slice(),cmp:t.cmp,swaps:t.swaps,writes:t.writes,raw:t.raw}}advance(t){const n=this.cur,r=this.trace,i=this.step+1<this.total?this.steps[this.step]:r.length/3-1,a=this.steps[this.step];for(;n.raw<=i;n.raw++){const o=n.raw,s=r[3*o],u=r[3*o+1],f=r[3*o+2];if(s===Wl){const m=Oa[u];f<0?n.ptrs.delete(m):n.ptrs.set(m,f)}else s===Lg?n.sorted.fill(1,u,f):o===a&&(t&&(this.caption=this.describe(s,u,f)),s===br||s===Fi?n.cmp++:s===jn?n.swaps++:s===Sr&&n.writes++,Bg(n.arr,r,o),this.last={op:s,i:u,j:f})}this.step++,this.step%Gr===0&&this.checkpoints.length===this.step/Gr&&this.checkpoints.push(this.clone(n)),this.done&&(n.ptrs.clear(),this.caption="Done: every element is in its final sorted position.",this.last=null)}forward(){return this.done?!1:(this.advance(!0),!0)}back(){return this.step===0?!1:(this.seek(this.step-1),!0)}seek(t){if(t=Math.max(0,Math.min(this.total,Math.floor(t))),t<this.step||t===0){const n=Math.min(Math.floor(t/Gr),this.checkpoints.length-1);this.cur=this.clone(this.checkpoints[n]),this.step=n*Gr,this.last=null,this.caption=t===0?"Ready. Press Play or Step forward to begin.":""}for(;this.step<t;)this.advance(this.step===t-1)}label(t){const n=[];for(const[r,i]of this.cur.ptrs)i===t&&!md.has(r)&&n.push(Qn(r));return n.length?` (${n.join(", ")})`:""}describe(t,n,r){const i=this.cur.arr,a=f=>`arr[${f}]=${i[f]}${this.label(f)}`,o=(f,m)=>f<m?"<":f>m?">":"=",s=this.cur.ptrs.get("gap"),u=s!==void 0?` [gap ${s}]`:"";switch(t){case br:{const f=this.cur.ptrs.get("pivot");if(f!==void 0&&(n===f||r===f)&&n!==r){const m=n===f?r:n,y=o(i[m],i[f]),v=this.algoId==="quick"?y==="<"?'it joins the "less" block (swap to less end; less end and i move right)':y===">"?'it joins the "greater" block (swap to greater start; greater start moves left)':"it stays with the pivot copies (i moves right)":y==="<"?"it goes left of the pivot":y===">"?"it goes right of the pivot":"it equals the pivot";return`Compare ${a(m)} with pivot ${i[f]}: ${i[m]} ${y} ${i[f]}, so ${v}.`}return`Compare ${a(n)} with ${a(r)}: ${i[n]} ${o(i[n],i[r])} ${i[r]}.${u}`}case Fi:{const f=Dg[this.algoId]??"held value",m=o(r,i[n]),y=this.algoId==="merge"?i[n]<r?`take the right value ${i[n]}`:`take the left value ${r}`:m==="<"?`${i[n]} must shift right`:"stop here";return`Compare ${f} ${r} with ${a(n)}: ${r} ${m} ${i[n]}, so ${y}.${u}`}case jn:return`Swap ${a(n)} and ${a(r)}.`;case Sr:return`Write ${r} into arr[${n}]${this.label(n)} (was ${i[n]}).`;default:return""}}}const Li=.25,gd=200,Ss=1e3,Hg=2,Wg=[{label:"Very slow",sps:.5},{label:"Slow",sps:2},{label:"Normal",sps:10},{label:"Fast",sps:60}],vd=Math.log(gd/Li);function qg(e){const t=Math.min(1,Math.max(0,e/Ss)),n=Li*Math.exp(t*vd);return Math.round(n*100)/100}function Qg(e){const t=Math.min(gd,Math.max(Li,e));return Math.round(Math.log(t/Li)/vd*Ss)}function Gg(e){const t=1e3/e;if(t>=16)return{delayMs:t,stepsPerTick:1};const n=Math.ceil(16/t);return{delayMs:n*t,stepsPerTick:n}}function ql(e){return e<1?`${e.toFixed(2)} steps/s`:e<10?`${e.toFixed(1)} steps/s`:`${Math.round(e)} steps/s`}function Kg({algoId:e,input:t,trace:n,sorted:r,truncated:i}){const a=M.useMemo(()=>new Vg(t,n,e),[t,n,e]),[,o]=M.useState(0),s=()=>o(x=>x+1),[u,f]=M.useState(!0),[m,y]=M.useState(Hg),v=M.useRef(null),[j,E]=M.useState(600);M.useEffect(()=>{const x=v.current;if(!x||typeof ResizeObserver>"u")return;const C=new ResizeObserver(()=>E(x.clientWidth||600));return C.observe(x),()=>C.disconnect()},[]),M.useEffect(()=>{a.seek(0),s()},[a]),M.useEffect(()=>{if(!u)return;if(a.done){f(!1);return}const{delayMs:x,stepsPerTick:C}=Gg(m),O=window.setTimeout(()=>{for(let I=0;I<C&&a.forward();I++);s()},x);return()=>window.clearTimeout(O)});const _=()=>{f(!1),a.forward(),s()},b=()=>{f(!1),a.back(),s()},p=()=>{a.done?(a.seek(0),f(!0)):f(x=>!x),s()};M.useEffect(()=>{const x=C=>{const O=C.target;if(!(!v.current||C.altKey||C.ctrlKey||C.metaKey)&&!(O&&(O.tagName==="TEXTAREA"||O.tagName==="SELECT"||O.tagName==="INPUT"||O.isContentEditable)))if(C.key===" "||C.code==="Space"){if(O?.tagName==="BUTTON")return;C.preventDefault(),p()}else C.key==="ArrowRight"?(C.preventDefault(),_()):C.key==="ArrowLeft"&&(C.preventDefault(),b())};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)});const l=a.array,c=l.length,h=Math.min(...t,...r),g=Math.max(...t,...r),w=x=>g===h?60:6+(x-h)/(g-h)*94,k=a.last,S=a.done,N=S&&l.every((x,C)=>x===r[C]),A=a.sortedMask,R=x=>{if(S)return"bar done";let C=A[x]?"bar sorted":"bar";return k&&(x===k.i||(k.op===br||k.op===jn)&&x===k.j)&&(C+=k.op===br||k.op===Fi?" cmp":k.op===jn?" swap":k.op===Sr?" set":""),C},te=new Map,Ce=[];for(const[x,C]of a.pointers){if(md.has(x)){Ce.push(`${Qn(x)} = ${C}`);continue}C<0||C>=c||te.set(C,[...te.get(C)??[],x])}const Ot=c<=32,Nn=Math.max(1,(j-8)/Math.max(1,c)),ct=[],Ne=[];for(const[x,C]of[...te.entries()].sort((O,I)=>O[0]-I[0])){const O=C.map(Qn).join(", "),I=(O.length*7+8)/2,xe=Math.max(2*I,j-10),G=Math.min(Math.max((x+.5)*Nn,I),xe-I);let me=Ne.findIndex(ge=>ge+3<G-I);me===-1&&(me=Ne.length,Ne.push(0)),Ne[me]=G+I,ct.push({idx:x,text:O,names:C,row:me,center:G})}const z=Math.max(1,Ne.length);return d.jsxs("div",{className:"viz","data-testid":"viz",ref:v,children:[d.jsx("div",{className:"bars","data-testid":"viz-bars",children:l.map((x,C)=>d.jsx("div",{className:R(C),style:{height:`${w(x)}%`},"data-value":x,"data-tip":`arr[${C}] = ${x}`,children:Ot&&d.jsx("span",{className:"bar-val",children:x})},C))}),d.jsx("div",{className:"pointers","data-testid":"viz-pointers","aria-label":"Pointers",style:{height:`${.9+z*1.35}rem`},children:ct.map(({idx:x,names:C,row:O,center:I})=>d.jsxs("div",{className:"ptr",style:{left:`${I+4}px`,top:`${O*1.35}rem`},"data-index":x,children:[d.jsx("span",{className:"ptr-arrow","aria-hidden":"true",children:"▲"}),d.jsx("span",{className:"ptr-name",children:C.map((xe,G)=>d.jsxs("span",{className:`ptr-${xe}`,"data-ptr":xe,children:[G?", ":"",Qn(xe)]},xe))})]},x))}),Ce.length>0&&d.jsx("div",{className:"small muted","data-testid":"viz-value-ptrs",children:Ce.join(" · ")}),d.jsx("p",{className:"viz-caption","data-testid":"viz-caption","aria-live":"polite",children:a.caption||" "}),d.jsxs("div",{className:"viz-counters small","data-testid":"viz-status",children:[d.jsxs("span",{children:["Step ",d.jsx("b",{"data-testid":"viz-step-num",children:a.step.toLocaleString()})," / ",a.total.toLocaleString()]}),d.jsxs("span",{children:["Comparisons ",d.jsx("b",{children:a.comparisons.toLocaleString()})]}),d.jsxs("span",{children:["Swaps ",d.jsx("b",{children:a.swaps.toLocaleString()})]}),d.jsxs("span",{children:["Writes ",d.jsx("b",{children:a.writes.toLocaleString()})]}),S&&d.jsx("span",{children:N?"✓ sorted":i?"trace truncated (too many operations to record)":"✗ mismatch"})]}),d.jsxs("label",{className:"scrub",children:[d.jsx("span",{className:"sr-only",children:"Progress"}),d.jsx("input",{type:"range",min:0,max:a.total,value:a.step,"aria-label":"Progress (step)","data-testid":"viz-scrub",onChange:x=>{f(!1),a.seek(Number(x.target.value)),s()}})]}),d.jsxs("div",{className:"viz-controls",children:[d.jsx("button",{type:"button",className:"btn small",onClick:()=>{f(!1),a.seek(0),s()},"data-testid":"viz-reset","aria-label":"Reset to start",children:"⏮ Reset"}),d.jsx("button",{type:"button",className:"btn small",onClick:b,disabled:a.step===0,"data-testid":"viz-back","aria-label":"Step back",children:"◀ Back"}),d.jsx("button",{type:"button",className:"btn small primary",onClick:p,"data-testid":"viz-play",children:u?"❚❚ Pause":S?"↻ Replay":"▶ Play"}),d.jsx("button",{type:"button",className:"btn small",onClick:_,disabled:S,"data-testid":"viz-step","aria-label":"Step forward",children:"Step ▶"}),d.jsx("button",{type:"button",className:"btn small",onClick:()=>{f(!1),a.seek(a.total),s()},disabled:S,"data-testid":"viz-end","aria-label":"Jump to end",children:"End ⏭"})]}),d.jsxs("div",{className:"speed-row",children:[d.jsx("div",{className:"presets",role:"group","aria-label":"Speed presets",children:Wg.map(x=>d.jsx("button",{type:"button",className:`btn small ${Math.abs(m-x.sps)<1e-9?"active":""}`,"aria-pressed":Math.abs(m-x.sps)<1e-9,onClick:()=>y(x.sps),"data-testid":`speed-${x.label.toLowerCase().replace(" ","-")}`,children:x.label},x.label))}),d.jsxs("label",{className:"speed",children:[d.jsx("span",{children:"Speed"}),d.jsx("input",{type:"range",min:0,max:Ss,value:Qg(m),onChange:x=>y(qg(Number(x.target.value))),"data-testid":"viz-speed","aria-label":"Animation speed (steps per second)","aria-valuetext":ql(m)}),d.jsx("output",{"data-testid":"viz-speed-value",children:ql(m)})]})]}),a.pointerNamesUsed.length>0&&d.jsxs("details",{className:"ptr-legend small",open:!0,"data-testid":"viz-ptr-legend",children:[d.jsx("summary",{children:"What the pointers mean"}),d.jsx("dl",{children:a.pointerNamesUsed.map(x=>d.jsxs("div",{className:a.pointers.has(x)?"active":"","data-legend":x,children:[d.jsx("dt",{className:`ptr-${x}`,children:Qn(x)}),d.jsx("dd",{children:$g(e,x)})]},x))})]}),d.jsxs("div",{className:"viz-legend small",children:[d.jsxs("span",{children:[d.jsx("i",{className:"sw cmp"})," compare"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw swap"})," swap"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw set"})," write"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw sorted"})," final position"]}),d.jsx("span",{className:"muted",children:"Keys: Space play/pause · ← back · → forward"})]})]})}const Xt=e=>e.toLocaleString();function Yg({algo:e}){const t=Math.min(e.id==="bogo"?6:24,e.maxViz),[n,r]=M.useState(""),[i,a]=M.useState(""),[o,s]=M.useState(null),[u,f]=M.useState(null),[m,y]=M.useState(!1);async function v(b){y(!0),a("");try{const p=await Hl(e.id,b,!1);s({...p,input:b})}catch(p){a(p instanceof Error?p.message:String(p)),s(null)}finally{y(!1)}}function j(b){const p=kg(n,b);return p.ok?p.values:(a(p.error),null)}async function E(){const b=dd("random",t,Date.now()%1e5,99);r(b.join(", ")),f(null),await v(b)}async function _(){const b=j(e.maxViz);if(b){y(!0),a("");try{const p=await Hl(e.id,b,!0);s({...p,input:b}),f({input:b,trace:p.trace,sorted:p.sorted,truncated:p.truncated,key:Date.now()})}catch(p){a(p instanceof Error?p.message:String(p))}finally{y(!1)}}}return d.jsxs("div",{className:"playground","data-testid":"playground",children:[d.jsxs("p",{className:"muted small",children:["Enter whole numbers separated by commas or spaces (values between -1,000,000,000 and 1,000,000,000). Limits for ",e.name,": up to ",Xt(e.maxInput)," numbers for a plain run, up to ",e.maxViz," for the visualization.",e.id==="counting"&&" Counting sort also needs max - min < 1,000,000."]}),d.jsx("label",{className:"sr-only",htmlFor:"pg-input",children:"Numbers to sort"}),d.jsx("textarea",{id:"pg-input","data-testid":"pg-input",rows:3,value:n,placeholder:"e.g. 5, 3, 9, -2, 7 1 4",onChange:b=>r(b.target.value),"aria-invalid":!!i,"aria-describedby":"pg-error"}),d.jsxs("div",{className:"btn-row",children:[d.jsx("button",{type:"button",className:"btn",onClick:E,disabled:m,"data-testid":"pg-sample",children:"Sort sample data"}),d.jsx("button",{type:"button",className:"btn",onClick:()=>{const b=j(e.maxInput);b&&(f(null),v(b))},disabled:m,"data-testid":"pg-run",children:"Run (no GUI)"}),d.jsx("button",{type:"button",className:"btn primary",onClick:_,disabled:m,"data-testid":"pg-viz",children:"Run with visualization"})]}),d.jsx("p",{id:"pg-error",className:"error",role:"alert","data-testid":"pg-error",children:i}),o&&!i&&d.jsxs("div",{className:"result","data-testid":"pg-result",children:[d.jsxs("div",{className:"stats",children:[d.jsxs("span",{children:[d.jsx("b",{children:"Time"})," ",d.jsxs("span",{"data-testid":"pg-time",children:[o.ms<.1?o.ms.toFixed(3):o.ms.toFixed(2)," ms"]})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Comparisons"})," ",d.jsx("span",{"data-testid":"pg-cmp",children:Xt(o.comparisons)})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Swaps"})," ",d.jsx("span",{"data-testid":"pg-swaps",children:Xt(o.swaps)})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Writes"})," ",Xt(o.writes)]}),d.jsxs("span",{children:[d.jsx("b",{children:"n"})," ",Xt(o.input.length)]})]}),d.jsx("div",{className:"out-label",children:"Sorted output"}),d.jsx("output",{className:"output","data-testid":"pg-output",children:o.sorted.length>2e3?`${o.sorted.slice(0,2e3).join(", ")}, … (${Xt(o.sorted.length-2e3)} more)`:o.sorted.join(", ")}),d.jsx("p",{className:"muted small",children:"Swaps = element exchanges; writes = single-element stores (used by merge, insertion, shell, counting, radix, bucket, cycle and Timsort)."})]}),u&&d.jsx(Kg,{algoId:e.id,input:u.input,trace:u.trace,sorted:u.sorted,truncated:u.truncated},u.key)]})}function Zg({algo:e}){const t=Pn[e.rank-2],n=Pn[e.rank];return d.jsxs("article",{className:"algo","data-testid":"algo-page",children:[d.jsxs("nav",{className:"crumbs",children:[d.jsx("a",{href:"#/",children:"← Index"}),d.jsx("span",{className:"spacer"}),t&&d.jsxs("a",{href:`#/algo/${t.id}`,children:["‹ ",t.name]}),n&&d.jsxs("a",{href:`#/algo/${n.id}`,children:[n.name," ›"]})]}),d.jsxs("h1",{children:[d.jsxs("span",{className:"rank-pill",children:["#",e.rank]})," ",e.name]}),d.jsx("p",{className:"lead",children:e.summary}),d.jsxs("div",{className:"two-col",children:[d.jsxs("section",{className:"card","aria-label":"Algorithm explanation",children:[d.jsx("h2",{children:"How it works"}),d.jsx("p",{className:"notation","data-testid":"notation",children:Xp}),d.jsx("ol",{className:"steps",children:e.steps.map(r=>d.jsx("li",{children:r},r))}),d.jsx("h3",{children:"Pseudocode"}),d.jsx("pre",{className:"pseudo",children:e.pseudocode})]}),d.jsxs("section",{className:"card","aria-label":"Code",children:[d.jsx("h2",{children:"Code"}),d.jsx(_g,{algoId:e.id})]})]}),d.jsxs("section",{className:"card","aria-labelledby":"info-h",children:[d.jsx("h2",{id:"info-h",children:"At a glance"}),d.jsx("div",{className:"table-wrap",children:d.jsx("table",{className:"info","data-testid":"info-table",children:d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("th",{children:"Time (best)"}),d.jsx("td",{children:e.best})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Time (average)"}),d.jsx("td",{children:e.avg})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Time (worst)"}),d.jsx("td",{children:e.worst})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Space"}),d.jsx("td",{children:e.space})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Stable"}),d.jsx("td",{children:e.stable?"Yes":"No"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"In-place"}),d.jsx("td",{children:e.inPlace?"Yes":"No"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Family"}),d.jsx("td",{children:e.family})]})]})})}),d.jsxs("div",{className:"facts",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"Most suitable when"}),d.jsx("p",{children:e.suitable})]}),d.jsxs("div",{children:[d.jsx("h3",{children:"Performs badly when"}),d.jsx("p",{children:e.bad})]}),d.jsxs("div",{children:[d.jsx("h3",{children:"Practical uses"}),d.jsx("ul",{children:e.uses.map(r=>d.jsx("li",{children:r},r))})]}),d.jsxs("div",{children:[d.jsxs("h3",{children:["Why rank #",e.rank]}),d.jsx("p",{children:e.why})]})]})]}),d.jsxs("div",{className:"two-col",children:[d.jsxs("section",{className:"card",children:[d.jsx("h2",{children:"Complexity growth"}),d.jsx(wg,{highlight:e.growth})]}),d.jsxs("section",{className:"card",children:[d.jsx("h2",{children:"Measured benchmark (WASM)"}),d.jsx(Fg,{algo:e})]})]}),d.jsxs("section",{className:"card","aria-labelledby":"play-h",children:[d.jsx("h2",{id:"play-h",children:"Playground"}),d.jsx(Yg,{algo:e})]})]})}const ui=6,zo=18,yd="sort-pedia:theme",Xg=["auto","light","dark"],Ps=e=>typeof e=="string"&&Xg.includes(e);function Jg(e){const t=e.getHours();return t>=ui&&t<zo?"light":"dark"}function ev(e,t=new Date){return e==="auto"?Jg(t):e}function tv(e){const t=new Date(e.getTime());t.setMinutes(0,0,0);const n=e.getHours();return n<ui?t.setHours(ui):n<zo?t.setHours(zo):(t.setDate(t.getDate()+1),t.setHours(ui)),Math.max(0,t.getTime()-e.getTime())}function _d(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function wd(){const e=_d()?.getItem(yd);return Ps(e)?e:"auto"}function nv(e){if(!Ps(e))throw new Error(`Unknown theme mode: ${String(e)}`);_d()?.setItem(yd,e)}function rv(e,t=document.documentElement){t.dataset.theme=e,t.style.colorScheme=e}function iv(e=wd,t=()=>new Date){let n;const r=()=>{clearTimeout(n);const a=e(),o=t();rv(ev(a,o)),a==="auto"&&(n=setTimeout(r,tv(o)+1e3))},i=()=>{document.visibilityState==="visible"&&r()};return document.addEventListener("visibilitychange",i),r(),()=>{clearTimeout(n),document.removeEventListener("visibilitychange",i)}}function av(){const[e,t]=M.useState(wd());return M.useEffect(()=>iv(()=>e),[e]),d.jsxs("label",{className:"settings",children:[d.jsx("span",{children:"Theme"}),d.jsxs("select",{"aria-label":"Color theme","data-testid":"theme-select",value:e,onChange:n=>{const r=n.target.value;Ps(r)&&(nv(r),t(r))},children:[d.jsx("option",{value:"auto",children:"Auto (light 06–18, dark 18–06)"}),d.jsx("option",{value:"light",children:"Light"}),d.jsx("option",{value:"dark",children:"Dark"})]})]})}function ov(){const e=Yp(),t=e.page==="algo"?Jp[e.id]:void 0;return M.useEffect(()=>{document.title=t?`${t.name} · Sort Pedia`:"Sort Pedia",window.scrollTo(0,0)},[t]),d.jsxs(d.Fragment,{children:[d.jsxs("header",{className:"topbar",children:[d.jsx("a",{className:"brand",href:"#/",children:"Sort Pedia"}),d.jsxs("label",{className:"jump",children:[d.jsx("span",{className:"sr-only",children:"Jump to algorithm"}),d.jsxs("select",{"aria-label":"Jump to algorithm","data-testid":"jump-select",value:t?.id??"",onChange:n=>{n.target.value&&(window.location.hash=`#/algo/${n.target.value}`)},children:[d.jsx("option",{value:"",children:"Jump to algorithm…"}),Pn.map(n=>d.jsxs("option",{value:n.id,children:[n.rank,". ",n.name]},n.id))]})]}),d.jsx(vg,{}),d.jsx(av,{})]}),d.jsx("main",{className:"container",children:e.page==="algo"&&!t?d.jsxs("div",{className:"card",children:[d.jsx("h2",{children:"Unknown algorithm"}),d.jsx("p",{children:d.jsx("a",{href:"#/",children:"Back to the index"})})]}):t?d.jsx(Zg,{algo:t},t.id):d.jsx(eh,{})}),d.jsxs("footer",{className:"footer",children:["All sorting runs in Rust compiled to WebAssembly. ",d.jsx("a",{href:"https://github.com/abhi1kush/sort-pedia",children:"Source on GitHub"})]})]})}ad(document.getElementById("root")).render(d.jsx(M.StrictMode,{children:d.jsx(ov,{})}));
