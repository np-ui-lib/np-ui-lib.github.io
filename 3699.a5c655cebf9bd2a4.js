"use strict";(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[3699],{3699:(U,u,l)=>{l.r(u),l.d(u,{NpTooltipDemoModule:()=>d});var T=l(6895),s=l(8561),t=l(4650),n=l(5499);function Z(o,p){if(1&o&&(t.TgZ(0,"u"),t._uU(1),t.qZA()),2&o){const e=p.count;t.xp6(1),t.hij("This is top tooltip. Count pass in context is ",e,"")}}function a(o,p){1&o&&(t.TgZ(0,"i"),t._uU(1,"This is bottom tooltip"),t.qZA())}const r=function(){return{count:5}},m=[{path:"",component:(()=>{class o{constructor(){this.importText="import { NpTooltipModule } from 'np-ui-lib';",this.htmlText="<span [npTooltip]=\"'This is left tooltip.'\" [placement]=\"'left'\">\n  Hover me for left tooltip\n</span>",this.contextText='<span [npTooltip]="tooltipTemp" [context]="{count: 5}">\n  Hover me for top tooltip, with ng-template.\n</span>\n<ng-template #tooltipTemp let-count="count">\n  Count pass in context is {{count}}\n</ng-template>'}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-np-tooltip-demo"]],decls:110,vars:17,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["title","Examples"],[3,"npTooltip","placement"],[3,"npTooltip","placement","styleClass"],[3,"npTooltip","placement","context","width"],["tooltipTop",""],["tooltipBottom",""],["type","text","placeholder","Tooltip on focus",1,"np-form-control",2,"width","200px",3,"npTooltip","tooltipOnFocus"]],template:function(e,i){if(1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Tooltip"),t.qZA(),t.TgZ(2,"np-tabs")(3,"np-tab",1)(4,"np-card")(5,"np-card-body")(6,"b"),t._uU(7,"Module to import"),t.qZA(),t.TgZ(8,"div")(9,"pre"),t._UZ(10,"code",2),t.qZA()()()(),t.TgZ(11,"np-card")(12,"np-card-body")(13,"b"),t._uU(14,"HTML"),t.qZA(),t.TgZ(15,"div")(16,"pre"),t._UZ(17,"code",2),t.qZA()()()(),t.TgZ(18,"np-card")(19,"np-card-body")(20,"table",3)(21,"tr")(22,"th"),t._uU(23,"Property"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Description"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Type"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Default"),t.qZA()(),t.TgZ(30,"tr")(31,"td"),t._uU(32,"npTooltip"),t.qZA(),t.TgZ(33,"td"),t._uU(34,"Text or ng-template reference"),t.qZA(),t.TgZ(35,"td"),t._uU(36,"string | TemplateRef<any>"),t.qZA(),t._UZ(37,"td"),t.qZA(),t.TgZ(38,"tr")(39,"td"),t._uU(40,"width"),t.qZA(),t.TgZ(41,"td"),t._uU(42," Set width. Values should be like '100%', '100px', 200. If pass as number then it will considered as px. "),t.qZA(),t.TgZ(43,"td"),t._uU(44,"number"),t.qZA(),t._UZ(45,"td"),t.qZA(),t.TgZ(46,"tr")(47,"td"),t._uU(48,"context"),t.qZA(),t.TgZ(49,"td"),t._uU(50," Pass data to template "),t.TgZ(51,"pre")(52,"code"),t._uU(53),t.qZA()()(),t.TgZ(54,"td"),t._uU(55,"any"),t.qZA(),t._UZ(56,"td"),t.qZA(),t.TgZ(57,"tr")(58,"td"),t._uU(59,"placement"),t.qZA(),t.TgZ(60,"td"),t._uU(61," Set tooltip position from 'left' | 'right' | 'top' | 'bottom' "),t.qZA(),t.TgZ(62,"td"),t._uU(63,"string"),t.qZA(),t.TgZ(64,"td"),t._uU(65,"bottom"),t.qZA()(),t.TgZ(66,"tr")(67,"td"),t._uU(68,"tooltipOnFocus"),t.qZA(),t.TgZ(69,"td"),t._uU(70,"Show tooltip on focus of input control"),t.qZA(),t.TgZ(71,"td"),t._uU(72,"boolean"),t.qZA(),t.TgZ(73,"td"),t._uU(74,"false"),t.qZA()(),t.TgZ(75,"tr")(76,"td"),t._uU(77,"styleClass"),t.qZA(),t.TgZ(78,"td"),t._uU(79,"Set extra class on component"),t.qZA(),t.TgZ(80,"td"),t._uU(81,"string"),t.qZA(),t._UZ(82,"td"),t.qZA(),t.TgZ(83,"tr")(84,"td"),t._uU(85,"inputId"),t.qZA(),t.TgZ(86,"td"),t._uU(87,"Set id attribute"),t.qZA(),t.TgZ(88,"td"),t._uU(89,"string"),t.qZA(),t._UZ(90,"td"),t.qZA()()()()(),t.TgZ(91,"np-tab",4)(92,"p")(93,"span",5),t._uU(94," Hover me for left tooltip "),t.qZA()(),t.TgZ(95,"p")(96,"span",6),t._uU(97," Hover me for right tooltip, with [styleClass] attribute. "),t.qZA()(),t.TgZ(98,"p")(99,"span",7),t._uU(100," Hover me for top tooltip, with ng-template. "),t.YNc(101,Z,2,1,"ng-template",null,8,t.W1O),t.qZA()(),t.TgZ(103,"p")(104,"span",5),t._uU(105," Hover me for bottom tooltip, with ng-template. "),t.YNc(106,a,2,0,"ng-template",null,9,t.W1O),t.qZA()(),t.TgZ(108,"p"),t._UZ(109,"input",10),t.qZA()()()),2&e){const g=t.MAs(102),A=t.MAs(107);t.xp6(10),t.Q6J("innerText",i.importText),t.xp6(7),t.Q6J("innerText",i.htmlText),t.xp6(36),t.Oqu(i.contextText),t.xp6(40),t.Q6J("npTooltip","This is left tooltip.")("placement","left"),t.xp6(3),t.Q6J("npTooltip","This is right tooltip.")("placement","right")("styleClass","myClass"),t.xp6(3),t.Q6J("npTooltip",g)("placement","top")("context",t.DdM(16,r))("width",100),t.xp6(5),t.Q6J("npTooltip",A)("placement","bottom"),t.xp6(5),t.Q6J("npTooltip","Enter your name.")("tooltipOnFocus",!0)}},dependencies:[n.Y2,n.KA,n.Qk,n.c0,n.El],encapsulation:2}),o})()}];let c=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(m),s.Bz]}),o})(),d=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[T.ez,c,n.Yv,n.i7,n.Tk]}),o})()}}]);