KISSY.add("mobile/iscroll/",function(){(function(h,t){function o(b){if(""===m)return b;b=b.charAt(0).toUpperCase()+b.substr(1);return m+b}var f=Math,y=t.createElement("div").style,m=function(){for(var b=["t","webkitT","MozT","msT","OT"],a,c=0,d=b.length;c<d;c++)if(a=b[c]+"ransform",a in y)return b[c].substr(0,b[c].length-1);return!1}(),i=m?"-"+m.toLowerCase()+"-":"",n=o("transform"),H=o("transitionProperty"),q=o("transitionDuration"),I=o("transformOrigin"),J=o("transitionTimingFunction"),z=o("transitionDelay"),
A=/android/gi.test(navigator.appVersion),D=/iphone|ipad/gi.test(navigator.appVersion),u=/hp-tablet/gi.test(navigator.appVersion),E=o("perspective")in y,l="ontouchstart"in h&&!u,F=!1!==m,K=o("transition")in y,B="onorientationchange"in h?"orientationchange":"resize",C=l?"touchstart":"mousedown",v=l?"touchmove":"mousemove",w=l?"touchend":"mouseup",x=l?"touchcancel":"mouseup",r;r=!1===m?!1:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[m];
var L=function(){return h.requestAnimationFrame||h.webkitRequestAnimationFrame||h.mozRequestAnimationFrame||h.oRequestAnimationFrame||h.msRequestAnimationFrame||function(b){return setTimeout(b,1)}}(),G=h.cancelRequestAnimationFrame||h.webkitCancelAnimationFrame||h.webkitCancelRequestAnimationFrame||h.mozCancelRequestAnimationFrame||h.oCancelRequestAnimationFrame||h.msCancelRequestAnimationFrame||clearTimeout,p=E?" translateZ(0)":"",u=function(b,a){var c=this,d;c.wrapper="object"==typeof b?b:t.getElementById(b);
c.wrapper.style.overflow="hidden";c.scroller=c.wrapper.children[0];c.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:A,hideScrollbar:D,fadeScrollbar:D&&E,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(a){a.preventDefault()},onScrollStart:null,
onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(d in a)c.options[d]=a[d];c.x=c.options.x;c.y=c.options.y;c.options.useTransform=F&&c.options.useTransform;c.options.hScrollbar=c.options.hScroll&&c.options.hScrollbar;c.options.vScrollbar=c.options.vScroll&&c.options.vScrollbar;c.options.zoom=c.options.useTransform&&c.options.zoom;c.options.useTransition=K&&c.options.useTransition;c.options.zoom&&
A&&(p="");c.scroller.style[H]=c.options.useTransform?i+"transform":"top left";c.scroller.style[q]="0";c.scroller.style[I]="0 0";c.options.useTransition&&(c.scroller.style[J]="cubic-bezier(0.33,0.66,0.66,1)");c.options.useTransform?c.scroller.style[n]="translate("+c.x+"px,"+c.y+"px)"+p:c.scroller.style.cssText+=";position:absolute;top:"+c.y+"px;left:"+c.x+"px";c.options.useTransition&&(c.options.fixedScrollbar=!0);c.refresh();c._bind(B,h);c._bind(C);!l&&"none"!=c.options.wheelAction&&(c._bind("DOMMouseScroll"),
c._bind("mousewheel"));c.options.checkDOMChanges&&(c.checkDOMTime=setInterval(function(){c._checkDOMChanges()},500))};u.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(b){switch(b.type){case C:if(!l&&0!==b.button)break;this._start(b);break;case v:this._move(b);break;case w:case x:this._end(b);break;case B:this._resize();break;case "DOMMouseScroll":case "mousewheel":this._wheel(b);break;case r:this._transitionEnd(b)}},
_checkDOMChanges:function(){!this.moved&&!this.zoomed&&!(this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale)&&this.refresh()},_scrollbar:function(b){var a;this[b+"Scrollbar"]?(this[b+"ScrollbarWrapper"]||(a=t.createElement("div"),this.options.scrollbarClass?a.className=this.options.scrollbarClass+b.toUpperCase():a.style.cssText="position:absolute;z-index:100;"+("h"==b?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?
"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?"7":"2")+"px;top:2px;right:1px"),a.style.cssText+=";pointer-events:none;"+i+"transition-property:opacity;"+i+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(a),this[b+"ScrollbarWrapper"]=a,a=t.createElement("div"),this.options.scrollbarClass||(a.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+
i+"background-clip:padding-box;"+i+"box-sizing:border-box;"+("h"==b?"height:100%":"width:100%")+";"+i+"border-radius:3px;border-radius:3px"),a.style.cssText+=";pointer-events:none;"+i+"transition-property:"+i+"transform;"+i+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+i+"transition-duration:0;"+i+"transform: translate(0,0)"+p,this.options.useTransition&&(a.style.cssText+=";"+i+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[b+"ScrollbarWrapper"].appendChild(a),this[b+
"ScrollbarIndicator"]=a),"h"==b?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,this.hScrollbarIndicatorSize=f.max(f.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=f.max(f.round(this.vScrollbarSize*
this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(b,!0)):this[b+"ScrollbarWrapper"]&&(F&&(this[b+"ScrollbarIndicator"].style[n]=""),this[b+"ScrollbarWrapper"].parentNode.removeChild(this[b+"ScrollbarWrapper"]),this[b+"ScrollbarWrapper"]=null,this[b+"ScrollbarIndicator"]=null)},_resize:function(){var b=
this;setTimeout(function(){b.refresh()},A?200:0)},_pos:function(b,a){this.zoomed||(b=this.hScroll?b:0,a=this.vScroll?a:0,this.options.useTransform?this.scroller.style[n]="translate("+b+"px,"+a+"px) scale("+this.scale+")"+p:(b=f.round(b),a=f.round(a),this.scroller.style.left=b+"px",this.scroller.style.top=a+"px"),this.x=b,this.y=a,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(b,a){var c="h"==b?this.x:this.y;this[b+"Scrollbar"]&&(c*=this[b+"ScrollbarProp"],0>c?(this.options.fixedScrollbar||
(c=this[b+"ScrollbarIndicatorSize"]+f.round(3*c),8>c&&(c=8),this[b+"ScrollbarIndicator"].style["h"==b?"width":"height"]=c+"px"),c=0):c>this[b+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?c=this[b+"ScrollbarMaxScroll"]:(c=this[b+"ScrollbarIndicatorSize"]-f.round(3*(c-this[b+"ScrollbarMaxScroll"])),8>c&&(c=8),this[b+"ScrollbarIndicator"].style["h"==b?"width":"height"]=c+"px",c=this[b+"ScrollbarMaxScroll"]+(this[b+"ScrollbarIndicatorSize"]-c))),this[b+"ScrollbarWrapper"].style[z]="0",this[b+"ScrollbarWrapper"].style.opacity=
a&&this.options.hideScrollbar?"0":"1",this[b+"ScrollbarIndicator"].style[n]="translate("+("h"==b?c+"px,0)":"0,"+c+"px)")+p)},_start:function(b){var a=l?b.touches[0]:b,c,d;if(this.enabled){this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,b);(this.options.useTransition||this.options.zoom)&&this._transitionTime(0);this.zoomed=this.animating=this.moved=!1;this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0;this.options.zoom&&l&&1<b.touches.length&&(d=f.abs(b.touches[0].pageX-
b.touches[1].pageX),c=f.abs(b.touches[0].pageY-b.touches[1].pageY),this.touchesDistStart=f.sqrt(d*d+c*c),this.originX=f.abs(b.touches[0].pageX+b.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=f.abs(b.touches[0].pageY+b.touches[1].pageY-2*this.wrapperOffsetTop)/2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,b));if(this.options.momentum&&(this.options.useTransform?(c=getComputedStyle(this.scroller,null)[n].replace(/[^0-9\-.,]/g,"").split(","),d=+(c[12]||c[4]),
c=+(c[13]||c[5])):(d=+getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),c=+getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),d!=this.x||c!=this.y))this.options.useTransition?this._unbind(r):G(this.aniTime),this.steps=[],this._pos(d,c),this.options.onScrollEnd&&this.options.onScrollEnd.call(this);this.absStartX=this.x;this.absStartY=this.y;this.startX=this.x;this.startY=this.y;this.pointX=a.pageX;this.pointY=a.pageY;this.startTime=b.timeStamp||Date.now();this.options.onScrollStart&&
this.options.onScrollStart.call(this,b);this._bind(v,h);this._bind(w,h);this._bind(x,h)}},_move:function(b){var a=l?b.touches[0]:b,c=a.pageX-this.pointX,d=a.pageY-this.pointY,e=this.x+c,g=this.y+d,h=b.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,b);if(this.options.zoom&&l&&1<b.touches.length)e=f.abs(b.touches[0].pageX-b.touches[1].pageX),g=f.abs(b.touches[0].pageY-b.touches[1].pageY),this.touchesDist=f.sqrt(e*e+g*g),this.zoomed=!0,a=1/this.touchesDistStart*
this.touchesDist*this.scale,a<this.options.zoomMin?a=0.5*this.options.zoomMin*Math.pow(2,a/this.options.zoomMin):a>this.options.zoomMax&&(a=2*this.options.zoomMax*Math.pow(0.5,this.options.zoomMax/a)),this.lastScale=a/this.scale,e=this.originX-this.originX*this.lastScale+this.x,g=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[n]="translate("+e+"px,"+g+"px) scale("+a+")"+p,this.options.onZoom&&this.options.onZoom.call(this,b);else{this.pointX=a.pageX;this.pointY=a.pageY;if(0<e||
e<this.maxScrollX)e=this.options.bounce?this.x+c/2:0<=e||0<=this.maxScrollX?0:this.maxScrollX;if(g>this.minScrollY||g<this.maxScrollY)g=this.options.bounce?this.y+d/2:g>=this.minScrollY||0<=this.maxScrollY?this.minScrollY:this.maxScrollY;this.distX+=c;this.distY+=d;this.absDistX=f.abs(this.distX);this.absDistY=f.abs(this.distY);6>this.absDistX&&6>this.absDistY||(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(g=this.y,d=0):this.absDistY>this.absDistX+5&&(e=this.x,c=0)),this.moved=!0,this._pos(e,
g),this.dirX=0<c?-1:0>c?1:0,this.dirY=0<d?-1:0>d?1:0,300<h-this.startTime&&(this.startTime=h,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,b))}},_end:function(b){if(!(l&&0!==b.touches.length)){var a=this,c=l?b.changedTouches[0]:b,d,e,g={dist:0,time:0},j={dist:0,time:0},s=(b.timeStamp||Date.now())-a.startTime,k=a.x,i=a.y;a._unbind(v,h);a._unbind(w,h);a._unbind(x,h);a.options.onBeforeScrollEnd&&a.options.onBeforeScrollEnd.call(a,b);if(a.zoomed)k=
a.scale*a.lastScale,k=Math.max(a.options.zoomMin,k),k=Math.min(a.options.zoomMax,k),a.lastScale=k/a.scale,a.scale=k,a.x=a.originX-a.originX*a.lastScale+a.x,a.y=a.originY-a.originY*a.lastScale+a.y,a.scroller.style[q]="200ms",a.scroller.style[n]="translate("+a.x+"px,"+a.y+"px) scale("+a.scale+")"+p,a.zoomed=!1,a.refresh(),a.options.onZoomEnd&&a.options.onZoomEnd.call(a,b);else{if(a.moved){if(300>s&&a.options.momentum){g=k?a._momentum(k-a.startX,s,-a.x,a.scrollerW-a.wrapperW+a.x,a.options.bounce?a.wrapperW:
0):g;j=i?a._momentum(i-a.startY,s,-a.y,0>a.maxScrollY?a.scrollerH-a.wrapperH+a.y-a.minScrollY:0,a.options.bounce?a.wrapperH:0):j;k=a.x+g.dist;i=a.y+j.dist;if(0<a.x&&0<k||a.x<a.maxScrollX&&k<a.maxScrollX)g={dist:0,time:0};if(a.y>a.minScrollY&&i>a.minScrollY||a.y<a.maxScrollY&&i<a.maxScrollY)j={dist:0,time:0}}g.dist||j.dist?(g=f.max(f.max(g.time,j.time),10),a.options.snap&&(j=k-a.absStartX,s=i-a.absStartY,f.abs(j)<a.options.snapThreshold&&f.abs(s)<a.options.snapThreshold?a.scrollTo(a.absStartX,a.absStartY,
200):(j=a._snap(k,i),k=j.x,i=j.y,g=f.max(j.time,g))),a.scrollTo(f.round(k),f.round(i),g)):a.options.snap?(j=k-a.absStartX,s=i-a.absStartY,f.abs(j)<a.options.snapThreshold&&f.abs(s)<a.options.snapThreshold?a.scrollTo(a.absStartX,a.absStartY,200):(j=a._snap(a.x,a.y),(j.x!=a.x||j.y!=a.y)&&a.scrollTo(j.x,j.y,j.time))):a._resetPos(200)}else l&&(a.doubleTapTimer&&a.options.zoom?(clearTimeout(a.doubleTapTimer),a.doubleTapTimer=null,a.options.onZoomStart&&a.options.onZoomStart.call(a,b),a.zoom(a.pointX,a.pointY,
1==a.scale?a.options.doubleTapZoom:1),a.options.onZoomEnd&&setTimeout(function(){a.options.onZoomEnd.call(a,b)},200)):this.options.handleClick&&(a.doubleTapTimer=setTimeout(function(){a.doubleTapTimer=null;for(d=c.target;1!=d.nodeType;)d=d.parentNode;"SELECT"!=d.tagName&&"INPUT"!=d.tagName&&"TEXTAREA"!=d.tagName&&(e=t.createEvent("MouseEvents"),e.initMouseEvent("click",!0,!0,b.view,1,c.screenX,c.screenY,c.clientX,c.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,0,null),e._fake=!0,d.dispatchEvent(e))},
a.options.zoom?250:0))),a._resetPos(400);a.options.onTouchEnd&&a.options.onTouchEnd.call(a,b)}}},_resetPos:function(b){var a=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,c=this.y>=this.minScrollY||0<this.maxScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;if(a==this.x&&c==this.y){if(this.moved&&(this.moved=!1,this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==m&&(this.hScrollbarWrapper.style[z]="300ms"),
this.hScrollbarWrapper.style.opacity="0"),this.vScrollbar&&this.options.hideScrollbar)"webkit"==m&&(this.vScrollbarWrapper.style[z]="300ms"),this.vScrollbarWrapper.style.opacity="0"}else this.scrollTo(a,c,b||0)},_wheel:function(b){var a=this,c,d;if("wheelDeltaX"in b)c=b.wheelDeltaX/12,d=b.wheelDeltaY/12;else if("wheelDelta"in b)c=d=b.wheelDelta/12;else if("detail"in b)c=d=3*-b.detail;else return;if("zoom"==a.options.wheelAction){if(d=a.scale*Math.pow(2,1/3*(d?d/Math.abs(d):0)),d<a.options.zoomMin&&
(d=a.options.zoomMin),d>a.options.zoomMax&&(d=a.options.zoomMax),d!=a.scale)!a.wheelZoomCount&&a.options.onZoomStart&&a.options.onZoomStart.call(a,b),a.wheelZoomCount++,a.zoom(b.pageX,b.pageY,d,400),setTimeout(function(){a.wheelZoomCount--;!a.wheelZoomCount&&a.options.onZoomEnd&&a.options.onZoomEnd.call(a,b)},400)}else c=a.x+c,d=a.y+d,0<c?c=0:c<a.maxScrollX&&(c=a.maxScrollX),d>a.minScrollY?d=a.minScrollY:d<a.maxScrollY&&(d=a.maxScrollY),0>a.maxScrollY&&a.scrollTo(c,d,0)},_transitionEnd:function(b){b.target==
this.scroller&&(this._unbind(r),this._startAni())},_startAni:function(){var b=this,a=b.x,c=b.y,d=Date.now(),e,g,h;b.animating||(b.steps.length?(e=b.steps.shift(),e.x==a&&e.y==c&&(e.time=0),b.animating=!0,b.moved=!0,b.options.useTransition)?(b._transitionTime(e.time),b._pos(e.x,e.y),b.animating=!1,e.time?b._bind(r):b._resetPos(0)):(h=function(){var i=Date.now();if(i>=d+e.time){b._pos(e.x,e.y);b.animating=false;b.options.onAnimationEnd&&b.options.onAnimationEnd.call(b);b._startAni()}else{i=(i-d)/e.time-
1;g=f.sqrt(1-i*i);i=(e.x-a)*g+a;b._pos(i,(e.y-c)*g+c);if(b.animating)b.aniTime=L(h)}},h()):b._resetPos(400))},_transitionTime:function(b){b+="ms";this.scroller.style[q]=b;this.hScrollbar&&(this.hScrollbarIndicator.style[q]=b);this.vScrollbar&&(this.vScrollbarIndicator.style[q]=b)},_momentum:function(b,a,c,d,e){var a=f.abs(b)/a,g=a*a/0.0012;0<b&&g>c?(c+=e/(6/(6.0E-4*(g/a))),a=a*c/g,g=c):0>b&&g>d&&(d+=e/(6/(6.0E-4*(g/a))),a=a*d/g,g=d);return{dist:g*(0>b?-1:1),time:f.round(a/6.0E-4)}},_offset:function(b){for(var a=
-b.offsetLeft,c=-b.offsetTop;b=b.offsetParent;)a-=b.offsetLeft,c-=b.offsetTop;b!=this.wrapper&&(a*=this.scale,c*=this.scale);return{left:a,top:c}},_snap:function(b,a){var c,d,e;e=this.pagesX.length-1;c=0;for(d=this.pagesX.length;c<d;c++)if(b>=this.pagesX[c]){e=c;break}e==this.currPageX&&0<e&&0>this.dirX&&e--;b=this.pagesX[e];d=(d=f.abs(b-this.pagesX[this.currPageX]))?500*(f.abs(this.x-b)/d):0;this.currPageX=e;e=this.pagesY.length-1;for(c=0;c<e;c++)if(a>=this.pagesY[c]){e=c;break}e==this.currPageY&&
0<e&&0>this.dirY&&e--;a=this.pagesY[e];c=(c=f.abs(a-this.pagesY[this.currPageY]))?500*(f.abs(this.y-a)/c):0;this.currPageY=e;e=f.round(f.max(d,c))||200;return{x:b,y:a,time:e}},_bind:function(b,a,c){(a||this.scroller).addEventListener(b,this,!!c)},_unbind:function(b,a,c){(a||this.scroller).removeEventListener(b,this,!!c)},destroy:function(){this.scroller.style[n]="";this.vScrollbar=this.hScrollbar=!1;this._scrollbar("h");this._scrollbar("v");this._unbind(B,h);this._unbind(C);this._unbind(v,h);this._unbind(w,
h);this._unbind(x,h);this.options.hasTouch||(this._unbind("DOMMouseScroll"),this._unbind("mousewheel"));this.options.useTransition&&this._unbind(r);this.options.checkDOMChanges&&clearInterval(this.checkDOMTime);this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var b,a,c,d=0;a=0;this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin);this.wrapperW=this.wrapper.clientWidth||1;this.wrapperH=this.wrapper.clientHeight||1;this.minScrollY=-this.options.topOffset||0;
this.scrollerW=f.round(this.scroller.offsetWidth*this.scale);this.scrollerH=f.round((this.scroller.offsetHeight+this.minScrollY)*this.scale);this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY;this.dirY=this.dirX=0;this.options.onRefresh&&this.options.onRefresh.call(this);this.hScroll=this.options.hScroll&&0>this.maxScrollX;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);this.hScrollbar=
this.hScroll&&this.options.hScrollbar;this.vScrollbar=this.vScroll&&this.options.vScrollbar&&this.scrollerH>this.wrapperH;b=this._offset(this.wrapper);this.wrapperOffsetLeft=-b.left;this.wrapperOffsetTop=-b.top;if("string"==typeof this.options.snap){this.pagesX=[];this.pagesY=[];c=this.scroller.querySelectorAll(this.options.snap);b=0;for(a=c.length;b<a;b++)d=this._offset(c[b]),d.left+=this.wrapperOffsetLeft,d.top+=this.wrapperOffsetTop,this.pagesX[b]=d.left<this.maxScrollX?this.maxScrollX:d.left*
this.scale,this.pagesY[b]=d.top<this.maxScrollY?this.maxScrollY:d.top*this.scale}else if(this.options.snap){for(this.pagesX=[];d>=this.maxScrollX;)this.pagesX[a]=d,d-=this.wrapperW,a++;this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]);a=d=0;for(this.pagesY=[];d>=this.maxScrollY;)this.pagesY[a]=d,d-=this.wrapperH,a++;this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-
1]+this.pagesY[this.pagesY.length-1])}this._scrollbar("h");this._scrollbar("v");this.zoomed||(this.scroller.style[q]="0",this._resetPos(400))},scrollTo:function(b,a,c,d){var e=b;this.stop();e.length||(e=[{x:b,y:a,time:c,relative:d}]);b=0;for(a=e.length;b<a;b++)e[b].relative&&(e[b].x=this.x-e[b].x,e[b].y=this.y-e[b].y),this.steps.push({x:e[b].x,y:e[b].y,time:e[b].time||0});this._startAni()},scrollToElement:function(b,a){var c;if(b=b.nodeType?b:this.scroller.querySelector(b))c=this._offset(b),c.left+=
this.wrapperOffsetLeft,c.top+=this.wrapperOffsetTop,c.left=0<c.left?0:c.left<this.maxScrollX?this.maxScrollX:c.left,c.top=c.top>this.minScrollY?this.minScrollY:c.top<this.maxScrollY?this.maxScrollY:c.top,a=void 0===a?f.max(2*f.abs(c.left),2*f.abs(c.top)):a,this.scrollTo(c.left,c.top,a)},scrollToPage:function(b,a,c){c=void 0===c?400:c;this.options.onScrollStart&&this.options.onScrollStart.call(this);if(this.options.snap)b="next"==b?this.currPageX+1:"prev"==b?this.currPageX-1:b,a="next"==a?this.currPageY+
1:"prev"==a?this.currPageY-1:a,b=0>b?0:b>this.pagesX.length-1?this.pagesX.length-1:b,a=0>a?0:a>this.pagesY.length-1?this.pagesY.length-1:a,this.currPageX=b,this.currPageY=a,b=this.pagesX[b],a=this.pagesY[a];else if(b*=-this.wrapperW,a*=-this.wrapperH,b<this.maxScrollX&&(b=this.maxScrollX),a<this.maxScrollY)a=this.maxScrollY;this.scrollTo(b,a,c)},disable:function(){this.stop();this._resetPos(0);this.enabled=!1;this._unbind(v,h);this._unbind(w,h);this._unbind(x,h)},enable:function(){this.enabled=!0},
stop:function(){this.options.useTransition?this._unbind(r):G(this.aniTime);this.steps=[];this.animating=this.moved=!1},zoom:function(b,a,c,d){var e=c/this.scale;this.options.useTransform&&(this.zoomed=!0,d=void 0===d?200:d,b=b-this.wrapperOffsetLeft-this.x,a=a-this.wrapperOffsetTop-this.y,this.x=b-b*e+this.x,this.y=a-a*e+this.y,this.scale=c,this.refresh(),this.x=0<this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:
this.y,this.scroller.style[q]=d+"ms",this.scroller.style[n]="translate("+this.x+"px,"+this.y+"px) scale("+c+")"+p,this.zoomed=!1)},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}};y=null;"undefined"!==typeof exports?exports.iScroll=u:h.iScroll=u})(window,document);return iScroll});
