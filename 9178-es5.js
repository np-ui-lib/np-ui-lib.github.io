!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var Z=t[n];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(e,Z.key,Z)}}(self.webpackChunknp_ui_app=self.webpackChunknp_ui_app||[]).push([[9178],{9178:function(n,Z,i){"use strict";i.r(Z),i.d(Z,{NpTimePickerDemoModule:function(){return p}});var o=i(4387),r=i(7368),g=i(149),d=i(1462),u=i(1116);function l(e,t){1&e&&(r.TgZ(0,"div",25),r._uU(1," Start time is required. "),r.qZA())}function c(e,t){1&e&&(r.TgZ(0,"div",25),r._uU(1," Time is required. "),r.qZA())}function a(e,t){if(1&e){var n=r.EpF();r.TgZ(0,"div"),r.TgZ(1,"fieldset"),r.TgZ(2,"legend"),r._uU(3,"Basic timepicker"),r.qZA(),r.TgZ(4,"np-time-picker",6),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker1=e}),r.qZA(),r.TgZ(5,"div"),r._uU(6),r.qZA(),r.TgZ(7,"button",7),r.NdJ("click",function(){return r.CHM(n),r.oxw().timePicker1="06:30:30 PM"}),r._uU(8," Set 06:30:30 PM "),r.qZA(),r.qZA(),r.qZA(),r.TgZ(9,"div"),r.TgZ(10,"fieldset"),r.TgZ(11,"legend"),r._uU(12,"is24Hours"),r.qZA(),r.TgZ(13,"np-time-picker",8),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker2=e}),r.qZA(),r.TgZ(14,"div"),r._uU(15),r.qZA(),r.TgZ(16,"button",7),r.NdJ("click",function(){return r.CHM(n),r.oxw().timePicker2="23:15:00"}),r._uU(17," Set 23:15:00 "),r.qZA(),r.qZA(),r.qZA(),r.TgZ(18,"div"),r.TgZ(19,"fieldset"),r.TgZ(20,"legend"),r._uU(21,"disabled and readOnly"),r.qZA(),r.TgZ(22,"np-time-picker",9),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker3=e}),r.qZA(),r._UZ(23,"br"),r.TgZ(24,"np-time-picker",10),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker3=e}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(25,"div"),r.TgZ(26,"form",null,11),r.TgZ(28,"fieldset"),r.TgZ(29,"legend"),r._uU(30,"required"),r.qZA(),r.TgZ(31,"np-time-picker",12,13),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker4=e}),r.qZA(),r.YNc(33,l,2,0,"div",14),r.TgZ(34,"p"),r._uU(35),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(36,"div"),r.TgZ(37,"fieldset"),r.TgZ(38,"legend"),r._uU(39,"defaultOpen"),r.qZA(),r.TgZ(40,"np-time-picker",15,16),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker5=e}),r.qZA(),r.YNc(42,c,2,0,"div",14),r.TgZ(43,"div",17),r.TgZ(44,"button",18),r.NdJ("click",function(){r.CHM(n);var e=r.oxw();return e.timePicker5Disable=!e.timePicker5Disable}),r._uU(45," Toggle Disable "),r.qZA(),r.TgZ(46,"button",18),r.NdJ("click",function(){r.CHM(n);var e=r.oxw();return e.timePicker5Required=!e.timePicker5Required}),r._uU(47," Toggle required "),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(48,"div"),r.TgZ(49,"fieldset"),r.TgZ(50,"legend"),r._uU(51,"placeholder"),r.qZA(),r.TgZ(52,"np-time-picker",19),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker6=e}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(53,"div"),r.TgZ(54,"fieldset"),r.TgZ(55,"legend"),r._uU(56,"showNowButton"),r.qZA(),r._uU(57," 12 hrs: "),r.TgZ(58,"np-time-picker",20),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker71=e}),r.qZA(),r._uU(59," 24 hrs: "),r.TgZ(60,"np-time-picker",21),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker72=e}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(61,"div"),r.TgZ(62,"fieldset"),r.TgZ(63,"legend"),r._uU(64,"hideSeconds"),r.qZA(),r.TgZ(65,"np-time-picker",22),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker8=e}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(66,"div"),r.TgZ(67,"fieldset"),r.TgZ(68,"legend"),r._uU(69,"styleClass"),r.qZA(),r.TgZ(70,"np-time-picker",23),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker9=e}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(71,"div"),r.TgZ(72,"fieldset"),r.TgZ(73,"legend"),r._uU(74,"onChange event"),r.qZA(),r.TgZ(75,"np-time-picker",24),r.NdJ("ngModelChange",function(e){return r.CHM(n),r.oxw().timePicker10=e})("onChange",function(e){return r.CHM(n),r.oxw().onChange(e)}),r.qZA(),r.qZA(),r.qZA()}if(2&e){var Z=r.MAs(27),i=r.MAs(32),o=r.MAs(41),g=r.oxw();r.xp6(4),r.Q6J("ngModel",g.timePicker1)("inputId","txtTime")("autoFocus",!0),r.xp6(2),r.hij("Selected value is : ",g.timePicker1,""),r.xp6(7),r.Q6J("ngModel",g.timePicker2)("is24Hours",!0),r.xp6(2),r.hij("Selected time is : ",g.timePicker2,""),r.xp6(7),r.Q6J("ngModel",g.timePicker3),r.xp6(2),r.Q6J("ngModel",g.timePicker3)("readOnly",!0),r.xp6(7),r.Q6J("ngModel",g.timePicker4),r.xp6(2),r.Q6J("ngIf",i.control.touched&&(null==i.control.errors?null:i.control.errors.required)),r.xp6(2),r.hij("Form valid: ",Z.valid,""),r.xp6(5),r.Q6J("ngModel",g.timePicker5)("defaultOpen",!0)("disabled",g.timePicker5Disable)("required",g.timePicker5Required),r.xp6(2),r.Q6J("ngIf",o.control.touched&&(null==o.control.errors?null:o.control.errors.required)),r.xp6(10),r.Q6J("ngModel",g.timePicker6)("placeholder","Select start time"),r.xp6(6),r.Q6J("ngModel",g.timePicker71)("showNowButton",!0),r.xp6(2),r.Q6J("ngModel",g.timePicker72)("showNowButton",!0)("is24Hours",!0),r.xp6(5),r.Q6J("hideSeconds",!0)("ngModel",g.timePicker8),r.xp6(5),r.Q6J("ngModel",g.timePicker9)("styleClass","myClass"),r.xp6(5),r.Q6J("ngModel",g.timePicker10)}}var T,q,A=[{path:"",component:(T=function(){function n(){e(this,n),this.timePicker1="10:00:00 AM",this.timePicker2="10:00:00",this.timePicker3="10:00:00 AM",this.timePicker5Disable=!1,this.timePicker5Required=!1,this.importText="import { NpTimePickerModule } from 'np-ui-lib';",this.htmlText='<np-time-picker [(ngModel)]="value"></np-time-picker>'}var Z,i,o;return Z=n,(i=[{key:"ngOnInit",value:function(){}},{key:"onChange",value:function(e){alert("time changed "+e)}}])&&t(Z.prototype,i),o&&t(Z,o),n}(),T.\u0275fac=function(e){return new(e||T)},T.\u0275cmp=r.Xpm({type:T,selectors:[["app-np-time-picker-demo"]],decls:191,vars:2,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["title","Examples","id","tabExample"],["npTabContent",""],[3,"ngModel","inputId","autoFocus","ngModelChange"],["type","button",1,"np-btn",3,"click"],[3,"ngModel","is24Hours","ngModelChange"],["disabled","",3,"ngModel","ngModelChange"],[3,"ngModel","readOnly","ngModelChange"],["form","ngForm"],["required","","name","startTime",3,"ngModel","ngModelChange"],["validations","ngModel"],["class","np-text-danger",4,"ngIf"],[3,"ngModel","defaultOpen","disabled","required","ngModelChange"],["validations5","ngModel"],[1,"np-btn-group"],[1,"np-btn",3,"click"],[3,"ngModel","placeholder","ngModelChange"],[3,"ngModel","showNowButton","ngModelChange"],[3,"ngModel","showNowButton","is24Hours","ngModelChange"],[3,"hideSeconds","ngModel","ngModelChange"],[3,"ngModel","styleClass","ngModelChange"],[3,"ngModel","ngModelChange","onChange"],[1,"np-text-danger"]],template:function(e,t){1&e&&(r.TgZ(0,"h2",0),r._uU(1,"Time Picker"),r.qZA(),r.TgZ(2,"np-tabs"),r.TgZ(3,"np-tab",1),r.TgZ(4,"np-card"),r.TgZ(5,"np-card-body"),r.TgZ(6,"b"),r._uU(7,"Module to import"),r.qZA(),r.TgZ(8,"div"),r.TgZ(9,"pre"),r._UZ(10,"code",2),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(11,"np-card"),r.TgZ(12,"np-card-body"),r.TgZ(13,"b"),r._uU(14,"HTML"),r.qZA(),r.TgZ(15,"div"),r.TgZ(16,"pre"),r._UZ(17,"code",2),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(18,"np-card"),r.TgZ(19,"np-card-body"),r.TgZ(20,"table",3),r.TgZ(21,"tr"),r.TgZ(22,"th"),r._uU(23,"Property"),r.qZA(),r.TgZ(24,"th"),r._uU(25,"Description"),r.qZA(),r.TgZ(26,"th"),r._uU(27,"Type"),r.qZA(),r.TgZ(28,"th"),r._uU(29,"Default"),r.qZA(),r.qZA(),r.TgZ(30,"tr"),r.TgZ(31,"td"),r._uU(32,"ngModel"),r.qZA(),r.TgZ(33,"td"),r._uU(34,"Value in string format"),r.qZA(),r.TgZ(35,"td"),r._uU(36,"string"),r.qZA(),r._UZ(37,"td"),r.qZA(),r.TgZ(38,"tr"),r.TgZ(39,"td"),r._uU(40,"is24Hours"),r.qZA(),r.TgZ(41,"td"),r._uU(42,"Set 24 hours time format"),r.qZA(),r.TgZ(43,"td"),r._uU(44,"boolean"),r.qZA(),r.TgZ(45,"td"),r._uU(46,"false"),r.qZA(),r.qZA(),r.TgZ(47,"tr"),r.TgZ(48,"td"),r._uU(49,"defaultOpen"),r.qZA(),r.TgZ(50,"td"),r._uU(51,"Set default open"),r.qZA(),r.TgZ(52,"td"),r._uU(53,"boolean"),r.qZA(),r.TgZ(54,"td"),r._uU(55,"false"),r.qZA(),r.qZA(),r.TgZ(56,"tr"),r.TgZ(57,"td"),r._uU(58,"showNowButton"),r.qZA(),r.TgZ(59,"td"),r._uU(60,"Show now button in timepicker"),r.qZA(),r.TgZ(61,"td"),r._uU(62,"boolean"),r.qZA(),r.TgZ(63,"td"),r._uU(64,"false"),r.qZA(),r.qZA(),r.TgZ(65,"tr"),r.TgZ(66,"td"),r._uU(67,"hideSeconds"),r.qZA(),r.TgZ(68,"td"),r._uU(69,"Hide seconds dropdown"),r.qZA(),r.TgZ(70,"td"),r._uU(71,"boolean"),r.qZA(),r.TgZ(72,"td"),r._uU(73,"false"),r.qZA(),r.qZA(),r.TgZ(74,"tr"),r.TgZ(75,"td"),r._uU(76,"placeholder"),r.qZA(),r.TgZ(77,"td"),r._uU(78,"Set placeholder"),r.qZA(),r.TgZ(79,"td"),r._uU(80,"string"),r.qZA(),r._UZ(81,"td"),r.qZA(),r.TgZ(82,"tr"),r.TgZ(83,"td"),r._uU(84,"disabled"),r.qZA(),r.TgZ(85,"td"),r._uU(86,"Set disabled"),r.qZA(),r.TgZ(87,"td"),r._uU(88,"boolean"),r.qZA(),r.TgZ(89,"td"),r._uU(90,"false"),r.qZA(),r.qZA(),r.TgZ(91,"tr"),r.TgZ(92,"td"),r._uU(93,"required"),r.qZA(),r.TgZ(94,"td"),r._uU(95,"Set required"),r.qZA(),r.TgZ(96,"td"),r._uU(97,"boolean"),r.qZA(),r.TgZ(98,"td"),r._uU(99,"false"),r.qZA(),r.qZA(),r.TgZ(100,"tr"),r.TgZ(101,"td"),r._uU(102,"readOnly"),r.qZA(),r.TgZ(103,"td"),r._uU(104,"Set readonly"),r.qZA(),r.TgZ(105,"td"),r._uU(106,"boolean"),r.qZA(),r.TgZ(107,"td"),r._uU(108,"false"),r.qZA(),r.qZA(),r.TgZ(109,"tr"),r.TgZ(110,"td"),r._uU(111,"autoFocus"),r.qZA(),r.TgZ(112,"td"),r._uU(113,"Set autofocus"),r.qZA(),r.TgZ(114,"td"),r._uU(115,"boolean"),r.qZA(),r.TgZ(116,"td"),r._uU(117,"false"),r.qZA(),r.qZA(),r.TgZ(118,"tr"),r.TgZ(119,"td"),r._uU(120,"tabIndex"),r.qZA(),r.TgZ(121,"td"),r._uU(122,"Set tabindex attribute"),r.qZA(),r.TgZ(123,"td"),r._uU(124,"number"),r.qZA(),r._UZ(125,"td"),r.qZA(),r.TgZ(126,"tr"),r.TgZ(127,"td"),r._uU(128,"styleClass"),r.qZA(),r.TgZ(129,"td"),r._uU(130,"Set extra class on component"),r.qZA(),r.TgZ(131,"td"),r._uU(132,"string"),r.qZA(),r._UZ(133,"td"),r.qZA(),r.TgZ(134,"tr"),r.TgZ(135,"td"),r._uU(136,"inputId"),r.qZA(),r.TgZ(137,"td"),r._uU(138,"Set id attribute"),r.qZA(),r.TgZ(139,"td"),r._uU(140,"string"),r.qZA(),r._UZ(141,"td"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(142,"np-card"),r.TgZ(143,"np-card-body"),r.TgZ(144,"table",3),r.TgZ(145,"tr"),r.TgZ(146,"th"),r._uU(147,"Method"),r.qZA(),r.TgZ(148,"th"),r._uU(149,"Description"),r.qZA(),r.TgZ(150,"th"),r._uU(151,"Parameters"),r.qZA(),r.qZA(),r.TgZ(152,"tr"),r.TgZ(153,"td"),r._uU(154,"onChange(v: any)"),r.qZA(),r.TgZ(155,"td"),r._uU(156,"Callback event on value change."),r.qZA(),r.TgZ(157,"td"),r._uU(158,"Value"),r.qZA(),r.qZA(),r.TgZ(159,"tr"),r.TgZ(160,"td"),r._uU(161,"onFocus(event)"),r.qZA(),r.TgZ(162,"td"),r._uU(163,"Callback event on input focus."),r.qZA(),r.TgZ(164,"td"),r._uU(165,"Browser event"),r.qZA(),r.qZA(),r.TgZ(166,"tr"),r.TgZ(167,"td"),r._uU(168,"onBlur(event)"),r.qZA(),r.TgZ(169,"td"),r._uU(170,"Callback event on input blur."),r.qZA(),r.TgZ(171,"td"),r._uU(172,"Browser event"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(173,"np-card"),r.TgZ(174,"np-card-body"),r.TgZ(175,"table",3),r.TgZ(176,"tr"),r.TgZ(177,"th"),r._uU(178,"Api"),r.qZA(),r.TgZ(179,"th"),r._uU(180,"Description"),r.qZA(),r.TgZ(181,"th"),r._uU(182,"Parameters"),r.qZA(),r.qZA(),r.TgZ(183,"tr"),r.TgZ(184,"td"),r._uU(185,"focus()"),r.qZA(),r.TgZ(186,"td"),r._uU(187," Set focus on control. If not setting focus properly then use timeout of 500ms. "),r.qZA(),r._UZ(188,"td"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(189,"np-tab",4),r.YNc(190,a,76,30,"ng-template",5),r.qZA(),r.qZA()),2&e&&(r.xp6(10),r.Q6J("innerText",t.importText),r.xp6(7),r.Q6J("innerText",t.htmlText))},directives:[g.KA,g.Qk,g.c0,g.El,g.Bl,g.Et,d.JJ,d.On,d._Y,d.JL,d.F,d.Q7,u.O5],encapsulation:2}),T)}],s=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.Bz.forChild(A)],o.Bz]}),t}(),p=((q=function t(){e(this,t)}).\u0275fac=function(e){return new(e||q)},q.\u0275mod=r.oAB({type:q}),q.\u0275inj=r.cJS({imports:[[g.nD,s,u.ez,d.u5,g.i7,g.Tk]]}),q)}}])}();