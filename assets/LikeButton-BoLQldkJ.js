import{d as p,b as h,j as i}from"./index-DXl8ZGTs.js";import{r as u}from"./react-vendor-KOjhOASN.js";import{f as L,h as y,m as b,j,u as S,k as v}from"./firebase-vendor-CMaS3_GD.js";import{y as N}from"./ui-vendor-CH5ACy0w.js";const $=(g,m)=>{const[f,r]=u.useState(0),[n,c]=u.useState(!1),[t,l]=u.useState(!0),s=`${m}_${g}`,a=`liked_${s}`;return u.useEffect(()=>{const o=localStorage.getItem(a)==="true";c(o);const e=L(p,"likes",s),x=y(e,d=>{d.exists()?r(d.data().count||0):r(0),l(!1)},d=>{console.error("Error escuchando likes:",d),l(!1)});return()=>x()},[s,a]),{likes:f,isLiked:n,toggleLike:async()=>{const o=!n;c(o),r(e=>o?e+1:e-1),o?localStorage.setItem(a,"true"):localStorage.removeItem(a);try{const e=L(p,"likes",s);(await b(e)).exists()?await S(e,{count:v(o?1:-1)}):o&&await j(e,{count:1})}catch(e){console.error("Error actualizando likes:",e)}},loading:t}},R=({itemId:g,itemType:m,className:f="",showCount:r=!0,size:n=20})=>{const{likes:c,isLiked:t,toggleLike:l,loading:s}=$(g,m),{addNotification:a}=h();return i.jsxs("button",{onClick:k=>{k.stopPropagation(),t||a("¡Agregado a Tendencias!","Has apoyado este contenido con tu like.","/favoritos"),l()},disabled:s,className:`
        group flex items-center gap-1.5 transition-all active:scale-95
        ${f}
      `,title:t?"Quitar me gusta":"Me gusta",children:[i.jsxs("div",{className:`
        relative flex items-center justify-center
        transition-transform duration-300
        ${t?"scale-110":"group-hover:scale-110"}
      `,children:[i.jsx(N,{size:n,className:`
            transition-colors duration-300
            ${t?"fill-red-500 text-red-500 drop-shadow-sm":"text-gray-400 dark:text-gray-500 group-hover:text-red-400"}
          `}),t&&i.jsx("span",{className:"absolute inset-0 animate-ping opacity-75 rounded-full bg-red-400/20"})]}),r&&i.jsx("span",{className:`
          text-sm font-medium tabular-nums transition-colors duration-300
          ${t?"text-red-600 dark:text-red-400":"text-gray-500 dark:text-gray-400 group-hover:text-red-500/70"}
        `,children:s?"...":c})]})};export{R as L};
