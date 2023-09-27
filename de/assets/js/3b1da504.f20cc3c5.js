"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[602],{1233:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(3366),a=n(7462),i=n(7294),s=n(6010),l=n(9766),o=n(4780),c=n(4867),u=n(3264),d=n(9628),m=n(9707),h=n(6842),p=n(5408),k=n(8700),g=n(5893);const f=["component","direction","spacing","divider","children","className","useFlexGap"],b=(0,h.Z)(),v=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function y(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:b})}function w(e,t){const n=i.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,a)=>(e.push(r),a<n.length-1&&e.push(i.cloneElement(t,{key:`separator-${a}`})),e)),[])}const N=({ownerState:e,theme:t})=>{let n=(0,a.Z)({display:"flex",flexDirection:"column"},(0,p.k9)({theme:t},(0,p.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,k.hB)(t),a=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),i=(0,p.P$)({values:e.direction,base:a}),s=(0,p.P$)({values:e.spacing,base:a});"object"==typeof i&&Object.keys(i).forEach(((e,t,n)=>{if(!i[e]){const r=t>0?i[n[t-1]]:"column";i[e]=r}}));const o=(t,n)=>{return e.useFlexGap?{gap:(0,k.NA)(r,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${a=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]}`]:(0,k.NA)(r,t)}};var a};n=(0,l.Z)(n,(0,p.k9)({theme:t},s,o))}return n=(0,p.dt)(t.breakpoints,n),n};var x=n(948),T=n(1657);const z=function(e={}){const{createStyledComponent:t=v,useThemeProps:n=y,componentName:l="MuiStack"}=e,u=t(N),d=i.forwardRef((function(e,t){const i=n(e),d=(0,m.Z)(i),{component:h="div",direction:p="column",spacing:k=0,divider:b,children:v,className:y,useFlexGap:N=!1}=d,x=(0,r.Z)(d,f),T={direction:p,spacing:k,useFlexGap:N},z=(0,o.Z)({root:["root"]},(e=>(0,c.Z)(l,e)),{});return(0,g.jsx)(u,(0,a.Z)({as:h,ownerState:T,ref:t,className:(0,s.Z)(z.root,y)},x,{children:b?w(v,b):v}))}));return d}({createStyledComponent:(0,x.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,T.Z)({props:e,name:"MuiStack"})}),Z=z},3930:(e,t,n)=>{n.d(t,{Z:()=>c,b:()=>o});var r=n(6242),a=n(4267),i=n(3965),s=n(5861),l=n(7294);const o="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/TraceReelle!B:G/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68";function c(){const[e,t]=(0,l.useState)(null);return(0,l.useEffect)((()=>{fetch(o).then((e=>e.json())).then((e=>{let n={city:"john",country:"country",place:"Place"};n.city=e.values[1][0],n.country=e.values[1][1],n.place=e.values[1][2],n.city_accent=e.values[1][5],t(n)}))}),[]),l.createElement(l.Fragment,null,l.createElement(r.Z,{sx:{maxWidth:345}},l.createElement(i.Z,{component:"img",image:"../img/Etapes/"+e?.city+".jpg",alt:e?.city_accent,sx:{height:200,objectFit:"contain"}}),l.createElement(a.Z,null,l.createElement(s.Z,{gutterBottom:!0,variant:"h5",component:"div"},e?.city_accent),l.createElement(s.Z,{variant:"body2",color:"text.secondary"},e?.country,", ",e?.place))))}},5832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),i=(n(9960),n(1233)),s=n(3930);const l={},o=void 0,c={unversionedId:"Rules",id:"Rules",title:"Rules",description:"Du hast gerade das Maskottchen Trace erhalten. Du schlie\xdft dich also dem Team TraceAcrossTheWorld an, das das verr\xfcckte Abenteuer wagt, ihn um die Welt zu schicken!.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/Rules.mdx",sourceDirName:".",slug:"/Rules",permalink:"/de/docs/Rules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Presentation",permalink:"/de/docs/Presentation"},next:{title:"ViePrivee",permalink:"/de/docs/ViePrivee"}},u={},d=[],m={toc:d},h="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,a.kt)("div",{style:{width:"100%",margin:"0 auto",textAlign:"center"}},(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"die-regeln"},"Die Regeln"),(0,a.kt)("p",null,"Du hast gerade das Maskottchen Trace erhalten. Du schlie\xdft dich also dem Team TraceAcrossTheWorld an, das das verr\xfcckte Abenteuer wagt, ihn ",(0,a.kt)("strong",{parentName:"p"},"um die Welt zu schicken!"),"."),(0,a.kt)("p",null,"Hier sind ",(0,a.kt)("strong",{parentName:"p"},"ein paar Regeln"),", die dir zeigen, wie du uns helfen kannst!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Das ",(0,a.kt)("strong",{parentName:"li"},"n\xe4chste Ziel")," von Trace ist :")),(0,a.kt)("br",null),(0,a.kt)("div",{className:"text-center",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"5vh"}},(0,a.kt)("div",null,(0,a.kt)(s.Z,{mdxType:"NextCity"}))),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Denkst du, dass du in den n\xe4chsten Tagen ",(0,a.kt)("strong",{parentName:"li"},"in die richtige Richtung")," gehst? ",(0,a.kt)("strong",{parentName:"li"},"Behalte Trace bei dir")," und bringe sie so gut du kannst voran.\nEs ist nicht schlimm, wenn du nicht genau bis zum n\xe4chsten Ziel gehst. Das Wichtigste ist, ",(0,a.kt)("strong",{parentName:"li"},"Trace in die richtige Richtung zu bewegen."),"  ")),(0,a.kt)("p",null,"Auch ein paar Kilometer sind f\xfcr Trace eine gro\xdfe Hilfe!\nAuf der Fahrt w\xe4re es toll, wenn du ",(0,a.kt)("strong",{parentName:"p"},"ein Foto oder Video von dir mit dem Maskottchen")," Trace vor einem Ort machen k\xf6nntest, der dir besonders gut gef\xe4llt und den du uns zeigen m\xf6chtest.\nUnd denk dran: ",(0,a.kt)("strong",{parentName:"p"},"Trace fliegt nicht!")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Glaubst du nicht, dass du Trace helfen kannst, weiterzumachen? Keine Panik! Gehe direkt zum n\xe4chsten Schritt.")),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)("img",{src:"/img/Mascotte/Resize/lama-with-friends.svg",alt:"Trace Mascot",width:"300",height:"300"})),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Jetzt ist es an der Zeit, ",(0,a.kt)("strong",{parentName:"p"},"den Staffelstab weiterzugeben.")," Suche nach einer Person, die du kennst, die in die richtige Richtung geht, um ",(0,a.kt)("strong",{parentName:"p"},"Trace von seinem n\xe4chsten Ziel abzuholen."),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Kennst du niemanden, der uns helfen k\xf6nnte? Dir stehen drei M\xf6glichkeiten zur Verf\xfcgung"))),(0,a.kt)("br",null),(0,a.kt)(i.Z,{spacing:2,alignItems:"center",mdxType:"Stack"},(0,a.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Kontaktiere die ",(0,a.kt)("a",{href:"https://chat.whatsapp.com/FKwW0q23yVk3OdKNKAxGnE",target:"_blank",rel:"noopener noreferrer"},"WhatsApp-Gruppe")," des Projekts. ",(0,a.kt)("br",null)," Vielleicht k\xf6nnen wir dir helfen, jemanden in deiner N\xe4he zu finden, der dir hilft, Trace voranzutreiben."),(0,a.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Gehe in die n\xe4chstgelegene",(0,a.kt)("a",{href:"https://www.hostelworld.com/",target:"_blank",rel:"noopener noreferrer"},"Jugendherberge")," und erkl\xe4re den Anwesenden das Projekt. ",(0,a.kt)("br",null)," Es gibt bestimmt Reisende, die Interesse haben, an diesem Abenteuer teilzunehmen!"),(0,a.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Gehe ein paar Kilometer zur\xfcck, um eine Person zu finden, die interessiert sein k\xf6nnte. Es ist besser, r\xfcckw\xe4rts zu gehen, um den Staffelstab weiterzugeben, als stehen zu bleiben!")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Wenn du das Maskottchen weitergibst, gib es auf jeden Fall an ",(0,a.kt)("strong",{parentName:"p"},"jemanden, der von dem Projekt begeistert ist.")," Zeige ihr diese Seite mit allen Erkl\xe4rungen, damit sie alle Informationen hat, um das Abenteuer fortzusetzen!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Bevor Sie sich verabschieden, ",(0,a.kt)("strong",{parentName:"p"},"machen Sie ein Foto von Ihnen beiden mit dem Maskottchen")," und schicken Sie es uns ",(0,a.kt)("a",{href:"https://www.instagram.com/traceacrosstheworld/",target:"_blank",rel:"noopener noreferrer"},"hier"),"!"))),(0,a.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,a.kt)("img",{src:"/img/Mascotte/Resize/lamaoncomputerinstagram.svg",alt:"Instagram Mascot",width:"300",height:"300"})),(0,a.kt)("h2",{style:{textAlign:"center"}},"Sonderf\xe4lle"),(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Trace hat sich daf\xfcr entschieden, ",(0,a.kt)("strong",{parentName:"p"},"kein Flugzeug")," f\xfcr ihre Reise zu nehmen. Um die Meere zu \xfcberqueren, musst du einen engagierten Seemann im n\xe4chsten Hafen finden!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Wenn du Fragen hast, kannst du uns gerne eine E-Mail an die Kontaktadresse (",(0,a.kt)("a",{parentName:"p",href:"mailto:traceacrosstheworld@gmail.com"},"traceacrosstheworld@gmail.com"),") schicken oder eine Nachricht auf der ",(0,a.kt)("a",{href:"https://chat.whatsapp.com/FKwW0q23yVk3OdKNKAxGnE",target:"_blank",rel:"noopener noreferrer"},"WhatsApp-Seite")," des Projekts posten!")))))}p.isMDXComponent=!0}}]);