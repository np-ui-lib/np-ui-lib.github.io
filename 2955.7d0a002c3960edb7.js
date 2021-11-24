"use strict";(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[2955],{2955:(w,s,Z)=>{Z.r(s),Z.d(s,{NpTreeViewDemoModule:()=>I});var T=Z(6019),r=Z(782),t=Z(8419),e=Z(3668),m=Z(7537);const p=["treeview"],c=["treeview2"],g=["treeview3"];function A(i,o){if(1&i&&e._uU(0),2&i){const n=o.item;e.AsE(" (",n.data.index,") ",n.label," ")}}const _=[{path:"",component:(()=>{class i{constructor(){this.importText="import { NpTreeViewModule } from 'np-ui-lib';",this.htmlText='<np-tree-view [items]="items">\n</np-tree-view>',this.modelText="items: NpTreeViewItem[] = [\n  new NpTreeViewItem({\n    label: 'Item 1',\n    id: 'Item 1',\n    childItems: [\n      new NpTreeViewItem({\n        label: 'Item 1.1', id: 'Item 1.1', childItems: [\n          new NpTreeViewItem({ label: 'Item 1.1.1', id: 'Item 1.1.1' }),\n          new NpTreeViewItem({ label: 'Item 1.1.2', id: 'Item 1.1.2' }),\n          new NpTreeViewItem({ label: 'Item 1.1.3', id: 'Item 1.1.3' }),\n          new NpTreeViewItem({ label: 'Item 1.1.4', id: 'Item 1.1.4' }),\n        ]\n      })\n    ]\n  }),\n  ...\n];",this.itemTemplateText='<ng-template #itemTemplate let-item="item">\n  {{item.label}}, {{item.key}}\n</ng-template>',this.items=[new t.JJ({label:"Item 1",iconCss:"fa fa-folder",childItems:[new t.JJ({label:"Item 1.1",iconCss:"fa fa-folder",childItems:[new t.JJ({label:"Item 1.1.1",iconCss:"fa fa-file"}),new t.JJ({label:"Item 1.1.2",iconCss:"fa fa-file"}),new t.JJ({label:"Item 1.1.3",iconCss:"fa fa-file"}),new t.JJ({label:"Item 1.1.4",iconCss:"fa fa-file"})]}),new t.JJ({label:"Item 1.2",iconCss:"fa fa-file"}),new t.JJ({label:"Item 1.3",iconCss:"fa fa-file"}),new t.JJ({label:"Item 1.4",iconCss:"fa fa-file"})]}),new t.JJ({label:"Item 2",iconCss:"fa fa-folder",childItems:[new t.JJ({label:"Item 2.1",iconCss:"fa fa-folder",childItems:[new t.JJ({label:"Item 2.1.1",iconCss:"fa fa-file"}),new t.JJ({label:"Item 2.1.2",iconCss:"fa fa-file"}),new t.JJ({label:"Item 2.1.3",iconCss:"fa fa-file"}),new t.JJ({label:"Item 2.1.4",iconCss:"fa fa-file"})]}),new t.JJ({label:"Item 2.2",iconCss:"fa fa-file"}),new t.JJ({label:"Item 2.3",iconCss:"fa fa-file"}),new t.JJ({label:"Item 2.4",iconCss:"fa fa-file"})]}),new t.JJ({label:"Item 3",iconCss:"fa fa-folder",childItems:[]}),new t.JJ({label:"Item 4",iconCss:"fa fa-file"}),new t.JJ({label:"Item 5",iconCss:"fa fa-file"})],this.items2=[new t.JJ({label:"Item 1",id:"Item 1",data:{index:"1"},childItems:[new t.JJ({label:"Item 1.1",id:"Item 1.1",data:{index:"1.1"},childItems:[new t.JJ({label:"Item 1.1.1",id:"Item 1.1.1",data:{index:"1.1.1"}}),new t.JJ({label:"Item 1.1.2",id:"Item 1.1.2",data:{index:"1.1.2"}}),new t.JJ({label:"Item 1.1.3",id:"Item 1.1.3",data:{index:"1.1.3"}}),new t.JJ({label:"Item 1.1.4",id:"Item 1.1.4",data:{index:"1.1.4"}})]}),new t.JJ({label:"Item 1.2",id:"Item 1.2",data:{index:"1.2"}}),new t.JJ({label:"Item 1.3",id:"Item 1.3",data:{index:"1.3"}}),new t.JJ({label:"Item 1.4",id:"Item 1.4",data:{index:"1.4"}})]}),new t.JJ({label:"Item 2",id:"Item 2",data:{index:"2"},childItems:[new t.JJ({label:"Item 2.1",id:"Item 2.1",data:{index:"2.1"},childItems:[new t.JJ({label:"Item 2.1.1",id:"Item 2.1.1",data:{index:"2.2.1"}}),new t.JJ({label:"Item 2.1.2",id:"Item 2.1.2",data:{index:"2.2.2"}}),new t.JJ({label:"Item 2.1.3",id:"Item 2.1.3",data:{index:"2.2.3"}}),new t.JJ({label:"Item 2.1.4",id:"Item 2.1.4",data:{index:"2.2.4"}})]}),new t.JJ({label:"Item 2.2",id:"Item 2.2",data:{index:"2.2"}}),new t.JJ({label:"Item 2.3",id:"Item 2.3",data:{index:"2.3"}}),new t.JJ({label:"Item 2.4",id:"Item 2.4",data:{index:"2.4"}})]}),new t.JJ({label:"Item 3",id:"Item 3",data:{index:"3"},childItems:[]}),new t.JJ({label:"Item 4",id:"Item 4",data:{index:"4"}}),new t.JJ({label:"Item 5",id:"Item 5",data:{index:"5"}})],this.items3=[new t.JJ({label:"Item 1",id:"Item 1",data:{index:"1"},childItems:[new t.JJ({label:"Item 1.1",id:"Item 1.1",data:{index:"1.1"},childItems:[new t.JJ({label:"Item 1.1.1",id:"Item 1.1.1",data:{index:"1.1.1"}}),new t.JJ({label:"Item 1.1.2",id:"Item 1.1.2",data:{index:"1.1.2"}}),new t.JJ({label:"Item 1.1.3",id:"Item 1.1.3",data:{index:"1.1.3"}}),new t.JJ({label:"Item 1.1.4",id:"Item 1.1.4",data:{index:"1.1.4"}})]}),new t.JJ({label:"Item 1.2",id:"Item 1.2",data:{index:"1.2"}}),new t.JJ({label:"Item 1.3",id:"Item 1.3",data:{index:"1.3"}}),new t.JJ({label:"Item 1.4",id:"Item 1.4",data:{index:"1.4"}})]}),new t.JJ({label:"Item 2",id:"Item 2",data:{index:"2"},childItems:[new t.JJ({label:"Item 2.1",id:"Item 2.1",data:{index:"2.1"},childItems:[new t.JJ({label:"Item 2.1.1",id:"Item 2.1.1",data:{index:"2.2.1"}}),new t.JJ({label:"Item 2.1.2",id:"Item 2.1.2",data:{index:"2.2.2"}}),new t.JJ({label:"Item 2.1.3",id:"Item 2.1.3",data:{index:"2.2.3"}}),new t.JJ({label:"Item 2.1.4",id:"Item 2.1.4",data:{index:"2.2.4"}})]}),new t.JJ({label:"Item 2.2",id:"Item 2.2",data:{index:"2.2"}}),new t.JJ({label:"Item 2.3",id:"Item 2.3",data:{index:"2.3"}}),new t.JJ({label:"Item 2.4",id:"Item 2.4",data:{index:"2.4"}})]}),new t.JJ({label:"Item 3",id:"Item 3",data:{index:"3"},childItems:[]}),new t.JJ({label:"Item 4",id:"Item 4",data:{index:"4"}}),new t.JJ({label:"Item 5",id:"Item 5",data:{index:"5"}})],this.selection3=[{label:"Item 4",id:"Item 4",data:{index:"4"}},{label:"Item 1.1.1",id:"Item 1.1.1",data:{index:"1.1.1"}}],this.isCascadeSelection=!1}ngOnInit(){}setAllExpand(){this.treeview.expandAll()}setAllCollapse(){this.treeview.collapseAll()}onClick(n){alert(n.label)}onExpand(n){console.log(n.label+" is expanded.")}onCollapse(n){console.log(n.label+" is collapsed.")}onExpandAll(n){console.log("All are expanded.")}onCollapseAll(n){console.log("All are collapsed.")}onSelect(n){console.log("Node selected.")}onDeselect(n){console.log("Node deselected.")}selectAll(){this.treeview3.selectAll()}deselectAll(){this.treeview3.deselectAll()}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-np-tree-view-demo"]],viewQuery:function(n,l){if(1&n&&(e.Gf(p,7),e.Gf(c,7),e.Gf(g,7)),2&n){let a;e.iGM(a=e.CRH())&&(l.treeview=a.first),e.iGM(a=e.CRH())&&(l.treeview2=a.first),e.iGM(a=e.CRH())&&(l.treeview3=a.first)}},decls:286,vars:20,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],[1,"np-text-danger"],["title","Examples"],[3,"items","onClick","onExpand","onCollapse","onExpandAll","onCollapseAll"],["treeview",""],[1,"np-btn-group"],[1,"np-btn",3,"click"],[3,"items","selection","selectionMode","selectionChange","onSelect","onDeselect"],["treeview2",""],[3,"items","itemTemplate","selection","selectionMode","cascadeSelection","selectionChange"],["treeview3",""],[3,"ngModel","ngModelChange"],["itemTemplate",""]],template:function(n,l){if(1&n&&(e.TgZ(0,"h2",0),e._uU(1,"Tree View"),e.qZA(),e.TgZ(2,"np-tabs"),e.TgZ(3,"np-tab",1),e.TgZ(4,"np-card"),e.TgZ(5,"np-card-body"),e.TgZ(6,"b"),e._uU(7,"Module to import"),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"pre"),e._UZ(10,"code",2),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"np-card"),e.TgZ(12,"np-card-body"),e.TgZ(13,"b"),e._uU(14,"HTML"),e.qZA(),e.TgZ(15,"div"),e.TgZ(16,"pre"),e._UZ(17,"code",2),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"np-card"),e.TgZ(19,"np-card-body"),e.TgZ(20,"table",3),e.TgZ(21,"tr"),e.TgZ(22,"th"),e._uU(23,"Property"),e.qZA(),e.TgZ(24,"th"),e._uU(25,"Description"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Type"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Default"),e.qZA(),e.qZA(),e.TgZ(30,"tr"),e.TgZ(31,"td"),e._uU(32,"items"),e.qZA(),e.TgZ(33,"td"),e._uU(34,"Array of data in hierarchical structure"),e.qZA(),e.TgZ(35,"td"),e._uU(36,"NpTreeViewItem[]"),e.qZA(),e._UZ(37,"td"),e.qZA(),e.TgZ(38,"tr"),e.TgZ(39,"td"),e._uU(40,"selectionMode"),e.qZA(),e.TgZ(41,"td"),e._uU(42,"Set selection mode as 'single' or 'multiple'"),e.qZA(),e.TgZ(43,"td"),e._uU(44,"string"),e.qZA(),e._UZ(45,"td"),e.qZA(),e.TgZ(46,"tr"),e.TgZ(47,"td"),e._uU(48,"itemTemplate"),e.qZA(),e.TgZ(49,"td"),e._uU(50," Set template for each item "),e.TgZ(51,"pre"),e._UZ(52,"code",2),e.qZA(),e.qZA(),e.TgZ(53,"td"),e._uU(54,"TemplateRef<any>"),e.qZA(),e._UZ(55,"td"),e.qZA(),e.TgZ(56,"tr"),e.TgZ(57,"td"),e._uU(58,"selection"),e.qZA(),e.TgZ(59,"td"),e._uU(60,"Get/Set selected nodes"),e.qZA(),e.TgZ(61,"td"),e._uU(62,"NpTreeViewItem[]"),e.qZA(),e._UZ(63,"td"),e.qZA(),e.TgZ(64,"tr"),e.TgZ(65,"td"),e._uU(66,"cascadeSelection"),e.qZA(),e.TgZ(67,"td"),e._uU(68," If set true then, select/deselect descendant nodes when users select items "),e.qZA(),e.TgZ(69,"td"),e._uU(70,"boolean"),e.qZA(),e.TgZ(71,"td"),e._uU(72,"false"),e.qZA(),e.qZA(),e.TgZ(73,"tr"),e.TgZ(74,"td"),e._uU(75,"styleClass"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"Set extra class on component"),e.qZA(),e.TgZ(78,"td"),e._uU(79,"string"),e.qZA(),e._UZ(80,"td"),e.qZA(),e.TgZ(81,"tr"),e.TgZ(82,"td"),e._uU(83,"inputId"),e.qZA(),e.TgZ(84,"td"),e._uU(85,"Set id attribute"),e.qZA(),e.TgZ(86,"td"),e._uU(87,"string"),e.qZA(),e._UZ(88,"td"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(89,"np-card"),e.TgZ(90,"np-card-body"),e.TgZ(91,"table",3),e.TgZ(92,"tr"),e.TgZ(93,"th"),e._uU(94,"Method"),e.qZA(),e.TgZ(95,"th"),e._uU(96,"Description"),e.qZA(),e.TgZ(97,"th"),e._uU(98,"Parameters"),e.qZA(),e.qZA(),e.TgZ(99,"tr"),e.TgZ(100,"td"),e._uU(101,"onClick(NpTreeViewItem : node)"),e.qZA(),e.TgZ(102,"td"),e._uU(103,"Callback to click event on node"),e.qZA(),e.TgZ(104,"td"),e._uU(105,"NpTreeViewItem : node"),e.qZA(),e.qZA(),e.TgZ(106,"tr"),e.TgZ(107,"td"),e._uU(108,"onExpand(NpTreeViewItem : node)"),e.qZA(),e.TgZ(109,"td"),e._uU(110,"Callback when expanding node"),e.qZA(),e.TgZ(111,"td"),e._uU(112,"NpTreeViewItem : node"),e.qZA(),e.qZA(),e.TgZ(113,"tr"),e.TgZ(114,"td"),e._uU(115,"onCollapse(NpTreeViewItem : node)"),e.qZA(),e.TgZ(116,"td"),e._uU(117,"Callback when collapsing node"),e.qZA(),e.TgZ(118,"td"),e._uU(119,"NpTreeViewItem : node"),e.qZA(),e.qZA(),e.TgZ(120,"tr"),e.TgZ(121,"td"),e._uU(122,"onExpandAll()"),e.qZA(),e.TgZ(123,"td"),e._uU(124,"Callback when expanding all node"),e.qZA(),e._UZ(125,"td"),e.qZA(),e.TgZ(126,"tr"),e.TgZ(127,"td"),e._uU(128,"onCollapseAll()"),e.qZA(),e.TgZ(129,"td"),e._uU(130,"Callback when collapsing all node"),e.qZA(),e._UZ(131,"td"),e.qZA(),e.TgZ(132,"tr"),e.TgZ(133,"td"),e._uU(134,"onSelect(NpTreeViewItem : node)"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"Callback when selecting node"),e.qZA(),e.TgZ(137,"td"),e._uU(138,"NpTreeViewItem : node"),e.qZA(),e.qZA(),e.TgZ(139,"tr"),e.TgZ(140,"td"),e._uU(141,"onDeselect(NpTreeViewItem : node)"),e.qZA(),e.TgZ(142,"td"),e._uU(143,"Callback when deselecting node"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"NpTreeViewItem : node"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(146,"np-card"),e.TgZ(147,"np-card-body"),e.TgZ(148,"table",3),e.TgZ(149,"tr"),e.TgZ(150,"th"),e._uU(151,"Api"),e.qZA(),e.TgZ(152,"th"),e._uU(153,"Description"),e.qZA(),e.TgZ(154,"th"),e._uU(155,"Parameters"),e.qZA(),e.qZA(),e.TgZ(156,"tr"),e.TgZ(157,"td"),e._uU(158,"expandAll()"),e.qZA(),e.TgZ(159,"td"),e._uU(160,"Expand all nodes"),e.qZA(),e._UZ(161,"td"),e.qZA(),e.TgZ(162,"tr"),e.TgZ(163,"td"),e._uU(164,"collapseAll()"),e.qZA(),e.TgZ(165,"td"),e._uU(166,"Collapse all nodes"),e.qZA(),e._UZ(167,"td"),e.qZA(),e.TgZ(168,"tr"),e.TgZ(169,"td"),e._uU(170,"selectAll()"),e.qZA(),e.TgZ(171,"td"),e._uU(172,"Select all nodes"),e.qZA(),e._UZ(173,"td"),e.qZA(),e.TgZ(174,"tr"),e.TgZ(175,"td"),e._uU(176,"deselectAll()"),e.qZA(),e.TgZ(177,"td"),e._uU(178,"Deselect all nodes"),e.qZA(),e._UZ(179,"td"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(180,"np-card"),e.TgZ(181,"np-card-body"),e.TgZ(182,"b"),e._uU(183,"NpTreeViewItem"),e.qZA(),e.TgZ(184,"pre"),e.TgZ(185,"code"),e._uU(186),e.qZA(),e.qZA(),e.TgZ(187,"table",3),e.TgZ(188,"tr"),e.TgZ(189,"th"),e._uU(190,"Property"),e.qZA(),e.TgZ(191,"th"),e._uU(192,"Description"),e.qZA(),e.TgZ(193,"th"),e._uU(194,"Type"),e.qZA(),e.TgZ(195,"th"),e._uU(196,"Default"),e.qZA(),e.qZA(),e.TgZ(197,"tr"),e.TgZ(198,"td"),e._uU(199,"label"),e.qZA(),e.TgZ(200,"td"),e._uU(201,"Label to display"),e.qZA(),e.TgZ(202,"td"),e._uU(203,"string"),e.qZA(),e._UZ(204,"td"),e.qZA(),e.TgZ(205,"tr"),e.TgZ(206,"td"),e._uU(207,"id"),e.qZA(),e.TgZ(208,"td"),e._uU(209," Unique id for object identification in selection, "),e._UZ(210,"br"),e.TgZ(211,"span",4),e._uU(212," id must be defined for selection. "),e.qZA(),e.qZA(),e.TgZ(213,"td"),e._uU(214,"any"),e.qZA(),e._UZ(215,"td"),e.qZA(),e.TgZ(216,"tr"),e.TgZ(217,"td"),e._uU(218,"iconCss"),e.qZA(),e.TgZ(219,"td"),e._uU(220,"Set Class name for icon like 'fa fa-file'"),e.qZA(),e.TgZ(221,"td"),e._uU(222,"string"),e.qZA(),e._UZ(223,"td"),e.qZA(),e.TgZ(224,"tr"),e.TgZ(225,"td"),e._uU(226,"childItems"),e.qZA(),e.TgZ(227,"td"),e._uU(228,"Child nodes"),e.qZA(),e.TgZ(229,"td"),e._uU(230,"NpTreeViewItem[]"),e.qZA(),e._UZ(231,"td"),e.qZA(),e.TgZ(232,"tr"),e.TgZ(233,"td"),e._uU(234,"isExpanded"),e.qZA(),e.TgZ(235,"td"),e._uU(236,"Set expanded on load time"),e.qZA(),e.TgZ(237,"td"),e._uU(238,"boolean"),e.qZA(),e.TgZ(239,"td"),e._uU(240,"false"),e.qZA(),e.qZA(),e.TgZ(241,"tr"),e.TgZ(242,"td"),e._uU(243,"data"),e.qZA(),e.TgZ(244,"td"),e._uU(245,"Set data"),e.qZA(),e.TgZ(246,"td"),e._uU(247,"any"),e.qZA(),e._UZ(248,"td"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(249,"np-tab",5),e.TgZ(250,"fieldset"),e.TgZ(251,"legend"),e._uU(252,"Treeview basic"),e.qZA(),e.TgZ(253,"np-tree-view",6,7),e.NdJ("onClick",function(d){return l.onClick(d)})("onExpand",function(d){return l.onExpand(d)})("onCollapse",function(d){return l.onCollapse(d)})("onExpandAll",function(d){return l.onExpandAll(d)})("onCollapseAll",function(d){return l.onCollapseAll(d)}),e.qZA(),e.TgZ(255,"div",8),e.TgZ(256,"button",9),e.NdJ("click",function(){return l.setAllExpand()}),e._uU(257,"Expand All"),e.qZA(),e.TgZ(258,"button",9),e.NdJ("click",function(){return l.setAllCollapse()}),e._uU(259,"Collapse All"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(260,"fieldset"),e.TgZ(261,"legend"),e._uU(262,"Treeview single selection"),e.qZA(),e.TgZ(263,"np-tree-view",10,11),e.NdJ("selectionChange",function(d){return l.selection2=d})("onSelect",function(d){return l.onSelect(d)})("onDeselect",function(d){return l.onDeselect(d)}),e.qZA(),e.TgZ(265,"div"),e._uU(266),e.ALo(267,"json"),e.qZA(),e.qZA(),e.TgZ(268,"fieldset"),e.TgZ(269,"legend"),e._uU(270,"Treeview multiple selection with template"),e.qZA(),e.TgZ(271,"np-tree-view",12,13),e.NdJ("selectionChange",function(d){return l.selection3=d}),e.qZA(),e.TgZ(273,"div"),e._uU(274),e.ALo(275,"json"),e.qZA(),e.TgZ(276,"div",8),e.TgZ(277,"button",9),e.NdJ("click",function(){return l.selectAll()}),e._uU(278,"Select All"),e.qZA(),e.TgZ(279,"button",9),e.NdJ("click",function(){return l.deselectAll()}),e._uU(280,"Deselect All"),e.qZA(),e.qZA(),e.TgZ(281,"div"),e._uU(282," cascadeSelection: "),e.TgZ(283,"np-switch",14),e.NdJ("ngModelChange",function(d){return l.isCascadeSelection=d}),e.qZA(),e.qZA(),e.YNc(284,A,1,2,"ng-template",null,15,e.W1O),e.qZA(),e.qZA(),e.qZA()),2&n){const a=e.MAs(285);e.xp6(10),e.Q6J("innerText",l.importText),e.xp6(7),e.Q6J("innerText",l.htmlText),e.xp6(35),e.Q6J("innerText",l.itemTemplateText),e.xp6(134),e.Oqu(l.modelText),e.xp6(67),e.Q6J("items",l.items),e.xp6(10),e.Q6J("items",l.items2)("selection",l.selection2)("selectionMode","single"),e.xp6(3),e.hij("Selected value : ",e.lcZ(267,16,l.selection2),""),e.xp6(5),e.Q6J("items",l.items3)("itemTemplate",a)("selection",l.selection3)("selectionMode","multiple")("cascadeSelection",l.isCascadeSelection),e.xp6(3),e.hij("Selected value : ",e.lcZ(275,18,l.selection3),""),e.xp6(9),e.Q6J("ngModel",l.isCascadeSelection)}},directives:[t.KA,t.Qk,t.c0,t.El,t.JP,t.Mc,m.JJ,m.On],pipes:[T.Ts],encapsulation:2}),i})()}];let u=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[r.Bz.forChild(_)],r.Bz]}),i})(),I=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[T.ez,m.u5,u,t.n8,t.i7,t.Tk,t.kH]]}),i})()}}]);