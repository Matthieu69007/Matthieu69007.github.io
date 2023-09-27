"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[157],{1233:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(3366),a=n(7462),l=n(7294),o=n(6010),s=n(9766),i=n(4780),c=n(4867),u=n(3264),p=n(9628),m=n(9707),k=n(6842),d=n(5408),h=n(8700),g=n(5893);const y=["component","direction","spacing","divider","children","className","useFlexGap"],v=(0,k.Z)(),f=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function b(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:v})}function N(e,t){const n=l.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,a)=>(e.push(r),a<n.length-1&&e.push(l.cloneElement(t,{key:`separator-${a}`})),e)),[])}const w=({ownerState:e,theme:t})=>{let n=(0,a.Z)({display:"flex",flexDirection:"column"},(0,d.k9)({theme:t},(0,d.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,h.hB)(t),a=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),l=(0,d.P$)({values:e.direction,base:a}),o=(0,d.P$)({values:e.spacing,base:a});"object"==typeof l&&Object.keys(l).forEach(((e,t,n)=>{if(!l[e]){const r=t>0?l[n[t-1]]:"column";l[e]=r}}));const i=(t,n)=>{return e.useFlexGap?{gap:(0,h.NA)(r,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${a=n?l[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]}`]:(0,h.NA)(r,t)}};var a};n=(0,s.Z)(n,(0,d.k9)({theme:t},o,i))}return n=(0,d.dt)(t.breakpoints,n),n};var x=n(948),Z=n(1657);const T=function(e={}){const{createStyledComponent:t=f,useThemeProps:n=b,componentName:s="MuiStack"}=e,u=t(w),p=l.forwardRef((function(e,t){const l=n(e),p=(0,m.Z)(l),{component:k="div",direction:d="column",spacing:h=0,divider:v,children:f,className:b,useFlexGap:w=!1}=p,x=(0,r.Z)(p,y),Z={direction:d,spacing:h,useFlexGap:w},T=(0,i.Z)({root:["root"]},(e=>(0,c.Z)(s,e)),{});return(0,g.jsx)(u,(0,a.Z)({as:k,ownerState:Z,ref:t,className:(0,o.Z)(T.root,b)},x,{children:v?N(f,v):f}))}));return p}({createStyledComponent:(0,x.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,Z.Z)({props:e,name:"MuiStack"})}),A=T},3930:(e,t,n)=>{n.d(t,{Z:()=>c,b:()=>i});var r=n(6242),a=n(4267),l=n(3965),o=n(5861),s=n(7294);const i="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/TraceReelle!B:G/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68";function c(){const[e,t]=(0,s.useState)(null);return(0,s.useEffect)((()=>{fetch(i).then((e=>e.json())).then((e=>{let n={city:"john",country:"country",place:"Place"};n.city=e.values[1][0],n.country=e.values[1][1],n.place=e.values[1][2],n.city_accent=e.values[1][5],t(n)}))}),[]),s.createElement(s.Fragment,null,s.createElement(r.Z,{sx:{maxWidth:345}},s.createElement(l.Z,{component:"img",image:"../img/Etapes/"+e?.city+".jpg",alt:e?.city_accent,sx:{height:200,objectFit:"contain"}}),s.createElement(a.Z,null,s.createElement(o.Z,{gutterBottom:!0,variant:"h5",component:"div"},e?.city_accent),s.createElement(o.Z,{variant:"body2",color:"text.secondary"},e?.country,", ",e?.place))))}},8690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=(n(9960),n(1233)),o=n(3930);const s={},i=void 0,c={unversionedId:"Rules",id:"Rules",title:"Rules",description:"\u60a8\u521a\u521a\u6536\u5230 Trace \u5409\u7965\u7269\u3002 \u6240\u4ee5\uff0c\u4f60\u8981\u52a0\u5165 TraceAcrossTheWorld \u56e2\u961f\uff0c\u5f00\u59cb\u5e26\u4ed6\u73af\u6e38\u4e16\u754c\u7684\u75af\u72c2\u5192\u9669\uff01\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/Rules.mdx",sourceDirName:".",slug:"/Rules",permalink:"/zh/docs/Rules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Presentation",permalink:"/zh/docs/Presentation"},next:{title:"ViePrivee",permalink:"/zh/docs/ViePrivee"}},u={},p=[],m={toc:p},k="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,a.kt)("div",{style:{width:"100%",margin:"0 auto",textAlign:"center"}},(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"\u89c4\u5219"},"\u89c4\u5219"),(0,a.kt)("p",null,"\u60a8\u521a\u521a\u6536\u5230 Trace \u5409\u7965\u7269\u3002 \u6240\u4ee5\uff0c\u4f60\u8981\u52a0\u5165 TraceAcrossTheWorld \u56e2\u961f\uff0c\u5f00\u59cb\u5e26\u4ed6",(0,a.kt)("strong",{parentName:"p"},"\u73af\u6e38\u4e16\u754c\u7684\u75af\u72c2\u5192\u9669\uff01"),"\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u51e0\u6761\u89c4\u5219\u53ef\u4ee5\u5e2e\u52a9\u60a8\u4e86\u89e3\u5982\u4f55\u5e2e\u52a9\u6211\u4eec\uff01"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7d22\u65af\u7684","*","*","\u4e2a\u76ee\u7684\u5730\u662f\uff1a")),(0,a.kt)("br",null),(0,a.kt)("div",{className:"text-center",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"5vh"}},(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"NextCity"}))),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u8ba4\u4e3a\u672a\u6765\u51e0\u5929\u4f60\u4f1a\u671d\u7740\u6b63\u786e\u7684\u65b9\u5411\u524d\u8fdb\u5417\uff1f ",(0,a.kt)("strong",{parentName:"li"},"\u628a\u7d22\u65af\u7559\u5728\u4f60\u8eab\u8fb9"),"\uff0c\u5c3d\u4f60\u6240\u80fd\u5e26\u5979\u524d\u8fdb\u3002\n\u5373\u4f7f\u4f60\u65e0\u6cd5\u5230\u8fbe\u4e0b\u4e00\u4e2a\u76ee\u7684\u5730\u4e5f\u6ca1\u5173\u7cfb\u3002 \u91cd\u8981\u7684\u662f\u8ba9\u7d22\u65af\u671d\u7740\u6b63\u786e\u7684\u65b9\u5411\u524d\u8fdb\u3002  ")),(0,a.kt)("p",null,"\u54ea\u6015\u53ea\u6709\u51e0\u516c\u91cc\uff0c\u5bf9 Trace \u6765\u8bf4\u4e5f\u662f\u83ab\u5927\u7684\u5e2e\u52a9\uff01\n\u9014\u4e2d\uff0c\u5982\u679c\u60a8\u80fd\u4e0e\u5409\u7965\u7269","*","*"," Trace \u5728\u60a8\u7279\u522b\u559c\u6b22\u7684\u666f\u70b9\u524d\u5408\u5f71\u6216\u5f55\u50cf\uff0c\u5e76\u5c55\u793a\u7ed9\u6211\u4eec\u770b\uff0c\u90a3\u5c31\u518d\u597d\u4e0d\u8fc7\u4e86\uff01\n\u8bb0\u4f4f:\u6bd4\u8d5b\u4e0d\u4f1a\u98de\uff01"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f60\u4e0d\u89c9\u5f97\u4f60\u80fd\u5e2e\u52a9\u7d22\u65af\u5411\u524d\u770b\u5417\uff1f \u4e0d\u8981\u60ca\u614c\uff01 \u76f4\u63a5\u8fdb\u5165\u4e0b\u4e00\u9636\u6bb5\u3002")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)("img",{src:"/img/Mascotte/Resize/lama-with-friends.svg",alt:"Trace Mascot",width:"300",height:"300"})),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u73b0\u5728\u662f\u65f6\u5019\u628a\u63a5\u529b\u68d2\u4ea4\u7ed9\u4f60\u8ba4\u8bc6\u7684\u4eba\u4e86\uff0c\u4ed6\u5c06\u6cbf\u7740\u6b63\u786e\u7684\u65b9\u5411\u628a\u7d22\u65af\u5e26\u5230\u4e0b\u4e00\u4e2a\u76ee\u7684\u5730\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f60\u77e5\u9053\u8c01\u80fd\u5e2e\u52a9\u6211\u4eec\u5417\uff1f \u60a8\u6709\u4e09\u79cd\u9009\u62e9"))),(0,a.kt)("br",null),(0,a.kt)(l.Z,{spacing:2,alignItems:"center",mdxType:"Stack"},(0,a.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"\u8bf7\u8054\u7cfb ",(0,a.kt)("a",{href:"https://chat.whatsapp.com/FKwW0q23yVk3OdKNKAxGnE",target:"_blank",rel:"noopener noreferrer"},"WhatsApp \u7fa4\u7ec4")," \u4e86\u89e3\u9879\u76ee\u60c5\u51b5\u3002 ",(0,a.kt)("br",null)," \u6211\u4eec\u4e5f\u8bb8\u80fd\u5e2e\u60a8\u627e\u5230\u60a8\u8eab\u8fb9\u7684\u4eba\uff0c\u5e2e\u52a9\u60a8\u63a8\u8fdb Trace \u8ba1\u5212\u3002"),(0,a.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"\u524d\u5f80\u6700\u8fd1\u7684",(0,a.kt)("a",{href:"https://www.hostelworld.com/",target:"_blank",rel:"noopener noreferrer"},"\u9752\u5e74\u65c5\u820d")," \uff0c\u5411\u90a3\u91cc\u7684\u4eba\u4eec\u89e3\u91ca\u8be5\u9879\u76ee\u3002 ",(0,a.kt)("br",null)," \u80af\u5b9a\u4f1a\u6709\u65c5\u884c\u8005\u6709\u5174\u8da3\u53c2\u52a0\u8fd9\u6b21\u63a2\u9669\uff01"),(0,a.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"\u5f80\u56de\u8d70\u51e0\u516c\u91cc\uff0c\u627e\u5230\u53ef\u80fd\u611f\u5174\u8da3\u7684\u4eba\uff01 \u540e\u64a4\u4f20\u9012\u63a5\u529b\u68d2\u6bd4\u505c\u6b62\u66f4\u597d\uff01")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5f53\u4f60\u628a\u5409\u7965\u7269\u4f20\u7ed9\u522b\u4eba\u65f6\uff0c\u4e00\u5b9a\u8981\u628a\u5b83\u4ea4\u7ed9",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u4f4d\u5bf9\u8fd9\u4e2a\u9879\u76ee\u611f\u5174\u8da3\u7684\u4eba"),"\uff0c\u5e76\u5411\u4ed6\u4eec\u5c55\u793a\u8fd9\u4e2a\u5305\u542b\u6240\u6709\u89e3\u91ca\u7684\u7f51\u7ad9\uff0c\u4ee5\u4fbf\u4ed6\u4eec\u83b7\u5f97\u7ee7\u7eed\u63a2\u9669\u6240\u9700\u7684\u6240\u6709\u4fe1\u606f\uff01")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u79bb\u5f00\u4e4b\u524d\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u62cd\u6444\u4e00\u5f20\u4f60\u4eec\u4e24\u4eba\u4e0e\u5409\u7965\u7269\u7684\u5408\u5f71"),"\uff0c\u5e76\u53d1\u9001\u7ed9\u6211\u4eec ",(0,a.kt)("a",{href:"https://www.instagram.com/traceacrosstheworld/",target:"_blank",rel:"noopener noreferrer"},"here"),"\uff01"))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)("img",{src:"/img/Mascotte/Resize/lamaoncomputerinstagram.svg",alt:"Instagram Mascot",width:"300",height:"300"})),(0,a.kt)("h2",{style:{textAlign:"center"}},"\u7279\u6b8a\u60c5\u51b5"),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7d22\u65af\u9009\u62e9",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u4e58\u5750\u98de\u673a"),"\u8fd9\u6b21\u65c5\u884c\u3002 \u8981\u60f3\u6f02\u6d0b\u8fc7\u6d77\uff0c\u60a8\u9700\u8981\u5728\u6700\u8fd1\u7684\u6e2f\u53e3\u627e\u5230\u4e00\u540d\u4e13\u804c\u6c34\u624b\uff01")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u968f\u65f6\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u81f3\u8054\u7cfb\u5730\u5740 (",(0,a.kt)("a",{parentName:"p",href:"mailto:traceacrosstheworld@gmail.com"},"traceacrosstheworld@gmail.com"),") \u6216\u5728\u9879\u76ee ",(0,a.kt)("a",{href:"https://chat.whatsapp.com/FKwW0q23yVk3OdKNKAxGnE",target:"_blank",rel:"noopener noreferrer"},"WhatsApp")," \u4e0a\u7559\u8a00\uff01")))))}d.isMDXComponent=!0}}]);