(function(w){function K(){}function L(){return"avalon"+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}function M(a,b){for(var c in b)a[c]=b[c];return a}function C(a,b){if(a){var c=0;if(Array.isArray(a)||"Object"===avalon.type(a)&&!a.setTimeout&&isFinite(a.length)&&a[0])for(var d=a.length;c<d;c++)b(c,a[c]);else for(c in a)a.hasOwnProperty(c)&&b(c,a[c])}}function ga(){if(D){for(var a=0,b;b=D[a++];)b();D=null}}function ha(a){return a.replace(/([a-z\d])([A-Z]+)/g,
"$1-$2").toLowerCase()}function N(a){return 0>a.indexOf("-")&&0>a.indexOf("_")?a:a.replace(/[-_][^-_]/g,function(a){return a.charAt(1).toUpperCase()})}function ia(a){var b=!1;if(wa.test(a)||+a+""===a)b=!0;try{return b?eval("0,"+a):a}catch(c){return a}}function E(a,b,c){a="for(var "+a+"i=0,n = this.length;i < n;i++){"+b.replace("_","((i in this) && fn.call(scope,this[i],i,this))")+"}"+c;return Function("fn,scope",a)}function T(a,b,c){if(c){var d=a.length;c=b.length;d>c?a.splice(c,d-c):c>d&&a.push.apply(a,
b.slice(d));c=Math.min(d,c);for(d=0;d<c;d++)a.set(d,b[d])}else for(d in b)b.hasOwnProperty(d)&&(a.hasOwnProperty(d)&&"$id"!==d)&&(a[d]=b[d])}function F(a){var b=a.$skipArray,c={},d={},e={},f=[],g=[],h=Object.keys(U),b=Array.isArray(b)?b.concat(h):h;C(a,function(a,k){U[a]||(e[a]=k);var p=avalon.type(k);if("Function"===p)h.push(a);else{if(-1!==b.indexOf(a)||"$"===a.charAt(0)&&!xa[a])return h.push(a);var m,x;if("Object"===p&&"function"===typeof k.get&&2>=Object.keys(k).length){var G=k.set,ya=k.get;m=
function(b){if(arguments.length)O||("function"===typeof G&&G.call(c,b),x!==b&&(x=b,H(m),c.$events&&c.$fire(a,b,k)));else return V&&ja(m),k=e[a]=ya.call(c)};g.push(function(){r[n]=this;this();delete r[n]}.bind(m))}else k=NaN,f.push(a),m=function(b){if(arguments.length){if(!O&&k!==b){var d=k;"Array"===p||"Object"===p?k&&k.$id?T(k,b,Array.isArray(b)):k=Array.isArray(b)?ka(b):F(b):k=e[a]=b;H(m);c.$events&&c.$fire(a,k,d)}}else return ja(m),k};m[y]=[];d[a]={set:m,get:m,enumerable:!0}}});P?P(c,d):c=za(d,
h);h.forEach(function(b){U[b]||(c[b]=a[b])});f.forEach(function(b){c[b]=a[b]});g.forEach(function(a){a()});c.$json=e;c.$events={};c.$watch=W.$watch.bind(c);c.$unwatch=W.$unwatch.bind(c);c.$fire=W.$fire.bind(c);c.$id=L();return c}function ja(a){r[n]&&(a=a[y])&&avalon.Array.ensure(a,r[n])}function H(a,b){var c=a[y];if(c&&c.length)for(var d=[].slice.call(arguments,1),e=c.concat(),f=0,g;g=e[f++];)(b=g.element)&&!b.noRemove&&(0===b.sourceIndex||null===b.parentNode)?(avalon.Array.remove(c,g),avalon.log(g+
"")):g.apply(0,d)}function X(a,b){b=b||[];var c=a.getAttribute(s+"skip"),d=a.getAttribute(s+"important"),e=a.getAttribute(s+"controller");if("string"!==typeof c){if(d)if(avalon.models[d])b=[avalon.models[d]],a.removeAttribute(s+"important");else return;else if(e){c=avalon.models[e];if(!c)return;b=[c].concat(b);a.removeAttribute(s+"controller")}for(var c=b,d=[],e=0,f;f=a.attributes[e++];)if(f.specified){var g=!1,h=!1;if(-1!==f.name.indexOf(s)){var l=f.name.replace(s,"");if(0<l.indexOf("-"))var k=l.split("-"),
l=k.shift();h=!0;g="function"===typeof q[l]}g&&d.push({type:l,args:k||[],element:a,remove:h,node:f,value:f.nodeValue})}Y(d,c);if(!1===a.canHaveChildren||!Aa[a.tagName]){l=[];for(d=a.firstChild;d;d=d.nextSibling)1===d.nodeType?X(d,b):3===d.nodeType&&l.push(d);for(k=0;d=l[k++];)c=b,d=la(d),d.length&&Y(d,c)}}}function ma(a){var b=a.indexOf("{{");return-1!==b&&b<a.indexOf("}}")}function na(a){var b=[];if(ma(a)){do a=a.replace(Ba,function(a,d){d&&b.push({value:d,expr:!1});return""}),a=a.replace(Ca,function(a,
d){if(d){var e=[];0<d.indexOf("|")&&(d=d.replace(/\|\s*(\w+)\s*(\([^)]+\))?/g,function(a,b,c){e.push(b+(c||""));return""}));b.push({value:d,expr:!0,filters:e.length?e:void 0})}return""});while(ma(a));a&&b.push({value:a,expr:!1})}return b}function Y(a,b){a.forEach(function(a){q[a.type](avalon.mix({},a),b);a.remove&&a.element.removeAttribute(a.node.name)})}function la(a){var b=[],c=na(a.nodeValue);if(c.length){for(;c.length;){var d=c.shift(),e=w.createTextNode(d.value);if(d.expr){var f=d.filters,d=
{type:"text",node:e,args:[],element:a.parentNode,value:d.value,filters:f};f&&-1!==f.indexOf("html")&&(avalon.Array.remove(f,"html"),d.type="html",d.replace=!0);b.push(d)}I.appendChild(e)}a.parentNode.replaceChild(I,a)}return b}function oa(a,b){for(var c=a.split("."),d=0,e,f;e=b[d++];)try{if(e.hasOwnProperty(c[0])&&(2!==c.length||e[c[0]].hasOwnProperty(c[1]))){var g=Function("scope","value","if(arguments.length === 1){ return scope."+a+" }else{ scope."+a+" = value; }");g(e);f=e;break}}catch(h){}if(f)return[g,
f]}function t(a,b,c,d,e){var f,g,h=c.filters;f=avalon.noop;!h&&!e&&(g=oa(a.trim(),b))&&(g=[g[0],[g[1]]]);!g&&!e&&(g=Z(a,b,c));if(!g&&e)g=e.map(function(a){return a.expr?Z(a.value,b,c)||"":a.value}),f=function(a,b){return function(){for(var c="",d,e=0,f;f=a[e++];)"string"===typeof f?c+=f:(d=f[0],c+=d.apply(d,f[1]));return b(c)}}(g,d);else if(g){var l=g[0],k=g[1];f=function(){d(l.apply(l,k))}}f.toString=function(){return"eval("+a+")"};f.element=c.element;r[n]=f;V=!0;f();V=!1;delete r[n]}function Z(a,
b,c){var d=[],e=[],f=new Date-0;b.forEach(function(a){var b=a.$id+""+f;-1===d.indexOf(b)&&(d.push(b),e.push(a))});a="var ret"+f+" = "+a+"\r\n";b=0;for(var g;g=d[b++];)a="with("+g+"){\r\n"+a+"}\r\n";if(c.filters){g=[];g.push(a,"\r\n");b=0;for(var h;h=c.filters[b++];){var l=h.indexOf("(");-1!==l?(a=h.slice(l+1,h.lastIndexOf(")")).trim(),a=","+a,h=h.slice(0,l).trim()):a="";g.push(" if(filters",f,".",h,"){\r\n\ttry{ret",f," = filters",f,".",h,"(ret",f,a,")}catch(e){};\r\n}\r\n")}a=g.join("");d.push("filters"+
f);e.push(avalon.filters);delete c.filters}try{var k=Function.apply(Function,d.concat(a+("\r\nreturn ret"+f)));k.apply(k,e);return[k,e]}catch(p){c.remove=!1}finally{g=d=null}}function Da(a){var b=a.target=a.srcElement;a.which=null!=a.charCode?a.charCode:a.keyCode;/mouse|click/.test(a.type)&&(b=b.ownerDocument||w,b="BackCompat"===b.compatMode?b.body:b.documentElement,a.pageX=a.clientX+(b.scrollLeft>>0)-(b.clientLeft>>0),a.pageY=a.clientY+(b.scrollTop>>0)-(b.clientTop>>0));a.preventDefault=function(){a.returnValue=
!1};a.stopPropagation=function(){a.cancelBubble=!0};return a}function pa(a){return Array.isArray(a)?a.$id?a:ka(a):"Object"===avalon.type(a)?a.$id?a:F(a):a}function ka(a){var b=a.map(pa);b.$id=L();b[y]=[];var c=F({length:a.length});"push,pop,shift,unshift,splice".replace(u,function(d){b[d]=function(){var b=this.length;a[d].apply(a,arguments);var f=[].slice.call(arguments);/push|unshift|splice/.test(d)&&(f=f.map(pa));var g=a[d].apply(this,f);H(this,d,f,b);c.length=this.length;return g}});"sort,reverse".replace(u,
function(c){b[c]=function(){a[c].apply(a,arguments).forEach(function(a,c){b.set(c,a)});return this}});b.isCollection=!0;b.clear=function(){this.length=c.length=0;H(this,"clear",[]);return this};b.update=function(a){Array.isArray(a)&&T(this,a,!0);return this};b.sortBy=function(b,c){this.update(avalon.Array.sortBy(a,b,c));return this};b.contains=function(a){return-1!==this.indexOf(a)};b.ensure=function(a){this.contains(a)||this.push(a);return this};b.set=function(a,b){0<=a&&a<this.length&&(/Array|Object/.test(avalon.type(b))?
T(this[a],b,Array.isArray(b)):this[a]!==b&&(this[a]=b,H(this,"set",arguments)));return this};b.size=function(){return c.length};b.remove=function(a){a=this.indexOf(a);return this.removeAt(a)};b.removeAt=function(b){if(0<=b&&0===b%1)return a.splice(b,1),this.splice(b,1),this};b.removeAll=function(a){if(Array.isArray(a))a.forEach(function(a){b.remove(a)});else if("function"===typeof a)for(var c=this.length-1;0<=c;c--)a(this[c],c)&&this.splice(c,1);else this.clear()};return b}function qa(a){for(;a.firstChild;)a.removeChild(a.firstChild)}
function $(a,b){for(var c=a.firstChild;c;c=c.nextSibling)if(c.id===c.nodeValue+b)return c}function Q(a,b,c){c=c||0;for(a=a.firstChild;a;a=a.nextSibling)8===a.nodeType&&a.nodeValue===b&&(a.id!==b+c&&(a.id=b+c,a.$scope.$index=c),c++)}function aa(a,b){for(var c=[a],d=a.$view,e=a.nextSibling;e&&!(8===e.nodeType&&e.id===b);e=e.nextSibling)c.push(e);for(e=0;a=c[e++];)d.appendChild(a);qa(d)}function ra(a,b,c,d,e){var f=d.scopes,g=d.element;b=Ea(a,b,c,d.args);f=[b].concat(f);e.splice(a,0,b);var h=d.view.cloneNode(!0);
d=[];var l=[];for(e=h.firstChild;e;e=e.nextSibling)1===e.nodeType?l.push(e):3===e.nodeType?d.push(e):8===e.nodeType&&(e.id=e.nodeValue+a,e.$scope=b,e.$view=h.cloneNode(!1));g.insertBefore(h,c.place||null);for(a=0;e=l[a++];)X(e,f.concat());if(!g.inprocess){g.inprocess=1;var k=g.hidden;g.hidden=!0}for(a=0;e=d[a++];)c=f.concat(),b=la(e),b.length&&Y(b,c);g.inprocess&&(g.hidden=k,g.inprocess=0)}function Ea(a,b,c,d){d=d[0]||"$data";var e={};e.$index=a;e.$itemName=d;e[d]={get:function(){return b},set:function(a){b=
a}};e.$first={get:function(){return 0===this.$index}};e.$last={get:function(){return this.$index===c.length-1}};e.$remove=function(){return c.remove(b)};return F(e)}var r={},sa={},D=[],n=new Date-0,y="$"+n,O=!1,V=!1,u=/[^, ]+/g,s="ms-",z=window.dispatchEvent,A=w.documentElement,Fa=Object.prototype.toString,ba=document.createElement("div"),I=w.createDocumentFragment(),ca="propertyIsEnumerable isPrototypeOf hasOwnProperty toLocaleString toString valueOf constructor".split(" ");avalon=function(a){return new avalon.init(a)};
avalon.init=function(a){this[0]=this.element=a};avalon.fn=avalon.prototype=avalon.init.prototype;M(avalon,{mix:M,rword:u,subscribers:y,ui:{},models:{},log:function(a){window.console&&console.log(a)},noop:K,error:function(a,b){throw new (b||Error)(a);},ready:function(a){"function"===typeof a&&(Array.isArray(D)?D.push(a):a())},type:function(a){return null===a?"Null":void 0===a?"Undefined":Fa.call(a).slice(8,-1)},oneObject:function(a,b){"string"===typeof a&&(a=a.match(u)||[]);for(var c={},d=void 0!==
b?b:1,e=0,f=a.length;e<f;e++)c[a[e]]=d;return c},range:function(a,b,c){c||(c=1);null==b&&(b=a||0,a=0);var d=-1;b=Math.max(0,Math.ceil((b-a)/c));for(var e=Array(b);++d<b;)e[d]=a,a+=c;return e},bind:z?function(a,b,c,d){a.addEventListener(b,c,!!d);return c}:function(a,b,c){function d(b){return c.call(a,Da(b||window.event))}a.attachEvent&&a.attachEvent("on"+b,d);return d},unbind:z?function(a,b,c,d){a.removeEventListener(b,c||K,!!d)}:function(a,b,c){a.detachEvent("on"+b,c||K)},forEach:function(a,b){if(a){var c=
0;if(Array.isArray(a)||"Object"===avalon.type(a)&&!a.setTimeout&&isFinite(a.length)&&a[0])for(var d=a.length;c<d;c++)b(c,a[c]);else for(c in a)a.hasOwnProperty(c)&&b(c,a[c])}}});avalon.forEach=function(a,b){window.console&&console.log("\u6b64\u65b9\u6cd5\u5df2\u8fc7\u65f6,\u8bf7\u4f7f\u7528avalon.each");C(a,b)};avalon.each=C;avalon.bind(window,"load",ga);avalon.bind(window,"DOMContentLoaded",ga);var wa=/^(?:null|false|true|NaN|\{.*\}|\[.*\])$/,R=/\S+/g;M(avalon.fn,{hasClass:function(a){var b=this[0]||
{};if(1===b.nodeType)return!!b.className&&-1<(" "+b.className+" ").indexOf(" "+a+" ")},addClass:function(a){var b=this[0];if(a&&"string"===typeof a&&b&&1===b.nodeType)if(b.className){a=(b.className+" "+a).match(R);a.sort();for(var c=a.length-1;0<c;--c)a[c]===a[c-1]&&a.splice(c,1);b.className=a.join(" ")}else b.className=a;return this},removeClass:function(a){var b=this[0];if(a&&"o"<typeof a&&b&&1===b.nodeType&&b.className){a=(a||"").match(R)||[];for(var c=a.length,d=" "+b.className.match(R).join(" ")+
" ",e=0;e<c;e++)d=d.replace(" "+a[e]+" "," ");b.className=d.slice(1,d.length-1)}return this},toggleClass:function(a,b){for(var c=b,d,e=0,f=a.match(R)||[],g="boolean"===typeof b;d=f[e++];)c=g?c:!this.hasClass(d),this[c?"addClass":"removeClass"](d);return this},attr:function(a,b){return 2===arguments.length?(this[0].setAttribute(a,b),this):this[0].getAttribute(a)},data:function(a,b){a="data-"+ha(a||"");switch(arguments.length){case 2:return this.attr(a,b),this;case 1:var c=this.attr(a);return ia(c);
case 0:for(var c=this[0].attributes,d={},e=0,f;f=c[e++];)a=f.name,a.indexOf("data-")||(a=N(a.slice(5)),d[a]=ia(f.value));return d}},removeData:function(a){a="data-"+ha(a);this[0].removeAttribute(a);return this},css:function(a,b){var c=this[0];if(c&&c.style){var d=/\_/.test(a)?N(a):a,e;a:{var f=e=void 0;if(da[d])e=da[d];else{e=e||A.style;for(var g=0,h=ta.length;g<h;g++)if(f=N(ta[g]+d),f in e){e=da[d]=f;break a}e=null}}a=e||d;if(1===arguments.length)return d=v[d+":get"]||v["@:get"],d(c,a);e=typeof b;
if("number"!==e||isFinite(b+""))return"number"===e&&!Ga[d]&&(b+="px"),d=v[d+":set"]||v["@:set"],d(c,a,b),this}},bind:function(a,b,c){if(this[0])return avalon.bind(this[0],a,b,c)},unbind:function(a,b,c){this[0]&&avalon.unbind(this[0],a,b,c);return this},val:function(a){var b=this[0];if(b&&1===b.nodeType){var c=0===arguments.length,d=c?":get":":set",e=ea,f;f=b.tagName.toLowerCase();f="input"===f&&/checkbox|radio/.test(b.type)?"checked":f;if(d=e[f+d])var g=d(b,a);else{if(c)return(b.value||"").replace(/\r/g,
"");b.value=a}}return c?g:this}});var v=avalon.cssHooks={},ta=["","-webkit-","-o-","-moz-","-ms-"],da={"float":"cssFloat"in A.style?"cssFloat":"styleFloat",background:"backgroundColor"},Ga=avalon.oneObject("columnCount,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");v["@:set"]=function(a,b,c){a.style[b]=c};if(window.getComputedStyle)v["@:get"]=function(a,b){var c,d=window.getComputedStyle(a,null);d&&(c="filter"===b?d.getPropertyValue(b):d[b],""===c&&(c=a.style[b]));return c};
else{var Ha=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Ia=/^(top|right|bottom|left)$/,z=!!window.XDomainRequest,Ja={thin:z?"1px":"2px",medium:z?"3px":"4px",thick:z?"5px":"6px"};v["@:get"]=function(a,b){var c=a.currentStyle,d=c[b];if(Ha.test(d)&&!Ia.test(d)){var e=a.style,f=e.left,g=a.runtimeStyle.left;a.runtimeStyle.left=c.left;e.left="fontSize"===b?"1em":d||0;d=e.pixelLeft+"px";e.left=f;a.runtimeStyle.left=g}"medium"===d&&(b=b.replace("Width","Style"),"none"===c[b]&&(d="0px"));return""===d?"auto":Ja[d]||
d};v["opacity:set"]=function(a,b){a.style.filter="alpha(opacity="+100*b+")";a.style.zoom=1};v["opacity:get"]=function(a){a=a.filters.alpha||a.filters["DXImageTransform.Microsoft.Alpha"];return(a?a.opacity:100)/100+""}}"Width,Height".replace(u,function(a){var b=a.toLowerCase(),c="client"+a,d="scroll"+a,e="offset"+a;avalon.fn[b]=function(f){var g=this[0];if(0===arguments.length){if(g.setTimeout)return g["inner"+a]||g.document.documentElement[c];if(9===g.nodeType){var h=g.documentElement;return Math.max(g.body[d],
h[d],g.body[e],h[e],h[c])}return parseFloat(this.css(b))||0}return this.css(b,f)}});avalon.fn.offset=function(){var a=this[0],b=a&&a.ownerDocument,c={left:0,top:0};if(!b)return c;var a=a.getBoundingClientRect(),d=b.defaultView||b.parentWindow,b=navigator.vendor||"BackCompat"===b.compatMode?b.body:b.documentElement,e=b.clientLeft>>0,f=d.pageXOffset||b.scrollLeft;c.top=a.top+(d.pageYOffset||b.scrollTop)-(b.clientTop>>0);c.left=a.left+f-e;return c};var ea={"option:get":function(a){var b=a.attributes.value;
return!b||b.specified?a.value:a.text},"select:get":function(a,b){for(var c,d=a.options,e=a.selectedIndex,f=ea["option:get"],g="select-one"===a.type||0>e,h=g?null:[],l=g?e+1:d.length,k=0>e?l:g?e:0;k<l;k++)if(c=d[k],(c.selected||k===e)&&!c.disabled){b=f(c);if(g)return b;h.push(b)}return h},"select:set":function(a,b){b=[].concat(b);for(var c=ea["option:get"],d=0,e;e=a.options[d++];)e.selected=!!~b.indexOf(c(e));b.length||(a.selectedIndex=-1)}};"\u53f8\u5f92\u6b63\u7f8e".trim||(String.prototype.trim=
function(){return this.replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")});for(var La in{toString:1})ca=!1;Object.keys||(Object.keys=function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);if(ca&&a)for(var d=0;c=ca[d++];)a.hasOwnProperty(c)&&b.push(c);return b});Array.isArray||(Array.isArray=function(a){return"Array"===avalon.type(a)});Function.prototype.bind||(Function.prototype.bind=function(a){if(2>arguments.length&&void 0===a)return this;var b=this,c=arguments;return function(){var d=
[],e;for(e=1;e<c.length;e++)d.push(c[e]);for(e=0;e<arguments.length;e++)d.push(arguments[e]);return b.apply(a,d)}});M(Array.prototype,{indexOf:function(a,b){var c=this.length,d=~~b;for(0>d&&(d+=c);d<c;d++)if(this[d]===a)return d;return-1},lastIndexOf:function(a,b){var c=this.length,d=null==b?c-1:b;for(0>d&&(d=Math.max(0,c+d));0<=d;d--)if(this[d]===a)return d;return-1},forEach:E("","_",""),filter:E("r=[],j=0,","if(_)r[j++]=this[i]","return r"),map:E("r=[],","r[i]=_","return r"),some:E("","if(_)return true",
"return false"),every:E("","if(!_)return false","return true")});avalon.Array={sortBy:function(a,b,c){a=a.map(function(a,e){return{el:a,re:b.call(c,a,e)}}).sort(function(a,b){var c=a.re,g=b.re;return c<g?-1:c>g?1:0});return avalon.Array.pluck(a,"el")},pluck:function(a,b){return a.filter(function(a){return null!=a[b]})},ensure:function(a){[].slice.call(arguments,1).forEach(function(b){~a.indexOf(b)||a.push(b)});return a},removeAt:function(a,b){return!!a.splice(b,1).length},remove:function(a,b){var c=
a.indexOf(b);return~c?avalon.Array.removeAt(a,c):!1}};var J;"function"===typeof setImmediate?J=setImmediate.bind(window):function(){function a(){--e;if(++g>=d){g=0;d*=4;for(var a=f&&Math.min(f-1,d);e<a;)++e,h()}for(;f;)--f,b=b.next,a=b.task,b.task=void 0,a();g=0}var b={task:void 0,next:null},c=b,d=2,e=0,f=0,g=0,h=void 0;J=function(a){c=c.next={task:a,next:null};e<++f&&e<d&&(++e,h())};if("undefined"!==typeof MessageChannel){var l=new MessageChannel;l.port1.onmessage=a;h=function(){l.port2.postMessage(0)}}else h=
function(){setTimeout(a,0)}}();avalon.nextTick=J;avalon.define=function(a,b,c){var d=[].slice.call(arguments);"string"!==typeof a&&(a=!avalon.models.root?"root":L(),d.unshift(a));Array.isArray(d[1])||d.splice(1,0,[]);b=d[1];"function"!==typeof d[2]&&avalon.error("factory\u5fc5\u987b\u662f\u51fd\u6570");c=d[2];d={$watch:K};b.unshift(d);c(d);d=F(d);O=!0;b[0]=d;c.apply(0,b);b.shift();O=!1;d.$id=a;return avalon.models[a]=d};var W={$watch:function(a,b){var c=this.$events[a];c?c.push(b):this.$events[a]=
[b];return this},$unwatch:function(a,b){var c=arguments.length;if(0===c)this.$events={};else if(1===c)this.$events[a]=[];else for(var c=this.$events[a]||[],d=c.length;-1<--d;)if(c[d]===b)return c.splice(d,1);return this},$fire:function(a){for(var b=this.$events[a]||[],c=this.$events.$all||[],d=[].slice.call(arguments,1),e=0,f;f=b[e++];)f.apply(this,d);for(e=0;f=c[e++];)f.apply(this,d)}},xa=avalon.oneObject("$index,$remove,$first,$last"),U=avalon.oneObject("$json,$skipArray,$watch,$unwatch,$fire,$events"),
fa=Object.defineProperty;try{fa({},"_",{value:"x"});var P=Object.defineProperties}catch(Ma){"__defineGetter__"in avalon&&(fa=function(a,b,c){"value"in c&&(a[b]=c.value);"get"in c&&a.__defineGetter__(b,c.get);"set"in c&&a.__defineSetter__(b,c.set);return a},P=function(a,b){for(var c in b)b.hasOwnProperty(c)&&fa(a,c,b[c]);return a})}if(!P&&window.VBArray){window.execScript("Function parseVB(code)\n\tExecuteGlobal(code)\nEnd Function","VBScript");var Ka=function(a,b,c){var d=a[b]&&a[b].set;if(3===arguments.length)d(c);
else return d()},za=function(a,b){var c=b.slice(0);c.push("hasOwnProperty","$id");var d="VBClass"+setTimeout("1"),e={},f=[];f.push("Class "+d,"\tPrivate [__data__], [__proxy__]","\tPublic Default Function [__const__](d, p)","\t\tSet [__data__] = d: set [__proxy__] = p","\t\tSet [__const__] = Me","\tEnd Function");c.forEach(function(a){!0!==e[a]&&(e[a]=!0,f.push("\tPublic ["+a+"]"))});Object.keys(a).forEach(function(a){e[a]=!0;f.push("\tPublic Property Let ["+a+"](val)",'\t\tCall [__proxy__]([__data__], "'+
a+'", val)',"\tEnd Property","\tPublic Property Set ["+a+"](val)",'\t\tCall [__proxy__]([__data__], "'+a+'", val)',"\tEnd Property","\tPublic Property Get ["+a+"]","\tOn Error Resume Next","\t\tSet["+a+'] = [__proxy__]([__data__],"'+a+'")',"\tIf Err.Number <> 0 Then","\t\t["+a+'] = [__proxy__]([__data__],"'+a+'")',"\tEnd If","\tOn Error Goto 0","\tEnd Property")});f.push("End Class");f.push("Function "+d+"Factory(a, b)","\tDim o","\tSet o = (New "+d+")(a, b)","\tSet "+d+"Factory = o","End Function");
window.parseVB(f.join("\r\n"));c=window[d+"Factory"](a,Ka);c.hasOwnProperty=function(a){return!0===e[a]};return c}}avalon.scan=function(a,b){a=a||A;X(a,b?[b]:[])};var Aa=avalon.oneObject("area,base,basefont,br,col,hr,img,input,link,meta,param,embed,wbr,script,style,textarea"),Ba=/([^{]*)\{\{/,Ca=/([^}]*)\}\}/;"contentEditable,isMap,longDesc,noHref,noResize,noShade,readOnly,useMap".replace(u,function(a){sa[a.toLowerCase()]=a});var S=avalon.oneObject("a,abbr,b,span,strong,em,font,i,kbd","inline");avalon.mix(S,
avalon.oneObject("div,h1,h2,h3,h4,h5,h6,section,p","block"));var q=avalon.bindingHandlers={"if":function(a,b){var c=a.element,d=w.createComment("@"),e=c.parentNode;t(a.value,b,a,function(a){J(function(){if(a){if(!c.parentNode||11===c.parentNode.nodeType)e.replaceChild(c,d),c.noRemove=0}else c.parentNode&&1===c.parentNode.nodeType&&(e.replaceChild(d,c),c.noRemove=1)})})},on:function(a,b){var c=a.element;t(a.value,b,a,function(d){var e=a.args[0];e&&"function"===typeof d&&(c.$scopes||(c.$scope=b[0],
c.$scopes=b),avalon.bind(c,e,d))})},text:function(a,b){var c=a.node;t(a.value,b,a,function(a){c.nodeValue=a})},visible:function(a,b){var c=a.element;t(a.value,b,a,function(a){var b=c.style;if(a){a=c.tagName;var f=void 0;a=a.toLowerCase();if(!S[a]){var g=w.createElement(a);A.appendChild(g);f=window.getComputedStyle?window.getComputedStyle(g,null).display:g.currentStyle.display;A.removeChild(g);S[a]=f}a=S[a]}else a="none";b.display=a})},href:function(a,b){var c=a.value.trim(),d=!0,e=a.type,f=avalon(a.element);
-1<c.indexOf("{{")&&2<c.indexOf("}}")&&(d=!1,/^\{\{([^}]+)\}\}$/.test(c)&&(d=!0,c=RegExp.$1));t(c,b,a,function(b){"css"===e?f.css(a.args[0],b):a.element[e]=b},d?null:na(a.value))},disabled:function(a,b){var c=a.type,d=sa[c]||c;t(a.value,b,a,function(b){a.element[d]=!!b})},bind:function(a,b){for(var c=a.value.trim(),d=a.args[0],e=0,f;f=b[e++];)if(f.hasOwnProperty(c)){c=f[c];break}"function"===typeof c&&f.$watch(d,function(b,d){c.call(a.element,b,d)})},"class":function(a,b){var c=a.element;t(a.value,
b,a,function(d){var e=(a.args||[]).join("-");"function"===typeof d&&(c.$scopes||(c.$scope=b[0],c.$scopes=b),d=d.call(c));avalon(c).toggleClass(e,!!d)})},hover:function(a){var b=avalon(a.element);b.bind("mouseenter",function(){b.addClass(a.value)});b.bind("mouseleave",function(){b.removeClass(a.value)})},active:function(a){var b=a.element,c=avalon(b);b.tabIndex=b.tabIndex||-1;c.bind("focus",function(){c.addClass(a.value)});c.bind("blur",function(){c.removeClass(a.value)})},html:function(a,b){var c=
a.element;t(a.value,b,a,function(b){b=null==b?"":b+"";if(a.replace){for(ba.innerHTML=b;ba.firstChild;)I.appendChild(ba.firstChild);c.replaceChild(I,a.node)}else c.innerHTML=b})},ui:function(a,b,c){var d=a.value.trim();if("function"===typeof avalon.ui[d]){var e=(avalon(a.element).data("id")||"").trim(),e=e||d+setTimeout("1");a.element.setAttribute(s+"controller",e);var f=a.args[0];if(f){for(var g=0,h;h=b[g++];)if(h.hasOwnProperty(f)){c=h[f];break}if(!c)for(g in avalon.models)if(h=avalon.models[g],
h.hasOwnProperty(f)){c=h[f];break}}avalon.ui[d](a.element,e,c)}},options:function(a,b){var c=a.element;for("SELECT"!==c.tagName&&avalon.error("options\u7ed1\u5b9a\u53ea\u80fd\u7ed1\u5728SELECT\u5143\u7d20");0<c.length;)c.remove(0);var d=a.args[0];t(a.value,b,a,function(e){Array.isArray(e)?J(function(){c.setAttribute(s+"each-option",a.value);var f=new Option("{{option}}","");f.setAttribute("ms-value","option");c.options[0]=f;avalon.scan(c);if(isFinite(d)&&(f=c.options[d]))f.selected=!0;f=b[0];if(d&&
Array.isArray(f[d])){var g=avalon(c);g.val(f[d]);g.bind("change",function(){var a=g.val();e.clear();e.push.apply(e,a)})}}):avalon.error("options\u7ed1\u5b9a\u5fc5\u987b\u5bf9\u5e94\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4")})}},B=q.model=function(a,b){var c=a.element,d=c.tagName;if("function"===typeof B[d]){var e=oa(a.value.trim(),b);if(e)B[d](c,e[0],e[1])}};B.INPUT=function(a,b,c){void 0===a.name&&(a.name=L());var d=a.type,e=function(){b(c,a.value)},f=function(){var d=b(c);d!==a.value&&(a.value=
d)},g=b(c);g!==a.value&&(a.value=g);/^(password|textarea|text)$/.test(d)?(d=a.attributes[s+"event"]||{},d=d.value,"change"===d?avalon.bind(a,d,e):(window.addEventListener?a.addEventListener("input",e,!1):a.attachEvent("onpropertychange",e),9<=w.documentMode&&(a.attachEvent("onkeydown",function(a){a=a.keyCode;(8===a||46===a)&&e()}),a.attachEvent("oncut",e)))):"radio"===d?(f=function(){a.checked=b(c)===a.value},e=function(){var d=!a.beforeChecked;b(c,d);a.beforeChecked=a.checked=d},d=function(){a.beforeChecked=
a.checked},null===a.onbeforeactivate?avalon.bind(a,"beforeactivate",d):avalon.bind(a,"mouseover",d),avalon.bind(a,"click",e)):"checkbox"===d&&(e=function(){a.checked?avalon.Array.ensure(b(c),a.value):avalon.Array.remove(b(c),a.value)},f=function(){var d=[].concat(b(c));a.checked=0<=d.indexOf(a.value)},avalon.bind(a,"click",e));r[n]=f;f.element=a;f();delete r[n]};B.SELECT=function(a,b,c){function d(){var a=b(c);a+""!==f&&(e.val(a),f=a+"")}var e=avalon(a),f=b(c)+"";e.bind("change",function(){var a=
e.val();a+""!==f&&(b(c,a),f=a+"")});r[n]=d;d.element=a;d();delete r[n]};B.TEXTAREA=B.INPUT;"autofocus,autoplay,async,checked,controls,declare,contenteditable,loop,multiple,noresize,readonly,selected".replace(u,function(a){q[a]=q.disabled});q.enabled=function(a,b){var c=a.element;t(a.value,b,a,function(a){c.disabled=!a})};"title,alt,src,value,css".replace(u,function(a){q[a]=q.href});"dblclick,mouseout,click,mouseover,mouseenter,mouseleave,mousemove,mousedown,mouseup,keypress,keydown,keyup,blur,focus,change".replace(u,
function(a){q[a]=function(b){b.args=[a];q.on.apply(0,arguments)}});if(!("onmouseenter"in A)){var ua=avalon.bind,va={mouseenter:"mouseover",mouseleave:"mouseout"};avalon.bind=function(a,b,c){return va[b]?ua(a,va[b],function(d){var e=d.relatedTarget;if(!e||e!==a&&!(a.compareDocumentPosition(e)&16))delete d.type,d.type=b,c.call(a,d)}):ua(a,b,c)}}q.each=function(a,b){function c(b,e,g){var p=f.$id,m=c.$models;switch(b){case "set":(p=m[e[0]])&&(p[p.$itemName]=e[1]);break;case "push":C(e,function(b,c){ra(g+
b,c,f,a,m)});break;case "unshift":Q(d,p,f.length-g);f.place=d.firstChild;C(e,function(b,c){ra(b,c,f,a,m)});f.place=null;break;case "pop":if(e=$(d,g-1))aa(e,p+g),m.pop();break;case "shift":aa(d.firstChild,p+1);Q(d,p);m.shift();break;case "splice":b=e[0];var x=e[1],G=[].slice.call(e,2),n=0<=x?x:g-b;if(n&&(e=$(d,b)))m.splice(b,n),aa(e,p+(b+x)),Q(d,p);G.length&&(f.place=$(d,b),c("push",G,b),Q(d,p),f.place=null);break;case "clear":m.length=0,qa(d)}}var d=a.element,e=Z(a.value,b,a);if(Array.isArray(e))var f=
e[0].apply(e[0],e[1]);if(!Array.isArray(f))return f;var e=I.cloneNode(!1),g=w.createComment(f.$id);for(e.appendChild(g);d.firstChild;)e.appendChild(d.firstChild);a.view=e;a.scopes=b;c.$models=[];(f||{}).isCollection&&f[y].push(c);c("push",f,0)};avalon.filters={uppercase:function(a){return a.toUpperCase()},html:function(a){return a},lowercase:function(a){return a.toLowerCase()},truncate:function(a,b,c){b=b||30;c=void 0===c?"...":c;return a.length>b?a.slice(0,b-c.length)+c:String(a)},camelize:N,escape:function(a){return a.replace(/&/g,
"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},currency:function(a,b){return(b||"\uffe5")+avalon.filters.number(a)},number:function(a,b,c,d){a=(a+"").replace(/[^0-9+\-Ee.]/g,"");a=!isFinite(+a)?0:+a;b=!isFinite(+b)?0:Math.abs(b);d=d||",";c=c||".";var e="",e=function(a,b){var c=Math.pow(10,b);return""+Math.round(a*c)/c},e=(b?e(a,b):""+Math.round(a)).split(".");3<e[0].length&&(e[0]=e[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,d));if((e[1]||"").length<b)e[1]=
e[1]||"",e[1]+=Array(b-e[1].length+1).join("0");return e.join(c)}};avalon.filters.date=function(a){function b(a,b,c){var d="";0>a&&(d="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;c&&(a=a.substr(a.length-b));return d+a}function c(a,c,d,e){return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return b(f,c,e)}}function d(a,b){return function(c,d){var e=c["get"+a](),f=(b?"SHORT"+a:a).toUpperCase();return d[f][e]}}function e(a){var b;if(b=a.match(l)){a=new Date(0);var c=0,d=0,e=b[8]?a.setUTCFullYear:
a.setFullYear,f=b[8]?a.setUTCHours:a.setHours;b[9]&&(c=parseInt(b[9]+b[10],10),d=parseInt(b[9]+b[11],10));e.call(a,parseInt(b[1],10),parseInt(b[2],10)-1,parseInt(b[3],10));f.call(a,parseInt(b[4]||0,10)-c,parseInt(b[5]||0,10)-d,parseInt(b[6]||0,10),parseInt(b[7]||0,10))}return a}var f={yyyy:c("FullYear",4),yy:c("FullYear",2,0,!0),y:c("FullYear",1),MMMM:d("Month"),MMM:d("Month",!0),MM:c("Month",2,1),M:c("Month",1,1),dd:c("Date",2),d:c("Date",1),HH:c("Hours",2),H:c("Hours",1),hh:c("Hours",2,-12),h:c("Hours",
1,-12),mm:c("Minutes",2),m:c("Minutes",1),ss:c("Seconds",2),s:c("Seconds",1),sss:c("Milliseconds",3),EEEE:d("Day"),EEE:d("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(b(Math[0<a?"floor":"ceil"](a/60),2)+b(Math.abs(a%60),2))}},g=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,h=/^\d+$/,l=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(b,c){var d="",l=[],n,q;c=c||"mediumDate";c=a[c]||c;"string"===typeof b&&(b=h.test(b)?parseInt(b,10):e(b));"Number"===avalon.type(b)&&(b=new Date(b));if("Date"===avalon.type(b)){for(;c;)(q=g.exec(c))?(l=l.concat(q.slice(1)),c=l.pop()):(l.push(c),c=null);l.forEach(function(c){n=f[c];d+=n?n(b,a):c.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return d}}}({AMPMS:{"0":"\u4e0a\u5348",1:"\u4e0b\u5348"},DAY:{"0":"\u661f\u671f\u65e5",1:"\u661f\u671f\u4e00",2:"\u661f\u671f\u4e8c",3:"\u661f\u671f\u4e09",
4:"\u661f\u671f\u56db",5:"\u661f\u671f\u4e94",6:"\u661f\u671f\u516d"},MONTH:{"0":"1\u6708",1:"2\u6708",2:"3\u6708",3:"4\u6708",4:"5\u6708",5:"6\u6708",6:"7\u6708",7:"8\u6708",8:"9\u6708",9:"10\u6708",10:"11\u6708",11:"12\u6708"},SHORTDAY:{"0":"\u5468\u65e5",1:"\u5468\u4e00",2:"\u5468\u4e8c",3:"\u5468\u4e09",4:"\u5468\u56db",5:"\u5468\u4e94",6:"\u5468\u516d"},SHORTMONTH:{"0":"1\u6708",1:"2\u6708",2:"3\u6708",3:"4\u6708",4:"5\u6708",5:"6\u6708",6:"7\u6708",7:"8\u6708",8:"9\u6708",9:"10\u6708",10:"11\u6708",
11:"12\u6708"},fullDate:"y\u5e74M\u6708d\u65e5EEEE",longDate:"y\u5e74M\u6708d\u65e5",medium:"yyyy-M-d ah:mm:ss",mediumDate:"yyyy-M-d",mediumTime:"ah:mm:ss","short":"yy-M-d ah:mm",shortDate:"yy-M-d",shortTime:"ah:mm"});avalon.ready(function(){avalon.scan(document.body)})})(document);
