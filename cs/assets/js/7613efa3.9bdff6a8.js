"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[536],{9575:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),l=n(9342),r=n(2797),c=n(3330),s=n(5861),o=n(3508),i=n(5450),m=n(9007),u=n(9225),d=n(5582),p=n(2734),y=n(8396);const h="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/ConsigneParcours!A:H/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68";function v(){const[e,t]=(0,a.useState)(null);(0,a.useEffect)((()=>{fetch(h).then((e=>e.json())).then((e=>{let n={Places:[]};for(let t=1;t<e.values.length;t++){let a=e.values[t][1],l=e.values[t][2],r=e.values[t][3],c=e.values[t][6],s=e.values[t][7];n.Places.push({city:a,country:l,place:r,srcImg:"../img/Etapes/"+a+".jpg",etape:t,city_accent:c,URLCredit:s})}t(n)}))}),[]);const n=(0,p.Z)(),l=(0,y.Z)(n.breakpoints.only("xs")),r=(0,y.Z)(n.breakpoints.only("sm")),c=(0,y.Z)(n.breakpoints.only("md")),o=(0,y.Z)(n.breakpoints.only("lg"));(0,y.Z)(n.breakpoints.only("xl"));let v;return v=l?1:r?2:c?3:o?4:5,a.createElement(d.Z,{maxWidth:"lg"},a.createElement("br",null),a.createElement(s.Z,{variant:"body2",color:"text.secondary"}),a.createElement(i.Z,{cols:v,sx:{width:"100%",height:"40vh"}},e?.Places?.map((e=>a.createElement(m.Z,{key:e.srcImg+Math.random()},a.createElement("img",{src:`${e.srcImg}?w=248&fit=crop&auto=format`,srcSet:`${e.srcImg}?w=248&fit=crop&auto=format&dpr=2 2x`,alt:e.city,loading:"lazy",onClick:()=>window.open(e.URLCredit,"URLCredit")}),a.createElement(u.Z,{title:e.place,subtitle:a.createElement("span",null,e.city_accent,",",e.country),position:"below"}))))))}var g=n(3930),E=n(5999);function f(){const[e,t]=a.useState(!1);return a.createElement("div",null,a.createElement("div",{className:"text-center",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"5vh"}},a.createElement("div",null,a.createElement(s.Z,{variant:"h4",gutterBottom:!0},a.createElement(E.Z,{desc:"Prochaine destination"},"Prochaine destination")),a.createElement("br",null),a.createElement(g.Z,null))),a.createElement("br",null),a.createElement(l.Z,{expanded:"panel1"===e,onChange:(n="panel1",(e,a)=>{t(!!a&&n)})},a.createElement(c.Z,{expandIcon:a.createElement(o.Z,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},a.createElement(s.Z,{sx:{textAlign:"center",width:"100%",flexShrink:0,fontWeight:"bold"}},a.createElement(E.Z,{desc:"Toutes les destinations"},"Toutes les destinations"))),a.createElement(r.Z,null,a.createElement("br",null),a.createElement("div",{className:"text-center",style:{display:"flex",justifyContent:"center",alignItems:"center",maxHeight:"40vh",minHeight:"5vh"}},a.createElement("div",null,a.createElement(v,null))))));var n}},3930:(e,t,n)=>{n.d(t,{Z:()=>i,b:()=>o});var a=n(6242),l=n(4267),r=n(3965),c=n(5861),s=n(7294);const o="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/TraceReelle!B:G/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68";function i(){const[e,t]=(0,s.useState)(null);return(0,s.useEffect)((()=>{fetch(o).then((e=>e.json())).then((e=>{let n={city:"john",country:"country",place:"Place"};n.city=e.values[1][0],n.country=e.values[1][1],n.place=e.values[1][2],n.city_accent=e.values[1][5],t(n)}))}),[]),s.createElement(s.Fragment,null,s.createElement(a.Z,{sx:{maxWidth:345}},s.createElement(r.Z,{component:"img",image:"../img/Etapes/"+e?.city+".jpg",alt:e?.city_accent,sx:{height:200,objectFit:"contain"}}),s.createElement(l.Z,null,s.createElement(c.Z,{gutterBottom:!0,variant:"h5",component:"div"},e?.city_accent),s.createElement(c.Z,{variant:"body2",color:"text.secondary"},e?.country,", ",e?.place))))}},1429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),r=n(9575);const c={},s=void 0,o={unversionedId:"Itinerary",id:"Itinerary",title:"Itinerary",description:"",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/Itinerary.mdx",sourceDirName:".",slug:"/Itinerary",permalink:"/cs/docs/Itinerary",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Presentation",permalink:"/cs/docs/Presentation"}},i={},m=[],u={toc:m},d="wrapper";function p(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{mdxType:"Itinerary"}))}p.isMDXComponent=!0}}]);