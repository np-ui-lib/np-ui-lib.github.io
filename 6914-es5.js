!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[6914],{6914:function(n,l,i){"use strict";i.r(l),i.d(l,{NpTreeViewDemoModule:function(){return I}});var a=i(1116),d=i(4387),Z=i(9883),o=i(7368),s=i(1462),c=["treeview"],m=["treeview2"],r=["treeview3"];function u(e,t){if(1&e&&o._uU(0),2&e){var n=t.item;o.AsE(" (",n.data.index,") ",n.label," ")}}var T,g,A=[{path:"",component:(T=function(){function n(){e(this,n),this.importText="import { NpTreeViewModule } from 'np-ui-lib';",this.htmlText='<np-tree-view [items]="items">\n</np-tree-view>',this.modelText="items: NpTreeViewItem[] = [\n  new NpTreeViewItem({\n    label: 'Item 1',\n    id: 'Item 1',\n    childItems: [\n      new NpTreeViewItem({\n        label: 'Item 1.1', id: 'Item 1.1', childItems: [\n          new NpTreeViewItem({ label: 'Item 1.1.1', id: 'Item 1.1.1' }),\n          new NpTreeViewItem({ label: 'Item 1.1.2', id: 'Item 1.1.2' }),\n          new NpTreeViewItem({ label: 'Item 1.1.3', id: 'Item 1.1.3' }),\n          new NpTreeViewItem({ label: 'Item 1.1.4', id: 'Item 1.1.4' }),\n        ]\n      })\n    ]\n  }),\n  ...\n];",this.itemTemplateText='<ng-template #itemTemplate let-item="item">\n  {{item.label}}, {{item.key}}\n</ng-template>',this.items=[new Z.JJ({label:"Item 1",iconCss:"fa fa-folder",childItems:[new Z.JJ({label:"Item 1.1",iconCss:"fa fa-folder",childItems:[new Z.JJ({label:"Item 1.1.1",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 1.1.2",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 1.1.3",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 1.1.4",iconCss:"fa fa-file"})]}),new Z.JJ({label:"Item 1.2",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 1.3",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 1.4",iconCss:"fa fa-file"})]}),new Z.JJ({label:"Item 2",iconCss:"fa fa-folder",childItems:[new Z.JJ({label:"Item 2.1",iconCss:"fa fa-folder",childItems:[new Z.JJ({label:"Item 2.1.1",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 2.1.2",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 2.1.3",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 2.1.4",iconCss:"fa fa-file"})]}),new Z.JJ({label:"Item 2.2",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 2.3",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 2.4",iconCss:"fa fa-file"})]}),new Z.JJ({label:"Item 3",iconCss:"fa fa-folder",childItems:[]}),new Z.JJ({label:"Item 4",iconCss:"fa fa-file"}),new Z.JJ({label:"Item 5",iconCss:"fa fa-file"})],this.items2=[new Z.JJ({label:"Item 1",id:"Item 1",data:{index:"1"},childItems:[new Z.JJ({label:"Item 1.1",id:"Item 1.1",data:{index:"1.1"},childItems:[new Z.JJ({label:"Item 1.1.1",id:"Item 1.1.1",data:{index:"1.1.1"}}),new Z.JJ({label:"Item 1.1.2",id:"Item 1.1.2",data:{index:"1.1.2"}}),new Z.JJ({label:"Item 1.1.3",id:"Item 1.1.3",data:{index:"1.1.3"}}),new Z.JJ({label:"Item 1.1.4",id:"Item 1.1.4",data:{index:"1.1.4"}})]}),new Z.JJ({label:"Item 1.2",id:"Item 1.2",data:{index:"1.2"}}),new Z.JJ({label:"Item 1.3",id:"Item 1.3",data:{index:"1.3"}}),new Z.JJ({label:"Item 1.4",id:"Item 1.4",data:{index:"1.4"}})]}),new Z.JJ({label:"Item 2",id:"Item 2",data:{index:"2"},childItems:[new Z.JJ({label:"Item 2.1",id:"Item 2.1",data:{index:"2.1"},childItems:[new Z.JJ({label:"Item 2.1.1",id:"Item 2.1.1",data:{index:"2.2.1"}}),new Z.JJ({label:"Item 2.1.2",id:"Item 2.1.2",data:{index:"2.2.2"}}),new Z.JJ({label:"Item 2.1.3",id:"Item 2.1.3",data:{index:"2.2.3"}}),new Z.JJ({label:"Item 2.1.4",id:"Item 2.1.4",data:{index:"2.2.4"}})]}),new Z.JJ({label:"Item 2.2",id:"Item 2.2",data:{index:"2.2"}}),new Z.JJ({label:"Item 2.3",id:"Item 2.3",data:{index:"2.3"}}),new Z.JJ({label:"Item 2.4",id:"Item 2.4",data:{index:"2.4"}})]}),new Z.JJ({label:"Item 3",id:"Item 3",data:{index:"3"},childItems:[]}),new Z.JJ({label:"Item 4",id:"Item 4",data:{index:"4"}}),new Z.JJ({label:"Item 5",id:"Item 5",data:{index:"5"}})],this.items3=[new Z.JJ({label:"Item 1",id:"Item 1",data:{index:"1"},childItems:[new Z.JJ({label:"Item 1.1",id:"Item 1.1",data:{index:"1.1"},childItems:[new Z.JJ({label:"Item 1.1.1",id:"Item 1.1.1",data:{index:"1.1.1"}}),new Z.JJ({label:"Item 1.1.2",id:"Item 1.1.2",data:{index:"1.1.2"}}),new Z.JJ({label:"Item 1.1.3",id:"Item 1.1.3",data:{index:"1.1.3"}}),new Z.JJ({label:"Item 1.1.4",id:"Item 1.1.4",data:{index:"1.1.4"}})]}),new Z.JJ({label:"Item 1.2",id:"Item 1.2",data:{index:"1.2"}}),new Z.JJ({label:"Item 1.3",id:"Item 1.3",data:{index:"1.3"}}),new Z.JJ({label:"Item 1.4",id:"Item 1.4",data:{index:"1.4"}})]}),new Z.JJ({label:"Item 2",id:"Item 2",data:{index:"2"},childItems:[new Z.JJ({label:"Item 2.1",id:"Item 2.1",data:{index:"2.1"},childItems:[new Z.JJ({label:"Item 2.1.1",id:"Item 2.1.1",data:{index:"2.2.1"}}),new Z.JJ({label:"Item 2.1.2",id:"Item 2.1.2",data:{index:"2.2.2"}}),new Z.JJ({label:"Item 2.1.3",id:"Item 2.1.3",data:{index:"2.2.3"}}),new Z.JJ({label:"Item 2.1.4",id:"Item 2.1.4",data:{index:"2.2.4"}})]}),new Z.JJ({label:"Item 2.2",id:"Item 2.2",data:{index:"2.2"}}),new Z.JJ({label:"Item 2.3",id:"Item 2.3",data:{index:"2.3"}}),new Z.JJ({label:"Item 2.4",id:"Item 2.4",data:{index:"2.4"}})]}),new Z.JJ({label:"Item 3",id:"Item 3",data:{index:"3"},childItems:[]}),new Z.JJ({label:"Item 4",id:"Item 4",data:{index:"4"}}),new Z.JJ({label:"Item 5",id:"Item 5",data:{index:"5"}})],this.selection3=[{label:"Item 4",id:"Item 4",data:{index:"4"}},{label:"Item 1.1.1",id:"Item 1.1.1",data:{index:"1.1.1"}}],this.isCascadeSelection=!1}var l,i,a;return l=n,(i=[{key:"ngOnInit",value:function(){}},{key:"setAllExpand",value:function(){this.treeview.expandAll()}},{key:"setAllCollapse",value:function(){this.treeview.collapseAll()}},{key:"onClick",value:function(e){alert(e.label)}},{key:"onExpand",value:function(e){console.log(e.label+" is expanded.")}},{key:"onCollapse",value:function(e){console.log(e.label+" is collapsed.")}},{key:"onExpandAll",value:function(e){console.log("All are expanded.")}},{key:"onCollapseAll",value:function(e){console.log("All are collapsed.")}},{key:"onSelect",value:function(e){console.log("Node selected.")}},{key:"onDeselect",value:function(e){console.log("Node deselected.")}},{key:"selectAll",value:function(){this.treeview3.selectAll()}},{key:"deselectAll",value:function(){this.treeview3.deselectAll()}}])&&t(l.prototype,i),a&&t(l,a),n}(),T.\u0275fac=function(e){return new(e||T)},T.\u0275cmp=o.Xpm({type:T,selectors:[["app-np-tree-view-demo"]],viewQuery:function(e,t){var n;1&e&&(o.Gf(c,7),o.Gf(m,7),o.Gf(r,7)),2&e&&(o.iGM(n=o.CRH())&&(t.treeview=n.first),o.iGM(n=o.CRH())&&(t.treeview2=n.first),o.iGM(n=o.CRH())&&(t.treeview3=n.first))},decls:286,vars:20,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],[1,"np-text-danger"],["title","Examples"],[3,"items","onClick","onExpand","onCollapse","onExpandAll","onCollapseAll"],["treeview",""],[1,"np-btn-group"],[1,"np-btn",3,"click"],[3,"items","selection","selectionMode","selectionChange","onSelect","onDeselect"],["treeview2",""],[3,"items","itemTemplate","selection","selectionMode","cascadeSelection","selectionChange"],["treeview3",""],[3,"ngModel","ngModelChange"],["itemTemplate",""]],template:function(e,t){if(1&e&&(o.TgZ(0,"h2",0),o._uU(1,"Tree View"),o.qZA(),o.TgZ(2,"np-tabs"),o.TgZ(3,"np-tab",1),o.TgZ(4,"np-card"),o.TgZ(5,"np-card-body"),o.TgZ(6,"b"),o._uU(7,"Module to import"),o.qZA(),o.TgZ(8,"div"),o.TgZ(9,"pre"),o._UZ(10,"code",2),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"np-card"),o.TgZ(12,"np-card-body"),o.TgZ(13,"b"),o._uU(14,"HTML"),o.qZA(),o.TgZ(15,"div"),o.TgZ(16,"pre"),o._UZ(17,"code",2),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(18,"np-card"),o.TgZ(19,"np-card-body"),o.TgZ(20,"table",3),o.TgZ(21,"tr"),o.TgZ(22,"th"),o._uU(23,"Property"),o.qZA(),o.TgZ(24,"th"),o._uU(25,"Description"),o.qZA(),o.TgZ(26,"th"),o._uU(27,"Type"),o.qZA(),o.TgZ(28,"th"),o._uU(29,"Default"),o.qZA(),o.qZA(),o.TgZ(30,"tr"),o.TgZ(31,"td"),o._uU(32,"items"),o.qZA(),o.TgZ(33,"td"),o._uU(34,"Array of data in hierarchical structure"),o.qZA(),o.TgZ(35,"td"),o._uU(36,"NpTreeViewItem[]"),o.qZA(),o._UZ(37,"td"),o.qZA(),o.TgZ(38,"tr"),o.TgZ(39,"td"),o._uU(40,"selectionMode"),o.qZA(),o.TgZ(41,"td"),o._uU(42,"Set selection mode as 'single' or 'multiple'"),o.qZA(),o.TgZ(43,"td"),o._uU(44,"string"),o.qZA(),o._UZ(45,"td"),o.qZA(),o.TgZ(46,"tr"),o.TgZ(47,"td"),o._uU(48,"itemTemplate"),o.qZA(),o.TgZ(49,"td"),o._uU(50," Set template for each item "),o.TgZ(51,"pre"),o._UZ(52,"code",2),o.qZA(),o.qZA(),o.TgZ(53,"td"),o._uU(54,"TemplateRef<any>"),o.qZA(),o._UZ(55,"td"),o.qZA(),o.TgZ(56,"tr"),o.TgZ(57,"td"),o._uU(58,"selection"),o.qZA(),o.TgZ(59,"td"),o._uU(60,"Get/Set selected nodes"),o.qZA(),o.TgZ(61,"td"),o._uU(62,"NpTreeViewItem[]"),o.qZA(),o._UZ(63,"td"),o.qZA(),o.TgZ(64,"tr"),o.TgZ(65,"td"),o._uU(66,"cascadeSelection"),o.qZA(),o.TgZ(67,"td"),o._uU(68," If set true then, select/deselect descendant nodes when users select items "),o.qZA(),o.TgZ(69,"td"),o._uU(70,"boolean"),o.qZA(),o.TgZ(71,"td"),o._uU(72,"false"),o.qZA(),o.qZA(),o.TgZ(73,"tr"),o.TgZ(74,"td"),o._uU(75,"styleClass"),o.qZA(),o.TgZ(76,"td"),o._uU(77,"Set extra class on component"),o.qZA(),o.TgZ(78,"td"),o._uU(79,"string"),o.qZA(),o._UZ(80,"td"),o.qZA(),o.TgZ(81,"tr"),o.TgZ(82,"td"),o._uU(83,"inputId"),o.qZA(),o.TgZ(84,"td"),o._uU(85,"Set id attribute"),o.qZA(),o.TgZ(86,"td"),o._uU(87,"string"),o.qZA(),o._UZ(88,"td"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(89,"np-card"),o.TgZ(90,"np-card-body"),o.TgZ(91,"table",3),o.TgZ(92,"tr"),o.TgZ(93,"th"),o._uU(94,"Method"),o.qZA(),o.TgZ(95,"th"),o._uU(96,"Description"),o.qZA(),o.TgZ(97,"th"),o._uU(98,"Parameters"),o.qZA(),o.qZA(),o.TgZ(99,"tr"),o.TgZ(100,"td"),o._uU(101,"onClick(NpTreeViewItem : node)"),o.qZA(),o.TgZ(102,"td"),o._uU(103,"Callback to click event on node"),o.qZA(),o.TgZ(104,"td"),o._uU(105,"NpTreeViewItem : node"),o.qZA(),o.qZA(),o.TgZ(106,"tr"),o.TgZ(107,"td"),o._uU(108,"onExpand(NpTreeViewItem : node)"),o.qZA(),o.TgZ(109,"td"),o._uU(110,"Callback when expanding node"),o.qZA(),o.TgZ(111,"td"),o._uU(112,"NpTreeViewItem : node"),o.qZA(),o.qZA(),o.TgZ(113,"tr"),o.TgZ(114,"td"),o._uU(115,"onCollapse(NpTreeViewItem : node)"),o.qZA(),o.TgZ(116,"td"),o._uU(117,"Callback when collapsing node"),o.qZA(),o.TgZ(118,"td"),o._uU(119,"NpTreeViewItem : node"),o.qZA(),o.qZA(),o.TgZ(120,"tr"),o.TgZ(121,"td"),o._uU(122,"onExpandAll()"),o.qZA(),o.TgZ(123,"td"),o._uU(124,"Callback when expanding all node"),o.qZA(),o._UZ(125,"td"),o.qZA(),o.TgZ(126,"tr"),o.TgZ(127,"td"),o._uU(128,"onCollapseAll()"),o.qZA(),o.TgZ(129,"td"),o._uU(130,"Callback when collapsing all node"),o.qZA(),o._UZ(131,"td"),o.qZA(),o.TgZ(132,"tr"),o.TgZ(133,"td"),o._uU(134,"onSelect(NpTreeViewItem : node)"),o.qZA(),o.TgZ(135,"td"),o._uU(136,"Callback when selecting node"),o.qZA(),o.TgZ(137,"td"),o._uU(138,"NpTreeViewItem : node"),o.qZA(),o.qZA(),o.TgZ(139,"tr"),o.TgZ(140,"td"),o._uU(141,"onDeselect(NpTreeViewItem : node)"),o.qZA(),o.TgZ(142,"td"),o._uU(143,"Callback when deselecting node"),o.qZA(),o.TgZ(144,"td"),o._uU(145,"NpTreeViewItem : node"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(146,"np-card"),o.TgZ(147,"np-card-body"),o.TgZ(148,"table",3),o.TgZ(149,"tr"),o.TgZ(150,"th"),o._uU(151,"Api"),o.qZA(),o.TgZ(152,"th"),o._uU(153,"Description"),o.qZA(),o.TgZ(154,"th"),o._uU(155,"Parameters"),o.qZA(),o.qZA(),o.TgZ(156,"tr"),o.TgZ(157,"td"),o._uU(158,"expandAll()"),o.qZA(),o.TgZ(159,"td"),o._uU(160,"Expand all nodes"),o.qZA(),o._UZ(161,"td"),o.qZA(),o.TgZ(162,"tr"),o.TgZ(163,"td"),o._uU(164,"collapseAll()"),o.qZA(),o.TgZ(165,"td"),o._uU(166,"Collapse all nodes"),o.qZA(),o._UZ(167,"td"),o.qZA(),o.TgZ(168,"tr"),o.TgZ(169,"td"),o._uU(170,"selectAll()"),o.qZA(),o.TgZ(171,"td"),o._uU(172,"Select all nodes"),o.qZA(),o._UZ(173,"td"),o.qZA(),o.TgZ(174,"tr"),o.TgZ(175,"td"),o._uU(176,"deselectAll()"),o.qZA(),o.TgZ(177,"td"),o._uU(178,"Deselect all nodes"),o.qZA(),o._UZ(179,"td"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(180,"np-card"),o.TgZ(181,"np-card-body"),o.TgZ(182,"b"),o._uU(183,"NpTreeViewItem"),o.qZA(),o.TgZ(184,"pre"),o.TgZ(185,"code"),o._uU(186),o.qZA(),o.qZA(),o.TgZ(187,"table",3),o.TgZ(188,"tr"),o.TgZ(189,"th"),o._uU(190,"Property"),o.qZA(),o.TgZ(191,"th"),o._uU(192,"Description"),o.qZA(),o.TgZ(193,"th"),o._uU(194,"Type"),o.qZA(),o.TgZ(195,"th"),o._uU(196,"Default"),o.qZA(),o.qZA(),o.TgZ(197,"tr"),o.TgZ(198,"td"),o._uU(199,"label"),o.qZA(),o.TgZ(200,"td"),o._uU(201,"Label to display"),o.qZA(),o.TgZ(202,"td"),o._uU(203,"string"),o.qZA(),o._UZ(204,"td"),o.qZA(),o.TgZ(205,"tr"),o.TgZ(206,"td"),o._uU(207,"id"),o.qZA(),o.TgZ(208,"td"),o._uU(209," Unique id for object identification in selection, "),o._UZ(210,"br"),o.TgZ(211,"span",4),o._uU(212," id must be defined for selection. "),o.qZA(),o.qZA(),o.TgZ(213,"td"),o._uU(214,"any"),o.qZA(),o._UZ(215,"td"),o.qZA(),o.TgZ(216,"tr"),o.TgZ(217,"td"),o._uU(218,"iconCss"),o.qZA(),o.TgZ(219,"td"),o._uU(220,"Set Class name for icon like 'fa fa-file'"),o.qZA(),o.TgZ(221,"td"),o._uU(222,"string"),o.qZA(),o._UZ(223,"td"),o.qZA(),o.TgZ(224,"tr"),o.TgZ(225,"td"),o._uU(226,"childItems"),o.qZA(),o.TgZ(227,"td"),o._uU(228,"Child nodes"),o.qZA(),o.TgZ(229,"td"),o._uU(230,"NpTreeViewItem[]"),o.qZA(),o._UZ(231,"td"),o.qZA(),o.TgZ(232,"tr"),o.TgZ(233,"td"),o._uU(234,"isExpanded"),o.qZA(),o.TgZ(235,"td"),o._uU(236,"Set expanded on load time"),o.qZA(),o.TgZ(237,"td"),o._uU(238,"boolean"),o.qZA(),o.TgZ(239,"td"),o._uU(240,"false"),o.qZA(),o.qZA(),o.TgZ(241,"tr"),o.TgZ(242,"td"),o._uU(243,"data"),o.qZA(),o.TgZ(244,"td"),o._uU(245,"Set data"),o.qZA(),o.TgZ(246,"td"),o._uU(247,"any"),o.qZA(),o._UZ(248,"td"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(249,"np-tab",5),o.TgZ(250,"fieldset"),o.TgZ(251,"legend"),o._uU(252,"Treeview basic"),o.qZA(),o.TgZ(253,"np-tree-view",6,7),o.NdJ("onClick",function(e){return t.onClick(e)})("onExpand",function(e){return t.onExpand(e)})("onCollapse",function(e){return t.onCollapse(e)})("onExpandAll",function(e){return t.onExpandAll(e)})("onCollapseAll",function(e){return t.onCollapseAll(e)}),o.qZA(),o.TgZ(255,"div",8),o.TgZ(256,"button",9),o.NdJ("click",function(){return t.setAllExpand()}),o._uU(257,"Expand All"),o.qZA(),o.TgZ(258,"button",9),o.NdJ("click",function(){return t.setAllCollapse()}),o._uU(259,"Collapse All"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(260,"fieldset"),o.TgZ(261,"legend"),o._uU(262,"Treeview single selection"),o.qZA(),o.TgZ(263,"np-tree-view",10,11),o.NdJ("selectionChange",function(e){return t.selection2=e})("onSelect",function(e){return t.onSelect(e)})("onDeselect",function(e){return t.onDeselect(e)}),o.qZA(),o.TgZ(265,"div"),o._uU(266),o.ALo(267,"json"),o.qZA(),o.qZA(),o.TgZ(268,"fieldset"),o.TgZ(269,"legend"),o._uU(270,"Treeview multiple selection with template"),o.qZA(),o.TgZ(271,"np-tree-view",12,13),o.NdJ("selectionChange",function(e){return t.selection3=e}),o.qZA(),o.TgZ(273,"div"),o._uU(274),o.ALo(275,"json"),o.qZA(),o.TgZ(276,"div",8),o.TgZ(277,"button",9),o.NdJ("click",function(){return t.selectAll()}),o._uU(278,"Select All"),o.qZA(),o.TgZ(279,"button",9),o.NdJ("click",function(){return t.deselectAll()}),o._uU(280,"Deselect All"),o.qZA(),o.qZA(),o.TgZ(281,"div"),o._uU(282," cascadeSelection: "),o.TgZ(283,"np-switch",14),o.NdJ("ngModelChange",function(e){return t.isCascadeSelection=e}),o.qZA(),o.qZA(),o.YNc(284,u,1,2,"ng-template",null,15,o.W1O),o.qZA(),o.qZA(),o.qZA()),2&e){var n=o.MAs(285);o.xp6(10),o.Q6J("innerText",t.importText),o.xp6(7),o.Q6J("innerText",t.htmlText),o.xp6(35),o.Q6J("innerText",t.itemTemplateText),o.xp6(134),o.Oqu(t.modelText),o.xp6(67),o.Q6J("items",t.items),o.xp6(10),o.Q6J("items",t.items2)("selection",t.selection2)("selectionMode","single"),o.xp6(3),o.hij("Selected value : ",o.lcZ(267,16,t.selection2),""),o.xp6(5),o.Q6J("items",t.items3)("itemTemplate",n)("selection",t.selection3)("selectionMode","multiple")("cascadeSelection",t.isCascadeSelection),o.xp6(3),o.hij("Selected value : ",o.lcZ(275,18,t.selection3),""),o.xp6(9),o.Q6J("ngModel",t.isCascadeSelection)}},directives:[Z.KA,Z.Qk,Z.c0,Z.El,Z.JP,Z.Mc,s.JJ,s.On],pipes:[a.Ts],encapsulation:2}),T)}],p=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[d.Bz.forChild(A)],d.Bz]}),t}(),I=((g=function t(){e(this,t)}).\u0275fac=function(e){return new(e||g)},g.\u0275mod=o.oAB({type:g}),g.\u0275inj=o.cJS({imports:[[a.ez,s.u5,p,Z.n8,Z.i7,Z.Tk,Z.kH]]}),g)}}])}();