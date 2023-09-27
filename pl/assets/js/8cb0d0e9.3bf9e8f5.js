"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[771],{1233:(e,t,a)=>{a.d(t,{Z:()=>T});var n=a(3366),o=a(7462),r=a(7294),i=a(6010),s=a(9766),l=a(4780),c=a(4867),p=a(3264),m=a(9628),k=a(9707),u=a(6842),d=a(5408),y=a(8700),z=a(5893);const g=["component","direction","spacing","divider","children","className","useFlexGap"],w=(0,u.Z)(),h=(0,p.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function b(e){return(0,m.Z)({props:e,name:"MuiStack",defaultTheme:w})}function j(e,t){const a=r.Children.toArray(e).filter(Boolean);return a.reduce(((e,n,o)=>(e.push(n),o<a.length-1&&e.push(r.cloneElement(t,{key:`separator-${o}`})),e)),[])}const f=({ownerState:e,theme:t})=>{let a=(0,o.Z)({display:"flex",flexDirection:"column"},(0,d.k9)({theme:t},(0,d.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const n=(0,y.hB)(t),o=Object.keys(t.breakpoints.values).reduce(((t,a)=>(("object"==typeof e.spacing&&null!=e.spacing[a]||"object"==typeof e.direction&&null!=e.direction[a])&&(t[a]=!0),t)),{}),r=(0,d.P$)({values:e.direction,base:o}),i=(0,d.P$)({values:e.spacing,base:o});"object"==typeof r&&Object.keys(r).forEach(((e,t,a)=>{if(!r[e]){const n=t>0?r[a[t-1]]:"column";r[e]=n}}));const l=(t,a)=>{return e.useFlexGap?{gap:(0,y.NA)(n,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${o=a?r[a]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,y.NA)(n,t)}};var o};a=(0,s.Z)(a,(0,d.k9)({theme:t},i,l))}return a=(0,d.dt)(t.breakpoints,a),a};var v=a(948),N=a(1657);const x=function(e={}){const{createStyledComponent:t=h,useThemeProps:a=b,componentName:s="MuiStack"}=e,p=t(f),m=r.forwardRef((function(e,t){const r=a(e),m=(0,k.Z)(r),{component:u="div",direction:d="column",spacing:y=0,divider:w,children:h,className:b,useFlexGap:f=!1}=m,v=(0,n.Z)(m,g),N={direction:d,spacing:y,useFlexGap:f},x=(0,l.Z)({root:["root"]},(e=>(0,c.Z)(s,e)),{});return(0,z.jsx)(p,(0,o.Z)({as:u,ownerState:N,ref:t,className:(0,i.Z)(x.root,b)},v,{children:w?j(h,w):h}))}));return m}({createStyledComponent:(0,v.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,N.Z)({props:e,name:"MuiStack"})}),T=x},3930:(e,t,a)=>{a.d(t,{Z:()=>c,b:()=>l});var n=a(6242),o=a(4267),r=a(3965),i=a(5861),s=a(7294);const l="https://sheets.googleapis.com/v4/spreadsheets/1FNX9RpTH7WgQKxqpfvGJ7koBMNxcFUtTRvzAIoD8iyI/values/TraceReelle!B:G/?key=AIzaSyCfXHtG7ylyNenz8ncsqAuS4njElL2dm68";function c(){const[e,t]=(0,s.useState)(null);return(0,s.useEffect)((()=>{fetch(l).then((e=>e.json())).then((e=>{let a={city:"john",country:"country",place:"Place"};a.city=e.values[1][0],a.country=e.values[1][1],a.place=e.values[1][2],a.city_accent=e.values[1][5],t(a)}))}),[]),s.createElement(s.Fragment,null,s.createElement(n.Z,{sx:{maxWidth:345}},s.createElement(r.Z,{component:"img",image:"../img/Etapes/"+e?.city+".jpg",alt:e?.city_accent,sx:{height:200,objectFit:"contain"}}),s.createElement(o.Z,null,s.createElement(i.Z,{gutterBottom:!0,variant:"h5",component:"div"},e?.city_accent),s.createElement(i.Z,{variant:"body2",color:"text.secondary"},e?.country,", ",e?.place))))}},8794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=a(7462),o=(a(7294),a(3905)),r=(a(9960),a(1233)),i=a(3930);const s={},l=void 0,c={unversionedId:"Rules",id:"Rules",title:"Rules",description:"W\u0142a\u015bnie otrzyma\u0142e\u015b maskotk\u0119 Trace. Do\u0142\u0105cz do zespo\u0142u TraceAcrossTheWorld, kt\xf3ry wyrusza w szalon\u0105 przygod\u0119, zabieraj\u0105c go dooko\u0142a \u015bwiata.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/current/Rules.mdx",sourceDirName:".",slug:"/Rules",permalink:"/pl/docs/Rules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Presentation",permalink:"/pl/docs/Presentation"},next:{title:"ViePrivee",permalink:"/pl/docs/ViePrivee"}},p={},m=[],k={toc:m},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("meta",{name:"viewport",content:"initial-scale=1, width=device-width"}),(0,o.kt)("div",{style:{width:"100%",margin:"0 auto",textAlign:"center"}},(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("h1",{id:"zasady"},"Zasady"),(0,o.kt)("p",null,"W\u0142a\u015bnie otrzyma\u0142e\u015b maskotk\u0119 Trace. Do\u0142\u0105cz do zespo\u0142u TraceAcrossTheWorld, kt\xf3ry wyrusza w szalon\u0105 przygod\u0119, zabieraj\u0105c go ",(0,o.kt)("strong",{parentName:"p"},"dooko\u0142a \u015bwiata"),"."),(0,o.kt)("p",null,"Oto kilka zasad, kt\xf3re pomog\u0105 Ci dowiedzie\u0107 si\u0119, jak mo\u017cesz nam pom\xf3c!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nast\u0119pnym celem podr\xf3\u017cy")," Trace jest :")),(0,o.kt)("br",null),(0,o.kt)("div",{className:"text-center",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"5vh"}},(0,o.kt)("div",null,(0,o.kt)(i.Z,{mdxType:"NextCity"}))),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Czy uwa\u017casz, \u017ce w ci\u0105gu najbli\u017cszych kilku dni b\u0119dziesz pod\u0105\u017ca\u0107 we w\u0142a\u015bciwym kierunku? ",(0,o.kt)("strong",{parentName:"li"},"Zatrzymaj Trace przy sobie")," i poprowad\u017a j\u0105 naprz\xf3d najlepiej jak potrafisz.\nNie ma znaczenia, je\u015bli nie uda ci si\u0119 dotrze\u0107 do nast\u0119pnego celu. Wa\u017cne jest, aby Trace ",(0,o.kt)("strong",{parentName:"li"},"pod\u0105\u017ca\u0142 we w\u0142a\u015bciwym kierunku."),"  ")),(0,o.kt)("p",null,"Nawet kilka kilometr\xf3w to du\u017ca pomoc dla Trace!\nPo drodze by\u0142oby wspaniale, gdyby\u015b m\xf3g\u0142 zrobi\u0107 ",(0,o.kt)("strong",{parentName:"p"},"zdj\u0119cie lub nagra\u0107 film z maskotk\u0105")," Trace przed miejscem, kt\xf3re szczeg\xf3lnie Ci si\u0119 podoba i kt\xf3re chcia\u0142by\u015b nam pokaza\u0107!\nI pami\u0119taj: wy\u015bcig nie lata!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nie s\u0105dzisz, \u017ce mo\u017cesz pom\xf3c Trace ruszy\u0107 dalej? Nie panikuj! Przejd\u017a od razu do nast\u0119pnego etapu.")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{src:"/img/Mascotte/Resize/lama-with-friends.svg",alt:"Trace Mascot",width:"300",height:"300"})),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Teraz nadszed\u0142 czas, aby ",(0,o.kt)("strong",{parentName:"p"},"przekaza\u0107 pa\u0142eczk\u0119.")," Poszukaj kogo\u015b, kogo znasz, kto b\u0119dzie pod\u0105\u017ca\u0142 we w\u0142a\u015bciwym kierunku, aby ",(0,o.kt)("strong",{parentName:"p"},"doprowadzi\u0107 Trace do nast\u0119pnego celu."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nie znasz nikogo, kto m\xf3g\u0142by nam pom\xf3c? Dost\u0119pne s\u0105 trzy opcje"))),(0,o.kt)("br",null),(0,o.kt)(r.Z,{spacing:2,alignItems:"center",mdxType:"Stack"},(0,o.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Skontaktuj si\u0119 z grup\u0105 ",(0,o.kt)("a",{href:"https://chat.whatsapp.com/FKwW0q23yVk3OdKNKAxGnE",target:"_blank",rel:"noopener noreferrer"},"WhatsApp")," . ",(0,o.kt)("br",null)," By\u0107 mo\u017ce b\u0119dziemy w stanie pom\xf3c ci znale\u017a\u0107 kogo\u015b bliskiego, kto pomo\u017ce ci ruszy\u0107 Trace do przodu."),(0,o.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Udaj si\u0119 do najbli\u017cszego ",(0,o.kt)("a",{href:"https://www.hostelworld.com/",target:"_blank",rel:"noopener noreferrer"},"schroniska m\u0142odzie\u017cowego")," i wyja\u015bnij tamtejszym mieszka\u0144com, na czym polega projekt. ",(0,o.kt)("br",null)," Z pewno\u015bci\u0105 znajd\u0105 si\u0119 podr\xf3\u017cnicy zainteresowani wzi\u0119ciem udzia\u0142u w tej przygodzie!"),(0,o.kt)("div",{className:"contour-ombre",style:{width:"100%",textAlign:"center"}},"Cofnij si\u0119 o kilka kilometr\xf3w, aby znale\u017a\u0107 kogo\u015b, kto mo\u017ce by\u0107 zainteresowany! Lepiej si\u0119 wycofa\u0107, by przekaza\u0107 pa\u0142eczk\u0119, ni\u017c zatrzyma\u0107!")),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Kiedy przeka\u017cesz maskotk\u0119, pami\u0119taj, aby da\u0107 j\u0105 komu\u015b ",(0,o.kt)("strong",{parentName:"p"},"zmotywowanemu przez projekt")," i pokaza\u0107 mu t\u0119 stron\u0119 internetow\u0105 ze wszystkimi wyja\u015bnieniami, aby mia\u0142 wszystkie informacje potrzebne do kontynuowania przygody!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Przed wyjazdem ",(0,o.kt)("strong",{parentName:"p"},"zr\xf3bcie sobie zdj\u0119cie z maskotk\u0105")," i wy\u015blijcie je do nas ",(0,o.kt)("a",{href:"https://www.instagram.com/traceacrosstheworld/",target:"_blank",rel:"noopener noreferrer"},"tutaj"),"!"))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("img",{src:"/img/Mascotte/Resize/lamaoncomputerinstagram.svg",alt:"Instagram Mascot",width:"300",height:"300"})),(0,o.kt)("h2",{style:{textAlign:"center"}},"Przypadki szczeg\xf3lne"),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Trace zdecydowa\u0142 si\u0119 ",(0,o.kt)("strong",{parentName:"p"},"nie lata\u0107")," podczas tej podr\xf3\u017cy. Aby przep\u0142yn\u0105\u0107 morze, musisz znale\u017a\u0107 oddanego \u017ceglarza w najbli\u017cszym porcie!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Je\u015bli masz jakie\u015b pytania, nie wahaj si\u0119 wys\u0142a\u0107 e-maila na adres kontaktowy (",(0,o.kt)("a",{parentName:"p",href:"mailto:traceacrosstheworld@gmail.com"},"traceacrosstheworld@gmail.com"),") lub opublikowa\u0107 wiadomo\u015b\u0107 na stronie projektu ",(0,o.kt)("a",{href:"https://chat.whatsapp.com/FKwW0q23yVk3OdKNKAxGnE",target:"_blank",rel:"noopener noreferrer"},"WhatsApp")," !")))))}d.isMDXComponent=!0}}]);