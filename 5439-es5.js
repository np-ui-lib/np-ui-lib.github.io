!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}(self.webpackChunknp_ui_app=self.webpackChunknp_ui_app||[]).push([[5439],{5439:function(n,l,Z){"use strict";Z.r(l),Z.d(l,{NpFileUploadDemoModule:function(){return f}});var o=Z(1116),d=Z(4387),g=Z(7368),i=Z(149),u=Z(1462);function a(e,t){1&e&&(g.TgZ(0,"div",25),g._uU(1," Invalid extension. "),g.qZA())}function r(e,t){1&e&&(g.TgZ(0,"div",25),g._uU(1," File size exceeds. "),g.qZA())}function p(e,t){1&e&&(g.TgZ(0,"div",25),g._uU(1," Total File size exceeds. "),g.qZA())}function T(e,t){1&e&&(g.TgZ(0,"div",25),g._uU(1," Max 2 files allowed to select. "),g.qZA())}var A,q,s=[{path:"",component:(A=function(){function n(){e(this,n),this.importText="import { NpFileUploadModule } from 'np-ui-lib';",this.htmlText='<np-file-upload [(ngModel)]="uploadedFiles"></np-file-upload>'}var l,Z,o;return l=n,(Z=[{key:"ngOnInit",value:function(){}},{key:"onChange",value:function(e){alert("change event occurs.")}},{key:"SetNullValue",value:function(){this.fileUpload1=null}}])&&t(l.prototype,Z),o&&t(l,o),n}(),A.\u0275fac=function(e){return new(e||A)},A.\u0275cmp=g.Xpm({type:A,selectors:[["app-np-file-upload-demo"]],decls:274,vars:30,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["type","info"],["title","Examples"],[3,"ngModel","showFileSize","ngModelChange"],[1,"np-btn-group"],[1,"np-btn",3,"click"],[3,"ngModel","multiple","ngModelChange"],["required","",3,"ngModel","ngModelChange"],["disabled","",3,"ngModel","ngModelChange"],[3,"ngModel","readOnly","ngModelChange"],[3,"ngModel","extensions","ngModelChange"],["fileUpload5Control","ngModel"],["class","np-text-danger",4,"ngIf"],[3,"ngModel","size","ngModelChange"],["fileUpload6Control","ngModel"],[3,"ngModel","multiple","totalSize","ngModelChange"],["fileUpload7Control","ngModel"],[3,"ngModel","multiple","maxFiles","ngModelChange"],["fileUpload8Control","ngModel"],[3,"ngModel","uploadButtonLabel","ngModelChange"],[3,"ngModel","accept","uploadButtonLabel","ngModelChange"],[3,"ngModel","ngModelChange","onChange"],[1,"np-text-danger"]],template:function(e,t){if(1&e&&(g.TgZ(0,"h2",0),g._uU(1,"File Upload"),g.qZA(),g.TgZ(2,"np-tabs"),g.TgZ(3,"np-tab",1),g.TgZ(4,"np-card"),g.TgZ(5,"np-card-body"),g.TgZ(6,"b"),g._uU(7,"Module to import"),g.qZA(),g.TgZ(8,"div"),g.TgZ(9,"pre"),g._UZ(10,"code",2),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(11,"np-card"),g.TgZ(12,"np-card-body"),g.TgZ(13,"b"),g._uU(14,"HTML"),g.qZA(),g.TgZ(15,"div"),g.TgZ(16,"pre"),g._UZ(17,"code",2),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(18,"np-card"),g.TgZ(19,"np-card-body"),g.TgZ(20,"table",3),g.TgZ(21,"tr"),g.TgZ(22,"th"),g._uU(23,"Property"),g.qZA(),g.TgZ(24,"th"),g._uU(25,"Description"),g.qZA(),g.TgZ(26,"th"),g._uU(27,"Type"),g.qZA(),g.TgZ(28,"th"),g._uU(29,"Default"),g.qZA(),g.qZA(),g.TgZ(30,"tr"),g.TgZ(31,"td"),g._uU(32,"ngModel"),g.qZA(),g.TgZ(33,"td"),g._uU(34,"Value"),g.qZA(),g.TgZ(35,"td"),g._uU(36,"File[]"),g.qZA(),g._UZ(37,"td"),g.qZA(),g.TgZ(38,"tr"),g.TgZ(39,"td"),g._uU(40,"multiple"),g.qZA(),g.TgZ(41,"td"),g._uU(42,"Allow to upload multiple files"),g.qZA(),g.TgZ(43,"td"),g._uU(44,"boolean"),g.qZA(),g.TgZ(45,"td"),g._uU(46,"false"),g.qZA(),g.qZA(),g.TgZ(47,"tr"),g.TgZ(48,"td"),g._uU(49,"extensions"),g.qZA(),g.TgZ(50,"td"),g._uU(51," Set extensions to allow to upload "),g._UZ(52,"br"),g._uU(53,"Multiple extension with comma seprated like 'png,jpg,jpeg' "),g.qZA(),g.TgZ(54,"td"),g._uU(55,"string"),g.qZA(),g._UZ(56,"td"),g.qZA(),g.TgZ(57,"tr"),g.TgZ(58,"td"),g._uU(59,"accept"),g.qZA(),g.TgZ(60,"td"),g._uU(61,"Accept verbs for file selector like 'image/*'"),g.qZA(),g.TgZ(62,"td"),g._uU(63,"string"),g.qZA(),g._UZ(64,"td"),g.qZA(),g.TgZ(65,"tr"),g.TgZ(66,"td"),g._uU(67,"size"),g.qZA(),g.TgZ(68,"td"),g._uU(69,"Set individual file size validation in bytes"),g.qZA(),g.TgZ(70,"td"),g._uU(71,"number"),g.qZA(),g._UZ(72,"td"),g.qZA(),g.TgZ(73,"tr"),g.TgZ(74,"td"),g._uU(75,"totalSize"),g.qZA(),g.TgZ(76,"td"),g._uU(77," Set total file size validation in bytes. Only for multiple file uploads "),g.qZA(),g.TgZ(78,"td"),g._uU(79,"number"),g.qZA(),g._UZ(80,"td"),g.qZA(),g.TgZ(81,"tr"),g.TgZ(82,"td"),g._uU(83,"maxFiles"),g.qZA(),g.TgZ(84,"td"),g._uU(85,"Set maximum number of file to upload validation"),g.qZA(),g.TgZ(86,"td"),g._uU(87,"number"),g.qZA(),g._UZ(88,"td"),g.qZA(),g.TgZ(89,"tr"),g.TgZ(90,"td"),g._uU(91,"uploadButtonLabel"),g.qZA(),g.TgZ(92,"td"),g._uU(93,"Set upload button text"),g.qZA(),g.TgZ(94,"td"),g._uU(95,"string"),g.qZA(),g.TgZ(96,"td"),g._uU(97,"Choose file/Choose files"),g.qZA(),g.qZA(),g.TgZ(98,"tr"),g.TgZ(99,"td"),g._uU(100,"showFileSize"),g.qZA(),g.TgZ(101,"td"),g._uU(102,"Show selected file size"),g.qZA(),g.TgZ(103,"td"),g._uU(104,"boolean"),g.qZA(),g.TgZ(105,"td"),g._uU(106,"true"),g.qZA(),g.qZA(),g.TgZ(107,"tr"),g.TgZ(108,"td"),g._uU(109,"disabled"),g.qZA(),g.TgZ(110,"td"),g._uU(111,"Set disabled"),g.qZA(),g.TgZ(112,"td"),g._uU(113,"boolean"),g.qZA(),g.TgZ(114,"td"),g._uU(115,"false"),g.qZA(),g.qZA(),g.TgZ(116,"tr"),g.TgZ(117,"td"),g._uU(118,"required"),g.qZA(),g.TgZ(119,"td"),g._uU(120,"Set required"),g.qZA(),g.TgZ(121,"td"),g._uU(122,"boolean"),g.qZA(),g.TgZ(123,"td"),g._uU(124,"false"),g.qZA(),g.qZA(),g.TgZ(125,"tr"),g.TgZ(126,"td"),g._uU(127,"readOnly"),g.qZA(),g.TgZ(128,"td"),g._uU(129,"Set readonly"),g.qZA(),g.TgZ(130,"td"),g._uU(131,"boolean"),g.qZA(),g.TgZ(132,"td"),g._uU(133,"false"),g.qZA(),g.qZA(),g.TgZ(134,"tr"),g.TgZ(135,"td"),g._uU(136,"autoFocus"),g.qZA(),g.TgZ(137,"td"),g._uU(138,"Set autofocus"),g.qZA(),g.TgZ(139,"td"),g._uU(140,"boolean"),g.qZA(),g.TgZ(141,"td"),g._uU(142,"false"),g.qZA(),g.qZA(),g.TgZ(143,"tr"),g.TgZ(144,"td"),g._uU(145,"tabIndex"),g.qZA(),g.TgZ(146,"td"),g._uU(147,"Set tabindex attribute"),g.qZA(),g.TgZ(148,"td"),g._uU(149,"number"),g.qZA(),g._UZ(150,"td"),g.qZA(),g.TgZ(151,"tr"),g.TgZ(152,"td"),g._uU(153,"styleClass"),g.qZA(),g.TgZ(154,"td"),g._uU(155,"Set extra class on component"),g.qZA(),g.TgZ(156,"td"),g._uU(157,"string"),g.qZA(),g._UZ(158,"td"),g.qZA(),g.TgZ(159,"tr"),g.TgZ(160,"td"),g._uU(161,"inputId"),g.qZA(),g.TgZ(162,"td"),g._uU(163,"Set id attribute"),g.qZA(),g.TgZ(164,"td"),g._uU(165,"string"),g.qZA(),g._UZ(166,"td"),g.qZA(),g.qZA(),g.TgZ(167,"np-alert",4),g._uU(168," There are four control validations for extensions, size, totalSize, maxFiles. "),g.qZA(),g.qZA(),g.qZA(),g.TgZ(169,"np-card"),g.TgZ(170,"np-card-body"),g.TgZ(171,"table",3),g.TgZ(172,"tr"),g.TgZ(173,"th"),g._uU(174,"Method"),g.qZA(),g.TgZ(175,"th"),g._uU(176,"Description"),g.qZA(),g.TgZ(177,"th"),g._uU(178,"Parameters"),g.qZA(),g.qZA(),g.TgZ(179,"tr"),g.TgZ(180,"td"),g._uU(181,"onChange(v: File[])"),g.qZA(),g.TgZ(182,"td"),g._uU(183,"Callback event on value change."),g.qZA(),g.TgZ(184,"td"),g._uU(185,"Value"),g.qZA(),g.qZA(),g.TgZ(186,"tr"),g.TgZ(187,"td"),g._uU(188,"onFocus(event)"),g.qZA(),g.TgZ(189,"td"),g._uU(190,"Callback event on input focus."),g.qZA(),g.TgZ(191,"td"),g._uU(192,"Browser event"),g.qZA(),g.qZA(),g.TgZ(193,"tr"),g.TgZ(194,"td"),g._uU(195,"onBlur(event)"),g.qZA(),g.TgZ(196,"td"),g._uU(197,"Callback event on input blur."),g.qZA(),g.TgZ(198,"td"),g._uU(199,"Browser event"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(200,"np-card"),g.TgZ(201,"np-card-body"),g.TgZ(202,"table",3),g.TgZ(203,"tr"),g.TgZ(204,"th"),g._uU(205,"Api"),g.qZA(),g.TgZ(206,"th"),g._uU(207,"Description"),g.qZA(),g.TgZ(208,"th"),g._uU(209,"Parameters"),g.qZA(),g.qZA(),g.TgZ(210,"tr"),g.TgZ(211,"td"),g._uU(212,"focus()"),g.qZA(),g.TgZ(213,"td"),g._uU(214," Set focus on control. If not setting focus properly then use timeout of 500ms. "),g.qZA(),g._UZ(215,"td"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(216,"np-tab",5),g.TgZ(217,"fieldset"),g.TgZ(218,"legend"),g._uU(219,"Single file upload"),g.qZA(),g.TgZ(220,"np-file-upload",6),g.NdJ("ngModelChange",function(e){return t.fileUpload1=e}),g.qZA(),g.TgZ(221,"div",7),g.TgZ(222,"button",8),g.NdJ("click",function(){return t.SetNullValue()}),g._uU(223,"Set null"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(224,"fieldset"),g.TgZ(225,"legend"),g._uU(226,"Multiple file upload"),g.qZA(),g.TgZ(227,"np-file-upload",9),g.NdJ("ngModelChange",function(e){return t.fileUpload2=e}),g.qZA(),g.qZA(),g.TgZ(228,"fieldset"),g.TgZ(229,"legend"),g._uU(230,"required"),g.qZA(),g.TgZ(231,"np-file-upload",10),g.NdJ("ngModelChange",function(e){return t.fileUpload3=e}),g.qZA(),g.qZA(),g.TgZ(232,"fieldset"),g.TgZ(233,"legend"),g._uU(234,"disabled and readOnly"),g.qZA(),g.TgZ(235,"np-file-upload",11),g.NdJ("ngModelChange",function(e){return t.fileUpload4=e}),g.qZA(),g._UZ(236,"br"),g.TgZ(237,"np-file-upload",12),g.NdJ("ngModelChange",function(e){return t.fileUpload4=e}),g.qZA(),g.qZA(),g.TgZ(238,"fieldset"),g.TgZ(239,"legend"),g._uU(240,"File extensions validation for png, jpg, jpeg"),g.qZA(),g.TgZ(241,"np-file-upload",13,14),g.NdJ("ngModelChange",function(e){return t.fileUpload5=e}),g.qZA(),g.YNc(243,a,2,0,"div",15),g.qZA(),g.TgZ(244,"fieldset"),g.TgZ(245,"legend"),g._uU(246,"File size for 1000 bytes"),g.qZA(),g.TgZ(247,"np-file-upload",16,17),g.NdJ("ngModelChange",function(e){return t.fileUpload6=e}),g.qZA(),g.YNc(249,r,2,0,"div",15),g.qZA(),g.TgZ(250,"fieldset"),g.TgZ(251,"legend"),g._uU(252,"Total file size 1000 bytes for multiple uploads"),g.qZA(),g.TgZ(253,"np-file-upload",18,19),g.NdJ("ngModelChange",function(e){return t.fileUpload7=e}),g.qZA(),g.YNc(255,p,2,0,"div",15),g.qZA(),g.TgZ(256,"fieldset"),g.TgZ(257,"legend"),g._uU(258,"Max 2 files allowed to select"),g.qZA(),g.TgZ(259,"np-file-upload",20,21),g.NdJ("ngModelChange",function(e){return t.fileUpload8=e}),g.qZA(),g.YNc(261,T,2,0,"div",15),g.qZA(),g.TgZ(262,"fieldset"),g.TgZ(263,"legend"),g._uU(264,"Upload button label"),g.qZA(),g.TgZ(265,"np-file-upload",22),g.NdJ("ngModelChange",function(e){return t.fileUpload9=e}),g.qZA(),g.qZA(),g.TgZ(266,"fieldset"),g.TgZ(267,"legend"),g._uU(268,"Accept only images"),g.qZA(),g.TgZ(269,"np-file-upload",23),g.NdJ("ngModelChange",function(e){return t.fileUpload10=e}),g.qZA(),g.qZA(),g.TgZ(270,"fieldset"),g.TgZ(271,"legend"),g._uU(272,"onChange event"),g.qZA(),g.TgZ(273,"np-file-upload",24),g.NdJ("ngModelChange",function(e){return t.fileUpload11=e})("onChange",function(e){return t.onChange(e)}),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&e){var n=g.MAs(242),l=g.MAs(248),Z=g.MAs(254),o=g.MAs(260);g.xp6(10),g.Q6J("innerText",t.importText),g.xp6(7),g.Q6J("innerText",t.htmlText),g.xp6(203),g.Q6J("ngModel",t.fileUpload1)("showFileSize",!1),g.xp6(7),g.Q6J("ngModel",t.fileUpload2)("multiple",!0),g.xp6(4),g.Q6J("ngModel",t.fileUpload3),g.xp6(4),g.Q6J("ngModel",t.fileUpload4),g.xp6(2),g.Q6J("ngModel",t.fileUpload4)("readOnly",!0),g.xp6(4),g.Q6J("ngModel",t.fileUpload5)("extensions","png,jpg,jpeg"),g.xp6(2),g.Q6J("ngIf",n.errors&&n.errors.extensions),g.xp6(4),g.Q6J("ngModel",t.fileUpload6)("size",1e3),g.xp6(2),g.Q6J("ngIf",l.errors&&l.errors.size),g.xp6(4),g.Q6J("ngModel",t.fileUpload7)("multiple",!0)("totalSize",1e3),g.xp6(2),g.Q6J("ngIf",Z.errors&&Z.errors.totalSize),g.xp6(4),g.Q6J("ngModel",t.fileUpload8)("multiple",!0)("maxFiles",2),g.xp6(2),g.Q6J("ngIf",o.errors&&o.errors.maxFiles),g.xp6(4),g.Q6J("ngModel",t.fileUpload9)("uploadButtonLabel","Upload your photo"),g.xp6(4),g.Q6J("ngModel",t.fileUpload10)("accept","image/*")("uploadButtonLabel","Upload your photo"),g.xp6(4),g.Q6J("ngModel",t.fileUpload11)}},directives:[i.KA,i.Qk,i.c0,i.El,i.r5,i.rt,u.JJ,u.On,u.Q7,o.O5],encapsulation:2}),A)}],U=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[d.Bz.forChild(s)],d.Bz]}),t}(),f=((q=function t(){e(this,t)}).\u0275fac=function(e){return new(e||q)},q.\u0275mod=g.oAB({type:q}),q.\u0275inj=g.cJS({imports:[[o.ez,u.u5,U,i.OX,i.i7,i.Tk,i.qp]]}),q)}}])}();