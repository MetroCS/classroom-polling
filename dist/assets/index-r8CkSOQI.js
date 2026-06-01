function ry(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function iy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ep={exports:{}},fl={},Cp={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ms=Symbol.for("react.element"),sy=Symbol.for("react.portal"),oy=Symbol.for("react.fragment"),ly=Symbol.for("react.strict_mode"),ay=Symbol.for("react.profiler"),uy=Symbol.for("react.provider"),cy=Symbol.for("react.context"),dy=Symbol.for("react.forward_ref"),hy=Symbol.for("react.suspense"),fy=Symbol.for("react.memo"),py=Symbol.for("react.lazy"),Kd=Symbol.iterator;function my(t){return t===null||typeof t!="object"?null:(t=Kd&&t[Kd]||t["@@iterator"],typeof t=="function"?t:null)}var Ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kp=Object.assign,Tp={};function qr(t,e,n){this.props=t,this.context=e,this.refs=Tp,this.updater=n||Ip}qr.prototype.isReactComponent={};qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xp(){}xp.prototype=qr.prototype;function rc(t,e,n){this.props=t,this.context=e,this.refs=Tp,this.updater=n||Ip}var ic=rc.prototype=new xp;ic.constructor=rc;kp(ic,qr.prototype);ic.isPureReactComponent=!0;var Qd=Array.isArray,Np=Object.prototype.hasOwnProperty,sc={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function Pp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Np.call(e,r)&&!Rp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ms,type:t,key:s,ref:o,props:i,_owner:sc.current}}function gy(t,e){return{$$typeof:ms,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function oc(t){return typeof t=="object"&&t!==null&&t.$$typeof===ms}function vy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qd=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vy(""+t.key):e.toString(36)}function no(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ms:case sy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xl(o,0):r,Qd(i)?(n="",t!=null&&(n=t.replace(qd,"$&/")+"/"),no(i,e,n,"",function(u){return u})):i!=null&&(oc(i)&&(i=gy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Xl(s,l);o+=no(s,e,n,a,i)}else if(a=my(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Xl(s,l++),o+=no(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ms(t,e,n){if(t==null)return t;var r=[],i=0;return no(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _y(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},ro={transition:null},yy={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:ro,ReactCurrentOwner:sc};function Ap(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Ms,forEach:function(t,e,n){Ms(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ms(t,function(){e++}),e},toArray:function(t){return Ms(t,function(e){return e})||[]},only:function(t){if(!oc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=qr;z.Fragment=oy;z.Profiler=ay;z.PureComponent=rc;z.StrictMode=ly;z.Suspense=hy;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy;z.act=Ap;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Np.call(e,a)&&!Rp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ms,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:cy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uy,_context:t},t.Consumer=t};z.createElement=Pp;z.createFactory=function(t){var e=Pp.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:dy,render:t}};z.isValidElement=oc;z.lazy=function(t){return{$$typeof:py,_payload:{_status:-1,_result:t},_init:_y}};z.memo=function(t,e){return{$$typeof:fy,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=ro.transition;ro.transition={};try{t()}finally{ro.transition=e}};z.unstable_act=Ap;z.useCallback=function(t,e){return Me.current.useCallback(t,e)};z.useContext=function(t){return Me.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};z.useEffect=function(t,e){return Me.current.useEffect(t,e)};z.useId=function(){return Me.current.useId()};z.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Me.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};z.useRef=function(t){return Me.current.useRef(t)};z.useState=function(t){return Me.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Me.current.useTransition()};z.version="18.3.1";Cp.exports=z;var I=Cp.exports;const Op=iy(I),wy=ry({__proto__:null,default:Op},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=I,Ey=Symbol.for("react.element"),Cy=Symbol.for("react.fragment"),Iy=Object.prototype.hasOwnProperty,ky=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ty={key:!0,ref:!0,__self:!0,__source:!0};function bp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Iy.call(e,r)&&!Ty.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ey,type:t,key:s,ref:o,props:i,_owner:ky.current}}fl.Fragment=Cy;fl.jsx=bp;fl.jsxs=bp;Ep.exports=fl;var m=Ep.exports,Ua={},Dp={exports:{}},Qe={},Lp={exports:{}},Mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,L){var M=A.length;A.push(L);e:for(;0<M;){var le=M-1>>>1,ve=A[le];if(0<i(ve,L))A[le]=L,A[M]=ve,M=le;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var L=A[0],M=A.pop();if(M!==L){A[0]=M;e:for(var le=0,ve=A.length,Ds=ve>>>1;le<Ds;){var bn=2*(le+1)-1,Jl=A[bn],Dn=bn+1,Ls=A[Dn];if(0>i(Jl,M))Dn<ve&&0>i(Ls,Jl)?(A[le]=Ls,A[Dn]=M,le=Dn):(A[le]=Jl,A[bn]=M,le=bn);else if(Dn<ve&&0>i(Ls,M))A[le]=Ls,A[Dn]=M,le=Dn;else break e}}return L}function i(A,L){var M=A.sortIndex-L.sortIndex;return M!==0?M:A.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,v=!1,_=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=A)r(u),L.sortIndex=L.expirationTime,e(a,L);else break;L=n(u)}}function w(A){if(y=!1,g(A),!_)if(n(a)!==null)_=!0,ql(x);else{var L=n(u);L!==null&&Yl(w,L.startTime-A)}}function x(A,L){_=!1,y&&(y=!1,p(C),C=-1),v=!0;var M=h;try{for(g(L),c=n(a);c!==null&&(!(c.expirationTime>L)||A&&!ge());){var le=c.callback;if(typeof le=="function"){c.callback=null,h=c.priorityLevel;var ve=le(c.expirationTime<=L);L=t.unstable_now(),typeof ve=="function"?c.callback=ve:c===n(a)&&r(a),g(L)}else r(a);c=n(a)}if(c!==null)var Ds=!0;else{var bn=n(u);bn!==null&&Yl(w,bn.startTime-L),Ds=!1}return Ds}finally{c=null,h=M,v=!1}}var N=!1,E=null,C=-1,P=5,b=-1;function ge(){return!(t.unstable_now()-b<P)}function lt(){if(E!==null){var A=t.unstable_now();b=A;var L=!0;try{L=E(!0,A)}finally{L?On():(N=!1,E=null)}}else N=!1}var On;if(typeof f=="function")On=function(){f(lt)};else if(typeof MessageChannel<"u"){var oi=new MessageChannel,Ql=oi.port2;oi.port1.onmessage=lt,On=function(){Ql.postMessage(null)}}else On=function(){S(lt,0)};function ql(A){E=A,N||(N=!0,On())}function Yl(A,L){C=S(function(){A(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,ql(x))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var M=h;h=L;try{return A()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,L){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var M=h;h=A;try{return L()}finally{h=M}},t.unstable_scheduleCallback=function(A,L,M){var le=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?le+M:le):M=le,A){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=M+ve,A={id:d++,callback:L,priorityLevel:A,startTime:M,expirationTime:ve,sortIndex:-1},M>le?(A.sortIndex=M,e(u,A),n(a)===null&&A===n(u)&&(y?(p(C),C=-1):y=!0,Yl(w,M-le))):(A.sortIndex=ve,e(a,A),_||v||(_=!0,ql(x))),A},t.unstable_shouldYield=ge,t.unstable_wrapCallback=function(A){var L=h;return function(){var M=h;h=L;try{return A.apply(this,arguments)}finally{h=M}}}})(Mp);Lp.exports=Mp;var xy=Lp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=I,Ke=xy;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,ji={};function nr(t,e){Lr(t,e),Lr(t+"Capture",e)}function Lr(t,e){for(ji[t]=e,t=0;t<e.length;t++)Fp.add(e[t])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),za=Object.prototype.hasOwnProperty,Ry=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yd={},Jd={};function Py(t){return za.call(Jd,t)?!0:za.call(Yd,t)?!1:Ry.test(t)?Jd[t]=!0:(Yd[t]=!0,!1)}function Ay(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Oy(t,e,n,r){if(e===null||typeof e>"u"||Ay(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Fe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ke[t]=new Fe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ke[e]=new Fe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ke[t]=new Fe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ke[t]=new Fe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ke[t]=new Fe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ke[t]=new Fe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ke[t]=new Fe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ke[t]=new Fe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ke[t]=new Fe(t,5,!1,t.toLowerCase(),null,!1,!1)});var lc=/[\-:]([a-z])/g;function ac(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lc,ac);ke[e]=new Fe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lc,ac);ke[e]=new Fe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lc,ac);ke[e]=new Fe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ke[t]=new Fe(t,1,!1,t.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ke[t]=new Fe(t,1,!1,t.toLowerCase(),null,!0,!0)});function uc(t,e,n,r){var i=ke.hasOwnProperty(e)?ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Oy(e,n,i,r)&&(n=null),r||i===null?Py(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $t=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fs=Symbol.for("react.element"),cr=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),cc=Symbol.for("react.strict_mode"),Ba=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),Wa=Symbol.for("react.suspense"),Va=Symbol.for("react.suspense_list"),hc=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),zp=Symbol.for("react.offscreen"),Xd=Symbol.iterator;function li(t){return t===null||typeof t!="object"?null:(t=Xd&&t[Xd]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,Zl;function yi(t){if(Zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zl=e&&e[1]||""}return`
`+Zl+t}var ea=!1;function ta(t,e){if(!t||ea)return"";ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ea=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yi(t):""}function by(t){switch(t.tag){case 5:return yi(t.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return t=ta(t.type,!1),t;case 11:return t=ta(t.type.render,!1),t;case 1:return t=ta(t.type,!0),t;default:return""}}function Ha(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case dr:return"Fragment";case cr:return"Portal";case Ba:return"Profiler";case cc:return"StrictMode";case Wa:return"Suspense";case Va:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Up:return(t.displayName||"Context")+".Consumer";case jp:return(t._context.displayName||"Context")+".Provider";case dc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hc:return e=t.displayName||null,e!==null?e:Ha(t.type)||"Memo";case qt:e=t._payload,t=t._init;try{return Ha(t(e))}catch{}}return null}function Dy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ha(e);case 8:return e===cc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function En(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ly(t){var e=Bp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function js(t){t._valueTracker||(t._valueTracker=Ly(t))}function Wp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Bp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $a(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=En(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vp(t,e){e=e.checked,e!=null&&uc(t,"checked",e,!1)}function Ga(t,e){Vp(t,e);var n=En(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ka(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ka(t,e.type,En(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function eh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ka(t,e,n){(e!=="number"||wo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wi=Array.isArray;function Ir(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+En(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function th(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(wi(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:En(n)}}function Hp(t,e){var n=En(e.value),r=En(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function nh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function $p(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?$p(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Us,Gp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Us=Us||document.createElement("div"),Us.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Us.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ui(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},My=["Webkit","ms","Moz","O"];Object.keys(Ci).forEach(function(t){My.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ci[e]=Ci[t]})});function Kp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ci.hasOwnProperty(t)&&Ci[t]?(""+e).trim():e+"px"}function Qp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Fy=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ya(t,e){if(e){if(Fy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Ja(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xa=null;function fc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Za=null,kr=null,Tr=null;function rh(t){if(t=_s(t)){if(typeof Za!="function")throw Error(k(280));var e=t.stateNode;e&&(e=_l(e),Za(t.stateNode,t.type,e))}}function qp(t){kr?Tr?Tr.push(t):Tr=[t]:kr=t}function Yp(){if(kr){var t=kr,e=Tr;if(Tr=kr=null,rh(t),e)for(t=0;t<e.length;t++)rh(e[t])}}function Jp(t,e){return t(e)}function Xp(){}var na=!1;function Zp(t,e,n){if(na)return t(e,n);na=!0;try{return Jp(t,e,n)}finally{na=!1,(kr!==null||Tr!==null)&&(Xp(),Yp())}}function zi(t,e){var n=t.stateNode;if(n===null)return null;var r=_l(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var eu=!1;if(Ft)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){eu=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{eu=!1}function jy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ii=!1,So=null,Eo=!1,tu=null,Uy={onError:function(t){Ii=!0,So=t}};function zy(t,e,n,r,i,s,o,l,a){Ii=!1,So=null,jy.apply(Uy,arguments)}function By(t,e,n,r,i,s,o,l,a){if(zy.apply(this,arguments),Ii){if(Ii){var u=So;Ii=!1,So=null}else throw Error(k(198));Eo||(Eo=!0,tu=u)}}function rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function em(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ih(t){if(rr(t)!==t)throw Error(k(188))}function Wy(t){var e=t.alternate;if(!e){if(e=rr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ih(i),t;if(s===r)return ih(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function tm(t){return t=Wy(t),t!==null?nm(t):null}function nm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nm(t);if(e!==null)return e;t=t.sibling}return null}var rm=Ke.unstable_scheduleCallback,sh=Ke.unstable_cancelCallback,Vy=Ke.unstable_shouldYield,Hy=Ke.unstable_requestPaint,ue=Ke.unstable_now,$y=Ke.unstable_getCurrentPriorityLevel,pc=Ke.unstable_ImmediatePriority,im=Ke.unstable_UserBlockingPriority,Co=Ke.unstable_NormalPriority,Gy=Ke.unstable_LowPriority,sm=Ke.unstable_IdlePriority,pl=null,St=null;function Ky(t){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(pl,t,void 0,(t.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Yy,Qy=Math.log,qy=Math.LN2;function Yy(t){return t>>>=0,t===0?32:31-(Qy(t)/qy|0)|0}var zs=64,Bs=4194304;function Si(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Io(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Si(l):(s&=o,s!==0&&(r=Si(s)))}else o=n&~i,o!==0?r=Si(o):s!==0&&(r=Si(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pt(e),i=1<<n,r|=t[n],e&=~i;return r}function Jy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Jy(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function om(){var t=zs;return zs<<=1,!(zs&4194240)&&(zs=64),t}function ra(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pt(e),t[e]=n}function Zy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function mc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function lm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var am,gc,um,cm,dm,ru=!1,Ws=[],an=null,un=null,cn=null,Bi=new Map,Wi=new Map,Jt=[],e0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oh(t,e){switch(t){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Bi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(e.pointerId)}}function ui(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_s(e),e!==null&&gc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function t0(t,e,n,r,i){switch(e){case"focusin":return an=ui(an,t,e,n,r,i),!0;case"dragenter":return un=ui(un,t,e,n,r,i),!0;case"mouseover":return cn=ui(cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bi.set(s,ui(Bi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wi.set(s,ui(Wi.get(s)||null,t,e,n,r,i)),!0}return!1}function hm(t){var e=Un(t.target);if(e!==null){var n=rr(e);if(n!==null){if(e=n.tag,e===13){if(e=em(n),e!==null){t.blockedOn=e,dm(t.priority,function(){um(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function io(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xa=r,n.target.dispatchEvent(r),Xa=null}else return e=_s(n),e!==null&&gc(e),t.blockedOn=n,!1;e.shift()}return!0}function lh(t,e,n){io(t)&&n.delete(e)}function n0(){ru=!1,an!==null&&io(an)&&(an=null),un!==null&&io(un)&&(un=null),cn!==null&&io(cn)&&(cn=null),Bi.forEach(lh),Wi.forEach(lh)}function ci(t,e){t.blockedOn===e&&(t.blockedOn=null,ru||(ru=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,n0)))}function Vi(t){function e(i){return ci(i,t)}if(0<Ws.length){ci(Ws[0],t);for(var n=1;n<Ws.length;n++){var r=Ws[n];r.blockedOn===t&&(r.blockedOn=null)}}for(an!==null&&ci(an,t),un!==null&&ci(un,t),cn!==null&&ci(cn,t),Bi.forEach(e),Wi.forEach(e),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)hm(n),n.blockedOn===null&&Jt.shift()}var xr=$t.ReactCurrentBatchConfig,ko=!0;function r0(t,e,n,r){var i=$,s=xr.transition;xr.transition=null;try{$=1,vc(t,e,n,r)}finally{$=i,xr.transition=s}}function i0(t,e,n,r){var i=$,s=xr.transition;xr.transition=null;try{$=4,vc(t,e,n,r)}finally{$=i,xr.transition=s}}function vc(t,e,n,r){if(ko){var i=iu(t,e,n,r);if(i===null)fa(t,e,r,To,n),oh(t,r);else if(t0(i,t,e,n,r))r.stopPropagation();else if(oh(t,r),e&4&&-1<e0.indexOf(t)){for(;i!==null;){var s=_s(i);if(s!==null&&am(s),s=iu(t,e,n,r),s===null&&fa(t,e,r,To,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fa(t,e,r,null,n)}}var To=null;function iu(t,e,n,r){if(To=null,t=fc(r),t=Un(t),t!==null)if(e=rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=em(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return To=t,null}function fm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($y()){case pc:return 1;case im:return 4;case Co:case Gy:return 16;case sm:return 536870912;default:return 16}default:return 16}}var rn=null,_c=null,so=null;function pm(){if(so)return so;var t,e=_c,n=e.length,r,i="value"in rn?rn.value:rn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return so=i.slice(t,1<r?1-r:void 0)}function oo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vs(){return!0}function ah(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vs:ah,this.isPropagationStopped=ah,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),e}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=qe(Yr),vs=re({},Yr,{view:0,detail:0}),s0=qe(vs),ia,sa,di,ml=re({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==di&&(di&&t.type==="mousemove"?(ia=t.screenX-di.screenX,sa=t.screenY-di.screenY):sa=ia=0,di=t),ia)},movementY:function(t){return"movementY"in t?t.movementY:sa}}),uh=qe(ml),o0=re({},ml,{dataTransfer:0}),l0=qe(o0),a0=re({},vs,{relatedTarget:0}),oa=qe(a0),u0=re({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=qe(u0),d0=re({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h0=qe(d0),f0=re({},Yr,{data:0}),ch=qe(f0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g0[t])?!!e[t]:!1}function wc(){return v0}var _0=re({},vs,{key:function(t){if(t.key){var e=p0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(t){return t.type==="keypress"?oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y0=qe(_0),w0=re({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dh=qe(w0),S0=re({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),E0=qe(S0),C0=re({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=qe(C0),k0=re({},ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T0=qe(k0),x0=[9,13,27,32],Sc=Ft&&"CompositionEvent"in window,ki=null;Ft&&"documentMode"in document&&(ki=document.documentMode);var N0=Ft&&"TextEvent"in window&&!ki,mm=Ft&&(!Sc||ki&&8<ki&&11>=ki),hh=" ",fh=!1;function gm(t,e){switch(t){case"keyup":return x0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hr=!1;function R0(t,e){switch(t){case"compositionend":return vm(e);case"keypress":return e.which!==32?null:(fh=!0,hh);case"textInput":return t=e.data,t===hh&&fh?null:t;default:return null}}function P0(t,e){if(hr)return t==="compositionend"||!Sc&&gm(t,e)?(t=pm(),so=_c=rn=null,hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return mm&&e.locale!=="ko"?null:e.data;default:return null}}var A0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!A0[t.type]:e==="textarea"}function _m(t,e,n,r){qp(r),e=xo(e,"onChange"),0<e.length&&(n=new yc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ti=null,Hi=null;function O0(t){Rm(t,0)}function gl(t){var e=mr(t);if(Wp(e))return t}function b0(t,e){if(t==="change")return e}var ym=!1;if(Ft){var la;if(Ft){var aa="oninput"in document;if(!aa){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),aa=typeof mh.oninput=="function"}la=aa}else la=!1;ym=la&&(!document.documentMode||9<document.documentMode)}function gh(){Ti&&(Ti.detachEvent("onpropertychange",wm),Hi=Ti=null)}function wm(t){if(t.propertyName==="value"&&gl(Hi)){var e=[];_m(e,Hi,t,fc(t)),Zp(O0,e)}}function D0(t,e,n){t==="focusin"?(gh(),Ti=e,Hi=n,Ti.attachEvent("onpropertychange",wm)):t==="focusout"&&gh()}function L0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(Hi)}function M0(t,e){if(t==="click")return gl(e)}function F0(t,e){if(t==="input"||t==="change")return gl(e)}function j0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vt=typeof Object.is=="function"?Object.is:j0;function $i(t,e){if(vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!za.call(e,i)||!vt(t[i],e[i]))return!1}return!0}function vh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _h(t,e){var n=vh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vh(n)}}function Sm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Sm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Em(){for(var t=window,e=wo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wo(t.document)}return e}function Ec(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function U0(t){var e=Em(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Sm(n.ownerDocument.documentElement,n)){if(r!==null&&Ec(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_h(n,s);var o=_h(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z0=Ft&&"documentMode"in document&&11>=document.documentMode,fr=null,su=null,xi=null,ou=!1;function yh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ou||fr==null||fr!==wo(r)||(r=fr,"selectionStart"in r&&Ec(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&$i(xi,r)||(xi=r,r=xo(su,"onSelect"),0<r.length&&(e=new yc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=fr)))}function Hs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var pr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionend:Hs("Transition","TransitionEnd")},ua={},Cm={};Ft&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function vl(t){if(ua[t])return ua[t];if(!pr[t])return t;var e=pr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cm)return ua[t]=e[n];return t}var Im=vl("animationend"),km=vl("animationiteration"),Tm=vl("animationstart"),xm=vl("transitionend"),Nm=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(t,e){Nm.set(t,e),nr(e,[t])}for(var ca=0;ca<wh.length;ca++){var da=wh[ca],B0=da.toLowerCase(),W0=da[0].toUpperCase()+da.slice(1);Nn(B0,"on"+W0)}Nn(Im,"onAnimationEnd");Nn(km,"onAnimationIteration");Nn(Tm,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(xm,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),V0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function Sh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,By(r,e,void 0,t),t.currentTarget=null}function Rm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Sh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Sh(i,l,u),s=a}}}if(Eo)throw t=tu,Eo=!1,tu=null,t}function X(t,e){var n=e[du];n===void 0&&(n=e[du]=new Set);var r=t+"__bubble";n.has(r)||(Pm(e,t,2,!1),n.add(r))}function ha(t,e,n){var r=0;e&&(r|=4),Pm(n,t,r,e)}var $s="_reactListening"+Math.random().toString(36).slice(2);function Gi(t){if(!t[$s]){t[$s]=!0,Fp.forEach(function(n){n!=="selectionchange"&&(V0.has(n)||ha(n,!1,t),ha(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$s]||(e[$s]=!0,ha("selectionchange",!1,e))}}function Pm(t,e,n,r){switch(fm(e)){case 1:var i=r0;break;case 4:i=i0;break;default:i=vc}n=i.bind(null,e,n,t),i=void 0,!eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Un(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Zp(function(){var u=s,d=fc(n),c=[];e:{var h=Nm.get(t);if(h!==void 0){var v=yc,_=t;switch(t){case"keypress":if(oo(n)===0)break e;case"keydown":case"keyup":v=y0;break;case"focusin":_="focus",v=oa;break;case"focusout":_="blur",v=oa;break;case"beforeblur":case"afterblur":v=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=l0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=E0;break;case Im:case km:case Tm:v=c0;break;case xm:v=I0;break;case"scroll":v=s0;break;case"wheel":v=T0;break;case"copy":case"cut":case"paste":v=h0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=dh}var y=(e&4)!==0,S=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=zi(f,p),w!=null&&y.push(Ki(f,w,g)))),S)break;f=f.return}0<y.length&&(h=new v(h,_,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==Xa&&(_=n.relatedTarget||n.fromElement)&&(Un(_)||_[jt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?Un(_):null,_!==null&&(S=rr(_),_!==S||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(y=uh,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=dh,w="onPointerLeave",p="onPointerEnter",f="pointer"),S=v==null?h:mr(v),g=_==null?h:mr(_),h=new y(w,f+"leave",v,n,d),h.target=S,h.relatedTarget=g,w=null,Un(d)===u&&(y=new y(p,f+"enter",_,n,d),y.target=g,y.relatedTarget=S,w=y),S=w,v&&_)t:{for(y=v,p=_,f=0,g=y;g;g=lr(g))f++;for(g=0,w=p;w;w=lr(w))g++;for(;0<f-g;)y=lr(y),f--;for(;0<g-f;)p=lr(p),g--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=lr(y),p=lr(p)}y=null}else y=null;v!==null&&Eh(c,h,v,y,!1),_!==null&&S!==null&&Eh(c,S,_,y,!0)}}e:{if(h=u?mr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var x=b0;else if(ph(h))if(ym)x=F0;else{x=L0;var N=D0}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=M0);if(x&&(x=x(t,u))){_m(c,x,n,d);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Ka(h,"number",h.value)}switch(N=u?mr(u):window,t){case"focusin":(ph(N)||N.contentEditable==="true")&&(fr=N,su=u,xi=null);break;case"focusout":xi=su=fr=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,yh(c,n,d);break;case"selectionchange":if(z0)break;case"keydown":case"keyup":yh(c,n,d)}var E;if(Sc)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else hr?gm(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(mm&&n.locale!=="ko"&&(hr||C!=="onCompositionStart"?C==="onCompositionEnd"&&hr&&(E=pm()):(rn=d,_c="value"in rn?rn.value:rn.textContent,hr=!0)),N=xo(u,C),0<N.length&&(C=new ch(C,t,null,n,d),c.push({event:C,listeners:N}),E?C.data=E:(E=vm(n),E!==null&&(C.data=E)))),(E=N0?R0(t,n):P0(t,n))&&(u=xo(u,"onBeforeInput"),0<u.length&&(d=new ch("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=E))}Rm(c,e)})}function Ki(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zi(t,n),s!=null&&r.unshift(Ki(t,s,i)),s=zi(t,e),s!=null&&r.push(Ki(t,s,i))),t=t.return}return r}function lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Eh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=zi(n,s),a!=null&&o.unshift(Ki(n,a,l))):i||(a=zi(n,s),a!=null&&o.push(Ki(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var H0=/\r\n?/g,$0=/\u0000|\uFFFD/g;function Ch(t){return(typeof t=="string"?t:""+t).replace(H0,`
`).replace($0,"")}function Gs(t,e,n){if(e=Ch(e),Ch(t)!==e&&n)throw Error(k(425))}function No(){}var lu=null,au=null;function uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,G0=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(t){return Ih.resolve(null).then(t).catch(Q0)}:cu;function Q0(t){setTimeout(function(){throw t})}function pa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vi(e)}function dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),wt="__reactFiber$"+Jr,Qi="__reactProps$"+Jr,jt="__reactContainer$"+Jr,du="__reactEvents$"+Jr,q0="__reactListeners$"+Jr,Y0="__reactHandles$"+Jr;function Un(t){var e=t[wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jt]||n[wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kh(t);t!==null;){if(n=t[wt])return n;t=kh(t)}return e}t=n,n=t.parentNode}return null}function _s(t){return t=t[wt]||t[jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function _l(t){return t[Qi]||null}var hu=[],gr=-1;function Rn(t){return{current:t}}function Z(t){0>gr||(t.current=hu[gr],hu[gr]=null,gr--)}function J(t,e){gr++,hu[gr]=t.current,t.current=e}var Cn={},Pe=Rn(Cn),Be=Rn(!1),Gn=Cn;function Mr(t,e){var n=t.type.contextTypes;if(!n)return Cn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function We(t){return t=t.childContextTypes,t!=null}function Ro(){Z(Be),Z(Pe)}function Th(t,e,n){if(Pe.current!==Cn)throw Error(k(168));J(Pe,e),J(Be,n)}function Am(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,Dy(t)||"Unknown",i));return re({},n,r)}function Po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cn,Gn=Pe.current,J(Pe,t),J(Be,Be.current),!0}function xh(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=Am(t,e,Gn),r.__reactInternalMemoizedMergedChildContext=t,Z(Be),Z(Pe),J(Pe,t)):Z(Be),J(Be,n)}var xt=null,yl=!1,ma=!1;function Om(t){xt===null?xt=[t]:xt.push(t)}function J0(t){yl=!0,Om(t)}function Pn(){if(!ma&&xt!==null){ma=!0;var t=0,e=$;try{var n=xt;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xt=null,yl=!1}catch(i){throw xt!==null&&(xt=xt.slice(t+1)),rm(pc,Pn),i}finally{$=e,ma=!1}}return null}var vr=[],_r=0,Ao=null,Oo=0,Ye=[],Je=0,Kn=null,Nt=1,Rt="";function Ln(t,e){vr[_r++]=Oo,vr[_r++]=Ao,Ao=t,Oo=e}function bm(t,e,n){Ye[Je++]=Nt,Ye[Je++]=Rt,Ye[Je++]=Kn,Kn=t;var r=Nt;t=Rt;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var s=32-pt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nt=1<<32-pt(e)+i|n<<i|r,Rt=s+t}else Nt=1<<s|n<<i|r,Rt=t}function Cc(t){t.return!==null&&(Ln(t,1),bm(t,1,0))}function Ic(t){for(;t===Ao;)Ao=vr[--_r],vr[_r]=null,Oo=vr[--_r],vr[_r]=null;for(;t===Kn;)Kn=Ye[--Je],Ye[Je]=null,Rt=Ye[--Je],Ye[Je]=null,Nt=Ye[--Je],Ye[Je]=null}var Ge=null,$e=null,ee=!1,dt=null;function Dm(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ge=t,$e=dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ge=t,$e=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kn!==null?{id:Nt,overflow:Rt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ge=t,$e=null,!0):!1;default:return!1}}function fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pu(t){if(ee){var e=$e;if(e){var n=e;if(!Nh(t,e)){if(fu(t))throw Error(k(418));e=dn(n.nextSibling);var r=Ge;e&&Nh(t,e)?Dm(r,n):(t.flags=t.flags&-4097|2,ee=!1,Ge=t)}}else{if(fu(t))throw Error(k(418));t.flags=t.flags&-4097|2,ee=!1,Ge=t}}}function Rh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ge=t}function Ks(t){if(t!==Ge)return!1;if(!ee)return Rh(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uu(t.type,t.memoizedProps)),e&&(e=$e)){if(fu(t))throw Lm(),Error(k(418));for(;e;)Dm(t,e),e=dn(e.nextSibling)}if(Rh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$e=dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$e=null}}else $e=Ge?dn(t.stateNode.nextSibling):null;return!0}function Lm(){for(var t=$e;t;)t=dn(t.nextSibling)}function Fr(){$e=Ge=null,ee=!1}function kc(t){dt===null?dt=[t]:dt.push(t)}var X0=$t.ReactCurrentBatchConfig;function hi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Qs(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ph(t){var e=t._init;return e(t._payload)}function Mm(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=mn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,w){return f===null||f.tag!==6?(f=Ea(g,p.mode,w),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,w){var x=g.type;return x===dr?d(p,f,g.props.children,w,g.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qt&&Ph(x)===f.type)?(w=i(f,g.props),w.ref=hi(p,f,g),w.return=p,w):(w=po(g.type,g.key,g.props,null,p.mode,w),w.ref=hi(p,f,g),w.return=p,w)}function u(p,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ca(g,p.mode,w),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function d(p,f,g,w,x){return f===null||f.tag!==7?(f=Hn(g,p.mode,w,x),f.return=p,f):(f=i(f,g),f.return=p,f)}function c(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ea(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Fs:return g=po(f.type,f.key,f.props,null,p.mode,g),g.ref=hi(p,null,f),g.return=p,g;case cr:return f=Ca(f,p.mode,g),f.return=p,f;case qt:var w=f._init;return c(p,w(f._payload),g)}if(wi(f)||li(f))return f=Hn(f,p.mode,g,null),f.return=p,f;Qs(p,f)}return null}function h(p,f,g,w){var x=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:l(p,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fs:return g.key===x?a(p,f,g,w):null;case cr:return g.key===x?u(p,f,g,w):null;case qt:return x=g._init,h(p,f,x(g._payload),w)}if(wi(g)||li(g))return x!==null?null:d(p,f,g,w,null);Qs(p,g)}return null}function v(p,f,g,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,l(f,p,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Fs:return p=p.get(w.key===null?g:w.key)||null,a(f,p,w,x);case cr:return p=p.get(w.key===null?g:w.key)||null,u(f,p,w,x);case qt:var N=w._init;return v(p,f,g,N(w._payload),x)}if(wi(w)||li(w))return p=p.get(g)||null,d(f,p,w,x,null);Qs(f,w)}return null}function _(p,f,g,w){for(var x=null,N=null,E=f,C=f=0,P=null;E!==null&&C<g.length;C++){E.index>C?(P=E,E=null):P=E.sibling;var b=h(p,E,g[C],w);if(b===null){E===null&&(E=P);break}t&&E&&b.alternate===null&&e(p,E),f=s(b,f,C),N===null?x=b:N.sibling=b,N=b,E=P}if(C===g.length)return n(p,E),ee&&Ln(p,C),x;if(E===null){for(;C<g.length;C++)E=c(p,g[C],w),E!==null&&(f=s(E,f,C),N===null?x=E:N.sibling=E,N=E);return ee&&Ln(p,C),x}for(E=r(p,E);C<g.length;C++)P=v(E,p,C,g[C],w),P!==null&&(t&&P.alternate!==null&&E.delete(P.key===null?C:P.key),f=s(P,f,C),N===null?x=P:N.sibling=P,N=P);return t&&E.forEach(function(ge){return e(p,ge)}),ee&&Ln(p,C),x}function y(p,f,g,w){var x=li(g);if(typeof x!="function")throw Error(k(150));if(g=x.call(g),g==null)throw Error(k(151));for(var N=x=null,E=f,C=f=0,P=null,b=g.next();E!==null&&!b.done;C++,b=g.next()){E.index>C?(P=E,E=null):P=E.sibling;var ge=h(p,E,b.value,w);if(ge===null){E===null&&(E=P);break}t&&E&&ge.alternate===null&&e(p,E),f=s(ge,f,C),N===null?x=ge:N.sibling=ge,N=ge,E=P}if(b.done)return n(p,E),ee&&Ln(p,C),x;if(E===null){for(;!b.done;C++,b=g.next())b=c(p,b.value,w),b!==null&&(f=s(b,f,C),N===null?x=b:N.sibling=b,N=b);return ee&&Ln(p,C),x}for(E=r(p,E);!b.done;C++,b=g.next())b=v(E,p,C,b.value,w),b!==null&&(t&&b.alternate!==null&&E.delete(b.key===null?C:b.key),f=s(b,f,C),N===null?x=b:N.sibling=b,N=b);return t&&E.forEach(function(lt){return e(p,lt)}),ee&&Ln(p,C),x}function S(p,f,g,w){if(typeof g=="object"&&g!==null&&g.type===dr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Fs:e:{for(var x=g.key,N=f;N!==null;){if(N.key===x){if(x=g.type,x===dr){if(N.tag===7){n(p,N.sibling),f=i(N,g.props.children),f.return=p,p=f;break e}}else if(N.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qt&&Ph(x)===N.type){n(p,N.sibling),f=i(N,g.props),f.ref=hi(p,N,g),f.return=p,p=f;break e}n(p,N);break}else e(p,N);N=N.sibling}g.type===dr?(f=Hn(g.props.children,p.mode,w,g.key),f.return=p,p=f):(w=po(g.type,g.key,g.props,null,p.mode,w),w.ref=hi(p,f,g),w.return=p,p=w)}return o(p);case cr:e:{for(N=g.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Ca(g,p.mode,w),f.return=p,p=f}return o(p);case qt:return N=g._init,S(p,f,N(g._payload),w)}if(wi(g))return _(p,f,g,w);if(li(g))return y(p,f,g,w);Qs(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Ea(g,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return S}var jr=Mm(!0),Fm=Mm(!1),bo=Rn(null),Do=null,yr=null,Tc=null;function xc(){Tc=yr=Do=null}function Nc(t){var e=bo.current;Z(bo),t._currentValue=e}function mu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Nr(t,e){Do=t,Tc=yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ue=!0),t.firstContext=null)}function rt(t){var e=t._currentValue;if(Tc!==t)if(t={context:t,memoizedValue:e,next:null},yr===null){if(Do===null)throw Error(k(308));yr=t,Do.dependencies={lanes:0,firstContext:t}}else yr=yr.next=t;return e}var zn=null;function Rc(t){zn===null?zn=[t]:zn.push(t)}function jm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ut(t,r)}function Ut(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Um(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ut(t,n)}return i=r.interleaved,i===null?(e.next=e,Rc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ut(t,n)}function lo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,mc(t,n)}}function Ah(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lo(t,e,n,r){var i=t.updateQueue;Yt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,y=l;switch(h=e,v=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(v,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(v,c,h):_,h==null)break e;c=re({},c,h);break e;case 2:Yt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,a=c):d=d.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qn|=o,t.lanes=o,t.memoizedState=c}}function Oh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var ys={},Et=Rn(ys),qi=Rn(ys),Yi=Rn(ys);function Bn(t){if(t===ys)throw Error(k(174));return t}function Ac(t,e){switch(J(Yi,e),J(qi,t),J(Et,ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qa(e,t)}Z(Et),J(Et,e)}function Ur(){Z(Et),Z(qi),Z(Yi)}function zm(t){Bn(Yi.current);var e=Bn(Et.current),n=qa(e,t.type);e!==n&&(J(qi,t),J(Et,n))}function Oc(t){qi.current===t&&(Z(Et),Z(qi))}var te=Rn(0);function Mo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ga=[];function bc(){for(var t=0;t<ga.length;t++)ga[t]._workInProgressVersionPrimary=null;ga.length=0}var ao=$t.ReactCurrentDispatcher,va=$t.ReactCurrentBatchConfig,Qn=0,ne=null,he=null,ye=null,Fo=!1,Ni=!1,Ji=0,Z0=0;function xe(){throw Error(k(321))}function Dc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vt(t[n],e[n]))return!1;return!0}function Lc(t,e,n,r,i,s){if(Qn=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ao.current=t===null||t.memoizedState===null?rw:iw,t=n(r,i),Ni){s=0;do{if(Ni=!1,Ji=0,25<=s)throw Error(k(301));s+=1,ye=he=null,e.updateQueue=null,ao.current=sw,t=n(r,i)}while(Ni)}if(ao.current=jo,e=he!==null&&he.next!==null,Qn=0,ye=he=ne=null,Fo=!1,e)throw Error(k(300));return t}function Mc(){var t=Ji!==0;return Ji=0,t}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ne.memoizedState=ye=t:ye=ye.next=t,ye}function it(){if(he===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=he.next;var e=ye===null?ne.memoizedState:ye.next;if(e!==null)ye=e,he=t;else{if(t===null)throw Error(k(310));he=t,t={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ye===null?ne.memoizedState=ye=t:ye=ye.next=t}return ye}function Xi(t,e){return typeof e=="function"?e(t):e}function _a(t){var e=it(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=he,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Qn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ne.lanes|=d,qn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,vt(r,e.memoizedState)||(Ue=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,qn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ya(t){var e=it(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vt(s,e.memoizedState)||(Ue=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Bm(){}function Wm(t,e){var n=ne,r=it(),i=e(),s=!vt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ue=!0),r=r.queue,Fc($m.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Zi(9,Hm.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(k(349));Qn&30||Vm(n,e,i)}return i}function Vm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hm(t,e,n,r){e.value=n,e.getSnapshot=r,Gm(e)&&Km(t)}function $m(t,e,n){return n(function(){Gm(e)&&Km(t)})}function Gm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vt(t,n)}catch{return!0}}function Km(t){var e=Ut(t,1);e!==null&&mt(e,t,1,-1)}function bh(t){var e=yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},e.queue=t,t=t.dispatch=nw.bind(null,ne,t),[e.memoizedState,t]}function Zi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qm(){return it().memoizedState}function uo(t,e,n,r){var i=yt();ne.flags|=t,i.memoizedState=Zi(1|e,n,void 0,r===void 0?null:r)}function wl(t,e,n,r){var i=it();r=r===void 0?null:r;var s=void 0;if(he!==null){var o=he.memoizedState;if(s=o.destroy,r!==null&&Dc(r,o.deps)){i.memoizedState=Zi(e,n,s,r);return}}ne.flags|=t,i.memoizedState=Zi(1|e,n,s,r)}function Dh(t,e){return uo(8390656,8,t,e)}function Fc(t,e){return wl(2048,8,t,e)}function qm(t,e){return wl(4,2,t,e)}function Ym(t,e){return wl(4,4,t,e)}function Jm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xm(t,e,n){return n=n!=null?n.concat([t]):null,wl(4,4,Jm.bind(null,e,t),n)}function jc(){}function Zm(t,e){var n=it();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function eg(t,e){var n=it();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tg(t,e,n){return Qn&21?(vt(n,e)||(n=om(),ne.lanes|=n,qn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ue=!0),t.memoizedState=n)}function ew(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=va.transition;va.transition={};try{t(!1),e()}finally{$=n,va.transition=r}}function ng(){return it().memoizedState}function tw(t,e,n){var r=pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rg(t))ig(e,n);else if(n=jm(t,e,n,r),n!==null){var i=be();mt(n,t,r,i),sg(n,e,r)}}function nw(t,e,n){var r=pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rg(t))ig(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,vt(l,o)){var a=e.interleaved;a===null?(i.next=i,Rc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=jm(t,e,i,r),n!==null&&(i=be(),mt(n,t,r,i),sg(n,e,r))}}function rg(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function ig(t,e){Ni=Fo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function sg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,mc(t,n)}}var jo={readContext:rt,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},rw={readContext:rt,useCallback:function(t,e){return yt().memoizedState=[t,e===void 0?null:e],t},useContext:rt,useEffect:Dh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,uo(4194308,4,Jm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return uo(4194308,4,t,e)},useInsertionEffect:function(t,e){return uo(4,2,t,e)},useMemo:function(t,e){var n=yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tw.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=yt();return t={current:t},e.memoizedState=t},useState:bh,useDebugValue:jc,useDeferredValue:function(t){return yt().memoizedState=t},useTransition:function(){var t=bh(!1),e=t[0];return t=ew.bind(null,t[1]),yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=yt();if(ee){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Se===null)throw Error(k(349));Qn&30||Vm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Dh($m.bind(null,r,s,t),[t]),r.flags|=2048,Zi(9,Hm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=yt(),e=Se.identifierPrefix;if(ee){var n=Rt,r=Nt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ji++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Z0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iw={readContext:rt,useCallback:Zm,useContext:rt,useEffect:Fc,useImperativeHandle:Xm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:eg,useReducer:_a,useRef:Qm,useState:function(){return _a(Xi)},useDebugValue:jc,useDeferredValue:function(t){var e=it();return tg(e,he.memoizedState,t)},useTransition:function(){var t=_a(Xi)[0],e=it().memoizedState;return[t,e]},useMutableSource:Bm,useSyncExternalStore:Wm,useId:ng,unstable_isNewReconciler:!1},sw={readContext:rt,useCallback:Zm,useContext:rt,useEffect:Fc,useImperativeHandle:Xm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:eg,useReducer:ya,useRef:Qm,useState:function(){return ya(Xi)},useDebugValue:jc,useDeferredValue:function(t){var e=it();return he===null?e.memoizedState=t:tg(e,he.memoizedState,t)},useTransition:function(){var t=ya(Xi)[0],e=it().memoizedState;return[t,e]},useMutableSource:Bm,useSyncExternalStore:Wm,useId:ng,unstable_isNewReconciler:!1};function ut(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sl={isMounted:function(t){return(t=t._reactInternals)?rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=be(),i=pn(t),s=Lt(r,i);s.payload=e,n!=null&&(s.callback=n),e=hn(t,s,i),e!==null&&(mt(e,t,i,r),lo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=be(),i=pn(t),s=Lt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hn(t,s,i),e!==null&&(mt(e,t,i,r),lo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),r=pn(t),i=Lt(n,r);i.tag=2,e!=null&&(i.callback=e),e=hn(t,i,r),e!==null&&(mt(e,t,r,n),lo(e,t,r))}};function Lh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$i(n,r)||!$i(i,s):!0}function og(t,e,n){var r=!1,i=Cn,s=e.contextType;return typeof s=="object"&&s!==null?s=rt(s):(i=We(e)?Gn:Pe.current,r=e.contextTypes,s=(r=r!=null)?Mr(t,i):Cn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sl.enqueueReplaceState(e,e.state,null)}function vu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Pc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=rt(s):(s=We(e)?Gn:Pe.current,i.context=Mr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sl.enqueueReplaceState(i,i.state,null),Lo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zr(t,e){try{var n="",r=e;do n+=by(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _u(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ow=typeof WeakMap=="function"?WeakMap:Map;function lg(t,e,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){zo||(zo=!0,Nu=r),_u(t,e)},n}function ag(t,e,n){n=Lt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_u(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_u(t,e),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ow;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ww.bind(null,t,e,n),e.then(t,t))}function jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lt(-1,1),e.tag=2,hn(n,e,1))),n.lanes|=1),t)}var lw=$t.ReactCurrentOwner,Ue=!1;function Ae(t,e,n,r){e.child=t===null?Fm(e,null,n,r):jr(e,t.child,n,r)}function zh(t,e,n,r,i){n=n.render;var s=e.ref;return Nr(e,i),r=Lc(t,e,n,r,s,i),n=Mc(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zt(t,e,i)):(ee&&n&&Cc(e),e.flags|=1,Ae(t,e,r,i),e.child)}function Bh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ug(t,e,s,r,i)):(t=po(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$i,n(o,r)&&t.ref===e.ref)return zt(t,e,i)}return e.flags|=1,t=mn(s,r),t.ref=e.ref,t.return=e,e.child=t}function ug(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($i(s,r)&&t.ref===e.ref)if(Ue=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ue=!0);else return e.lanes=t.lanes,zt(t,e,i)}return yu(t,e,n,r,i)}function cg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Sr,He),He|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(Sr,He),He|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(Sr,He),He|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Sr,He),He|=r;return Ae(t,e,i,n),e.child}function dg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yu(t,e,n,r,i){var s=We(n)?Gn:Pe.current;return s=Mr(e,s),Nr(e,i),n=Lc(t,e,n,r,s,i),r=Mc(),t!==null&&!Ue?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zt(t,e,i)):(ee&&r&&Cc(e),e.flags|=1,Ae(t,e,n,i),e.child)}function Wh(t,e,n,r,i){if(We(n)){var s=!0;Po(e)}else s=!1;if(Nr(e,i),e.stateNode===null)co(t,e),og(e,n,r),vu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=We(n)?Gn:Pe.current,u=Mr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Mh(e,o,r,u),Yt=!1;var h=e.memoizedState;o.state=h,Lo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Be.current||Yt?(typeof d=="function"&&(gu(e,n,d,r),a=e.memoizedState),(l=Yt||Lh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Um(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ut(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=rt(a):(a=We(n)?Gn:Pe.current,a=Mr(e,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&Mh(e,o,r,a),Yt=!1,h=e.memoizedState,o.state=h,Lo(e,r,o,i);var _=e.memoizedState;l!==c||h!==_||Be.current||Yt?(typeof v=="function"&&(gu(e,n,v,r),_=e.memoizedState),(u=Yt||Lh(e,n,u,r,h,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return wu(t,e,n,r,s,i)}function wu(t,e,n,r,i,s){dg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xh(e,n,!1),zt(t,e,s);r=e.stateNode,lw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jr(e,t.child,null,s),e.child=jr(e,null,l,s)):Ae(t,e,l,s),e.memoizedState=r.state,i&&xh(e,n,!0),e.child}function hg(t){var e=t.stateNode;e.pendingContext?Th(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Th(t,e.context,!1),Ac(t,e.containerInfo)}function Vh(t,e,n,r,i){return Fr(),kc(i),e.flags|=256,Ae(t,e,n,r),e.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Eu(t){return{baseLanes:t,cachePool:null,transitions:null}}function fg(t,e,n){var r=e.pendingProps,i=te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(te,i&1),t===null)return pu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Il(o,r,0,null),t=Hn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Eu(n),e.memoizedState=Su,t):Uc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return aw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=mn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mn(l,s):(s=Hn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Eu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Su,r}return s=t.child,t=s.sibling,r=mn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Uc(t,e){return e=Il({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qs(t,e,n,r){return r!==null&&kc(r),jr(e,t.child,null,n),t=Uc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wa(Error(k(422))),qs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Il({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&jr(e,t.child,null,o),e.child.memoizedState=Eu(o),e.memoizedState=Su,s);if(!(e.mode&1))return qs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=wa(s,r,void 0),qs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ue||l){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ut(t,i),mt(r,t,i,-1))}return $c(),r=wa(Error(k(421))),qs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Sw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$e=dn(i.nextSibling),Ge=e,ee=!0,dt=null,t!==null&&(Ye[Je++]=Nt,Ye[Je++]=Rt,Ye[Je++]=Kn,Nt=t.id,Rt=t.overflow,Kn=e),e=Uc(e,r.children),e.flags|=4096,e)}function Hh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mu(t.return,e,n)}function Sa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function pg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ae(t,e,r.children,n),r=te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hh(t,n,e);else if(t.tag===19)Hh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Mo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Mo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sa(e,!0,n,null,s);break;case"together":Sa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function co(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=mn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uw(t,e,n){switch(e.tag){case 3:hg(e),Fr();break;case 5:zm(e);break;case 1:We(e.type)&&Po(e);break;case 4:Ac(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(bo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(te,te.current&1),e.flags|=128,null):n&e.child.childLanes?fg(t,e,n):(J(te,te.current&1),t=zt(t,e,n),t!==null?t.sibling:null);J(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return pg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(te,te.current),r)break;return null;case 22:case 23:return e.lanes=0,cg(t,e,n)}return zt(t,e,n)}var mg,Cu,gg,vg;mg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};gg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bn(Et.current);var s=null;switch(n){case"input":i=$a(t,i),r=$a(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=Qa(t,i),r=Qa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=No)}Ya(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ji.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ji.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&X("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};vg=function(t,e,n,r){n!==r&&(e.flags|=4)};function fi(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ne(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cw(t,e,n){var r=e.pendingProps;switch(Ic(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(e),null;case 1:return We(e.type)&&Ro(),Ne(e),null;case 3:return r=e.stateNode,Ur(),Z(Be),Z(Pe),bc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ks(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dt!==null&&(Au(dt),dt=null))),Cu(t,e),Ne(e),null;case 5:Oc(e);var i=Bn(Yi.current);if(n=e.type,t!==null&&e.stateNode!=null)gg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Ne(e),null}if(t=Bn(Et.current),Ks(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wt]=e,r[Qi]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Ei.length;i++)X(Ei[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Zd(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":th(r,s),X("invalid",r)}Ya(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Gs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Gs(r.textContent,l,t),i=["children",""+l]):ji.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":js(r),eh(r,s,!0);break;case"textarea":js(r),nh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=No)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=$p(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wt]=e,t[Qi]=r,mg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ja(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ei.length;i++)X(Ei[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":Zd(t,r),i=$a(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),X("invalid",t);break;case"textarea":th(t,r),i=Qa(t,r),X("invalid",t);break;default:i=r}Ya(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Qp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Gp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ui(t,a):typeof a=="number"&&Ui(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ji.hasOwnProperty(s)?a!=null&&s==="onScroll"&&X("scroll",t):a!=null&&uc(t,s,a,o))}switch(n){case"input":js(t),eh(t,r,!1);break;case"textarea":js(t),nh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+En(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ir(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ir(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=No)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ne(e),null;case 6:if(t&&e.stateNode!=null)vg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=Bn(Yi.current),Bn(Et.current),Ks(e)){if(r=e.stateNode,n=e.memoizedProps,r[wt]=e,(s=r.nodeValue!==n)&&(t=Ge,t!==null))switch(t.tag){case 3:Gs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=e,e.stateNode=r}return Ne(e),null;case 13:if(Z(te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&$e!==null&&e.mode&1&&!(e.flags&128))Lm(),Fr(),e.flags|=98560,s=!1;else if(s=Ks(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[wt]=e}else Fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ne(e),s=!1}else dt!==null&&(Au(dt),dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||te.current&1?me===0&&(me=3):$c())),e.updateQueue!==null&&(e.flags|=4),Ne(e),null);case 4:return Ur(),Cu(t,e),t===null&&Gi(e.stateNode.containerInfo),Ne(e),null;case 10:return Nc(e.type._context),Ne(e),null;case 17:return We(e.type)&&Ro(),Ne(e),null;case 19:if(Z(te),s=e.memoizedState,s===null)return Ne(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)fi(s,!1);else{if(me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Mo(t),o!==null){for(e.flags|=128,fi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(te,te.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>Br&&(e.flags|=128,r=!0,fi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Mo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Ne(e),null}else 2*ue()-s.renderingStartTime>Br&&n!==1073741824&&(e.flags|=128,r=!0,fi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,n=te.current,J(te,r?n&1|2:n&1),e):(Ne(e),null);case 22:case 23:return Hc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?He&1073741824&&(Ne(e),e.subtreeFlags&6&&(e.flags|=8192)):Ne(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function dw(t,e){switch(Ic(e),e.tag){case 1:return We(e.type)&&Ro(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ur(),Z(Be),Z(Pe),bc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Oc(e),null;case 13:if(Z(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(te),null;case 4:return Ur(),null;case 10:return Nc(e.type._context),null;case 22:case 23:return Hc(),null;case 24:return null;default:return null}}var Ys=!1,Re=!1,hw=typeof WeakSet=="function"?WeakSet:Set,R=null;function wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function Iu(t,e,n){try{n()}catch(r){ie(t,e,r)}}var $h=!1;function fw(t,e){if(lu=ko,t=Em(),Ec(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(au={focusedElem:t,selectionRange:n},ko=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,S=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:ut(e.type,y),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){ie(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return _=$h,$h=!1,_}function Ri(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Iu(e,n,s)}i=i.next}while(i!==r)}}function El(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _g(t){var e=t.alternate;e!==null&&(t.alternate=null,_g(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wt],delete e[Qi],delete e[du],delete e[q0],delete e[Y0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yg(t){return t.tag===5||t.tag===3||t.tag===4}function Gh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=No));else if(r!==4&&(t=t.child,t!==null))for(Tu(t,e,n),t=t.sibling;t!==null;)Tu(t,e,n),t=t.sibling}function xu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(xu(t,e,n),t=t.sibling;t!==null;)xu(t,e,n),t=t.sibling}var Ee=null,ct=!1;function Kt(t,e,n){for(n=n.child;n!==null;)wg(t,e,n),n=n.sibling}function wg(t,e,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(pl,n)}catch{}switch(n.tag){case 5:Re||wr(n,e);case 6:var r=Ee,i=ct;Ee=null,Kt(t,e,n),Ee=r,ct=i,Ee!==null&&(ct?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(ct?(t=Ee,n=n.stateNode,t.nodeType===8?pa(t.parentNode,n):t.nodeType===1&&pa(t,n),Vi(t)):pa(Ee,n.stateNode));break;case 4:r=Ee,i=ct,Ee=n.stateNode.containerInfo,ct=!0,Kt(t,e,n),Ee=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Iu(n,e,o),i=i.next}while(i!==r)}Kt(t,e,n);break;case 1:if(!Re&&(wr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ie(n,e,l)}Kt(t,e,n);break;case 21:Kt(t,e,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Kt(t,e,n),Re=r):Kt(t,e,n);break;default:Kt(t,e,n)}}function Kh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hw),e.forEach(function(r){var i=Ew.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ee=l.stateNode,ct=!1;break e;case 3:Ee=l.stateNode.containerInfo,ct=!0;break e;case 4:Ee=l.stateNode.containerInfo,ct=!0;break e}l=l.return}if(Ee===null)throw Error(k(160));wg(s,o,i),Ee=null,ct=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sg(e,t),e=e.sibling}function Sg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(at(e,t),_t(t),r&4){try{Ri(3,t,t.return),El(3,t)}catch(y){ie(t,t.return,y)}try{Ri(5,t,t.return)}catch(y){ie(t,t.return,y)}}break;case 1:at(e,t),_t(t),r&512&&n!==null&&wr(n,n.return);break;case 5:if(at(e,t),_t(t),r&512&&n!==null&&wr(n,n.return),t.flags&32){var i=t.stateNode;try{Ui(i,"")}catch(y){ie(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Vp(i,s),Ja(l,o);var u=Ja(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Qp(i,c):d==="dangerouslySetInnerHTML"?Gp(i,c):d==="children"?Ui(i,c):uc(i,d,c,u)}switch(l){case"input":Ga(i,s);break;case"textarea":Hp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Ir(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ir(i,!!s.multiple,s.defaultValue,!0):Ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[Qi]=s}catch(y){ie(t,t.return,y)}}break;case 6:if(at(e,t),_t(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ie(t,t.return,y)}}break;case 3:if(at(e,t),_t(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vi(e.containerInfo)}catch(y){ie(t,t.return,y)}break;case 4:at(e,t),_t(t);break;case 13:at(e,t),_t(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wc=ue())),r&4&&Kh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Re=(u=Re)||d,at(e,t),Re=u):at(e,t),_t(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(R=t,d=t.child;d!==null;){for(c=R=d;R!==null;){switch(h=R,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ri(4,h,h.return);break;case 1:wr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){ie(r,n,y)}}break;case 5:wr(h,h.return);break;case 22:if(h.memoizedState!==null){qh(c);continue}}v!==null?(v.return=h,R=v):qh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Kp("display",o))}catch(y){ie(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ie(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:at(e,t),_t(t),r&4&&Kh(t);break;case 21:break;default:at(e,t),_t(t)}}function _t(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yg(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ui(i,""),r.flags&=-33);var s=Gh(t);xu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Gh(t);Tu(t,l,o);break;default:throw Error(k(161))}}catch(a){ie(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pw(t,e,n){R=t,Eg(t)}function Eg(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ys;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Re;l=Ys;var u=Re;if(Ys=o,(Re=a)&&!u)for(R=i;R!==null;)o=R,a=o.child,o.tag===22&&o.memoizedState!==null?Yh(i):a!==null?(a.return=o,R=a):Yh(i);for(;s!==null;)R=s,Eg(s),s=s.sibling;R=i,Ys=l,Re=u}Qh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Qh(t)}}function Qh(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||El(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Oh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Oh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Vi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Re||e.flags&512&&ku(e)}catch(h){ie(e,e.return,h)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function qh(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Yh(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{El(4,e)}catch(a){ie(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ie(e,i,a)}}var s=e.return;try{ku(e)}catch(a){ie(e,s,a)}break;case 5:var o=e.return;try{ku(e)}catch(a){ie(e,o,a)}}}catch(a){ie(e,e.return,a)}if(e===t){R=null;break}var l=e.sibling;if(l!==null){l.return=e.return,R=l;break}R=e.return}}var mw=Math.ceil,Uo=$t.ReactCurrentDispatcher,zc=$t.ReactCurrentOwner,et=$t.ReactCurrentBatchConfig,W=0,Se=null,ce=null,Ie=0,He=0,Sr=Rn(0),me=0,es=null,qn=0,Cl=0,Bc=0,Pi=null,je=null,Wc=0,Br=1/0,Tt=null,zo=!1,Nu=null,fn=null,Js=!1,sn=null,Bo=0,Ai=0,Ru=null,ho=-1,fo=0;function be(){return W&6?ue():ho!==-1?ho:ho=ue()}function pn(t){return t.mode&1?W&2&&Ie!==0?Ie&-Ie:X0.transition!==null?(fo===0&&(fo=om()),fo):(t=$,t!==0||(t=window.event,t=t===void 0?16:fm(t.type)),t):1}function mt(t,e,n,r){if(50<Ai)throw Ai=0,Ru=null,Error(k(185));gs(t,n,r),(!(W&2)||t!==Se)&&(t===Se&&(!(W&2)&&(Cl|=n),me===4&&Xt(t,Ie)),Ve(t,r),n===1&&W===0&&!(e.mode&1)&&(Br=ue()+500,yl&&Pn()))}function Ve(t,e){var n=t.callbackNode;Xy(t,e);var r=Io(t,t===Se?Ie:0);if(r===0)n!==null&&sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sh(n),e===1)t.tag===0?J0(Jh.bind(null,t)):Om(Jh.bind(null,t)),K0(function(){!(W&6)&&Pn()}),n=null;else{switch(lm(r)){case 1:n=pc;break;case 4:n=im;break;case 16:n=Co;break;case 536870912:n=sm;break;default:n=Co}n=Pg(n,Cg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cg(t,e){if(ho=-1,fo=0,W&6)throw Error(k(327));var n=t.callbackNode;if(Rr()&&t.callbackNode!==n)return null;var r=Io(t,t===Se?Ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wo(t,r);else{e=r;var i=W;W|=2;var s=kg();(Se!==t||Ie!==e)&&(Tt=null,Br=ue()+500,Vn(t,e));do try{_w();break}catch(l){Ig(t,l)}while(!0);xc(),Uo.current=s,W=i,ce!==null?e=0:(Se=null,Ie=0,e=me)}if(e!==0){if(e===2&&(i=nu(t),i!==0&&(r=i,e=Pu(t,i))),e===1)throw n=es,Vn(t,0),Xt(t,r),Ve(t,ue()),n;if(e===6)Xt(t,r);else{if(i=t.current.alternate,!(r&30)&&!gw(i)&&(e=Wo(t,r),e===2&&(s=nu(t),s!==0&&(r=s,e=Pu(t,s))),e===1))throw n=es,Vn(t,0),Xt(t,r),Ve(t,ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Mn(t,je,Tt);break;case 3:if(Xt(t,r),(r&130023424)===r&&(e=Wc+500-ue(),10<e)){if(Io(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=cu(Mn.bind(null,t,je,Tt),e);break}Mn(t,je,Tt);break;case 4:if(Xt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mw(r/1960))-r,10<r){t.timeoutHandle=cu(Mn.bind(null,t,je,Tt),r);break}Mn(t,je,Tt);break;case 5:Mn(t,je,Tt);break;default:throw Error(k(329))}}}return Ve(t,ue()),t.callbackNode===n?Cg.bind(null,t):null}function Pu(t,e){var n=Pi;return t.current.memoizedState.isDehydrated&&(Vn(t,e).flags|=256),t=Wo(t,e),t!==2&&(e=je,je=n,e!==null&&Au(e)),t}function Au(t){je===null?je=t:je.push.apply(je,t)}function gw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xt(t,e){for(e&=~Bc,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pt(e),r=1<<n;t[n]=-1,e&=~r}}function Jh(t){if(W&6)throw Error(k(327));Rr();var e=Io(t,0);if(!(e&1))return Ve(t,ue()),null;var n=Wo(t,e);if(t.tag!==0&&n===2){var r=nu(t);r!==0&&(e=r,n=Pu(t,r))}if(n===1)throw n=es,Vn(t,0),Xt(t,e),Ve(t,ue()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mn(t,je,Tt),Ve(t,ue()),null}function Vc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Br=ue()+500,yl&&Pn())}}function Yn(t){sn!==null&&sn.tag===0&&!(W&6)&&Rr();var e=W;W|=1;var n=et.transition,r=$;try{if(et.transition=null,$=1,t)return t()}finally{$=r,et.transition=n,W=e,!(W&6)&&Pn()}}function Hc(){He=Sr.current,Z(Sr)}function Vn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,G0(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Ic(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:Ur(),Z(Be),Z(Pe),bc();break;case 5:Oc(r);break;case 4:Ur();break;case 13:Z(te);break;case 19:Z(te);break;case 10:Nc(r.type._context);break;case 22:case 23:Hc()}n=n.return}if(Se=t,ce=t=mn(t.current,null),Ie=He=e,me=0,es=null,Bc=Cl=qn=0,je=Pi=null,zn!==null){for(e=0;e<zn.length;e++)if(n=zn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zn=null}return t}function Ig(t,e){do{var n=ce;try{if(xc(),ao.current=jo,Fo){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fo=!1}if(Qn=0,ye=he=ne=null,Ni=!1,Ji=0,zc.current=null,n===null||n.return===null){me=1,es=e,ce=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ie,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=jh(o);if(v!==null){v.flags&=-257,Uh(v,o,l,s,e),v.mode&1&&Fh(s,u,e),e=v,a=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(a),e.updateQueue=y}else _.add(a);break e}else{if(!(e&1)){Fh(s,u,e),$c();break e}a=Error(k(426))}}else if(ee&&l.mode&1){var S=jh(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Uh(S,o,l,s,e),kc(zr(a,l));break e}}s=a=zr(a,l),me!==4&&(me=2),Pi===null?Pi=[s]:Pi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=lg(s,a,e);Ah(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fn===null||!fn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=ag(s,l,e);Ah(s,w);break e}}s=s.return}while(s!==null)}xg(n)}catch(x){e=x,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function kg(){var t=Uo.current;return Uo.current=jo,t===null?jo:t}function $c(){(me===0||me===3||me===2)&&(me=4),Se===null||!(qn&268435455)&&!(Cl&268435455)||Xt(Se,Ie)}function Wo(t,e){var n=W;W|=2;var r=kg();(Se!==t||Ie!==e)&&(Tt=null,Vn(t,e));do try{vw();break}catch(i){Ig(t,i)}while(!0);if(xc(),W=n,Uo.current=r,ce!==null)throw Error(k(261));return Se=null,Ie=0,me}function vw(){for(;ce!==null;)Tg(ce)}function _w(){for(;ce!==null&&!Vy();)Tg(ce)}function Tg(t){var e=Rg(t.alternate,t,He);t.memoizedProps=t.pendingProps,e===null?xg(t):ce=e,zc.current=null}function xg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=dw(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{me=6,ce=null;return}}else if(n=cw(n,e,He),n!==null){ce=n;return}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);me===0&&(me=5)}function Mn(t,e,n){var r=$,i=et.transition;try{et.transition=null,$=1,yw(t,e,n,r)}finally{et.transition=i,$=r}return null}function yw(t,e,n,r){do Rr();while(sn!==null);if(W&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Zy(t,s),t===Se&&(ce=Se=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Js||(Js=!0,Pg(Co,function(){return Rr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var o=$;$=1;var l=W;W|=4,zc.current=null,fw(t,n),Sg(n,t),U0(au),ko=!!lu,au=lu=null,t.current=n,pw(n),Hy(),W=l,$=o,et.transition=s}else t.current=n;if(Js&&(Js=!1,sn=t,Bo=i),s=t.pendingLanes,s===0&&(fn=null),Ky(n.stateNode),Ve(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zo)throw zo=!1,t=Nu,Nu=null,t;return Bo&1&&t.tag!==0&&Rr(),s=t.pendingLanes,s&1?t===Ru?Ai++:(Ai=0,Ru=t):Ai=0,Pn(),null}function Rr(){if(sn!==null){var t=lm(Bo),e=et.transition,n=$;try{if(et.transition=null,$=16>t?16:t,sn===null)var r=!1;else{if(t=sn,sn=null,Bo=0,W&6)throw Error(k(331));var i=W;for(W|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Ri(8,d,s)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var h=d.sibling,v=d.return;if(_g(d),d===u){R=null;break}if(h!==null){h.return=v,R=h;break}R=v}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ri(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=f;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:El(9,l)}}catch(x){ie(l,l.return,x)}if(l===o){R=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,R=w;break e}R=l.return}}if(W=i,Pn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(pl,t)}catch{}r=!0}return r}finally{$=n,et.transition=e}}return!1}function Xh(t,e,n){e=zr(n,e),e=lg(t,e,1),t=hn(t,e,1),e=be(),t!==null&&(gs(t,1,e),Ve(t,e))}function ie(t,e,n){if(t.tag===3)Xh(t,t,n);else for(;e!==null;){if(e.tag===3){Xh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){t=zr(n,t),t=ag(e,t,1),e=hn(e,t,1),t=be(),e!==null&&(gs(e,1,t),Ve(e,t));break}}e=e.return}}function ww(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Ie&n)===n&&(me===4||me===3&&(Ie&130023424)===Ie&&500>ue()-Wc?Vn(t,0):Bc|=n),Ve(t,e)}function Ng(t,e){e===0&&(t.mode&1?(e=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):e=1);var n=be();t=Ut(t,e),t!==null&&(gs(t,e,n),Ve(t,n))}function Sw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ng(t,n)}function Ew(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),Ng(t,n)}var Rg;Rg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)Ue=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ue=!1,uw(t,e,n);Ue=!!(t.flags&131072)}else Ue=!1,ee&&e.flags&1048576&&bm(e,Oo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;co(t,e),t=e.pendingProps;var i=Mr(e,Pe.current);Nr(e,n),i=Lc(null,e,r,t,i,n);var s=Mc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,We(r)?(s=!0,Po(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pc(e),i.updater=Sl,e.stateNode=i,i._reactInternals=e,vu(e,r,t,n),e=wu(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&Cc(e),Ae(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(co(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Iw(r),t=ut(r,t),i){case 0:e=yu(null,e,r,t,n);break e;case 1:e=Wh(null,e,r,t,n);break e;case 11:e=zh(null,e,r,t,n);break e;case 14:e=Bh(null,e,r,ut(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),yu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),Wh(t,e,r,i,n);case 3:e:{if(hg(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Um(t,e),Lo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zr(Error(k(423)),e),e=Vh(t,e,r,n,i);break e}else if(r!==i){i=zr(Error(k(424)),e),e=Vh(t,e,r,n,i);break e}else for($e=dn(e.stateNode.containerInfo.firstChild),Ge=e,ee=!0,dt=null,n=Fm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){e=zt(t,e,n);break e}Ae(t,e,r,n)}e=e.child}return e;case 5:return zm(e),t===null&&pu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uu(r,i)?o=null:s!==null&&uu(r,s)&&(e.flags|=32),dg(t,e),Ae(t,e,o,n),e.child;case 6:return t===null&&pu(e),null;case 13:return fg(t,e,n);case 4:return Ac(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jr(e,null,r,n):Ae(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),zh(t,e,r,i,n);case 7:return Ae(t,e,e.pendingProps,n),e.child;case 8:return Ae(t,e,e.pendingProps.children,n),e.child;case 12:return Ae(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(bo,r._currentValue),r._currentValue=o,s!==null)if(vt(s.value,o)){if(s.children===i.children&&!Be.current){e=zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Lt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ae(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Nr(e,n),i=rt(i),r=r(i),e.flags|=1,Ae(t,e,r,n),e.child;case 14:return r=e.type,i=ut(r,e.pendingProps),i=ut(r.type,i),Bh(t,e,r,i,n);case 15:return ug(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),co(t,e),e.tag=1,We(r)?(t=!0,Po(e)):t=!1,Nr(e,n),og(e,r,i),vu(e,r,i,n),wu(null,e,r,!0,t,n);case 19:return pg(t,e,n);case 22:return cg(t,e,n)}throw Error(k(156,e.tag))};function Pg(t,e){return rm(t,e)}function Cw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new Cw(t,e,n,r)}function Gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Iw(t){if(typeof t=="function")return Gc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dc)return 11;if(t===hc)return 14}return 2}function mn(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function po(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case dr:return Hn(n.children,i,s,e);case cc:o=8,i|=8;break;case Ba:return t=Xe(12,n,e,i|2),t.elementType=Ba,t.lanes=s,t;case Wa:return t=Xe(13,n,e,i),t.elementType=Wa,t.lanes=s,t;case Va:return t=Xe(19,n,e,i),t.elementType=Va,t.lanes=s,t;case zp:return Il(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jp:o=10;break e;case Up:o=9;break e;case dc:o=11;break e;case hc:o=14;break e;case qt:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hn(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function Il(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=zp,t.lanes=n,t.stateNode={isHidden:!1},t}function Ea(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Ca(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kc(t,e,n,r,i,s,o,l,a){return t=new kw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pc(s),t}function Tw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ag(t){if(!t)return Cn;t=t._reactInternals;e:{if(rr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(We(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(We(n))return Am(t,n,e)}return e}function Og(t,e,n,r,i,s,o,l,a){return t=Kc(n,r,!0,t,i,s,o,l,a),t.context=Ag(null),n=t.current,r=be(),i=pn(n),s=Lt(r,i),s.callback=e??null,hn(n,s,i),t.current.lanes=i,gs(t,i,r),Ve(t,r),t}function kl(t,e,n,r){var i=e.current,s=be(),o=pn(i);return n=Ag(n),e.context===null?e.context=n:e.pendingContext=n,e=Lt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hn(i,e,o),t!==null&&(mt(t,i,o,s),lo(t,i,o)),o}function Vo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qc(t,e){Zh(t,e),(t=t.alternate)&&Zh(t,e)}function xw(){return null}var bg=typeof reportError=="function"?reportError:function(t){console.error(t)};function qc(t){this._internalRoot=t}Tl.prototype.render=qc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));kl(t,e,null,null)};Tl.prototype.unmount=qc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yn(function(){kl(null,t,null,null)}),e[jt]=null}};function Tl(t){this._internalRoot=t}Tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=cm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Jt.length&&e!==0&&e<Jt[n].priority;n++);Jt.splice(n,0,t),n===0&&hm(t)}};function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ef(){}function Nw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Vo(o);s.call(u)}}var o=Og(e,r,t,0,null,!1,!1,"",ef);return t._reactRootContainer=o,t[jt]=o.current,Gi(t.nodeType===8?t.parentNode:t),Yn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Vo(a);l.call(u)}}var a=Kc(t,0,!1,null,null,!1,!1,"",ef);return t._reactRootContainer=a,t[jt]=a.current,Gi(t.nodeType===8?t.parentNode:t),Yn(function(){kl(e,a,n,r)}),a}function Nl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Vo(o);l.call(a)}}kl(e,o,t,i)}else o=Nw(n,e,t,i,r);return Vo(o)}am=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Si(e.pendingLanes);n!==0&&(mc(e,n|1),Ve(e,ue()),!(W&6)&&(Br=ue()+500,Pn()))}break;case 13:Yn(function(){var r=Ut(t,1);if(r!==null){var i=be();mt(r,t,1,i)}}),Qc(t,1)}};gc=function(t){if(t.tag===13){var e=Ut(t,134217728);if(e!==null){var n=be();mt(e,t,134217728,n)}Qc(t,134217728)}};um=function(t){if(t.tag===13){var e=pn(t),n=Ut(t,e);if(n!==null){var r=be();mt(n,t,e,r)}Qc(t,e)}};cm=function(){return $};dm=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};Za=function(t,e,n){switch(e){case"input":if(Ga(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_l(r);if(!i)throw Error(k(90));Wp(r),Ga(r,i)}}}break;case"textarea":Hp(t,n);break;case"select":e=n.value,e!=null&&Ir(t,!!n.multiple,e,!1)}};Jp=Vc;Xp=Yn;var Rw={usingClientEntryPoint:!1,Events:[_s,mr,_l,qp,Yp,Vc]},pi={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pw={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tm(t),t===null?null:t.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xs.isDisabled&&Xs.supportsFiber)try{pl=Xs.inject(Pw),St=Xs}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rw;Qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yc(e))throw Error(k(200));return Tw(t,e,null,n)};Qe.createRoot=function(t,e){if(!Yc(t))throw Error(k(299));var n=!1,r="",i=bg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kc(t,1,!1,null,null,n,!1,r,i),t[jt]=e.current,Gi(t.nodeType===8?t.parentNode:t),new qc(e)};Qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=tm(e),t=t===null?null:t.stateNode,t};Qe.flushSync=function(t){return Yn(t)};Qe.hydrate=function(t,e,n){if(!xl(e))throw Error(k(200));return Nl(null,t,e,!0,n)};Qe.hydrateRoot=function(t,e,n){if(!Yc(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Og(e,null,t,1,n??null,i,!1,s,o),t[jt]=e.current,Gi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Tl(e)};Qe.render=function(t,e,n){if(!xl(e))throw Error(k(200));return Nl(null,t,e,!1,n)};Qe.unmountComponentAtNode=function(t){if(!xl(t))throw Error(k(40));return t._reactRootContainer?(Yn(function(){Nl(null,null,t,!1,function(){t._reactRootContainer=null,t[jt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Vc;Qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return Nl(t,e,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dg)}catch(t){console.error(t)}}Dg(),Dp.exports=Qe;var Aw=Dp.exports,tf=Aw;Ua.createRoot=tf.createRoot,Ua.hydrateRoot=tf.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ts.apply(null,arguments)}var on;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(on||(on={}));const nf="popstate";function Ow(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ou("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Lg(i)}return Dw(e,n,null,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bw(){return Math.random().toString(36).substr(2,8)}function rf(t,e){return{usr:t.state,key:t.key,idx:e}}function Ou(t,e,n,r){return n===void 0&&(n=null),ts({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Xr(e):e,{state:n,key:e&&e.key||r||bw()})}function Lg(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Xr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Dw(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=on.Pop,a=null,u=d();u==null&&(u=0,o.replaceState(ts({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){l=on.Pop;let S=d(),p=S==null?null:S-u;u=S,a&&a({action:l,location:y.location,delta:p})}function h(S,p){l=on.Push;let f=Ou(y.location,S,p);u=d()+1;let g=rf(f,u),w=y.createHref(f);try{o.pushState(g,"",w)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(w)}s&&a&&a({action:l,location:y.location,delta:1})}function v(S,p){l=on.Replace;let f=Ou(y.location,S,p);u=d();let g=rf(f,u),w=y.createHref(f);o.replaceState(g,"",w),s&&a&&a({action:l,location:y.location,delta:0})}function _(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:Lg(S);return f=f.replace(/ $/,"%20"),de(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return l},get location(){return t(i,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(nf,c),a=S,()=>{i.removeEventListener(nf,c),a=null}},createHref(S){return e(i,S)},createURL:_,encodeLocation(S){let p=_(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(S){return o.go(S)}};return y}var sf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(sf||(sf={}));function Lw(t,e,n){return n===void 0&&(n="/"),Mw(t,e,n)}function Mw(t,e,n,r){let i=typeof e=="string"?Xr(e):e,s=jg(i.pathname||"/",n);if(s==null)return null;let o=Mg(t);Fw(o);let l=null,a=qw(s);for(let u=0;l==null&&u<o.length;++u)l=Gw(o[u],a);return l}function Mg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(de(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=$n([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mg(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Hw(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Fg(s.path))i(s,o,a)}),e}function Fg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Fg(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function Fw(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$w(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jw=/^:[\w-]+$/,Uw=3,zw=2,Bw=1,Ww=10,Vw=-2,of=t=>t==="*";function Hw(t,e){let n=t.split("/"),r=n.length;return n.some(of)&&(r+=Vw),e&&(r+=zw),n.filter(i=>!of(i)).reduce((i,s)=>i+(jw.test(s)?Uw:s===""?Bw:Ww),r)}function $w(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Gw(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let a=r[l],u=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=Kw({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),h=a.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:$n([s,c.pathname]),pathnameBase:eS($n([s,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(s=$n([s,c.pathnameBase]))}return o}function Kw(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Qw(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let y=l[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const _=l[c];return v&&!_?u[h]=void 0:u[h]=(_||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Qw(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function qw(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function jg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Yw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jw=t=>Yw.test(t);function Xw(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Xr(t):t,s;if(n)if(Jw(n))s=n;else{if(n.includes("//")){let o=n;n=Bg(n),Jc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=lf(n.substring(1),"/"):s=lf(n,e)}else s=e;return{pathname:s,search:tS(r),hash:nS(i)}}function lf(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ia(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zw(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ug(t,e){let n=Zw(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Xr(t):(i=ts({},t),de(!i.pathname||!i.pathname.includes("?"),Ia("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),Ia("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),Ia("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}l=c>=0?e[c]:"/"}let a=Xw(i,l),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const Bg=t=>t.replace(/\/\/+/g,"/"),$n=t=>Bg(t.join("/")),eS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Wg=["post","put","patch","delete"];new Set(Wg);const iS=["get",...Wg];new Set(iS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ns(){return ns=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ns.apply(null,arguments)}const Xc=I.createContext(null),sS=I.createContext(null),ws=I.createContext(null),Rl=I.createContext(null),ir=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Vg=I.createContext(null);function Ss(){return I.useContext(Rl)!=null}function Zc(){return Ss()||de(!1),I.useContext(Rl).location}function Hg(t){I.useContext(ws).static||I.useLayoutEffect(t)}function Es(){let{isDataRoute:t}=I.useContext(ir);return t?_S():oS()}function oS(){Ss()||de(!1);let t=I.useContext(Xc),{basename:e,future:n,navigator:r}=I.useContext(ws),{matches:i}=I.useContext(ir),{pathname:s}=Zc(),o=JSON.stringify(Ug(i,n.v7_relativeSplatPath)),l=I.useRef(!1);return Hg(()=>{l.current=!0}),I.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=zg(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:$n([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function lS(t,e){return aS(t,e)}function aS(t,e,n,r){Ss()||de(!1);let{navigator:i}=I.useContext(ws),{matches:s}=I.useContext(ir),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=Zc(),d;if(e){var c;let S=typeof e=="string"?Xr(e):e;a==="/"||(c=S.pathname)!=null&&c.startsWith(a)||de(!1),d=S}else d=u;let h=d.pathname||"/",v=h;if(a!=="/"){let S=a.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let _=Lw(t,{pathname:v}),y=fS(_&&_.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:$n([a,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:$n([a,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&y?I.createElement(Rl.Provider,{value:{location:ns({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:on.Pop}},y):y}function uS(){let t=vS(),e=rS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const cS=I.createElement(uS,null);class dS extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(ir.Provider,{value:this.props.routeContext},I.createElement(Vg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hS(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Xc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(ir.Provider,{value:e},r)}function fS(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);d>=0||de(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:v}=n,_=c.route.loader&&h[c.route.id]===void 0&&(!v||v[c.route.id]===void 0);if(c.route.lazy||_){a=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let v,_=!1,y=null,S=null;n&&(v=l&&c.route.id?l[c.route.id]:void 0,y=c.route.errorElement||cS,a&&(u<0&&h===0?(yS("route-fallback"),_=!0,S=null):u===h&&(_=!0,S=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let g;return v?g=y:_?g=S:c.route.Component?g=I.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=d,I.createElement(hS,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?I.createElement(dS,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var $g=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($g||{}),Gg=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Gg||{});function pS(t){let e=I.useContext(Xc);return e||de(!1),e}function mS(t){let e=I.useContext(sS);return e||de(!1),e}function gS(t){let e=I.useContext(ir);return e||de(!1),e}function Kg(t){let e=gS(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function vS(){var t;let e=I.useContext(Vg),n=mS(),r=Kg();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function _S(){let{router:t}=pS($g.UseNavigateStable),e=Kg(Gg.UseNavigateStable),n=I.useRef(!1);return Hg(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ns({fromRouteId:e},s)))},[t,e])}const af={};function yS(t,e,n){af[t]||(af[t]=!0)}function wS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function SS(t){let{to:e,replace:n,state:r,relative:i}=t;Ss()||de(!1);let{future:s,static:o}=I.useContext(ws),{matches:l}=I.useContext(ir),{pathname:a}=Zc(),u=Es(),d=zg(e,Ug(l,s.v7_relativeSplatPath),a,i==="path"),c=JSON.stringify(d);return I.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function ur(t){de(!1)}function ES(t){let{basename:e="/",children:n=null,location:r,navigationType:i=on.Pop,navigator:s,static:o=!1,future:l}=t;Ss()&&de(!1);let a=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:a,navigator:s,static:o,future:ns({v7_relativeSplatPath:!1},l)}),[a,l,s,o]);typeof r=="string"&&(r=Xr(r));let{pathname:d="/",search:c="",hash:h="",state:v=null,key:_="default"}=r,y=I.useMemo(()=>{let S=jg(d,a);return S==null?null:{location:{pathname:S,search:c,hash:h,state:v,key:_},navigationType:i}},[a,d,c,h,v,_,i]);return y==null?null:I.createElement(ws.Provider,{value:u},I.createElement(Rl.Provider,{children:n,value:y}))}function CS(t){let{children:e,location:n}=t;return lS(bu(e),n)}new Promise(()=>{});function bu(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,bu(r.props.children,s));return}r.type!==ur&&de(!1),!r.props.index||!r.props.children||de(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=bu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const IS="6";try{window.__reactRouterVersion=IS}catch{}const kS="startTransition",uf=wy[kS];function TS(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=Ow({window:i,v5Compat:!0}));let o=s.current,[l,a]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=I.useCallback(c=>{u&&uf?uf(()=>a(c)):a(c)},[a,u]);return I.useLayoutEffect(()=>o.listen(d),[o,d]),I.useEffect(()=>wS(r),[r]),I.createElement(ES,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var cf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(cf||(cf={}));var df;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(df||(df={}));const xS="teach123";function NS(){const t=Es(),[e,n]=I.useState(!1),[r,i]=I.useState(""),[s,o]=I.useState("");function l(a){a.preventDefault(),r===xS?(sessionStorage.setItem("role","teacher"),t("/teacher")):(o("Incorrect password."),i(""))}return m.jsxs("div",{style:ae.page,children:[m.jsxs("div",{style:ae.header,children:[m.jsx("div",{style:ae.logoMark,children:"●"}),m.jsx("span",{style:ae.logoText,children:"ClassPoll"})]}),m.jsxs("div",{style:ae.hero,className:"fade-up",children:[m.jsxs("h1",{style:ae.title,children:["Live Classroom",m.jsx("br",{}),"Polling"]}),m.jsx("p",{style:ae.sub,children:"Real-time polls, instant results, zero setup for students."})]}),m.jsxs("div",{style:ae.cards,className:"fade-up",children:[m.jsxs("button",{style:ae.roleCard,onClick:()=>t("/student"),children:[m.jsx("span",{style:ae.roleIcon,children:"🎓"}),m.jsx("span",{style:ae.roleLabel,children:"I'm a Student"}),m.jsx("span",{style:ae.roleHint,children:"Join and answer polls"})]}),e?m.jsxs("form",{style:{...ae.roleCard,gap:"0.75rem"},onSubmit:l,children:[m.jsx("span",{style:ae.roleIcon,children:"🔑"}),m.jsx("span",{style:ae.roleLabel,children:"Teacher Password"}),m.jsx("input",{className:"input",type:"password",placeholder:"Enter password",value:r,onChange:a=>{i(a.target.value),o("")},autoFocus:!0,style:{textAlign:"center"}}),s&&m.jsx("span",{style:ae.err,children:s}),m.jsx("button",{type:"submit",className:"btn btn-primary",style:{width:"100%",justifyContent:"center"},children:"Enter"}),m.jsx("button",{type:"button",className:"btn btn-secondary",style:{width:"100%",justifyContent:"center",fontSize:"0.85rem"},onClick:()=>{n(!1),o(""),i("")},children:"Cancel"})]}):m.jsxs("button",{style:ae.roleCard,onClick:()=>n(!0),children:[m.jsx("span",{style:ae.roleIcon,children:"📋"}),m.jsx("span",{style:ae.roleLabel,children:"I'm the Teacher"}),m.jsx("span",{style:ae.roleHint,children:"Create and manage polls"})]})]}),m.jsx("a",{href:"/classroom-polling/history",style:ae.historyLink,children:"View Poll History →"})]})}const ae={page:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem 1rem",gap:"2rem",background:"var(--paper)"},header:{position:"fixed",top:0,left:0,right:0,padding:"1rem 2rem",display:"flex",alignItems:"center",gap:"0.5rem",borderBottom:"1px solid var(--border)",background:"var(--paper)"},logoMark:{color:"var(--accent)",fontSize:"1.2rem"},logoText:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.1rem"},hero:{textAlign:"center"},title:{fontSize:"clamp(2.2rem, 6vw, 3.5rem)",lineHeight:1.1,marginBottom:"0.75rem"},sub:{color:"var(--muted)",fontSize:"1.05rem",maxWidth:"30ch",margin:"0 auto"},cards:{display:"flex",gap:"1.25rem",flexWrap:"wrap",justifyContent:"center"},roleCard:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",padding:"2rem 2.5rem",borderRadius:"16px",border:"2px solid var(--border)",cursor:"pointer",transition:"all 0.2s",background:"white",minWidth:"200px",boxShadow:"var(--shadow)"},roleIcon:{fontSize:"2.5rem"},roleLabel:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.15rem"},roleHint:{fontSize:"0.82rem",color:"var(--muted)"},err:{color:"var(--accent)",fontSize:"0.85rem"},historyLink:{color:"var(--muted)",fontSize:"0.85rem",textDecoration:"underline",cursor:"pointer"}};var hf={};/**
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
 */const Qg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw Zr(e)},Zr=function(t){return new Error("Firebase Database ("+Qg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const qg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,v=u&63;a||(v=64,o||(h=64)),r.push(n[d],n[c],n[h],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new PS;const h=s<<2|l>>4;if(r.push(h),u!==64){const v=l<<4&240|u>>2;if(r.push(v),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yg=function(t){const e=qg(t);return ed.encodeByteArray(e,!0)},Ho=function(t){return Yg(t).replace(/\./g,"")},$o=function(t){try{return ed.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function AS(t){return Jg(void 0,t)}function Jg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!OS(n)||(t[n]=Jg(t[n],e[n]));return t}function OS(t){return t!=="__proto__"}/**
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
 */function bS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DS=()=>bS().__FIREBASE_DEFAULTS__,LS=()=>{if(typeof process>"u"||typeof hf>"u")return;const t=hf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$o(t[1]);return e&&JSON.parse(e)},td=()=>{try{return DS()||LS()||MS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xg=t=>{var e,n;return(n=(e=td())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},FS=t=>{const e=Xg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zg=()=>{var t;return(t=td())===null||t===void 0?void 0:t.config},ev=t=>{var e;return(e=td())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Cs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function jS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ho(JSON.stringify(n)),Ho(JSON.stringify(o)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function US(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BS(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WS(){return Qg.NODE_ADMIN===!0}function VS(){try{return typeof indexedDB=="object"}catch{return!1}}function HS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const $S="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$S,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?GS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function GS(t,e){return t.replace(KS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KS=/\{\$([^}]+)}/g;/**
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
 */function rs(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
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
 */const nv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=rs($o(s[0])||""),n=rs($o(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},QS=function(t){const e=nv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qS=function(t){const e=nv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Du(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Go(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ff(s)&&ff(o)){if(!Ko(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ff(t){return t!==null&&typeof t=="object"}/**
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
 */function ei(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class YS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function JS(t,e){const n=new XS(t,e);return n.subscribe.bind(n)}class XS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ka),i.error===void 0&&(i.error=ka),i.complete===void 0&&(i.complete=ka);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ka(){}function Pl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const eE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Al=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fn="[DEFAULT]";/**
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
 */class tE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rE(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nE(t){return t===Fn?void 0:t}function rE(t){return t.instantiationMode==="EAGER"}/**
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
 */class iE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const sE={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},oE=G.INFO,lE={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},aE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rd{constructor(e){this.name=e,this._logLevel=oE,this._logHandler=aE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const uE=(t,e)=>e.some(n=>t instanceof n);let pf,mf;function cE(){return pf||(pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dE(){return mf||(mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rv=new WeakMap,Lu=new WeakMap,iv=new WeakMap,Ta=new WeakMap,id=new WeakMap;function hE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rv.set(n,t)}).catch(()=>{}),id.set(e,t),e}function fE(t){if(Lu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lu.set(t,e)}let Mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pE(t){Mu=t(Mu)}function mE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xa(this),e,...n);return iv.set(r,e.sort?e.sort():[e]),gn(r)}:dE().includes(t)?function(...e){return t.apply(xa(this),e),gn(rv.get(this))}:function(...e){return gn(t.apply(xa(this),e))}}function gE(t){return typeof t=="function"?mE(t):(t instanceof IDBTransaction&&fE(t),uE(t,cE())?new Proxy(t,Mu):t)}function gn(t){if(t instanceof IDBRequest)return hE(t);if(Ta.has(t))return Ta.get(t);const e=gE(t);return e!==t&&(Ta.set(t,e),id.set(e,t)),e}const xa=t=>id.get(t);function vE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(gn(o.result),a.oldVersion,a.newVersion,gn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const _E=["get","getKey","getAll","getAllKeys","count"],yE=["put","add","delete","clear"],Na=new Map;function gf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Na.get(e))return Na.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_E.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Na.set(e,s),s}pE(t=>({...t,get:(e,n,r)=>gf(e,n)||t.get(e,n,r),has:(e,n)=>!!gf(e,n)||t.has(e,n)}));/**
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
 */class wE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fu="@firebase/app",vf="0.10.13";/**
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
 */const Bt=new rd("@firebase/app"),EE="@firebase/app-compat",CE="@firebase/analytics-compat",IE="@firebase/analytics",kE="@firebase/app-check-compat",TE="@firebase/app-check",xE="@firebase/auth",NE="@firebase/auth-compat",RE="@firebase/database",PE="@firebase/data-connect",AE="@firebase/database-compat",OE="@firebase/functions",bE="@firebase/functions-compat",DE="@firebase/installations",LE="@firebase/installations-compat",ME="@firebase/messaging",FE="@firebase/messaging-compat",jE="@firebase/performance",UE="@firebase/performance-compat",zE="@firebase/remote-config",BE="@firebase/remote-config-compat",WE="@firebase/storage",VE="@firebase/storage-compat",HE="@firebase/firestore",$E="@firebase/vertexai-preview",GE="@firebase/firestore-compat",KE="firebase",QE="10.14.1";/**
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
 */const ju="[DEFAULT]",qE={[Fu]:"fire-core",[EE]:"fire-core-compat",[IE]:"fire-analytics",[CE]:"fire-analytics-compat",[TE]:"fire-app-check",[kE]:"fire-app-check-compat",[xE]:"fire-auth",[NE]:"fire-auth-compat",[RE]:"fire-rtdb",[PE]:"fire-data-connect",[AE]:"fire-rtdb-compat",[OE]:"fire-fn",[bE]:"fire-fn-compat",[DE]:"fire-iid",[LE]:"fire-iid-compat",[ME]:"fire-fcm",[FE]:"fire-fcm-compat",[jE]:"fire-perf",[UE]:"fire-perf-compat",[zE]:"fire-rc",[BE]:"fire-rc-compat",[WE]:"fire-gcs",[VE]:"fire-gcs-compat",[HE]:"fire-fst",[GE]:"fire-fst-compat",[$E]:"fire-vertex","fire-js":"fire-js",[KE]:"fire-js-all"};/**
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
 */const Qo=new Map,YE=new Map,Uu=new Map;function _f(t,e){try{t.container.addComponent(e)}catch(n){Bt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vr(t){const e=t.name;if(Uu.has(e))return Bt.debug(`There were multiple attempts to register component ${e}.`),!1;Uu.set(e,t);for(const n of Qo.values())_f(n,t);for(const n of YE.values())_f(n,t);return!0}function sd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pt(t){return t.settings!==void 0}/**
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
 */const JE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new Is("app","Firebase",JE);/**
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
 */class XE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=QE;function sv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ju,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=Zg()),!n)throw vn.create("no-options");const s=Qo.get(i);if(s){if(Ko(n,s.options)&&Ko(r,s.config))return s;throw vn.create("duplicate-app",{appName:i})}const o=new iE(i);for(const a of Uu.values())o.addComponent(a);const l=new XE(n,r,o);return Qo.set(i,l),l}function ov(t=ju){const e=Qo.get(t);if(!e&&t===ju&&Zg())return sv();if(!e)throw vn.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let i=(r=qE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bt.warn(l.join(" "));return}Vr(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ZE="firebase-heartbeat-database",eC=1,is="firebase-heartbeat-store";let Ra=null;function lv(){return Ra||(Ra=vE(ZE,eC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(is)}catch(n){console.warn(n)}}}}).catch(t=>{throw vn.create("idb-open",{originalErrorMessage:t.message})})),Ra}async function tC(t){try{const n=(await lv()).transaction(is),r=await n.objectStore(is).get(av(t));return await n.done,r}catch(e){if(e instanceof An)Bt.warn(e.message);else{const n=vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bt.warn(n.message)}}}async function yf(t,e){try{const r=(await lv()).transaction(is,"readwrite");await r.objectStore(is).put(e,av(t)),await r.done}catch(n){if(n instanceof An)Bt.warn(n.message);else{const r=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bt.warn(r.message)}}}function av(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nC=1024,rC=30*24*60*60*1e3;class iC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=wf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=rC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Bt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wf(),{heartbeatsToSend:r,unsentEntries:i}=sC(this._heartbeatsCache.heartbeats),s=Ho(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Bt.warn(n),""}}}function wf(){return new Date().toISOString().substring(0,10)}function sC(t,e=nC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Sf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VS()?HS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sf(t){return Ho(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lC(t){Vr(new Jn("platform-logger",e=>new wE(e),"PRIVATE")),Vr(new Jn("heartbeat",e=>new iC(e),"PRIVATE")),_n(Fu,vf,t),_n(Fu,vf,"esm2017"),_n("fire-js","")}lC("");var aC="firebase",uC="10.14.1";/**
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
 */_n(aC,uC,"app");var Ef={};const Cf="@firebase/database",If="1.0.8";/**
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
 */let uv="";function cC(t){uv=t}/**
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
 */class dC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:rs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class hC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const cv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dC(e)}}catch{}return new hC},Wn=cv("localStorage"),fC=cv("sessionStorage");/**
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
 */const Pr=new rd("@firebase/database"),pC=function(){let t=1;return function(){return t++}}(),dv=function(t){const e=eE(t),n=new YS;n.update(e);const r=n.digest();return ed.encodeByteArray(r)},ks=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ks.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let Oi=null,kf=!0;const mC=function(t,e){T(!0,"Can't turn on custom loggers persistently."),Pr.logLevel=G.VERBOSE,Oi=Pr.log.bind(Pr)},Ce=function(...t){if(kf===!0&&(kf=!1,Oi===null&&fC.get("logging_enabled")===!0&&mC()),Oi){const e=ks.apply(null,t);Oi(e)}},Ts=function(t){return function(...e){Ce(t,...e)}},zu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ks(...t);Pr.error(e)},Wt=function(...t){const e=`FIREBASE FATAL ERROR: ${ks(...t)}`;throw Pr.error(e),new Error(e)},De=function(...t){const e="FIREBASE WARNING: "+ks(...t);Pr.warn(e)},gC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},od=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hr="[MIN_NAME]",Xn="[MAX_NAME]",sr=function(t,e){if(t===e)return 0;if(t===Hr||e===Xn)return-1;if(e===Hr||t===Xn)return 1;{const n=Tf(t),r=Tf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},_C=function(t,e){return t===e?0:t<e?-1:1},mi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},ld=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=ld(t[e[r]]);return n+="}",n},hv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fv=function(t){T(!od(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},yC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function SC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const EC=new RegExp("^-?(0*)\\d{1,10}$"),CC=-2147483648,IC=2147483647,Tf=function(t){if(EC.test(t)){const e=Number(t);if(e>=CC&&e<=IC)return e}return null},ni=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw De("Exception was thrown by user callback.",n),e},Math.floor(0))}},kC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class TC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class mo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}mo.OWNER="owner";/**
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
 */const ad="5",pv="v",mv="s",gv="r",vv="f",_v=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yv="ls",wv="p",Bu="ac",Sv="websocket",Ev="long_polling";/**
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
 */class Cv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Iv(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===Sv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ev)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NC(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class RC{constructor(){this.counters_={}}incrementCounter(e,n=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return AS(this.counters_)}}/**
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
 */const Pa={},Aa={};function ud(t){const e=t.toString();return Pa[e]||(Pa[e]=new RC),Pa[e]}function PC(t,e){const n=t.toString();return Aa[n]||(Aa[n]=e()),Aa[n]}/**
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
 */class AC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ni(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const xf="start",OC="close",bC="pLPCommand",DC="pRTLPCB",kv="id",Tv="pw",xv="ser",LC="cb",MC="seg",FC="ts",jC="d",UC="dframe",Nv=1870,Rv=30,zC=Nv-Rv,BC=25e3,WC=3e4;class Er{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ts(e),this.stats_=ud(n),this.urlFn=a=>(this.appCheckToken&&(a[Bu]=this.appCheckToken),Iv(n,Ev,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new AC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WC)),vC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xf)this.id=l,this.password=a;else if(o===OC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[xf]="t",r[xv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[LC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[pv]=ad,this.transportSessionId&&(r[mv]=this.transportSessionId),this.lastSessionId&&(r[yv]=this.lastSessionId),this.applicationId&&(r[wv]=this.applicationId),this.appCheckToken&&(r[Bu]=this.appCheckToken),typeof location<"u"&&location.hostname&&_v.test(location.hostname)&&(r[gv]=vv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Er.forceAllow_=!0}static forceDisallow(){Er.forceDisallow_=!0}static isAvailable(){return Er.forceAllow_?!0:!Er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yC()&&!wC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Yg(n),i=hv(r,zC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[UC]="t",r[kv]=e,r[Tv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class cd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pC(),window[bC+this.uniqueCallbackIdentifier]=e,window[DC+this.uniqueCallbackIdentifier]=n,this.myIFrame=cd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kv]=this.myID,e[Tv]=this.myPW,e[xv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rv+r.length<=Nv;){const o=this.pendingSegs.shift();r=r+"&"+MC+i+"="+o.seg+"&"+FC+i+"="+o.ts+"&"+jC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(BC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const VC=16384,HC=45e3;let qo=null;typeof MozWebSocket<"u"?qo=MozWebSocket:typeof WebSocket<"u"&&(qo=WebSocket);class ht{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ts(this.connId),this.stats_=ud(n),this.connURL=ht.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[pv]=ad,typeof location<"u"&&location.hostname&&_v.test(location.hostname)&&(o[gv]=vv),n&&(o[mv]=n),r&&(o[yv]=r),i&&(o[Bu]=i),s&&(o[wv]=s),Iv(e,Sv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wn.set("previous_websocket_failure",!0);try{let r;WS(),this.mySock=new qo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&qo!==null&&!ht.forceDisallow_}static previouslyFailed(){return Wn.isInMemoryStorage||Wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=rs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hv(n,VC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ht.responsesRequiredToBeHealthy=2;ht.healthyTimeout=3e4;/**
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
 */class ss{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Er,ht]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ht&&ht.isAvailable();let r=n&&!ht.previouslyFailed();if(e.webSocketOnly&&(n||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ht];else{const i=this.transports_=[];for(const s of ss.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ss.globalTransportInitialized_=!1;/**
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
 */const $C=6e4,GC=5e3,KC=10*1024,QC=100*1024,Oa="t",Nf="d",qC="s",Rf="r",YC="e",Pf="o",Af="a",Of="n",bf="p",JC="h";class XC{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ts("c:"+this.id+":"),this.transportManager_=new ss(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=bi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Oa in e){const n=e[Oa];n===Af?this.upgradeIfSecondaryHealthy_():n===Rf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Pf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=mi("t",e),r=mi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Af,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Of,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=mi("t",e),r=mi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=mi(Oa,e);if(Nf in e){const r=e[Nf];if(n===JC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Of){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qC?this.onConnectionShutdown_(r):n===Rf?this.onReset_(r):n===YC?zu("Server Error: "+r):n===Pf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ad!==r&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),bi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($C))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Pv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Av{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Yo extends Av{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Yo}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Df=32,Lf=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new K("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function In(t){return t.pieces_.length-t.pieceNum_}function Y(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function dd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ZC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function os(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ov(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Oe(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Oe(Y(t),Y(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function eI(t,e){const n=os(t,0),r=os(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=sr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function hd(t,e){if(In(t)!==In(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ze(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(In(t)>In(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class tI{constructor(e,n){this.errorPrefix_=n,this.parts_=os(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Al(this.parts_[r]);bv(this)}}function nI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Al(e),bv(t)}function rI(t){const e=t.parts_.pop();t.byteLength_-=Al(e),t.parts_.length>0&&(t.byteLength_-=1)}function bv(t){if(t.byteLength_>Lf)throw new Error(t.errorPrefix_+"has a key path longer than "+Lf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Df)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Df+") or object contains a cycle "+jn(t))}function jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fd extends Av{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new fd}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const gi=1e3,iI=60*5*1e3,Mf=30*1e3,sI=1.3,oI=3e4,lI="server_kill",Ff=3;class Mt extends Pv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Mt.nextPersistentConnectionId_++,this.log_=Ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=gi,this.maxReconnectDelay_=iI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Cs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Mt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kt(e,"w")){const r=Wr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Mf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=QS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):zu("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oI&&(this.reconnectDelay_=gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new XC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{De(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(lI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&De(c),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Du(this.interruptReasons_)&&(this.reconnectDelay_=gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ld(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ff&&(this.reconnectDelay_=Mf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ff&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+uv.replace(/\./g,"-")]=1,nd()?e["framework.cordova"]=1:tv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yo.getInstance().currentlyOnline();return Du(this.interruptReasons_)&&e}}Mt.nextPersistentConnectionId_=0;Mt.nextConnectionId_=0;/**
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
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
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
 */class Ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(Hr,e),i=new j(Hr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
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
 */let Zs;class Dv extends Ol{static get __EMPTY_NODE(){return Zs}static set __EMPTY_NODE(e){Zs=e}compare(e,n){return sr(e.name,n.name)}isDefinedOn(e){throw Zr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Xn,Zs)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Zs)}toString(){return".key"}}const Ar=new Dv;/**
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
 */class eo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??we.RED,this.left=i??ze.EMPTY_NODE,this.right=s??ze.EMPTY_NODE}copy(e,n,r,i,s){return new we(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ze.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class aI{copy(e,n,r,i,s){return this}insert(e,n,r){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new eo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new eo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new eo(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new aI;/**
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
 */function uI(t,e){return sr(t.name,e.name)}function pd(t,e){return sr(t,e)}/**
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
 */let Wu;function cI(t){Wu=t}const Lv=function(t){return typeof t=="number"?"number:"+fv(t):"string:"+t},Mv=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else T(t===Wu||t.isEmpty(),"priority of unexpected type.");T(t===Wu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let jf;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mv(this.priorityNode_)}static set __childrenNodeConstructor(e){jf=e}static get __childrenNodeConstructor(){return jf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||In(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(Y(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fv(this.value_):e+=this.value_,this.lazyHash_=dv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),s=_e.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Fv,jv;function dI(t){Fv=t}function hI(t){jv=t}class fI extends Ol{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?sr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Xn,new _e("[PRIORITY-POST]",jv))}makePost(e,n){const r=Fv(e);return new j(n,new _e("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new fI;/**
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
 */const pI=Math.log(2);class mI{constructor(e){const n=s=>parseInt(Math.log(s)/pI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Jo=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new we(h,c.node,we.BLACK,null,null);{const v=parseInt(d/2,10)+a,_=i(a,v),y=i(v+1,u);return c=t[v],h=n?n(c):c,new we(h,c.node,we.BLACK,_,y)}},s=function(a){let u=null,d=null,c=t.length;const h=function(_,y){const S=c-_,p=c;c-=_;const f=i(S+1,p),g=t[S],w=n?n(g):g;v(new we(w,g.node,y,null,f))},v=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const y=a.nextBitIsOne(),S=Math.pow(2,a.count-(_+1));y?h(S,we.BLACK):(h(S,we.BLACK),h(S,we.RED))}return d},o=new mI(t.length),l=s(o);return new ze(r||e,l)};/**
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
 */let ba;const ar={};class At{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(ar&&oe,"ChildrenNode.ts has not been loaded"),ba=ba||new At({".priority":ar},{".priority":oe}),ba}get(e){const n=Wr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Ar,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Jo(r,e.getCompare()):l=ar;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new At(d,u)}addToIndexes(e,n){const r=Go(this.indexes_,(i,s)=>{const o=Wr(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===ar)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Jo(l,o.getCompare())}else return ar;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new At(r,this.indexSet_)}removeFromIndexes(e,n){const r=Go(this.indexes_,i=>{if(i===ar)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new At(r,this.indexSet_)}}/**
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
 */let vi;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Mv(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vi||(vi=new O(new ze(pd),null,At.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vi}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vi:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(Y(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?vi:this.priorityNode_;return new O(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{T(F(e)!==".priority"||In(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Y(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),r++,s&&O.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lv(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":dv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xs?-1:0}withIndex(e){if(e===Ar||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ar||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),i=n.getIterator(oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ar?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gI extends O{constructor(){super(new ze(pd),O.EMPTY_NODE,At.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const xs=new gI;Object.defineProperties(j,{MIN:{value:new j(Hr,O.EMPTY_NODE)},MAX:{value:new j(Xn,xs)}});Dv.__EMPTY_NODE=O.EMPTY_NODE;_e.__childrenNodeConstructor=O;cI(xs);hI(xs);/**
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
 */const vI=!0;function fe(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,fe(e))}if(!(t instanceof Array)&&vI){const n=[];let r=!1;if(Te(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=fe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return O.EMPTY_NODE;const s=Jo(n,uI,o=>o.name,pd);if(r){const o=Jo(n,oe.getCompare());return new O(s,fe(e),new At({".priority":o},{".priority":oe}))}else return new O(s,fe(e),At.Default)}else{let n=O.EMPTY_NODE;return Te(t,(r,i)=>{if(kt(t,r)&&r.substring(0,1)!=="."){const s=fe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(fe(e))}}dI(fe);/**
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
 */class _I extends Ol{constructor(e){super(),this.indexPath_=e,T(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?sr(e.name,n.name):s}makePost(e,n){const r=fe(e),i=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,xs);return new j(Xn,e)}toString(){return os(this.indexPath_,0).join("/")}}/**
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
 */class yI extends Ol{compare(e,n){const r=e.node.compareTo(n.node);return r===0?sr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=fe(e);return new j(n,r)}toString(){return".value"}}const wI=new yI;/**
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
 */function Uv(t){return{type:"value",snapshotNode:t}}function $r(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ls(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function as(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function SI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class md{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ls(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange($r(n,r)):o.trackChildChange(as(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(ls(i,s))}),n.isLeafNode()||n.forEachChild(oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(as(i,s,o))}else r.trackChildChange($r(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class us{constructor(e){this.indexedFilter_=new md(e.getIndex()),this.index_=e.getIndex(),this.startPost_=us.getStartPost_(e),this.endPost_=us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(O.EMPTY_NODE);const s=this;return n.forEachChild(oe,(o,l)=>{s.matches(new j(o,l))||(i=i.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class EI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=O.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(O.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,v)=>c(v,h)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const a=new j(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const v=h==null?1:o(h,a);if(d&&!r.isEmpty()&&v>=0)return s!=null&&s.trackChildChange(as(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ls(n,c));const y=l.updateImmediateChild(n,O.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange($r(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ls(u.name,u.node)),s.trackChildChange($r(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,O.EMPTY_NODE)):e}}/**
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
 */class gd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hr}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new gd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function CI(t){return t.loadsAllData()?new md(t.getIndex()):t.hasLimit()?new EI(t):new us(t)}function Uf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===wI?n="$value":t.index_===Ar?n="$key":(T(t.index_ instanceof _I,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function zf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
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
 */class Xo extends Pv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ts("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Xo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Uf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Wr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Xo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Uf(e._queryParams),r=e._path.toString(),i=new Cs;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ei(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=rs(l.responseText)}catch{De("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class II{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Zo(){return{value:null,children:new Map}}function zv(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Zo());const i=t.children.get(r);e=Y(e),zv(i,e,n)}}function Vu(t,e,n){t.value!==null?n(e,t.value):kI(t,(r,i)=>{const s=new K(e.toString()+"/"+r);Vu(i,s,n)})}function kI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class TI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Bf=10*1e3,xI=30*1e3,NI=5*60*1e3;class RI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new TI(e);const r=Bf+(xI-Bf)*Math.random();bi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&kt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),bi(this.reportStats_.bind(this),Math.floor(Math.random()*2*NI))}}/**
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
 */var ft;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ft||(ft={}));function vd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _d(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class el{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ft.ACK_USER_WRITE,this.source=vd()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new el(V(),n,this.revert)}}else return T(F(this.path)===e,"operationForChild called for unrelated child."),new el(Y(this.path),this.affectedTree,this.revert)}}/**
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
 */class cs{constructor(e,n){this.source=e,this.path=n,this.type=ft.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new cs(this.source,V()):new cs(this.source,Y(this.path))}}/**
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
 */class Zn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ft.OVERWRITE}operationForChild(e){return U(this.path)?new Zn(this.source,V(),this.snap.getImmediateChild(e)):new Zn(this.source,Y(this.path),this.snap)}}/**
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
 */class Gr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ft.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new Zn(this.source,V(),n.value):new Gr(this.source,V(),n)}else return T(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gr(this.source,Y(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class kn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class PI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function AI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(SI(o.childName,o.snapshotNode))}),_i(t,i,"child_removed",e,r,n),_i(t,i,"child_added",e,r,n),_i(t,i,"child_moved",s,r,n),_i(t,i,"child_changed",e,r,n),_i(t,i,"value",e,r,n),i}function _i(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>bI(t,l,a)),o.forEach(l=>{const a=OI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function OI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bI(t,e,n){if(e.childName==null||n.childName==null)throw Zr("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function bl(t,e){return{eventCache:t,serverCache:e}}function Di(t,e,n,r){return bl(new kn(e,n,r),t.serverCache)}function Bv(t,e,n,r){return bl(t.eventCache,new kn(e,n,r))}function tl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function er(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Da;const DI=()=>(Da||(Da=new ze(_C)),Da);class q{constructor(e,n=DI()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Te(e,(r,i)=>{n=n.set(new K(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(U(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Y(e),n);return s!=null?{path:se(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(Y(e)):new q(null)}}set(e,n){if(U(e))return new q(n,this.children);{const r=F(e),s=(this.children.get(r)||new q(null)).set(Y(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(Y(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(Y(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),s=(this.children.get(r)||new q(null)).setTree(Y(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(Y(e),se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(Y(e),se(n,i),r):new q(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new q(null))}}function Li(t,e,n){if(U(e))return new gt(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Oe(i,e);return s=s.updateChild(o,n),new gt(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new gt(s)}}}function Hu(t,e,n){let r=t;return Te(n,(i,s)=>{r=Li(r,se(e,i),s)}),r}function Wf(t,e){if(U(e))return gt.empty();{const n=t.writeTree_.setTree(e,new q(null));return new gt(n)}}function $u(t,e){return or(t,e)!=null}function or(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Oe(n.path,e)):null}function Vf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function yn(t,e){if(U(e))return t;{const n=or(t,e);return n!=null?new gt(new q(n)):new gt(t.writeTree_.subtree(e))}}function Gu(t){return t.writeTree_.isEmpty()}function Kr(t,e){return Wv(V(),t.writeTree_,e)}function Wv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Wv(se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(se(t,".priority"),r)),n}}/**
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
 */function Dl(t,e){return Gv(e,t)}function LI(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Li(t.visibleWrites,e,n)),t.lastWriteId=r}function MI(t,e,n,r){T(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Hu(t.visibleWrites,e,n),t.lastWriteId=r}function FI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function jI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&UI(l,r.path)?i=!1:Ze(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return zI(t),!0;if(r.snap)t.visibleWrites=Wf(t.visibleWrites,r.path);else{const l=r.children;Te(l,a=>{t.visibleWrites=Wf(t.visibleWrites,se(r.path,a))})}return!0}else return!1}function UI(t,e){if(t.snap)return Ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ze(se(t.path,n),e))return!0;return!1}function zI(t){t.visibleWrites=Vv(t.allWrites,BI,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function BI(t){return t.visible}function Vv(t,e,n){let r=gt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ze(n,o)?(l=Oe(n,o),r=Li(r,l,s.snap)):Ze(o,n)&&(l=Oe(o,n),r=Li(r,V(),s.snap.getChild(l)));else if(s.children){if(Ze(n,o))l=Oe(n,o),r=Hu(r,l,s.children);else if(Ze(o,n))if(l=Oe(o,n),U(l))r=Hu(r,V(),s.children);else{const a=Wr(s.children,F(l));if(a){const u=a.getChild(Y(l));r=Li(r,V(),u)}}}else throw Zr("WriteRecord should have .snap or .children")}}return r}function Hv(t,e,n,r,i){if(!r&&!i){const s=or(t.visibleWrites,e);if(s!=null)return s;{const o=yn(t.visibleWrites,e);if(Gu(o))return n;if(n==null&&!$u(o,V()))return null;{const l=n||O.EMPTY_NODE;return Kr(o,l)}}}else{const s=yn(t.visibleWrites,e);if(!i&&Gu(s))return n;if(!i&&n==null&&!$u(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ze(u.path,e)||Ze(e,u.path))},l=Vv(t.allWrites,o,e),a=n||O.EMPTY_NODE;return Kr(l,a)}}}function WI(t,e,n){let r=O.EMPTY_NODE;const i=or(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=yn(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=Kr(yn(s,new K(o)),l);r=r.updateImmediateChild(o,a)}),Vf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=yn(t.visibleWrites,e);return Vf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function VI(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=se(e,n);if($u(t.visibleWrites,s))return null;{const o=yn(t.visibleWrites,s);return Gu(o)?i.getChild(n):Kr(o,i.getChild(n))}}function HI(t,e,n,r){const i=se(e,n),s=or(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=yn(t.visibleWrites,i);return Kr(o,r.getNode().getImmediateChild(n))}else return null}function $I(t,e){return or(t.visibleWrites,e)}function GI(t,e,n,r,i,s,o){let l;const a=yn(t.visibleWrites,e),u=or(a,V());if(u!=null)l=u;else if(n!=null)l=Kr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=h.getNext();for(;v&&d.length<i;)c(v,r)!==0&&d.push(v),v=h.getNext();return d}else return[]}function KI(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function nl(t,e,n,r){return Hv(t.writeTree,t.treePath,e,n,r)}function wd(t,e){return WI(t.writeTree,t.treePath,e)}function Hf(t,e,n,r){return VI(t.writeTree,t.treePath,e,n,r)}function rl(t,e){return $I(t.writeTree,se(t.treePath,e))}function QI(t,e,n,r,i,s){return GI(t.writeTree,t.treePath,e,n,r,i,s)}function Sd(t,e,n){return HI(t.writeTree,t.treePath,e,n)}function $v(t,e){return Gv(se(t.treePath,e),t.writeTree)}function Gv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class qI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,as(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ls(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,$r(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,as(r,e.snapshotNode,i.oldSnap));else throw Zr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class YI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Kv=new YI;class Ed{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:er(this.viewCache_),s=QI(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function JI(t){return{filter:t}}function XI(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ZI(t,e,n,r,i){const s=new qI;let o,l;if(n.type===ft.OVERWRITE){const u=n;u.source.fromUser?o=Ku(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=il(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ft.MERGE){const u=n;u.source.fromUser?o=tk(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Qu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ft.ACK_USER_WRITE){const u=n;u.revert?o=ik(t,e,u.path,r,i,s):o=nk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ft.LISTEN_COMPLETE)o=rk(t,e,n.path,r,s);else throw Zr("Unknown operation type: "+n.type);const a=s.getChanges();return ek(e,o,a),{viewCache:o,changes:a}}function ek(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=tl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Uv(tl(e)))}}function Qv(t,e,n,r,i,s){const o=e.eventCache;if(rl(r,n)!=null)return e;{let l,a;if(U(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=er(e),d=u instanceof O?u:O.EMPTY_NODE,c=wd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=nl(r,er(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){T(In(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Hf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=Y(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Hf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Sd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Di(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function il(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),v,null)}else{const v=F(n);if(!a.isCompleteForPath(n)&&In(n)>1)return e;const _=Y(n),S=a.getNode().getImmediateChild(v).updateChild(_,r);v===".priority"?u=d.updatePriority(a.getNode(),S):u=d.updateChild(a.getNode(),v,S,_,Kv,null)}const c=Bv(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),h=new Ed(i,c,s);return Qv(t,c,n,i,h,l)}function Ku(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Ed(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Di(e,u,!0,t.filter.filtersNodes());else{const c=F(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Di(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=Y(n),v=l.getNode().getImmediateChild(c);let _;if(U(h))_=r;else{const y=d.getCompleteChild(c);y!=null?dd(h)===".priority"&&y.getChild(Ov(h)).isEmpty()?_=y:_=y.updateChild(h,r):_=O.EMPTY_NODE}if(v.equals(_))a=e;else{const y=t.filter.updateChild(l.getNode(),c,_,h,d,o);a=Di(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function $f(t,e){return t.eventCache.isCompleteForChild(e)}function tk(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=se(n,a);$f(e,F(d))&&(l=Ku(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=se(n,a);$f(e,F(d))||(l=Ku(t,l,d,u,i,s,o))}),l}function Gf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Qu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const v=e.serverCache.getNode().getImmediateChild(c),_=Gf(t,v,h);a=il(t,a,new K(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const v=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!v){const _=e.serverCache.getNode().getImmediateChild(c),y=Gf(t,_,h);a=il(t,a,new K(c),y,i,s,o,l)}}),a}function nk(t,e,n,r,i,s,o){if(rl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return il(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new q(null);return a.getNode().forEachChild(Ar,(d,c)=>{u=u.set(new K(d),c)}),Qu(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((d,c)=>{const h=se(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Qu(t,e,n,u,i,s,l,o)}}function rk(t,e,n,r,i){const s=e.serverCache,o=Bv(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return Qv(t,o,n,r,Kv,i)}function ik(t,e,n,r,i,s){let o;if(rl(r,n)!=null)return e;{const l=new Ed(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=nl(r,er(e));else{const c=e.serverCache.getNode();T(c instanceof O,"serverChildren would be complete if leaf node"),d=wd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=F(n);let c=Sd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,Y(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,O.EMPTY_NODE,Y(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nl(r,er(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||rl(r,V())!=null,Di(e,u,o,t.filter.filtersNodes())}}/**
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
 */class sk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new md(r.getIndex()),s=CI(r);this.processor_=JI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(O.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(O.EMPTY_NODE,l.getNode(),null),d=new kn(a,o.isFullyInitialized(),i.filtersNodes()),c=new kn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=bl(c,d),this.eventGenerator_=new PI(this.query_)}get query(){return this.query_}}function ok(t){return t.viewCache_.serverCache.getNode()}function lk(t){return tl(t.viewCache_)}function ak(t,e){const n=er(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Kf(t){return t.eventRegistrations_.length===0}function uk(t,e){t.eventRegistrations_.push(e)}function Qf(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qf(t,e,n,r){e.type===ft.MERGE&&e.source.queryId!==null&&(T(er(t.viewCache_),"We should always have a full cache before handling merges"),T(tl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ZI(t.processor_,i,e,n,r);return XI(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,qv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ck(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(s,o)=>{r.push($r(s,o))}),n.isFullyInitialized()&&r.push(Uv(n.getNode())),qv(t,r,n.getNode(),e)}function qv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return AI(t.eventGenerator_,e,n,i)}/**
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
 */let sl;class Yv{constructor(){this.views=new Map}}function dk(t){T(!sl,"__referenceConstructor has already been defined"),sl=t}function hk(){return T(sl,"Reference.ts has not been loaded"),sl}function fk(t){return t.views.size===0}function Cd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),qf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qf(o,e,n,r));return s}}function Jv(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=nl(n,i?r:null),a=!1;l?a=!0:r instanceof O?(l=wd(n,r),a=!1):(l=O.EMPTY_NODE,a=!1);const u=bl(new kn(l,a,!1),new kn(r,i,!1));return new sk(e,u)}return o}function pk(t,e,n,r,i,s){const o=Jv(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),uk(o,n),ck(o,n)}function mk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Tn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Qf(u,n,r)),Kf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Qf(a,n,r)),Kf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Tn(t)&&s.push(new(hk())(e._repo,e._path)),{removed:s,events:o}}function Xv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function wn(t,e){let n=null;for(const r of t.views.values())n=n||ak(r,e);return n}function Zv(t,e){if(e._queryParams.loadsAllData())return Ll(t);{const r=e._queryIdentifier;return t.views.get(r)}}function e_(t,e){return Zv(t,e)!=null}function Tn(t){return Ll(t)!=null}function Ll(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ol;function gk(t){T(!ol,"__referenceConstructor has already been defined"),ol=t}function vk(){return T(ol,"Reference.ts has not been loaded"),ol}let _k=1;class Yf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=KI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function t_(t,e,n,r,i){return LI(t.pendingWriteTree_,e,n,r,i),i?ri(t,new Zn(vd(),e,n)):[]}function yk(t,e,n,r){MI(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return ri(t,new Gr(vd(),e,i))}function ln(t,e,n=!1){const r=FI(t.pendingWriteTree_,e);if(jI(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(V(),!0):Te(r.children,o=>{s=s.set(new K(o),!0)}),ri(t,new el(r.path,s,n))}else return[]}function Ns(t,e,n){return ri(t,new Zn(_d(),e,n))}function wk(t,e,n){const r=q.fromObject(n);return ri(t,new Gr(_d(),e,r))}function Sk(t,e){return ri(t,new cs(_d(),e))}function Ek(t,e,n){const r=kd(t,n);if(r){const i=Td(r),s=i.path,o=i.queryId,l=Oe(s,e),a=new cs(yd(o),l);return xd(t,s,a)}else return[]}function ll(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||e_(o,e))){const a=mk(o,e,n,r);fk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,v)=>Tn(v));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const v=kk(h);for(let _=0;_<v.length;++_){const y=v[_],S=y.query,p=s_(t,y);t.listenProvider_.startListening(Mi(S),ds(t,S),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Mi(e),null):u.forEach(h=>{const v=t.queryToTagMap.get(Ml(h));t.listenProvider_.stopListening(Mi(h),v)}))}Tk(t,u)}return l}function n_(t,e,n,r){const i=kd(t,r);if(i!=null){const s=Td(i),o=s.path,l=s.queryId,a=Oe(o,e),u=new Zn(yd(l),a,n);return xd(t,o,u)}else return[]}function Ck(t,e,n,r){const i=kd(t,r);if(i){const s=Td(i),o=s.path,l=s.queryId,a=Oe(o,e),u=q.fromObject(n),d=new Gr(yd(l),a,u);return xd(t,o,d)}else return[]}function qu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,v)=>{const _=Oe(h,i);s=s||wn(v,_),o=o||Tn(v)});let l=t.syncPointTree_.get(i);l?(o=o||Tn(l),s=s||wn(l,V())):(l=new Yv,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=O.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((v,_)=>{const y=wn(_,V());y&&(s=s.updateImmediateChild(v,y))}));const u=e_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Ml(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const v=xk();t.queryToTagMap.set(h,v),t.tagToQueryMap.set(v,h)}const d=Dl(t.pendingWriteTree_,i);let c=pk(l,e,n,d,s,a);if(!u&&!o&&!r){const h=Zv(l,e);c=c.concat(Nk(t,e,h))}return c}function Id(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Oe(o,e),u=wn(l,a);if(u)return u});return Hv(i,e,s,n,!0)}function Ik(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Oe(u,n);r=r||wn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||wn(i,V()):(i=new Yv,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new kn(r,!0,!1):null,l=Dl(t.pendingWriteTree_,e._path),a=Jv(i,e,l,s?o.getNode():O.EMPTY_NODE,s);return lk(a)}function ri(t,e){return r_(e,t.syncPointTree_,null,Dl(t.pendingWriteTree_,V()))}function r_(t,e,n,r){if(U(t.path))return i_(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=wn(i,V()));let s=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=$v(r,o);s=s.concat(r_(l,a,u,d))}return i&&(s=s.concat(Cd(i,t,r,n))),s}}function i_(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=wn(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=$v(r,o),d=t.operationForChild(o);d&&(s=s.concat(i_(d,l,a,u)))}),i&&(s=s.concat(Cd(i,t,r,n))),s}function s_(t,e){const n=e.query,r=ds(t,n);return{hashFn:()=>(ok(e)||O.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Ek(t,n._path,r):Sk(t,n._path);{const s=SC(i,n);return ll(t,n,null,s)}}}}function ds(t,e){const n=Ml(e);return t.queryToTagMap.get(n)}function Ml(t){return t._path.toString()+"$"+t._queryIdentifier}function kd(t,e){return t.tagToQueryMap.get(e)}function Td(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function xd(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=Dl(t.pendingWriteTree_,e);return Cd(r,n,i,null)}function kk(t){return t.fold((e,n,r)=>{if(n&&Tn(n))return[Ll(n)];{let i=[];return n&&(i=Xv(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function Mi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vk())(t._repo,t._path):t}function Tk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ml(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function xk(){return _k++}function Nk(t,e,n){const r=e._path,i=ds(t,e),s=s_(t,n),o=t.listenProvider_.startListening(Mi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)T(!Tn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!U(u)&&d&&Tn(d))return[Ll(d).query];{let h=[];return d&&(h=h.concat(Xv(d).map(v=>v.query))),Te(c,(v,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Mi(d),ds(t,d))}}return o}/**
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
 */class Nd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nd(n)}node(){return this.node_}}class Rd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new Rd(this.syncTree_,n)}node(){return Id(this.syncTree_,this.path_)}}const Rk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Jf=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Pk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ak(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Pk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Ak=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},o_=function(t,e,n,r){return Pd(e,new Rd(n,t),r)},l_=function(t,e,n){return Pd(t,new Nd(e),n)};function Pd(t,e,n){const r=t.getPriority().val(),i=Jf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Jf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new _e(l,fe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new _e(i))),o.forEachChild(oe,(l,a)=>{const u=Pd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Ad{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Od(t,e){let n=e instanceof K?e:new K(e),r=t,i=F(n);for(;i!==null;){const s=Wr(r.node.children,i)||{children:{},childCount:0};r=new Ad(i,r,s),n=Y(n),i=F(n)}return r}function ii(t){return t.node.value}function a_(t,e){t.node.value=e,Yu(t)}function u_(t){return t.node.childCount>0}function Ok(t){return ii(t)===void 0&&!u_(t)}function Fl(t,e){Te(t.node.children,(n,r)=>{e(new Ad(n,t,r))})}function c_(t,e,n,r){n&&e(t),Fl(t,i=>{c_(i,e,!0)})}function bk(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Rs(t){return new K(t.parent===null?t.name:Rs(t.parent)+"/"+t.name)}function Yu(t){t.parent!==null&&Dk(t.parent,t.name,t)}function Dk(t,e,n){const r=Ok(n),i=kt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Yu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Yu(t))}/**
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
 */const Lk=/[\[\].#$\/\u0000-\u001F\u007F]/,Mk=/[\[\].#$\u0000-\u001F\u007F]/,La=10*1024*1024,bd=function(t){return typeof t=="string"&&t.length!==0&&!Lk.test(t)},d_=function(t){return typeof t=="string"&&t.length!==0&&!Mk.test(t)},Fk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),d_(t)},jk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!od(t)||t&&typeof t=="object"&&kt(t,".sv")},Uk=function(t,e,n,r){jl(Pl(t,"value"),e,n)},jl=function(t,e,n){const r=n instanceof K?new tI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jn(r));if(typeof e=="function")throw new Error(t+"contains a function "+jn(r)+" with contents = "+e.toString());if(od(e))throw new Error(t+"contains "+e.toString()+" "+jn(r));if(typeof e=="string"&&e.length>La/3&&Al(e)>La)throw new Error(t+"contains a string greater than "+La+" utf8 bytes "+jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!bd(o)))throw new Error(t+" contains an invalid key ("+o+") "+jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nI(r,o),jl(t,l,r),rI(r)}),i&&s)throw new Error(t+' contains ".value" child '+jn(r)+" in addition to actual children.")}},zk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=os(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!bd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ze(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Bk=function(t,e,n,r){const i=Pl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Te(e,(o,l)=>{const a=new K(o);if(jl(i,l,se(n,a)),dd(a)===".priority"&&!jk(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),zk(i,s)},h_=function(t,e,n,r){if(!d_(n))throw new Error(Pl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Wk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),h_(t,e,n)},f_=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Vk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Fk(n))throw new Error(Pl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Hk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ul(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!hd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function p_(t,e,n){Ul(t,n),m_(t,r=>hd(r,e))}function st(t,e,n){Ul(t,n),m_(t,r=>Ze(r,e)||Ze(e,r))}function m_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?($k(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $k(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Oi&&Ce("event: "+n.toString()),ni(r)}}}/**
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
 */const Gk="repo_interrupt",Kk=25;class Qk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Hk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zo(),this.transactionQueueTree_=new Ad,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qk(t,e,n){if(t.stats_=ud(t.repoInfo_),t.forceRestClient_||kC())t.server_=new Xo(t.repoInfo_,(r,i,s,o)=>{Xf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Zf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mt(t.repoInfo_,e,(r,i,s,o)=>{Xf(t,r,i,s,o)},r=>{Zf(t,r)},r=>{Jk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=PC(t.repoInfo_,()=>new RI(t.stats_,t.server_)),t.infoData_=new II,t.infoSyncTree_=new Yf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ns(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Dd(t,"connected",!1),t.serverSyncTree_=new Yf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);st(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Yk(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zl(t){return Rk({timestamp:Yk(t)})}function Xf(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Go(n,u=>fe(u));o=Ck(t.serverSyncTree_,s,a,i)}else{const a=fe(n);o=n_(t.serverSyncTree_,s,a,i)}else if(r){const a=Go(n,u=>fe(u));o=wk(t.serverSyncTree_,s,a)}else{const a=fe(n);o=Ns(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Qr(t,s)),st(t.eventQueue_,l,o)}function Zf(t,e){Dd(t,"connected",e),e===!1&&tT(t)}function Jk(t,e){Te(e,(n,r)=>{Dd(t,n,r)})}function Dd(t,e,n){const r=new K("/.info/"+e),i=fe(n);t.infoData_.updateSnapshot(r,i);const s=Ns(t.infoSyncTree_,r,i);st(t.eventQueue_,r,s)}function Ld(t){return t.nextWriteId_++}function Xk(t,e,n){const r=Ik(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=fe(i).withIndex(e._queryParams.getIndex());qu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ns(t.serverSyncTree_,e._path,s);else{const l=ds(t.serverSyncTree_,e);o=n_(t.serverSyncTree_,e._path,s,l)}return st(t.eventQueue_,e._path,o),ll(t.serverSyncTree_,e,n,null,!0),s},i=>(Ps(t,"get for query "+pe(e)+" failed: "+i),Promise.reject(new Error(i))))}function Zk(t,e,n,r,i){Ps(t,"set",{path:e.toString(),value:n,priority:r});const s=zl(t),o=fe(n,r),l=Id(t.serverSyncTree_,e),a=l_(o,l,s),u=Ld(t),d=t_(t.serverSyncTree_,e,a,u,!0);Ul(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,v)=>{const _=h==="ok";_||De("set at "+e+" failed: "+h);const y=ln(t.serverSyncTree_,u,!_);st(t.eventQueue_,e,y),Ju(t,i,h,v)});const c=Fd(t,e);Qr(t,c),st(t.eventQueue_,c,[])}function eT(t,e,n,r){Ps(t,"update",{path:e.toString(),value:n});let i=!0;const s=zl(t),o={};if(Te(n,(l,a)=>{i=!1,o[l]=o_(se(e,l),fe(a),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),Ju(t,r,"ok",void 0);else{const l=Ld(t),a=yk(t.serverSyncTree_,e,o,l);Ul(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||De("update at "+e+" failed: "+u);const h=ln(t.serverSyncTree_,l,!c),v=h.length>0?Qr(t,e):e;st(t.eventQueue_,v,h),Ju(t,r,u,d)}),Te(n,u=>{const d=Fd(t,se(e,u));Qr(t,d)}),st(t.eventQueue_,e,[])}}function tT(t){Ps(t,"onDisconnectEvents");const e=zl(t),n=Zo();Vu(t.onDisconnect_,V(),(i,s)=>{const o=o_(i,s,t.serverSyncTree_,e);zv(n,i,o)});let r=[];Vu(n,V(),(i,s)=>{r=r.concat(Ns(t.serverSyncTree_,i,s));const o=Fd(t,i);Qr(t,o)}),t.onDisconnect_=Zo(),st(t.eventQueue_,V(),r)}function nT(t,e,n){let r;F(e._path)===".info"?r=qu(t.infoSyncTree_,e,n):r=qu(t.serverSyncTree_,e,n),p_(t.eventQueue_,e._path,r)}function rT(t,e,n){let r;F(e._path)===".info"?r=ll(t.infoSyncTree_,e,n):r=ll(t.serverSyncTree_,e,n),p_(t.eventQueue_,e._path,r)}function iT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Gk)}function Ps(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function Ju(t,e,n,r){e&&ni(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function g_(t,e,n){return Id(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function Md(t,e=t.transactionQueueTree_){if(e||Bl(t,e),ii(e)){const n=__(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&sT(t,Rs(e),n)}else u_(e)&&Fl(e,n=>{Md(t,n)})}function sT(t,e,n){const r=n.map(u=>u.currentWriteId),i=g_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];T(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Oe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ps(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(ln(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Bl(t,Od(t.transactionQueueTree_,e)),Md(t,t.transactionQueueTree_),st(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ni(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{De("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Qr(t,e)}},o)}function Qr(t,e){const n=v_(t,e),r=Rs(n),i=__(t,n);return oT(t,i,r),r}function oT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Oe(n,a.path);let d=!1,c;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(ln(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Kk)d=!0,c="maxretry",i=i.concat(ln(t.serverSyncTree_,a.currentWriteId,!0));else{const h=g_(t,a.path,o);a.currentInputSnapshot=h;const v=e[l].update(h.val());if(v!==void 0){jl("transaction failed: Data returned ",v,a.path);let _=fe(v);typeof v=="object"&&v!=null&&kt(v,".priority")||(_=_.updatePriority(h.getPriority()));const S=a.currentWriteId,p=zl(t),f=l_(_,h,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=f,a.currentWriteId=Ld(t),o.splice(o.indexOf(S),1),i=i.concat(t_(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(ln(t.serverSyncTree_,S,!0))}else d=!0,c="nodata",i=i.concat(ln(t.serverSyncTree_,a.currentWriteId,!0))}st(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Bl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ni(r[l]);Md(t,t.transactionQueueTree_)}function v_(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&ii(r)===void 0;)r=Od(r,n),e=Y(e),n=F(e);return r}function __(t,e){const n=[];return y_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function y_(t,e,n){const r=ii(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Fl(e,i=>{y_(t,i,n)})}function Bl(t,e){const n=ii(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,a_(e,n.length>0?n:void 0)}Fl(e,r=>{Bl(t,r)})}function Fd(t,e){const n=Rs(v_(t,e)),r=Od(t.transactionQueueTree_,e);return bk(r,i=>{Ma(t,i)}),Ma(t,r),c_(r,i=>{Ma(t,i)}),n}function Ma(t,e){const n=ii(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ln(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?a_(e,void 0):n.length=s+1,st(t.eventQueue_,Rs(e),i);for(let o=0;o<r.length;o++)ni(r[o])}}/**
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
 */function lT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function aT(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):De(`Invalid query segment '${n}' in query '${t}'`)}return e}const ep=function(t,e){const n=uT(t),r=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||gC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Cv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},uT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=lT(t.substring(d,c)));const h=aT(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const v=e.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class cT{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class dT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class w_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:dd(this._path)}get ref(){return new Gt(this._repo,this._path)}get _queryIdentifier(){const e=zf(this._queryParams),n=ld(e);return n==="{}"?"default":n}get _queryObject(){return zf(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof jd))return!1;const n=this._repo===e._repo,r=hd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZC(this._path)}}class Gt extends jd{constructor(e,n){super(e,n,new gd,!1)}get parent(){const e=Ov(this._path);return e===null?null:new Gt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=Xu(this.ref,e);return new hs(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new hs(i,Xu(this.ref,r),oe)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tt(t,e){return t=ot(t),t._checkNotDeleted("ref"),e!==void 0?Xu(t._root,e):t._root}function Xu(t,e){return t=ot(t),F(t._path)===null?Wk("child","path",e):h_("child","path",e),new Gt(t._repo,se(t._path,e))}function S_(t){return f_("remove",t._path),fs(t,null)}function fs(t,e){t=ot(t),f_("set",t._path),Uk("set",e,t._path);const n=new Cs;return Zk(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function hT(t,e){Bk("update",e,t._path);const n=new Cs;return eT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function fT(t){t=ot(t);const e=new w_(()=>{}),n=new Wl(e);return Xk(t._repo,t,n).then(r=>new hs(r,new Gt(t._repo,t._path),t._queryParams.getIndex()))}class Wl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new cT("value",this,new hs(e.snapshotNode,new Gt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dT(this,e,n):null}matches(e){return e instanceof Wl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function pT(t,e,n,r,i){const s=new w_(n,void 0),o=new Wl(s);return nT(t._repo,t,o),()=>rT(t._repo,t,o)}function Vl(t,e,n,r){return pT(t,"value",e)}dk(Gt);gk(Gt);/**
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
 */const mT="FIREBASE_DATABASE_EMULATOR_HOST",Zu={};let gT=!1;function vT(t,e,n,r){t.repoInfo_=new Cv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function _T(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ep(s,i),l=o.repoInfo,a;typeof process<"u"&&Ef&&(a=Ef[mT]),a?(s=`http://${a}?ns=${l.namespace}`,o=ep(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new xC(t.name,t.options,e);Vk("Invalid Firebase Database URL",o),U(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=wT(l,t,u,new TC(t.name,n));return new ST(d,t)}function yT(t,e){const n=Zu[e];(!n||n[t.key]!==t)&&Wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iT(t),delete n[t.key]}function wT(t,e,n,r){let i=Zu[e.name];i||(i={},Zu[e.name]=i);let s=i[t.toURLString()];return s&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Qk(t,gT,n,r),i[t.toURLString()]=s,s}class ST{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gt(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wt("Cannot call "+e+" on a deleted database.")}}function ET(t=ov(),e){const n=sd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=FS("database");r&&CT(n,...r)}return n}function CT(t,e,n,r={}){t=ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new mo(mo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:jS(r.mockUserToken,t.app.options.projectId);s=new mo(o)}vT(i,e,n,s)}/**
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
 */function IT(t){cC(ti),Vr(new Jn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _T(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_n(Cf,If,t),_n(Cf,If,"esm2017")}/**
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
 */const kT={".sv":"timestamp"};function tp(){return kT}Mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};IT();function Ud(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function E_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TT=E_,C_=new Is("auth","Firebase",E_());/**
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
 */const al=new rd("@firebase/auth");function xT(t,...e){al.logLevel<=G.WARN&&al.warn(`Auth (${ti}): ${t}`,...e)}function go(t,...e){al.logLevel<=G.ERROR&&al.error(`Auth (${ti}): ${t}`,...e)}/**
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
 */function Vt(t,...e){throw zd(t,...e)}function Ct(t,...e){return zd(t,...e)}function I_(t,e,n){const r=Object.assign(Object.assign({},TT()),{[e]:n});return new Is("auth","Firebase",r).create(e,{appName:t.name})}function Sn(t){return I_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return C_.create(t,...e)}function D(t,e,...n){if(!t)throw zd(e,...n)}function Ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw go(e),new Error(e)}function Ht(t,e){t||Ot(e)}/**
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
 */function ec(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function NT(){return np()==="http:"||np()==="https:"}function np(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function RT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NT()||zS()||"connection"in navigator)?navigator.onLine:!0}function PT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class As{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=nd()||tv()}get(){return RT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bd(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class k_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OT=new As(3e4,6e4);function Hl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function si(t,e,n,r,i={}){return T_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ei(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return US()||(u.referrerPolicy="no-referrer"),k_.fetch()(N_(t,t.config.apiHost,n,l),u)})}async function T_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AT),e);try{const i=new bT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw to(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw to(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw to(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw to(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw I_(t,d,u);Vt(t,d)}}catch(i){if(i instanceof An)throw i;Vt(t,"network-request-failed",{message:String(i)})}}async function x_(t,e,n,r,i={}){const s=await si(t,e,n,r,i);return"mfaPendingCredential"in s&&Vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function N_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bd(t.config,i):`${t.config.apiScheme}://${i}`}class bT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),OT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function to(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function DT(t,e){return si(t,"POST","/v1/accounts:delete",e)}async function R_(t,e){return si(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LT(t,e=!1){const n=ot(t),r=await n.getIdToken(e),i=Wd(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fi(Fa(i.auth_time)),issuedAtTime:Fi(Fa(i.iat)),expirationTime:Fi(Fa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fa(t){return Number(t)*1e3}function Wd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=$o(n);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rp(t){const e=Wd(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&MT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fi(this.lastLoginAt),this.creationTime=Fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ul(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ps(t,R_(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?P_(s.providerUserInfo):[],l=UT(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new tc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function jT(t){const e=ot(t);await ul(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function P_(t){return t.map(e=>{var{providerId:n}=e,r=Ud(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function zT(t,e){const n=await T_(t,{},async()=>{const r=ei({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=N_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",k_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BT(t,e){return si(t,"POST","/v2/accounts:revokeToken",Hl(t,e))}/**
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
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){D(e.length!==0,"internal-error");const n=rp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await zT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Or;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return Ot("not implemented")}}/**
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
 */function Qt(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ud(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new tc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ps(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LT(this,e)}reload(){return jT(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ul(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await ps(this,DT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:w,isAnonymous:x,providerData:N,stsTokenManager:E}=n;D(g&&E,e,"internal-error");const C=Or.fromJSON(this.name,E);D(typeof g=="string",e,"internal-error"),Qt(c,e.name),Qt(h,e.name),D(typeof w=="boolean",e,"internal-error"),D(typeof x=="boolean",e,"internal-error"),Qt(v,e.name),Qt(_,e.name),Qt(y,e.name),Qt(S,e.name),Qt(p,e.name),Qt(f,e.name);const P=new bt({uid:g,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:x,photoURL:_,phoneNumber:v,tenantId:y,stsTokenManager:C,createdAt:p,lastLoginAt:f});return N&&Array.isArray(N)&&(P.providerData=N.map(b=>Object.assign({},b))),S&&(P._redirectEventId=S),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Or;i.updateFromServerResponse(n);const s=new bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ul(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];D(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?P_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Or;l.updateFromIdToken(r);const a=new bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new tc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const ip=new Map;function Dt(t){Ht(t instanceof Function,"Expected a class definition");let e=ip.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ip.set(t,e),e)}/**
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
 */class A_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}A_.type="NONE";const sp=A_;/**
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
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vo(this.userKey,i.apiKey,s),this.fullPersistenceKey=vo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new br(Dt(sp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Dt(sp);const o=vo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=bt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new br(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new br(s,e,r))}}/**
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
 */function op(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(L_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(O_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(F_(e))return"Blackberry";if(j_(e))return"Webos";if(b_(e))return"Safari";if((e.includes("chrome/")||D_(e))&&!e.includes("edge/"))return"Chrome";if(M_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function O_(t=Le()){return/firefox\//i.test(t)}function b_(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function D_(t=Le()){return/crios\//i.test(t)}function L_(t=Le()){return/iemobile/i.test(t)}function M_(t=Le()){return/android/i.test(t)}function F_(t=Le()){return/blackberry/i.test(t)}function j_(t=Le()){return/webos/i.test(t)}function Vd(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WT(t=Le()){var e;return Vd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VT(){return BS()&&document.documentMode===10}function U_(t=Le()){return Vd(t)||M_(t)||j_(t)||F_(t)||/windows phone/i.test(t)||L_(t)}/**
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
 */function z_(t,e=[]){let n;switch(t){case"Browser":n=op(Le());break;case"Worker":n=`${op(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
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
 */class HT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $T(t,e={}){return si(t,"GET","/v2/passwordPolicy",Hl(t,e))}/**
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
 */const GT=6;class KT{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:GT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class QT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lp(this),this.idTokenSubscription=new lp(this),this.beforeStateQueue=new HT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await R_(this,{idToken:e}),r=await bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ul(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(Sn(this));const n=e?ot(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $T(this),n=new KT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await BT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $l(t){return ot(t)}class lp{constructor(e){this.auth=e,this.observer=null,this.addObserver=JS(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qT(t){Hd=t}function YT(t){return Hd.loadJS(t)}function JT(){return Hd.gapiScript}function XT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ZT(t,e){const n=sd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ko(s,e??{}))return i;Vt(i,"already-initialized")}return n.initialize({options:e})}function e1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function t1(t,e,n){const r=$l(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=B_(e),{host:o,port:l}=n1(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),r1()}function B_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function n1(t){const e=B_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ap(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ap(o)}}}function ap(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function r1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class W_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,n){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}}/**
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
 */async function Dr(t,e){return x_(t,"POST","/v1/accounts:signInWithIdp",Hl(t,e))}/**
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
 */const i1="http://localhost";class tr extends W_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ud(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}buildRequest(){const e={requestUri:i1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ei(n)}return e}}/**
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
 */class V_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Os extends V_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zt extends Os{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
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
 */class en extends Os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tr._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return en.credential(n,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
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
 */class tn extends Os{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends Os{constructor(){super("twitter.com")}static credential(e,n){return tr._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */async function s1(t,e){return x_(t,"POST","/v1/accounts:signUp",Hl(t,e))}/**
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
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await bt._fromIdTokenResponse(e,r,i),o=up(r);return new xn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=up(r);return new xn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function up(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function o1(t){var e;if(Pt(t.app))return Promise.reject(Sn(t));const n=$l(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new xn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await s1(n,{returnSecureToken:!0}),i=await xn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class cl extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cl(e,n,r,i)}}function H_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cl._fromErrorAndOperation(t,s,e,r):s})}async function l1(t,e,n=!1){const r=await ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xn._forOperation(t,"link",r)}/**
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
 */async function a1(t,e,n=!1){const{auth:r}=t;if(Pt(r.app))return Promise.reject(Sn(r));const i="reauthenticate";try{const s=await ps(t,H_(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Wd(s.idToken);D(o,r,"internal-error");const{sub:l}=o;return D(t.uid===l,r,"user-mismatch"),xn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
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
 */async function u1(t,e,n=!1){if(Pt(t.app))return Promise.reject(Sn(t));const r="signIn",i=await H_(t,r,e),s=await xn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function c1(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function d1(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}const dl="__sak";/**
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
 */class $_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dl,"1"),this.storage.removeItem(dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const h1=1e3,f1=10;class G_ extends $_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=U_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);VT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,f1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},h1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}G_.type="LOCAL";const p1=G_;/**
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
 */class K_ extends $_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}K_.type="SESSION";const Q_=K_;/**
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
 */function m1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await m1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gl.receivers=[];/**
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
 */function $d(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class g1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=$d("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function It(){return window}function v1(t){It().location.href=t}/**
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
 */function q_(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function _1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function w1(){return q_()?self:null}/**
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
 */const Y_="firebaseLocalStorageDb",S1=1,hl="firebaseLocalStorage",J_="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kl(t,e){return t.transaction([hl],e?"readwrite":"readonly").objectStore(hl)}function E1(){const t=indexedDB.deleteDatabase(Y_);return new bs(t).toPromise()}function nc(){const t=indexedDB.open(Y_,S1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hl,{keyPath:J_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hl)?e(r):(r.close(),await E1(),e(await nc()))})})}async function cp(t,e,n){const r=Kl(t,!0).put({[J_]:e,value:n});return new bs(r).toPromise()}async function C1(t,e){const n=Kl(t,!1).get(e),r=await new bs(n).toPromise();return r===void 0?null:r.value}function dp(t,e){const n=Kl(t,!0).delete(e);return new bs(n).toPromise()}const I1=800,k1=3;class X_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>k1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return q_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gl._getInstance(w1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _1(),!this.activeServiceWorker)return;this.sender=new g1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||y1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nc();return await cp(e,dl,"1"),await dp(e,dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>C1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Kl(i,!1).getAll();return new bs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}X_.type="LOCAL";const T1=X_;new As(3e4,6e4);/**
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
 */function x1(t,e){return e?Dt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gd extends W_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function N1(t){return u1(t.auth,new Gd(t),t.bypassAuthState)}function R1(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),a1(n,new Gd(t),t.bypassAuthState)}async function P1(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),l1(n,new Gd(t),t.bypassAuthState)}/**
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
 */class Z_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return N1;case"linkViaPopup":case"linkViaRedirect":return P1;case"reauthViaPopup":case"reauthViaRedirect":return R1;default:Vt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const A1=new As(2e3,1e4);class Cr extends Z_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Cr.currentPopupAction&&Cr.currentPopupAction.cancel(),Cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=$d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A1.get())};e()}}Cr.currentPopupAction=null;/**
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
 */const O1="pendingRedirect",_o=new Map;class b1 extends Z_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await D1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function D1(t,e){const n=F1(e),r=M1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function L1(t,e){_o.set(t._key(),e)}function M1(t){return Dt(t._redirectPersistence)}function F1(t){return vo(O1,t.config.apiKey,t.name)}async function j1(t,e,n=!1){if(Pt(t.app))return Promise.reject(Sn(t));const r=$l(t),i=x1(r,e),o=await new b1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const U1=10*60*1e3;class z1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ey(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U1&&this.cachedEventUids.clear(),this.cachedEventUids.has(hp(e))}saveEventToCache(e){this.cachedEventUids.add(hp(e)),this.lastProcessedEventTime=Date.now()}}function hp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ey({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function B1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ey(t);default:return!1}}/**
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
 */async function W1(t,e={}){return si(t,"GET","/v1/projects",e)}/**
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
 */const V1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H1=/^https?/;async function $1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await W1(t);for(const n of e)try{if(G1(n))return}catch{}Vt(t,"unauthorized-domain")}function G1(t){const e=ec(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!H1.test(n))return!1;if(V1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const K1=new As(3e4,6e4);function fp(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Q1(t){return new Promise((e,n)=>{var r,i,s;function o(){fp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fp(),n(Ct(t,"network-request-failed"))},timeout:K1.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=It().gapi)===null||s===void 0)&&s.load)o();else{const l=XT("iframefcb");return It()[l]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},YT(`${JT()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw yo=null,e})}let yo=null;function q1(t){return yo=yo||Q1(t),yo}/**
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
 */const Y1=new As(5e3,15e3),J1="__/auth/iframe",X1="emulator/auth/iframe",Z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ex=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tx(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bd(e,X1):`https://${t.config.authDomain}/${J1}`,r={apiKey:e.apiKey,appName:t.name,v:ti},i=ex.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ei(r).slice(1)}`}async function nx(t){const e=await q1(t),n=It().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:tx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),l=It().setTimeout(()=>{s(o)},Y1.get());function a(){It().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const rx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ix=500,sx=600,ox="_blank",lx="http://localhost";class pp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ax(t,e,n,r=ix,i=sx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},rx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Le().toLowerCase();n&&(l=D_(u)?ox:n),O_(u)&&(e=e||lx,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[v,_])=>`${h}${v}=${_},`,"");if(WT(u)&&l!=="_self")return ux(e||"",l),new pp(null);const c=window.open(e||"",l,d);D(c,t,"popup-blocked");try{c.focus()}catch{}return new pp(c)}function ux(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cx="__/auth/handler",dx="emulator/auth/handler",hx=encodeURIComponent("fac");async function mp(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:i};if(e instanceof V_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Du(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof Os){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${hx}=${encodeURIComponent(a)}`:"";return`${fx(t)}?${ei(l).slice(1)}${u}`}function fx({config:t}){return t.emulator?Bd(t,dx):`https://${t.authDomain}/${cx}`}/**
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
 */const ja="webStorageSupport";class px{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Q_,this._completeRedirectFn=j1,this._overrideRedirectResult=L1}async _openPopup(e,n,r,i){var s;Ht((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mp(e,n,r,ec(),i);return ax(e,o,$d())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mp(e,n,r,ec(),i);return v1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nx(e),r=new z1(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ja,{type:ja},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ja];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return U_()||b_()||Vd()}}const mx=px;var gp="@firebase/auth",vp="1.7.9";/**
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
 */class gx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _x(t){Vr(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:z_(t)},u=new QT(r,i,s,a);return e1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new Jn("auth-internal",e=>{const n=$l(e.getProvider("auth").getImmediate());return(r=>new gx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(gp,vp,vx(t)),_n(gp,vp,"esm2017")}/**
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
 */const yx=5*60,wx=ev("authIdTokenMaxAge")||yx;let _p=null;const Sx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wx)return;const i=n==null?void 0:n.token;_p!==i&&(_p=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ex(t=ov()){const e=sd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZT(t,{popupRedirectResolver:mx,persistence:[T1,p1,Q_]}),r=ev("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Sx(s.toString());d1(n,o,()=>o(n.currentUser)),c1(n,l=>o(l))}}const i=Xg("auth");return i&&t1(n,`http://${i}`),n}function Cx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Cx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_x("Browser");const Ix={apiKey:"AIzaSyBiZSV4Z_3-L0z8RP5yY_2xXlw5fKOy2jc",authDomain:"classroom-polling-dd344.firebaseapp.com",databaseURL:"https://classroom-polling-dd344-default-rtdb.firebaseio.com",projectId:"classroom-polling-dd344",storageBucket:"classroom-polling-dd344.firebasestorage.app",messagingSenderId:"528103899828",appId:"1:528103899828:web:f74274640de611a61d0de1"},ty=sv(Ix),nt=ET(ty),kx=Ex(ty);o1(kx).catch(console.error);function Tx(t){const e=new Date().toISOString().split("T")[0];return fs(tt(nt,`session/students/${t}`),{joinedAt:tp(),date:e}),fs(tt(nt,`sessionStudents/${e}_${t}`),{name:t,date:e,joinedAt:tp()})}function yp(t){return S_(tt(nt,`session/students/${t}`))}function xx(t,e,n){return hT(tt(nt,"session/activePoll/responses"),{[t]:n})}function Nx({question:t,options:e,correctIndex:n,duration:r}){const i=`poll_${Date.now()}`;return fs(tt(nt,"session/activePoll"),{id:i,question:t,options:e,correctIndex:n??null,duration:r,startedAt:Date.now(),responses:{}})}async function wp(t){const n=(await fT(tt(nt,"session/activePoll"))).val();if(n)return await fs(tt(nt,`pollHistory/${n.id}`),{...n,endedAt:Date.now()}),S_(tt(nt,"session/activePoll"))}function ny(t){const e=tt(nt,"session/activePoll");return Vl(e,n=>t(n.val()))}function Rx(t){const e=tt(nt,"session/students");return Vl(e,n=>{const r=n.val()||{};t(Object.keys(r).map(i=>({name:i,...r[i]})))})}function Px(t){const e=tt(nt,"pollHistory");return Vl(e,n=>{const r=n.val()||{},i=Object.values(r).sort((s,o)=>(o.startedAt||0)-(s.startedAt||0));t(i)})}const Sp=60;function Ax(){const t=Es(),[e,n]=I.useState([]),[r,i]=I.useState(null),[s,o]=I.useState(0),[l,a]=I.useState("dashboard"),u=I.useRef(null),[d,c]=I.useState(""),[h,v]=I.useState(["",""]),[_,y]=I.useState(null),[S,p]=I.useState(Sp);I.useEffect(()=>{sessionStorage.getItem("role")!=="teacher"&&t("/")},[]),I.useEffect(()=>{const E=ny(P=>{i(P),P&&o(Math.max(0,Math.round(P.duration-(Date.now()-P.startedAt)/1e3)))}),C=Rx(n);return()=>{E(),C()}},[]),I.useEffect(()=>(clearInterval(u.current),r&&(u.current=setInterval(()=>{const E=Math.max(0,Math.round(r.duration-(Date.now()-r.startedAt)/1e3));o(E),E===0&&(clearInterval(u.current),wp())},500)),()=>clearInterval(u.current)),[r==null?void 0:r.id]);function f(){h.length<6&&v([...h,""])}function g(E,C){v(h.map((P,b)=>b===E?C:P))}function w(E){if(h.length<=2)return;const C=h.filter((P,b)=>b!==E);v(C),_===E?y(null):_>E&&y(_-1)}function x(E){E.preventDefault();const C=h.filter(P=>P.trim());!d.trim()||C.length<2||(Nx({question:d.trim(),options:C,correctIndex:_,duration:S}),c(""),v(["",""]),y(null),p(Sp),a("dashboard"))}const N=r?Object.keys(r.responses||{}).length:0;return m.jsxs("div",{style:B.page,children:[m.jsxs("aside",{style:B.sidebar,children:[m.jsxs("div",{style:B.logo,children:[m.jsx("span",{style:{color:"var(--accent)"},children:"●"})," ClassPoll"]}),m.jsxs("nav",{style:B.nav,children:[m.jsx("button",{style:{...B.navBtn,...l==="dashboard"?B.navActive:{}},onClick:()=>a("dashboard"),children:"📊 Dashboard"}),m.jsx("button",{style:{...B.navBtn,...l==="create"?B.navActive:{},...r?B.navDisabled:{}},onClick:()=>!r&&a("create"),disabled:!!r,children:"➕ New Poll"}),m.jsx("button",{style:B.navBtn,onClick:()=>t("/history"),children:"🕐 History"})]}),m.jsxs("div",{style:B.sidebarBottom,children:[m.jsxs("div",{style:B.studentCount,children:[m.jsx("span",{style:B.dot}),m.jsx("strong",{children:e.length})," student",e.length!==1?"s":""," online"]}),m.jsx("div",{style:B.studentList,children:e.map(E=>m.jsx("div",{style:B.studentChip,children:E.name},E.name))}),m.jsx("button",{className:"btn btn-secondary",style:{width:"100%",marginTop:"auto",fontSize:"0.8rem"},onClick:()=>{sessionStorage.clear(),t("/")},children:"Exit"})]})]}),m.jsxs("main",{style:B.main,children:[l==="create"&&m.jsxs("div",{style:B.content,className:"fade-up",children:[m.jsx("h2",{style:B.pageTitle,children:"Create a Poll"}),m.jsxs("form",{onSubmit:x,style:B.form,children:[m.jsxs("div",{children:[m.jsx("label",{className:"label",children:"Question"}),m.jsx("textarea",{className:"input",rows:2,placeholder:"e.g. Which process converts sunlight into energy?",value:d,onChange:E=>c(E.target.value),style:{resize:"vertical"},required:!0})]}),m.jsxs("div",{children:[m.jsxs("label",{className:"label",children:["Answer Options",m.jsx("span",{style:{color:"var(--muted)",textTransform:"none",letterSpacing:0,marginLeft:"0.5rem",fontWeight:400},children:"(click circle to mark correct)"})]}),m.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:h.map((E,C)=>m.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[m.jsx("button",{type:"button",style:{...B.correctBtn,..._===C?B.correctBtnActive:{}},onClick:()=>y(_===C?null:C),children:_===C?"✓":String.fromCharCode(65+C)}),m.jsx("input",{className:"input",style:{flex:1},placeholder:`Option ${String.fromCharCode(65+C)}`,value:E,onChange:P=>g(C,P.target.value),required:!0}),m.jsx("button",{type:"button",style:B.removeBtn,onClick:()=>w(C),disabled:h.length<=2,children:"✕"})]},C))}),h.length<6&&m.jsx("button",{type:"button",className:"btn btn-ghost",style:{marginTop:"0.5rem",fontSize:"0.85rem"},onClick:f,children:"+ Add option"})]}),m.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"flex-end"},children:[m.jsxs("div",{style:{flex:1},children:[m.jsx("label",{className:"label",children:"Duration (seconds)"}),m.jsx("input",{className:"input",type:"number",min:10,max:300,value:S,onChange:E=>p(Number(E.target.value))})]}),m.jsx("button",{type:"submit",className:"btn btn-primary",style:{padding:"0.65rem 2rem"},children:"Start Poll →"})]})]})]}),l==="dashboard"&&m.jsxs("div",{style:B.content,className:"fade-up",children:[m.jsx("h2",{style:B.pageTitle,children:"Dashboard"}),!r&&m.jsxs("div",{style:B.empty,children:[m.jsx("span",{style:{fontSize:"3rem"},children:"📋"}),m.jsxs("p",{children:["No active poll. ",m.jsx("button",{style:B.link,onClick:()=>a("create"),children:"Create one →"})]})]}),r&&m.jsxs("div",{style:B.pollCard,children:[m.jsxs("div",{style:B.timerRow,children:[m.jsx(Ox,{timeLeft:s,total:r.duration}),m.jsxs("div",{children:[m.jsx("div",{style:B.pollQuestion,children:r.question}),m.jsxs("div",{style:B.responseMeta,children:[N," / ",e.length," responded"]})]}),m.jsx("button",{className:"btn btn-secondary",style:{marginLeft:"auto"},onClick:()=>wp(),children:"End Poll"})]}),m.jsx("div",{style:{marginTop:"1.25rem",display:"flex",flexDirection:"column",gap:"0.6rem"},children:r.options.map((E,C)=>{const P=Object.values(r.responses||{}).filter(lt=>lt===C).length,b=N>0?Math.round(P/N*100):0,ge=r.correctIndex===C;return m.jsxs("div",{style:B.optionRow,children:[m.jsxs("div",{style:{...B.optionLabel,...ge?B.correctLabel:{}},children:[String.fromCharCode(65+C)," ",ge&&"✓"]}),m.jsxs("div",{style:{flex:1},children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.25rem"},children:[m.jsx("span",{style:{fontSize:"0.9rem"},children:E}),m.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--muted)"},children:[P," (",b,"%)"]})]}),m.jsx("div",{style:B.barBg,children:m.jsx("div",{style:{...B.barFill,width:`${b}%`,background:ge?"var(--success)":"var(--accent2)"}})})]})]},C)})}),Object.keys(r.responses||{}).length>0&&m.jsxs("div",{style:{marginTop:"1rem"},children:[m.jsx("label",{className:"label",children:"Responded"}),m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.4rem"},children:Object.keys(r.responses).map(E=>m.jsx("span",{style:B.answeredChip,children:E},E))})]})]})]})]})]})}function Ox({timeLeft:t,total:e}){const r=2*Math.PI*28,i=e>0?t/e:0,s=r*(1-i),o=i>.4?"var(--accent2)":i>.15?"#f59e0b":"var(--accent)";return m.jsxs("div",{style:{position:"relative",width:72,height:72,flexShrink:0},children:[m.jsxs("svg",{width:"72",height:"72",style:{transform:"rotate(-90deg)"},children:[m.jsx("circle",{cx:"36",cy:"36",r:28,fill:"none",stroke:"var(--cream)",strokeWidth:"5"}),m.jsx("circle",{cx:"36",cy:"36",r:28,fill:"none",stroke:o,strokeWidth:"5",strokeDasharray:r,strokeDashoffset:s,strokeLinecap:"round",style:{transition:"stroke-dashoffset 0.5s linear, stroke 0.5s"}})]}),m.jsx("span",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.1rem"},children:t})]})}const B={page:{display:"flex",minHeight:"100vh",background:"var(--paper)"},sidebar:{width:220,minHeight:"100vh",background:"var(--ink)",color:"white",display:"flex",flexDirection:"column",padding:"1.5rem 1rem",gap:"0.5rem",position:"sticky",top:0,flexShrink:0},logo:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.1rem",padding:"0 0.5rem",marginBottom:"1rem"},nav:{display:"flex",flexDirection:"column",gap:"0.25rem"},navBtn:{background:"transparent",color:"rgba(255,255,255,0.7)",border:"none",borderRadius:8,padding:"0.6rem 0.75rem",textAlign:"left",cursor:"pointer",fontSize:"0.9rem",transition:"all 0.15s"},navActive:{background:"rgba(255,255,255,0.12)",color:"white"},navDisabled:{opacity:.4,cursor:"not-allowed"},sidebarBottom:{marginTop:"auto",display:"flex",flexDirection:"column",gap:"0.75rem"},studentCount:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.85rem",color:"rgba(255,255,255,0.6)"},dot:{width:8,height:8,borderRadius:"50%",background:"#4ade80",flexShrink:0,boxShadow:"0 0 6px #4ade80"},studentList:{display:"flex",flexWrap:"wrap",gap:"0.35rem",maxHeight:120,overflowY:"auto"},studentChip:{background:"rgba(255,255,255,0.1)",borderRadius:4,padding:"0.2rem 0.5rem",fontSize:"0.78rem",color:"rgba(255,255,255,0.8)"},main:{flex:1,padding:"2rem",overflowY:"auto"},content:{maxWidth:720,margin:"0 auto"},pageTitle:{fontSize:"1.6rem",marginBottom:"1.5rem"},form:{display:"flex",flexDirection:"column",gap:"1.25rem",background:"white",padding:"1.5rem",borderRadius:12,border:"1px solid var(--border)"},empty:{textAlign:"center",padding:"4rem 2rem",color:"var(--muted)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem"},link:{background:"none",border:"none",color:"var(--accent2)",cursor:"pointer",fontSize:"inherit",textDecoration:"underline"},pollCard:{background:"white",borderRadius:12,border:"1px solid var(--border)",padding:"1.5rem"},timerRow:{display:"flex",alignItems:"center",gap:"1rem"},pollQuestion:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.1rem"},responseMeta:{color:"var(--muted)",fontSize:"0.85rem",marginTop:"0.2rem"},optionRow:{display:"flex",alignItems:"center",gap:"0.75rem"},optionLabel:{width:28,height:28,borderRadius:"50%",background:"var(--cream)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",fontWeight:700,flexShrink:0},correctLabel:{background:"#dcfce7",color:"var(--success)"},barBg:{height:8,borderRadius:4,background:"var(--cream)",overflow:"hidden"},barFill:{height:"100%",borderRadius:4,transition:"width 0.4s ease"},answeredChip:{background:"#dbeafe",color:"var(--accent2)",borderRadius:4,padding:"0.15rem 0.5rem",fontSize:"0.78rem"},correctBtn:{width:32,height:32,borderRadius:"50%",border:"2px solid var(--border)",background:"var(--cream)",cursor:"pointer",fontWeight:700,fontSize:"0.8rem",flexShrink:0,transition:"all 0.15s"},correctBtnActive:{background:"var(--success)",color:"white",borderColor:"var(--success)"},removeBtn:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:"0.9rem",padding:"0.25rem",borderRadius:4}};function bx(){var E;const t=Es(),[e,n]=I.useState(""),[r,i]=I.useState(!1),[s,o]=I.useState(null),[l,a]=I.useState(null),[u,d]=I.useState(!1),[c,h]=I.useState(0),[v,_]=I.useState(null),y=I.useRef(null),S=I.useRef(null);I.useEffect(()=>ny(P=>{!P&&s&&(_(s),setTimeout(()=>_(null),8e3)),P&&P.id!==S.current&&(a(null),d(!1),S.current=P.id),o(P),P&&h(Math.max(0,Math.round(P.duration-(Date.now()-P.startedAt)/1e3)))}),[s]),I.useEffect(()=>(clearInterval(y.current),s&&(y.current=setInterval(()=>{const C=Math.max(0,Math.round(s.duration-(Date.now()-s.startedAt)/1e3));h(C),C===0&&clearInterval(y.current)},500)),()=>clearInterval(y.current)),[s==null?void 0:s.id]),I.useEffect(()=>{if(!r||!e)return;const C=()=>yp(e);return window.addEventListener("beforeunload",C),()=>{C(),window.removeEventListener("beforeunload",C)}},[r,e]);function p(C){C.preventDefault();const P=e.trim();P&&Tx(P).then(()=>i(!0))}function f(C){u||c===0||a(C)}function g(){l===null||u||!s||(xx(e,s.id,l),d(!0))}const w=s&&((E=s.responses)==null?void 0:E[e])!==void 0,x=w?s.responses[e]:l,N=s?Object.keys(s.responses||{}).length:0;return r?!s&&!v?m.jsx("div",{style:Q.center,children:m.jsxs("div",{style:Q.waitCard,className:"fade-up",children:[m.jsx("div",{style:Q.pulse}),m.jsxs("h2",{style:{fontFamily:"var(--font-display)",fontSize:"1.5rem"},children:["Hi, ",e,"! 👋"]}),m.jsx("p",{style:{color:"var(--muted)"},children:"Waiting for the teacher to start a poll…"}),m.jsx("button",{style:Q.backLink,onClick:()=>{yp(e),t("/")},children:"Leave session"})]})}):!s&&v?m.jsx("div",{style:Q.center,children:m.jsxs("div",{style:Q.waitCard,className:"fade-up",children:[m.jsx("span",{style:{fontSize:"2.5rem"},children:"✅"}),m.jsx("h2",{style:{fontFamily:"var(--font-display)"},children:"Poll ended!"}),m.jsx("p",{style:{color:"var(--muted)",textAlign:"center"},children:m.jsx("em",{children:v.question})}),v.correctIndex!=null&&m.jsxs("p",{style:{color:"var(--success)",fontWeight:600},children:["Correct answer: ",v.options[v.correctIndex]]}),m.jsx("p",{style:{color:"var(--muted)",fontSize:"0.85rem"},children:"Waiting for next poll…"})]})}):m.jsxs("div",{style:Q.pollPage,children:[m.jsxs("header",{style:Q.pollHeader,children:[m.jsxs("span",{style:{fontFamily:"var(--font-display)",fontWeight:700},children:[m.jsx("span",{style:{color:"var(--accent)"},children:"●"})," ClassPoll"]}),m.jsxs("span",{style:{color:"var(--muted)",fontSize:"0.9rem"},children:["Signed in as ",m.jsx("strong",{children:e})]})]}),m.jsxs("div",{style:Q.pollContent,className:"fade-up",children:[m.jsx("div",{style:Q.timerBar,children:m.jsx("div",{style:{...Q.timerFill,width:`${c/s.duration*100}%`,background:c>s.duration*.4?"var(--accent2)":c>s.duration*.15?"#f59e0b":"var(--accent)"}})}),m.jsxs("div",{style:Q.timerLabel,children:[c,"s remaining · ",N," responded"]}),m.jsx("h2",{style:Q.questionText,children:s.question}),m.jsx("div",{style:Q.optionGrid,children:s.options.map((C,P)=>{const b=x===P,ge=s.correctIndex===P,lt=w||u,On=Object.values(s.responses||{}).filter(Ql=>Ql===P).length,oi=N>0?Math.round(On/N*100):0;return m.jsxs("button",{style:{...Q.optionBtn,...b?Q.optionSelected:{},...lt&&ge?Q.optionCorrect:{},...c===0?{cursor:"default"}:{}},onClick:()=>f(P),disabled:c===0||w,children:[m.jsx("span",{style:Q.optionLetter,children:String.fromCharCode(65+P)}),m.jsx("span",{style:{flex:1,textAlign:"left"},children:C}),lt&&m.jsxs("span",{style:Q.optionPct,children:[oi,"%"]}),lt&&m.jsx("div",{style:{...Q.optionBar,width:`${oi}%`,background:ge?"rgba(22,163,74,0.15)":"rgba(37,99,235,0.1)"}})]},P)})}),!w&&!u&&c>0&&m.jsx("button",{className:"btn btn-primary",style:{width:"100%",justifyContent:"center",padding:"0.85rem",fontSize:"1rem",marginTop:"0.5rem"},onClick:g,disabled:l===null,children:"Submit Answer"}),(u||w)&&m.jsx("div",{style:Q.submittedBadge,children:"✓ Answer submitted — waiting for results"}),c===0&&!u&&!w&&m.jsx("div",{style:Q.submittedBadge,children:"⏰ Time's up!"})]})]}):m.jsx("div",{style:Q.center,children:m.jsxs("div",{style:Q.joinCard,className:"fade-up",children:[m.jsxs("div",{style:Q.joinLogo,children:[m.jsx("span",{style:{color:"var(--accent)"},children:"●"})," ClassPoll"]}),m.jsx("h1",{style:{fontSize:"1.8rem",marginBottom:"0.25rem"},children:"Join Session"}),m.jsx("p",{style:{color:"var(--muted)",marginBottom:"1.5rem"},children:"Enter your name to start answering polls"}),m.jsxs("form",{onSubmit:p,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[m.jsx("input",{className:"input",placeholder:"Your first name",value:e,onChange:C=>n(C.target.value),autoFocus:!0,style:{fontSize:"1.1rem",textAlign:"center"},required:!0}),m.jsx("button",{type:"submit",className:"btn btn-primary",style:{justifyContent:"center",padding:"0.75rem"},children:"Join →"})]}),m.jsx("button",{style:Q.backLink,onClick:()=>t("/"),children:"← Back"})]})})}const Q={center:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",background:"var(--paper)"},joinCard:{background:"white",borderRadius:16,border:"1px solid var(--border)",padding:"2.5rem 2rem",maxWidth:380,width:"100%",textAlign:"center",boxShadow:"var(--shadow)"},joinLogo:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.1rem",marginBottom:"1.5rem",display:"block"},backLink:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",marginTop:"1rem",fontSize:"0.85rem",display:"block",textAlign:"center"},waitCard:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",background:"white",borderRadius:16,border:"1px solid var(--border)",padding:"3rem 2rem",maxWidth:380,width:"100%",textAlign:"center",boxShadow:"var(--shadow)"},pulse:{width:16,height:16,borderRadius:"50%",background:"var(--accent2)",boxShadow:"0 0 0 0 rgba(37,99,235,0.4)",animation:"pulse-ring 1.5s ease-out infinite"},pollPage:{minHeight:"100vh",background:"var(--paper)",display:"flex",flexDirection:"column"},pollHeader:{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center",background:"white"},pollContent:{maxWidth:620,margin:"0 auto",padding:"2rem 1rem",width:"100%"},timerBar:{height:6,background:"var(--cream)",borderRadius:3,overflow:"hidden",marginBottom:"0.4rem"},timerFill:{height:"100%",borderRadius:3,transition:"width 0.5s linear, background 0.5s"},timerLabel:{color:"var(--muted)",fontSize:"0.82rem",marginBottom:"1.5rem"},questionText:{fontFamily:"var(--font-display)",fontSize:"clamp(1.2rem, 3vw, 1.6rem)",lineHeight:1.25,marginBottom:"1.25rem"},optionGrid:{display:"flex",flexDirection:"column",gap:"0.6rem"},optionBtn:{position:"relative",overflow:"hidden",display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.9rem 1rem",borderRadius:10,border:"2px solid var(--border)",background:"white",cursor:"pointer",transition:"all 0.15s",textAlign:"left",fontFamily:"var(--font-body)",fontSize:"0.95rem"},optionSelected:{borderColor:"var(--accent2)",background:"#eff6ff"},optionCorrect:{borderColor:"var(--success)",background:"#f0fdf4"},optionLetter:{width:28,height:28,borderRadius:"50%",background:"var(--cream)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.8rem",fontWeight:700,flexShrink:0},optionPct:{color:"var(--muted)",fontSize:"0.82rem",fontWeight:600,flexShrink:0},optionBar:{position:"absolute",left:0,top:0,height:"100%",transition:"width 0.4s ease",zIndex:0,pointerEvents:"none"},submittedBadge:{marginTop:"1rem",padding:"0.75rem",borderRadius:8,background:"#f0fdf4",color:"var(--success)",textAlign:"center",fontWeight:500,fontSize:"0.9rem",border:"1px solid #bbf7d0"}},Dx="teach123";function Lx(){const t=Es(),[e,n]=I.useState(!1),[r,i]=I.useState(""),[s,o]=I.useState(""),[l,a]=I.useState([]),[u,d]=I.useState({}),[c,h]=I.useState("polls"),[v,_]=I.useState(null);I.useEffect(()=>{sessionStorage.getItem("historyAuth")==="true"&&n(!0)},[]),I.useEffect(()=>{if(!e)return;const S=Px(a),p=Vl(tt(nt,"sessionStudents"),f=>{const g=f.val()||{},w={};Object.values(g).forEach(N=>{const E=N.date||"unknown";w[E]||(w[E]=new Set),w[E].add(N.name)});const x={};Object.entries(w).forEach(([N,E])=>{x[N]=[...E].sort()}),d(x)});return()=>{S(),p()}},[e]);function y(S){S.preventDefault(),r===Dx?(sessionStorage.setItem("historyAuth","true"),n(!0)):(o("Incorrect password."),i(""))}return e?m.jsxs("div",{style:H.page,children:[m.jsxs("header",{style:H.header,children:[m.jsx("button",{style:H.back,onClick:()=>t("/"),children:"← Back"}),m.jsx("span",{style:H.title,children:"Poll History"}),m.jsxs("div",{style:H.tabs,children:[m.jsx("button",{style:{...H.tab,...c==="polls"?H.tabActive:{}},onClick:()=>h("polls"),children:"Polls"}),m.jsx("button",{style:{...H.tab,...c==="attendance"?H.tabActive:{}},onClick:()=>h("attendance"),children:"Attendance"})]})]}),m.jsxs("main",{style:H.main,children:[c==="polls"&&m.jsxs("div",{className:"fade-up",children:[l.length===0&&m.jsx("div",{style:H.empty,children:"No polls yet. Run your first one in class!"}),l.map((S,p)=>{const f=S.responses||{},g=Object.keys(f).length,w=v===p;return m.jsxs("div",{style:H.pollCard,children:[m.jsxs("button",{style:H.pollHeader2,onClick:()=>_(w?null:p),children:[m.jsxs("div",{children:[m.jsx("div",{style:H.pollQ,children:S.question}),m.jsxs("div",{style:H.pollMeta,children:[new Date(S.startedAt).toLocaleString()," · ",g," responses"]})]}),m.jsx("span",{style:{color:"var(--muted)"},children:w?"▲":"▼"})]}),w&&m.jsxs("div",{style:H.pollDetails,children:[(S.options||[]).map((x,N)=>{const E=Object.values(f).filter(b=>b===N).length,C=g>0?Math.round(E/g*100):0,P=S.correctIndex===N;return m.jsxs("div",{style:H.histOpt,children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[m.jsxs("span",{style:{fontWeight:P?600:400,color:P?"var(--success)":"inherit"},children:[String.fromCharCode(65+N),". ",x," ",P&&"✓"]}),m.jsxs("span",{style:{color:"var(--muted)",fontSize:"0.85rem"},children:[E," (",C,"%)"]})]}),m.jsx("div",{style:H.barBg,children:m.jsx("div",{style:{...H.barFill,width:`${C}%`,background:P?"var(--success)":"var(--accent2)"}})})]},N)}),g>0&&m.jsxs("div",{style:{marginTop:"0.75rem"},children:[m.jsx("label",{className:"label",children:"Who responded"}),m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.35rem"},children:Object.keys(f).map(x=>m.jsx("span",{style:H.chip,children:x},x))})]})]})]},S.id||p)})]}),c==="attendance"&&m.jsxs("div",{className:"fade-up",children:[Object.keys(u).length===0&&m.jsx("div",{style:H.empty,children:"No attendance records yet."}),Object.entries(u).sort(([S],[p])=>p.localeCompare(S)).map(([S,p])=>m.jsxs("div",{style:H.pollCard,children:[m.jsx("div",{style:H.pollHeader2,children:m.jsxs("div",{children:[m.jsx("div",{style:H.pollQ,children:S}),m.jsxs("div",{style:H.pollMeta,children:[p.length," student",p.length!==1?"s":""]})]})}),m.jsx("div",{style:{padding:"0 1rem 1rem",display:"flex",flexWrap:"wrap",gap:"0.4rem"},children:p.map(f=>m.jsx("span",{style:H.chip,children:f},f))})]},S))]})]})]}):m.jsx("div",{style:H.center,children:m.jsxs("div",{style:H.loginCard,className:"fade-up",children:[m.jsxs("div",{style:H.loginLogo,children:[m.jsx("span",{style:{color:"var(--accent)"},children:"●"})," ClassPoll"]}),m.jsx("h2",{style:{fontSize:"1.4rem",marginBottom:"0.25rem"},children:"Poll History"}),m.jsx("p",{style:{color:"var(--muted)",marginBottom:"1.5rem",fontSize:"0.9rem"},children:"Enter the teacher password to view history and attendance."}),m.jsxs("form",{onSubmit:y,style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[m.jsx("input",{className:"input",type:"password",placeholder:"Teacher password",value:r,onChange:S=>{i(S.target.value),o("")},autoFocus:!0,style:{textAlign:"center"}}),s&&m.jsx("span",{style:H.err,children:s}),m.jsx("button",{type:"submit",className:"btn btn-primary",style:{justifyContent:"center",padding:"0.75rem"},children:"View History →"})]}),m.jsx("button",{style:H.backLink,onClick:()=>t("/"),children:"← Back"})]})})}const H={center:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",background:"var(--paper)"},loginCard:{background:"white",borderRadius:16,border:"1px solid var(--border)",padding:"2.5rem 2rem",maxWidth:380,width:"100%",textAlign:"center",boxShadow:"var(--shadow)"},loginLogo:{fontFamily:"var(--font-display)",fontWeight:800,fontSize:"1.1rem",marginBottom:"1.5rem",display:"block"},err:{color:"var(--accent)",fontSize:"0.85rem"},backLink:{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",marginTop:"1rem",fontSize:"0.85rem",display:"block",textAlign:"center"},page:{minHeight:"100vh",background:"var(--paper)"},header:{padding:"1rem 1.5rem",borderBottom:"1px solid var(--border)",background:"white",display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"},back:{background:"none",border:"none",color:"var(--accent2)",cursor:"pointer",fontSize:"0.9rem"},title:{fontFamily:"var(--font-display)",fontWeight:700,fontSize:"1.2rem",flex:1},tabs:{display:"flex",gap:"0.25rem",background:"var(--cream)",borderRadius:8,padding:"0.25rem"},tab:{background:"none",border:"none",padding:"0.35rem 0.85rem",borderRadius:6,cursor:"pointer",fontSize:"0.9rem",color:"var(--muted)",transition:"all 0.15s"},tabActive:{background:"white",color:"var(--ink)",fontWeight:600,boxShadow:"0 1px 3px rgba(0,0,0,0.1)"},main:{maxWidth:720,margin:"0 auto",padding:"1.5rem 1rem"},empty:{textAlign:"center",color:"var(--muted)",padding:"3rem",fontSize:"0.95rem"},pollCard:{background:"white",borderRadius:12,border:"1px solid var(--border)",marginBottom:"0.75rem",overflow:"hidden"},pollHeader2:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem",background:"none",border:"none",width:"100%",cursor:"pointer",textAlign:"left"},pollQ:{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"0.95rem"},pollMeta:{color:"var(--muted)",fontSize:"0.8rem",marginTop:"0.2rem"},pollDetails:{padding:"0 1rem 1rem",borderTop:"1px solid var(--border)",paddingTop:"0.75rem"},histOpt:{marginBottom:"0.6rem"},barBg:{height:6,borderRadius:3,background:"var(--cream)",overflow:"hidden"},barFill:{height:"100%",borderRadius:3,transition:"width 0.3s"},chip:{background:"var(--cream)",borderRadius:4,padding:"0.2rem 0.5rem",fontSize:"0.78rem",color:"var(--ink)"}};function Mx(){return m.jsx(TS,{basename:"/classroom-polling",children:m.jsxs(CS,{children:[m.jsx(ur,{path:"/",element:m.jsx(NS,{})}),m.jsx(ur,{path:"/teacher",element:m.jsx(Ax,{})}),m.jsx(ur,{path:"/student",element:m.jsx(bx,{})}),m.jsx(ur,{path:"/history",element:m.jsx(Lx,{})}),m.jsx(ur,{path:"*",element:m.jsx(SS,{to:"/"})})]})})}Ua.createRoot(document.getElementById("root")).render(m.jsx(Op.StrictMode,{children:m.jsx(Mx,{})}));
