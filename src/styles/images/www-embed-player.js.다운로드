(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return ja(a,a)}
function ja(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function v(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ma=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ma});
var na=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=na(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if(typeof Object.setPrototypeOf=="function")qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function z(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function wa(){this.B=!1;this.u=null;this.i=void 0;this.h=1;this.D=this.o=0;this.M=this.j=null}
function xa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
wa.prototype.H=function(a){this.i=a};
function ya(a,b){a.j={exception:b,ed:!0};a.h=a.o||a.D}
wa.prototype.return=function(a){this.j={return:a};this.h=this.D};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.F=function(a){this.h=a};
function za(a,b,c){a.o=b;c!=void 0&&(a.D=c)}
function Aa(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.M.splice(0)[0];(b=a.j=a.j||b)?b.ed?a.h=a.o||a.D:b.F!=void 0&&a.D<b.F?(a.h=b.F,a.j=null):a.h=a.D:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.u;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.u=null,ya(a.h,g),Fa(a)}a.h.u=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ed)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.u?b=Ea(a,a.h.u.next,b,a.h.H):(a.h.H(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.u?b=Ea(a,a.h.u["throw"],b,a.h.H):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ha(new Ga(new Ca(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return pa});
u("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.B=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.D()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.D=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Z),reject:g(this.D)}};
b.prototype.Z=function(g){if(g===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.Y(g):this.u(g)}};
b.prototype.Y=function(g){var h=void 0;try{h=g.then}catch(k){this.D(k);return}typeof h=="function"?this.xa(h,g):this.u(g)};
b.prototype.D=function(g){this.H(2,g)};
b.prototype.u=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ga();this.M()};
b.prototype.ga=function(){var g=this;e(function(){if(g.U()){var h=da.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.B)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.M=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ia=function(g){var h=this.o();g.Wb(h.resolve,h.reject)};
b.prototype.xa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(w){try{l(r(w))}catch(x){m(x)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Wb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),m=l.next();!m.done;m=l.next())d(m.value).Wb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(x){r[w]=x;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Wb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||ua});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("globalThis",function(a){return a||da});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&la(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ja(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ja(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function La(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Oa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Qa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(Math.random()*1E9>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ua:Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(){return Date.now()}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Za($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var bb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var cb=globalThis.trustedTypes,db;function eb(){var a=null;if(!cb)return a;try{var b=function(c){return c};
a=cb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function fb(){db===void 0&&(db=eb());return db}
;function gb(a){this.h=a}
gb.prototype.toString=function(){return this.h+""};
function hb(a){var b=fb();return new gb(b?b.createScriptURL(a):a)}
function ib(a){if(a instanceof gb)return a.h;throw Error("");}
;var jb=ha([""]),kb=ja(["\x00"],["\\0"]),lb=ja(["\n"],["\\n"]),mb=ja(["\x00"],["\\u0000"]);function nb(a){return a.toString().indexOf("`")===-1}
nb(function(a){return a(jb)})||nb(function(a){return a(kb)})||nb(function(a){return a(lb)})||nb(function(a){return a(mb)});function ob(a){this.h=a}
ob.prototype.toString=function(){return this.h};
var pb=new ob("about:invalid#zClosurez");function qb(a){this.ue=a}
function rb(a){return new qb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var sb=[rb("data"),rb("http"),rb("https"),rb("mailto"),rb("ftp"),new qb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],tb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function ub(a){if(a instanceof ob)if(a instanceof ob)a=a.h;else throw Error("");else a=tb.test(a)?a:void 0;return a}
;function wb(a,b){b=ub(b);b!==void 0&&(a.href=b)}
;function xb(){this.h=yb[0].toLowerCase()}
xb.prototype.toString=function(){return this.h};function zb(a){this.h=a}
zb.prototype.toString=function(){return this.h+""};function Ab(a){var b="true".toString(),c=[new xb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof xb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Bb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Cb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Db(a,b){if(b instanceof gb)a.href=ib(b).toString(),a.rel="stylesheet";else{if(Cb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=ub(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function Eb(a){a=a===void 0?document:a;var b,c;a=(c=(b="document"in a?a.document:a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Fb(a){this.h=a}
Fb.prototype.toString=function(){return this.h+""};function Gb(a){var b=Eb(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function Hb(a,b){if(b instanceof Fb)b=b.h;else throw Error("");a.textContent=b;Gb(a)}
function Ib(a,b){a.src=ib(b);Gb(a)}
;var Jb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Kb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Lb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Mb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Nb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Kb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ob(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Pb(a,b){b=Jb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Qb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Rb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Sb(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Tb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ub[c])c=Ub[c];else{c=String(c);if(!Ub[c]){var f=/function\s+([^\(]+)/m.exec(c);Ub[c]=f?f[1]:"[Anonymous]"}c=Ub[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Tb(a,b){b||(b={});b[Vb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Vb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Tb(d,b));a=a.errors;if(Array.isArray(a)){d=1;for(var e=0;e<a.length&&!(d>4);e++)b[Vb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Tb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Vb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Ub={};function Wb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Xb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yb(a){return a?decodeURI(a):a}
function Zb(a,b){return b.match(Xb)[a]||null}
function $b(a){return Yb(Zb(3,a))}
function ac(a){var b=a.match(Xb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function bc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
function ec(a,b){b=dc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function fc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var hc=/#|$/,ic=/[?&]($|#)/;function jc(a,b){for(var c=a.search(hc),d=0,e,f=[];(e=fc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(ic,"$1")}
;function kc(a){var b=b===void 0?Number("33"):b;for(var c=[],d=0;d<lc(a,mc,1).length;d++){var e=lc(a,mc,1)[d];nc(e,2)<=b&&c.push(Number(nc(e,1)))}return c}
function oc(a){var b=b===void 0?Number("33"):b;for(var c=[],d=0;d<lc(a,mc,1).length;d++){var e=lc(a,mc,1)[d];nc(e,2)>b&&c.push(Number(nc(e,1)))}return c}
;function pc(a){return{fieldType:2,fieldName:a}}
function F(a){return{fieldType:3,fieldName:a}}
;function qc(a){this.h=a;a.Oa("/client_streamz/bg/fic",F("ke"))}
function rc(a){this.h=a;a.Oa("/client_streamz/bg/fiec",F("ke"),pc("ec"))}
function sc(a){this.h=a;a.jb("/client_streamz/bg/fil",F("ke"))}
sc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function tc(a){this.h=a;a.Oa("/client_streamz/bg/fcc",pc("ph"),F("ke"))}
function uc(a){this.h=a;a.jb("/client_streamz/bg/fcd",pc("ph"),F("ke"))}
uc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function vc(a){this.h=a;a.Oa("/client_streamz/bg/fsc",F("ke"))}
function wc(a){this.h=a;a.jb("/client_streamz/bg/fsl",F("ke"))}
wc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};
function xc(a){this.h=a;a.jb("/client_streamz/bg/frs",F("ke"))}
xc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function yc(a){this.h=a;a.jb("/client_streamz/bg/wrl",F("mn"),pc("ac"),pc("sc"),F("rk"),F("mk"))}
yc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function zc(a){this.h=a;a.jb("/client_streamz/bg/el",F("en"),F("rk"),F("mk"))}
zc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Ac(a){this.h=a;a.Oa("/client_streamz/bg/cec",pc("ec"),F("rk"),F("mk"))}
function Bc(a){a.Oa("/client_streamz/bg/po/csc",pc("cs"),F("rk"),F("mk"))}
function Cc(a){a.Oa("/client_streamz/bg/po/ctav",F("av"),F("rk"),F("mk"))}
function Dc(a){a.Oa("/client_streamz/bg/po/cwsc",F("su"),F("rk"),F("mk"))}
;function Ec(a){C.setTimeout(function(){throw a;},0)}
;var Fc=La(610401301,!1),Gc=La(653718497,La(1,!0));function Hc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Ic,Jc=C.navigator;Ic=Jc?Jc.userAgentData||null:null;function Kc(a){return Fc?Ic?Ic.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function G(a){return Hc().indexOf(a)!=-1}
;function Lc(){return Fc?!!Ic&&Ic.brands.length>0:!1}
function Mc(){return Lc()?!1:G("Opera")}
function Nc(){return G("Firefox")||G("FxiOS")}
function Oc(){return Lc()?Kc("Chromium"):(G("Chrome")||G("CriOS"))&&!(Lc()?0:G("Edge"))||G("Silk")}
;function Pc(){return Fc?!!Ic&&!!Ic.platform:!1}
function Qc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;var Rc=Mc(),Sc=Lc()?!1:G("Trident")||G("MSIE"),Tc=G("Edge"),Uc=G("Gecko")&&!(Hc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),Vc=Hc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge");Vc&&G("Mobile");Pc()||G("Macintosh");Pc()||G("Windows");(Pc()?Ic.platform==="Linux":G("Linux"))||Pc()||G("CrOS");var Wc=Pc()?Ic.platform==="Android":G("Android");Qc();G("iPad");G("iPod");Qc()||G("iPad")||G("iPod");Hc().toLowerCase().indexOf("kaios");Nc();var Xc=Qc()||G("iPod"),Yc=G("iPad");!G("Android")||Oc()||Nc()||Mc()||G("Silk");Oc();var Zc=G("Safari")&&!(Oc()||(Lc()?0:G("Coast"))||Mc()||(Lc()?0:G("Edge"))||(Lc()?Kc("Microsoft Edge"):G("Edg/"))||(Lc()?Kc("Opera"):G("OPR"))||Nc()||G("Silk")||G("Android"))&&!(Qc()||G("iPad")||G("iPod"));var $c={},ad=null;function bd(a,b){Pa(a);b===void 0&&(b=0);cd();b=$c[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function dd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;ed(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function ed(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=ad[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
cd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function cd(){if(!ad){ad={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));$c[c]=d;for(var e=0;e<d.length;e++){var f=d[e];ad[f]===void 0&&(ad[f]=e)}}}}
;var fd=typeof Uint8Array!=="undefined",gd=!Sc&&typeof btoa==="function";function hd(a){if(!gd)return bd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var id=/[-_.]/g,jd={"-":"+",_:"/",".":"="};function kd(a){return jd[a]||""}
function ld(a){return fd&&a!=null&&a instanceof Uint8Array}
var md={};var nd;function od(a){if(a!==md)throw Error("illegal external caller");}
function pd(a,b){od(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
pd.prototype.sizeBytes=function(){od(md);var a=this.h;if(a!=null&&!ld(a))if(typeof a==="string")if(gd){id.test(a)&&(a=a.replace(id,kd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=dd(a);else Oa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};var qd;function rd(){var a=Error();Rb(a,"incident");Ec(a)}
function sd(a){a=Error(a);Rb(a,"warning");return a}
;function td(){return typeof BigInt==="function"}
;function ud(a){return Array.prototype.slice.call(a)}
;var vd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function wd(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var xd=wd(),yd=wd("2ex"),zd=wd("1oa");Math.max.apply(Math,ka(Object.values({ah:1,Yg:2,Xg:4,eh:8,dh:16,bh:32,Gf:64,gh:128,Wg:256,Vg:512,Zg:1024,Mf:2048,fh:4096,Nf:8192,Hf:16384})));var Ad=vd?function(a,b){a[xd]|=b}:function(a,b){a.Ra!==void 0?a.Ra|=b:Object.defineProperties(a,{Ra:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Bd=vd?function(a){return a[xd]|0}:function(a){return a.Ra|0},Cd=vd?function(a){return a[xd]}:function(a){return a.Ra},Dd=vd?function(a,b){a[xd]=b}:function(a,b){a.Ra!==void 0?a.Ra=b:Object.defineProperties(a,{Ra:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ed(a,b){Dd(b,(a|0)&-30975)}
function Fd(a,b){Dd(b,(a|34)&-30941)}
;var Gd={},Hd={};function Id(a){return!(!a||typeof a!=="object"||a.h!==Hd)}
function Jd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Kd(a){return!Array.isArray(a)||a.length?!1:Bd(a)&1?!0:!1}
var Ld,Md=[];Dd(Md,55);Ld=Object.freeze(Md);function Nd(a){if(a&2)throw Error();}
var Od=Object.freeze({}),Pd=Object.freeze({}),Qd=Object.freeze({});function Rd(a){a.sh=!0;return a}
;var Sd=Rd(function(a){return typeof a==="number"}),Td=Rd(function(a){return typeof a==="string"}),Ud=Rd(function(a){return typeof a==="boolean"});
function Vd(){var a=Wd;return Rd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
;var Xd=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function Yd(a){var b=a;if(Td(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Sd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Xd?BigInt(a):a=Ud(a)?a?"1":"0":Td(a)?a.trim()||"0":String(a)}
var de=Rd(function(a){return Xd?a>=Zd&&a<=$d:a[0]==="-"?ae(a,be):ae(a,ce)}),be=Number.MIN_SAFE_INTEGER.toString(),Zd=Xd?BigInt(Number.MIN_SAFE_INTEGER):void 0,ce=Number.MAX_SAFE_INTEGER.toString(),$d=Xd?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ae(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var ee=0,fe=0;function ge(a){var b=a>>>0;ee=b;fe=(a-b)/4294967296>>>0}
function he(a){if(a<0){ge(0-a);var b=v(ie(ee,fe));a=b.next().value;b=b.next().value;ee=a>>>0;fe=b>>>0}else ge(a)}
function je(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else td()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ke(c)+ke(a));return c}
function ke(a){a=String(a);return"0000000".slice(a.length)+a}
function le(){var a=ee,b=fe;b&2147483648?td()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(ie(a,b)),a=b.next().value,b=b.next().value,a="-"+je(a,b)):a=je(a,b);return a}
function ie(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function me(a){return a.displayName||a.name||"unknown type name"}
function ne(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Oa(a)+": "+a);return a}
var oe=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function pe(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:oe.test(a)}
function qe(a){if(typeof a!=="number")throw sd("int32");if(!Number.isFinite(a))throw sd("int32");return a|0}
function re(a){return a==null?a:qe(a)}
function se(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function te(a){var b=0;b=b===void 0?0:b;if(!pe(a))throw sd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return ue(a);case "bigint":return String(BigInt.asIntN(64,a));default:return ve(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=Yd(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=td()?Yd(BigInt.asIntN(64,BigInt(a))):Yd(we(a))),a;case "bigint":return Yd(BigInt.asIntN(64,a));default:return Number.isSafeInteger(a)?Yd(xe(a)):Yd(ve(a))}case 0:switch(c){case "string":return ue(a);
case "bigint":return Yd(BigInt.asIntN(64,a));default:return xe(a)}default:return Bb(b,"Unknown format requested type for int64")}}
function ye(a){return a==null?a:te(a)}
function ze(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function we(a){a.indexOf(".");if(ze(a))return a;if(a.length<16)he(Number(a));else if(td())a=BigInt(a),ee=Number(a&BigInt(4294967295))>>>0,fe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");fe=ee=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),fe*=1E6,ee=ee*1E6+d,ee>=4294967296&&(fe+=Math.trunc(ee/4294967296),fe>>>=0,ee>>>=0);b&&(b=v(ie(ee,fe)),a=b.next().value,b=b.next().value,ee=a,fe=b)}return le()}
function xe(a){pe(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){he(a);var b=ee,c=fe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function ve(a){pe(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);ze(b)?a=b:(he(a),a=le())}return a}
function ue(a){pe(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return we(a)}
function Ae(a){if(a==null)return a;if(typeof a==="bigint")return de(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=de(a)?Number(a):String(a)),a;if(pe(a))return typeof a==="number"?xe(a):ue(a)}
function Be(a){if(typeof a!=="string")throw Error();return a}
function Ce(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function De(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+me(b)+" but got "+(a&&me(a.constructor)));}
function Ee(a,b,c){if(a!=null&&typeof a==="object"&&a.Dc===Gd)return a;if(Array.isArray(a)){var d=Bd(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Dd(a,e);return new b(a)}}
;function Fe(a){Ge===void 0&&(Ge=typeof Proxy==="function"?He(Proxy):null);if(!Ge||!Ie())return a;var b=Je(a);if(b)return b;if(Math.random()>.01)return a;Ke(a);b=new Ge(a,{set:function(c,d,e){Le();c[d]=e;return!0}});
Me(a,b);return b}
function Le(){rd()}
var Ne=void 0,Oe=void 0;function Je(a){var b;return(b=Ne)==null?void 0:b.get(a)}
function Pe(a){var b;return((b=Oe)==null?void 0:b.get(a))||a}
function Me(a,b){(Ne||(Ne=new Qe)).set(a,b);(Oe||(Oe=new Qe)).set(b,a)}
var Ge=void 0,Qe=void 0;function Ie(){Qe===void 0&&(Qe=typeof WeakMap==="function"?He(WeakMap):null);return Qe}
function He(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
var Re=void 0;function Ke(a){if(Re===void 0){var b=new Ge([],{});Re=Array.prototype.concat.call([],b).length===1}Re&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
function Se(a,b,c){if(Ie()){if(Te(a,b)){if(c)return}else if(Math.random()>.01)return;var d=a.length;c={length:d};for(var e=0;e<Math.min(d,10);e++){if(d<=10)var f=e;else{f=d/10;var g=Math.floor(e*f);f=g+Math.floor(Math.random()*(Math.floor((e+1)*f)-g))}c[f]=a[f]}Ue(a,c)?(d=Ve||(Ve=new Qe),e=d.get(b),e||(e=new Qe,d.set(b,e)),e.set(a,c)):(rd(),We(a,b))}}
function Xe(a,b){var c=Te(a,b);c&&!Ue(a,c)&&(Ye(),We(a,b))}
function Ue(a,b){if(a.length!==b.length)return!1;for(var c in b){var d=Number(c),e;if(e=Number.isInteger(d))e=a[d],d=b[d],e=!(Number.isNaN(e)?Number.isNaN(d):e===d);if(e)return!1}return!0}
function Ze(a){var b;if(a&&(b=Ve)!=null&&b.has(a)&&(b=a.G))for(var c=0;c<b.length;c++){var d=b[c];if(c===b.length-1&&Jd(d))for(var e in d){var f=d[e];Array.isArray(f)&&Xe(f,a)}else Array.isArray(d)&&Xe(d,a)}}
function Ye(){rd()}
var Ve=void 0;function Te(a,b){var c,d;return(c=Ve)==null?void 0:(d=c.get(b))==null?void 0:d.get(a)}
function We(a,b){var c,d;(c=Ve)==null||(d=c.get(b))==null||d.delete(a)}
;var $e;function af(a,b){Bd(b);$e=b;a=new a(b);$e=void 0;return a}
function I(a,b,c){var d=d!=null?d:0;a==null&&(a=$e);$e=void 0;if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");e=Bd(a);if(e&2048)throw Error("farr");if(e&64)return a;d===1||d===2||(e|=64);if(c&&(e|=512,c!==a[0]))throw Error("mid");a:{c=a;if(d=c.length){var f=d-1;if(Jd(c[f])){e|=256;b=f-(+!!(e&512)-1);if(b>=1024)throw Error("pvtlmt");e=e&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,d-(+!!(e&512)-1));if(b>1024)throw Error("spvt");
e=e&-33521665|(b&1023)<<15}}}Dd(a,e);return a}
;function bf(a,b){return cf(b)}
function cf(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return de(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Kd(a))return}else{if(ld(a))return hd(a);if(a instanceof pd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=hd(b)}}}return a}
;function df(a,b,c){a=ud(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function ef(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Kd(a)?void 0:e&&Bd(a)&2?a:ff(a,b,c,d!==void 0,e);else if(Jd(a)){var f={},g;for(g in a)f[g]=ef(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function ff(a,b,c,d,e){var f=d||c?Bd(a):0;d=d?!!(f&32):void 0;a=ud(a);for(var g=0;g<a.length;g++)a[g]=ef(a[g],b,c,d,e);c&&c(f,a);return a}
function gf(a){return a.Dc===Gd?a.toJSON():cf(a)}
;function hf(a,b,c){c=c===void 0?Fd:c;if(a!=null){if(fd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Bd(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Dd(a,(d|34)&-12293),a):ff(a,hf,d&4?Fd:c,!0,!0)}a.Dc===Gd&&(c=a.G,d=Cd(c),a=d&2?a:jf(a,c,d,!0));return a}}
function jf(a,b,c,d){Ze(a);return af(a.constructor,kf(b,c,d))}
function kf(a,b,c){var d=c||b&2?Fd:Ed,e=!!(b&32);a=df(a,b,function(f){return hf(f,e,d)});
Ad(a,32|(c?2:0));return a}
function lf(a){var b=a.G,c=Cd(b);return c&2?jf(a,b,c,!1):a}
;function mf(a,b){a=a.G;return nf(a,Cd(a),b)}
function of(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function nf(a,b,c,d){if(c===-1)return null;var e=b>>15&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(of(a,b,e,c)&&yd!=null){var g;a=(g=qd)!=null?g:qd={};g=a[yd]||0;g>=4||(a[yd]=g+1,rd())}return d}return of(a,b,e,c)}}
function pf(a,b,c){var d=a.G,e=Cd(d);Nd(e);qf(d,e,b,c);return a}
function qf(a,b,c,d){Jd(d);var e=b>>15&1023||536870912;if(c>=e){var f=b;if(b&256)var g=a[a.length-1];else{if(d==null)return f;g=a[e+(+!!(b&512)-1)]={};f|=256}g[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);f!==b&&Dd(a,f);return f}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function rf(a){return sf(a,tf,11,!1)!==void 0}
function uf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function vf(a,b,c){var d=a.G,e=Cd(d);Nd(e);if(b==null)return qf(d,e,3),a;b=Pe(b);if(!Array.isArray(b))throw sd();var f=Bd(b),g=f,h=!!(2&f)||Object.isFrozen(b),k;if(k=!h)(k=void 0===Qd)||(k=(Gc||!1)&&void 0!==Pd);if(!(4&f)){f=21;h&&(b=ud(b),g=0,f=wf(f,e),f=xf(f,e,!0));for(var l=0;l<b.length;l++)b[l]=c(b[l])}k?(b=ud(b),g=0,f=wf(f,e),f=xf(f,e,!0)):h||Se(b,a);f!==g&&Dd(b,f);qf(d,e,3,b);return a}
function yf(a,b,c,d){a=a.G;var e=Cd(a);Nd(e);if(d==null){var f=zf(a);if(Af(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=zf(a);var g=Af(f,a,e,c);g!==b&&(g&&(e=qf(a,e,g)),f.set(c,b))}qf(a,e,b,d)}
function zf(a){if(vd){var b;return(b=a[zd])!=null?b:a[zd]=new Map}if(zd in a)return a[zd];b=new Map;Object.defineProperty(a,zd,{value:b});return b}
function Af(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];nf(b,c,g)!=null&&(e!==0&&(c=qf(b,c,e)),e=g)}a.set(d,e);return e}
function sf(a,b,c,d){a=a.G;var e=Cd(a);d=nf(a,e,c,d);b=Ee(d,b,e);b!==d&&b!=null&&qf(a,e,c,b);return b}
function Bf(a,b,c,d){b=sf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.G;d=Cd(a);if(!(d&2)){var e=lf(b);e!==b&&(b=e,qf(a,d,c,b))}return b}
function lc(a,b,c){var d=void 0===Od?2:5;var e=Cd(a.G),f=e,g=!(2&e);e=a.G;var h=!!(2&f);d=h?1:d;g&&(g=!h);h=nf(e,f,c);h=Array.isArray(h)?h:Ld;var k=Bd(h),l=h;Xe(l,a);d!==2&&d!==1||We(l,a);l=!!(4&k);if(!l){var m=k;m===0&&(m=wf(m,f));k=h;m|=1;var n=f,r=!!(2&m);r&&(n|=2);for(var t=!r,w=!0,x=0,y=0;x<k.length;x++){var H=Ee(k[x],b,n);if(H instanceof b){if(!r){var J=!!(Bd(H.G)&2);t&&(t=!J);w&&(w=J)}k[y++]=H}}y<x&&(k.length=y);m|=4;m=w?m|16:m&-17;m=t?m|8:m&-9;Dd(k,m);r&&Object.freeze(k);k=m}if(g&&!(8&k||
!h.length&&(d===1||d===4&&32&k))){uf(k)?(h=ud(h),k=wf(k,f),f=qf(e,f,c,h)):We(h,a);b=h;g=k;for(k=0;k<b.length;k++)m=b[k],n=lf(m),m!==n&&(b[k]=n);g|=8;g=b.length?g&-17:g|16;Dd(b,g);k=g}if(d===1||d===4&&32&k)uf(k)||(a=k,f=!!(32&k),k|=!h.length||16&k&&(!l||f)?2:2048,k!==a&&Dd(h,k),Object.freeze(h));else if(l=d!==5?!1:!!(32&k)||uf(k)||!!Je(h),(d===2||l)&&uf(k)&&(h=ud(h),k=wf(k,f),k=xf(k,f,!1),Dd(h,k),f=qf(e,f,c,h)),uf(k)||(c=k,k=xf(k,f,!1),k!==c&&Dd(h,k)),l){var N=Fe(h);Se(h,a,!0)}else if(d===2){var P;
(P=Ne)==null||P.delete(h)}return N||h}
function Cf(a,b,c,d){d!=null?De(d,b):d=void 0;return pf(a,c,d)}
function Df(a,b,c,d){var e=a.G,f=Cd(e);Nd(f);if(d==null)return qf(e,f,c),a;d=Pe(d);if(!Array.isArray(d))throw sd();for(var g=Bd(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),m=!l&&(void 0===Qd||(Gc||!1)&&void 0!==Pd),n=!0,r=!0,t=0;t<d.length;t++){var w=d[t];De(w,b);k||(w=!!(Bd(w.G)&2),n&&(n=!w),r&&(r=w))}k||(g|=5,g=n?g|8:g&-9,g=r?g|16:g&-17);m||l&&g!==h?(d=ud(d),h=0,g=wf(g,f),g=xf(g,f,!0)):l||Se(d,a);g!==h&&Dd(d,g);qf(e,f,c,d);return a}
function wf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function xf(a,b,c){32&b&&c||(a&=-33);return a}
function Ef(a){a=mf(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):pe(a)?c==="string"?ue(a):b?ve(a):xe(a):void 0;return b}
function Ff(a,b){return a!=null?a:b}
function Gf(a){var b=b===void 0?!1:b;a=mf(a,4);return Ff(a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0,b)}
function nc(a,b,c){c=c===void 0?0:c;return Ff(se(mf(a,b)),c)}
function Hf(a,b){var c=c===void 0?"":c;a=mf(a,b);return Ff(a==null||typeof a==="string"?a:void 0,c)}
function If(a){var b=0;b=b===void 0?0:b;a=mf(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return Ff(a,b)}
function Jf(a,b,c){return pf(a,b,Ce(c))}
function Kf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw sd("enum");c|=0}return pf(a,b,c)}
;function Lf(a){return a}
function Mf(a){return a}
function Nf(a,b,c,d){return Of(a,b,c,d,Pf,Qf)}
function Rf(a,b,c,d){return Of(a,b,c,d,Sf,Tf)}
function Of(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var r=c[n];d&&n===c.length-1&&r===d||(l++,r!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Uf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;r=g;for(var w=m,x=c.length-1;x>=0;x--){var y=c[x];if(!(y==null||d&&x===c.length-1&&y===d)){y=x-b;var H=e(y,t)+f(n,r,w);H<l&&(a=1+y,l=H);n++;t--;w+=Uf(y);r=Math.max(r,y)}}b=e(0,0)+f(n,r,w);b<l&&(a=0,l=b);if(d){n=h;r=g;w=m;t=k;for(var J in d)d=+J,isNaN(d)||d>=
1024||(n--,t++,w-=J.length,g=e(d,t)+f(n,r,w),g<l&&(a=1+d,l=g))}return a}
function Tf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Sf(a,b){return(a>1?a-1:0)+(a-b)*4}
function Qf(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Pf(a){return 40+4*a}
function Uf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Vf,Wf;function K(a,b,c){this.G=I(a,b,c)}
p=K.prototype;p.toJSON=function(){return Xf(this)};
p.serialize=function(a){try{return Wf=!0,a&&(Vf=a===Mf||a!==Lf&&a!==Nf&&a!==Rf?Mf:a),JSON.stringify(Xf(this),bf)}finally{a&&(Vf=void 0),Wf=!1}};
function Yf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Ad(b,32);return af(a,b)}
p.clone=function(){var a=this.G;return jf(this,a,Cd(a),!1)};
p.Dc=Gd;p.toString=function(){try{return Wf=!0,Xf(this).toString()}finally{Wf=!1}};
function Xf(a){Ze(a);var b;Wf?b=a.G:b=ff(a.G,gf,void 0,void 0,!1);var c=!Wf,d=Cd(c?a.G:b);if(a=b.length){var e=b[a-1],f=Jd(e);f?a--:e=void 0;var g=+!!(d&512)-1,h=a-g;d=!!Vf&&!(d&512);var k,l=(k=Vf)!=null?k:Mf;k=d?l(h,g,b,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(b,0,a):b;if(f||h){b:{var m=d;var n=e;var r;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],w=l-g;t==null||Kd(t)||Id(t)&&t.size===0||(f=m[l]=void 0,((f=r)!=null?f:r={})[w]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,
((l=r)!=null?l:r={})[x]=n[x];else if(t=n[x],Array.isArray(t)&&(Kd(t)||Id(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(w=m.length;w<=t;w++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=r)!=null?l:r={})[x]=t);f||(r=n);if(r)for(var y in r){n=r;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(;a>0;a--){r=d[a-1];if(!(r==null||Kd(r)||Id(r)&&r.size===0))break;var H=!0}if(d!==b||m||H){if(!h&&!c)d=Array.prototype.slice.call(d,0,a);else if(H||m||n)d.length=a;n&&d.push(n)}H=
d}else H=b;return H}
;function Zf(a){return function(b){return Yf(a,b)}}
;function $f(a){this.G=I(a)}
z($f,K);function ag(a,b){return vf(a,b,qe)}
;function bg(a){this.G=I(a)}
z(bg,K);var cg=[1,2,3];function dg(a){this.G=I(a)}
z(dg,K);var eg=[1,2,3];function fg(a){this.G=I(a)}
z(fg,K);function gg(a){this.G=I(a)}
z(gg,K);function hg(a){this.G=I(a)}
z(hg,K);function ig(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function jg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],x=e[2],y=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var J=y^w&(x^y);var N=1518500249}else J=w^x^y,N=1859775393;else t<60?(J=w&x|y&(w|x),N=2400959708):(J=w^x^y,N=3395469782);J=((n<<5|n>>>27)&4294967295)+J+H+N+r[t]&4294967295;H=y;y=x;x=(w<<30|w>>>2)&4294967295;w=n;n=J}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+H&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],w=0,x=n.length;w<x;++w)t.push(n.charCodeAt(w));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var w=24;w>=0;w-=8)n[r++]=e[t]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Td:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function kg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,lg(ig(d),a,c||null)].join(" "):null}
function lg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Kb(d,function(h){e.push(h)}),mg(e.join(" "));
var f=[],g=[];Kb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Kb(d,function(h){e.push(h)});
a=mg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function mg(a){var b=jg();b.update(a);return b.Td().toLowerCase()}
;var ng={};function og(a){this.h=a||{cookie:""}}
p=og.prototype;p.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Jb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Pe;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Jb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=bb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Jb:0,path:b,domain:c});return d};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=bb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var pg=new og(typeof document=="undefined"?null:document);function qg(a){return!!ng.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function rg(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;qg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new og(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");qg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function sg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new og(document)).get(b));return a?kg(a,c,d):null}
function tg(a,b){b=b===void 0?!1:b;var c=ig(String(C.location.href)),d=[];if(rg(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new og(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?kg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&qg(b)&&((b=sg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),
(a=sg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function ug(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function vg(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?vg.apply(null,d):ug(d)}}
;function L(){this.ea=this.ea;this.D=this.D}
L.prototype.ea=!1;L.prototype.dispose=function(){this.ea||(this.ea=!0,this.aa())};
L.prototype[Symbol.dispose]=function(){this.dispose()};
function wg(a,b){a.addOnDisposeCallback(Xa(ug,b))}
L.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.D||(this.D=[]),b&&(a=a.bind(b)),this.D.push(a))};
L.prototype.aa=function(){if(this.D)for(;this.D.length;)this.D.shift()()};function xg(a){this.G=I(a)}
z(xg,K);function yg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Ya()};
this.i=this.h()}
yg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
yg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
yg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
yg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function zg(a){this.G=I(a)}
z(zg,K);function Ag(a){this.G=I(a)}
z(Ag,K);function Bg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=Bg.prototype;p.clone=function(){return new Bg(this.x,this.y)};
p.equals=function(a){return a instanceof Bg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Cg(a,b){this.width=a;this.height=b}
p=Cg.prototype;p.clone=function(){return new Cg(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Dg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Eg(a){var b=Fg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Gg(a){for(var b in a)return!1;return!0}
function Hg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ig(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Jg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Kg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Lg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Lg(a[c]);return b}
var Mg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ng(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Mg.length;f++)c=Mg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Og(a,b){this.h=a===Pg&&b||""}
Og.prototype.toString=function(){return this.h};
var Pg={};new Og(Pg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Qg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Rg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Sg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Tg=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ug(a){this.h=this.i=this.j=a}
Ug.prototype.reset=function(){this.h=this.i=this.j};
Ug.prototype.getValue=function(){return this.i};function Vg(a){this.G=I(a)}
z(Vg,K);Vg.prototype.ac=function(){return If(this)};function Wg(a){this.G=I(a)}
z(Wg,K);function Xg(a){this.G=I(a)}
z(Xg,K);function Yg(a,b){Df(a,Wg,1,b)}
;function tf(a){this.G=I(a)}
z(tf,K);var Zg=["platform","platformVersion","architecture","model","uaFullVersion"],$g=new Xg,ch=null;function dh(a,b){b=b===void 0?Zg:b;if(!ch){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Wg;f=Jf(f,1,e.brand);return Jf(f,2,e.version)});
Yg(pf($g,2,ne(a.mobile)),c);ch=a.getHighEntropyValues(b)}var d=new Set(b);return ch.then(function(e){var f=$g.clone();d.has("platform")&&Jf(f,3,e.platform);d.has("platformVersion")&&Jf(f,4,e.platformVersion);d.has("architecture")&&Jf(f,5,e.architecture);d.has("model")&&Jf(f,6,e.model);d.has("uaFullVersion")&&Jf(f,7,e.uaFullVersion);return f}).catch(function(){return $g.clone()})}
;function eh(a){this.G=I(a)}
z(eh,K);function fh(a){this.G=I(a,4)}
z(fh,K);function gh(a){this.G=I(a,35)}
z(gh,K);function hh(a){this.G=I(a,19)}
z(hh,K);hh.prototype.Mb=function(a){return Kf(this,2,a)};function ih(a){this.G=I(a,8)}
z(ih,K);var jh=Zf(ih);function kh(a){this.G=I(a)}
z(kh,K);var lh=new function(){this.ctor=kh;this.isRepeated=0;this.h=Bf;this.defaultValue=void 0};function mh(a){L.call(this);var b=this;this.componentId="";this.j=[];this.Z="";this.pageId=null;this.ga=this.U=-1;this.experimentIds=null;this.M=this.u=0;this.ia=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.i=new nh(a.logSource,a.Za);this.network=a.network;this.vb=a.vb||null;this.bufferSize=1E3;this.B=a.sf||null;this.sessionIndex=a.sessionIndex||null;this.Db=a.Db||!1;this.logger=null;this.withCredentials=!a.Vc;this.Za=a.Za||!1;this.H=typeof URLSearchParams!=="undefined"&&!!(new URL(oh())).searchParams&&!!(new URL(oh())).searchParams.set;var c=Kf(new eh,1,1);ph(this.i,c);this.o=new Ug(1E4);a=qh(this,a.Qc);this.h=new yg(this.o.getValue(),a);this.Y=new yg(6E5,a);this.Db||this.Y.start();this.Za||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.uc()}),document.addEventListener("pagehide",this.uc.bind(this)))}
z(mh,L);function qh(a,b){return a.H?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
p=mh.prototype;p.aa=function(){this.uc();this.h.stop();this.Y.stop();L.prototype.aa.call(this)};
p.log=function(a){if(this.H){a=a.clone();var b=this.ia++;a=pf(a,21,ye(b));this.componentId&&Jf(a,26,this.componentId);if(Ef(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";pf(b,1,ye(c))}Ae(mf(a,15))==null&&pf(a,15,ye((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),Cf(b,xg,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.u+=b);this.j.push(a);this.Db||this.h.enabled||this.h.start()}};
p.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ga>d&&this.U<d)b&&b("throttled");else{this.network&&(typeof this.network.ac==="function"?rh(this.i,this.network.ac()):rh(this.i,0));var e=sh(this.i,this.j,this.u,this.M,this.vb);d={};var f=this.Fb();f&&(d.Authorization=f);this.B||(this.B=oh());try{var g=(new URL(this.B)).toString()}catch(k){g=(new URL(this.B,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.Z===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.u=0;var h=e.serialize();d={url:g.toString(),body:h,jh:1,qd:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.o.reset();c.h.setInterval(c.o.getValue());if(k){var l=null;try{var m=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=jh(m)}catch(n){}l&&(k=Number,m="-1",m=m===void 0?"0":m,m=Ff(Ef(l),m),k=k(m),k>0&&(c.U=Date.now(),c.ga=c.U+k),l=lh.ctor?lh.h(l,lh.ctor,175237375,!0):lh.h(l,175237375,null,!0),l=l===null?void 0:l)&&(l=nc(l,1,-1),l!==-1&&(c.o=new Ug(l<1?1:l),c.h.setInterval(c.o.getValue())))}a&&a();c.M=0};
h=function(k,l){var m=lc(e,gh,3);var n=Ae(mf(e,14));n=n==null?void 0:n;var r=c.o;r.h=Math.min(3E5,r.h*2);r.i=Math.min(3E5,r.h+Math.round(.1*(Math.random()-.5)*2*r.h));c.h.setInterval(c.o.getValue());k===401&&f&&(c.Z=f);n&&(c.u+=n);l===void 0&&(l=c.isRetryable(k));l&&(c.j=m.concat(c.j),c.Db||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.M};
c.network&&c.network.send(d,g,h)}}}};
p.uc=function(){th(this.i,!0);this.flush();th(this.i,!1)};
p.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function oh(){return"https://play.google.com/log?format=json&hasfast=true"}
function nh(a,b){this.Za=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new hh;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));ph(this,new eh)}
nh.prototype.Mb=function(a){this.h.Mb(a);return this};
function ph(a,b){Cf(a.h,eh,1,b);If(b)||Kf(b,1,1);a.Za||(b=uh(a),Hf(b,5)||Jf(b,5,a.locale));a.i&&(b=uh(a),Bf(b,Xg,9)||Cf(b,Xg,9,a.i))}
function rh(a,b){rf(vh(a))&&(a=wh(a),Kf(a,1,b))}
function th(a,b){rf(vh(a))&&(a=wh(a),pf(a,2,ne(b)))}
function vh(a){return Bf(a.h,eh,1)}
function xh(a){var b=b===void 0?Zg:b;var c=a.Za?void 0:window;c?dh(c,b).then(function(d){a.i=d;d=uh(a);Cf(d,Xg,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function uh(a){a=vh(a);var b=Bf(a,tf,11);b||(b=new tf,Cf(a,tf,11,b));return b}
function wh(a){a=uh(a);var b=Bf(a,Vg,10);b||(b=new Vg,pf(b,2,ne(!1)),Cf(a,Vg,10,b));return b}
function sh(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(rf(vh(a))){var h=wh(a);pf(h,3,re(d))}rf(vh(a))&&(d=wh(a),pf(d,4,re(f)));rf(vh(a))&&(f=wh(a),pf(f,5,re(g)));a=a.h.clone();g=Date.now().toString();a=pf(a,4,ye(g));b=b.slice();b=Df(a,gh,3,b);e&&(a=new zg,e=pf(a,13,re(e)),a=new Ag,e=Cf(a,zg,2,e),a=new fh,e=Cf(a,Ag,1,e),e=Kf(e,2,9),Cf(b,fh,18,e));c&&pf(b,14,ye(c));return b}
;function yh(){this.Hd=typeof AbortController!=="undefined"}
yh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return A(function(w){switch(w.h){case 1:return f=(e=d.Hd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,za(w,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.qd)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),w.yield(fetch(a.url,g),5);case 5:h=w.i;if(h.status!==200){(k=c)==null||k(h.status);w.F(3);break}if((l=b)==null){w.F(7);break}return w.yield(h.text(),8);case 8:l(w.i);case 7:case 3:w.M=[w.j];w.o=0;w.D=0;clearTimeout(f);Ba(w);break;case 2:m=Aa(w);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}w.F(3)}})};
yh.prototype.ac=function(){return 4};function zh(a,b){L.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.pageId=this.h=this.vb=null}
z(zh,L);function Ah(a,b){a.i=b;return a}
function Bh(a,b){a.network=b;return a}
function Ch(a,b){a.h=b}
zh.prototype.Vc=function(){this.u=!0;return this};
function Dh(a){a.network||(a.network=new yh);var b=new mh({logSource:a.logSource,Fb:a.Fb?a.Fb:tg,sessionIndex:a.sessionIndex,sf:a.j,Za:a.o,Db:!1,Vc:a.u,Qc:a.Qc,network:a.network});wg(a,b);if(a.i){var c=a.i,d=uh(b.i);Jf(d,7,c)}a.componentId&&(b.componentId=a.componentId);a.vb&&(b.vb=a.vb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new xg),c=b.experimentIds,d=d.serialize(),Jf(c,4,d)):b.experimentIds&&pf(b.experimentIds,4));xh(b.i);a.network.Mb&&a.network.Mb(a.logSource);
a.network.af&&a.network.af(b);return b}
;function Eh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;L.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new zh(a,"0"),a.componentId=b,wg(this,a),c!==""&&(a.j=c),d&&(a.o=!0),e&&Ah(a,e),g&&Bh(a,g),b=Dh(a));this.h=b}
z(Eh,L);
Eh.prototype.flush=function(a){var b=a||[];if(b.length){a=new hg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new gg;f=Jf(f,1,e.i);var g=Fh(e);f=vf(f,g,Be);g=[];var h=[];for(var k=v(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.vc(l)||[],r=[],t=0;t<n.length;t++){var w=n[t],x=w&&w.h;w=new dg;switch(m){case 3:x=Number(x);Number.isFinite(x)&&yf(w,1,eg,ye(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);yf(w,2,eg,x)}r.push(w)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new fg;r=Cf(t,dg,2,r);t=l;w=[];x=Gh(e);for(var y=0;y<x.length;y++){var H=x[y],J=t[y],N=new bg;switch(H){case 3:yf(N,1,cg,Ce(String(J)));break;case 2:H=Number(J);Number.isFinite(H)&&yf(N,2,cg,re(H));break;case 1:yf(N,3,cg,ne(J==="true"))}w.push(N)}Df(r,bg,1,w);g.push(r)}}Df(f,fg,4,g);c.push(f);e.clear()}Df(a,gg,1,c);b=this.h;b.H&&(a instanceof gh?b.log(a):(c=new gh,a=a.serialize(),a=Jf(c,8,a),b.log(a)));this.h.flush()}};function Hh(a){this.h=a}
;function Ih(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function Gh(a){return a.fields.map(function(b){return b.fieldType})}
function Fh(a){return a.fields.map(function(b){return b.fieldName})}
p=Ih.prototype;p.Id=function(a){var b=B.apply(1,arguments),c=this.vc(b);c?c.push(new Hh(a)):this.td(a,b)};
p.td=function(a){var b=this.Pc(B.apply(1,arguments));this.h.set(b,[new Hh(a)])};
p.vc=function(){var a=this.Pc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.de=function(){var a=this.vc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Pc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Jh(a,b){Ih.call(this,a,3,b)}
z(Jh,Ih);Jh.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.de(b);d&&(c=d.h);this.td(c+a,b)};function Kh(a,b){Ih.call(this,a,2,b)}
z(Kh,Ih);Kh.prototype.record=function(a){this.Id(a,B.apply(1,arguments))};function Lh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Lh.prototype.stopPropagation=function(){this.j=!0};
Lh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Mh(a,b){Lh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(Mh,Lh);
Mh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Mh.Aa.preventDefault.call(this)};
Mh.prototype.stopPropagation=function(){Mh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Mh.prototype.preventDefault=function(){Mh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Nh="closure_listenable_"+(Math.random()*1E6|0);var Oh=0;function Ph(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++Oh;this.Lb=this.Vb=!1}
function Qh(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function Rh(a){this.src=a;this.listeners={};this.h=0}
Rh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Sh(a,b,d,e);g>-1?(b=a[g],c||(b.Vb=!1)):(b=new Ph(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
Rh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Sh(e,b,c,d);return b>-1?(Qh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Th(a,b){var c=b.type;c in a.listeners&&Pb(a.listeners[c],b)&&(Qh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Sh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var Uh="closure_lm_"+(Math.random()*1E6|0),Vh={},Wh=0;function Xh(a,b,c,d,e){if(d&&d.once)Yh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Xh(a,b[f],c,d,e);else c=Zh(c),a&&a[Nh]?a.listen(b,c,Qa(d)?!!d.capture:!!d,e):$h(a,b,c,!1,d,e)}
function $h(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=ai(a);h||(a[Uh]=h=new Rh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=bi();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Tg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ci(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Wh++}}
function bi(){function a(c){return b.call(a.src,a.listener,c)}
var b=di;return a}
function Yh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Yh(a,b[f],c,d,e);else c=Zh(c),a&&a[Nh]?a.h.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):$h(a,b,c,!0,d,e)}
function ei(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ei(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Zh(c),a&&a[Nh])?a.h.remove(String(b),c,d,e):a&&(a=ai(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Sh(b,c,d,e)),(c=a>-1?b[a]:null)&&fi(c))}
function fi(a){if(typeof a!=="number"&&a&&!a.Lb){var b=a.src;if(b&&b[Nh])Th(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ci(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Wh--;(c=ai(b))?(Th(c,a),c.h==0&&(c.src=null,b[Uh]=null)):Qh(a)}}}
function ci(a){return a in Vh?Vh[a]:Vh[a]="on"+a}
function di(a,b){if(a.Lb)a=!0;else{b=new Mh(b,this);var c=a.listener,d=a.cc||a.src;a.Vb&&fi(a);a=c.call(d,b)}return a}
function ai(a){a=a[Uh];return a instanceof Rh?a:null}
var gi="__closure_events_fn_"+(Math.random()*1E9>>>0);function Zh(a){if(typeof a==="function")return a;a[gi]||(a[gi]=function(b){return a.handleEvent(b)});
return a[gi]}
;function hi(){L.call(this);this.h=new Rh(this);this.Va=this;this.ga=null}
Za(hi,L);hi.prototype[Nh]=!0;p=hi.prototype;p.addEventListener=function(a,b,c,d){Xh(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){ei(this,a,b,c,d)};
function ii(a,b){var c=a.ga;if(c){var d=[];for(var e=1;c;c=c.ga)d.push(c),++e}a=a.Va;c=b.type||b;typeof b==="string"?b=new Lh(b,a):b instanceof Lh?b.target=b.target||a:(e=b,b=new Lh(c,a),Ng(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=ji(g,c,!0,b)&&e}b.j||(g=b.h=a,e=ji(g,c,!0,b)&&e,b.j||(e=ji(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=ji(g,c,!1,b)&&e}
p.aa=function(){hi.Aa.aa.call(this);this.removeAllListeners();this.ga=null};
p.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
p.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Qh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function ji(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Vb&&Th(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function ki(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
ki.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function li(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function mi(){this.i=this.h=null}
mi.prototype.add=function(a,b){var c=ni.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
mi.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ni=new ki(function(){return new oi},function(a){return a.reset()});
function oi(){this.next=this.scope=this.h=null}
oi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
oi.prototype.reset=function(){this.next=this.scope=this.h=null};var pi,qi=!1,ri=new mi;function si(a,b){pi||ti();qi||(pi(),qi=!0);ri.add(a,b)}
function ti(){var a=Promise.resolve(void 0);pi=function(){a.then(ui)}}
function ui(){for(var a;a=ri.remove();){try{a.h.call(a.scope)}catch(b){Ec(b)}li(ni,a)}qi=!1}
;function vi(){}
function wi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function xi(a){this.h=0;this.B=void 0;this.o=this.i=this.j=null;this.D=this.u=!1;if(a!=vi)try{var b=this;a.call(void 0,function(c){yi(b,2,c)},function(c){yi(b,3,c)})}catch(c){yi(this,3,c)}}
function zi(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
zi.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Ai=new ki(function(){return new zi},function(a){a.reset()});
function Bi(a,b,c){var d=Ai.get();d.i=a;d.h=b;d.context=c;return d}
function Ci(a){return new xi(function(b,c){c(a)})}
xi.prototype.then=function(a,b,c){return Di(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
xi.prototype.$goog_Thenable=!0;p=xi.prototype;p.nc=function(a,b){return Di(this,null,a,b)};
p.catch=xi.prototype.nc;p.cancel=function(a){if(this.h==0){var b=new Ei(a);si(function(){Fi(this,b)},this)}};
function Fi(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?Fi(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):Gi(c),Hi(c,e,3,b)))}a.j=null}else yi(a,3,b)}
function Ii(a,b){a.i||a.h!=2&&a.h!=3||Ji(a);a.o?a.o.next=b:a.i=b;a.o=b}
function Di(a,b,c,d){var e=Bi(null,null,null);e.child=new xi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Ei?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Ii(a,e);return e.child}
p.qf=function(a){this.h=0;yi(this,2,a)};
p.rf=function(a){this.h=0;yi(this,3,a)};
function yi(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.qf,f=a.rf;if(d instanceof xi){Ii(d,Bi(e||vi,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if(typeof k==="function"){Ki(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.B=c,a.h=b,a.j=null,Ji(a),b!=3||c instanceof Ei||Li(a,c))}}
function Ki(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ji(a){a.u||(a.u=!0,si(a.Yd,a))}
function Gi(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
p.Yd=function(){for(var a;a=Gi(this);)Hi(this,a,this.h,this.B);this.u=!1};
function Hi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.D;a=a.j)a.D=!1;if(b.child)b.child.j=null,Mi(b,c,d);else try{b.j?b.i.call(b.context):Mi(b,c,d)}catch(e){Ni.call(null,e)}li(Ai,b)}
function Mi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Li(a,b){a.D=!0;si(function(){a.D&&Ni.call(null,b)})}
var Ni=Ec;function Ei(a){$a.call(this,a)}
Za(Ei,$a);Ei.prototype.name="cancel";function Oi(a,b){hi.call(this);this.j=a||1;this.i=b||C;this.o=Wa(this.mf,this);this.u=Ya()}
Za(Oi,hi);p=Oi.prototype;p.enabled=!1;p.Da=null;p.setInterval=function(a){this.j=a;this.Da&&this.enabled?(this.stop(),this.start()):this.Da&&this.stop()};
p.mf=function(){if(this.enabled){var a=Ya()-this.u;a>0&&a<this.j*.8?this.Da=this.i.setTimeout(this.o,this.j-a):(this.Da&&(this.i.clearTimeout(this.Da),this.Da=null),ii(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Da||(this.Da=this.i.setTimeout(this.o,this.j),this.u=Ya())};
p.stop=function(){this.enabled=!1;this.Da&&(this.i.clearTimeout(this.Da),this.Da=null)};
p.aa=function(){Oi.Aa.aa.call(this);this.stop();delete this.i};function Pi(a){L.call(this);this.H=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Oi(this.flushInterval);this.h.listen("tick",this.yb,!1,this);wg(this,this.h)}
z(Pi,L);p=Pi.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Qi(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.yb()}
p.yb=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.h.size});
a.length&&this.H.flush(a,this.u);Ri(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Oa=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Jh(a,b))};
p.jb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Kh(a,b))};
function Si(a,b){return a.B.has(b)?void 0:a.i.get(b)}
p.xb=function(a){this.Gd(a,1,B.apply(1,arguments))};
p.Gd=function(a,b){var c=B.apply(2,arguments),d=Si(this,a);d&&d instanceof Jh&&(d.j(b,c),Qi(this))};
p.record=function(a,b){var c=B.apply(2,arguments),d=Si(this,a);d&&d instanceof Kh&&(d.record(b,c),Qi(this))};
function Ri(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ti(){}
Ti.prototype.serialize=function(a){var b=[];Ui(this,a,b);return b.join("")};
function Ui(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ui(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Vi(d,c),c.push(":"),Ui(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Vi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Wi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Xi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Vi(a,b){b.push('"',a.replace(Xi,function(c){var d=Wi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Wi[c]=d);return d}),'"')}
;function Yi(){}
Yi.prototype.h=null;Yi.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var Zi;function $i(){}
Za($i,Yi);Zi=new $i;function aj(a){hi.call(this);this.headers=new Map;this.Ea=a||null;this.i=!1;this.M=this.T=null;this.o=this.Z="";this.j=this.Y=this.u=this.U=!1;this.H=0;this.B=null;this.xa="";this.ia=!1}
Za(aj,hi);var bj=/^https?$/i,cj=["POST","PUT"],dj=[];function ej(a,b,c,d,e,f,g){var h=new aj;dj.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Pd,!0,void 0,void 0);f&&(h.H=Math.max(0,f));g&&(h.ia=g);h.send(a,c,d,e)}
p=aj.prototype;p.Pd=function(){this.dispose();Pb(dj,this)};
p.send=function(a,b,c,d){if(this.T)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Z+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Z=a;this.o="";this.U=!1;this.i=!0;this.T=new XMLHttpRequest;this.M=this.Ea?this.Ea.getOptions():Zi.getOptions();this.T.onreadystatechange=Wa(this.ld,this);try{this.getStatus(),this.Y=!0,this.T.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();fj(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if(typeof d.keys==="function"&&typeof d.get==="function"){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Jb(cj,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.T.setRequestHeader(d,c);this.xa&&(this.T.responseType=this.xa);"withCredentials"in this.T&&this.T.withCredentials!==this.ia&&(this.T.withCredentials=this.ia);try{gj(this),this.H>0&&(this.getStatus(),this.B=setTimeout(this.pf.bind(this),this.H)),this.getStatus(),this.u=!0,this.T.send(a),
this.u=!1}catch(g){this.getStatus(),fj(this,g)}};
p.pf=function(){typeof Ka!="undefined"&&this.T&&(this.o="Timed out after "+this.H+"ms, aborting",this.getStatus(),ii(this,"timeout"),this.abort(8))};
function fj(a,b){a.i=!1;a.T&&(a.j=!0,a.T.abort(),a.j=!1);a.o=b;hj(a);ij(a)}
function hj(a){a.U||(a.U=!0,ii(a,"complete"),ii(a,"error"))}
p.abort=function(){this.T&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.T.abort(),this.j=!1,ii(this,"complete"),ii(this,"abort"),ij(this))};
p.aa=function(){this.T&&(this.i&&(this.i=!1,this.j=!0,this.T.abort(),this.j=!1),ij(this,!0));aj.Aa.aa.call(this)};
p.ld=function(){this.ea||(this.Y||this.u||this.j?jj(this):this.De())};
p.De=function(){jj(this)};
function jj(a){if(a.i&&typeof Ka!="undefined")if(a.M[1]&&kj(a)==4&&a.getStatus()==2)a.getStatus();else if(a.u&&kj(a)==4)setTimeout(a.ld.bind(a),0);else if(ii(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(lj(a))ii(a,"complete"),ii(a,"success");else{try{var b=kj(a)>2?a.T.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";hj(a)}}finally{ij(a)}}}
function ij(a,b){if(a.T){gj(a);var c=a.T,d=a.M[0]?function(){}:null;
a.T=null;a.M=null;b||ii(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function gj(a){a.B&&(clearTimeout(a.B),a.B=null)}
p.isActive=function(){return!!this.T};
p.isComplete=function(){return kj(this)==4};
function lj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=Zb(1,String(a.Z)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!bj.test(a?a.toLowerCase():"");c=b}return c}
function kj(a){return a.T?a.T.readyState:0}
p.getStatus=function(){try{return kj(this)>2?this.T.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function mj(){}
mj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
ej(a.url,function(d){d=d.target;if(lj(d)){try{var e=d.T?d.T.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.qd,a.timeoutMillis,a.withCredentials)};
mj.prototype.ac=function(){return 1};var nj={va:"_",oc:"",Xc:[],gd:0};function oj(a,b){this.logger=a;this.event=b;this.startTime=pj()}
oj.prototype.done=function(){this.logger.Ib(this.event,pj()-this.startTime)};
function qj(){L.apply(this,arguments)}
z(qj,L);function rj(a,b){var c=pj();b=b();a.Ib("n",pj()-c);return b}
function sj(){qj.apply(this,arguments)}
z(sj,qj);p=sj.prototype;p.hd=function(){};
p.zc=function(){};
p.Ac=function(){};
p.Ib=function(){};
p.Fa=function(){};
p.Qb=function(){};
p.yd=function(){};
function tj(a){return{ke:new qc(a),ne:new sc(a),le:new rc(a),gf:new vc(a),hf:new wc(a),jf:new xc(a),Md:new tc(a),Nd:new uc(a),errorCount:new Ac(a),Xd:new zc(a),Kh:new yc(a),Mh:new Bc(a),lh:new Cc(a),Lh:new Dc(a)}}
function uj(a){var b=Bh(Ah(new zh(1828,"0"),"33"),new mj);(a==null?0:a.length)&&Ch(b,ag(new $f,a));a=new Eh(1828,"","",!1,"",Dh(b));wg(a,b);var c=new Pi(a);c.addOnDisposeCallback(function(){return void c.yb()});
wg(c,a);c.o=1E5;c.flushInterval=3E4;c.h.setInterval(3E4);return c}
function vj(a,b){L.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;b&&this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
z(vj,L);function wj(a){if(a.timer===void 0){var b=pj(),c=a.h+a.i-b;c>0?a.timer=setTimeout(function(){a.timer=void 0;wj(a)},c):(a.h=b,a.callback())}}
function xj(a,b,c){qj.call(this);this.metrics=a;this.va=b;this.oc=c;this.i=new Map;this.h=new Map;this.i.set("h",1);this.i.set("u",2);this.i.set("k",3);this.h.set(25,1);this.h.set(26,2);this.h.set(27,3);this.h.set(28,4)}
z(xj,qj);p=xj.prototype;p.hd=function(){this.metrics.ke.h.xb("/client_streamz/bg/fic",this.va)};
p.zc=function(){this.metrics.gf.h.xb("/client_streamz/bg/fsc",this.va)};
p.Ac=function(a){this.metrics.jf.record(a,this.va)};
p.Ib=function(a,b){if(a==="t")this.metrics.ne.record(b,this.va);else if(a==="n")this.metrics.hf.record(b,this.va);else if(a==="h"||a==="u"||a==="k"){if(a=this.i.get(a))this.metrics.Md.h.xb("/client_streamz/bg/fcc",a,this.va),this.metrics.Nd.record(b,a,this.va)}else this.metrics.Xd.record(b,a,this.oc,this.va)};
p.Fa=function(a){var b=this.h.get(a);b?this.metrics.le.h.xb("/client_streamz/bg/fiec",this.va,b):this.metrics.errorCount.h.xb("/client_streamz/bg/cec",a,this.oc,this.va)};
function yj(a,b){b=b===void 0?[]:b;a=Object.assign({},nj,a);b=uj(a.Xc.concat(b));xj.call(this,tj(b),a.va,a.oc);var c=this;this.options=a;this.service=b;this.j=new vj(function(){return void c.service.yb()},a.gd);
this.addOnDisposeCallback(function(){c.j.dispose();c.service.dispose()})}
z(yj,xj);yj.prototype.yd=function(a){var b=this;this.j.dispose();this.service.dispose();this.service=uj(this.options.Xc.concat(a));this.j=new vj(function(){return void b.service.yb()},this.options.gd);
this.metrics=tj(this.service)};
yj.prototype.Qb=function(){wj(this.j)};
function pj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function mc(a){this.G=I(a)}
z(mc,K);function zj(a){this.G=I(a)}
z(zj,K);var Aj=Zf(zj);function Bj(a){this.G=I(a,0,"bfkj")}
z(Bj,K);var Cj=function(a){return Rd(function(b){return b instanceof a&&!(Bd(b.G)&2)})}(Bj);function Dj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ej(a){function b(y,H,J,N){Promise.resolve().then(function(){m.done();d.logger.Qb();l.resolve({Kd:y,df:H,zh:J,nh:N})})}
function c(y,H,J,N){if(!d.logger.ea){var P="k";H?P="h":J&&(P="u");P!=="k"?N!==0&&d.logger.Ib(P,y):d.j<=0?(d.logger.Ib(P,y),d.j=Math.floor(Math.random()*200)):d.j--}}
L.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.i=[];if("challenge"in a&&Cj(a.challenge)){var e=Hf(a.challenge,4);var f=Hf(a.challenge,5);Hf(a.challenge,7).length?this.h=Aj(Hf(a.challenge,7)):this.h=Bf(a.challenge,zj,6)}else e=a.program,f=a.ge;var g=new L;this.addOnDisposeCallback(function(){var y,H,J;return A(function(N){if(N.h==1)return N.yield(d.o,2);if(N.h!=3)return y=N.i,H=y.df,N.yield(Promise.all(d.i),3);d.i=[];(J=H)==null||J();g.dispose();N.h=0})});
if(a.Je!==!1){var h,k=((h=this.h)==null?0:Gf(h))?kc(this.h):[];a.Qd?(this.logger=a.Qd,k.length&&this.logger.yd(k)):wg(g,this.logger=new yj(a.Be||{},k))}else wg(g,this.logger=new sj);var l=new Dj;this.o=l.promise;var m=new oj(this.logger,"t");this.logger.hd();if(!C[f])throw this.logger.Fa(25),Error("EGOU");if(!C[f].a)throw this.logger.Fa(26),Error("ELIU");try{var n=C[f].a;f=[];h=[];var r;if((r=this.h)==null?0:Gf(r)){var t=kc(this.h);for(r=0;r<t.length;r++)f.push(t[r]),h.push(1);var w=oc(this.h);for(t=
0;t<w.length;t++)f.push(w[t]),h.push(2)}var x;this.u=v(n(e,b,!0,a.Jh,c,[f,h],(x=this.h)==null?void 0:Hf(x,5))).next().value;this.cf=l.promise.then(function(){})}catch(y){throw this.logger.Fa(28),y;
}}
z(Ej,L);Ej.prototype.snapshot=function(a){var b=this;if(this.ea)throw Error("Already disposed");var c=new Dj;this.i.push(c.promise);this.logger.zc();return this.o.then(function(d){var e=d.Kd;return new Promise(function(f){var g=new oj(b.logger,"n");e(function(h){g.done();b.logger.Ac(h.length);b.logger.Qb();f(h)},[a.Uc,
a.ef,a.uf,a.ff])})}).finally(function(){return void c.resolve()})};
Ej.prototype.vd=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.zc();var c=rj(this.logger,function(){return b.u([a.Uc,a.ef,a.uf,a.ff])});
this.logger.Ac(c.length);this.logger.Qb();return c};
Ej.prototype.getLogger=function(){return this.logger};var Fj=window;function Gj(a){var b=Hj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ij(){var a=[];Gj(function(b){a.push(b)});
return a}
var Hj={vf:"allow-forms",wf:"allow-modals",xf:"allow-orientation-lock",yf:"allow-pointer-lock",zf:"allow-popups",Af:"allow-popups-to-escape-sandbox",Bf:"allow-presentation",Cf:"allow-same-origin",Df:"allow-scripts",Ef:"allow-top-navigation",Ff:"allow-top-navigation-by-user-activation"},Jj=wi(function(){return Ij()});
function Kj(){var a=Lj(),b={};Kb(Jj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Lj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Mj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Nj=(new Date).getTime();function Oj(a){hi.call(this);var b=this;this.B=this.j=0;this.Ca=a!=null?a:{oa:function(e,f){return setTimeout(e,f)},
pa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Pj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||Qj(this)}
z(Oj,hi);function Rj(){var a=Sj;Oj.h||(Oj.h=new Oj(a));return Oj.h}
Oj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.pa(this.B);delete Oj.h};
Oj.prototype.ta=function(){return this.i};
function Qj(a){a.B=a.Ca.oa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.F(3):c.yield(Pj(a),3):c.yield(Pj(a),3);Qj(a);c.h=0})},3E4)}
function Pj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ca.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.M=[h.j];h.o=0;h.D=0;a.u=void 0;a.j&&(a.Ca.pa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ii(a,"networkstatus-online"):ii(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.F(3)}})})}
;function Tj(){this.data=[];this.h=-1}
Tj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Tj.prototype.get=function(a){return!!this.data[a]};
function Uj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Vj(){this.blockSize=-1}
;function Wj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.D=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
Za(Wj,Vj);Wj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Xj(a,b,c){c||(c=0);var d=a.u;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Wj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.D,f=this.i;d<b;){if(f==0)for(;d<=c;)Xj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Xj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Xj(this,e);f=0;break}}this.i=f;this.o+=b}};
Wj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.D[c]=b&255,b/=256;Xj(this,this.D);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Yj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Zj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ak(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Yj(a).match(/\S+/g)||[],b=Jb(a,b)>=0);return b}
function bk(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ak(a,"inverted-hdpi")&&Zj(a,Array.prototype.filter.call(a.classList?a.classList:Yj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function ck(){}
ck.prototype.next=function(){return dk};
var dk={done:!0,value:void 0};ck.prototype.ib=function(){return this};function ek(a){if(a instanceof fk||a instanceof gk||a instanceof hk)return a;if(typeof a.next=="function")return new fk(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new fk(function(){return a[Symbol.iterator]()});
if(typeof a.ib=="function")return new fk(function(){return a.ib()});
throw Error("Not an iterator or iterable.");}
function fk(a){this.h=a}
fk.prototype.ib=function(){return new gk(this.h())};
fk.prototype[Symbol.iterator]=function(){return new hk(this.h())};
fk.prototype.i=function(){return new hk(this.h())};
function gk(a){this.h=a}
z(gk,ck);gk.prototype.next=function(){return this.h.next()};
gk.prototype[Symbol.iterator]=function(){return new hk(this.h)};
gk.prototype.i=function(){return new hk(this.h)};
function hk(a){fk.call(this,function(){return a});
this.j=a}
z(hk,fk);hk.prototype.next=function(){return this.j.next()};function M(a){L.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
Za(M,L);p=M.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Pb(a)}return!1};
p.Pb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Pb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.hb=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];ik(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ea;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Pb(c)}}return e!=0}return!1};
function ik(a,b,c){si(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Pb,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.aa=function(){M.Aa.aa.call(this);this.clear();this.j.length=0};function jk(a){this.h=a}
jk.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Ti).serialize(b))};
jk.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
jk.prototype.remove=function(a){this.h.remove(a)};function kk(a){this.h=a}
Za(kk,jk);function lk(a){this.data=a}
function mk(a){return a===void 0||a instanceof lk?a:new lk(a)}
kk.prototype.set=function(a,b){kk.Aa.set.call(this,a,mk(b))};
kk.prototype.i=function(a){a=kk.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
kk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function nk(a){this.h=a}
Za(nk,kk);nk.prototype.set=function(a,b,c){if(b=mk(b)){if(c){if(c<Ya()){nk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ya()}nk.Aa.set.call(this,a,b)};
nk.prototype.i=function(a){var b=nk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ya()||c&&c>Ya())nk.prototype.remove.call(this,a);else return b}};function ok(){}
;function pk(){}
Za(pk,ok);pk.prototype[Symbol.iterator]=function(){return ek(this.ib(!0)).i()};
pk.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function qk(a){this.h=a;this.i=null}
Za(qk,pk);p=qk.prototype;p.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
p.set=function(a,b){rk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){rk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){rk(this);this.h.removeItem(a)};
p.ib=function(a){rk(this);var b=0,c=this.h,d=new ck;d.next=function(){if(b>=c.length)return dk;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){rk(this);this.h.clear()};
p.key=function(a){rk(this);return this.h.key(a)};
function rk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Ec(Error("Storage mechanism: Storage unavailable"))}
;function sk(){var a=null;try{a=C.localStorage||null}catch(b){}qk.call(this,a)}
Za(sk,qk);function tk(a,b){this.i=a;this.h=b+"::"}
Za(tk,pk);tk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
tk.prototype.get=function(a){return this.i.get(this.h+a)};
tk.prototype.remove=function(a){this.i.remove(this.h+a)};
tk.prototype.ib=function(a){var b=this.i[Symbol.iterator](),c=this,d=new ck;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},uk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Lc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var vk={kb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Yc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},wk={kb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Yc:function(a){return[].concat.apply([],a)}};
O.bf=function(){uk?(O.gb=Uint8Array,O.Ha=Uint16Array,O.Fd=Int32Array,O.assign(O,vk)):(O.gb=Array,O.Ha=Array,O.Fd=Array,O.assign(O,wk))};
O.bf();var xk=!0;try{new Uint8Array(1)}catch(a){xk=!1}
function yk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.gb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var zk={};zk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Ak={},Bk,Ck=[],Dk=0;Dk<256;Dk++){Bk=Dk;for(var Ek=0;Ek<8;Ek++)Bk=Bk&1?3988292384^Bk>>>1:Bk>>>1;Ck[Dk]=Bk}Ak=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Ck[(a^b[d])&255];return a^-1};var Fk={};Fk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Gk(a){for(var b=a.length;--b>=0;)a[b]=0}
var Hk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ik=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Jk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Kk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Lk=Array(576);Gk(Lk);var Mk=Array(60);Gk(Mk);var Nk=Array(512);Gk(Nk);var Ok=Array(256);Gk(Ok);var Pk=Array(29);Gk(Pk);var Qk=Array(30);Gk(Qk);function Rk(a,b,c,d,e){this.wd=a;this.be=b;this.ae=c;this.Ud=d;this.Ae=e;this.cd=a&&a.length}
var Sk,Tk,Uk;function Vk(a,b){this.Wc=a;this.sb=0;this.Ta=b}
function Wk(a,b){a.X[a.pending++]=b&255;a.X[a.pending++]=b>>>8&255}
function Xk(a,b,c){a.ha>16-c?(a.na|=b<<a.ha&65535,Wk(a,a.na),a.na=b>>16-a.ha,a.ha+=c-16):(a.na|=b<<a.ha&65535,a.ha+=c)}
function Yk(a,b,c){Xk(a,c[b*2],c[b*2+1])}
function Zk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function $k(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Zk(d[e]++,e))}
function al(a){var b;for(b=0;b<286;b++)a.qa[b*2]=0;for(b=0;b<30;b++)a.Xa[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.qa[512]=1;a.Na=a.wb=0;a.ya=a.matches=0}
function bl(a){a.ha>8?Wk(a,a.na):a.ha>0&&(a.X[a.pending++]=a.na);a.na=0;a.ha=0}
function cl(a,b,c){bl(a);Wk(a,c);Wk(a,~c);O.kb(a.X,a.window,b,c,a.pending);a.pending+=c}
function dl(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function el(a,b,c){for(var d=a.ba[c],e=c<<1;e<=a.La;){e<a.La&&dl(b,a.ba[e+1],a.ba[e],a.depth)&&e++;if(dl(b,d,a.ba[e],a.depth))break;a.ba[c]=a.ba[e];c=e;e<<=1}a.ba[c]=d}
function fl(a,b,c){var d=0;if(a.ya!==0){do{var e=a.X[a.Cb+d*2]<<8|a.X[a.Cb+d*2+1];var f=a.X[a.yc+d];d++;if(e===0)Yk(a,f,b);else{var g=Ok[f];Yk(a,g+256+1,b);var h=Hk[g];h!==0&&(f-=Pk[g],Xk(a,f,h));e--;g=e<256?Nk[e]:Nk[256+(e>>>7)];Yk(a,g,c);h=Ik[g];h!==0&&(e-=Qk[g],Xk(a,e,h))}}while(d<a.ya)}Yk(a,256,b)}
function gl(a,b){var c=b.Wc,d=b.Ta.wd,e=b.Ta.cd,f=b.Ta.Ud,g,h=-1;a.La=0;a.nb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ba[++a.La]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.La<2;){var k=a.ba[++a.La]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Na--;e&&(a.wb-=d[k*2+1])}b.sb=h;for(g=a.La>>1;g>=1;g--)el(a,c,g);k=f;do g=a.ba[1],a.ba[1]=a.ba[a.La--],el(a,c,1),d=a.ba[1],a.ba[--a.nb]=g,a.ba[--a.nb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ba[1]=k++,el(a,c,1);while(a.La>=
2);a.ba[--a.nb]=a.ba[1];g=b.Wc;k=b.sb;d=b.Ta.wd;e=b.Ta.cd;f=b.Ta.be;var l=b.Ta.ae,m=b.Ta.Ae,n,r=0;for(n=0;n<=15;n++)a.Ia[n]=0;g[a.ba[a.nb]*2+1]=0;for(b=a.nb+1;b<573;b++){var t=a.ba[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Ia[n]++;var w=0;t>=l&&(w=f[t-l]);var x=g[t*2];a.Na+=x*(n+w);e&&(a.wb+=x*(d[t*2+1]+w))}}if(r!==0){do{for(n=m-1;a.Ia[n]===0;)n--;a.Ia[n]--;a.Ia[n+1]+=2;a.Ia[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Ia[n];t!==0;)d=a.ba[--b],d>k||(g[d*2+1]!==n&&(a.Na+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}$k(c,h,a.Ia)}
function hl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function il(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Yk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Yk(a,l,a.ja),g--),Yk(a,16,a.ja),Xk(a,g-3,2)):g<=10?(Yk(a,17,a.ja),Xk(a,g-3,3)):(Yk(a,18,a.ja),Xk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function jl(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.qa[c*2]!==0)return 0;if(a.qa[18]!==0||a.qa[20]!==0||a.qa[26]!==0)return 1;for(c=32;c<256;c++)if(a.qa[c*2]!==0)return 1;return 0}
var kl=!1;function ll(a,b,c){a.X[a.Cb+a.ya*2]=b>>>8&255;a.X[a.Cb+a.ya*2+1]=b&255;a.X[a.yc+a.ya]=c&255;a.ya++;b===0?a.qa[c*2]++:(a.matches++,b--,a.qa[(Ok[c]+256+1)*2]++,a.Xa[(b<256?Nk[b]:Nk[256+(b>>>7)])*2]++);return a.ya===a.Hb-1}
;function ml(a,b){a.msg=Fk[b];return b}
function nl(a){for(var b=a.length;--b>=0;)a[b]=0}
function ol(a){var b=a.state,c=b.pending;c>a.R&&(c=a.R);c!==0&&(O.kb(a.output,b.X,b.Kb,c,a.tb),a.tb+=c,b.Kb+=c,a.Mc+=c,a.R-=c,b.pending-=c,b.pending===0&&(b.Kb=0))}
function pl(a,b){var c=a.sa>=0?a.sa:-1,d=a.v-a.sa,e=0;if(a.level>0){a.K.sc===2&&(a.K.sc=jl(a));gl(a,a.ec);gl(a,a.Yb);hl(a,a.qa,a.ec.sb);hl(a,a.Xa,a.Yb.sb);gl(a,a.Rc);for(e=18;e>=3&&a.ja[Kk[e]*2+1]===0;e--);a.Na+=3*(e+1)+5+5+4;var f=a.Na+3+7>>>3;var g=a.wb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Xk(a,b?1:0,3),cl(a,c,d);else if(a.strategy===4||g===f)Xk(a,2+(b?1:0),3),fl(a,Lk,Mk);else{Xk(a,4+(b?1:0),3);c=a.ec.sb+1;d=a.Yb.sb+1;e+=1;Xk(a,c-257,5);Xk(a,d-1,5);Xk(a,e-4,4);for(f=0;f<e;f++)Xk(a,
a.ja[Kk[f]*2+1],3);il(a,a.qa,c-1);il(a,a.Xa,d-1);fl(a,a.qa,a.Xa)}al(a);b&&bl(a);a.sa=a.v;ol(a.K)}
function R(a,b){a.X[a.pending++]=b}
function ql(a,b){a.X[a.pending++]=b>>>8&255;a.X[a.pending++]=b&255}
function rl(a,b){var c=a.jd,d=a.v,e=a.wa,f=a.kd,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.Ua,l=a.Ga,m=a.v+258,n=h[d+e-1],r=h[d+e];a.wa>=a.bd&&(c>>=2);f>a.A&&(f=a.A);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.rb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.A?e:a.A}
function sl(a){var b=a.la,c;do{var d=a.Dd-a.A-a.v;if(a.v>=b+(b-262)){O.kb(a.window,a.window,b,b,0);a.rb-=b;a.v-=b;a.sa-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.ma===0)break;e=a.K;c=a.window;f=a.v+a.A;var g=e.ma;g>d&&(g=d);g===0?c=0:(e.ma-=g,O.kb(c,e.input,e.cb,g,f),e.state.wrap===1?e.J=zk(e.J,c,g,f):e.state.wrap===2&&(e.J=Ak(e.J,c,g,f)),e.cb+=g,e.fb+=g,c=g);a.A+=c;if(a.A+a.ra>=3)for(d=a.v-a.ra,a.P=a.window[d],
a.P=(a.P<<a.Ka^a.window[d+1])&a.Ja;a.ra&&!(a.P=(a.P<<a.Ka^a.window[d+3-1])&a.Ja,a.Ga[d&a.Ua]=a.head[a.P],a.head[a.P]=d,d++,a.ra--,a.A+a.ra<3););}while(a.A<262&&a.K.ma!==0)}
function tl(a,b){for(var c;;){if(a.A<262){sl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,c=a.Ga[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.la-262&&(a.S=rl(a,c));if(a.S>=3)if(c=ll(a,a.v-a.rb,a.S-3),a.A-=a.S,a.S<=a.Bc&&a.A>=3){a.S--;do a.v++,a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,a.Ga[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v;while(--a.S!==0);a.v++}else a.v+=a.S,a.S=0,a.P=a.window[a.v],a.P=(a.P<<a.Ka^a.window[a.v+1])&a.Ja;else c=ll(a,0,
a.window[a.v]),a.A--,a.v++;if(c&&(pl(a,!1),a.K.R===0))return 1}a.ra=a.v<2?a.v:2;return b===4?(pl(a,!0),a.K.R===0?3:4):a.ya&&(pl(a,!1),a.K.R===0)?1:2}
function ul(a,b){for(var c,d;;){if(a.A<262){sl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,c=a.Ga[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);a.wa=a.S;a.nd=a.rb;a.S=2;c!==0&&a.wa<a.Bc&&a.v-c<=a.la-262&&(a.S=rl(a,c),a.S<=5&&(a.strategy===1||a.S===3&&a.v-a.rb>4096)&&(a.S=2));if(a.wa>=3&&a.S<=a.wa){d=a.v+a.A-3;c=ll(a,a.v-1-a.nd,a.wa-3);a.A-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.P=(a.P<<a.Ka^a.window[a.v+3-1])&a.Ja,a.Ga[a.v&a.Ua]=a.head[a.P],a.head[a.P]=a.v);
while(--a.wa!==0);a.ab=0;a.S=2;a.v++;if(c&&(pl(a,!1),a.K.R===0))return 1}else if(a.ab){if((c=ll(a,0,a.window[a.v-1]))&&pl(a,!1),a.v++,a.A--,a.K.R===0)return 1}else a.ab=1,a.v++,a.A--}a.ab&&(ll(a,0,a.window[a.v-1]),a.ab=0);a.ra=a.v<2?a.v:2;return b===4?(pl(a,!0),a.K.R===0?3:4):a.ya&&(pl(a,!1),a.K.R===0)?1:2}
function vl(a,b){for(var c,d,e,f=a.window;;){if(a.A<=258){sl(a);if(a.A<=258&&b===0)return 1;if(a.A===0)break}a.S=0;if(a.A>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.S=258-(e-d);a.S>a.A&&(a.S=a.A)}a.S>=3?(c=ll(a,1,a.S-3),a.A-=a.S,a.v+=a.S,a.S=0):(c=ll(a,0,a.window[a.v]),a.A--,a.v++);if(c&&(pl(a,!1),a.K.R===0))return 1}a.ra=0;return b===4?(pl(a,!0),a.K.R===0?3:4):
a.ya&&(pl(a,!1),a.K.R===0)?1:2}
function wl(a,b){for(var c;;){if(a.A===0&&(sl(a),a.A===0)){if(b===0)return 1;break}a.S=0;c=ll(a,0,a.window[a.v]);a.A--;a.v++;if(c&&(pl(a,!1),a.K.R===0))return 1}a.ra=0;return b===4?(pl(a,!0),a.K.R===0?3:4):a.ya&&(pl(a,!1),a.K.R===0)?1:2}
function xl(a,b,c,d,e){this.he=a;this.ze=b;this.Ce=c;this.ye=d;this.ce=e}
var yl;yl=[new xl(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.A<=1){sl(a);if(a.A===0&&b===0)return 1;if(a.A===0)break}a.v+=a.A;a.A=0;var d=a.sa+c;if(a.v===0||a.v>=d)if(a.A=a.v-d,a.v=d,pl(a,!1),a.K.R===0)return 1;if(a.v-a.sa>=a.la-262&&(pl(a,!1),a.K.R===0))return 1}a.ra=0;if(b===4)return pl(a,!0),a.K.R===0?3:4;a.v>a.sa&&pl(a,!1);return 1}),
new xl(4,4,8,4,tl),new xl(4,5,16,8,tl),new xl(4,6,32,32,tl),new xl(4,4,16,16,ul),new xl(8,16,32,32,ul),new xl(8,16,128,128,ul),new xl(8,32,128,256,ul),new xl(32,128,258,1024,ul),new xl(32,258,258,4096,ul)];
function zl(){this.K=null;this.status=0;this.X=null;this.wrap=this.pending=this.Kb=this.za=0;this.I=null;this.Ba=0;this.method=8;this.pb=-1;this.Ua=this.Oc=this.la=0;this.window=null;this.Dd=0;this.head=this.Ga=null;this.kd=this.bd=this.strategy=this.level=this.Bc=this.jd=this.wa=this.A=this.rb=this.v=this.ab=this.nd=this.S=this.sa=this.Ka=this.Ja=this.wc=this.dc=this.P=0;this.qa=new O.Ha(1146);this.Xa=new O.Ha(122);this.ja=new O.Ha(78);nl(this.qa);nl(this.Xa);nl(this.ja);this.Rc=this.Yb=this.ec=
null;this.Ia=new O.Ha(16);this.ba=new O.Ha(573);nl(this.ba);this.nb=this.La=0;this.depth=new O.Ha(573);nl(this.depth);this.ha=this.na=this.ra=this.matches=this.wb=this.Na=this.Cb=this.ya=this.Hb=this.yc=0}
function Al(a,b){if(!a||!a.state||b>5||b<0)return a?ml(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ma!==0||c.status===666&&b!==4)return ml(a,a.R===0?-5:-2);c.K=a;var d=c.pb;c.pb=b;if(c.status===42)if(c.wrap===2)a.J=0,R(c,31),R(c,139),R(c,8),c.I?(R(c,(c.I.text?1:0)+(c.I.Qa?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),R(c,c.I.time&255),R(c,c.I.time>>8&255),R(c,c.I.time>>16&255),R(c,c.I.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(R(c,c.I.extra.length&255),R(c,c.I.extra.length>>8&255)),c.I.Qa&&(a.J=Ak(a.J,c.X,c.pending,0)),c.Ba=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.Oc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;ql(c,e+(31-e%31));c.v!==0&&(ql(c,a.J>>>16),ql(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Ba<(c.I.extra.length&65535)&&(c.pending!==c.za||
(c.I.Qa&&c.pending>e&&(a.J=Ak(a.J,c.X,c.pending-e,e)),ol(a),e=c.pending,c.pending!==c.za));)R(c,c.I.extra[c.Ba]&255),c.Ba++;c.I.Qa&&c.pending>e&&(a.J=Ak(a.J,c.X,c.pending-e,e));c.Ba===c.I.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.za&&(c.I.Qa&&c.pending>e&&(a.J=Ak(a.J,c.X,c.pending-e,e)),ol(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.I.name.length?c.I.name.charCodeAt(c.Ba++)&255:0;R(c,f)}while(f!==0);c.I.Qa&&c.pending>
e&&(a.J=Ak(a.J,c.X,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.za&&(c.I.Qa&&c.pending>e&&(a.J=Ak(a.J,c.X,c.pending-e,e)),ol(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.I.comment.length?c.I.comment.charCodeAt(c.Ba++)&255:0;R(c,f)}while(f!==0);c.I.Qa&&c.pending>e&&(a.J=Ak(a.J,c.X,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Qa?(c.pending+2>c.za&&ol(a),c.pending+2<=c.za&&(R(c,a.J&
255),R(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(ol(a),a.R===0)return c.pb=-1,0}else if(a.ma===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return ml(a,-5);if(c.status===666&&a.ma!==0)return ml(a,-5);if(a.ma!==0||c.A!==0||b!==0&&c.status!==666){d=c.strategy===2?wl(c,b):c.strategy===3?vl(c,b):yl[c.level].ce(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.R===0&&(c.pb=-1),0;if(d===2&&(b===1?(Xk(c,2,3),Yk(c,256,Lk),c.ha===16?(Wk(c,c.na),c.na=0,c.ha=0):c.ha>=8&&
(c.X[c.pending++]=c.na&255,c.na>>=8,c.ha-=8)):b!==5&&(Xk(c,0,3),cl(c,0,0),b===3&&(nl(c.head),c.A===0&&(c.v=0,c.sa=0,c.ra=0))),ol(a),a.R===0))return c.pb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.J&255),R(c,a.J>>8&255),R(c,a.J>>16&255),R(c,a.J>>24&255),R(c,a.fb&255),R(c,a.fb>>8&255),R(c,a.fb>>16&255),R(c,a.fb>>24&255)):(ql(c,a.J>>>16),ql(c,a.J&65535));ol(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Bl={};Bl=function(){this.input=null;this.fb=this.ma=this.cb=0;this.output=null;this.Mc=this.R=this.tb=0;this.msg="";this.state=null;this.sc=2;this.J=0};var Cl=Object.prototype.toString;
function Dl(a){if(!(this instanceof Dl))return new Dl(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new Bl;this.K.R=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=ml(b,-2);else{e===8&&(e=9);var k=new zl;b.state=k;k.K=b;k.wrap=h;k.I=null;k.Oc=e;k.la=1<<k.Oc;k.Ua=k.la-1;k.wc=f+7;k.dc=1<<k.wc;k.Ja=k.dc-1;k.Ka=~~((k.wc+3-1)/3);k.window=new O.gb(k.la*2);k.head=new O.Ha(k.dc);k.Ga=new O.Ha(k.la);k.Hb=1<<f+6;k.za=k.Hb*4;k.X=new O.gb(k.za);k.Cb=1*k.Hb;k.yc=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.fb=b.Mc=0;b.sc=2;c=b.state;c.pending=0;c.Kb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.pb=0;if(!kl){d=Array(16);for(f=g=0;f<28;f++)for(Pk[f]=g,e=0;e<1<<Hk[f];e++)Ok[g++]=f;Ok[g-1]=f;for(f=g=0;f<16;f++)for(Qk[f]=g,e=0;e<1<<Ik[f];e++)Nk[g++]=f;for(g>>=7;f<30;f++)for(Qk[f]=g<<7,e=0;e<1<<Ik[f]-7;e++)Nk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Lk[e*2+1]=8,e++,d[8]++;for(;e<=255;)Lk[e*2+1]=9,e++,d[9]++;for(;e<=279;)Lk[e*2+1]=7,e++,d[7]++;for(;e<=287;)Lk[e*2+1]=8,e++,d[8]++;$k(Lk,287,d);for(e=0;e<30;e++)Mk[e*2+1]=5,Mk[e*2]=Zk(e,5);Sk=new Rk(Lk,Hk,257,286,15);Tk=new Rk(Mk,
Ik,0,30,15);Uk=new Rk([],Jk,0,19,7);kl=!0}c.ec=new Vk(c.qa,Sk);c.Yb=new Vk(c.Xa,Tk);c.Rc=new Vk(c.ja,Uk);c.na=0;c.ha=0;al(c);c=0}else c=ml(b,-2);c===0&&(b=b.state,b.Dd=2*b.la,nl(b.head),b.Bc=yl[b.level].ze,b.bd=yl[b.level].he,b.kd=yl[b.level].Ce,b.jd=yl[b.level].ye,b.v=0,b.sa=0,b.A=0,b.ra=0,b.S=b.wa=2,b.ab=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(Fk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=yk(a.dictionary):
Cl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.A)b=-2;else{b===1&&(a.J=zk(a.J,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(nl(l.head),l.v=0,l.sa=0,l.ra=0),c=new O.gb(l.la),O.kb(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.ma;d=a.cb;e=a.input;a.ma=g;a.cb=0;a.input=f;for(sl(l);l.A>=3;){f=l.v;g=l.A-2;do l.P=(l.P<<l.Ka^l.window[f+3-1])&l.Ja,l.Ga[f&l.Ua]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.A=2;sl(l)}l.v+=l.A;l.sa=l.v;l.ra=l.A;l.A=0;l.S=l.wa=2;l.ab=0;a.cb=d;a.input=e;a.ma=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Fk[b]);this.hh=!0}}
Dl.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=yk(a):Cl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.cb=0;c.ma=c.input.length;do{c.R===0&&(c.output=new O.gb(d),c.tb=0,c.R=d);a=Al(c,e);if(a!==1&&a!==0)return El(this,a),this.ended=!0,!1;if(c.R===0||c.ma===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.Lc(c.output,c.tb);b=f;f=f.length;if(f<65537&&(b.subarray&&xk||!b.subarray))b=
String.fromCharCode.apply(null,O.Lc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Lc(c.output,c.tb),this.chunks.push(b)}while((c.ma>0||c.R===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=ml(c,-2):(c.state=null,a=d===113?ml(c,-3):0)):a=-2,El(this,a),this.ended=!0,a===0;e===2&&(El(this,0),c.R=0);return!0};
function El(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.Yc(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function Fl(a,b){b=b||{};b.gzip=!0;b=new Dl(b);b.push(a,!0);if(b.err)throw b.msg||Fk[b.err];return b.result}
;function Gl(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=hb(a):b=null;return b}
;function Hl(a){return hb(a===null?"null":a===void 0?"undefined":a)}
;function Il(a){this.name=a}
;var Jl=new Il("rawColdConfigGroup");var Kl=new Il("rawHotConfigGroup");function Ll(a){this.G=I(a)}
z(Ll,K);function Ml(a){this.G=I(a)}
z(Ml,K);Ml.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new pd(a,md):nd||(nd=new pd(null,md));else if(a.constructor!==pd)if(ld(a))a=a.length?new pd(new Uint8Array(a),md):nd||(nd=new pd(null,md));else throw Error();return pf(this,1,a)};var Nl=new Il("continuationCommand");var Ol=new Il("webCommandMetadata");var Pl=new Il("signalServiceEndpoint");var Ql={Lf:"EMBEDDED_PLAYER_MODE_UNKNOWN",If:"EMBEDDED_PLAYER_MODE_DEFAULT",Kf:"EMBEDDED_PLAYER_MODE_PFP",Jf:"EMBEDDED_PLAYER_MODE_PFL"};var Rl=new Il("feedbackEndpoint");var Wd={Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT"};var Sl=new Il("shareEndpoint"),Tl=new Il("shareEntityEndpoint"),Ul=new Il("shareEntityServiceEndpoint"),Vl=new Il("webPlayerShareEntityServiceEndpoint");var Wl=new Il("playlistEditEndpoint");var Xl=new Il("modifyChannelNotificationPreferenceEndpoint");var Yl=new Il("unsubscribeEndpoint");var Zl=new Il("subscribeEndpoint");function $l(){var a=am;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function bm(a){D("yt.ads.biscotti.lastId_",a)}
;function cm(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var dm=C.window,em,fm,gm=(dm==null?void 0:(em=dm.yt)==null?void 0:em.config_)||(dm==null?void 0:(fm=dm.ytcfg)==null?void 0:fm.data_)||{};D("yt.config_",gm);function hm(){cm(gm,arguments)}
function S(a,b){return a in gm?gm[a]:b}
function im(a){var b=gm.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var jm=[];function km(a){jm.forEach(function(b){return b(a)})}
function lm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){mm(b)}}:a}
function mm(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),hm("ERRORS",b));km(a)}
function nm(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),hm("ERRORS",f))}
;var om=/^[\w.]*$/,pm={q:!0,search_query:!0};function qm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=rm(f[0]||""),h=rm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Qb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(qm);l.args=[{key:m,value:f[1],query:a,method:sm===n?"unchanged":n}];pm.hasOwnProperty(m)||nm(l)}}return c}
var sm=String(qm);function tm(a){var b=[];Dg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Kb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function um(a){a.charAt(0)==="?"&&(a=a.substring(1));return qm(a,"&")}
function wm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),um(a.length>1?a[1]:a[0])):{}}
function xm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=um(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return ec(a,e)+d}
function ym(a){if(!b)var b=window.location.href;var c=Zb(1,a),d=$b(a);c&&d?(a=a.match(Xb),b=b.match(Xb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?$b(b)===d&&(Number(Zb(4,b))||null)===(Number(Zb(4,a))||null):!0;return a}
function rm(a){return a&&a.match(om)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function zm(a){var b=Am;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Nj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Fj:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=Fj.screen)==null?void 0:k.height;var l;e.u_w=(l=Fj.screen)==null?void 0:l.width;var m;e.u_ah=(m=Fj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=Fj.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=Fj.screen)==null?void 0:r.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var w=h.screenY}catch(Ma){}try{var x=h.outerWidth;var y=h.outerHeight}catch(Ma){}try{var H=h.innerWidth;var J=h.innerHeight}catch(Ma){}try{var N=h.screenLeft;var P=h.screenTop}catch(Ma){}try{H=h.innerWidth,J=h.innerHeight}catch(Ma){}try{var va=h.screen.availWidth;var vb=h.screen.availTop}catch(Ma){}t=[N,P,t,w,va,vb,x,y,H,J];try{var ea=(b.h.top||window).document,Z=ea.compatMode==
"CSS1Compat"?ea.documentElement:ea.body;var oa=(new Cg(Z.clientWidth,Z.clientHeight)).round()}catch(Ma){oa=new Cg(-12245933,-12245933)}ea=oa;oa={};var Na=Na===void 0?C:Na;Z=new Tj;"SVGElement"in Na&&"createElementNS"in Na.document&&Z.set(0);w=Kj();w["allow-top-navigation-by-user-activation"]&&Z.set(1);w["allow-popups-to-escape-sandbox"]&&Z.set(2);Na.crypto&&Na.crypto.subtle&&Z.set(3);"TextDecoder"in Na&&"TextEncoder"in Na&&Z.set(4);Na=Uj(Z);oa.bc=Na;oa.bih=ea.height;oa.biw=ea.width;oa.brdim=t.join();
b=b.i;b=(oa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,oa.wgl=!!Fj.WebGLRenderingContext,oa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Am=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return tm(zm(a))});Ya();navigator.userAgent.indexOf(" (CrKey ");var Bm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Cm(){if(!Bm)return null;var a=Bm();return"open"in a?a:null}
function Dm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Em(a,b){typeof a==="function"&&(a=lm(a));return window.setTimeout(a,b)}
;var Fm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ka(Fm),["client_dev_set_cookie"]);function T(a){a=Gm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Hm(a,b){a=Gm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Gm(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Im(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Jm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Km="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(Fm)),Lm=!1;function Mm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&lm(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Cm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=Nm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Om(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){nm(n)}}l.send(d);return l}
function Om(a,b){b=b===void 0?{}:b;var c=ym(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in Jm){var g=S(Jm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||($b(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=$b(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=Yb(Zb(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!$b(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!$b(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&$b(a)||(b["X-YouTube-Ad-Signals"]=tm(zm()));return b}
function Pm(a,b){b.method="POST";b.postParams||(b.postParams={});return Qm(a,b)}
function Qm(a,b){var c=b.format||"JSON";a=Rm(a,b);var d=Sm(a,b),e=!1,f=Tm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Dm(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=Um(a,c,k,b.convertToSafeHtml);l&&(l=Vm(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Em(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Rm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=xm(a,b||{},!0);return a}
function Sm(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||$b(a)&&!b.withCredentials&&$b(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=um(e),Ng(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):dc(e));f=e||f&&!Gg(f);!Lm&&f&&b.method!=="POST"&&(Lm=!0,mm(Error("AJAX request with postData should use POST")));return e}
function Um(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,nm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Wm(a):null)e={},Kb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Xm(g)})}d&&Ym(e);
return e}
function Ym(a){if(Qa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=fb();d=new zb(e?e.createHTML(d):d);a[c]=d}else Ym(a[b])}}
function Vm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Wm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Xm(a){var b="";Kb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Nm(a){var b=window.location.search,c=$b(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ym(a)&&(c=document.location.hostname);var d=Yb(Zb(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=um(b),f={};Kb(Km,function(g){e[g]&&(f[g]=e[g])});
return xm(a,f||{},!1)}
var Tm=Mm;var Zm=[{Cc:function(a){return"Cannot read property '"+a.key+"'"},
fc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Cc:function(a){return"Cannot call '"+a.key+"'"},
fc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Cc:function(a){return a.key+" is not defined"},
fc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var an={Sa:[],Pa:[{callback:$m,weight:500}]};function $m(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function bn(){this.Pa=[];this.Sa=[]}
var cn;function dn(){if(!cn){var a=cn=new bn;a.Sa.length=0;a.Pa.length=0;an.Sa&&a.Sa.push.apply(a.Sa,an.Sa);an.Pa&&a.Pa.push.apply(a.Pa,an.Pa)}return cn}
;var en=new M;function fn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=gn(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=gn(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=gn(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function gn(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function hn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=jn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=fn(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?jn(f+".ve",g,h,k):0;d+=f;d+=jn(e,a[e],b,c);if(d>500)break}}else c[b]=kn(a),d+=c[b].length;else c[b]=kn(a),d+=c[b].length;return d}
function jn(a,b,c,d){c+="."+a;a=kn(b);d[c]=a;return c.length+a.length}
function kn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function ln(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function mn(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function nn(){this.kf=!0}
function on(){nn.h||(nn.h=new nn);return nn.h}
function pn(a,b){a={};var c=[],d=T("enable_first_party_auth_v2");"USER_SESSION_ID"in gm&&d&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=tg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in gm||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in gm&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));return a}
;var qn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function rn(a,b,c,d,e){pg.set(""+a,b,{Jb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function sn(a){return pg.get(""+a,void 0)}
function tn(a,b,c){pg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function un(){if(T("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!pg.isEnabled())return!1;if(pg.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?pg.set("TESTCOOKIESENABLED","1",{Jb:60,Pe:"none",secure:!0}):pg.set("TESTCOOKIESENABLED","1",{Jb:60});if(pg.get("TESTCOOKIESENABLED")!=="1")return!1;pg.remove("TESTCOOKIESENABLED");return!0}
;var vn=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",vn);function wn(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=sn(this.h);a&&this.parse(a)}
var xn;function yn(){xn||(xn=new wn);return xn}
p=wn.prototype;p.get=function(a,b){zn(a);An(a);a=vn[a]!==void 0?vn[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){zn(a);An(a);if(b==null)throw Error("ExpectedNotNull");vn[a]=b.toString()};
function Bn(a){return!!((Cn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){zn(a);An(a);delete vn[a]};
p.clear=function(){for(var a in vn)delete vn[a]};
function An(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function zn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Cn(a){a=vn[a]!==void 0?vn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(vn[d]=c.toString())}};var Dn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},En={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Fn(){var a=C.navigator;return a?a.connection:void 0}
function Gn(){var a=Fn();if(a){var b=Dn[a.type||"unknown"]||"CONN_UNKNOWN";a=Dn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Hn(){var a=Fn();if(a!=null&&a.effectiveType)return En.hasOwnProperty(a.effectiveType)?En[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
z(U,Error);function In(){try{return Jn(),!0}catch(a){return!1}}
function Jn(a){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function Kn(){}
function Ln(a,b){return Sj.Wa(a,0,b)}
Kn.prototype.oa=function(a,b){return this.Wa(a,1,b)};
Kn.prototype.Ab=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Mn=Hm("web_emulated_idle_callback_delay",300),Nn=1E3/60-3,On=[8,5,4,3,2,1,0];
function Pn(a){a=a===void 0?{}:a;L.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.M=[];this.U=this.ga=!1;for(var b=v(On),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.qc=a.timeout||1;this.H=Nn;this.B=0;this.xa=this.Ee.bind(this);this.pc=this.nf.bind(this);this.Va=this.Jd.bind(this);this.zb=this.je.bind(this);this.Rb=this.Ie.bind(this);this.Ea=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ia=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
z(Pn,L);p=Pn.prototype;p.Ab=function(a){var b=Ya();Qn(this,a);a=Ya()-b;this.u||(this.H-=a)};
p.Wa=function(a,b,c){++this.Z;if(b===10)return this.Ab(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.M.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Rn(this)!==this.B&&this.stop(),this.start()));return d};
p.pa=function(a){delete this.j[a]};
function Sn(a){a.M.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function Tn(a){return!a.isHidden()&&a.ia}
function Rn(a){if(a.i[8].length){if(a.U)return 4;if(Tn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Tn(a)?3:2:1;return 0}
p.Fa=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Qn(a,b){try{b()}catch(c){a.Fa(c)}}
function Un(a){for(var b=v(On),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.je=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;Vn(this,b);this.ga=!1};
p.nf=function(){Vn(this)};
p.Jd=function(){Wn(this)};
p.Ie=function(a){this.U=!0;var b=Rn(this);b===4&&b!==this.B&&(this.stop(),this.start());Vn(this,void 0,a);this.U=!1};
p.Ee=function(){this.isHidden()||Wn(this);this.h&&(this.stop(),this.start())};
function Wn(a){a.stop();a.u=!0;for(var b=Ya(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Qn(a,e)}Xn(a);a.u=!1;Un(a)&&a.start();b=Ya()-b;a.H-=b}
function Xn(a){for(var b=0,c=a.M.length;b<c;b++){var d=a.M[b];a.i[d.priority].push(d.id)}a.M.length=0}
function Vn(a,b,c){a.U&&a.B===4&&a.h||a.stop();a.u=!0;b=Ya()+(b||a.H);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Fa(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Qn(a,f);d=a.ga?0:1;d=a.o>d?a.o:d;if(!(Ya()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Qn(a,c)}while(c&&Ya()<b)}a.u=!1;Xn(a);a.H=Nn;Un(a)&&a.start()}
p.start=function(){this.Y=!1;if(this.h===0)switch(this.B=Rn(this),this.B){case 1:var a=this.zb;this.h=this.Ea?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Mn);break;case 2:this.h=window.setTimeout(this.pc,this.qc);break;case 3:this.h=window.requestAnimationFrame(this.Rb);break;case 4:this.h=window.setTimeout(this.Va,0)}};
p.pause=function(){this.stop();this.Y=!0};
p.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Ea?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.aa=function(){Sn(this);this.stop();this.ia&&document.removeEventListener("visibilitychange",this.xa);L.prototype.aa.call(this)};var Yn=E("yt.scheduler.instance.timerIdMap_")||{},Zn=Hm("kevlar_tuner_scheduler_soft_state_timer_ms",800),$n=0,ao=0;function bo(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new Pn(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function co(){eo();var a=E("ytglobal.schedulerInstanceInstance_");a&&(ug(a),D("ytglobal.schedulerInstanceInstance_",null))}
function eo(){Sn(bo());for(var a in Yn)Yn.hasOwnProperty(a)&&delete Yn[Number(a)]}
function fo(a,b,c){if(!c)return c=c===void 0,-bo().Wa(a,b,c);var d=window.setTimeout(function(){var e=bo().Wa(a,b);Yn[d]=e},c);
return d}
function go(a){bo().Ab(a)}
function ho(a){var b=bo();if(a<0)b.pa(-a);else{var c=Yn[a];c?(b.pa(c),delete Yn[a]):window.clearTimeout(a)}}
function io(){jo()}
function jo(){window.clearTimeout($n);bo().start()}
function ko(){bo().pause();window.clearTimeout($n);$n=window.setTimeout(io,Zn)}
function lo(){window.clearTimeout(ao);ao=window.setTimeout(function(){mo(0)},Zn)}
function mo(a){lo();var b=bo();b.o=a;b.start()}
function no(a){lo();var b=bo();b.o>a&&(b.o=a,b.start())}
function oo(){window.clearTimeout(ao);var a=bo();a.o=0;a.start()}
;function po(){Kn.apply(this,arguments)}
z(po,Kn);function qo(){po.h||(po.h=new po);return po.h}
po.prototype.Wa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Em(a,c||0)};
po.prototype.pa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
po.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
po.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Sj=qo();
T("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",co),D("yt.scheduler.instance.addJob",fo),D("yt.scheduler.instance.addImmediateJob",go),D("yt.scheduler.instance.cancelJob",ho),D("yt.scheduler.instance.cancelAllJobs",eo),D("yt.scheduler.instance.start",jo),D("yt.scheduler.instance.pause",ko),D("yt.scheduler.instance.setPriorityThreshold",mo),D("yt.scheduler.instance.enablePriorityThreshold",no),D("yt.scheduler.instance.clearPriorityThreshold",oo),D("yt.scheduler.initialized",
!0));function ro(a){var b=new sk;this.h=(a=b.isAvailable()?a?new tk(b,a):b:null)?new nk(a):null;this.i=document.domain||window.location.hostname}
ro.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Ti).serialize(b))}catch(f){return}else e=escape(b);rn(a,e,c,this.i)};
ro.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=sn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ro.prototype.remove=function(a){this.h&&this.h.remove(a);tn(a,"/",this.i)};var so=function(){var a;return function(){a||(a=new ro("ytidb"));return a}}();
function to(){var a;return(a=so())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var uo=[],vo,wo=!1;function xo(){var a={};for(vo=new yo(a.handleError===void 0?zo:a.handleError,a.logEvent===void 0?Ao:a.logEvent);uo.length>0;)switch(a=uo.shift(),a.type){case "ERROR":vo.Fa(a.payload);break;case "EVENT":vo.logEvent(a.eventType,a.payload)}}
function Bo(a){wo||(vo?vo.Fa(a):(uo.push({type:"ERROR",payload:a}),uo.length>10&&uo.shift()))}
function Co(a,b){wo||(vo?vo.logEvent(a,b):(uo.push({type:"EVENT",eventType:a,payload:b}),uo.length>10&&uo.shift()))}
;function Do(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Eo(a){return a.substr(0,a.indexOf(":"))||a}
;var Fo=Xc||Yc;function Go(a){var b=Hc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Ho={},Io=(Ho.AUTH_INVALID="No user identifier specified.",Ho.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ho.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ho.MISSING_INDEX="Index not created.",Ho.MISSING_OBJECT_STORES="Object stores not created.",Ho.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ho.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Ho.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Ho.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ho.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ho.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ho.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ho),Jo={},Ko=(Jo.AUTH_INVALID="ERROR",Jo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Jo.EXPLICIT_ABORT="IGNORED",Jo.IDB_NOT_SUPPORTED="ERROR",Jo.MISSING_INDEX=
"WARNING",Jo.MISSING_OBJECT_STORES="ERROR",Jo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Jo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Jo.QUOTA_EXCEEDED="WARNING",Jo.QUOTA_MAYBE_EXCEEDED="WARNING",Jo.UNKNOWN_ABORT="WARNING",Jo.INCOMPATIBLE_DB_VERSION="WARNING",Jo),Lo={},Mo=(Lo.AUTH_INVALID=!1,Lo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Lo.EXPLICIT_ABORT=!1,Lo.IDB_NOT_SUPPORTED=!1,Lo.MISSING_INDEX=!1,Lo.MISSING_OBJECT_STORES=!1,Lo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Lo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Lo.QUOTA_EXCEEDED=!1,Lo.QUOTA_MAYBE_EXCEEDED=!0,Lo.UNKNOWN_ABORT=!0,Lo.INCOMPATIBLE_DB_VERSION=!1,Lo);function No(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Io[a]:c;d=d===void 0?Ko[a]:d;e=e===void 0?Mo[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,No.prototype)}
z(No,U);function Oo(a,b){No.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Io.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Oo.prototype)}
z(Oo,No);function Po(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Po.prototype)}
z(Po,Error);var Qo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ro(a,b,c,d){b=Eo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof No)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new No("QUOTA_EXCEEDED",a);if(Zc&&e.name==="UnknownError")return new No("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Po)return new No("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Qo.some(function(f){return e.message.includes(f)}))return new No("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new No("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",md:e.name})];e.level="WARNING";return e}
function So(a,b,c){var d=to();return new No("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function To(a){if(!a)throw Error();throw a;}
function Uo(a){return a}
function Vo(a){this.h=a}
function Wo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Wo.all=function(a){return new Wo(new Vo(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={ob:0};f.ob<a.length;f={ob:f.ob},++f.ob)Wo.resolve(a[f.ob]).then(function(g){return function(h){d[g.ob]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Wo.resolve=function(a){return new Wo(new Vo(function(b,c){a instanceof Wo?a.then(b,c):b(a)}))};
Wo.reject=function(a){return new Wo(new Vo(function(b,c){c(a)}))};
Wo.prototype.then=function(a,b){var c=this,d=a!=null?a:Uo,e=b!=null?b:To;return new Wo(new Vo(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Xo(c,c,d,f,g)}),c.i.push(function(){Yo(c,c,e,f,g)})):c.state.status==="FULFILLED"?Xo(c,c,d,f,g):c.state.status==="REJECTED"&&Yo(c,c,e,f,g)}))};
Wo.prototype.catch=function(a){return this.then(void 0,a)};
function Xo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Wo?Zo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Yo(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Wo?Zo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Zo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Wo?Zo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function $o(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function ap(a){return new Promise(function(b,c){$o(a,b,c)})}
function bp(a){return new Wo(new Vo(function(b,c){$o(a,b,c)}))}
;function cp(a,b){return new Wo(new Vo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var dp=window,V=dp.ytcsi&&dp.ytcsi.now?dp.ytcsi.now:dp.performance&&dp.performance.timing&&dp.performance.now&&dp.performance.timing.navigationStart?function(){return dp.performance.timing.navigationStart+dp.performance.now()}:function(){return(new Date).getTime()};function ep(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
p=ep.prototype;p.add=function(a,b,c){return fp(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return fp(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return fp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function gp(a,b,c){a=a.h.createObjectStore(b,c);return new hp(a)}
p.delete=function(a,b){return fp(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return fp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function ip(a,b,c){return fp(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return bp(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function fp(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,w,x;return A(function(y){switch(y.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){y.F(4);break}g++;k=Math.round(V());za(y,5);l=a.h.transaction(b,e.mode);H=y.yield;var J=new jp(l);J=kp(J,d);return H.call(y,J,7);case 7:return m=y.i,n=Math.round(V()),lp(a,k,n,g,void 0,b.join(),e),y.return(m);case 5:r=Aa(y);t=Math.round(V());w=Ro(r,
a.h.name,b.join(),a.h.version);if((x=w instanceof No&&!w.h)||g>=f)lp(a,k,t,g,w,b.join(),e),h=w;y.F(2);break;case 4:return y.return(Promise.reject(h))}})}
function lp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof No&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Co("QUOTA_EXCEEDED",{dbName:Eo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof No&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Co("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),mp(a,!1,d,f,b,g.tag),Bo(e)):mp(a,!0,d,f,b,g.tag)}
function mp(a,b,c,d,e,f){Co("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function hp(a){this.h=a}
p=hp.prototype;p.add=function(a,b){return bp(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return bp(this.h.clear()).then(function(){})};
function np(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return bp(this.h.count(a))};
function op(a,b){return pp(a,{query:b},function(c){return c.delete().then(function(){return qp(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?op(this,a):bp(this.h.delete(a))};
p.get=function(a){return bp(this.h.get(a))};
p.index=function(a){try{return new rp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Po(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function pp(a,b,c){a=a.h.openCursor(b.query,b.direction);return sp(a).then(function(d){return cp(d,c)})}
function jp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=No;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function kp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
jp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new No("EXPLICIT_ABORT");};
jp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new hp(a),this.i.set(a,b));return b};
function rp(a){this.h=a}
p=rp.prototype;p.count=function(a){return bp(this.h.count(a))};
p.delete=function(a){return tp(this,{query:a},function(b){return b.delete().then(function(){return qp(b)})})};
p.get=function(a){return bp(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function tp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return sp(a).then(function(d){return cp(d,c)})}
function up(a,b){this.request=a;this.cursor=b}
function sp(a){return bp(a).then(function(b){return b?new up(a,b):null})}
function qp(a){a.cursor.continue(void 0);return sp(a.request)}
up.prototype.delete=function(){return bp(this.cursor.delete()).then(function(){})};
up.prototype.getValue=function(){return this.cursor.value};
up.prototype.update=function(a){return bp(this.cursor.update(a))};function vp(a,b,c){return new Promise(function(d,e){function f(){r||(r=new ep(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ld,k=c.blocking,l=c.lf,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Co("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Eo(a)});var w=f(),x=new jp(g.transaction);
m&&m(w,function(y){return t.oldVersion<y&&t.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Co("IDB_UNEXPECTEDLY_CLOSED",{dbName:Eo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function wp(a,b,c){c=c===void 0?{}:c;return vp(a,b,c)}
function xp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ld)&&c.addEventListener("blocked",function(){e()}),g.yield(ap(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=Aa(g),Ro(f,a,"",-1);})}
;function yp(a,b){this.name=a;this.options=b;this.j=!0;this.D=this.o=0}
yp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return wp(a,b,c)};
yp.prototype.delete=function(a){a=a===void 0?{}:a;return xp(this.name,a)};
function zp(a,b){return new No("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Ap(a,b){if(!b)throw So("openWithToken",Eo(a.name));return a.open()}
yp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,w;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",za(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=x.i,H=c.options,J=[],N=v(Object.keys(H.ub)),P=N.next();!P.done;P=N.next()){P=P.value;var va=H.ub[P],vb=va.Ke===void 0?Number.MAX_VALUE:va.Ke;!(y.h.version>=va.Bb)||y.h.version>=vb||y.h.objectStoreNames.contains(P)||J.push(P)}k=J;if(k.length===0){x.F(5);break}l=Object.keys(c.options.ub);
m=h.objectStoreNames();if(c.D<Hm("ytidb_reopen_db_retries",0))return c.D++,h.close(),Bo(new No("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<Hm("ytidb_remake_db_retries",1))){x.F(6);break}c.o++;return x.yield(c.delete(),7);case 7:return Bo(new No("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Oo(m,l);case 5:return x.return(h);case 2:n=Aa(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.F(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=x.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,zp(c,t);return x.return(r);case 8:throw b(),n instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ro(n,c.name,"",(w=c.options.version)!=null?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw zp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,lf:b,upgrade:this.options.upgrade};return this.h=d=a()};var Bp=new yp("YtIdbMeta",{ub:{databases:{Bb:1}},upgrade:function(a,b){b(1)&&gp(a,"databases",{keyPath:"actualName"})}});
function Cp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Ap(Bp,b),2);c=d.i;return d.return(fp(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return bp(f.h.put(a,void 0)).then(function(){})})}))})}
function Dp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(Ap(Bp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Ep(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(Ap(Bp,b),2)):e.h!=3?(d=e.i,e.yield(fp(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return pp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return qp(g)})}),3)):e.return(c)})}
function Fp(a){return Ep(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Gp(a,b,c){return Ep(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Hp(a){var b,c;return A(function(d){if(d.h==1)return b=Jn("YtIdbMeta hasAnyMeta other"),d.yield(Ep(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Ip,Jp=new function(){}(new function(){});
function Kp(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=to();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Fo)f=/WebKit\/([0-9]+)/.exec(Hc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Hc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Tc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Cp(d,Jp),4);case 4:return e.yield(Dp("yt-idb-test-do-not-use",Jp),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Lp(){if(Ip!==void 0)return Ip;wo=!0;return Ip=Kp().then(function(a){wo=!1;var b;if((b=so())!=null&&b.h){var c;b={hasSucceededOnce:((c=to())==null?void 0:c.hasSucceededOnce)||a};var d;(d=so())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Mp(){return E("ytglobal.idbToken_")||void 0}
function Np(){var a=Mp();return a?Promise.resolve(a):Lp().then(function(b){(b=b?Jp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Op=0;function Pp(a,b){Op||(Op=Sj.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Np(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(Gp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.F(6);break}f=e[0];return h.yield(xp(f.actualName),7);case 7:return h.yield(Dp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=Aa(h),Bo(g),d=!1;case 4:Sj.pa(Op),Op=0,d&&Pp(a,b),h.h=0}})}))}
function Qp(){var a;return A(function(b){return b.h==1?b.yield(Np(),2):(a=b.i)?b.return(Hp(a)):b.return(!1)})}
new Dj;function Rp(a){if(!In())throw a=new No("AUTH_INVALID",{dbName:a}),Bo(a),a;var b=Jn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Sp(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Np(),2);case 2:g=m.i;if(!g)throw h=So("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Bo(h),h;Do(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Rp(a);za(m,3);return m.yield(Cp(k,g),5);case 5:return m.yield(wp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),za(m,7),m.yield(Dp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:Aa(m);case 8:throw l;}})}
function Tp(a,b,c){c=c===void 0?{}:c;return Sp(a,b,!1,c)}
function Up(a,b,c){c=c===void 0?{}:c;return Sp(a,b,!0,c)}
function Vp(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Np(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Do(a);d=Rp(a);return e.yield(xp(d.actualName,b),3)}return e.yield(Dp(d.actualName,c),0)})}
function Wp(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(xp(d.actualName,b),2):e.yield(Dp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Xp(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Np(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Do("LogsDatabaseV2");return d.yield(Fp(b),3)}c=d.i;return d.yield(Wp(c,a,b),0)})}
function Yp(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Np(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Do(a);return d.yield(xp(a,b),3)}return d.yield(Dp(a,c),0)})}
;function Zp(a,b){yp.call(this,a,b);this.options=b;Do(a)}
z(Zp,yp);function $p(a,b){var c;return function(){c||(c=new Zp(a,b));return c}}
Zp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Up:Tp)(a,b,Object.assign({},c))};
Zp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Yp:Vp)(this.name,a)};
function aq(a,b){return $p(a,b)}
;var bq={},cq=aq("ytGcfConfig",{ub:(bq.coldConfigStore={Bb:1},bq.hotConfigStore={Bb:1},bq),shared:!1,upgrade:function(a,b){b(1)&&(np(gp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),np(gp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function dq(a){return Ap(cq(),a)}
function eq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(dq(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(ip(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function fq(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(dq(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(ip(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function gq(a){var b,c;return A(function(d){return d.h==1?d.yield(dq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(fp(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return tp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function hq(a){var b,c;return A(function(d){return d.h==1?d.yield(dq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(fp(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return tp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function iq(){L.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ka(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
z(iq,L);iq.prototype.aa=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;L.prototype.aa.call(this)};function jq(){this.h=0;this.i=new iq}
function kq(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:S("RAW_HOT_CONFIG_GROUP")}
function lq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.F(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Mp();if(!d){g.F(3);break}if(c){g.F(4);break}return g.yield(hq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(eq(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function mq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.F(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Mp())?c?h.F(4):h.yield(gq(d),5):h.F(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.F(0);g=c.configData;return h.yield(fq(c,b,g,d),0)})}
function nq(){if(!jq.h){var a=new jq;jq.h=a}a=jq.h;var b=V()-a.h;if(!(a.h!==0&&b<Hm("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
jq.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function oq(){return"INNERTUBE_API_KEY"in gm&&"INNERTUBE_API_VERSION"in gm}
function pq(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),oe:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),dd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),rh:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),qe:S("INNERTUBE_CONTEXT_HL"),pe:S("INNERTUBE_CONTEXT_GL"),re:S("INNERTUBE_HOST_OVERRIDE")||"",te:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),se:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function qq(a){var b={client:{hl:a.qe,gl:a.pe,clientName:a.dd,clientVersion:a.innertubeContextClientVersion,configInfo:a.oe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Im();c.length>0&&(b.request={internalExperimentFlags:c});c=a.dd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=mn()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Gn())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=Hn())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=nq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=S("INNERTUBE_CONTEXT");var g;if(T("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=v(Object.entries(um(S("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=v(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function rq(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().ih:(a=pn(on()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var sq=typeof TextEncoder!=="undefined"?new TextEncoder:null,tq=sq?function(a){return sq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function uq(a,b){this.version=a;this.args=b}
uq.prototype.serialize=function(){return{version:this.version,args:this.args}};function vq(a,b){this.topic=a;this.h=b}
vq.prototype.toString=function(){return this.topic};var wq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Pb;M.prototype.publish=M.prototype.hb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",wq);var xq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",xq);var yq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",yq);var zq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",zq);
D("ytPubsub2Pubsub2SkipSubKey",null);function Aq(a,b){var c=Bq();c&&c.publish.call(c,a.toString(),a,b)}
function Cq(a){var b=Dq,c=Bq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(xq[d])try{if(f&&b instanceof vq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Bd){var l=new h;h.Bd=l.version}var m=h.Bd}catch(y){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var r=k.args,t=r.length;if(t>0){var w=Array(t);for(k=0;k<t;k++)w[k]=r[k];var x=w}else x=[];f=n.call(m,h,x)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){mm(y)}},zq[b.toString()]?E("yt.scheduler.instance")?Sj.oa(g):Em(g,0):g())});
xq[d]=!0;yq[b.toString()]||(yq[b.toString()]=[]);yq[b.toString()].push(d);return d}
function Eq(){var a=Fq,b=Cq(function(c){a.apply(void 0,arguments);Gq(b)});
return b}
function Gq(a){var b=Bq();b&&(typeof a==="number"&&(a=[a]),Kb(a,function(c){b.unsubscribeByKey(c);delete xq[c]}))}
function Bq(){return E("ytPubsub2Pubsub2Instance")}
;function Hq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Aq("meta_logging_csi_event",{timerName:a,Ih:b})}
;var Iq=void 0,Jq=void 0;function Kq(){Jq||(Jq=Gl(S("WORKER_SERIALIZATION_URL")));return Jq||void 0}
function Lq(){var a=Kq();Iq||a===void 0||(Iq=new Worker(ib(a),void 0));return Iq}
;var Mq=Hm("max_body_size_to_compress",5E5),Nq=Hm("min_body_size_to_compress",500),Oq=!0,Pq=0,Qq=0,Rq=Hm("compression_performance_threshold_lr",250),Sq=Hm("slow_compressions_before_abandon_count",4),Tq=!1,Uq=new Map,Vq=1,Wq=!0;function Xq(){if(typeof Worker==="function"&&Kq()&&!Tq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Uq.get(c.key);d&&(Yq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Uq.delete(c.key))}},b=Lq();
b&&(b.addEventListener("message",a),b.onerror=function(){Uq.clear()},Tq=!0)}}
function Zq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Oq)try{var g=$q(b);if(g!=null&&(g>Mq||g<Nq))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Wq||!T("initial_gzip_use_main_thread"))){Tq||Xq();var h=Lq();if(h&&!e){Uq.set(Vq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Vq});Vq++;return}}var k=Fl(tq(b));Yq(k,f,a,c,d)}}catch(l){nm(l),d(a,c)}else d(a,c)}
function Yq(a,b,c,d,e){Wq=!1;var f=V();b.ticks.gelc=f;Qq++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Rq&&(Pq++,T("abandon_compression_after_N_slow_zips")?Qq===Hm("compression_disable_point")&&Pq>Sq&&(Oq=!1):Oq=!1);ar(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function br(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Oq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=$q(g);if(h!=null&&(h>Mq||h<Nq))return a;c=b?{level:1}:void 0;f=Fl(tq(g),c);var k=V();e.ticks.gelc=k;if(b){Qq++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Rq)if(Pq++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Pq/Qq;var l=Sq/Hm("compression_disable_point");Qq>0&&Qq%Hm("compression_disable_point")===0&&b>=l&&(Oq=!1)}else Oq=!1;ar(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return nm(m),a}}else return a}
function $q(a){try{return(new Blob(a.split(""))).size}catch(b){return nm(b),null}}
function ar(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||Hq("gel_compression",a,{sampleRate:.1})}
;function cr(a){a=Object.assign({},a);delete a.Authorization;var b=tg();if(b){var c=new Wj;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=bd(c.digest(),3)}return a}
;var dr;function er(){dr||(dr=new ro("yt.innertube"));return dr}
function fr(a,b,c,d){if(d)return null;d=er().get("nextId",!0)||1;var e=er().get("requests",!0)||{};e[d]={method:a,request:b,authState:cr(c),requestTime:Math.round(V())};er().set("nextId",d+1,86400,!0);er().set("requests",e,86400,!0);return d}
function gr(a){var b=er().get("requests",!0)||{};delete b[a];er().set("requests",b,86400,!0)}
function hr(a){var b=er().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(V())-d.requestTime<6E4)){var e=d.authState,f=cr(rq(!1));Jg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),ir(a,d.method,e,{}));delete b[c]}}er().set("requests",b,86400,!0)}}
;function jr(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.mb=function(){};
this.now=Date.now;this.Eb=!1;var b;this.xd=(b=a.xd)!=null?b:100;var c;this.sd=(c=a.sd)!=null?c:1;var d;this.pd=(d=a.pd)!=null?d:2592E6;var e;this.od=(e=a.od)!=null?e:12E4;var f;this.rd=(f=a.rd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=(h=a.Xb)!=null?h:.1;var k;this.ic=(k=a.ic)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.mb&&(this.mb=a.mb);a.Eb&&(this.Eb=a.Eb);a.Ub&&(this.Ub=a.Ub);this.W=a.W;this.Ca=a.Ca;this.fa=a.fa;this.da=a.da;this.sendFn=a.sendFn;
this.Ic=a.Ic;this.Fc=a.Fc;kr(this)&&(!this.W||this.W("networkless_logging"))&&lr(this)}
function lr(a){kr(a)&&!a.Eb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.fa.Od(a.V),mr(a),a.da.ta()&&a.Ob(),a.da.listen(a.Ic,a.Ob.bind(a)),a.da.listen(a.Fc,a.Sc.bind(a)))}
p=jr.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(kr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.V).then(function(e){d.id=e;c.da.ta()&&nr(c,d)}).catch(function(e){nr(c,d);
or(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(kr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.da.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.fa.set(e,d.V).catch(function(l){or(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
or(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(kr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.lb(d.id,c.V):e=!0;c.da.bb&&c.W&&c.W("vss_network_hint")&&c.da.bb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.V).then(function(g){d.id=g;e&&c.fa.lb(d.id,c.V)}).catch(function(g){or(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.Ob=function(){var a=this;if(!kr(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.oa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.fa.Zc("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(nr(a,b),3):(a.Sc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.xd))};
p.Sc=function(){this.Ca.pa(this.i);this.i=0};
function nr(a,b){var c;return A(function(d){switch(d.h){case 1:if(!kr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.F(2);break}return d.yield(a.fa.xe(b.id,a.V),3);case 3:(c=d.i)||a.mb(Error("The request cannot be found in the database."));case 2:if(pr(a,b,a.pd)){d.F(4);break}a.mb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.F(5);break}return d.yield(a.fa.lb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=qr(a,
b));if(!b){d.F(0);break}if(!b.skipRetry||b.id===void 0){d.F(8);break}return d.yield(a.fa.lb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function qr(a,b){if(!kr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=rr(f);(h=sr(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ic)){m.F(2);break}if(!a.da.lc){m.F(3);break}return m.yield(a.da.lc(),3);case 3:if(a.da.ta()){m.F(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.F(6);
break}return m.yield(a.fa.Jc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.ic)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.F(8);break}return b.sendCount<a.sd?m.yield(a.fa.Jc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.fa.lb(b.id,a.V),8);case 12:a.Ca.oa(function(){a.da.ta()&&a.Ob()},a.rd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.F(2):h.yield(a.fa.lb(b.id,a.V),2);a.da.bb&&a.W&&a.W("vss_network_hint")&&a.da.bb(!0);d(e,f);h.h=0})};
return b}
function pr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function mr(a){if(!kr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Zc("QUEUED",a.V).then(function(b){b&&!pr(a,b,a.od)?a.Ca.oa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.F(2):c.yield(a.fa.Jc(b.id,a.V),2);mr(a);c.h=0})}):a.da.ta()&&a.Ob()})}
function or(a,b){a.Ed&&!a.da.ta()?a.Ed(b):a.handleError(b)}
function kr(a){return!!a.V||a.Ub}
function rr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function sr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var tr;
function ur(){if(tr)return tr();var a={};tr=aq("LogsDatabaseV2",{ub:(a.LogsRequestsStore={Bb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&gp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),np(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return tr()}
;function vr(a){return Ap(ur(),a)}
function wr(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(vr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(ip(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();xr(c);return g.return(f)})}
function yr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(vr(b),2);if(m.h!=3)return d=m.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(fp(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return tp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=V();xr(c);return m.return(l)})}
function zr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(vr(b),2);c=d.i;return d.return(fp(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",bp(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Ar(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(vr(b),2);e=f.i;return f.return(fp(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),bp(h.h.put(k,void 0)).then(function(){return k})):Wo.resolve(void 0)})}))})}
function Br(a,b){var c;return A(function(d){if(d.h==1)return d.yield(vr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Cr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(vr(a),2);b=d.i;c=V()-2592E6;return d.yield(fp(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return pp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return qp(f)})})}),0)})}
function Dr(){A(function(a){return a.yield(Xp(),0)})}
function xr(a){T("nwl_csi_killswitch")||Hq("networkless_performance",a,{sampleRate:1})}
;var Er={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506};var Fr={},Gr=aq("ServiceWorkerLogsDatabase",{ub:(Fr.SWHealthLog={Bb:1},Fr),shared:!0,upgrade:function(a,b){b(1)&&np(gp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Hr(a){return Ap(Gr(),a)}
function Ir(a){var b,c;A(function(d){if(d.h==1)return d.yield(Hr(a),2);b=d.i;c=V()-2592E6;return d.yield(fp(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return pp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return qp(f)})})}),0)})}
function Jr(a){var b;return A(function(c){if(c.h==1)return c.yield(Hr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Kr={},Lr=0;function Mr(a){var b=new Image,c=""+Lr++;Kr[c]=b;b.onload=b.onerror=function(){delete Kr[c]};
b.src=a}
;var Nr;function Or(){Nr||(Nr=new ro("yt.offline"));return Nr}
function Pr(a){if(T("offline_error_handling")){var b=Or().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Or().set("errors",b,2592E3,!0)}}
;function Qr(){this.h=new Map;this.i=!1}
function Rr(){if(!Qr.h){var a=E("yt.networkRequestMonitor.instance")||new Qr;D("yt.networkRequestMonitor.instance",a);Qr.h=a}return Qr.h}
Qr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Qr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Qr.prototype.removeParams=function(a){return a.split("?")[0]};
Qr.prototype.removeParams=Qr.prototype.removeParams;Qr.prototype.isEndpointCFR=Qr.prototype.isEndpointCFR;Qr.prototype.requestComplete=Qr.prototype.requestComplete;Qr.getInstance=Rr;function Sr(){hi.call(this);var a=this;this.j=!1;this.i=Rj();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Or().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;mm(d)}Or().set("errors",{},2592E3,!0)}}})}
z(Sr,hi);function Tr(){if(!Sr.h){var a=E("yt.networkStatusManager.instance")||new Sr;D("yt.networkStatusManager.instance",a);Sr.h=a}return Sr.h}
p=Sr.prototype;p.ta=function(){return this.i.ta()};
p.bb=function(a){this.i.i=a};
p.ee=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.Vd=function(){this.j=!0};
p.listen=function(a,b){return this.i.listen(a,b)};
p.lc=function(a){a=Pj(this.i,a);a.then(function(b){T("use_cfr_monitor")&&Rr().requestComplete("generate_204",b)});
return a};
Sr.prototype.sendNetworkCheckRequest=Sr.prototype.lc;Sr.prototype.listen=Sr.prototype.listen;Sr.prototype.enableErrorFlushing=Sr.prototype.Vd;Sr.prototype.getWindowStatus=Sr.prototype.ee;Sr.prototype.networkStatusHint=Sr.prototype.bb;Sr.prototype.isNetworkAvailable=Sr.prototype.ta;Sr.getInstance=Tr;function Ur(a){a=a===void 0?{}:a;hi.call(this);var b=this;this.i=this.u=0;this.j=Tr();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Vr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Vr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ii(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ii(b,"publicytnetworkstatus-offline")})))}
z(Ur,hi);Ur.prototype.ta=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Ur.prototype.bb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Ur.prototype.lc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Rr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.bb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Vr(a,b){a.rateLimit?a.i?(Sj.pa(a.u),a.u=Sj.oa(function(){a.o!==b&&(ii(a,b),a.o=b,a.i=V())},a.rateLimit-(V()-a.i))):(ii(a,b),a.o=b,a.i=V()):ii(a,b)}
;var $r;function as(){var a=jr.call;$r||($r=new Ur({wh:!0,ph:!0}));a.call(jr,this,{fa:{Od:Cr,lb:Br,Zc:yr,xe:zr,Jc:Ar,set:wr},da:$r,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;nm(new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else mm(b)},
mb:nm,sendFn:bs,now:V,Ed:Pr,Ca:qo(),Ic:"publicytnetworkstatus-online",Fc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,ic:Hm("potential_esf_error_limit",10),W:T,Eb:!(In()&&cs())});this.j=new Dj;T("networkless_immediately_drop_all_requests")&&Dr();Yp("LogsDatabaseV2")}
z(as,jr);function ds(){var a=E("yt.networklessRequestController.instance");a||(a=new as,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&Np().then(function(b){a.V=b;lr(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.V&&Ir(a.V);T("networkless_immediately_drop_sw_health_store")&&es(a)}));
return a}
as.prototype.writeThenSend=function(a,b){b||(b={});b=gs(a,b);In()||(this.h=!1);jr.prototype.writeThenSend.call(this,a,b)};
as.prototype.sendThenWrite=function(a,b,c){b||(b={});b=gs(a,b);In()||(this.h=!1);jr.prototype.sendThenWrite.call(this,a,b,c)};
as.prototype.sendAndWrite=function(a,b){b||(b={});b=gs(a,b);In()||(this.h=!1);jr.prototype.sendAndWrite.call(this,a,b)};
as.prototype.awaitInitialization=function(){return this.j.promise};
function es(a){var b;A(function(c){if(!a.V)throw b=So("clearSWHealthLogsDb"),b;return c.return(Jr(a.V).catch(function(d){a.handleError(d)}))})}
function bs(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&hs(a,b);if(T("use_request_time_ms_header"))b.headers&&ym(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Mm(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Mm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new ab({url:a});if(k.j&&k.i||k.o){var l=Yb(Zb(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(hc),r=fc(a,0,"ri",n);if(r<0)var t=null;else{var w=a.indexOf("&",r);if(w<0||w>n)w=n;t=decodeURIComponent(a.slice(r+3,w!==-1?w:0).replace(/\+/g," "))}m=t!=="1"}var x=!m;break b}}catch(H){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(H){}y=!1}c=y?!0:!1}else c=
!1;c||Mr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Zq(a,b.postBody,b,Qm,d)):Zq(a,JSON.stringify(b.postParams),b,Pm,d):Qm(a,b)}
function gs(a,b){T("use_event_time_ms_header")&&ym(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function hs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Rr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Rr().requestComplete(a,!0);d(e,f)}}
function cs(){return $b(document.location.toString())!=="www.youtube-nocookie.com"}
;var is=!1,js=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:is};D("ytNetworklessLoggingInitializationOptions",js);function ks(){var a;A(function(b){if(b.h==1)return b.yield(Np(),2);a=b.i;if(!a||!In()&&!T("nwl_init_require_datasync_id_killswitch")||!cs())return b.F(0);is=!0;js.isNwlInitialized=is;return b.yield(ds().awaitInitialization(),0)})}
;function ls(a){var b=this;this.config_=null;a?this.config_=a:oq()&&(this.config_=pq());Ln(function(){hr(b)},5E3)}
ls.prototype.isReady=function(){!this.config_&&oq()&&(this.config_=pq());return!!this.config_};
function ir(a,b,c,d){function e(w){w=w===void 0?!1:w;var x;if(d.retry&&h!="www.youtube-nocookie.com"&&(w||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(x=fr(b,c,l,k)),x)){var y=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(P,va){gr(x);y(P,va)};
c.onFetchSuccess=function(P,va){gr(x);H(P,va)}}try{if(w&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?ds().writeThenSend(t,g):ds().sendAndWrite(t,g);
else if(d.compress){var J=!d.networklessOptions.writeThenSend;if(g.postBody){var N=g.postBody;typeof N!=="string"&&(N=JSON.stringify(g.postBody));Zq(t,N,g,Qm,J)}else Zq(t,JSON.stringify(g.postParams),g,Pm,J)}else T("web_all_payloads_via_jspb")?Qm(t,g):Pm(t,g)}catch(P){if(P.name==="InvalidAccessError")x&&(gr(x),x=0),nm(Error("An extension is blocking network request."));else throw P;}x&&Ln(function(){hr(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&nm(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);mm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(w,x){if(d.onSuccess)d.onSuccess(x)},
onFetchSuccess:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,x){if(d.onError)d.onError(x)},
onFetchError:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.re)&&(h=f);var k=a.config_.te||!1,l=rq(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,n={alt:"json"},r=!(!a.config_.se||!f);r=r&&f.startsWith("Bearer");T("web_yt_net_omit_api_key")&&(r=!0);r||(n.key=a.config_.innertubeApiKey);
var t=xm(""+h+m,n||{},!0);(E("ytNetworklessLoggingInitializationOptions")?js.isNwlInitialized:is)?Lp().then(function(w){e(w)}):e(!1)}
;var ms=0,ns=Vc?"webkit":Uc?"moz":Sc?"ms":Rc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++ms});var ps={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function qs(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ps||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function rs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
qs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
qs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
qs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Fg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Fg);var ss=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",ss);
function ts(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Eg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&Jg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function us(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ts(a,b,c,d);if(e)return e;e=++ss.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new qs(h);if(!Sg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new qs(h);
h.currentTarget=a;return c.call(a,h)};
g=lm(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),vs()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Fg[e]=[a,b,c,g,d];return e}
function ws(a){a&&(typeof a=="string"&&(a=[a]),Kb(a,function(b){if(b in Fg){var c=Fg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?vs()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Fg[b]}}))}
var vs=wi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function xs(a){this.H=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=us(window,"mousemove",Wa(this.Y,this));a=Wa(this.M,this);typeof a==="function"&&(a=lm(a));this.Z=window.setInterval(a,25)}
Za(xs,L);xs.prototype.Y=function(a){a.h===void 0&&rs(a);var b=a.h;a.i===void 0&&rs(a);this.h=new Bg(b,a.i)};
xs.prototype.M=function(){if(this.h){var a=V();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.H();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
xs.prototype.aa=function(){window.clearInterval(this.Z);ws(this.U)};var ys={};
function zs(a){var b=a===void 0?{}:a;a=b.Ge===void 0?!1:b.Ge;b=b.Wd===void 0?!0:b.Wd;if(E("_lact",window)==null){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&As();us(document,"keydown",As);us(document,"keyup",As);us(document,"mousedown",As);us(document,"mouseup",As);a?us(window,"touchmove",function(){Bs("touchmove",200)},{passive:!0}):(us(window,"resize",function(){Bs("resize",200)}),b&&us(window,"scroll",function(){Bs("scroll",200)}));
new xs(function(){Bs("mouse",100)});
us(document,"touchstart",As,{passive:!0});us(document,"touchend",As,{passive:!0})}}
function Bs(a,b){ys[a]||(ys[a]=!0,Sj.oa(function(){As();ys[a]=!1},b))}
function As(){E("_lact",window)==null&&zs();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Cs(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Ds=C.ytPubsubPubsubInstance||new M,Es=C.ytPubsubPubsubSubscribedKeys||{},Fs=C.ytPubsubPubsubTopicToKeys||{},Gs=C.ytPubsubPubsubIsSynchronous||{};function Hs(a,b){var c=Is();if(c&&b){var d=c.subscribe(a,function(){function e(){Es[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Gs[a]?e():Em(e,0)}catch(g){mm(g)}},void 0);
Es[d]=!0;Fs[a]||(Fs[a]=[]);Fs[a].push(d);return d}return 0}
function Js(a){var b=Is();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Kb(a,function(c){b.unsubscribeByKey(c);delete Es[c]}))}
function Ks(a,b){var c=Is();c&&c.publish.apply(c,arguments)}
function Ls(a){var b=Is();if(b)if(b.clear(a),a)Ms(a);else for(var c in Fs)Ms(c)}
function Is(){return C.ytPubsubPubsubInstance}
function Ms(a){Fs[a]&&(a=Fs[a],Kb(a,function(b){Es[b]&&delete Es[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Pb;M.prototype.publish=M.prototype.hb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",Ds);D("ytPubsubPubsubTopicToKeys",Fs);D("ytPubsubPubsubIsSynchronous",Gs);D("ytPubsubPubsubSubscribedKeys",Es);var Ns=Symbol("injectionDeps");function Os(a){this.name=a}
Os.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ps(a){this.key=a}
function Qs(){this.i=new Map;this.j=new Map;this.h=new Map}
function Rs(a,b){a.i.set(b.kc,b);var c=a.j.get(b.kc);if(c)try{c.Eh(a.resolve(b.kc))}catch(d){c.Ch(d)}}
Qs.prototype.resolve=function(a){return a instanceof Ps?Ss(this,a.key,[],!0):Ss(this,a,[])};
function Ss(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Ad!==void 0)var e=d.Ad;else if(d.tf)e=d[Ns]?Ts(a,d[Ns],c):[],e=d.tf.apply(d,ka(e));else if(d.zd){e=d.zd;var f=e[Ns]?Ts(a,e[Ns],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Hh||a.h.set(b,e);return e}
function Ts(a,b,c){return b?b.map(function(d){return d instanceof Ps?Ss(a,d.key,c,!0):Ss(a,d,c)}):[]}
;var Us;function Vs(){Us||(Us=new Qs);return Us}
;var Ws=window;function Xs(){var a,b;return"h5vcc"in Ws&&((a=Ws.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Ws.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Ws&&Ws.performance.mark&&Ws.performance.measure?2:0}
function Ys(a){var b=Xs();switch(b){case 1:Ws.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ws.performance.mark(a+"-start");break;case 0:break;default:Bb(b,"unknown trace type")}}
function Zs(a){var b=Xs();switch(b){case 1:Ws.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Ws.performance.mark(c);Ws.performance.measure(a,b,c);break;case 0:break;default:Bb(b,"unknown trace type")}}
;var $s=T("web_enable_lifecycle_monitoring")&&Xs()!==0,at=T("web_enable_lifecycle_monitoring");function bt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?qo():d;this.j=c;this.scheduler=d;this.i=new Dj;this.h=a;for(a={Ya:0};a.Ya<this.h.length;a={hc:void 0,Ya:a.Ya},a.Ya++)a.hc=this.h[a.Ya],c=function(e){return function(){e.hc.xc();b.h[e.Ya].jc=!0;b.h.every(function(f){return f.jc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.hc),d=this.scheduler.Wa(c,d),this.h[a.Ya]=Object.assign({},a.hc,{xc:c,
jobId:d})}
function ct(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.jc||(a.scheduler.pa(c.jobId),a.scheduler.Wa(c.xc,10))}
bt.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.jc||this.scheduler.pa(b.jobId),b.jc=!0;this.i.resolve()};
bt.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function dt(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};$s&&Ys(this.state)}
p=dt.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;$s&&Zs(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(ct(this.j),this.j=void 0);et(this,a,b);this.state=a;$s&&Ys(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(ft(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function ft(a,b){var c=b.filter(function(e){return gt(a,e)===10}),d=b.filter(function(e){return gt(a,e)!==10});
return a.B.Gh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Ne.apply(a,[c].concat(ka(e))),2);a.ud.apply(a,[d].concat(ka(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Oe.apply(a,[c].concat(ka(e)));a.ud.apply(a,[d].concat(ka(e)))}}
p.Oe=function(a){for(var b=B.apply(1,arguments),c=qo(),d=v(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.Ab(function(g){return function(){ht(g.Gb.name);g.Gb.callback.apply(g.Gb,ka(b));jt(g.Gb.name)}}(f))};
p.Ne=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=qo(),d=v(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.F(0);f.qb=e.value;f.Sb=void 0;g=function(k){return function(){ht(k.qb.name);var l=k.qb.callback.apply(k.qb,ka(b));typeof(l==null?void 0:l.then)==="function"?k.Sb=l.then(function(){jt(k.qb.name)}):jt(k.qb.name)}}(f);
c.Ab(g);return f.Sb?h.yield(f.Sb,3):h.F(3)}f={qb:void 0,Sb:void 0};e=d.next();return h.F(2)})};
p.ud=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{xc:function(){ht(e.name);e.callback.apply(e,ka(b));jt(e.name)},
priority:gt(c,e)}});
d.length&&(this.j=new bt(d))};
function gt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function ht(a){$s&&a&&Ys(a)}
function jt(a){$s&&a&&Zs(a)}
function et(a,b,c){at&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(dt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function kt(a){dt.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.D},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var lt;z(kt,dt);kt.prototype.i=function(a,b){var c=this;this.h=Ln(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
kt.prototype.D=function(a,b){this.h&&(Sj.pa(this.h),this.h=null);a(b==null?void 0:b.event)};
function mt(){lt||(lt=new kt);return lt}
;var nt=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return nt});function ot(){this.store={};this.h={}}
ot.prototype.storePayload=function(a,b){a=pt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
ot.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=qt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
ot.prototype.extractMatchingEntries=function(a){a=qt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
ot.prototype.getSequenceCount=function(a){a=qt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function qt(a,b){var c=pt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&pt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(rt(b.auth,g[0])){var h=b.isJspb;rt(h===void 0?"undefined":h?"true":"false",g[1])&&rt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),rt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function rt(a,b){return a===void 0||a==="undefined"?!0:a===b}
ot.prototype.getSequenceCount=ot.prototype.getSequenceCount;ot.prototype.extractMatchingEntries=ot.prototype.extractMatchingEntries;ot.prototype.smartExtractMatchingEntries=ot.prototype.smartExtractMatchingEntries;ot.prototype.storePayload=ot.prototype.storePayload;function pt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function st(a,b){if(a)return a[b.name]}
;var tt=Hm("initial_gel_batch_timeout",2E3),ut=Hm("gel_queue_timeout_max_ms",6E4),vt=Hm("gel_min_batch_size",5),wt=void 0;function xt(){this.o=this.h=this.i=0;this.j=!1}
var zt=new xt,At=new xt,Bt=new xt,Ct=new xt,Dt,Et=!0,Ft=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Ft);var Gt={};function Ht(){var a=E("yt.logging.ims");a||(a=new ot,D("yt.logging.ims",a));return a}
function It(a,b){if(a.endpoint==="log_event"){Jt();var c=Kt(a),d=Lt(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=Er[d||""];var f,g,h,k=Vs().resolve(new Ps(jq))==null?void 0:(f=kq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=Mt(e.tier);if(k===400){Nt(a,b);return}}Gt[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};Ht().storePayload(e,a.payload);Ot(b,c,e,d==="gelDebuggingEvent")}}
function Ot(a,b,c,d){function e(){Pt({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(wt=new a);a=Hm("tvhtml5_logging_max_batch_ads_fork")||Hm("tvhtml5_logging_max_batch")||Hm("web_logging_max_batch")||100;var g=V(),h=Qt(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=Ht().getSequenceCount(c));d>=1E3?e():d>=a?Dt||(Dt=Rt(function(){e();Dt=void 0},0)):g-k>=10&&(St(f,c.tier),h.o=g)}
function Nt(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&Ht().storePayload({isJspb:!1},a.payload);Jt();var c=Kt(a),d=new Map;d.set(c,[a.payload]);var e=Lt(a.payload)||"";b&&(wt=new b);return new xi(function(f,g){wt&&wt.isReady()?Tt(d,wt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Kt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Ft[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Pt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new xi(function(e,f){var g=Qt(c,d),h=g.j;g.j=!1;Ut(g.i);Ut(g.h);g.h=0;wt&&wt.isReady()?d===void 0&&T("enable_web_tiered_gel")?Vt(e,f,a,b,c,300,h):Vt(e,f,a,b,c,d,h):(St(c,d),e())})}
function Vt(a,b,c,d,e,f,g){var h=wt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?Ht().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ht().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(Gt)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?Ht().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Ht().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Gt[l];Tt(k,h,a,b,c,!1,g)}
function St(a,b){function c(){Pt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Qt(a,b),e=d===Ct||d===Bt?5E3:ut;T("web_gel_timeout_cap")&&!d.h&&(e=Rt(function(){c()},e),d.h=e);
Ut(d.i);e=S("LOGGING_BATCH_TIMEOUT",Hm("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Et&&(e=tt);e=Rt(function(){Hm("gel_min_batch_size")>0?Ht().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=vt&&c():c()},e);
d.i=e}
function Tt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(V()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var m=a.next();for(g={};!m.done;g={Ec:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Hc:void 0,Gc:void 0},m=a.next()){var n=v(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Lg({context:qq(b.config_||pq())});if(!Pa(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Ft[m])&&
Wt(g.batchRequest,m,n);delete Ft[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Xt(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Hc=function(r){T("start_client_gcf")&&Sj.oa(function(){return A(function(t){return t.yield(Yt(r),0)})});
k--;k||c()};
g.Ec=0;g.Gc=function(r){return function(){r.Ec++;if(e.bypassNetworkless&&r.Ec===1)try{ir(b,l,r.batchRequest,Zt({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Hc,r.Gc,f)),Et=!1}catch(t){mm(t),d()}k--;k||c()}}(g);
try{ir(b,l,g.batchRequest,Zt(e,g.dangerousLogToVisitorSession,g.Hc,g.Gc,f)),Et=!1}catch(r){mm(r),d()}}}
function Zt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,kh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};$t()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Xt(a,b,c){$t()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),hm("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Wt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Jt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Gm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(nt=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",nt),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function $t(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Rt(a,b){return T("transport_use_scheduler")===!1?Em(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Ln(function(){if(mt().currentState==="none")a();else{var c={};mt().install((c.none={callback:a},c))}},b):Ln(a,b)}
function Ut(a){T("transport_use_scheduler")?Sj.pa(a):window.clearTimeout(a)}
function Yt(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=st(d,Kl),g=(f=d)==null?void 0:f.hotHashData,h=st(d,Jl),l=(k=d)==null?void 0:k.coldHashData,(m=Vs().resolve(new Ps(jq)))?g?e?n.yield(lq(m,g,e),2):n.yield(lq(m,g),2):n.F(2):n.return()):l?h?n.yield(mq(m,l,h),0):n.yield(mq(m,l),0):n.F(0)})}
function Qt(a,b){b=b===void 0?200:b;return a?b===300?Ct:At:b===300?Bt:zt}
function Lt(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Er[b])return b}
function Mt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var au=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",au);
function bu(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Cs();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,au[b]=b in au?au[b]+1:0,a.sequence={index:au[b],groupKey:b},d.endOfSequence&&delete au[d.sequenceGroup]);(d.sendIsolatedPayload?Nt:It)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Ao(a,b,c){c=c===void 0?{}:c;var d=ls;S("ytLoggingEventsDefaultDisabled",!1)&&ls===ls&&(d=null);bu(a,b,d,c)}
;function cu(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var du=new Set,eu=0,fu=0,gu=0,hu=[],iu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function zo(a){ju(a)}
function ku(a){ju(a,"WARNING")}
function lu(a){a instanceof Error?ju(a):(a=Qa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",ku(a))}
function ju(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(eu>=5))){d=hu;var k=Sb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=hn(a.args[r],"params."+r,c,n),
n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var w="params."+r,x=kn(t[r]);c[w]=x;n+=w.length+x.length;if(n>500)break}}else c.params=kn(t)}if(d.length)for(r=0;r<d.length&&!(n=hn(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=dn();c=v(a.Sa);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.xh)){a=d.weight;break a}a=v(a.Pa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=v(Zm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.fc[r.name])for(e=v(c.fc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Cc(f);break}r.params||(r.params={});a=dn();r.params["params.errorServiceSignature"]="msg="+a.Sa.length+"&cb="+a.Pa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Og(Pg,"sample")).constructor!==Og&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(r);if(r.sampleWeight!==0&&!du.has(r.message)){if(g&&T("web_enable_error_204"))mu(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(en.hb("handleError",r),T("record_app_crashed_web")&&gu===0&&r.sampleWeight===1&&(gu++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),Ao("appCrashed",g)),fu++):b==="WARNING"&&en.hb("handleWarning",r);if(T("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=v(iu);for(c=a.next();!c.done;c=a.next())if(Go(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,
sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!im("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=v(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Ao("clientError",h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&Pt(void 0,void 0,!1))}T("suppress_error_204_logging")||mu(b,r)}try{du.add(r.message)}catch(y){}eu++}}}
function mu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Qm(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function nu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ka(b))}
;function ou(){this.register=new Map}
function pu(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Bh("ABORTED")}
ou.prototype.clear=function(){pu(this);this.register.clear()};
var qu=new ou;var ru=Date.now().toString();
function su(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(ru)for(a=1,b=0;b<ru.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ru.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var tu,uu=C.ytLoggingDocDocumentNonce_;uu||(uu=su(),D("ytLoggingDocDocumentNonce_",uu));tu=uu;function vu(a){this.h=a}
p=vu.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new Ml;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&pf(a,2,re(this.h.veType)),this.h.veCounter!==void 0&&pf(a,6,re(this.h.veCounter)),this.h.elementIndex!==void 0&&pf(a,3,re(this.h.elementIndex)),this.h.isCounterfactual&&pf(a,5,ne(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Cf(a,Ml,7,b)}this.h.youtubeData!==void 0&&Cf(a,Ll,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function wu(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function xu(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},hm("client-screen-nonce-store",c));c[b]=a}
function yu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function zu(a){return S(yu(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",zu);function Au(){var a=S("csn-to-ctt-auth-info");a||(a={},hm("csn-to-ctt-auth-info",a));return a}
function Bu(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Cu(a){a=wu(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Cu);function Du(a,b,c){var d=Au();(c=Cu(c))&&delete d[c];b&&(d[a]=b)}
function Eu(a){return Au()[a]}
D("yt_logging_screen.getCttAuthInfo",Eu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==wu(c)||b!==S(yu(c)))if(Du(a,d,c),xu(a,c),hm(yu(c),b),b=function(){setTimeout(function(){a&&Ao("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:tu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Fu(){var a=Kg(Gu),b;return(new xi(function(c,d){a.onSuccess=function(e){Dm(e)?c(new Hu(e)):d(new Iu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Iu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Iu("Request timed out","net.timeout",e))};
b=Qm("//googleads.g.doubleclick.net/pagead/id",a)})).nc(function(c){if(c instanceof Ei){var d;
(d=b)==null||d.abort()}return Ci(c)})}
function Iu(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
z(Iu,$a);function Hu(a){this.xhr=a}
;function Ju(){this.h=0;this.i=null}
Ju.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:Ku(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:Lu(a):this};
Ju.prototype.getValue=function(){return this.i};
Ju.prototype.isRejected=function(){return this.h==2};
Ju.prototype.$goog_Thenable=!0;function Lu(a){var b=new Ju;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function Ku(a){var b=new Ju;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function Mu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:ym(a)?"same-origin":"cors",credentials:ym(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Nu(){return rg()||(Xc||Yc)&&Go("applewebkit")&&!Go("version")&&(!Go("safari")||Go("gsa/"))||Wc&&Go("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Ou(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Ql)if(Ql[d]==c.embeddedPlayerMode){b=Ql[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Pu(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Qu;this.isTimeout=a instanceof Iu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Ei}
z(Pu,$a);Pu.prototype.name="BiscottiError";function Qu(){$a.call(this,"Biscotti ID is missing from server")}
z(Qu,$a);Qu.prototype.name="BiscottiMissingError";var Gu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ru=null;function Su(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Nu())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if(Ig(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Ou(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function am(){var a=Su();if(a!==void 0)return Ci(a);Ru||(Ru=Fu().then(Tu).nc(function(b){return Uu(2,b)}));
return Ru}
function Tu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Qu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Qu;a=a.id;bm(a);Ru=Ku(a);Vu(18E5,2);return a}
function Uu(a,b){b=new Pu(b);bm("");Ru=Lu(b);a>0&&Vu(12E4,a-1);throw b;}
function Vu(a,b){Em(function(){Fu().then(Tu,function(c){return Uu(b,c)}).nc(vi)},a)}
function Wu(){try{var a=E("yt.ads.biscotti.getId_");return a?a():am()}catch(b){return Ci(b)}}
;var yb=ha(["data-"]);function Xu(a){a&&(a.dataset?a.dataset[Yu()]="true":Ab(a))}
function Zu(a){return a?a.dataset?a.dataset[Yu()]:a.getAttribute("data-loaded"):null}
var $u={};function Yu(){return $u.loaded||($u.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function av(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Kg(b);this.assets=a.assets||{};this.attrs=a.attrs||Kg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
av.prototype.clone=function(){var a=new av,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Oa(c)=="object"?a[b]=Kg(c):a[b]=c}return a};var bv=["share/get_share_panel"],cv=["share/get_web_player_share_panel"],dv=["feedback"],ev=["notification/modify_channel_preference"],fv=["browse/edit_playlist"],gv=["subscription/subscribe"],hv=["subscription/unsubscribe"];var iv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",iv);function jv(a){cm(iv,arguments)}
;function kv(a,b,c){lv(a,b,c===void 0?null:c)}
function mv(a){a=nv(a);var b=document.getElementById(a);b&&(Ls(a),b.parentNode.removeChild(b))}
function ov(a,b){a&&b&&(a=""+Ra(b),(a=pv[a])&&Js(a))}
function lv(a,b,c){c=c===void 0?null:c;var d=nv(a),e=document.getElementById(d),f=e&&Zu(e),g=e&&!f;f?b&&b():(b&&(f=Hs(d,b),b=""+Ra(b),pv[b]=f),g||(e=qv(a,d,function(){Zu(e)||(Xu(e),Ks(d),Em(function(){Ls(d)},0))},c)))}
function qv(a,b,c,d){d=d===void 0?null:d;var e=Rg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ib(e,Hl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function nv(a){var b=document.createElement("a");wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Wb(a)}
var pv={};function rv(a){var b=sv(a),c=document.getElementById(b),d=c&&Zu(c);d||c&&!d||(c=tv(a,b,function(){if(!Zu(c)){Xu(c);Ks(b);var e=Xa(Ls,b);Em(e,0)}}))}
function tv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Hl(a);Db(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function sv(a){var b=Rg("A");wb(b,new ob(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Wb(a)}
;function uv(a){var b=B.apply(1,arguments);if(!vv(a)||b.some(function(d){return!vv(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())wv(a,c.value)}
function wv(a,b){for(var c in b)if(vv(b[c])){if(c in a&&!vv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});wv(a[c],b[c])}else if(xv(b[c])){if(c in a&&!xv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);yv(a[c],b[c])}else a[c]=b[c];return a}
function yv(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,vv(c)?a.push(wv({},c)):xv(c)?a.push(yv([],c)):a.push(c);return a}
function vv(a){return typeof a==="object"&&!Array.isArray(a)}
function xv(a){return typeof a==="object"&&Array.isArray(a)}
;var zv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Av(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=$b(window.location.href);e&&d.push(e);e=$b(a);if(Jb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),wb(d,a),a=d.href)if(a=ac(a),a=bc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Cu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Bv(a,b,f)}else Bv(a,b)}
function Bv(a,b,c){a=Cv(a);b=b?dc(b):"";c=c||5;Nu()&&rn(a,b,c)}
function Cv(a){for(var b=v(zv),c=b.next();!c.done;c=b.next())a=jc(a,c.value);return"ST-"+Wb(a).toString(36)}
;function Dv(a){uq.call(this,1,arguments);this.csn=a}
z(Dv,uq);var Dq=new vq("screen-created",Dv),Ev=[],Fv=0,Gv=new Map,Hv=new Map,Iv=new Map;
function Jv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Kv({cttAuthInfo:Eu(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Gg(k)||!k.trackingParams&&!k.veType)&&ku(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Lv(h,b);if(k.veType&&!Hv.has(l)&&!Iv.has(l)&&!e){if(!T("il_attach_cache_limit")||Gv.size<1E3){Gv.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&Gv.size>1E3&&ku(new U("IL Attach cache exceeded limit"))}h=Lv(c,b);Gv.has(h)?
Mv(c,b):Iv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Mb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Nv("visualElementAttached",f,c):a?bu("visualElementAttached",c,a,f):Ao("visualElementAttached",c,f)}
function Nv(a,b,c){Ev.push({Fe:a,payload:c,th:void 0,options:b});Fv||(Fv=Eq())}
function Fq(a){if(Ev){for(var b=v(Ev),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Ao(c.Fe,c.payload,c.options));Ev.length=0}Fv=0}
function Lv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Mv(a,b){a=Lv(a,b);Gv.has(a)&&(b=Gv.get(a)||[],Jv(b[0],b[1],b[2],[b[3]],!0),Gv.delete(a))}
function Kv(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Ov(){try{return!!self.localStorage}catch(a){return!1}}
;function Pv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Qv(a){if(Ov()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Pv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Rv(){if(!Ov())return!1;var a=Jn(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Pv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Sv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Tv(a){if(S("LOGGED_IN",!0)&&Sv()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=$b(window.location.href);c&&b.push(c);c=$b(a);Jb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=ac(a),(b=bc(b))?(b=Cv(b),b=(b=sn(b)||null)?um(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Sv()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Av(a,b)}}
;function Uv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Av(a,b);if(c)return!1;Tv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=ec(a,e);Tv(a);f=a+f;var h=h===void 0?sb:h;a:if(h=h===void 0?sb:h,f instanceof ob)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof qb&&b.ue(f)){h=new ob(f);break a}h=void 0}g=g.location;h=ub(h||pb);h!==void 0&&(g.href=h);return!0}
;function Vv(a){if(Ig(S("PLAYER_VARS",{}))!="1"){a&&$l();try{Wu().then(function(){},function(){}),Em(Vv,18E5)}catch(b){mm(b)}}}
;var Wv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Xv(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=Yb(Zb(5,a));if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=wm(a).theme;return Wv.get(c)||null}catch(d){}return null}
;function Yv(){this.h={};if(this.i=un()){var a=sn("CONSISTENCY");a&&Zv(this,{encryptedTokenJarContents:a})}}
Yv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ma.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Zv(this,a)}};
function Zv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&rn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var $v=window.location.hostname.split(".").slice(-2).join(".");function aw(){this.j=-1;var a=S("LOCATION_PLAYABILITY_TOKEN");S("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=bw(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var cw;function dw(){cw=E("yt.clientLocationService.instance");cw||(cw=new aw,D("yt.clientLocationService.instance",cw));return cw}
p=aw.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,S("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=bw(this))&&this.h.set("yt-location-playability-token",a,15552E3):rn("YT_CL",JSON.stringify({loctok:a}),15552E3,$v,!0))};
function bw(a){return a.h===void 0?new ro("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=bw(this))&&this.h.remove("yt-location-playability-token"):tn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;S("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function ew(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function fw(){this.h={}}
fw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
fw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
fw.prototype.set=function(a,b){this.h[a]=b};
fw.prototype.remove=function(a){delete this.h[a]};function gw(){this.mappings=new fw}
gw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
gw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Bb(b)}}return a};
new gw;function hw(a){return function(){return new a}}
;var iw={},jw=(iw.WEB_UNPLUGGED="^unplugged/",iw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",iw.WEB_UNPLUGGED_OPS="^unplugged/",iw.WEB_UNPLUGGED_PUBLIC="^unplugged/",iw.WEB_CREATOR="^creator/",iw.WEB_KIDS="^kids/",iw.WEB_EXPERIMENTS="^experiments/",iw.WEB_MUSIC="^music/",iw.WEB_REMIX="^music/",iw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",iw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",iw);
function kw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=jw[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(jw).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function lw(){}
lw.prototype.D=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?qn:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=Lg(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;yn();var l="USER_INTERFACE_THEME_LIGHT";Bn(165)?l="USER_INTERFACE_THEME_DARK":Bn(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Xv()||l;h.userInterfaceTheme=k;if(!f){if(k=Gn())h.connectionType=k;T("web_log_effective_connection_type")&&(k=Hn())&&(g.client.effectiveConnectionType=k)}var m;if(T("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}T("web_gcf_hashes_innertube")&&(k=nq())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=wm(C.location.href);!T("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&ln.h&&(n=ln.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=mn(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(n=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!T("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(oa){}r=
void 0}r&&(h.timeZone=r)}(r=S("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=Im();Yv.h||(Yv.h=new Yv);h=Yv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:n});!T("web_prequest_context_killswitch")&&(t=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=yn();t=Bn(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);T("warm_op_csn_cleanup")?e&&(f=Cu())&&(g.clientScreenNonce=f):!f&&(f=Cu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;dw().setLocationOnInnerTubeContext(g);try{var w=zm(),x=w.bid;delete w.bid;g.adSignalsInfo={params:[],bid:x};var y=v(Object.entries(w));for(var H=y.next();!H.done;H=y.next()){var J=v(H.value),N=J.next().value,P=J.next().value;w=N;x=P;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:w,value:""+
x})}var va,vb;if(((va=g.client)==null?void 0:va.clientName)==="TVHTML5"||((vb=g.client)==null?void 0:vb.clientName)==="TVHTML5_UNPLUGGED"&&T("add_ifa_to_tvh5_requests")){var ea=S("INNERTUBE_CONTEXT");ea.adSignalsInfo&&(g.adSignalsInfo.advertisingId=ea.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=ea.adSignalsInfo.limitAdTracking)}}catch(oa){ju(oa)}y=g}else ju(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
y={};y={context:y};if(H=this.i(a)){this.h(y,H,b);var Z;b="/youtubei/v1/"+kw(this.j());(H=(Z=st(a.commandMetadata,Ol))==null?void 0:Z.apiUrl)&&(b=H);Z=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(Z=String(b)+String(ac(Z)));b={};T("web_api_key_killswitch")&&(b.key=S("INNERTUBE_API_KEY"));T("json_condensed_response")&&(b.prettyPrint="false");Z=xm(Z,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:Z,eb:Mu(Z),Ma:y,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}ju(new U("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(lw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function mw(){}
z(mw,lw);function nw(){}
z(nw,mw);nw.prototype.D=function(){return{input:"/getDatasyncIdsEndpoint",eb:Mu("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
nw.prototype.j=function(){return[]};
nw.prototype.i=function(){};
nw.prototype.h=function(){};var ow={},pw=(ow.GET_DATASYNC_IDS=hw(nw),ow);function qw(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function rw(){var a=qw();a.info||(a.info={});return a.info}
function sw(a){a=qw(a);a.metadata||(a.metadata={});return a.metadata}
function tw(a){a=qw(a);a.tick||(a.tick={});return a.tick}
function uw(a){a=qw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function vw(a){a=uw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ww(a){var b=qw(a).nonce;b||(b=su(),qw(a).nonce=b);return b}
;function xw(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function yw(a){a=a||"";var b=E("ytcsi.reference");b||(xw(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=xw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},zw=(W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W),X={},Aw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",X.editor="LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",
X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
X);Object.assign(Aw,zw);function Bw(a,b){uq.call(this,1,arguments);this.timer=b}
z(Bw,uq);var Cw=new vq("aft-recorded",Bw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Dw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Dw);function Ew(){this.h=0}
function Fw(){Ew.h||(Ew.h=new Ew);return Ew.h}
Ew.prototype.tick=function(a,b,c,d){Gw(this,"tick_"+a+"_"+b)||Ao("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Ew.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Gw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Ao("latencyActionInfo",a,{cttAuthInfo:c}))};
Ew.prototype.jspbInfo=function(){};
Ew.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Gw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Ao("latencyActionSpan",a,{cttAuthInfo:c}))};
function Gw(a,b){Dw[b]=Dw[b]||{count:0};var c=Dw[b];c.count++;c.time=V();a.h||(a.h=Ln(function(){var d=V(),e;for(e in Dw)Dw[e]&&d-Dw[e].time>6E4&&delete Dw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||ku(c)),!0):!1}
;var Hw=window;function Iw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Jw(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Kw(e.requestStart),e.responseEnd=Kw(e.responseEnd),e.redirectStart=Kw(e.redirectStart),e.redirectEnd=Kw(e.redirectEnd),e.domainLookupEnd=Kw(e.domainLookupEnd),e.connectStart=Kw(e.connectStart),e.connectEnd=
Kw(e.connectEnd),e.responseStart=Kw(e.responseStart),e.secureConnectionStart=Kw(e.secureConnectionStart),e.domainLookupStart=Kw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Kw(a){return Math.round(Lw()+a)}
function Lw(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Hw.performance||Hw.mozPerformance||Hw.msPerformance||Hw.webkitPerformance||new Iw;var Mw=!1,Nw=!1,Ow={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Wa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||vi,Y);function Pw(a,b){if(!T("web_csi_action_sampling_enabled")||!qw(b).actionDisabled){var c=yw(b||"");uv(c.info,a);a.loadType&&(c=a.loadType,sw(b).loadType=c);uv(vw(b),a);c=ww(b);b=qw(b).cttAuthInfo;Fw().info(a,c,b)}}
function Qw(){var a,b,c,d;return((d=Vs().resolve(new Ps(jq))==null?void 0:(a=kq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Rw(a,b,c){if(!T("web_csi_action_sampling_enabled")||!qw(c).actionDisabled){var d=ww(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(Vs().resolve(new Ps(jq))==null?0:kq())&&!Nw&&(Nw=!0,Rw("gcfl",V(),c));var f,g,h;e=(Vs().resolve(new Ps(jq))==null?void 0:(f=kq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Qw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+
d.charCodeAt(g),g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;qw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Pw(f,c));qw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);
try{Y.mark(e,{startTime:f})}catch(k){}}e=yw(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=uw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=tw(c);e=b||V();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=qw(c).cttAuthInfo;a==="_start"?(a=Fw(),Gw(a,"baseline_"+d)||Ao("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Fw().tick(a,d,b,f);Sw(c);return e}}}
function Tw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ns+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Uw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Vw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Eb(window)&&a.setAttribute("nonce",Eb(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Lw(),Rw("rsf_"+b,c+Math.round(a.fetchStart)),Rw("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Ww(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Lb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Nb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Rw("wffs",Kw(b.startTime)),Rw("wffe",Kw(b.responseEnd)))}
function Xw(a){var b=Yw("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Yw(b[d],a);if(e)return e}return NaN}
function Yw(a,b){if(a=tw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Sw(a){var b=Yw("_start",a),c=Xw(a),d=T("enable_cow_info_csi")||!Mw;b&&c&&d&&(Aq(Cw,new Bw(Math.round(c-b),a)),Mw=!0)}
function Zw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Ob(a,function(c){return c.name==="first-paint"}))return Kw(a.startTime)}var b;
T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.yh;return b?Math.max(0,b):0}
;function $w(a,b){lm(function(){yw("").info.actionType=a;b&&hm("TIMING_AFT_KEYS",b);hm("TIMING_ACTION",a);var c=Uw();Object.keys(c).length>0&&Pw(c);c={isNavigation:!0,actionType:Aw[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=Aw[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Cu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Tw();if(d===1||d===-1)c.isVisible=!0;sw();rw();
c.loadType="cold";d=rw();var e=Jw(),f=Lw(),g=S("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Rw("srt",e.responseStart),d.prerender!==1&&Rw("_start",f,void 0));d=Zw();d>0&&Rw("fpt",d);d=Jw();d.isPerformanceNavigationTiming&&Pw({performanceNavigationTiming:!0},void 0);Rw("nreqs",d.requestStart,void 0);Rw("nress",d.responseStart,void 0);Rw("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Rw("nrs",d.redirectStart,void 0),Rw("nre",
d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Rw("ndnss",d.domainLookupStart,void 0),Rw("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Rw("ntcps",d.connectStart,void 0),Rw("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Lw()&&d.connectEnd-d.secureConnectionStart>0&&(Rw("nstcps",d.secureConnectionStart,void 0),Rw("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&Ww();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Ow)Ow.hasOwnProperty(h)&&
(e=Ow[h],Vw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Pw(c);c=uw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=vw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(sw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=tw();e=uw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Rw(k,Yw(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Rw(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,uv(c,d),uv(k,d),d=!0;d&&Pw(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&ax()&&Xw()&&Sw()})()}
function ax(){return lm(function(){return bx()})()}
function cx(a,b,c){lm(Pw)(a,b,c===void 0?!1:c)}
function dx(a,b,c){return lm(Rw)(a,b,c)}
function bx(){return lm(function(){return"_start"in tw()})()}
function ex(){lm(function(){var a=ww();requestAnimationFrame(function(){setTimeout(function(){a===ww()&&dx("ol",void 0,void 0)},0)})})()}
var fx=window;fx.ytcsi&&(fx.ytcsi.infoGel=cx,fx.ytcsi.tick=dx);var gx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),hx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function ix(a,b,c,d){this.D=a;this.da=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},pw,a.Nb)}
function jx(a,b,c,d){if(ix.h!==void 0){if(d=ix.h,a=[a!==d.D,b!==d.da,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else ix.h=new ix(a,b,c,d)}
function kx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?qn:c;var d=lx(a,b);return d?new xi(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.D(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.F(0);break}Tv(h.input);l=((k=h.eb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.kf){var r=h.config,t;r=r==null?void 0:(t=r.Tb)==null?void 0:t.sessionIndex;t=pn(0,{sessionIndex:r});m=Object.assign({},
ew(l),t);n.F(4);break}return n.yield(mx(h.config,l),5);case 5:m=n.i;case 4:e(nx(a,h,m)),n.h=0}})}):Ci(new U("Error: No request builder found for command.",b))}
function ox(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=v(gx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function nx(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,w,x,y,H,J,N,P,va,vb,ea,Z,oa,Na,Ma,ah,bh,Wr,Xr,Yr,Zr;return A(function(ia){switch(ia.h){case 1:ia.F(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ma)==null?0:g.context)){ia.F(4);break}h=b.Ma.context;ia.F(5);break;case 5:k=v([]),l=k.next();case 8:if(l.done){ia.F(4);break}m=l.value;return ia.yield(m.Ah(h),9);case 9:l=k.next();ia.F(8);break;case 4:if((n=a.i)==null||!n.Fh(b.input,b.Ma)){ia.F(12);break}return ia.yield(a.i.vh(b.input,
b.Ma),13);case 13:return r=ia.i,T("kevlar_process_local_innertube_responses_killswitch")||ox(a,r,b),ia.return(r);case 12:return(x=(w=b.config)==null?void 0:w.Dh)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.Ma),N=(J=(H=b.eb)==null?void 0:H.headers)!=null?J:{},b.eb=Object.assign({},b.eb,{headers:Object.assign({},N,c)}),P=Object.assign({},b.eb),b.eb.method==="POST"&&(P=Object.assign({},P,{body:y})),((va=b.config)==null?0:va.Le)&&dx(b.config.Le),vb=function(){return a.da.fetch(b.input,P,b.config)},t=
vb(),x&&a.h.set(x,t)),ia.yield(t,14);
case 14:if((ea=ia.i)&&"error"in ea&&((Z=ea)==null?0:(oa=Z.error)==null?0:oa.details))for(Na=ea.error.details,Ma=v(Na),ah=Ma.next();!ah.done;ah=Ma.next())bh=ah.value,(Wr=bh["@type"])&&hx.indexOf(Wr)>-1&&(delete bh["@type"],ea=bh);x&&a.h.has(x)&&a.h.delete(x);((Xr=b.config)==null?0:Xr.Me)&&dx(b.config.Me);if(ea||(Yr=a.i)==null||!Yr.mh(b.input,b.Ma)){ia.F(15);break}return ia.yield(a.i.uh(b.input,b.Ma),16);case 16:ea=ia.i;case 15:return ox(a,ea,b),((Zr=b.config)==null?0:Zr.He)&&dx(b.config.He),d(),ia.return(ea||
void 0)}})}
function lx(a,b){a:{a=a.D;var c,d=(c=st(b,Pl))==null?void 0:c.signal;if(d&&a.Nb&&(c=a.Nb[d])){var e=c();break a}var f;if((c=(f=st(b,Nl))==null?void 0:f.request)&&a.Sd&&(f=a.Sd[c])){e=f();break a}for(e in b)if(a.Tc[e]&&(b=a.Tc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function mx(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Tb)==null?void 0:d.sessionIndex;var h=g.yield;var k=pn(0,{sessionIndex:e});if(!(k instanceof xi)){var l=new xi(vi);yi(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},ew(b),f)))})}
;var px=new Os("INNERTUBE_TRANSPORT_TOKEN");function qx(){}
z(qx,mw);qx.prototype.j=function(){return gv};
qx.prototype.i=function(a){return st(a,Zl)||void 0};
qx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(qx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function rx(){}
z(rx,mw);rx.prototype.j=function(){return hv};
rx.prototype.i=function(a){return st(a,Yl)||void 0};
rx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(rx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var sx=new Os("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function tx(a){this.u=a}
z(tx,mw);tx.prototype.j=function(){return bv};
tx.prototype.i=function(a){return st(a,Tl)||st(a,Ul)||st(a,Sl)};
tx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.u)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.u.i(b.clientParamIdentifier)}};
tx[Ns]=[sx];function ux(){}
z(ux,mw);ux.prototype.j=function(){return dv};
ux.prototype.i=function(a){return st(a,Rl)||void 0};
ux.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(ux.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function vx(){}
z(vx,mw);vx.prototype.j=function(){return ev};
vx.prototype.i=function(a){return st(a,Xl)||void 0};
vx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function wx(){}
z(wx,mw);wx.prototype.j=function(){return fv};
wx.prototype.i=function(a){return st(a,Wl)||void 0};
wx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function xx(){}
z(xx,mw);xx.prototype.j=function(){return cv};
xx.prototype.i=function(a){return st(a,Vl)};
xx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var yx=new Os("FETCH_FN_TOKEN"),zx=new Os("PARSE_FN_TOKEN");function Ax(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
z(Ax,U);var Bx=new Os("NETWORK_SLI_TOKEN");function Cx(a,b,c){this.h=a;this.i=b;this.j=c}
Cx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=Dx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){ku(k);
if((c==null?0:c.Zd)&&k instanceof Ax&&k.errorType===1)return Promise.reject(k)}))})};
function Dx(a,b,c){if(a.h){var d=Yb(Zb(5,jc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=br(c));return new window.Request(b,a)}
Cx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.we)&&a.ok)return Yf(b.we,e);e=e.replace(")]}'","");if((b==null?0:b.Zd)&&e)try{var f=d(e)}catch(h){throw new Ax(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.qh(),c=c.then(function(e){ku(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Cx[Ns]=[new Ps(Bx),new Ps(yx),new Ps(zx)];var Ex=new Os("NETWORK_MANAGER_TOKEN");var Fx;function Gx(){var a,b,c;return A(function(d){if(d.h==1)return a=Vs().resolve(px),a?d.yield(kx(a),2):(ku(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return ku(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.oh;return d.return(c)}ku(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function Hx(){var a;return(a=S("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Ix=C.caches,Jx;function Kx(a){var b=a.indexOf(":");return b===-1?{md:a}:{md:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Lx(){return A(function(a){if(Jx!==void 0)return a.return(Jx);Jx=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(Ix.open("test-only"),4);case 4:return d.yield(Ix.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Jx)})}
function Mx(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(Lx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Ix.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Kx(f),h=g.datasyncId,!h||a.includes(h)||b.push(Ix.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Nx(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(Lx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Jn("cache contains other");return h.yield(Ix.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Kx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Ox(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Px(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Qx(a){if(Ox()){var b=Object.keys(window.sessionStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Px(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Rx(){if(!Ox())return!1;var a=Jn(),b=Object.keys(window.sessionStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Px(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Sx(){Gx().then(function(a){a&&(Pp(a),Mx(a),Qv(a),Qx(a))})}
function Tx(){var a=new Ur;Sj.oa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.F(2);break}b=Jn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Pp(h);Mx(h);Qv(h);Qx(h);return g.return()}c=Rv();d=Rx();return g.yield(Nx(),3);case 3:return e=g.i,g.yield(Qp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?Sx():a.h.add("publicytnetworkstatus-online",Sx,!0,void 0,void 0),g.h=0}})})}
;function Ux(){this.state=1;this.h=null}
p=Ux.prototype;p.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=fb(),f=new Fb(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=Gl(a.interpreterSafeUrl).toString());Vx(this,d,e,a.program,b,c)}else ku(Error("Cannot initialize botguard without program"))};
function Vx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,kv(c,function(){window[g]?Wx(a,d,g,e):(a.state=3,mv(c),ku(new U("Unable to load Botguard","from "+c)))},f)):b?(f=Rg("SCRIPT"),b instanceof Fb?Hb(f,b):f.textContent=b,f.nonce=Eb(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Wx(a,d,g,e):(a.state=4,ku(new U("Unable to load Botguard from JS")))):ku(new U("Unable to load VM; no url or JS provided"))}
p.isLoading=function(){return this.state===2};
function Wx(a,b,c,d){a.state=5;try{var e=new Ej({program:b,ge:c,Je:T("att_web_record_metrics"),Be:{va:"aGIf"}});e.cf.then(function(){a.state=6;d&&d(b)});
a.Kc(e)}catch(f){a.state=7,f instanceof Error&&ku(f)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Nc()?this.Cd({Uc:a}):null};
p.dispose=function(){this.Kc(null);this.state=8};
p.Nc=function(){return!!this.h};
p.Cd=function(a){return this.h.vd(a)};
p.Kc=function(a){ug(this.h);this.h=a};var Xx=[],Yx=!1;function Zx(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&Nu()){var a=S("PLAYER_VARS",{});if(Ig(a)!="1"&&!Ou(a)){var b=function(){Yx=!0;"google_ad_status"in window?hm("DCLKSTAT",1):hm("DCLKSTAT",2)};
try{kv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Xx.push(Sj.oa(function(){if(!(Yx||"google_ad_status"in window)){try{ov("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Yx=!0;hm("DCLKSTAT",3)}},5E3))}}}
function $x(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function ay(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function by(){Ux.apply(this,arguments)}
z(by,Ux);by.prototype.Kc=function(a){var b;(b=ay())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.vd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
by.prototype.Nc=function(){return!!ay()};
by.prototype.Cd=function(a){return ay().bgvmc(a)};function cy(a){dt.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.H},{from:"document_active",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
z(cy,dt);cy.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
cy.prototype.D=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
cy.prototype.u=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
cy.prototype.i=function(){this.h=new Map};function dy(a){dt.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.D},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.D},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.D},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
z(dy,dt);dy.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
dy.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
dy.prototype.D=function(a,b){a(b==null?void 0:b.event)};
dy.prototype.u=function(a,b){a(b==null?void 0:b.event)};function ey(){this.o=new cy;this.D=new dy}
ey.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.D.install(c)})};function fy(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
fy.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Cu(c===void 0?0:c)){a=this.client;d=new vu({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Lv(d,c);Hv.set(f,!0);Mv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Kv({cttAuthInfo:Eu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Nv("visualElementGestured",f,d):a?bu("visualElementGestured",d,a,f):Ao("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
fy.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new vu({trackingParams:a}),b,c===void 0?0:c)};
fy.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Cu(d);a||(a=(a=zu(d===void 0?0:d))?new vu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Kv({cttAuthInfo:Eu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Nv("visualElementStateChanged",d,b):a?bu("visualElementStateChanged",b,a,d):Ao("visualElementStateChanged",b,d))}};
function gy(a,b){if(b===void 0)for(var c=Bu(),d=0;d<c.length;d++)c[d]!==void 0&&gy(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Jv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function hy(){ey.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||Ln(iy)}
z(hy,ey);hy.prototype.j=function(){Ao("finalPayload",{csn:Cu()})};
hy.prototype.h=function(){pu(qu)};
hy.prototype.i=function(){var a=gy;fy.h||(fy.h=new fy);a(fy.h)};
function iy(){var a=S("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Vd();a=v(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Ao("genericClientExperimentEvent",{eventType:c});delete gm.CLIENT_EXPERIMENT_EVENTS}}
;function jy(){}
function ky(){var a=E("ytglobal.storage_");a||(a=new jy,D("ytglobal.storage_",a));return a}
jy.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(ly()):d.return()})};
function ly(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",jy);function yo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
yo.prototype.Fa=function(a){this.handleError(a)};
yo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":my(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function my(a,b){ky().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:ny(c==null?void 0:c.usage),deviceStorageQuotaMbytes:ny(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function ny(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var oy={},py=(oy["api.invalidparam"]=2,oy.auth=150,oy["drm.auth"]=150,oy["heartbeat.net"]=150,oy["heartbeat.servererror"]=150,oy["heartbeat.stop"]=150,oy["html5.unsupportedads"]=5,oy["fmt.noneavailable"]=5,oy["fmt.decode"]=5,oy["fmt.unplayable"]=5,oy["html5.missingapi"]=5,oy["html5.unsupportedlive"]=5,oy["drm.unavailable"]=5,oy["mrm.blocked"]=151,oy["embedder.identity.denied"]=152,oy);var qy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function ry(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function sy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(qy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function ty(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function uy(a){L.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.B=[];this.M={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=T("web_player_split_event_bus_iframe");this.o=S("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.H=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",vy(b));b.sendMessage("onReady");e=v(b.B);for(d=e.next();!d.done;d=e.next())wy(b,d.value);b.B=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.M[e]||e==="onReady"||
(c=xy(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.M[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&ry(e)){var f=d;if(Qa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=sy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=sy(g);break;case "loadPlaylist":case "cuePlaylist":g=ty(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);ry(e)&&yy(b,vy(b))}}}};
zy.addEventListener("message",this.H);if(a=S("WIDGET_ID"))this.sessionId=a;Ay(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?py[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
Ay(this,"onVideoProgress",this.Xe.bind(this));Ay(this,"onVolumeChange",this.Ye.bind(this));Ay(this,"onApiChange",this.Qe.bind(this));Ay(this,"onPlaybackQualityChange",this.Ue.bind(this));Ay(this,"onPlaybackRateChange",this.Ve.bind(this));Ay(this,"onStateChange",this.We.bind(this));Ay(this,"onWebglSettingsChanged",this.Ze.bind(this));Ay(this,"onCaptionsTrackListChanged",this.Re.bind(this));Ay(this,"captionssettingschanged",this.Se.bind(this))}
z(uy,L);function yy(a,b){a.sendMessage("infoDelivery",b)}
p=uy.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?wy(this,a):this.B.push(a)};
function xy(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Ay(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function vy(a){if(!a.api)return null;var b=a.api.getApiInterface();Pb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.We=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());yy(this,a)};
p.Ue=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());yy(this,a)};
p.Ve=function(a){yy(this,{playbackRate:a})};
p.Qe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.Ye=function(){yy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.Xe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());yy(this,a)};
p.Ze=function(){yy(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.Re=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};yy(this,a)}};
p.Se=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};yy(this,a)}};
function wy(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){ku(d)}}}
p.aa=function(){L.prototype.aa.call(this);zy.removeEventListener("message",this.H);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var zy=window;function By(a,b,c){L.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=Cy(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=Dy(g,f))&&Ey(d,g,f))}}}}}};
Fy.addEventListener("message",this.i);Ey(this,"RECEIVING")}
z(By,L);p=By.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.Te.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.Te=function(a,b){this.ea||Ey(this,a,Gy(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function Cy(a,b){switch(a){case "loadVideoById":return[sy(b)];case "cueVideoById":return[sy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[ty(b)];case "cuePlaylist":return[ty(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Dy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function Gy(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function Ey(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),Hy.postMessage(JSON.stringify(b),a.origin))}
p.aa=function(){Fy.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);L.prototype.aa.call(this)};
var Fy=window,Hy=window.parent;var Iy=new by;function Jy(){return Iy.Nc()}
function Ky(a){a=a===void 0?{}:a;return Iy.invoke(a)}
;function Ly(a,b,c,d,e){L.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.pc=e;this.Va=!1;this.api={};this.ia=this.u=null;this.U=new M;this.h={};this.Z=this.xa=this.elementId=this.zb=this.config=null;this.Y=!1;this.j=this.H=null;this.Ea={};this.qc=["onReady"];this.lastError=null;this.Rb=NaN;this.M={};this.ga=0;this.i=this.o=a;wg(this,this.U);My(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Ny(this),Oy(this))}
z(Ly,L);p=Ly.prototype;p.getId=function(){return this.B};
p.loadNewVideoConfig=function(a){if(!this.ea){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof av||(b=new av(b));this.config=b;this.setConfig(a);Oy(this);this.isReady()&&Py(this)}};
function Ny(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.zb=a;this.config=Qy(a);Ny(this);if(!this.xa){var b;this.xa=Ry(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Mj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Mj(Number(a)||a))};
function Py(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Sy(a){var b=!0,c=Ty(a);c&&a.config&&(b=c.dataset.version===Uy(a));return b&&!!E("yt.player.Application.create")}
function Oy(a){if(!a.ea&&!a.Y){var b=Sy(a);if(b&&(Ty(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||Vy(a);else if(Wy(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Vy(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.H=function(){c=!0;var d=Xy(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Qy(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.pc);Vy(a)};
a.Y=!0;b?a.H():(kv(Uy(a),a.H),(b=Yy(a))&&rv(b||""),Zy(a)&&!c&&D("yt.player.Application.create",null))}}}
function Ty(a){var b=Qg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Vy(a){if(!a.ea){var b=Ty(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Xy(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}$y(a)}else a.Rb=setTimeout(function(){Vy(a)},50)}}
function $y(a){My(a);a.Va=!0;var b=Ty(a);if(b){a.u=az(a,b,"addEventListener");a.ia=az(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=az(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);Py(a);a.xa&&a.xa(a.api);a.U.hb("onReady",a.api)}
function az(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function My(a){a.Va=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(var c in a.M)a.M.hasOwnProperty(c)&&clearTimeout(Number(c));a.M={};a.u=null;a.ia=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.zb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Va};
p.addEventListener=function(a,b){var c=this,d=Ry(this,b);d&&(Jb(this.qc,a)>=0||this.h[a]||(b=bz(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.ea||(b=Ry(this,b))&&this.U.unsubscribe(a,b)};
function Ry(a,b){var c=b;if(typeof b==="string"){if(a.Ea[b])return a.Ea[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ea[b]=c}return c?c:null}
function bz(a,b){function c(d){function e(){if(!a.ea)try{a.U.hb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.Rd});g.level="WARNING";throw g;}}
if(Xy(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.M,h=String(f);h in g&&delete g[h]},0);
Hg(a.M,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.Z||(Ty(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function Wy(a){a.cancel();My(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=Ty(a);b&&(Sy(a)||!Zy(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.H&&ov(Uy(this),this.H);clearTimeout(this.Rb);this.Y=!1};
p.aa=function(){Wy(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ea=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.zb=this.config=this.api=null;delete this.o;delete this.i;L.prototype.aa.call(this)};
function Zy(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Uy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Yy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Xy(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Qy(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Kg(e):e}return b}
;var cz={},dz="player_uid_"+(Math.random()*1E9>>>0);function ez(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Qg(c):c;var e=dz+"_"+Ra(c),f=cz[e];if(f&&d)return fz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Ly(c,e,a,b,void 0);cz[e]=f;f.addOnDisposeCallback(function(){delete cz[f.getId()]});
return f.api}
function fz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var gz=null,hz=null;
function iz(){ex();var a=yn(),b=Bn(119),c=window.devicePixelRatio>1;if(document.body&&ak(document.body,"exp-invert-logo"))if(c&&!ak(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ak(d,"inverted-hdpi")){var e=Yj(d);Zj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ak(document.body,"inverted-hdpi")&&bk();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Cn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete vn[b]:(c=d.toString(16),vn[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in vn)vn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(vn[f])));var f=d.join("&");rn(b,f,63072E3,a.i,c)}}
function jz(){kz()}
function lz(){dx("ep_init_pr");kz()}
function kz(){var a=gz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function mz(){gz&&gz.sendAbandonmentPing&&gz.sendAbandonmentPing();S("PL_ATT")&&Iy.dispose();for(var a=Sj,b=0,c=Xx.length;b<c;b++)a.pa(Xx[b]);Xx.length=0;mv("//static.doubleclick.net/instream/ad_status.js");Yx=!1;hm("DCLKSTAT",0);vg(hz);gz&&(gz.removeEventListener("onVideoDataChange",jz),gz.destroy())}
;D("yt.setConfig",hm);D("yt.config.set",hm);D("yt.setMsg",jv);D("yt.msgs.set",jv);D("yt.logging.errors.log",ju);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}Vv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);$w("embed",["ol"]);c=Hx();if(!c.serializedForcedExperimentIds){var d=wm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&$w("watch",["pbs","pbu","pbp"]);gz=ez(a,c);gz.addEventListener("onVideoDataChange",jz);gz.addEventListener("onReady",lz);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?hz=new uy(gz):S("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(hz=new By(gz,a,b));Zx();T("ytidb_create_logger_embed_killswitch")||xo();a={};hy.h||(hy.h=new hy);hy.h.install((a.flush_logs={callback:function(){Pt()}},a));
ks();T("ytidb_clear_embedded_player")&&Sj.oa(function(){var f,g;if(!Fx){var h=Vs();Rs(h,{kc:Ex,zd:Cx});var k={Tc:{feedbackEndpoint:hw(ux),modifyChannelNotificationPreferenceEndpoint:hw(vx),playlistEditEndpoint:hw(wx),shareEntityEndpoint:hw(tx),subscribeEndpoint:hw(qx),unsubscribeEndpoint:hw(rx),webPlayerShareEntityServiceEndpoint:hw(xx)}},l=dw(),m={};l&&(m.client_location=l);f===void 0&&(f=on());g===void 0&&(g=h.resolve(Ex));jx(k,g,f,m);Rs(h,{kc:px,Ad:ix.h});Fx=h.resolve(px)}Tx()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Jy);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Ky);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||$x);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Uv);D("yt.util.activity.init",E("yt.util.activity.init")||zs);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Cs);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||As);window.addEventListener("load",lm(function(){iz()}));
window.addEventListener("pageshow",lm(function(a){a.persisted||iz()}));
window.addEventListener("pagehide",lm(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?mz():a.persisted||mz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=im("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Rd)f||(f={}),f.componentStack=cu(m)}f&&nu(e,f);g?ju(e):ku(e)}};
Ni=lu;window.addEventListener("unhandledrejection",function(a){lu(a.reason)});
Kb(S("ERRORS")||[],function(a){ju.apply(null,a)});
hm("ERRORS",[]);}).call(this);
