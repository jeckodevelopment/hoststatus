(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{240:function(t,n,e){"use strict";e.r(n);e(20);var r=e(2),o=e(218),c=e(227),d={layout:"incidents",components:{IncidentsHistory:e(226).a,IncidentsPaginator:c.a},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(n){var e,r,c,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.app,r=n.params,c=new o.a(e.$axios,e.i18n.locale),t.next=4,c.getIncidentsHistory(r.page);case 4:return d=t.sent,t.abrupt("return",{periods:d.periods,pageInfo:{page:d.page,pageSize:d.page_size,totalPages:d.total_pages}});case 6:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}(),head:function(){var t=this.$t.bind(this);return{title:"".concat(t("incidents.incidents-history")," - ").concat(t("incidents.paginator.page")," ").concat(this.pageInfo.page),meta:[{hid:"description",name:"description",content:t("incidents.incidents-history-description")}]}},validate:function(t){var n=t.params;return/^\d+$/.test(n.page)}},l=e(4),component=Object(l.a)(d,function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("incidents-history",{attrs:{periods:this.periods}}),this._v(" "),n("incidents-paginator",{attrs:{info:this.pageInfo}})],1)},[],!1,null,null,null);n.default=component.exports}}]);