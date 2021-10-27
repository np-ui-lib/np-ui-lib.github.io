!function(){function t(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function o(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(self.webpackChunknp_ui_app=self.webpackChunknp_ui_app||[]).push([[1739],{1739:function(e,n,p){"use strict";p.r(n),p.d(n,{NpTooltipDemoModule:function(){return d}});var i=p(1116),Z=p(4387),l=p(7368),u=p(149);function r(t,o){if(1&t&&(l.TgZ(0,"u"),l._uU(1),l.qZA()),2&t){var e=o.count;l.xp6(1),l.hij("This is top tooltip. Count pass in context is ",e,"")}}function T(t,o){1&t&&(l.TgZ(0,"i"),l._uU(1,"This is bottom tooltip"),l.qZA())}var a,s,c=function(){return{count:5}},g=[{path:"",component:(a=function(){function e(){t(this,e),this.importText="import { NpTooltipModule } from 'np-ui-lib';",this.htmlText="<span [npTooltip]=\"'This is left tooltip.'\" [placement]=\"'left'\">\n  Hover me for left tooltip\n</span>",this.contextText='<span [npTooltip]="tooltipTemp" [context]="{count: 5}">\n  Hover me for top tooltip, with ng-template.\n</span>\n<ng-template #tooltipTemp let-count="count">\n  Count pass in context is {{count}}\n</ng-template>'}var n,p,i;return n=e,(p=[{key:"ngOnInit",value:function(){}}])&&o(n.prototype,p),i&&o(n,i),e}(),a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=l.Xpm({type:a,selectors:[["app-np-tooltip-demo"]],decls:110,vars:17,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["title","Examples"],[3,"npTooltip","placement"],[3,"npTooltip","placement","styleClass"],[3,"npTooltip","placement","context","width"],["tooltipTop",""],["tooltipBottom",""],["type","text","placeholder","Tooltip on focus",1,"np-form-control",2,"width","200px",3,"npTooltip","tooltipOnFocus"]],template:function(t,o){if(1&t&&(l.TgZ(0,"h2",0),l._uU(1,"Tooltip"),l.qZA(),l.TgZ(2,"np-tabs"),l.TgZ(3,"np-tab",1),l.TgZ(4,"np-card"),l.TgZ(5,"np-card-body"),l.TgZ(6,"b"),l._uU(7,"Module to import"),l.qZA(),l.TgZ(8,"div"),l.TgZ(9,"pre"),l._UZ(10,"code",2),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"np-card"),l.TgZ(12,"np-card-body"),l.TgZ(13,"b"),l._uU(14,"HTML"),l.qZA(),l.TgZ(15,"div"),l.TgZ(16,"pre"),l._UZ(17,"code",2),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(18,"np-card"),l.TgZ(19,"np-card-body"),l.TgZ(20,"table",3),l.TgZ(21,"tr"),l.TgZ(22,"th"),l._uU(23,"Property"),l.qZA(),l.TgZ(24,"th"),l._uU(25,"Description"),l.qZA(),l.TgZ(26,"th"),l._uU(27,"Type"),l.qZA(),l.TgZ(28,"th"),l._uU(29,"Default"),l.qZA(),l.qZA(),l.TgZ(30,"tr"),l.TgZ(31,"td"),l._uU(32,"npTooltip"),l.qZA(),l.TgZ(33,"td"),l._uU(34,"Text or ng-template reference"),l.qZA(),l.TgZ(35,"td"),l._uU(36,"string | TemplateRef<any>"),l.qZA(),l._UZ(37,"td"),l.qZA(),l.TgZ(38,"tr"),l.TgZ(39,"td"),l._uU(40,"width"),l.qZA(),l.TgZ(41,"td"),l._uU(42," Set width. Values should be like '100%', '100px', 200. If pass as number then it will considered as px. "),l.qZA(),l.TgZ(43,"td"),l._uU(44,"number"),l.qZA(),l._UZ(45,"td"),l.qZA(),l.TgZ(46,"tr"),l.TgZ(47,"td"),l._uU(48,"context"),l.qZA(),l.TgZ(49,"td"),l._uU(50," Pass data to template "),l.TgZ(51,"pre"),l.TgZ(52,"code"),l._uU(53),l.qZA(),l.qZA(),l.qZA(),l.TgZ(54,"td"),l._uU(55,"any"),l.qZA(),l._UZ(56,"td"),l.qZA(),l.TgZ(57,"tr"),l.TgZ(58,"td"),l._uU(59,"placement"),l.qZA(),l.TgZ(60,"td"),l._uU(61," Set tooltip position from 'left' | 'right' | 'top' | 'bottom' "),l.qZA(),l.TgZ(62,"td"),l._uU(63,"string"),l.qZA(),l.TgZ(64,"td"),l._uU(65,"bottom"),l.qZA(),l.qZA(),l.TgZ(66,"tr"),l.TgZ(67,"td"),l._uU(68,"tooltipOnFocus"),l.qZA(),l.TgZ(69,"td"),l._uU(70,"Show tooltip on focus of input control"),l.qZA(),l.TgZ(71,"td"),l._uU(72,"boolean"),l.qZA(),l.TgZ(73,"td"),l._uU(74,"false"),l.qZA(),l.qZA(),l.TgZ(75,"tr"),l.TgZ(76,"td"),l._uU(77,"styleClass"),l.qZA(),l.TgZ(78,"td"),l._uU(79,"Set extra class on component"),l.qZA(),l.TgZ(80,"td"),l._uU(81,"string"),l.qZA(),l._UZ(82,"td"),l.qZA(),l.TgZ(83,"tr"),l.TgZ(84,"td"),l._uU(85,"inputId"),l.qZA(),l.TgZ(86,"td"),l._uU(87,"Set id attribute"),l.qZA(),l.TgZ(88,"td"),l._uU(89,"string"),l.qZA(),l._UZ(90,"td"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(91,"np-tab",4),l.TgZ(92,"p"),l.TgZ(93,"span",5),l._uU(94," Hover me for left tooltip "),l.qZA(),l.qZA(),l.TgZ(95,"p"),l.TgZ(96,"span",6),l._uU(97," Hover me for right tooltip, with [styleClass] attribute. "),l.qZA(),l.qZA(),l.TgZ(98,"p"),l.TgZ(99,"span",7),l._uU(100," Hover me for top tooltip, with ng-template. "),l.YNc(101,r,2,1,"ng-template",null,8,l.W1O),l.qZA(),l.qZA(),l.TgZ(103,"p"),l.TgZ(104,"span",5),l._uU(105," Hover me for bottom tooltip, with ng-template. "),l.YNc(106,T,2,0,"ng-template",null,9,l.W1O),l.qZA(),l.qZA(),l.TgZ(108,"p"),l._UZ(109,"input",10),l.qZA(),l.qZA(),l.qZA()),2&t){var e=l.MAs(102),n=l.MAs(107);l.xp6(10),l.Q6J("innerText",o.importText),l.xp6(7),l.Q6J("innerText",o.htmlText),l.xp6(36),l.Oqu(o.contextText),l.xp6(40),l.Q6J("npTooltip","This is left tooltip.")("placement","left"),l.xp6(3),l.Q6J("npTooltip","This is right tooltip.")("placement","right")("styleClass","myClass"),l.xp6(3),l.Q6J("npTooltip",e)("placement","top")("context",l.DdM(16,c))("width",100),l.xp6(5),l.Q6J("npTooltip",n)("placement","bottom"),l.xp6(5),l.Q6J("npTooltip","Enter your name.")("tooltipOnFocus",!0)}},directives:[u.KA,u.Qk,u.c0,u.El,u.Y2],encapsulation:2}),a)}],A=function(){var o=function o(){t(this,o)};return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[[Z.Bz.forChild(g)],Z.Bz]}),o}(),d=((s=function o(){t(this,o)}).\u0275fac=function(t){return new(t||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[[i.ez,A,u.Yv,u.i7,u.Tk]]}),s)}}])}();