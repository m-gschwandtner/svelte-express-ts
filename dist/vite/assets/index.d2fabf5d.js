const Mt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}};Mt();function B(){}function Rt(e){return e()}function We(){return Object.create(null)}function ie(e){e.forEach(Rt)}function Ht(e){return typeof e=="function"}function Le(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let G;function ze(e,t){return G||(G=document.createElement("a")),G.href=t,e===G.href}function Vt(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function De(e,t,r){e.insertBefore(t,r||null)}function se(e){e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function K(e){return document.createTextNode(e)}function N(){return K(" ")}function Jt(e,t,r,i){return e.addEventListener(t,r,i),()=>e.removeEventListener(t,r,i)}function v(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function Wt(e){return Array.from(e.childNodes)}function gt(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let qe;function X(e){qe=e}const z=[],Xe=[],Z=[],Ke=[],zt=Promise.resolve();let Se=!1;function Xt(){Se||(Se=!0,zt.then(wt))}function Ce(e){Z.push(e)}const ce=new Set;let Y=0;function wt(){const e=qe;do{for(;Y<z.length;){const t=z[Y];Y++,X(t),Kt(t.$$)}for(X(null),z.length=0,Y=0;Xe.length;)Xe.pop()();for(let t=0;t<Z.length;t+=1){const r=Z[t];ce.has(r)||(ce.add(r),r())}Z.length=0}while(z.length);for(;Ke.length;)Ke.pop()();Se=!1,ce.clear(),X(e)}function Kt(e){if(e.fragment!==null){e.update(),ie(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ce)}}const ee=new Set;let Qt;function $e(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function Qe(e,t,r,i){if(e&&e.o){if(ee.has(e))return;ee.add(e),Qt.c.push(()=>{ee.delete(e),i&&(r&&e.d(1),i())}),e.o(t)}else i&&i()}function Ge(e){e&&e.c()}function Te(e,t,r,i){const{fragment:n,on_mount:s,on_destroy:a,after_update:o}=e.$$;n&&n.m(t,r),i||Ce(()=>{const u=s.map(Rt).filter(Ht);a?a.push(...u):ie(u),e.$$.on_mount=[]}),o.forEach(Ce)}function Pe(e,t){const r=e.$$;r.fragment!==null&&(ie(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function Gt(e,t){e.$$.dirty[0]===-1&&(z.push(e),Xt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ue(e,t,r,i,n,s,a,o=[-1]){const u=qe;X(e);const f=e.$$={fragment:null,ctx:null,props:s,update:B,not_equal:n,bound:We(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:We(),dirty:o,skip_bound:!1,root:t.target||u.$$.root};a&&a(f.root);let d=!1;if(f.ctx=r?r(e,t.props||{},(h,l,...m)=>{const D=m.length?m[0]:l;return f.ctx&&n(f.ctx[h],f.ctx[h]=D)&&(!f.skip_bound&&f.bound[h]&&f.bound[h](D),d&&Gt(e,h)),l}):[],f.update(),d=!0,ie(f.before_update),f.fragment=i?i(f.ctx):!1,t.target){if(t.hydrate){const h=Wt(t.target);f.fragment&&f.fragment.l(h),h.forEach(se)}else f.fragment&&f.fragment.c();t.intro&&$e(e.$$.fragment),Te(e,t.target,t.anchor,t.customElement),wt()}X(u)}class Be{$destroy(){Pe(this,1),this.$destroy=B}$on(t,r){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(r),()=>{const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!Vt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Yt="/assets/svelte.a39f39b7.svg",Zt="/assets/express.3bc3c944.png";function er(e){let t,r,i,n,s;return{c(){t=y("button"),r=K("count is "),i=K(e[0])},m(a,o){De(a,t,o),p(t,r),p(t,i),n||(s=Jt(t,"click",e[1]),n=!0)},p(a,[o]){o&1&&gt(i,a[0])},i:B,o:B,d(a){a&&se(t),n=!1,s()}}}function tr(e,t,r){let i=0;return[i,()=>{r(0,i+=1)}]}class rr extends Be{constructor(t){super(),Ue(this,t,tr,er,Le,{})}}function nr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xt={exports:{}},je={exports:{}},Ot=function(t,r){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return t.apply(r,n)}},ir=Ot,Fe=Object.prototype.toString,ke=function(e){return function(t){var r=Fe.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function j(e){return e=e.toLowerCase(),function(r){return ke(r)===e}}function Ie(e){return Array.isArray(e)}function ne(e){return typeof e>"u"}function sr(e){return e!==null&&!ne(e)&&e.constructor!==null&&!ne(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var At=j("ArrayBuffer");function ar(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&At(e.buffer),t}function or(e){return typeof e=="string"}function ur(e){return typeof e=="number"}function St(e){return e!==null&&typeof e=="object"}function te(e){if(ke(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var lr=j("Date"),fr=j("File"),cr=j("Blob"),dr=j("FileList");function Me(e){return Fe.call(e)==="[object Function]"}function hr(e){return St(e)&&Me(e.pipe)}function pr(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Fe.call(e)===t||Me(e.toString)&&e.toString()===t)}var mr=j("URLSearchParams");function vr(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Er(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function He(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),Ie(e))for(var r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.call(null,e[n],n,e)}function Ne(){var e={};function t(n,s){te(e[s])&&te(n)?e[s]=Ne(e[s],n):te(n)?e[s]=Ne({},n):Ie(n)?e[s]=n.slice():e[s]=n}for(var r=0,i=arguments.length;r<i;r++)He(arguments[r],t);return e}function yr(e,t,r){return He(t,function(n,s){r&&typeof n=="function"?e[s]=ir(n,r):e[s]=n}),e}function br(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function _r(e,t,r,i){e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)}function Rr(e,t,r){var i,n,s,a={};t=t||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)s=i[n],a[s]||(t[s]=e[s],a[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t}function gr(e,t,r){e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;var i=e.indexOf(t,r);return i!==-1&&i===r}function wr(e){if(!e)return null;var t=e.length;if(ne(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r}var xr=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),b={isArray:Ie,isArrayBuffer:At,isBuffer:sr,isFormData:pr,isArrayBufferView:ar,isString:or,isNumber:ur,isObject:St,isPlainObject:te,isUndefined:ne,isDate:lr,isFile:fr,isBlob:cr,isFunction:Me,isStream:hr,isURLSearchParams:mr,isStandardBrowserEnv:Er,forEach:He,merge:Ne,extend:yr,trim:vr,stripBOM:br,inherits:_r,toFlatObject:Rr,kindOf:ke,kindOfTest:j,endsWith:gr,toArray:wr,isTypedArray:xr,isFileList:dr},k=b;function Ye(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ct=function(t,r,i){if(!r)return t;var n;if(i)n=i(r);else if(k.isURLSearchParams(r))n=r.toString();else{var s=[];k.forEach(r,function(u,f){u===null||typeof u>"u"||(k.isArray(u)?f=f+"[]":u=[u],k.forEach(u,function(h){k.isDate(h)?h=h.toISOString():k.isObject(h)&&(h=JSON.stringify(h)),s.push(Ye(f)+"="+Ye(h))}))}),n=s.join("&")}if(n){var a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+n}return t},Or=b;function ae(){this.handlers=[]}ae.prototype.use=function(t,r,i){return this.handlers.push({fulfilled:t,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};ae.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};ae.prototype.forEach=function(t){Or.forEach(this.handlers,function(i){i!==null&&t(i)})};var Ar=ae,Sr=b,Cr=function(t,r){Sr.forEach(t,function(n,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(t[r]=n,delete t[s])})},$t=b;function M(e,t,r,i,n){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),i&&(this.request=i),n&&(this.response=n)}$t.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Tt=M.prototype,Pt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Pt[e]={value:e}});Object.defineProperties(M,Pt);Object.defineProperty(Tt,"isAxiosError",{value:!0});M.from=function(e,t,r,i,n,s){var a=Object.create(Tt);return $t.toFlatObject(e,a,function(u){return u!==Error.prototype}),M.call(a,e.message,t,r,i,n),a.name=e.name,s&&Object.assign(a,s),a};var V=M,Nt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},S=b;function $r(e,t){t=t||new FormData;var r=[];function i(s){return s===null?"":S.isDate(s)?s.toISOString():S.isArrayBuffer(s)||S.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(S.isPlainObject(s)||S.isArray(s)){if(r.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);r.push(s),S.forEach(s,function(u,f){if(!S.isUndefined(u)){var d=a?a+"."+f:f,h;if(u&&!a&&typeof u=="object"){if(S.endsWith(f,"{}"))u=JSON.stringify(u);else if(S.endsWith(f,"[]")&&(h=S.toArray(u))){h.forEach(function(l){!S.isUndefined(l)&&t.append(d,i(l))});return}}n(u,d)}}),r.pop()}else t.append(a,i(s))}return n(e),t}var Lt=$r,de,Ze;function Tr(){if(Ze)return de;Ze=1;var e=V;return de=function(r,i,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?r(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},de}var he,et;function Pr(){if(et)return he;et=1;var e=b;return he=e.isStandardBrowserEnv()?function(){return{write:function(i,n,s,a,o,u){var f=[];f.push(i+"="+encodeURIComponent(n)),e.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),e.isString(a)&&f.push("path="+a),e.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),he}var Nr=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},Lr=function(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t},Dr=Nr,qr=Lr,Dt=function(t,r){return t&&!Dr(r)?qr(t,r):r},pe,tt;function Ur(){if(tt)return pe;tt=1;var e=b,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return pe=function(i){var n={},s,a,o;return i&&e.forEach(i.split(`
`),function(f){if(o=f.indexOf(":"),s=e.trim(f.substr(0,o)).toLowerCase(),a=e.trim(f.substr(o+1)),s){if(n[s]&&t.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([a]):n[s]=n[s]?n[s]+", "+a:a}}),n},pe}var me,rt;function Br(){if(rt)return me;rt=1;var e=b;return me=e.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function s(a){var o=a;return r&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=s(window.location.href),function(o){var u=e.isString(o)?s(o):o;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),me}var ve,nt;function oe(){if(nt)return ve;nt=1;var e=V,t=b;function r(i){e.call(this,i==null?"canceled":i,e.ERR_CANCELED),this.name="CanceledError"}return t.inherits(r,e,{__CANCEL__:!0}),ve=r,ve}var Ee,it;function jr(){return it||(it=1,Ee=function(t){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}),Ee}var ye,st;function at(){if(st)return ye;st=1;var e=b,t=Tr(),r=Pr(),i=Ct,n=Dt,s=Ur(),a=Br(),o=Nt,u=V,f=oe(),d=jr();return ye=function(l){return new Promise(function(D,R){var C=l.data,w=l.headers,T=l.responseType,O;function $(){l.cancelToken&&l.cancelToken.unsubscribe(O),l.signal&&l.signal.removeEventListener("abort",O)}e.isFormData(C)&&e.isStandardBrowserEnv()&&delete w["Content-Type"];var c=new XMLHttpRequest;if(l.auth){var J=l.auth.username||"",Q=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";w.Authorization="Basic "+btoa(J+":"+Q)}var P=n(l.baseURL,l.url);c.open(l.method.toUpperCase(),i(P,l.params,l.paramsSerializer),!0),c.timeout=l.timeout;function q(){if(!!c){var A="getAllResponseHeaders"in c?s(c.getAllResponseHeaders()):null,F=!T||T==="text"||T==="json"?c.responseText:c.response,U={data:F,status:c.status,statusText:c.statusText,headers:A,config:l,request:c};t(function(fe){D(fe),$()},function(fe){R(fe),$()},U),c=null}}if("onloadend"in c?c.onloadend=q:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(q)},c.onabort=function(){!c||(R(new u("Request aborted",u.ECONNABORTED,l,c)),c=null)},c.onerror=function(){R(new u("Network Error",u.ERR_NETWORK,l,c,c)),c=null},c.ontimeout=function(){var F=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",U=l.transitional||o;l.timeoutErrorMessage&&(F=l.timeoutErrorMessage),R(new u(F,U.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,l,c)),c=null},e.isStandardBrowserEnv()){var x=(l.withCredentials||a(P))&&l.xsrfCookieName?r.read(l.xsrfCookieName):void 0;x&&(w[l.xsrfHeaderName]=x)}"setRequestHeader"in c&&e.forEach(w,function(F,U){typeof C>"u"&&U.toLowerCase()==="content-type"?delete w[U]:c.setRequestHeader(U,F)}),e.isUndefined(l.withCredentials)||(c.withCredentials=!!l.withCredentials),T&&T!=="json"&&(c.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&c.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",l.onUploadProgress),(l.cancelToken||l.signal)&&(O=function(A){!c||(R(!A||A&&A.type?new f:A),c.abort(),c=null)},l.cancelToken&&l.cancelToken.subscribe(O),l.signal&&(l.signal.aborted?O():l.signal.addEventListener("abort",O))),C||(C=null);var W=d(P);if(W&&["http","https","file"].indexOf(W)===-1){R(new u("Unsupported protocol "+W+":",u.ERR_BAD_REQUEST,l));return}c.send(C)})},ye}var be,ot;function Fr(){return ot||(ot=1,be=null),be}var E=b,ut=Cr,lt=V,kr=Nt,Ir=Lt,Mr={"Content-Type":"application/x-www-form-urlencoded"};function ft(e,t){!E.isUndefined(e)&&E.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function Hr(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=at()),e}function Vr(e,t,r){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(e)}var ue={transitional:kr,adapter:Hr(),transformRequest:[function(t,r){if(ut(r,"Accept"),ut(r,"Content-Type"),E.isFormData(t)||E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return ft(r,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var i=E.isObject(t),n=r&&r["Content-Type"],s;if((s=E.isFileList(t))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return Ir(s?{"files[]":t}:t,a&&new a)}else if(i||n==="application/json")return ft(r,"application/json"),Vr(t);return t}],transformResponse:[function(t){var r=this.transitional||ue.transitional,i=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&E.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?lt.from(a,lt.ERR_BAD_RESPONSE,this,null,this.response):a}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Fr()},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};E.forEach(["delete","get","head"],function(t){ue.headers[t]={}});E.forEach(["post","put","patch"],function(t){ue.headers[t]=E.merge(Mr)});var Ve=ue,Jr=b,Wr=Ve,zr=function(t,r,i){var n=this||Wr;return Jr.forEach(i,function(a){t=a.call(n,t,r)}),t},_e,ct;function qt(){return ct||(ct=1,_e=function(t){return!!(t&&t.__CANCEL__)}),_e}var dt=b,Re=zr,Xr=qt(),Kr=Ve,Qr=oe();function ge(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Qr}var Gr=function(t){ge(t),t.headers=t.headers||{},t.data=Re.call(t,t.data,t.headers,t.transformRequest),t.headers=dt.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),dt.forEach(["delete","get","head","post","put","patch","common"],function(n){delete t.headers[n]});var r=t.adapter||Kr.adapter;return r(t).then(function(n){return ge(t),n.data=Re.call(t,n.data,n.headers,t.transformResponse),n},function(n){return Xr(n)||(ge(t),n&&n.response&&(n.response.data=Re.call(t,n.response.data,n.response.headers,t.transformResponse))),Promise.reject(n)})},g=b,Ut=function(t,r){r=r||{};var i={};function n(d,h){return g.isPlainObject(d)&&g.isPlainObject(h)?g.merge(d,h):g.isPlainObject(h)?g.merge({},h):g.isArray(h)?h.slice():h}function s(d){if(g.isUndefined(r[d])){if(!g.isUndefined(t[d]))return n(void 0,t[d])}else return n(t[d],r[d])}function a(d){if(!g.isUndefined(r[d]))return n(void 0,r[d])}function o(d){if(g.isUndefined(r[d])){if(!g.isUndefined(t[d]))return n(void 0,t[d])}else return n(void 0,r[d])}function u(d){if(d in r)return n(t[d],r[d]);if(d in t)return n(void 0,t[d])}var f={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u};return g.forEach(Object.keys(t).concat(Object.keys(r)),function(h){var l=f[h]||s,m=l(h);g.isUndefined(m)&&l!==u||(i[h]=m)}),i},we,ht;function Bt(){return ht||(ht=1,we={version:"0.27.2"}),we}var Yr=Bt().version,L=V,Je={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){Je[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});var pt={};Je.transitional=function(t,r,i){function n(s,a){return"[Axios v"+Yr+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,o){if(t===!1)throw new L(n(a," has been removed"+(r?" in "+r:"")),L.ERR_DEPRECATED);return r&&!pt[a]&&(pt[a]=!0,console.warn(n(a," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,a,o):!0}};function Zr(e,t,r){if(typeof e!="object")throw new L("options must be an object",L.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var s=i[n],a=t[s];if(a){var o=e[s],u=o===void 0||a(o,s,e);if(u!==!0)throw new L("option "+s+" must be "+u,L.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new L("Unknown option "+s,L.ERR_BAD_OPTION)}}var en={assertOptions:Zr,validators:Je},jt=b,tn=Ct,mt=Ar,vt=Gr,le=Ut,rn=Dt,Ft=en,I=Ft.validators;function H(e){this.defaults=e,this.interceptors={request:new mt,response:new mt}}H.prototype.request=function(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=le(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var i=r.transitional;i!==void 0&&Ft.assertOptions(i,{silentJSONParsing:I.transitional(I.boolean),forcedJSONParsing:I.transitional(I.boolean),clarifyTimeoutError:I.transitional(I.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(s=s&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var a=[];this.interceptors.response.forEach(function(m){a.push(m.fulfilled,m.rejected)});var o;if(!s){var u=[vt,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(a),o=Promise.resolve(r);u.length;)o=o.then(u.shift(),u.shift());return o}for(var f=r;n.length;){var d=n.shift(),h=n.shift();try{f=d(f)}catch(l){h(l);break}}try{o=vt(f)}catch(l){return Promise.reject(l)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};H.prototype.getUri=function(t){t=le(this.defaults,t);var r=rn(t.baseURL,t.url);return tn(r,t.params,t.paramsSerializer)};jt.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(r,i){return this.request(le(i||{},{method:t,url:r,data:(i||{}).data}))}});jt.forEach(["post","put","patch"],function(t){function r(i){return function(s,a,o){return this.request(le(o||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}H.prototype[t]=r(),H.prototype[t+"Form"]=r(!0)});var nn=H,xe,Et;function sn(){if(Et)return xe;Et=1;var e=oe();function t(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(a){i=a});var n=this;this.promise.then(function(s){if(!!n._listeners){var a,o=n._listeners.length;for(a=0;a<o;a++)n._listeners[a](s);n._listeners=null}}),this.promise.then=function(s){var a,o=new Promise(function(u){n.subscribe(u),a=u}).then(s);return o.cancel=function(){n.unsubscribe(a)},o},r(function(a){n.reason||(n.reason=new e(a),i(n.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},t.prototype.unsubscribe=function(i){if(!!this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},t.source=function(){var i,n=new t(function(a){i=a});return{token:n,cancel:i}},xe=t,xe}var Oe,yt;function an(){return yt||(yt=1,Oe=function(t){return function(i){return t.apply(null,i)}}),Oe}var Ae,bt;function on(){if(bt)return Ae;bt=1;var e=b;return Ae=function(r){return e.isObject(r)&&r.isAxiosError===!0},Ae}var _t=b,un=Ot,re=nn,ln=Ut,fn=Ve;function kt(e){var t=new re(e),r=un(re.prototype.request,t);return _t.extend(r,re.prototype,t),_t.extend(r,t),r.create=function(n){return kt(ln(e,n))},r}var _=kt(fn);_.Axios=re;_.CanceledError=oe();_.CancelToken=sn();_.isCancel=qt();_.VERSION=Bt().version;_.toFormData=Lt;_.AxiosError=V;_.Cancel=_.CanceledError;_.all=function(t){return Promise.all(t)};_.spread=an();_.isAxiosError=on();je.exports=_;je.exports.default=_;(function(e){e.exports=je.exports})(xt);const cn=nr(xt.exports);function dn(e){let t,r,i,n,s,a;return{c(){t=y("div"),r=K(`API said:
  `),i=y("br"),n=N(),s=y("pre"),a=K(e[0]),v(s,"class","svelte-14lsnaa"),v(t,"class","svelte-14lsnaa")},m(o,u){De(o,t,u),p(t,r),p(t,i),p(t,n),p(t,s),p(s,a)},p(o,[u]){u&1&&gt(a,o[0])},i:B,o:B,d(o){o&&se(t)}}}function hn(e,t,r){let i;return cn.get("http://localhost:3000/api/test").then(n=>{r(0,i=n.data)}).catch(n=>{r(0,i="error")}),[i]}class pn extends Be{constructor(t){super(),Ue(this,t,hn,dn,Le,{})}}function mn(e){let t,r,i,n,s,a,o,u,f,d,h,l,m,D,R,C,w,T,O,$,c,J,Q,P,q;return w=new rr({}),$=new pn({}),{c(){t=y("main"),r=y("div"),i=y("a"),i.innerHTML='<img src="/vite.svg" class="logo svelte-b17x5e" alt="Vite Logo"/>',n=N(),s=y("a"),a=y("img"),u=N(),f=y("a"),d=y("img"),l=N(),m=y("h1"),m.textContent="Vite + Svelte + Express",D=N(),R=y("div"),C=y("div"),Ge(w.$$.fragment),T=N(),O=y("div"),Ge($.$$.fragment),c=N(),J=y("p"),J.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!',Q=N(),P=y("p"),P.textContent="Click on the Vite and Svelte logos to learn more",v(i,"href","https://vitejs.dev"),v(i,"target","_blank"),ze(a.src,o=Yt)||v(a,"src",o),v(a,"class","logo svelte svelte-b17x5e"),v(a,"alt","Svelte Logo"),v(s,"href","https://svelte.dev"),v(s,"target","_blank"),ze(d.src,h=Zt)||v(d,"src",h),v(d,"class","logo express svelte-b17x5e"),v(d,"alt","Svelte Logo"),v(f,"href","https://expressjs.com"),v(f,"target","_blank"),v(m,"class","svelte-b17x5e"),v(C,"class","card svelte-b17x5e"),v(O,"class","card svelte-b17x5e"),v(R,"class","cardGroup svelte-b17x5e"),v(P,"class","read-the-docs svelte-b17x5e")},m(x,W){De(x,t,W),p(t,r),p(r,i),p(r,n),p(r,s),p(s,a),p(r,u),p(r,f),p(f,d),p(t,l),p(t,m),p(t,D),p(t,R),p(R,C),Te(w,C,null),p(R,T),p(R,O),Te($,O,null),p(t,c),p(t,J),p(t,Q),p(t,P),q=!0},p:B,i(x){q||($e(w.$$.fragment,x),$e($.$$.fragment,x),q=!0)},o(x){Qe(w.$$.fragment,x),Qe($.$$.fragment,x),q=!1},d(x){x&&se(t),Pe(w),Pe($)}}}class vn extends Be{constructor(t){super(),Ue(this,t,null,mn,Le,{})}}new vn({target:document.getElementById("app")});