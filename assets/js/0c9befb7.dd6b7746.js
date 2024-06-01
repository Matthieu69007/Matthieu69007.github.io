"use strict";(self.webpackChunkTraceAcrossTheWorld_com=self.webpackChunkTraceAcrossTheWorld_com||[]).push([[332],{3930:(e,t,n)=>{n.d(t,{Z:()=>i,b:()=>o});var a=n(6242),l=n(4267),s=n(3965),c=n(5861),r=n(7294);const o="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/TraceReelle!B:G/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68";function i(){const[e,t]=(0,r.useState)(null);return(0,r.useEffect)((()=>{fetch(o).then((e=>e.json())).then((e=>{let n={city:"john",country:"country",place:"Place"};n.city=e.values[1][0],n.country=e.values[1][1],n.place=e.values[1][2],n.city_accent=e.values[1][5],t(n)}))}),[]),r.createElement(r.Fragment,null,r.createElement(a.Z,{sx:{maxWidth:345}},r.createElement(s.Z,{component:"img",image:"../img/Etapes/"+e?.city+".jpg",alt:e?.city_accent,sx:{height:200,objectFit:"contain"}}),r.createElement(l.Z,null,r.createElement(c.Z,{gutterBottom:!0,variant:"h5",component:"div"},e?.city_accent),r.createElement(c.Z,{variant:"body2",color:"text.secondary"},e?.country,", ",e?.place))))}},9721:(e,t,n)=>{n.d(t,{Jy:()=>l,VB:()=>a,xB:()=>s});const a="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/ConsigneParcours!A:I/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68",l="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/TraceReelle!B7:G100004/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68",s="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/AdditionalMarkers!A:E/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68"},9838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>k,default:()=>S,frontMatter:()=>Z,metadata:()=>b,toc:()=>A});var a=n(7462),l=n(7294),s=n(3905),c=n(2280),r=n(2797),o=n(3330),i=n(5861),m=n(3508),u=n(5450),p=n(9007),d=n(9225),y=n(5582),h=n(2734),v=n(8396),g=n(9721);function E(){const[e,t]=(0,l.useState)(null);(0,l.useEffect)((()=>{fetch(g.VB).then((e=>e.json())).then((e=>{let n={Places:[]};for(let t=1;t<e.values.length;t++){let a=e.values[t][1].startsWith("https://")?e.values[t][1]:"../img/Etapes/"+e.values[t][1]+".jpg";console.log(e.values[t][1],a.startsWith("https://"));let l=e.values[t][2],s=e.values[t][3],c=e.values[t][6],r=e.values[t][7];n.Places.push({city:a,country:l,place:s,srcImg:a,etape:t,city_accent:c,URLCredit:r})}t(n)}))}),[]);const n=(0,h.Z)(),a=(0,v.Z)(n.breakpoints.only("xs")),s=(0,v.Z)(n.breakpoints.only("sm")),c=(0,v.Z)(n.breakpoints.only("md")),r=(0,v.Z)(n.breakpoints.only("lg"));(0,v.Z)(n.breakpoints.only("xl"));let o;o=a?1:s?2:c?3:r?4:5;let i=null;return e?.Places&&(i=l.createElement(u.Z,{cols:o,sx:{width:"100%",height:"40vh"}},e?.Places?.map((e=>l.createElement(p.Z,{key:e.srcImg+Math.random()},l.createElement("img",{src:`${e.srcImg}?w=248&fit=crop&auto=format`,srcSet:`${e.srcImg}?w=248&fit=crop&auto=format&dpr=2 2x`,alt:e.city,loading:"lazy",onClick:()=>window.open(e.URLCredit,"URLCredit")}),l.createElement(d.Z,{title:e.place,subtitle:l.createElement("span",null,e.city_accent,",",e.country),position:"below"})))))),l.createElement(y.Z,{maxWidth:"lg"},i)}var f=n(3930),x=n(5999);function I(){const[e,t]=l.useState(!1);return l.createElement("div",null,l.createElement("div",{className:"text-center",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"5vh"}},l.createElement("div",null,l.createElement(i.Z,{variant:"h4",gutterBottom:!0},l.createElement(x.Z,{desc:"Prochaine destination"},"Prochaine destination")),l.createElement("br",null),l.createElement(f.Z,null))),l.createElement("br",null),l.createElement(c.Z,{expanded:"panel1"===e,onChange:(n="panel1",(e,a)=>{t(!!a&&n)})},l.createElement(o.Z,{expandIcon:l.createElement(m.Z,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},l.createElement(i.Z,{sx:{textAlign:"center",width:"100%",flexShrink:0,fontWeight:"bold"}},l.createElement(x.Z,{desc:"Toutes les destinations"},"Toutes les destinations"))),l.createElement(r.Z,null,l.createElement("div",{className:"text-center",style:{display:"flex",justifyContent:"center",alignItems:"center",maxHeight:"80%",minHeight:"5vh"}},l.createElement("div",null,l.createElement(E,null))))));var n}const Z={},k=void 0,b={unversionedId:"Itinerary",id:"Itinerary",title:"Itinerary",description:"",source:"@site/docs/Itinerary.mdx",sourceDirName:".",slug:"/Itinerary",permalink:"/docs/Itinerary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Presentation",permalink:"/docs/Presentation"}},T={},A=[],C={toc:A},N="wrapper";function S(e){let{components:t,...n}=e;return(0,s.kt)(N,(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(I,{mdxType:"Itinerary"}))}S.isMDXComponent=!0}}]);