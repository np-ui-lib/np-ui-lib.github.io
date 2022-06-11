"use strict";(self.webpackChunknp_ui_lib_app=self.webpackChunknp_ui_lib_app||[]).push([[513],{513:(h,u,p)=>{p.r(u),p.d(u,{NpPaginatorDemoModule:()=>T});var Z=p(6895),c=p(8561),g=p(5499),t=p(4650),l=p(529);function s(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA()()),2&n){const e=i.$implicit;t.xp6(2),t.hij(" ",e.ProductName," "),t.xp6(2),t.hij(" ",e.UnitPrice," "),t.xp6(2),t.hij(" ",e.UnitsInStock," ")}}function _(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"fieldset")(1,"legend"),t._uU(2,"Basic"),t.qZA(),t.TgZ(3,"np-paginator",6),t.NdJ("onPageChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.onPageChange(o))}),t.qZA(),t.TgZ(4,"div",7)(5,"button",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.changePageSize())}),t._uU(6," Set page size to 10 "),t.qZA(),t.TgZ(7,"button",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.changePageNumber())}),t._uU(8," Set current page to 3 "),t.qZA(),t.TgZ(9,"button",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.changeTotal())}),t._uU(10," Set total to 100 "),t.qZA(),t.TgZ(11,"button",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.SetTotalToZero())}),t._uU(12," Set total to 0 "),t.qZA()()(),t.TgZ(13,"fieldset")(14,"legend"),t._uU(15,"Set showPageSize and showTotal to false"),t.qZA(),t.TgZ(16,"np-paginator",9),t.NdJ("onPageChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.onPageChange(o))}),t.qZA()(),t.TgZ(17,"fieldset")(18,"legend"),t._uU(19,"With Data"),t.qZA(),t.TgZ(20,"table",3)(21,"tr")(22,"th"),t._uU(23,"Product Name"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Unit Price"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Units In Stock"),t.qZA()(),t.YNc(28,s,7,3,"tr",10),t.qZA(),t.TgZ(29,"np-paginator",11),t.NdJ("onPageChange",function(o){t.CHM(e);const r=t.oxw();return t.KtG(r.onLoadData(o))}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("pageSize",e.pageSize)("totalItems",e.total)("currentPage",e.currentPage),t.xp6(13),t.Q6J("pageSize",10)("totalItems",1e3)("currentPage",1)("showPageSize",!1)("showTotal",!1),t.xp6(12),t.Q6J("ngForOf",e.data2),t.xp6(1),t.Q6J("pageSize",10)("totalItems",e.total2)("styleClass","myClass")}}const d=[{path:"",component:(()=>{class n{constructor(e,a){this.notificationsService=e,this.http=a,this.importText="import { NpPaginatorModule } from 'np-ui-lib';",this.htmlText='<np-paginator [pageSize]="pageSize" [totalItems]="total" [currentPage]="currentPage"\n  (onPageChange)="onPageChange($event)">\n</np-paginator>',this.pageSize=5,this.currentPage=2,this.total=50,this.total2=0}ngOnInit(){}onPageChange(e){const a=new g.TH({type:"info",message:JSON.stringify(e)});this.notificationsService.show(a)}changePageSize(){this.pageSize=10}changePageNumber(){this.currentPage=3}changeTotal(){this.total=100}SetTotalToZero(){this.total=0}onLoadData(e){this.http.get(`https://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=${e.pageSize}&$skip=${(e.currentPage-1)*e.pageSize}&$count=true`).subscribe(r=>{r&&r.value&&(this.data2=r.value,this.total2=r["@odata.count"])})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.V5),t.Y36(l.eN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-np-paginator-demo"]],decls:145,vars:2,consts:[[1,"page-header"],["title","Documentation"],[3,"innerText"],[1,"np-table"],["title","Examples"],["npTabContent",""],[3,"pageSize","totalItems","currentPage","onPageChange"],[1,"np-btn-group"],["type","button",1,"np-btn",3,"click"],[3,"pageSize","totalItems","currentPage","showPageSize","showTotal","onPageChange"],[4,"ngFor","ngForOf"],[3,"pageSize","totalItems","styleClass","onPageChange"]],template:function(e,a){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Paginator"),t.qZA(),t.TgZ(2,"np-tabs")(3,"np-tab",1)(4,"np-card")(5,"np-card-body")(6,"b"),t._uU(7,"Module to import"),t.qZA(),t.TgZ(8,"div")(9,"pre"),t._UZ(10,"code",2),t.qZA()()()(),t.TgZ(11,"np-card")(12,"np-card-body")(13,"b"),t._uU(14,"HTML"),t.qZA(),t.TgZ(15,"div")(16,"pre"),t._UZ(17,"code",2),t.qZA()()()(),t.TgZ(18,"np-card")(19,"np-card-body")(20,"table",3)(21,"tr")(22,"th"),t._uU(23,"Property"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Description"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Type"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Default"),t.qZA()(),t.TgZ(30,"tr")(31,"td"),t._uU(32,"pageSize"),t.qZA(),t.TgZ(33,"td"),t._uU(34,"Page size"),t.qZA(),t.TgZ(35,"td"),t._uU(36,"number"),t.qZA(),t.TgZ(37,"td"),t._uU(38,"10"),t.qZA()(),t.TgZ(39,"tr")(40,"td"),t._uU(41,"totalItems"),t.qZA(),t.TgZ(42,"td"),t._uU(43,"Total items count"),t.qZA(),t.TgZ(44,"td"),t._uU(45,"number"),t.qZA(),t.TgZ(46,"td"),t._uU(47,"0"),t.qZA()(),t.TgZ(48,"tr")(49,"td"),t._uU(50,"currentPage"),t.qZA(),t.TgZ(51,"td"),t._uU(52,"Set current page to load"),t.qZA(),t.TgZ(53,"td"),t._uU(54,"number"),t.qZA(),t.TgZ(55,"td"),t._uU(56,"1"),t.qZA()(),t.TgZ(57,"tr")(58,"td"),t._uU(59,"showPageSize"),t.qZA(),t.TgZ(60,"td"),t._uU(61,"Show page size dropdown"),t.qZA(),t.TgZ(62,"td"),t._uU(63,"boolean"),t.qZA(),t.TgZ(64,"td"),t._uU(65,"true"),t.qZA()(),t.TgZ(66,"tr")(67,"td"),t._uU(68,"showTotal"),t.qZA(),t.TgZ(69,"td"),t._uU(70,"Show total items counts"),t.qZA(),t.TgZ(71,"td"),t._uU(72,"boolean"),t.qZA(),t.TgZ(73,"td"),t._uU(74,"true"),t.qZA()(),t.TgZ(75,"tr")(76,"td"),t._uU(77,"styleClass"),t.qZA(),t.TgZ(78,"td"),t._uU(79,"Set extra class on component"),t.qZA(),t.TgZ(80,"td"),t._uU(81,"string"),t.qZA(),t._UZ(82,"td"),t.qZA(),t.TgZ(83,"tr")(84,"td"),t._uU(85,"inputId"),t.qZA(),t.TgZ(86,"td"),t._uU(87,"Set id attribute"),t.qZA(),t.TgZ(88,"td"),t._uU(89,"string"),t.qZA(),t._UZ(90,"td"),t.qZA()()()(),t.TgZ(91,"np-card")(92,"np-card-body")(93,"table",3)(94,"tr")(95,"th"),t._uU(96,"Method"),t.qZA(),t.TgZ(97,"th"),t._uU(98,"Description"),t.qZA(),t.TgZ(99,"th"),t._uU(100,"Parameters"),t.qZA()(),t.TgZ(101,"tr")(102,"td"),t._uU(103,"onPageChange(options: any)"),t.qZA(),t.TgZ(104,"td"),t._uU(105,"Callback event on page change."),t.qZA(),t.TgZ(106,"td"),t._uU(107,'{"currentPage":1,"pageSize":10}'),t.qZA()(),t.TgZ(108,"tr")(109,"td"),t._uU(110,"onPageSizeChange(pageSize: number)"),t.qZA(),t.TgZ(111,"td"),t._uU(112,"Callback event on page size change."),t.qZA(),t._UZ(113,"td"),t.qZA(),t.TgZ(114,"tr")(115,"td"),t._uU(116,"onRefresh()"),t.qZA(),t.TgZ(117,"td"),t._uU(118,"Callback event on refresh button click."),t.qZA(),t._UZ(119,"td"),t.qZA()()()(),t.TgZ(120,"np-card")(121,"np-card-body")(122,"table",3)(123,"tr")(124,"th"),t._uU(125,"Api"),t.qZA(),t.TgZ(126,"th"),t._uU(127,"Description"),t.qZA(),t.TgZ(128,"th"),t._uU(129,"Parameters"),t.qZA()(),t.TgZ(130,"tr")(131,"td"),t._uU(132,"loadPage(page: number)"),t.qZA(),t.TgZ(133,"td"),t._uU(134,"Load page, this will raise page change event"),t.qZA(),t.TgZ(135,"td"),t._uU(136,"page number"),t.qZA()(),t.TgZ(137,"tr")(138,"td"),t._uU(139,"refresh()"),t.qZA(),t.TgZ(140,"td"),t._uU(141,"Refresh current page"),t.qZA(),t._UZ(142,"td"),t.qZA()()()()(),t.TgZ(143,"np-tab",4),t.YNc(144,_,30,12,"ng-template",5),t.qZA()()),2&e&&(t.xp6(10),t.Q6J("innerText",a.importText),t.xp6(7),t.Q6J("innerText",a.htmlText))},dependencies:[Z.sg,g.iv,g.KA,g.Qk,g.Bl,g.c0,g.El],encapsulation:2}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(d),c.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[Z.ez,m,g.p0,g.i7,g.Tk]}),n})()}}]);