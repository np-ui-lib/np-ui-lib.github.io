!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[2760],{2760:function(n,a,r){"use strict";r.r(a),r.d(a,{NpAutoCompleteDemoModule:function(){return m}});var u=r(1116),o=r(4387),i=r(8512),l=r(7368),Z=r(9883),c=r(1462),d=["input1"],s=["itemTemplateRef"];function g(e,t){1&e&&(l.TgZ(0,"div",24),l._uU(1," Name is required. "),l.qZA())}function h(e,t){if(1&e&&(l._UZ(0,"span",25),l.ALo(1,"npHighlight"),l.TgZ(2,"span"),l._uU(3),l.qZA()),2&e){var n=t.item;l.Q6J("innerHTML",l.xi3(1,2,n.name,t.keyword),l.oJD),l.xp6(3),l.hij(" (",n.age,")")}}var T,A,q=[{path:"",component:(T=function(){function n(){e(this,n),this.importText="import { NpAutoCompleteModule } from 'np-ui-lib';",this.htmlText='<np-auto-complete [(ngModel)]="value" [searchResult]="searchResult" (onSearch)="onSearchName($event)">\n</np-auto-complete>',this.templateText='<ng-template #itemTemplateRef let-item="item" let-keyword="keyword">\n  <span [innerHTML]="item.name | npHighlight : keyword"></span>\n  <span> ({{item.age}})</span>\n</ng-template>',this.onSearchText="onSearchName(keyword: string) {\n    ...Search data\n    this.searchResult.next(searchData);\n}",this.data=["Maria","Ana","Antonio","Thomas","Christina","Hanna","Fr\xe9d\xe9rique","Mart\xedn","Laurence","Elizabeth","Victoria","Patricio","Francisco","Yang","Pedro","Elizabeth","Sven","Janine","Ann","Roland","Aria","Diego","Martine","Peter","Carine","Paolo","Lino","Eduardo","Jos\xe9","Andr\xe9","Howard","Manuel","Mario","Carlos","Yoshi","Patricia","Helen","Philip","Daniel","Annette","Yoshi","John","Renate","Jaime","Carlos","Felipe","Fran","Giovanni","Catherine","Jean","Alexander","Simon","Yvonne","Rene","Henriette","Marie","Guillermo","Georg","Isabel","Bernardo","L\xfacia","Horst","Sergio","Paula","Maurizio","Janete","Michael","Alejandra","Jonas","Jose","Hari","Jytte","Dominique","Art","Pascale","Liz","Liu","Karin","Miguel","Anabela","Helvetius","Palle","Mary","Paul","Rita","Pirkko","Paula","Karl","Matti","Zbyszek"],this.dataFull=[{id:1,name:"Maria",age:28},{id:2,name:"Karl",age:6},{id:3,name:"Jose",age:41},{id:4,name:"Yoshi",age:8},{id:5,name:"Jonas",age:9},{id:6,name:"Hari",age:18},{id:7,name:"Karl",age:33},{id:8,name:"Daniel",age:18},{id:9,name:"Yvonne",age:27},{id:10,name:"John",age:26},{id:11,name:"Mario",age:53},{id:12,name:"Martine",age:65},{id:13,name:"Jean",age:12},{id:14,name:"Marie",age:46},{id:15,name:"Paula",age:60},{id:16,name:"Paul",age:69},{id:17,name:"Fr\xe9d\xe9rique",age:34},{id:18,name:"Aria",age:64},{id:19,name:"Pedro",age:31},{id:20,name:"Janete",age:36}],this.auto1="Maria",this.searchResult1=new i.X(null),this.auto2="Maria",this.searchResult2=new i.X(null),this.searchResult3=new i.X(null),this.searchResult4=new i.X(null),this.searchResult5=new i.X(null),this.searchResult6=new i.X(null),this.searchResult7=new i.X(null),this.auto8="Maria",this.searchResult8=new i.X(null),this.searchResult9=new i.X(null),this.searchResult10=new i.X(null),this.searchResult11=new i.X(null),this.searchResult12=new i.X(null)}var a,r,u;return a=n,(r=[{key:"ngOnInit",value:function(){}},{key:"onSearch1",value:function(e){var t=this;setTimeout(function(){console.log("Call for Search1");var n=t.data.filter(function(t){if(t.indexOf(e)>-1)return t});t.searchResult1.next(n)},1e3)}},{key:"onSearch2",value:function(e){var t=this;setTimeout(function(){var n=t.data.filter(function(t){if(t.indexOf(e)>-1)return t});t.searchResult2.next(n)},1e3)}},{key:"onSearch3",value:function(e){var t=this;setTimeout(function(){var n=t.data.filter(function(t){if(t.indexOf(e)>-1)return t});t.searchResult3.next(n)},1e3)}},{key:"onSearch4",value:function(e){var t=this;setTimeout(function(){var n=t.data.filter(function(t){if(t.indexOf(e)>-1)return t});t.searchResult4.next(n)},1e3)}},{key:"onChange4",value:function(e){alert(e)}},{key:"onSearch5",value:function(e){var t=this;setTimeout(function(){var n=t.data.filter(function(t){if(t.indexOf(e)>-1)return t});t.searchResult5.next(n)},1e3)}},{key:"onSearch6",value:function(e){var t=this;setTimeout(function(){var n=t.data.filter(function(t){if(t.indexOf(e)>-1)return t});t.searchResult6.next(n)},1e3)}},{key:"onSearch7",value:function(e){var t=this;setTimeout(function(){var n=t.dataFull.filter(function(t){if(t.name.indexOf(e)>-1)return t});t.searchResult7.next(n)},1e3)}},{key:"onSearch8",value:function(e){var t=this;setTimeout(function(){var n=t.dataFull.filter(function(t){if(t.name.indexOf(e)>-1)return t});t.searchResult8.next(n)},1e3)}},{key:"onSearch9",value:function(e){var t=this;setTimeout(function(){var n=t.dataFull.filter(function(t){if(t.name.indexOf(e)>-1)return t});t.searchResult9.next(n)},1e3)}},{key:"onSearch10",value:function(e){var t=this;setTimeout(function(){var n=t.dataFull.filter(function(t){if(t.name.indexOf(e)>-1)return t});t.searchResult10.next(n)},1e3)}},{key:"onSearch11",value:function(e){var t=this;setTimeout(function(){var n=t.dataFull.filter(function(t){if(t.name.indexOf(e)>-1)return t});t.searchResult11.next(n)},1e3)}},{key:"onSearch12",value:function(e){var t=this;setTimeout(function(){var n=t.dataFull.filter(function(t){if(t.name.indexOf(e)>-1)return t});t.searchResult12.next(n)},1e3)}},{key:"onTabChange",value:function(e){var t=this;"Examples"===e.title&&setTimeout(function(){t.input1.focus()},100)}}])&&t(a.prototype,r),u&&t(a,u),n}(),T.\u0275fac=function(e){return new(e||T)},T.\u0275cmp=l.Xpm({type:T,selectors:[["app-np-auto-complete-demo"]],viewQuery:function(e,t){var n;1&e&&(l.Gf(d,7),l.Gf(s,7)),2&e&&(l.iGM(n=l.CRH())&&(t.input1=n.first),l.iGM(n=l.CRH())&&(t.itemTemplateRef=n.first))},decls:314,vars:50,consts:[[1,"page-header"],[3,"onTabChange"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["routerLink","/np-directives-demo"],["title","Examples"],[3,"ngModel","searchResult","ngModelChange","onSearch"],["input1",""],["disabled","",3,"ngModel","searchResult","ngModelChange","onSearch"],[3,"ngModel","searchResult","readOnly","ngModelChange","onSearch"],["form","ngForm"],["name","nameautosearch","required","",3,"ngModel","searchResult","ngModelChange","onSearch"],["validations","ngModel"],["class","np-text-danger",4,"ngIf"],["placeholder","Search and Select name...",3,"ngModel","searchResult","valueKey","ngModelChange","onSearch"],[3,"ngModel","searchResult","valueKey","orderBy","orderDir","ngModelChange","onSearch"],["required","",3,"ngModel","forceToSelect","valueKey","searchResult","ngModelChange","onSearch"],[3,"ngModel","searchResult","valueKey","itemTemplate","ngModelChange","onSearch"],["itemTemplateRef",""],[3,"ngModel","searchResult","valueKey","maxResultLimit","ngModelChange","onSearch"],[3,"ngModel","searchResult","valueKey","minSearchCharLimit","ngModelChange","onSearch"],[3,"ngModel","searchDelay","searchResult","styleClass","ngModelChange","onSearch"],[3,"ngModel","searchResult","ngModelChange","onSearch","onChange"],[1,"np-text-danger"],[3,"innerHTML"]],template:function(e,t){if(1&e&&(l.TgZ(0,"h2",0),l._uU(1,"Auto Complete"),l.qZA(),l.TgZ(2,"np-tabs",1),l.NdJ("onTabChange",function(e){return t.onTabChange(e)}),l.TgZ(3,"np-tab",2),l.TgZ(4,"np-card"),l.TgZ(5,"np-card-body"),l.TgZ(6,"b"),l._uU(7,"Module to import"),l.qZA(),l.TgZ(8,"div"),l.TgZ(9,"pre"),l._UZ(10,"code",3),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"np-card"),l.TgZ(12,"np-card-body"),l.TgZ(13,"b"),l._uU(14,"HTML"),l.qZA(),l.TgZ(15,"div"),l.TgZ(16,"pre"),l._UZ(17,"code",3),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(18,"np-card"),l.TgZ(19,"np-card-body"),l.TgZ(20,"table",4),l.TgZ(21,"tr"),l.TgZ(22,"th"),l._uU(23,"Property"),l.qZA(),l.TgZ(24,"th"),l._uU(25,"Description"),l.qZA(),l.TgZ(26,"th"),l._uU(27,"Type"),l.qZA(),l.TgZ(28,"th"),l._uU(29,"Default"),l.qZA(),l.qZA(),l.TgZ(30,"tr"),l.TgZ(31,"td"),l._uU(32,"ngModel"),l.qZA(),l.TgZ(33,"td"),l._uU(34,"Value"),l.qZA(),l.TgZ(35,"td"),l._uU(36,"any"),l.qZA(),l._UZ(37,"td"),l.qZA(),l.TgZ(38,"tr"),l.TgZ(39,"td"),l._uU(40,"searchResult"),l.qZA(),l.TgZ(41,"td"),l._uU(42,"List of data"),l.qZA(),l.TgZ(43,"td"),l._uU(44,"BehaviorSubject<any[]>"),l.qZA(),l._UZ(45,"td"),l.qZA(),l.TgZ(46,"tr"),l.TgZ(47,"td"),l._uU(48,"valueKey"),l.qZA(),l.TgZ(49,"td"),l._uU(50," If "),l.TgZ(51,"b"),l._uU(52,"items"),l.qZA(),l._uU(53," is type of any[], then set unique property name which needs to display and get selected "),l.qZA(),l.TgZ(54,"td"),l._uU(55,"string"),l.qZA(),l._UZ(56,"td"),l.qZA(),l.TgZ(57,"tr"),l.TgZ(58,"td"),l._uU(59,"itemTemplate"),l.qZA(),l.TgZ(60,"td"),l._uU(61,' Set template for item. Use var let-item="item" in template to access item '),l.TgZ(62,"pre"),l.TgZ(63,"code"),l._uU(64),l.qZA(),l.qZA(),l.TgZ(65,"a",5),l._uU(66,"How to use npHightlight pipe?"),l.qZA(),l.qZA(),l.TgZ(67,"td"),l._uU(68,"TemplateRef<any>"),l.qZA(),l._UZ(69,"td"),l.qZA(),l.TgZ(70,"tr"),l.TgZ(71,"td"),l._uU(72,"orderBy"),l.qZA(),l.TgZ(73,"td"),l._uU(74,"Set order by property"),l.qZA(),l.TgZ(75,"td"),l._uU(76,"string"),l.qZA(),l._UZ(77,"td"),l.qZA(),l.TgZ(78,"tr"),l.TgZ(79,"td"),l._uU(80,"orderDir"),l.qZA(),l.TgZ(81,"td"),l._uU(82," Set order direction 'asc' or 'desc'. Default value is 'asc'. "),l._UZ(83,"br"),l._uU(84," If data is type of string[], then only use orderDir. "),l.qZA(),l.TgZ(85,"td"),l._uU(86,"string"),l.qZA(),l._UZ(87,"td"),l.qZA(),l.TgZ(88,"tr"),l.TgZ(89,"td"),l._uU(90,"maxResultLimit"),l.qZA(),l.TgZ(91,"td"),l._uU(92,"Maximum number of search items to display"),l.qZA(),l.TgZ(93,"td"),l._uU(94,"number"),l.qZA(),l._UZ(95,"td"),l.qZA(),l.TgZ(96,"tr"),l.TgZ(97,"td"),l._uU(98,"minSearchCharLimit"),l.qZA(),l.TgZ(99,"td"),l._uU(100,"Minimum search character required to search"),l.qZA(),l.TgZ(101,"td"),l._uU(102,"number"),l.qZA(),l._UZ(103,"td"),l.qZA(),l.TgZ(104,"tr"),l.TgZ(105,"td"),l._uU(106,"searchDelay"),l.qZA(),l.TgZ(107,"td"),l._uU(108,"Set delay in search, in miliseconds"),l.qZA(),l.TgZ(109,"td"),l._uU(110,"number"),l.qZA(),l.TgZ(111,"td"),l._uU(112,"1000"),l.qZA(),l.qZA(),l.TgZ(113,"tr"),l.TgZ(114,"td"),l._uU(115,"forceToSelect"),l.qZA(),l.TgZ(116,"td"),l._uU(117," Force to select value from dropdown, if not selecting then value will be set as undefined "),l.qZA(),l.TgZ(118,"td"),l._uU(119,"boolean"),l.qZA(),l.TgZ(120,"td"),l._uU(121,"false"),l.qZA(),l.qZA(),l.TgZ(122,"tr"),l.TgZ(123,"td"),l._uU(124,"placeholder"),l.qZA(),l.TgZ(125,"td"),l._uU(126,"Set placeholder"),l.qZA(),l.TgZ(127,"td"),l._uU(128,"string"),l.qZA(),l._UZ(129,"td"),l.qZA(),l.TgZ(130,"tr"),l.TgZ(131,"td"),l._uU(132,"disabled"),l.qZA(),l.TgZ(133,"td"),l._uU(134,"Set disabled"),l.qZA(),l.TgZ(135,"td"),l._uU(136,"boolean"),l.qZA(),l.TgZ(137,"td"),l._uU(138,"false"),l.qZA(),l.qZA(),l.TgZ(139,"tr"),l.TgZ(140,"td"),l._uU(141,"required"),l.qZA(),l.TgZ(142,"td"),l._uU(143,"Set required"),l.qZA(),l.TgZ(144,"td"),l._uU(145,"boolean"),l.qZA(),l.TgZ(146,"td"),l._uU(147,"false"),l.qZA(),l.qZA(),l.TgZ(148,"tr"),l.TgZ(149,"td"),l._uU(150,"readOnly"),l.qZA(),l.TgZ(151,"td"),l._uU(152,"Set readonly"),l.qZA(),l.TgZ(153,"td"),l._uU(154,"boolean"),l.qZA(),l.TgZ(155,"td"),l._uU(156,"false"),l.qZA(),l.qZA(),l.TgZ(157,"tr"),l.TgZ(158,"td"),l._uU(159,"autoFocus"),l.qZA(),l.TgZ(160,"td"),l._uU(161,"Set autofocus"),l.qZA(),l.TgZ(162,"td"),l._uU(163,"boolean"),l.qZA(),l.TgZ(164,"td"),l._uU(165,"false"),l.qZA(),l.qZA(),l.TgZ(166,"tr"),l.TgZ(167,"td"),l._uU(168,"tabIndex"),l.qZA(),l.TgZ(169,"td"),l._uU(170,"Set tabindex attribute"),l.qZA(),l.TgZ(171,"td"),l._uU(172,"number"),l.qZA(),l._UZ(173,"td"),l.qZA(),l.TgZ(174,"tr"),l.TgZ(175,"td"),l._uU(176,"styleClass"),l.qZA(),l.TgZ(177,"td"),l._uU(178,"Set extra class on component"),l.qZA(),l.TgZ(179,"td"),l._uU(180,"string"),l.qZA(),l._UZ(181,"td"),l.qZA(),l.TgZ(182,"tr"),l.TgZ(183,"td"),l._uU(184,"inputId"),l.qZA(),l.TgZ(185,"td"),l._uU(186,"Set id attribute"),l.qZA(),l.TgZ(187,"td"),l._uU(188,"string"),l.qZA(),l._UZ(189,"td"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(190,"np-card"),l.TgZ(191,"np-card-body"),l.TgZ(192,"table",4),l.TgZ(193,"tr"),l.TgZ(194,"th"),l._uU(195,"Method"),l.qZA(),l.TgZ(196,"th"),l._uU(197,"Description"),l.qZA(),l.TgZ(198,"th"),l._uU(199,"Parameters"),l.qZA(),l.qZA(),l.TgZ(200,"tr"),l.TgZ(201,"td"),l._uU(202,"onChange(v: any)"),l.qZA(),l.TgZ(203,"td"),l._uU(204,"Callback event on value change."),l.qZA(),l.TgZ(205,"td"),l._uU(206,"Value"),l.qZA(),l.qZA(),l.TgZ(207,"tr"),l.TgZ(208,"td"),l._uU(209,"onSearch(v: any)"),l.qZA(),l.TgZ(210,"td"),l._uU(211," Callback event on search"),l._UZ(212,"br"),l.TgZ(213,"pre"),l.TgZ(214,"code"),l._uU(215),l.qZA(),l.qZA(),l.qZA(),l.TgZ(216,"td"),l._uU(217,"Search keyword"),l.qZA(),l.qZA(),l.TgZ(218,"tr"),l.TgZ(219,"td"),l._uU(220,"onFocus(event)"),l.qZA(),l.TgZ(221,"td"),l._uU(222,"Callback event on input focus."),l.qZA(),l.TgZ(223,"td"),l._uU(224,"Browser event"),l.qZA(),l.qZA(),l.TgZ(225,"tr"),l.TgZ(226,"td"),l._uU(227,"onBlur(event)"),l.qZA(),l.TgZ(228,"td"),l._uU(229,"Callback event on input blur."),l.qZA(),l.TgZ(230,"td"),l._uU(231,"Browser event"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(232,"np-card"),l.TgZ(233,"np-card-body"),l.TgZ(234,"table",4),l.TgZ(235,"tr"),l.TgZ(236,"th"),l._uU(237,"Api"),l.qZA(),l.TgZ(238,"th"),l._uU(239,"Description"),l.qZA(),l.TgZ(240,"th"),l._uU(241,"Parameters"),l.qZA(),l.qZA(),l.TgZ(242,"tr"),l.TgZ(243,"td"),l._uU(244,"focus()"),l.qZA(),l.TgZ(245,"td"),l._uU(246," Set focus on control. If not setting focus properly then use timeout of 500ms. "),l.qZA(),l._UZ(247,"td"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(248,"np-tab",6),l.TgZ(249,"fieldset"),l.TgZ(250,"legend"),l._uU(251,"Default auto complete"),l.qZA(),l.TgZ(252,"np-auto-complete",7,8),l.NdJ("ngModelChange",function(e){return t.auto1=e})("onSearch",function(e){return t.onSearch1(e)}),l.qZA(),l.TgZ(254,"div"),l._uU(255),l.qZA(),l.qZA(),l.TgZ(256,"fieldset"),l.TgZ(257,"legend"),l._uU(258,"disabled and readOnly"),l.qZA(),l.TgZ(259,"np-auto-complete",9),l.NdJ("ngModelChange",function(e){return t.auto2=e})("onSearch",function(e){return t.onSearch2(e)}),l.qZA(),l._UZ(260,"br"),l.TgZ(261,"np-auto-complete",10),l.NdJ("ngModelChange",function(e){return t.auto2=e})("onSearch",function(e){return t.onSearch2(e)}),l.qZA(),l.qZA(),l.TgZ(262,"fieldset"),l.TgZ(263,"legend"),l._uU(264,"required"),l.qZA(),l.TgZ(265,"form",null,11),l.TgZ(267,"np-auto-complete",12,13),l.NdJ("ngModelChange",function(e){return t.auto3=e})("onSearch",function(e){return t.onSearch3(e)}),l.qZA(),l.YNc(269,g,2,0,"div",14),l.TgZ(270,"div"),l._uU(271),l.qZA(),l.TgZ(272,"div"),l._uU(273),l.qZA(),l.qZA(),l.qZA(),l.TgZ(274,"fieldset"),l.TgZ(275,"legend"),l._uU(276,"Placeholder"),l.qZA(),l.TgZ(277,"np-auto-complete",15),l.NdJ("ngModelChange",function(e){return t.auto10=e})("onSearch",function(e){return t.onSearch10(e)}),l.qZA(),l.qZA(),l.TgZ(278,"fieldset"),l.TgZ(279,"legend"),l._uU(280,"valueKey + orderBy + orderDir"),l.qZA(),l.TgZ(281,"np-auto-complete",16),l.NdJ("ngModelChange",function(e){return t.auto7=e})("onSearch",function(e){return t.onSearch7(e)}),l.qZA(),l.TgZ(282,"div"),l._uU(283),l.qZA(),l.qZA(),l.TgZ(284,"fieldset"),l.TgZ(285,"legend"),l._uU(286,"forceToSelect"),l.qZA(),l.TgZ(287,"np-auto-complete",17),l.NdJ("ngModelChange",function(e){return t.auto12=e})("onSearch",function(e){return t.onSearch12(e)}),l.qZA(),l.TgZ(288,"div"),l._uU(289),l.qZA(),l.qZA(),l.TgZ(290,"fieldset"),l.TgZ(291,"legend"),l._uU(292,"Item template"),l.qZA(),l.TgZ(293,"np-auto-complete",18),l.NdJ("ngModelChange",function(e){return t.auto8=e})("onSearch",function(e){return t.onSearch8(e)}),l.qZA(),l.YNc(294,h,4,5,"ng-template",null,19,l.W1O),l.TgZ(296,"div"),l._uU(297),l.qZA(),l.qZA(),l.TgZ(298,"fieldset"),l.TgZ(299,"legend"),l._uU(300,"Max search result limit (first 2 items)"),l.qZA(),l.TgZ(301,"np-auto-complete",20),l.NdJ("ngModelChange",function(e){return t.auto9=e})("onSearch",function(e){return t.onSearch9(e)}),l.qZA(),l.qZA(),l.TgZ(302,"fieldset"),l.TgZ(303,"legend"),l._uU(304," Minimum search characters limit to search (After 3 characters) "),l.qZA(),l.TgZ(305,"np-auto-complete",21),l.NdJ("ngModelChange",function(e){return t.auto11=e})("onSearch",function(e){return t.onSearch11(e)}),l.qZA(),l.qZA(),l.TgZ(306,"fieldset"),l.TgZ(307,"legend"),l._uU(308,"styleClass + searchDelay"),l.qZA(),l.TgZ(309,"np-auto-complete",22),l.NdJ("ngModelChange",function(e){return t.auto5=e})("onSearch",function(e){return t.onSearch5(e)}),l.qZA(),l.qZA(),l.TgZ(310,"fieldset"),l.TgZ(311,"legend"),l._uU(312,"onChange"),l.qZA(),l.TgZ(313,"np-auto-complete",23),l.NdJ("ngModelChange",function(e){return t.auto4=e})("onSearch",function(e){return t.onSearch4(e)})("onChange",function(e){return t.onChange4(e)}),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e){var n=l.MAs(266),a=l.MAs(268),r=l.MAs(295);l.xp6(10),l.Q6J("innerText",t.importText),l.xp6(7),l.Q6J("innerText",t.htmlText),l.xp6(47),l.Oqu(t.templateText),l.xp6(151),l.Oqu(t.onSearchText),l.xp6(37),l.Q6J("ngModel",t.auto1)("searchResult",t.searchResult1),l.xp6(3),l.hij("Selected value : ",t.auto1,""),l.xp6(4),l.Q6J("ngModel",t.auto2)("searchResult",t.searchResult2),l.xp6(2),l.Q6J("ngModel",t.auto2)("searchResult",t.searchResult2)("readOnly",!0),l.xp6(6),l.Q6J("ngModel",t.auto3)("searchResult",t.searchResult3),l.xp6(2),l.Q6J("ngIf",a.control.touched&&(null==a.control.errors?null:a.control.errors.required)),l.xp6(2),l.hij("Selected value : ",t.auto3,""),l.xp6(2),l.hij("Form valid: ",n.valid,""),l.xp6(4),l.Q6J("ngModel",t.auto10)("searchResult",t.searchResult10)("valueKey","name"),l.xp6(4),l.Q6J("ngModel",t.auto7)("searchResult",t.searchResult7)("valueKey","name")("orderBy","name")("orderDir","asc"),l.xp6(2),l.hij("Selected value : ",t.auto7,""),l.xp6(4),l.Q6J("ngModel",t.auto12)("forceToSelect",!0)("valueKey","name")("searchResult",t.searchResult12),l.xp6(2),l.hij("Selected value : ",t.auto12,""),l.xp6(4),l.Q6J("ngModel",t.auto8)("searchResult",t.searchResult8)("valueKey","name")("itemTemplate",r),l.xp6(4),l.hij("Selected value : ",t.auto8,""),l.xp6(4),l.Q6J("ngModel",t.auto9)("searchResult",t.searchResult9)("valueKey","name")("maxResultLimit",2),l.xp6(4),l.Q6J("ngModel",t.auto11)("searchResult",t.searchResult11)("valueKey","name")("minSearchCharLimit",3),l.xp6(4),l.Q6J("ngModel",t.auto5)("searchDelay",3e3)("searchResult",t.searchResult5)("styleClass","myClass"),l.xp6(4),l.Q6J("ngModel",t.auto4)("searchResult",t.searchResult4)}},directives:[Z.KA,Z.Qk,Z.c0,Z.El,o.yS,Z.Gz,c.JJ,c.On,c._Y,c.JL,c.F,c.Q7,u.O5],pipes:[Z.wq],encapsulation:2}),T)}],f=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.Bz.forChild(q)],o.Bz]}),t}(),m=((A=function t(){e(this,t)}).\u0275fac=function(e){return new(e||A)},A.\u0275mod=l.oAB({type:A}),A.\u0275inj=l.cJS({imports:[[u.ez,c.u5,f,Z.$C,Z.YE,Z.i7,Z.Tk]]}),A)}}])}();