(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[9589],{9589:function(t,e,Z){"use strict";Z.r(e),Z.d(e,{NpInputTextDemoModule:function(){return A}});var n=Z(1116),g=Z(4387),u=Z(7368),d=Z(9883),r=Z(1462);function i(t,e){1&t&&(u.TgZ(0,"div",21),u._uU(1," Min length 10 characters. "),u.qZA())}function T(t,e){1&t&&(u.TgZ(0,"div",21),u._uU(1," Max length 20 characters. "),u.qZA())}function o(t,e){1&t&&(u.TgZ(0,"div",21),u._uU(1," Only digits "),u.qZA())}function l(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"fieldset"),u.TgZ(1,"legend"),u._uU(2,"Basic"),u.qZA(),u.TgZ(3,"np-input-text",6),u.NdJ("ngModelChange",function(e){return u.CHM(t),u.oxw().input1=e}),u.qZA(),u.TgZ(4,"div"),u._uU(5),u.qZA(),u.qZA(),u.TgZ(6,"fieldset"),u.TgZ(7,"legend"),u._uU(8,"type"),u.qZA(),u.TgZ(9,"np-input-text",7),u.NdJ("ngModelChange",function(e){return u.CHM(t),u.oxw().input6=e}),u.qZA(),u.TgZ(10,"div"),u._uU(11),u.qZA(),u.qZA(),u.TgZ(12,"fieldset"),u.TgZ(13,"legend"),u._uU(14,"disabled"),u.qZA(),u.TgZ(15,"np-input-text",8),u.NdJ("ngModelChange",function(e){return u.CHM(t),u.oxw().input2=e}),u.qZA(),u.qZA(),u.TgZ(16,"fieldset"),u.TgZ(17,"legend"),u._uU(18,"readOnly"),u.qZA(),u.TgZ(19,"np-input-text",9),u.NdJ("ngModelChange",function(e){return u.CHM(t),u.oxw().input2=e}),u.qZA(),u.qZA(),u.TgZ(20,"fieldset"),u.TgZ(21,"legend"),u._uU(22,"required"),u.qZA(),u.TgZ(23,"np-input-text",10),u.NdJ("ngModelChange",function(e){return u.CHM(t),u.oxw().input3=e}),u.qZA(),u.qZA(),u.TgZ(24,"fieldset"),u.TgZ(25,"legend"),u._uU(26,"minLength and maxLength"),u.qZA(),u.TgZ(27,"np-input-text",11,12),u.NdJ("ngModelChange",function(e){return u.CHM(t),u.oxw().input4=e}),u.qZA(),u.YNc(29,i,2,0,"div",13),u.YNc(30,T,2,0,"div",13),u.qZA(),u.TgZ(31,"fieldset"),u.TgZ(32,"legend"),u._uU(33,"pattern"),u.qZA(),u.TgZ(34,"np-input-text",14,15),u.NdJ("ngModelChange",function(e){return u.CHM(t),u.oxw().input5=e}),u.qZA(),u.YNc(36,o,2,0,"div",13),u.qZA(),u.TgZ(37,"fieldset"),u.TgZ(38,"legend"),u._uU(39,"placeholder"),u.qZA(),u._UZ(40,"np-input-text",16),u.qZA(),u.TgZ(41,"fieldset"),u.TgZ(42,"legend"),u._uU(43,"styleClass"),u.qZA(),u._UZ(44,"np-input-text",17),u.qZA(),u.TgZ(45,"fieldset"),u.TgZ(46,"legend"),u._uU(47,"prefixLabel"),u.qZA(),u._UZ(48,"np-input-text",18),u.qZA(),u.TgZ(49,"fieldset"),u.TgZ(50,"legend"),u._uU(51,"suffixLabel"),u.qZA(),u._UZ(52,"np-input-text",19),u.qZA(),u.TgZ(53,"fieldset"),u.TgZ(54,"legend"),u._uU(55,"onChange"),u.qZA(),u.TgZ(56,"np-input-text",20),u.NdJ("onChange",function(e){return u.CHM(t),u.oxw().onChange(e)}),u.qZA(),u.qZA()}if(2&t){const t=u.MAs(28),e=u.MAs(35),Z=u.oxw();u.xp6(3),u.Q6J("ngModel",Z.input1)("autoFocus",!0),u.xp6(2),u.hij("Value: ",Z.input1,""),u.xp6(4),u.Q6J("ngModel",Z.input6)("type","password"),u.xp6(2),u.hij("Value: ",Z.input6,""),u.xp6(4),u.Q6J("ngModel",Z.input2)("disabled",!0),u.xp6(4),u.Q6J("ngModel",Z.input2)("readOnly",!0),u.xp6(4),u.Q6J("ngModel",Z.input3)("required",!0),u.xp6(4),u.Q6J("minLength",10)("maxLength",20)("ngModel",Z.input4),u.xp6(2),u.Q6J("ngIf",t.errors&&t.errors.minLength),u.xp6(1),u.Q6J("ngIf",t.errors&&t.errors.maxLength),u.xp6(4),u.Q6J("ngModel",Z.input5),u.xp6(2),u.Q6J("ngIf",e.errors&&e.errors.pattern),u.xp6(4),u.Q6J("placeholder","Enter your name"),u.xp6(4),u.Q6J("styleClass","myClass"),u.xp6(4),u.Q6J("prefixLabel","<i class='fa fa-user'></i>"),u.xp6(4),u.Q6J("suffixLabel","<i class='fa fa-lock'></i>")("type","password")}}const a=[{path:"",component:(()=>{class t{constructor(){this.importText="import { NpInputTextModule } from 'np-ui-lib';",this.htmlText='<np-input-text [(ngModel)]="firstName"></np-input-text>',this.input2="Test text"}ngOnInit(){}onChange(t){alert(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-np-input-text-demo"]],decls:204,vars:2,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["title","Examples"],["npTabContent",""],[3,"ngModel","autoFocus","ngModelChange"],[3,"ngModel","type","ngModelChange"],[3,"ngModel","disabled","ngModelChange"],[3,"ngModel","readOnly","ngModelChange"],[3,"ngModel","required","ngModelChange"],[3,"minLength","maxLength","ngModel","ngModelChange"],["inputText4","ngModel"],["class","np-text-danger",4,"ngIf"],["pattern","^\\d*$",3,"ngModel","ngModelChange"],["inputText5","ngModel"],[3,"placeholder"],[3,"styleClass"],[3,"prefixLabel"],[3,"suffixLabel","type"],[3,"onChange"],[1,"np-text-danger"]],template:function(t,e){1&t&&(u.TgZ(0,"h2",0),u._uU(1,"Input Text"),u.qZA(),u.TgZ(2,"np-tabs"),u.TgZ(3,"np-tab",1),u.TgZ(4,"np-card"),u.TgZ(5,"np-card-body"),u.TgZ(6,"b"),u._uU(7,"Module to import"),u.qZA(),u.TgZ(8,"div"),u.TgZ(9,"pre"),u._UZ(10,"code",2),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(11,"np-card"),u.TgZ(12,"np-card-body"),u.TgZ(13,"b"),u._uU(14,"HTML"),u.qZA(),u.TgZ(15,"div"),u.TgZ(16,"pre"),u._UZ(17,"code",2),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(18,"np-card"),u.TgZ(19,"np-card-body"),u.TgZ(20,"table",3),u.TgZ(21,"tr"),u.TgZ(22,"th"),u._uU(23,"Property"),u.qZA(),u.TgZ(24,"th"),u._uU(25,"Description"),u.qZA(),u.TgZ(26,"th"),u._uU(27,"Type"),u.qZA(),u.TgZ(28,"th"),u._uU(29,"Default"),u.qZA(),u.qZA(),u.TgZ(30,"tr"),u.TgZ(31,"td"),u._uU(32,"ngModel"),u.qZA(),u.TgZ(33,"td"),u._uU(34,"Value"),u.qZA(),u.TgZ(35,"td"),u._uU(36,"string"),u.qZA(),u._UZ(37,"td"),u.qZA(),u.TgZ(38,"tr"),u.TgZ(39,"td"),u._uU(40,"type"),u.qZA(),u.TgZ(41,"td"),u._uU(42,"Input type"),u.qZA(),u.TgZ(43,"td"),u._uU(44,"string"),u.qZA(),u.TgZ(45,"td"),u._uU(46,"text"),u.qZA(),u.qZA(),u.TgZ(47,"tr"),u.TgZ(48,"td"),u._uU(49,"minLength"),u.qZA(),u.TgZ(50,"td"),u._uU(51,"Set minimum length validation"),u.qZA(),u.TgZ(52,"td"),u._uU(53,"number"),u.qZA(),u._UZ(54,"td"),u.qZA(),u.TgZ(55,"tr"),u.TgZ(56,"td"),u._uU(57,"maxLength"),u.qZA(),u.TgZ(58,"td"),u._uU(59,"Set maximum length validation"),u.qZA(),u.TgZ(60,"td"),u._uU(61,"number"),u.qZA(),u._UZ(62,"td"),u.qZA(),u.TgZ(63,"tr"),u.TgZ(64,"td"),u._uU(65,"pattern"),u.qZA(),u.TgZ(66,"td"),u._uU(67,"Set regex pattern validation"),u.qZA(),u.TgZ(68,"td"),u._uU(69,"string"),u.qZA(),u._UZ(70,"td"),u.qZA(),u.TgZ(71,"tr"),u.TgZ(72,"td"),u._uU(73,"prefixLabel"),u.qZA(),u.TgZ(74,"td"),u._uU(75,"Set prefix string | html"),u.qZA(),u.TgZ(76,"td"),u._uU(77,"string | html"),u.qZA(),u._UZ(78,"td"),u.qZA(),u.TgZ(79,"tr"),u.TgZ(80,"td"),u._uU(81,"suffixLabel"),u.qZA(),u.TgZ(82,"td"),u._uU(83,"Set suffix string | html"),u.qZA(),u.TgZ(84,"td"),u._uU(85,"string | html"),u.qZA(),u._UZ(86,"td"),u.qZA(),u.TgZ(87,"tr"),u.TgZ(88,"td"),u._uU(89,"placeholder"),u.qZA(),u.TgZ(90,"td"),u._uU(91,"Set placeholder"),u.qZA(),u.TgZ(92,"td"),u._uU(93,"string"),u.qZA(),u._UZ(94,"td"),u.qZA(),u.TgZ(95,"tr"),u.TgZ(96,"td"),u._uU(97,"disabled"),u.qZA(),u.TgZ(98,"td"),u._uU(99,"Set disabled"),u.qZA(),u.TgZ(100,"td"),u._uU(101,"boolean"),u.qZA(),u.TgZ(102,"td"),u._uU(103,"false"),u.qZA(),u.qZA(),u.TgZ(104,"tr"),u.TgZ(105,"td"),u._uU(106,"required"),u.qZA(),u.TgZ(107,"td"),u._uU(108,"Set required"),u.qZA(),u.TgZ(109,"td"),u._uU(110,"boolean"),u.qZA(),u.TgZ(111,"td"),u._uU(112,"false"),u.qZA(),u.qZA(),u.TgZ(113,"tr"),u.TgZ(114,"td"),u._uU(115,"readOnly"),u.qZA(),u.TgZ(116,"td"),u._uU(117,"Set readonly"),u.qZA(),u.TgZ(118,"td"),u._uU(119,"boolean"),u.qZA(),u.TgZ(120,"td"),u._uU(121,"false"),u.qZA(),u.qZA(),u.TgZ(122,"tr"),u.TgZ(123,"td"),u._uU(124,"autoFocus"),u.qZA(),u.TgZ(125,"td"),u._uU(126,"Set autofocus"),u.qZA(),u.TgZ(127,"td"),u._uU(128,"boolean"),u.qZA(),u.TgZ(129,"td"),u._uU(130,"false"),u.qZA(),u.qZA(),u.TgZ(131,"tr"),u.TgZ(132,"td"),u._uU(133,"tabIndex"),u.qZA(),u.TgZ(134,"td"),u._uU(135,"Set tabindex attribute"),u.qZA(),u.TgZ(136,"td"),u._uU(137,"number"),u.qZA(),u._UZ(138,"td"),u.qZA(),u.TgZ(139,"tr"),u.TgZ(140,"td"),u._uU(141,"styleClass"),u.qZA(),u.TgZ(142,"td"),u._uU(143,"Set extra class on component"),u.qZA(),u.TgZ(144,"td"),u._uU(145,"string"),u.qZA(),u._UZ(146,"td"),u.qZA(),u.TgZ(147,"tr"),u.TgZ(148,"td"),u._uU(149,"inputId"),u.qZA(),u.TgZ(150,"td"),u._uU(151,"Set id attribute"),u.qZA(),u.TgZ(152,"td"),u._uU(153,"string"),u.qZA(),u._UZ(154,"td"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(155,"np-card"),u.TgZ(156,"np-card-body"),u.TgZ(157,"table",3),u.TgZ(158,"tr"),u.TgZ(159,"th"),u._uU(160,"Method"),u.qZA(),u.TgZ(161,"th"),u._uU(162,"Description"),u.qZA(),u.TgZ(163,"th"),u._uU(164,"Parameters"),u.qZA(),u.qZA(),u.TgZ(165,"tr"),u.TgZ(166,"td"),u._uU(167,"onChange(v: any)"),u.qZA(),u.TgZ(168,"td"),u._uU(169,"Callback event on value change."),u.qZA(),u.TgZ(170,"td"),u._uU(171,"Value"),u.qZA(),u.qZA(),u.TgZ(172,"tr"),u.TgZ(173,"td"),u._uU(174,"onFocus(event)"),u.qZA(),u.TgZ(175,"td"),u._uU(176,"Callback event on input focus."),u.qZA(),u.TgZ(177,"td"),u._uU(178,"Browser event"),u.qZA(),u.qZA(),u.TgZ(179,"tr"),u.TgZ(180,"td"),u._uU(181,"onBlur(event)"),u.qZA(),u.TgZ(182,"td"),u._uU(183,"Callback event on input blur."),u.qZA(),u.TgZ(184,"td"),u._uU(185,"Browser event"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(186,"np-card"),u.TgZ(187,"np-card-body"),u.TgZ(188,"table",3),u.TgZ(189,"tr"),u.TgZ(190,"th"),u._uU(191,"Api"),u.qZA(),u.TgZ(192,"th"),u._uU(193,"Description"),u.qZA(),u.TgZ(194,"th"),u._uU(195,"Parameters"),u.qZA(),u.qZA(),u.TgZ(196,"tr"),u.TgZ(197,"td"),u._uU(198,"focus()"),u.qZA(),u.TgZ(199,"td"),u._uU(200," Set focus on control. If not setting focus properly then use timeout of 500ms. "),u.qZA(),u._UZ(201,"td"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(202,"np-tab",4),u.YNc(203,l,57,24,"ng-template",5),u.qZA(),u.qZA()),2&t&&(u.xp6(10),u.Q6J("innerText",e.importText),u.xp6(7),u.Q6J("innerText",e.htmlText))},directives:[d.KA,d.Qk,d.c0,d.El,d.Bl,d.On,r.JJ,r.On,r.Q7,n.O5,r.c5],encapsulation:2}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[g.Bz.forChild(a)],g.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[n.ez,p,r.u5,d.Fd,d.Tk,d.i7]]}),t})()}}]);