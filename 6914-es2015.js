(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[6914],{6914:function(e,t,l){"use strict";l.r(t),l.d(t,{NpTreeViewDemoModule:function(){return g}});var n=l(1116),i=l(4387),d=l(9883),a=l(7368),Z=l(1462);const o=["treeview"],s=["treeview2"],c=["treeview3"];function m(e,t){if(1&e&&a._uU(0),2&e){const e=t.item;a.AsE(" (",e.data.index,") ",e.label," ")}}const T=[{path:"",component:(()=>{class e{constructor(){this.importText="import { NpTreeViewModule } from 'np-ui-lib';",this.htmlText='<np-tree-view [items]="items">\n</np-tree-view>',this.modelText="items: NpTreeViewItem[] = [\n  new NpTreeViewItem({\n    label: 'Item 1',\n    id: 'Item 1',\n    childItems: [\n      new NpTreeViewItem({\n        label: 'Item 1.1', id: 'Item 1.1', childItems: [\n          new NpTreeViewItem({ label: 'Item 1.1.1', id: 'Item 1.1.1' }),\n          new NpTreeViewItem({ label: 'Item 1.1.2', id: 'Item 1.1.2' }),\n          new NpTreeViewItem({ label: 'Item 1.1.3', id: 'Item 1.1.3' }),\n          new NpTreeViewItem({ label: 'Item 1.1.4', id: 'Item 1.1.4' }),\n        ]\n      })\n    ]\n  }),\n  ...\n];",this.itemTemplateText='<ng-template #itemTemplate let-item="item">\n  {{item.label}}, {{item.key}}\n</ng-template>',this.items=[new d.JJ({label:"Item 1",iconCss:"fa fa-folder",childItems:[new d.JJ({label:"Item 1.1",iconCss:"fa fa-folder",childItems:[new d.JJ({label:"Item 1.1.1",iconCss:"fa fa-file"}),new d.JJ({label:"Item 1.1.2",iconCss:"fa fa-file"}),new d.JJ({label:"Item 1.1.3",iconCss:"fa fa-file"}),new d.JJ({label:"Item 1.1.4",iconCss:"fa fa-file"})]}),new d.JJ({label:"Item 1.2",iconCss:"fa fa-file"}),new d.JJ({label:"Item 1.3",iconCss:"fa fa-file"}),new d.JJ({label:"Item 1.4",iconCss:"fa fa-file"})]}),new d.JJ({label:"Item 2",iconCss:"fa fa-folder",childItems:[new d.JJ({label:"Item 2.1",iconCss:"fa fa-folder",childItems:[new d.JJ({label:"Item 2.1.1",iconCss:"fa fa-file"}),new d.JJ({label:"Item 2.1.2",iconCss:"fa fa-file"}),new d.JJ({label:"Item 2.1.3",iconCss:"fa fa-file"}),new d.JJ({label:"Item 2.1.4",iconCss:"fa fa-file"})]}),new d.JJ({label:"Item 2.2",iconCss:"fa fa-file"}),new d.JJ({label:"Item 2.3",iconCss:"fa fa-file"}),new d.JJ({label:"Item 2.4",iconCss:"fa fa-file"})]}),new d.JJ({label:"Item 3",iconCss:"fa fa-folder",childItems:[]}),new d.JJ({label:"Item 4",iconCss:"fa fa-file"}),new d.JJ({label:"Item 5",iconCss:"fa fa-file"})],this.items2=[new d.JJ({label:"Item 1",id:"Item 1",data:{index:"1"},childItems:[new d.JJ({label:"Item 1.1",id:"Item 1.1",data:{index:"1.1"},childItems:[new d.JJ({label:"Item 1.1.1",id:"Item 1.1.1",data:{index:"1.1.1"}}),new d.JJ({label:"Item 1.1.2",id:"Item 1.1.2",data:{index:"1.1.2"}}),new d.JJ({label:"Item 1.1.3",id:"Item 1.1.3",data:{index:"1.1.3"}}),new d.JJ({label:"Item 1.1.4",id:"Item 1.1.4",data:{index:"1.1.4"}})]}),new d.JJ({label:"Item 1.2",id:"Item 1.2",data:{index:"1.2"}}),new d.JJ({label:"Item 1.3",id:"Item 1.3",data:{index:"1.3"}}),new d.JJ({label:"Item 1.4",id:"Item 1.4",data:{index:"1.4"}})]}),new d.JJ({label:"Item 2",id:"Item 2",data:{index:"2"},childItems:[new d.JJ({label:"Item 2.1",id:"Item 2.1",data:{index:"2.1"},childItems:[new d.JJ({label:"Item 2.1.1",id:"Item 2.1.1",data:{index:"2.2.1"}}),new d.JJ({label:"Item 2.1.2",id:"Item 2.1.2",data:{index:"2.2.2"}}),new d.JJ({label:"Item 2.1.3",id:"Item 2.1.3",data:{index:"2.2.3"}}),new d.JJ({label:"Item 2.1.4",id:"Item 2.1.4",data:{index:"2.2.4"}})]}),new d.JJ({label:"Item 2.2",id:"Item 2.2",data:{index:"2.2"}}),new d.JJ({label:"Item 2.3",id:"Item 2.3",data:{index:"2.3"}}),new d.JJ({label:"Item 2.4",id:"Item 2.4",data:{index:"2.4"}})]}),new d.JJ({label:"Item 3",id:"Item 3",data:{index:"3"},childItems:[]}),new d.JJ({label:"Item 4",id:"Item 4",data:{index:"4"}}),new d.JJ({label:"Item 5",id:"Item 5",data:{index:"5"}})],this.items3=[new d.JJ({label:"Item 1",id:"Item 1",data:{index:"1"},childItems:[new d.JJ({label:"Item 1.1",id:"Item 1.1",data:{index:"1.1"},childItems:[new d.JJ({label:"Item 1.1.1",id:"Item 1.1.1",data:{index:"1.1.1"}}),new d.JJ({label:"Item 1.1.2",id:"Item 1.1.2",data:{index:"1.1.2"}}),new d.JJ({label:"Item 1.1.3",id:"Item 1.1.3",data:{index:"1.1.3"}}),new d.JJ({label:"Item 1.1.4",id:"Item 1.1.4",data:{index:"1.1.4"}})]}),new d.JJ({label:"Item 1.2",id:"Item 1.2",data:{index:"1.2"}}),new d.JJ({label:"Item 1.3",id:"Item 1.3",data:{index:"1.3"}}),new d.JJ({label:"Item 1.4",id:"Item 1.4",data:{index:"1.4"}})]}),new d.JJ({label:"Item 2",id:"Item 2",data:{index:"2"},childItems:[new d.JJ({label:"Item 2.1",id:"Item 2.1",data:{index:"2.1"},childItems:[new d.JJ({label:"Item 2.1.1",id:"Item 2.1.1",data:{index:"2.2.1"}}),new d.JJ({label:"Item 2.1.2",id:"Item 2.1.2",data:{index:"2.2.2"}}),new d.JJ({label:"Item 2.1.3",id:"Item 2.1.3",data:{index:"2.2.3"}}),new d.JJ({label:"Item 2.1.4",id:"Item 2.1.4",data:{index:"2.2.4"}})]}),new d.JJ({label:"Item 2.2",id:"Item 2.2",data:{index:"2.2"}}),new d.JJ({label:"Item 2.3",id:"Item 2.3",data:{index:"2.3"}}),new d.JJ({label:"Item 2.4",id:"Item 2.4",data:{index:"2.4"}})]}),new d.JJ({label:"Item 3",id:"Item 3",data:{index:"3"},childItems:[]}),new d.JJ({label:"Item 4",id:"Item 4",data:{index:"4"}}),new d.JJ({label:"Item 5",id:"Item 5",data:{index:"5"}})],this.selection3=[{label:"Item 4",id:"Item 4",data:{index:"4"}},{label:"Item 1.1.1",id:"Item 1.1.1",data:{index:"1.1.1"}}],this.isCascadeSelection=!1}ngOnInit(){}setAllExpand(){this.treeview.expandAll()}setAllCollapse(){this.treeview.collapseAll()}onClick(e){alert(e.label)}onExpand(e){console.log(e.label+" is expanded.")}onCollapse(e){console.log(e.label+" is collapsed.")}onExpandAll(e){console.log("All are expanded.")}onCollapseAll(e){console.log("All are collapsed.")}onSelect(e){console.log("Node selected.")}onDeselect(e){console.log("Node deselected.")}selectAll(){this.treeview3.selectAll()}deselectAll(){this.treeview3.deselectAll()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-np-tree-view-demo"]],viewQuery:function(e,t){if(1&e&&(a.Gf(o,7),a.Gf(s,7),a.Gf(c,7)),2&e){let e;a.iGM(e=a.CRH())&&(t.treeview=e.first),a.iGM(e=a.CRH())&&(t.treeview2=e.first),a.iGM(e=a.CRH())&&(t.treeview3=e.first)}},decls:286,vars:20,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],[1,"np-text-danger"],["title","Examples"],[3,"items","onClick","onExpand","onCollapse","onExpandAll","onCollapseAll"],["treeview",""],[1,"np-btn-group"],[1,"np-btn",3,"click"],[3,"items","selection","selectionMode","selectionChange","onSelect","onDeselect"],["treeview2",""],[3,"items","itemTemplate","selection","selectionMode","cascadeSelection","selectionChange"],["treeview3",""],[3,"ngModel","ngModelChange"],["itemTemplate",""]],template:function(e,t){if(1&e&&(a.TgZ(0,"h2",0),a._uU(1,"Tree View"),a.qZA(),a.TgZ(2,"np-tabs"),a.TgZ(3,"np-tab",1),a.TgZ(4,"np-card"),a.TgZ(5,"np-card-body"),a.TgZ(6,"b"),a._uU(7,"Module to import"),a.qZA(),a.TgZ(8,"div"),a.TgZ(9,"pre"),a._UZ(10,"code",2),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"np-card"),a.TgZ(12,"np-card-body"),a.TgZ(13,"b"),a._uU(14,"HTML"),a.qZA(),a.TgZ(15,"div"),a.TgZ(16,"pre"),a._UZ(17,"code",2),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(18,"np-card"),a.TgZ(19,"np-card-body"),a.TgZ(20,"table",3),a.TgZ(21,"tr"),a.TgZ(22,"th"),a._uU(23,"Property"),a.qZA(),a.TgZ(24,"th"),a._uU(25,"Description"),a.qZA(),a.TgZ(26,"th"),a._uU(27,"Type"),a.qZA(),a.TgZ(28,"th"),a._uU(29,"Default"),a.qZA(),a.qZA(),a.TgZ(30,"tr"),a.TgZ(31,"td"),a._uU(32,"items"),a.qZA(),a.TgZ(33,"td"),a._uU(34,"Array of data in hierarchical structure"),a.qZA(),a.TgZ(35,"td"),a._uU(36,"NpTreeViewItem[]"),a.qZA(),a._UZ(37,"td"),a.qZA(),a.TgZ(38,"tr"),a.TgZ(39,"td"),a._uU(40,"selectionMode"),a.qZA(),a.TgZ(41,"td"),a._uU(42,"Set selection mode as 'single' or 'multiple'"),a.qZA(),a.TgZ(43,"td"),a._uU(44,"string"),a.qZA(),a._UZ(45,"td"),a.qZA(),a.TgZ(46,"tr"),a.TgZ(47,"td"),a._uU(48,"itemTemplate"),a.qZA(),a.TgZ(49,"td"),a._uU(50," Set template for each item "),a.TgZ(51,"pre"),a._UZ(52,"code",2),a.qZA(),a.qZA(),a.TgZ(53,"td"),a._uU(54,"TemplateRef<any>"),a.qZA(),a._UZ(55,"td"),a.qZA(),a.TgZ(56,"tr"),a.TgZ(57,"td"),a._uU(58,"selection"),a.qZA(),a.TgZ(59,"td"),a._uU(60,"Get/Set selected nodes"),a.qZA(),a.TgZ(61,"td"),a._uU(62,"NpTreeViewItem[]"),a.qZA(),a._UZ(63,"td"),a.qZA(),a.TgZ(64,"tr"),a.TgZ(65,"td"),a._uU(66,"cascadeSelection"),a.qZA(),a.TgZ(67,"td"),a._uU(68," If set true then, select/deselect descendant nodes when users select items "),a.qZA(),a.TgZ(69,"td"),a._uU(70,"boolean"),a.qZA(),a.TgZ(71,"td"),a._uU(72,"false"),a.qZA(),a.qZA(),a.TgZ(73,"tr"),a.TgZ(74,"td"),a._uU(75,"styleClass"),a.qZA(),a.TgZ(76,"td"),a._uU(77,"Set extra class on component"),a.qZA(),a.TgZ(78,"td"),a._uU(79,"string"),a.qZA(),a._UZ(80,"td"),a.qZA(),a.TgZ(81,"tr"),a.TgZ(82,"td"),a._uU(83,"inputId"),a.qZA(),a.TgZ(84,"td"),a._uU(85,"Set id attribute"),a.qZA(),a.TgZ(86,"td"),a._uU(87,"string"),a.qZA(),a._UZ(88,"td"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(89,"np-card"),a.TgZ(90,"np-card-body"),a.TgZ(91,"table",3),a.TgZ(92,"tr"),a.TgZ(93,"th"),a._uU(94,"Method"),a.qZA(),a.TgZ(95,"th"),a._uU(96,"Description"),a.qZA(),a.TgZ(97,"th"),a._uU(98,"Parameters"),a.qZA(),a.qZA(),a.TgZ(99,"tr"),a.TgZ(100,"td"),a._uU(101,"onClick(NpTreeViewItem : node)"),a.qZA(),a.TgZ(102,"td"),a._uU(103,"Callback to click event on node"),a.qZA(),a.TgZ(104,"td"),a._uU(105,"NpTreeViewItem : node"),a.qZA(),a.qZA(),a.TgZ(106,"tr"),a.TgZ(107,"td"),a._uU(108,"onExpand(NpTreeViewItem : node)"),a.qZA(),a.TgZ(109,"td"),a._uU(110,"Callback when expanding node"),a.qZA(),a.TgZ(111,"td"),a._uU(112,"NpTreeViewItem : node"),a.qZA(),a.qZA(),a.TgZ(113,"tr"),a.TgZ(114,"td"),a._uU(115,"onCollapse(NpTreeViewItem : node)"),a.qZA(),a.TgZ(116,"td"),a._uU(117,"Callback when collapsing node"),a.qZA(),a.TgZ(118,"td"),a._uU(119,"NpTreeViewItem : node"),a.qZA(),a.qZA(),a.TgZ(120,"tr"),a.TgZ(121,"td"),a._uU(122,"onExpandAll()"),a.qZA(),a.TgZ(123,"td"),a._uU(124,"Callback when expanding all node"),a.qZA(),a._UZ(125,"td"),a.qZA(),a.TgZ(126,"tr"),a.TgZ(127,"td"),a._uU(128,"onCollapseAll()"),a.qZA(),a.TgZ(129,"td"),a._uU(130,"Callback when collapsing all node"),a.qZA(),a._UZ(131,"td"),a.qZA(),a.TgZ(132,"tr"),a.TgZ(133,"td"),a._uU(134,"onSelect(NpTreeViewItem : node)"),a.qZA(),a.TgZ(135,"td"),a._uU(136,"Callback when selecting node"),a.qZA(),a.TgZ(137,"td"),a._uU(138,"NpTreeViewItem : node"),a.qZA(),a.qZA(),a.TgZ(139,"tr"),a.TgZ(140,"td"),a._uU(141,"onDeselect(NpTreeViewItem : node)"),a.qZA(),a.TgZ(142,"td"),a._uU(143,"Callback when deselecting node"),a.qZA(),a.TgZ(144,"td"),a._uU(145,"NpTreeViewItem : node"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(146,"np-card"),a.TgZ(147,"np-card-body"),a.TgZ(148,"table",3),a.TgZ(149,"tr"),a.TgZ(150,"th"),a._uU(151,"Api"),a.qZA(),a.TgZ(152,"th"),a._uU(153,"Description"),a.qZA(),a.TgZ(154,"th"),a._uU(155,"Parameters"),a.qZA(),a.qZA(),a.TgZ(156,"tr"),a.TgZ(157,"td"),a._uU(158,"expandAll()"),a.qZA(),a.TgZ(159,"td"),a._uU(160,"Expand all nodes"),a.qZA(),a._UZ(161,"td"),a.qZA(),a.TgZ(162,"tr"),a.TgZ(163,"td"),a._uU(164,"collapseAll()"),a.qZA(),a.TgZ(165,"td"),a._uU(166,"Collapse all nodes"),a.qZA(),a._UZ(167,"td"),a.qZA(),a.TgZ(168,"tr"),a.TgZ(169,"td"),a._uU(170,"selectAll()"),a.qZA(),a.TgZ(171,"td"),a._uU(172,"Select all nodes"),a.qZA(),a._UZ(173,"td"),a.qZA(),a.TgZ(174,"tr"),a.TgZ(175,"td"),a._uU(176,"deselectAll()"),a.qZA(),a.TgZ(177,"td"),a._uU(178,"Deselect all nodes"),a.qZA(),a._UZ(179,"td"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(180,"np-card"),a.TgZ(181,"np-card-body"),a.TgZ(182,"b"),a._uU(183,"NpTreeViewItem"),a.qZA(),a.TgZ(184,"pre"),a.TgZ(185,"code"),a._uU(186),a.qZA(),a.qZA(),a.TgZ(187,"table",3),a.TgZ(188,"tr"),a.TgZ(189,"th"),a._uU(190,"Property"),a.qZA(),a.TgZ(191,"th"),a._uU(192,"Description"),a.qZA(),a.TgZ(193,"th"),a._uU(194,"Type"),a.qZA(),a.TgZ(195,"th"),a._uU(196,"Default"),a.qZA(),a.qZA(),a.TgZ(197,"tr"),a.TgZ(198,"td"),a._uU(199,"label"),a.qZA(),a.TgZ(200,"td"),a._uU(201,"Label to display"),a.qZA(),a.TgZ(202,"td"),a._uU(203,"string"),a.qZA(),a._UZ(204,"td"),a.qZA(),a.TgZ(205,"tr"),a.TgZ(206,"td"),a._uU(207,"id"),a.qZA(),a.TgZ(208,"td"),a._uU(209," Unique id for object identification in selection, "),a._UZ(210,"br"),a.TgZ(211,"span",4),a._uU(212," id must be defined for selection. "),a.qZA(),a.qZA(),a.TgZ(213,"td"),a._uU(214,"any"),a.qZA(),a._UZ(215,"td"),a.qZA(),a.TgZ(216,"tr"),a.TgZ(217,"td"),a._uU(218,"iconCss"),a.qZA(),a.TgZ(219,"td"),a._uU(220,"Set Class name for icon like 'fa fa-file'"),a.qZA(),a.TgZ(221,"td"),a._uU(222,"string"),a.qZA(),a._UZ(223,"td"),a.qZA(),a.TgZ(224,"tr"),a.TgZ(225,"td"),a._uU(226,"childItems"),a.qZA(),a.TgZ(227,"td"),a._uU(228,"Child nodes"),a.qZA(),a.TgZ(229,"td"),a._uU(230,"NpTreeViewItem[]"),a.qZA(),a._UZ(231,"td"),a.qZA(),a.TgZ(232,"tr"),a.TgZ(233,"td"),a._uU(234,"isExpanded"),a.qZA(),a.TgZ(235,"td"),a._uU(236,"Set expanded on load time"),a.qZA(),a.TgZ(237,"td"),a._uU(238,"boolean"),a.qZA(),a.TgZ(239,"td"),a._uU(240,"false"),a.qZA(),a.qZA(),a.TgZ(241,"tr"),a.TgZ(242,"td"),a._uU(243,"data"),a.qZA(),a.TgZ(244,"td"),a._uU(245,"Set data"),a.qZA(),a.TgZ(246,"td"),a._uU(247,"any"),a.qZA(),a._UZ(248,"td"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(249,"np-tab",5),a.TgZ(250,"fieldset"),a.TgZ(251,"legend"),a._uU(252,"Treeview basic"),a.qZA(),a.TgZ(253,"np-tree-view",6,7),a.NdJ("onClick",function(e){return t.onClick(e)})("onExpand",function(e){return t.onExpand(e)})("onCollapse",function(e){return t.onCollapse(e)})("onExpandAll",function(e){return t.onExpandAll(e)})("onCollapseAll",function(e){return t.onCollapseAll(e)}),a.qZA(),a.TgZ(255,"div",8),a.TgZ(256,"button",9),a.NdJ("click",function(){return t.setAllExpand()}),a._uU(257,"Expand All"),a.qZA(),a.TgZ(258,"button",9),a.NdJ("click",function(){return t.setAllCollapse()}),a._uU(259,"Collapse All"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(260,"fieldset"),a.TgZ(261,"legend"),a._uU(262,"Treeview single selection"),a.qZA(),a.TgZ(263,"np-tree-view",10,11),a.NdJ("selectionChange",function(e){return t.selection2=e})("onSelect",function(e){return t.onSelect(e)})("onDeselect",function(e){return t.onDeselect(e)}),a.qZA(),a.TgZ(265,"div"),a._uU(266),a.ALo(267,"json"),a.qZA(),a.qZA(),a.TgZ(268,"fieldset"),a.TgZ(269,"legend"),a._uU(270,"Treeview multiple selection with template"),a.qZA(),a.TgZ(271,"np-tree-view",12,13),a.NdJ("selectionChange",function(e){return t.selection3=e}),a.qZA(),a.TgZ(273,"div"),a._uU(274),a.ALo(275,"json"),a.qZA(),a.TgZ(276,"div",8),a.TgZ(277,"button",9),a.NdJ("click",function(){return t.selectAll()}),a._uU(278,"Select All"),a.qZA(),a.TgZ(279,"button",9),a.NdJ("click",function(){return t.deselectAll()}),a._uU(280,"Deselect All"),a.qZA(),a.qZA(),a.TgZ(281,"div"),a._uU(282," cascadeSelection: "),a.TgZ(283,"np-switch",14),a.NdJ("ngModelChange",function(e){return t.isCascadeSelection=e}),a.qZA(),a.qZA(),a.YNc(284,m,1,2,"ng-template",null,15,a.W1O),a.qZA(),a.qZA(),a.qZA()),2&e){const e=a.MAs(285);a.xp6(10),a.Q6J("innerText",t.importText),a.xp6(7),a.Q6J("innerText",t.htmlText),a.xp6(35),a.Q6J("innerText",t.itemTemplateText),a.xp6(134),a.Oqu(t.modelText),a.xp6(67),a.Q6J("items",t.items),a.xp6(10),a.Q6J("items",t.items2)("selection",t.selection2)("selectionMode","single"),a.xp6(3),a.hij("Selected value : ",a.lcZ(267,16,t.selection2),""),a.xp6(5),a.Q6J("items",t.items3)("itemTemplate",e)("selection",t.selection3)("selectionMode","multiple")("cascadeSelection",t.isCascadeSelection),a.xp6(3),a.hij("Selected value : ",a.lcZ(275,18,t.selection3),""),a.xp6(9),a.Q6J("ngModel",t.isCascadeSelection)}},directives:[d.KA,d.Qk,d.c0,d.El,d.JP,d.Mc,Z.JJ,Z.On],pipes:[n.Ts],encapsulation:2}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.Bz.forChild(T)],i.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.ez,Z.u5,A,d.n8,d.i7,d.Tk,d.kH]]}),e})()}}]);