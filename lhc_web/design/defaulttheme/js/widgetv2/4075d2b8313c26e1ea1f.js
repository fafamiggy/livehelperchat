(window.webpackJsonpLiveHelperChat=window.webpackJsonpLiveHelperChat||[]).push([[5],{29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.screenShare=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1);var s=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params={},this.attributes=null,this.chatEvents=null,this.isSharing=!1,this.sharemode="chat",this.sharehash=null,this.cobrowser=null}return r(e,[{key:"startCoBrowse",value:function(e){var t=this;if(void 0===n)var n=!1;this.isSharing=!0,this.cobrowser=new LHCCoBrowser({formsenabled:n,chat_hash:this.sharehash,nodejssettings:e.nodejssettings,nodejsenabled:e.nodejsenabled,trans:e.trans,url:e.url+"/(hash)/"+this.sharehash+"/?url="+encodeURIComponent(location.href.match(/^(.*\/)[^\/]*$/)[1])}),this.cobrowser.startMirroring();var r=function(e){t.cobrowser&&t.cobrowser.handleMessage(e.split(":"))};this.attributes.eventEmitter.addListener("screenshareCommand",r),this.attributes.eventEmitter.addOnceListener("finishScreenSharing",(function(e){o.helperFunctions.removeById("lhc_status_mirror"),t.attributes.storageHandler.removeSessionStorage("LHC_screenshare"),t.isSharing=!1;var n=document.getElementsByTagName("head")[0],s=document.createElement("script");encodeURIComponent(window.location.href.substring(window.location.protocol.length));s.setAttribute("id","lhc_finish_shr"),s.setAttribute("type","text/javascript"),s.setAttribute("src",LHC_API.args.lhc_base_url+"/cobrowse/finishsession/(sharemode)/chat/(hash)/"+t.sharehash),n.appendChild(s),t.cobrowser=null,t.attributes.eventEmitter.removeListener("screenshareCommand",r)})),this.attributes.storageHandler.setSessionStorage("LHC_screenshare",1)}},{key:"setParams",value:function(e,t,n){var r=this;this.params=e,this.attributes=t,this.chatEvents=n;var s=this.attributes.userSession.getSessionAttributes();this.sharehash=s.id+"_"+s.hash,0==this.isSharing&&o.helperFunctions.makeRequest(LHC_API.args.lhc_base_url+"/widgetrestapi/screensharesettings",{},(function(e){if(r.params.auto_start||1==e.auto_share)r.initCoBrowsing(e);else{r.addCss(".lhc-modal {display: none; position: fixed; z-index: 1000001 !important;padding-top: 100px;left: 0;top: 0;  width: 100%;height: 100%; overflow: auto; background-color: rgb(0,0,0);  background-color: rgba(0,0,0,0.4); }.lhc-modal-content {background-color: #fefefe; margin: auto; padding: 20px; border: 1px solid #888; width: 60%;border-radius:5px; }#lhc-close { color: #aaaaaa;    float: right;  font-size: 28px;    font-weight: bold;  }#lhc-close:hover,#lhc-close:focus {color: #000; text-decoration: none; cursor: pointer;}"),r.appendHTML('<div id="lhc-co-browsing-modal" style="display: block" class="lhc-modal"><div class="lhc-modal-content"><span id="lhc-close">&times;</span><p style="text-align: center"><button id="lhc-start-share-session" style="background-color: #4CAF50;  border: none;  color: white;  padding: 7px 16px;  text-align: center;border-radius:5px;  text-decoration: none;  display: inline-block;  font-size: 16px;  margin: 4px 2px;  cursor: pointer;">'+e.trans.start_share+'</button><button id="lhc-deny-share-session" style="background-color: #d2404a;  border: none;  color: white;  padding: 7px 16px;  text-align: center;border-radius:5px;  text-decoration: none;  display: inline-block;  font-size: 16px;  margin: 4px 2px;  cursor: pointer;">'+e.trans.deny+"</button></p></div></div>");var t=document.getElementById("lhc-close"),n=document.getElementById("lhc-deny-share-session"),o=document.getElementById("lhc-co-browsing-modal");n.onclick=t.onclick=function(){r.removeById("lhc-co-browsing-modal")},window.addEventListener("click",(function(e){e.target==o&&r.removeById("lhc-co-browsing-modal")})),document.getElementById("lhc-start-share-session").onclick=function(){r.removeById("lhc-co-browsing-modal"),r.initCoBrowsing(e)}}}))}},{key:"removeById",value:function(e){var t=null;return!!(t=document.getElementById(e))&&t.parentNode.removeChild(t)}},{key:"appendHTML",value:function(e){var t=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=e;n.firstChild;)t.appendChild(n.firstChild);document.body.insertBefore(t,document.body.childNodes[0])}},{key:"addCss",value:function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("style");if(n.type="text/css",n.styleSheet)n.styleSheet.cssText=e;else{var r=document.createTextNode(e);n.appendChild(r)}t.appendChild(n)}},{key:"initCoBrowsing",value:function(e){var t=this;if("undefined"==typeof TreeMirror){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("src",e.cobrowser),n.appendChild(r),r.onreadystatechange=r.onload=function(){t.startCoBrowse(e)}}else this.startCoBrowse(e)}}]),e}());t.screenShare=s}}]);