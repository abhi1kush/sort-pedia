(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function td(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tl={exports:{}},Ar={},Fl={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vi=Symbol.for("react.element"),id=Symbol.for("react.portal"),rd=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ld=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),dd=Symbol.for("react.memo"),fd=Symbol.for("react.lazy"),hs=Symbol.iterator;function pd(e){return e===null||typeof e!="object"?null:(e=hs&&e[hs]||e["@@iterator"],typeof e=="function"?e:null)}var Ll={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rl=Object.assign,Il={};function bt(e,n,t){this.props=e,this.context=n,this.refs=Il,this.updater=t||Ll}bt.prototype.isReactComponent={};bt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};bt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ml(){}Ml.prototype=bt.prototype;function vo(e,n,t){this.props=e,this.context=n,this.refs=Il,this.updater=t||Ll}var wo=vo.prototype=new Ml;wo.constructor=vo;Rl(wo,bt.prototype);wo.isPureReactComponent=!0;var gs=Array.isArray,Dl=Object.prototype.hasOwnProperty,_o={current:null},$l={key:!0,ref:!0,__self:!0,__source:!0};function Bl(e,n,t){var i,r={},a=null,o=null;if(n!=null)for(i in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)Dl.call(n,i)&&!$l.hasOwnProperty(i)&&(r[i]=n[i]);var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){for(var u=Array(s),p=0;p<s;p++)u[p]=arguments[p+2];r.children=u}if(e&&e.defaultProps)for(i in s=e.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:vi,type:e,key:a,ref:o,props:r,_owner:_o.current}}function md(e,n){return{$$typeof:vi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ko(e){return typeof e=="object"&&e!==null&&e.$$typeof===vi}function hd(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ys=/\/+/g;function Gr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hd(""+e.key):n.toString(36)}function Vi(e,n,t,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case vi:case id:o=!0}}if(o)return o=e,r=r(o),e=i===""?"."+Gr(o,0):i,gs(r)?(t="",e!=null&&(t=e.replace(ys,"$&/")+"/"),Vi(r,n,t,"",function(p){return p})):r!=null&&(ko(r)&&(r=md(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ys,"$&/")+"/")+e)),n.push(r)),1;if(o=0,i=i===""?".":i+":",gs(e))for(var s=0;s<e.length;s++){a=e[s];var u=i+Gr(a,s);o+=Vi(a,n,t,u,r)}else if(u=pd(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=i+Gr(a,s++),o+=Vi(a,n,t,u,r);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Si(e,n,t){if(e==null)return e;var i=[],r=0;return Vi(e,i,"","",function(a){return n.call(t,a,r++)}),i}function gd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Wi={transition:null},yd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Wi,ReactCurrentOwner:_o};function Ul(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:Si,forEach:function(e,n,t){Si(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Si(e,function(){n++}),n},toArray:function(e){return Si(e,function(n){return n})||[]},only:function(e){if(!ko(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=bt;T.Fragment=rd;T.Profiler=od;T.PureComponent=vo;T.StrictMode=ad;T.Suspense=cd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yd;T.act=Ul;T.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Rl({},e.props),r=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=_o.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)Dl.call(n,u)&&!$l.hasOwnProperty(u)&&(i[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)i.children=t;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];i.children=s}return{$$typeof:vi,type:e.type,key:r,ref:a,props:i,_owner:o}};T.createContext=function(e){return e={$$typeof:ld,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sd,_context:e},e.Consumer=e};T.createElement=Bl;T.createFactory=function(e){var n=Bl.bind(null,e);return n.type=e,n};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:ud,render:e}};T.isValidElement=ko;T.lazy=function(e){return{$$typeof:fd,_payload:{_status:-1,_result:e},_init:gd}};T.memo=function(e,n){return{$$typeof:dd,type:e,compare:n===void 0?null:n}};T.startTransition=function(e){var n=Wi.transition;Wi.transition={};try{e()}finally{Wi.transition=n}};T.unstable_act=Ul;T.useCallback=function(e,n){return fe.current.useCallback(e,n)};T.useContext=function(e){return fe.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};T.useEffect=function(e,n){return fe.current.useEffect(e,n)};T.useId=function(){return fe.current.useId()};T.useImperativeHandle=function(e,n,t){return fe.current.useImperativeHandle(e,n,t)};T.useInsertionEffect=function(e,n){return fe.current.useInsertionEffect(e,n)};T.useLayoutEffect=function(e,n){return fe.current.useLayoutEffect(e,n)};T.useMemo=function(e,n){return fe.current.useMemo(e,n)};T.useReducer=function(e,n,t){return fe.current.useReducer(e,n,t)};T.useRef=function(e){return fe.current.useRef(e)};T.useState=function(e){return fe.current.useState(e)};T.useSyncExternalStore=function(e,n,t){return fe.current.useSyncExternalStore(e,n,t)};T.useTransition=function(){return fe.current.useTransition()};T.version="18.3.1";Fl.exports=T;var D=Fl.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=D,wd=Symbol.for("react.element"),_d=Symbol.for("react.fragment"),kd=Object.prototype.hasOwnProperty,xd=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bd={key:!0,ref:!0,__self:!0,__source:!0};function Vl(e,n,t){var i,r={},a=null,o=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(i in n)kd.call(n,i)&&!bd.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:wd,type:e,key:a,ref:o,props:r,_owner:xd.current}}Ar.Fragment=_d;Ar.jsx=Vl;Ar.jsxs=Vl;Tl.exports=Ar;var d=Tl.exports,Wl={exports:{}},Se={},Hl={exports:{}},ql={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(A,P){var O=A.length;A.push(P);e:for(;0<O;){var $=O-1>>>1,R=A[$];if(0<r(R,P))A[$]=P,A[O]=R,O=$;else break e}}function t(A){return A.length===0?null:A[0]}function i(A){if(A.length===0)return null;var P=A[0],O=A.pop();if(O!==P){A[0]=O;e:for(var $=0,R=A.length,Qn=R>>>1;$<Qn;){var ae=2*($+1)-1,Ge=A[ae],ze=ae+1,Ke=A[ze];if(0>r(Ge,O))ze<R&&0>r(Ke,Ge)?(A[$]=Ke,A[ze]=O,$=ze):(A[$]=Ge,A[ae]=O,$=ae);else if(ze<R&&0>r(Ke,O))A[$]=Ke,A[ze]=O,$=ze;else break e}}return P}function r(A,P){var O=A.sortIndex-P.sortIndex;return O!==0?O:A.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],p=[],y=1,w=null,h=3,S=!1,z=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,l=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(A){for(var P=t(p);P!==null;){if(P.callback===null)i(p);else if(P.startTime<=A)i(p),P.sortIndex=P.expirationTime,n(u,P);else break;P=t(p)}}function m(A){if(_=!1,c(A),!z)if(t(u)!==null)z=!0,Et(g);else{var P=t(p);P!==null&&qn(m,P.startTime-A)}}function g(A,P){z=!1,_&&(_=!1,f(x),x=-1),S=!0;var O=h;try{for(c(P),w=t(u);w!==null&&(!(w.expirationTime>P)||A&&!L());){var $=w.callback;if(typeof $=="function"){w.callback=null,h=w.priorityLevel;var R=$(w.expirationTime<=P);P=e.unstable_now(),typeof R=="function"?w.callback=R:w===t(u)&&i(u),c(P)}else i(u);w=t(u)}if(w!==null)var Qn=!0;else{var ae=t(p);ae!==null&&qn(m,ae.startTime-P),Qn=!1}return Qn}finally{w=null,h=O,S=!1}}var v=!1,k=null,x=-1,j=5,N=-1;function L(){return!(e.unstable_now()-N<j)}function me(){if(k!==null){var A=e.unstable_now();N=A;var P=!0;try{P=k(!0,A)}finally{P?ln():(v=!1,k=null)}}else v=!1}var ln;if(typeof l=="function")ln=function(){l(me)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,Wr=zt.port2;zt.port1.onmessage=me,ln=function(){Wr.postMessage(null)}}else ln=function(){E(me,0)};function Et(A){k=A,v||(v=!0,ln())}function qn(A,P){x=E(function(){A(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){z||S||(z=!0,Et(g))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var O=h;h=P;try{return A()}finally{h=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,P){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var O=h;h=A;try{return P()}finally{h=O}},e.unstable_scheduleCallback=function(A,P,O){var $=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,A){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=O+R,A={id:y++,callback:P,priorityLevel:A,startTime:O,expirationTime:R,sortIndex:-1},O>$?(A.sortIndex=O,n(p,A),t(u)===null&&A===t(p)&&(_?(f(x),x=-1):_=!0,qn(m,O-$))):(A.sortIndex=R,n(u,A),z||S||(z=!0,Et(g))),A},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(A){var P=h;return function(){var O=h;h=P;try{return A.apply(this,arguments)}finally{h=O}}}})(ql);Hl.exports=ql;var Sd=Hl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=D,be=Sd;function b(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ql=new Set,Jt={};function Wn(e,n){ht(e,n),ht(e+"Capture",n)}function ht(e,n){for(Jt[e]=n,e=0;e<n.length;e++)Ql.add(n[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sa=Object.prototype.hasOwnProperty,zd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vs={},ws={};function Ed(e){return Sa.call(ws,e)?!0:Sa.call(vs,e)?!1:zd.test(e)?ws[e]=!0:(vs[e]=!0,!1)}function Ad(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cd(e,n,t,i){if(n===null||typeof n>"u"||Ad(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function pe(e,n,t,i,r,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new pe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var xo=/[\-:]([a-z])/g;function bo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(xo,bo);re[n]=new pe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(xo,bo);re[n]=new pe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(xo,bo);re[n]=new pe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function So(e,n,t,i){var r=re.hasOwnProperty(n)?re[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Cd(n,t,r,i)&&(t=null),i||r===null?Ed(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,i=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var sn=jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ji=Symbol.for("react.element"),Zn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),jo=Symbol.for("react.strict_mode"),ja=Symbol.for("react.profiler"),Gl=Symbol.for("react.provider"),Kl=Symbol.for("react.context"),zo=Symbol.for("react.forward_ref"),za=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Eo=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),Yl=Symbol.for("react.offscreen"),_s=Symbol.iterator;function At(e){return e===null||typeof e!="object"?null:(e=_s&&e[_s]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Kr;function Rt(e){if(Kr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Kr=n&&n[1]||""}return`
`+Kr+e}var Yr=!1;function Zr(e,n){if(!e||Yr)return"";Yr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(p){var i=p}Reflect.construct(e,[],n)}else{try{n.call()}catch(p){i=p}e.call(n.prototype)}else{try{throw Error()}catch(p){i=p}e()}}catch(p){if(p&&i&&typeof p.stack=="string"){for(var r=p.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var u=`
`+r[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{Yr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Rt(e):""}function Nd(e){switch(e.tag){case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 2:case 15:return e=Zr(e.type,!1),e;case 11:return e=Zr(e.type.render,!1),e;case 1:return e=Zr(e.type,!0),e;default:return""}}function Aa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Zn:return"Portal";case ja:return"Profiler";case jo:return"StrictMode";case za:return"Suspense";case Ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kl:return(e.displayName||"Context")+".Consumer";case Gl:return(e._context.displayName||"Context")+".Provider";case zo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Eo:return n=e.displayName||null,n!==null?n:Aa(e.type)||"Memo";case fn:n=e._payload,e=e._init;try{return Aa(e(n))}catch{}}return null}function Pd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Aa(n);case 8:return n===jo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Od(e){var n=Zl(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function zi(e){e._valueTracker||(e._valueTracker=Od(e))}function Xl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=Zl(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ca(e,n){var t=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ks(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=zn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Jl(e,n){n=n.checked,n!=null&&So(e,"checked",n,!1)}function Na(e,n){Jl(e,n);var t=zn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Pa(e,n.type,t):n.hasOwnProperty("defaultValue")&&Pa(e,n.type,zn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xs(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Pa(e,n,t){(n!=="number"||ir(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var It=Array.isArray;function ut(e,n,t,i){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&i&&(e[t].defaultSelected=!0)}else{for(t=""+zn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Oa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(b(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(b(92));if(It(t)){if(1<t.length)throw Error(b(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:zn(t)}}function eu(e,n){var t=zn(n.value),i=zn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function Ss(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function nu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ta(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?nu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,tu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ei(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Vt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Td=["Webkit","ms","Moz","O"];Object.keys(Vt).forEach(function(e){Td.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Vt[n]=Vt[e]})});function iu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Vt.hasOwnProperty(e)&&Vt[e]?(""+n).trim():n+"px"}function ru(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=iu(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,r):e[t]=r}}var Fd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,n){if(n){if(Fd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(b(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(b(61))}if(n.style!=null&&typeof n.style!="object")throw Error(b(62))}}function La(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=null;function Ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,ct=null,dt=null;function js(e){if(e=ki(e)){if(typeof Ia!="function")throw Error(b(280));var n=e.stateNode;n&&(n=Tr(n),Ia(e.stateNode,e.type,n))}}function au(e){ct?dt?dt.push(e):dt=[e]:ct=e}function ou(){if(ct){var e=ct,n=dt;if(dt=ct=null,js(e),n)for(e=0;e<n.length;e++)js(n[e])}}function su(e,n){return e(n)}function lu(){}var Xr=!1;function uu(e,n,t){if(Xr)return e(n,t);Xr=!0;try{return su(e,n,t)}finally{Xr=!1,(ct!==null||dt!==null)&&(lu(),ou())}}function ni(e,n){var t=e.stateNode;if(t===null)return null;var i=Tr(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(b(231,n,typeof t));return t}var Ma=!1;if(tn)try{var Ct={};Object.defineProperty(Ct,"passive",{get:function(){Ma=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch{Ma=!1}function Ld(e,n,t,i,r,a,o,s,u){var p=Array.prototype.slice.call(arguments,3);try{n.apply(t,p)}catch(y){this.onError(y)}}var Wt=!1,rr=null,ar=!1,Da=null,Rd={onError:function(e){Wt=!0,rr=e}};function Id(e,n,t,i,r,a,o,s,u){Wt=!1,rr=null,Ld.apply(Rd,arguments)}function Md(e,n,t,i,r,a,o,s,u){if(Id.apply(this,arguments),Wt){if(Wt){var p=rr;Wt=!1,rr=null}else throw Error(b(198));ar||(ar=!0,Da=p)}}function Hn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function cu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function zs(e){if(Hn(e)!==e)throw Error(b(188))}function Dd(e){var n=e.alternate;if(!n){if(n=Hn(e),n===null)throw Error(b(188));return n!==e?null:e}for(var t=e,i=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return zs(r),e;if(a===i)return zs(r),n;a=a.sibling}throw Error(b(188))}if(t.return!==i.return)t=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===t){o=!0,t=r,i=a;break}if(s===i){o=!0,i=r,t=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===t){o=!0,t=a,i=r;break}if(s===i){o=!0,i=a,t=r;break}s=s.sibling}if(!o)throw Error(b(189))}}if(t.alternate!==i)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?e:n}function du(e){return e=Dd(e),e!==null?fu(e):null}function fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=fu(e);if(n!==null)return n;e=e.sibling}return null}var pu=be.unstable_scheduleCallback,Es=be.unstable_cancelCallback,$d=be.unstable_shouldYield,Bd=be.unstable_requestPaint,K=be.unstable_now,Ud=be.unstable_getCurrentPriorityLevel,Co=be.unstable_ImmediatePriority,mu=be.unstable_UserBlockingPriority,or=be.unstable_NormalPriority,Vd=be.unstable_LowPriority,hu=be.unstable_IdlePriority,Cr=null,qe=null;function Wd(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(Cr,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Qd,Hd=Math.log,qd=Math.LN2;function Qd(e){return e>>>=0,e===0?32:31-(Hd(e)/qd|0)|0}var Ai=64,Ci=4194304;function Mt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sr(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~r;s!==0?i=Mt(s):(a&=o,a!==0&&(i=Mt(a)))}else o=t&~r,o!==0?i=Mt(o):a!==0&&(i=Mt(a));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,a=n&-n,r>=a||r===16&&(a&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-De(n),r=1<<t,i|=e[t],n&=~r;return i}function Gd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kd(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-De(a),s=1<<o,u=r[o];u===-1?(!(s&t)||s&i)&&(r[o]=Gd(s,n)):u<=n&&(e.expiredLanes|=s),a&=~s}}function $a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gu(){var e=Ai;return Ai<<=1,!(Ai&4194240)&&(Ai=64),e}function Jr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function wi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=t}function Yd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-De(t),a=1<<r;n[r]=0,i[r]=-1,e[r]=-1,t&=~a}}function No(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-De(t),r=1<<i;r&n|e[i]&n&&(e[i]|=n),t&=~r}}var M=0;function yu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vu,Po,wu,_u,ku,Ba=!1,Ni=[],vn=null,wn=null,_n=null,ti=new Map,ii=new Map,mn=[],Zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function As(e,n){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":ti.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(n.pointerId)}}function Nt(e,n,t,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},n!==null&&(n=ki(n),n!==null&&Po(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Xd(e,n,t,i,r){switch(n){case"focusin":return vn=Nt(vn,e,n,t,i,r),!0;case"dragenter":return wn=Nt(wn,e,n,t,i,r),!0;case"mouseover":return _n=Nt(_n,e,n,t,i,r),!0;case"pointerover":var a=r.pointerId;return ti.set(a,Nt(ti.get(a)||null,e,n,t,i,r)),!0;case"gotpointercapture":return a=r.pointerId,ii.set(a,Nt(ii.get(a)||null,e,n,t,i,r)),!0}return!1}function xu(e){var n=Tn(e.target);if(n!==null){var t=Hn(n);if(t!==null){if(n=t.tag,n===13){if(n=cu(t),n!==null){e.blockedOn=n,ku(e.priority,function(){wu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ua(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);Ra=i,t.target.dispatchEvent(i),Ra=null}else return n=ki(t),n!==null&&Po(n),e.blockedOn=t,!1;n.shift()}return!0}function Cs(e,n,t){Hi(e)&&t.delete(n)}function Jd(){Ba=!1,vn!==null&&Hi(vn)&&(vn=null),wn!==null&&Hi(wn)&&(wn=null),_n!==null&&Hi(_n)&&(_n=null),ti.forEach(Cs),ii.forEach(Cs)}function Pt(e,n){e.blockedOn===n&&(e.blockedOn=null,Ba||(Ba=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Jd)))}function ri(e){function n(r){return Pt(r,e)}if(0<Ni.length){Pt(Ni[0],e);for(var t=1;t<Ni.length;t++){var i=Ni[t];i.blockedOn===e&&(i.blockedOn=null)}}for(vn!==null&&Pt(vn,e),wn!==null&&Pt(wn,e),_n!==null&&Pt(_n,e),ti.forEach(n),ii.forEach(n),t=0;t<mn.length;t++)i=mn[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<mn.length&&(t=mn[0],t.blockedOn===null);)xu(t),t.blockedOn===null&&mn.shift()}var ft=sn.ReactCurrentBatchConfig,lr=!0;function ef(e,n,t,i){var r=M,a=ft.transition;ft.transition=null;try{M=1,Oo(e,n,t,i)}finally{M=r,ft.transition=a}}function nf(e,n,t,i){var r=M,a=ft.transition;ft.transition=null;try{M=4,Oo(e,n,t,i)}finally{M=r,ft.transition=a}}function Oo(e,n,t,i){if(lr){var r=Ua(e,n,t,i);if(r===null)ua(e,n,i,ur,t),As(e,i);else if(Xd(r,e,n,t,i))i.stopPropagation();else if(As(e,i),n&4&&-1<Zd.indexOf(e)){for(;r!==null;){var a=ki(r);if(a!==null&&vu(a),a=Ua(e,n,t,i),a===null&&ua(e,n,i,ur,t),a===r)break;r=a}r!==null&&i.stopPropagation()}else ua(e,n,i,null,t)}}var ur=null;function Ua(e,n,t,i){if(ur=null,e=Ao(i),e=Tn(e),e!==null)if(n=Hn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=cu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ur=e,null}function bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ud()){case Co:return 1;case mu:return 4;case or:case Vd:return 16;case hu:return 536870912;default:return 16}default:return 16}}var gn=null,To=null,qi=null;function Su(){if(qi)return qi;var e,n=To,t=n.length,i,r="value"in gn?gn.value:gn.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var o=t-e;for(i=1;i<=o&&n[t-i]===r[a-i];i++);return qi=r.slice(e,1<i?1-i:void 0)}function Qi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function Ns(){return!1}function je(e){function n(t,i,r,a,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Pi:Ns,this.isPropagationStopped=Ns,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),n}var St={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=je(St),_i=Q({},St,{view:0,detail:0}),tf=je(_i),ea,na,Ot,Nr=Q({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ot&&(Ot&&e.type==="mousemove"?(ea=e.screenX-Ot.screenX,na=e.screenY-Ot.screenY):na=ea=0,Ot=e),ea)},movementY:function(e){return"movementY"in e?e.movementY:na}}),Ps=je(Nr),rf=Q({},Nr,{dataTransfer:0}),af=je(rf),of=Q({},_i,{relatedTarget:0}),ta=je(of),sf=Q({},St,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=je(sf),uf=Q({},St,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=je(uf),df=Q({},St,{data:0}),Os=je(df),ff={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=mf[e])?!!n[e]:!1}function Lo(){return hf}var gf=Q({},_i,{key:function(e){if(e.key){var n=ff[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yf=je(gf),vf=Q({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ts=je(vf),wf=Q({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),_f=je(wf),kf=Q({},St,{propertyName:0,elapsedTime:0,pseudoElement:0}),xf=je(kf),bf=Q({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=je(bf),jf=[9,13,27,32],Ro=tn&&"CompositionEvent"in window,Ht=null;tn&&"documentMode"in document&&(Ht=document.documentMode);var zf=tn&&"TextEvent"in window&&!Ht,ju=tn&&(!Ro||Ht&&8<Ht&&11>=Ht),Fs=" ",Ls=!1;function zu(e,n){switch(e){case"keyup":return jf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Ef(e,n){switch(e){case"compositionend":return Eu(n);case"keypress":return n.which!==32?null:(Ls=!0,Fs);case"textInput":return e=n.data,e===Fs&&Ls?null:e;default:return null}}function Af(e,n){if(Jn)return e==="compositionend"||!Ro&&zu(e,n)?(e=Su(),qi=To=gn=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ju&&n.locale!=="ko"?null:n.data;default:return null}}var Cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cf[e.type]:n==="textarea"}function Au(e,n,t,i){au(i),n=cr(n,"onChange"),0<n.length&&(t=new Fo("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var qt=null,ai=null;function Nf(e){Du(e,0)}function Pr(e){var n=tt(e);if(Xl(n))return e}function Pf(e,n){if(e==="change")return n}var Cu=!1;if(tn){var ia;if(tn){var ra="oninput"in document;if(!ra){var Is=document.createElement("div");Is.setAttribute("oninput","return;"),ra=typeof Is.oninput=="function"}ia=ra}else ia=!1;Cu=ia&&(!document.documentMode||9<document.documentMode)}function Ms(){qt&&(qt.detachEvent("onpropertychange",Nu),ai=qt=null)}function Nu(e){if(e.propertyName==="value"&&Pr(ai)){var n=[];Au(n,ai,e,Ao(e)),uu(Nf,n)}}function Of(e,n,t){e==="focusin"?(Ms(),qt=n,ai=t,qt.attachEvent("onpropertychange",Nu)):e==="focusout"&&Ms()}function Tf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pr(ai)}function Ff(e,n){if(e==="click")return Pr(n)}function Lf(e,n){if(e==="input"||e==="change")return Pr(n)}function Rf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Be=typeof Object.is=="function"?Object.is:Rf;function oi(e,n){if(Be(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Sa.call(n,r)||!Be(e[r],n[r]))return!1}return!0}function Ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,n){var t=Ds(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ds(t)}}function Pu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Pu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ou(){for(var e=window,n=ir();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ir(e.document)}return n}function Io(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function If(e){var n=Ou(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Pu(t.ownerDocument.documentElement,t)){if(i!==null&&Io(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=$s(t,a);var o=$s(t,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mf=tn&&"documentMode"in document&&11>=document.documentMode,et=null,Va=null,Qt=null,Wa=!1;function Bs(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Wa||et==null||et!==ir(i)||(i=et,"selectionStart"in i&&Io(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Qt&&oi(Qt,i)||(Qt=i,i=cr(Va,"onSelect"),0<i.length&&(n=new Fo("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=et)))}function Oi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var nt={animationend:Oi("Animation","AnimationEnd"),animationiteration:Oi("Animation","AnimationIteration"),animationstart:Oi("Animation","AnimationStart"),transitionend:Oi("Transition","TransitionEnd")},aa={},Tu={};tn&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete nt.animationend.animation,delete nt.animationiteration.animation,delete nt.animationstart.animation),"TransitionEvent"in window||delete nt.transitionend.transition);function Or(e){if(aa[e])return aa[e];if(!nt[e])return e;var n=nt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Tu)return aa[e]=n[t];return e}var Fu=Or("animationend"),Lu=Or("animationiteration"),Ru=Or("animationstart"),Iu=Or("transitionend"),Mu=new Map,Us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(e,n){Mu.set(e,n),Wn(n,[e])}for(var oa=0;oa<Us.length;oa++){var sa=Us[oa],Df=sa.toLowerCase(),$f=sa[0].toUpperCase()+sa.slice(1);An(Df,"on"+$f)}An(Fu,"onAnimationEnd");An(Lu,"onAnimationIteration");An(Ru,"onAnimationStart");An("dblclick","onDoubleClick");An("focusin","onFocus");An("focusout","onBlur");An(Iu,"onTransitionEnd");ht("onMouseEnter",["mouseout","mouseover"]);ht("onMouseLeave",["mouseout","mouseover"]);ht("onPointerEnter",["pointerout","pointerover"]);ht("onPointerLeave",["pointerout","pointerover"]);Wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dt));function Vs(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,Md(i,n,void 0,e),e.currentTarget=null}function Du(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],r=i.event;i=i.listeners;e:{var a=void 0;if(n)for(var o=i.length-1;0<=o;o--){var s=i[o],u=s.instance,p=s.currentTarget;if(s=s.listener,u!==a&&r.isPropagationStopped())break e;Vs(r,s,p),a=u}else for(o=0;o<i.length;o++){if(s=i[o],u=s.instance,p=s.currentTarget,s=s.listener,u!==a&&r.isPropagationStopped())break e;Vs(r,s,p),a=u}}}if(ar)throw e=Da,ar=!1,Da=null,e}function U(e,n){var t=n[Ka];t===void 0&&(t=n[Ka]=new Set);var i=e+"__bubble";t.has(i)||($u(n,e,2,!1),t.add(i))}function la(e,n,t){var i=0;n&&(i|=4),$u(t,e,i,n)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function si(e){if(!e[Ti]){e[Ti]=!0,Ql.forEach(function(t){t!=="selectionchange"&&(Bf.has(t)||la(t,!1,e),la(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ti]||(n[Ti]=!0,la("selectionchange",!1,n))}}function $u(e,n,t,i){switch(bu(n)){case 1:var r=ef;break;case 4:r=nf;break;default:r=Oo}t=r.bind(null,n,t,e),r=void 0,!Ma||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function ua(e,n,t,i,r){var a=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===r||u.nodeType===8&&u.parentNode===r))return;o=o.return}for(;s!==null;){if(o=Tn(s),o===null)return;if(u=o.tag,u===5||u===6){i=a=o;continue e}s=s.parentNode}}i=i.return}uu(function(){var p=a,y=Ao(t),w=[];e:{var h=Mu.get(e);if(h!==void 0){var S=Fo,z=e;switch(e){case"keypress":if(Qi(t)===0)break e;case"keydown":case"keyup":S=yf;break;case"focusin":z="focus",S=ta;break;case"focusout":z="blur",S=ta;break;case"beforeblur":case"afterblur":S=ta;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=af;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=_f;break;case Fu:case Lu:case Ru:S=lf;break;case Iu:S=xf;break;case"scroll":S=tf;break;case"wheel":S=Sf;break;case"copy":case"cut":case"paste":S=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Ts}var _=(n&4)!==0,E=!_&&e==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var l=p,c;l!==null;){c=l;var m=c.stateNode;if(c.tag===5&&m!==null&&(c=m,f!==null&&(m=ni(l,f),m!=null&&_.push(li(l,m,c)))),E)break;l=l.return}0<_.length&&(h=new S(h,z,null,t,y),w.push({event:h,listeners:_}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",h&&t!==Ra&&(z=t.relatedTarget||t.fromElement)&&(Tn(z)||z[rn]))break e;if((S||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,S?(z=t.relatedTarget||t.toElement,S=p,z=z?Tn(z):null,z!==null&&(E=Hn(z),z!==E||z.tag!==5&&z.tag!==6)&&(z=null)):(S=null,z=p),S!==z)){if(_=Ps,m="onMouseLeave",f="onMouseEnter",l="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ts,m="onPointerLeave",f="onPointerEnter",l="pointer"),E=S==null?h:tt(S),c=z==null?h:tt(z),h=new _(m,l+"leave",S,t,y),h.target=E,h.relatedTarget=c,m=null,Tn(y)===p&&(_=new _(f,l+"enter",z,t,y),_.target=c,_.relatedTarget=E,m=_),E=m,S&&z)n:{for(_=S,f=z,l=0,c=_;c;c=Gn(c))l++;for(c=0,m=f;m;m=Gn(m))c++;for(;0<l-c;)_=Gn(_),l--;for(;0<c-l;)f=Gn(f),c--;for(;l--;){if(_===f||f!==null&&_===f.alternate)break n;_=Gn(_),f=Gn(f)}_=null}else _=null;S!==null&&Ws(w,h,S,_,!1),z!==null&&E!==null&&Ws(w,E,z,_,!0)}}e:{if(h=p?tt(p):window,S=h.nodeName&&h.nodeName.toLowerCase(),S==="select"||S==="input"&&h.type==="file")var g=Pf;else if(Rs(h))if(Cu)g=Lf;else{g=Tf;var v=Of}else(S=h.nodeName)&&S.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(g=Ff);if(g&&(g=g(e,p))){Au(w,g,t,y);break e}v&&v(e,h,p),e==="focusout"&&(v=h._wrapperState)&&v.controlled&&h.type==="number"&&Pa(h,"number",h.value)}switch(v=p?tt(p):window,e){case"focusin":(Rs(v)||v.contentEditable==="true")&&(et=v,Va=p,Qt=null);break;case"focusout":Qt=Va=et=null;break;case"mousedown":Wa=!0;break;case"contextmenu":case"mouseup":case"dragend":Wa=!1,Bs(w,t,y);break;case"selectionchange":if(Mf)break;case"keydown":case"keyup":Bs(w,t,y)}var k;if(Ro)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Jn?zu(e,t)&&(x="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(ju&&t.locale!=="ko"&&(Jn||x!=="onCompositionStart"?x==="onCompositionEnd"&&Jn&&(k=Su()):(gn=y,To="value"in gn?gn.value:gn.textContent,Jn=!0)),v=cr(p,x),0<v.length&&(x=new Os(x,e,null,t,y),w.push({event:x,listeners:v}),k?x.data=k:(k=Eu(t),k!==null&&(x.data=k)))),(k=zf?Ef(e,t):Af(e,t))&&(p=cr(p,"onBeforeInput"),0<p.length&&(y=new Os("onBeforeInput","beforeinput",null,t,y),w.push({event:y,listeners:p}),y.data=k))}Du(w,n)})}function li(e,n,t){return{instance:e,listener:n,currentTarget:t}}function cr(e,n){for(var t=n+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=ni(e,t),a!=null&&i.unshift(li(e,a,r)),a=ni(e,n),a!=null&&i.push(li(e,a,r))),e=e.return}return i}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ws(e,n,t,i,r){for(var a=n._reactName,o=[];t!==null&&t!==i;){var s=t,u=s.alternate,p=s.stateNode;if(u!==null&&u===i)break;s.tag===5&&p!==null&&(s=p,r?(u=ni(t,a),u!=null&&o.unshift(li(t,u,s))):r||(u=ni(t,a),u!=null&&o.push(li(t,u,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Uf=/\r\n?/g,Vf=/\u0000|\uFFFD/g;function Hs(e){return(typeof e=="string"?e:""+e).replace(Uf,`
`).replace(Vf,"")}function Fi(e,n,t){if(n=Hs(n),Hs(e)!==n&&t)throw Error(b(425))}function dr(){}var Ha=null,qa=null;function Qa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ga=typeof setTimeout=="function"?setTimeout:void 0,Wf=typeof clearTimeout=="function"?clearTimeout:void 0,qs=typeof Promise=="function"?Promise:void 0,Hf=typeof queueMicrotask=="function"?queueMicrotask:typeof qs<"u"?function(e){return qs.resolve(null).then(e).catch(qf)}:Ga;function qf(e){setTimeout(function(){throw e})}function ca(e,n){var t=n,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){e.removeChild(r),ri(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ri(n)}function kn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Qs(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var jt=Math.random().toString(36).slice(2),He="__reactFiber$"+jt,ui="__reactProps$"+jt,rn="__reactContainer$"+jt,Ka="__reactEvents$"+jt,Qf="__reactListeners$"+jt,Gf="__reactHandles$"+jt;function Tn(e){var n=e[He];if(n)return n;for(var t=e.parentNode;t;){if(n=t[rn]||t[He]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Qs(e);e!==null;){if(t=e[He])return t;e=Qs(e)}return n}e=t,t=e.parentNode}return null}function ki(e){return e=e[He]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Tr(e){return e[ui]||null}var Ya=[],it=-1;function Cn(e){return{current:e}}function V(e){0>it||(e.current=Ya[it],Ya[it]=null,it--)}function B(e,n){it++,Ya[it]=e.current,e.current=n}var En={},ue=Cn(En),ye=Cn(!1),Mn=En;function gt(e,n){var t=e.type.contextTypes;if(!t)return En;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in t)r[a]=n[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function ve(e){return e=e.childContextTypes,e!=null}function fr(){V(ye),V(ue)}function Gs(e,n,t){if(ue.current!==En)throw Error(b(168));B(ue,n),B(ye,t)}function Bu(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(b(108,Pd(e)||"Unknown",r));return Q({},t,i)}function pr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Mn=ue.current,B(ue,e),B(ye,ye.current),!0}function Ks(e,n,t){var i=e.stateNode;if(!i)throw Error(b(169));t?(e=Bu(e,n,Mn),i.__reactInternalMemoizedMergedChildContext=e,V(ye),V(ue),B(ue,e)):V(ye),B(ye,t)}var Xe=null,Fr=!1,da=!1;function Uu(e){Xe===null?Xe=[e]:Xe.push(e)}function Kf(e){Fr=!0,Uu(e)}function Nn(){if(!da&&Xe!==null){da=!0;var e=0,n=M;try{var t=Xe;for(M=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}Xe=null,Fr=!1}catch(r){throw Xe!==null&&(Xe=Xe.slice(e+1)),pu(Co,Nn),r}finally{M=n,da=!1}}return null}var rt=[],at=0,mr=null,hr=0,Ee=[],Ae=0,Dn=null,Je=1,en="";function Pn(e,n){rt[at++]=hr,rt[at++]=mr,mr=e,hr=n}function Vu(e,n,t){Ee[Ae++]=Je,Ee[Ae++]=en,Ee[Ae++]=Dn,Dn=e;var i=Je;e=en;var r=32-De(i)-1;i&=~(1<<r),t+=1;var a=32-De(n)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Je=1<<32-De(n)+r|t<<r|i,en=a+e}else Je=1<<a|t<<r|i,en=e}function Mo(e){e.return!==null&&(Pn(e,1),Vu(e,1,0))}function Do(e){for(;e===mr;)mr=rt[--at],rt[at]=null,hr=rt[--at],rt[at]=null;for(;e===Dn;)Dn=Ee[--Ae],Ee[Ae]=null,en=Ee[--Ae],Ee[Ae]=null,Je=Ee[--Ae],Ee[Ae]=null}var xe=null,ke=null,W=!1,Me=null;function Wu(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ys(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,xe=e,ke=kn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,xe=e,ke=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dn!==null?{id:Je,overflow:en}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,xe=e,ke=null,!0):!1;default:return!1}}function Za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xa(e){if(W){var n=ke;if(n){var t=n;if(!Ys(e,n)){if(Za(e))throw Error(b(418));n=kn(t.nextSibling);var i=xe;n&&Ys(e,n)?Wu(i,t):(e.flags=e.flags&-4097|2,W=!1,xe=e)}}else{if(Za(e))throw Error(b(418));e.flags=e.flags&-4097|2,W=!1,xe=e}}}function Zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Li(e){if(e!==xe)return!1;if(!W)return Zs(e),W=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Qa(e.type,e.memoizedProps)),n&&(n=ke)){if(Za(e))throw Hu(),Error(b(418));for(;n;)Wu(e,n),n=kn(n.nextSibling)}if(Zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ke=kn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ke=null}}else ke=xe?kn(e.stateNode.nextSibling):null;return!0}function Hu(){for(var e=ke;e;)e=kn(e.nextSibling)}function yt(){ke=xe=null,W=!1}function $o(e){Me===null?Me=[e]:Me.push(e)}var Yf=sn.ReactCurrentBatchConfig;function Tt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var i=t.stateNode}if(!i)throw Error(b(147,e));var r=i,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var s=r.refs;o===null?delete s[a]:s[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,e))}return e}function Ri(e,n){throw e=Object.prototype.toString.call(n),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Xs(e){var n=e._init;return n(e._payload)}function qu(e){function n(f,l){if(e){var c=f.deletions;c===null?(f.deletions=[l],f.flags|=16):c.push(l)}}function t(f,l){if(!e)return null;for(;l!==null;)n(f,l),l=l.sibling;return null}function i(f,l){for(f=new Map;l!==null;)l.key!==null?f.set(l.key,l):f.set(l.index,l),l=l.sibling;return f}function r(f,l){return f=jn(f,l),f.index=0,f.sibling=null,f}function a(f,l,c){return f.index=c,e?(c=f.alternate,c!==null?(c=c.index,c<l?(f.flags|=2,l):c):(f.flags|=2,l)):(f.flags|=1048576,l)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,l,c,m){return l===null||l.tag!==6?(l=va(c,f.mode,m),l.return=f,l):(l=r(l,c),l.return=f,l)}function u(f,l,c,m){var g=c.type;return g===Xn?y(f,l,c.props.children,m,c.key):l!==null&&(l.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===fn&&Xs(g)===l.type)?(m=r(l,c.props),m.ref=Tt(f,l,c),m.return=f,m):(m=er(c.type,c.key,c.props,null,f.mode,m),m.ref=Tt(f,l,c),m.return=f,m)}function p(f,l,c,m){return l===null||l.tag!==4||l.stateNode.containerInfo!==c.containerInfo||l.stateNode.implementation!==c.implementation?(l=wa(c,f.mode,m),l.return=f,l):(l=r(l,c.children||[]),l.return=f,l)}function y(f,l,c,m,g){return l===null||l.tag!==7?(l=In(c,f.mode,m,g),l.return=f,l):(l=r(l,c),l.return=f,l)}function w(f,l,c){if(typeof l=="string"&&l!==""||typeof l=="number")return l=va(""+l,f.mode,c),l.return=f,l;if(typeof l=="object"&&l!==null){switch(l.$$typeof){case ji:return c=er(l.type,l.key,l.props,null,f.mode,c),c.ref=Tt(f,null,l),c.return=f,c;case Zn:return l=wa(l,f.mode,c),l.return=f,l;case fn:var m=l._init;return w(f,m(l._payload),c)}if(It(l)||At(l))return l=In(l,f.mode,c,null),l.return=f,l;Ri(f,l)}return null}function h(f,l,c,m){var g=l!==null?l.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return g!==null?null:s(f,l,""+c,m);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ji:return c.key===g?u(f,l,c,m):null;case Zn:return c.key===g?p(f,l,c,m):null;case fn:return g=c._init,h(f,l,g(c._payload),m)}if(It(c)||At(c))return g!==null?null:y(f,l,c,m,null);Ri(f,c)}return null}function S(f,l,c,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return f=f.get(c)||null,s(l,f,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ji:return f=f.get(m.key===null?c:m.key)||null,u(l,f,m,g);case Zn:return f=f.get(m.key===null?c:m.key)||null,p(l,f,m,g);case fn:var v=m._init;return S(f,l,c,v(m._payload),g)}if(It(m)||At(m))return f=f.get(c)||null,y(l,f,m,g,null);Ri(l,m)}return null}function z(f,l,c,m){for(var g=null,v=null,k=l,x=l=0,j=null;k!==null&&x<c.length;x++){k.index>x?(j=k,k=null):j=k.sibling;var N=h(f,k,c[x],m);if(N===null){k===null&&(k=j);break}e&&k&&N.alternate===null&&n(f,k),l=a(N,l,x),v===null?g=N:v.sibling=N,v=N,k=j}if(x===c.length)return t(f,k),W&&Pn(f,x),g;if(k===null){for(;x<c.length;x++)k=w(f,c[x],m),k!==null&&(l=a(k,l,x),v===null?g=k:v.sibling=k,v=k);return W&&Pn(f,x),g}for(k=i(f,k);x<c.length;x++)j=S(k,f,x,c[x],m),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?x:j.key),l=a(j,l,x),v===null?g=j:v.sibling=j,v=j);return e&&k.forEach(function(L){return n(f,L)}),W&&Pn(f,x),g}function _(f,l,c,m){var g=At(c);if(typeof g!="function")throw Error(b(150));if(c=g.call(c),c==null)throw Error(b(151));for(var v=g=null,k=l,x=l=0,j=null,N=c.next();k!==null&&!N.done;x++,N=c.next()){k.index>x?(j=k,k=null):j=k.sibling;var L=h(f,k,N.value,m);if(L===null){k===null&&(k=j);break}e&&k&&L.alternate===null&&n(f,k),l=a(L,l,x),v===null?g=L:v.sibling=L,v=L,k=j}if(N.done)return t(f,k),W&&Pn(f,x),g;if(k===null){for(;!N.done;x++,N=c.next())N=w(f,N.value,m),N!==null&&(l=a(N,l,x),v===null?g=N:v.sibling=N,v=N);return W&&Pn(f,x),g}for(k=i(f,k);!N.done;x++,N=c.next())N=S(k,f,x,N.value,m),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?x:N.key),l=a(N,l,x),v===null?g=N:v.sibling=N,v=N);return e&&k.forEach(function(me){return n(f,me)}),W&&Pn(f,x),g}function E(f,l,c,m){if(typeof c=="object"&&c!==null&&c.type===Xn&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case ji:e:{for(var g=c.key,v=l;v!==null;){if(v.key===g){if(g=c.type,g===Xn){if(v.tag===7){t(f,v.sibling),l=r(v,c.props.children),l.return=f,f=l;break e}}else if(v.elementType===g||typeof g=="object"&&g!==null&&g.$$typeof===fn&&Xs(g)===v.type){t(f,v.sibling),l=r(v,c.props),l.ref=Tt(f,v,c),l.return=f,f=l;break e}t(f,v);break}else n(f,v);v=v.sibling}c.type===Xn?(l=In(c.props.children,f.mode,m,c.key),l.return=f,f=l):(m=er(c.type,c.key,c.props,null,f.mode,m),m.ref=Tt(f,l,c),m.return=f,f=m)}return o(f);case Zn:e:{for(v=c.key;l!==null;){if(l.key===v)if(l.tag===4&&l.stateNode.containerInfo===c.containerInfo&&l.stateNode.implementation===c.implementation){t(f,l.sibling),l=r(l,c.children||[]),l.return=f,f=l;break e}else{t(f,l);break}else n(f,l);l=l.sibling}l=wa(c,f.mode,m),l.return=f,f=l}return o(f);case fn:return v=c._init,E(f,l,v(c._payload),m)}if(It(c))return z(f,l,c,m);if(At(c))return _(f,l,c,m);Ri(f,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,l!==null&&l.tag===6?(t(f,l.sibling),l=r(l,c),l.return=f,f=l):(t(f,l),l=va(c,f.mode,m),l.return=f,f=l),o(f)):t(f,l)}return E}var vt=qu(!0),Qu=qu(!1),gr=Cn(null),yr=null,ot=null,Bo=null;function Uo(){Bo=ot=yr=null}function Vo(e){var n=gr.current;V(gr),e._currentValue=n}function Ja(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function pt(e,n){yr=e,Bo=ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ge=!0),e.firstContext=null)}function Pe(e){var n=e._currentValue;if(Bo!==e)if(e={context:e,memoizedValue:n,next:null},ot===null){if(yr===null)throw Error(b(308));ot=e,yr.dependencies={lanes:0,firstContext:e}}else ot=ot.next=e;return n}var Fn=null;function Wo(e){Fn===null?Fn=[e]:Fn.push(e)}function Gu(e,n,t,i){var r=n.interleaved;return r===null?(t.next=t,Wo(n)):(t.next=r.next,r.next=t),n.interleaved=t,an(e,i)}function an(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var pn=!1;function Ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function xn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,F&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,an(e,t)}return r=i.interleaved,r===null?(n.next=n,Wo(i)):(n.next=r.next,r.next=n),i.interleaved=n,an(e,t)}function Gi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,No(e,t)}}function Js(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?r=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function vr(e,n,t,i){var r=e.updateQueue;pn=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var u=s,p=u.next;u.next=null,o===null?a=p:o.next=p,o=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==o&&(s===null?y.firstBaseUpdate=p:s.next=p,y.lastBaseUpdate=u))}if(a!==null){var w=r.baseState;o=0,y=p=u=null,s=a;do{var h=s.lane,S=s.eventTime;if((i&h)===h){y!==null&&(y=y.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var z=e,_=s;switch(h=n,S=t,_.tag){case 1:if(z=_.payload,typeof z=="function"){w=z.call(S,w,h);break e}w=z;break e;case 3:z.flags=z.flags&-65537|128;case 0:if(z=_.payload,h=typeof z=="function"?z.call(S,w,h):z,h==null)break e;w=Q({},w,h);break e;case 2:pn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[s]:h.push(s))}else S={eventTime:S,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(p=y=S,u=w):y=y.next=S,o|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;h=s,s=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(y===null&&(u=w),r.baseState=u,r.firstBaseUpdate=p,r.lastBaseUpdate=y,n=r.shared.interleaved,n!==null){r=n;do o|=r.lane,r=r.next;while(r!==n)}else a===null&&(r.shared.lanes=0);Bn|=o,e.lanes=o,e.memoizedState=w}}function el(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(b(191,r));r.call(i)}}}var xi={},Qe=Cn(xi),ci=Cn(xi),di=Cn(xi);function Ln(e){if(e===xi)throw Error(b(174));return e}function qo(e,n){switch(B(di,n),B(ci,e),B(Qe,xi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ta(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ta(n,e)}V(Qe),B(Qe,n)}function wt(){V(Qe),V(ci),V(di)}function Yu(e){Ln(di.current);var n=Ln(Qe.current),t=Ta(n,e.type);n!==t&&(B(ci,e),B(Qe,t))}function Qo(e){ci.current===e&&(V(Qe),V(ci))}var H=Cn(0);function wr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=[];function Go(){for(var e=0;e<fa.length;e++)fa[e]._workInProgressVersionPrimary=null;fa.length=0}var Ki=sn.ReactCurrentDispatcher,pa=sn.ReactCurrentBatchConfig,$n=0,q=null,X=null,ee=null,_r=!1,Gt=!1,fi=0,Zf=0;function oe(){throw Error(b(321))}function Ko(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Be(e[t],n[t]))return!1;return!0}function Yo(e,n,t,i,r,a){if($n=a,q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ki.current=e===null||e.memoizedState===null?np:tp,e=t(i,r),Gt){a=0;do{if(Gt=!1,fi=0,25<=a)throw Error(b(301));a+=1,ee=X=null,n.updateQueue=null,Ki.current=ip,e=t(i,r)}while(Gt)}if(Ki.current=kr,n=X!==null&&X.next!==null,$n=0,ee=X=q=null,_r=!1,n)throw Error(b(300));return e}function Zo(){var e=fi!==0;return fi=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?q.memoizedState=ee=e:ee=ee.next=e,ee}function Oe(){if(X===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=ee===null?q.memoizedState:ee.next;if(n!==null)ee=n,X=e;else{if(e===null)throw Error(b(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?q.memoizedState=ee=e:ee=ee.next=e}return ee}function pi(e,n){return typeof n=="function"?n(e):n}function ma(e){var n=Oe(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var i=X,r=i.baseQueue,a=t.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,t.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,u=null,p=a;do{var y=p.lane;if(($n&y)===y)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),i=p.hasEagerState?p.eagerState:e(i,p.action);else{var w={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(s=u=w,o=i):u=u.next=w,q.lanes|=y,Bn|=y}p=p.next}while(p!==null&&p!==a);u===null?o=i:u.next=s,Be(i,n.memoizedState)||(ge=!0),n.memoizedState=i,n.baseState=o,n.baseQueue=u,t.lastRenderedState=i}if(e=t.interleaved,e!==null){r=e;do a=r.lane,q.lanes|=a,Bn|=a,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ha(e){var n=Oe(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var i=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);Be(a,n.memoizedState)||(ge=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,i]}function Zu(){}function Xu(e,n){var t=q,i=Oe(),r=n(),a=!Be(i.memoizedState,r);if(a&&(i.memoizedState=r,ge=!0),i=i.queue,Xo(nc.bind(null,t,i,e),[e]),i.getSnapshot!==n||a||ee!==null&&ee.memoizedState.tag&1){if(t.flags|=2048,mi(9,ec.bind(null,t,i,r,n),void 0,null),ne===null)throw Error(b(349));$n&30||Ju(t,n,r)}return r}function Ju(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ec(e,n,t,i){n.value=t,n.getSnapshot=i,tc(n)&&ic(e)}function nc(e,n,t){return t(function(){tc(n)&&ic(e)})}function tc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Be(e,t)}catch{return!0}}function ic(e){var n=an(e,1);n!==null&&$e(n,e,1,-1)}function nl(e){var n=We();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},n.queue=e,e=e.dispatch=ep.bind(null,q,e),[n.memoizedState,e]}function mi(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=q.updateQueue,n===null?(n={lastEffect:null,stores:null},q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function rc(){return Oe().memoizedState}function Yi(e,n,t,i){var r=We();q.flags|=e,r.memoizedState=mi(1|n,t,void 0,i===void 0?null:i)}function Lr(e,n,t,i){var r=Oe();i=i===void 0?null:i;var a=void 0;if(X!==null){var o=X.memoizedState;if(a=o.destroy,i!==null&&Ko(i,o.deps)){r.memoizedState=mi(n,t,a,i);return}}q.flags|=e,r.memoizedState=mi(1|n,t,a,i)}function tl(e,n){return Yi(8390656,8,e,n)}function Xo(e,n){return Lr(2048,8,e,n)}function ac(e,n){return Lr(4,2,e,n)}function oc(e,n){return Lr(4,4,e,n)}function sc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function lc(e,n,t){return t=t!=null?t.concat([e]):null,Lr(4,4,sc.bind(null,n,e),t)}function Jo(){}function uc(e,n){var t=Oe();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&Ko(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function cc(e,n){var t=Oe();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&Ko(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function dc(e,n,t){return $n&21?(Be(t,n)||(t=gu(),q.lanes|=t,Bn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=t)}function Xf(e,n){var t=M;M=t!==0&&4>t?t:4,e(!0);var i=pa.transition;pa.transition={};try{e(!1),n()}finally{M=t,pa.transition=i}}function fc(){return Oe().memoizedState}function Jf(e,n,t){var i=Sn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},pc(e))mc(n,t);else if(t=Gu(e,n,t,i),t!==null){var r=de();$e(t,e,i,r),hc(t,n,i)}}function ep(e,n,t){var i=Sn(e),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(pc(e))mc(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,s=a(o,t);if(r.hasEagerState=!0,r.eagerState=s,Be(s,o)){var u=n.interleaved;u===null?(r.next=r,Wo(n)):(r.next=u.next,u.next=r),n.interleaved=r;return}}catch{}finally{}t=Gu(e,n,r,i),t!==null&&(r=de(),$e(t,e,i,r),hc(t,n,i))}}function pc(e){var n=e.alternate;return e===q||n!==null&&n===q}function mc(e,n){Gt=_r=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function hc(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,No(e,t)}}var kr={readContext:Pe,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},np={readContext:Pe,useCallback:function(e,n){return We().memoizedState=[e,n===void 0?null:n],e},useContext:Pe,useEffect:tl,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Yi(4194308,4,sc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Yi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Yi(4,2,e,n)},useMemo:function(e,n){var t=We();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=We();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Jf.bind(null,q,e),[i.memoizedState,e]},useRef:function(e){var n=We();return e={current:e},n.memoizedState=e},useState:nl,useDebugValue:Jo,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=nl(!1),n=e[0];return e=Xf.bind(null,e[1]),We().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=q,r=We();if(W){if(t===void 0)throw Error(b(407));t=t()}else{if(t=n(),ne===null)throw Error(b(349));$n&30||Ju(i,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,tl(nc.bind(null,i,a,e),[e]),i.flags|=2048,mi(9,ec.bind(null,i,a,t,n),void 0,null),t},useId:function(){var e=We(),n=ne.identifierPrefix;if(W){var t=en,i=Je;t=(i&~(1<<32-De(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=fi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tp={readContext:Pe,useCallback:uc,useContext:Pe,useEffect:Xo,useImperativeHandle:lc,useInsertionEffect:ac,useLayoutEffect:oc,useMemo:cc,useReducer:ma,useRef:rc,useState:function(){return ma(pi)},useDebugValue:Jo,useDeferredValue:function(e){var n=Oe();return dc(n,X.memoizedState,e)},useTransition:function(){var e=ma(pi)[0],n=Oe().memoizedState;return[e,n]},useMutableSource:Zu,useSyncExternalStore:Xu,useId:fc,unstable_isNewReconciler:!1},ip={readContext:Pe,useCallback:uc,useContext:Pe,useEffect:Xo,useImperativeHandle:lc,useInsertionEffect:ac,useLayoutEffect:oc,useMemo:cc,useReducer:ha,useRef:rc,useState:function(){return ha(pi)},useDebugValue:Jo,useDeferredValue:function(e){var n=Oe();return X===null?n.memoizedState=e:dc(n,X.memoizedState,e)},useTransition:function(){var e=ha(pi)[0],n=Oe().memoizedState;return[e,n]},useMutableSource:Zu,useSyncExternalStore:Xu,useId:fc,unstable_isNewReconciler:!1};function Re(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function eo(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:Q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Rr={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=de(),r=Sn(e),a=nn(i,r);a.payload=n,t!=null&&(a.callback=t),n=xn(e,a,r),n!==null&&($e(n,e,r,i),Gi(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=de(),r=Sn(e),a=nn(i,r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=xn(e,a,r),n!==null&&($e(n,e,r,i),Gi(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=de(),i=Sn(e),r=nn(t,i);r.tag=2,n!=null&&(r.callback=n),n=xn(e,r,i),n!==null&&($e(n,e,i,t),Gi(n,e,i))}};function il(e,n,t,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):n.prototype&&n.prototype.isPureReactComponent?!oi(t,i)||!oi(r,a):!0}function gc(e,n,t){var i=!1,r=En,a=n.contextType;return typeof a=="object"&&a!==null?a=Pe(a):(r=ve(n)?Mn:ue.current,i=n.contextTypes,a=(i=i!=null)?gt(e,r):En),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Rr,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),n}function rl(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&Rr.enqueueReplaceState(n,n.state,null)}function no(e,n,t,i){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Ho(e);var a=n.contextType;typeof a=="object"&&a!==null?r.context=Pe(a):(a=ve(n)?Mn:ue.current,r.context=gt(e,a)),r.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(eo(e,n,a,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Rr.enqueueReplaceState(r,r.state,null),vr(e,t,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function _t(e,n){try{var t="",i=n;do t+=Nd(i),i=i.return;while(i);var r=t}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:r,digest:null}}function ga(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function to(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var rp=typeof WeakMap=="function"?WeakMap:Map;function yc(e,n,t){t=nn(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){br||(br=!0,po=i),to(e,n)},t}function vc(e,n,t){t=nn(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){to(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){to(e,n),typeof i!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function al(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new rp;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(t)||(r.add(t),e=vp.bind(null,e,n,t),n.then(e,e))}function ol(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function sl(e,n,t,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nn(-1,1),n.tag=2,xn(t,n,1))),t.lanes|=1),e)}var ap=sn.ReactCurrentOwner,ge=!1;function ce(e,n,t,i){n.child=e===null?Qu(n,null,t,i):vt(n,e.child,t,i)}function ll(e,n,t,i,r){t=t.render;var a=n.ref;return pt(n,r),i=Yo(e,n,t,i,a,r),t=Zo(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,on(e,n,r)):(W&&t&&Mo(n),n.flags|=1,ce(e,n,i,r),n.child)}function ul(e,n,t,i,r){if(e===null){var a=t.type;return typeof a=="function"&&!ss(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,wc(e,n,a,i,r)):(e=er(t.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&r)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:oi,t(o,i)&&e.ref===n.ref)return on(e,n,r)}return n.flags|=1,e=jn(a,i),e.ref=n.ref,e.return=n,n.child=e}function wc(e,n,t,i,r){if(e!==null){var a=e.memoizedProps;if(oi(a,i)&&e.ref===n.ref)if(ge=!1,n.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(ge=!0);else return n.lanes=e.lanes,on(e,n,r)}return io(e,n,t,i,r)}function _c(e,n,t){var i=n.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(lt,_e),_e|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,B(lt,_e),_e|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:t,B(lt,_e),_e|=i}else a!==null?(i=a.baseLanes|t,n.memoizedState=null):i=t,B(lt,_e),_e|=i;return ce(e,n,r,t),n.child}function kc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function io(e,n,t,i,r){var a=ve(t)?Mn:ue.current;return a=gt(n,a),pt(n,r),t=Yo(e,n,t,i,a,r),i=Zo(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,on(e,n,r)):(W&&i&&Mo(n),n.flags|=1,ce(e,n,t,r),n.child)}function cl(e,n,t,i,r){if(ve(t)){var a=!0;pr(n)}else a=!1;if(pt(n,r),n.stateNode===null)Zi(e,n),gc(n,t,i),no(n,t,i,r),i=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var u=o.context,p=t.contextType;typeof p=="object"&&p!==null?p=Pe(p):(p=ve(t)?Mn:ue.current,p=gt(n,p));var y=t.getDerivedStateFromProps,w=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";w||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||u!==p)&&rl(n,o,i,p),pn=!1;var h=n.memoizedState;o.state=h,vr(n,i,o,r),u=n.memoizedState,s!==i||h!==u||ye.current||pn?(typeof y=="function"&&(eo(n,t,y,i),u=n.memoizedState),(s=pn||il(n,t,s,i,h,u,p))?(w||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=u),o.props=i,o.state=u,o.context=p,i=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{o=n.stateNode,Ku(e,n),s=n.memoizedProps,p=n.type===n.elementType?s:Re(n.type,s),o.props=p,w=n.pendingProps,h=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Pe(u):(u=ve(t)?Mn:ue.current,u=gt(n,u));var S=t.getDerivedStateFromProps;(y=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==w||h!==u)&&rl(n,o,i,u),pn=!1,h=n.memoizedState,o.state=h,vr(n,i,o,r);var z=n.memoizedState;s!==w||h!==z||ye.current||pn?(typeof S=="function"&&(eo(n,t,S,i),z=n.memoizedState),(p=pn||il(n,t,p,i,h,z,u)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,z,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,z,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=z),o.props=i,o.state=z,o.context=u,i=p):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),i=!1)}return ro(e,n,t,i,a,r)}function ro(e,n,t,i,r,a){kc(e,n);var o=(n.flags&128)!==0;if(!i&&!o)return r&&Ks(n,t,!1),on(e,n,a);i=n.stateNode,ap.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&o?(n.child=vt(n,e.child,null,a),n.child=vt(n,null,s,a)):ce(e,n,s,a),n.memoizedState=i.state,r&&Ks(n,t,!0),n.child}function xc(e){var n=e.stateNode;n.pendingContext?Gs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Gs(e,n.context,!1),qo(e,n.containerInfo)}function dl(e,n,t,i,r){return yt(),$o(r),n.flags|=256,ce(e,n,t,i),n.child}var ao={dehydrated:null,treeContext:null,retryLane:0};function oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function bc(e,n,t){var i=n.pendingProps,r=H.current,a=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),B(H,r&1),e===null)return Xa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=i.children,e=i.fallback,a?(i=n.mode,a=n.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Dr(o,i,0,null),e=In(e,i,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=oo(t),n.memoizedState=ao,e):es(n,o));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return op(e,n,o,i,s,r,t);if(a){a=i.fallback,o=n.mode,r=e.child,s=r.sibling;var u={mode:"hidden",children:i.children};return!(o&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=u,n.deletions=null):(i=jn(r,u),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=jn(s,a):(a=In(a,o,t,null),a.flags|=2),a.return=n,i.return=n,i.sibling=a,n.child=i,i=a,a=n.child,o=e.child.memoizedState,o=o===null?oo(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~t,n.memoizedState=ao,i}return a=e.child,e=a.sibling,i=jn(a,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function es(e,n){return n=Dr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ii(e,n,t,i){return i!==null&&$o(i),vt(n,e.child,null,t),e=es(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function op(e,n,t,i,r,a,o){if(t)return n.flags&256?(n.flags&=-257,i=ga(Error(b(422))),Ii(e,n,o,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=i.fallback,r=n.mode,i=Dr({mode:"visible",children:i.children},r,0,null),a=In(a,r,o,null),a.flags|=2,i.return=n,a.return=n,i.sibling=a,n.child=i,n.mode&1&&vt(n,e.child,null,o),n.child.memoizedState=oo(o),n.memoizedState=ao,a);if(!(n.mode&1))return Ii(e,n,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(b(419)),i=ga(a,i,void 0),Ii(e,n,o,i)}if(s=(o&e.childLanes)!==0,ge||s){if(i=ne,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,an(e,r),$e(i,e,r,-1))}return os(),i=ga(Error(b(421))),Ii(e,n,o,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=wp.bind(null,e),r._reactRetry=n,null):(e=a.treeContext,ke=kn(r.nextSibling),xe=n,W=!0,Me=null,e!==null&&(Ee[Ae++]=Je,Ee[Ae++]=en,Ee[Ae++]=Dn,Je=e.id,en=e.overflow,Dn=n),n=es(n,i.children),n.flags|=4096,n)}function fl(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Ja(e.return,n,t)}function ya(e,n,t,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=t,a.tailMode=r)}function Sc(e,n,t){var i=n.pendingProps,r=i.revealOrder,a=i.tail;if(ce(e,n,i.children,t),i=H.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fl(e,t,n);else if(e.tag===19)fl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(B(H,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&wr(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),ya(n,!1,r,t,a);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&wr(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}ya(n,!0,t,null,a);break;case"together":ya(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function on(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Bn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(b(153));if(n.child!==null){for(e=n.child,t=jn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=jn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function sp(e,n,t){switch(n.tag){case 3:xc(n),yt();break;case 5:Yu(n);break;case 1:ve(n.type)&&pr(n);break;case 4:qo(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;B(gr,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(B(H,H.current&1),n.flags|=128,null):t&n.child.childLanes?bc(e,n,t):(B(H,H.current&1),e=on(e,n,t),e!==null?e.sibling:null);B(H,H.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return Sc(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),B(H,H.current),i)break;return null;case 22:case 23:return n.lanes=0,_c(e,n,t)}return on(e,n,t)}var jc,so,zc,Ec;jc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};so=function(){};zc=function(e,n,t,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,Ln(Qe.current);var a=null;switch(t){case"input":r=Ca(e,r),i=Ca(e,i),a=[];break;case"select":r=Q({},r,{value:void 0}),i=Q({},i,{value:void 0}),a=[];break;case"textarea":r=Oa(e,r),i=Oa(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=dr)}Fa(t,i);var o;t=null;for(p in r)if(!i.hasOwnProperty(p)&&r.hasOwnProperty(p)&&r[p]!=null)if(p==="style"){var s=r[p];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Jt.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in i){var u=i[p];if(s=r?.[p],i.hasOwnProperty(p)&&u!==s&&(u!=null||s!=null))if(p==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(a||(a=[]),a.push(p,t)),t=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Jt.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&U("scroll",e),a||s===u||(a=[])):(a=a||[]).push(p,u))}t&&(a=a||[]).push("style",t);var p=a;(n.updateQueue=p)&&(n.flags|=4)}};Ec=function(e,n,t,i){t!==i&&(n.flags|=4)};function Ft(e,n){if(!W)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function lp(e,n,t){var i=n.pendingProps;switch(Do(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return ve(n.type)&&fr(),se(n),null;case 3:return i=n.stateNode,wt(),V(ye),V(ue),Go(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Li(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(go(Me),Me=null))),so(e,n),se(n),null;case 5:Qo(n);var r=Ln(di.current);if(t=n.type,e!==null&&n.stateNode!=null)zc(e,n,t,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(b(166));return se(n),null}if(e=Ln(Qe.current),Li(n)){i=n.stateNode,t=n.type;var a=n.memoizedProps;switch(i[He]=n,i[ui]=a,e=(n.mode&1)!==0,t){case"dialog":U("cancel",i),U("close",i);break;case"iframe":case"object":case"embed":U("load",i);break;case"video":case"audio":for(r=0;r<Dt.length;r++)U(Dt[r],i);break;case"source":U("error",i);break;case"img":case"image":case"link":U("error",i),U("load",i);break;case"details":U("toggle",i);break;case"input":ks(i,a),U("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},U("invalid",i);break;case"textarea":bs(i,a),U("invalid",i)}Fa(t,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&Fi(i.textContent,s,e),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Fi(i.textContent,s,e),r=["children",""+s]):Jt.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&U("scroll",i)}switch(t){case"input":zi(i),xs(i,a,!0);break;case"textarea":zi(i),Ss(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=dr)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(t,{is:i.is}):(e=o.createElement(t),t==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,t),e[He]=n,e[ui]=i,jc(e,n,!1,!1),n.stateNode=e;e:{switch(o=La(t,i),t){case"dialog":U("cancel",e),U("close",e),r=i;break;case"iframe":case"object":case"embed":U("load",e),r=i;break;case"video":case"audio":for(r=0;r<Dt.length;r++)U(Dt[r],e);r=i;break;case"source":U("error",e),r=i;break;case"img":case"image":case"link":U("error",e),U("load",e),r=i;break;case"details":U("toggle",e),r=i;break;case"input":ks(e,i),r=Ca(e,i),U("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=Q({},i,{value:void 0}),U("invalid",e);break;case"textarea":bs(e,i),r=Oa(e,i),U("invalid",e);break;default:r=i}Fa(t,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?ru(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tu(e,u)):a==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ei(e,u):typeof u=="number"&&ei(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Jt.hasOwnProperty(a)?u!=null&&a==="onScroll"&&U("scroll",e):u!=null&&So(e,a,u,o))}switch(t){case"input":zi(e),xs(e,i,!1);break;case"textarea":zi(e),Ss(e);break;case"option":i.value!=null&&e.setAttribute("value",""+zn(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?ut(e,!!i.multiple,a,!1):i.defaultValue!=null&&ut(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=dr)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Ec(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(b(166));if(t=Ln(di.current),Ln(Qe.current),Li(n)){if(i=n.stateNode,t=n.memoizedProps,i[He]=n,(a=i.nodeValue!==t)&&(e=xe,e!==null))switch(e.tag){case 3:Fi(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fi(i.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[He]=n,n.stateNode=i}return se(n),null;case 13:if(V(H),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ke!==null&&n.mode&1&&!(n.flags&128))Hu(),yt(),n.flags|=98560,a=!1;else if(a=Li(n),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(b(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[He]=n}else yt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),a=!1}else Me!==null&&(go(Me),Me=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||H.current&1?J===0&&(J=3):os())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return wt(),so(e,n),e===null&&si(n.stateNode.containerInfo),se(n),null;case 10:return Vo(n.type._context),se(n),null;case 17:return ve(n.type)&&fr(),se(n),null;case 19:if(V(H),a=n.memoizedState,a===null)return se(n),null;if(i=(n.flags&128)!==0,o=a.rendering,o===null)if(i)Ft(a,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=wr(e),o!==null){for(n.flags|=128,Ft(a,!1),i=o.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)a=t,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return B(H,H.current&1|2),n.child}e=e.sibling}a.tail!==null&&K()>kt&&(n.flags|=128,i=!0,Ft(a,!1),n.lanes=4194304)}else{if(!i)if(e=wr(o),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ft(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!W)return se(n),null}else 2*K()-a.renderingStartTime>kt&&t!==1073741824&&(n.flags|=128,i=!0,Ft(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(t=a.last,t!==null?t.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=K(),n.sibling=null,t=H.current,B(H,i?t&1|2:t&1),n):(se(n),null);case 22:case 23:return as(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?_e&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(b(156,n.tag))}function up(e,n){switch(Do(n),n.tag){case 1:return ve(n.type)&&fr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return wt(),V(ye),V(ue),Go(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Qo(n),null;case 13:if(V(H),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(b(340));yt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(H),null;case 4:return wt(),null;case 10:return Vo(n.type._context),null;case 22:case 23:return as(),null;case 24:return null;default:return null}}var Mi=!1,le=!1,cp=typeof WeakSet=="function"?WeakSet:Set,C=null;function st(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){G(e,n,i)}else t.current=null}function lo(e,n,t){try{t()}catch(i){G(e,n,i)}}var pl=!1;function dp(e,n){if(Ha=lr,e=Ou(),Io(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,s=-1,u=-1,p=0,y=0,w=e,h=null;n:for(;;){for(var S;w!==t||r!==0&&w.nodeType!==3||(s=o+r),w!==a||i!==0&&w.nodeType!==3||(u=o+i),w.nodeType===3&&(o+=w.nodeValue.length),(S=w.firstChild)!==null;)h=w,w=S;for(;;){if(w===e)break n;if(h===t&&++p===r&&(s=o),h===a&&++y===i&&(u=o),(S=w.nextSibling)!==null)break;w=h,h=w.parentNode}w=S}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(qa={focusedElem:e,selectionRange:t},lr=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var z=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(z!==null){var _=z.memoizedProps,E=z.memoizedState,f=n.stateNode,l=f.getSnapshotBeforeUpdate(n.elementType===n.type?_:Re(n.type,_),E);f.__reactInternalSnapshotBeforeUpdate=l}break;case 3:var c=n.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(m){G(n,n.return,m)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return z=pl,pl=!1,z}function Kt(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&lo(n,t,a)}r=r.next}while(r!==i)}}function Ir(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function uo(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ac(e){var n=e.alternate;n!==null&&(e.alternate=null,Ac(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[He],delete n[ui],delete n[Ka],delete n[Qf],delete n[Gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cc(e){return e.tag===5||e.tag===3||e.tag===4}function ml(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function co(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=dr));else if(i!==4&&(e=e.child,e!==null))for(co(e,n,t),e=e.sibling;e!==null;)co(e,n,t),e=e.sibling}function fo(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(fo(e,n,t),e=e.sibling;e!==null;)fo(e,n,t),e=e.sibling}var te=null,Ie=!1;function un(e,n,t){for(t=t.child;t!==null;)Nc(e,n,t),t=t.sibling}function Nc(e,n,t){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(Cr,t)}catch{}switch(t.tag){case 5:le||st(t,n);case 6:var i=te,r=Ie;te=null,un(e,n,t),te=i,Ie=r,te!==null&&(Ie?(e=te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):te.removeChild(t.stateNode));break;case 18:te!==null&&(Ie?(e=te,t=t.stateNode,e.nodeType===8?ca(e.parentNode,t):e.nodeType===1&&ca(e,t),ri(e)):ca(te,t.stateNode));break;case 4:i=te,r=Ie,te=t.stateNode.containerInfo,Ie=!0,un(e,n,t),te=i,Ie=r;break;case 0:case 11:case 14:case 15:if(!le&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&lo(t,n,o),r=r.next}while(r!==i)}un(e,n,t);break;case 1:if(!le&&(st(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(s){G(t,n,s)}un(e,n,t);break;case 21:un(e,n,t);break;case 22:t.mode&1?(le=(i=le)||t.memoizedState!==null,un(e,n,t),le=i):un(e,n,t);break;default:un(e,n,t)}}function hl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new cp),n.forEach(function(i){var r=_p.bind(null,e,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Te(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var a=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Ie=!1;break e;case 3:te=s.stateNode.containerInfo,Ie=!0;break e;case 4:te=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(te===null)throw Error(b(160));Nc(a,o,r),te=null,Ie=!1;var u=r.alternate;u!==null&&(u.return=null),r.return=null}catch(p){G(r,n,p)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Pc(n,e),n=n.sibling}function Pc(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(n,e),Ue(e),i&4){try{Kt(3,e,e.return),Ir(3,e)}catch(_){G(e,e.return,_)}try{Kt(5,e,e.return)}catch(_){G(e,e.return,_)}}break;case 1:Te(n,e),Ue(e),i&512&&t!==null&&st(t,t.return);break;case 5:if(Te(n,e),Ue(e),i&512&&t!==null&&st(t,t.return),e.flags&32){var r=e.stateNode;try{ei(r,"")}catch(_){G(e,e.return,_)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,o=t!==null?t.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Jl(r,a),La(s,o);var p=La(s,a);for(o=0;o<u.length;o+=2){var y=u[o],w=u[o+1];y==="style"?ru(r,w):y==="dangerouslySetInnerHTML"?tu(r,w):y==="children"?ei(r,w):So(r,y,w,p)}switch(s){case"input":Na(r,a);break;case"textarea":eu(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var S=a.value;S!=null?ut(r,!!a.multiple,S,!1):h!==!!a.multiple&&(a.defaultValue!=null?ut(r,!!a.multiple,a.defaultValue,!0):ut(r,!!a.multiple,a.multiple?[]:"",!1))}r[ui]=a}catch(_){G(e,e.return,_)}}break;case 6:if(Te(n,e),Ue(e),i&4){if(e.stateNode===null)throw Error(b(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(_){G(e,e.return,_)}}break;case 3:if(Te(n,e),Ue(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ri(n.containerInfo)}catch(_){G(e,e.return,_)}break;case 4:Te(n,e),Ue(e);break;case 13:Te(n,e),Ue(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(is=K())),i&4&&hl(e);break;case 22:if(y=t!==null&&t.memoizedState!==null,e.mode&1?(le=(p=le)||y,Te(n,e),le=p):Te(n,e),Ue(e),i&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&e.mode&1)for(C=e,y=e.child;y!==null;){for(w=C=y;C!==null;){switch(h=C,S=h.child,h.tag){case 0:case 11:case 14:case 15:Kt(4,h,h.return);break;case 1:st(h,h.return);var z=h.stateNode;if(typeof z.componentWillUnmount=="function"){i=h,t=h.return;try{n=i,z.props=n.memoizedProps,z.state=n.memoizedState,z.componentWillUnmount()}catch(_){G(i,t,_)}}break;case 5:st(h,h.return);break;case 22:if(h.memoizedState!==null){yl(w);continue}}S!==null?(S.return=h,C=S):yl(w)}y=y.sibling}e:for(y=null,w=e;;){if(w.tag===5){if(y===null){y=w;try{r=w.stateNode,p?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=w.stateNode,u=w.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=iu("display",o))}catch(_){G(e,e.return,_)}}}else if(w.tag===6){if(y===null)try{w.stateNode.nodeValue=p?"":w.memoizedProps}catch(_){G(e,e.return,_)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;y===w&&(y=null),w=w.return}y===w&&(y=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:Te(n,e),Ue(e),i&4&&hl(e);break;case 21:break;default:Te(n,e),Ue(e)}}function Ue(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Cc(t)){var i=t;break e}t=t.return}throw Error(b(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ei(r,""),i.flags&=-33);var a=ml(e);fo(e,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=ml(e);co(e,s,o);break;default:throw Error(b(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function fp(e,n,t){C=e,Oc(e)}function Oc(e,n,t){for(var i=(e.mode&1)!==0;C!==null;){var r=C,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Mi;if(!o){var s=r.alternate,u=s!==null&&s.memoizedState!==null||le;s=Mi;var p=le;if(Mi=o,(le=u)&&!p)for(C=r;C!==null;)o=C,u=o.child,o.tag===22&&o.memoizedState!==null?vl(r):u!==null?(u.return=o,C=u):vl(r);for(;a!==null;)C=a,Oc(a),a=a.sibling;C=r,Mi=s,le=p}gl(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,C=a):gl(e)}}function gl(e){for(;C!==null;){var n=C;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Ir(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!le)if(t===null)i.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Re(n.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&el(n,a,i);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}el(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var p=n.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var w=y.dehydrated;w!==null&&ri(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}le||n.flags&512&&uo(n)}catch(h){G(n,n.return,h)}}if(n===e){C=null;break}if(t=n.sibling,t!==null){t.return=n.return,C=t;break}C=n.return}}function yl(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var t=n.sibling;if(t!==null){t.return=n.return,C=t;break}C=n.return}}function vl(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ir(4,n)}catch(u){G(n,t,u)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(u){G(n,r,u)}}var a=n.return;try{uo(n)}catch(u){G(n,a,u)}break;case 5:var o=n.return;try{uo(n)}catch(u){G(n,o,u)}}}catch(u){G(n,n.return,u)}if(n===e){C=null;break}var s=n.sibling;if(s!==null){s.return=n.return,C=s;break}C=n.return}}var pp=Math.ceil,xr=sn.ReactCurrentDispatcher,ns=sn.ReactCurrentOwner,Ne=sn.ReactCurrentBatchConfig,F=0,ne=null,Y=null,ie=0,_e=0,lt=Cn(0),J=0,hi=null,Bn=0,Mr=0,ts=0,Yt=null,he=null,is=0,kt=1/0,Ze=null,br=!1,po=null,bn=null,Di=!1,yn=null,Sr=0,Zt=0,mo=null,Xi=-1,Ji=0;function de(){return F&6?K():Xi!==-1?Xi:Xi=K()}function Sn(e){return e.mode&1?F&2&&ie!==0?ie&-ie:Yf.transition!==null?(Ji===0&&(Ji=gu()),Ji):(e=M,e!==0||(e=window.event,e=e===void 0?16:bu(e.type)),e):1}function $e(e,n,t,i){if(50<Zt)throw Zt=0,mo=null,Error(b(185));wi(e,t,i),(!(F&2)||e!==ne)&&(e===ne&&(!(F&2)&&(Mr|=t),J===4&&hn(e,ie)),we(e,i),t===1&&F===0&&!(n.mode&1)&&(kt=K()+500,Fr&&Nn()))}function we(e,n){var t=e.callbackNode;Kd(e,n);var i=sr(e,e===ne?ie:0);if(i===0)t!==null&&Es(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&Es(t),n===1)e.tag===0?Kf(wl.bind(null,e)):Uu(wl.bind(null,e)),Hf(function(){!(F&6)&&Nn()}),t=null;else{switch(yu(i)){case 1:t=Co;break;case 4:t=mu;break;case 16:t=or;break;case 536870912:t=hu;break;default:t=or}t=$c(t,Tc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Tc(e,n){if(Xi=-1,Ji=0,F&6)throw Error(b(327));var t=e.callbackNode;if(mt()&&e.callbackNode!==t)return null;var i=sr(e,e===ne?ie:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=jr(e,i);else{n=i;var r=F;F|=2;var a=Lc();(ne!==e||ie!==n)&&(Ze=null,kt=K()+500,Rn(e,n));do try{gp();break}catch(s){Fc(e,s)}while(!0);Uo(),xr.current=a,F=r,Y!==null?n=0:(ne=null,ie=0,n=J)}if(n!==0){if(n===2&&(r=$a(e),r!==0&&(i=r,n=ho(e,r))),n===1)throw t=hi,Rn(e,0),hn(e,i),we(e,K()),t;if(n===6)hn(e,i);else{if(r=e.current.alternate,!(i&30)&&!mp(r)&&(n=jr(e,i),n===2&&(a=$a(e),a!==0&&(i=a,n=ho(e,a))),n===1))throw t=hi,Rn(e,0),hn(e,i),we(e,K()),t;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(b(345));case 2:On(e,he,Ze);break;case 3:if(hn(e,i),(i&130023424)===i&&(n=is+500-K(),10<n)){if(sr(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){de(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ga(On.bind(null,e,he,Ze),n);break}On(e,he,Ze);break;case 4:if(hn(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var o=31-De(i);a=1<<o,o=n[o],o>r&&(r=o),i&=~a}if(i=r,i=K()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*pp(i/1960))-i,10<i){e.timeoutHandle=Ga(On.bind(null,e,he,Ze),i);break}On(e,he,Ze);break;case 5:On(e,he,Ze);break;default:throw Error(b(329))}}}return we(e,K()),e.callbackNode===t?Tc.bind(null,e):null}function ho(e,n){var t=Yt;return e.current.memoizedState.isDehydrated&&(Rn(e,n).flags|=256),e=jr(e,n),e!==2&&(n=he,he=t,n!==null&&go(n)),e}function go(e){he===null?he=e:he.push.apply(he,e)}function mp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],a=r.getSnapshot;r=r.value;try{if(!Be(a(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hn(e,n){for(n&=~ts,n&=~Mr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-De(n),i=1<<t;e[t]=-1,n&=~i}}function wl(e){if(F&6)throw Error(b(327));mt();var n=sr(e,0);if(!(n&1))return we(e,K()),null;var t=jr(e,n);if(e.tag!==0&&t===2){var i=$a(e);i!==0&&(n=i,t=ho(e,i))}if(t===1)throw t=hi,Rn(e,0),hn(e,n),we(e,K()),t;if(t===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,On(e,he,Ze),we(e,K()),null}function rs(e,n){var t=F;F|=1;try{return e(n)}finally{F=t,F===0&&(kt=K()+500,Fr&&Nn())}}function Un(e){yn!==null&&yn.tag===0&&!(F&6)&&mt();var n=F;F|=1;var t=Ne.transition,i=M;try{if(Ne.transition=null,M=1,e)return e()}finally{M=i,Ne.transition=t,F=n,!(F&6)&&Nn()}}function as(){_e=lt.current,V(lt)}function Rn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Wf(t)),Y!==null)for(t=Y.return;t!==null;){var i=t;switch(Do(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fr();break;case 3:wt(),V(ye),V(ue),Go();break;case 5:Qo(i);break;case 4:wt();break;case 13:V(H);break;case 19:V(H);break;case 10:Vo(i.type._context);break;case 22:case 23:as()}t=t.return}if(ne=e,Y=e=jn(e.current,null),ie=_e=n,J=0,hi=null,ts=Mr=Bn=0,he=Yt=null,Fn!==null){for(n=0;n<Fn.length;n++)if(t=Fn[n],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,a=t.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}t.pending=i}Fn=null}return e}function Fc(e,n){do{var t=Y;try{if(Uo(),Ki.current=kr,_r){for(var i=q.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_r=!1}if($n=0,ee=X=q=null,Gt=!1,fi=0,ns.current=null,t===null||t.return===null){J=1,hi=n,Y=null;break}e:{var a=e,o=t.return,s=t,u=n;if(n=ie,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,y=s,w=y.tag;if(!(y.mode&1)&&(w===0||w===11||w===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var S=ol(o);if(S!==null){S.flags&=-257,sl(S,o,s,a,n),S.mode&1&&al(a,p,n),n=S,u=p;var z=n.updateQueue;if(z===null){var _=new Set;_.add(u),n.updateQueue=_}else z.add(u);break e}else{if(!(n&1)){al(a,p,n),os();break e}u=Error(b(426))}}else if(W&&s.mode&1){var E=ol(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),sl(E,o,s,a,n),$o(_t(u,s));break e}}a=u=_t(u,s),J!==4&&(J=2),Yt===null?Yt=[a]:Yt.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var f=yc(a,u,n);Js(a,f);break e;case 1:s=u;var l=a.type,c=a.stateNode;if(!(a.flags&128)&&(typeof l.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(bn===null||!bn.has(c)))){a.flags|=65536,n&=-n,a.lanes|=n;var m=vc(a,s,n);Js(a,m);break e}}a=a.return}while(a!==null)}Ic(t)}catch(g){n=g,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function Lc(){var e=xr.current;return xr.current=kr,e===null?kr:e}function os(){(J===0||J===3||J===2)&&(J=4),ne===null||!(Bn&268435455)&&!(Mr&268435455)||hn(ne,ie)}function jr(e,n){var t=F;F|=2;var i=Lc();(ne!==e||ie!==n)&&(Ze=null,Rn(e,n));do try{hp();break}catch(r){Fc(e,r)}while(!0);if(Uo(),F=t,xr.current=i,Y!==null)throw Error(b(261));return ne=null,ie=0,J}function hp(){for(;Y!==null;)Rc(Y)}function gp(){for(;Y!==null&&!$d();)Rc(Y)}function Rc(e){var n=Dc(e.alternate,e,_e);e.memoizedProps=e.pendingProps,n===null?Ic(e):Y=n,ns.current=null}function Ic(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=up(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Y=null;return}}else if(t=lp(t,n,_e),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);J===0&&(J=5)}function On(e,n,t){var i=M,r=Ne.transition;try{Ne.transition=null,M=1,yp(e,n,t,i)}finally{Ne.transition=r,M=i}return null}function yp(e,n,t,i){do mt();while(yn!==null);if(F&6)throw Error(b(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Yd(e,a),e===ne&&(Y=ne=null,ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Di||(Di=!0,$c(or,function(){return mt(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=Ne.transition,Ne.transition=null;var o=M;M=1;var s=F;F|=4,ns.current=null,dp(e,t),Pc(t,e),If(qa),lr=!!Ha,qa=Ha=null,e.current=t,fp(t),Bd(),F=s,M=o,Ne.transition=a}else e.current=t;if(Di&&(Di=!1,yn=e,Sr=r),a=e.pendingLanes,a===0&&(bn=null),Wd(t.stateNode),we(e,K()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(br)throw br=!1,e=po,po=null,e;return Sr&1&&e.tag!==0&&mt(),a=e.pendingLanes,a&1?e===mo?Zt++:(Zt=0,mo=e):Zt=0,Nn(),null}function mt(){if(yn!==null){var e=yu(Sr),n=Ne.transition,t=M;try{if(Ne.transition=null,M=16>e?16:e,yn===null)var i=!1;else{if(e=yn,yn=null,Sr=0,F&6)throw Error(b(331));var r=F;for(F|=4,C=e.current;C!==null;){var a=C,o=a.child;if(C.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var p=s[u];for(C=p;C!==null;){var y=C;switch(y.tag){case 0:case 11:case 15:Kt(8,y,a)}var w=y.child;if(w!==null)w.return=y,C=w;else for(;C!==null;){y=C;var h=y.sibling,S=y.return;if(Ac(y),y===p){C=null;break}if(h!==null){h.return=S,C=h;break}C=S}}}var z=a.alternate;if(z!==null){var _=z.child;if(_!==null){z.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}C=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,C=o;else e:for(;C!==null;){if(a=C,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Kt(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,C=f;break e}C=a.return}}var l=e.current;for(C=l;C!==null;){o=C;var c=o.child;if(o.subtreeFlags&2064&&c!==null)c.return=o,C=c;else e:for(o=l;C!==null;){if(s=C,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ir(9,s)}}catch(g){G(s,s.return,g)}if(s===o){C=null;break e}var m=s.sibling;if(m!==null){m.return=s.return,C=m;break e}C=s.return}}if(F=r,Nn(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(Cr,e)}catch{}i=!0}return i}finally{M=t,Ne.transition=n}}return!1}function _l(e,n,t){n=_t(t,n),n=yc(e,n,1),e=xn(e,n,1),n=de(),e!==null&&(wi(e,1,n),we(e,n))}function G(e,n,t){if(e.tag===3)_l(e,e,t);else for(;n!==null;){if(n.tag===3){_l(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bn===null||!bn.has(i))){e=_t(t,e),e=vc(n,e,1),n=xn(n,e,1),e=de(),n!==null&&(wi(n,1,e),we(n,e));break}}n=n.return}}function vp(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=de(),e.pingedLanes|=e.suspendedLanes&t,ne===e&&(ie&t)===t&&(J===4||J===3&&(ie&130023424)===ie&&500>K()-is?Rn(e,0):ts|=t),we(e,n)}function Mc(e,n){n===0&&(e.mode&1?(n=Ci,Ci<<=1,!(Ci&130023424)&&(Ci=4194304)):n=1);var t=de();e=an(e,n),e!==null&&(wi(e,n,t),we(e,t))}function wp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Mc(e,t)}function _p(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(b(314))}i!==null&&i.delete(n),Mc(e,t)}var Dc;Dc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ye.current)ge=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ge=!1,sp(e,n,t);ge=!!(e.flags&131072)}else ge=!1,W&&n.flags&1048576&&Vu(n,hr,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Zi(e,n),e=n.pendingProps;var r=gt(n,ue.current);pt(n,t),r=Yo(null,n,i,e,r,t);var a=Zo();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(i)?(a=!0,pr(n)):a=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ho(n),r.updater=Rr,n.stateNode=r,r._reactInternals=n,no(n,i,e,t),n=ro(null,n,i,!0,a,t)):(n.tag=0,W&&a&&Mo(n),ce(null,n,r,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Zi(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=xp(i),e=Re(i,e),r){case 0:n=io(null,n,i,e,t);break e;case 1:n=cl(null,n,i,e,t);break e;case 11:n=ll(null,n,i,e,t);break e;case 14:n=ul(null,n,i,Re(i.type,e),t);break e}throw Error(b(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Re(i,r),io(e,n,i,r,t);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Re(i,r),cl(e,n,i,r,t);case 3:e:{if(xc(n),e===null)throw Error(b(387));i=n.pendingProps,a=n.memoizedState,r=a.element,Ku(e,n),vr(n,i,null,t);var o=n.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){r=_t(Error(b(423)),n),n=dl(e,n,i,t,r);break e}else if(i!==r){r=_t(Error(b(424)),n),n=dl(e,n,i,t,r);break e}else for(ke=kn(n.stateNode.containerInfo.firstChild),xe=n,W=!0,Me=null,t=Qu(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(yt(),i===r){n=on(e,n,t);break e}ce(e,n,i,t)}n=n.child}return n;case 5:return Yu(n),e===null&&Xa(n),i=n.type,r=n.pendingProps,a=e!==null?e.memoizedProps:null,o=r.children,Qa(i,r)?o=null:a!==null&&Qa(i,a)&&(n.flags|=32),kc(e,n),ce(e,n,o,t),n.child;case 6:return e===null&&Xa(n),null;case 13:return bc(e,n,t);case 4:return qo(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=vt(n,null,i,t):ce(e,n,i,t),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Re(i,r),ll(e,n,i,r,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,a=n.memoizedProps,o=r.value,B(gr,i._currentValue),i._currentValue=o,a!==null)if(Be(a.value,o)){if(a.children===r.children&&!ye.current){n=on(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var u=s.firstContext;u!==null;){if(u.context===i){if(a.tag===1){u=nn(-1,t&-t),u.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?u.next=u:(u.next=y.next,y.next=u),p.pending=u}}a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),Ja(a.return,t,n),s.lanes|=t;break}u=u.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(b(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),Ja(o,t,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ce(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,pt(n,t),r=Pe(r),i=i(r),n.flags|=1,ce(e,n,i,t),n.child;case 14:return i=n.type,r=Re(i,n.pendingProps),r=Re(i.type,r),ul(e,n,i,r,t);case 15:return wc(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Re(i,r),Zi(e,n),n.tag=1,ve(i)?(e=!0,pr(n)):e=!1,pt(n,t),gc(n,i,r),no(n,i,r,t),ro(null,n,i,!0,e,t);case 19:return Sc(e,n,t);case 22:return _c(e,n,t)}throw Error(b(156,n.tag))};function $c(e,n){return pu(e,n)}function kp(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,i){return new kp(e,n,t,i)}function ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return ss(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zo)return 11;if(e===Eo)return 14}return 2}function jn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function er(e,n,t,i,r,a){var o=2;if(i=e,typeof e=="function")ss(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Xn:return In(t.children,r,a,n);case jo:o=8,r|=8;break;case ja:return e=Ce(12,t,n,r|2),e.elementType=ja,e.lanes=a,e;case za:return e=Ce(13,t,n,r),e.elementType=za,e.lanes=a,e;case Ea:return e=Ce(19,t,n,r),e.elementType=Ea,e.lanes=a,e;case Yl:return Dr(t,r,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gl:o=10;break e;case Kl:o=9;break e;case zo:o=11;break e;case Eo:o=14;break e;case fn:o=16,i=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return n=Ce(o,t,n,r),n.elementType=e,n.type=i,n.lanes=a,n}function In(e,n,t,i){return e=Ce(7,e,i,n),e.lanes=t,e}function Dr(e,n,t,i){return e=Ce(22,e,i,n),e.elementType=Yl,e.lanes=t,e.stateNode={isHidden:!1},e}function va(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function wa(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function bp(e,n,t,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jr(0),this.expirationTimes=Jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jr(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ls(e,n,t,i,r,a,o,s,u){return e=new bp(e,n,t,s,u),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Ce(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ho(a),e}function Sp(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zn,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function Bc(e){if(!e)return En;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(b(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(b(171))}if(e.tag===1){var t=e.type;if(ve(t))return Bu(e,t,n)}return n}function Uc(e,n,t,i,r,a,o,s,u){return e=ls(t,i,!0,e,r,a,o,s,u),e.context=Bc(null),t=e.current,i=de(),r=Sn(t),a=nn(i,r),a.callback=n??null,xn(t,a,r),e.current.lanes=r,wi(e,r,i),we(e,i),e}function $r(e,n,t,i){var r=n.current,a=de(),o=Sn(r);return t=Bc(t),n.context===null?n.context=t:n.pendingContext=t,n=nn(a,o),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=xn(r,n,o),e!==null&&($e(e,r,o,a),Gi(e,r,o)),o}function zr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function us(e,n){kl(e,n),(e=e.alternate)&&kl(e,n)}function jp(){return null}var Vc=typeof reportError=="function"?reportError:function(e){console.error(e)};function cs(e){this._internalRoot=e}Br.prototype.render=cs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(b(409));$r(e,n,null,null)};Br.prototype.unmount=cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Un(function(){$r(null,e,null,null)}),n[rn]=null}};function Br(e){this._internalRoot=e}Br.prototype.unstable_scheduleHydration=function(e){if(e){var n=_u();e={blockedOn:null,target:e,priority:n};for(var t=0;t<mn.length&&n!==0&&n<mn[t].priority;t++);mn.splice(t,0,e),t===0&&xu(e)}};function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ur(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xl(){}function zp(e,n,t,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var p=zr(o);a.call(p)}}var o=Uc(n,i,e,0,null,!1,!1,"",xl);return e._reactRootContainer=o,e[rn]=o.current,si(e.nodeType===8?e.parentNode:e),Un(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var p=zr(u);s.call(p)}}var u=ls(e,0,!1,null,null,!1,!1,"",xl);return e._reactRootContainer=u,e[rn]=u.current,si(e.nodeType===8?e.parentNode:e),Un(function(){$r(n,u,t,i)}),u}function Vr(e,n,t,i,r){var a=t._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var u=zr(o);s.call(u)}}$r(n,o,e,r)}else o=zp(t,n,e,r,i);return zr(o)}vu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Mt(n.pendingLanes);t!==0&&(No(n,t|1),we(n,K()),!(F&6)&&(kt=K()+500,Nn()))}break;case 13:Un(function(){var i=an(e,1);if(i!==null){var r=de();$e(i,e,1,r)}}),us(e,1)}};Po=function(e){if(e.tag===13){var n=an(e,134217728);if(n!==null){var t=de();$e(n,e,134217728,t)}us(e,134217728)}};wu=function(e){if(e.tag===13){var n=Sn(e),t=an(e,n);if(t!==null){var i=de();$e(t,e,n,i)}us(e,n)}};_u=function(){return M};ku=function(e,n){var t=M;try{return M=e,n()}finally{M=t}};Ia=function(e,n,t){switch(n){case"input":if(Na(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var r=Tr(i);if(!r)throw Error(b(90));Xl(i),Na(i,r)}}}break;case"textarea":eu(e,t);break;case"select":n=t.value,n!=null&&ut(e,!!t.multiple,n,!1)}};su=rs;lu=Un;var Ep={usingClientEntryPoint:!1,Events:[ki,tt,Tr,au,ou,rs]},Lt={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ap={bundleType:Lt.bundleType,version:Lt.version,rendererPackageName:Lt.rendererPackageName,rendererConfig:Lt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=du(e),e===null?null:e.stateNode},findFiberByHostInstance:Lt.findFiberByHostInstance||jp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Cr=$i.inject(Ap),qe=$i}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ep;Se.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ds(n))throw Error(b(200));return Sp(e,n,null,t)};Se.createRoot=function(e,n){if(!ds(e))throw Error(b(299));var t=!1,i="",r=Vc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ls(e,1,!1,null,null,t,!1,i,r),e[rn]=n.current,si(e.nodeType===8?e.parentNode:e),new cs(n)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=du(n),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Un(e)};Se.hydrate=function(e,n,t){if(!Ur(n))throw Error(b(200));return Vr(null,e,n,!0,t)};Se.hydrateRoot=function(e,n,t){if(!ds(e))throw Error(b(405));var i=t!=null&&t.hydratedSources||null,r=!1,a="",o=Vc;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Uc(n,null,e,1,t??null,r,!1,a,o),e[rn]=n.current,si(e),i)for(e=0;e<i.length;e++)t=i[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Br(n)};Se.render=function(e,n,t){if(!Ur(n))throw Error(b(200));return Vr(null,e,n,!1,t)};Se.unmountComponentAtNode=function(e){if(!Ur(e))throw Error(b(40));return e._reactRootContainer?(Un(function(){Vr(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};Se.unstable_batchedUpdates=rs;Se.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!Ur(t))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Vr(e,n,t,!1,i)};Se.version="18.3.1-next-f1338f8080-20240426";function Wc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc)}catch(e){console.error(e)}}Wc(),Wl.exports=Se;var Cp=Wl.exports,Hc,bl=Cp;Hc=bl.createRoot,bl.hydrateRoot;function Sl(e){const t=e.replace(/^#\/?/,"").match(/^algo\/([\w-]+)/);return t?{page:"algo",id:t[1]}:{page:"home"}}function Np(){const[e,n]=D.useState(()=>Sl(window.location.hash));return D.useEffect(()=>{const t=()=>n(Sl(window.location.hash));return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[]),e}const Pp=["Practical performance first: how fast it is on real hardware for typical inputs (cache behaviour, constant factors, adaptivity to presorted data).","Then average and worst-case complexity: O(n log n) comparison sorts beat O(n²) ones; guaranteed worst cases beat ones that can degrade.","Stability and generality break ties: a stable, general-purpose comparison sort beats one that only works on bounded integers or needs extra conditions.","Non-comparison sorts (radix, counting, bucket) can be the fastest of all on integer keys, but they are ranked below the general-purpose sorts because they only work on keys with bounded size or range.","Novelty / teaching-only algorithms (pancake, bogo) come last."],Fe=[1e3,5e3,2e4,5e4,1e5],cn=[100,500,1e3,2e3,4e3],Le=1e5,dn=2e4,Z=120,xt=[{id:"timsort",name:"Timsort (hybrid)",rank:1,family:"Hybrid merge + insertion",summary:"Finds naturally ordered runs, extends short runs with binary insertion sort, and merges runs with a balanced stack.",why:"Default sort in Python, Java (objects), Android, V8: stable, O(n log n) worst case and O(n) on already-sorted or run-structured data.",best:"O(n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(n)",stable:!0,inPlace:!1,growth:"nlogn",suitable:"General-purpose sorting, especially real-world data that is partially sorted, and whenever stability matters.",bad:"Random data of primitives where an unstable in-place quicksort variant is slightly faster and needs no buffer.",uses:["Python list.sort / sorted","Java Arrays.sort for objects, Collections.sort","V8 Array.prototype.sort","Rust slice::sort (driftsort, a descendant)"],steps:["Pick MINRUN between 32 and 64 so that n / MINRUN is close to a power of two.","Scan left to right for a natural run: an ascending or strictly descending sequence (reverse descending runs).","If the run is shorter than MINRUN, extend it with binary insertion sort.","Push the run onto a stack; while the top runs violate the size invariants (A > B + C and B > C), merge adjacent runs.","At the end, merge everything left on the stack. Merges take from the left run on ties, keeping the sort stable."],pseudocode:`timsort(A):
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
  merge all remaining runs`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"introsort",name:"Introsort",rank:2,family:"Hybrid quick + heap + insertion",summary:"Quicksort with median-of-three pivots that switches to heapsort when recursion gets too deep and to insertion sort for tiny ranges.",why:"Quicksort speed with a guaranteed O(n log n) worst case and O(log n) space; the basis of C++ std::sort and .NET Array.Sort. Unstable, so ranked just below Timsort.",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(log n)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Sorting primitives in place when stability is not needed and worst-case guarantees are.",bad:"When stability is required, or data is mostly sorted (it does not exploit existing order like Timsort).",uses:["C++ std::sort (libstdc++, MSVC)",".NET Array.Sort","Go sort.Sort (pdqsort, a descendant)"],steps:["Set a depth limit of about 2·log2(n).","While the range has more than 16 elements: if the depth limit hits 0, heapsort this range and stop.","Otherwise choose the median of first, middle and last as pivot and partition around it.","Recurse into the smaller side and loop on the larger one (bounded stack).","Finish small ranges with insertion sort."],pseudocode:`introsort(A, lo, hi, depth):
  while hi - lo > 16:
    if depth = 0:
      heapsort(A, lo, hi); return
    depth ← depth - 1
    p ← partition(A, lo, hi, medianOf3(lo, mid, hi-1))
    recurse on smaller of [lo, p) and [p+1, hi); loop on the other
  insertionSort(A, lo, hi)`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"quick",name:"Quick sort (3-way)",rank:3,family:"Divide & conquer (partition)",summary:"Pick a random pivot and partition into < pivot, = pivot and > pivot (Dijkstra 3-way), then recurse on the outer parts.",why:"Usually the fastest pure comparison sort in practice thanks to cache-friendly in-place partitioning; the 3-way variant handles duplicates in linear time. Worst case is still O(n²) (very unlikely with random pivots).",best:"O(n)",avg:"O(n log n)",worst:"O(n²)",space:"O(log n)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Large arrays of primitives in memory, especially with many duplicate keys (3-way).",bad:"Adversarial inputs against a fixed pivot rule, or when stability / a hard worst-case bound is required.",uses:["Building block of introsort / pdqsort","Java Arrays.sort for primitives (dual-pivot quicksort)","C qsort implementations"],steps:["If the range has fewer than two elements, stop.","Choose a random pivot v and move it to the front.","Scan with three pointers lt, i, gt: values < v go left of lt, values > v go right of gt, equal values stay in the middle.","Recurse on the smaller outer part and loop on the larger one; the middle (= v) block is already in place."],pseudocode:`quick3(A, lo, hi):
  if hi ≤ lo: return
  swap A[lo], A[random(lo..hi)]
  v ← A[lo]; lt ← lo; i ← lo + 1; gt ← hi
  while i ≤ gt:
    if A[i] < v: swap A[lt++], A[i++]
    else if A[i] > v: swap A[i], A[gt--]
    else: i++
  quick3(A, lo, lt - 1)
  quick3(A, gt + 1, hi)`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"merge",name:"Merge sort",rank:4,family:"Divide & conquer (merge)",summary:"Split the array in half, sort each half recursively, then merge the two sorted halves.",why:"Stable with a guaranteed O(n log n) worst case and very predictable; needs O(n) extra memory and does not adapt to presorted input (Timsort fixes that).",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(n)",stable:!0,inPlace:!1,growth:"nlogn",suitable:"Stable sorting, linked lists, external (on-disk) sorting, parallel sorting.",bad:"Memory-constrained environments (O(n) buffer) and tiny arrays (recursion overhead).",uses:["External sorting of huge files","Sorting linked lists","Counting inversions","GNU sort"],steps:["If the range has fewer than two elements, it is sorted.","Split it at the midpoint and sort both halves recursively.","Merge: repeatedly take the smaller head of the two halves (the left one on ties, for stability) into a buffer.","Copy the buffer back."],pseudocode:`mergeSort(A, lo, hi):
  if hi - lo < 2: return
  mid ← (lo + hi) / 2
  mergeSort(A, lo, mid); mergeSort(A, mid, hi)
  i ← lo; j ← mid
  for k in lo..hi-1:
    if j ≥ hi or (i < mid and A[i] ≤ A[j]): T[k] ← A[i++]
    else: T[k] ← A[j++]
  copy T[lo..hi) to A[lo..hi)`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"heap",name:"Heap sort",rank:5,family:"Selection via binary heap",summary:"Build a max-heap in the array, then repeatedly swap the maximum to the end and restore the heap.",why:"Guaranteed O(n log n) with O(1) extra space, but poor cache locality makes it 2-3x slower than quicksort in practice, and it is unstable.",best:"O(n log n)",avg:"O(n log n)",worst:"O(n log n)",space:"O(1)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"Hard real-time or memory-constrained systems that need a worst-case bound with no extra memory; partial sorting / top-k.",bad:"Large arrays on modern CPUs (cache misses), and when stability is needed.",uses:["Introsort fallback","Priority queues / top-k selection","Embedded systems (Linux kernel lib/sort.c)"],steps:["Heapify: sift down every internal node from n/2 - 1 to 0, so every parent ≥ its children.","Swap the root (maximum) with the last element of the heap; the heap shrinks by one.","Sift the new root down to restore the heap property.","Repeat until the heap has one element."],pseudocode:`heapSort(A):
  for i ← n/2 - 1 downto 0: siftDown(A, i, n)
  for end ← n - 1 downto 1:
    swap A[0], A[end]
    siftDown(A, 0, end)

siftDown(A, root, n):
  while 2·root + 1 < n:
    child ← larger of the children of root
    if A[root] ≥ A[child]: return
    swap A[root], A[child]; root ← child`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"radix",name:"Radix sort (LSD)",rank:6,family:"Non-comparison (digit distribution)",summary:"Sort by one byte (digit) at a time from least to most significant, using a stable counting pass per digit.",why:"Linear time O(n·k) for fixed-width integer keys and often the fastest option for large integer arrays, but only works for keys that decompose into digits.",best:"O(n·k)",avg:"O(n·k)",worst:"O(n·k)",space:"O(n + b)",stable:!0,inPlace:!1,growth:"nk",suitable:"Large arrays of integers or fixed-length strings (k = number of digits, b = radix 256 here).",bad:"Floating point or arbitrary comparison-based keys; small arrays where the per-pass overhead dominates; very wide keys.",uses:["GPU sorting (CUB, Thrust)","Suffix-array construction","Sorting IP addresses / fixed-width IDs","Database column stores"],steps:["Offset every value by the minimum so keys are non-negative.","For each byte position from the lowest: count how many keys have each byte value (0-255).","Prefix-sum the counts into starting positions and place each key stably into an output buffer.","Swap buffers and continue with the next byte until the highest non-zero byte of the max key.","Add the minimum back."],pseudocode:`radixLSD(A):
  key[i] ← A[i] - min(A)
  for shift ← 0, 8, 16, ... while (maxKey >> shift) > 0:
    count[0..256] ← 0
    for k in key: count[((k >> shift) & 255) + 1]++
    prefix-sum count
    for k in key: out[count[(k >> shift) & 255]++] ← k
    swap key, out
  A[i] ← key[i] + min(A)`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"counting",name:"Counting sort",rank:7,family:"Non-comparison (counting)",summary:"Count how many times each value occurs, then write the values back in order.",why:"O(n + k) and extremely fast when the value range k is small, but memory grows with the range so it is useless for wide keys (this site limits max - min to under 1,000,000).",best:"O(n + k)",avg:"O(n + k)",worst:"O(n + k)",space:"O(k)",stable:!0,inPlace:!1,growth:"n",suitable:"Integers in a small known range: ages, grades, bytes, histogram buckets.",bad:"Large value ranges (k ≫ n) or non-integer keys.",uses:["Building block of radix sort","Sorting bytes / characters","Histogram equalisation in image processing"],steps:["Find the minimum and maximum value; k = max - min + 1.","Allocate k counters and count occurrences of each value.","Walk the counters in increasing order and write each value as many times as it was counted."],pseudocode:`countingSort(A):
  lo ← min(A); hi ← max(A)
  count[0..hi-lo] ← 0
  for v in A: count[v - lo]++
  k ← 0
  for v ← 0 to hi - lo:
    repeat count[v] times: A[k++] ← v + lo`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"bucket",name:"Bucket sort",rank:8,family:"Non-comparison (distribution)",summary:"Scatter values into n buckets by value range, sort each bucket with insertion sort, then concatenate.",why:"Expected O(n) for uniformly distributed data, but skewed data piles into a few buckets and degrades to O(n²) (insertion sort inside a bucket).",best:"O(n + k)",avg:"O(n + k)",worst:"O(n²)",space:"O(n + k)",stable:!0,inPlace:!1,growth:"n",suitable:"Uniformly distributed keys (e.g. random floats in [0, 1)) and as a parallel / external sorting stage.",bad:"Clustered or skewed distributions, where many values land in the same bucket.",uses:["Sorting uniformly distributed floats","Histogram-based parallel sorts (sample sort)","Graphics: depth bucketing"],steps:["Find min and max; bucket index of v = (v - min) · n / (max - min + 1).","Append every value to its bucket.","Sort each bucket with insertion sort (buckets are small on uniform data).","Concatenate the buckets in order."],pseudocode:`bucketSort(A):
  lo ← min(A); range ← max(A) - lo + 1
  B[0..n-1] ← empty lists
  for v in A: append v to B[(v - lo) · n / range]
  for each bucket b: insertionSort(b)
  A ← concatenation of B[0], B[1], ..., B[n-1]`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"shell",name:"Shell sort",rank:9,family:"Insertion (diminishing gaps)",summary:"Insertion sort over elements a gap apart, with the gap shrinking (Ciura sequence 701, 301, 132, 57, 23, 10, 4, 1).",why:"Simple, in place, no recursion and surprisingly fast for medium n (roughly O(n^1.3) in practice), but no proven O(n log n) bound and unstable.",best:"O(n log n)",avg:"≈ O(n^1.3) (gap dependent)",worst:"O(n^1.5) or worse",space:"O(1)",stable:!1,inPlace:!0,growth:"n32",suitable:"Embedded systems and medium-sized arrays where code size and no-recursion matter.",bad:"Very large arrays (falls behind O(n log n) sorts) and when stability is needed.",uses:["uClibc qsort","bzip2 compressor","Embedded firmware"],steps:["Choose a decreasing gap sequence ending in 1.","For each gap g: do an insertion sort where each element is compared with the one g positions earlier.","Large gaps move far-away elements quickly; the final g = 1 pass is a plain insertion sort on nearly sorted data."],pseudocode:`shellSort(A):
  for g in [..., 701, 301, 132, 57, 23, 10, 4, 1] with g < n:
    for i ← g to n - 1:
      key ← A[i]; j ← i
      while j ≥ g and key < A[j - g]:
        A[j] ← A[j - g]; j ← j - g
      A[j] ← key`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"comb",name:"Comb sort",rank:10,family:"Exchange (shrinking gap)",summary:'Bubble sort that compares elements a gap apart, shrinking the gap by 1.3 each pass to kill "turtles" (small values near the end).',why:"Much faster than bubble sort (close to O(n log n) on random data) with tiny code, but O(n²) worst case and unstable.",best:"O(n log n)",avg:"Ω(n² / 2^p) ≈ n log n in practice",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"nlogn",suitable:"When you need something tiny and much better than bubble sort.",bad:"Large data sets where real O(n log n) sorts win, and stability requirements.",uses:["Teaching gap-based improvements","Tiny embedded code"],steps:["Start with gap = n.","Each pass: gap ← floor(gap / 1.3) (at least 1); compare-and-swap every pair (i, i + gap).","Stop after a pass with gap = 1 that made no swaps."],pseudocode:`combSort(A):
  gap ← n; sorted ← false
  while not sorted:
    gap ← floor(gap / 1.3)
    if gap ≤ 1: gap ← 1; sorted ← true
    for i ← 0 to n - gap - 1:
      if A[i + gap] < A[i]:
        swap A[i], A[i + gap]; sorted ← false`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"bitonic",name:"Bitonic sort",rank:11,family:"Sorting network",summary:"Recursively build bitonic sequences (ascending then descending) and merge them with a fixed pattern of compare-exchanges.",why:"Data-independent compare pattern is ideal for GPUs, SIMD and hardware, but O(n log² n) comparisons make it slower than O(n log n) sorts on a CPU.",best:"O(n log² n)",avg:"O(n log² n)",worst:"O(n log² n)",space:"O(log n) recursion",stable:!1,inPlace:!0,growth:"nlog2n",suitable:"Parallel hardware: GPUs, FPGAs, SIMD lanes, sorting networks.",bad:"Sequential CPU code, where the extra log factor costs real time.",uses:["GPU sorting kernels","Hardware sorting networks","SIMD sorting of small blocks"],steps:["Sort the first half ascending-reversed (descending) and the second half ascending, recursively; together they form a bitonic sequence.","Bitonic merge: with m = largest power of two below the length, compare-exchange element i with i + m in the requested direction.","Recursively bitonic-merge both parts. This generalisation works for any n, not just powers of two."],pseudocode:`bitonicSort(A, lo, n, up):
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
  bitonicMerge(A, lo, m, up); bitonicMerge(A, lo + m, n - m, up)`,maxInput:Le,maxViz:Z,benchSizes:Fe},{id:"insertion",name:"Insertion sort",rank:12,family:"Insertion",summary:"Grow a sorted prefix by taking the next element and shifting larger elements right until its slot is found.",why:"The best O(n²) sort: stable, in place, adaptive (O(n) on nearly sorted data) and the fastest choice for tiny arrays, which is why hybrids use it.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Small arrays (< ~20-50 elements), nearly sorted data, online sorting as items arrive.",bad:"Large or reverse-ordered arrays (quadratic shifts).",uses:["Small-range base case in Timsort, introsort, pdqsort","Online insertion into a sorted list","Card players sorting a hand"],steps:["Treat A[0] as a sorted prefix.","For each next element (the key), shift every larger element of the prefix one slot right.","Drop the key into the gap. The prefix is one longer and still sorted."],pseudocode:`insertionSort(A):
  for i ← 1 to n - 1:
    key ← A[i]; j ← i
    while j > 0 and key < A[j - 1]:
      A[j] ← A[j - 1]; j ← j - 1
    A[j] ← key`,maxInput:dn,maxViz:Z,benchSizes:cn},{id:"selection",name:"Selection sort",rank:13,family:"Selection",summary:"Repeatedly find the minimum of the unsorted suffix and swap it to the front.",why:"Always n²/2 comparisons (not adaptive) and unstable, but makes at most n - 1 swaps, which helps when writes are expensive.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"Tiny arrays where swaps (writes) are much more expensive than comparisons.",bad:"Anything large; it never benefits from presorted input.",uses:["Teaching","Flash/EEPROM where writes wear the memory","Selecting the k smallest items (partial run)"],steps:["For each position i from left to right:","scan the unsorted suffix A[i..n) to find the index of its minimum;","swap that minimum into position i."],pseudocode:`selectionSort(A):
  for i ← 0 to n - 2:
    m ← i
    for j ← i + 1 to n - 1:
      if A[j] < A[m]: m ← j
    swap A[i], A[m]`,maxInput:dn,maxViz:Z,benchSizes:cn},{id:"cocktail",name:"Cocktail shaker sort",rank:14,family:"Exchange",summary:"Bubble sort that alternates forward and backward passes, moving large values right and small values left each round.",why:"Slightly better than bubble sort (turtles move left fast) and stable/adaptive, but still O(n²) with lots of swaps.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching; nearly sorted data with a few misplaced elements at either end.",bad:"Random or large data.",uses:["Teaching bidirectional passes"],steps:["Forward pass: bubble the largest unsorted value to the right end.","Backward pass: bubble the smallest unsorted value to the left end.","Shrink both ends and repeat until a full round makes no swap."],pseudocode:`cocktailSort(A):
  lo ← 0; hi ← n - 1; swapped ← true
  while swapped and lo < hi:
    swapped ← false
    for i ← lo to hi - 1: if A[i+1] < A[i]: swap; swapped ← true
    hi ← hi - 1
    for i ← hi downto lo + 1: if A[i] < A[i-1]: swap; swapped ← true
    lo ← lo + 1`,maxInput:dn,maxViz:Z,benchSizes:cn},{id:"bubble",name:"Bubble sort",rank:15,family:"Exchange",summary:"Repeatedly swap adjacent out-of-order pairs; each pass bubbles the largest remaining value to the end.",why:"Stable and adaptive with an early exit, but the most swaps of any common algorithm and poor practical speed.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching, or checking whether a tiny array is already sorted (one pass).",bad:'Everything else, especially small values near the end ("turtles").',uses:["Teaching","Detecting a nearly sorted array in one pass"],steps:["Walk the array comparing each adjacent pair; swap if out of order.","After a pass, the largest remaining value is at the end, so the next pass can stop one earlier.","Stop early if a pass makes no swaps."],pseudocode:`bubbleSort(A):
  for end ← n downto 2:
    swapped ← false
    for i ← 1 to end - 1:
      if A[i] < A[i - 1]: swap A[i], A[i - 1]; swapped ← true
    if not swapped: break`,maxInput:dn,maxViz:Z,benchSizes:cn},{id:"odd-even",name:"Odd-even sort",rank:16,family:"Exchange (parallel)",summary:"Alternate compare-swap passes over odd-indexed pairs (1,2), (3,4)... and even-indexed pairs (0,1), (2,3)... until sorted.",why:"Each phase is fully parallel (n/2 independent compare-swaps), which suits SIMD/processor arrays, but sequentially it is as slow as bubble sort.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Parallel processor arrays / meshes where each processor holds one element.",bad:"Sequential code on large data.",uses:["Parallel sorting on processor arrays","Teaching sorting networks"],steps:["Odd phase: compare-swap pairs (1,2), (3,4), (5,6), ...","Even phase: compare-swap pairs (0,1), (2,3), (4,5), ...","Repeat both phases until a full round makes no swap."],pseudocode:`oddEvenSort(A):
  sorted ← false
  while not sorted:
    sorted ← true
    for start in [1, 0]:
      for i ← start; i + 1 < n; i ← i + 2:
        if A[i+1] < A[i]: swap A[i], A[i+1]; sorted ← false`,maxInput:dn,maxViz:Z,benchSizes:cn},{id:"gnome",name:"Gnome sort",rank:17,family:"Exchange (insertion-like)",summary:"A garden gnome walks forward while pots are in order; when two are out of order he swaps them and steps back.",why:"Conceptually insertion sort done with swaps: stable and adaptive but does about 3x the work of insertion sort.",best:"O(n)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!0,inPlace:!0,growth:"n2",suitable:"Teaching; extremely small code size.",bad:"Any real workload.",uses:["Teaching","Code-golf"],steps:["Start at index 0.","If at the start or A[i] ≥ A[i-1], step forward.","Otherwise swap A[i] and A[i-1] and step back.","Done when the gnome walks off the end."],pseudocode:`gnomeSort(A):
  i ← 0
  while i < n:
    if i = 0 or A[i] ≥ A[i - 1]: i ← i + 1
    else: swap A[i], A[i - 1]; i ← i - 1`,maxInput:dn,maxViz:Z,benchSizes:cn},{id:"cycle",name:"Cycle sort",rank:18,family:"Selection (cycle rotation)",summary:"For each position, count how many elements are smaller to find where its item belongs, and rotate the whole permutation cycle into place.",why:"Theoretically optimal number of memory writes (each element written at most once), but always Θ(n²) comparisons and unstable.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"Memory where writes are extremely expensive (EEPROM, flash) and n is small.",bad:"Anything where comparisons cost time: it is never adaptive.",uses:["Minimising writes to flash / EEPROM","Finding the minimum swaps to sort a permutation"],steps:["Take item = A[start]; its final position is start + (number of later elements smaller than it).","Skip past equal values, then write the item there and pick up the value that was displaced.","Repeat for the displaced value until the cycle returns to start.","Move on to the next start position."],pseudocode:`cycleSort(A):
  for start ← 0 to n - 2:
    item ← A[start]
    pos ← start + count of A[j] < item for j > start
    if pos = start: continue
    while item = A[pos]: pos++
    swap item, A[pos]
    while pos ≠ start:
      pos ← start + count of A[j] < item for j > start
      while item = A[pos]: pos++
      if item ≠ A[pos]: swap item, A[pos]`,maxInput:dn,maxViz:Z,benchSizes:cn},{id:"pancake",name:"Pancake sort",rank:19,family:"Selection (prefix reversal)",summary:'Only allowed operation is "flip the top k pancakes": flip the largest to the top, then flip it to the bottom of the unsorted stack.',why:"A puzzle-inspired sort: O(n) flips but each flip costs O(n) element moves, so O(n²) overall with heavy data movement.",best:"O(n²)",avg:"O(n²)",worst:"O(n²)",space:"O(1)",stable:!1,inPlace:!0,growth:"n2",suitable:"When prefix reversal is the only primitive available (e.g. some hardware / genome rearrangement models).",bad:"Any practical sorting task.",uses:["Genome rearrangement research","Interconnection-network routing (pancake graphs)","Bill Gates's only research paper"],steps:["For size = n down to 2:","find the index of the maximum within the first size elements;","flip the prefix ending there (maximum goes to the front), then flip the first size elements (maximum goes to position size - 1)."],pseudocode:`pancakeSort(A):
  for size ← n downto 2:
    mi ← index of max(A[0..size))
    if mi ≠ size - 1:
      flip(A, mi)        // reverse A[0..mi]
      flip(A, size - 1)  // reverse A[0..size-1]`,maxInput:dn,maxViz:Z,benchSizes:cn},{id:"bogo",name:"Bogo sort",rank:20,family:"Randomised (joke)",summary:"Check if the array is sorted; if not, shuffle it randomly and try again.",why:"Expected O(n·n!) time and unbounded worst case: the canonical example of the worst possible sorting algorithm. Capped at 8 elements here.",best:"O(n)",avg:"O(n · n!)",worst:"Unbounded",space:"O(1)",stable:!1,inPlace:!0,growth:"nfact",suitable:"Jokes, teaching probability, and stress-testing a shuffle.",bad:"Any input larger than a handful of elements.",uses:["Teaching expected running time","Humour"],steps:["If the array is sorted, stop.","Otherwise shuffle it uniformly at random (Fisher-Yates) and go back to step 1."],pseudocode:`bogoSort(A):
  while not isSorted(A):
    for i ← n - 1 downto 1:
      j ← random(0..i)
      swap A[i], A[j]`,maxInput:8,maxViz:7,benchSizes:[3,4,5,6,7]}],Op=Object.fromEntries(xt.map(e=>[e.id,e]));function Tp(){return d.jsxs("div",{className:"landing",children:[d.jsxs("section",{className:"hero",children:[d.jsx("h1",{children:"Sort Pedia"}),d.jsx("p",{children:"Every common sorting algorithm, ranked from best to worst, explained in plain language, with verified code in C, C++, Java, Go, Rust and Python, live benchmarks and step-by-step visualizations. Every sort on this site runs in Rust compiled to WebAssembly."})]}),d.jsxs("section",{className:"card","aria-labelledby":"index-h",children:[d.jsx("h2",{id:"index-h",children:"Index"}),d.jsx("nav",{className:"index","data-testid":"algo-index",children:xt.map(e=>d.jsxs("a",{href:`#/algo/${e.id}`,className:"chip",children:[d.jsx("b",{children:e.rank})," ",e.name]},e.id))})]}),d.jsxs("section",{className:"card","aria-labelledby":"why-h",children:[d.jsx("h2",{id:"why-h",children:"How the ranking works"}),d.jsx("ol",{className:"rationale",children:Pp.map(e=>d.jsx("li",{children:e},e))})]}),d.jsxs("section",{"aria-labelledby":"rank-h",children:[d.jsx("h2",{id:"rank-h",children:"Ranking: best to worst"}),d.jsx("ol",{className:"ranking","data-testid":"ranking",children:xt.map(e=>d.jsxs("li",{className:"rank-card",children:[d.jsxs("div",{className:"rank-num",children:["#",e.rank]}),d.jsxs("div",{className:"rank-body",children:[d.jsx("h3",{children:d.jsx("a",{href:`#/algo/${e.id}`,children:e.name})}),d.jsxs("div",{className:"badges",children:[d.jsxs("span",{className:"badge",children:["avg ",e.avg]}),d.jsxs("span",{className:"badge",children:["worst ",e.worst]}),d.jsxs("span",{className:"badge",children:["space ",e.space]}),d.jsx("span",{className:`badge ${e.stable?"yes":"no"}`,children:e.stable?"stable":"unstable"}),d.jsx("span",{className:`badge ${e.inPlace?"yes":"no"}`,children:e.inPlace?"in-place":"not in-place"})]}),d.jsx("p",{children:e.why})]})]},e.id))})]})]})}var qc={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(i){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,o={},s={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function l(c){return c instanceof u?new u(c.type,l(c.content),c.alias):Array.isArray(c)?c.map(l):c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++a}),l.__id},clone:function l(c,m){m=m||{};var g,v;switch(s.util.type(c)){case"Object":if(v=s.util.objId(c),m[v])return m[v];g={},m[v]=g;for(var k in c)c.hasOwnProperty(k)&&(g[k]=l(c[k],m));return g;case"Array":return v=s.util.objId(c),m[v]?m[v]:(g=[],m[v]=g,c.forEach(function(x,j){g[j]=l(x,m)}),g);default:return c}},getLanguage:function(l){for(;l;){var c=r.exec(l.className);if(c)return c[1].toLowerCase();l=l.parentElement}return"none"},setLanguage:function(l,c){l.className=l.className.replace(RegExp(r,"gi"),""),l.classList.add("language-"+c)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(g){var l=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(g.stack)||[])[1];if(l){var c=document.getElementsByTagName("script");for(var m in c)if(c[m].src==l)return c[m]}return null}},isActive:function(l,c,m){for(var g="no-"+c;l;){var v=l.classList;if(v.contains(c))return!0;if(v.contains(g))return!1;l=l.parentElement}return!!m}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(l,c){var m=s.util.clone(s.languages[l]);for(var g in c)m[g]=c[g];return m},insertBefore:function(l,c,m,g){g=g||s.languages;var v=g[l],k={};for(var x in v)if(v.hasOwnProperty(x)){if(x==c)for(var j in m)m.hasOwnProperty(j)&&(k[j]=m[j]);m.hasOwnProperty(x)||(k[x]=v[x])}var N=g[l];return g[l]=k,s.languages.DFS(s.languages,function(L,me){me===N&&L!=l&&(this[L]=k)}),k},DFS:function l(c,m,g,v){v=v||{};var k=s.util.objId;for(var x in c)if(c.hasOwnProperty(x)){m.call(c,x,c[x],g||x);var j=c[x],N=s.util.type(j);N==="Object"&&!v[k(j)]?(v[k(j)]=!0,l(j,m,null,v)):N==="Array"&&!v[k(j)]&&(v[k(j)]=!0,l(j,m,x,v))}}},plugins:{},highlightAll:function(l,c){s.highlightAllUnder(document,l,c)},highlightAllUnder:function(l,c,m){var g={callback:m,container:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",g),g.elements=Array.prototype.slice.apply(g.container.querySelectorAll(g.selector)),s.hooks.run("before-all-elements-highlight",g);for(var v=0,k;k=g.elements[v++];)s.highlightElement(k,c===!0,g.callback)},highlightElement:function(l,c,m){var g=s.util.getLanguage(l),v=s.languages[g];s.util.setLanguage(l,g);var k=l.parentElement;k&&k.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(k,g);var x=l.textContent,j={element:l,language:g,grammar:v,code:x};function N(me){j.highlightedCode=me,s.hooks.run("before-insert",j),j.element.innerHTML=j.highlightedCode,s.hooks.run("after-highlight",j),s.hooks.run("complete",j),m&&m.call(j.element)}if(s.hooks.run("before-sanity-check",j),k=j.element.parentElement,k&&k.nodeName.toLowerCase()==="pre"&&!k.hasAttribute("tabindex")&&k.setAttribute("tabindex","0"),!j.code){s.hooks.run("complete",j),m&&m.call(j.element);return}if(s.hooks.run("before-highlight",j),!j.grammar){N(s.util.encode(j.code));return}if(c&&i.Worker){var L=new Worker(s.filename);L.onmessage=function(me){N(me.data)},L.postMessage(JSON.stringify({language:j.language,code:j.code,immediateClose:!0}))}else N(s.highlight(j.code,j.grammar,j.language))},highlight:function(l,c,m){var g={code:l,grammar:c,language:m};if(s.hooks.run("before-tokenize",g),!g.grammar)throw new Error('The language "'+g.language+'" has no grammar.');return g.tokens=s.tokenize(g.code,g.grammar),s.hooks.run("after-tokenize",g),u.stringify(s.util.encode(g.tokens),g.language)},tokenize:function(l,c){var m=c.rest;if(m){for(var g in m)c[g]=m[g];delete c.rest}var v=new w;return h(v,v.head,l),y(l,v,c,v.head,0),z(v)},hooks:{all:{},add:function(l,c){var m=s.hooks.all;m[l]=m[l]||[],m[l].push(c)},run:function(l,c){var m=s.hooks.all[l];if(!(!m||!m.length))for(var g=0,v;v=m[g++];)v(c)}},Token:u};i.Prism=s;function u(l,c,m,g){this.type=l,this.content=c,this.alias=m,this.length=(g||"").length|0}u.stringify=function l(c,m){if(typeof c=="string")return c;if(Array.isArray(c)){var g="";return c.forEach(function(N){g+=l(N,m)}),g}var v={type:c.type,content:l(c.content,m),tag:"span",classes:["token",c.type],attributes:{},language:m},k=c.alias;k&&(Array.isArray(k)?Array.prototype.push.apply(v.classes,k):v.classes.push(k)),s.hooks.run("wrap",v);var x="";for(var j in v.attributes)x+=" "+j+'="'+(v.attributes[j]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+x+">"+v.content+"</"+v.tag+">"};function p(l,c,m,g){l.lastIndex=c;var v=l.exec(m);if(v&&g&&v[1]){var k=v[1].length;v.index+=k,v[0]=v[0].slice(k)}return v}function y(l,c,m,g,v,k){for(var x in m)if(!(!m.hasOwnProperty(x)||!m[x])){var j=m[x];j=Array.isArray(j)?j:[j];for(var N=0;N<j.length;++N){if(k&&k.cause==x+","+N)return;var L=j[N],me=L.inside,ln=!!L.lookbehind,zt=!!L.greedy,Wr=L.alias;if(zt&&!L.pattern.global){var Et=L.pattern.toString().match(/[imsuy]*$/)[0];L.pattern=RegExp(L.pattern.source,Et+"g")}for(var qn=L.pattern||L,A=g.next,P=v;A!==c.tail&&!(k&&P>=k.reach);P+=A.value.length,A=A.next){var O=A.value;if(c.length>l.length)return;if(!(O instanceof u)){var $=1,R;if(zt){if(R=p(qn,P,l,ln),!R||R.index>=l.length)break;var ze=R.index,Qn=R.index+R[0].length,ae=P;for(ae+=A.value.length;ze>=ae;)A=A.next,ae+=A.value.length;if(ae-=A.value.length,P=ae,A.value instanceof u)continue;for(var Ge=A;Ge!==c.tail&&(ae<Qn||typeof Ge.value=="string");Ge=Ge.next)$++,ae+=Ge.value.length;$--,O=l.slice(P,ae),R.index-=P}else if(R=p(qn,0,O,ln),!R)continue;var ze=R.index,Ke=R[0],Hr=O.slice(0,ze),ps=O.slice(ze+Ke.length),qr=P+O.length;k&&qr>k.reach&&(k.reach=qr);var bi=A.prev;Hr&&(bi=h(c,bi,Hr),P+=Hr.length),S(c,bi,$);var nd=new u(x,me?s.tokenize(Ke,me):Ke,Wr,Ke);if(A=h(c,bi,nd),ps&&h(c,A,ps),$>1){var Qr={cause:x+","+N,reach:qr};y(l,c,m,A.prev,P,Qr),k&&Qr.reach>k.reach&&(k.reach=Qr.reach)}}}}}}function w(){var l={value:null,prev:null,next:null},c={value:null,prev:l,next:null};l.next=c,this.head=l,this.tail=c,this.length=0}function h(l,c,m){var g=c.next,v={value:m,prev:c,next:g};return c.next=v,g.prev=v,l.length++,v}function S(l,c,m){for(var g=c.next,v=0;v<m&&g!==l.tail;v++)g=g.next;c.next=g,g.prev=c,l.length-=v}function z(l){for(var c=[],m=l.head.next;m!==l.tail;)c.push(m.value),m=m.next;return c}if(!i.document)return i.addEventListener&&(s.disableWorkerMessageHandler||i.addEventListener("message",function(l){var c=JSON.parse(l.data),m=c.language,g=c.code,v=c.immediateClose;i.postMessage(s.highlight(g,s.languages[m],m)),v&&i.close()},!1)),s;var _=s.util.currentScript();_&&(s.filename=_.src,_.hasAttribute("data-manual")&&(s.manual=!0));function E(){s.manual||s.highlightAll()}if(!s.manual){var f=document.readyState;f==="loading"||f==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",E):window.requestAnimationFrame?window.requestAnimationFrame(E):window.setTimeout(E,16)}return s}(n);e.exports&&(e.exports=t),typeof ms<"u"&&(ms.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(r,a){var o={};o["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[a]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};s["language-"+a]={pattern:/[\s\S]+/,inside:t.languages[a]};var u={};u[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:s},t.languages.insertBefore("markup","cdata",u)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(i,r){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:t.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(i){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var a=i.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading…",r=function(_,E){return"✖ Error "+_+" while fetching file: "+E},a="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",u="loading",p="loaded",y="failed",w="pre[data-src]:not(["+s+'="'+p+'"]):not(['+s+'="'+u+'"])';function h(_,E,f){var l=new XMLHttpRequest;l.open("GET",_,!0),l.onreadystatechange=function(){l.readyState==4&&(l.status<400&&l.responseText?E(l.responseText):l.status>=400?f(r(l.status,l.statusText)):f(a))},l.send(null)}function S(_){var E=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(E){var f=Number(E[1]),l=E[2],c=E[3];return l?c?[f,Number(c)]:[f,void 0]:[f,f]}}t.hooks.add("before-highlightall",function(_){_.selector+=", "+w}),t.hooks.add("before-sanity-check",function(_){var E=_.element;if(E.matches(w)){_.code="",E.setAttribute(s,u);var f=E.appendChild(document.createElement("CODE"));f.textContent=i;var l=E.getAttribute("data-src"),c=_.language;if(c==="none"){var m=(/\.(\w+)$/.exec(l)||[,"none"])[1];c=o[m]||m}t.util.setLanguage(f,c),t.util.setLanguage(E,c);var g=t.plugins.autoloader;g&&g.loadLanguages(c),h(l,function(v){E.setAttribute(s,p);var k=S(E.getAttribute("data-range"));if(k){var x=v.split(/\r\n?|\n/g),j=k[0],N=k[1]==null?x.length:k[1];j<0&&(j+=x.length),j=Math.max(0,Math.min(j-1,x.length)),N<0&&(N+=x.length),N=Math.max(0,Math.min(N,x.length)),v=x.slice(j,N).join(`
`),E.hasAttribute("data-start")||E.setAttribute("data-start",String(j+1))}f.textContent=v,t.highlightElement(f)},function(v){E.setAttribute(s,y),f.textContent=v})}}),t.plugins.fileHighlight={highlight:function(E){for(var f=(E||document).querySelectorAll(w),l=0,c;c=f[l++];)t.highlightElement(c)}};var z=!1;t.fileHighlight=function(){z||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),z=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(qc);var Fp=qc.exports;const jl=td(Fp);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(e){var n=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,t=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return n.source});e.languages.cpp=e.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return n.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:n,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),e.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return t})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),e.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e.languages.cpp}}}}),e.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),e.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:e.languages.extend("cpp",{})}}),e.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},e.languages.cpp["base-clause"])})(Prism);(function(e){var n=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,t=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,i={pattern:RegExp(/(^|[^\w.])/.source+t+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[i,{pattern:RegExp(/(^|[^\w.])/.source+t+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:i.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+t+/[A-Z]\w*\b/.source),lookbehind:!0,inside:i.inside}],keyword:n,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":i,keyword:n,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+t+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:i.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+t+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:i.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return n.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);Prism.languages.go=Prism.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/});Prism.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}});delete Prism.languages.go["class-name"];(function(e){for(var n=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,t=0;t<2;t++)n=n.replace(/<self>/g,function(){return n});n=n.replace(/<self>/g,function(){return/[^\s\S]/.source}),e.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+n),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},e.languages.rust["closure-params"].inside.rest=e.languages.rust,e.languages.rust.attribute.inside.string=e.languages.rust.string})(Prism);Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;const Er=[{id:"java",label:"Java",file:"java.java",prism:"java"},{id:"c",label:"C",file:"c.c",prism:"c"},{id:"cpp",label:"C++",file:"cpp.cpp",prism:"cpp"},{id:"go",label:"Golang",file:"go.go",prism:"go"},{id:"rust",label:"Rust",file:"rust.rs",prism:"rust"},{id:"python",label:"Python",file:"python.py",prism:"python"}],Lp="java",Qc="sort-pedia:default-language";function gi(e){return typeof e=="string"&&Er.some(n=>n.id===e)}function Gc(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function Kc(){const e=Gc()?.getItem(Qc);return gi(e)?e:Lp}function Rp(e){if(!gi(e))throw new Error(`Unknown language: ${String(e)}`);Gc()?.setItem(Qc,e)}const Ip=`/* Bitonic sort generalised to any n: sort halves in opposite directions,
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
`,Mp=`// Bitonic sort generalised to any n.
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
`,Dp=`package main

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
`,$p=`// Bitonic sort generalised to any n.
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
`,Bp=`"""Bitonic sort generalised to any n."""


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
`,Up=`// Bitonic sort generalised to any n.

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
`,Vp=`/* Bogo sort: shuffle until sorted. Expected O(n * n!) - only for tiny n! */
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
`,Wp=`// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
#include <algorithm>
#include <random>
#include <vector>

void sortArray(std::vector<int>& a) {
    std::mt19937 rng(42);
    while (!std::is_sorted(a.begin(), a.end())) std::shuffle(a.begin(), a.end(), rng);
}
`,Hp=`package main

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
`,qp=`import java.util.Random;

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
`,Qp=`"""Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!"""
import random


def sort_array(a):
    while any(a[i] > a[i + 1] for i in range(len(a) - 1)):
        random.shuffle(a)
    return a
`,Gp=`// Bogo sort: shuffle until sorted. Expected O(n * n!) - tiny inputs only!
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
`,Kp=`/* Bubble sort with early exit when a pass makes no swaps. */
void sort_array(int *a, int n) {
    for (int end = n; end > 1; end--) {
        int swapped = 0;
        for (int i = 1; i < end; i++)
            if (a[i] < a[i - 1]) { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; swapped = 1; }
        if (!swapped) break;
    }
}
`,Yp=`// Bubble sort with early exit when a pass makes no swaps.
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
`,Zp=`package main

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
`,Xp=`// Bubble sort with early exit when a pass makes no swaps.
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
`,Jp=`"""Bubble sort with early exit when a pass makes no swaps."""


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
`,em=`// Bubble sort with early exit when a pass makes no swaps.

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
`,nm=`/* Bucket sort: scatter values into n buckets by value range, sort each
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
`,tm=`// Bucket sort: scatter into n buckets by value range, insertion-sort
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
`,im=`package main

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
`,rm=`import java.util.ArrayList;
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
`,am=`"""Bucket sort: scatter into n buckets by value range, insertion-sort
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
`,om=`// Bucket sort: scatter into n buckets by value range, insertion-sort
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
`,sm=`/* Cocktail shaker sort: bubble passes alternating left->right and right->left. */
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
`,lm=`// Cocktail shaker sort: bubble passes in both directions.
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
`,um=`package main

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
`,cm=`// Cocktail shaker sort: bubble passes in both directions.
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
`,dm=`"""Cocktail shaker sort: bubble passes in both directions."""


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
`,fm=`// Cocktail shaker sort: bubble passes in both directions.

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
`,pm=`/* Comb sort: bubble sort over a shrinking gap (factor 1.3). */
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
`,mm=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).
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
`,hm=`package main

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
`,gm=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).
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
`,ym=`"""Comb sort: bubble sort over a shrinking gap (factor 1.3)."""


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
`,vm=`// Comb sort: bubble sort over a shrinking gap (factor 1.3).

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
`,wm=`/* Counting sort for integers in a known (small) range [min, max]. */
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
`,_m=`// Counting sort for integers in a known (small) range [min, max].
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
`,km=`package main

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
`,xm=`// Counting sort for integers in a known (small) range [min, max].
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
`,bm=`"""Counting sort for integers in a known (small) range [min, max]."""


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
`,Sm=`// Counting sort for integers in a known (small) range [min, max].

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
`,jm=`/* Cycle sort: rotate each cycle of the permutation into place, writing
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
`,zm=`// Cycle sort: rotate each permutation cycle into place (minimum writes).
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
`,Em=`package main

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
`,Am=`// Cycle sort: rotate each permutation cycle into place (minimum writes).
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
`,Cm=`"""Cycle sort: rotate each permutation cycle into place (minimum writes)."""


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
`,Nm=`// Cycle sort: rotate each permutation cycle into place (minimum writes).

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
`,Pm=`/* Gnome sort: step forward while in order, otherwise swap and step back. */
void sort_array(int *a, int n) {
    int i = 0;
    while (i < n) {
        if (i == 0 || a[i] >= a[i - 1]) i++;
        else { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; i--; }
    }
}
`,Om=`// Gnome sort: step forward while in order, otherwise swap and step back.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    size_t i = 0;
    while (i < a.size()) {
        if (i == 0 || a[i] >= a[i - 1]) i++;
        else { std::swap(a[i], a[i - 1]); i--; }
    }
}
`,Tm=`package main

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
`,Fm=`// Gnome sort: step forward while in order, otherwise swap and step back.
class GnomeSort {
    public static void sort(int[] a) {
        int i = 0;
        while (i < a.length) {
            if (i == 0 || a[i] >= a[i - 1]) i++;
            else { int t = a[i]; a[i] = a[i - 1]; a[i - 1] = t; i--; }
        }
    }
}
`,Lm=`"""Gnome sort: step forward while in order, otherwise swap and step back."""


def sort_array(a):
    i = 0
    while i < len(a):
        if i == 0 or a[i] >= a[i - 1]:
            i += 1
        else:
            a[i], a[i - 1] = a[i - 1], a[i]
            i -= 1
    return a
`,Rm=`// Gnome sort: step forward while in order, otherwise swap and step back.

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
`,Im=`/* Heap sort: build a max-heap, then repeatedly move the max to the end. */
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
`,Mm=`// Heap sort: build a max-heap, then repeatedly move the max to the end.
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
`,Dm=`package main

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
`,$m=`// Heap sort: build a max-heap, then repeatedly move the max to the end.
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
`,Bm=`"""Heap sort: build a max-heap, then repeatedly move the max to the end."""


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
`,Um=`// Heap sort: build a max-heap, then repeatedly move the max to the end.

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
`,Vm=`/* Insertion sort: grow a sorted prefix by inserting one element at a time. */
void sort_array(int *a, int n) {
    for (int i = 1; i < n; i++) {
        int key = a[i], j = i;
        while (j > 0 && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
        a[j] = key;
    }
}
`,Wm=`// Insertion sort: grow a sorted prefix one element at a time.
#include <vector>

void sortArray(std::vector<int>& a) {
    for (size_t i = 1; i < a.size(); i++) {
        int key = a[i];
        size_t j = i;
        while (j > 0 && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
        a[j] = key;
    }
}
`,Hm=`package main

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
`,qm=`// Insertion sort: grow a sorted prefix one element at a time.
class InsertionSort {
    public static void sort(int[] a) {
        for (int i = 1; i < a.length; i++) {
            int key = a[i], j = i;
            while (j > 0 && key < a[j - 1]) { a[j] = a[j - 1]; j--; }
            a[j] = key;
        }
    }
}
`,Qm=`"""Insertion sort: grow a sorted prefix one element at a time."""


def sort_array(a):
    for i in range(1, len(a)):
        key, j = a[i], i
        while j > 0 and key < a[j - 1]:
            a[j] = a[j - 1]
            j -= 1
        a[j] = key
    return a
`,Gm=`// Insertion sort: grow a sorted prefix one element at a time.

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
`,Km=`/* Introsort: quicksort (median-of-three) that switches to heapsort when
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
`,Ym=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
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
`,Zm=`package main

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
`,Xm=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
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
`,Jm=`"""Introsort: median-of-three quicksort, heapsort fallback when recursion
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
`,eh=`// Introsort: median-of-three quicksort, heapsort fallback when recursion
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
`,nh=`/* Top-down merge sort with one auxiliary buffer. Stable, O(n log n). */
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
`,th=`// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).
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
`,ih=`package main

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
`,rh=`// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).
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
`,ah=`"""Top-down merge sort. Stable, O(n log n)."""


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
`,oh=`// Top-down merge sort with one auxiliary buffer. Stable, O(n log n).

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
`,sh=`/* Odd-even (brick) sort: alternate compare-swaps on odd and even pairs. */
void sort_array(int *a, int n) {
    int sorted = 0;
    while (!sorted) {
        sorted = 1;
        for (int start = 1; start >= 0; start--)
            for (int i = start; i + 1 < n; i += 2)
                if (a[i + 1] < a[i]) { int t = a[i]; a[i] = a[i + 1]; a[i + 1] = t; sorted = 0; }
    }
}
`,lh=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
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
`,uh=`package main

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
`,ch=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.
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
`,dh=`"""Odd-even (brick) sort: alternate compare-swaps on odd and even pairs."""


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
`,fh=`// Odd-even (brick) sort: alternate compare-swaps on odd and even pairs.

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
`,ph=`/* Pancake sort: flip the maximum to the front, then flip it to the end. */
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
`,mh=`// Pancake sort: flip the max to the front, then flip it to the end.
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
`,hh=`package main

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
`,gh=`// Pancake sort: flip the max to the front, then flip it to the end.
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
`,yh=`"""Pancake sort: flip the max to the front, then flip it to the end."""


def sort_array(a):
    for size in range(len(a), 1, -1):
        mi = max(range(size), key=a.__getitem__)
        if mi != size - 1:
            a[:mi + 1] = a[:mi + 1][::-1]  # flip max to the front
            a[:size] = a[:size][::-1]      # flip it to the end
    return a
`,vh=`// Pancake sort: flip the max to the front, then flip it to the end.

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
`,wh=`/* 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well. */
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
`,_h=`// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
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
`,kh=`package main

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
`,xh=`import java.util.concurrent.ThreadLocalRandom;

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
`,bh=`"""3-way (Dijkstra) quicksort with a random pivot: handles duplicates well."""
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
`,Sh=`// 3-way (Dijkstra) quicksort with a random pivot: handles duplicates well.
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
`,jh=`/* LSD radix sort, base 256. Negative numbers are handled by sorting
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
`,zh=`// LSD radix sort, base 256, on the unsigned offset key (value - min).
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
`,Eh=`package main

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
`,Ah=`// LSD radix sort, base 256, on the offset key (value - min) as a long.
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
`,Ch=`"""LSD radix sort, base 256, on the offset key (value - min)."""


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
`,Nh=`// LSD radix sort, base 256, on the unsigned offset key (value - min).

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
`,Ph=`/* Selection sort: repeatedly select the minimum of the unsorted suffix. */
void sort_array(int *a, int n) {
    for (int i = 0; i + 1 < n; i++) {
        int m = i;
        for (int j = i + 1; j < n; j++) if (a[j] < a[m]) m = j;
        int t = a[i]; a[i] = a[m]; a[m] = t;
    }
}
`,Oh=`// Selection sort: repeatedly select the minimum of the unsorted suffix.
#include <utility>
#include <vector>

void sortArray(std::vector<int>& a) {
    for (size_t i = 0; i + 1 < a.size(); i++) {
        size_t m = i;
        for (size_t j = i + 1; j < a.size(); j++) if (a[j] < a[m]) m = j;
        std::swap(a[i], a[m]);
    }
}
`,Th=`package main

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
`,Fh=`// Selection sort: repeatedly select the minimum of the unsorted suffix.
class SelectionSort {
    public static void sort(int[] a) {
        for (int i = 0; i + 1 < a.length; i++) {
            int m = i;
            for (int j = i + 1; j < a.length; j++) if (a[j] < a[m]) m = j;
            int t = a[i]; a[i] = a[m]; a[m] = t;
        }
    }
}
`,Lh=`"""Selection sort: repeatedly select the minimum of the unsorted suffix."""


def sort_array(a):
    n = len(a)
    for i in range(n - 1):
        m = i
        for j in range(i + 1, n):
            if a[j] < a[m]:
                m = j
        a[i], a[m] = a[m], a[i]
    return a
`,Rh=`// Selection sort: repeatedly select the minimum of the unsorted suffix.

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
`,Ih=`/* Shell sort with the Ciura gap sequence (extended by x2.25). */
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
`,Mh=`// Shell sort with the Ciura gap sequence (extended by x2.25).
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
`,Dh=`package main

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
`,$h=`import java.util.ArrayList;
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
`,Bh=`"""Shell sort with the Ciura gap sequence (extended by x2.25)."""


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
`,Uh=`// Shell sort with the Ciura gap sequence (extended by x2.25).

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
`,Vh=`/* Simplified Timsort: natural runs extended to MINRUN with binary
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
`,Wh=`// Simplified Timsort: natural runs extended to MINRUN with binary
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
`,Hh=`package main

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
`,qh=`import java.util.ArrayList;
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
`,Qh=`"""Simplified Timsort: natural runs extended to MIN_RUN with binary
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
`,Gh=`// Simplified Timsort: natural runs extended to MIN_RUN with binary
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
`,Yc=Object.assign({"../snippets/bitonic/c.c":Ip,"../snippets/bitonic/cpp.cpp":Mp,"../snippets/bitonic/go.go":Dp,"../snippets/bitonic/java.java":$p,"../snippets/bitonic/python.py":Bp,"../snippets/bitonic/rust.rs":Up,"../snippets/bogo/c.c":Vp,"../snippets/bogo/cpp.cpp":Wp,"../snippets/bogo/go.go":Hp,"../snippets/bogo/java.java":qp,"../snippets/bogo/python.py":Qp,"../snippets/bogo/rust.rs":Gp,"../snippets/bubble/c.c":Kp,"../snippets/bubble/cpp.cpp":Yp,"../snippets/bubble/go.go":Zp,"../snippets/bubble/java.java":Xp,"../snippets/bubble/python.py":Jp,"../snippets/bubble/rust.rs":em,"../snippets/bucket/c.c":nm,"../snippets/bucket/cpp.cpp":tm,"../snippets/bucket/go.go":im,"../snippets/bucket/java.java":rm,"../snippets/bucket/python.py":am,"../snippets/bucket/rust.rs":om,"../snippets/cocktail/c.c":sm,"../snippets/cocktail/cpp.cpp":lm,"../snippets/cocktail/go.go":um,"../snippets/cocktail/java.java":cm,"../snippets/cocktail/python.py":dm,"../snippets/cocktail/rust.rs":fm,"../snippets/comb/c.c":pm,"../snippets/comb/cpp.cpp":mm,"../snippets/comb/go.go":hm,"../snippets/comb/java.java":gm,"../snippets/comb/python.py":ym,"../snippets/comb/rust.rs":vm,"../snippets/counting/c.c":wm,"../snippets/counting/cpp.cpp":_m,"../snippets/counting/go.go":km,"../snippets/counting/java.java":xm,"../snippets/counting/python.py":bm,"../snippets/counting/rust.rs":Sm,"../snippets/cycle/c.c":jm,"../snippets/cycle/cpp.cpp":zm,"../snippets/cycle/go.go":Em,"../snippets/cycle/java.java":Am,"../snippets/cycle/python.py":Cm,"../snippets/cycle/rust.rs":Nm,"../snippets/gnome/c.c":Pm,"../snippets/gnome/cpp.cpp":Om,"../snippets/gnome/go.go":Tm,"../snippets/gnome/java.java":Fm,"../snippets/gnome/python.py":Lm,"../snippets/gnome/rust.rs":Rm,"../snippets/heap/c.c":Im,"../snippets/heap/cpp.cpp":Mm,"../snippets/heap/go.go":Dm,"../snippets/heap/java.java":$m,"../snippets/heap/python.py":Bm,"../snippets/heap/rust.rs":Um,"../snippets/insertion/c.c":Vm,"../snippets/insertion/cpp.cpp":Wm,"../snippets/insertion/go.go":Hm,"../snippets/insertion/java.java":qm,"../snippets/insertion/python.py":Qm,"../snippets/insertion/rust.rs":Gm,"../snippets/introsort/c.c":Km,"../snippets/introsort/cpp.cpp":Ym,"../snippets/introsort/go.go":Zm,"../snippets/introsort/java.java":Xm,"../snippets/introsort/python.py":Jm,"../snippets/introsort/rust.rs":eh,"../snippets/merge/c.c":nh,"../snippets/merge/cpp.cpp":th,"../snippets/merge/go.go":ih,"../snippets/merge/java.java":rh,"../snippets/merge/python.py":ah,"../snippets/merge/rust.rs":oh,"../snippets/odd-even/c.c":sh,"../snippets/odd-even/cpp.cpp":lh,"../snippets/odd-even/go.go":uh,"../snippets/odd-even/java.java":ch,"../snippets/odd-even/python.py":dh,"../snippets/odd-even/rust.rs":fh,"../snippets/pancake/c.c":ph,"../snippets/pancake/cpp.cpp":mh,"../snippets/pancake/go.go":hh,"../snippets/pancake/java.java":gh,"../snippets/pancake/python.py":yh,"../snippets/pancake/rust.rs":vh,"../snippets/quick/c.c":wh,"../snippets/quick/cpp.cpp":_h,"../snippets/quick/go.go":kh,"../snippets/quick/java.java":xh,"../snippets/quick/python.py":bh,"../snippets/quick/rust.rs":Sh,"../snippets/radix/c.c":jh,"../snippets/radix/cpp.cpp":zh,"../snippets/radix/go.go":Eh,"../snippets/radix/java.java":Ah,"../snippets/radix/python.py":Ch,"../snippets/radix/rust.rs":Nh,"../snippets/selection/c.c":Ph,"../snippets/selection/cpp.cpp":Oh,"../snippets/selection/go.go":Th,"../snippets/selection/java.java":Fh,"../snippets/selection/python.py":Lh,"../snippets/selection/rust.rs":Rh,"../snippets/shell/c.c":Ih,"../snippets/shell/cpp.cpp":Mh,"../snippets/shell/go.go":Dh,"../snippets/shell/java.java":$h,"../snippets/shell/python.py":Bh,"../snippets/shell/rust.rs":Uh,"../snippets/timsort/c.c":Vh,"../snippets/timsort/cpp.cpp":Wh,"../snippets/timsort/go.go":Hh,"../snippets/timsort/java.java":qh,"../snippets/timsort/python.py":Qh,"../snippets/timsort/rust.rs":Gh});function Kh(e,n){return Yc[`../snippets/${e}/${n}`]}Object.keys(Yc).length;const yo="sort-pedia:default-language";function Yh(){const[e,n]=D.useState(Kc());return d.jsxs("label",{className:"settings",children:[d.jsx("span",{children:"Default code language"}),d.jsx("select",{"data-testid":"default-lang",value:e,onChange:t=>{const i=t.target.value;gi(i)&&(Rp(i),n(i),window.dispatchEvent(new CustomEvent(yo,{detail:i})))},children:Er.map(t=>d.jsx("option",{value:t.id,children:t.label},t.id))})]})}const Zh={java:"Call: <Class>.sort(int[] a)",c:"Call: sort_array(int *a, int n)",cpp:"Call: sortArray(std::vector<int>& a)",go:"Call: sortArray(a []int)",rust:"Call: sort_array(&mut [i32])",python:"Call: sort_array(list)"};function Xh({algoId:e}){const[n,t]=D.useState(Kc()),[i,r]=D.useState(!1);D.useEffect(()=>{const u=p=>{const y=p.detail;gi(y)&&t(y)};return window.addEventListener(yo,u),()=>window.removeEventListener(yo,u)},[]);const a=Er.find(u=>u.id===n),o=Kh(e,a.file)??"// snippet missing",s=D.useMemo(()=>jl.highlight(o,jl.languages[a.prism],a.prism),[o,a.prism]);return d.jsxs("div",{className:"code-panel",children:[d.jsxs("div",{className:"code-toolbar",children:[d.jsxs("label",{children:[d.jsx("span",{children:"Language"}),d.jsx("select",{"data-testid":"lang-select",value:n,onChange:u=>gi(u.target.value)&&t(u.target.value),children:Er.map(u=>d.jsx("option",{value:u.id,children:u.label},u.id))})]}),d.jsx("button",{type:"button",className:"btn small",onClick:()=>{navigator.clipboard?.writeText(o).then(()=>{r(!0),setTimeout(()=>r(!1),1200)},()=>{})},children:i?"Copied":"Copy"})]}),d.jsxs("p",{className:"muted small",children:[Zh[n]," · compiled and tested by scripts/verify-snippets.mjs"]}),d.jsx("pre",{className:`language-${a.prism}`,"data-testid":"code-block","data-lang":n,children:d.jsx("code",{className:`language-${a.prism}`,dangerouslySetInnerHTML:{__html:s}})})]})}const zl=[{id:"n",label:"n (n + k)",f:e=>e,color:"#16a34a"},{id:"nk",label:"n·k (k = 4)",f:e=>4*e,color:"#0d9488"},{id:"nlogn",label:"n log n",f:e=>e*Math.log2(Math.max(e,1)),color:"#2563eb"},{id:"n32",label:"n^1.5",f:e=>e**1.5,color:"#7c3aed"},{id:"nlog2n",label:"n log² n",f:e=>e*Math.log2(Math.max(e,1))**2,color:"#c026d3"},{id:"n2",label:"n²",f:e=>e*e,color:"#ea580c"},{id:"nfact",label:"n · n!",f:e=>{let n=e;for(let t=2;t<=e;t++)n*=t;return n},color:"#dc2626"}],Bi=360,Ye=240,Ve=34,_a=64,Ui=1200;function Jh({highlight:e}){const n=i=>Ve+(i-1)/(_a-1)*(Bi-Ve-8),t=i=>Ye-Ve-Math.min(i,Ui)/Ui*(Ye-Ve-8);return d.jsxs("figure",{className:"chart","data-testid":"growth-chart",children:[d.jsxs("svg",{viewBox:`0 0 ${Bi} ${Ye}`,role:"img","aria-label":"Complexity growth curves",children:[d.jsx("line",{x1:Ve,y1:Ye-Ve,x2:Bi-8,y2:Ye-Ve,className:"axis"}),d.jsx("line",{x1:Ve,y1:8,x2:Ve,y2:Ye-Ve,className:"axis"}),d.jsxs("text",{x:Bi/2,y:Ye-6,className:"axis-label",textAnchor:"middle",children:["n (input size, 1–",_a,")"]}),d.jsxs("text",{x:10,y:Ye/2,className:"axis-label",textAnchor:"middle",transform:`rotate(-90 10 ${Ye/2})`,children:["operations (clipped at ",Ui,")"]}),zl.map(i=>{const r=[];for(let o=1;o<=_a&&(r.push(`${n(o).toFixed(1)},${t(i.f(o)).toFixed(1)}`),!(i.f(o)>Ui));o++);const a=i.id===e;return d.jsx("polyline",{points:r.join(" "),fill:"none",stroke:i.color,strokeWidth:a?4:1.5,opacity:a?1:.45},i.id)})]}),d.jsx("figcaption",{className:"legend",children:zl.map(i=>d.jsxs("span",{className:i.id===e?"on":"",children:[d.jsx("i",{style:{background:i.color}})," ",i.label,i.id===e?" ← this algorithm (average)":""]},i.id))})]})}const El=-1e9,Al=1e9;function eg(e,n){const t=e.trim();if(t==="")return{ok:!1,error:"Please enter at least one number."};const i=t.split(/[\s,]+/).filter(a=>a!=="");if(i.length===0)return{ok:!1,error:"Please enter at least one number."};if(i.length>n)return{ok:!1,error:`Too many numbers: ${i.length}. This algorithm accepts at most ${n}.`};const r=[];for(let a=0;a<i.length;a++){const o=i[a];if(!/^[+-]?\d+$/.test(o))return{ok:!1,error:`"${o}" (item ${a+1}) is not a whole number. Use integers separated by commas or spaces.`};const s=Number(o);if(!Number.isSafeInteger(s)||s<El||s>Al)return{ok:!1,error:`"${o}" (item ${a+1}) is out of range. Values must be between ${El} and ${Al}.`};r.push(s)}return{ok:!0,values:r}}function ng(e){let n=e>>>0;return()=>{n=n+1831565813>>>0;let t=n;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}const Kn=[{id:"random",label:"Random"},{id:"sorted",label:"Sorted"},{id:"reversed",label:"Reversed"},{id:"nearly",label:"Nearly sorted"},{id:"few",label:"Few unique"}];function Zc(e,n,t=1,i=Math.max(n*4,100)){const r=ng(t),a=()=>1+Math.floor(r()*i);switch(e){case"random":return Array.from({length:n},a);case"sorted":return Array.from({length:n},a).sort((o,s)=>o-s);case"reversed":return Array.from({length:n},a).sort((o,s)=>s-o);case"nearly":{const o=Array.from({length:n},a).sort((u,p)=>u-p),s=Math.max(1,Math.floor(n/20));for(let u=0;u<s&&n>1;u++){const p=Math.floor(r()*n),y=Math.floor(r()*n);[o[p],o[y]]=[o[y],o[p]]}return o}case"few":{const o=Math.min(5,Math.max(1,n)),s=Array.from({length:o},(u,p)=>Math.round((p+1)*i/o));return Array.from({length:n},()=>s[Math.floor(r()*o)])}}}class yi{static __wrap(n){const t=Object.create(yi.prototype);return t.__wbg_ptr=n,Cl.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,Cl.unregister(this),n}free(){const n=this.__destroy_into_raw();I.__wbg_sortresult_free(n,0)}get comparisons(){return I.sortresult_comparisons(this.__wbg_ptr)}get sorted(){const n=I.sortresult_sorted(this.__wbg_ptr);var t=Nl(n[0],n[1]).slice();return I.__wbindgen_free(n[0],n[1]*4,4),t}get swaps(){return I.sortresult_swaps(this.__wbg_ptr)}get trace(){const n=I.sortresult_trace(this.__wbg_ptr);var t=Nl(n[0],n[1]).slice();return I.__wbindgen_free(n[0],n[1]*4,4),t}get truncated(){return I.sortresult_truncated(this.__wbg_ptr)!==0}get writes(){return I.sortresult_writes(this.__wbg_ptr)}}Symbol.dispose&&(yi.prototype[Symbol.dispose]=yi.prototype.free);function tg(e,n,t){const i=Jc(e,I.__wbindgen_malloc,I.__wbindgen_realloc),r=Vn,a=Xc(n,I.__wbindgen_malloc),o=Vn,s=I.sort(i,r,a,o,t);if(s[2])throw ed(s[1]);return yi.__wrap(s[0])}function ig(e,n){const t=Jc(e,I.__wbindgen_malloc,I.__wbindgen_realloc),i=Vn,r=Xc(n,I.__wbindgen_malloc),a=Vn,o=I.sort_only(t,i,r,a);if(o[2])throw ed(o[1]);return o[0]}function rg(){return{__proto__:null,"./sortcore_bg.js":{__proto__:null,__wbg_Error_30c8987f7c2ed4e2:function(n,t){return Error(ka(n,t))},__wbg___wbindgen_throw_41e9ee4f547fc59a:function(n,t){throw new Error(ka(n,t))},__wbindgen_generic_0000000000000001:function(n,t){return ka(n,t)},__wbindgen_init_externref_table:function(){const n=I.__wbindgen_externrefs,t=n.grow(4);n.set(0,void 0),n.set(t+0,void 0),n.set(t+1,null),n.set(t+2,!0),n.set(t+3,!1)}}}}const Cl=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>I.__wbg_sortresult_free(e,1));function Nl(e,n){return e=e>>>0,ag().subarray(e/4,e/4+n)}let $t=null;function ag(){return($t===null||$t.byteLength===0)&&($t=new Int32Array(I.memory.buffer)),$t}function ka(e,n){return lg(e>>>0,n)}let Bt=null;function og(){return(Bt===null||Bt.byteLength===0)&&(Bt=new Uint32Array(I.memory.buffer)),Bt}let Ut=null;function nr(){return(Ut===null||Ut.byteLength===0)&&(Ut=new Uint8Array(I.memory.buffer)),Ut}function Xc(e,n){const t=n(e.length*4,4)>>>0;return og().set(e,t/4),Vn=e.length,t}function Jc(e,n,t){if(t===void 0){const s=Xt.encode(e),u=n(s.length,1)>>>0;return nr().subarray(u,u+s.length).set(s),Vn=s.length,u}let i=e.length,r=n(i,1)>>>0;const a=nr();let o=0;for(;o<i;o++){const s=e.charCodeAt(o);if(s>127)break;a[r+o]=s}if(o!==i){o!==0&&(e=e.slice(o)),r=t(r,i,i=o+e.length*3,1)>>>0;const s=nr().subarray(r+o,r+i),u=Xt.encodeInto(e,s);o+=u.written,r=t(r,i,o,1)>>>0}return Vn=o,r}function ed(e){const n=I.__wbindgen_externrefs.get(e);return I.__externref_table_dealloc(e),n}let tr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});tr.decode();const sg=2146435072;let xa=0;function lg(e,n){return xa+=n,xa>=sg&&(tr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),tr.decode(),xa=n),tr.decode(nr().subarray(e,e+n))}const Xt=new TextEncoder;"encodeInto"in Xt||(Xt.encodeInto=function(e,n){const t=Xt.encode(e);return n.set(t),{read:e.length,written:t.length}});let Vn=0,I;function ug(e,n){return I=e.exports,$t=null,Bt=null,Ut=null,I.__wbindgen_start(),I}async function cg(e,n){if(typeof Response=="function"&&e instanceof Response){if(!e.ok)throw new Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(r){if(t(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const i=await e.arrayBuffer();return await WebAssembly.instantiate(i,n)}else{const i=await WebAssembly.instantiate(e,n);return i instanceof WebAssembly.Instance?{instance:i,module:e}:i}function t(i){switch(i){case"basic":case"cors":case"default":return!0}return!1}}async function dg(e){if(I!==void 0)return I;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL("/sort-pedia/assets/sortcore_bg-5z42jp9_.wasm",import.meta.url));const n=rg();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:i}=await cg(await e,n);return ug(t)}let ba=null;function fs(){return ba||(ba=dg()),ba}async function Pl(e,n,t){await fs();const i=Int32Array.from(n),r=performance.now(),a=tg(e,i,t),o=performance.now()-r;try{return{sorted:Array.from(a.sorted),trace:t?a.trace:null,comparisons:a.comparisons,swaps:a.swaps,writes:a.writes,truncated:a.truncated,ms:o}}finally{a.free()}}async function fg(e,n){await fs();const t=performance.now();return ig(e,n),performance.now()-t}const Ol={random:"#2563eb",sorted:"#16a34a",reversed:"#dc2626",nearly:"#ca8a04",few:"#7c3aed"};async function pg(e,n){let t=1/0,i=0,r=0;for(;r<5&&(r===0||i<30);){const a=await fg(e,Int32Array.from(n));t=Math.min(t,a),i+=a,r++}return t}function mg({algo:e}){const[n,t]=D.useState([]),[i,r]=D.useState("idle"),[a,o]=D.useState("");async function s(){r("running"),t([]);try{await fs();const _=[];for(const E of e.benchSizes){const f={n:E};for(const l of Kn)o(`n = ${E.toLocaleString()}, ${l.label.toLowerCase()}…`),await new Promise(c=>setTimeout(c,0)),f[l.id]=await pg(e.id,Zc(l.id,E,E+7));_.push(f),t([..._])}r("done"),o("")}catch(_){r("error"),o(String(_ instanceof Error?_.message:_))}}const u=360,p=220,y=40,w=Math.max(.01,...n.flatMap(_=>Kn.map(E=>_[E.id]??0))),h=e.benchSizes[e.benchSizes.length-1],S=_=>y+_/h*(u-y-10),z=_=>p-y-_/w*(p-y-10);return d.jsxs("div",{className:"bench","data-testid":"benchmark",children:[d.jsxs("p",{className:"muted small",children:["Sizes ",e.benchSizes.map(_=>_.toLocaleString()).join(", ")," × 5 input shapes, timed with performance.now() around the WASM call in your browser (best of up to 5 runs)."]}),d.jsx("button",{type:"button",className:"btn",onClick:s,disabled:i==="running","data-testid":"bench-run",children:i==="running"?"Running…":n.length?"Run again":"Run benchmark"}),a&&d.jsx("p",{className:i==="error"?"error":"muted small",children:a}),n.length>0&&d.jsxs(d.Fragment,{children:[d.jsxs("figure",{className:"chart",children:[d.jsxs("svg",{viewBox:`0 0 ${u} ${p}`,role:"img","aria-label":"Benchmark chart",children:[d.jsx("line",{x1:y,y1:p-y,x2:u-10,y2:p-y,className:"axis"}),d.jsx("line",{x1:y,y1:10,x2:y,y2:p-y,className:"axis"}),d.jsx("text",{x:u/2,y:p-8,className:"axis-label",textAnchor:"middle",children:"n"}),d.jsxs("text",{x:4,y:14,className:"axis-label",children:[w.toFixed(2)," ms"]}),Kn.map(_=>d.jsx("polyline",{fill:"none",stroke:Ol[_.id],strokeWidth:2,points:n.filter(E=>E[_.id]!==void 0).map(E=>`${S(E.n).toFixed(1)},${z(E[_.id]).toFixed(1)}`).join(" ")},_.id))]}),d.jsx("figcaption",{className:"legend",children:Kn.map(_=>d.jsxs("span",{children:[d.jsx("i",{style:{background:Ol[_.id]}})," ",_.label]},_.id))})]}),d.jsx("div",{className:"table-wrap",children:d.jsxs("table",{className:"bench-table","data-testid":"bench-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"n"}),Kn.map(_=>d.jsx("th",{children:_.label},_.id))]})}),d.jsx("tbody",{children:n.map(_=>d.jsxs("tr",{children:[d.jsx("td",{children:_.n.toLocaleString()}),Kn.map(E=>d.jsx("td",{children:_[E.id]?.toFixed(3)??"…"},E.id))]},_.n))})]})}),d.jsx("p",{className:"muted small",children:"Times in milliseconds."})]})]})}const hg=1,gg=2;function yg(e,n,t){const i=n[3*t],r=n[3*t+1],a=n[3*t+2];if(i===hg){const o=e[r];e[r]=e[a],e[a]=o}else i===gg&&(e[r]=a);return{op:i,i:r,j:a}}function vg({input:e,trace:n,sorted:t,truncated:i}){const r=n.length/3,a=D.useRef([...e]),[o,s]=D.useState(0),[u,p]=D.useState(!0),[y,w]=D.useState(30),[h,S]=D.useState(null),z=Math.min(...e,...t),_=Math.max(...e,...t),E=x=>_===z?60:6+(x-z)/(_-z)*94,f=D.useRef(0);function l(x=1){let j=f.current,N=null;for(let L=0;L<x&&j<r;L++,j++)N=yg(a.current,n,j);f.current=j,N&&S(N),s(j)}D.useEffect(()=>{if(!u||o>=r)return;const x=Math.max(16,1e3/y),j=Math.max(1,Math.round(y*x/1e3)),N=setTimeout(()=>l(j),x);return()=>clearTimeout(N)}),D.useEffect(()=>{o>=r&&p(!1)},[o,r]);function c(){a.current=[...e],f.current=0,s(0),S(null),p(!1)}const m=o>=r,g=m&&a.current.every((x,j)=>x===t[j]),v=x=>m?"bar done":!h||x!==h.i&&(h.op===2||x!==h.j)?"bar":h.op===0?"bar cmp":h.op===1?"bar swap":"bar set",k=h?["compare","swap","set"][h.op]??"":"";return d.jsxs("div",{className:"viz","data-testid":"viz",children:[d.jsx("div",{className:"bars",style:{"--n":a.current.length},"data-testid":"viz-bars",children:a.current.map((x,j)=>d.jsx("div",{className:v(j),style:{height:`${E(x)}%`},title:String(x),"data-value":x},j))}),d.jsxs("div",{className:"viz-controls",children:[d.jsx("button",{type:"button",className:"btn small",onClick:()=>p(x=>!x),disabled:m,"data-testid":"viz-play",children:u?"Pause":"Play"}),d.jsx("button",{type:"button",className:"btn small",onClick:()=>{p(!1),l(1)},disabled:m,"data-testid":"viz-step",children:"Step"}),d.jsx("button",{type:"button",className:"btn small",onClick:c,"data-testid":"viz-reset",children:"Reset"}),d.jsxs("label",{className:"speed",children:["Speed",d.jsx("input",{type:"range",min:1,max:2e3,value:y,onChange:x=>w(Number(x.target.value)),"data-testid":"viz-speed"}),d.jsxs("span",{children:[y," ops/s"]})]})]}),d.jsxs("div",{className:"viz-status small","data-testid":"viz-status",children:["Step ",o.toLocaleString()," / ",r.toLocaleString()," ",k&&!m&&`· ${k}${h?` [${h.i}${h.op===2?` ← ${h.j}`:`, ${h.j}`}]`:""}`,m&&(g?" · ✓ sorted":i?" · trace truncated (too many operations to record)":" · ✗ mismatch")]}),d.jsxs("div",{className:"viz-legend small",children:[d.jsxs("span",{children:[d.jsx("i",{className:"sw cmp"})," compare"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw swap"})," swap"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw set"})," write"]}),d.jsxs("span",{children:[d.jsx("i",{className:"sw done"})," sorted"]})]})]})}const Yn=e=>e.toLocaleString();function wg({algo:e}){const n=Math.min(e.id==="bogo"?6:24,e.maxViz),[t,i]=D.useState(""),[r,a]=D.useState(""),[o,s]=D.useState(null),[u,p]=D.useState(null),[y,w]=D.useState(!1);async function h(E){w(!0),a("");try{const f=await Pl(e.id,E,!1);s({...f,input:E})}catch(f){a(f instanceof Error?f.message:String(f)),s(null)}finally{w(!1)}}function S(E){const f=eg(t,E);return f.ok?f.values:(a(f.error),null)}async function z(){const E=Zc("random",n,Date.now()%1e5,99);i(E.join(", ")),p(null),await h(E)}async function _(){const E=S(e.maxViz);if(E){w(!0),a("");try{const f=await Pl(e.id,E,!0);s({...f,input:E}),p({input:E,trace:f.trace,sorted:f.sorted,truncated:f.truncated,key:Date.now()})}catch(f){a(f instanceof Error?f.message:String(f))}finally{w(!1)}}}return d.jsxs("div",{className:"playground","data-testid":"playground",children:[d.jsxs("p",{className:"muted small",children:["Enter whole numbers separated by commas or spaces (values between -1,000,000,000 and 1,000,000,000). Limits for ",e.name,": up to ",Yn(e.maxInput)," numbers for a plain run, up to ",e.maxViz," for the visualization.",e.id==="counting"&&" Counting sort also needs max - min < 1,000,000."]}),d.jsx("label",{className:"sr-only",htmlFor:"pg-input",children:"Numbers to sort"}),d.jsx("textarea",{id:"pg-input","data-testid":"pg-input",rows:3,value:t,placeholder:"e.g. 5, 3, 9, -2, 7 1 4",onChange:E=>i(E.target.value),"aria-invalid":!!r,"aria-describedby":"pg-error"}),d.jsxs("div",{className:"btn-row",children:[d.jsx("button",{type:"button",className:"btn",onClick:z,disabled:y,"data-testid":"pg-sample",children:"Sort sample data"}),d.jsx("button",{type:"button",className:"btn",onClick:()=>{const E=S(e.maxInput);E&&(p(null),h(E))},disabled:y,"data-testid":"pg-run",children:"Run (no GUI)"}),d.jsx("button",{type:"button",className:"btn primary",onClick:_,disabled:y,"data-testid":"pg-viz",children:"Run with visualization"})]}),d.jsx("p",{id:"pg-error",className:"error",role:"alert","data-testid":"pg-error",children:r}),o&&!r&&d.jsxs("div",{className:"result","data-testid":"pg-result",children:[d.jsxs("div",{className:"stats",children:[d.jsxs("span",{children:[d.jsx("b",{children:"Time"})," ",d.jsxs("span",{"data-testid":"pg-time",children:[o.ms<.1?o.ms.toFixed(3):o.ms.toFixed(2)," ms"]})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Comparisons"})," ",d.jsx("span",{"data-testid":"pg-cmp",children:Yn(o.comparisons)})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Swaps"})," ",d.jsx("span",{"data-testid":"pg-swaps",children:Yn(o.swaps)})]}),d.jsxs("span",{children:[d.jsx("b",{children:"Writes"})," ",Yn(o.writes)]}),d.jsxs("span",{children:[d.jsx("b",{children:"n"})," ",Yn(o.input.length)]})]}),d.jsx("div",{className:"out-label",children:"Sorted output"}),d.jsx("output",{className:"output","data-testid":"pg-output",children:o.sorted.length>2e3?`${o.sorted.slice(0,2e3).join(", ")}, … (${Yn(o.sorted.length-2e3)} more)`:o.sorted.join(", ")}),d.jsx("p",{className:"muted small",children:"Swaps = element exchanges; writes = single-element stores (used by merge, insertion, shell, counting, radix, bucket, cycle and Timsort)."})]}),u&&d.jsx(vg,{input:u.input,trace:u.trace,sorted:u.sorted,truncated:u.truncated},u.key)]})}function _g({algo:e}){const n=xt[e.rank-2],t=xt[e.rank];return d.jsxs("article",{className:"algo","data-testid":"algo-page",children:[d.jsxs("nav",{className:"crumbs",children:[d.jsx("a",{href:"#/",children:"← Index"}),d.jsx("span",{className:"spacer"}),n&&d.jsxs("a",{href:`#/algo/${n.id}`,children:["‹ ",n.name]}),t&&d.jsxs("a",{href:`#/algo/${t.id}`,children:[t.name," ›"]})]}),d.jsxs("h1",{children:[d.jsxs("span",{className:"rank-pill",children:["#",e.rank]})," ",e.name]}),d.jsx("p",{className:"lead",children:e.summary}),d.jsxs("div",{className:"two-col",children:[d.jsxs("section",{className:"card","aria-label":"Algorithm explanation",children:[d.jsx("h2",{children:"How it works"}),d.jsx("ol",{className:"steps",children:e.steps.map(i=>d.jsx("li",{children:i},i))}),d.jsx("h3",{children:"Pseudocode"}),d.jsx("pre",{className:"pseudo",children:e.pseudocode})]}),d.jsxs("section",{className:"card","aria-label":"Code",children:[d.jsx("h2",{children:"Code"}),d.jsx(Xh,{algoId:e.id})]})]}),d.jsxs("section",{className:"card","aria-labelledby":"info-h",children:[d.jsx("h2",{id:"info-h",children:"At a glance"}),d.jsx("div",{className:"table-wrap",children:d.jsx("table",{className:"info","data-testid":"info-table",children:d.jsxs("tbody",{children:[d.jsxs("tr",{children:[d.jsx("th",{children:"Time (best)"}),d.jsx("td",{children:e.best})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Time (average)"}),d.jsx("td",{children:e.avg})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Time (worst)"}),d.jsx("td",{children:e.worst})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Space"}),d.jsx("td",{children:e.space})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Stable"}),d.jsx("td",{children:e.stable?"Yes":"No"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"In-place"}),d.jsx("td",{children:e.inPlace?"Yes":"No"})]}),d.jsxs("tr",{children:[d.jsx("th",{children:"Family"}),d.jsx("td",{children:e.family})]})]})})}),d.jsxs("div",{className:"facts",children:[d.jsxs("div",{children:[d.jsx("h3",{children:"Most suitable when"}),d.jsx("p",{children:e.suitable})]}),d.jsxs("div",{children:[d.jsx("h3",{children:"Performs badly when"}),d.jsx("p",{children:e.bad})]}),d.jsxs("div",{children:[d.jsx("h3",{children:"Practical uses"}),d.jsx("ul",{children:e.uses.map(i=>d.jsx("li",{children:i},i))})]}),d.jsxs("div",{children:[d.jsxs("h3",{children:["Why rank #",e.rank]}),d.jsx("p",{children:e.why})]})]})]}),d.jsxs("div",{className:"two-col",children:[d.jsxs("section",{className:"card",children:[d.jsx("h2",{children:"Complexity growth"}),d.jsx(Jh,{highlight:e.growth})]}),d.jsxs("section",{className:"card",children:[d.jsx("h2",{children:"Measured benchmark (WASM)"}),d.jsx(mg,{algo:e})]})]}),d.jsxs("section",{className:"card","aria-labelledby":"play-h",children:[d.jsx("h2",{id:"play-h",children:"Playground"}),d.jsx(wg,{algo:e})]})]})}function kg(){const e=Np(),n=e.page==="algo"?Op[e.id]:void 0;return D.useEffect(()=>{document.title=n?`${n.name} · Sort Pedia`:"Sort Pedia",window.scrollTo(0,0)},[n]),d.jsxs(d.Fragment,{children:[d.jsxs("header",{className:"topbar",children:[d.jsx("a",{className:"brand",href:"#/",children:"Sort Pedia"}),d.jsxs("label",{className:"jump",children:[d.jsx("span",{className:"sr-only",children:"Jump to algorithm"}),d.jsxs("select",{"aria-label":"Jump to algorithm","data-testid":"jump-select",value:n?.id??"",onChange:t=>{t.target.value&&(window.location.hash=`#/algo/${t.target.value}`)},children:[d.jsx("option",{value:"",children:"Jump to algorithm…"}),xt.map(t=>d.jsxs("option",{value:t.id,children:[t.rank,". ",t.name]},t.id))]})]}),d.jsx(Yh,{})]}),d.jsx("main",{className:"container",children:e.page==="algo"&&!n?d.jsxs("div",{className:"card",children:[d.jsx("h2",{children:"Unknown algorithm"}),d.jsx("p",{children:d.jsx("a",{href:"#/",children:"Back to the index"})})]}):n?d.jsx(_g,{algo:n},n.id):d.jsx(Tp,{})}),d.jsxs("footer",{className:"footer",children:["All sorting runs in Rust compiled to WebAssembly. ",d.jsx("a",{href:"https://github.com/abhi1kush/sort-pedia",children:"Source on GitHub"})]})]})}Hc(document.getElementById("root")).render(d.jsx(D.StrictMode,{children:d.jsx(kg,{})}));
