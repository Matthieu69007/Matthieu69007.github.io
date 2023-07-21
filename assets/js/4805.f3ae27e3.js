/*! For license information please see 4805.f3ae27e3.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4805],{9974:(e,t,o)=>{o.d(t,{Z:()=>b});var a=o(7462),r=o(3366),n=o(7294),i=o(6010),s=o(4780),l=o(1657),c=o(948),d=o(1588),m=o(4867);function u(e){return(0,m.Z)("MuiCardActionArea",e)}const p=(0,d.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var v=o(9063),h=o(5893);const g=["children","className","focusVisibleClassName"],f=(0,c.ZP)(v.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${p.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${p.focusVisible} .${p.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),Z=(0,c.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})((({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}))),b=n.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiCardActionArea"}),{children:n,className:c,focusVisibleClassName:d}=o,m=(0,r.Z)(o,g),p=o,v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},u,t)})(p);return(0,h.jsxs)(f,(0,a.Z)({className:(0,i.Z)(v.root,c),focusVisibleClassName:(0,i.Z)(d,v.focusVisible),ref:t,ownerState:p},m,{children:[n,(0,h.jsx)(Z,{className:v.focusHighlight,ownerState:p})]}))}))},4267:(e,t,o)=>{o.d(t,{Z:()=>g});var a=o(7462),r=o(3366),n=o(7294),i=o(6010),s=o(4780),l=o(948),c=o(1657),d=o(1588),m=o(4867);function u(e){return(0,m.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var p=o(5893);const v=["className","component"],h=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),g=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:n,component:l="div"}=o,d=(0,r.Z)(o,v),m=(0,a.Z)({},o,{component:l}),g=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u,t)})(m);return(0,p.jsx)(h,(0,a.Z)({as:l,className:(0,i.Z)(g.root,n),ownerState:m,ref:t},d))}))},3965:(e,t,o)=>{o.d(t,{Z:()=>Z});var a=o(3366),r=o(7462),n=o(7294),i=o(6010),s=o(4780),l=o(1657),c=o(948),d=o(1588),m=o(4867);function u(e){return(0,m.Z)("MuiCardMedia",e)}(0,d.Z)("MuiCardMedia",["root","media","img"]);var p=o(5893);const v=["children","className","component","image","src","style"],h=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{isMediaComponent:a,isImageComponent:r}=o;return[t.root,a&&t.media,r&&t.img]}})((({ownerState:e})=>(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),g=["video","audio","picture","iframe","img"],f=["picture","img"],Z=n.forwardRef((function(e,t){const o=(0,l.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:c,component:d="div",image:m,src:Z,style:b}=o,w=(0,a.Z)(o,v),y=-1!==g.indexOf(d),x=!y&&m?(0,r.Z)({backgroundImage:`url("${m}")`},b):b,S=(0,r.Z)({},o,{component:d,isMediaComponent:y,isImageComponent:-1!==f.indexOf(d)}),M=(e=>{const{classes:t,isMediaComponent:o,isImageComponent:a}=e,r={root:["root",o&&"media",a&&"img"]};return(0,s.Z)(r,u,t)})(S);return(0,p.jsx)(h,(0,r.Z)({className:(0,i.Z)(M.root,c),as:d,role:!y&&m?"img":void 0,ref:t,style:x,ownerState:S,src:y?m||Z:void 0},w,{children:n}))}))},9937:(e,t,o)=>{o.d(t,{Z:()=>x});var a=o(7462),r=o(3366),n=o(7294),i=o(6010),s=o(4780),l=o(948),c=o(1657),d=o(1796);const m=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var u=o(1588),p=o(4867);function v(e){return(0,p.Z)("MuiPaper",e)}(0,u.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=o(5893);const g=["className","component","elevation","square","variant"],f=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,"elevation"===o.variant&&t[`elevation${o.elevation}`]]}})((({theme:e,ownerState:t})=>{var o;return(0,a.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,a.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,d.Fq)("#fff",m(t.elevation))}, ${(0,d.Fq)("#fff",m(t.elevation))})`},e.vars&&{backgroundImage:null==(o=e.vars.overlays)?void 0:o[t.elevation]}))})),Z=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiPaper"}),{className:n,component:l="div",elevation:d=1,square:m=!1,variant:u="elevation"}=o,p=(0,r.Z)(o,g),Z=(0,a.Z)({},o,{component:l,elevation:d,square:m,variant:u}),b=(e=>{const{square:t,elevation:o,variant:a,classes:r}=e,n={root:["root",a,!t&&"rounded","elevation"===a&&`elevation${o}`]};return(0,s.Z)(n,v,r)})(Z);return(0,h.jsx)(f,(0,a.Z)({as:l,ownerState:Z,className:(0,i.Z)(b.root,n),ref:t},p))}));function b(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);const w=["className","raised"],y=(0,l.ZP)(Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),x=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=o,d=(0,r.Z)(o,w),m=(0,a.Z)({},o,{raised:l}),u=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},b,t)})(m);return(0,h.jsx)(y,(0,a.Z)({className:(0,i.Z)(u.root,n),elevation:l?8:void 0,ref:t,ownerState:m},d))}))},5582:(e,t,o)=>{o.d(t,{Z:()=>x});var a=o(3366),r=o(7462),n=o(7294),i=o(6010),s=o(4142),l=o(4867),c=o(4780),d=o(9628),m=o(3264),u=o(6842),p=o(5893);const v=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,u.Z)(),g=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),f=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:h});var Z=o(8216),b=o(948),w=o(1657);const y=function(e={}){const{createStyledComponent:t=g,useThemeProps:o=f,componentName:d="MuiContainer"}=e,m=t((({theme:e,ownerState:t})=>(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,o)=>{const a=o,r=e.breakpoints.values[a];return 0!==r&&(t[e.breakpoints.up(a)]={maxWidth:`${r}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,r.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=n.forwardRef((function(e,t){const n=o(e),{className:u,component:h="div",disableGutters:g=!1,fixed:f=!1,maxWidth:Z="lg"}=n,b=(0,a.Z)(n,v),w=(0,r.Z)({},n,{component:h,disableGutters:g,fixed:f,maxWidth:Z}),y=((e,t)=>{const{classes:o,fixed:a,disableGutters:r,maxWidth:n}=e,i={root:["root",n&&`maxWidth${(0,s.Z)(String(n))}`,a&&"fixed",r&&"disableGutters"]};return(0,c.Z)(i,(e=>(0,l.Z)(t,e)),o)})(w,d);return(0,p.jsx)(m,(0,r.Z)({as:h,ownerState:w,className:(0,i.Z)(y.root,u),ref:t},b))}));return u}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${(0,Z.Z)(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,w.Z)({props:e,name:"MuiContainer"})}),x=y},9225:(e,t,o)=>{o.d(t,{Z:()=>y});var a=o(3366),r=o(7462),n=o(4780),i=o(6010),s=o(7294),l=o(948),c=o(1657),d=o(8216),m=o(1588),u=o(4867);function p(e){return(0,u.Z)("MuiImageListItemBar",e)}(0,m.Z)("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);var v=o(5893);const h=["actionIcon","actionPosition","className","subtitle","title","position"],g=(0,l.ZP)("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,d.Z)(o.position)}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},"bottom"===t.position&&{bottom:0},"top"===t.position&&{top:0},"below"===t.position&&{position:"relative",background:"transparent",alignItems:"normal"}))),f=(0,l.ZP)("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.titleWrap,t[`titleWrap${(0,d.Z)(o.position)}`],o.actionIcon&&t[`titleWrapActionPos${(0,d.Z)(o.actionPosition)}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({flexGrow:1,padding:"12px 16px",color:(e.vars||e).palette.common.white,overflow:"hidden"},"below"===t.position&&{padding:"6px 0 12px",color:"inherit"},t.actionIcon&&"left"===t.actionPosition&&{paddingLeft:0},t.actionIcon&&"right"===t.actionPosition&&{paddingRight:0}))),Z=(0,l.ZP)("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(e,t)=>t.title})((({theme:e})=>({fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}))),b=(0,l.ZP)("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(e,t)=>t.subtitle})((({theme:e})=>({fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}))),w=(0,l.ZP)("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.actionIcon,t[`actionIconActionPos${(0,d.Z)(o.actionPosition)}`]]}})((({ownerState:e})=>(0,r.Z)({},"left"===e.actionPosition&&{order:-1}))),y=s.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiImageListItemBar"}),{actionIcon:s,actionPosition:l="right",className:m,subtitle:u,title:y,position:x="bottom"}=o,S=(0,a.Z)(o,h),M=(0,r.Z)({},o,{position:x,actionPosition:l}),I=(e=>{const{classes:t,position:o,actionIcon:a,actionPosition:r}=e,i={root:["root",`position${(0,d.Z)(o)}`],titleWrap:["titleWrap",`titleWrap${(0,d.Z)(o)}`,a&&`titleWrapActionPos${(0,d.Z)(r)}`],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon",`actionIconActionPos${(0,d.Z)(r)}`]};return(0,n.Z)(i,p,t)})(M);return(0,v.jsxs)(g,(0,r.Z)({ownerState:M,className:(0,i.Z)(I.root,m),ref:t},S,{children:[(0,v.jsxs)(f,{ownerState:M,className:I.titleWrap,children:[(0,v.jsx)(Z,{className:I.title,children:y}),u?(0,v.jsx)(b,{className:I.subtitle,children:u}):null]}),s?(0,v.jsx)(w,{ownerState:M,className:I.actionIcon,children:s}):null]}))}))},9007:(e,t,o)=>{o.d(t,{Z:()=>b});var a=o(3366),r=o(7462),n=o(4780),i=o(6010),s=o(7294),l=(o(6607),o(2917)),c=o(948),d=o(1657),m=o(1579),u=o(1588),p=o(4867);function v(e){return(0,p.Z)("MuiImageListItem",e)}const h=(0,u.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]);var g=o(5893);const f=["children","className","cols","component","rows","style"],Z=(0,c.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${h.img}`]:t.img},t.root,t[o.variant]]}})((({ownerState:e})=>(0,r.Z)({display:"block",position:"relative"},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${h.img}`]:(0,r.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===e.variant&&{height:"auto",flexGrow:1})}))),b=s.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiImageListItem"}),{children:c,className:u,cols:p=1,component:h="li",rows:b=1,style:w}=o,y=(0,a.Z)(o,f),{rowHeight:x="auto",gap:S,variant:M}=s.useContext(l.Z);let I="auto";"woven"===M?I=void 0:"auto"!==x&&(I=x*b+S*(b-1));const R=(0,r.Z)({},o,{cols:p,component:h,gap:S,rowHeight:x,rows:b,variant:M}),C=(e=>{const{classes:t,variant:o}=e,a={root:["root",o],img:["img"]};return(0,n.Z)(a,v,t)})(R);return(0,g.jsx)(Z,(0,r.Z)({as:h,className:(0,i.Z)(C.root,C[M],u),ref:t,style:(0,r.Z)({height:I,gridColumnEnd:"masonry"!==M?`span ${p}`:void 0,gridRowEnd:"masonry"!==M?`span ${b}`:void 0,marginBottom:"masonry"===M?S:void 0},w),ownerState:R},y,{children:s.Children.map(c,(e=>s.isValidElement(e)?"img"===e.type||(0,m.Z)(e,["Image"])?s.cloneElement(e,{className:(0,i.Z)(C.img,e.props.className)}):e:null))}))}))},5450:(e,t,o)=>{o.d(t,{Z:()=>f});var a=o(3366),r=o(7462),n=o(4780),i=o(6010),s=o(7294),l=o(948),c=o(1657),d=o(1588),m=o(4867);function u(e){return(0,m.Z)("MuiImageList",e)}(0,d.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var p=o(2917),v=o(5893);const h=["children","className","cols","component","rowHeight","gap","style","variant"],g=(0,l.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant]]}})((({ownerState:e})=>(0,r.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"}))),f=s.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiImageList"}),{children:l,className:d,cols:m=2,component:f="ul",rowHeight:Z="auto",gap:b=4,style:w,variant:y="standard"}=o,x=(0,a.Z)(o,h),S=s.useMemo((()=>({rowHeight:Z,gap:b,variant:y})),[Z,b,y]);s.useEffect((()=>{0}),[]);const M="masonry"===y?(0,r.Z)({columnCount:m,columnGap:b},w):(0,r.Z)({gridTemplateColumns:`repeat(${m}, 1fr)`,gap:b},w),I=(0,r.Z)({},o,{component:f,gap:b,rowHeight:Z,variant:y}),R=(e=>{const{classes:t,variant:o}=e,a={root:["root",o]};return(0,n.Z)(a,u,t)})(I);return(0,v.jsx)(g,(0,r.Z)({as:f,className:(0,i.Z)(R.root,R[y],d),ref:t,style:M,ownerState:I},x,{children:(0,v.jsx)(p.Z.Provider,{value:S,children:l})}))}))},2917:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o(7294).createContext({})},5861:(e,t,o)=>{o.d(t,{Z:()=>w});var a=o(3366),r=o(7462),n=o(7294),i=o(6010),s=o(9707),l=o(4780),c=o(948),d=o(1657),m=o(8216),u=o(1588),p=o(4867);function v(e){return(0,p.Z)("MuiTypography",e)}(0,u.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=o(5893);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.variant&&t[o.variant],"inherit"!==o.align&&t[`align${(0,m.Z)(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiTypography"}),n=(e=>b[e]||e)(o.color),c=(0,s.Z)((0,r.Z)({},o,{color:n})),{align:u="inherit",className:p,component:w,gutterBottom:y=!1,noWrap:x=!1,paragraph:S=!1,variant:M="body1",variantMapping:I=Z}=c,R=(0,a.Z)(c,g),C=(0,r.Z)({},c,{align:u,color:n,className:p,component:w,gutterBottom:y,noWrap:x,paragraph:S,variant:M,variantMapping:I}),N=w||(S?"p":I[M]||Z[M])||"span",W=(e=>{const{align:t,gutterBottom:o,noWrap:a,paragraph:r,variant:n,classes:i}=e,s={root:["root",n,"inherit"!==e.align&&`align${(0,m.Z)(t)}`,o&&"gutterBottom",a&&"noWrap",r&&"paragraph"]};return(0,l.Z)(s,v,i)})(C);return(0,h.jsx)(f,(0,r.Z)({as:N,ref:t,ownerState:C,className:(0,i.Z)(W.root,p)},R))}))},3023:(e,t)=>{var o,a=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function f(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case n:case s:case i:case u:case p:return e;default:switch(e=e&&e.$$typeof){case d:case c:case m:case h:case v:case l:return e;default:return t}}case r:return t}}}o=Symbol.for("react.module.reference")},6607:(e,t,o)=>{o(3023)},2734:(e,t,o)=>{o.d(t,{Z:()=>i});o(7294);var a=o(6682),r=o(3230),n=o(606);function i(){const e=(0,a.Z)(r.Z);return e[n.Z]||e}},8396:(e,t,o)=>{var a;o.d(t,{Z:()=>m});var r=o(7294),n=o(4168),i=o(1014),s=o(8974);function l(e,t,o,a,n){const[i,l]=r.useState((()=>n&&o?o(e).matches:a?a(e).matches:t));return(0,s.Z)((()=>{let t=!0;if(!o)return;const a=o(e),r=()=>{t&&l(a.matches)};return r(),a.addListener(r),()=>{t=!1,a.removeListener(r)}}),[e,o]),i}const c=(a||(a=o.t(r,2))).useSyncExternalStore;function d(e,t,o,a,n){const i=r.useCallback((()=>t),[t]),s=r.useMemo((()=>{if(n&&o)return()=>o(e).matches;if(null!==a){const{matches:t}=a(e);return()=>t}return i}),[i,e,a,n,o]),[l,d]=r.useMemo((()=>{if(null===o)return[i,()=>()=>{}];const t=o(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[i,o,e]);return c(d,l,s)}function m(e,t={}){const o=(0,n.Z)(),a="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:r=!1,matchMedia:s=(a?window.matchMedia:null),ssrMatchMedia:m=null,noSsr:u=!1}=(0,i.Z)({name:"MuiUseMediaQuery",props:t,theme:o});let p="function"==typeof e?e(o):e;p=p.replace(/^@media( ?)/m,"");return(void 0!==c?d:l)(p,r,s,m,u)}}}]);