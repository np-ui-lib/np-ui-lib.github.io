(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[3773],{3773:function(t,e,Z){"use strict";Z.r(e),Z.d(e,{NpSwitchDemoModule:function(){return a}});var n=Z(1116),g=Z(4387),d=Z(7368),i=Z(9883),u=Z(1462);const l=["switchControl"],o=[{path:"",component:(()=>{class t{constructor(){this.switch1=!0,this.switch2=!1,this.switch3=!0,this.switch5=!0,this.switch7=!0,this.switch8=!0,this.importText="import { NpSwitchModule } from 'np-ui-lib';",this.htmlText='<np-switch [(ngModel)]="value"></np-switch>'}ngOnInit(){}onChangeSwitch8(t){alert(t)}onTabChange(t){"Examples"===t.title&&setTimeout(()=>{this.switchControl.focus()},100)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-np-switch-demo"]],viewQuery:function(t,e){if(1&t&&d.Gf(l,7),2&t){let t;d.iGM(t=d.CRH())&&(e.switchControl=t.first)}},decls:210,vars:18,consts:[[1,"page-header"],[3,"onTabChange"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["id","tabExample","title","Examples"],[3,"ngModel","inputId","ngModelChange"],["switchControl",""],[1,"np-btn",3,"click"],[3,"ngModel","ngModelChange"],["disabled","",3,"ngModel","ngModelChange"],[3,"ngModel","readOnly","ngModelChange"],["required","",3,"ngModel","ngModelChange"],[3,"ngModel","falseLabelText","trueLabelText","ngModelChange"],[3,"ngModel","styleClass","ngModelChange"],[3,"ngModel","ngModelChange","onChange"]],template:function(t,e){1&t&&(d.TgZ(0,"h2",0),d._uU(1,"Switch"),d.qZA(),d.TgZ(2,"np-tabs",1),d.NdJ("onTabChange",function(t){return e.onTabChange(t)}),d.TgZ(3,"np-tab",2),d.TgZ(4,"np-card"),d.TgZ(5,"np-card-body"),d.TgZ(6,"b"),d._uU(7,"Module to import"),d.qZA(),d.TgZ(8,"div"),d.TgZ(9,"pre"),d._UZ(10,"code",3),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(11,"np-card"),d.TgZ(12,"np-card-body"),d.TgZ(13,"b"),d._uU(14,"HTML"),d.qZA(),d.TgZ(15,"div"),d.TgZ(16,"pre"),d._UZ(17,"code",3),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(18,"np-card"),d.TgZ(19,"np-card-body"),d.TgZ(20,"table",4),d.TgZ(21,"tr"),d.TgZ(22,"th"),d._uU(23,"Property"),d.qZA(),d.TgZ(24,"th"),d._uU(25,"Description"),d.qZA(),d.TgZ(26,"th"),d._uU(27,"Type"),d.qZA(),d.TgZ(28,"th"),d._uU(29,"Default"),d.qZA(),d.qZA(),d.TgZ(30,"tr"),d.TgZ(31,"td"),d._uU(32,"ngModel"),d.qZA(),d.TgZ(33,"td"),d._uU(34,"Value"),d.qZA(),d.TgZ(35,"td"),d._uU(36,"boolean"),d.qZA(),d._UZ(37,"td"),d.qZA(),d.TgZ(38,"tr"),d.TgZ(39,"td"),d._uU(40,"trueLabelText"),d.qZA(),d.TgZ(41,"td"),d._uU(42,"Set text for label for true side"),d.qZA(),d.TgZ(43,"td"),d._uU(44,"string"),d.qZA(),d.TgZ(45,"td"),d._uU(46,"True"),d.qZA(),d.qZA(),d.TgZ(47,"tr"),d.TgZ(48,"td"),d._uU(49,"falseLabelText"),d.qZA(),d.TgZ(50,"td"),d._uU(51,"Set text for label for false side"),d.qZA(),d.TgZ(52,"td"),d._uU(53,"string"),d.qZA(),d.TgZ(54,"td"),d._uU(55,"False"),d.qZA(),d.qZA(),d.TgZ(56,"tr"),d.TgZ(57,"td"),d._uU(58,"disabled"),d.qZA(),d.TgZ(59,"td"),d._uU(60,"Set disabled"),d.qZA(),d.TgZ(61,"td"),d._uU(62,"boolean"),d.qZA(),d.TgZ(63,"td"),d._uU(64,"false"),d.qZA(),d.qZA(),d.TgZ(65,"tr"),d.TgZ(66,"td"),d._uU(67,"required"),d.qZA(),d.TgZ(68,"td"),d._uU(69,"Set required"),d.qZA(),d.TgZ(70,"td"),d._uU(71,"boolean"),d.qZA(),d.TgZ(72,"td"),d._uU(73,"false"),d.qZA(),d.qZA(),d.TgZ(74,"tr"),d.TgZ(75,"td"),d._uU(76,"readOnly"),d.qZA(),d.TgZ(77,"td"),d._uU(78,"Set readonly"),d.qZA(),d.TgZ(79,"td"),d._uU(80,"boolean"),d.qZA(),d.TgZ(81,"td"),d._uU(82,"false"),d.qZA(),d.qZA(),d.TgZ(83,"tr"),d.TgZ(84,"td"),d._uU(85,"autoFocus"),d.qZA(),d.TgZ(86,"td"),d._uU(87,"Set autofocus"),d.qZA(),d.TgZ(88,"td"),d._uU(89,"boolean"),d.qZA(),d.TgZ(90,"td"),d._uU(91,"false"),d.qZA(),d.qZA(),d.TgZ(92,"tr"),d.TgZ(93,"td"),d._uU(94,"tabIndex"),d.qZA(),d.TgZ(95,"td"),d._uU(96,"Set tabindex attribute"),d.qZA(),d.TgZ(97,"td"),d._uU(98,"number"),d.qZA(),d._UZ(99,"td"),d.qZA(),d.TgZ(100,"tr"),d.TgZ(101,"td"),d._uU(102,"styleClass"),d.qZA(),d.TgZ(103,"td"),d._uU(104,"Set extra class on component"),d.qZA(),d.TgZ(105,"td"),d._uU(106,"string"),d.qZA(),d._UZ(107,"td"),d.qZA(),d.TgZ(108,"tr"),d.TgZ(109,"td"),d._uU(110,"inputId"),d.qZA(),d.TgZ(111,"td"),d._uU(112,"Set id attribute"),d.qZA(),d.TgZ(113,"td"),d._uU(114,"string"),d.qZA(),d._UZ(115,"td"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(116,"np-card"),d.TgZ(117,"np-card-body"),d.TgZ(118,"table",4),d.TgZ(119,"tr"),d.TgZ(120,"th"),d._uU(121,"Method"),d.qZA(),d.TgZ(122,"th"),d._uU(123,"Description"),d.qZA(),d.TgZ(124,"th"),d._uU(125,"Parameters"),d.qZA(),d.qZA(),d.TgZ(126,"tr"),d.TgZ(127,"td"),d._uU(128,"onChange(v: any)"),d.qZA(),d.TgZ(129,"td"),d._uU(130,"Callback event on value change."),d.qZA(),d.TgZ(131,"td"),d._uU(132,"Value"),d.qZA(),d.qZA(),d.TgZ(133,"tr"),d.TgZ(134,"td"),d._uU(135,"onFocus(event)"),d.qZA(),d.TgZ(136,"td"),d._uU(137,"Callback event on input focus."),d.qZA(),d.TgZ(138,"td"),d._uU(139,"Browser event"),d.qZA(),d.qZA(),d.TgZ(140,"tr"),d.TgZ(141,"td"),d._uU(142,"onBlur(event)"),d.qZA(),d.TgZ(143,"td"),d._uU(144,"Callback event on input blur."),d.qZA(),d.TgZ(145,"td"),d._uU(146,"Browser event"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(147,"np-card"),d.TgZ(148,"np-card-body"),d.TgZ(149,"table",4),d.TgZ(150,"tr"),d.TgZ(151,"th"),d._uU(152,"Api"),d.qZA(),d.TgZ(153,"th"),d._uU(154,"Description"),d.qZA(),d.TgZ(155,"th"),d._uU(156,"Parameters"),d.qZA(),d.qZA(),d.TgZ(157,"tr"),d.TgZ(158,"td"),d._uU(159,"focus()"),d.qZA(),d.TgZ(160,"td"),d._uU(161," Set focus on control. If not setting focus properly then use timeout of 500ms. "),d.qZA(),d._UZ(162,"td"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(163,"np-tab",5),d.TgZ(164,"div"),d.TgZ(165,"fieldset"),d.TgZ(166,"legend"),d._uU(167,"Basic switch"),d.qZA(),d.TgZ(168,"np-switch",6,7),d.NdJ("ngModelChange",function(t){return e.switch1=t}),d.qZA(),d.TgZ(170,"div"),d._uU(171),d.qZA(),d.TgZ(172,"button",8),d.NdJ("click",function(){return e.switch1=!e.switch1}),d._uU(173," Toggle Value "),d.qZA(),d.qZA(),d.qZA(),d.TgZ(174,"div"),d.TgZ(175,"fieldset"),d.TgZ(176,"legend"),d._uU(177,"default value to false"),d.qZA(),d.TgZ(178,"np-switch",9),d.NdJ("ngModelChange",function(t){return e.switch2=t}),d.qZA(),d.TgZ(179,"div"),d._uU(180),d.qZA(),d.qZA(),d.qZA(),d.TgZ(181,"div"),d.TgZ(182,"fieldset"),d.TgZ(183,"legend"),d._uU(184,"disabled and readOnly"),d.qZA(),d.TgZ(185,"np-switch",10),d.NdJ("ngModelChange",function(t){return e.switch3=t}),d.qZA(),d._UZ(186,"br"),d.TgZ(187,"np-switch",11),d.NdJ("ngModelChange",function(t){return e.switch3=t}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(188,"div"),d.TgZ(189,"fieldset"),d.TgZ(190,"legend"),d._uU(191,"required"),d.qZA(),d.TgZ(192,"np-switch",12),d.NdJ("ngModelChange",function(t){return e.switch4=t}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(193,"div"),d.TgZ(194,"fieldset"),d.TgZ(195,"legend"),d._uU(196,"trueLabelText and falseLabelText as string"),d.qZA(),d.TgZ(197,"np-switch",13),d.NdJ("ngModelChange",function(t){return e.switch5=t}),d.qZA(),d.TgZ(198,"div"),d._uU(199),d.qZA(),d.qZA(),d.qZA(),d.TgZ(200,"div"),d.TgZ(201,"fieldset"),d.TgZ(202,"legend"),d._uU(203,"styleClass"),d.qZA(),d.TgZ(204,"np-switch",14),d.NdJ("ngModelChange",function(t){return e.switch7=t}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(205,"div"),d.TgZ(206,"fieldset"),d.TgZ(207,"legend"),d._uU(208,"onChange"),d.qZA(),d.TgZ(209,"np-switch",15),d.NdJ("ngModelChange",function(t){return e.switch8=t})("onChange",function(t){return e.onChangeSwitch8(t)}),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&t&&(d.xp6(10),d.Q6J("innerText",e.importText),d.xp6(7),d.Q6J("innerText",e.htmlText),d.xp6(151),d.Q6J("ngModel",e.switch1)("inputId","txtSwitch"),d.xp6(3),d.hij("Selected Value : ",e.switch1,""),d.xp6(7),d.Q6J("ngModel",e.switch2),d.xp6(2),d.hij("Selected Value : ",e.switch2,""),d.xp6(5),d.Q6J("ngModel",e.switch3),d.xp6(2),d.Q6J("ngModel",e.switch3)("readOnly",!0),d.xp6(5),d.Q6J("ngModel",e.switch4),d.xp6(5),d.Q6J("ngModel",e.switch5)("falseLabelText","No")("trueLabelText","Yes"),d.xp6(2),d.hij("Selected Value : ",e.switch5,""),d.xp6(5),d.Q6J("ngModel",e.switch7)("styleClass","myClass"),d.xp6(5),d.Q6J("ngModel",e.switch8))},directives:[i.KA,i.Qk,i.c0,i.El,i.Mc,u.JJ,u.On,u.Q7],encapsulation:2}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[g.Bz.forChild(o)],g.Bz]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[n.ez,u.u5,T,i.kH,i.Tk,i.i7]]}),t})()}}]);