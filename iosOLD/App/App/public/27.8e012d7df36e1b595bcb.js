(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Y9WU:function(n,e,t){"use strict";t.d(e,"a",function(){return a});var o=t("tyNb"),r=t("pLZG"),i=(t("gcOT"),t("fXoL")),s=t("M2bA");let a=(()=>{class n{constructor(n,e){this.router=n,this.firebaseAnalytics=e,this.analyticsEnabled=!0,this.datos(),this.router.events.pipe(Object(r.a)(n=>n instanceof o.c)).subscribe(n=>{console.log("route changed: ",n.url),this.setScreenName(n.url)})}logEvent(n){this.firebaseAnalytics.logEvent("buscador",{page:n}).then(n=>console.log("este es el buscador",n)).catch(n=>console.error(n)),this.firebaseAnalytics.logEvent("buscador",{name:"buscador",params:{method:"parametro"}}).then(()=>console.log("si se traqueo")).catch(n=>console.log("Error event:",n))}setScreenName(n){this.firebaseAnalytics.setCurrentScreen(n).then(n=>console.log("esta es  la apgina guardada",n)).catch(n=>console.error(n))}datos(){this.firebaseAnalytics.setEnabled(!0)}}return n.\u0275fac=function(e){return new(e||n)(i.Rb(o.h),i.Rb(s.a))},n.\u0275prov=i.Gb({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},a8AL:function(n,e,t){"use strict";t.r(e),t.d(e,"RegisteruserPageModule",function(){return h});var o=t("ofXK"),r=t("3Pt+"),i=t("TEn/"),s=t("tyNb"),a=t("mrSG"),c=(t("gcOT"),t("fXoL")),l=t("H+bZ"),b=t("Y9WU");function g(n,e){1&n&&(c.Nb(0,"ion-row"),c.Nb(1,"ion-col",16),c.Nb(2,"ion-text",17),c.Nb(3,"h2",17),c.kc(4,"Nuevo usuario"),c.Mb(),c.Mb(),c.Mb(),c.Mb())}function u(n,e){1&n&&c.Lb(0,"ion-spinner",18)}const d=[{path:"",component:(()=>{class n{constructor(n,e,t,o,r,i,s,a){this.navCtrl=n,this.menu=e,this.service=t,this.route=o,this.router=r,this.analyticsService=i,this.toastController=s,this.alertController=a,this.spinner=!1,this.Sesion=!0,this.ver=!1,this.mostrarCampos=!1}ngOnInit(){}openMenu(){console.log("entro"),this.menu.open("custom")}register(){this.spinner=!0,this.service.registerUser({email:this.email,names:this.names,password:this.password}).then(n=>{this.spinner=!1,console.log("este es la respuesta",n),JSON.parse(JSON.stringify(n)).data?(this.color="success",this.presentToast(JSON.parse(JSON.stringify(n)).message),this.navCtrl.navigateRoot("/")):(this.color="danger",this.presentToast(JSON.parse(JSON.stringify(n)).message))},n=>{this.spinner=!1,console.log(n)})}presentToast(n){return Object(a.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:n,duration:3e3,color:this.color})).present()})}}return n.\u0275fac=function(e){return new(e||n)(c.Kb(i.R),c.Kb(i.P),c.Kb(l.a),c.Kb(s.a),c.Kb(s.h),c.Kb(b.a),c.Kb(i.X),c.Kb(i.a))},n.\u0275cmp=c.Eb({type:n,selectors:[["app-registeruser"]],decls:22,vars:6,consts:[[1,"ion-no-border"],["header",""],["slot","start"],["defaultHref","/tabs/profile2"],["src","/assets/img/logo.png",1,"logo"],["scrollEvents","true",2,"top","76px",3,"fullscreen"],[1,"fondo-login"],[4,"ngIf"],[1,"form","ion-margin","ion-padding"],["size","12",1,"ion-text-center"],["lines","none"],["placeholder","Nombre","type","text",1,"confondo",3,"ngModel","ngModelChange"],["placeholder","Email","type","email",1,"confondo",3,"ngModel","ngModelChange"],["placeholder","Contrase\xf1a","type","password",1,"confondo",3,"ngModel","ngModelChange"],[1,"btn","negroLocal",3,"click"],["name","crescent",4,"ngIf"],["size","12",1,"ion-text-center","ion-margin-vertical"],[1,"labelTitle"],["name","crescent"]],template:function(n,e){1&n&&(c.Nb(0,"ion-header",0,1),c.Nb(2,"ion-toolbar"),c.Nb(3,"ion-buttons",2),c.Nb(4,"ion-back-button",3),c.kc(5,"Volver"),c.Mb(),c.Mb(),c.Lb(6,"img",4),c.Mb(),c.Mb(),c.Nb(7,"ion-content",5),c.Nb(8,"ion-grid",6),c.jc(9,g,5,0,"ion-row",7),c.Nb(10,"ion-row",8),c.Nb(11,"ion-col",9),c.Nb(12,"ion-list",10),c.Nb(13,"ion-input",11),c.Vb("ngModelChange",function(n){return e.names=n}),c.Mb(),c.Nb(14,"ion-input",12),c.Vb("ngModelChange",function(n){return e.email=n}),c.Mb(),c.Nb(15,"ion-input",13),c.Vb("ngModelChange",function(n){return e.password=n}),c.Mb(),c.Mb(),c.Nb(16,"ion-row"),c.Nb(17,"ion-col",9),c.Nb(18,"ion-button",14),c.Vb("click",function(){return e.register()}),c.kc(19,"Registrarse"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(20,"ion-col",9),c.jc(21,u,1,0,"ion-spinner",15),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&n&&(c.Ab(7),c.ac("fullscreen",!0),c.Ab(2),c.ac("ngIf",e.Sesion),c.Ab(4),c.ac("ngModel",e.names),c.Ab(1),c.ac("ngModel",e.email),c.Ab(1),c.ac("ngModel",e.password),c.Ab(6),c.ac("ngIf",e.spinner))},directives:[i.u,i.M,i.i,i.f,i.g,i.r,i.t,o.j,i.D,i.q,i.z,i.w,i.W,r.e,r.f,i.h,i.K,i.G],styles:[".sc-ion-input-md-h[_ngcontent-%COMP%]{padding-top:5px;padding-bottom:5px}ion-list[_ngcontent-%COMP%]{background:#0000}ion-item.confondo[_ngcontent-%COMP%]{--background:#fed690;color:#000;opacity:.4;border-radius:10px;margin-bottom:10px}ion-item[_ngcontent-%COMP%]{--border-color:#0000;--background:#0000}.form[_ngcontent-%COMP%]{position:relative;top:20%}.btn[_ngcontent-%COMP%]{color:#fff}.fs-min[_ngcontent-%COMP%]{font-size:10px}.azulLocal[_ngcontent-%COMP%]{--background:#08cfd2}.negroLocal[_ngcontent-%COMP%]{--background:#000;width:100%}.labelTitle[_ngcontent-%COMP%]{color:#000;font-weight:600;font-size:30px;text-align:center}ion-avatar[_ngcontent-%COMP%]{width:50px;height:50px;margin-right:0}ion-card.tarjeta[_ngcontent-%COMP%]{--background:#fed690}.centrar[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}ion-input[_ngcontent-%COMP%]{--background:#fed690;--color:#000;margin-bottom:20px}.textLink[_ngcontent-%COMP%]{color:#000;text-decoration:underline}.textLinkBlue[_ngcontent-%COMP%]{color:#08cfd2}.fondo-login[_ngcontent-%COMP%]{background:#fff}"]}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.Ib({type:n}),n.\u0275inj=c.Hb({imports:[[s.k.forChild(d)],s.k]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.Ib({type:n}),n.\u0275inj=c.Hb({imports:[[o.b,r.a,i.N,p]]}),n})()}}]);