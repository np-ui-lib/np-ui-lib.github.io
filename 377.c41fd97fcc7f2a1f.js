"use strict";(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[377],{377:(x,a,l)=>{l.r(a),l.d(a,{NpPopoverDemoModule:()=>C});var i=l(6019),c=l(782),e=l(3668),r=l(8419);const u=["myPopover1"],s=["myPopover2"],d=["myPopover3"];function _(o,n){1&o&&(e.TgZ(0,"div",21),e.TgZ(1,"div",22),e.TgZ(2,"b"),e._uU(3,"Mail Subject"),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"i"),e._uU(6,"From: abc@npui.com"),e.qZA(),e.qZA(),e.TgZ(7,"div",22),e.TgZ(8,"b"),e._uU(9,"Mail Subject"),e.qZA(),e._UZ(10,"br"),e.TgZ(11,"i"),e._uU(12,"From: abc@npui.com"),e.qZA(),e.qZA(),e.TgZ(13,"div",22),e.TgZ(14,"b"),e._uU(15,"Mail Subject"),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"i"),e._uU(18,"From: abc@npui.com"),e.qZA(),e.qZA(),e.TgZ(19,"div",22),e.TgZ(20,"b"),e._uU(21,"Mail Subject"),e.qZA(),e._UZ(22,"br"),e.TgZ(23,"i"),e._uU(24,"From: abc@npui.com"),e.qZA(),e.qZA(),e.TgZ(25,"div",22),e.TgZ(26,"b"),e._uU(27,"Mail Subject"),e.qZA(),e._UZ(28,"br"),e.TgZ(29,"i"),e._uU(30,"From: abc@npui.com"),e.qZA(),e.qZA(),e.qZA())}function g(o,n){1&o&&e._uU(0),2&o&&e.hij(" Others, Count pass in context is ",n.count,". ")}function T(o,n){1&o&&e._uU(0),2&o&&e.hij(" Set width of popover and add extra class to popover element, Count pass in context is ",n.count,". ")}function m(o,n){if(1&o){const t=e.EpF();e._uU(0," Description of Step Click on Next button to start tour. "),e.TgZ(1,"button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw().openStep2Popover()}),e._uU(2," Next "),e.qZA()}}function A(o,n){if(1&o){const t=e.EpF();e._uU(0," Description of Step 2. Read and Wait for Next button. "),e.TgZ(1,"button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw().openStep3Popover()}),e._uU(2," Next "),e.qZA()}}function q(o,n){if(1&o){const t=e.EpF();e._uU(0," Description of Step 3. Click on Close button to end tour. "),e.TgZ(1,"button",23),e.NdJ("click",function(){return e.CHM(t),e.oxw().closeStep3Popover()}),e._uU(2," Close "),e.qZA()}}const U=function(){return{count:5}},b=[{path:"",component:(()=>{class o{constructor(){this.importText="import { NpPopoverModule } from 'np-ui-lib';",this.htmlText="<a npPopover [header]=\"'Link header'\" [body]=\"'Link Description.'\">Link</a>",this.contextText='<a npPopover [header]="headerTemp" [body]="bodyTemp" [context]="{count: 5}">\n  Context Sample\n</a>\n<ng-template #headerTemp let-count="count">\n  Count pass in context is {{count}}.\n</ng-template>\n<ng-template #bodyTemp let-count="count">\n  Count pass in context is {{count}}.\n</ng-template>'}ngOnInit(){}openStep2Popover(){this.myPopover1.close(),this.myPopover2.open()}openStep3Popover(){this.myPopover2.close(),this.myPopover3.open()}closeStep3Popover(){this.myPopover3.close()}onOpen(){console.log("Open popover")}onClose(){console.log("Close popover")}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-np-popover-demo"]],viewQuery:function(t,Z){if(1&t&&(e.Gf(u,5),e.Gf(s,5),e.Gf(d,5)),2&t){let p;e.iGM(p=e.CRH())&&(Z.myPopover1=p.first),e.iGM(p=e.CRH())&&(Z.myPopover2=p.first),e.iGM(p=e.CRH())&&(Z.myPopover3=p.first)}},decls:208,vars:33,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["title","Examples"],["npPopover","",3,"header","body","placement","onOpen","onClose"],[1,"fa","fa-info-circle"],["npPopover","",1,"np-btn","np-btn-primary",3,"body","placement","openOnClick","hasBackDrop","styleClass"],[1,"fa","fa-envelope"],[1,"np-badge"],["mailTemp",""],["npPopover","",3,"header","body","context","openOnClick","width","styleClass"],["headerTemp",""],["bodyTemp",""],["npPopover","",3,"header","body","openOnClick","backDropClass","closeOnClickOutside"],["myPopover1","NpPopoverDirective"],["myPopover1Body",""],["myPopover2","NpPopoverDirective"],["myPopover2Body",""],["myPopover3","NpPopoverDirective"],["myPopover3Body",""],[1,"np-list"],[1,"np-list-item"],["type","button",1,"np-btn",3,"click"]],template:function(t,Z){if(1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Popover"),e.qZA(),e.TgZ(2,"np-tabs"),e.TgZ(3,"np-tab",1),e.TgZ(4,"np-card"),e.TgZ(5,"np-card-body"),e.TgZ(6,"b"),e._uU(7,"Module to import"),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"pre"),e._UZ(10,"code",2),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"np-card"),e.TgZ(12,"np-card-body"),e.TgZ(13,"b"),e._uU(14,"HTML"),e.qZA(),e.TgZ(15,"div"),e.TgZ(16,"pre"),e._UZ(17,"code",2),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"np-card"),e.TgZ(19,"np-card-body"),e.TgZ(20,"table",3),e.TgZ(21,"tr"),e.TgZ(22,"th"),e._uU(23,"Property"),e.qZA(),e.TgZ(24,"th"),e._uU(25,"Description"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Type"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Default"),e.qZA(),e.qZA(),e.TgZ(30,"tr"),e.TgZ(31,"td"),e._uU(32,"header"),e.qZA(),e.TgZ(33,"td"),e._uU(34,"Header text or template"),e.qZA(),e.TgZ(35,"td"),e._uU(36,"string | TemplateRef <any>"),e.qZA(),e._UZ(37,"td"),e.qZA(),e.TgZ(38,"tr"),e.TgZ(39,"td"),e._uU(40,"body"),e.qZA(),e.TgZ(41,"td"),e._uU(42,"Body text or template"),e.qZA(),e.TgZ(43,"td"),e._uU(44,"string | TemplateRef <any>"),e.qZA(),e._UZ(45,"td"),e.qZA(),e.TgZ(46,"tr"),e.TgZ(47,"td"),e._uU(48,"context"),e.qZA(),e.TgZ(49,"td"),e._uU(50," Pass data to template. Context will be available in both header and body templates. "),e.TgZ(51,"pre"),e.TgZ(52,"code"),e._uU(53),e.qZA(),e.qZA(),e.qZA(),e.TgZ(54,"td"),e._uU(55,"any"),e.qZA(),e._UZ(56,"td"),e.qZA(),e.TgZ(57,"tr"),e.TgZ(58,"td"),e._uU(59,"placement"),e.qZA(),e.TgZ(60,"td"),e._uU(61," Set popover position from 'left' | 'right' | 'top' | 'bottom' "),e.qZA(),e.TgZ(62,"td"),e._uU(63,"string"),e.qZA(),e.TgZ(64,"td"),e._uU(65,"bottom"),e.qZA(),e.qZA(),e.TgZ(66,"tr"),e.TgZ(67,"td"),e._uU(68,"openOnClick"),e.qZA(),e.TgZ(69,"td"),e._uU(70,"Open popover on click of target"),e.qZA(),e.TgZ(71,"td"),e._uU(72,"boolean"),e.qZA(),e.TgZ(73,"td"),e._uU(74,"false"),e.qZA(),e.qZA(),e.TgZ(75,"tr"),e.TgZ(76,"td"),e._uU(77,"width"),e.qZA(),e.TgZ(78,"td"),e._uU(79," Set width. Values should be like '100%', '100px', 200. If pass as number then it will considered as px. "),e.qZA(),e.TgZ(80,"td"),e._uU(81,"number"),e.qZA(),e._UZ(82,"td"),e.qZA(),e.TgZ(83,"tr"),e.TgZ(84,"td"),e._uU(85,"hasBackDrop"),e.qZA(),e.TgZ(86,"td"),e._uU(87,"Show backdrop or not"),e.qZA(),e.TgZ(88,"td"),e._uU(89,"boolean"),e.qZA(),e.TgZ(90,"td"),e._uU(91,"true"),e.qZA(),e.qZA(),e.TgZ(92,"tr"),e.TgZ(93,"td"),e._uU(94,"closeOnClickOutside"),e.qZA(),e.TgZ(95,"td"),e._uU(96,"Close on outside click or not"),e.qZA(),e.TgZ(97,"td"),e._uU(98,"boolean"),e.qZA(),e.TgZ(99,"td"),e._uU(100,"true"),e.qZA(),e.qZA(),e.TgZ(101,"tr"),e.TgZ(102,"td"),e._uU(103,"backDropClass"),e.qZA(),e.TgZ(104,"td"),e._uU(105,"Set backdrop class"),e.qZA(),e.TgZ(106,"td"),e._uU(107,"string"),e.qZA(),e.TgZ(108,"td"),e._uU(109,"np-popover-backdrop"),e.qZA(),e.qZA(),e.TgZ(110,"tr"),e.TgZ(111,"td"),e._uU(112,"styleClass"),e.qZA(),e.TgZ(113,"td"),e._uU(114,"Set extra class on component"),e.qZA(),e.TgZ(115,"td"),e._uU(116,"string"),e.qZA(),e._UZ(117,"td"),e.qZA(),e.TgZ(118,"tr"),e.TgZ(119,"td"),e._uU(120,"inputId"),e.qZA(),e.TgZ(121,"td"),e._uU(122,"Set id attribute"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"string"),e.qZA(),e._UZ(125,"td"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(126,"np-card"),e.TgZ(127,"np-card-body"),e.TgZ(128,"table",3),e.TgZ(129,"tr"),e.TgZ(130,"th"),e._uU(131,"Method"),e.qZA(),e.TgZ(132,"th"),e._uU(133,"Description"),e.qZA(),e.TgZ(134,"th"),e._uU(135,"Parameters"),e.qZA(),e.qZA(),e.TgZ(136,"tr"),e.TgZ(137,"td"),e._uU(138,"onOpen()"),e.qZA(),e.TgZ(139,"td"),e._uU(140,"Callback on open"),e.qZA(),e._UZ(141,"td"),e.qZA(),e.TgZ(142,"tr"),e.TgZ(143,"td"),e._uU(144,"onClose()"),e.qZA(),e.TgZ(145,"td"),e._uU(146,"Callback on close"),e.qZA(),e._UZ(147,"td"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(148,"np-card"),e.TgZ(149,"np-card-body"),e.TgZ(150,"table",3),e.TgZ(151,"tr"),e.TgZ(152,"th"),e._uU(153,"Api"),e.qZA(),e.TgZ(154,"th"),e._uU(155,"Description"),e.qZA(),e.TgZ(156,"th"),e._uU(157,"Parameters"),e.qZA(),e.qZA(),e.TgZ(158,"tr"),e.TgZ(159,"td"),e._uU(160,"open()"),e.qZA(),e.TgZ(161,"td"),e._uU(162,"Open popover"),e.qZA(),e._UZ(163,"td"),e.qZA(),e.TgZ(164,"tr"),e.TgZ(165,"td"),e._uU(166,"close()"),e.qZA(),e.TgZ(167,"td"),e._uU(168,"Close popover"),e.qZA(),e._UZ(169,"td"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(170,"np-tab",4),e.TgZ(171,"fieldset"),e.TgZ(172,"a",5),e.NdJ("onOpen",function(){return Z.onOpen()})("onClose",function(){return Z.onClose()}),e._UZ(173,"i",6),e.qZA(),e.qZA(),e.TgZ(174,"fieldset"),e.TgZ(175,"button",7),e._UZ(176,"i",8),e.TgZ(177,"span",9),e._uU(178,"5"),e.qZA(),e.qZA(),e.YNc(179,_,31,0,"ng-template",null,10,e.W1O),e.qZA(),e.TgZ(181,"fieldset"),e.TgZ(182,"a",11),e._uU(183,"With [width] and [styleClass] attribute"),e.qZA(),e.YNc(184,g,1,1,"ng-template",null,12,e.W1O),e.YNc(186,T,1,1,"ng-template",null,13,e.W1O),e.qZA(),e.TgZ(188,"fieldset"),e.TgZ(189,"legend"),e._uU(190,"backDropClass and Api example"),e.qZA(),e.TgZ(191,"a",14,15),e._uU(193,"Step 1"),e.qZA(),e.YNc(194,m,3,0,"ng-template",null,16,e.W1O),e._UZ(196,"br"),e.TgZ(197,"a",14,17),e._uU(199,"Step 2"),e.qZA(),e.YNc(200,A,3,0,"ng-template",null,18,e.W1O),e._UZ(202,"br"),e.TgZ(203,"a",14,19),e._uU(205,"Step 3"),e.qZA(),e.YNc(206,q,3,0,"ng-template",null,20,e.W1O),e.qZA(),e.qZA(),e.qZA()),2&t){const p=e.MAs(180),y=e.MAs(185),f=e.MAs(187),h=e.MAs(195),P=e.MAs(201),D=e.MAs(207);e.xp6(10),e.Q6J("innerText",Z.importText),e.xp6(7),e.Q6J("innerText",Z.htmlText),e.xp6(36),e.Oqu(Z.contextText),e.xp6(119),e.Q6J("header","Header content")("body","Body content")("placement","right"),e.xp6(3),e.Q6J("body",p)("placement","bottom")("openOnClick",!0)("hasBackDrop",!1)("styleClass","popover-no-border"),e.xp6(7),e.Q6J("header",y)("body",f)("context",e.DdM(32,U))("openOnClick",!0)("width",250)("styleClass","myClass"),e.xp6(9),e.Q6J("header","Step 1")("body",h)("openOnClick",!0)("backDropClass","myBackDrop")("closeOnClickOutside",!1),e.xp6(6),e.Q6J("header","Step 2")("body",P)("openOnClick",!0)("backDropClass","myBackDrop")("closeOnClickOutside",!1),e.xp6(6),e.Q6J("header","Step 3")("body",D)("openOnClick",!0)("backDropClass","myBackDrop")("closeOnClickOutside",!1)}},directives:[r.KA,r.Qk,r.c0,r.El,r.cQ],encapsulation:2}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.Bz.forChild(b)],c.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[i.ez,v,r.bn,r.Tk,r.i7]]}),o})()}}]);