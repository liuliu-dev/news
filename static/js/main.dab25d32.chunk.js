(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(41)},21:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(8),c=a.n(r),i=(a(21),a(10)),o=a.n(i),l=a(14),u=a(7),m=a(15),d=a.n(m),p=(a(38),a(39),s.a.createContext({}));function h(){return s.a.createElement("div",{className:"ui secondary pointing menu"},s.a.createElement(w,null))}function w(){var e=Object(n.useContext)(p);return s.a.createElement("div",{className:"item"},s.a.createElement(d.a,{onChange:function(t){var a=new Date,n=new Date;n.setDate(n.getDate()-30),console.log(n),Math.round((a.getTime()-t.getTime())/1e3/60/60/24)<31?e.setDate(t):alert("You are trying to request results too far in the past. Your can request news articles as far back as "+n)},value:e.newsDate}))}function v(){return s.a.createElement("div",{className:"ui equal width divided grid"},s.a.createElement("div",{className:"column leftNews"},s.a.createElement(f,{newssources:"abc-news,buzzfeed,cbs-news,cnn,nbc-news,politico,time,the-washington-post,the-huffington-post,msnbc&"})),s.a.createElement("div",{className:"column centernews"},s.a.createElement(f,{newssources:"associated-press,reuters,bloomberg,bbc-news,the-hill,usa-today,the-wall-street-journal&"})),s.a.createElement("div",{className:"column rightNews"},s.a.createElement(f,{newssources:"fox-news,the-washington-times,breitbart-news,national-review,the-american-conservative&"})))}function f(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],c=a[1],i=Object(n.useContext)(p),m=i.newsDate.getFullYear()+"-"+(i.newsDate.getMonth()+1)+"-"+i.newsDate.getDate(),d="https://newsapi.org/v2/everything?qInTitle=Coronavirus%20OR%20Covid-19%20OR%20pandemic&sources="+e.newssources+"from="+m+"&to="+m+"&sortBy=popularity&pageSize=30&apiKey=832f76f6261645f78b4cfb6490835a6c";new Date;function h(){return(h=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.articles);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[d]),console.log(r.publishedAt);var w=r.map((function(e,t){return s.a.createElement(E,{key:"article"+t,id:t,title:e.title,description:e.description,url:e.url,source:e.source.name,newsImageUrl:e.urlToImage,publishTime:e.publishedAt,author:e.author,content:e.content})}));return s.a.createElement("div",{className:"ui unstackable items"},w)}function E(e){return s.a.createElement("div",{className:"item newscomponent"},s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:e.newsImageUrl}),s.a.createElement("span",{className:"header"},e.source)),s.a.createElement("div",{className:"middle aligned content"},s.a.createElement("div",{className:"header"},s.a.createElement("a",{href:e.url},e.title)),s.a.createElement("div",{className:"description"},s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:"extra"},s.a.createElement("span",null,e.publishTime))))}var b=function(){var e=Object(n.useState)(new Date),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("us"),i=Object(u.a)(c,2),o=i[0],l=i[1],m=Object(n.useState)("associated-press"),d=Object(u.a)(m,2),w=d[0],f=d[1];return s.a.createElement("div",{className:"App"},s.a.createElement(p.Provider,{value:{newsDate:a,setDate:r,country:o,setCountry:l,source:w,setSource:f}},s.a.createElement(h,null),s.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement("div",{className:"main ui fluid container"},s.a.createElement("h1",{className:"ui centered header"},"Covid-19 News"),s.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.dab25d32.chunk.js.map