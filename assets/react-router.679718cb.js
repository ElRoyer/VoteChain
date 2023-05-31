import{r as n}from"./react.bd8c6b34.js";import{i as f,A as O,p as L,s as J,g as T,r as _,j as B,m as z,a as V}from"./@remix-run.36109b84.js";import{j as d,a as W,F as q}from"./@emotion.f09edc96.js";/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},E.apply(this,arguments)}const j=n.exports.createContext(null),G=n.exports.createContext(null),R=n.exports.createContext(null),b=n.exports.createContext(null),C=n.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),D=n.exports.createContext(null);function P(){return n.exports.useContext(b)!=null}function M(){return P()||f(!1),n.exports.useContext(b).location}function F(e){n.exports.useContext(R).static||n.exports.useLayoutEffect(e)}function ue(){let{isDataRoute:e}=n.exports.useContext(C);return e?ne():K()}function K(){P()||f(!1);let{basename:e,navigator:t}=n.exports.useContext(R),{matches:r}=n.exports.useContext(C),{pathname:o}=M(),s=JSON.stringify(T(r).map(i=>i.pathnameBase)),a=n.exports.useRef(!1);return F(()=>{a.current=!0}),n.exports.useCallback(function(i,l){if(l===void 0&&(l={}),!a.current)return;if(typeof i=="number"){t.go(i);return}let u=_(i,JSON.parse(s),o,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:B([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,s,o])}const Q=n.exports.createContext(null);function X(e){let t=n.exports.useContext(C).outlet;return t&&d(Q.Provider,{value:e,children:t})}function Y(e,t){return Z(e,t)}function Z(e,t,r){P()||f(!1);let{navigator:o}=n.exports.useContext(R),{matches:s}=n.exports.useContext(C),a=s[s.length-1],c=a?a.params:{};a&&a.pathname;let i=a?a.pathnameBase:"/";a&&a.route;let l=M(),u;if(t){var x;let p=typeof t=="string"?L(t):t;i==="/"||((x=p.pathname)==null?void 0:x.startsWith(i))||f(!1),u=p}else u=l;let v=u.pathname||"/",g=i==="/"?v:v.slice(i.length)||"/",m=z(e,{pathname:g}),h=H(m&&m.map(p=>Object.assign({},p,{params:Object.assign({},c,p.params),pathname:B([i,o.encodeLocation?o.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?i:B([i,o.encodeLocation?o.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,r);return t&&h?d(b.Provider,{value:{location:E({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:O.Pop},children:h}):h}function $(){let e=oe(),t=V(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null;return W(q,{children:[d("h2",{children:"Unexpected Application Error!"}),d("h3",{style:{fontStyle:"italic"},children:t}),r?d("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:r}):null,null]})}const w=d($,{});class S extends n.exports.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?d(C.Provider,{value:this.props.routeContext,children:d(D.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function A(e){let{routeContext:t,match:r,children:o}=e,s=n.exports.useContext(j);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),d(C.Provider,{value:t,children:o})}function H(e,t,r){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var s;if((s=r)!=null&&s.errors)e=r.matches;else return null}let a=e,c=(o=r)==null?void 0:o.errors;if(c!=null){let i=a.findIndex(l=>l.route.id&&(c==null?void 0:c[l.route.id]));i>=0||f(!1),a=a.slice(0,Math.min(a.length,i+1))}return a.reduceRight((i,l,u)=>{let x=l.route.id?c==null?void 0:c[l.route.id]:null,v=null;r&&(v=l.route.errorElement||w);let g=t.concat(a.slice(0,u+1)),m=()=>{let h;return x?h=v:l.route.Component?h=n.exports.createElement(l.route.Component,null):l.route.element?h=l.route.element:h=i,d(A,{match:l,routeContext:{outlet:i,matches:g,isDataRoute:r!=null},children:h})};return r&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?d(S,{location:r.location,revalidation:r.revalidation,component:v,error:x,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var N;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(N||(N={}));var y;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(y||(y={}));function ee(e){let t=n.exports.useContext(j);return t||f(!1),t}function te(e){let t=n.exports.useContext(G);return t||f(!1),t}function re(e){let t=n.exports.useContext(C);return t||f(!1),t}function k(e){let t=re(),r=t.matches[t.matches.length-1];return r.route.id||f(!1),r.route.id}function oe(){var e;let t=n.exports.useContext(D),r=te(y.UseRouteError),o=k(y.UseRouteError);return t||((e=r.errors)==null?void 0:e[o])}function ne(){let{router:e}=ee(N.UseNavigateStable),t=k(y.UseNavigateStable),r=n.exports.useRef(!1);return F(()=>{r.current=!0}),n.exports.useCallback(function(s,a){a===void 0&&(a={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,E({fromRouteId:t},a)))},[e,t])}function ce(e){return X(e.context)}function ae(e){f(!1)}function pe(e){let{basename:t="/",children:r=null,location:o,navigationType:s=O.Pop,navigator:a,static:c=!1}=e;P()&&f(!1);let i=t.replace(/^\/*/,"/"),l=n.exports.useMemo(()=>({basename:i,navigator:a,static:c}),[i,a,c]);typeof o=="string"&&(o=L(o));let{pathname:u="/",search:x="",hash:v="",state:g=null,key:m="default"}=o,h=n.exports.useMemo(()=>{let p=J(u,i);return p==null?null:{location:{pathname:p,search:x,hash:v,state:g,key:m},navigationType:s}},[i,u,x,v,g,m,s]);return h==null?null:d(R.Provider,{value:l,children:d(b.Provider,{children:r,value:h})})}function de(e){let{children:t,location:r}=e;return Y(U(t),r)}var I;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(I||(I={}));new Promise(()=>{});function U(e,t){t===void 0&&(t=[]);let r=[];return n.exports.Children.forEach(e,(o,s)=>{if(!n.exports.isValidElement(o))return;let a=[...t,s];if(o.type===n.exports.Fragment){r.push.apply(r,U(o.props.children,a));return}o.type!==ae&&f(!1),!o.props.index||!o.props.children||f(!1);let c={id:o.props.id||a.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=U(o.props.children,a)),r.push(c)}),r}export{ce as O,pe as R,de as a,ae as b,ue as u};
