(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/LvK":function(e,t,n){"use strict";n.r(t),n.d(t,"ForoPageModule",function(){return N});var o=n("ofXK"),i=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),a=n("mrSG"),c=n("fXoL"),l=n("H+bZ"),u=n("Y9WU"),b=n("Ut7A");function p(e,t){1&e&&c.Lb(0,"ion-spinner",14)}function d(e,t){if(1&e&&(c.Nb(0,"ion-grid"),c.Nb(1,"ion-row"),c.Nb(2,"ion-col",12),c.jc(3,p,1,0,"ion-spinner",13),c.Mb(),c.Mb(),c.Mb()),2&e){const e=c.Xb();c.Ab(3),c.ac("ngIf",e.spinnerGeneral)}}function h(e,t){if(1&e&&(c.Nb(0,"ion-item",23),c.Nb(1,"ion-avatar",2),c.Lb(2,"img",19),c.Mb(),c.Nb(3,"ion-label"),c.Nb(4,"h2"),c.kc(5),c.Mb(),c.Nb(6,"p"),c.kc(7),c.Mb(),c.Mb(),c.Mb()),2&e){const e=t.$implicit;c.Ab(5),c.lc(e.answer),c.Ab(2),c.lc(e.user.names)}}function g(e,t){if(1&e){const e=c.Ob();c.Nb(0,"ion-row",17),c.Nb(1,"ion-col",18),c.Nb(2,"ion-item"),c.Nb(3,"ion-avatar",2),c.Lb(4,"img",19),c.Mb(),c.Nb(5,"ion-label"),c.Nb(6,"h2",20),c.kc(7),c.Mb(),c.Nb(8,"p"),c.kc(9),c.Mb(),c.Mb(),c.Mb(),c.jc(10,h,8,2,"ion-item",21),c.Nb(11,"ion-item"),c.Lb(12,"ion-input",22),c.Nb(13,"button",10),c.Vb("click",function(){c.ec(e);const n=t.$implicit;return c.Xb(2).enviarRespuesta(n.id)}),c.Lb(14,"ion-icon",11),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&e){const e=t.$implicit;c.Ab(7),c.lc(e.question),c.Ab(2),c.lc(e.user.names),c.Ab(1),c.ac("ngForOf",e.answers),c.Ab(2),c.bc("id","respuesta",e.id,"")}}function f(e,t){if(1&e&&(c.Nb(0,"ion-grid",15),c.jc(1,g,15,4,"ion-row",16),c.Mb()),2&e){const e=c.Xb();c.Ab(1),c.ac("ngForOf",e.preguntas)}}const m=[{path:"",component:(()=>{class e{constructor(e,t,n,o,i,s,r,a,c,l){this.navCtrl=e,this.menu=t,this.service=n,this.route=o,this.platform=i,this.router=s,this.domCtrl=r,this.toastController=a,this.alertController=c,this.analyticsService=l,this.spinnerFeatured=!1,this.spinnerDecoration=!1,this.spinnerCosmetic=!1,this.spinnerBook=!1,this.precioPorcentajeBook="",this.precioPorcentajeCosmetic="",this.precioPorcentajeDecoration="",this.precioPorcentajeFeature="",this.spinnerGeneral=!1,this.slideOpts={slidesPerView:2,pagination:!1,initialSlide:0,speed:400},this.slideOpts2={slidesPerView:3,pagination:!1,initialSlide:0,autoplay:!0,speed:300}}ngOnInit(){}ionViewWillEnter(){let e=localStorage.getItem("user");this.idUsuario=JSON.parse(e).id,console.log("idusuario",this.idUsuario),this.preguntasRespuestas()}openMenu(){console.log("entro"),this.menu.open("custom")}gotopoliticas(){this.navCtrl.navigateForward("politicas")}preguntasRespuestas(){this.spinnerGeneral=!0,this.service.getQuestions().then(e=>{this.spinnerGeneral=!1,this.preguntas=JSON.parse(JSON.stringify(e)).data,console.log("esta anwers",e)},e=>{this.spinnerGeneral=!1,console.log(e)})}storeGuardado(e){this.service.storeGuardados({idVideo:e,idUsuario:this.idUsuario}).then(e=>{console.log("guardo el video",e)},e=>{console.log(e)})}enviarRespuesta(e){let t=document.getElementById("respuesta"+e).value;console.log("esta es la respuesta",t),this.service.responder({answer:t,question_id:e,user_id:this.idUsuario}).then(e=>{console.log("guardo la respoesta",e),this.presentToast("Has enviado una respuesta"),this.preguntasRespuestas(),this.respuesta=""},e=>{console.log(e)})}enviarPregunta(){console.log("respues",this.respuesta),this.service.preguntar({question:this.preguntar,user_id:this.idUsuario}).then(e=>{console.log("guardo la pregunta",e),this.presentToast("Has enviado una respuesta"),this.preguntasRespuestas(),this.respuesta=""},e=>{console.log(e)})}presentToast(e){return Object(a.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:e,duration:3e3,color:"success"})).present()})}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(s.R),c.Kb(s.P),c.Kb(l.a),c.Kb(r.a),c.Kb(s.U),c.Kb(r.h),c.Kb(s.c),c.Kb(s.X),c.Kb(s.a),c.Kb(u.a))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-foro"]],decls:19,vars:5,consts:[[1,"ion-no-border"],["header",""],["slot","start"],["defaultHref","/tabs/home"],["src","/assets/img/logo.png",1,"logo"],["scrollEvents","true",2,"top","76px",3,"fullscreen","appHideHeader"],[1,"tituloCard","ion-text-center"],[4,"ngIf"],["style","    margin-bottom: 50px;",4,"ngIf"],["type","text","placeholder","Realiza una nueva pregunta...",1,"inputResponder",3,"ngModel","ngModelChange"],["clear","","item-right","",1,"botonEnviar",3,"click"],["name","send"],["size","12",1,"ion-text-center"],["name","crescent",4,"ngIf"],["name","crescent"],[2,"margin-bottom","50px"],["class","mb-30",4,"ngFor","ngForOf"],[1,"mb-30"],["size","12"],["src","assets/img/avatar.jpg"],[1,"colorTitulo"],["class","respuesta",4,"ngFor","ngForOf"],["type","text","placeholder","Responder...",1,"inputResponder",3,"id"],[1,"respuesta"]],template:function(e,t){if(1&e&&(c.Nb(0,"ion-header",0,1),c.Nb(2,"ion-toolbar"),c.Nb(3,"ion-buttons",2),c.Nb(4,"ion-back-button",3),c.kc(5,"Volver"),c.Mb(),c.Mb(),c.Lb(6,"img",4),c.Mb(),c.Mb(),c.Nb(7,"ion-content",5),c.Nb(8,"ion-list"),c.Nb(9,"ion-card-title",6),c.kc(10,"CAFETER\xcdA VIRTUAL"),c.Mb(),c.jc(11,d,4,1,"ion-grid",7),c.jc(12,f,2,1,"ion-grid",8),c.Mb(),c.Mb(),c.Nb(13,"ion-footer"),c.Nb(14,"ion-toolbar"),c.Nb(15,"ion-item"),c.Nb(16,"ion-input",9),c.Vb("ngModelChange",function(e){return t.preguntar=e}),c.Mb(),c.Nb(17,"button",10),c.Vb("click",function(){return t.enviarPregunta()}),c.Lb(18,"ion-icon",11),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&e){const e=c.dc(1);c.Ab(7),c.ac("fullscreen",!0)("appHideHeader",e),c.Ab(4),c.ac("ngIf",t.spinnerGeneral),c.Ab(1),c.ac("ngIf",t.preguntas),c.Ab(4),c.ac("ngModel",t.preguntar)}},directives:[s.u,s.M,s.i,s.f,s.g,s.r,b.a,s.z,s.n,o.j,s.s,s.x,s.w,s.W,i.e,i.f,s.v,s.t,s.D,s.q,s.G,o.i,s.e,s.y],styles:[".respuesta[_ngcontent-%COMP%]{margin-left:30px}.colorTitulo[_ngcontent-%COMP%]{color:#00ced1}.mb-30[_ngcontent-%COMP%]{margin-bottom:30px}.inputResponder[_ngcontent-%COMP%]{border:1px solid #c9c9c9;border-radius:10px;padding:5px}.botonEnviar[_ngcontent-%COMP%]{height:37px;width:37px;color:#fff;background:#0000}ion-input[_ngcontent-%COMP%]{--padding-start:8px!important}.tituloCard[_ngcontent-%COMP%]{color:#fff}ion-content.ios[_ngcontent-%COMP%]{top:100px!important}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({imports:[[r.k.forChild(m)],r.k]}),e})();var v=n("Fgaq");let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({imports:[[o.b,i.a,s.N,M,v.a]]}),e})()},Fgaq:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("ofXK"),i=n("fXoL");let s=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.Ib({type:e}),e.\u0275inj=i.Hb({imports:[[o.b]]}),e})()},Ut7A:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n("1Bn7"),i=n("fXoL"),s=n("TEn/");let r=(()=>{class e{constructor(e,t){this.renderer=e,this.domCtrl=t,this.headerHeight=Object(o.m)("ios")?44:56}ngAfterViewInit(){this.header=this.header.el,this.children=this.header.children}onContentScroll(e){const t=e.detail.scrollTop;if(t<0)return;let n=-t/2;n<-this.headerHeight&&(n=-this.headerHeight);let o=1-n/-this.headerHeight;this.domCtrl.write(()=>{this.renderer.setStyle(this.header,"top",n+"px");for(let e of this.children)this.renderer.setStyle(e,"opacity",o)})}}return e.\u0275fac=function(t){return new(t||e)(i.Kb(i.F),i.Kb(s.c))},e.\u0275dir=i.Fb({type:e,selectors:[["","appHideHeader",""]],hostBindings:function(e,t){1&e&&i.Vb("ionScroll",function(e){return t.onContentScroll(e)})},inputs:{header:["appHideHeader","header"]}}),e})()},Y9WU:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("tyNb"),i=n("pLZG"),s=(n("gcOT"),n("fXoL")),r=n("M2bA");let a=(()=>{class e{constructor(e,t){this.router=e,this.firebaseAnalytics=t,this.analyticsEnabled=!0,this.datos(),this.router.events.pipe(Object(i.a)(e=>e instanceof o.c)).subscribe(e=>{console.log("route changed: ",e.url),this.setScreenName(e.url)})}logEvent(e){this.firebaseAnalytics.logEvent("buscador",{page:e}).then(e=>console.log("este es el buscador",e)).catch(e=>console.error(e)),this.firebaseAnalytics.logEvent("buscador",{name:"buscador",params:{method:"parametro"}}).then(()=>console.log("si se traqueo")).catch(e=>console.log("Error event:",e))}setScreenName(e){this.firebaseAnalytics.setCurrentScreen(e).then(e=>console.log("esta es  la apgina guardada",e)).catch(e=>console.error(e))}datos(){this.firebaseAnalytics.setEnabled(!0)}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(o.h),s.Rb(r.a))},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);