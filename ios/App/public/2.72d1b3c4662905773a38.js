(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Fgaq:function(t,n,o){"use strict";o.d(n,"a",function(){return c});var i=o("ofXK"),e=o("fXoL");let c=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.Ib({type:t}),t.\u0275inj=e.Hb({imports:[[i.b]]}),t})()},Ut7A:function(t,n,o){"use strict";o.d(n,"a",function(){return r});var i=o("1Bn7"),e=o("fXoL"),c=o("TEn/");let r=(()=>{class t{constructor(t,n){this.renderer=t,this.domCtrl=n,this.headerHeight=Object(i.m)("ios")?44:56}ngAfterViewInit(){this.header=this.header.el,this.children=this.header.children}onContentScroll(t){const n=t.detail.scrollTop;if(n<0)return;let o=-n/2;o<-this.headerHeight&&(o=-this.headerHeight);let i=1-o/-this.headerHeight;this.domCtrl.write(()=>{this.renderer.setStyle(this.header,"top",o+"px");for(let t of this.children)this.renderer.setStyle(t,"opacity",i)})}}return t.\u0275fac=function(n){return new(n||t)(e.Kb(e.F),e.Kb(c.b))},t.\u0275dir=e.Fb({type:t,selectors:[["","appHideHeader",""]],hostBindings:function(t,n){1&t&&e.Vb("ionScroll",function(t){return n.onContentScroll(t)})},inputs:{header:["appHideHeader","header"]}}),t})()},nHwc:function(t,n,o){"use strict";o.r(n),o.d(n,"HomeCategoriasPageModule",function(){return H});var i=o("ofXK"),e=o("3Pt+"),c=o("TEn/"),r=o("tyNb"),a=o("mrSG"),s=o("fXoL"),g=o("H+bZ"),l=o("Ut7A");function b(t,n){1&t&&s.Lb(0,"ion-spinner",10)}function p(t,n){if(1&t&&(s.Nb(0,"ion-grid"),s.Nb(1,"ion-row"),s.Nb(2,"ion-col",8),s.jc(3,b,1,0,"ion-spinner",9),s.Mb(),s.Mb(),s.Mb()),2&t){const t=s.Xb(2);s.Ab(3),s.ac("ngIf",t.spinnerFeatured)}}function d(t,n){1&t&&s.Lb(0,"ion-icon",26)}function u(t,n){1&t&&s.Lb(0,"ion-icon",27)}function h(t,n){1&t&&s.Lb(0,"ion-icon",28)}function f(t,n){1&t&&s.Lb(0,"ion-icon",29)}function m(t,n){if(1&t&&(s.Nb(0,"ion-grid",19),s.Nb(1,"ion-row"),s.Nb(2,"ion-col",20),s.Nb(3,"ion-chip",21),s.jc(4,d,1,0,"ion-icon",22),s.jc(5,u,1,0,"ion-icon",23),s.jc(6,h,1,0,"ion-icon",24),s.jc(7,f,1,0,"ion-icon",25),s.Nb(8,"ion-label"),s.kc(9),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&t){const t=s.Xb().$implicit;s.Ab(4),s.ac("ngIf","Lecciones"==t.tags),s.Ab(1),s.ac("ngIf","Preguntas"==t.tags),s.Ab(1),s.ac("ngIf","Dosis diaria"==t.tags),s.Ab(1),s.ac("ngIf","Programa"==t.tags),s.Ab(2),s.lc(t.tags)}}function M(t,n){1&t&&(s.Nb(0,"ion-col",30),s.Nb(1,"a",31),s.Lb(2,"img",32),s.Mb(),s.Mb())}function C(t,n){if(1&t){const t=s.Ob();s.Nb(0,"ion-col",13),s.Nb(1,"a",14),s.Vb("click",function(){s.ec(t);const o=n.$implicit;return s.Xb(4).cursosVistos(o.id)}),s.Lb(2,"img",15),s.jc(3,m,10,5,"ion-grid",16),s.Nb(4,"ion-grid",17),s.Nb(5,"ion-row"),s.jc(6,M,3,0,"ion-col",18),s.Mb(),s.Mb(),s.Mb(),s.Mb()}if(2&t){const t=n.$implicit;s.Ab(1),s.bc("routerLink","/tabs/detailCurso/",t.id,""),s.Ab(1),s.ac("src",t&&null==t.url_image?"assets/img/portada.jpg":t.url_image,s.gc),s.Ab(1),s.ac("ngIf",t&&""!=t.tags||null!=t.tags),s.Ab(3),s.ac("ngIf",1==t.premiun)}}function O(t,n){if(1&t&&(s.Nb(0,"ion-row"),s.jc(1,C,7,4,"ion-col",12),s.Mb()),2&t){const t=n.$implicit;s.Ab(1),s.ac("ngForOf",t.cursos)}}function x(t,n){if(1&t&&(s.Nb(0,"ion-grid"),s.jc(1,O,2,1,"ion-row",11),s.Mb()),2&t){const t=s.Xb(2);s.Ab(1),s.ac("ngForOf",t.categories)}}function P(t,n){1&t&&s.Lb(0,"ion-icon",26)}function _(t,n){1&t&&s.Lb(0,"ion-icon",27)}function w(t,n){1&t&&s.Lb(0,"ion-icon",28)}function N(t,n){1&t&&s.Lb(0,"ion-icon",29)}function I(t,n){if(1&t&&(s.Nb(0,"ion-grid",19),s.Nb(1,"ion-row"),s.Nb(2,"ion-col",20),s.Nb(3,"ion-chip",21),s.jc(4,P,1,0,"ion-icon",22),s.jc(5,_,1,0,"ion-icon",23),s.jc(6,w,1,0,"ion-icon",24),s.jc(7,N,1,0,"ion-icon",25),s.Nb(8,"ion-label"),s.kc(9),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&t){const t=s.Xb().$implicit;s.Ab(4),s.ac("ngIf","Lecciones"==t.tags),s.Ab(1),s.ac("ngIf","Preguntas"==t.tags),s.Ab(1),s.ac("ngIf","Dosis diaria"==t.tags),s.Ab(1),s.ac("ngIf","Programa"==t.tags),s.Ab(2),s.lc(t.tags)}}function k(t,n){1&t&&(s.Nb(0,"ion-col",30),s.Nb(1,"a",31),s.Lb(2,"img",32),s.Mb(),s.Mb())}function y(t,n){if(1&t){const t=s.Ob();s.Nb(0,"ion-col",13),s.Nb(1,"a",14),s.Vb("click",function(){s.ec(t);const o=n.$implicit;return s.Xb(3).cursosVistos(o.id)}),s.Lb(2,"img",15),s.jc(3,I,10,5,"ion-grid",16),s.Nb(4,"ion-grid",17),s.Nb(5,"ion-row"),s.jc(6,k,3,0,"ion-col",18),s.Mb(),s.Mb(),s.Mb(),s.Mb()}if(2&t){const t=n.$implicit;s.Ab(1),s.bc("routerLink","/tabs/detailCurso/",t.id,""),s.Ab(1),s.ac("src",t&&null==t.url_image?"assets/img/portada.jpg":t.url_image,s.gc),s.Ab(1),s.ac("ngIf",t&&""!=t.tags||null!=t.tags),s.Ab(3),s.ac("ngIf",1==t.premiun)}}function A(t,n){if(1&t&&(s.Nb(0,"ion-grid"),s.Nb(1,"ion-row"),s.jc(2,y,7,4,"ion-col",12),s.Mb(),s.Mb()),2&t){const t=s.Xb(2);s.Ab(2),s.ac("ngForOf",t.categories)}}function j(t,n){if(1&t&&(s.Nb(0,"ion-row"),s.Nb(1,"ion-col",7),s.jc(2,p,4,1,"ion-grid",6),s.jc(3,x,2,1,"ion-grid",6),s.jc(4,A,3,1,"ion-grid",6),s.Mb(),s.Mb()),2&t){const t=s.Xb();s.Ab(2),s.ac("ngIf",t.spinnerFeatured),s.Ab(1),s.ac("ngIf",0==t.tagsss),s.Ab(1),s.ac("ngIf",1==t.tagsss)}}const v=[{path:"",component:(()=>{class t{constructor(t,n,o,i,e,c,r,a){this.navCtrl=t,this.menu=n,this.service=o,this.route=i,this.platform=e,this.router=c,this.domCtrl=r,this.toastController=a,this.tagsss=0,this.spinnerFeatured=!1,this.spinnerDecoration=!1,this.spinnerCosmetic=!1,this.spinnerBook=!1,this.cateSpinner=!1,this.slideOpts={slidesPerView:2,pagination:!1,initialSlide:0,speed:400},this.slideOpts2={slidesPerView:3,pagination:!1,initialSlide:0,autoplay:!0,speed:300}}ngOnInit(){}ionViewWillEnter(){let t=localStorage.getItem("user");this.idUsuario=JSON.parse(t).id,console.log("idusuario",this.idUsuario),console.log("esta es la categoria",this.route.snapshot.paramMap.get("id")),this.getCursos()}openMenu(){console.log("entro"),this.menu.open("custom")}gotopoliticas(){this.navCtrl.navigateForward("politicas")}getCursos(){this.cateSpinner=!0,this.route.snapshot.paramMap.get("id")&&(this.tagsss=0,console.log("aqui entramos en id"),this.service.categoriesIndex({category_id:this.route.snapshot.paramMap.get("id")}).then(t=>{this.cateSpinner=!1,this.categories=JSON.parse(JSON.stringify(t)).data,console.log("esta categoria cursois",this.categories)},t=>{this.cateSpinner=!1,console.log(t)})),this.route.snapshot.paramMap.get("tag")&&(this.tagsss=1,console.log("aqui entramos en tag"),this.service.categoriesIndex({tag:this.route.snapshot.paramMap.get("tag")}).then(t=>{this.cateSpinner=!1,this.categories=JSON.parse(JSON.stringify(t)).data,console.log("esta categoria cursois",this.categories)},t=>{this.cateSpinner=!1,console.log(t)}))}cursosVistos(t){this.cateSpinner=!0,this.service.cursosMasVistos(t).then(t=>{console.log("esta categoria cursois",t),this.categories=JSON.parse(JSON.stringify(t)).data},t=>{console.log(t)})}storeGuardado(t){this.service.storeGuardados({idVideo:t,idUsuario:this.idUsuario}).then(t=>{console.log("guardo el video",t),this.presentToast("Ha guardado el curso!")},t=>{console.log(t)})}presentToast(t){return Object(a.a)(this,void 0,void 0,function*(){(yield this.toastController.create({message:t,duration:3e3,color:"success"})).present()})}}return t.\u0275fac=function(n){return new(n||t)(s.Kb(c.O),s.Kb(c.M),s.Kb(g.a),s.Kb(r.a),s.Kb(c.P),s.Kb(r.h),s.Kb(c.b),s.Kb(c.S))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-home-categorias"]],decls:11,vars:3,consts:[[1,"ion-no-border"],["header",""],["slot","start"],["defaultHref","/tabs/home"],["src","/assets/img/logo.png",1,"logo"],["scrollEvents","true",2,"top","76px",3,"fullscreen","appHideHeader"],[4,"ngIf"],["size","12"],["size","12",1,"ion-text-center"],["name","crescent",4,"ngIf"],["name","crescent"],[4,"ngFor","ngForOf"],["size","4","style","height: 168px;",4,"ngFor","ngForOf"],["size","4",2,"height","168px"],[3,"routerLink","click"],[1,"tamanoImg",3,"src"],["class","claGrid",4,"ngIf"],[1,"coraPremiun"],["size","6","style","text-align: left;",4,"ngIf"],[1,"claGrid"],["size","12",2,"text-align","center"],[1,"bckChip"],["name","school-outline","color","primary",4,"ngIf"],["name","chatbubble-ellipses-outline","color","primary",4,"ngIf"],["name","sunny-outline","color","primary",4,"ngIf"],["name","bulb-outline","color","primary",4,"ngIf"],["name","school-outline","color","primary"],["name","chatbubble-ellipses-outline","color","primary"],["name","sunny-outline","color","primary"],["name","bulb-outline","color","primary"],["size","6",2,"text-align","left"],["href","#"],["src","/assets/img/premiun.png",2,"width","18px"]],template:function(t,n){if(1&t&&(s.Nb(0,"ion-header",0,1),s.Nb(2,"ion-toolbar"),s.Nb(3,"ion-buttons",2),s.Nb(4,"ion-back-button",3),s.kc(5,"Volver"),s.Mb(),s.Mb(),s.Lb(6,"img",4),s.Mb(),s.Mb(),s.Nb(7,"ion-content",5),s.Nb(8,"ion-list"),s.Nb(9,"ion-grid"),s.jc(10,j,5,3,"ion-row",6),s.Mb(),s.Mb(),s.Mb()),2&t){const t=s.dc(1);s.Ab(7),s.ac("fullscreen",!0)("appHideHeader",t),s.Ab(3),s.ac("ngIf",n.categories)}},directives:[c.s,c.J,c.h,c.e,c.f,c.p,l.a,c.x,c.r,i.j,c.A,c.o,c.D,i.i,r.j,c.Q,c.n,c.w,c.t],styles:[".background-image[_ngcontent-%COMP%]{--background:url(Comercios_locales.6555a20f2926067c85dc.png) 0 0/100% 100% no-repeat}.background-imageProducts[_ngcontent-%COMP%]{--background:url(Productos_.60f4d0ed20a9488c6b42.png) 0 0/100% 100% no-repeat}.background-imageSostenible[_ngcontent-%COMP%]{--background:url(Comercios_sostenibles.fc074825b711a41a5cf1.png) 0 0/100% 100% no-repeat}.pd-20[_ngcontent-%COMP%]{background:#ffffffb8;padding:10px}.iimg2[_ngcontent-%COMP%]{--min-height:150px;margin-bottom:20px;padding:5px;border-radius:25px}.colorText[_ngcontent-%COMP%]{color:#00ced1}.tag[_ngcontent-%COMP%]{position:relative;top:25px;background:#000000ba;color:#fff;width:70%;font-size:12px;font-weight:700;padding:5px}.valignIcon[_ngcontent-%COMP%]{vertical-align:bottom}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:100%;height:150px;max-height:100%}.tag2[_ngcontent-%COMP%]{position:absolute;left:109px;width:60px;height:60px}@media (min-width:425px){.tag2[_ngcontent-%COMP%]{position:absolute;left:130px;width:60px;height:60px}}a[_ngcontent-%COMP%]{color:#000}ion-item[_ngcontent-%COMP%]{--min-height:90px;margin-bottom:20px;padding:5px;border-radius:25px}.classCol[_ngcontent-%COMP%]{padding-left:20px;text-align:left}.ios[_ngcontent-%COMP%]   .title-large[_ngcontent-%COMP%]{font-size:20px}.ios[_ngcontent-%COMP%] > .tag2[_ngcontent-%COMP%]{left:85px}ion-item.ios[_ngcontent-%COMP%]{margin-bottom:30px}.tag3[_ngcontent-%COMP%]{position:absolute;background-color:#00ced1;padding:10px;color:#fff}.txt-center[_ngcontent-%COMP%]{text-align:center}.dplb[_ngcontent-%COMP%]{display:inline-block}.wdt100[_ngcontent-%COMP%]{width:100%}.avater[_ngcontent-%COMP%]{width:100px;height:100px;margin-left:auto;margin-right:auto}.imgFondito[_ngcontent-%COMP%]{width:98%;border-radius:10px}.tituloCard[_ngcontent-%COMP%]{font-size:19px;text-align:center}.letrasTitulo[_ngcontent-%COMP%]{top:-31px;color:#000;font-weight:600;background:#ffffff7d}p[_ngcontent-%COMP%]{margin:0}.pdtop[_ngcontent-%COMP%]{padding-top:0}.wdt-100[_ngcontent-%COMP%]{width:100%}.bckChip[_ngcontent-%COMP%]{background:#e0e2e1}.mxh[_ngcontent-%COMP%]{max-height:155px}.logo[_ngcontent-%COMP%]{margin-left:16px;width:45%}ion-content[_ngcontent-%COMP%]{--offset-top:0px;position:absolute}.spotlight[_ngcontent-%COMP%]{width:100%;height:50vh;background-position:50%;background-size:cover;margin-bottom:20px;position:relative}.spotlight[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(#fff0 40%,#000000c2,#000 95%);width:100%;height:100%}.spotlight[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%;position:absolute;bottom:10px;text-align:center}.spotlight[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:50%}.spotlight[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]{display:block;font-weight:700;padding-top:10px;padding-bottom:10px;z-index:1000;color:#fff}.spotlight[_ngcontent-%COMP%]   .btn-vertical[_ngcontent-%COMP%]{flex-direction:column}.spotlight[_ngcontent-%COMP%]   .btn-play[_ngcontent-%COMP%], .spotlight[_ngcontent-%COMP%]   .btn-vertical[_ngcontent-%COMP%]{font-weight:500;display:flex;align-items:center}.spotlight[_ngcontent-%COMP%]   .btn-play[_ngcontent-%COMP%]{background:#fff;border-radius:2px;color:#000;padding:4px;flex-direction:row;justify-content:center}ion-toolbar[_ngcontent-%COMP%]{--background:linear-gradient(180deg,rgba(0,0,0,.872),rgba(0,0,0,.846) 57%,rgba(0,0,0,.692) 80%,rgba(0,0,0,.544) 89%,#0000)}.section-title[_ngcontent-%COMP%]{font-weight:600;font-size:large}.claGrid[_ngcontent-%COMP%]{position:relative;bottom:170px!important}@media (min-width:425px){.claGrid[_ngcontent-%COMP%]{bottom:170px!important}ion-chip[_ngcontent-%COMP%]{font-size:11px}}@media (max-width:320px){.claGrid[_ngcontent-%COMP%]{bottom:170px!important}ion-chip[_ngcontent-%COMP%]{font-size:9px}}@media (max-width:375px){.claGrid[_ngcontent-%COMP%]{bottom:170px!important}ion-chip[_ngcontent-%COMP%]{font-size:9px}}.tamanoImg[_ngcontent-%COMP%]{width:162px;height:325px}.coraPremiun[_ngcontent-%COMP%]{height:10px;top:-102px;position:relative}"]}),t})()}];let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({imports:[[r.k.forChild(v)],r.k]}),t})();var L=o("Fgaq");let H=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({imports:[[i.b,e.a,c.K,L.a,S]]}),t})()}}]);