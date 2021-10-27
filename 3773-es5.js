!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var Z=e[n];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(t,Z.key,Z)}}(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[3773],{3773:function(n,Z,g){"use strict";g.r(Z),g.d(Z,{NpSwitchDemoModule:function(){return q}});var i,u,d=g(1116),o=g(4387),a=g(7368),l=g(9883),r=g(1462),T=["switchControl"],s=[{path:"",component:(i=function(){function n(){t(this,n),this.switch1=!0,this.switch2=!1,this.switch3=!0,this.switch5=!0,this.switch7=!0,this.switch8=!0,this.importText="import { NpSwitchModule } from 'np-ui-lib';",this.htmlText='<np-switch [(ngModel)]="value"></np-switch>'}var Z,g,i;return Z=n,(g=[{key:"ngOnInit",value:function(){}},{key:"onChangeSwitch8",value:function(t){alert(t)}},{key:"onTabChange",value:function(t){var e=this;"Examples"===t.title&&setTimeout(function(){e.switchControl.focus()},100)}}])&&e(Z.prototype,g),i&&e(Z,i),n}(),i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=a.Xpm({type:i,selectors:[["app-np-switch-demo"]],viewQuery:function(t,e){var n;1&t&&a.Gf(T,7),2&t&&a.iGM(n=a.CRH())&&(e.switchControl=n.first)},decls:210,vars:18,consts:[[1,"page-header"],[3,"onTabChange"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["id","tabExample","title","Examples"],[3,"ngModel","inputId","ngModelChange"],["switchControl",""],[1,"np-btn",3,"click"],[3,"ngModel","ngModelChange"],["disabled","",3,"ngModel","ngModelChange"],[3,"ngModel","readOnly","ngModelChange"],["required","",3,"ngModel","ngModelChange"],[3,"ngModel","falseLabelText","trueLabelText","ngModelChange"],[3,"ngModel","styleClass","ngModelChange"],[3,"ngModel","ngModelChange","onChange"]],template:function(t,e){1&t&&(a.TgZ(0,"h2",0),a._uU(1,"Switch"),a.qZA(),a.TgZ(2,"np-tabs",1),a.NdJ("onTabChange",function(t){return e.onTabChange(t)}),a.TgZ(3,"np-tab",2),a.TgZ(4,"np-card"),a.TgZ(5,"np-card-body"),a.TgZ(6,"b"),a._uU(7,"Module to import"),a.qZA(),a.TgZ(8,"div"),a.TgZ(9,"pre"),a._UZ(10,"code",3),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"np-card"),a.TgZ(12,"np-card-body"),a.TgZ(13,"b"),a._uU(14,"HTML"),a.qZA(),a.TgZ(15,"div"),a.TgZ(16,"pre"),a._UZ(17,"code",3),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(18,"np-card"),a.TgZ(19,"np-card-body"),a.TgZ(20,"table",4),a.TgZ(21,"tr"),a.TgZ(22,"th"),a._uU(23,"Property"),a.qZA(),a.TgZ(24,"th"),a._uU(25,"Description"),a.qZA(),a.TgZ(26,"th"),a._uU(27,"Type"),a.qZA(),a.TgZ(28,"th"),a._uU(29,"Default"),a.qZA(),a.qZA(),a.TgZ(30,"tr"),a.TgZ(31,"td"),a._uU(32,"ngModel"),a.qZA(),a.TgZ(33,"td"),a._uU(34,"Value"),a.qZA(),a.TgZ(35,"td"),a._uU(36,"boolean"),a.qZA(),a._UZ(37,"td"),a.qZA(),a.TgZ(38,"tr"),a.TgZ(39,"td"),a._uU(40,"trueLabelText"),a.qZA(),a.TgZ(41,"td"),a._uU(42,"Set text for label for true side"),a.qZA(),a.TgZ(43,"td"),a._uU(44,"string"),a.qZA(),a.TgZ(45,"td"),a._uU(46,"True"),a.qZA(),a.qZA(),a.TgZ(47,"tr"),a.TgZ(48,"td"),a._uU(49,"falseLabelText"),a.qZA(),a.TgZ(50,"td"),a._uU(51,"Set text for label for false side"),a.qZA(),a.TgZ(52,"td"),a._uU(53,"string"),a.qZA(),a.TgZ(54,"td"),a._uU(55,"False"),a.qZA(),a.qZA(),a.TgZ(56,"tr"),a.TgZ(57,"td"),a._uU(58,"disabled"),a.qZA(),a.TgZ(59,"td"),a._uU(60,"Set disabled"),a.qZA(),a.TgZ(61,"td"),a._uU(62,"boolean"),a.qZA(),a.TgZ(63,"td"),a._uU(64,"false"),a.qZA(),a.qZA(),a.TgZ(65,"tr"),a.TgZ(66,"td"),a._uU(67,"required"),a.qZA(),a.TgZ(68,"td"),a._uU(69,"Set required"),a.qZA(),a.TgZ(70,"td"),a._uU(71,"boolean"),a.qZA(),a.TgZ(72,"td"),a._uU(73,"false"),a.qZA(),a.qZA(),a.TgZ(74,"tr"),a.TgZ(75,"td"),a._uU(76,"readOnly"),a.qZA(),a.TgZ(77,"td"),a._uU(78,"Set readonly"),a.qZA(),a.TgZ(79,"td"),a._uU(80,"boolean"),a.qZA(),a.TgZ(81,"td"),a._uU(82,"false"),a.qZA(),a.qZA(),a.TgZ(83,"tr"),a.TgZ(84,"td"),a._uU(85,"autoFocus"),a.qZA(),a.TgZ(86,"td"),a._uU(87,"Set autofocus"),a.qZA(),a.TgZ(88,"td"),a._uU(89,"boolean"),a.qZA(),a.TgZ(90,"td"),a._uU(91,"false"),a.qZA(),a.qZA(),a.TgZ(92,"tr"),a.TgZ(93,"td"),a._uU(94,"tabIndex"),a.qZA(),a.TgZ(95,"td"),a._uU(96,"Set tabindex attribute"),a.qZA(),a.TgZ(97,"td"),a._uU(98,"number"),a.qZA(),a._UZ(99,"td"),a.qZA(),a.TgZ(100,"tr"),a.TgZ(101,"td"),a._uU(102,"styleClass"),a.qZA(),a.TgZ(103,"td"),a._uU(104,"Set extra class on component"),a.qZA(),a.TgZ(105,"td"),a._uU(106,"string"),a.qZA(),a._UZ(107,"td"),a.qZA(),a.TgZ(108,"tr"),a.TgZ(109,"td"),a._uU(110,"inputId"),a.qZA(),a.TgZ(111,"td"),a._uU(112,"Set id attribute"),a.qZA(),a.TgZ(113,"td"),a._uU(114,"string"),a.qZA(),a._UZ(115,"td"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(116,"np-card"),a.TgZ(117,"np-card-body"),a.TgZ(118,"table",4),a.TgZ(119,"tr"),a.TgZ(120,"th"),a._uU(121,"Method"),a.qZA(),a.TgZ(122,"th"),a._uU(123,"Description"),a.qZA(),a.TgZ(124,"th"),a._uU(125,"Parameters"),a.qZA(),a.qZA(),a.TgZ(126,"tr"),a.TgZ(127,"td"),a._uU(128,"onChange(v: any)"),a.qZA(),a.TgZ(129,"td"),a._uU(130,"Callback event on value change."),a.qZA(),a.TgZ(131,"td"),a._uU(132,"Value"),a.qZA(),a.qZA(),a.TgZ(133,"tr"),a.TgZ(134,"td"),a._uU(135,"onFocus(event)"),a.qZA(),a.TgZ(136,"td"),a._uU(137,"Callback event on input focus."),a.qZA(),a.TgZ(138,"td"),a._uU(139,"Browser event"),a.qZA(),a.qZA(),a.TgZ(140,"tr"),a.TgZ(141,"td"),a._uU(142,"onBlur(event)"),a.qZA(),a.TgZ(143,"td"),a._uU(144,"Callback event on input blur."),a.qZA(),a.TgZ(145,"td"),a._uU(146,"Browser event"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(147,"np-card"),a.TgZ(148,"np-card-body"),a.TgZ(149,"table",4),a.TgZ(150,"tr"),a.TgZ(151,"th"),a._uU(152,"Api"),a.qZA(),a.TgZ(153,"th"),a._uU(154,"Description"),a.qZA(),a.TgZ(155,"th"),a._uU(156,"Parameters"),a.qZA(),a.qZA(),a.TgZ(157,"tr"),a.TgZ(158,"td"),a._uU(159,"focus()"),a.qZA(),a.TgZ(160,"td"),a._uU(161," Set focus on control. If not setting focus properly then use timeout of 500ms. "),a.qZA(),a._UZ(162,"td"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(163,"np-tab",5),a.TgZ(164,"div"),a.TgZ(165,"fieldset"),a.TgZ(166,"legend"),a._uU(167,"Basic switch"),a.qZA(),a.TgZ(168,"np-switch",6,7),a.NdJ("ngModelChange",function(t){return e.switch1=t}),a.qZA(),a.TgZ(170,"div"),a._uU(171),a.qZA(),a.TgZ(172,"button",8),a.NdJ("click",function(){return e.switch1=!e.switch1}),a._uU(173," Toggle Value "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(174,"div"),a.TgZ(175,"fieldset"),a.TgZ(176,"legend"),a._uU(177,"default value to false"),a.qZA(),a.TgZ(178,"np-switch",9),a.NdJ("ngModelChange",function(t){return e.switch2=t}),a.qZA(),a.TgZ(179,"div"),a._uU(180),a.qZA(),a.qZA(),a.qZA(),a.TgZ(181,"div"),a.TgZ(182,"fieldset"),a.TgZ(183,"legend"),a._uU(184,"disabled and readOnly"),a.qZA(),a.TgZ(185,"np-switch",10),a.NdJ("ngModelChange",function(t){return e.switch3=t}),a.qZA(),a._UZ(186,"br"),a.TgZ(187,"np-switch",11),a.NdJ("ngModelChange",function(t){return e.switch3=t}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(188,"div"),a.TgZ(189,"fieldset"),a.TgZ(190,"legend"),a._uU(191,"required"),a.qZA(),a.TgZ(192,"np-switch",12),a.NdJ("ngModelChange",function(t){return e.switch4=t}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(193,"div"),a.TgZ(194,"fieldset"),a.TgZ(195,"legend"),a._uU(196,"trueLabelText and falseLabelText as string"),a.qZA(),a.TgZ(197,"np-switch",13),a.NdJ("ngModelChange",function(t){return e.switch5=t}),a.qZA(),a.TgZ(198,"div"),a._uU(199),a.qZA(),a.qZA(),a.qZA(),a.TgZ(200,"div"),a.TgZ(201,"fieldset"),a.TgZ(202,"legend"),a._uU(203,"styleClass"),a.qZA(),a.TgZ(204,"np-switch",14),a.NdJ("ngModelChange",function(t){return e.switch7=t}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(205,"div"),a.TgZ(206,"fieldset"),a.TgZ(207,"legend"),a._uU(208,"onChange"),a.qZA(),a.TgZ(209,"np-switch",15),a.NdJ("ngModelChange",function(t){return e.switch8=t})("onChange",function(t){return e.onChangeSwitch8(t)}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(10),a.Q6J("innerText",e.importText),a.xp6(7),a.Q6J("innerText",e.htmlText),a.xp6(151),a.Q6J("ngModel",e.switch1)("inputId","txtSwitch"),a.xp6(3),a.hij("Selected Value : ",e.switch1,""),a.xp6(7),a.Q6J("ngModel",e.switch2),a.xp6(2),a.hij("Selected Value : ",e.switch2,""),a.xp6(5),a.Q6J("ngModel",e.switch3),a.xp6(2),a.Q6J("ngModel",e.switch3)("readOnly",!0),a.xp6(5),a.Q6J("ngModel",e.switch4),a.xp6(5),a.Q6J("ngModel",e.switch5)("falseLabelText","No")("trueLabelText","Yes"),a.xp6(2),a.hij("Selected Value : ",e.switch5,""),a.xp6(5),a.Q6J("ngModel",e.switch7)("styleClass","myClass"),a.xp6(5),a.Q6J("ngModel",e.switch8))},directives:[l.KA,l.Qk,l.c0,l.El,l.Mc,r.JJ,r.On,r.Q7],encapsulation:2}),i)}],c=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.Bz.forChild(s)],o.Bz]}),e}(),q=((u=function e(){t(this,e)}).\u0275fac=function(t){return new(t||u)},u.\u0275mod=a.oAB({type:u}),u.\u0275inj=a.cJS({imports:[[d.ez,r.u5,c,l.kH,l.Tk,l.i7]]}),u)}}])}();