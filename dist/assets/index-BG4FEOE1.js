function oy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ly(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Tp={exports:{}},gl={},xp={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),ay=Symbol.for("react.portal"),uy=Symbol.for("react.fragment"),cy=Symbol.for("react.strict_mode"),dy=Symbol.for("react.profiler"),hy=Symbol.for("react.provider"),fy=Symbol.for("react.context"),py=Symbol.for("react.forward_ref"),my=Symbol.for("react.suspense"),gy=Symbol.for("react.memo"),vy=Symbol.for("react.lazy"),qd=Symbol.iterator;function _y(t){return t===null||typeof t!="object"?null:(t=qd&&t[qd]||t["@@iterator"],typeof t=="function"?t:null)}var Rp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Np=Object.assign,Pp={};function Zr(t,e,n){this.props=t,this.context=e,this.refs=Pp,this.updater=n||Rp}Zr.prototype.isReactComponent={};Zr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bp(){}bp.prototype=Zr.prototype;function rc(t,e,n){this.props=t,this.context=e,this.refs=Pp,this.updater=n||Rp}var ic=rc.prototype=new bp;ic.constructor=rc;Np(ic,Zr.prototype);ic.isPureReactComponent=!0;var Yd=Array.isArray,Ap=Object.prototype.hasOwnProperty,sc={current:null},Op={key:!0,ref:!0,__self:!0,__source:!0};function Dp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ap.call(e,r)&&!Op.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_s,type:t,key:s,ref:o,props:i,_owner:sc.current}}function yy(t,e){return{$$typeof:_s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function oc(t){return typeof t=="object"&&t!==null&&t.$$typeof===_s}function wy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jd=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wy(""+t.key):e.toString(36)}function so(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _s:case ay:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xl(o,0):r,Yd(i)?(n="",t!=null&&(n=t.replace(Jd,"$&/")+"/"),so(i,e,n,"",function(u){return u})):i!=null&&(oc(i)&&(i=yy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Xl(s,l);o+=so(s,e,n,a,i)}else if(a=_y(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Xl(s,l++),o+=so(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Us(t,e,n){if(t==null)return t;var r=[],i=0;return so(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Sy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},oo={transition:null},Ey={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:oo,ReactCurrentOwner:sc};function Lp(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Us,forEach:function(t,e,n){Us(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Us(t,function(){e++}),e},toArray:function(t){return Us(t,function(e){return e})||[]},only:function(t){if(!oc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Zr;W.Fragment=uy;W.Profiler=dy;W.PureComponent=rc;W.StrictMode=cy;W.Suspense=my;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey;W.act=Lp;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Np({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Ap.call(e,a)&&!Op.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_s,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:fy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hy,_context:t},t.Consumer=t};W.createElement=Dp;W.createFactory=function(t){var e=Dp.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:py,render:t}};W.isValidElement=oc;W.lazy=function(t){return{$$typeof:vy,_payload:{_status:-1,_result:t},_init:Sy}};W.memo=function(t,e){return{$$typeof:gy,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=oo.transition;oo.transition={};try{t()}finally{oo.transition=e}};W.unstable_act=Lp;W.useCallback=function(t,e){return We.current.useCallback(t,e)};W.useContext=function(t){return We.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return We.current.useDeferredValue(t)};W.useEffect=function(t,e){return We.current.useEffect(t,e)};W.useId=function(){return We.current.useId()};W.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return We.current.useMemo(t,e)};W.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};W.useRef=function(t){return We.current.useRef(t)};W.useState=function(t){return We.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return We.current.useTransition()};W.version="18.3.1";xp.exports=W;var S=xp.exports;const Mp=ly(S),Cy=oy({__proto__:null,default:Mp},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy=S,ky=Symbol.for("react.element"),Ty=Symbol.for("react.fragment"),xy=Object.prototype.hasOwnProperty,Ry=Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ny={key:!0,ref:!0,__self:!0,__source:!0};function Fp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xy.call(e,r)&&!Ny.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ky,type:t,key:s,ref:o,props:i,_owner:Ry.current}}gl.Fragment=Ty;gl.jsx=Fp;gl.jsxs=Fp;Tp.exports=gl;var f=Tp.exports,Ua={},jp={exports:{}},tt={},Up={exports:{}},zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,M){var j=N.length;N.push(M);e:for(;0<j;){var de=j-1>>>1,Se=N[de];if(0<i(Se,M))N[de]=M,N[j]=Se,j=de;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],j=N.pop();if(j!==M){N[0]=j;e:for(var de=0,Se=N.length,Fs=Se>>>1;de<Fs;){var Fn=2*(de+1)-1,Jl=N[Fn],jn=Fn+1,js=N[jn];if(0>i(Jl,j))jn<Se&&0>i(js,Jl)?(N[de]=js,N[jn]=j,de=jn):(N[de]=Jl,N[Fn]=j,de=Fn);else if(jn<Se&&0>i(js,j))N[de]=js,N[jn]=j,de=jn;else break e}}return M}function i(N,M){var j=N.sortIndex-M.sortIndex;return j!==0?j:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,v=!1,_=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=N)r(u),M.sortIndex=M.expirationTime,e(a,M);else break;M=n(u)}}function w(N){if(y=!1,m(N),!_)if(n(a)!==null)_=!0,le(I);else{var M=n(u);M!==null&&rt(w,M.startTime-N)}}function I(N,M){_=!1,y&&(y=!1,g(b),b=-1),v=!0;var j=h;try{for(m(M),c=n(a);c!==null&&(!(c.expirationTime>M)||N&&!pe());){var de=c.callback;if(typeof de=="function"){c.callback=null,h=c.priorityLevel;var Se=de(c.expirationTime<=M);M=t.unstable_now(),typeof Se=="function"?c.callback=Se:c===n(a)&&r(a),m(M)}else r(a);c=n(a)}if(c!==null)var Fs=!0;else{var Fn=n(u);Fn!==null&&rt(w,Fn.startTime-M),Fs=!1}return Fs}finally{c=null,h=j,v=!1}}var R=!1,x=null,b=-1,F=5,O=-1;function pe(){return!(t.unstable_now()-O<F)}function Ye(){if(x!==null){var N=t.unstable_now();O=N;var M=!0;try{M=x(!0,N)}finally{M?K():(R=!1,x=null)}}else R=!1}var K;if(typeof p=="function")K=function(){p(Ye)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,J=T.port2;T.port1.onmessage=Ye,K=function(){J.postMessage(null)}}else K=function(){E(Ye,0)};function le(N){x=N,R||(R=!0,K())}function rt(N,M){b=E(function(){N(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,le(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var j=h;h=M;try{return N()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=h;h=N;try{return M()}finally{h=j}},t.unstable_scheduleCallback=function(N,M,j){var de=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?de+j:de):j=de,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=j+Se,N={id:d++,callback:M,priorityLevel:N,startTime:j,expirationTime:Se,sortIndex:-1},j>de?(N.sortIndex=j,e(u,N),n(a)===null&&N===n(u)&&(y?(g(b),b=-1):y=!0,rt(w,j-de))):(N.sortIndex=Se,e(a,N),_||v||(_=!0,le(I))),N},t.unstable_shouldYield=pe,t.unstable_wrapCallback=function(N){var M=h;return function(){var j=h;h=M;try{return N.apply(this,arguments)}finally{h=j}}}})(zp);Up.exports=zp;var Py=Up.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by=S,et=Py;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bp=new Set,Bi={};function or(t,e){Ur(t,e),Ur(t+"Capture",e)}function Ur(t,e){for(Bi[t]=e,t=0;t<e.length;t++)Bp.add(e[t])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),za=Object.prototype.hasOwnProperty,Ay=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xd={},Zd={};function Oy(t){return za.call(Zd,t)?!0:za.call(Xd,t)?!1:Ay.test(t)?Zd[t]=!0:(Xd[t]=!0,!1)}function Dy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ly(t,e,n,r){if(e===null||typeof e>"u"||Dy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ve(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ne[t]=new Ve(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ne[e]=new Ve(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ne[t]=new Ve(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ne[t]=new Ve(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ne[t]=new Ve(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ne[t]=new Ve(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ne[t]=new Ve(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ne[t]=new Ve(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ne[t]=new Ve(t,5,!1,t.toLowerCase(),null,!1,!1)});var lc=/[\-:]([a-z])/g;function ac(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lc,ac);Ne[e]=new Ve(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lc,ac);Ne[e]=new Ve(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lc,ac);Ne[e]=new Ve(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ne[t]=new Ve(t,1,!1,t.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ne[t]=new Ve(t,1,!1,t.toLowerCase(),null,!0,!0)});function uc(t,e,n,r){var i=Ne.hasOwnProperty(e)?Ne[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ly(e,n,i,r)&&(n=null),r||i===null?Oy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yt=by.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zs=Symbol.for("react.element"),pr=Symbol.for("react.portal"),mr=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),Ba=Symbol.for("react.profiler"),Wp=Symbol.for("react.provider"),Vp=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),Wa=Symbol.for("react.suspense"),Va=Symbol.for("react.suspense_list"),hc=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Hp=Symbol.for("react.offscreen"),eh=Symbol.iterator;function ci(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Zl;function Ei(t){if(Zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+t}var ea=!1;function ta(t,e){if(!t||ea)return"";ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ea=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ei(t):""}function My(t){switch(t.tag){case 5:return Ei(t.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 2:case 15:return t=ta(t.type,!1),t;case 11:return t=ta(t.type.render,!1),t;case 1:return t=ta(t.type,!0),t;default:return""}}function Ha(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mr:return"Fragment";case pr:return"Portal";case Ba:return"Profiler";case cc:return"StrictMode";case Wa:return"Suspense";case Va:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vp:return(t.displayName||"Context")+".Consumer";case Wp:return(t._context.displayName||"Context")+".Provider";case dc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hc:return e=t.displayName||null,e!==null?e:Ha(t.type)||"Memo";case en:e=t._payload,t=t._init;try{return Ha(t(e))}catch{}}return null}function Fy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ha(e);case 8:return e===cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $p(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jy(t){var e=$p(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bs(t){t._valueTracker||(t._valueTracker=jy(t))}function Gp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$p(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Co(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $a(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function th(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Kp(t,e){e=e.checked,e!=null&&uc(t,"checked",e,!1)}function Ga(t,e){Kp(t,e);var n=xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ka(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ka(t,e.type,xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ka(t,e,n){(e!=="number"||Co(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ci=Array.isArray;function Rr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Ci(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xn(n)}}function Qp(t,e){var n=xn(e.value),r=xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ws,Yp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ws=Ws||document.createElement("div"),Ws.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ws.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uy=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(t){Uy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ti[e]=Ti[t]})});function Jp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ti.hasOwnProperty(t)&&Ti[t]?(""+e).trim():e+"px"}function Xp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zy=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ya(t,e){if(e){if(zy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Ja(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function fc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Za=null,Nr=null,Pr=null;function sh(t){if(t=Ss(t)){if(typeof Za!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Sl(e),Za(t.stateNode,t.type,e))}}function Zp(t){Nr?Pr?Pr.push(t):Pr=[t]:Nr=t}function em(){if(Nr){var t=Nr,e=Pr;if(Pr=Nr=null,sh(t),e)for(t=0;t<e.length;t++)sh(e[t])}}function tm(t,e){return t(e)}function nm(){}var na=!1;function rm(t,e,n){if(na)return t(e,n);na=!0;try{return tm(t,e,n)}finally{na=!1,(Nr!==null||Pr!==null)&&(nm(),em())}}function Vi(t,e){var n=t.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var eu=!1;if(Wt)try{var di={};Object.defineProperty(di,"passive",{get:function(){eu=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{eu=!1}function By(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var xi=!1,Io=null,ko=!1,tu=null,Wy={onError:function(t){xi=!0,Io=t}};function Vy(t,e,n,r,i,s,o,l,a){xi=!1,Io=null,By.apply(Wy,arguments)}function Hy(t,e,n,r,i,s,o,l,a){if(Vy.apply(this,arguments),xi){if(xi){var u=Io;xi=!1,Io=null}else throw Error(C(198));ko||(ko=!0,tu=u)}}function lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function im(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oh(t){if(lr(t)!==t)throw Error(C(188))}function $y(t){var e=t.alternate;if(!e){if(e=lr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return oh(i),t;if(s===r)return oh(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function sm(t){return t=$y(t),t!==null?om(t):null}function om(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=om(t);if(e!==null)return e;t=t.sibling}return null}var lm=et.unstable_scheduleCallback,lh=et.unstable_cancelCallback,Gy=et.unstable_shouldYield,Ky=et.unstable_requestPaint,fe=et.unstable_now,Qy=et.unstable_getCurrentPriorityLevel,pc=et.unstable_ImmediatePriority,am=et.unstable_UserBlockingPriority,To=et.unstable_NormalPriority,qy=et.unstable_LowPriority,um=et.unstable_IdlePriority,vl=null,Tt=null;function Yy(t){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(vl,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Zy,Jy=Math.log,Xy=Math.LN2;function Zy(t){return t>>>=0,t===0?32:31-(Jy(t)/Xy|0)|0}var Vs=64,Hs=4194304;function Ii(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ii(l):(s&=o,s!==0&&(r=Ii(s)))}else o=n&~i,o!==0?r=Ii(o):s!==0&&(r=Ii(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yt(e),i=1<<n,r|=t[n],e&=~i;return r}function e0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=e0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cm(){var t=Vs;return Vs<<=1,!(Vs&4194240)&&(Vs=64),t}function ra(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ys(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yt(e),t[e]=n}function n0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function mc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function dm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hm,gc,fm,pm,mm,ru=!1,$s=[],fn=null,pn=null,mn=null,Hi=new Map,$i=new Map,nn=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(t,e){switch(t){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":Hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(e.pointerId)}}function hi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ss(e),e!==null&&gc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function i0(t,e,n,r,i){switch(e){case"focusin":return fn=hi(fn,t,e,n,r,i),!0;case"dragenter":return pn=hi(pn,t,e,n,r,i),!0;case"mouseover":return mn=hi(mn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hi.set(s,hi(Hi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$i.set(s,hi($i.get(s)||null,t,e,n,r,i)),!0}return!1}function gm(t){var e=Vn(t.target);if(e!==null){var n=lr(e);if(n!==null){if(e=n.tag,e===13){if(e=im(n),e!==null){t.blockedOn=e,mm(t.priority,function(){fm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xa=r,n.target.dispatchEvent(r),Xa=null}else return e=Ss(n),e!==null&&gc(e),t.blockedOn=n,!1;e.shift()}return!0}function uh(t,e,n){lo(t)&&n.delete(e)}function s0(){ru=!1,fn!==null&&lo(fn)&&(fn=null),pn!==null&&lo(pn)&&(pn=null),mn!==null&&lo(mn)&&(mn=null),Hi.forEach(uh),$i.forEach(uh)}function fi(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,s0)))}function Gi(t){function e(i){return fi(i,t)}if(0<$s.length){fi($s[0],t);for(var n=1;n<$s.length;n++){var r=$s[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fn!==null&&fi(fn,t),pn!==null&&fi(pn,t),mn!==null&&fi(mn,t),Hi.forEach(e),$i.forEach(e),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)gm(n),n.blockedOn===null&&nn.shift()}var br=Yt.ReactCurrentBatchConfig,Ro=!0;function o0(t,e,n,r){var i=G,s=br.transition;br.transition=null;try{G=1,vc(t,e,n,r)}finally{G=i,br.transition=s}}function l0(t,e,n,r){var i=G,s=br.transition;br.transition=null;try{G=4,vc(t,e,n,r)}finally{G=i,br.transition=s}}function vc(t,e,n,r){if(Ro){var i=iu(t,e,n,r);if(i===null)fa(t,e,r,No,n),ah(t,r);else if(i0(i,t,e,n,r))r.stopPropagation();else if(ah(t,r),e&4&&-1<r0.indexOf(t)){for(;i!==null;){var s=Ss(i);if(s!==null&&hm(s),s=iu(t,e,n,r),s===null&&fa(t,e,r,No,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fa(t,e,r,null,n)}}var No=null;function iu(t,e,n,r){if(No=null,t=fc(r),t=Vn(t),t!==null)if(e=lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=im(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return No=t,null}function vm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qy()){case pc:return 1;case am:return 4;case To:case qy:return 16;case um:return 536870912;default:return 16}default:return 16}}var un=null,_c=null,ao=null;function _m(){if(ao)return ao;var t,e=_c,n=e.length,r,i="value"in un?un.value:un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ao=i.slice(t,1<r?1-r:void 0)}function uo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gs(){return!0}function ch(){return!1}function nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gs:ch,this.isPropagationStopped=ch,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),e}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=nt(ei),ws=oe({},ei,{view:0,detail:0}),a0=nt(ws),ia,sa,pi,_l=oe({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pi&&(pi&&t.type==="mousemove"?(ia=t.screenX-pi.screenX,sa=t.screenY-pi.screenY):sa=ia=0,pi=t),ia)},movementY:function(t){return"movementY"in t?t.movementY:sa}}),dh=nt(_l),u0=oe({},_l,{dataTransfer:0}),c0=nt(u0),d0=oe({},ws,{relatedTarget:0}),oa=nt(d0),h0=oe({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),f0=nt(h0),p0=oe({},ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m0=nt(p0),g0=oe({},ei,{data:0}),hh=nt(g0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y0[t])?!!e[t]:!1}function wc(){return w0}var S0=oe({},ws,{key:function(t){if(t.key){var e=v0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(t){return t.type==="keypress"?uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),E0=nt(S0),C0=oe({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=nt(C0),I0=oe({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),k0=nt(I0),T0=oe({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),x0=nt(T0),R0=oe({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=nt(R0),P0=[9,13,27,32],Sc=Wt&&"CompositionEvent"in window,Ri=null;Wt&&"documentMode"in document&&(Ri=document.documentMode);var b0=Wt&&"TextEvent"in window&&!Ri,ym=Wt&&(!Sc||Ri&&8<Ri&&11>=Ri),ph=" ",mh=!1;function wm(t,e){switch(t){case"keyup":return P0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gr=!1;function A0(t,e){switch(t){case"compositionend":return Sm(e);case"keypress":return e.which!==32?null:(mh=!0,ph);case"textInput":return t=e.data,t===ph&&mh?null:t;default:return null}}function O0(t,e){if(gr)return t==="compositionend"||!Sc&&wm(t,e)?(t=_m(),ao=_c=un=null,gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ym&&e.locale!=="ko"?null:e.data;default:return null}}var D0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!D0[t.type]:e==="textarea"}function Em(t,e,n,r){Zp(r),e=Po(e,"onChange"),0<e.length&&(n=new yc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ni=null,Ki=null;function L0(t){Om(t,0)}function yl(t){var e=yr(t);if(Gp(e))return t}function M0(t,e){if(t==="change")return e}var Cm=!1;if(Wt){var la;if(Wt){var aa="oninput"in document;if(!aa){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),aa=typeof vh.oninput=="function"}la=aa}else la=!1;Cm=la&&(!document.documentMode||9<document.documentMode)}function _h(){Ni&&(Ni.detachEvent("onpropertychange",Im),Ki=Ni=null)}function Im(t){if(t.propertyName==="value"&&yl(Ki)){var e=[];Em(e,Ki,t,fc(t)),rm(L0,e)}}function F0(t,e,n){t==="focusin"?(_h(),Ni=e,Ki=n,Ni.attachEvent("onpropertychange",Im)):t==="focusout"&&_h()}function j0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(Ki)}function U0(t,e){if(t==="click")return yl(e)}function z0(t,e){if(t==="input"||t==="change")return yl(e)}function B0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Et=typeof Object.is=="function"?Object.is:B0;function Qi(t,e){if(Et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!za.call(e,i)||!Et(t[i],e[i]))return!1}return!0}function yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wh(t,e){var n=yh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yh(n)}}function km(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?km(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tm(){for(var t=window,e=Co();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Co(t.document)}return e}function Ec(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function W0(t){var e=Tm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&km(n.ownerDocument.documentElement,n)){if(r!==null&&Ec(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=wh(n,s);var o=wh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var V0=Wt&&"documentMode"in document&&11>=document.documentMode,vr=null,su=null,Pi=null,ou=!1;function Sh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||vr==null||vr!==Co(r)||(r=vr,"selectionStart"in r&&Ec(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pi&&Qi(Pi,r)||(Pi=r,r=Po(su,"onSelect"),0<r.length&&(e=new yc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vr)))}function Ks(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _r={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},ua={},xm={};Wt&&(xm=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function wl(t){if(ua[t])return ua[t];if(!_r[t])return t;var e=_r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xm)return ua[t]=e[n];return t}var Rm=wl("animationend"),Nm=wl("animationiteration"),Pm=wl("animationstart"),bm=wl("transitionend"),Am=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,e){Am.set(t,e),or(e,[t])}for(var ca=0;ca<Eh.length;ca++){var da=Eh[ca],H0=da.toLowerCase(),$0=da[0].toUpperCase()+da.slice(1);On(H0,"on"+$0)}On(Rm,"onAnimationEnd");On(Nm,"onAnimationIteration");On(Pm,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(bm,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ki));function Ch(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Hy(r,e,void 0,t),t.currentTarget=null}function Om(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Ch(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Ch(i,l,u),s=a}}}if(ko)throw t=tu,ko=!1,tu=null,t}function te(t,e){var n=e[du];n===void 0&&(n=e[du]=new Set);var r=t+"__bubble";n.has(r)||(Dm(e,t,2,!1),n.add(r))}function ha(t,e,n){var r=0;e&&(r|=4),Dm(n,t,r,e)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function qi(t){if(!t[Qs]){t[Qs]=!0,Bp.forEach(function(n){n!=="selectionchange"&&(G0.has(n)||ha(n,!1,t),ha(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qs]||(e[Qs]=!0,ha("selectionchange",!1,e))}}function Dm(t,e,n,r){switch(vm(e)){case 1:var i=o0;break;case 4:i=l0;break;default:i=vc}n=i.bind(null,e,n,t),i=void 0,!eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}rm(function(){var u=s,d=fc(n),c=[];e:{var h=Am.get(t);if(h!==void 0){var v=yc,_=t;switch(t){case"keypress":if(uo(n)===0)break e;case"keydown":case"keyup":v=E0;break;case"focusin":_="focus",v=oa;break;case"focusout":_="blur",v=oa;break;case"beforeblur":case"afterblur":v=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=c0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=k0;break;case Rm:case Nm:case Pm:v=f0;break;case bm:v=x0;break;case"scroll":v=a0;break;case"wheel":v=N0;break;case"copy":case"cut":case"paste":v=m0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=fh}var y=(e&4)!==0,E=!y&&t==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var p=u,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=Vi(p,g),w!=null&&y.push(Yi(p,w,m)))),E)break;p=p.return}0<y.length&&(h=new v(h,_,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==Xa&&(_=n.relatedTarget||n.fromElement)&&(Vn(_)||_[Vt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?Vn(_):null,_!==null&&(E=lr(_),_!==E||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(y=dh,w="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=fh,w="onPointerLeave",g="onPointerEnter",p="pointer"),E=v==null?h:yr(v),m=_==null?h:yr(_),h=new y(w,p+"leave",v,n,d),h.target=E,h.relatedTarget=m,w=null,Vn(d)===u&&(y=new y(g,p+"enter",_,n,d),y.target=m,y.relatedTarget=E,w=y),E=w,v&&_)t:{for(y=v,g=_,p=0,m=y;m;m=dr(m))p++;for(m=0,w=g;w;w=dr(w))m++;for(;0<p-m;)y=dr(y),p--;for(;0<m-p;)g=dr(g),m--;for(;p--;){if(y===g||g!==null&&y===g.alternate)break t;y=dr(y),g=dr(g)}y=null}else y=null;v!==null&&Ih(c,h,v,y,!1),_!==null&&E!==null&&Ih(c,E,_,y,!0)}}e:{if(h=u?yr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var I=M0;else if(gh(h))if(Cm)I=z0;else{I=j0;var R=F0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=U0);if(I&&(I=I(t,u))){Em(c,I,n,d);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Ka(h,"number",h.value)}switch(R=u?yr(u):window,t){case"focusin":(gh(R)||R.contentEditable==="true")&&(vr=R,su=u,Pi=null);break;case"focusout":Pi=su=vr=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Sh(c,n,d);break;case"selectionchange":if(V0)break;case"keydown":case"keyup":Sh(c,n,d)}var x;if(Sc)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else gr?wm(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(ym&&n.locale!=="ko"&&(gr||b!=="onCompositionStart"?b==="onCompositionEnd"&&gr&&(x=_m()):(un=d,_c="value"in un?un.value:un.textContent,gr=!0)),R=Po(u,b),0<R.length&&(b=new hh(b,t,null,n,d),c.push({event:b,listeners:R}),x?b.data=x:(x=Sm(n),x!==null&&(b.data=x)))),(x=b0?A0(t,n):O0(t,n))&&(u=Po(u,"onBeforeInput"),0<u.length&&(d=new hh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=x))}Om(c,e)})}function Yi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Po(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vi(t,n),s!=null&&r.unshift(Yi(t,s,i)),s=Vi(t,e),s!=null&&r.push(Yi(t,s,i))),t=t.return}return r}function dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ih(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Vi(n,s),a!=null&&o.unshift(Yi(n,a,l))):i||(a=Vi(n,s),a!=null&&o.push(Yi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var K0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function kh(t){return(typeof t=="string"?t:""+t).replace(K0,`
`).replace(Q0,"")}function qs(t,e,n){if(e=kh(e),kh(t)!==e&&n)throw Error(C(425))}function bo(){}var lu=null,au=null;function uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(t){return Th.resolve(null).then(t).catch(J0)}:cu;function J0(t){setTimeout(function(){throw t})}function pa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Gi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gi(e)}function gn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ti=Math.random().toString(36).slice(2),kt="__reactFiber$"+ti,Ji="__reactProps$"+ti,Vt="__reactContainer$"+ti,du="__reactEvents$"+ti,X0="__reactListeners$"+ti,Z0="__reactHandles$"+ti;function Vn(t){var e=t[kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vt]||n[kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xh(t);t!==null;){if(n=t[kt])return n;t=xh(t)}return e}t=n,n=t.parentNode}return null}function Ss(t){return t=t[kt]||t[Vt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Sl(t){return t[Ji]||null}var hu=[],wr=-1;function Dn(t){return{current:t}}function ne(t){0>wr||(t.current=hu[wr],hu[wr]=null,wr--)}function ee(t,e){wr++,hu[wr]=t.current,t.current=e}var Rn={},De=Dn(Rn),Ke=Dn(!1),Yn=Rn;function zr(t,e){var n=t.type.contextTypes;if(!n)return Rn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(t){return t=t.childContextTypes,t!=null}function Ao(){ne(Ke),ne(De)}function Rh(t,e,n){if(De.current!==Rn)throw Error(C(168));ee(De,e),ee(Ke,n)}function Lm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,Fy(t)||"Unknown",i));return oe({},n,r)}function Oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rn,Yn=De.current,ee(De,t),ee(Ke,Ke.current),!0}function Nh(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=Lm(t,e,Yn),r.__reactInternalMemoizedMergedChildContext=t,ne(Ke),ne(De),ee(De,t)):ne(Ke),ee(Ke,n)}var At=null,El=!1,ma=!1;function Mm(t){At===null?At=[t]:At.push(t)}function ew(t){El=!0,Mm(t)}function Ln(){if(!ma&&At!==null){ma=!0;var t=0,e=G;try{var n=At;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}At=null,El=!1}catch(i){throw At!==null&&(At=At.slice(t+1)),lm(pc,Ln),i}finally{G=e,ma=!1}}return null}var Sr=[],Er=0,Do=null,Lo=0,it=[],st=0,Jn=null,Ot=1,Dt="";function Un(t,e){Sr[Er++]=Lo,Sr[Er++]=Do,Do=t,Lo=e}function Fm(t,e,n){it[st++]=Ot,it[st++]=Dt,it[st++]=Jn,Jn=t;var r=Ot;t=Dt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ot=1<<32-yt(e)+i|n<<i|r,Dt=s+t}else Ot=1<<s|n<<i|r,Dt=t}function Cc(t){t.return!==null&&(Un(t,1),Fm(t,1,0))}function Ic(t){for(;t===Do;)Do=Sr[--Er],Sr[Er]=null,Lo=Sr[--Er],Sr[Er]=null;for(;t===Jn;)Jn=it[--st],it[st]=null,Dt=it[--st],it[st]=null,Ot=it[--st],it[st]=null}var Ze=null,Xe=null,re=!1,gt=null;function jm(t,e){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ph(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Xe=gn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jn!==null?{id:Ot,overflow:Dt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Xe=null,!0):!1;default:return!1}}function fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(re){var e=Xe;if(e){var n=e;if(!Ph(t,e)){if(fu(t))throw Error(C(418));e=gn(n.nextSibling);var r=Ze;e&&Ph(t,e)?jm(r,n):(t.flags=t.flags&-4097|2,re=!1,Ze=t)}}else{if(fu(t))throw Error(C(418));t.flags=t.flags&-4097|2,re=!1,Ze=t}}}function bh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function Ys(t){if(t!==Ze)return!1;if(!re)return bh(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uu(t.type,t.memoizedProps)),e&&(e=Xe)){if(fu(t))throw Um(),Error(C(418));for(;e;)jm(t,e),e=gn(e.nextSibling)}if(bh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xe=gn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xe=null}}else Xe=Ze?gn(t.stateNode.nextSibling):null;return!0}function Um(){for(var t=Xe;t;)t=gn(t.nextSibling)}function Br(){Xe=Ze=null,re=!1}function kc(t){gt===null?gt=[t]:gt.push(t)}var tw=Yt.ReactCurrentBatchConfig;function mi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Js(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ah(t){var e=t._init;return e(t._payload)}function zm(t){function e(g,p){if(t){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=wn(g,p),g.index=0,g.sibling=null,g}function s(g,p,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,p,m,w){return p===null||p.tag!==6?(p=Ea(m,g.mode,w),p.return=g,p):(p=i(p,m),p.return=g,p)}function a(g,p,m,w){var I=m.type;return I===mr?d(g,p,m.props.children,w,m.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===en&&Ah(I)===p.type)?(w=i(p,m.props),w.ref=mi(g,p,m),w.return=g,w):(w=vo(m.type,m.key,m.props,null,g.mode,w),w.ref=mi(g,p,m),w.return=g,w)}function u(g,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ca(m,g.mode,w),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function d(g,p,m,w,I){return p===null||p.tag!==7?(p=Qn(m,g.mode,w,I),p.return=g,p):(p=i(p,m),p.return=g,p)}function c(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ea(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zs:return m=vo(p.type,p.key,p.props,null,g.mode,m),m.ref=mi(g,null,p),m.return=g,m;case pr:return p=Ca(p,g.mode,m),p.return=g,p;case en:var w=p._init;return c(g,w(p._payload),m)}if(Ci(p)||ci(p))return p=Qn(p,g.mode,m,null),p.return=g,p;Js(g,p)}return null}function h(g,p,m,w){var I=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:l(g,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case zs:return m.key===I?a(g,p,m,w):null;case pr:return m.key===I?u(g,p,m,w):null;case en:return I=m._init,h(g,p,I(m._payload),w)}if(Ci(m)||ci(m))return I!==null?null:d(g,p,m,w,null);Js(g,m)}return null}function v(g,p,m,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,l(p,g,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case zs:return g=g.get(w.key===null?m:w.key)||null,a(p,g,w,I);case pr:return g=g.get(w.key===null?m:w.key)||null,u(p,g,w,I);case en:var R=w._init;return v(g,p,m,R(w._payload),I)}if(Ci(w)||ci(w))return g=g.get(m)||null,d(p,g,w,I,null);Js(p,w)}return null}function _(g,p,m,w){for(var I=null,R=null,x=p,b=p=0,F=null;x!==null&&b<m.length;b++){x.index>b?(F=x,x=null):F=x.sibling;var O=h(g,x,m[b],w);if(O===null){x===null&&(x=F);break}t&&x&&O.alternate===null&&e(g,x),p=s(O,p,b),R===null?I=O:R.sibling=O,R=O,x=F}if(b===m.length)return n(g,x),re&&Un(g,b),I;if(x===null){for(;b<m.length;b++)x=c(g,m[b],w),x!==null&&(p=s(x,p,b),R===null?I=x:R.sibling=x,R=x);return re&&Un(g,b),I}for(x=r(g,x);b<m.length;b++)F=v(x,g,b,m[b],w),F!==null&&(t&&F.alternate!==null&&x.delete(F.key===null?b:F.key),p=s(F,p,b),R===null?I=F:R.sibling=F,R=F);return t&&x.forEach(function(pe){return e(g,pe)}),re&&Un(g,b),I}function y(g,p,m,w){var I=ci(m);if(typeof I!="function")throw Error(C(150));if(m=I.call(m),m==null)throw Error(C(151));for(var R=I=null,x=p,b=p=0,F=null,O=m.next();x!==null&&!O.done;b++,O=m.next()){x.index>b?(F=x,x=null):F=x.sibling;var pe=h(g,x,O.value,w);if(pe===null){x===null&&(x=F);break}t&&x&&pe.alternate===null&&e(g,x),p=s(pe,p,b),R===null?I=pe:R.sibling=pe,R=pe,x=F}if(O.done)return n(g,x),re&&Un(g,b),I;if(x===null){for(;!O.done;b++,O=m.next())O=c(g,O.value,w),O!==null&&(p=s(O,p,b),R===null?I=O:R.sibling=O,R=O);return re&&Un(g,b),I}for(x=r(g,x);!O.done;b++,O=m.next())O=v(x,g,b,O.value,w),O!==null&&(t&&O.alternate!==null&&x.delete(O.key===null?b:O.key),p=s(O,p,b),R===null?I=O:R.sibling=O,R=O);return t&&x.forEach(function(Ye){return e(g,Ye)}),re&&Un(g,b),I}function E(g,p,m,w){if(typeof m=="object"&&m!==null&&m.type===mr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case zs:e:{for(var I=m.key,R=p;R!==null;){if(R.key===I){if(I=m.type,I===mr){if(R.tag===7){n(g,R.sibling),p=i(R,m.props.children),p.return=g,g=p;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===en&&Ah(I)===R.type){n(g,R.sibling),p=i(R,m.props),p.ref=mi(g,R,m),p.return=g,g=p;break e}n(g,R);break}else e(g,R);R=R.sibling}m.type===mr?(p=Qn(m.props.children,g.mode,w,m.key),p.return=g,g=p):(w=vo(m.type,m.key,m.props,null,g.mode,w),w.ref=mi(g,p,m),w.return=g,g=w)}return o(g);case pr:e:{for(R=m.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Ca(m,g.mode,w),p.return=g,g=p}return o(g);case en:return R=m._init,E(g,p,R(m._payload),w)}if(Ci(m))return _(g,p,m,w);if(ci(m))return y(g,p,m,w);Js(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=Ea(m,g.mode,w),p.return=g,g=p),o(g)):n(g,p)}return E}var Wr=zm(!0),Bm=zm(!1),Mo=Dn(null),Fo=null,Cr=null,Tc=null;function xc(){Tc=Cr=Fo=null}function Rc(t){var e=Mo.current;ne(Mo),t._currentValue=e}function mu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ar(t,e){Fo=t,Tc=Cr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(Tc!==t)if(t={context:t,memoizedValue:e,next:null},Cr===null){if(Fo===null)throw Error(C(308));Cr=t,Fo.dependencies={lanes:0,firstContext:t}}else Cr=Cr.next=t;return e}var Hn=null;function Nc(t){Hn===null?Hn=[t]:Hn.push(t)}function Wm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ht(t,r)}function Ht(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tn=!1;function Pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ht(t,n)}return i=r.interleaved,i===null?(e.next=e,Nc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ht(t,n)}function co(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,mc(t,n)}}function Oh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jo(t,e,n,r){var i=t.updateQueue;tn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(v,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,c,h):_,h==null)break e;c=oe({},c,h);break e;case 2:tn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,a=c):d=d.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zn|=o,t.lanes=o,t.memoizedState=c}}function Dh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Es={},xt=Dn(Es),Xi=Dn(Es),Zi=Dn(Es);function $n(t){if(t===Es)throw Error(C(174));return t}function bc(t,e){switch(ee(Zi,e),ee(Xi,t),ee(xt,Es),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qa(e,t)}ne(xt),ee(xt,e)}function Vr(){ne(xt),ne(Xi),ne(Zi)}function Hm(t){$n(Zi.current);var e=$n(xt.current),n=qa(e,t.type);e!==n&&(ee(Xi,t),ee(xt,n))}function Ac(t){Xi.current===t&&(ne(xt),ne(Xi))}var ie=Dn(0);function Uo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ga=[];function Oc(){for(var t=0;t<ga.length;t++)ga[t]._workInProgressVersionPrimary=null;ga.length=0}var ho=Yt.ReactCurrentDispatcher,va=Yt.ReactCurrentBatchConfig,Xn=0,se=null,ve=null,Ce=null,zo=!1,bi=!1,es=0,nw=0;function be(){throw Error(C(321))}function Dc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Et(t[n],e[n]))return!1;return!0}function Lc(t,e,n,r,i,s){if(Xn=s,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ho.current=t===null||t.memoizedState===null?ow:lw,t=n(r,i),bi){s=0;do{if(bi=!1,es=0,25<=s)throw Error(C(301));s+=1,Ce=ve=null,e.updateQueue=null,ho.current=aw,t=n(r,i)}while(bi)}if(ho.current=Bo,e=ve!==null&&ve.next!==null,Xn=0,Ce=ve=se=null,zo=!1,e)throw Error(C(300));return t}function Mc(){var t=es!==0;return es=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?se.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function ct(){if(ve===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Ce===null?se.memoizedState:Ce.next;if(e!==null)Ce=e,ve=t;else{if(t===null)throw Error(C(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ce===null?se.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function ts(t,e){return typeof e=="function"?e(t):e}function _a(t){var e=ct(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Xn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,se.lanes|=d,Zn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Et(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,se.lanes|=s,Zn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ya(t){var e=ct(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Et(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $m(){}function Gm(t,e){var n=se,r=ct(),i=e(),s=!Et(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,Fc(qm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,ns(9,Qm.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(C(349));Xn&30||Km(n,e,i)}return i}function Km(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qm(t,e,n,r){e.value=n,e.getSnapshot=r,Ym(e)&&Jm(t)}function qm(t,e,n){return n(function(){Ym(e)&&Jm(t)})}function Ym(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Et(t,n)}catch{return!0}}function Jm(t){var e=Ht(t,1);e!==null&&wt(e,t,1,-1)}function Lh(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},e.queue=t,t=t.dispatch=sw.bind(null,se,t),[e.memoizedState,t]}function ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Xm(){return ct().memoizedState}function fo(t,e,n,r){var i=It();se.flags|=t,i.memoizedState=ns(1|e,n,void 0,r===void 0?null:r)}function Cl(t,e,n,r){var i=ct();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&Dc(r,o.deps)){i.memoizedState=ns(e,n,s,r);return}}se.flags|=t,i.memoizedState=ns(1|e,n,s,r)}function Mh(t,e){return fo(8390656,8,t,e)}function Fc(t,e){return Cl(2048,8,t,e)}function Zm(t,e){return Cl(4,2,t,e)}function eg(t,e){return Cl(4,4,t,e)}function tg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ng(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,tg.bind(null,e,t),n)}function jc(){}function rg(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ig(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function sg(t,e,n){return Xn&21?(Et(n,e)||(n=cm(),se.lanes|=n,Zn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function rw(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=va.transition;va.transition={};try{t(!1),e()}finally{G=n,va.transition=r}}function og(){return ct().memoizedState}function iw(t,e,n){var r=yn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lg(t))ag(e,n);else if(n=Wm(t,e,n,r),n!==null){var i=Fe();wt(n,t,r,i),ug(n,e,r)}}function sw(t,e,n){var r=yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lg(t))ag(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Et(l,o)){var a=e.interleaved;a===null?(i.next=i,Nc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Wm(t,e,i,r),n!==null&&(i=Fe(),wt(n,t,r,i),ug(n,e,r))}}function lg(t){var e=t.alternate;return t===se||e!==null&&e===se}function ag(t,e){bi=zo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ug(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,mc(t,n)}}var Bo={readContext:ut,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},ow={readContext:ut,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:Mh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fo(4194308,4,tg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fo(4194308,4,t,e)},useInsertionEffect:function(t,e){return fo(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iw.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:Lh,useDebugValue:jc,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=Lh(!1),e=t[0];return t=rw.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=It();if(re){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),ke===null)throw Error(C(349));Xn&30||Km(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Mh(qm.bind(null,r,s,t),[t]),r.flags|=2048,ns(9,Qm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=It(),e=ke.identifierPrefix;if(re){var n=Dt,r=Ot;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=es++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lw={readContext:ut,useCallback:rg,useContext:ut,useEffect:Fc,useImperativeHandle:ng,useInsertionEffect:Zm,useLayoutEffect:eg,useMemo:ig,useReducer:_a,useRef:Xm,useState:function(){return _a(ts)},useDebugValue:jc,useDeferredValue:function(t){var e=ct();return sg(e,ve.memoizedState,t)},useTransition:function(){var t=_a(ts)[0],e=ct().memoizedState;return[t,e]},useMutableSource:$m,useSyncExternalStore:Gm,useId:og,unstable_isNewReconciler:!1},aw={readContext:ut,useCallback:rg,useContext:ut,useEffect:Fc,useImperativeHandle:ng,useInsertionEffect:Zm,useLayoutEffect:eg,useMemo:ig,useReducer:ya,useRef:Xm,useState:function(){return ya(ts)},useDebugValue:jc,useDeferredValue:function(t){var e=ct();return ve===null?e.memoizedState=t:sg(e,ve.memoizedState,t)},useTransition:function(){var t=ya(ts)[0],e=ct().memoizedState;return[t,e]},useMutableSource:$m,useSyncExternalStore:Gm,useId:og,unstable_isNewReconciler:!1};function pt(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=yn(t),s=zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=vn(t,s,i),e!==null&&(wt(e,t,i,r),co(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=yn(t),s=zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vn(t,s,i),e!==null&&(wt(e,t,i,r),co(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fe(),r=yn(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=vn(t,i,r),e!==null&&(wt(e,t,r,n),co(e,t,r))}};function Fh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,s):!0}function cg(t,e,n){var r=!1,i=Rn,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=Qe(e)?Yn:De.current,r=e.contextTypes,s=(r=r!=null)?zr(t,i):Rn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function vu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Pc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=Qe(e)?Yn:De.current,i.context=zr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Il.enqueueReplaceState(i,i.state,null),jo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hr(t,e){try{var n="",r=e;do n+=My(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _u(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uw=typeof WeakMap=="function"?WeakMap:Map;function dg(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vo||(Vo=!0,Ru=r),_u(t,e)},n}function hg(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_u(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_u(t,e),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Uh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Cw.bind(null,t,e,n),e.then(t,t))}function zh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,vn(n,e,1))),n.lanes|=1),t)}var cw=Yt.ReactCurrentOwner,$e=!1;function Le(t,e,n,r){e.child=t===null?Bm(e,null,n,r):Wr(e,t.child,n,r)}function Wh(t,e,n,r,i){n=n.render;var s=e.ref;return Ar(e,i),r=Lc(t,e,n,r,s,i),n=Mc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(re&&n&&Cc(e),e.flags|=1,Le(t,e,r,i),e.child)}function Vh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fg(t,e,s,r,i)):(t=vo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(o,r)&&t.ref===e.ref)return $t(t,e,i)}return e.flags|=1,t=wn(s,r),t.ref=e.ref,t.return=e,e.child=t}function fg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Qi(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,$t(t,e,i)}return yu(t,e,n,r,i)}function pg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(kr,Je),Je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(kr,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(kr,Je),Je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(kr,Je),Je|=r;return Le(t,e,i,n),e.child}function mg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yu(t,e,n,r,i){var s=Qe(n)?Yn:De.current;return s=zr(e,s),Ar(e,i),n=Lc(t,e,n,r,s,i),r=Mc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(re&&r&&Cc(e),e.flags|=1,Le(t,e,n,i),e.child)}function Hh(t,e,n,r,i){if(Qe(n)){var s=!0;Oo(e)}else s=!1;if(Ar(e,i),e.stateNode===null)po(t,e),cg(e,n,r),vu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Qe(n)?Yn:De.current,u=zr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&jh(e,o,r,u),tn=!1;var h=e.memoizedState;o.state=h,jo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ke.current||tn?(typeof d=="function"&&(gu(e,n,d,r),a=e.memoizedState),(l=tn||Fh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Vm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:pt(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Qe(n)?Yn:De.current,a=zr(e,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&jh(e,o,r,a),tn=!1,h=e.memoizedState,o.state=h,jo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Ke.current||tn?(typeof v=="function"&&(gu(e,n,v,r),_=e.memoizedState),(u=tn||Fh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return wu(t,e,n,r,s,i)}function wu(t,e,n,r,i,s){mg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Nh(e,n,!1),$t(t,e,s);r=e.stateNode,cw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wr(e,t.child,null,s),e.child=Wr(e,null,l,s)):Le(t,e,l,s),e.memoizedState=r.state,i&&Nh(e,n,!0),e.child}function gg(t){var e=t.stateNode;e.pendingContext?Rh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rh(t,e.context,!1),bc(t,e.containerInfo)}function $h(t,e,n,r,i){return Br(),kc(i),e.flags|=256,Le(t,e,n,r),e.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Eu(t){return{baseLanes:t,cachePool:null,transitions:null}}function vg(t,e,n){var r=e.pendingProps,i=ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(ie,i&1),t===null)return pu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xl(o,r,0,null),t=Qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eu(n),e.memoizedState=Su,t):Uc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return dw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=wn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=wn(l,s):(s=Qn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Eu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Su,r}return s=t.child,t=s.sibling,r=wn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Uc(t,e){return e=xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xs(t,e,n,r){return r!==null&&kc(r),Wr(e,t.child,null,n),t=Uc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wa(Error(C(422))),Xs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xl({mode:"visible",children:r.children},i,0,null),s=Qn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Wr(e,t.child,null,o),e.child.memoizedState=Eu(o),e.memoizedState=Su,s);if(!(e.mode&1))return Xs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=wa(s,r,void 0),Xs(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ht(t,i),wt(r,t,i,-1))}return $c(),r=wa(Error(C(421))),Xs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Iw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xe=gn(i.nextSibling),Ze=e,re=!0,gt=null,t!==null&&(it[st++]=Ot,it[st++]=Dt,it[st++]=Jn,Ot=t.id,Dt=t.overflow,Jn=e),e=Uc(e,r.children),e.flags|=4096,e)}function Gh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mu(t.return,e,n)}function Sa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _g(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Le(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gh(t,n,e);else if(t.tag===19)Gh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sa(e,!0,n,null,s);break;case"together":Sa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function po(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $t(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function hw(t,e,n){switch(e.tag){case 3:gg(e),Br();break;case 5:Hm(e);break;case 1:Qe(e.type)&&Oo(e);break;case 4:bc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Mo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?vg(t,e,n):(ee(ie,ie.current&1),t=$t(t,e,n),t!==null?t.sibling:null);ee(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _g(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,pg(t,e,n)}return $t(t,e,n)}var yg,Cu,wg,Sg;yg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};wg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$n(xt.current);var s=null;switch(n){case"input":i=$a(t,i),r=$a(t,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=Qa(t,i),r=Qa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bo)}Ya(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&te("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Sg=function(t,e,n,r){n!==r&&(e.flags|=4)};function gi(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fw(t,e,n){var r=e.pendingProps;switch(Ic(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Qe(e.type)&&Ao(),Ae(e),null;case 3:return r=e.stateNode,Vr(),ne(Ke),ne(De),Oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ys(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(bu(gt),gt=null))),Cu(t,e),Ae(e),null;case 5:Ac(e);var i=$n(Zi.current);if(n=e.type,t!==null&&e.stateNode!=null)wg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Ae(e),null}if(t=$n(xt.current),Ys(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[kt]=e,r[Ji]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<ki.length;i++)te(ki[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":th(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":rh(r,s),te("invalid",r)}Ya(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&qs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&qs(r.textContent,l,t),i=["children",""+l]):Bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":Bs(r),nh(r,s,!0);break;case"textarea":Bs(r),ih(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kt]=e,t[Ji]=r,yg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ja(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<ki.length;i++)te(ki[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":th(t,r),i=$a(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),te("invalid",t);break;case"textarea":rh(t,r),i=Qa(t,r),te("invalid",t);break;default:i=r}Ya(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Xp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Yp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wi(t,a):typeof a=="number"&&Wi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&te("scroll",t):a!=null&&uc(t,s,a,o))}switch(n){case"input":Bs(t),nh(t,r,!1);break;case"textarea":Bs(t),ih(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Rr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Rr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)Sg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=$n(Zi.current),$n(xt.current),Ys(e)){if(r=e.stateNode,n=e.memoizedProps,r[kt]=e,(s=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:qs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=e,e.stateNode=r}return Ae(e),null;case 13:if(ne(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&Xe!==null&&e.mode&1&&!(e.flags&128))Um(),Br(),e.flags|=98560,s=!1;else if(s=Ys(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[kt]=e}else Br(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else gt!==null&&(bu(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?we===0&&(we=3):$c())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return Vr(),Cu(t,e),t===null&&qi(e.stateNode.containerInfo),Ae(e),null;case 10:return Rc(e.type._context),Ae(e),null;case 17:return Qe(e.type)&&Ao(),Ae(e),null;case 19:if(ne(ie),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gi(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uo(t),o!==null){for(e.flags|=128,gi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(ie,ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>$r&&(e.flags|=128,r=!0,gi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Uo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Ae(e),null}else 2*fe()-s.renderingStartTime>$r&&n!==1073741824&&(e.flags|=128,r=!0,gi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=ie.current,ee(ie,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return Hc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Je&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function pw(t,e){switch(Ic(e),e.tag){case 1:return Qe(e.type)&&Ao(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vr(),ne(Ke),ne(De),Oc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ac(e),null;case 13:if(ne(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Br()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(ie),null;case 4:return Vr(),null;case 10:return Rc(e.type._context),null;case 22:case 23:return Hc(),null;case 24:return null;default:return null}}var Zs=!1,Oe=!1,mw=typeof WeakSet=="function"?WeakSet:Set,P=null;function Ir(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function Iu(t,e,n){try{n()}catch(r){ae(t,e,r)}}var Kh=!1;function gw(t,e){if(lu=Ro,t=Tm(),Ec(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(au={focusedElem:t,selectionRange:n},Ro=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,E=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?y:pt(e.type,y),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(w){ae(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return _=Kh,Kh=!1,_}function Ai(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Iu(e,n,s)}i=i.next}while(i!==r)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Eg(t){var e=t.alternate;e!==null&&(t.alternate=null,Eg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kt],delete e[Ji],delete e[du],delete e[X0],delete e[Z0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cg(t){return t.tag===5||t.tag===3||t.tag===4}function Qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bo));else if(r!==4&&(t=t.child,t!==null))for(Tu(t,e,n),t=t.sibling;t!==null;)Tu(t,e,n),t=t.sibling}function xu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xu(t,e,n),t=t.sibling;t!==null;)xu(t,e,n),t=t.sibling}var Te=null,mt=!1;function Xt(t,e,n){for(n=n.child;n!==null;)Ig(t,e,n),n=n.sibling}function Ig(t,e,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:Oe||Ir(n,e);case 6:var r=Te,i=mt;Te=null,Xt(t,e,n),Te=r,mt=i,Te!==null&&(mt?(t=Te,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(mt?(t=Te,n=n.stateNode,t.nodeType===8?pa(t.parentNode,n):t.nodeType===1&&pa(t,n),Gi(t)):pa(Te,n.stateNode));break;case 4:r=Te,i=mt,Te=n.stateNode.containerInfo,mt=!0,Xt(t,e,n),Te=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Iu(n,e,o),i=i.next}while(i!==r)}Xt(t,e,n);break;case 1:if(!Oe&&(Ir(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ae(n,e,l)}Xt(t,e,n);break;case 21:Xt(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Xt(t,e,n),Oe=r):Xt(t,e,n);break;default:Xt(t,e,n)}}function qh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mw),e.forEach(function(r){var i=kw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Te=l.stateNode,mt=!1;break e;case 3:Te=l.stateNode.containerInfo,mt=!0;break e;case 4:Te=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(Te===null)throw Error(C(160));Ig(s,o,i),Te=null,mt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ae(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kg(e,t),e=e.sibling}function kg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),Ct(t),r&4){try{Ai(3,t,t.return),kl(3,t)}catch(y){ae(t,t.return,y)}try{Ai(5,t,t.return)}catch(y){ae(t,t.return,y)}}break;case 1:ft(e,t),Ct(t),r&512&&n!==null&&Ir(n,n.return);break;case 5:if(ft(e,t),Ct(t),r&512&&n!==null&&Ir(n,n.return),t.flags&32){var i=t.stateNode;try{Wi(i,"")}catch(y){ae(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Kp(i,s),Ja(l,o);var u=Ja(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Xp(i,c):d==="dangerouslySetInnerHTML"?Yp(i,c):d==="children"?Wi(i,c):uc(i,d,c,u)}switch(l){case"input":Ga(i,s);break;case"textarea":Qp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Rr(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Rr(i,!!s.multiple,s.defaultValue,!0):Rr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ji]=s}catch(y){ae(t,t.return,y)}}break;case 6:if(ft(e,t),Ct(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ae(t,t.return,y)}}break;case 3:if(ft(e,t),Ct(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(e.containerInfo)}catch(y){ae(t,t.return,y)}break;case 4:ft(e,t),Ct(t);break;case 13:ft(e,t),Ct(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wc=fe())),r&4&&qh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||d,ft(e,t),Oe=u):ft(e,t),Ct(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(P=t,d=t.child;d!==null;){for(c=P=d;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ai(4,h,h.return);break;case 1:Ir(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ae(r,n,y)}}break;case 5:Ir(h,h.return);break;case 22:if(h.memoizedState!==null){Jh(c);continue}}v!==null?(v.return=h,P=v):Jh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Jp("display",o))}catch(y){ae(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ae(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ft(e,t),Ct(t),r&4&&qh(t);break;case 21:break;default:ft(e,t),Ct(t)}}function Ct(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cg(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wi(i,""),r.flags&=-33);var s=Qh(t);xu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Qh(t);Tu(t,l,o);break;default:throw Error(C(161))}}catch(a){ae(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vw(t,e,n){P=t,Tg(t)}function Tg(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=Zs;var u=Oe;if(Zs=o,(Oe=a)&&!u)for(P=i;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?Xh(i):a!==null?(a.return=o,P=a):Xh(i);for(;s!==null;)P=s,Tg(s),s=s.sibling;P=i,Zs=l,Oe=u}Yh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):Yh(t)}}function Yh(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||kl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Gi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Oe||e.flags&512&&ku(e)}catch(h){ae(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Jh(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Xh(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kl(4,e)}catch(a){ae(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ae(e,i,a)}}var s=e.return;try{ku(e)}catch(a){ae(e,s,a)}break;case 5:var o=e.return;try{ku(e)}catch(a){ae(e,o,a)}}}catch(a){ae(e,e.return,a)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var _w=Math.ceil,Wo=Yt.ReactCurrentDispatcher,zc=Yt.ReactCurrentOwner,at=Yt.ReactCurrentBatchConfig,H=0,ke=null,me=null,Re=0,Je=0,kr=Dn(0),we=0,rs=null,Zn=0,Tl=0,Bc=0,Oi=null,He=null,Wc=0,$r=1/0,bt=null,Vo=!1,Ru=null,_n=null,eo=!1,cn=null,Ho=0,Di=0,Nu=null,mo=-1,go=0;function Fe(){return H&6?fe():mo!==-1?mo:mo=fe()}function yn(t){return t.mode&1?H&2&&Re!==0?Re&-Re:tw.transition!==null?(go===0&&(go=cm()),go):(t=G,t!==0||(t=window.event,t=t===void 0?16:vm(t.type)),t):1}function wt(t,e,n,r){if(50<Di)throw Di=0,Nu=null,Error(C(185));ys(t,n,r),(!(H&2)||t!==ke)&&(t===ke&&(!(H&2)&&(Tl|=n),we===4&&rn(t,Re)),qe(t,r),n===1&&H===0&&!(e.mode&1)&&($r=fe()+500,El&&Ln()))}function qe(t,e){var n=t.callbackNode;t0(t,e);var r=xo(t,t===ke?Re:0);if(r===0)n!==null&&lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lh(n),e===1)t.tag===0?ew(Zh.bind(null,t)):Mm(Zh.bind(null,t)),Y0(function(){!(H&6)&&Ln()}),n=null;else{switch(dm(r)){case 1:n=pc;break;case 4:n=am;break;case 16:n=To;break;case 536870912:n=um;break;default:n=To}n=Dg(n,xg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xg(t,e){if(mo=-1,go=0,H&6)throw Error(C(327));var n=t.callbackNode;if(Or()&&t.callbackNode!==n)return null;var r=xo(t,t===ke?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$o(t,r);else{e=r;var i=H;H|=2;var s=Ng();(ke!==t||Re!==e)&&(bt=null,$r=fe()+500,Kn(t,e));do try{Sw();break}catch(l){Rg(t,l)}while(!0);xc(),Wo.current=s,H=i,me!==null?e=0:(ke=null,Re=0,e=we)}if(e!==0){if(e===2&&(i=nu(t),i!==0&&(r=i,e=Pu(t,i))),e===1)throw n=rs,Kn(t,0),rn(t,r),qe(t,fe()),n;if(e===6)rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!yw(i)&&(e=$o(t,r),e===2&&(s=nu(t),s!==0&&(r=s,e=Pu(t,s))),e===1))throw n=rs,Kn(t,0),rn(t,r),qe(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:zn(t,He,bt);break;case 3:if(rn(t,r),(r&130023424)===r&&(e=Wc+500-fe(),10<e)){if(xo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Fe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cu(zn.bind(null,t,He,bt),e);break}zn(t,He,bt);break;case 4:if(rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_w(r/1960))-r,10<r){t.timeoutHandle=cu(zn.bind(null,t,He,bt),r);break}zn(t,He,bt);break;case 5:zn(t,He,bt);break;default:throw Error(C(329))}}}return qe(t,fe()),t.callbackNode===n?xg.bind(null,t):null}function Pu(t,e){var n=Oi;return t.current.memoizedState.isDehydrated&&(Kn(t,e).flags|=256),t=$o(t,e),t!==2&&(e=He,He=n,e!==null&&bu(e)),t}function bu(t){He===null?He=t:He.push.apply(He,t)}function yw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Et(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rn(t,e){for(e&=~Bc,e&=~Tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yt(e),r=1<<n;t[n]=-1,e&=~r}}function Zh(t){if(H&6)throw Error(C(327));Or();var e=xo(t,0);if(!(e&1))return qe(t,fe()),null;var n=$o(t,e);if(t.tag!==0&&n===2){var r=nu(t);r!==0&&(e=r,n=Pu(t,r))}if(n===1)throw n=rs,Kn(t,0),rn(t,e),qe(t,fe()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zn(t,He,bt),qe(t,fe()),null}function Vc(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&($r=fe()+500,El&&Ln())}}function er(t){cn!==null&&cn.tag===0&&!(H&6)&&Or();var e=H;H|=1;var n=at.transition,r=G;try{if(at.transition=null,G=1,t)return t()}finally{G=r,at.transition=n,H=e,!(H&6)&&Ln()}}function Hc(){Je=kr.current,ne(kr)}function Kn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q0(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Ic(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ao();break;case 3:Vr(),ne(Ke),ne(De),Oc();break;case 5:Ac(r);break;case 4:Vr();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:Rc(r.type._context);break;case 22:case 23:Hc()}n=n.return}if(ke=t,me=t=wn(t.current,null),Re=Je=e,we=0,rs=null,Bc=Tl=Zn=0,He=Oi=null,Hn!==null){for(e=0;e<Hn.length;e++)if(n=Hn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hn=null}return t}function Rg(t,e){do{var n=me;try{if(xc(),ho.current=Bo,zo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zo=!1}if(Xn=0,Ce=ve=se=null,bi=!1,es=0,zc.current=null,n===null||n.return===null){we=1,rs=e,me=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Re,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=zh(o);if(v!==null){v.flags&=-257,Bh(v,o,l,s,e),v.mode&1&&Uh(s,u,e),e=v,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){Uh(s,u,e),$c();break e}a=Error(C(426))}}else if(re&&l.mode&1){var E=zh(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Bh(E,o,l,s,e),kc(Hr(a,l));break e}}s=a=Hr(a,l),we!==4&&(we=2),Oi===null?Oi=[s]:Oi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=dg(s,a,e);Oh(s,g);break e;case 1:l=a;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_n===null||!_n.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=hg(s,l,e);Oh(s,w);break e}}s=s.return}while(s!==null)}bg(n)}catch(I){e=I,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Ng(){var t=Wo.current;return Wo.current=Bo,t===null?Bo:t}function $c(){(we===0||we===3||we===2)&&(we=4),ke===null||!(Zn&268435455)&&!(Tl&268435455)||rn(ke,Re)}function $o(t,e){var n=H;H|=2;var r=Ng();(ke!==t||Re!==e)&&(bt=null,Kn(t,e));do try{ww();break}catch(i){Rg(t,i)}while(!0);if(xc(),H=n,Wo.current=r,me!==null)throw Error(C(261));return ke=null,Re=0,we}function ww(){for(;me!==null;)Pg(me)}function Sw(){for(;me!==null&&!Gy();)Pg(me)}function Pg(t){var e=Og(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?bg(t):me=e,zc.current=null}function bg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pw(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,me=null;return}}else if(n=fw(n,e,Je),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);we===0&&(we=5)}function zn(t,e,n){var r=G,i=at.transition;try{at.transition=null,G=1,Ew(t,e,n,r)}finally{at.transition=i,G=r}return null}function Ew(t,e,n,r){do Or();while(cn!==null);if(H&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(n0(t,s),t===ke&&(me=ke=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,Dg(To,function(){return Or(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=at.transition,at.transition=null;var o=G;G=1;var l=H;H|=4,zc.current=null,gw(t,n),kg(n,t),W0(au),Ro=!!lu,au=lu=null,t.current=n,vw(n),Ky(),H=l,G=o,at.transition=s}else t.current=n;if(eo&&(eo=!1,cn=t,Ho=i),s=t.pendingLanes,s===0&&(_n=null),Yy(n.stateNode),qe(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,t=Ru,Ru=null,t;return Ho&1&&t.tag!==0&&Or(),s=t.pendingLanes,s&1?t===Nu?Di++:(Di=0,Nu=t):Di=0,Ln(),null}function Or(){if(cn!==null){var t=dm(Ho),e=at.transition,n=G;try{if(at.transition=null,G=16>t?16:t,cn===null)var r=!1;else{if(t=cn,cn=null,Ho=0,H&6)throw Error(C(331));var i=H;for(H|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(P=u;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Ai(8,d,s)}var c=d.child;if(c!==null)c.return=d,P=c;else for(;P!==null;){d=P;var h=d.sibling,v=d.return;if(Eg(d),d===u){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ai(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){o=P;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,P=m;else e:for(o=p;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:kl(9,l)}}catch(I){ae(l,l.return,I)}if(l===o){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if(H=i,Ln(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(vl,t)}catch{}r=!0}return r}finally{G=n,at.transition=e}}return!1}function ef(t,e,n){e=Hr(n,e),e=dg(t,e,1),t=vn(t,e,1),e=Fe(),t!==null&&(ys(t,1,e),qe(t,e))}function ae(t,e,n){if(t.tag===3)ef(t,t,n);else for(;e!==null;){if(e.tag===3){ef(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){t=Hr(n,t),t=hg(e,t,1),e=vn(e,t,1),t=Fe(),e!==null&&(ys(e,1,t),qe(e,t));break}}e=e.return}}function Cw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Fe(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Re&n)===n&&(we===4||we===3&&(Re&130023424)===Re&&500>fe()-Wc?Kn(t,0):Bc|=n),qe(t,e)}function Ag(t,e){e===0&&(t.mode&1?(e=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):e=1);var n=Fe();t=Ht(t,e),t!==null&&(ys(t,e,n),qe(t,n))}function Iw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ag(t,n)}function kw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),Ag(t,n)}var Og;Og=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,hw(t,e,n);$e=!!(t.flags&131072)}else $e=!1,re&&e.flags&1048576&&Fm(e,Lo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;po(t,e),t=e.pendingProps;var i=zr(e,De.current);Ar(e,n),i=Lc(null,e,r,t,i,n);var s=Mc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(s=!0,Oo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pc(e),i.updater=Il,e.stateNode=i,i._reactInternals=e,vu(e,r,t,n),e=wu(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Cc(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(po(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xw(r),t=pt(r,t),i){case 0:e=yu(null,e,r,t,n);break e;case 1:e=Hh(null,e,r,t,n);break e;case 11:e=Wh(null,e,r,t,n);break e;case 14:e=Vh(null,e,r,pt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),yu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Hh(t,e,r,i,n);case 3:e:{if(gg(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Vm(t,e),jo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Hr(Error(C(423)),e),e=$h(t,e,r,n,i);break e}else if(r!==i){i=Hr(Error(C(424)),e),e=$h(t,e,r,n,i);break e}else for(Xe=gn(e.stateNode.containerInfo.firstChild),Ze=e,re=!0,gt=null,n=Bm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Br(),r===i){e=$t(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return Hm(e),t===null&&pu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uu(r,i)?o=null:s!==null&&uu(r,s)&&(e.flags|=32),mg(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&pu(e),null;case 13:return vg(t,e,n);case 4:return bc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wr(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Wh(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Mo,r._currentValue),r._currentValue=o,s!==null)if(Et(s.value,o)){if(s.children===i.children&&!Ke.current){e=$t(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=zt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ar(e,n),i=ut(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=pt(r,e.pendingProps),i=pt(r.type,i),Vh(t,e,r,i,n);case 15:return fg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),po(t,e),e.tag=1,Qe(r)?(t=!0,Oo(e)):t=!1,Ar(e,n),cg(e,r,i),vu(e,r,i,n),wu(null,e,r,!0,t,n);case 19:return _g(t,e,n);case 22:return pg(t,e,n)}throw Error(C(156,e.tag))};function Dg(t,e){return lm(t,e)}function Tw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,n,r){return new Tw(t,e,n,r)}function Gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xw(t){if(typeof t=="function")return Gc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dc)return 11;if(t===hc)return 14}return 2}function wn(t,e){var n=t.alternate;return n===null?(n=ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mr:return Qn(n.children,i,s,e);case cc:o=8,i|=8;break;case Ba:return t=ot(12,n,e,i|2),t.elementType=Ba,t.lanes=s,t;case Wa:return t=ot(13,n,e,i),t.elementType=Wa,t.lanes=s,t;case Va:return t=ot(19,n,e,i),t.elementType=Va,t.lanes=s,t;case Hp:return xl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wp:o=10;break e;case Vp:o=9;break e;case dc:o=11;break e;case hc:o=14;break e;case en:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qn(t,e,n,r){return t=ot(7,t,r,e),t.lanes=n,t}function xl(t,e,n,r){return t=ot(22,t,r,e),t.elementType=Hp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ea(t,e,n){return t=ot(6,t,null,e),t.lanes=n,t}function Ca(t,e,n){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Rw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kc(t,e,n,r,i,s,o,l,a){return t=new Rw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(s),t}function Nw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lg(t){if(!t)return Rn;t=t._reactInternals;e:{if(lr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Qe(n))return Lm(t,n,e)}return e}function Mg(t,e,n,r,i,s,o,l,a){return t=Kc(n,r,!0,t,i,s,o,l,a),t.context=Lg(null),n=t.current,r=Fe(),i=yn(n),s=zt(r,i),s.callback=e??null,vn(n,s,i),t.current.lanes=i,ys(t,i,r),qe(t,r),t}function Rl(t,e,n,r){var i=e.current,s=Fe(),o=yn(i);return n=Lg(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vn(i,e,o),t!==null&&(wt(t,i,o,s),co(t,i,o)),o}function Go(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qc(t,e){tf(t,e),(t=t.alternate)&&tf(t,e)}function Pw(){return null}var Fg=typeof reportError=="function"?reportError:function(t){console.error(t)};function qc(t){this._internalRoot=t}Nl.prototype.render=qc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Rl(t,e,null,null)};Nl.prototype.unmount=qc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;er(function(){Rl(null,t,null,null)}),e[Vt]=null}};function Nl(t){this._internalRoot=t}Nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=pm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nn.length&&e!==0&&e<nn[n].priority;n++);nn.splice(n,0,t),n===0&&gm(t)}};function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function nf(){}function bw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Go(o);s.call(u)}}var o=Mg(e,r,t,0,null,!1,!1,"",nf);return t._reactRootContainer=o,t[Vt]=o.current,qi(t.nodeType===8?t.parentNode:t),er(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Go(a);l.call(u)}}var a=Kc(t,0,!1,null,null,!1,!1,"",nf);return t._reactRootContainer=a,t[Vt]=a.current,qi(t.nodeType===8?t.parentNode:t),er(function(){Rl(e,a,n,r)}),a}function bl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Go(o);l.call(a)}}Rl(e,o,t,i)}else o=bw(n,e,t,i,r);return Go(o)}hm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ii(e.pendingLanes);n!==0&&(mc(e,n|1),qe(e,fe()),!(H&6)&&($r=fe()+500,Ln()))}break;case 13:er(function(){var r=Ht(t,1);if(r!==null){var i=Fe();wt(r,t,1,i)}}),Qc(t,1)}};gc=function(t){if(t.tag===13){var e=Ht(t,134217728);if(e!==null){var n=Fe();wt(e,t,134217728,n)}Qc(t,134217728)}};fm=function(t){if(t.tag===13){var e=yn(t),n=Ht(t,e);if(n!==null){var r=Fe();wt(n,t,e,r)}Qc(t,e)}};pm=function(){return G};mm=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Za=function(t,e,n){switch(e){case"input":if(Ga(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sl(r);if(!i)throw Error(C(90));Gp(r),Ga(r,i)}}}break;case"textarea":Qp(t,n);break;case"select":e=n.value,e!=null&&Rr(t,!!n.multiple,e,!1)}};tm=Vc;nm=er;var Aw={usingClientEntryPoint:!1,Events:[Ss,yr,Sl,Zp,em,Vc]},vi={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ow={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sm(t),t===null?null:t.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||Pw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{vl=to.inject(Ow),Tt=to}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw;tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yc(e))throw Error(C(200));return Nw(t,e,null,n)};tt.createRoot=function(t,e){if(!Yc(t))throw Error(C(299));var n=!1,r="",i=Fg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kc(t,1,!1,null,null,n,!1,r,i),t[Vt]=e.current,qi(t.nodeType===8?t.parentNode:t),new qc(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=sm(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return er(t)};tt.hydrate=function(t,e,n){if(!Pl(e))throw Error(C(200));return bl(null,t,e,!0,n)};tt.hydrateRoot=function(t,e,n){if(!Yc(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Mg(e,null,t,1,n??null,i,!1,s,o),t[Vt]=e.current,qi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nl(e)};tt.render=function(t,e,n){if(!Pl(e))throw Error(C(200));return bl(null,t,e,!1,n)};tt.unmountComponentAtNode=function(t){if(!Pl(t))throw Error(C(40));return t._reactRootContainer?(er(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[Vt]=null})}),!0):!1};tt.unstable_batchedUpdates=Vc;tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return bl(t,e,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jg)}catch(t){console.error(t)}}jg(),jp.exports=tt;var Dw=jp.exports,rf=Dw;Ua.createRoot=rf.createRoot,Ua.hydrateRoot=rf.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},is.apply(null,arguments)}var dn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(dn||(dn={}));const sf="popstate";function Lw(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Au("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ug(i)}return Fw(e,n,null,t)}function ge(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Mw(){return Math.random().toString(36).substr(2,8)}function of(t,e){return{usr:t.state,key:t.key,idx:e}}function Au(t,e,n,r){return n===void 0&&(n=null),is({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ni(e):e,{state:n,key:e&&e.key||r||Mw()})}function Ug(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ni(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Fw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=dn.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(is({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=dn.Pop;let E=d(),g=E==null?null:E-u;u=E,a&&a({action:l,location:y.location,delta:g})}function h(E,g){l=dn.Push;let p=Au(y.location,E,g);u=d()+1;let m=of(p,u),w=y.createHref(p);try{o.pushState(m,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function v(E,g){l=dn.Replace;let p=Au(y.location,E,g);u=d();let m=of(p,u),w=y.createHref(p);o.replaceState(m,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function _(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:Ug(E);return p=p.replace(/ $/,"%20"),ge(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let y={get action(){return l},get location(){return t(i,o)},listen(E){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(sf,c),a=E,()=>{i.removeEventListener(sf,c),a=null}},createHref(E){return e(i,E)},createURL:_,encodeLocation(E){let g=_(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:v,go(E){return o.go(E)}};return y}var lf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(lf||(lf={}));function jw(t,e,n){return n===void 0&&(n="/"),Uw(t,e,n)}function Uw(t,e,n,r){let i=typeof e=="string"?ni(e):e,s=Wg(i.pathname||"/",n);if(s==null)return null;let o=zg(t);zw(o);let l=null,a=Xw(s);for(let u=0;l==null&&u<o.length;++u)l=qw(o[u],a);return l}function zg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(ge(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=qn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(ge(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),zg(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Kw(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Bg(s.path))i(s,o,a)}),e}function Bg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Bg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function zw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Qw(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bw=/^:[\w-]+$/,Ww=3,Vw=2,Hw=1,$w=10,Gw=-2,af=t=>t==="*";function Kw(t,e){let n=t.split("/"),r=n.length;return n.some(af)&&(r+=Gw),e&&(r+=Vw),n.filter(i=>!af(i)).reduce((i,s)=>i+(Bw.test(s)?Ww:s===""?Hw:$w),r)}function Qw(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function qw(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=Yw({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),h=a.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:qn([s,c.pathname]),pathnameBase:rS(qn([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=qn([s,c.pathnameBase]))}return o}function Yw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Jw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let y=l[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=l[c];return v&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Jw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Xw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Wg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Zw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eS=t=>Zw.test(t);function tS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ni(t):t,s;if(n)if(eS(n))s=n;else{if(n.includes("//")){let o=n;n=$g(n),Jc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=uf(n.substring(1),"/"):s=uf(n,e)}else s=e;return{pathname:s,search:iS(r),hash:sS(i)}}function uf(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ia(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Vg(t,e){let n=nS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ni(t):(i=is({},t),ge(!i.pathname||!i.pathname.includes("?"),Ia("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),Ia("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),Ia("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=tS(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const $g=t=>t.replace(/\/\/+/g,"/"),qn=t=>$g(t.join("/")),rS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),iS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,sS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function oS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Gg=["post","put","patch","delete"];new Set(Gg);const lS=["get",...Gg];new Set(lS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ss.apply(null,arguments)}const Xc=S.createContext(null),aS=S.createContext(null),Cs=S.createContext(null),Al=S.createContext(null),ar=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Kg=S.createContext(null);function Is(){return S.useContext(Al)!=null}function Zc(){return Is()||ge(!1),S.useContext(Al).location}function Qg(t){S.useContext(Cs).static||S.useLayoutEffect(t)}function ks(){let{isDataRoute:t}=S.useContext(ar);return t?SS():uS()}function uS(){Is()||ge(!1);let t=S.useContext(Xc),{basename:e,future:n,navigator:r}=S.useContext(Cs),{matches:i}=S.useContext(ar),{pathname:s}=Zc(),o=JSON.stringify(Vg(i,n.v7_relativeSplatPath)),l=S.useRef(!1);return Qg(()=>{l.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=Hg(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:qn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function cS(t,e){return dS(t,e)}function dS(t,e,n,r){Is()||ge(!1);let{navigator:i}=S.useContext(Cs),{matches:s}=S.useContext(ar),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Zc(),d;if(e){var c;let E=typeof e=="string"?ni(e):e;a==="/"||(c=E.pathname)!=null&&c.startsWith(a)||ge(!1),d=E}else d=u;let h=d.pathname||"/",v=h;if(a!=="/"){let E=a.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(E.length).join("/")}let _=jw(t,{pathname:v}),y=gS(_&&_.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:qn([a,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:qn([a,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&y?S.createElement(Al.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:dn.Pop}},y):y}function hS(){let t=wS(),e=oS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const fS=S.createElement(hS,null);class pS extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(ar.Provider,{value:this.props.routeContext},S.createElement(Kg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mS(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Xc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(ar.Provider,{value:e},r)}function gS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||ge(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:v}=n,_=c.route.loader&&h[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||_){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let v,_=!1,y=null,E=null;n&&(v=l&&c.route.id?l[c.route.id]:void 0,y=c.route.errorElement||fS,a&&(u<0&&h===0?(ES("route-fallback"),_=!0,E=null):u===h&&(_=!0,E=c.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,h+1)),p=()=>{let m;return v?m=y:_?m=E:c.route.Component?m=S.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,S.createElement(mS,{match:c,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?S.createElement(pS,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var qg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(qg||{}),Yg=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Yg||{});function vS(t){let e=S.useContext(Xc);return e||ge(!1),e}function _S(t){let e=S.useContext(aS);return e||ge(!1),e}function yS(t){let e=S.useContext(ar);return e||ge(!1),e}function Jg(t){let e=yS(),n=e.matches[e.matches.length-1];return n.route.id||ge(!1),n.route.id}function wS(){var t;let e=S.useContext(Kg),n=_S(),r=Jg();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function SS(){let{router:t}=vS(qg.UseNavigateStable),e=Jg(Yg.UseNavigateStable),n=S.useRef(!1);return Qg(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ss({fromRouteId:e},s)))},[t,e])}const cf={};function ES(t,e,n){cf[t]||(cf[t]=!0)}function CS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function IS(t){let{to:e,replace:n,state:r,relative:i}=t;Is()||ge(!1);let{future:s,static:o}=S.useContext(Cs),{matches:l}=S.useContext(ar),{pathname:a}=Zc(),u=ks(),d=Hg(e,Vg(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function fr(t){ge(!1)}function kS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:s,static:o=!1,future:l}=t;Is()&&ge(!1);let a=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:a,navigator:s,static:o,future:ss({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=ni(r));let{pathname:d="/",search:c="",hash:h="",state:v=null,key:_="default"}=r,y=S.useMemo(()=>{let E=Wg(d,a);return E==null?null:{location:{pathname:E,search:c,hash:h,state:v,key:_},navigationType:i}},[a,d,c,h,v,_,i]);return y==null?null:S.createElement(Cs.Provider,{value:u},S.createElement(Al.Provider,{children:n,value:y}))}function TS(t){let{children:e,location:n}=t;return cS(Ou(e),n)}new Promise(()=>{});function Ou(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Ou(r.props.children,s));return}r.type!==fr&&ge(!1),!r.props.index||!r.props.children||ge(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ou(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const xS="6";try{window.__reactRouterVersion=xS}catch{}const RS="startTransition",df=Cy[RS];function NS(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=Lw({window:i,v5Compat:!0}));let o=s.current,[l,a]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(c=>{u&&df?df(()=>a(c)):a(c)},[a,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.useEffect(()=>CS(r),[r]),S.createElement(kS,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var hf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(hf||(hf={}));var ff;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ff||(ff={}));const PS="teach123";function bS(){const t=ks(),[e,n]=S.useState(!1),[r,i]=S.useState(""),[s,o]=S.useState("");function l(a){a.preventDefault(),r===PS?(sessionStorage.setItem("role","teacher"),t("/teacher")):(o("Incorrect password."),i(""))}return f.jsxs("div",{style:he.page,children:[f.jsxs("div",{style:he.header,children:[f.jsx("div",{style:he.logoMark,children:"●"}),f.jsx("span",{style:he.logoText,children:"ClassPoll"})]}),f.jsxs("div",{style:he.hero,className:"fade-up",children:[f.jsxs("h1",{style:he.title,children:["Live Classroom",f.jsx("br",{}),"Polling"]}),f.jsx("p",{style:he.sub,children:"Real-time polls, instant results, zero setup for students."})]}),f.jsxs("div",{style:he.cards,className:"fade-up",children:[f.jsxs("button",{style:he.roleCard,onClick:()=>t("/student"),children:[f.jsx("span",{style:he.roleIcon,children:"🎓"}),f.jsx("span",{style:he.roleLabel,children:"I'm a Student"}),f.jsx("span",{style:he.roleHint,children:"Join and answer polls"})]}),e?f.jsxs("form",{style:{...he.roleCard,gap:"0.75rem"},onSubmit:l,children:[f.jsx("span",{style:he.roleIcon,children:"🔑"}),f.jsx("span",{style:he.roleLabel,children:"Teacher Password"}),f.jsx("input",{className:"input",type:"password",placeholder:"Enter password",value:r,onChange:a=>{i(a.target.value),o("")},autoFocus:!0,style:{textAlign:"center"}}),s&&f.jsx("span",{style:he.err,children:s}),f.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%",justifyContent:"center"},children:"Enter"}),f.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",justifyContent:"center",fontSize:"0.85rem"},onClick:()=>{n(!1),o(""),i("")},children:"Cancel"})]}):f.jsxs("button",{style:he.roleCard,onClick:()=>n(!0),children:[f.jsx("span",{style:he.roleIcon,children:"📋"}),f.jsx("span",{style:he.roleLabel,children:"I'm the Teacher"}),f.jsx("span",{style:he.roleHint,children:"Create and manage polls"})]})]}),f.jsx("a",{href:"/classroom-polling/history",style:he.historyLink,children:"View Poll History →"})]})}const he={page:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem 1rem",gap:"2rem",background:"var(--paper)"},header:{position:"fixed",top:0,left:0,right:0,padding:"1rem 2rem",display:"flex",alignItems:"center",gap:"0.5rem",borderBottom:"1px solid var(--border)",background:"var(--paper)"},logoMark:{color:"var(--accent)",fontSize:"1.2rem"},logoText:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.1rem"},hero:{textAlign:"center"},title:{fontSize:"clamp(2.2rem, 6vw, 3.5rem)",lineHeight:1.1,marginBottom:"0.75rem"},sub:{color:"var(--muted)",fontSize:"1.05rem",maxWidth:"30ch",margin:"0 auto"},cards:{display:"flex",gap:"1.25rem",flexWrap:"wrap",justifyContent:"center"},roleCard:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",padding:"2rem 2.5rem",borderRadius:"16px",border:"2px solid var(--border)",cursor:"pointer",transition:"all 0.2s",background:"white",minWidth:"200px",boxShadow:"var(--shadow)"},roleIcon:{fontSize:"2.5rem"},roleLabel:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.15rem"},roleHint:{fontSize:"0.82rem",color:"var(--muted)"},err:{color:"var(--accent)",fontSize:"0.85rem"},historyLink:{color:"var(--muted)",fontSize:"0.85rem",textDecoration:"underline",cursor:"pointer"}};var pf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw ri(e)},ri=function(t){return new Error("Firebase Database ("+Xg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,v=u&63;a||(v=64,o||(h=64)),r.push(n[d],n[c],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new OS;const h=s<<2|l>>4;if(r.push(h),u!==64){const v=l<<4&240|u>>2;if(r.push(v),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class OS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ev=function(t){const e=Zg(t);return ed.encodeByteArray(e,!0)},Ko=function(t){return ev(t).replace(/\./g,"")},Qo=function(t){try{return ed.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){return tv(void 0,t)}function tv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LS(n)||(t[n]=tv(t[n],e[n]));return t}function LS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=()=>MS().__FIREBASE_DEFAULTS__,jS=()=>{if(typeof process>"u"||typeof pf>"u")return;const t=pf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},US=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qo(t[1]);return e&&JSON.parse(e)},td=()=>{try{return FS()||jS()||US()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nv=t=>{var e,n;return(n=(e=td())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zS=t=>{const e=nv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rv=()=>{var t;return(t=td())===null||t===void 0?void 0:t.config},iv=t=>{var e;return(e=td())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function WS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HS(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $S(){return Xg.NODE_ADMIN===!0}function GS(){try{return typeof indexedDB=="object"}catch{return!1}}function KS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QS,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,l,r)}}function qS(t,e){return t.replace(YS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=os(Qo(s[0])||""),n=os(Qo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},JS=function(t){const e=ov(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},XS=function(t){const e=ov(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Gr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Du(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Yo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(mf(s)&&mf(o)){if(!Yo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function eE(t,e){const n=new tE(t,e);return n.subscribe.bind(n)}class tE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ka),i.error===void 0&&(i.error=ka),i.complete===void 0&&(i.complete=ka);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ka(){}function Ol(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ts;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oE(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sE(t){return t===Bn?void 0:t}function oE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const aE={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},uE=q.INFO,cE={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},dE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rd{constructor(e){this.name=e,this._logLevel=uE,this._logHandler=dE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const hE=(t,e)=>e.some(n=>t instanceof n);let gf,vf;function fE(){return gf||(gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pE(){return vf||(vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lv=new WeakMap,Lu=new WeakMap,av=new WeakMap,Ta=new WeakMap,id=new WeakMap;function mE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lv.set(n,t)}).catch(()=>{}),id.set(e,t),e}function gE(t){if(Lu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lu.set(t,e)}let Mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||av.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vE(t){Mu=t(Mu)}function _E(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xa(this),e,...n);return av.set(r,e.sort?e.sort():[e]),Sn(r)}:pE().includes(t)?function(...e){return t.apply(xa(this),e),Sn(lv.get(this))}:function(...e){return Sn(t.apply(xa(this),e))}}function yE(t){return typeof t=="function"?_E(t):(t instanceof IDBTransaction&&gE(t),hE(t,fE())?new Proxy(t,Mu):t)}function Sn(t){if(t instanceof IDBRequest)return mE(t);if(Ta.has(t))return Ta.get(t);const e=yE(t);return e!==t&&(Ta.set(t,e),id.set(e,t)),e}const xa=t=>id.get(t);function wE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Sn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Sn(o.result),a.oldVersion,a.newVersion,Sn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const SE=["get","getKey","getAll","getAllKeys","count"],EE=["put","add","delete","clear"],Ra=new Map;function _f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ra.get(e))return Ra.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=EE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SE.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ra.set(e,s),s}vE(t=>({...t,get:(e,n,r)=>_f(e,n)||t.get(e,n,r),has:(e,n)=>!!_f(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fu="@firebase/app",yf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new rd("@firebase/app"),kE="@firebase/app-compat",TE="@firebase/analytics-compat",xE="@firebase/analytics",RE="@firebase/app-check-compat",NE="@firebase/app-check",PE="@firebase/auth",bE="@firebase/auth-compat",AE="@firebase/database",OE="@firebase/data-connect",DE="@firebase/database-compat",LE="@firebase/functions",ME="@firebase/functions-compat",FE="@firebase/installations",jE="@firebase/installations-compat",UE="@firebase/messaging",zE="@firebase/messaging-compat",BE="@firebase/performance",WE="@firebase/performance-compat",VE="@firebase/remote-config",HE="@firebase/remote-config-compat",$E="@firebase/storage",GE="@firebase/storage-compat",KE="@firebase/firestore",QE="@firebase/vertexai-preview",qE="@firebase/firestore-compat",YE="firebase",JE="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="[DEFAULT]",XE={[Fu]:"fire-core",[kE]:"fire-core-compat",[xE]:"fire-analytics",[TE]:"fire-analytics-compat",[NE]:"fire-app-check",[RE]:"fire-app-check-compat",[PE]:"fire-auth",[bE]:"fire-auth-compat",[AE]:"fire-rtdb",[OE]:"fire-data-connect",[DE]:"fire-rtdb-compat",[LE]:"fire-fn",[ME]:"fire-fn-compat",[FE]:"fire-iid",[jE]:"fire-iid-compat",[UE]:"fire-fcm",[zE]:"fire-fcm-compat",[BE]:"fire-perf",[WE]:"fire-perf-compat",[VE]:"fire-rc",[HE]:"fire-rc-compat",[$E]:"fire-gcs",[GE]:"fire-gcs-compat",[KE]:"fire-fst",[qE]:"fire-fst-compat",[QE]:"fire-vertex","fire-js":"fire-js",[YE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Map,ZE=new Map,Uu=new Map;function wf(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kr(t){const e=t.name;if(Uu.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;Uu.set(e,t);for(const n of Jo.values())wf(n,t);for(const n of ZE.values())wf(n,t);return!0}function sd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new xs("app","Firebase",eC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=JE;function uv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ju,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw En.create("bad-app-name",{appName:String(i)});if(n||(n=rv()),!n)throw En.create("no-options");const s=Jo.get(i);if(s){if(Yo(n,s.options)&&Yo(r,s.config))return s;throw En.create("duplicate-app",{appName:i})}const o=new lE(i);for(const a of Uu.values())o.addComponent(a);const l=new tC(n,r,o);return Jo.set(i,l),l}function cv(t=ju){const e=Jo.get(t);if(!e&&t===ju&&rv())return uv();if(!e)throw En.create("no-app",{appName:t});return e}function Cn(t,e,n){var r;let i=(r=XE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(l.join(" "));return}Kr(new tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="firebase-heartbeat-database",rC=1,ls="firebase-heartbeat-store";let Na=null;function dv(){return Na||(Na=wE(nC,rC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw En.create("idb-open",{originalErrorMessage:t.message})})),Na}async function iC(t){try{const n=(await dv()).transaction(ls),r=await n.objectStore(ls).get(hv(t));return await n.done,r}catch(e){if(e instanceof Mn)Gt.warn(e.message);else{const n=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function Sf(t,e){try{const r=(await dv()).transaction(ls,"readwrite");await r.objectStore(ls).put(e,hv(t)),await r.done}catch(n){if(n instanceof Mn)Gt.warn(n.message);else{const r=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(r.message)}}}function hv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=1024,oC=30*24*60*60*1e3;class lC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ef();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=oC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ef(),{heartbeatsToSend:r,unsentEntries:i}=aC(this._heartbeatsCache.heartbeats),s=Ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Gt.warn(n),""}}}function Ef(){return new Date().toISOString().substring(0,10)}function aC(t,e=sC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GS()?KS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cf(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){Kr(new tr("platform-logger",e=>new CE(e),"PRIVATE")),Kr(new tr("heartbeat",e=>new lC(e),"PRIVATE")),Cn(Fu,yf,t),Cn(Fu,yf,"esm2017"),Cn("fire-js","")}cC("");var dC="firebase",hC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(dC,hC,"app");var If={};const kf="@firebase/database",Tf="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fv="";function fC(t){fv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pC(e)}}catch{}return new mC},Gn=pv("localStorage"),gC=pv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new rd("@firebase/database"),vC=function(){let t=1;return function(){return t++}}(),mv=function(t){const e=rE(t),n=new ZS;n.update(e);const r=n.digest();return ed.encodeByteArray(r)},Rs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Rs.apply(null,r):typeof r=="object"?e+=ye(r):e+=r,e+=" "}return e};let Li=null,xf=!0;const _C=function(t,e){k(!0,"Can't turn on custom loggers persistently."),Dr.logLevel=q.VERBOSE,Li=Dr.log.bind(Dr)},xe=function(...t){if(xf===!0&&(xf=!1,Li===null&&gC.get("logging_enabled")===!0&&_C()),Li){const e=Rs.apply(null,t);Li(e)}},Ns=function(t){return function(...e){xe(t,...e)}},zu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rs(...t);Dr.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${Rs(...t)}`;throw Dr.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+Rs(...t);Dr.warn(e)},yC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},od=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qr="[MIN_NAME]",nr="[MAX_NAME]",ur=function(t,e){if(t===e)return 0;if(t===Qr||e===nr)return-1;if(e===Qr||t===nr)return 1;{const n=Rf(t),r=Rf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},SC=function(t,e){return t===e?0:t<e?-1:1},_i=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},ld=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ye(e[r]),n+=":",n+=ld(t[e[r]]);return n+="}",n},gv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const vv=function(t){k(!od(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},EC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function IC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const kC=new RegExp("^-?(0*)\\d{1,10}$"),TC=-2147483648,xC=2147483647,Rf=function(t){if(kC.test(t)){const e=Number(t);if(e>=TC&&e<=xC)return e}return null},oi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},RC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class _o{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_o.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="5",_v="v",yv="s",wv="r",Sv="f",Ev=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cv="ls",Iv="p",Bu="ac",kv="websocket",Tv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function bC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Rv(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===kv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bC(t)&&(n.ns=t.namespace);const i=[];return Pe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.counters_={}}incrementCounter(e,n=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return DS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa={},ba={};function ud(t){const e=t.toString();return Pa[e]||(Pa[e]=new AC),Pa[e]}function OC(t,e){const n=t.toString();return ba[n]||(ba[n]=e()),ba[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&oi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="start",LC="close",MC="pLPCommand",FC="pRTLPCB",Nv="id",Pv="pw",bv="ser",jC="cb",UC="seg",zC="ts",BC="d",WC="dframe",Av=1870,Ov=30,VC=Av-Ov,HC=25e3,$C=3e4;class Tr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ns(e),this.stats_=ud(n),this.urlFn=a=>(this.appCheckToken&&(a[Bu]=this.appCheckToken),Rv(n,Tv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new DC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($C)),wC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nf)this.id=l,this.password=a;else if(o===LC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Nf]="t",r[bv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[jC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[_v]=ad,this.transportSessionId&&(r[yv]=this.transportSessionId),this.lastSessionId&&(r[Cv]=this.lastSessionId),this.applicationId&&(r[Iv]=this.applicationId),this.appCheckToken&&(r[Bu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ev.test(location.hostname)&&(r[wv]=Sv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tr.forceAllow_=!0}static forceDisallow(){Tr.forceDisallow_=!0}static isAvailable(){return Tr.forceAllow_?!0:!Tr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!EC()&&!CC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ev(n),i=gv(r,VC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[WC]="t",r[Nv]=e,r[Pv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vC(),window[MC+this.uniqueCallbackIdentifier]=e,window[FC+this.uniqueCallbackIdentifier]=n,this.myIFrame=cd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){xe("frame writing exception"),l.stack&&xe(l.stack),xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nv]=this.myID,e[Pv]=this.myPW,e[bv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ov+r.length<=Av;){const o=this.pendingSegs.shift();r=r+"&"+UC+i+"="+o.seg+"&"+zC+i+"="+o.ts+"&"+BC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(HC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=16384,KC=45e3;let Xo=null;typeof MozWebSocket<"u"?Xo=MozWebSocket:typeof WebSocket<"u"&&(Xo=WebSocket);class vt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ns(this.connId),this.stats_=ud(n),this.connURL=vt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[_v]=ad,typeof location<"u"&&location.hostname&&Ev.test(location.hostname)&&(o[wv]=Sv),n&&(o[yv]=n),r&&(o[Cv]=r),i&&(o[Bu]=i),s&&(o[Iv]=s),Rv(e,kv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gn.set("previous_websocket_failure",!0);try{let r;$S(),this.mySock=new Xo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xo!==null&&!vt.forceDisallow_}static previouslyFailed(){return Gn.isInMemoryStorage||Gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=os(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gv(n,GC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tr,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=vt&&vt.isAvailable();let r=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vt];else{const i=this.transports_=[];for(const s of as.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);as.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}as.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=6e4,qC=5e3,YC=10*1024,JC=100*1024,Aa="t",Pf="d",XC="s",bf="r",ZC="e",Af="o",Of="a",Df="n",Lf="p",eI="h";class tI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ns("c:"+this.id+":"),this.transportManager_=new as(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Mi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Aa in e){const n=e[Aa];n===Of?this.upgradeIfSecondaryHealthy_():n===bf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Af&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_i("t",e),r=_i("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Of,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Df,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_i("t",e),r=_i("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_i(Aa,e);if(Pf in e){const r=e[Pf];if(n===eI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Df){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===XC?this.onConnectionShutdown_(r):n===bf?this.onReset_(r):n===ZC?zu("Server Error: "+r):n===Af?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ad!==r&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Mi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends Lv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zo}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=32,Ff=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new Y("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nn(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function dd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function us(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Y(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Me(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rI(t,e){const n=us(t,0),r=us(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ur(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function hd(t,e){if(Nn(t)!==Nn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function lt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Nn(t)>Nn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class iI{constructor(e,n){this.errorPrefix_=n,this.parts_=us(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Dl(this.parts_[r]);Fv(this)}}function sI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Dl(e),Fv(t)}function oI(t){const e=t.parts_.pop();t.byteLength_-=Dl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fv(t){if(t.byteLength_>Ff)throw new Error(t.errorPrefix_+"has a key path longer than "+Ff+" bytes ("+t.byteLength_+").");if(t.parts_.length>Mf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Mf+") or object contains a cycle "+Wn(t))}function Wn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends Lv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new fd}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=1e3,lI=60*5*1e3,jf=30*1e3,aI=1.3,uI=3e4,cI="server_kill",Uf=3;class Bt extends Dv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Bt.nextPersistentConnectionId_++,this.log_=Ns("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yi,this.maxReconnectDelay_=lI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ye(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ts,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Bt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Pt(e,"w")){const r=Gr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||XS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=JS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zu("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uI&&(this.reconnectDelay_=yi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?xe("getToken() completed but was canceled"):(xe("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new tI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{je(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(cI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&je(c),a())}}}interrupt(e){xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Du(this.interruptReasons_)&&(this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ld(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Uf&&(this.reconnectDelay_=jf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Uf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fv.replace(/\./g,"-")]=1,nd()?e["framework.cordova"]=1:sv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zo.getInstance().currentlyOnline();return Du(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Qr,e),i=new z(Qr,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;class jv extends Ll{static get __EMPTY_NODE(){return no}static set __EMPTY_NODE(e){no=e}compare(e,n){return ur(e.name,n.name)}isDefinedOn(e){throw ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(nr,no)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,no)}toString(){return".key"}}const Lr=new jv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ie.RED,this.left=i??Ge.EMPTY_NODE,this.right=s??Ge.EMPTY_NODE}copy(e,n,r,i,s){return new Ie(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class dI{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ro(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new dI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e){return ur(t.name,e.name)}function pd(t,e){return ur(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wu;function fI(t){Wu=t}const Uv=function(t){return typeof t=="number"?"number:"+vv(t):"string:"+t},zv=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pt(e,".sv"),"Priority must be a string or number.")}else k(t===Wu||t.isEmpty(),"priority of unexpected type.");k(t===Wu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zf;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zv(this.priorityNode_)}static set __childrenNodeConstructor(e){zf=e}static get __childrenNodeConstructor(){return zf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:U(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Nn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=vv(this.value_):e+=this.value_,this.lazyHash_=mv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),s=Ee.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bv,Wv;function pI(t){Bv=t}function mI(t){Wv=t}class gI extends Ll{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ur(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(nr,new Ee("[PRIORITY-POST]",Wv))}makePost(e,n){const r=Bv(e);return new z(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const ce=new gI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=Math.log(2);class _I{constructor(e){const n=s=>parseInt(Math.log(s)/vI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const el=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new Ie(h,c.node,Ie.BLACK,null,null);{const v=parseInt(d/2,10)+a,_=i(a,v),y=i(v+1,u);return c=t[v],h=n?n(c):c,new Ie(h,c.node,Ie.BLACK,_,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,y){const E=c-_,g=c;c-=_;const p=i(E+1,g),m=t[E],w=n?n(m):m;v(new Ie(w,m.node,y,null,p))},v=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),E=Math.pow(2,a.count-(_+1));y?h(E,Ie.BLACK):(h(E,Ie.BLACK),h(E,Ie.RED))}return d},o=new _I(t.length),l=s(o);return new Ge(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa;const hr={};class Mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(hr&&ce,"ChildrenNode.ts has not been loaded"),Oa=Oa||new Mt({".priority":hr},{".priority":ce}),Oa}get(e){const n=Gr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Lr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=el(r,e.getCompare()):l=hr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Mt(d,u)}addToIndexes(e,n){const r=qo(this.indexes_,(i,s)=>{const o=Gr(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===hr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),el(l,o.getCompare())}else return hr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Mt(r,this.indexSet_)}removeFromIndexes(e,n){const r=qo(this.indexes_,i=>{if(i===hr)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Mt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class D{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&zv(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wi||(wi=new D(new Ge(pd),null,Mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wi}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?wi:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?wi:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{k(U(e)!==".priority"||Nn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ce,(o,l)=>{n[o]=l.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uv(this.getPriority().val())+":"),this.forEachChild(ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":mv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ps?-1:0}withIndex(e){if(e===Lr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Lr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ce),i=n.getIterator(ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Lr?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yI extends D{constructor(){super(new Ge(pd),D.EMPTY_NODE,Mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Ps=new yI;Object.defineProperties(z,{MIN:{value:new z(Qr,D.EMPTY_NODE)},MAX:{value:new z(nr,Ps)}});jv.__EMPTY_NODE=D.EMPTY_NODE;Ee.__childrenNodeConstructor=D;fI(Ps);mI(Ps);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=!0;function _e(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,_e(e))}if(!(t instanceof Array)&&wI){const n=[];let r=!1;if(Pe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=_e(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return D.EMPTY_NODE;const s=el(n,hI,o=>o.name,pd);if(r){const o=el(n,ce.getCompare());return new D(s,_e(e),new Mt({".priority":o},{".priority":ce}))}else return new D(s,_e(e),Mt.Default)}else{let n=D.EMPTY_NODE;return Pe(t,(r,i)=>{if(Pt(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}pI(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI extends Ll{constructor(e){super(),this.indexPath_=e,k(!B(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ur(e.name,n.name):s}makePost(e,n){const r=_e(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Ps);return new z(nr,e)}toString(){return us(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI extends Ll{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ur(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=_e(e);return new z(n,r)}toString(){return".value"}}const CI=new EI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){return{type:"value",snapshotNode:t}}function qr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function cs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ds(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function II(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(cs(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(qr(n,r)):o.trackChildChange(ds(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ce,(i,s)=>{n.hasChild(i)||r.trackChildChange(cs(i,s))}),n.isLeafNode()||n.forEachChild(ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ds(i,s,o))}else r.trackChildChange(qr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.indexedFilter_=new md(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hs.getStartPost_(e),this.endPost_=hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(ce,(o,l)=>{s.matches(new z(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,v)=>c(v,h)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new z(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,a);if(d&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(ds(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(cs(n,c));const y=l.updateImmediateChild(n,D.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(qr(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(cs(u.name,u.node)),s.trackChildChange(qr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ce}copy(){const e=new gd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TI(t){return t.loadsAllData()?new md(t.getIndex()):t.hasLimit()?new kI(t):new hs(t)}function Bf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ce?n="$priority":t.index_===CI?n="$value":t.index_===Lr?n="$key":(k(t.index_ instanceof SI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ye(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ye(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ye(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Wf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Dv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ns("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=tl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Bf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Gr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=tl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Bf(e._queryParams),r=e._path.toString(),i=new Ts;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ii(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=os(l.responseText)}catch{je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(){return{value:null,children:new Map}}function Hv(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,nl());const i=t.children.get(r);e=Z(e),Hv(i,e,n)}}function Vu(t,e,n){t.value!==null?n(e,t.value):RI(t,(r,i)=>{const s=new Y(e.toString()+"/"+r);Vu(i,s,n)})}function RI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=10*1e3,PI=30*1e3,bI=5*60*1e3;class AI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NI(e);const r=Vf+(PI-Vf)*Math.random();Mi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Pe(e,(i,s)=>{s>0&&Pt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Mi(this.reportStats_.bind(this),Math.floor(Math.random()*2*bI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function vd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _d(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=_t.ACK_USER_WRITE,this.source=vd()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new rl($(),n,this.revert)}}else return k(U(this.path)===e,"operationForChild called for unrelated child."),new rl(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.source=e,this.path=n,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new fs(this.source,$()):new fs(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=_t.OVERWRITE}operationForChild(e){return B(this.path)?new rr(this.source,$(),this.snap.getImmediateChild(e)):new rr(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=_t.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new rr(this.source,$(),n.value):new Yr(this.source,$(),n)}else return k(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yr(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function DI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(II(o.childName,o.snapshotNode))}),Si(t,i,"child_removed",e,r,n),Si(t,i,"child_added",e,r,n),Si(t,i,"child_moved",s,r,n),Si(t,i,"child_changed",e,r,n),Si(t,i,"value",e,r,n),i}function Si(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>MI(t,l,a)),o.forEach(l=>{const a=LI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function LI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function MI(t,e,n){if(e.childName==null||n.childName==null)throw ri("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(t,e){return{eventCache:t,serverCache:e}}function Fi(t,e,n,r){return Ml(new Pn(e,n,r),t.serverCache)}function $v(t,e,n,r){return Ml(t.eventCache,new Pn(e,n,r))}function il(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da;const FI=()=>(Da||(Da=new Ge(SC)),Da);class X{constructor(e,n=FI()){this.value=e,this.children=n}static fromObject(e){let n=new X(null);return Pe(e,(r,i)=>{n=n.set(new Y(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(B(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Z(e),n);return s!=null?{path:ue(new Y(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new X(null)}}set(e,n){if(B(e))return new X(n,this.children);{const r=U(e),s=(this.children.get(r)||new X(null)).set(Z(e),n),o=this.children.insert(r,s);return new X(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(Z(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(B(e))return n;{const r=U(e),s=(this.children.get(r)||new X(null)).setTree(Z(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new X(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(Z(e),ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(Z(e),ue(n,i),r):new X(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.writeTree_=e}static empty(){return new St(new X(null))}}function ji(t,e,n){if(B(e))return new St(new X(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new St(t.writeTree_.set(i,s))}else{const i=new X(n),s=t.writeTree_.setTree(e,i);return new St(s)}}}function Hu(t,e,n){let r=t;return Pe(n,(i,s)=>{r=ji(r,ue(e,i),s)}),r}function Hf(t,e){if(B(e))return St.empty();{const n=t.writeTree_.setTree(e,new X(null));return new St(n)}}function $u(t,e){return cr(t,e)!=null}function cr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function $f(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ce,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function In(t,e){if(B(e))return t;{const n=cr(t,e);return n!=null?new St(new X(n)):new St(t.writeTree_.subtree(e))}}function Gu(t){return t.writeTree_.isEmpty()}function Jr(t,e){return Gv($(),t.writeTree_,e)}function Gv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Gv(ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e){return Yv(e,t)}function jI(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ji(t.visibleWrites,e,n)),t.lastWriteId=r}function UI(t,e,n,r){k(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Hu(t.visibleWrites,e,n),t.lastWriteId=r}function zI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function BI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&WI(l,r.path)?i=!1:lt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return VI(t),!0;if(r.snap)t.visibleWrites=Hf(t.visibleWrites,r.path);else{const l=r.children;Pe(l,a=>{t.visibleWrites=Hf(t.visibleWrites,ue(r.path,a))})}return!0}else return!1}function WI(t,e){if(t.snap)return lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&lt(ue(t.path,n),e))return!0;return!1}function VI(t){t.visibleWrites=Kv(t.allWrites,HI,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function HI(t){return t.visible}function Kv(t,e,n){let r=St.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)lt(n,o)?(l=Me(n,o),r=ji(r,l,s.snap)):lt(o,n)&&(l=Me(o,n),r=ji(r,$(),s.snap.getChild(l)));else if(s.children){if(lt(n,o))l=Me(n,o),r=Hu(r,l,s.children);else if(lt(o,n))if(l=Me(o,n),B(l))r=Hu(r,$(),s.children);else{const a=Gr(s.children,U(l));if(a){const u=a.getChild(Z(l));r=ji(r,$(),u)}}}else throw ri("WriteRecord should have .snap or .children")}}return r}function Qv(t,e,n,r,i){if(!r&&!i){const s=cr(t.visibleWrites,e);if(s!=null)return s;{const o=In(t.visibleWrites,e);if(Gu(o))return n;if(n==null&&!$u(o,$()))return null;{const l=n||D.EMPTY_NODE;return Jr(o,l)}}}else{const s=In(t.visibleWrites,e);if(!i&&Gu(s))return n;if(!i&&n==null&&!$u(s,$()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(lt(u.path,e)||lt(e,u.path))},l=Kv(t.allWrites,o,e),a=n||D.EMPTY_NODE;return Jr(l,a)}}}function $I(t,e,n){let r=D.EMPTY_NODE;const i=cr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=In(t.visibleWrites,e);return n.forEachChild(ce,(o,l)=>{const a=Jr(In(s,new Y(o)),l);r=r.updateImmediateChild(o,a)}),$f(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=In(t.visibleWrites,e);return $f(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function GI(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ue(e,n);if($u(t.visibleWrites,s))return null;{const o=In(t.visibleWrites,s);return Gu(o)?i.getChild(n):Jr(o,i.getChild(n))}}function KI(t,e,n,r){const i=ue(e,n),s=cr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=In(t.visibleWrites,i);return Jr(o,r.getNode().getImmediateChild(n))}else return null}function QI(t,e){return cr(t.visibleWrites,e)}function qI(t,e,n,r,i,s,o){let l;const a=In(t.visibleWrites,e),u=cr(a,$());if(u!=null)l=u;else if(n!=null)l=Jr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=h.getNext();for(;v&&d.length<i;)c(v,r)!==0&&d.push(v),v=h.getNext();return d}else return[]}function YI(){return{visibleWrites:St.empty(),allWrites:[],lastWriteId:-1}}function sl(t,e,n,r){return Qv(t.writeTree,t.treePath,e,n,r)}function wd(t,e){return $I(t.writeTree,t.treePath,e)}function Gf(t,e,n,r){return GI(t.writeTree,t.treePath,e,n,r)}function ol(t,e){return QI(t.writeTree,ue(t.treePath,e))}function JI(t,e,n,r,i,s){return qI(t.writeTree,t.treePath,e,n,r,i,s)}function Sd(t,e,n){return KI(t.writeTree,t.treePath,e,n)}function qv(t,e){return Yv(ue(t.treePath,e),t.writeTree)}function Yv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ds(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,cs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,qr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ds(r,e.snapshotNode,i.oldSnap));else throw ri("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Jv=new ZI;class Ed{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),s=JI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){return{filter:t}}function tk(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nk(t,e,n,r,i){const s=new XI;let o,l;if(n.type===_t.OVERWRITE){const u=n;u.source.fromUser?o=Ku(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!B(u.path),o=ll(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===_t.MERGE){const u=n;u.source.fromUser?o=ik(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Qu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===_t.ACK_USER_WRITE){const u=n;u.revert?o=lk(t,e,u.path,r,i,s):o=sk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===_t.LISTEN_COMPLETE)o=ok(t,e,n.path,r,s);else throw ri("Unknown operation type: "+n.type);const a=s.getChanges();return rk(e,o,a),{viewCache:o,changes:a}}function rk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=il(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Vv(il(e)))}}function Xv(t,e,n,r,i,s){const o=e.eventCache;if(ol(r,n)!=null)return e;{let l,a;if(B(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ir(e),d=u instanceof D?u:D.EMPTY_NODE,c=wd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=sl(r,ir(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){k(Nn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Gf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=Z(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Gf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Sd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Fi(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function ll(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(B(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),v,null)}else{const v=U(n);if(!a.isCompleteForPath(n)&&Nn(n)>1)return e;const _=Z(n),E=a.getNode().getImmediateChild(v).updateChild(_,r);v===".priority"?u=d.updatePriority(a.getNode(),E):u=d.updateChild(a.getNode(),v,E,_,Jv,null)}const c=$v(e,u,a.isFullyInitialized()||B(n),d.filtersNodes()),h=new Ed(i,c,s);return Xv(t,c,n,i,h,l)}function Ku(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Ed(i,e,s);if(B(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Fi(e,u,!0,t.filter.filtersNodes());else{const c=U(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Fi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Z(n),v=l.getNode().getImmediateChild(c);let _;if(B(h))_=r;else{const y=d.getCompleteChild(c);y!=null?dd(h)===".priority"&&y.getChild(Mv(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=D.EMPTY_NODE}if(v.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Fi(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Kf(t,e){return t.eventCache.isCompleteForChild(e)}function ik(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=ue(n,a);Kf(e,U(d))&&(l=Ku(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=ue(n,a);Kf(e,U(d))||(l=Ku(t,l,d,u,i,s,o))}),l}function Qf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Qu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;B(n)?u=r:u=new X(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const v=e.serverCache.getNode().getImmediateChild(c),_=Qf(t,v,h);a=ll(t,a,new Y(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const v=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!v){const _=e.serverCache.getNode().getImmediateChild(c),y=Qf(t,_,h);a=ll(t,a,new Y(c),y,i,s,o,l)}}),a}function sk(t,e,n,r,i,s,o){if(ol(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ll(t,e,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let u=new X(null);return a.getNode().forEachChild(Lr,(d,c)=>{u=u.set(new Y(d),c)}),Qu(t,e,n,u,i,s,l,o)}else return e}else{let u=new X(null);return r.foreach((d,c)=>{const h=ue(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Qu(t,e,n,u,i,s,l,o)}}function ok(t,e,n,r,i){const s=e.serverCache,o=$v(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return Xv(t,o,n,r,Jv,i)}function lk(t,e,n,r,i,s){let o;if(ol(r,n)!=null)return e;{const l=new Ed(r,e,i),a=e.eventCache.getNode();let u;if(B(n)||U(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=sl(r,ir(e));else{const c=e.serverCache.getNode();k(c instanceof D,"serverChildren would be complete if leaf node"),d=wd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=U(n);let c=Sd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,Z(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,D.EMPTY_NODE,Z(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sl(r,ir(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ol(r,$())!=null,Fi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new md(r.getIndex()),s=TI(r);this.processor_=ek(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(D.EMPTY_NODE,l.getNode(),null),d=new Pn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Pn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ml(c,d),this.eventGenerator_=new OI(this.query_)}get query(){return this.query_}}function uk(t){return t.viewCache_.serverCache.getNode()}function ck(t){return il(t.viewCache_)}function dk(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function qf(t){return t.eventRegistrations_.length===0}function hk(t,e){t.eventRegistrations_.push(e)}function Yf(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Jf(t,e,n,r){e.type===_t.MERGE&&e.source.queryId!==null&&(k(ir(t.viewCache_),"We should always have a full cache before handling merges"),k(il(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=nk(t.processor_,i,e,n,r);return tk(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Zv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function fk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ce,(s,o)=>{r.push(qr(s,o))}),n.isFullyInitialized()&&r.push(Vv(n.getNode())),Zv(t,r,n.getNode(),e)}function Zv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return DI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al;class e_{constructor(){this.views=new Map}}function pk(t){k(!al,"__referenceConstructor has already been defined"),al=t}function mk(){return k(al,"Reference.ts has not been loaded"),al}function gk(t){return t.views.size===0}function Cd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Jf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Jf(o,e,n,r));return s}}function t_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=sl(n,i?r:null),a=!1;l?a=!0:r instanceof D?(l=wd(n,r),a=!1):(l=D.EMPTY_NODE,a=!1);const u=Ml(new Pn(l,a,!1),new Pn(r,i,!1));return new ak(e,u)}return o}function vk(t,e,n,r,i,s){const o=t_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hk(o,n),fk(o,n)}function _k(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=bn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Yf(u,n,r)),qf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Yf(a,n,r)),qf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!bn(t)&&s.push(new(mk())(e._repo,e._path)),{removed:s,events:o}}function n_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function kn(t,e){let n=null;for(const r of t.views.values())n=n||dk(r,e);return n}function r_(t,e){if(e._queryParams.loadsAllData())return jl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function i_(t,e){return r_(t,e)!=null}function bn(t){return jl(t)!=null}function jl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul;function yk(t){k(!ul,"__referenceConstructor has already been defined"),ul=t}function wk(){return k(ul,"Reference.ts has not been loaded"),ul}let Sk=1;class Xf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=YI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function s_(t,e,n,r,i){return jI(t.pendingWriteTree_,e,n,r,i),i?li(t,new rr(vd(),e,n)):[]}function Ek(t,e,n,r){UI(t.pendingWriteTree_,e,n,r);const i=X.fromObject(n);return li(t,new Yr(vd(),e,i))}function hn(t,e,n=!1){const r=zI(t.pendingWriteTree_,e);if(BI(t.pendingWriteTree_,e)){let s=new X(null);return r.snap!=null?s=s.set($(),!0):Pe(r.children,o=>{s=s.set(new Y(o),!0)}),li(t,new rl(r.path,s,n))}else return[]}function bs(t,e,n){return li(t,new rr(_d(),e,n))}function Ck(t,e,n){const r=X.fromObject(n);return li(t,new Yr(_d(),e,r))}function Ik(t,e){return li(t,new fs(_d(),e))}function kk(t,e,n){const r=kd(t,n);if(r){const i=Td(r),s=i.path,o=i.queryId,l=Me(s,e),a=new fs(yd(o),l);return xd(t,s,a)}else return[]}function cl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||i_(o,e))){const a=_k(o,e,n,r);gk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,v)=>bn(v));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const v=Rk(h);for(let _=0;_<v.length;++_){const y=v[_],E=y.query,g=u_(t,y);t.listenProvider_.startListening(Ui(E),ps(t,E),g.hashFn,g.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Ui(e),null):u.forEach(h=>{const v=t.queryToTagMap.get(Ul(h));t.listenProvider_.stopListening(Ui(h),v)}))}Nk(t,u)}return l}function o_(t,e,n,r){const i=kd(t,r);if(i!=null){const s=Td(i),o=s.path,l=s.queryId,a=Me(o,e),u=new rr(yd(l),a,n);return xd(t,o,u)}else return[]}function Tk(t,e,n,r){const i=kd(t,r);if(i){const s=Td(i),o=s.path,l=s.queryId,a=Me(o,e),u=X.fromObject(n),d=new Yr(yd(l),a,u);return xd(t,o,d)}else return[]}function qu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,v)=>{const _=Me(h,i);s=s||kn(v,_),o=o||bn(v)});let l=t.syncPointTree_.get(i);l?(o=o||bn(l),s=s||kn(l,$())):(l=new e_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,_)=>{const y=kn(_,$());y&&(s=s.updateImmediateChild(v,y))}));const u=i_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Ul(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=Pk();t.queryToTagMap.set(h,v),t.tagToQueryMap.set(v,h)}const d=Fl(t.pendingWriteTree_,i);let c=vk(l,e,n,d,s,a);if(!u&&!o&&!r){const h=r_(l,e);c=c.concat(bk(t,e,h))}return c}function Id(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=kn(l,a);if(u)return u});return Qv(i,e,s,n,!0)}function xk(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Me(u,n);r=r||kn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||kn(i,$()):(i=new e_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Pn(r,!0,!1):null,l=Fl(t.pendingWriteTree_,e._path),a=t_(i,e,l,s?o.getNode():D.EMPTY_NODE,s);return ck(a)}function li(t,e){return l_(e,t.syncPointTree_,null,Fl(t.pendingWriteTree_,$()))}function l_(t,e,n,r){if(B(t.path))return a_(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=kn(i,$()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=qv(r,o);s=s.concat(l_(l,a,u,d))}return i&&(s=s.concat(Cd(i,t,r,n))),s}}function a_(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=kn(i,$()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=qv(r,o),d=t.operationForChild(o);d&&(s=s.concat(a_(d,l,a,u)))}),i&&(s=s.concat(Cd(i,t,r,n))),s}function u_(t,e){const n=e.query,r=ps(t,n);return{hashFn:()=>(uk(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?kk(t,n._path,r):Ik(t,n._path);{const s=IC(i,n);return cl(t,n,null,s)}}}}function ps(t,e){const n=Ul(e);return t.queryToTagMap.get(n)}function Ul(t){return t._path.toString()+"$"+t._queryIdentifier}function kd(t,e){return t.tagToQueryMap.get(e)}function Td(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function xd(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=Fl(t.pendingWriteTree_,e);return Cd(r,n,i,null)}function Rk(t){return t.fold((e,n,r)=>{if(n&&bn(n))return[jl(n)];{let i=[];return n&&(i=n_(n)),Pe(r,(s,o)=>{i=i.concat(o)}),i}})}function Ui(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(wk())(t._repo,t._path):t}function Nk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ul(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Pk(){return Sk++}function bk(t,e,n){const r=e._path,i=ps(t,e),s=u_(t,n),o=t.listenProvider_.startListening(Ui(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!bn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!B(u)&&d&&bn(d))return[jl(d).query];{let h=[];return d&&(h=h.concat(n_(d).map(v=>v.query))),Pe(c,(v,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Ui(d),ps(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rd(n)}node(){return this.node_}}class Nd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new Nd(this.syncTree_,n)}node(){return Id(this.syncTree_,this.path_)}}const Ak=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Zf=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ok(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Dk(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ok=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},Dk=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},c_=function(t,e,n,r){return Pd(e,new Nd(n,t),r)},d_=function(t,e,n){return Pd(t,new Rd(e),n)};function Pd(t,e,n){const r=t.getPriority().val(),i=Zf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Zf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ee(i))),o.forEachChild(ce,(l,a)=>{const u=Pd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ad(t,e){let n=e instanceof Y?e:new Y(e),r=t,i=U(n);for(;i!==null;){const s=Gr(r.node.children,i)||{children:{},childCount:0};r=new bd(i,r,s),n=Z(n),i=U(n)}return r}function ai(t){return t.node.value}function h_(t,e){t.node.value=e,Yu(t)}function f_(t){return t.node.childCount>0}function Lk(t){return ai(t)===void 0&&!f_(t)}function zl(t,e){Pe(t.node.children,(n,r)=>{e(new bd(n,t,r))})}function p_(t,e,n,r){n&&e(t),zl(t,i=>{p_(i,e,!0)})}function Mk(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function As(t){return new Y(t.parent===null?t.name:As(t.parent)+"/"+t.name)}function Yu(t){t.parent!==null&&Fk(t.parent,t.name,t)}function Fk(t,e,n){const r=Lk(n),i=Pt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Yu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Yu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=/[\[\].#$\/\u0000-\u001F\u007F]/,Uk=/[\[\].#$\u0000-\u001F\u007F]/,La=10*1024*1024,Od=function(t){return typeof t=="string"&&t.length!==0&&!jk.test(t)},m_=function(t){return typeof t=="string"&&t.length!==0&&!Uk.test(t)},zk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),m_(t)},Bk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!od(t)||t&&typeof t=="object"&&Pt(t,".sv")},Wk=function(t,e,n,r){Bl(Ol(t,"value"),e,n)},Bl=function(t,e,n){const r=n instanceof Y?new iI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wn(r)+" with contents = "+e.toString());if(od(e))throw new Error(t+"contains "+e.toString()+" "+Wn(r));if(typeof e=="string"&&e.length>La/3&&Dl(e)>La)throw new Error(t+"contains a string greater than "+La+" utf8 bytes "+Wn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Pe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Od(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sI(r,o),Bl(t,l,r),oI(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wn(r)+" in addition to actual children.")}},Vk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=us(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Od(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(rI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&lt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Hk=function(t,e,n,r){const i=Ol(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Pe(e,(o,l)=>{const a=new Y(o);if(Bl(i,l,ue(n,a)),dd(a)===".priority"&&!Bk(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),Vk(i,s)},g_=function(t,e,n,r){if(!m_(n))throw new Error(Ol(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$k=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),g_(t,e,n)},v_=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Gk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Od(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zk(n))throw new Error(Ol(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!hd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function __(t,e,n){Wl(t,n),y_(t,r=>hd(r,e))}function dt(t,e,n){Wl(t,n),y_(t,r=>lt(r,e)||lt(e,r))}function y_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Qk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Qk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Li&&xe("event: "+n.toString()),oi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="repo_interrupt",Yk=25;class Jk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Kk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nl(),this.transactionQueueTree_=new bd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xk(t,e,n){if(t.stats_=ud(t.repoInfo_),t.forceRestClient_||RC())t.server_=new tl(t.repoInfo_,(r,i,s,o)=>{ep(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>tp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Bt(t.repoInfo_,e,(r,i,s,o)=>{ep(t,r,i,s,o)},r=>{tp(t,r)},r=>{eT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=OC(t.repoInfo_,()=>new AI(t.stats_,t.server_)),t.infoData_=new xI,t.infoSyncTree_=new Xf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=bs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Dd(t,"connected",!1),t.serverSyncTree_=new Xf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);dt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Zk(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vl(t){return Ak({timestamp:Zk(t)})}function ep(t,e,n,r,i){t.dataUpdateCount++;const s=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=qo(n,u=>_e(u));o=Tk(t.serverSyncTree_,s,a,i)}else{const a=_e(n);o=o_(t.serverSyncTree_,s,a,i)}else if(r){const a=qo(n,u=>_e(u));o=Ck(t.serverSyncTree_,s,a)}else{const a=_e(n);o=bs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Xr(t,s)),dt(t.eventQueue_,l,o)}function tp(t,e){Dd(t,"connected",e),e===!1&&iT(t)}function eT(t,e){Pe(e,(n,r)=>{Dd(t,n,r)})}function Dd(t,e,n){const r=new Y("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=bs(t.infoSyncTree_,r,i);dt(t.eventQueue_,r,s)}function Ld(t){return t.nextWriteId_++}function tT(t,e,n){const r=xk(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=_e(i).withIndex(e._queryParams.getIndex());qu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=bs(t.serverSyncTree_,e._path,s);else{const l=ps(t.serverSyncTree_,e);o=o_(t.serverSyncTree_,e._path,s,l)}return dt(t.eventQueue_,e._path,o),cl(t.serverSyncTree_,e,n,null,!0),s},i=>(Os(t,"get for query "+ye(e)+" failed: "+i),Promise.reject(new Error(i))))}function nT(t,e,n,r,i){Os(t,"set",{path:e.toString(),value:n,priority:r});const s=Vl(t),o=_e(n,r),l=Id(t.serverSyncTree_,e),a=d_(o,l,s),u=Ld(t),d=s_(t.serverSyncTree_,e,a,u,!0);Wl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,v)=>{const _=h==="ok";_||je("set at "+e+" failed: "+h);const y=hn(t.serverSyncTree_,u,!_);dt(t.eventQueue_,e,y),Ju(t,i,h,v)});const c=Fd(t,e);Xr(t,c),dt(t.eventQueue_,c,[])}function rT(t,e,n,r){Os(t,"update",{path:e.toString(),value:n});let i=!0;const s=Vl(t),o={};if(Pe(n,(l,a)=>{i=!1,o[l]=c_(ue(e,l),_e(a),t.serverSyncTree_,s)}),i)xe("update() called with empty data.  Don't do anything."),Ju(t,r,"ok",void 0);else{const l=Ld(t),a=Ek(t.serverSyncTree_,e,o,l);Wl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||je("update at "+e+" failed: "+u);const h=hn(t.serverSyncTree_,l,!c),v=h.length>0?Xr(t,e):e;dt(t.eventQueue_,v,h),Ju(t,r,u,d)}),Pe(n,u=>{const d=Fd(t,ue(e,u));Xr(t,d)}),dt(t.eventQueue_,e,[])}}function iT(t){Os(t,"onDisconnectEvents");const e=Vl(t),n=nl();Vu(t.onDisconnect_,$(),(i,s)=>{const o=c_(i,s,t.serverSyncTree_,e);Hv(n,i,o)});let r=[];Vu(n,$(),(i,s)=>{r=r.concat(bs(t.serverSyncTree_,i,s));const o=Fd(t,i);Xr(t,o)}),t.onDisconnect_=nl(),dt(t.eventQueue_,$(),r)}function sT(t,e,n){let r;U(e._path)===".info"?r=qu(t.infoSyncTree_,e,n):r=qu(t.serverSyncTree_,e,n),__(t.eventQueue_,e._path,r)}function oT(t,e,n){let r;U(e._path)===".info"?r=cl(t.infoSyncTree_,e,n):r=cl(t.serverSyncTree_,e,n),__(t.eventQueue_,e._path,r)}function lT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qk)}function Os(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xe(n,...e)}function Ju(t,e,n,r){e&&oi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function w_(t,e,n){return Id(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function Md(t,e=t.transactionQueueTree_){if(e||Hl(t,e),ai(e)){const n=E_(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&aT(t,As(e),n)}else f_(e)&&zl(e,n=>{Md(t,n)})}function aT(t,e,n){const r=n.map(u=>u.currentWriteId),i=w_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];k(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Me(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Os(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(hn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Hl(t,Ad(t.transactionQueueTree_,e)),Md(t,t.transactionQueueTree_),dt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)oi(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{je("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Xr(t,e)}},o)}function Xr(t,e){const n=S_(t,e),r=As(n),i=E_(t,n);return uT(t,i,r),r}function uT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let d=!1,c;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(hn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Yk)d=!0,c="maxretry",i=i.concat(hn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=w_(t,a.path,o);a.currentInputSnapshot=h;const v=e[l].update(h.val());if(v!==void 0){Bl("transaction failed: Data returned ",v,a.path);let _=_e(v);typeof v=="object"&&v!=null&&Pt(v,".priority")||(_=_.updatePriority(h.getPriority()));const E=a.currentWriteId,g=Vl(t),p=d_(_,h,g);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=p,a.currentWriteId=Ld(t),o.splice(o.indexOf(E),1),i=i.concat(s_(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(hn(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(hn(t.serverSyncTree_,a.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Hl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)oi(r[l]);Md(t,t.transactionQueueTree_)}function S_(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&ai(r)===void 0;)r=Ad(r,n),e=Z(e),n=U(e);return r}function E_(t,e){const n=[];return C_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function C_(t,e,n){const r=ai(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);zl(e,i=>{C_(t,i,n)})}function Hl(t,e){const n=ai(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,h_(e,n.length>0?n:void 0)}zl(e,r=>{Hl(t,r)})}function Fd(t,e){const n=As(S_(t,e)),r=Ad(t.transactionQueueTree_,e);return Mk(r,i=>{Ma(t,i)}),Ma(t,r),p_(r,i=>{Ma(t,i)}),n}function Ma(t,e){const n=ai(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?h_(e,void 0):n.length=s+1,dt(t.eventQueue_,As(e),i);for(let o=0;o<r.length;o++)oi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function dT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const np=function(t,e){const n=hT(t),r=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Y(n.pathString)}},hT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=cT(t.substring(d,c)));const h=dT(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class pT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:dd(this._path)}get ref(){return new Jt(this._repo,this._path)}get _queryIdentifier(){const e=Wf(this._queryParams),n=ld(e);return n==="{}"?"default":n}get _queryObject(){return Wf(this._queryParams)}isEqual(e){if(e=ht(e),!(e instanceof jd))return!1;const n=this._repo===e._repo,r=hd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nI(this._path)}}class Jt extends jd{constructor(e,n){super(e,n,new gd,!1)}get parent(){const e=Mv(this._path);return e===null?null:new Jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ms{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Y(e),r=Xu(this.ref,e);return new ms(this._node.getChild(n),r,ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ms(i,Xu(this.ref,r),ce)))}hasChild(e){const n=new Y(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ue(t,e){return t=ht(t),t._checkNotDeleted("ref"),e!==void 0?Xu(t._root,e):t._root}function Xu(t,e){return t=ht(t),U(t._path)===null?$k("child","path",e):g_("child","path",e),new Jt(t._repo,ue(t._path,e))}function Ud(t){return v_("remove",t._path),gs(t,null)}function gs(t,e){t=ht(t),v_("set",t._path),Wk("set",e,t._path);const n=new Ts;return nT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function zd(t,e){Hk("update",e,t._path);const n=new Ts;return rT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function mT(t){t=ht(t);const e=new I_(()=>{}),n=new $l(e);return tT(t._repo,t,n).then(r=>new ms(r,new Jt(t._repo,t._path),t._queryParams.getIndex()))}class $l{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new fT("value",this,new ms(e.snapshotNode,new Jt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pT(this,e,n):null}matches(e){return e instanceof $l?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function gT(t,e,n,r,i){const s=new I_(n,void 0),o=new $l(s);return sT(t._repo,t,o),()=>oT(t._repo,t,o)}function Gl(t,e,n,r){return gT(t,"value",e)}pk(Jt);yk(Jt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="FIREBASE_DATABASE_EMULATOR_HOST",Zu={};let _T=!1;function yT(t,e,n,r){t.repoInfo_=new xv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function wT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=np(s,i),l=o.repoInfo,a;typeof process<"u"&&If&&(a=If[vT]),a?(s=`http://${a}?ns=${l.namespace}`,o=np(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new PC(t.name,t.options,e);Gk("Invalid Firebase Database URL",o),B(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ET(l,t,u,new NC(t.name,n));return new CT(d,t)}function ST(t,e){const n=Zu[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lT(t),delete n[t.key]}function ET(t,e,n,r){let i=Zu[e.name];i||(i={},Zu[e.name]=i);let s=i[t.toURLString()];return s&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Jk(t,_T,n,r),i[t.toURLString()]=s,s}class CT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ST(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function IT(t=cv(),e){const n=sd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=zS("database");r&&kT(n,...r)}return n}function kT(t,e,n,r={}){t=ht(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Kt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new _o(_o.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:BS(r.mockUserToken,t.app.options.projectId);s=new _o(o)}yT(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t){fC(si),Kr(new tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Cn(kf,Tf,t),Cn(kf,Tf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={".sv":"timestamp"};function rp(){return xT}Bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TT();function Bd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function k_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RT=k_,T_=new xs("auth","Firebase",k_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new rd("@firebase/auth");function NT(t,...e){dl.logLevel<=q.WARN&&dl.warn(`Auth (${si}): ${t}`,...e)}function yo(t,...e){dl.logLevel<=q.ERROR&&dl.error(`Auth (${si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw Wd(t,...e)}function Rt(t,...e){return Wd(t,...e)}function x_(t,e,n){const r=Object.assign(Object.assign({},RT()),{[e]:n});return new xs("auth","Firebase",r).create(e,{appName:t.name})}function Tn(t){return x_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return T_.create(t,...e)}function L(t,e,...n){if(!t)throw Wd(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function qt(t,e){t||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PT(){return ip()==="http:"||ip()==="https:"}function ip(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PT()||VS()||"connection"in navigator)?navigator.onLine:!0}function AT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=nd()||sv()}get(){return bT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=new Ds(3e4,6e4);function Kl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ui(t,e,n,r,i={}){return N_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ii(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return WS()||(u.referrerPolicy="no-referrer"),R_.fetch()(b_(t,t.config.apiHost,n,l),u)})}async function N_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OT),e);try{const i=new LT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw io(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw x_(t,d,u);Qt(t,d)}}catch(i){if(i instanceof Mn)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function P_(t,e,n,r,i={}){const s=await ui(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function b_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vd(t.config,i):`${t.config.apiScheme}://${i}`}class LT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),DT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(t,e){return ui(t,"POST","/v1/accounts:delete",e)}async function A_(t,e){return ui(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FT(t,e=!1){const n=ht(t),r=await n.getIdToken(e),i=Hd(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zi(Fa(i.auth_time)),issuedAtTime:zi(Fa(i.iat)),expirationTime:zi(Fa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fa(t){return Number(t)*1e3}function Hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qo(n);return i?JSON.parse(i):(yo("Failed to decode base64 JWT payload"),null)}catch(i){return yo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sp(t){const e=Hd(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&jT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vs(t,A_(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?O_(s.providerUserInfo):[],l=BT(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new tc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function zT(t){const e=ht(t);await hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function O_(t){return t.map(e=>{var{providerId:n}=e,r=Bd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WT(t,e){const n=await N_(t,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=b_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",R_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VT(t,e){return ui(t,"POST","/v2/accounts:revokeToken",Kl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){L(e.length!==0,"internal-error");const n=sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mr;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FT(this,e)}reload(){return zT(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await vs(this,MT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,E=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:I,providerData:R,stsTokenManager:x}=n;L(m&&x,e,"internal-error");const b=Mr.fromJSON(this.name,x);L(typeof m=="string",e,"internal-error"),Zt(c,e.name),Zt(h,e.name),L(typeof w=="boolean",e,"internal-error"),L(typeof I=="boolean",e,"internal-error"),Zt(v,e.name),Zt(_,e.name),Zt(y,e.name),Zt(E,e.name),Zt(g,e.name),Zt(p,e.name);const F=new jt({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:I,photoURL:_,phoneNumber:v,tenantId:y,stsTokenManager:b,createdAt:g,lastLoginAt:p});return R&&Array.isArray(R)&&(F.providerData=R.map(O=>Object.assign({},O))),E&&(F._redirectEventId=E),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mr;i.updateFromServerResponse(n);const s=new jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?O_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Mr;l.updateFromIdToken(r);const a=new jt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new tc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=new Map;function Ut(t){qt(t instanceof Function,"Expected a class definition");let e=op.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,op.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}D_.type="NONE";const lp=D_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wo(this.userKey,i.apiKey,s),this.fullPersistenceKey=wo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fr(Ut(lp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ut(lp);const o=wo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=jt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Fr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Fr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(j_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z_(e))return"Blackberry";if(B_(e))return"Webos";if(M_(e))return"Safari";if((e.includes("chrome/")||F_(e))&&!e.includes("edge/"))return"Chrome";if(U_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function L_(t=Be()){return/firefox\//i.test(t)}function M_(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function F_(t=Be()){return/crios\//i.test(t)}function j_(t=Be()){return/iemobile/i.test(t)}function U_(t=Be()){return/android/i.test(t)}function z_(t=Be()){return/blackberry/i.test(t)}function B_(t=Be()){return/webos/i.test(t)}function $d(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HT(t=Be()){var e;return $d(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $T(){return HS()&&document.documentMode===10}function W_(t=Be()){return $d(t)||U_(t)||B_(t)||z_(t)||/windows phone/i.test(t)||j_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t,e=[]){let n;switch(t){case"Browser":n=ap(Be());break;case"Worker":n=`${ap(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(t,e={}){return ui(t,"GET","/v2/passwordPolicy",Kl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=6;class qT{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new up(this),this.idTokenSubscription=new up(this),this.beforeStateQueue=new GT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await A_(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(Tn(this));const n=e?ht(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KT(this),n=new qT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=V_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ql(t){return ht(t)}class up{constructor(e){this.auth=e,this.observer=null,this.addObserver=eE(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JT(t){Gd=t}function XT(t){return Gd.loadJS(t)}function ZT(){return Gd.gapiScript}function ex(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(t,e){const n=sd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yo(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function nx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rx(t,e,n){const r=Ql(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=H_(e),{host:o,port:l}=ix(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),sx()}function H_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ix(t){const e=H_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cp(o)}}}function cp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t,e){return P_(t,"POST","/v1/accounts:signInWithIdp",Kl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox="http://localhost";class sr extends $_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jr(e,n)}buildRequest(){const e={requestUri:ox,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends G_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Ls{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Ls{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return on.credential(n,r)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Ls{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.GITHUB_SIGN_IN_METHOD="github.com";ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Ls{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,e){return P_(t,"POST","/v1/accounts:signUp",Kl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jt._fromIdTokenResponse(e,r,i),o=dp(r);return new An({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dp(r);return new An({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax(t){var e;if(Lt(t.app))return Promise.reject(Tn(t));const n=Ql(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new An({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await lx(n,{returnSecureToken:!0}),i=await An._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Mn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fl(e,n,r,i)}}function K_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fl._fromErrorAndOperation(t,s,e,r):s})}async function ux(t,e,n=!1){const r=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return An._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e,n=!1){const{auth:r}=t;if(Lt(r.app))return Promise.reject(Tn(r));const i="reauthenticate";try{const s=await vs(t,K_(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=Hd(s.idToken);L(o,r,"internal-error");const{sub:l}=o;return L(t.uid===l,r,"user-mismatch"),An._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(t,e,n=!1){if(Lt(t.app))return Promise.reject(Tn(t));const r="signIn",i=await K_(t,r,e),s=await An._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function hx(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function fx(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}const pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pl,"1"),this.storage.removeItem(pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=1e3,mx=10;class q_ extends Q_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=W_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$T()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},px)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}q_.type="LOCAL";const gx=q_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_ extends Q_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Y_.type="SESSION";const J_=Y_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await vx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Kd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function yx(t){Nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function wx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ex(){return X_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firebaseLocalStorageDb",Cx=1,ml="firebaseLocalStorage",ey="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yl(t,e){return t.transaction([ml],e?"readwrite":"readonly").objectStore(ml)}function Ix(){const t=indexedDB.deleteDatabase(Z_);return new Ms(t).toPromise()}function nc(){const t=indexedDB.open(Z_,Cx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ml,{keyPath:ey})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ml)?e(r):(r.close(),await Ix(),e(await nc()))})})}async function hp(t,e,n){const r=Yl(t,!0).put({[ey]:e,value:n});return new Ms(r).toPromise()}async function kx(t,e){const n=Yl(t,!1).get(e),r=await new Ms(n).toPromise();return r===void 0?null:r.value}function fp(t,e){const n=Yl(t,!0).delete(e);return new Ms(n).toPromise()}const Tx=800,xx=3;class ty{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return X_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(Ex()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wx(),!this.activeServiceWorker)return;this.sender=new _x(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nc();return await hp(e,pl,"1"),await fp(e,pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yl(i,!1).getAll();return new Ms(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ty.type="LOCAL";const Rx=ty;new Ds(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(t,e){return e?Ut(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd extends $_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Px(t){return dx(t.auth,new Qd(t),t.bypassAuthState)}function bx(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),cx(n,new Qd(t),t.bypassAuthState)}async function Ax(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),ux(n,new Qd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Px;case"linkViaPopup":case"linkViaRedirect":return Ax;case"reauthViaPopup":case"reauthViaRedirect":return bx;default:Qt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=new Ds(2e3,1e4);class xr extends ny{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ox.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx="pendingRedirect",So=new Map;class Lx extends ny{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await Mx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mx(t,e){const n=Ux(e),r=jx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Fx(t,e){So.set(t._key(),e)}function jx(t){return Ut(t._redirectPersistence)}function Ux(t){return wo(Dx,t.config.apiKey,t.name)}async function zx(t,e,n=!1){if(Lt(t.app))return Promise.reject(Tn(t));const r=Ql(t),i=Nx(r,e),o=await new Lx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=10*60*1e3;class Wx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ry(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bx&&this.cachedEventUids.clear(),this.cachedEventUids.has(pp(e))}saveEventToCache(e){this.cachedEventUids.add(pp(e)),this.lastProcessedEventTime=Date.now()}}function pp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ry({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ry(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hx(t,e={}){return ui(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gx=/^https?/;async function Kx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hx(t);for(const n of e)try{if(Qx(n))return}catch{}Qt(t,"unauthorized-domain")}function Qx(t){const e=ec(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gx.test(n))return!1;if($x.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=new Ds(3e4,6e4);function mp(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Yx(t){return new Promise((e,n)=>{var r,i,s;function o(){mp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mp(),n(Rt(t,"network-request-failed"))},timeout:qx.get()})}if(!((i=(r=Nt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Nt().gapi)===null||s===void 0)&&s.load)o();else{const l=ex("iframefcb");return Nt()[l]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},XT(`${ZT()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function Jx(t){return Eo=Eo||Yx(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=new Ds(5e3,15e3),Zx="__/auth/iframe",e1="emulator/auth/iframe",t1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},n1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function r1(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vd(e,e1):`https://${t.config.authDomain}/${Zx}`,r={apiKey:e.apiKey,appName:t.name,v:si},i=n1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ii(r).slice(1)}`}async function i1(t){const e=await Jx(t),n=Nt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:r1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:t1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),l=Nt().setTimeout(()=>{s(o)},Xx.get());function a(){Nt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o1=500,l1=600,a1="_blank",u1="http://localhost";class gp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function c1(t,e,n,r=o1,i=l1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},s1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Be().toLowerCase();n&&(l=F_(u)?a1:n),L_(u)&&(e=e||u1,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[v,_])=>`${h}${v}=${_},`,"");if(HT(u)&&l!=="_self")return d1(e||"",l),new gp(null);const c=window.open(e||"",l,d);L(c,t,"popup-blocked");try{c.focus()}catch{}return new gp(c)}function d1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="__/auth/handler",f1="emulator/auth/handler",p1=encodeURIComponent("fac");async function vp(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:i};if(e instanceof G_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Ls){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${p1}=${encodeURIComponent(a)}`:"";return`${m1(t)}?${ii(l).slice(1)}${u}`}function m1({config:t}){return t.emulator?Vd(t,f1):`https://${t.authDomain}/${h1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="webStorageSupport";class g1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=J_,this._completeRedirectFn=zx,this._overrideRedirectResult=Fx}async _openPopup(e,n,r,i){var s;qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await vp(e,n,r,ec(),i);return c1(e,o,Kd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await vp(e,n,r,ec(),i);return yx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await i1(e),r=new Wx(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ja,{type:ja},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ja];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return W_()||M_()||$d()}}const v1=g1;var _p="@firebase/auth",yp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function w1(t){Kr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:V_(t)},u=new YT(r,i,s,a);return nx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new tr("auth-internal",e=>{const n=Ql(e.getProvider("auth").getImmediate());return(r=>new _1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(_p,yp,y1(t)),Cn(_p,yp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=5*60,E1=iv("authIdTokenMaxAge")||S1;let wp=null;const C1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>E1)return;const i=n==null?void 0:n.token;wp!==i&&(wp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function I1(t=cv()){const e=sd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tx(t,{popupRedirectResolver:v1,persistence:[Rx,gx,J_]}),r=iv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=C1(s.toString());fx(n,o,()=>o(n.currentUser)),hx(n,l=>o(l))}}const i=nv("auth");return i&&rx(n,`http://${i}`),n}function k1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",k1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});w1("Browser");const T1={apiKey:"AIzaSyBiZSV4Z_3-L0z8RP5yY_2xXlw5fKOy2jc",authDomain:"classroom-polling-dd344.firebaseapp.com",databaseURL:"https://classroom-polling-dd344-default-rtdb.firebaseio.com",projectId:"classroom-polling-dd344",storageBucket:"classroom-polling-dd344.firebasestorage.app",messagingSenderId:"528103899828",appId:"1:528103899828:web:f74274640de611a61d0de1"},iy=uv(T1),ze=IT(iy),x1=I1(iy);ax(x1).catch(console.error);function R1(t){const e=new Date().toISOString().split("T")[0];return gs(Ue(ze,`session/students/${t}`),{joinedAt:rp(),date:e}),gs(Ue(ze,`sessionStudents/${e}_${t}`),{name:t,date:e,joinedAt:rp()})}function Sp(t){return Ud(Ue(ze,`session/students/${t}`))}function N1(t,e,n){return zd(Ue(ze,"session/activePoll/responses"),{[t]:n})}function P1({question:t,options:e,correctIndex:n,duration:r,resultPolicy:i,correctPolicy:s}){const o=`poll_${Date.now()}`;return gs(Ue(ze,"session/activePoll"),{id:o,question:t,options:e,correctIndex:n??null,duration:r,resultPolicy:i,correctPolicy:s,startedAt:Date.now(),responses:{},ended:!1,revealResults:!1,revealCorrect:!1})}async function b1(t,e){const r=(await mT(Ue(ze,"session/activePoll"))).val();if(r)return await gs(Ue(ze,`pollHistory/${r.id}`),{...r,revealResults:t,revealCorrect:e,endedAt:Date.now()}),Ud(Ue(ze,"session/activePoll"))}function A1(){return zd(Ue(ze,"session/activePoll"),{ended:!0})}function Ep(t,e){return zd(Ue(ze,"session/activePoll"),{revealResults:t,revealCorrect:e})}function sy(t){const e=Ue(ze,"session/activePoll");return Gl(e,n=>t(n.val()))}function O1(t){const e=Ue(ze,"session/students");return Gl(e,n=>{const r=n.val()||{};t(Object.keys(r).map(i=>({name:i,...r[i]})))})}function D1(t){const e=Ue(ze,"pollHistory");return Gl(e,n=>{const r=n.val()||{},i=Object.values(r).sort((s,o)=>(o.startedAt||0)-(s.startedAt||0));t(i)})}const Cp=60,L1=[{value:"on_submit",label:"After they submit",hint:"Each student sees results once they answer"},{value:"manual",label:"When I choose",hint:"You flip a toggle during or after the poll"},{value:"never",label:"Never",hint:"Results stay hidden from students"}],M1=[{value:"with_results",label:"With results",hint:"Shown at the same moment as results"},{value:"manual",label:"When I choose",hint:"You flip a toggle independently"},{value:"never",label:"Never",hint:"Correct answer never shown to students"}];function F1(){const t=ks(),[e,n]=S.useState([]),[r,i]=S.useState(null),[s,o]=S.useState(0),[l,a]=S.useState("dashboard"),u=S.useRef(null),[d,c]=S.useState(""),[h,v]=S.useState(["",""]),[_,y]=S.useState(null),[E,g]=S.useState(Cp),[p,m]=S.useState("on_submit"),[w,I]=S.useState("with_results");S.useEffect(()=>{sessionStorage.getItem("role")!=="teacher"&&t("/")},[]),S.useEffect(()=>{const T=sy(le=>{i(le),le&&!le.ended&&o(Math.max(0,Math.round(le.duration-(Date.now()-le.startedAt)/1e3)))}),J=O1(n);return()=>{T(),J()}},[]),S.useEffect(()=>(clearInterval(u.current),r&&!r.ended&&(u.current=setInterval(()=>{const T=Math.max(0,Math.round(r.duration-(Date.now()-r.startedAt)/1e3));o(T),T===0&&(clearInterval(u.current),A1())},500)),()=>clearInterval(u.current)),[r==null?void 0:r.id,r==null?void 0:r.ended]);function R(){h.length<6&&v([...h,""])}function x(T,J){v(h.map((le,rt)=>rt===T?J:le))}function b(T){if(h.length<=2)return;const J=h.filter((le,rt)=>rt!==T);v(J),_===T?y(null):_>T&&y(_-1)}function F(T){T.preventDefault();const J=h.filter(le=>le.trim());!d.trim()||J.length<2||(P1({question:d.trim(),options:J,correctIndex:_,duration:E,resultPolicy:p,correctPolicy:_!=null?w:"never"}),c(""),v(["",""]),y(null),g(Cp),m("on_submit"),I("with_results"),a("dashboard"))}const O=r?Object.keys(r.responses||{}).length:0,pe=r==null?void 0:r.ended;function Ye(T){return T.revealResults?!0:T.resultPolicy==="never"?!1:T.resultPolicy==="on_submit"}function K(T){return T.revealCorrect?!0:T.correctPolicy==="never"?!1:!!(T.correctPolicy==="with_results"&&Ye(T))}return f.jsxs("div",{style:A.page,children:[f.jsxs("aside",{style:A.sidebar,children:[f.jsxs("div",{style:A.logo,children:[f.jsx("span",{style:{color:"var(--accent)"},children:"●"})," ClassPoll"]}),f.jsxs("nav",{style:A.nav,children:[f.jsx("button",{style:{...A.navBtn,...l==="dashboard"?A.navActive:{}},onClick:()=>a("dashboard"),children:"📊 Dashboard"}),f.jsx("button",{style:{...A.navBtn,...l==="create"?A.navActive:{},...r?A.navDisabled:{}},onClick:()=>!r&&a("create"),disabled:!!r,children:"➕ New Poll"}),f.jsx("button",{style:A.navBtn,onClick:()=>t("/history"),children:"🕐 History"})]}),f.jsxs("div",{style:A.sidebarBottom,children:[f.jsxs("div",{style:A.studentCount,children:[f.jsx("span",{style:A.dot}),f.jsx("strong",{children:e.length})," student",e.length!==1?"s":""," online"]}),f.jsx("div",{style:A.studentList,children:e.map(T=>f.jsx("div",{style:A.studentChip,children:T.name},T.name))}),f.jsx("button",{className:"btn btn-secondary",style:{width:"100%",marginTop:"auto",fontSize:"0.8rem"},onClick:()=>{sessionStorage.clear(),t("/")},children:"Exit"})]})]}),f.jsxs("main",{style:A.main,children:[l==="create"&&f.jsxs("div",{style:A.content,className:"fade-up",children:[f.jsx("h2",{style:A.pageTitle,children:"Create a Poll"}),f.jsxs("form",{onSubmit:F,style:A.form,children:[f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Question"}),f.jsx("textarea",{className:"input",rows:2,placeholder:"e.g. Which process converts sunlight into energy?",value:d,onChange:T=>c(T.target.value),style:{resize:"vertical"},required:!0})]}),f.jsxs("div",{children:[f.jsx("label",{className:"label",children:"Answer Options"}),f.jsx("p",{style:A.hint,children:"Click a letter circle to mark the correct answer (optional)"}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:h.map((T,J)=>f.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[f.jsx("button",{type:"button",style:{...A.correctBtn,..._===J?A.correctBtnActive:{}},onClick:()=>y(_===J?null:J),title:"Mark as correct answer",children:_===J?"✓":String.fromCharCode(65+J)}),f.jsx("input",{className:"input",style:{flex:1},placeholder:`Option ${String.fromCharCode(65+J)}`,value:T,onChange:le=>x(J,le.target.value),required:!0}),f.jsx("button",{type:"button",style:A.removeBtn,onClick:()=>b(J),disabled:h.length<=2,children:"✕"})]},J))}),h.length<6&&f.jsx("button",{type:"button",className:"btn btn-ghost",style:{marginTop:"0.5rem",fontSize:"0.85rem"},onClick:R,children:"+ Add option"})]}),f.jsxs("div",{style:A.policySection,children:[f.jsx("label",{className:"label",children:"Show results to students"}),f.jsx("div",{style:A.policyRow,children:L1.map(T=>f.jsxs("button",{type:"button",style:{...A.policyBtn,...p===T.value?A.policyBtnActive:{}},onClick:()=>m(T.value),children:[f.jsx("span",{style:A.policyLabel,children:T.label}),f.jsx("span",{style:A.policyHint,children:T.hint})]},T.value))})]}),_!=null&&f.jsxs("div",{style:A.policySection,children:[f.jsx("label",{className:"label",children:"Reveal correct answer to students"}),f.jsx("div",{style:A.policyRow,children:M1.map(T=>f.jsxs("button",{type:"button",style:{...A.policyBtn,...w===T.value?A.policyBtnActive:{},...T.value==="with_results"&&p==="never"?A.policyBtnDisabled:{}},onClick:()=>{T.value==="with_results"&&p==="never"||I(T.value)},children:[f.jsx("span",{style:A.policyLabel,children:T.label}),f.jsx("span",{style:A.policyHint,children:T.value==="with_results"&&p==="never"?"Not available — results are set to Never":T.hint})]},T.value))})]}),f.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-end"},children:[f.jsxs("div",{style:{flex:1},children:[f.jsx("label",{className:"label",children:"Duration (seconds)"}),f.jsx("input",{className:"input",type:"number",min:10,max:300,value:E,onChange:T=>g(Number(T.target.value))})]}),f.jsx("button",{type:"submit",className:"btn btn-primary",style:{padding:"0.65rem 2rem"},children:"Start Poll →"})]})]})]}),l==="dashboard"&&f.jsxs("div",{style:A.content,className:"fade-up",children:[f.jsx("h2",{style:A.pageTitle,children:"Dashboard"}),!r&&f.jsxs("div",{style:A.empty,children:[f.jsx("span",{style:{fontSize:"3rem"},children:"📋"}),f.jsxs("p",{children:["No active poll. ",f.jsx("button",{style:A.link,onClick:()=>a("create"),children:"Create one →"})]})]}),r&&f.jsxs("div",{style:A.pollCard,children:[f.jsxs("div",{style:A.timerRow,children:[pe?f.jsx("div",{style:A.expiredBadge,children:"⏰"}):f.jsx(j1,{timeLeft:s,total:r.duration}),f.jsxs("div",{style:{flex:1},children:[f.jsx("div",{style:A.pollQuestion,children:r.question}),f.jsxs("div",{style:A.responseMeta,children:[O," / ",e.length," responded",pe&&f.jsx("span",{style:A.expiredTag,children:" · Stopped accepting answers"})]})]})]}),f.jsx("div",{style:{marginTop:"1.25rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:r.options.map((T,J)=>{const le=Object.values(r.responses||{}).filter(M=>M===J).length,rt=O>0?Math.round(le/O*100):0,N=r.correctIndex===J;return f.jsxs("div",{style:A.optionRow,children:[f.jsxs("div",{style:{...A.optionLabel,...N?A.correctLabel:{}},children:[String.fromCharCode(65+J),N?"✓":""]}),f.jsxs("div",{style:{flex:1},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.25rem"},children:[f.jsx("span",{style:{fontSize:"0.9rem"},children:T}),f.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--muted)"},children:[le," (",rt,"%)"]})]}),f.jsx("div",{style:A.barBg,children:f.jsx("div",{style:{...A.barFill,width:`${rt}%`,background:N?"var(--success)":"var(--accent2)"}})})]})]},J)})}),O>0&&f.jsxs("div",{style:{marginTop:"1rem"},children:[f.jsx("label",{className:"label",children:"Responded"}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.4rem"},children:Object.keys(r.responses).map(T=>f.jsx("span",{style:A.answeredChip,children:T},T))})]}),f.jsxs("div",{style:A.controls,children:[f.jsx("label",{className:"label",style:{marginBottom:"0.75rem"},children:"Student display"}),f.jsxs("div",{style:A.controlGrid,children:[r.resultPolicy==="manual"&&f.jsxs("div",{style:A.controlItem,children:[f.jsx("span",{style:A.controlLabel,children:"Results visible to students"}),f.jsx(Ip,{active:!!r.revealResults,onChange:T=>Ep(T,r.revealCorrect)})]}),r.correctPolicy==="manual"&&r.correctIndex!=null&&f.jsxs("div",{style:A.controlItem,children:[f.jsx("span",{style:A.controlLabel,children:"Correct answer visible"}),f.jsx(Ip,{active:!!r.revealCorrect,onChange:T=>Ep(r.revealResults,T)})]}),f.jsxs("div",{style:A.statusSummary,children:[f.jsx(kp,{label:"Results",state:r.resultPolicy==="never"?"never":r.resultPolicy==="on_submit"?"auto":r.revealResults?"shown":"hidden"}),r.correctIndex!=null&&f.jsx(kp,{label:"Answer",state:r.correctPolicy==="never"?"never":K(r)?"shown":"hidden"})]}),f.jsx("button",{className:"btn btn-secondary",style:{marginLeft:"auto",alignSelf:"center"},onClick:()=>b1(r.revealResults,r.revealCorrect),children:"Close Poll"})]})]})]})]})]})]})}function Ip({active:t,onChange:e}){return f.jsx("button",{onClick:()=>e(!t),style:{position:"relative",width:48,height:26,borderRadius:13,border:"none",background:t?"var(--success)":"var(--border)",cursor:"pointer",transition:"background 0.2s",flexShrink:0},children:f.jsx("span",{style:{position:"absolute",top:3,left:t?22:3,width:20,height:20,borderRadius:"50%",background:"white",transition:"left 0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})}function kp({label:t,state:e}){const n={shown:{bg:"#dcfce7",color:"#15803d"},hidden:{bg:"#fee2e2",color:"#b91c1c"},auto:{bg:"#dbeafe",color:"#1d4ed8"},never:{bg:"var(--cream)",color:"var(--muted)"}},r={shown:"Shown",hidden:"Hidden",auto:"Auto",never:"Never"},i=n[e]||n.never;return f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[f.jsxs("span",{style:{fontSize:"0.78rem",color:"var(--muted)"},children:[t,":"]}),f.jsx("span",{style:{background:i.bg,color:i.color,borderRadius:4,padding:"0.15rem 0.5rem",fontSize:"0.75rem",fontWeight:600},children:r[e]})]})}function j1({timeLeft:t,total:e}){const r=2*Math.PI*28,i=e>0?t/e:0,s=r*(1-i),o=i>.4?"var(--accent2)":i>.15?"#f59e0b":"var(--accent)";return f.jsxs("div",{style:{position:"relative",width:72,height:72,flexShrink:0},children:[f.jsxs("svg",{width:"72",height:"72",style:{transform:"rotate(-90deg)"},children:[f.jsx("circle",{cx:"36",cy:"36",r:28,fill:"none",stroke:"var(--cream)",strokeWidth:"5"}),f.jsx("circle",{cx:"36",cy:"36",r:28,fill:"none",stroke:o,strokeWidth:"5",strokeDasharray:r,strokeDashoffset:s,strokeLinecap:"round",style:{transition:"stroke-dashoffset 0.5s linear, stroke 0.5s"}})]}),f.jsx("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.1rem"},children:t})]})}const A={page:{display:"flex",minHeight:"100vh",background:"var(--paper)"},sidebar:{width:220,minHeight:"100vh",background:"var(--ink)",color:"white",display:"flex",flexDirection:"column",padding:"1.5rem 1rem",gap:"0.5rem",position:"sticky",top:0,flexShrink:0},logo:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.1rem",padding:"0 0.5rem",marginBottom:"1rem"},nav:{display:"flex",flexDirection:"column",gap:"0.25rem"},navBtn:{background:"transparent",color:"rgba(255,255,255,0.7)",border:"none",borderRadius:8,padding:"0.6rem 0.75rem",textAlign:"left",cursor:"pointer",fontSize:"0.9rem",transition:"all 0.15s"},navActive:{background:"rgba(255,255,255,0.12)",color:"white"},navDisabled:{opacity:.4,cursor:"not-allowed"},sidebarBottom:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"0.75rem"},studentCount:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",color:"rgba(255,255,255,0.6)"},dot:{width:8,height:8,borderRadius:"50%",background:"#4ade80",flexShrink:0,boxShadow:"0 0 6px #4ade80"},studentList:{display:"flex",flexWrap:"wrap",gap:"0.35rem",maxHeight:120,overflowY:"auto"},studentChip:{background:"rgba(255,255,255,0.1)",borderRadius:4,padding:"0.2rem 0.5rem",fontSize:"0.78rem",color:"rgba(255,255,255,0.8)"},main:{flex:1,padding:"2rem",overflowY:"auto"},content:{maxWidth:720,margin:"0 auto"},pageTitle:{fontSize:"1.6rem",marginBottom:"1.5rem"},form:{display:"flex",flexDirection:"column",gap:"1.25rem",background:"white",padding:"1.5rem",borderRadius:12,border:"1px solid var(--border)"},hint:{fontSize:"0.82rem",color:"var(--muted)",marginBottom:"0.5rem"},policySection:{display:"flex",flexDirection:"column",gap:"0.5rem"},policyRow:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},policyBtn:{display:"flex",flexDirection:"column",gap:"0.2rem",padding:"0.6rem 0.85rem",borderRadius:8,border:"1.5px solid var(--border)",background:"var(--paper)",cursor:"pointer",textAlign:"left",transition:"all 0.15s",flex:1,minWidth:140},policyBtnActive:{borderColor:"var(--accent2)",background:"#eff6ff"},policyBtnDisabled:{opacity:.4,cursor:"not-allowed"},policyLabel:{fontSize:"0.88rem",fontWeight:600,color:"var(--ink)"},policyHint:{fontSize:"0.75rem",color:"var(--muted)"},empty:{textAlign:"center",padding:"4rem 2rem",color:"var(--muted)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem"},link:{background:"none",border:"none",color:"var(--accent2)",cursor:"pointer",fontSize:"inherit",textDecoration:"underline"},pollCard:{background:"white",borderRadius:12,border:"1px solid var(--border)",padding:"1.5rem"},timerRow:{display:"flex",alignItems:"center",gap:"1rem"},pollQuestion:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.1rem"},responseMeta:{color:"var(--muted)",fontSize:"0.85rem",marginTop:"0.2rem"},expiredBadge:{width:72,height:72,borderRadius:"50%",background:"var(--cream)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem",flexShrink:0},expiredTag:{color:"var(--accent)",fontWeight:500},optionRow:{display:"flex",alignItems:"center",gap:"0.75rem"},optionLabel:{width:28,height:28,borderRadius:"50%",background:"var(--cream)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",fontWeight:700,flexShrink:0},correctLabel:{background:"#dcfce7",color:"var(--success)"},barBg:{height:8,borderRadius:4,background:"var(--cream)",overflow:"hidden"},barFill:{height:"100%",borderRadius:4,transition:"width 0.4s ease"},answeredChip:{background:"#dbeafe",color:"var(--accent2)",borderRadius:4,padding:"0.15rem 0.5rem",fontSize:"0.78rem"},correctBtn:{width:32,height:32,borderRadius:"50%",border:"2px solid var(--border)",background:"var(--cream)",cursor:"pointer",fontWeight:700,fontSize:"0.8rem",flexShrink:0,transition:"all 0.15s"},correctBtnActive:{background:"var(--success)",color:"white",borderColor:"var(--success)"},removeBtn:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:"0.9rem",padding:"0.25rem",borderRadius:4},controls:{marginTop:"1.25rem",paddingTop:"1.25rem",borderTop:"1px solid var(--border)"},controlGrid:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},controlItem:{display:"flex",alignItems:"center",gap:"0.6rem"},controlLabel:{fontSize:"0.85rem",color:"var(--muted)"},statusSummary:{display:"flex",gap:"0.75rem",flexWrap:"wrap"}};function U1(){var Ye;const t=ks(),[e,n]=S.useState(""),[r,i]=S.useState(!1),[s,o]=S.useState(null),[l,a]=S.useState(null),[u,d]=S.useState(!1),[c,h]=S.useState(0),[v,_]=S.useState(null),y=S.useRef(null),E=S.useRef(null);S.useEffect(()=>sy(T=>{!T&&s&&(_(s),setTimeout(()=>_(null),1e4)),T&&T.id!==E.current&&(a(null),d(!1),E.current=T.id),o(T),T&&!T.ended&&h(Math.max(0,Math.round(T.duration-(Date.now()-T.startedAt)/1e3)))}),[s]),S.useEffect(()=>(clearInterval(y.current),s&&!s.ended&&(y.current=setInterval(()=>{const K=Math.max(0,Math.round(s.duration-(Date.now()-s.startedAt)/1e3));h(K),K===0&&clearInterval(y.current)},500)),()=>clearInterval(y.current)),[s==null?void 0:s.id,s==null?void 0:s.ended]),S.useEffect(()=>{if(!r||!e)return;const K=()=>Sp(e);return window.addEventListener("beforeunload",K),()=>{K(),window.removeEventListener("beforeunload",K)}},[r,e]);function g(K){K.preventDefault();const T=e.trim();T&&R1(T).then(()=>i(!0))}function p(K){u||c===0||s!=null&&s.ended||a(K)}function m(){l===null||u||!s||(N1(e,s.id,l),d(!0))}const w=s&&((Ye=s.responses)==null?void 0:Ye[e])!==void 0,I=w?s.responses[e]:l,R=s?Object.keys(s.responses||{}).length:0,x=(s==null?void 0:s.ended)||c===0;function b(){return s?s.revealResults?!0:s.resultPolicy==="never"||s.resultPolicy==="manual"?!1:s.resultPolicy==="on_submit"?u||w:!1:!1}function F(){return!s||s.correctIndex==null?!1:s.revealCorrect?!0:s.correctPolicy==="never"||s.correctPolicy==="manual"?!1:s.correctPolicy==="with_results"?b():!1}const O=b(),pe=F();return r?!s&&!v?f.jsx("div",{style:Q.center,children:f.jsxs("div",{style:Q.waitCard,className:"fade-up",children:[f.jsx("div",{style:Q.pulse}),f.jsxs("h2",{style:{fontFamily:"var(--font-display)",fontSize:"1.5rem"},children:["Hi, ",e,"! 👋"]}),f.jsx("p",{style:{color:"var(--muted)"},children:"Waiting for the teacher to start a poll…"}),f.jsx("button",{style:Q.backLink,onClick:()=>{Sp(e),t("/")},children:"Leave session"})]})}):!s&&v?f.jsx("div",{style:Q.center,children:f.jsxs("div",{style:Q.waitCard,className:"fade-up",children:[f.jsx("span",{style:{fontSize:"2.5rem"},children:"✅"}),f.jsx("h2",{style:{fontFamily:"var(--font-display)"},children:"Poll closed!"}),f.jsx("p",{style:{color:"var(--muted)",textAlign:"center"},children:f.jsx("em",{children:v.question})}),v.correctIndex!=null&&v.revealCorrect&&f.jsxs("p",{style:{color:"var(--success)",fontWeight:600},children:["Correct answer: ",v.options[v.correctIndex]]}),f.jsx("p",{style:{color:"var(--muted)",fontSize:"0.85rem"},children:"Waiting for next poll…"})]})}):f.jsxs("div",{style:Q.pollPage,children:[f.jsxs("header",{style:Q.pollHeader,children:[f.jsxs("span",{style:{fontFamily:"var(--font-display)",fontWeight:700},children:[f.jsx("span",{style:{color:"var(--accent)"},children:"●"})," ClassPoll"]}),f.jsxs("span",{style:{color:"var(--muted)",fontSize:"0.9rem"},children:["Signed in as ",f.jsx("strong",{children:e})]})]}),f.jsxs("div",{style:Q.pollContent,className:"fade-up",children:[!s.ended&&f.jsxs(f.Fragment,{children:[f.jsx("div",{style:Q.timerBar,children:f.jsx("div",{style:{...Q.timerFill,width:`${c/s.duration*100}%`,background:c>s.duration*.4?"var(--accent2)":c>s.duration*.15?"#f59e0b":"var(--accent)"}})}),f.jsxs("div",{style:Q.timerLabel,children:[c,"s remaining · ",R," responded"]})]}),s.ended&&f.jsx("div",{style:Q.stoppedBanner,children:"⏰ Time's up — waiting for teacher"}),f.jsx("h2",{style:Q.questionText,children:s.question}),f.jsx("div",{style:Q.optionGrid,children:s.options.map((K,T)=>{const J=I===T,le=s.correctIndex===T,rt=Object.values(s.responses||{}).filter(M=>M===T).length,N=R>0?Math.round(rt/R*100):0;return f.jsxs("button",{style:{...Q.optionBtn,...J?Q.optionSelected:{},...pe&&le?Q.optionCorrect:{},...x||w?{cursor:"default"}:{}},onClick:()=>p(T),disabled:x||w,children:[f.jsx("span",{style:Q.optionLetter,children:String.fromCharCode(65+T)}),f.jsx("span",{style:{flex:1,textAlign:"left"},children:K}),O&&f.jsxs("span",{style:Q.optionPct,children:[N,"%"]}),O&&f.jsx("div",{style:{...Q.optionBar,width:`${N}%`,background:pe&&le?"rgba(22,163,74,0.15)":"rgba(37,99,235,0.1)"}})]},T)})}),!w&&!u&&!x&&f.jsx("button",{className:"btn btn-primary",style:{width:"100%",justifyContent:"center",padding:"0.85rem",fontSize:"1rem",marginTop:"0.5rem"},onClick:m,disabled:l===null,children:"Submit Answer"}),(u||w)&&!x&&f.jsx("div",{style:Q.submittedBadge,children:"✓ Answer submitted"}),x&&!w&&!u&&f.jsx("div",{style:{...Q.submittedBadge,background:"#fef9c3",color:"#854d0e",borderColor:"#fef08a"},children:"⏰ Time's up — no answer recorded"}),x&&(w||u)&&f.jsx("div",{style:Q.submittedBadge,children:"✓ Answer submitted — waiting for teacher"})]})]}):f.jsx("div",{style:Q.center,children:f.jsxs("div",{style:Q.joinCard,className:"fade-up",children:[f.jsxs("div",{style:Q.joinLogo,children:[f.jsx("span",{style:{color:"var(--accent)"},children:"●"})," ClassPoll"]}),f.jsx("h1",{style:{fontSize:"1.8rem",marginBottom:"0.25rem"},children:"Join Session"}),f.jsx("p",{style:{color:"var(--muted)",marginBottom:"1.5rem"},children:"Enter your name to start answering polls"}),f.jsxs("form",{onSubmit:g,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[f.jsx("input",{className:"input",placeholder:"Your first name",value:e,onChange:K=>n(K.target.value),autoFocus:!0,style:{fontSize:"1.1rem",textAlign:"center"},required:!0}),f.jsx("button",{type:"submit",className:"btn btn-primary",style:{justifyContent:"center",padding:"0.75rem"},children:"Join →"})]}),f.jsx("button",{style:Q.backLink,onClick:()=>t("/"),children:"← Back"})]})})}const Q={center:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",background:"var(--paper)"},joinCard:{background:"white",borderRadius:16,border:"1px solid var(--border)",padding:"2.5rem 2rem",maxWidth:380,width:"100%",textAlign:"center",boxShadow:"var(--shadow)"},joinLogo:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.1rem",marginBottom:"1.5rem",display:"block"},backLink:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",marginTop:"1rem",fontSize:"0.85rem",display:"block",textAlign:"center"},waitCard:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",background:"white",borderRadius:16,border:"1px solid var(--border)",padding:"3rem 2rem",maxWidth:380,width:"100%",textAlign:"center",boxShadow:"var(--shadow)"},pulse:{width:16,height:16,borderRadius:"50%",background:"var(--accent2)",boxShadow:"0 0 0 0 rgba(37,99,235,0.4)",animation:"pulse-ring 1.5s ease-out infinite"},pollPage:{minHeight:"100vh",background:"var(--paper)",display:"flex",flexDirection:"column"},pollHeader:{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center",background:"white"},pollContent:{maxWidth:620,margin:"0 auto",padding:"2rem 1rem",width:"100%"},timerBar:{height:6,background:"var(--cream)",borderRadius:3,overflow:"hidden",marginBottom:"0.4rem"},timerFill:{height:"100%",borderRadius:3,transition:"width 0.5s linear, background 0.5s"},timerLabel:{color:"var(--muted)",fontSize:"0.82rem",marginBottom:"1.5rem"},stoppedBanner:{background:"#fef9c3",color:"#854d0e",border:"1px solid #fef08a",borderRadius:8,padding:"0.6rem 1rem",fontSize:"0.9rem",marginBottom:"1.5rem",textAlign:"center"},questionText:{fontFamily:"var(--font-display)",fontSize:"clamp(1.2rem, 3vw, 1.6rem)",lineHeight:1.25,marginBottom:"1.25rem"},optionGrid:{display:"flex",flexDirection:"column",gap:"0.6rem"},optionBtn:{position:"relative",overflow:"hidden",display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.9rem 1rem",borderRadius:10,border:"2px solid var(--border)",background:"white",cursor:"pointer",transition:"all 0.15s",textAlign:"left",fontFamily:"var(--font-body)",fontSize:"0.95rem"},optionSelected:{borderColor:"var(--accent2)",background:"#eff6ff"},optionCorrect:{borderColor:"var(--success)",background:"#f0fdf4"},optionLetter:{width:28,height:28,borderRadius:"50%",background:"var(--cream)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",fontWeight:700,flexShrink:0},optionPct:{color:"var(--muted)",fontSize:"0.82rem",fontWeight:600,flexShrink:0,zIndex:1},optionBar:{position:"absolute",left:0,top:0,height:"100%",transition:"width 0.4s ease",zIndex:0,pointerEvents:"none"},submittedBadge:{marginTop:"1rem",padding:"0.75rem",borderRadius:8,background:"#f0fdf4",color:"var(--success)",textAlign:"center",fontWeight:500,fontSize:"0.9rem",border:"1px solid #bbf7d0"}},z1="teach123";function B1(){const t=ks(),[e,n]=S.useState(!1),[r,i]=S.useState(""),[s,o]=S.useState(""),[l,a]=S.useState([]),[u,d]=S.useState({}),[c,h]=S.useState("polls"),[v,_]=S.useState(null),[y,E]=S.useState(null);S.useEffect(()=>{sessionStorage.getItem("historyAuth")==="true"&&n(!0)},[]),S.useEffect(()=>{if(!e)return;const m=D1(a),w=Gl(Ue(ze,"sessionStudents"),I=>{const R=I.val()||{},x={};Object.values(R).forEach(F=>{const O=F.date||"unknown";x[O]||(x[O]=new Set),x[O].add(F.name)});const b={};Object.entries(x).forEach(([F,O])=>{b[F]=[...O].sort()}),d(b)});return()=>{m(),w()}},[e]);function g(m){m.preventDefault(),r===z1?(sessionStorage.setItem("historyAuth","true"),n(!0)):(o("Incorrect password."),i(""))}function p(m){Ud(Ue(ze,`pollHistory/${m}`)),E(null),_(null)}return e?f.jsxs("div",{style:V.page,children:[f.jsxs("header",{style:V.header,children:[f.jsx("button",{style:V.back,onClick:()=>t("/"),children:"← Back"}),f.jsx("span",{style:V.title,children:"Poll History"}),f.jsxs("div",{style:V.tabs,children:[f.jsx("button",{style:{...V.tab,...c==="polls"?V.tabActive:{}},onClick:()=>h("polls"),children:"Polls"}),f.jsx("button",{style:{...V.tab,...c==="attendance"?V.tabActive:{}},onClick:()=>h("attendance"),children:"Attendance"})]})]}),f.jsxs("main",{style:V.main,children:[c==="polls"&&f.jsxs("div",{className:"fade-up",children:[l.length===0&&f.jsx("div",{style:V.empty,children:"No polls yet. Run your first one in class!"}),l.map((m,w)=>{const I=m.responses||{},R=Object.keys(I).length,x=v===w,b=y===m.id;return f.jsxs("div",{style:V.pollCard,children:[f.jsxs("div",{style:V.pollHeaderRow,children:[f.jsxs("button",{style:V.pollHeaderBtn,onClick:()=>_(x?null:w),children:[f.jsxs("div",{children:[f.jsx("div",{style:V.pollQ,children:m.question}),f.jsxs("div",{style:V.pollMeta,children:[new Date(m.startedAt).toLocaleString()," · ",R," response",R!==1?"s":""]})]}),f.jsx("span",{style:{color:"var(--muted)",marginLeft:"auto"},children:x?"▲":"▼"})]}),b?f.jsxs("div",{style:V.confirmRow,children:[f.jsx("span",{style:V.confirmText,children:"Delete?"}),f.jsx("button",{className:"btn btn-primary",style:{fontSize:"0.78rem",padding:"0.3rem 0.7rem",background:"#dc2626"},onClick:()=>p(m.id),children:"Yes"}),f.jsx("button",{className:"btn btn-secondary",style:{fontSize:"0.78rem",padding:"0.3rem 0.7rem"},onClick:()=>E(null),children:"Cancel"})]}):f.jsx("button",{style:V.deleteBtn,onClick:()=>E(m.id),title:"Delete this poll",children:"🗑"})]}),x&&f.jsxs("div",{style:V.pollDetails,children:[(m.options||[]).map((F,O)=>{const pe=Object.values(I).filter(T=>T===O).length,Ye=R>0?Math.round(pe/R*100):0,K=m.correctIndex===O;return f.jsxs("div",{style:V.histOpt,children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[f.jsxs("span",{style:{fontWeight:K?600:400,color:K?"var(--success)":"inherit"},children:[String.fromCharCode(65+O),". ",F," ",K&&"✓"]}),f.jsxs("span",{style:{color:"var(--muted)",fontSize:"0.85rem"},children:[pe," (",Ye,"%)"]})]}),f.jsx("div",{style:V.barBg,children:f.jsx("div",{style:{...V.barFill,width:`${Ye}%`,background:K?"var(--success)":"var(--accent2)"}})})]},O)}),R>0&&f.jsxs("div",{style:{marginTop:"0.75rem"},children:[f.jsx("label",{className:"label",children:"Who responded"}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.35rem"},children:Object.keys(I).map(F=>f.jsx("span",{style:V.chip,children:F},F))})]})]})]},m.id||w)})]}),c==="attendance"&&f.jsxs("div",{className:"fade-up",children:[Object.keys(u).length===0&&f.jsx("div",{style:V.empty,children:"No attendance records yet."}),Object.entries(u).sort(([m],[w])=>w.localeCompare(m)).map(([m,w])=>f.jsxs("div",{style:V.pollCard,children:[f.jsx("div",{style:V.pollHeaderRow,children:f.jsxs("div",{style:{padding:"0.25rem 0"},children:[f.jsx("div",{style:V.pollQ,children:m}),f.jsxs("div",{style:V.pollMeta,children:[w.length," student",w.length!==1?"s":""]})]})}),f.jsx("div",{style:{padding:"0 1rem 1rem",display:"flex",flexWrap:"wrap",gap:"0.4rem"},children:w.map(I=>f.jsx("span",{style:V.chip,children:I},I))})]},m))]})]})]}):f.jsx("div",{style:V.center,children:f.jsxs("div",{style:V.loginCard,className:"fade-up",children:[f.jsxs("div",{style:V.loginLogo,children:[f.jsx("span",{style:{color:"var(--accent)"},children:"●"})," ClassPoll"]}),f.jsx("h2",{style:{fontSize:"1.4rem",marginBottom:"0.25rem"},children:"Poll History"}),f.jsx("p",{style:{color:"var(--muted)",marginBottom:"1.5rem",fontSize:"0.9rem"},children:"Enter the teacher password to view history and attendance."}),f.jsxs("form",{onSubmit:g,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[f.jsx("input",{className:"input",type:"password",placeholder:"Teacher password",value:r,onChange:m=>{i(m.target.value),o("")},autoFocus:!0,style:{textAlign:"center"}}),s&&f.jsx("span",{style:V.err,children:s}),f.jsx("button",{type:"submit",className:"btn btn-primary",style:{justifyContent:"center",padding:"0.75rem"},children:"View History →"})]}),f.jsx("button",{style:V.backLink,onClick:()=>t("/"),children:"← Back"})]})})}const V={center:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",background:"var(--paper)"},loginCard:{background:"white",borderRadius:16,border:"1px solid var(--border)",padding:"2.5rem 2rem",maxWidth:380,width:"100%",textAlign:"center",boxShadow:"var(--shadow)"},loginLogo:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.1rem",marginBottom:"1.5rem",display:"block"},err:{color:"var(--accent)",fontSize:"0.85rem"},backLink:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",marginTop:"1rem",fontSize:"0.85rem",display:"block",textAlign:"center"},page:{minHeight:"100vh",background:"var(--paper)"},header:{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",background:"white",display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"},back:{background:"none",border:"none",color:"var(--accent2)",cursor:"pointer",fontSize:"0.9rem"},title:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.2rem",flex:1},tabs:{display:"flex",gap:"0.25rem",background:"var(--cream)",borderRadius:8,padding:"0.25rem"},tab:{background:"none",border:"none",padding:"0.35rem 0.85rem",borderRadius:6,cursor:"pointer",fontSize:"0.9rem",color:"var(--muted)",transition:"all 0.15s"},tabActive:{background:"white",color:"var(--ink)",fontWeight:600,boxShadow:"0 1px 3px rgba(0,0,0,0.1)"},main:{maxWidth:720,margin:"0 auto",padding:"1.5rem 1rem"},empty:{textAlign:"center",color:"var(--muted)",padding:"3rem",fontSize:"0.95rem"},pollCard:{background:"white",borderRadius:12,border:"1px solid var(--border)",marginBottom:"0.75rem",overflow:"hidden"},pollHeaderRow:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1rem",borderBottom:"1px solid transparent"},pollHeaderBtn:{display:"flex",alignItems:"center",gap:"0.75rem",background:"none",border:"none",cursor:"pointer",textAlign:"left",flex:1,padding:"0.25rem 0"},pollQ:{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"0.95rem"},pollMeta:{color:"var(--muted)",fontSize:"0.8rem",marginTop:"0.2rem"},deleteBtn:{background:"none",border:"none",cursor:"pointer",fontSize:"1.1rem",padding:"0.25rem 0.4rem",borderRadius:6,flexShrink:0,opacity:.5,transition:"opacity 0.15s"},confirmRow:{display:"flex",alignItems:"center",gap:"0.4rem",flexShrink:0},confirmText:{fontSize:"0.82rem",color:"var(--muted)",whiteSpace:"nowrap"},pollDetails:{padding:"0.75rem 1rem 1rem",borderTop:"1px solid var(--border)"},histOpt:{marginBottom:"0.6rem"},barBg:{height:6,borderRadius:3,background:"var(--cream)",overflow:"hidden"},barFill:{height:"100%",borderRadius:3,transition:"width 0.3s"},chip:{background:"var(--cream)",borderRadius:4,padding:"0.2rem 0.5rem",fontSize:"0.78rem",color:"var(--ink)"}};function W1(){return f.jsx(NS,{basename:"/classroom-polling",children:f.jsxs(TS,{children:[f.jsx(fr,{path:"/",element:f.jsx(bS,{})}),f.jsx(fr,{path:"/teacher",element:f.jsx(F1,{})}),f.jsx(fr,{path:"/student",element:f.jsx(U1,{})}),f.jsx(fr,{path:"/history",element:f.jsx(B1,{})}),f.jsx(fr,{path:"*",element:f.jsx(IS,{to:"/"})})]})})}Ua.createRoot(document.getElementById("root")).render(f.jsx(Mp.StrictMode,{children:f.jsx(W1,{})}));
