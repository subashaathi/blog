(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1033:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>d,routeModule:()=>m,tree:()=>c}),s(2232),s(7764),s(5866);var a=s(3191),r=s(8716),i=s(7922),l=s.n(i),n=s(5231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,2232)),"C:\\Users\\subas\\Desktop\\blogger-main\\blogger-main\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,7764)),"C:\\Users\\subas\\Desktop\\blogger-main\\blogger-main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\subas\\Desktop\\blogger-main\\blogger-main\\app\\page.js"],x="/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2036:(e,t,s)=>{Promise.resolve().then(s.bind(s,5256))},5256:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var a=s(326),r=s(5259),i=s(7577),l=s(6226),n=s(434);let o=({title:e,description:t,category:s,image:i,id:o})=>(0,a.jsxs)("div",{className:"max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]",children:[a.jsx(n.default,{href:`/blogs/${o}`,children:a.jsx(l.default,{src:i,alt:"",width:400,height:400,className:"border-b border-black"})}),(0,a.jsxs)("p",{className:"ml-5 mt-5 px-1 inline-block bg-black text-white text-sm",children:[s," "]}),(0,a.jsxs)("div",{className:"p-5",children:[a.jsx("h5",{className:"mb-2 text-lg font-medium tracking-tight text-gray-900",children:e}),a.jsx("p",{className:"mb-3 text-sm tracking-tight text-gray-700",children:t}),(0,a.jsxs)(n.default,{href:`/blogs/${o}`,className:"inline-flex items-center py-2 font-semibold text-center",children:["Read more ",a.jsx(l.default,{src:r.L.arrow,className:"ml-2",alt:" ",width:12})]})]})]}),c=()=>{let[e,t]=(0,i.useState)("All");return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-center gap-6 my-10",children:[a.jsx("button",{onClick:()=>t("All"),className:"All"===e?"bg-black text-white py-1 px-4 rounded-sm":"",children:"All"}),a.jsx("button",{onClick:()=>t("Technology"),className:"Technology"===e?"bg-black text-white py-1 px-4 rounded-sm":"",children:"Technology"}),a.jsx("button",{onClick:()=>t("Startup"),className:"Startup"===e?"bg-black text-white py-1 px-4 rounded-sm":"",children:"Startup"}),a.jsx("button",{onClick:()=>t("Lifestyle"),className:"Lifestyle"===e?"bg-black text-white py-1 px-4 rounded-sm":"",children:"Lifestyle"})]}),a.jsx("div",{className:"flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24",children:r._.filter(t=>"All"===e||t.category===e).map((e,t)=>a.jsx(o,{id:e.id,image:e.image,title:e.title,d:e.description,category:e.category},t))})]})};var d=s(8359);let x=()=>a.jsx("div",{children:(0,a.jsxs)("div",{className:"py-5px-5 md:px-12 lg:px-28",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[a.jsx(l.default,{src:r.L.logo,width:180,alt:"",className:"[130px] sm:w-auto"}),(0,a.jsxs)("button",{className:"flex items-center gap-2 font-medium py-1 px-3 sm:py-3 px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]",children:["Get Started",a.jsx(l.default,{src:r.L.arrow})]})]}),(0,a.jsxs)("div",{className:"text-center my-8 ",children:[a.jsx("h1",{className:"text-3xl sm::text-5xl font-medium",children:"Latest Blogs"}),a.jsx("p",{className:"mt-10 max-w-[740px] m-auto text-xs sm:text-base",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a dolor similique dicta consectetur ab quasi"}),(0,a.jsxs)("form",{className:"flex justify-between max-w[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] ",action:"",children:[a.jsx("input",{type:"email",placeholder:"Enter Your email..",className:"pl-4 outline-none"}),a.jsx("button",{type:"submit",className:"border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white",children:" Subscribe"})]})]})]})});function p(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx(x,{}),a.jsx(c,{}),a.jsx(d.Z,{})]})}},2232:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>i,default:()=>n});var a=s(8570);let r=(0,a.createProxy)(String.raw`C:\Users\subas\Desktop\blogger-main\blogger-main\app\page.js`),{__esModule:i,$$typeof:l}=r;r.default;let n=(0,a.createProxy)(String.raw`C:\Users\subas\Desktop\blogger-main\blogger-main\app\page.js#default`)}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,766,450,458],()=>s(1033));module.exports=a})();