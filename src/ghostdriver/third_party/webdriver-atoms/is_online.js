function(){return function(){var c=!0,d=null,e=!1,f=this;var i=window;function j(a,z){this.code=a;this.message=z||"";this.name=k[a]||k[13];var b=Error(this.message);b.name=this.name;this.stack=b.stack||""}var l=Error;function m(){}m.prototype=l.prototype;j.b=l.prototype;j.prototype=new m;
var k={7:"NoSuchElementError",8:"NoSuchFrameError",9:"UnknownCommandError",10:"StaleElementReferenceError",11:"ElementNotVisibleError",12:"InvalidElementStateError",13:"UnknownError",15:"ElementNotSelectableError",19:"XPathLookupError",23:"NoSuchWindowError",24:"InvalidCookieDomainError",25:"UnableToSetCookieError",26:"ModalDialogOpenedError",27:"NoModalDialogOpenError",28:"ScriptTimeoutError",32:"InvalidSelectorError",35:"SqlDatabaseError",34:"MoveTargetOutOfBoundsError"};
j.prototype.toString=function(){return this.name+": "+this.message};function n(a,z){for(var b=0,u=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),A=String(z).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),G=Math.max(u.length,A.length),B=0;0==b&&B<G;B++){var ka=u[B]||"",la=A[B]||"",ma=RegExp("(\\d*)(\\D*)","g"),na=RegExp("(\\d*)(\\D*)","g");do{var g=ma.exec(ka)||["","",""],h=na.exec(la)||["","",""];if(0==g[0].length&&0==h[0].length)break;b=((0==g[1].length?0:parseInt(g[1],10))<(0==h[1].length?0:parseInt(h[1],10))?-1:(0==g[1].length?0:parseInt(g[1],10))>
(0==h[1].length?0:parseInt(h[1],10))?1:0)||((0==g[2].length)<(0==h[2].length)?-1:(0==g[2].length)>(0==h[2].length)?1:0)||(g[2]<h[2]?-1:g[2]>h[2]?1:0)}while(0==b)}return b};var p,q,r,s;function t(){return f.navigator?f.navigator.userAgent:d}s=r=q=p=e;var v;if(v=t()){var aa=f.navigator;p=0==v.indexOf("Opera");q=!p&&-1!=v.indexOf("MSIE");r=!p&&-1!=v.indexOf("WebKit");s=!p&&!r&&"Gecko"==aa.product}var w=p,x=q,ba=s,ca=r,da=f.navigator,ea=-1!=(da&&da.platform||"").indexOf("Win");function fa(){var a=f.document;return a?a.documentMode:void 0}var y;
a:{var C="",D;if(w&&f.opera)var E=f.opera.version,C="function"==typeof E?E():E;else if(ba?D=/rv\:([^\);]+)(\)|;)/:x?D=/MSIE\s+([^\);]+)(\)|;)/:ca&&(D=/WebKit\/(\S+)/),D)var ga=D.exec(t()),C=ga?ga[1]:"";if(x){var ha=fa();if(ha>parseFloat(C)){y=String(ha);break a}}y=C}var F={},ia=f.document,ja=!ia||!x?void 0:fa()||("CSS1Compat"==ia.compatMode?parseInt(y,10):5);var H,I,J,K,L,M,N;N=M=L=K=J=I=H=e;var O=t();O&&(-1!=O.indexOf("Firefox")?H=c:-1!=O.indexOf("Camino")?I=c:-1!=O.indexOf("iPhone")||-1!=O.indexOf("iPod")?J=c:-1!=O.indexOf("iPad")?K=c:-1!=O.indexOf("Android")?L=c:-1!=O.indexOf("Chrome")?M=c:-1!=O.indexOf("Safari")&&(N=c));var oa=H,pa=I,qa=J,ra=K,P=L,sa=M,Q=N;function R(a){return(a=a.exec(t()))?a[1]:""}var ta=function(){if(oa)return R(/Firefox\/([0-9.]+)/);if(x||w)return y;if(sa)return R(/Chrome\/([0-9.]+)/);if(Q)return R(/Version\/([0-9.]+)/);if(qa||ra){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(t());if(a)return a[1]+"."+a[2]}else{if(P)return(a=R(/Android\s+([0-9.]+)/))?a:R(/Version\/([0-9.]+)/);if(pa)return R(/Camino\/([0-9.]+)/)}return""}();var S,ua;function T(a){return U?ua(a):P?0<=n(va,a):0<=n(ta,a)}var U=function(){if(!ba)return e;var a=f.Components;if(!a)return e;try{if(!a.classes)return e}catch(z){return e}var b=a.classes,a=a.interfaces,u=b["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),b=b["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo),A=b.platformVersion,G=b.version;S=function(a){return 0<=u.a(A,""+a)};ua=function(a){return 0<=u.a(G,""+a)};return c}(),V;
if(P){var wa=/Android\s+([0-9\.]+)/.exec(t());V=wa?wa[1]:"0"}else V="0";var va=V;P&&T(2.3);var W=x&&(U?S(8):x?0<=n(ja,8):F[8]||(F[8]=0<=n(y,8)))&&!(U?S(9):x?0<=n(ja,9):F[9]||(F[9]=0<=n(y,9))),xa=Q&&T(4)&&!T(5),ya=P&&T(2.2)&&!T(2.3),za=ea&&Q&&T(4)&&!T(6);
function Aa(){switch("browser_connection"){case "appcache":return W?e:i.applicationCache!=d;case "browser_connection":return i.navigator!=d&&i.navigator.onLine!=d;case "database":return xa||ya?e:i.openDatabase!=d;case "location":return za?e:i.navigator!=d&&i.navigator.geolocation!=d;case "local_storage":return W?e:i.localStorage!=d;case "session_storage":return W?e:i.sessionStorage!=d&&i.sessionStorage.clear!=d;default:throw new j(13,"Unsupported API identifier provided as parameter");}};function Ba(){if(Aa())return i.navigator.onLine;throw new j(13,"Undefined browser connection state");}var X=["_"],Y=f;!(X[0]in Y)&&Y.execScript&&Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());){var $;if($=!X.length)$=void 0!==Ba;$?Y[Z]=Ba:Y=Y[Z]?Y[Z]:Y[Z]={}};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}