"use strict";(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[5576],{5576:(c,T,d)=>{d.r(T),d.d(T,{NpTextareaDemoModule:()=>m});var l=d(6019),p=d(782),e=d(3668),g=d(8419),u=d(7537);function _(t,r){1&t&&(e.TgZ(0,"div",16),e._uU(1," Min length 10 characters. "),e.qZA())}function A(t,r){1&t&&(e.TgZ(0,"div",16),e._uU(1," Max length 20 characters. "),e.qZA())}function i(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"fieldset"),e.TgZ(1,"legend"),e._uU(2,"Basic"),e.qZA(),e.TgZ(3,"np-textarea",6),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().input1=a}),e.qZA(),e.TgZ(4,"div"),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"fieldset"),e.TgZ(7,"legend"),e._uU(8,"disabled"),e.qZA(),e.TgZ(9,"np-textarea",7),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().input2=a}),e.qZA(),e.qZA(),e.TgZ(10,"fieldset"),e.TgZ(11,"legend"),e._uU(12,"readOnly"),e.qZA(),e.TgZ(13,"np-textarea",8),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().input2=a}),e.qZA(),e.qZA(),e.TgZ(14,"fieldset"),e.TgZ(15,"legend"),e._uU(16,"required"),e.qZA(),e.TgZ(17,"np-textarea",9),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().input3=a}),e.qZA(),e.qZA(),e.TgZ(18,"fieldset"),e.TgZ(19,"legend"),e._uU(20,"minLength and maxLength"),e.qZA(),e.TgZ(21,"np-textarea",10,11),e.NdJ("ngModelChange",function(a){return e.CHM(n),e.oxw().input4=a}),e.qZA(),e.YNc(23,_,2,0,"div",12),e.YNc(24,A,2,0,"div",12),e.qZA(),e.TgZ(25,"fieldset"),e.TgZ(26,"legend"),e._uU(27,"placeholder and no resize"),e.qZA(),e._UZ(28,"np-textarea",13),e.qZA(),e.TgZ(29,"fieldset"),e.TgZ(30,"legend"),e._uU(31,"styleClass"),e.qZA(),e._UZ(32,"np-textarea",14),e.qZA(),e.TgZ(33,"fieldset"),e.TgZ(34,"legend"),e._uU(35,"onChange"),e.qZA(),e.TgZ(36,"np-textarea",15),e.NdJ("onChange",function(a){return e.CHM(n),e.oxw().onChange(a)}),e.qZA(),e.qZA()}if(2&t){const n=e.MAs(22),Z=e.oxw();e.xp6(3),e.Q6J("ngModel",Z.input1)("rows",5)("cols",30)("autoFocus",!0),e.xp6(2),e.hij("Value: ",Z.input1,""),e.xp6(4),e.Q6J("ngModel",Z.input2)("disabled",!0),e.xp6(4),e.Q6J("ngModel",Z.input2)("readOnly",!0),e.xp6(4),e.Q6J("ngModel",Z.input3)("required",!0),e.xp6(4),e.Q6J("minLength",10)("maxLength",100)("ngModel",Z.input4),e.xp6(2),e.Q6J("ngIf",n.errors&&n.errors.minLength),e.xp6(1),e.Q6J("ngIf",n.errors&&n.errors.maxLength),e.xp6(4),e.Q6J("placeholder","Enter your address")("resize",!1),e.xp6(4),e.Q6J("styleClass","myClass")}}const q=[{path:"",component:(()=>{class t{constructor(){this.importText="import { NpTextareaModule } from 'np-ui-lib';",this.htmlText='<np-textarea [(ngModel)]="notes" [rows]="5" [cols]="30"></np-textarea>',this.input2="Test textarea"}ngOnInit(){}onChange(n){alert(n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-np-textarea-demo"]],decls:196,vars:2,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["title","Examples"],["npTabContent",""],[3,"ngModel","rows","cols","autoFocus","ngModelChange"],[3,"ngModel","disabled","ngModelChange"],[3,"ngModel","readOnly","ngModelChange"],[3,"ngModel","required","ngModelChange"],[3,"minLength","maxLength","ngModel","ngModelChange"],["inputText4","ngModel"],["class","np-text-danger",4,"ngIf"],[3,"placeholder","resize"],[3,"styleClass"],[3,"onChange"],[1,"np-text-danger"]],template:function(n,Z){1&n&&(e.TgZ(0,"h2",0),e._uU(1,"Textarea"),e.qZA(),e.TgZ(2,"np-tabs"),e.TgZ(3,"np-tab",1),e.TgZ(4,"np-card"),e.TgZ(5,"np-card-body"),e.TgZ(6,"b"),e._uU(7,"Module to import"),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"pre"),e._UZ(10,"code",2),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"np-card"),e.TgZ(12,"np-card-body"),e.TgZ(13,"b"),e._uU(14,"HTML"),e.qZA(),e.TgZ(15,"div"),e.TgZ(16,"pre"),e._UZ(17,"code",2),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"np-card"),e.TgZ(19,"np-card-body"),e.TgZ(20,"table",3),e.TgZ(21,"tr"),e.TgZ(22,"th"),e._uU(23,"Property"),e.qZA(),e.TgZ(24,"th"),e._uU(25,"Description"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Type"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Default"),e.qZA(),e.qZA(),e.TgZ(30,"tr"),e.TgZ(31,"td"),e._uU(32,"ngModel"),e.qZA(),e.TgZ(33,"td"),e._uU(34,"Value"),e.qZA(),e.TgZ(35,"td"),e._uU(36,"string"),e.qZA(),e._UZ(37,"td"),e.qZA(),e.TgZ(38,"tr"),e.TgZ(39,"td"),e._uU(40,"rows"),e.qZA(),e.TgZ(41,"td"),e._uU(42,"Set rows attribute"),e.qZA(),e.TgZ(43,"td"),e._uU(44,"number"),e.qZA(),e._UZ(45,"td"),e.qZA(),e.TgZ(46,"tr"),e.TgZ(47,"td"),e._uU(48,"cols"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"Set cols attribute"),e.qZA(),e.TgZ(51,"td"),e._uU(52,"number"),e.qZA(),e._UZ(53,"td"),e.qZA(),e.TgZ(54,"tr"),e.TgZ(55,"td"),e._uU(56,"resize"),e.qZA(),e.TgZ(57,"td"),e._uU(58,"Set resize attribute"),e.qZA(),e.TgZ(59,"td"),e._uU(60,"boolean"),e.qZA(),e.TgZ(61,"td"),e._uU(62,"true"),e.qZA(),e.qZA(),e.TgZ(63,"tr"),e.TgZ(64,"td"),e._uU(65,"minLength"),e.qZA(),e.TgZ(66,"td"),e._uU(67,"Set minimum length validation"),e.qZA(),e.TgZ(68,"td"),e._uU(69,"number"),e.qZA(),e._UZ(70,"td"),e.qZA(),e.TgZ(71,"tr"),e.TgZ(72,"td"),e._uU(73,"maxLength"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"Set maximum length validation"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"number"),e.qZA(),e._UZ(78,"td"),e.qZA(),e.TgZ(79,"tr"),e.TgZ(80,"td"),e._uU(81,"placeholder"),e.qZA(),e.TgZ(82,"td"),e._uU(83,"Set placeholder"),e.qZA(),e.TgZ(84,"td"),e._uU(85,"string"),e.qZA(),e._UZ(86,"td"),e.qZA(),e.TgZ(87,"tr"),e.TgZ(88,"td"),e._uU(89,"disabled"),e.qZA(),e.TgZ(90,"td"),e._uU(91,"Set disabled"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"boolean"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"false"),e.qZA(),e.qZA(),e.TgZ(96,"tr"),e.TgZ(97,"td"),e._uU(98,"required"),e.qZA(),e.TgZ(99,"td"),e._uU(100,"Set required"),e.qZA(),e.TgZ(101,"td"),e._uU(102,"boolean"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"false"),e.qZA(),e.qZA(),e.TgZ(105,"tr"),e.TgZ(106,"td"),e._uU(107,"readOnly"),e.qZA(),e.TgZ(108,"td"),e._uU(109,"Set readonly"),e.qZA(),e.TgZ(110,"td"),e._uU(111,"boolean"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"false"),e.qZA(),e.qZA(),e.TgZ(114,"tr"),e.TgZ(115,"td"),e._uU(116,"autoFocus"),e.qZA(),e.TgZ(117,"td"),e._uU(118,"Set autofocus"),e.qZA(),e.TgZ(119,"td"),e._uU(120,"boolean"),e.qZA(),e.TgZ(121,"td"),e._uU(122,"false"),e.qZA(),e.qZA(),e.TgZ(123,"tr"),e.TgZ(124,"td"),e._uU(125,"tabIndex"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"Set tabindex attribute"),e.qZA(),e.TgZ(128,"td"),e._uU(129,"number"),e.qZA(),e._UZ(130,"td"),e.qZA(),e.TgZ(131,"tr"),e.TgZ(132,"td"),e._uU(133,"styleClass"),e.qZA(),e.TgZ(134,"td"),e._uU(135,"Set extra class on component"),e.qZA(),e.TgZ(136,"td"),e._uU(137,"string"),e.qZA(),e._UZ(138,"td"),e.qZA(),e.TgZ(139,"tr"),e.TgZ(140,"td"),e._uU(141,"inputId"),e.qZA(),e.TgZ(142,"td"),e._uU(143,"Set id attribute"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"string"),e.qZA(),e._UZ(146,"td"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(147,"np-card"),e.TgZ(148,"np-card-body"),e.TgZ(149,"table",3),e.TgZ(150,"tr"),e.TgZ(151,"th"),e._uU(152,"Method"),e.qZA(),e.TgZ(153,"th"),e._uU(154,"Description"),e.qZA(),e.TgZ(155,"th"),e._uU(156,"Parameters"),e.qZA(),e.qZA(),e.TgZ(157,"tr"),e.TgZ(158,"td"),e._uU(159,"onChange(v: any)"),e.qZA(),e.TgZ(160,"td"),e._uU(161,"Callback event on value change."),e.qZA(),e.TgZ(162,"td"),e._uU(163,"Value"),e.qZA(),e.qZA(),e.TgZ(164,"tr"),e.TgZ(165,"td"),e._uU(166,"onFocus(event)"),e.qZA(),e.TgZ(167,"td"),e._uU(168,"Callback event on input focus."),e.qZA(),e.TgZ(169,"td"),e._uU(170,"Browser event"),e.qZA(),e.qZA(),e.TgZ(171,"tr"),e.TgZ(172,"td"),e._uU(173,"onBlur(event)"),e.qZA(),e.TgZ(174,"td"),e._uU(175,"Callback event on input blur."),e.qZA(),e.TgZ(176,"td"),e._uU(177,"Browser event"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(178,"np-card"),e.TgZ(179,"np-card-body"),e.TgZ(180,"table",3),e.TgZ(181,"tr"),e.TgZ(182,"th"),e._uU(183,"Api"),e.qZA(),e.TgZ(184,"th"),e._uU(185,"Description"),e.qZA(),e.TgZ(186,"th"),e._uU(187,"Parameters"),e.qZA(),e.qZA(),e.TgZ(188,"tr"),e.TgZ(189,"td"),e._uU(190,"focus()"),e.qZA(),e.TgZ(191,"td"),e._uU(192," Set focus on control. If not setting focus properly then use timeout of 500ms. "),e.qZA(),e._UZ(193,"td"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(194,"np-tab",4),e.YNc(195,i,37,19,"ng-template",5),e.qZA(),e.qZA()),2&n&&(e.xp6(10),e.Q6J("innerText",Z.importText),e.xp6(7),e.Q6J("innerText",Z.htmlText))},directives:[g.KA,g.Qk,g.c0,g.El,g.Bl,g.d0,u.JJ,u.On,u.Q7,l.O5],encapsulation:2}),t})()}];let s=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(q)],p.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,u.u5,s,g.X,g.Tk,g.i7]]}),t})()}}]);