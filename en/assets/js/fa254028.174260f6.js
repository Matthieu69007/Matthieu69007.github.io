"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[378],{1233:(e,t,n)=>{n.d(t,{Z:()=>j});var o=n(3366),a=n(7462),r=n(7294),i=n(6010),s=n(9766),l=n(4780),c=n(4867),u=n(3264),p=n(9628),h=n(9707),m=n(6842),d=n(5408),k=n(8700),y=n(5893);const g=["component","direction","spacing","divider","children","className","useFlexGap"],f=(0,m.Z)(),v=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function w(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:f})}function b(e,t){const n=r.Children.toArray(e).filter(Boolean);return n.reduce(((e,o,a)=>(e.push(o),a<n.length-1&&e.push(r.cloneElement(t,{key:`separator-${a}`})),e)),[])}const N=({ownerState:e,theme:t})=>{let n=(0,a.Z)({display:"flex",flexDirection:"column"},(0,d.k9)({theme:t},(0,d.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const o=(0,k.hB)(t),a=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),r=(0,d.P$)({values:e.direction,base:a}),i=(0,d.P$)({values:e.spacing,base:a});"object"==typeof r&&Object.keys(r).forEach(((e,t,n)=>{if(!r[e]){const o=t>0?r[n[t-1]]:"column";r[e]=o}}));const l=(t,n)=>{return e.useFlexGap?{gap:(0,k.NA)(o,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${a=n?r[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]}`]:(0,k.NA)(o,t)}};var a};n=(0,s.Z)(n,(0,d.k9)({theme:t},i,l))}return n=(0,d.dt)(t.breakpoints,n),n};var x=n(948),T=n(1657);const Z=function(e={}){const{createStyledComponent:t=v,useThemeProps:n=w,componentName:s="MuiStack"}=e,u=t(N),p=r.forwardRef((function(e,t){const r=n(e),p=(0,h.Z)(r),{component:m="div",direction:d="column",spacing:k=0,divider:f,children:v,className:w,useFlexGap:N=!1}=p,x=(0,o.Z)(p,g),T={direction:d,spacing:k,useFlexGap:N},Z=(0,l.Z)({root:["root"]},(e=>(0,c.Z)(s,e)),{});return(0,y.jsx)(u,(0,a.Z)({as:m,ownerState:T,ref:t,className:(0,i.Z)(Z.root,w)},x,{children:f?b(v,f):v}))}));return p}({createStyledComponent:(0,x.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,T.Z)({props:e,name:"MuiStack"})}),j=Z},3930:(e,t,n)=>{n.d(t,{Z:()=>c,b:()=>l});var o=n(6242),a=n(4267),r=n(3965),i=n(5861),s=n(7294);const l="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/TraceReelle!B:G/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68";function c(){const[e,t]=(0,s.useState)(null);return(0,s.useEffect)((()=>{fetch(l).then((e=>e.json())).then((e=>{let n={city:"john",country:"country",place:"Place"};n.city=e.values[1][0],n.country=e.values[1][1],n.place=e.values[1][2],n.city_accent=e.values[1][5],t(n)}))}),[]),s.createElement(s.Fragment,null,s.createElement(o.Z,{sx:{maxWidth:345}},s.createElement(r.Z,{component:"img",image:"../img/Etapes/"+e?.city+".jpg",alt:e?.city_accent,sx:{height:200,objectFit:"contain"}}),s.createElement(a.Z,null,s.createElement(i.Z,{gutterBottom:!0,variant:"h5",component:"div"},e?.city_accent),s.createElement(i.Z,{variant:"body2",color:"text.secondary"},e?.country,", ",e?.place))))}},8879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=n(7462),a=(n(7294),n(3905)),r=(n(9960),n(1233)),i=n(3930);const s={},l=void 0,c={unversionedId:"Rules",id:"Rules",title:"Rules",description:"You've just received the Trace mascot. You have joined the TraceAcrossTheWorld team as they embark on the crazy adventure of touring the world with it!",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Rules.mdx",sourceDirName:".",slug:"/Rules",permalink:"/en/docs/Rules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Presentation",permalink:"/en/docs/Presentation"},next:{title:"ViePrivee",permalink:"/en/docs/ViePrivee"}},u={},p=[],h={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,a.kt)("div",{style:{width:"100%",margin:"0 auto",textAlign:"center"}},(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"the-rules"},"The rules"),(0,a.kt)("p",null,"You've just received the Trace mascot. You have joined the TraceAcrossTheWorld team as they embark on the crazy adventure of ",(0,a.kt)("strong",{parentName:"p"},"touring the world with it!")),(0,a.kt)("p",null,"Here are ",(0,a.kt)("strong",{parentName:"p"},"the few rules")," that will guide you on how you can help us!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trace's ",(0,a.kt)("strong",{parentName:"li"},"next destination")," is :")),(0,a.kt)("br",null),(0,a.kt)("div",{className:"text-center",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"5vh"}},(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"NextCity"}))),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Are you ",(0,a.kt)("strong",{parentName:"li"},"going in the right direction")," in the next few days? ",(0,a.kt)("strong",{parentName:"li"},"Keep Trace with you")," and take her forward as best you can.\nIt's okay if you don't make it exactly to the next destination. The important thing is ",(0,a.kt)("strong",{parentName:"li"},"to get Trace moving in the right direction"),".  ")),(0,a.kt)("p",null,"Even a few kilometers are a big help to Trace!\nOn the way, it would be great if you could take ",(0,a.kt)("strong",{parentName:"p"},"a photo or video of yourself with the mascot")," Trace in front of a place you particularly like and would like to show us!\nAnd remember: Trace doesn't fly!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You don't think you can help Trace move on? Don't panic! Go straight to the next step.")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)("img",{src:"/img/Mascotte/Resize/lama-with-friends.svg",alt:"Trace Mascot",width:"300",height:"300"})),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now it's time to ",(0,a.kt)("strong",{parentName:"p"},"pass the baton.")," Look for someone you know who will go in the right direction to ",(0,a.kt)("strong",{parentName:"p"},"bring Trace closer to his next destination."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Don't you know anyone who can help us? You have three options"))),(0,a.kt)("br",null),(0,a.kt)(r.Z,{spacing:2,alignItems:"center",mdxType:"Stack"},(0,a.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Contact the ",(0,a.kt)("a",{href:"https://chat.whatsapp.com/FKwW0q23yVk3OdKNKAxGnE",target:"_blank",rel:"noopener noreferrer"},"WhatsApp group")," . ",(0,a.kt)("br",null)," We may be able to help you find someone close to you to help you move Trace forward."),(0,a.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Go to the nearest",(0,a.kt)("a",{href:"https://www.hostelworld.com/",target:"_blank",rel:"noopener noreferrer"},"youth hostel")," and explain the project to the people there. ",(0,a.kt)("br",null)," There's sure to be some travelers interested in taking part in the adventure!"),(0,a.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Go back a few miles to find someone who might be interested! Better to step back to pass the baton than to stop!")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When you pass on the mascot, be sure to give it to ",(0,a.kt)("strong",{parentName:"p"},"someone motivated by the project.")," Show her this site with all the explanations so that she has all the information she needs to continue the adventure!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Before you leave, ",(0,a.kt)("strong",{parentName:"p"},"take a picture of the two of you with the mascot")," and send it to us ",(0,a.kt)("a",{href:"https://www.instagram.com/traceacrosstheworld/",target:"_blank",rel:"noopener noreferrer"},"here"),"!"))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)("img",{src:"/img/Mascotte/Resize/lamaoncomputerinstagram.svg",alt:"Instagram Mascot",width:"300",height:"300"})),(0,a.kt)("h2",{style:{textAlign:"center"}},"Special cases"),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Trace has decided ",(0,a.kt)("strong",{parentName:"p"},"not to fly")," for this trip. To cross the seas, you'll have to find a dedicated sailor in the nearest port!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you have any questions, don't hesitate to send an e-mail to",(0,a.kt)("a",{href:"mailto:traceacrosstheworld@gmail.com"})," (",(0,a.kt)("a",{parentName:"p",href:"mailto:traceacrosstheworld@gmail.com"},"traceacrosstheworld@gmail.com"),") or post a message on the project's ",(0,a.kt)("a",{href:"https://chat.whatsapp.com/FKwW0q23yVk3OdKNKAxGnE",target:"_blank",rel:"noopener noreferrer"},"WhatsApp")," !")))))}d.isMDXComponent=!0}}]);