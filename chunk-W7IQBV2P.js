import{D as t,E as n,F as d,G as C,H as m,Ha as M,J as S,K as i,Qa as b,R as g,ea as w,h as f,i as s,ia as k,j as l,r as _,s as v,z as h}from"./chunk-COX4CXBC.js";var V=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=f({type:e,selectors:[["app-landing-separator"]],standalone:!0,features:[g],decls:6,vars:0,consts:[[1,"separator","my-7","flex","justify-content-center","align-items-center"],[1,"separator-line","text-primary"],["src","./assets/logoImg.png","alt","Separator","width","50"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"div",1),i(2,"\xAB \u2022 \u2022 \u2022 \u2022 \u2022 \u2022"),n(),d(3,"img",2),t(4,"div",1),i(5,"\u2022 \u2022 \u2022 \u2022 \u2022 \u2022 \xBB"),n()())}});let r=e;return r})();var B=(()=>{let e=class e{constructor(c){this.router=c}ngOnInit(){this.items=[{label:"Home",icon:"pi pi-home",routerLink:["/"]},{label:"About Us",icon:"pi pi-info-circle",routerLink:["/"]},{label:"Services",icon:"pi pi-cog",routerLink:["/"]},{label:"Contact Us",icon:"pi pi-envelope",routerLink:["/"]},{label:"Sign Up",icon:"pi pi-sign-in",command:()=>{this.toSignUp()}}]}toHome(){this.router.navigate(["/"])}toSignUp(){this.router.navigate(["/onboarding"])}};e.\u0275fac=function(o){return new(o||e)(v(w))},e.\u0275cmp=f({type:e,selectors:[["app-header-main"]],standalone:!0,features:[g],decls:21,vars:2,consts:[["menu",""],[1,"header","z-5"],[1,"container-header"],[1,"flex","justify-content-between","align-items-center"],[1,"logo"],["src","./assets/logo.png","alt","Logo",1,"logo-header","m-3"],[1,"menuL"],[1,"flex","gap-4","pr-4","align-items-center"],[1,"header-item",3,"click"],[1,"pri-button",3,"click"],[1,"md:hidden","m-3"],["appendTo","body",3,"model","popup"],["icon","pi pi-ellipsis-v",3,"onClick"]],template:function(o,a){if(o&1){let p=C();t(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),d(4,"img",5),n(),t(5,"div",6)(6,"nav",7)(7,"span",8),m("click",function(){return s(p),l(a.toHome())}),i(8,"Home"),n(),t(9,"span",8),m("click",function(){return s(p),l(a.toHome())}),i(10,"About"),n(),t(11,"span",8),m("click",function(){return s(p),l(a.toHome())}),i(12,"Services"),n(),t(13,"span",8),m("click",function(){return s(p),l(a.toHome())}),i(14,"Contact"),n(),t(15,"button",9),m("click",function(){return s(p),l(a.toSignUp())}),i(16,"SIGN UP"),n()()(),t(17,"div",10),d(18,"p-menu",11,0),t(20,"p-button",12),m("onClick",function(y){s(p);let x=S(19);return l(x.toggle(y))}),n()()()()()}o&2&&(_(18),h("model",a.items)("popup",!0))},dependencies:[b,k,M],styles:[".header[_ngcontent-%COMP%]{position:absolute;width:100%;top:0;animation:fadeIn 1s ease}.logo-header[_ngcontent-%COMP%]{width:200px}.header-item[_ngcontent-%COMP%]{color:var(--primary-color);text-transform:uppercase}.header-item[_ngcontent-%COMP%]:hover{cursor:pointer;color:#fff}.menu-icon[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 768px){.menuL[_ngcontent-%COMP%]{display:none}}"]});let r=e;return r})();export{V as a,B as b};
