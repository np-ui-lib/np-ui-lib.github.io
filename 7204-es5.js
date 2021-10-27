!function(){function e(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function a(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(self.webpackChunknp_ui_app=self.webpackChunknp_ui_app||[]).push([[7204],{7204:function(t,n,r){"use strict";r.r(n),r.d(n,{NpPanelDemoModule:function(){return c}});var o=r(1116),i=r(4387),p=r(7368),s=r(149);function l(e,a){1&e&&(p.TgZ(0,"p"),p._uU(1," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA())}var d,g,Z=[{path:"",component:(d=function(){function t(){e(this,t),this.importText="import { NpPanelModule } from 'np-ui-lib';",this.htmlText='<np-panel [title]="title" [allowToMinimize]="true" [allowToZoom]="true" [allowToClose]="true" \n  [styleClass]="\'np-pn-danger\'" [height]="200">\n  Panel Body content...\n</np-panel>',this.lazyLoadText="<np-panel [title]=\"'Details'\">\n  <ng-template npPanelContent>\n  ...lazy load content\n  </ng-tempalte>\n</panel>",this.title="What is paragraph?",this.pnl2Disabled=!1}var n,r,o;return n=t,(r=[{key:"ngOnInit",value:function(){}},{key:"togglePanel2Disabled",value:function(){this.pnl2Disabled=!this.pnl2Disabled}}])&&a(n.prototype,r),o&&a(n,o),t}(),d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=p.Xpm({type:d,selectors:[["app-np-panel-demo"]],decls:181,vars:17,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["title","Examples"],[1,"np-container"],[1,"np-row"],[1,"np-col","np-col-sm-12","np-col-md-6"],[3,"title"],[3,"title","allowToMinimize","allowToZoom","allowToClose","iconCss","styleClass","disabled"],["npPanelContent",""],[1,"np-col","np-col-12"],[3,"title","allowToMinimize","allowToZoom","allowToClose","styleClass","height"],["type","button",1,"np-btn",3,"click"]],template:function(e,a){1&e&&(p.TgZ(0,"h2",0),p._uU(1,"Panel"),p.qZA(),p.TgZ(2,"np-tabs"),p.TgZ(3,"np-tab",1),p.TgZ(4,"np-card"),p.TgZ(5,"np-card-body"),p.TgZ(6,"b"),p._uU(7,"Module to import"),p.qZA(),p.TgZ(8,"div"),p.TgZ(9,"pre"),p._UZ(10,"code",2),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(11,"np-card"),p.TgZ(12,"np-card-body"),p.TgZ(13,"b"),p._uU(14,"HTML"),p.qZA(),p.TgZ(15,"div"),p.TgZ(16,"pre"),p._UZ(17,"code",2),p.qZA(),p.qZA(),p.TgZ(18,"b"),p._uU(19,"How to set lazy loading for panel?"),p.qZA(),p.TgZ(20,"div"),p.TgZ(21,"pre"),p._UZ(22,"code",2),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(23,"np-card"),p.TgZ(24,"np-card-body"),p.TgZ(25,"table",3),p.TgZ(26,"tr"),p.TgZ(27,"th"),p._uU(28,"Property"),p.qZA(),p.TgZ(29,"th"),p._uU(30,"Description"),p.qZA(),p.TgZ(31,"th"),p._uU(32,"Type"),p.qZA(),p.TgZ(33,"th"),p._uU(34,"Default"),p.qZA(),p.qZA(),p.TgZ(35,"tr"),p.TgZ(36,"td"),p._uU(37,"title"),p.qZA(),p.TgZ(38,"td"),p._uU(39,"Title of panel"),p.qZA(),p.TgZ(40,"td"),p._uU(41,"string | TemplateRef <any>"),p.qZA(),p._UZ(42,"td"),p.qZA(),p.TgZ(43,"tr"),p.TgZ(44,"td"),p._uU(45,"allowToMinimize"),p.qZA(),p.TgZ(46,"td"),p._uU(47,"Allow to minimize"),p.qZA(),p.TgZ(48,"td"),p._uU(49,"boolean"),p.qZA(),p.TgZ(50,"td"),p._uU(51,"false"),p.qZA(),p.qZA(),p.TgZ(52,"tr"),p.TgZ(53,"td"),p._uU(54,"allowToZoom"),p.qZA(),p.TgZ(55,"td"),p._uU(56,"Allow to zoom"),p.qZA(),p.TgZ(57,"td"),p._uU(58,"boolean"),p.qZA(),p.TgZ(59,"td"),p._uU(60,"false"),p.qZA(),p.qZA(),p.TgZ(61,"tr"),p.TgZ(62,"td"),p._uU(63,"allowToClose"),p.qZA(),p.TgZ(64,"td"),p._uU(65,"Allow to close"),p.qZA(),p.TgZ(66,"td"),p._uU(67,"boolean"),p.qZA(),p.TgZ(68,"td"),p._uU(69,"false"),p.qZA(),p.qZA(),p.TgZ(70,"tr"),p.TgZ(71,"td"),p._uU(72,"isOpen"),p.qZA(),p.TgZ(73,"td"),p._uU(74,"Set panel to default open"),p.qZA(),p.TgZ(75,"td"),p._uU(76,"boolean"),p.qZA(),p.TgZ(77,"td"),p._uU(78,"true"),p.qZA(),p.qZA(),p.TgZ(79,"tr"),p.TgZ(80,"td"),p._uU(81,"height"),p.qZA(),p.TgZ(82,"td"),p._uU(83,"Height of panel in px"),p.qZA(),p.TgZ(84,"td"),p._uU(85,"number"),p.qZA(),p._UZ(86,"td"),p.qZA(),p.TgZ(87,"tr"),p.TgZ(88,"td"),p._uU(89,"disabled"),p.qZA(),p.TgZ(90,"td"),p._uU(91,"Set panel to disabled mode"),p.qZA(),p.TgZ(92,"td"),p._uU(93,"boolean"),p.qZA(),p.TgZ(94,"td"),p._uU(95,"false"),p.qZA(),p.qZA(),p.TgZ(96,"tr"),p.TgZ(97,"td"),p._uU(98,"iconCss"),p.qZA(),p.TgZ(99,"td"),p._uU(100,"Set CSS for icon like 'fa fa-home'"),p.qZA(),p.TgZ(101,"td"),p._uU(102,"string"),p.qZA(),p._UZ(103,"td"),p.qZA(),p.TgZ(104,"tr"),p.TgZ(105,"td"),p._uU(106,"styleClass"),p.qZA(),p.TgZ(107,"td"),p._uU(108,"Set extra class on component"),p.qZA(),p.TgZ(109,"td"),p._uU(110,"string"),p.qZA(),p._UZ(111,"td"),p.qZA(),p.TgZ(112,"tr"),p.TgZ(113,"td"),p._uU(114,"inputId"),p.qZA(),p.TgZ(115,"td"),p._uU(116,"Set id attribute"),p.qZA(),p.TgZ(117,"td"),p._uU(118,"string"),p.qZA(),p._UZ(119,"td"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(120,"np-card"),p.TgZ(121,"np-card-body"),p.TgZ(122,"table",3),p.TgZ(123,"tr"),p.TgZ(124,"th"),p._uU(125,"Method"),p.qZA(),p.TgZ(126,"th"),p._uU(127,"Description"),p.qZA(),p.TgZ(128,"th"),p._uU(129,"Parameters"),p.qZA(),p.qZA(),p.TgZ(130,"tr"),p.TgZ(131,"td"),p._uU(132,"onExpand()"),p.qZA(),p.TgZ(133,"td"),p._uU(134,"Callback on expanding panel."),p.qZA(),p._UZ(135,"td"),p.qZA(),p.TgZ(136,"tr"),p.TgZ(137,"td"),p._uU(138,"onCollapse()"),p.qZA(),p.TgZ(139,"td"),p._uU(140,"Callback on collapsing panel."),p.qZA(),p._UZ(141,"td"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(142,"np-tab",4),p.TgZ(143,"div",5),p.TgZ(144,"div",6),p.TgZ(145,"div",7),p.TgZ(146,"np-panel",8),p.TgZ(147,"p"),p._uU(148," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.qZA(),p.qZA(),p.TgZ(149,"div",7),p.TgZ(150,"np-panel",9),p.YNc(151,l,2,0,"ng-template",10),p.qZA(),p.qZA(),p.TgZ(152,"div",11),p.TgZ(153,"np-panel",12),p.TgZ(154,"p"),p._uU(155," A first paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(156,"p"),p._uU(157," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(158,"p"),p._uU(159," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(160,"p"),p._uU(161," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(162,"p"),p._uU(163," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(164,"p"),p._uU(165," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(166,"p"),p._uU(167," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(168,"p"),p._uU(169," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(170,"p"),p._uU(171," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(172,"p"),p._uU(173," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(174,"p"),p._uU(175," A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.TgZ(176,"p"),p._uU(177," A last paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument. "),p.qZA(),p.qZA(),p.qZA(),p.TgZ(178,"div",11),p.TgZ(179,"button",13),p.NdJ("click",function(){return a.togglePanel2Disabled()}),p._uU(180," Toggle panel 2 disabled "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e&&(p.xp6(10),p.Q6J("innerText",a.importText),p.xp6(7),p.Q6J("innerText",a.htmlText),p.xp6(5),p.Q6J("innerText",a.lazyLoadText),p.xp6(124),p.Q6J("title",a.title),p.xp6(4),p.Q6J("title",a.title)("allowToMinimize",!0)("allowToZoom",!0)("allowToClose",!0)("iconCss","fa fa-home")("styleClass","np-pn-success")("disabled",a.pnl2Disabled),p.xp6(3),p.Q6J("title",a.title)("allowToMinimize",!0)("allowToZoom",!0)("allowToClose",!0)("styleClass","np-pn-danger")("height",200))},directives:[s.KA,s.Qk,s.c0,s.El,s.Aw,s.qx],encapsulation:2}),d)}],u=function(){var a=function a(){e(this,a)};return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=p.oAB({type:a}),a.\u0275inj=p.cJS({imports:[[i.Bz.forChild(Z)],i.Bz]}),a}(),c=((g=function a(){e(this,a)}).\u0275fac=function(e){return new(e||g)},g.\u0275mod=p.oAB({type:g}),g.\u0275inj=p.cJS({imports:[[o.ez,u,s.Mq,s.Tk,s.i7]]}),g)}}])}();