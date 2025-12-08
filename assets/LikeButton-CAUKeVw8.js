import{d as x,b as h,j as i}from"./index-Gw0U-fCe.js";import{r as u}from"./react-vendor-KOjhOASN.js";import{f as L,h as b,m as y,j,u as v,k as $}from"./firebase-vendor-CMaS3_GD.js";import{y as S}from"./ui-vendor-CH5ACy0w.js";const N=(g,n)=>{const[m,r]=u.useState(0),[c,l]=u.useState(!1),[f,t]=u.useState(!0),o=`${n}_${g}`,a=`liked_${o}`;return u.useEffect(()=>{const s=localStorage.getItem(a)==="true";l(s);const e=L(x,"likes",o),k=b(e,d=>{d.exists()?r(d.data().count||0):r(0),t(!1)},d=>{console.error("Error escuchando likes:",d),t(!1)});return()=>k()},[o,a]),{likes:m,isLiked:c,toggleLike:async()=>{const s=!c;l(s),r(e=>s?e+1:e-1),s?localStorage.setItem(a,"true"):localStorage.removeItem(a);try{const e=L(x,"likes",o);(await y(e)).exists()?await v(e,{count:$(s?1:-1)}):s&&await j(e,{count:1})}catch(e){console.error("Error actualizando likes:",e)}},loading:f}},C=({itemId:g,itemType:n,itemTitle:m,className:r="",showCount:c=!0,size:l=20})=>{const{likes:f,isLiked:t,toggleLike:o,loading:a}=N(g,n),{addNotification:p}=h(),s=()=>{switch(n){case"chapter":return"Capítulo";case"podcast":return"Podcast";case"devotional":return"Devocional";case"topic":return"Tema";default:return"Contenido"}};return i.jsxs("button",{onClick:e=>{e.stopPropagation(),t||p(`¡${s()} Guardado!`,`Has agregado "${m}" a tus tendencias.`,"/favoritos"),o()},disabled:a,className:`
        group flex items-center gap-1.5 transition-all active:scale-95
        ${r}
      `,title:t?"Quitar me gusta":"Me gusta",children:[i.jsxs("div",{className:`
        relative flex items-center justify-center
        transition-transform duration-300
        ${t?"scale-110":"group-hover:scale-110"}
      `,children:[i.jsx(S,{size:l,className:`
            transition-colors duration-300
            ${t?"fill-red-500 text-red-500 drop-shadow-sm":"text-gray-400 dark:text-gray-500 group-hover:text-red-400"}
          `}),t&&i.jsx("span",{className:"absolute inset-0 animate-ping opacity-75 rounded-full bg-red-400/20"})]}),c&&i.jsx("span",{className:`
          text-sm font-medium tabular-nums transition-colors duration-300
          ${t?"text-red-600 dark:text-red-400":"text-gray-500 dark:text-gray-400 group-hover:text-red-500/70"}
        `,children:a?"...":f})]})};export{C as L};
