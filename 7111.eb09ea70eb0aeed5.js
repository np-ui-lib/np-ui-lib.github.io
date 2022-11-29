"use strict";(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[7111],{7111:(b,Z,p)=>{p.r(Z),p.d(Z,{NpSidepanelDemoModule:()=>u});var m=p(6895),g=p(8379),i=p(433),e=p(4650),t=p(5499);const _=["sidePanelLeft"],T=["sidePanelRight"],A=["sidePanelTop"],f=["sidePanelBottom"];function q(h,s){if(1&h){const n=e.EpF();e.TgZ(0,"div",18)(1,"form",19)(2,"div",20)(3,"div",21)(4,"div",22)(5,"div",23),e._uU(6,"First name:"),e.qZA(),e._UZ(7,"np-input-text",24),e.qZA()(),e.TgZ(8,"div",21)(9,"div",22)(10,"div",23),e._uU(11,"Last name:"),e.qZA(),e._UZ(12,"np-input-text",25),e.qZA()()(),e.TgZ(13,"div",20)(14,"div",21)(15,"div",22)(16,"div",23),e._uU(17,"Birth date:"),e.qZA(),e._UZ(18,"np-date-picker",26),e.qZA()(),e.TgZ(19,"div",21)(20,"div",22)(21,"div",23),e._uU(22,"Birth time:"),e.qZA(),e._UZ(23,"np-time-picker",27),e.qZA()()(),e.TgZ(24,"div",20)(25,"div",28)(26,"div",22)(27,"div",23),e._uU(28,"Is Active:"),e.qZA(),e._UZ(29,"np-switch",29),e.qZA()()(),e.TgZ(30,"div",20)(31,"div",28)(32,"div",22)(33,"div",23),e._uU(34,"Description:"),e.qZA(),e._UZ(35,"np-textarea",30),e.qZA()()(),e.TgZ(36,"div",6)(37,"button",31),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.onSubmit())}),e._uU(38," Save "),e.qZA(),e.TgZ(39,"button",7),e.NdJ("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.closeLeft())}),e._uU(40," Close "),e.qZA()()()()}if(2&h){const n=e.oxw();e.xp6(1),e.Q6J("formGroup",n.myForm),e.xp6(6),e.Q6J("autoFocus",!0)}}class l{constructor(s){this.sidepanelService=s,this.importText="import { NpSidepanelModule } from 'np-ui-lib';",this.htmlText="<np-sidepanel [position]=\"'right'\" [height]=\"'100%'\" [width]=\"'200px'\">\n  ...Body content\n</np-sidepanel>",this.lazyLoadText="<np-sidepanel [position]=\"'right'\" [height]=\"'100%'\" [width]=\"'200px'\">\n  <ng-template npSidepanelContent>\n    ...Lazy load content\n  </ng-tempalte>\n</sidepanel>",this.serviceText="constructor(private sidepanelService: NpSidepanelService) { }",this.serviceClose='this.sidepanelService.closeSidepanel("leftSidepanel", { data: 5 });\n<span class="np-text-success">// Where leftSidepanel is inputId of sidepanel. and pass data in second parameter.\n// this data will be passed to onClose callback method of sidepanel.\n</span>',this.serviceGet='var reference = this.sidepanelService.get("leftSidepanel");\n<span class="np-text-success">// Where leftSidepanel is inputId of sidepanel.\n// this get method will return sidepanel reference object, \n// which can be furthur subscribed to get call back when sidepanel is closed by service.\n</span>\nreference.subscribe((data) => {\n  <span class="np-text-success">... Callback on sidepanel close by service</span>\n});',this.isActive=!0,this.myForm=new i.nJ({firstName:new i.p4("",i.kI.required),lastName:new i.p4("",i.kI.required),birthDate:new i.p4(null,i.kI.required),birthTime:new i.p4("",i.kI.required),isActive:new i.p4(!1,i.kI.required),description:new i.p4("",i.kI.required)})}ngOnInit(){}openLeft(){this.sidePanelLeft.open(null)}onCloseLeft(s){console.log(JSON.stringify(s)),alert("Left sidepanel closed")}closeLeft(){this.sidepanelService.closeSidepanel("leftSidepanel",{data:5})}onSubmit(){this.myForm.invalid?this.markFormGroupTouched(this.myForm):this.closeLeft()}markFormGroupTouched(s){Object.values(s.controls).forEach(n=>{n.markAsTouched(),n.controls&&this.markFormGroupTouched(n)})}openRight(){this.sidePanelRight.open(null)}openTop(){this.sidePanelTop.open(null)}openBottom(){this.sidePanelBottom.open(null)}static#e=this.\u0275fac=function(n){return new(n||l)(e.Y36(t.MH))};static#t=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-np-sidepanel-demo"]],viewQuery:function(n,o){if(1&n&&(e.Gf(_,7),e.Gf(T,7),e.Gf(A,7),e.Gf(f,7)),2&n){let a;e.iGM(a=e.CRH())&&(o.sidePanelLeft=a.first),e.iGM(a=e.CRH())&&(o.sidePanelRight=a.first),e.iGM(a=e.CRH())&&(o.sidePanelTop=a.first),e.iGM(a=e.CRH())&&(o.sidePanelBottom=a.first)}},decls:212,vars:23,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],[3,"innerHTML"],["title","Examples"],[1,"np-btn-group"],["type","button",1,"np-btn",3,"click"],[3,"position","height","inputId","header","onClose"],["sidePanelLeft",""],["npSidepanelContent",""],[3,"position","height","width","styleClass","backDropClass","closeOnClickOutside"],["sidePanelRight",""],[1,"np-btn","np-btn-danger",3,"click"],[3,"position","width","height"],["sidePanelTop",""],[3,"position","width","height","hasBackDrop"],["sidePanelBottom",""],[1,"np-container"],[3,"formGroup"],[1,"np-row"],[1,"np-col-6"],[1,"np-form-group"],[1,"np-form-label","np-required"],["name","txtFirstName","formControlName","firstName",3,"autoFocus"],["name","txtLastName","formControlName","lastName"],["name","txtBirthDate","formControlName","birthDate"],["name","txtBirthTime","formControlName","birthTime"],[1,"np-col-12"],["name","swIsActive","formControlName","isActive"],["name","txtDescription","rows","3","formControlName","description"],["type","button",1,"np-btn","np-btn-primary",3,"click"]],template:function(n,o){if(1&n){const a=e.EpF();e.TgZ(0,"h2",0),e._uU(1,"Sidepanel"),e.qZA(),e.TgZ(2,"np-tabs")(3,"np-tab",1)(4,"np-card")(5,"np-card-body")(6,"b"),e._uU(7,"Module to import"),e.qZA(),e.TgZ(8,"div")(9,"pre"),e._UZ(10,"code",2),e.qZA()()()(),e.TgZ(11,"np-card")(12,"np-card-body")(13,"b"),e._uU(14,"HTML"),e.qZA(),e.TgZ(15,"div")(16,"pre"),e._UZ(17,"code",2),e.qZA()(),e.TgZ(18,"b"),e._uU(19,"How to set lazy loading for sidepanel?"),e.qZA(),e.TgZ(20,"div")(21,"pre"),e._UZ(22,"code",2),e.qZA()()()(),e.TgZ(23,"np-card")(24,"np-card-body")(25,"table",3)(26,"tr")(27,"th"),e._uU(28,"Property"),e.qZA(),e.TgZ(29,"th"),e._uU(30,"Description"),e.qZA(),e.TgZ(31,"th"),e._uU(32,"Type"),e.qZA(),e.TgZ(33,"th"),e._uU(34,"Default"),e.qZA()(),e.TgZ(35,"tr")(36,"td"),e._uU(37,"header"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"Set header, it is optional"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"string | html"),e.qZA(),e._UZ(42,"td"),e.qZA(),e.TgZ(43,"tr")(44,"td"),e._uU(45,"position"),e.qZA(),e.TgZ(46,"td"),e._uU(47,"Set position 'left' | 'right' | 'top' | 'bottom'"),e.qZA(),e.TgZ(48,"td"),e._uU(49,"string"),e.qZA(),e.TgZ(50,"td"),e._uU(51,"left"),e.qZA()(),e.TgZ(52,"tr")(53,"td"),e._uU(54,"height"),e.qZA(),e.TgZ(55,"td"),e._uU(56," Set height. Values should be like '100%', '100px', 200. If pass as number then it will considered as px. "),e.qZA(),e.TgZ(57,"td"),e._uU(58,"string | number"),e.qZA(),e._UZ(59,"td"),e.qZA(),e.TgZ(60,"tr")(61,"td"),e._uU(62,"width"),e.qZA(),e.TgZ(63,"td"),e._uU(64," Set width. Values should be like '100%', '100px', 200. If pass as number then it will considered as px. "),e.qZA(),e.TgZ(65,"td"),e._uU(66,"string | number"),e.qZA(),e._UZ(67,"td"),e.qZA(),e.TgZ(68,"tr")(69,"td"),e._uU(70,"closeOnClickOutside"),e.qZA(),e.TgZ(71,"td"),e._uU(72," Close panel on click of outside area. If backdrop is not set then close on outside click will not work. "),e.qZA(),e.TgZ(73,"td"),e._uU(74,"boolean"),e.qZA(),e.TgZ(75,"td"),e._uU(76,"true"),e.qZA()(),e.TgZ(77,"tr")(78,"td"),e._uU(79,"hasBackDrop"),e.qZA(),e.TgZ(80,"td"),e._uU(81,"Show backdrop or not"),e.qZA(),e.TgZ(82,"td"),e._uU(83,"boolean"),e.qZA(),e.TgZ(84,"td"),e._uU(85,"true"),e.qZA()(),e.TgZ(86,"tr")(87,"td"),e._uU(88,"backDropClass"),e.qZA(),e.TgZ(89,"td"),e._uU(90,"Set backdrop class"),e.qZA(),e.TgZ(91,"td"),e._uU(92,"string"),e.qZA(),e.TgZ(93,"td"),e._uU(94,"np-sidepanel-backdrop"),e.qZA()(),e.TgZ(95,"tr")(96,"td"),e._uU(97,"styleClass"),e.qZA(),e.TgZ(98,"td"),e._uU(99,"Set extra class on component"),e.qZA(),e.TgZ(100,"td"),e._uU(101,"string"),e.qZA(),e._UZ(102,"td"),e.qZA(),e.TgZ(103,"tr")(104,"td"),e._uU(105,"inputId"),e.qZA(),e.TgZ(106,"td"),e._uU(107,"Set id attribute"),e.qZA(),e.TgZ(108,"td"),e._uU(109,"string"),e.qZA(),e._UZ(110,"td"),e.qZA()()()(),e.TgZ(111,"np-card")(112,"np-card-body")(113,"table",3)(114,"tr")(115,"th"),e._uU(116,"Method"),e.qZA(),e.TgZ(117,"th"),e._uU(118,"Description"),e.qZA(),e.TgZ(119,"th"),e._uU(120,"Parameters"),e.qZA()(),e.TgZ(121,"tr")(122,"td"),e._uU(123,"onOpen(data : any)"),e.qZA(),e.TgZ(124,"td"),e._uU(125,"Callback on open"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"data passed from open api"),e.qZA()(),e.TgZ(128,"tr")(129,"td"),e._uU(130,"onClose(data : any)"),e.qZA(),e.TgZ(131,"td"),e._uU(132,"Callback on close"),e.qZA(),e.TgZ(133,"td"),e._uU(134,"data passed from close api"),e.qZA()()()()(),e.TgZ(135,"np-card")(136,"np-card-body")(137,"table",3)(138,"tr")(139,"th"),e._uU(140,"Api"),e.qZA(),e.TgZ(141,"th"),e._uU(142,"Description"),e.qZA(),e.TgZ(143,"th"),e._uU(144,"Parameters"),e.qZA()(),e.TgZ(145,"tr")(146,"td"),e._uU(147,"open(data : any)"),e.qZA(),e.TgZ(148,"td"),e._uU(149,"Open side panel"),e.qZA(),e.TgZ(150,"td"),e._uU(151,"Pass data to onOpen method"),e.qZA()(),e.TgZ(152,"tr")(153,"td"),e._uU(154,"close(data : any)"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"Close side panel"),e.qZA(),e.TgZ(157,"td"),e._uU(158,"Pass data to onClose method"),e.qZA()()()()(),e.TgZ(159,"np-card")(160,"np-card-body")(161,"np-card-body")(162,"b"),e._uU(163,"NpSidepanelService"),e.qZA(),e.TgZ(164,"div")(165,"pre"),e._UZ(166,"code",2),e.qZA()(),e.TgZ(167,"div")(168,"pre"),e._UZ(169,"code",4),e.qZA()(),e.TgZ(170,"div")(171,"pre"),e._UZ(172,"code",4),e.qZA()()()()()(),e.TgZ(173,"np-tab",5)(174,"div",6)(175,"button",7),e.NdJ("click",function(){return o.openLeft()}),e._uU(176," Open left sidepanel "),e.qZA(),e.TgZ(177,"button",7),e.NdJ("click",function(){return o.openRight()}),e._uU(178," Open right sidepanel "),e.qZA(),e.TgZ(179,"button",7),e.NdJ("click",function(){return o.openTop()}),e._uU(180," Open top sidepanel "),e.qZA(),e.TgZ(181,"button",7),e.NdJ("click",function(){return o.openBottom()}),e._uU(182," Open bottom sidepanel "),e.qZA()(),e.TgZ(183,"np-sidepanel",8,9),e.NdJ("onClose",function(d){return o.onCloseLeft(d)}),e.YNc(185,q,41,2,"ng-template",10),e.qZA(),e.TgZ(186,"np-sidepanel",11,12)(188,"h4"),e._uU(189,"Right sidepanel example"),e.qZA(),e.TgZ(190,"div",6)(191,"button",13),e.NdJ("click",function(){e.CHM(a);const d=e.MAs(187);return e.KtG(d.close(null))}),e._uU(192," Close "),e.qZA()()(),e.TgZ(193,"np-sidepanel",14,15)(195,"h4"),e._uU(196,"Top sidepanel header"),e.qZA(),e.TgZ(197,"p"),e._uU(198," A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. "),e.qZA(),e.TgZ(199,"p"),e._uU(200," A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. "),e.qZA(),e.TgZ(201,"p"),e._uU(202," A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. "),e.qZA(),e.TgZ(203,"p"),e._uU(204," A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose. "),e.qZA()(),e.TgZ(205,"np-sidepanel",16,17)(207,"h1"),e._uU(208,"Bottom sidepanel example"),e.qZA(),e.TgZ(209,"div",6)(210,"button",13),e.NdJ("click",function(){e.CHM(a);const d=e.MAs(206);return e.KtG(d.close(null))}),e._uU(211," Close "),e.qZA()()()()()}2&n&&(e.xp6(10),e.Q6J("innerText",o.importText),e.xp6(7),e.Q6J("innerText",o.htmlText),e.xp6(5),e.Q6J("innerText",o.lazyLoadText),e.xp6(144),e.Q6J("innerText",o.serviceText),e.xp6(3),e.Q6J("innerHTML",o.serviceClose,e.oJD),e.xp6(3),e.Q6J("innerHTML",o.serviceGet,e.oJD),e.xp6(11),e.Q6J("position","left")("height","100%")("inputId","leftSidepanel")("header","Add User Details:"),e.xp6(3),e.Q6J("position","right")("height","100%")("width","200px")("styleClass","myClass")("backDropClass","myBackDrop")("closeOnClickOutside",!1),e.xp6(7),e.Q6J("position","top")("width","100%")("height","200px"),e.xp6(12),e.Q6J("position","bottom")("width","100%")("height","200px")("hasBackDrop",!1))},dependencies:[t.sI,t.zy,t.bg,t.Et,t.Mc,i._Y,i.JJ,i.JL,i.sg,i.u,t.c0,t.El,t.KA,t.Qk,t.d0,t.On],encapsulation:2})}const U=[{path:"",component:l}];class c{static#e=this.\u0275fac=function(n){return new(n||c)};static#t=this.\u0275mod=e.oAB({type:c});static#n=this.\u0275inj=e.cJS({imports:[g.Bz.forChild(U),g.Bz]})}class u{static#e=this.\u0275fac=function(n){return new(n||u)};static#t=this.\u0275mod=e.oAB({type:u});static#n=this.\u0275inj=e.cJS({imports:[m.ez,c,t.Wv,t.ml,t.nD,t.kH,i.UX,t.Tk,t.i7,t.qp,t.X,t.Fd]})}}}]);