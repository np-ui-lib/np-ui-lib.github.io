!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[655],{655:function(n,o,Z){"use strict";Z.r(o),Z.d(o,{NpAlertDemoModule:function(){return c}});var a=Z(1116),s=Z(4387),r=Z(7368),u=Z(9883);function i(t,e){1&t&&(r.TgZ(0,"np-alert",6),r._uU(1," Hi this is success message content. "),r.qZA(),r.TgZ(2,"np-alert",7),r._uU(3," Hi this is error message content. "),r.qZA(),r.TgZ(4,"np-alert",8),r._uU(5," Hi this is warning message content. "),r.qZA(),r.TgZ(6,"np-alert",9),r._uU(7," Hi this is info message content. This alert will be auto close after default timeout of 10000 ms. "),r.qZA(),r.TgZ(8,"np-alert",10),r.TgZ(9,"b"),r._uU(10,"What is paragraph?"),r.qZA(),r.TgZ(11,"p"),r._uU(12," Hi this is custom alert message content. This alert will be auto close after timeout of 5000 ms. "),r.qZA(),r.TgZ(13,"p"),r._uU(14," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),r.qZA(),r.qZA()),2&t&&(r.Q6J("showCloseButton",!0),r.xp6(2),r.Q6J("showCloseButton",!0),r.xp6(2),r.Q6J("showCloseButton",!0),r.xp6(2),r.Q6J("autoClose",!0),r.xp6(2),r.Q6J("autoClose",!0)("autoCloseTimeout",5e3))}var p,g,l=[{path:"",component:(p=function(){function n(){t(this,n),this.importText="import { NpAlertModule } from 'np-ui-lib';",this.htmlText='<np-alert type="success" showCloseButton="true">\n  Hi this is success alert message.\n</np-alert>'}var o,Z,a;return o=n,(Z=[{key:"ngOnInit",value:function(){}}])&&e(o.prototype,Z),a&&e(o,a),n}(),p.\u0275fac=function(t){return new(t||p)},p.\u0275cmp=r.Xpm({type:p,selectors:[["app-np-alert-demo"]],decls:99,vars:2,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["title","Examples"],["npTabContent",""],["type","success",3,"showCloseButton"],["type","error",3,"showCloseButton"],["type","warning",3,"showCloseButton"],["type","info",3,"autoClose"],[3,"autoClose","autoCloseTimeout"]],template:function(t,e){1&t&&(r.TgZ(0,"h2",0),r._uU(1,"Alert"),r.qZA(),r.TgZ(2,"np-tabs"),r.TgZ(3,"np-tab",1),r.TgZ(4,"np-card"),r.TgZ(5,"np-card-body"),r.TgZ(6,"b"),r._uU(7,"Module to import"),r.qZA(),r.TgZ(8,"div"),r.TgZ(9,"pre"),r._UZ(10,"code",2),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(11,"np-card"),r.TgZ(12,"np-card-body"),r.TgZ(13,"b"),r._uU(14,"HTML"),r.qZA(),r.TgZ(15,"div"),r.TgZ(16,"pre"),r._UZ(17,"code",2),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(18,"np-card"),r.TgZ(19,"np-card-body"),r.TgZ(20,"table",3),r.TgZ(21,"tr"),r.TgZ(22,"th"),r._uU(23,"Property"),r.qZA(),r.TgZ(24,"th"),r._uU(25,"Description"),r.qZA(),r.TgZ(26,"th"),r._uU(27,"Type"),r.qZA(),r.TgZ(28,"th"),r._uU(29,"Default"),r.qZA(),r.qZA(),r.TgZ(30,"tr"),r.TgZ(31,"td"),r._uU(32,"type"),r.qZA(),r.TgZ(33,"td"),r._uU(34," Type of alert like 'success' | 'danger' | 'info' | 'warning' "),r.qZA(),r.TgZ(35,"td"),r._uU(36,"string"),r.qZA(),r._UZ(37,"td"),r.qZA(),r.TgZ(38,"tr"),r.TgZ(39,"td"),r._uU(40,"showCloseButton"),r.qZA(),r.TgZ(41,"td"),r._uU(42,"Show close button"),r.qZA(),r.TgZ(43,"td"),r._uU(44,"boolean"),r.qZA(),r.TgZ(45,"td"),r._uU(46,"false"),r.qZA(),r.qZA(),r.TgZ(47,"tr"),r.TgZ(48,"td"),r._uU(49,"autoClose"),r.qZA(),r.TgZ(50,"td"),r._uU(51,"Auto close alert message"),r.qZA(),r.TgZ(52,"td"),r._uU(53,"boolean"),r.qZA(),r.TgZ(54,"td"),r._uU(55,"false"),r.qZA(),r.qZA(),r.TgZ(56,"tr"),r.TgZ(57,"td"),r._uU(58,"autoCloseTimeout"),r.qZA(),r.TgZ(59,"td"),r._uU(60,"Auto close timeout in ms"),r.qZA(),r.TgZ(61,"td"),r._uU(62,"number"),r.qZA(),r.TgZ(63,"td"),r._uU(64,"10000"),r.qZA(),r.qZA(),r.TgZ(65,"tr"),r.TgZ(66,"td"),r._uU(67,"styleClass"),r.qZA(),r.TgZ(68,"td"),r._uU(69,"Set extra class on component"),r.qZA(),r.TgZ(70,"td"),r._uU(71,"string"),r.qZA(),r._UZ(72,"td"),r.qZA(),r.TgZ(73,"tr"),r.TgZ(74,"td"),r._uU(75,"inputId"),r.qZA(),r.TgZ(76,"td"),r._uU(77,"Set id attribute"),r.qZA(),r.TgZ(78,"td"),r._uU(79,"string"),r.qZA(),r._UZ(80,"td"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(81,"np-card"),r.TgZ(82,"np-card-body"),r.TgZ(83,"table",3),r.TgZ(84,"tr"),r.TgZ(85,"th"),r._uU(86,"Api"),r.qZA(),r.TgZ(87,"th"),r._uU(88,"Description"),r.qZA(),r.TgZ(89,"th"),r._uU(90,"Parameters"),r.qZA(),r.qZA(),r.TgZ(91,"tr"),r.TgZ(92,"td"),r._uU(93,"close()"),r.qZA(),r.TgZ(94,"td"),r._uU(95,"Close alert message"),r.qZA(),r._UZ(96,"td"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(97,"np-tab",4),r.YNc(98,i,15,6,"ng-template",5),r.qZA(),r.qZA()),2&t&&(r.xp6(10),r.Q6J("innerText",e.importText),r.xp6(7),r.Q6J("innerText",e.htmlText))},directives:[u.KA,u.Qk,u.c0,u.El,u.Bl,u.r5],encapsulation:2}),p)}],T=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[s.Bz.forChild(l)],s.Bz]}),e}(),c=((g=function e(){t(this,e)}).\u0275fac=function(t){return new(t||g)},g.\u0275mod=r.oAB({type:g}),g.\u0275inj=r.cJS({imports:[[a.ez,T,u.qp,u.Tk,u.i7]]}),g)}}])}();