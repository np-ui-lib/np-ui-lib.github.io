!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var b=0;b<t.length;b++){var o=t[b];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(self.webpackChunknp_ui_app=self.webpackChunknp_ui_app||[]).push([[6713],{6713:function(b,o,u){"use strict";u.r(o),u.d(o,{NpButtonDemoModule:function(){return f}});var s,a,p=u(1116),i=u(4387),r=u(7368),c=u(149),e=[{path:"",component:(s=function(){function b(){n(this,b),this.basicButton='<div class="np-btn-group">\n  <button class="np-btn">Normal</button>\n  <button class="np-btn np-btn-primary">Primary</button>\n  <button class="np-btn np-btn-success">Success</button>\n  <button class="np-btn np-btn-danger">Error</button>\n  <button class="np-btn np-btn-warning">Warning</button>\n  <button class="np-btn np-btn-info">Info</button>\n</div>',this.smallButton='<div class="np-btn-group">\n  <button class="np-btn np-btn-sm">Normal</button>\n  <button class="np-btn np-btn-primary np-btn-sm">Primary</button>\n  <button class="np-btn np-btn-success np-btn-sm">Success</button>\n  <button class="np-btn np-btn-danger np-btn-sm">Error</button>\n  <button class="np-btn np-btn-warning np-btn-sm">Warning</button>\n  <button class="np-btn np-btn-info np-btn-sm">Info</button>\n</div>',this.iconButton='<div class="np-btn-group">\n  <button class="np-btn-icon"><i class="fa fa-bars"></i></button>\n  <button class="np-btn-icon np-btn-primary"><i class="fa fa-home"></i></button>\n  <button class="np-btn-icon np-btn-success"><i class="fa fa-camera"></i></button>\n  <button class="np-btn-icon np-btn-danger"><i class="fa fa-trash"></i></button>\n  <button class="np-btn-icon np-btn-warning"><i class="fa fa-bell"></i></button>\n  <button class="np-btn-icon np-btn-info"><i class="fa fa-user"></i></button>\n</div>\n\n<div class="np-btn-group">\n  <button class="np-btn np-btn-success">Success<i class="fa fa-save np-btn-icon-right"></i></button>\n  <button class="np-btn np-btn-danger"><i class="fa fa-trash np-btn-icon-left"></i>Error</button>\n</div>'}var o,u,s;return o=b,(u=[{key:"ngOnInit",value:function(){}}])&&t(o.prototype,u),s&&t(o,s),b}(),s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=r.Xpm({type:s,selectors:[["app-np-button-demo"]],decls:68,vars:3,consts:[[1,"page-header"],[3,"innerText"],[1,"np-btn-group"],[1,"np-btn"],[1,"np-btn","np-btn-primary"],[1,"np-btn","np-btn-success"],[1,"np-btn","np-btn-danger"],[1,"np-btn","np-btn-warning"],[1,"np-btn","np-btn-info"],[1,"np-btn","np-btn-sm"],[1,"np-btn","np-btn-primary","np-btn-sm"],[1,"np-btn","np-btn-success","np-btn-sm"],[1,"np-btn","np-btn-danger","np-btn-sm"],[1,"np-btn","np-btn-warning","np-btn-sm"],[1,"np-btn","np-btn-info","np-btn-sm"],["type","button",1,"np-btn-icon"],[1,"fa","fa-bars"],["type","button",1,"np-btn-icon","np-btn-primary"],[1,"fa","fa-home"],["type","button",1,"np-btn-icon","np-btn-success"],[1,"fa","fa-camera"],["type","button",1,"np-btn-icon","np-btn-danger"],[1,"fa","fa-trash"],["type","button",1,"np-btn-icon","np-btn-warning"],[1,"fa","fa-bell"],["type","button",1,"np-btn-icon","np-btn-info"],[1,"fa","fa-user"],[1,"fa","fa-save","np-btn-icon-right"],[1,"fa","fa-trash","np-btn-icon-left"]],template:function(n,t){1&n&&(r.TgZ(0,"h2",0),r._uU(1,"Button"),r.qZA(),r.TgZ(2,"np-card"),r.TgZ(3,"np-card-body"),r.TgZ(4,"fieldset"),r.TgZ(5,"legend"),r._uU(6,"Button and Button Group"),r.qZA(),r.TgZ(7,"div"),r.TgZ(8,"pre"),r._UZ(9,"code",1),r.qZA(),r.qZA(),r.TgZ(10,"div",2),r.TgZ(11,"button",3),r._uU(12,"Normal"),r.qZA(),r.TgZ(13,"button",4),r._uU(14,"Primary"),r.qZA(),r.TgZ(15,"button",5),r._uU(16,"Success"),r.qZA(),r.TgZ(17,"button",6),r._uU(18,"Error"),r.qZA(),r.TgZ(19,"button",7),r._uU(20,"Warning"),r.qZA(),r.TgZ(21,"button",8),r._uU(22,"Info"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(23,"fieldset"),r.TgZ(24,"legend"),r._uU(25,"Small Button"),r.qZA(),r.TgZ(26,"div"),r.TgZ(27,"pre"),r._UZ(28,"code",1),r.qZA(),r.qZA(),r.TgZ(29,"div",2),r.TgZ(30,"button",9),r._uU(31,"Normal"),r.qZA(),r.TgZ(32,"button",10),r._uU(33,"Primary"),r.qZA(),r.TgZ(34,"button",11),r._uU(35,"Success"),r.qZA(),r.TgZ(36,"button",12),r._uU(37,"Error"),r.qZA(),r.TgZ(38,"button",13),r._uU(39,"Warning"),r.qZA(),r.TgZ(40,"button",14),r._uU(41,"Info"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(42,"fieldset"),r.TgZ(43,"legend"),r._uU(44,"Icon"),r.qZA(),r.TgZ(45,"div"),r.TgZ(46,"pre"),r._UZ(47,"code",1),r.qZA(),r.qZA(),r.TgZ(48,"div",2),r.TgZ(49,"button",15),r._UZ(50,"i",16),r.qZA(),r.TgZ(51,"button",17),r._UZ(52,"i",18),r.qZA(),r.TgZ(53,"button",19),r._UZ(54,"i",20),r.qZA(),r.TgZ(55,"button",21),r._UZ(56,"i",22),r.qZA(),r.TgZ(57,"button",23),r._UZ(58,"i",24),r.qZA(),r.TgZ(59,"button",25),r._UZ(60,"i",26),r.qZA(),r.qZA(),r.TgZ(61,"div",2),r.TgZ(62,"button",5),r._uU(63," Success"),r._UZ(64,"i",27),r.qZA(),r.TgZ(65,"button",6),r._UZ(66,"i",28),r._uU(67,"Error "),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&n&&(r.xp6(9),r.Q6J("innerText",t.basicButton),r.xp6(19),r.Q6J("innerText",t.smallButton),r.xp6(19),r.Q6J("innerText",t.iconButton))},directives:[c.c0,c.El],encapsulation:2}),s)}],Z=function(){var t=function t(){n(this,t)};return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.Bz.forChild(e)],i.Bz]}),t}(),f=((a=function t(){n(this,t)}).\u0275fac=function(n){return new(n||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({imports:[[p.ez,Z,c.Tk]]}),a)}}])}();