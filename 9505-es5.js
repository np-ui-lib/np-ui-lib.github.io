!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(self.webpackChunknp_ui_app=self.webpackChunknp_ui_app||[]).push([[9505],{9505:function(n,i,o){"use strict";o.r(i),o.d(i,{NpSidepanelDemoModule:function(){return f}});var a=o(1116),r=o(4387),s=o(1462),p=o(7368),Z=o(149),d=["sidePanelLeft"],l=["sidePanelRight"],u=["sidePanelTop"],g=["sidePanelBottom"];function c(e,t){if(1&e){var n=p.EpF();p.TgZ(0,"form",18),p.TgZ(1,"div",19),p.TgZ(2,"div",20),p.TgZ(3,"div",21),p.TgZ(4,"div",22),p.TgZ(5,"div",23),p._uU(6,"First name:"),p.qZA(),p._UZ(7,"np-input-text",24),p.qZA(),p.qZA(),p.TgZ(8,"div",21),p.TgZ(9,"div",22),p.TgZ(10,"div",23),p._uU(11,"Last name:"),p.qZA(),p._UZ(12,"np-input-text",25),p.qZA(),p.qZA(),p.qZA(),p.TgZ(13,"div",20),p.TgZ(14,"div",21),p.TgZ(15,"div",22),p.TgZ(16,"div",23),p._uU(17,"Birth date:"),p.qZA(),p._UZ(18,"np-date-picker",26),p.qZA(),p.qZA(),p.TgZ(19,"div",21),p.TgZ(20,"div",22),p.TgZ(21,"div",23),p._uU(22,"Birth time:"),p.qZA(),p._UZ(23,"np-time-picker",27),p.qZA(),p.qZA(),p.qZA(),p.TgZ(24,"div",20),p.TgZ(25,"div",28),p.TgZ(26,"div",22),p.TgZ(27,"div",23),p._uU(28,"Is Active:"),p.qZA(),p._UZ(29,"np-switch",29),p.qZA(),p.qZA(),p.qZA(),p.TgZ(30,"div",20),p.TgZ(31,"div",28),p.TgZ(32,"div",22),p.TgZ(33,"div",23),p._uU(34,"Description:"),p.qZA(),p._UZ(35,"np-textarea",30),p.qZA(),p.qZA(),p.qZA(),p.TgZ(36,"div",6),p.TgZ(37,"button",31),p.NdJ("click",function(){return p.CHM(n),p.oxw().onSubmit()}),p._uU(38," Save "),p.qZA(),p.TgZ(39,"button",7),p.NdJ("click",function(){return p.CHM(n),p.oxw().closeLeft()}),p._uU(40," Close "),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&e){var i=p.oxw();p.Q6J("formGroup",i.myForm),p.xp6(7),p.Q6J("autoFocus",!0)}}var T,A,q=[{path:"",component:(T=function(){function n(t){e(this,n),this.sidepanelService=t,this.importText="import { NpSidepanelModule } from 'np-ui-lib';",this.htmlText="<np-sidepanel [position]=\"'right'\" [height]=\"'100%'\" [width]=\"'200px'\">\n  ...Body content\n</np-sidepanel>",this.lazyLoadText="<np-sidepanel [position]=\"'right'\" [height]=\"'100%'\" [width]=\"'200px'\">\n  <ng-template npSidepanelContent>\n    ...Lazy load content\n  </ng-tempalte>\n</sidepanel>",this.serviceText="constructor(private sidepanelService: NpSidepanelService) { }",this.serviceClose='this.sidepanelService.closeSidepanel("leftSidepanel", { data: 5 });\n<span class="np-text-success">// Where leftSidepanel is inputId of sidepanel. and pass data in second parameter.\n// this data will be passed to onClose callback method of sidepanel.\n</span>',this.serviceGet='var reference = this.sidepanelService.get("leftSidepanel");\n<span class="np-text-success">// Where leftSidepanel is inputId of sidepanel.\n// this get method will return sidepanel reference object, \n// which can be furthur subscribed to get call back when sidepanel is closed by service.\n</span>\nreference.subscribe((data) => {\n  <span class="np-text-success">... Callback on sidepanel close by service</span>\n});',this.isActive=!0,this.myForm=new s.cw({firstName:new s.NI("",s.kI.required),lastName:new s.NI("",s.kI.required),birthDate:new s.NI(null,s.kI.required),birthTime:new s.NI("",s.kI.required),isActive:new s.NI(!1,s.kI.required),description:new s.NI("",s.kI.required)})}var i,o,a;return i=n,(o=[{key:"ngOnInit",value:function(){}},{key:"openLeft",value:function(){this.sidePanelLeft.open(null)}},{key:"onCloseLeft",value:function(e){console.log(JSON.stringify(e)),alert("Left sidepanel closed")}},{key:"closeLeft",value:function(){this.sidepanelService.closeSidepanel("leftSidepanel",{data:5})}},{key:"onSubmit",value:function(){this.myForm.invalid?this.markFormGroupTouched(this.myForm):this.closeLeft()}},{key:"markFormGroupTouched",value:function(e){var t=this;Object.values(e.controls).forEach(function(e){e.markAsTouched(),e.controls&&t.markFormGroupTouched(e)})}},{key:"openRight",value:function(){this.sidePanelRight.open(null)}},{key:"openTop",value:function(){this.sidePanelTop.open(null)}},{key:"openBottom",value:function(){this.sidePanelBottom.open(null)}}])&&t(i.prototype,o),a&&t(i,a),n}(),T.\u0275fac=function(e){return new(e||T)(p.Y36(Z.MH))},T.\u0275cmp=p.Xpm({type:T,selectors:[["app-np-sidepanel-demo"]],viewQuery:function(e,t){var n;1&e&&(p.Gf(d,7),p.Gf(l,7),p.Gf(u,7),p.Gf(g,7)),2&e&&(p.iGM(n=p.CRH())&&(t.sidePanelLeft=n.first),p.iGM(n=p.CRH())&&(t.sidePanelRight=n.first),p.iGM(n=p.CRH())&&(t.sidePanelTop=n.first),p.iGM(n=p.CRH())&&(t.sidePanelBottom=n.first))},decls:204,vars:22,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],[3,"innerHTML"],["title","Examples"],[1,"np-btn-group"],["type","button",1,"np-btn",3,"click"],[3,"position","height","inputId","onClose"],["sidePanelLeft",""],["npSidepanelContent",""],[3,"position","height","width","styleClass","backDropClass","closeOnClickOutside"],["sidePanelRight",""],[1,"np-btn","np-btn-danger",3,"click"],[3,"position","width","height"],["sidePanelTop",""],[3,"position","width","height","hasBackDrop"],["sidePanelBottom",""],[3,"formGroup"],[1,"np-container"],[1,"np-row"],[1,"np-col-6"],[1,"np-form-group"],[1,"np-form-label","np-required"],["name","txtFirstName","formControlName","firstName",3,"autoFocus"],["name","txtLastName","formControlName","lastName"],["name","txtBirthDate","formControlName","birthDate"],["name","txtBirthTime","formControlName","birthTime"],[1,"np-col-12"],["name","swIsActive","formControlName","isActive"],["name","txtDescription","rows","3","formControlName","description"],["type","button",1,"np-btn","np-btn-primary",3,"click"]],template:function(e,t){if(1&e){var n=p.EpF();p.TgZ(0,"h2",0),p._uU(1,"Sidepanel"),p.qZA(),p.TgZ(2,"np-tabs"),p.TgZ(3,"np-tab",1),p.TgZ(4,"np-card"),p.TgZ(5,"np-card-body"),p.TgZ(6,"b"),p._uU(7,"Module to import"),p.qZA(),p.TgZ(8,"div"),p.TgZ(9,"pre"),p._UZ(10,"code",2),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(11,"np-card"),p.TgZ(12,"np-card-body"),p.TgZ(13,"b"),p._uU(14,"HTML"),p.qZA(),p.TgZ(15,"div"),p.TgZ(16,"pre"),p._UZ(17,"code",2),p.qZA(),p.qZA(),p.TgZ(18,"b"),p._uU(19,"How to set lazy loading for sidepanel?"),p.qZA(),p.TgZ(20,"div"),p.TgZ(21,"pre"),p._UZ(22,"code",2),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(23,"np-card"),p.TgZ(24,"np-card-body"),p.TgZ(25,"table",3),p.TgZ(26,"tr"),p.TgZ(27,"th"),p._uU(28,"Property"),p.qZA(),p.TgZ(29,"th"),p._uU(30,"Description"),p.qZA(),p.TgZ(31,"th"),p._uU(32,"Type"),p.qZA(),p.TgZ(33,"th"),p._uU(34,"Default"),p.qZA(),p.qZA(),p.TgZ(35,"tr"),p.TgZ(36,"td"),p._uU(37,"position"),p.qZA(),p.TgZ(38,"td"),p._uU(39,"Set position 'left' | 'right' | 'top' | 'bottom'"),p.qZA(),p.TgZ(40,"td"),p._uU(41,"string"),p.qZA(),p.TgZ(42,"td"),p._uU(43,"left"),p.qZA(),p.qZA(),p.TgZ(44,"tr"),p.TgZ(45,"td"),p._uU(46,"height"),p.qZA(),p.TgZ(47,"td"),p._uU(48," Set height. Values should be like '100%', '100px', 200. If pass as number then it will considered as px. "),p.qZA(),p.TgZ(49,"td"),p._uU(50,"string | number"),p.qZA(),p._UZ(51,"td"),p.qZA(),p.TgZ(52,"tr"),p.TgZ(53,"td"),p._uU(54,"width"),p.qZA(),p.TgZ(55,"td"),p._uU(56," Set width. Values should be like '100%', '100px', 200. If pass as number then it will considered as px. "),p.qZA(),p.TgZ(57,"td"),p._uU(58,"string | number"),p.qZA(),p._UZ(59,"td"),p.qZA(),p.TgZ(60,"tr"),p.TgZ(61,"td"),p._uU(62,"closeOnClickOutside"),p.qZA(),p.TgZ(63,"td"),p._uU(64," Close panel on click of outside area. If backdrop is not set then close on outside click will not work. "),p.qZA(),p.TgZ(65,"td"),p._uU(66,"boolean"),p.qZA(),p.TgZ(67,"td"),p._uU(68,"true"),p.qZA(),p.qZA(),p.TgZ(69,"tr"),p.TgZ(70,"td"),p._uU(71,"hasBackDrop"),p.qZA(),p.TgZ(72,"td"),p._uU(73,"Show backdrop or not"),p.qZA(),p.TgZ(74,"td"),p._uU(75,"boolean"),p.qZA(),p.TgZ(76,"td"),p._uU(77,"true"),p.qZA(),p.qZA(),p.TgZ(78,"tr"),p.TgZ(79,"td"),p._uU(80,"backDropClass"),p.qZA(),p.TgZ(81,"td"),p._uU(82,"Set backdrop class"),p.qZA(),p.TgZ(83,"td"),p._uU(84,"string"),p.qZA(),p.TgZ(85,"td"),p._uU(86,"np-sidepanel-backdrop"),p.qZA(),p.qZA(),p.TgZ(87,"tr"),p.TgZ(88,"td"),p._uU(89,"styleClass"),p.qZA(),p.TgZ(90,"td"),p._uU(91,"Set extra class on component"),p.qZA(),p.TgZ(92,"td"),p._uU(93,"string"),p.qZA(),p._UZ(94,"td"),p.qZA(),p.TgZ(95,"tr"),p.TgZ(96,"td"),p._uU(97,"inputId"),p.qZA(),p.TgZ(98,"td"),p._uU(99,"Set id attribute"),p.qZA(),p.TgZ(100,"td"),p._uU(101,"string"),p.qZA(),p._UZ(102,"td"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(103,"np-card"),p.TgZ(104,"np-card-body"),p.TgZ(105,"table",3),p.TgZ(106,"tr"),p.TgZ(107,"th"),p._uU(108,"Method"),p.qZA(),p.TgZ(109,"th"),p._uU(110,"Description"),p.qZA(),p.TgZ(111,"th"),p._uU(112,"Parameters"),p.qZA(),p.qZA(),p.TgZ(113,"tr"),p.TgZ(114,"td"),p._uU(115,"onOpen(data : any)"),p.qZA(),p.TgZ(116,"td"),p._uU(117,"Callback on open"),p.qZA(),p.TgZ(118,"td"),p._uU(119,"data passed from open api"),p.qZA(),p.qZA(),p.TgZ(120,"tr"),p.TgZ(121,"td"),p._uU(122,"onClose(data : any)"),p.qZA(),p.TgZ(123,"td"),p._uU(124,"Callback on close"),p.qZA(),p.TgZ(125,"td"),p._uU(126,"data passed from close api"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(127,"np-card"),p.TgZ(128,"np-card-body"),p.TgZ(129,"table",3),p.TgZ(130,"tr"),p.TgZ(131,"th"),p._uU(132,"Api"),p.qZA(),p.TgZ(133,"th"),p._uU(134,"Description"),p.qZA(),p.TgZ(135,"th"),p._uU(136,"Parameters"),p.qZA(),p.qZA(),p.TgZ(137,"tr"),p.TgZ(138,"td"),p._uU(139,"open(data : any)"),p.qZA(),p.TgZ(140,"td"),p._uU(141,"Open side panel"),p.qZA(),p.TgZ(142,"td"),p._uU(143,"Pass data to onOpen method"),p.qZA(),p.qZA(),p.TgZ(144,"tr"),p.TgZ(145,"td"),p._uU(146,"close(data : any)"),p.qZA(),p.TgZ(147,"td"),p._uU(148,"Close side panel"),p.qZA(),p.TgZ(149,"td"),p._uU(150,"Pass data to onClose method"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(151,"np-card"),p.TgZ(152,"np-card-body"),p.TgZ(153,"np-card-body"),p.TgZ(154,"b"),p._uU(155,"NpSidepanelService"),p.qZA(),p.TgZ(156,"div"),p.TgZ(157,"pre"),p._UZ(158,"code",2),p.qZA(),p.qZA(),p.TgZ(159,"div"),p.TgZ(160,"pre"),p._UZ(161,"code",4),p.qZA(),p.qZA(),p.TgZ(162,"div"),p.TgZ(163,"pre"),p._UZ(164,"code",4),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(165,"np-tab",5),p.TgZ(166,"div",6),p.TgZ(167,"button",7),p.NdJ("click",function(){return t.openLeft()}),p._uU(168," Open left sidepanel "),p.qZA(),p.TgZ(169,"button",7),p.NdJ("click",function(){return t.openRight()}),p._uU(170," Open right sidepanel "),p.qZA(),p.TgZ(171,"button",7),p.NdJ("click",function(){return t.openTop()}),p._uU(172," Open top sidepanel "),p.qZA(),p.TgZ(173,"button",7),p.NdJ("click",function(){return t.openBottom()}),p._uU(174," Open bottom sidepanel "),p.qZA(),p.qZA(),p.TgZ(175,"np-sidepanel",8,9),p.NdJ("onClose",function(e){return t.onCloseLeft(e)}),p.YNc(177,c,41,2,"ng-template",10),p.qZA(),p.TgZ(178,"np-sidepanel",11,12),p.TgZ(180,"h4"),p._uU(181,"Right sidepanel example"),p.qZA(),p.TgZ(182,"div",6),p.TgZ(183,"button",13),p.NdJ("click",function(){return p.CHM(n),p.MAs(179).close(null)}),p._uU(184," Close "),p.qZA(),p.qZA(),p.qZA(),p.TgZ(185,"np-sidepanel",14,15),p.TgZ(187,"h4"),p._uU(188,"Top sidepanel header"),p.qZA(),p.TgZ(189,"p"),p._uU(190," A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. "),p.qZA(),p.TgZ(191,"p"),p._uU(192," A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. "),p.qZA(),p.TgZ(193,"p"),p._uU(194," A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. "),p.qZA(),p.TgZ(195,"p"),p._uU(196," A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. "),p.qZA(),p.qZA(),p.TgZ(197,"np-sidepanel",16,17),p.TgZ(199,"h1"),p._uU(200,"Bottom sidepanel example"),p.qZA(),p.TgZ(201,"div",6),p.TgZ(202,"button",13),p.NdJ("click",function(){return p.CHM(n),p.MAs(198).close(null)}),p._uU(203," Close "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()}2&e&&(p.xp6(10),p.Q6J("innerText",t.importText),p.xp6(7),p.Q6J("innerText",t.htmlText),p.xp6(5),p.Q6J("innerText",t.lazyLoadText),p.xp6(136),p.Q6J("innerText",t.serviceText),p.xp6(3),p.Q6J("innerHTML",t.serviceClose,p.oJD),p.xp6(3),p.Q6J("innerHTML",t.serviceGet,p.oJD),p.xp6(11),p.Q6J("position","left")("height","100%")("inputId","leftSidepanel"),p.xp6(3),p.Q6J("position","right")("height","100%")("width","200px")("styleClass","myClass")("backDropClass","myBackDrop")("closeOnClickOutside",!1),p.xp6(7),p.Q6J("position","top")("width","100%")("height","200px"),p.xp6(12),p.Q6J("position","bottom")("width","100%")("height","200px")("hasBackDrop",!1))},directives:[Z.KA,Z.Qk,Z.c0,Z.El,Z.sI,Z.zy,s._Y,s.JL,s.sg,Z.On,s.JJ,s.u,Z.bg,Z.Et,Z.Mc,Z.d0],encapsulation:2}),T)}],h=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[r.Bz.forChild(q)],r.Bz]}),t}(),f=((A=function t(){e(this,t)}).\u0275fac=function(e){return new(e||A)},A.\u0275mod=p.oAB({type:A}),A.\u0275inj=p.cJS({imports:[[a.ez,h,Z.Wv,Z.ml,Z.nD,Z.kH,s.UX,Z.Tk,Z.i7,Z.qp,Z.X,Z.Fd]]}),A)}}])}();