(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{cJxf:function(t,e,o){"use strict";o.r(e),o.d(e,"pwa_camera_modal",function(){return i});var n=o("At8z");const i=class{constructor(t){Object(n.h)(this,t),this.facingMode="user",this.onPhoto=Object(n.d)(this,"onPhoto",7),this.noDeviceError=Object(n.d)(this,"noDeviceError",7)}async present(){const t=document.createElement("pwa-camera-modal-instance");t.facingMode=this.facingMode,t.addEventListener("onPhoto",async t=>{this._modal&&this.onPhoto.emit(t.detail)}),t.addEventListener("noDeviceError",async t=>{this.noDeviceError.emit(t)}),document.body.append(t),this._modal=t}async dismiss(){this._modal&&(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null)}render(){return Object(n.g)("div",null)}static get style(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}"}}}}]);