(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[5439],{5439:function(e,t,l){"use strict";l.r(t),l.d(t,{NpFileUploadDemoModule:function(){return A}});var n=l(1116),Z=l(4387),o=l(7368),d=l(9883),g=l(1462);function i(e,t){1&e&&(o.TgZ(0,"div",25),o._uU(1," Invalid extension. "),o.qZA())}function u(e,t){1&e&&(o.TgZ(0,"div",25),o._uU(1," File size exceeds. "),o.qZA())}function a(e,t){1&e&&(o.TgZ(0,"div",25),o._uU(1," Total File size exceeds. "),o.qZA())}function r(e,t){1&e&&(o.TgZ(0,"div",25),o._uU(1," Max 2 files allowed to select. "),o.qZA())}const p=[{path:"",component:(()=>{class e{constructor(){this.importText="import { NpFileUploadModule } from 'np-ui-lib';",this.htmlText='<np-file-upload [(ngModel)]="uploadedFiles"></np-file-upload>'}ngOnInit(){}onChange(e){alert("change event occurs.")}SetNullValue(){this.fileUpload1=null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-np-file-upload-demo"]],decls:274,vars:30,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["type","info"],["title","Examples"],[3,"ngModel","showFileSize","ngModelChange"],[1,"np-btn-group"],[1,"np-btn",3,"click"],[3,"ngModel","multiple","ngModelChange"],["required","",3,"ngModel","ngModelChange"],["disabled","",3,"ngModel","ngModelChange"],[3,"ngModel","readOnly","ngModelChange"],[3,"ngModel","extensions","ngModelChange"],["fileUpload5Control","ngModel"],["class","np-text-danger",4,"ngIf"],[3,"ngModel","size","ngModelChange"],["fileUpload6Control","ngModel"],[3,"ngModel","multiple","totalSize","ngModelChange"],["fileUpload7Control","ngModel"],[3,"ngModel","multiple","maxFiles","ngModelChange"],["fileUpload8Control","ngModel"],[3,"ngModel","uploadButtonLabel","ngModelChange"],[3,"ngModel","accept","uploadButtonLabel","ngModelChange"],[3,"ngModel","ngModelChange","onChange"],[1,"np-text-danger"]],template:function(e,t){if(1&e&&(o.TgZ(0,"h2",0),o._uU(1,"File Upload"),o.qZA(),o.TgZ(2,"np-tabs"),o.TgZ(3,"np-tab",1),o.TgZ(4,"np-card"),o.TgZ(5,"np-card-body"),o.TgZ(6,"b"),o._uU(7,"Module to import"),o.qZA(),o.TgZ(8,"div"),o.TgZ(9,"pre"),o._UZ(10,"code",2),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"np-card"),o.TgZ(12,"np-card-body"),o.TgZ(13,"b"),o._uU(14,"HTML"),o.qZA(),o.TgZ(15,"div"),o.TgZ(16,"pre"),o._UZ(17,"code",2),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(18,"np-card"),o.TgZ(19,"np-card-body"),o.TgZ(20,"table",3),o.TgZ(21,"tr"),o.TgZ(22,"th"),o._uU(23,"Property"),o.qZA(),o.TgZ(24,"th"),o._uU(25,"Description"),o.qZA(),o.TgZ(26,"th"),o._uU(27,"Type"),o.qZA(),o.TgZ(28,"th"),o._uU(29,"Default"),o.qZA(),o.qZA(),o.TgZ(30,"tr"),o.TgZ(31,"td"),o._uU(32,"ngModel"),o.qZA(),o.TgZ(33,"td"),o._uU(34,"Value"),o.qZA(),o.TgZ(35,"td"),o._uU(36,"File[]"),o.qZA(),o._UZ(37,"td"),o.qZA(),o.TgZ(38,"tr"),o.TgZ(39,"td"),o._uU(40,"multiple"),o.qZA(),o.TgZ(41,"td"),o._uU(42,"Allow to upload multiple files"),o.qZA(),o.TgZ(43,"td"),o._uU(44,"boolean"),o.qZA(),o.TgZ(45,"td"),o._uU(46,"false"),o.qZA(),o.qZA(),o.TgZ(47,"tr"),o.TgZ(48,"td"),o._uU(49,"extensions"),o.qZA(),o.TgZ(50,"td"),o._uU(51," Set extensions to allow to upload "),o._UZ(52,"br"),o._uU(53,"Multiple extension with comma separated like 'png,jpg,jpeg' "),o.qZA(),o.TgZ(54,"td"),o._uU(55,"string"),o.qZA(),o._UZ(56,"td"),o.qZA(),o.TgZ(57,"tr"),o.TgZ(58,"td"),o._uU(59,"accept"),o.qZA(),o.TgZ(60,"td"),o._uU(61,"Accept verbs for file selector like 'image/*'"),o.qZA(),o.TgZ(62,"td"),o._uU(63,"string"),o.qZA(),o._UZ(64,"td"),o.qZA(),o.TgZ(65,"tr"),o.TgZ(66,"td"),o._uU(67,"size"),o.qZA(),o.TgZ(68,"td"),o._uU(69,"Set individual file size validation in bytes"),o.qZA(),o.TgZ(70,"td"),o._uU(71,"number"),o.qZA(),o._UZ(72,"td"),o.qZA(),o.TgZ(73,"tr"),o.TgZ(74,"td"),o._uU(75,"totalSize"),o.qZA(),o.TgZ(76,"td"),o._uU(77," Set total file size validation in bytes. Only for multiple file uploads "),o.qZA(),o.TgZ(78,"td"),o._uU(79,"number"),o.qZA(),o._UZ(80,"td"),o.qZA(),o.TgZ(81,"tr"),o.TgZ(82,"td"),o._uU(83,"maxFiles"),o.qZA(),o.TgZ(84,"td"),o._uU(85,"Set maximum number of file to upload validation"),o.qZA(),o.TgZ(86,"td"),o._uU(87,"number"),o.qZA(),o._UZ(88,"td"),o.qZA(),o.TgZ(89,"tr"),o.TgZ(90,"td"),o._uU(91,"uploadButtonLabel"),o.qZA(),o.TgZ(92,"td"),o._uU(93,"Set upload button text"),o.qZA(),o.TgZ(94,"td"),o._uU(95,"string"),o.qZA(),o.TgZ(96,"td"),o._uU(97,"Choose file/Choose files"),o.qZA(),o.qZA(),o.TgZ(98,"tr"),o.TgZ(99,"td"),o._uU(100,"showFileSize"),o.qZA(),o.TgZ(101,"td"),o._uU(102,"Show selected file size"),o.qZA(),o.TgZ(103,"td"),o._uU(104,"boolean"),o.qZA(),o.TgZ(105,"td"),o._uU(106,"true"),o.qZA(),o.qZA(),o.TgZ(107,"tr"),o.TgZ(108,"td"),o._uU(109,"disabled"),o.qZA(),o.TgZ(110,"td"),o._uU(111,"Set disabled"),o.qZA(),o.TgZ(112,"td"),o._uU(113,"boolean"),o.qZA(),o.TgZ(114,"td"),o._uU(115,"false"),o.qZA(),o.qZA(),o.TgZ(116,"tr"),o.TgZ(117,"td"),o._uU(118,"required"),o.qZA(),o.TgZ(119,"td"),o._uU(120,"Set required"),o.qZA(),o.TgZ(121,"td"),o._uU(122,"boolean"),o.qZA(),o.TgZ(123,"td"),o._uU(124,"false"),o.qZA(),o.qZA(),o.TgZ(125,"tr"),o.TgZ(126,"td"),o._uU(127,"readOnly"),o.qZA(),o.TgZ(128,"td"),o._uU(129,"Set readonly"),o.qZA(),o.TgZ(130,"td"),o._uU(131,"boolean"),o.qZA(),o.TgZ(132,"td"),o._uU(133,"false"),o.qZA(),o.qZA(),o.TgZ(134,"tr"),o.TgZ(135,"td"),o._uU(136,"autoFocus"),o.qZA(),o.TgZ(137,"td"),o._uU(138,"Set autofocus"),o.qZA(),o.TgZ(139,"td"),o._uU(140,"boolean"),o.qZA(),o.TgZ(141,"td"),o._uU(142,"false"),o.qZA(),o.qZA(),o.TgZ(143,"tr"),o.TgZ(144,"td"),o._uU(145,"tabIndex"),o.qZA(),o.TgZ(146,"td"),o._uU(147,"Set tabindex attribute"),o.qZA(),o.TgZ(148,"td"),o._uU(149,"number"),o.qZA(),o._UZ(150,"td"),o.qZA(),o.TgZ(151,"tr"),o.TgZ(152,"td"),o._uU(153,"styleClass"),o.qZA(),o.TgZ(154,"td"),o._uU(155,"Set extra class on component"),o.qZA(),o.TgZ(156,"td"),o._uU(157,"string"),o.qZA(),o._UZ(158,"td"),o.qZA(),o.TgZ(159,"tr"),o.TgZ(160,"td"),o._uU(161,"inputId"),o.qZA(),o.TgZ(162,"td"),o._uU(163,"Set id attribute"),o.qZA(),o.TgZ(164,"td"),o._uU(165,"string"),o.qZA(),o._UZ(166,"td"),o.qZA(),o.qZA(),o.TgZ(167,"np-alert",4),o._uU(168," There are four control validations for extensions, size, totalSize, maxFiles. "),o.qZA(),o.qZA(),o.qZA(),o.TgZ(169,"np-card"),o.TgZ(170,"np-card-body"),o.TgZ(171,"table",3),o.TgZ(172,"tr"),o.TgZ(173,"th"),o._uU(174,"Method"),o.qZA(),o.TgZ(175,"th"),o._uU(176,"Description"),o.qZA(),o.TgZ(177,"th"),o._uU(178,"Parameters"),o.qZA(),o.qZA(),o.TgZ(179,"tr"),o.TgZ(180,"td"),o._uU(181,"onChange(v: File[])"),o.qZA(),o.TgZ(182,"td"),o._uU(183,"Callback event on value change."),o.qZA(),o.TgZ(184,"td"),o._uU(185,"Value"),o.qZA(),o.qZA(),o.TgZ(186,"tr"),o.TgZ(187,"td"),o._uU(188,"onFocus(event)"),o.qZA(),o.TgZ(189,"td"),o._uU(190,"Callback event on input focus."),o.qZA(),o.TgZ(191,"td"),o._uU(192,"Browser event"),o.qZA(),o.qZA(),o.TgZ(193,"tr"),o.TgZ(194,"td"),o._uU(195,"onBlur(event)"),o.qZA(),o.TgZ(196,"td"),o._uU(197,"Callback event on input blur."),o.qZA(),o.TgZ(198,"td"),o._uU(199,"Browser event"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(200,"np-card"),o.TgZ(201,"np-card-body"),o.TgZ(202,"table",3),o.TgZ(203,"tr"),o.TgZ(204,"th"),o._uU(205,"Api"),o.qZA(),o.TgZ(206,"th"),o._uU(207,"Description"),o.qZA(),o.TgZ(208,"th"),o._uU(209,"Parameters"),o.qZA(),o.qZA(),o.TgZ(210,"tr"),o.TgZ(211,"td"),o._uU(212,"focus()"),o.qZA(),o.TgZ(213,"td"),o._uU(214," Set focus on control. If not setting focus properly then use timeout of 500ms. "),o.qZA(),o._UZ(215,"td"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(216,"np-tab",5),o.TgZ(217,"fieldset"),o.TgZ(218,"legend"),o._uU(219,"Single file upload"),o.qZA(),o.TgZ(220,"np-file-upload",6),o.NdJ("ngModelChange",function(e){return t.fileUpload1=e}),o.qZA(),o.TgZ(221,"div",7),o.TgZ(222,"button",8),o.NdJ("click",function(){return t.SetNullValue()}),o._uU(223,"Set null"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(224,"fieldset"),o.TgZ(225,"legend"),o._uU(226,"Multiple file upload"),o.qZA(),o.TgZ(227,"np-file-upload",9),o.NdJ("ngModelChange",function(e){return t.fileUpload2=e}),o.qZA(),o.qZA(),o.TgZ(228,"fieldset"),o.TgZ(229,"legend"),o._uU(230,"required"),o.qZA(),o.TgZ(231,"np-file-upload",10),o.NdJ("ngModelChange",function(e){return t.fileUpload3=e}),o.qZA(),o.qZA(),o.TgZ(232,"fieldset"),o.TgZ(233,"legend"),o._uU(234,"disabled and readOnly"),o.qZA(),o.TgZ(235,"np-file-upload",11),o.NdJ("ngModelChange",function(e){return t.fileUpload4=e}),o.qZA(),o._UZ(236,"br"),o.TgZ(237,"np-file-upload",12),o.NdJ("ngModelChange",function(e){return t.fileUpload4=e}),o.qZA(),o.qZA(),o.TgZ(238,"fieldset"),o.TgZ(239,"legend"),o._uU(240,"File extensions validation for png, jpg, jpeg"),o.qZA(),o.TgZ(241,"np-file-upload",13,14),o.NdJ("ngModelChange",function(e){return t.fileUpload5=e}),o.qZA(),o.YNc(243,i,2,0,"div",15),o.qZA(),o.TgZ(244,"fieldset"),o.TgZ(245,"legend"),o._uU(246,"File size for 1000 bytes"),o.qZA(),o.TgZ(247,"np-file-upload",16,17),o.NdJ("ngModelChange",function(e){return t.fileUpload6=e}),o.qZA(),o.YNc(249,u,2,0,"div",15),o.qZA(),o.TgZ(250,"fieldset"),o.TgZ(251,"legend"),o._uU(252,"Total file size 1000 bytes for multiple uploads"),o.qZA(),o.TgZ(253,"np-file-upload",18,19),o.NdJ("ngModelChange",function(e){return t.fileUpload7=e}),o.qZA(),o.YNc(255,a,2,0,"div",15),o.qZA(),o.TgZ(256,"fieldset"),o.TgZ(257,"legend"),o._uU(258,"Max 2 files allowed to select"),o.qZA(),o.TgZ(259,"np-file-upload",20,21),o.NdJ("ngModelChange",function(e){return t.fileUpload8=e}),o.qZA(),o.YNc(261,r,2,0,"div",15),o.qZA(),o.TgZ(262,"fieldset"),o.TgZ(263,"legend"),o._uU(264,"Upload button label"),o.qZA(),o.TgZ(265,"np-file-upload",22),o.NdJ("ngModelChange",function(e){return t.fileUpload9=e}),o.qZA(),o.qZA(),o.TgZ(266,"fieldset"),o.TgZ(267,"legend"),o._uU(268,"Accept only images"),o.qZA(),o.TgZ(269,"np-file-upload",23),o.NdJ("ngModelChange",function(e){return t.fileUpload10=e}),o.qZA(),o.qZA(),o.TgZ(270,"fieldset"),o.TgZ(271,"legend"),o._uU(272,"onChange event"),o.qZA(),o.TgZ(273,"np-file-upload",24),o.NdJ("ngModelChange",function(e){return t.fileUpload11=e})("onChange",function(e){return t.onChange(e)}),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e){const e=o.MAs(242),l=o.MAs(248),n=o.MAs(254),Z=o.MAs(260);o.xp6(10),o.Q6J("innerText",t.importText),o.xp6(7),o.Q6J("innerText",t.htmlText),o.xp6(203),o.Q6J("ngModel",t.fileUpload1)("showFileSize",!1),o.xp6(7),o.Q6J("ngModel",t.fileUpload2)("multiple",!0),o.xp6(4),o.Q6J("ngModel",t.fileUpload3),o.xp6(4),o.Q6J("ngModel",t.fileUpload4),o.xp6(2),o.Q6J("ngModel",t.fileUpload4)("readOnly",!0),o.xp6(4),o.Q6J("ngModel",t.fileUpload5)("extensions","png,jpg,jpeg"),o.xp6(2),o.Q6J("ngIf",e.errors&&e.errors.extensions),o.xp6(4),o.Q6J("ngModel",t.fileUpload6)("size",1e3),o.xp6(2),o.Q6J("ngIf",l.errors&&l.errors.size),o.xp6(4),o.Q6J("ngModel",t.fileUpload7)("multiple",!0)("totalSize",1e3),o.xp6(2),o.Q6J("ngIf",n.errors&&n.errors.totalSize),o.xp6(4),o.Q6J("ngModel",t.fileUpload8)("multiple",!0)("maxFiles",2),o.xp6(2),o.Q6J("ngIf",Z.errors&&Z.errors.maxFiles),o.xp6(4),o.Q6J("ngModel",t.fileUpload9)("uploadButtonLabel","Upload your photo"),o.xp6(4),o.Q6J("ngModel",t.fileUpload10)("accept","image/*")("uploadButtonLabel","Upload your photo"),o.xp6(4),o.Q6J("ngModel",t.fileUpload11)}},directives:[d.KA,d.Qk,d.c0,d.El,d.r5,d.rt,g.JJ,g.On,g.Q7,n.O5],encapsulation:2}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[Z.Bz.forChild(p)],Z.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez,g.u5,T,d.OX,d.i7,d.Tk,d.qp]]}),e})()}}]);