"use strict";(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[2392],{2392:(_,Z,n)=>{n.r(Z),n.d(Z,{NpVirtualScrollDemoModule:()=>T});var u=n(6019),p=n(782),t=n(3668),a=n(8419);const s=["virtualScroll"];function c(o,r){1&o&&t._uU(0),2&o&&t.hij(" ",r.item," ")}function g(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"fieldset"),t.TgZ(1,"legend"),t._uU(2,"Basic"),t.qZA(),t.TgZ(3,"np-virtual-scroll",6,7),t.NdJ("loadData",function(i){return t.CHM(e),t.oxw().loadData(i)}),t.qZA(),t.YNc(5,c,1,1,"ng-template",null,8,t.W1O),t.TgZ(7,"div",9),t.TgZ(8,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().scrollTo11Item()}),t._uU(9," Go to 11th Item "),t.qZA(),t.TgZ(10,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().scrollOffsetDown()}),t._uU(11," Scroll offset 1000px down "),t.qZA(),t.TgZ(12,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().scrollOffsetUp()}),t._uU(13," Scroll offset 1000px up "),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.MAs(6),l=t.oxw();t.xp6(3),t.Q6J("items",l.data)("pageSize",l.pageSize)("itemHeight",50)("template",e)}}const d=[{path:"",component:(()=>{class o{constructor(){this.importText="import { NpVirtualScrollModule } from 'np-ui-lib';",this.htmlText='<np-virtual-scroll [items]="data" [pageSize]="pageSize" [itemHeight]="50" \n  [template]="itemTemplate" (loadData)="loadData($event)">\n</np-virtual-scroll>\n\n<ng-template #itemTemplate let-item="item">\n  {{item}}\n</ng-template>',this.loadDataText='this.allData = Array.from({ length: 1000 }).map((_, i) => "Item "+ (i+1));\nthis.data = Array.from<string>({ length: 1000 });\n\nloadData(event) {\n  setTimeout(() => {\n    const fetchedData = this.allData.slice(event.first, (event.first + event.rows));\n    Array.prototype.splice.apply(this.data, [...[event.first, event.rows], ...fetchedData]);\n    this.data = [...this.data];\n  }, 2000);\n}',this.pageSize=5,this.allData=Array.from({length:1e3}).map((e,l)=>`Item #${l+1}`),this.data=Array.from({length:1e3})}ngOnInit(){}loadData(e){setTimeout(()=>{const l=this.allData.slice(e.first,e.first+e.rows);Array.prototype.splice.apply(this.data,[e.first,e.rows,...l]),this.data=[...this.data]},2e3)}scrollTo11Item(){this.virtualScroll.scrollToIndex(10)}scrollOffsetDown(){this.virtualScroll.scrollToOffset(1e3)}scrollOffsetUp(){this.virtualScroll.scrollToOffset(-1e3)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-np-virtual-scroll-demo"]],viewQuery:function(e,l){if(1&e&&t.Gf(s,5),2&e){let i;t.iGM(i=t.CRH())&&(l.virtualScroll=i.first)}},decls:140,vars:3,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["title","Examples"],["npTabContent",""],["header","New Products",3,"items","pageSize","itemHeight","template","loadData"],["virtualScroll",""],["itemTemplate",""],[1,"np-btn-group"],["type","button",1,"np-btn",3,"click"]],template:function(e,l){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Virtual Scroll"),t.qZA(),t.TgZ(2,"np-tabs"),t.TgZ(3,"np-tab",1),t.TgZ(4,"np-card"),t.TgZ(5,"np-card-body"),t.TgZ(6,"b"),t._uU(7,"Module to import"),t.qZA(),t.TgZ(8,"div"),t.TgZ(9,"pre"),t._UZ(10,"code",2),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"np-card"),t.TgZ(12,"np-card-body"),t.TgZ(13,"b"),t._uU(14,"HTML"),t.qZA(),t.TgZ(15,"div"),t.TgZ(16,"pre"),t._UZ(17,"code",2),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"np-card"),t.TgZ(19,"np-card-body"),t.TgZ(20,"table",3),t.TgZ(21,"tr"),t.TgZ(22,"th"),t._uU(23,"Property"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Description"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Type"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Default"),t.qZA(),t.qZA(),t.TgZ(30,"tr"),t.TgZ(31,"td"),t._uU(32,"header"),t.qZA(),t.TgZ(33,"td"),t._uU(34,"Header of list as plain text or html string"),t.qZA(),t.TgZ(35,"td"),t._uU(36,"string"),t.qZA(),t._UZ(37,"td"),t.qZA(),t.TgZ(38,"tr"),t.TgZ(39,"td"),t._uU(40,"items"),t.qZA(),t.TgZ(41,"td"),t._uU(42,"Array of items"),t.qZA(),t.TgZ(43,"td"),t._uU(44,"any[]"),t.qZA(),t._UZ(45,"td"),t.qZA(),t.TgZ(46,"tr"),t.TgZ(47,"td"),t._uU(48,"pageSize"),t.qZA(),t.TgZ(49,"td"),t._uU(50,"Set page size"),t.qZA(),t.TgZ(51,"td"),t._uU(52,"number"),t.qZA(),t._UZ(53,"td"),t.qZA(),t.TgZ(54,"tr"),t.TgZ(55,"td"),t._uU(56,"itemHeight"),t.qZA(),t.TgZ(57,"td"),t._uU(58,"Set height of single element in px"),t.qZA(),t.TgZ(59,"td"),t._uU(60,"number"),t.qZA(),t._UZ(61,"td"),t.qZA(),t.TgZ(62,"tr"),t.TgZ(63,"td"),t._uU(64,"template"),t.qZA(),t.TgZ(65,"td"),t._uU(66,"Item template to display for single item"),t.qZA(),t.TgZ(67,"td"),t._uU(68,"TemplateRef<any>"),t.qZA(),t._UZ(69,"td"),t.qZA(),t.TgZ(70,"tr"),t.TgZ(71,"td"),t._uU(72,"styleClass"),t.qZA(),t.TgZ(73,"td"),t._uU(74,"Set extra class on component"),t.qZA(),t.TgZ(75,"td"),t._uU(76,"string"),t.qZA(),t._UZ(77,"td"),t.qZA(),t.TgZ(78,"tr"),t.TgZ(79,"td"),t._uU(80,"inputId"),t.qZA(),t.TgZ(81,"td"),t._uU(82,"Set id attribute"),t.qZA(),t.TgZ(83,"td"),t._uU(84,"string"),t.qZA(),t._UZ(85,"td"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(86,"np-card"),t.TgZ(87,"np-card-body"),t.TgZ(88,"table",3),t.TgZ(89,"tr"),t.TgZ(90,"th"),t._uU(91,"Method"),t.qZA(),t.TgZ(92,"th"),t._uU(93,"Description"),t.qZA(),t.TgZ(94,"th"),t._uU(95,"Parameters"),t.qZA(),t.qZA(),t.TgZ(96,"tr"),t.TgZ(97,"td"),t._uU(98,"loadData({first: number, rows: pageSize})"),t.qZA(),t.TgZ(99,"td"),t._uU(100," Callback to load data event, fetch data in this method "),t._UZ(101,"br"),t._uU(102,"first is the index of first record in page, and rows is number of page size "),t.qZA(),t.TgZ(103,"td"),t._uU(104,"{first: number, rows: pageSize}"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(105,"np-card"),t.TgZ(106,"np-card-body"),t.TgZ(107,"table",3),t.TgZ(108,"tr"),t.TgZ(109,"th"),t._uU(110,"Api"),t.qZA(),t.TgZ(111,"th"),t._uU(112,"Description"),t.qZA(),t.TgZ(113,"th"),t._uU(114,"Parameters"),t.qZA(),t.qZA(),t.TgZ(115,"tr"),t.TgZ(116,"td"),t._uU(117,"scrollToIndex(idx: number)"),t.qZA(),t.TgZ(118,"td"),t._uU(119,"Scroll to given index, index start with 0."),t.qZA(),t.TgZ(120,"td"),t._uU(121,"idx: number"),t.qZA(),t.qZA(),t.TgZ(122,"tr"),t.TgZ(123,"td"),t._uU(124,"scrollToOffset(offset: number)"),t.qZA(),t.TgZ(125,"td"),t._uU(126," Scroll to given offset, offset is in px. "),t._UZ(127,"br"),t._uU(128," Use +offset to scroll down. Use -offset to scroll up. "),t.qZA(),t.TgZ(129,"td"),t._uU(130,"offset: number"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(131,"np-card"),t.TgZ(132,"np-card-body"),t.TgZ(133,"b"),t._uU(134,"How to use loadData method?"),t.qZA(),t.TgZ(135,"pre"),t.TgZ(136,"code"),t._uU(137),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(138,"np-tab",4),t.YNc(139,g,14,4,"ng-template",5),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Q6J("innerText",l.importText),t.xp6(7),t.Q6J("innerText",l.htmlText),t.xp6(120),t.Oqu(l.loadDataText))},directives:[a.KA,a.Qk,a.c0,a.El,a.Bl,a.pY],encapsulation:2}),o})()}];let m=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(d)],p.Bz]}),o})(),T=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,m,a.XJ,a.i7,a.Tk]]}),o})()}}]);