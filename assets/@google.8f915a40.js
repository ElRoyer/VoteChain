import{e as w,d as qo}from"./@lit.7976db5b.js";import{D as Wo,K as Xo,E as Ee,G as Ko,V as Kt,M as S,B as Yo,F as Zo,a as Mi,P as ps,b as D,c as ja,d as Ei,X as Qo,S as rs,T as Ga,e as Zt,O as Fi,W as ls,f as Jo,g as tr,h as qa,i as Wa,j as $i,k as cs,l as fs,m as Xa,n as gs,o as Ka,R as er,H as Ya,p as sr,s as bs,q as ir,r as Za,L as ye,C as Vi,N as nr,t as ar,u as or,A as rr,v as Qa,w as Bi,x as lr,y as cr,z as Ja,I as hr,J as ur,Q as dr,U as jt,Y as zi,Z as mr,_ as pr,$ as fr,a0 as to,a1 as eo,a2 as so,a3 as ki,a4 as gr,a5 as br,a6 as Qe}from"./three.a68e5136.js";import{x as vs,B as vr}from"./lit-html.c373ec5d.js";import"./lit-element.1215df8c.js";/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,no=io&&self.XRSession.prototype.requestHitTestSource!=null,xs=self.ResizeObserver!=null,Ts=self.IntersectionObserver!=null,ao=no;(()=>{const l=navigator.userAgent||navigator.vendor||self.opera;let t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(l)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(l.substr(0,4)))&&(t=!0),t})();/\bCrOS\b/.test(navigator.userAgent);const yr=/android/i.test(navigator.userAgent),oo=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;/Safari\//.test(navigator.userAgent);const wr=/firefox/i.test(navigator.userAgent),Sr=/OculusBrowser/.test(navigator.userAgent);oo&&/CriOS\//.test(navigator.userAgent);const xr=yr&&!wr&&!Sr,Tr=Boolean(window.webkit&&window.webkit.messageHandlers),Ui=(()=>{if(oo){if(Tr)return Boolean(/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent));{const l=document.createElement("a");return Boolean(l.relList&&l.relList.supports&&l.relList.supports("ar"))}}else return!1})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=l=>!!l&&l!=="null"?Mr(l):null,Hi=()=>{if(ao)return;const l=[];throw io||l.push("WebXR Device API"),no||l.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${l.join(", ")}`)},Mr=l=>new URL(l,window.location.toString()).toString(),Er=(l,t)=>{let e=null;const s=(...i)=>{e==null&&(l(...i),e=self.setTimeout(()=>e=null,t))};return s.flush=()=>{e!=null&&(self.clearTimeout(e),e=null)},s},ji=(l,t)=>{let e=null;return(...s)=>{e!=null&&self.clearTimeout(e),e=self.setTimeout(()=>{e=null,l(...s)},t)}},K=(l,t,e)=>Math.max(t,Math.min(e,l)),Ar=1,Ai=(()=>{const l=(()=>{var t;if(!((t=document.documentElement.getAttribute("itemtype"))===null||t===void 0)&&t.includes("schema.org/SearchResultsPage"))return!0;const e=document.head!=null?Array.from(document.head.querySelectorAll("meta")):[];for(const s of e)if(s.name==="viewport")return!0;return!1})();return l||console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>l?window.devicePixelRatio:Ar})(),lo=(()=>{const l="model-viewer-debug-mode",t=new RegExp(`[?&]${l}(&|$)`);return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(t)})(),Rr=(l=0)=>new Promise(t=>setTimeout(t,l)),Cr=(l,t,e=null)=>new Promise(s=>{function i(n){(!e||e(n))&&(s(n),l.removeEventListener(t,i))}l.addEventListener(t,i)});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te=globalThis&&globalThis.__decorate||function(l,t,e,s){var i=arguments.length,n=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,t,e,s);else for(var o=l.length-1;o>=0;o--)(a=l[o])&&(n=(i<3?a(n):i>3?a(t,e,n):a(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n};const Lr=.5,Dr=0,Pr=1,Or=1,me=Symbol("currentEnvironmentMap"),pe=Symbol("currentBackground"),hs=Symbol("updateEnvironment"),Pe=Symbol("cancelEnvironmentUpdate"),_r=l=>{var t,e,s;class i extends l{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=Dr,this.shadowSoftness=Pr,this.exposure=Or,this[t]=null,this[e]=null,this[s]=null}updated(a){super.updated(a),a.has("shadowIntensity")&&(this[g].setShadowIntensity(this.shadowIntensity*Lr),this[N]()),a.has("shadowSoftness")&&(this[g].setShadowSoftness(this.shadowSoftness),this[N]()),a.has("exposure")&&(this[g].exposure=this.exposure,this[N]()),(a.has("environmentImage")||a.has("skyboxImage"))&&this[Yt]()&&this[hs]()}hasBakedShadow(){return this[g].bakedShadows.size>0}async[(t=me,e=pe,s=Pe,hs)](){const{skyboxImage:a,environmentImage:o}=this;this[Pe]!=null&&(this[Pe](),this[Pe]=null);const{textureUtils:r}=this[A];if(r==null)return;const c=this[Ct].beginActivity();try{const{environmentMap:d,skybox:u}=await r.generateEnvironmentMapAndSkybox(ro(a),o,m=>c(K(m,0,1)));this[me]!==d&&(this[me]=d,this.dispatchEvent(new CustomEvent("environment-change"))),u!=null?this[pe]=u.name===d.name?d:u:this[pe]=null,this[g].setEnvironmentAndSkybox(this[me],this[pe]),this[g].dispatchEvent({type:"envmap-update"})}catch(d){if(d instanceof Error)throw this[g].setEnvironmentAndSkybox(null,null),d}finally{c(1)}}}return te([w({type:String,attribute:"environment-image"})],i.prototype,"environmentImage",void 0),te([w({type:String,attribute:"skybox-image"})],i.prototype,"skyboxImage",void 0),te([w({type:Number,attribute:"shadow-intensity"})],i.prototype,"shadowIntensity",void 0),te([w({type:Number,attribute:"shadow-softness"})],i.prototype,"shadowSoftness",void 0),te([w({type:Number})],i.prototype,"exposure",void 0),i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=vs`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=vs`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=vs`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=vs`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

/* NOTE: This rule set is our integration surface area with the
 * :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196 */
:host([data-js-focus-visible]:focus:not(.focus-visible)),
:host([data-js-focus-visible]) :focus:not(.focus-visible) {
  outline: none;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          aria-label="View in your space">
        ${$r}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${Fr}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${Ir}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,Nr=l=>{vr(kr,l)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gi,qi;const G=Symbol("retainerCount"),et=Symbol("recentlyUsed"),Oe=Symbol("evict"),ee=Symbol("evictionThreshold"),Ms=Symbol("cache");class Vr{constructor(t,e=5){this[Gi]=new Map,this[qi]=[],this[Ms]=t,this[ee]=e}set evictionThreshold(t){this[ee]=t,this[Oe]()}get evictionThreshold(){return this[ee]}get cache(){return this[Ms]}retainerCount(t){return this[G].get(t)||0}reset(){this[G].clear(),this[et]=[]}retain(t){this[G].has(t)||this[G].set(t,0),this[G].set(t,this[G].get(t)+1);const e=this[et].indexOf(t);e!==-1&&this[et].splice(e,1),this[et].unshift(t),this[Oe]()}release(t){this[G].has(t)&&this[G].set(t,Math.max(this[G].get(t)-1,0)),this[Oe]()}[(Gi=G,qi=et,Oe)](){if(!(this[et].length<this[ee]))for(let t=this[et].length-1;t>=this[ee];--t){const e=this[et][t];this[G].get(e)===0&&(this[Ms].delete(e),this[et].splice(t,1))}}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=l=>{const t=[],e=new Set;for(const s of l){let i=s,n=0;for(;e.has(i);)i=s+"."+ ++n;e.add(i),t.push(i)}return t},zr=l=>{const t=new Map;for(const e of l.mappings)for(const s of e.variants)t.set(s,{material:null,gltfMaterialIndex:e.material});return t};class Ur{constructor(t){this.parser=t,this.name="KHR_materials_variants"}afterRoot(t){const e=this.parser,s=e.json;if(s.extensions===void 0||s.extensions[this.name]===void 0)return null;const n=s.extensions[this.name].variants||[],a=Br(n.map(o=>o.name));for(const o of t.scenes)o.traverse(r=>{const c=r;if(!c.isMesh)return;const d=e.associations.get(c);if(d==null||d.meshes==null||d.primitives==null)return;const b=s.meshes[d.meshes].primitives[d.primitives].extensions;!b||!b[this.name]||(c.userData.variantMaterials=zr(b[this.name]))});return t.userData.variants=a,Promise.resolve()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var co,Wi;const Hr=(l,t,e=()=>{})=>{const s=i=>{const n=i.loaded/i.total;e(Math.max(0,Math.min(1,isFinite(n)?n:1)))};return new Promise((i,n)=>{t.load(l,i,s,n)})},jr=l=>new Promise((t,e)=>{const s=document.createElement("script");document.body.appendChild(s),s.onload=t,s.onerror=e,s.async=!0,s.src=l}),st=new Map,Es=new Map;let Xi;const Ki=new Wo;let Yi;const As=new Xo;let Rs,Cs;const xt=Symbol("loader"),dt=Symbol("evictionPolicy"),Zi=Symbol("GLTFInstance");class P extends Ee{constructor(t){super(),this[Wi]=new Ko().register(e=>new Ur(e)),this[Zi]=t,this[xt].setDRACOLoader(Ki),this[xt].setKTX2Loader(As)}static setDRACODecoderLocation(t){Xi=t,Ki.setDecoderPath(t)}static getDRACODecoderLocation(){return Xi}static setKTX2TranscoderLocation(t){Yi=t,As.setTranscoderPath(t)}static getKTX2TranscoderLocation(){return Yi}static setMeshoptDecoderLocation(t){Rs!==t&&(Rs=t,Cs=jr(t).then(()=>MeshoptDecoder.ready).then(()=>MeshoptDecoder))}static getMeshoptDecoderLocation(){return Rs}static initializeKTX2Loader(t){As.detectSupport(t)}static get cache(){return st}static clearCache(){st.forEach((t,e)=>{this.delete(e)}),this[dt].reset()}static has(t){return st.has(t)}static async delete(t){if(!this.has(t))return;const e=st.get(t);Es.delete(t),st.delete(t),(await e).dispose()}static hasFinishedLoading(t){return!!Es.get(t)}get[(co=dt,Wi=xt,dt)](){return this.constructor[dt]}async preload(t,e,s=()=>{}){if(this[xt].setWithCredentials(P.withCredentials),this.dispatchEvent({type:"preload",element:e,src:t}),!st.has(t)){Cs!=null&&this[xt].setMeshoptDecoder(await Cs);const i=Hr(t,this[xt],o=>{s(o*.8)}),n=this[Zi],a=i.then(o=>n.prepare(o)).then(o=>(s(.9),new n(o))).catch(o=>(console.error(o),new n));st.set(t,a)}await st.get(t),Es.set(t,!0),s&&s(1)}async load(t,e,s=()=>{}){await this.preload(t,e,s);const n=await(await st.get(t)).clone();return this[dt].retain(t),n.dispose=()=>{this[dt].release(t)},n}}P[co]=new Vr(P);/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=l=>l.material!==void 0&&l.userData&&l.userData.variantMaterials&&!!Array.from(l.userData.variantMaterials.values()).filter(t=>Je(t.material)),Je=l=>l&&l.isMaterial&&!Array.isArray(l);class Gr{constructor(t){this.writer=t,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(t){const e=new Set;for(const s of t)s.traverse(i=>{if(!Qi(i))return;const n=i.userData.variantMaterials,a=i.userData.variantData;for(const[o,r]of a){const c=n.get(r.index);c&&Je(c.material)&&e.add(o)}});e.forEach(s=>this.variantNames.push(s))}writeMesh(t,e){if(!Qi(t))return;const s=t.userData,i=s.variantMaterials,n=s.variantData,a=new Map,o=new Map,r=Array.from(n.values()).sort((u,m)=>u.index-m.index);for(const[u,m]of r.entries())o.set(m.index,u);for(const u of n.values()){const m=i.get(u.index);if(!m||!Je(m.material))continue;const h=this.writer.processMaterial(m.material);a.has(h)||a.set(h,{material:h,variants:[]}),a.get(h).variants.push(o.get(u.index))}const c=Array.from(a.values()).map(u=>u.variants.sort((m,h)=>m-h)&&u).sort((u,m)=>u.material-m.material);if(c.length===0)return;const d=Je(s.originalMaterial)?this.writer.processMaterial(s.originalMaterial):-1;for(const u of e.primitives)d>=0&&(u.material=d),u.extensions=u.extensions||{},u.extensions[this.name]={mappings:c}}afterParse(){if(this.variantNames.length===0)return;const t=this.writer.json;t.extensions=t.extensions||{};const e=this.variantNames.map(s=>({name:s}));t.extensions[this.name]={variants:e},this.writer.extensionsUsed[this.name]=!0}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=1e4,qr=.001,uo=50;class V{constructor(t=uo){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(t)}setDecayTime(t){this.naturalFrequency=1/Math.max(qr,t)}update(t,e,s,i){const n=2e-4*this.naturalFrequency;if(t==null||i===0||t===e&&this.velocity===0)return e;if(s<0)return t;const a=t-e,o=this.velocity+this.naturalFrequency*a,r=a+s*o,c=Math.exp(-this.naturalFrequency*s),d=(o-this.naturalFrequency*r)*c,u=-this.naturalFrequency*(d+o*c);return Math.abs(d)<n*Math.abs(i)&&u*a>=0?(this.velocity=0,e):(this.velocity=d,e+r*c)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=.2,Ji=.03,Wr=.75,mo=12,Xr=Math.PI/(2*mo),tn=new Kt,_e=(l,t,e)=>{let s=t>0?e>0?0:-Math.PI/2:e>0?Math.PI/2:Math.PI;for(let i=0;i<=mo;++i)l.push(t+(qt-Ji)*Math.cos(s),e+(qt-Ji)*Math.sin(s),0,t+qt*Math.cos(s),e+qt*Math.sin(s),0),s+=Xr};class en extends S{constructor(t,e){const s=new Yo,i=[],n=[],{size:a,boundingBox:o}=t,r=a.x/2,c=(e==="back"?a.y:a.z)/2;_e(n,r,c),_e(n,-r,c),_e(n,-r,-c),_e(n,r,-c);const d=n.length/3;for(let h=0;h<d-2;h+=2)i.push(h,h+1,h+3,h,h+3,h+2);const u=d-2;i.push(u,u+1,1,u,1,0),s.setAttribute("position",new Zo(n,3)),s.setIndex(i),super(s),this.side=e;const m=this.material;switch(m.side=Mi,m.transparent=!0,m.opacity=0,this.goalOpacity=0,this.opacityDamper=new V,this.hitPlane=new S(new ps(2*(r+qt),2*(c+qt))),this.hitPlane.visible=!1,this.hitPlane.material.side=Mi,this.add(this.hitPlane),o.getCenter(this.position),e){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=o.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=o.min.z,this.position.z=this.shadowHeight}t.target.add(this),this.offsetHeight=0}getHit(t,e,s){tn.set(e,-s),this.hitPlane.visible=!0;const i=t.positionAndNormalFromPoint(tn,this.hitPlane);return this.hitPlane.visible=!1,i==null?null:i.position}getExpandedHit(t,e,s){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();const i=this.getHit(t,e,s);return this.hitPlane.scale.set(1,1,1),i}set offsetHeight(t){t-=.001,this.side==="back"?this.position.z=this.shadowHeight+t:this.position.y=this.shadowHeight+t}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(t){this.goalOpacity=t?Wr:0}updateOpacity(t){const e=this.material;e.opacity=this.opacityDamper.update(e.opacity,this.goalOpacity,t,1),this.visible=e.opacity>0}dispose(){var t;const{geometry:e,material:s}=this.hitPlane;e.dispose(),s.dispose(),this.geometry.dispose(),this.material.dispose(),(t=this.parent)===null||t===void 0||t.remove(this)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=30,Yr=.8,sn=1.5,Zr=20,po=1.3,Qr=1/po,Jr=.25,tl=10,mt={NOT_PRESENTING:"not-presenting",SESSION_STARTED:"session-started",OBJECT_PLACED:"object-placed",FAILED:"failed"},Ri={TRACKING:"tracking",NOT_TRACKING:"not-tracking"},Ie=new D,el=new ja,sl=new D,il=new Ei(45,1,.1,100);class nl extends Ee{constructor(t){super(),this.renderer=t,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new D,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new D,this.firstRatio=0,this.lastAngle=0,this.goalPosition=new D,this.goalYaw=0,this.goalScale=1,this.xDamper=new V,this.yDamper=new V,this.zDamper=new V,this.yawDamper=new V,this.scaleDamper=new V,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new en(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=e=>{const s=this.transientHitTestSource;if(s==null)return;const i=this.frame.getHitTestResultsForTransientInput(s),n=this.presentedScene,a=this.placementBox;if(i.length===1){this.inputSource=e.inputSource;const{axes:o}=this.inputSource.gamepad,r=a.getHit(this.presentedScene,o[0],o[1]);a.show=!0,r!=null?(this.isTranslating=!0,this.lastDragPosition.copy(r)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=o[0]*sn)}else if(i.length===2){a.show=!0,this.isTwoFingering=!0;const{separation:o}=this.fingerPolar(i);this.firstRatio=o/n.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=t.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){Hi();const t=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(t),this.threeRenderer.xr.cameraAutoUpdate=!1,t}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return Hi(),await navigator.xr.isSessionSupported("immersive-ar")}catch(t){return console.warn("Request to present in WebXR denied:"),console.warn(t),console.warn("Falling back to next ar-mode"),!1}}async present(t,e=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let s=new Promise((c,d)=>{requestAnimationFrame(()=>c())});t.setHotspotsVisibility(!1),t.queueRender(),await s,this._presentedScene=t,this.overlay=t.element.shadowRoot.querySelector("div.default"),e===!0&&(this.xrLight=new Qo(this.threeRenderer),this.xrLight.addEventListener("estimationstart",()=>{if(!this.isPresenting||this.xrLight==null)return;const c=this.presentedScene;c.add(this.xrLight),c.environment=this.xrLight.environment}));const i=await this.resolveARSession();i.addEventListener("end",()=>{this.postSessionCleanup()},{once:!0});const n=t.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");n.classList.add("enabled"),n.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=n;const a=await i.requestReferenceSpace("viewer");this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=t.yaw,this.goalYaw=t.yaw,this.goalScale=1,t.background=null,this.oldShadowIntensity=t.shadowIntensity,t.setShadowIntensity(.01),this.oldTarget.copy(t.getTarget()),t.element.addEventListener("load",this.onUpdateScene);const o=Zr*Math.PI/180,r=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(o),z:-Math.cos(o)});i.requestHitTestSource({space:a,offsetRay:r}).then(c=>{this.initialHitSource=c}),this.currentSession=i,this.placementBox=new en(t,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:mt.SESSION_STARTED})}async stopPresenting(){if(!this.isPresenting)return;const t=new Promise(e=>{this.resolveCleanup=e});try{await this.currentSession.end(),await t}catch(e){console.warn("Error while trying to end WebXR AR session"),console.warn(e),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const t=this.presentedScene;if(t!=null){const e=t.getTarget();this.oldTarget.copy(e),this.placeOnWall?e.z=t.boundingBox.min.z:e.y=t.boundingBox.min.y,t.setTarget(e.x,e.y,e.z)}}postSessionCleanup(){const t=this.currentSession;t!=null&&(t.removeEventListener("selectstart",this.onSelectStart),t.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const e=this.presentedScene;if(this._presentedScene=null,e!=null){const{element:a}=e;this.xrLight!=null&&(e.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),e.position.set(0,0,0),e.scale.set(1,1,1),e.setShadowOffset(0);const o=this.turntableRotation;o!=null&&(e.yaw=o);const r=this.oldShadowIntensity;r!=null&&e.setShadowIntensity(r),e.setEnvironmentAndSkybox(a[me],a[pe]);const c=this.oldTarget;e.setTarget(c.x,c.y,c.z),e.xrCamera=null,e.element.removeEventListener("load",this.onUpdateScene),e.orientHotspots(0),a.requestUpdate("cameraTarget"),a.requestUpdate("maxCameraOrbit"),a[Me](a.getBoundingClientRect())}this.renderer.height=0;const s=this.exitWebXRButtonContainer;s!=null&&(s.classList.remove("enabled"),s.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const i=this.transientHitTestSource;i!=null&&(i.cancel(),this.transientHitTestSource=null);const n=this.initialHitSource;n!=null&&(n.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:mt.NOT_PRESENTING})}updateView(t){const e=this.presentedScene,s=this.threeRenderer.xr;s.updateCamera(il),e.xrCamera=s.getCamera();const{elements:i}=e.getCamera().matrixWorld;if(e.orientHotspots(Math.atan2(i[1],i[5])),this.initialized||(this.placeInitially(),this.initialized=!0),t.requestViewportScale&&t.recommendedViewportScale){const o=t.recommendedViewportScale;t.requestViewportScale(Math.max(o,Jr))}const a=this.currentSession.renderState.baseLayer.getViewport(t);this.threeRenderer.setViewport(a.x,a.y,a.width,a.height)}placeInitially(){const t=this.presentedScene,{position:e,element:s}=t,i=t.getCamera(),{width:n,height:a}=this.overlay.getBoundingClientRect();t.setSize(n,a),i.projectionMatrixInverse.copy(i.projectionMatrix).invert();const{theta:o,radius:r}=s.getCameraOrbit(),c=i.getWorldDirection(Ie);t.yaw=Math.atan2(-c.x,-c.z)-o,this.goalYaw=t.yaw,e.copy(i.position).add(c.multiplyScalar(r)),this.updateTarget();const d=t.getTarget();e.add(d).sub(this.oldTarget),this.goalPosition.copy(e),t.setHotspotsVisibility(!0);const{session:u}=this.frame;u.addEventListener("selectstart",this.onSelectStart),u.addEventListener("selectend",this.onSelectEnd),u.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then(m=>{this.transientHitTestSource=m})}getTouchLocation(){const{axes:t}=this.inputSource.gamepad;let e=this.placementBox.getExpandedHit(this.presentedScene,t[0],t[1]);return e!=null&&(Ie.copy(e).sub(this.presentedScene.getCamera().position),Ie.length()>tl)?null:e}getHitPoint(t){const e=this.threeRenderer.xr.getReferenceSpace(),s=t.getPose(e);if(s==null)return null;const i=el.fromArray(s.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(i.elements[4],i.elements[6])),i.elements[5]>.75!==this.placeOnWall?sl.setFromMatrixPosition(i):null}moveToFloor(t){const e=this.initialHitSource;if(e==null)return;const s=t.getHitTestResults(e);if(s.length==0)return;const i=s[0],n=this.getHitPoint(i);n!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(n):this.goalPosition.y=n.y),e.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:mt.OBJECT_PLACED}))}fingerPolar(t){const e=t[0].inputSource.gamepad.axes,s=t[1].inputSource.gamepad.axes,i=s[0]-e[0],n=s[1]-e[1],a=Math.atan2(n,i);let o=this.lastAngle-a;return o>Math.PI?o-=2*Math.PI:o<-Math.PI&&(o+=2*Math.PI),this.lastAngle=a,{separation:Math.sqrt(i*i+n*n),deltaYaw:o}}processInput(t){const e=this.transientHitTestSource;if(e==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const s=t.getHitTestResultsForTransientInput(e),i=this.presentedScene,n=i.scale.x;if(this.isTwoFingering){if(s.length<2)this.isTwoFingering=!1;else{const{separation:a,deltaYaw:o}=this.fingerPolar(s);if(this.placeOnWall===!1&&(this.goalYaw+=o),i.canScale){const r=a/this.firstRatio;this.goalScale=r<po&&r>Qr?1:r}}return}else if(s.length===2){this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:a}=this.fingerPolar(s);this.firstRatio=a/n;return}if(this.isRotating){const a=this.inputSource.gamepad.axes[0]*sn;this.goalYaw+=a-this.lastAngle,this.lastAngle=a}else this.isTranslating&&s.forEach(a=>{if(a.inputSource!==this.inputSource)return;let o=null;if(a.results.length>0&&(o=this.getHitPoint(a.results[0])),o==null&&(o=this.getTouchLocation()),o!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const r=o.y-this.lastDragPosition.y;if(r<0){this.placementBox.offsetHeight=r/n,this.presentedScene.setShadowOffset(r);const c=Ie.copy(i.getCamera().position),d=-r/(c.y-o.y);c.multiplyScalar(d),o.multiplyScalar(1-d).add(c)}}this.goalPosition.add(o),this.lastDragPosition.copy(o)}})}moveScene(t){const e=this.presentedScene,{position:s,yaw:i}=e,n=e.boundingSphere.radius,a=this.goalPosition,o=e.scale.x,r=this.placementBox;if(!a.equals(s)||this.goalScale!==o){let{x:c,y:d,z:u}=s;c=this.xDamper.update(c,a.x,t,n),d=this.yDamper.update(d,a.y,t,n),u=this.zDamper.update(u,a.z,t,n),s.set(c,d,u);const m=this.scaleDamper.update(o,this.goalScale,t,1);if(e.scale.set(m,m,m),!this.isTranslating){const h=a.y-d;this.placementComplete&&this.placeOnWall===!1?(r.offsetHeight=h/m,e.setShadowOffset(h)):h===0&&(this.placementComplete=!0,r.show=!1,e.setShadowIntensity(Yr))}}r.updateOpacity(t),e.updateTarget(t),e.yaw=this.yawDamper.update(i,this.goalYaw,t,Math.PI)}onWebXRFrame(t,e){this.frame=e,++this.frames;const s=this.threeRenderer.xr.getReferenceSpace(),i=e.getViewerPose(s);i==null&&this.tracking===!0&&this.frames>Kr&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:Ri.NOT_TRACKING}));const n=this.presentedScene;if(i==null||n==null||!n.element.loaded){this.threeRenderer.clear();return}this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:Ri.TRACKING}));let a=!0;for(const o of i.views){if(this.updateView(o),a){this.moveToFloor(e),this.processInput(e);const r=t-this.lastTick;this.moveScene(r),this.renderer.preRender(n,t,r),this.lastTick=t,n.renderShadow(this.threeRenderer)}this.threeRenderer.render(n,n.getCamera()),a=!1}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t){t.threeRenderer.debug={checkShaderErrors:!0},Promise.resolve().then(()=>{self.dispatchEvent(new CustomEvent("model-viewer-renderer-debug",{detail:{renderer:t,THREE:{ShaderMaterial:rs,Texture:Ga,Mesh:S,Scene:Zt,PlaneGeometry:ps,OrthographicCamera:Fi,WebGLRenderTarget:ls}}}))})}addScene(t){self.dispatchEvent(new CustomEvent("model-viewer-scene-added-debug",{detail:{scene:t}}))}removeScene(t){self.dispatchEvent(new CustomEvent("model-viewer-scene-removed-debug",{detail:{scene:t}}))}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=Symbol("prepared"),us=Symbol("prepare"),W=Symbol("preparedGLTF"),ds=Symbol("clone");class ol{constructor(t){this[W]=t}static prepare(t){if(t.scene==null)throw new Error("Model does not have a scene");if(t[nn])return t;const e=this[us](t);return e[nn]=!0,e}static[us](t){const{scene:e}=t,s=[e];return Object.assign(Object.assign({},t),{scene:e,scenes:s})}get parser(){return this[W].parser}get animations(){return this[W].animations}get scene(){return this[W].scene}get scenes(){return this[W].scenes}get cameras(){return this[W].cameras}get asset(){return this[W].asset}get userData(){return this[W].userData}clone(){const t=this.constructor,e=this[ds]();return new t(e)}dispose(){this.scenes.forEach(t=>{t.traverse(e=>{if(!e.isMesh)return;const s=e;(Array.isArray(s.material)?s.material:[s.material]).forEach(n=>{for(const a in n){const o=n[a];if(o instanceof Ga){const r=o.source.data;r.close!=null&&r.close(),o.dispose()}}n.dispose()}),s.geometry.dispose()})})}[ds](){const t=this[W],e=Jo(this.scene);rl(e,this.scene);const s=[e],i=t.userData?Object.assign({},t.userData):{};return Object.assign(Object.assign({},t),{scene:e,scenes:s,userData:i})}}const rl=(l,t)=>{fo(l,t,(e,s)=>{s.userData.variantMaterials!==void 0&&(e.userData.variantMaterials=new Map(s.userData.variantMaterials)),s.userData.variantData!==void 0&&(e.userData.variantData=s.userData.variantData),s.userData.originalMaterial!==void 0&&(e.userData.originalMaterial=s.userData.originalMaterial)})},fo=(l,t,e)=>{e(l,t);for(let s=0;s<l.children.length;s++)fo(l.children[s],t.children[s],e)},an=Symbol("threeGLTF"),on=Symbol("gltf"),rn=Symbol("gltfElementMap"),ln=Symbol("threeObjectMap"),cn=Symbol("parallelTraverseThreeScene"),hn=Symbol("correlateOriginalThreeGLTF"),un=Symbol("correlateCloneThreeGLTF");class Te{constructor(t,e,s,i){this[an]=t,this[on]=e,this[rn]=i,this[ln]=s}static from(t,e){return e!=null?this[un](t,e):this[hn](t)}static[hn](t){const e=t.parser.json,s=t.parser.associations,i=new Map,n={name:"Default"},a={type:"materials",index:-1};for(const o of s.keys())o instanceof tr&&s.get(o)==null&&(a.index<0&&(e.materials==null&&(e.materials=[]),a.index=e.materials.length,e.materials.push(n)),o.name=n.name,s.set(o,{materials:a.index}));for(const[o,r]of s){if(r){const c=o;c.userData=c.userData||{},c.userData.associations=r}for(const c in r)if(c!=null&&c!=="primitives"){const d=c,m=(e[d]||[])[r[d]];if(m==null)continue;let h=i.get(m);h==null&&(h=new Set,i.set(m,h)),h.add(o)}}return new Te(t,e,s,i)}static[un](t,e){const s=e.threeGLTF,i=e.gltf,n=JSON.parse(JSON.stringify(i)),a=new Map,o=new Map;for(let r=0;r<s.scenes.length;r++)this[cn](s.scenes[r],t.scenes[r],(c,d)=>{const u=e.threeObjectMap.get(c);if(u!=null){for(const m in u)if(m!=null&&m!=="primitives"){const h=m,b=u[h],v=n[h][b],p=a.get(d)||{};p[h]=b,a.set(d,p);const E=o.get(v)||new Set;E.add(d),o.set(v,E)}}});return new Te(t,n,a,o)}static[cn](t,e,s){const i=a=>a.isMesh,n=(a,o)=>{if(s(a,o),a.isObject3D){if(i(a))if(Array.isArray(a.material))for(let r=0;r<a.material.length;++r)n(a.material[r],o.material[r]);else n(a.material,o.material);for(let r=0;r<a.children.length;++r)n(a.children[r],o.children[r])}};n(t,e)}get threeGLTF(){return this[an]}get gltf(){return this[on]}get gltfElementMap(){return this[rn]}get threeObjectMap(){return this[ln]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=Symbol("correlatedSceneGraph");class ll extends ol{static[us](t){const e=super[us](t);e[se]==null&&(e[se]=Te.from(e));const{scene:s}=e,i=new qa(void 0,1/0);return s.traverse(n=>{n.renderOrder=1e3,n.frustumCulled=!1,n.name||(n.name=n.uuid);const a=n;if(a.isMesh){const{geometry:o}=a;a.castShadow=!0,a.isSkinnedMesh&&(o.boundingSphere=i,o.boundingBox=null);const r=a.material;if(r.isMeshBasicMaterial===!0&&(r.toneMapped=!1),r.shadowSide=Wa,r.aoMap){const{gltf:c,threeObjectMap:d}=e[se],u=d.get(r);if(c.materials!=null&&u!=null&&u.materials!=null){const m=c.materials[u.materials];m.occlusionTexture&&m.occlusionTexture.texCoord===0&&o.attributes.uv!=null&&o.setAttribute("uv2",o.attributes.uv)}}}}),e}get correlatedSceneGraph(){return this[W][se]}[ds](){const t=super[ds](),e=new Map;return t.scene.traverse(s=>{if(s.isMesh){const i=s,n=i.material;if(n!=null){if(e.has(n.uuid)){i.material=e.get(n.uuid);return}i.material=n.clone(),e.set(n.uuid,i.material)}}}),t[se]=Te.from(t,this.correlatedSceneGraph),t}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends Zt{constructor(){super(),this.position.y=-3.5;const t=new $i;t.deleteAttribute("uv");const e=new cs({metalness:0,side:fs}),s=new cs({metalness:0}),i=new Xa(16777215,500,28,2);i.position.set(.418,16.199,.3),this.add(i);const n=new S(t,e);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);const a=new S(t,s);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new S(t,s);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const r=new S(t,s);r.position.set(6.167,.857,7.803),r.rotation.set(0,.561,0),r.scale.set(3.927,6.285,3.687),this.add(r);const c=new S(t,s);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new S(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const u=new S(t,s);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const m=new S(t,this.createAreaLightMaterial(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const h=new S(t,this.createAreaLightMaterial(50));h.position.set(-16.109,18.021,-8.207),h.scale.set(.1,2.425,2.751),this.add(h);const b=new S(t,this.createAreaLightMaterial(17));b.position.set(14.904,12.198,-1.832),b.scale.set(.15,4.265,6.331),this.add(b);const v=new S(t,this.createAreaLightMaterial(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const p=new S(t,this.createAreaLightMaterial(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const E=new S(t,this.createAreaLightMaterial(100));E.position.set(0,20,0),E.scale.set(1,.1,1),this.add(E)}createAreaLightMaterial(t){const e=new gs;return e.color.setScalar(t),e}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Zt{constructor(){super(),this.position.y=-3.5;const t=new $i;t.deleteAttribute("uv");const e=new cs({metalness:0,side:fs}),s=new cs({metalness:0}),i=new Xa(16777215,400,28,2);i.position.set(.5,14,.5),this.add(i);const n=new S(t,e);n.position.set(0,13.2,0),n.scale.set(31.5,28.5,31.5),this.add(n);const a=new S(t,s);a.position.set(-10.906,-1,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new S(t,s);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const r=new S(t,s);r.position.set(6.167,-.16,7.803),r.rotation.set(0,.561,0),r.scale.set(3.927,6.285,3.687),this.add(r);const c=new S(t,s);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new S(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const u=new S(t,s);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const m=new S(t,this.createAreaLightMaterial(80));m.position.set(-14,10,8),m.scale.set(.1,2.5,2.5),this.add(m);const h=new S(t,this.createAreaLightMaterial(80));h.position.set(-14,14,-4),h.scale.set(.1,2.5,2.5),this.add(h);const b=new S(t,this.createAreaLightMaterial(23));b.position.set(14,12,0),b.scale.set(.1,5,5),this.add(b);const v=new S(t,this.createAreaLightMaterial(16));v.position.set(0,9,14),v.scale.set(5,5,.1),this.add(v);const p=new S(t,this.createAreaLightMaterial(80));p.position.set(7,8,-14),p.scale.set(2.5,2.5,.1),this.add(p);const E=new S(t,this.createAreaLightMaterial(80));E.position.set(-7,16,-14),E.scale.set(2.5,2.5,.1),this.add(E);const f=new S(t,this.createAreaLightMaterial(1));f.position.set(0,20,0),f.scale.set(.1,.1,.1),this.add(f)}createAreaLightMaterial(t){const e=new gs;return e.color.setScalar(t),e}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=.04,Ot=20,dl=/\.hdr(\.js)?$/,ml=new Ka,go=new er;go.setDataType(Ya);class dn extends Ee{constructor(t){super(),this.threeRenderer=t,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}async load(t,e=()=>{}){try{const s=dl.test(t),i=s?go:ml,n=await new Promise((a,o)=>i.load(t,a,r=>{e(r.loaded/r.total*.9)},o));return e(1),n.name=t,n.mapping=sr,s||(n.encoding=bs),n}finally{e&&e(1)}}async generateEnvironmentMapAndSkybox(t=null,e=null,s=()=>{}){const i=e!=="legacy";(e==="legacy"||e==="neutral")&&(e=null),e=ro(e);let n=Promise.resolve(null),a;t&&(n=this.loadEquirectFromUrl(t,s)),e?a=this.loadEquirectFromUrl(e,s):t?a=this.loadEquirectFromUrl(t,s):a=i?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();const[o,r]=await Promise.all([a,n]);if(o==null)throw new Error("Failed to load environment map.");return{environmentMap:o,skybox:r}}async loadEquirectFromUrl(t,e){if(!this.skyboxCache.has(t)){const s=this.load(t,e);this.skyboxCache.set(t,s)}return this.skyboxCache.get(t)}async GenerateEnvironmentMap(t,e){await Rr();const s=this.threeRenderer,i=new ir(256,{generateMipmaps:!1,type:Ya,format:Za,encoding:ye,depthBuffer:!0}),n=new Vi(.1,100,i),a=n.renderTarget.texture;a.name=e;const o=s.outputEncoding,r=s.toneMapping;return s.toneMapping=nr,s.outputEncoding=ye,n.update(s,t),this.blurCubemap(i,ul),s.toneMapping=r,s.outputEncoding=o,a}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new cl,"legacy")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new hl,"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(t,e){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(Ot);const i=new $i,n=new S(i,this.blurMaterial);this.blurScene=new Zt,this.blurScene.add(n)}const s=t.clone();this.halfblur(t,s,e,"latitudinal"),this.halfblur(s,t,e,"longitudinal")}halfblur(t,e,s,i){const a=t.width,o=isFinite(s)?Math.PI/(2*a):2*Math.PI/(2*Ot-1),r=s/o,c=isFinite(s)?1+Math.floor(3*r):Ot;c>Ot&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Ot}`);const d=[];let u=0;for(let b=0;b<Ot;++b){const v=b/r,p=Math.exp(-v*v/2);d.push(p),b==0?u+=p:b<c&&(u+=2*p)}for(let b=0;b<d.length;b++)d[b]=d[b]/u;const m=this.blurMaterial.uniforms;m.envMap.value=t.texture,m.samples.value=c,m.weights.value=d,m.latitudinal.value=i==="latitudinal",m.dTheta.value=o,new Vi(.1,100,e).update(this.threeRenderer,this.blurScene)}getBlurShader(t){const e=new Float32Array(t),s=new D(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:t},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:s}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
        }
  
        void main() {
  
          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
          }
  
          axis = normalize( axis );
  
          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
          for ( int i = 1; i < n; i++ ) {
  
            if ( i >= samples ) {
  
              break;
  
            }
  
            float theta = dTheta * float( i );
            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
          }
        }
      `,blending:ar,depthTest:!1,depthWrite:!1,side:fs})}async dispose(){for(const[,t]of this.skyboxCache)(await t).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=.2,Ls=40,Ds=60,mn=5,_t=[1,.79,.62,.5,.4,.31,.25],fl=3,bo="high-performance";class lt extends Ee{constructor(t){super(),this.loader=new P(ll),this.width=0,this.height=0,this.dpr=1,this.debugger=null,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=fl,this.avgFrameDuration=(Ds+Ls)/2,this.onWebGLContextLost=e=>{this.dispatchEvent({type:"contextlost",sourceEvent:e})},this.onWebGLContextRestored=()=>{var e;(e=this.textureUtils)===null||e===void 0||e.dispose(),this.textureUtils=new dn(this.threeRenderer);for(const s of this.scenes)s.element[hs]()},this.dpr=Ai(),this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas",this.canvas3D.classList.add("show");try{this.threeRenderer=new or({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:t.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.outputEncoding=bs,this.threeRenderer.physicallyCorrectLights=!0,this.threeRenderer.setPixelRatio(1),this.debugger=t.debug?new al(this):null,this.threeRenderer.debug={checkShaderErrors:!!this.debugger},this.threeRenderer.toneMapping=rr}catch(e){console.warn(e)}this.arRenderer=new nl(this),this.textureUtils=this.canRender?new dn(this.threeRenderer):null,P.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize()}static get singleton(){return this._singleton}static resetSingleton(){const t=this._singleton.dispose();for(const e of t)e.disconnectedCallback();this._singleton=new lt({powerPreference:(self.ModelViewerElement||{}).powerPreference||bo,debug:lo()});for(const e of t)e.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return _t[this.scaleStep]}set minScale(t){let e=1;for(;e<_t.length&&!(_t[e]<t);)++e;this.lastStep=e-1}registerScene(t){this.scenes.add(t),t.forceRescale();const e=new Kt;this.threeRenderer.getSize(e),t.canvas.width=e.x,t.canvas.height=e.y,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((s,i)=>this.render(s,i)),this.debugger!=null&&this.debugger.addScene(t)}unregisterScene(t){this.scenes.delete(t),this.canvas3D.parentElement===t.canvas.parentElement&&t.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null),this.debugger!=null&&this.debugger.removeScene(t)}displayCanvas(t){return this.multipleScenesVisible?t.element[Ii]:this.canvas3D}countVisibleScenes(){const{canvas3D:t}=this;let e=0,s=null;for(const n of this.scenes){const{element:a}=n;a.modelIsVisible&&n.externalRenderer==null&&++e,t.parentElement===n.canvas.parentElement&&(s=n)}const i=e>1;if(s!=null){const n=i&&!this.multipleScenesVisible,a=!s.element.modelIsVisible;if(n||a){const{width:o,height:r}=this.sceneSize(s);this.copyPixels(s,o,r),t.parentElement.removeChild(t)}}this.multipleScenesVisible=i}updateRendererSize(){const t=Ai();if(t!==this.dpr)for(const i of this.scenes){const{element:n}=i;n[Gt](n.getBoundingClientRect())}let e=0,s=0;for(const i of this.scenes)e=Math.max(e,i.width),s=Math.max(s,i.height);if(!(e===this.width&&s===this.height&&t===this.dpr)){this.width=e,this.height=s,this.dpr=t,e=Math.ceil(e*t),s=Math.ceil(s*t),this.canRender&&this.threeRenderer.setSize(e,s,!1);for(const i of this.scenes){const{canvas:n}=i;n.width=e,n.height=s,i.forceRescale()}}}updateRendererScale(t){const e=this.scaleStep;this.avgFrameDuration+=K(pl*(t-this.avgFrameDuration),-mn,mn),this.avgFrameDuration>Ds?++this.scaleStep:this.avgFrameDuration<Ls&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),e!==this.scaleStep&&(this.avgFrameDuration=(Ds+Ls)/2)}shouldRender(t){if(t.shouldRender())t.scaleStep!=this.scaleStep&&(t.scaleStep=this.scaleStep,this.rescaleCanvas(t));else if(t.scaleStep!=0)t.scaleStep=0,this.rescaleCanvas(t);else return!1;return!0}rescaleCanvas(t){const e=_t[t.scaleStep],s=Math.ceil(this.width/e),i=Math.ceil(this.height/e),{style:n}=t.canvas;n.width=`${s}px`,n.height=`${i}px`,this.canvas3D.style.width=`${s}px`,this.canvas3D.style.height=`${i}px`;const a=this.dpr*e,o=e<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";t.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:a,minimumDpr:this.dpr*_t[this.lastStep],pixelWidth:Math.ceil(t.width*a),pixelHeight:Math.ceil(t.height*a),reason:o}}))}sceneSize(t){const{dpr:e}=this,s=_t[t.scaleStep],i=Math.min(Math.ceil(t.width*s*e),this.canvas3D.width),n=Math.min(Math.ceil(t.height*s*e),this.canvas3D.height);return{width:i,height:n}}copyPixels(t,e,s){const i=t.context;if(i==null){console.log("could not acquire 2d context");return}i.clearRect(0,0,e,s),i.drawImage(this.canvas3D,0,0,e,s,0,0,e,s),t.canvas.classList.add("show")}orderedScenes(){const t=[];for(const e of[!1,!0])for(const s of this.scenes)s.element.modelIsVisible===e&&t.push(s);return t}get isPresenting(){return this.arRenderer.isPresenting}preRender(t,e,s){const{element:i,exposure:n}=t;i[J](e,s);const a=typeof n=="number"&&!Number.isNaN(n);this.threeRenderer.toneMappingExposure=a?n:1}render(t,e){if(e!=null){this.arRenderer.onWebXRFrame(t,e);return}const s=t-this.lastTick;if(this.lastTick=t,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&(this.updateRendererScale(s),this.renderedLastFrame=!1);const{canvas3D:i}=this;for(const n of this.orderedScenes()){const{element:a}=n;if(!a.loaded||!a.modelIsVisible&&n.renderCount>0||(this.preRender(n,t,s),!this.shouldRender(n)))continue;if(n.externalRenderer!=null){const c=n.getCamera();c.updateMatrix();const{matrix:d,projectionMatrix:u}=c,m=d.elements.slice(),h=n.getTarget();m[12]+=h.x,m[13]+=h.y,m[14]+=h.z,n.externalRenderer.render({viewMatrix:m,projectionMatrix:u.elements});continue}if(!a.modelIsVisible&&!this.multipleScenesVisible)for(const c of this.scenes)c.element.modelIsVisible&&c.queueRender();const{width:o,height:r}=this.sceneSize(n);n.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-r,o,r),this.threeRenderer.render(n,n.camera),this.multipleScenesVisible||n.renderCount===0?this.copyPixels(n,o,r):i.parentElement!==n.canvas.parentElement&&(n.canvas.parentElement.appendChild(i),n.canvas.classList.remove("show")),n.hasRendered(),++n.renderCount,this.renderedLastFrame=!0}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const t=[];for(const e of this.scenes)t.push(e.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),t}}lt._singleton=new lt({powerPreference:(self.ModelViewerElement||{}).powerPreference||bo,debug:lo()});/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=Symbol("correlatedObjects"),T=Symbol("sourceObject"),Y=Symbol("onUpdate");class Ae{constructor(t,e,s=null){this[Y]=t,this[T]=e,this[L]=s}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new gs,gl=new ps(2,2);let bl=0;const Ci=Symbol("threeTexture");class vl extends Ae{get[Ci](){var t;return console.assert(this[L]!=null&&this[L].size>0,"Image correlated object is undefined"),(t=this[L])===null||t===void 0?void 0:t.values().next().value}constructor(t,e,s){s=s!=null?s:{name:e&&e.image&&e.image.src?e.image.src.split("/").pop():"adhoc_image",uri:e&&e.image&&e.image.src?e.image.src:"adhoc_image"+bl++},super(t,s,new Set(e?[e]:[]))}get name(){return this[T].name||""}get uri(){return this[T].uri}get bufferView(){return this[T].bufferView}get type(){return this.uri!=null?"external":"embedded"}set name(t){this[T].name=t}async createThumbnail(t,e){const s=new Zt;pn.map=this[Ci];const i=new S(gl,pn);s.add(i);const n=new Fi(-1,1,1,-1,0,1),{threeRenderer:a}=lt.singleton,o=new ls(t,e);a.setRenderTarget(o),a.render(s,n),a.setRenderTarget(null);const r=new Uint8Array(t*e*4);a.readRenderTargetPixels(o,0,0,t,e,r),z.width=t,z.height=e;const c=z.getContext("2d"),d=c.createImageData(t,e);return d.data.set(r),c.putImageData(d,0,0),new Promise(async(u,m)=>{z.toBlob(h=>{if(!h)return m("Failed to capture thumbnail.");u(URL.createObjectURL(h))},"image/png")})}}var U;(function(l){l[l.Nearest=9728]="Nearest",l[l.Linear=9729]="Linear",l[l.NearestMipmapNearest=9984]="NearestMipmapNearest",l[l.LinearMipmapNearest=9985]="LinearMipmapNearest",l[l.NearestMipmapLinear=9986]="NearestMipmapLinear",l[l.LinearMipmapLinear=9987]="LinearMipmapLinear"})(U||(U={}));var At;(function(l){l[l.ClampToEdge=33071]="ClampToEdge",l[l.MirroredRepeat=33648]="MirroredRepeat",l[l.Repeat=10497]="Repeat"})(At||(At={}));/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=(()=>{const l=[U.Nearest,U.Linear,U.NearestMipmapNearest,U.LinearMipmapLinear,U.NearestMipmapLinear,U.LinearMipmapLinear];return t=>l.indexOf(t)>-1})(),wl=(()=>{const l=[U.Nearest,U.Linear];return t=>l.indexOf(t)>-1})(),Sl=(()=>{const l=[At.ClampToEdge,At.MirroredRepeat,At.Repeat];return t=>l.indexOf(t)>-1})(),xl=(l,t)=>{switch(l){case"minFilter":return yl(t);case"magFilter":return wl(t);case"wrapS":case"wrapT":return Sl(t);default:throw new Error(`Cannot configure property "${l}" on Sampler`)}},fn=Symbol("threeTextures"),ie=Symbol("setProperty"),It=Symbol("sourceSampler");class Tl extends Ae{get[fn](){return console.assert(this[L]!=null&&this[L].size>0,"Sampler correlated object is undefined"),this[L]}get[It](){return console.assert(this[T]!=null,"Sampler source is undefined"),this[T]}constructor(t,e,s){s=s!=null?s:{},s.minFilter==null&&(s.minFilter=e?e.minFilter:U.LinearMipmapLinear),s.magFilter==null&&(s.magFilter=e?e.magFilter:U.Linear),s.wrapS==null&&(s.wrapS=e?e.wrapS:At.Repeat),s.wrapT==null&&(s.wrapT=e?e.wrapT:At.Repeat),super(t,s,new Set(e?[e]:[]))}get name(){return this[T].name||""}get minFilter(){return this[It].minFilter}get magFilter(){return this[It].magFilter}get wrapS(){return this[It].wrapS}get wrapT(){return this[It].wrapT}setMinFilter(t){this[ie]("minFilter",t)}setMagFilter(t){this[ie]("magFilter",t)}setWrapS(t){this[ie]("wrapS",t)}setWrapT(t){this[ie]("wrapT",t)}[ie](t,e){const s=this[It];if(s!=null){if(xl(t,e)){s[t]=e;for(const i of this[fn])i[t]=e,i.needsUpdate=!0}this[Y]()}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=Symbol("image"),bn=Symbol("sampler");class vo extends Ae{constructor(t,e,s=null,i=null,n=null){super(t,s||{},new Set(e?[e]:[])),this[bn]=new Tl(t,e,i),this[gn]=new vl(t,e,n)}get name(){return this[T].name||""}set name(t){this[T].name=t}get sampler(){return this[bn]}get source(){return this[gn]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yo,wo;const ts=Symbol("texture"),Tt=Symbol("transform"),Ps=Symbol("materials"),vn=Symbol("usage");var H;(function(l){l[l.Base=0]="Base",l[l.MetallicRoughness=1]="MetallicRoughness",l[l.Normal=2]="Normal",l[l.Occlusion=3]="Occlusion",l[l.Emissive=4]="Emissive"})(H||(H={}));class we{constructor(t,e,s,i,n,a){if(this[yo]=null,this[wo]={rotation:0,scale:new Kt(1,1),offset:new Kt(0,0)},a&&s){const o=n.textures?n.textures[a.index]:null,r=o&&n.samplers?n.samplers[o.sampler]:null,c=o&&n.images?n.images[o.source]:null;this[Tt].rotation=s.rotation,this[Tt].scale.copy(s.repeat),this[Tt].offset.copy(s.offset),this[ts]=new vo(t,s,o,r,c)}this.onUpdate=t,this[Ps]=i,this[vn]=e}get texture(){return this[ts]}setTexture(t){const e=t!=null?t.source[Ci]:null;let s=bs;if(this[ts]=t,this[Ps])for(const i of this[Ps]){switch(this[vn]){case H.Base:i.map=e;break;case H.MetallicRoughness:s=ye,i.metalnessMap=e,i.roughnessMap=e;break;case H.Normal:s=ye,i.normalMap=e;break;case H.Occlusion:s=ye,i.aoMap=e;break;case H.Emissive:i.emissiveMap=e;break}i.needsUpdate=!0}e&&(e.encoding=s,e.rotation=this[Tt].rotation,e.repeat=this[Tt].scale,e.offset=this[Tt].offset),this.onUpdate()}}yo=ts,wo=Tt;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=Symbol("threeMaterials"),yn=Symbol("baseColorTexture"),wn=Symbol("metallicRoughnessTexture");class Ml extends Ae{constructor(t,e,s,i){super(t,s,i),s.baseColorFactor==null&&(s.baseColorFactor=[1,1,1,1]),s.roughnessFactor==null&&(s.roughnessFactor=1),s.metallicFactor==null&&(s.metallicFactor=1);const{baseColorTexture:n,metallicRoughnessTexture:a}=s,{map:o,metalnessMap:r}=i.values().next().value;this[yn]=new we(t,H.Base,o,i,e,n||null),this[wn]=new we(t,H.MetallicRoughness,r,i,e,a||null)}get[Fe](){return this[L]}get baseColorFactor(){return this[T].baseColorFactor}get metallicFactor(){return this[T].metallicFactor}get roughnessFactor(){return this[T].roughnessFactor}get baseColorTexture(){return this[yn]}get metallicRoughnessTexture(){return this[wn]}setBaseColorFactor(t){const e=new Qa;t instanceof Array?e.fromArray(t):e.set(t).convertSRGBToLinear();for(const i of this[Fe])i.color.set(e),t instanceof Array?i.opacity=t[3]:(t=[0,0,0,i.opacity],e.toArray(t));const s=this[T];s.baseColorFactor=t,this[Y]()}setMetallicFactor(t){for(const s of this[Fe])s.metalness=t;const e=this[T];e.metallicFactor=t,this[Y]()}setRoughnessFactor(t){for(const s of this[Fe])s.roughness=t;const e=this[T];e.roughnessFactor=t,this[Y]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn;const xn=Symbol("pbrMetallicRoughness"),Tn=Symbol("normalTexture"),Mn=Symbol("occlusionTexture"),En=Symbol("emissiveTexture"),El=Symbol("backingThreeMaterial"),Os=Symbol("applyAlphaCutoff"),bt=Symbol("lazyLoadGLTFInfo"),_s=Symbol("initialize"),Li=Symbol("getLoadedMaterial"),k=Symbol("ensureMaterialIsLoaded"),An=Symbol("gltfIndex"),fe=Symbol("setActive"),es=Symbol("variantIndices"),Is=Symbol("isActive"),ss=Symbol("variantSet"),Rn=Symbol("modelVariants");class Fs extends Ae{constructor(t,e,s,i,n,a,o,r=void 0){super(t,s,o),this[Sn]=new Set,this[An]=i,this[Is]=n,this[Rn]=a,r==null?this[_s](e):this[bt]=r}get[(Sn=ss,El)](){return this[L].values().next().value}[_s](t){const e=this[Y],s=this[T],i=this[L];s.extensions&&s.extensions.KHR_materials_pbrSpecularGlossiness&&console.warn(`Material ${s.name} uses a deprecated extension
          "KHR_materials_pbrSpecularGlossiness", please use
          "pbrMetallicRoughness" instead. Specular Glossiness materials are
          currently supported for rendering, but not for our scene-graph API,
          nor for auto-generation of USDZ for Quick Look.`),s.pbrMetallicRoughness==null&&(s.pbrMetallicRoughness={}),this[xn]=new Ml(e,t,s.pbrMetallicRoughness,i),s.emissiveFactor==null&&(s.emissiveFactor=[0,0,0]),s.doubleSided==null&&(s.doubleSided=!1),s.alphaMode==null&&(s.alphaMode="OPAQUE"),s.alphaCutoff==null&&(s.alphaCutoff=.5);const{normalTexture:n,occlusionTexture:a,emissiveTexture:o}=s,{normalMap:r,aoMap:c,emissiveMap:d}=i.values().next().value;this[Tn]=new we(e,H.Normal,r,i,t,n||null),this[Mn]=new we(e,H.Occlusion,c,i,t,a||null),this[En]=new we(e,H.Emissive,d,i,t,o||null)}async[Li](){if(this[bt]!=null){const{set:t,material:e}=await this[bt].doLazyLoad();return this[L]=t,this[_s](this[bt].gltf),this[bt]=void 0,this.ensureLoaded=async()=>{},e}return this[L].values().next().value}[k](){if(this[bt]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[Li]()}get isLoaded(){return this[bt]==null}get isActive(){return this[Is]}[fe](t){this[Is]=t}get name(){return this[T].name}set name(t){const e=this[T];if(e!=null&&(e.name=t),this[L]!=null)for(const s of this[L])s.name=t}get pbrMetallicRoughness(){return this[k](),this[xn]}get normalTexture(){return this[k](),this[Tn]}get occlusionTexture(){return this[k](),this[Mn]}get emissiveTexture(){return this[k](),this[En]}get emissiveFactor(){return this[k](),this[T].emissiveFactor}get index(){return this[An]}[es](){return this[ss]}hasVariant(t){const e=this[Rn].get(t);return e!=null&&this[ss].has(e.index)}setEmissiveFactor(t){this[k]();const e=new Qa;t instanceof Array?e.fromArray(t):e.set(t).convertSRGBToLinear();for(const s of this[L])s.emissive.set(e);this[T].emissiveFactor=e.toArray(),this[Y]()}[Os](){this[k]();const t=this[T];for(const e of this[L])this[T].alphaMode==="MASK"?e.alphaTest=t.alphaCutoff:e.alphaTest=void 0,e.needsUpdate=!0}setAlphaCutoff(t){this[k](),this[T].alphaCutoff=t,this[Os](),this[Y]()}getAlphaCutoff(){return this[k](),this[T].alphaCutoff}setDoubleSided(t){this[k]();for(const e of this[L])e.side=t?Mi:Wa,e.needsUpdate=!0;this[T].doubleSided=t,this[Y]()}getDoubleSided(){return this[k](),this[T].doubleSided}setAlphaMode(t){this[k]();const e=(s,i)=>{s.transparent=i,s.depthWrite=!i};this[T].alphaMode=t;for(const s of this[L])e(s,t==="BLEND"),this[Os](),s.needsUpdate=!0;this[Y]()}getAlphaMode(){return this[k](),this[T].alphaMode}}var So,xo,To,Mo,Eo;const ht=Symbol("materials"),rt=Symbol("variantToMaterialMap"),it=Symbol("modelVariants"),Cn=Symbol("mesh"),Ao=Symbol("children"),Di=Symbol("initialMaterialIdx"),is=Symbol("activeMaterialIdx");class Ro{constructor(t){this.name="",this[So]=new Array,this.name=t}}So=Ao;class Ln extends Ro{constructor(t,e,s,i){super(t.name),this[xo]=new Map,this[To]=new Map,this[Mo]=0,this[Eo]=0,this[Cn]=t;const{gltf:n,threeGLTF:a,threeObjectMap:o}=i;this[it]=s,this.mesh.userData.variantData=s;const r=o.get(t.material);r.materials!=null?this[Di]=this[is]=r.materials:console.error(`Primitive (${t.name}) missing initial material reference.`);const c=t.userData.associations||{};if(c.meshes==null){console.error("Mesh is missing primitive index association");return}const m=((n.meshes||[])[c.meshes].primitives||[])[c.primitives];if(m==null){console.error("Mesh primitive definition is missing.");return}if(m.material!=null)this[ht].set(m.material,e[m.material]);else{const h=e.findIndex(b=>b.name==="Default");h>=0?this[ht].set(h,e[h]):console.warn("gltfPrimitive has no material!")}if(m.extensions&&m.extensions.KHR_materials_variants){const h=m.extensions.KHR_materials_variants,v=a.parser.json.extensions.KHR_materials_variants.variants;for(const p of h.mappings){const E=e[p.material];this[ht].set(p.material,E);for(const f of p.variants){const{name:y}=v[f];this[rt].set(f,E),E[es]().add(f),s.has(y)||s.set(y,{name:y,index:f})}}}}get mesh(){return this[Cn]}async setActiveMaterial(t){const e=this[ht].get(t);return e!=null&&(this.mesh.material=await e[Li](),this[is]=t),this.mesh.material}getActiveMaterial(){return this[ht].get(this[is])}getMaterial(t){return this[ht].get(t)}async enableVariant(t){if(t==null)return this.setActiveMaterial(this[Di]);if(this[rt]!=null&&this[it].has(t)){const e=this[it].get(t);return this.enableVariantHelper(e.index)}return null}async enableVariantHelper(t){if(this[rt]!=null&&t!=null){const e=this[rt].get(t);if(e!=null)return this.setActiveMaterial(e.index)}return null}async instantiateVariants(){if(this[rt]!=null)for(const t of this[rt].keys()){const e=this.mesh.userData.variantMaterials.get(t);if(e.material!=null)continue;const s=await this.enableVariantHelper(t);s!=null&&(e.material=s)}}get variantInfo(){return this[rt]}addVariant(t,e){if(!this.ensureVariantIsUnused(e))return!1;this[it].has(e)||this[it].set(e,{name:e,index:this[it].size});const i=this[it].get(e).index;return t[es]().add(i),this[rt].set(i,t),this[ht].set(t.index,t),this.updateVariantUserData(i,t),!0}deleteVariant(t){if(this.variantInfo.has(t)){this.variantInfo.delete(t);const e=this.mesh.userData.variantMaterials;e!=null&&e.delete(t)}}updateVariantUserData(t,e){e[es]().add(t),this.mesh.userData.variantData=this[it],this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(t,{material:e[L].values().next().value,gltfMaterialIndex:e.index})}ensureVariantIsUnused(t){const e=this[it].get(t);return e!=null&&this.variantInfo.has(e.index)?(console.warn(`Primitive cannot add variant '${t}' for this material, it already exists.`),!1):!0}}xo=ht,To=rt,Mo=Di,Eo=is;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dn,Pn,On,_n,In,Fn;const vt=Symbol("materials"),$s=Symbol("hierarchy"),$n=Symbol("roots"),nt=Symbol("primitives"),ks=Symbol("correlatedSceneGraph"),Co=Symbol("prepareVariantsForExport"),Lo=Symbol("switchVariant"),kn=Symbol("threeScene"),Nn=Symbol("materialsFromPoint"),Do=Symbol("materialFromPoint"),_=Symbol("variantData"),Pi=Symbol("availableVariants"),Ns=Symbol("modelOnUpdate"),Vn=Symbol("cloneMaterial");class Al{constructor(t,e,s,i){this.gltf=t,this.gltfElementMap=e,this.mapKey=s,this.doLazyLoad=i}}class Rl{constructor(t,e=()=>{}){this[Dn]=new Array,this[Pn]=new Array,this[On]=new Array,this[_n]=new Array,this[In]=()=>{},this[Fn]=new Map,this[Ns]=e,this[ks]=t;const{gltf:s,threeGLTF:i,gltfElementMap:n}=t;this[kn]=i.scene;for(const[r,c]of s.materials.entries()){const d=n.get(c);if(d!=null)this[vt].push(new Fs(e,s,c,r,!0,this[_],d));else{const m=(s.materials||[])[r],h=r,b=async()=>{const v=await i.parser.getDependency("material",h),p=new Set;return n.set(m,p),p.add(v),{set:p,material:v}};this[vt].push(new Fs(e,s,m,r,!1,this[_],d,new Al(s,n,m,b)))}}const a=new Map,o=new Array;for(const r of i.scene.children)o.push(r);for(;o.length>0;){const r=o.pop();let c=null;r instanceof S?(c=new Ln(r,this.materials,this[_],t),this[nt].push(c)):c=new Ro(r.name);const d=a.get(r);d!=null?d[Ao].push(c):this[$n].push(c),this[$s].push(c);for(const u of r.children)o.push(u),a.set(r,c)}}get materials(){return this[vt]}[(Dn=vt,Pn=$s,On=$n,_n=nt,In=Ns,Fn=_,Pi)](){const t=Array.from(this[_].values());return t.sort((e,s)=>e.index-s.index),t.map(e=>e.name)}getMaterialByName(t){const e=this[vt].filter(s=>s.name===t);return e.length>0?e[0]:null}[Nn](t){return t.intersectObject(this[kn],!0).map(s=>{const i=this[$s].find(n=>n instanceof Ln&&n.mesh===s.object);return i!=null?i.getActiveMaterial():null})}[Do](t){const e=this[Nn](t);return e.length>0?e[0]:null}async[Lo](t){for(const e of this[nt])await e.enableVariant(t);for(const e of this.materials)e[fe](!1);for(const e of this[nt])this.materials[e.getActiveMaterial().index][fe](!0)}async[Co](){const t=new Array;for(const e of this[nt])t.push(e.instantiateVariants());await Promise.all(t)}[Vn](t,e){const s=this.materials[t];s.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const i=s[L],n=JSON.parse(JSON.stringify(s[T]));n.name=e,this[ks].gltf.materials.push(n);const o=new Set;for(const[c,d]of i.entries()){const u=d.clone();u.name=e+(i.size>1?"_inst"+c:""),o.add(u)}const r=new Fs(this[Ns],this[ks].gltf,n,this[vt].length,!1,this[_],o);return this[vt].push(r),r}createMaterialInstanceForVariant(t,e,s,i=!0){let n=null;for(const a of this[nt]){const o=this[_].get(s);o!=null&&a.variantInfo.has(o.index)||a.getMaterial(t)!=null&&(this.hasVariant(s)||this.createVariant(s),n==null&&(n=this[Vn](t,e)),a.addVariant(n,s))}if(i&&n!=null){n[fe](!0),this.materials[t][fe](!1);for(const a of this[nt])a.enableVariant(s)}return n}createVariant(t){this[_].has(t)?console.warn(`Variant '${t}'' already exists`):this[_].set(t,{name:t,index:this[_].size})}hasVariant(t){return this[_].has(t)}setMaterialToVariant(t,e){if(this[Pi]().find(s=>s===e)==null){console.warn(`Can't add material to '${e}', the variant does not exist.'`);return}if(t<0||t>=this.materials.length){console.error("setMaterialToVariant(): materialIndex is out of bounds.");return}for(const s of this[nt]){const i=s.getMaterial(t);i!=null&&s.addVariant(i,e)}}updateVariantName(t,e){const s=this[_].get(t);s!=null&&(s.name=e,this[_].set(e,s),this[_].delete(t))}deleteVariant(t){const e=this[_].get(t);if(e!=null){for(const s of this.materials)s.hasVariant(t)&&s[ss].delete(e.index);for(const s of this[nt])s.deleteVariant(e.index);this[_].delete(t)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vs=globalThis&&globalThis.__decorate||function(l,t,e,s){var i=arguments.length,n=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,t,e,s);else for(var o=l.length-1;o>=0;o--)(a=l[o])&&(n=(i<3?a(n):i>3?a(t,e,n):a(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n};const ge=Symbol("currentGLTF"),ns=Symbol("originalGltfJson"),Mt=Symbol("model"),Bs=Symbol("getOnUpdateMethod"),Bn=Symbol("textureLoader"),Cl=l=>{var t,e,s,i;class n extends l{constructor(){super(...arguments),this[t]=void 0,this[e]=null,this[s]=new Ka,this[i]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[Mt]}get availableVariants(){return this.model?this.model[Pi]():[]}get originalGltfJson(){return this[ns]}[(t=Mt,e=ge,s=Bn,i=ns,Bs)](){return()=>{this[N]()}}async createTexture(o,r="image/png"){const c=this[ge],d=await new Promise(u=>this[Bn].load(o,u));return!c||!d?null:(d.encoding=bs,d.wrapS=Bi,d.wrapT=Bi,d.flipY=!1,d.userData.mimeType=r,new vo(this[Bs](),d))}async updated(o){if(super.updated(o),o.has("variantName")){const r=this[Ct].beginActivity();r(.1);const c=this[Mt],{variantName:d}=this;c!=null&&(await c[Lo](d),this[N](),this.dispatchEvent(new CustomEvent("variant-applied"))),r(1)}if(o.has("orientation")||o.has("scale")){if(!this.loaded)return;const r=this[g];r.applyTransform(),r.updateBoundingBox(),r.updateShadow(),this[A].arRenderer.onUpdateScene(),this[N]()}}[gt](){super[gt]();const{currentGLTF:o}=this[g];if(o!=null){const{correlatedSceneGraph:r}=o;r!=null&&o!==this[ge]&&(this[Mt]=new Rl(r,this[Bs]()),this[ns]=JSON.parse(JSON.stringify(r.gltf))),"variants"in o.userData&&this.requestUpdate("variantName")}this[ge]=o}async exportScene(o){const r=this[g];return new Promise(async(c,d)=>{const u={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(u,o),u.animations=r.animations,u.truncateDrawRange=!0;const m=r.shadow;let h=!1;m!=null&&(h=m.visible,m.visible=!1),await this[Mt][Co](),new lr().register(v=>new Gr(v)).parse(r.model,v=>c(new Blob([u.binary?v:JSON.stringify(v)],{type:u.binary?"application/octet-stream":"application/json"})),()=>d("glTF export failed"),u),m!=null&&(m.visible=h)})}materialFromPoint(o,r){const c=this[g],d=c.getNDC(o,r);return c.raycaster.setFromCamera(d,c.getCamera()),this[Mt][Do](c.raycaster)}}return Vs([w({type:String,attribute:"variant-name"})],n.prototype,"variantName",void 0),Vs([w({type:String,attribute:"orientation"})],n.prototype,"orientation",void 0),Vs([w({type:String,attribute:"scale"})],n.prototype,"scale",void 0),n};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=(l,t)=>({type:"number",number:l,unit:t}),Rt=(()=>{const l={};return e=>{const s=e;if(s in l)return l[s];const i=[];let n=0;for(;e;){if(++n>1e3){e="";break}const a=Po(e),o=a.nodes[0];if(o==null||o.terms.length===0)break;i.push(o),e=a.remainingInput}return l[s]=i}})(),Po=(()=>{const l=/^(\-\-|[a-z\u0240-\uffff])/i,t=/^([\*\+\/]|[\-]\s)/i,e=/^[\),]/,s="(",i="#";return n=>{const a=[];for(;n.length&&(n=n.trim(),!e.test(n));)if(n[0]===s){const{nodes:o,remainingInput:r}=zn(n);n=r,a.push({type:"function",name:{type:"ident",value:"calc"},arguments:o})}else if(l.test(n)){const o=Ll(n),r=o.nodes[0];if(n=o.remainingInput,n[0]===s){const{nodes:c,remainingInput:d}=zn(n);a.push({type:"function",name:r,arguments:c}),n=d}else a.push(r)}else if(t.test(n))a.push({type:"operator",value:n[0]}),n=n.slice(1);else{const{nodes:o,remainingInput:r}=n[0]===i?Pl(n):Dl(n);if(o.length===0)break;a.push(o[0]),n=r}return{nodes:[{type:"expression",terms:a}],remainingInput:n}}})(),Ll=(()=>{const l=/[^a-z0-9_\-\u0240-\uffff]/i;return t=>{const e=t.match(l),s=e==null?t:t.substr(0,e.index),i=e==null?"":t.substr(e.index);return{nodes:[{type:"ident",value:s}],remainingInput:i}}})(),Dl=(()=>{const l=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,t=/^[a-z%]+/i,e=/^(m|mm|cm|rad|deg|[%])$/;return s=>{const i=s.match(l),n=i==null?"0":i[0];s=n==null?s:s.slice(n.length);const a=s.match(t);let o=a!=null&&a[0]!==""?a[0]:null;const r=a==null?s:s.slice(o.length);return o!=null&&!e.test(o)&&(o=null),{nodes:[{type:"number",number:parseFloat(n)||0,unit:o}],remainingInput:r}}})(),Pl=(()=>{const l=/^[a-f0-9]*/i;return t=>{t=t.slice(1).trim();const e=t.match(l);return{nodes:e==null?[]:[{type:"hex",value:e[0]}],remainingInput:e==null?t:t.slice(e[0].length)}}})(),zn=l=>{const t=[];for(l=l.slice(1).trim();l.length;){const e=Po(l);if(t.push(e.nodes[0]),l=e.remainingInput.trim(),l[0]===",")l=l.slice(1).trim();else if(l[0]===")"){l=l.slice(1);break}}return{nodes:t,remainingInput:l}},Un=Symbol("visitedTypes");class Ol{constructor(t){this[Un]=t}walk(t,e){const s=t.slice();for(;s.length;){const i=s.shift();switch(this[Un].indexOf(i.type)>-1&&e(i),i.type){case"expression":s.unshift(...i.terms);break;case"function":s.unshift(i.name,...i.arguments);break}}}}const ft=Object.freeze({type:"number",number:0,unit:null});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=(l,t=0)=>{let{number:e,unit:s}=l;if(!isFinite(e))e=t,s="rad";else if(l.unit==="rad"||l.unit==null)return l;return{type:"number",number:(s==="deg"&&e!=null?e:0)*Math.PI/180,unit:"rad"}},Hn=(l,t=0)=>{let{number:e,unit:s}=l;if(!isFinite(e))e=t,s="m";else if(l.unit==="m")return l;let i;switch(s){default:i=1;break;case"cm":i=1/100;break;case"mm":i=1/1e3;break}return{type:"number",number:i*e,unit:"m"}},Q=(()=>{const l=e=>e,t={rad:l,deg:ys,m:l,mm:Hn,cm:Hn};return(e,s=ft)=>{isFinite(e.number)||(e.number=s.number,e.unit=s.unit);const{unit:i}=e;if(i==null)return e;const n=t[i];return n==null?s:n(e)}})();/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends cr{constructor(t){super(document.createElement("div")),this.normal=new D(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=t.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(t.position),this.updateNormal(t.normal)}get facingCamera(){return!this.element.classList.contains("hide")}show(){(!this.facingCamera||!this.initialized)&&this.updateVisibility(!0)}hide(){(this.facingCamera||!this.initialized)&&this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(t){if(t==null)return;const e=Rt(t)[0].terms;for(let s=0;s<3;++s)this.position.setComponent(s,Q(e[s]).number);this.updateMatrixWorld()}updateNormal(t){if(t==null)return;const e=Rt(t)[0].terms;for(let s=0;s<3;++s)this.normal.setComponent(s,Q(e[s]).number)}orient(t){this.pivot.style.transform=`rotate(${t}rad)`}updateVisibility(t){t?this.element.classList.remove("hide"):this.element.classList.add("hide"),this.slot.assignedNodes().forEach(e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;const s=e,i=s.dataset.visibilityAttribute;if(i!=null){const n=`data-${i}`;t?s.setAttribute(n,""):s.removeAttribute(n)}s.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:t}}))}),this.initialized=!0}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=(l,t,e)=>{let s=e;const i=new D;return l.traverseVisible(n=>{let a,o;n.updateWorldMatrix(!1,!1);const r=n.geometry;if(r!==void 0){if(r.isGeometry){const c=r.vertices;for(a=0,o=c.length;a<o;a++)i.copy(c[a]),n.isSkinnedMesh?n.boneTransform(a,i):i.applyMatrix4(n.matrixWorld),s=t(s,i)}else if(r.isBufferGeometry){const{position:c}=r.attributes;if(c!==void 0)for(a=0,o=c.count;a<o;a++)i.fromBufferAttribute(c,a),n.isSkinnedMesh?n.boneTransform(a,i):i.applyMatrix4(n.matrixWorld),s=t(s,i)}}}),s};/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=9,_l=6,zs=2,Il=.3;class Fl extends Ja{constructor(t,e,s){super(),this.camera=new Fi,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new hr,this.horizontalBlurMaterial=new rs(ur),this.verticalBlurMaterial=new rs(dr),this.intensity=0,this.softness=1,this.boundingBox=new jt,this.size=new D,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:i}=this;i.rotation.x=Math.PI/2,i.left=-.5,i.right=.5,i.bottom=-.5,i.top=.5,this.add(i);const n=new ps,a=new gs({opacity:1,transparent:!0,side:fs});this.floor=new S(n,a),this.floor.userData.shadow=!0,i.add(this.floor),this.blurPlane=new S(n),this.blurPlane.visible=!1,i.add(this.blurPlane),t.target.add(this),this.depthMaterial.onBeforeCompile=function(o){o.fragmentShader=o.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(t,e,s)}setScene(t,e,s){const{boundingBox:i,size:n,rotation:a,position:o}=this;if(this.isAnimated=t.animationNames.length>0,this.boundingBox.copy(t.boundingBox),this.size.copy(t.size),this.maxDimension=Math.max(n.x,n.y,n.z)*(this.isAnimated?zs:1),this.boundingBox.getCenter(o),s==="back"){const{min:r,max:c}=i;[r.y,r.z]=[r.z,r.y],[c.y,c.z]=[c.z,c.y],[n.y,n.z]=[n.z,n.y],a.x=Math.PI/2,a.y=Math.PI}else a.x=0,a.y=0;if(this.isAnimated){const r=i.min.y,c=i.max.y;n.y=this.maxDimension,i.expandByVector(n.subScalar(this.maxDimension).multiplyScalar(-.5)),i.min.y=r,i.max.y=c,n.set(this.maxDimension,c-r,this.maxDimension)}s==="bottom"?o.y=i.min.y:o.z=i.min.y,this.setSoftness(e)}setSoftness(t){this.softness=t;const{size:e,camera:s}=this,i=this.isAnimated?zs:1,n=i*Math.pow(2,jn-t*(jn-_l));this.setMapSize(n);const a=e.y/2,o=e.y*i;s.near=0,s.far=zi(o,a,t),this.depthMaterial.opacity=1/t,s.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(t){const{size:e}=this;this.isAnimated&&(t*=zs);const s=Math.floor(e.x>e.z?t:t*e.x/e.z),i=Math.floor(e.x>e.z?t*e.z/e.x:t),n=10,a=n+s,o=n+i;if(this.renderTarget!=null&&(this.renderTarget.width!==a||this.renderTarget.height!==o)&&(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){const r={format:Za};this.renderTarget=new ls(a,o,r),this.renderTargetBlur=new ls(a,o,r),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(e.x*(1+n/s),e.z*(1+n/i),1),this.needsUpdate=!0}setIntensity(t){this.intensity=t,t>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=t*zi(Il,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(t){this.floor.position.z=-t+.001*this.maxDimension}render(t,e){e.overrideMaterial=this.depthMaterial;const s=t.getClearAlpha();t.setClearAlpha(0),this.floor.visible=!1;const i=t.xr.enabled;t.xr.enabled=!1;const n=t.getRenderTarget();t.setRenderTarget(this.renderTarget),t.render(e,this.camera),e.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(t),t.xr.enabled=i,t.setRenderTarget(n),t.setClearAlpha(s)}blurShadow(t){const{camera:e,horizontalBlurMaterial:s,verticalBlurMaterial:i,renderTarget:n,renderTargetBlur:a,blurPlane:o}=this;o.visible=!0,o.material=s,s.uniforms.h.value=1/this.renderTarget.width,s.uniforms.tDiffuse.value=this.renderTarget.texture,t.setRenderTarget(a),t.render(o,e),o.material=i,i.uniforms.v.value=1/this.renderTarget.height,i.uniforms.tDiffuse.value=this.renderTargetBlur.texture,t.setRenderTarget(n),t.render(o,e),o.visible=!1}dispose(){this.renderTarget!=null&&this.renderTarget.dispose(),this.renderTargetBlur!=null&&this.renderTargetBlur.dispose(),this.depthMaterial.dispose(),this.horizontalBlurMaterial.dispose(),this.verticalBlurMaterial.dispose(),this.floor.material.dispose(),this.floor.geometry.dispose(),this.blurPlane.geometry.dispose(),this.removeFromParent()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=100,Hs=new D,Gn=new D,qn=new D,$l=new mr,kl=new D,ne=new Kt;class Nl extends Zt{constructor({canvas:t,element:e,width:s,height:i}){super(),this.annotationRenderer=new pr,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.camera=new Ei(45,1,.1,100),this.xrCamera=null,this.url=null,this.target=new Ja,this.animationNames=[],this.boundingBox=new jt,this.boundingSphere=new qa,this.size=new D,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.canScale=!0,this.isDirty=!1,this.goalTarget=new D,this.targetDamperX=new V,this.targetDamperY=new V,this.targetDamperZ=new V,this._currentGLTF=null,this._model=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.name="ModelScene",this.element=e,this.canvas=t,this.camera=new Ei(45,1,.1,100),this.camera.name="MainCamera",this.add(this.target),this.setSize(s,i),this.target.name="Target",this.mixer=new fr(this.target);const{domElement:n}=this.annotationRenderer,{style:a}=n;a.display="none",a.pointerEvents="none",a.position="absolute",a.top="0",this.element.shadowRoot.querySelector(".default").appendChild(n),this.schemaElement.setAttribute("type","application/ld+json")}get context(){return this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(t){this.reset(),this._model=t,this.target.add(t),await this.setupScene()}async setSource(t,e=()=>{}){if(!t||t===this.url){e(1);return}if(this.reset(),this.url=t,this.externalRenderer!=null){const o=await this.externalRenderer.load(e);this.boundingSphere.radius=o.framedRadius,this.idealAspect=o.fieldOfViewAspect;return}this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);let s;try{s=await new Promise(async(o,r)=>{this.cancelPendingSourceChange=()=>r();try{const c=await this.element[A].loader.load(t,this.element,e);o(c)}catch(c){r(c)}})}catch(o){if(o==null)return;throw o}this.cancelPendingSourceChange=null,this.reset(),this.url=t,this._currentGLTF=s,s!=null&&(this._model=s.scene,this.target.add(s.scene));const{animations:i}=s,n=new Map,a=[];for(const o of i)n.set(o.name,o),a.push(o.name);this.animations=i,this.animationsByName=n,this.animationNames=a,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity)}reset(){this.url=null,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0),this.bakedShadows.clear();const{_model:t}=this;t!=null&&(t.removeFromParent(),this._model=null);const e=this._currentGLTF;e!=null&&(e.dispose(),this._currentGLTF=null),this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}dispose(){this.reset(),this.shadow!=null&&(this.shadow.dispose(),this.shadow=null),this.element[ge]=null,this.element[ns]=null,this.element[Mt]=null}get currentGLTF(){return this._currentGLTF}setSize(t,e){if(!(this.width===t&&this.height===e)){if(this.width=Math.max(t,1),this.height=Math.max(e,1),this.annotationRenderer.setSize(t,e),this.aspect=this.width/this.height,this.externalRenderer!=null){const s=Ai();this.externalRenderer.resize(t*s,e*s)}this.queueRender()}}markBakedShadow(t){t.userData.shadow=!0,this.bakedShadows.add(t)}unmarkBakedShadow(t){t.userData.shadow=!1,t.visible=!0,this.bakedShadows.delete(t),this.boundingBox.expandByObject(t)}findBakedShadows(t){const e=new jt;t.traverse(s=>{const i=s;if(!i.isMesh||!i.material.transparent)return;e.setFromObject(i);const a=e.getSize(kl),o=Math.min(a.x,a.y,a.z);Math.max(a.x,a.y,a.z)<Us*o||this.markBakedShadow(i)})}checkBakedShadows(){const{min:t,max:e}=this.boundingBox,s=new jt;this.boundingBox.getSize(this.size);for(const i of this.bakedShadows)s.setFromObject(i),!(s.min.y<t.y+this.size.y/Us&&s.min.x<=t.x&&s.max.x>=e.x&&s.min.z<=t.z&&s.max.z>=e.z)&&(s.min.z<t.z+this.size.z/Us&&s.min.x<=t.x&&s.max.x>=e.x&&s.min.y<=t.y&&s.max.y>=e.y||this.unmarkBakedShadow(i))}applyTransform(){const{model:t}=this;if(t==null)return;const e=Rt(this.element.orientation)[0].terms,s=Q(e[0]).number,i=Q(e[1]).number,n=Q(e[2]).number;t.quaternion.setFromEuler(new to(i,n,s,"YXZ"));const a=Rt(this.element.scale)[0].terms;t.scale.set(a[0].number,a[1].number,a[2].number)}updateBoundingBox(){const{model:t}=this;if(t==null)return;this.target.remove(t),this.findBakedShadows(t);const e=(s,i)=>s.expandByPoint(i);this.setBakedShadowVisibility(!1),this.boundingBox=$e(t,e,new jt),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows.forEach(s=>this.unmarkBakedShadow(s)),this.boundingBox=$e(t,e,new jt)),this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size),this.target.add(t)}async updateFraming(){const{model:t}=this;if(t==null)return;this.target.remove(t),this.setBakedShadowVisibility(!1);const{center:e}=this.boundingSphere;this.element.requestUpdate("cameraTarget"),await this.element.updateComplete,e.copy(this.getTarget());const s=(n,a)=>Math.max(n,e.distanceToSquared(a));this.boundingSphere.radius=Math.sqrt($e(t,s,0));const i=(n,a)=>{a.sub(e);const o=Math.sqrt(a.x*a.x+a.z*a.z);return Math.max(n,o/(this.idealCameraDistance()-Math.abs(a.y)))};this.idealAspect=$e(t,i,0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(t)}setBakedShadowVisibility(t=this.shadowIntensity<=0){for(const e of this.bakedShadows)e.visible=t}idealCameraDistance(){const t=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(t)}adjustedFoV(t){const e=Math.tan(t/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(e)*180/Math.PI}getNDC(t,e){if(this.xrCamera!=null)ne.set(t/window.screen.width,e/window.screen.height);else{const s=this.element.getBoundingClientRect();ne.set((t-s.x)/this.width,(e-s.y)/this.height)}return ne.multiplyScalar(2).subScalar(1),ne.y*=-1,ne}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(t,e){this.element[A].arRenderer.presentedScene!==this&&(this.environment=t,this.background=e,this.queueRender())}setTarget(t,e,s){this.goalTarget.set(-t,-e,-s)}setTargetDamperDecayTime(t){this.targetDamperX.setDecayTime(t),this.targetDamperY.setDecayTime(t),this.targetDamperZ.setDecayTime(t)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(ho)}updateTarget(t){const e=this.goalTarget,s=this.target.position;if(e.equals(s))return!1;{const i=this.boundingSphere.radius/10;let{x:n,y:a,z:o}=s;return n=this.targetDamperX.update(n,e.x,t,i),a=this.targetDamperY.update(a,e.y,t,i),o=this.targetDamperZ.update(o,e.z,t,i),this.target.position.set(n,a,o),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(t,e){const{x:s,z:i}=this.position;this.yaw=Math.atan2(t-s,e-i)}get model(){return this._model}set yaw(t){this.rotation.y=t,this.queueRender()}get yaw(){return this.rotation.y}set animationTime(t){this.mixer.setTime(t),this.queueShadowRender()}get animationTime(){if(this.currentAnimationAction!=null){const t=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop===eo&&(t&1)===1?this.duration-this.currentAnimationAction.time:this.currentAnimationAction.time}return 0}set animationTimeScale(t){this.mixer.timeScale=t}get animationTimeScale(){return this.mixer.timeScale}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(t=null,e=0,s=so,i=1/0){if(this._currentGLTF==null)return;const{animations:n}=this;if(n==null||n.length===0){console.warn("Cannot play animation (model does not have any animations)");return}let a=null;if(t!=null&&(a=this.animationsByName.get(t),a==null)){const o=parseInt(t);!isNaN(o)&&o>=0&&o<n.length&&(a=n[o])}a==null&&(a=n[0]);try{const{currentAnimationAction:o}=this,r=this.mixer.clipAction(a,this);this.currentAnimationAction=r,this.element.paused?this.mixer.stopAllAction():(r.paused=!1,o!=null&&r!==o?r.crossFadeFrom(o,e,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),r.setLoop(s,i),r.enabled=!0,r.clampWhenFinished=!0,r.play()}catch(o){console.error(o)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(t){this.mixer.update(t),this.queueShadowRender()}subscribeMixerEvent(t,e){this.mixer.addEventListener(t,e)}updateShadow(){const t=this.shadow;if(t!=null){const e=this.element.arPlacement==="wall"?"back":"bottom";t.setScene(this,this.shadowSoftness,e),t.needsUpdate=!0}}renderShadow(t){const e=this.shadow;e!=null&&e.needsUpdate==!0&&(e.render(t,this),e.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(t){if(this.shadowIntensity=t,this._currentGLTF!=null&&(this.setBakedShadowVisibility(),!(t<=0&&this.shadow==null))){if(this.shadow==null){const e=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new Fl(this,this.shadowSoftness,e)}this.shadow.setIntensity(t)}}setShadowSoftness(t){this.shadowSoftness=t;const e=this.shadow;e!=null&&e.setSoftness(t)}setShadowOffset(t){const e=this.shadow;e!=null&&e.setOffset(t)}get raycaster(){return $l}positionAndNormalFromPoint(t,e=this){this.raycaster.setFromCamera(t,this.getCamera());const i=this.raycaster.intersectObject(e,!0).find(n=>n.object.visible&&!n.object.userData.shadow);return i==null||i.face==null?null:i.uv==null?{position:i.point,normal:i.face.normal,uv:null}:(i.face.normal.applyNormalMatrix(new ki().getNormalMatrix(i.object.matrixWorld)),{position:i.point,normal:i.face.normal,uv:i.uv})}addHotspot(t){this.target.add(t),this.annotationRenderer.domElement.appendChild(t.element)}removeHotspot(t){this.target.remove(t)}forHotspots(t){const{children:e}=this.target;for(let s=0,i=e.length;s<i;s++){const n=e[s];n instanceof Oo&&t(n)}}updateHotspots(t){this.forHotspots(e=>{Hs.copy(t),Gn.setFromMatrixPosition(e.matrixWorld),Hs.sub(Gn),qn.copy(e.normal).transformDirection(this.target.matrixWorld),Hs.dot(qn)<0?e.hide():e.show()})}orientHotspots(t){this.forHotspots(e=>{e.orient(t)})}setHotspotsVisibility(t){this.forHotspots(e=>{e.visible=t})}updateSchema(t){var e;const{schemaElement:s,element:i}=this,{alt:n,poster:a,iosSrc:o}=i;if(t!=null){const r=[{"@type":"MediaObject",contentUrl:t,encodingFormat:((e=t.split(".").pop())===null||e===void 0?void 0:e.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];o&&r.push({"@type":"MediaObject",contentUrl:o,encodingFormat:"model/vnd.usdz+zip"});const c={"@context":"http://schema.org/","@type":"3DModel",image:a!=null?a:void 0,name:n!=null?n:void 0,encoding:r};s.textContent=JSON.stringify(c),document.head.appendChild(s)}else s.parentElement!=null&&s.parentElement.removeChild(s)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=async l=>new Promise((t,e)=>{const i=l.match(/data:(.*);/);if(!i)return e(new Error(`${l} is not a valid data Url`));const n=i[1],a=l.replace(/data:image\/\w+;base64,/,""),o=atob(a),r=[];for(let c=0;c<o.length;c+=512){const d=o.slice(c,c+512),u=new Array(d.length);for(let h=0;h<d.length;h++)u[h]=d.charCodeAt(h);const m=new Uint8Array(u);r.push(m)}t(new Blob(r,{type:n}))});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(){const t={progress:0,completed:!1};return this.ongoingActivities.add(t),this.ongoingActivityCount===1&&this.announceTotalProgress(t,0),e=>{let s;return s=Math.max(K(e,0,1),t.progress),s!==t.progress&&this.announceTotalProgress(t,s),t.progress}}announceTotalProgress(t,e){let s=0,i=0;e==1&&(t.completed=!0);for(const o of this.ongoingActivities){const{progress:r}=o;s+=1-r,o.completed===!0&&i++}const n=t.progress;t.progress=e,this.totalProgress+=(e-n)*(1-this.totalProgress)/s;const a=i===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:a}})),i===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ws=globalThis&&globalThis.__decorate||function(l,t,e,s){var i=arguments.length,n=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,t,e,s);else for(var o=l.length-1;o>=0;o--)(a=l[o])&&(n=(i<3?a(n):i>3?a(t,e,n):a(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n},Wn,Xn,Kn,Yn,Zn,Qn,Jn,ta,ea,sa,ia,na,aa;const zl=1e3,Ul=50,Hl=0,jl=300,Gl=150,z=document.createElement("canvas"),js=Symbol("fallbackResizeHandler"),oa=Symbol("defaultAriaLabel"),ke=Symbol("resizeObserver"),Ft=Symbol("clearModelTimeout"),Gs=Symbol("onContextLost"),$t=Symbol("loaded"),qs=Symbol("status"),Ws=Symbol("onFocus"),Xs=Symbol("onBlur"),Gt=Symbol("updateSize"),Ne=Symbol("intersectionObserver"),Et=Symbol("isElementInViewport"),ms=Symbol("announceModelVisibility"),Se=Symbol("ariaLabel"),Oi=Symbol("altDefaulted"),ae=Symbol("statusElement"),_i=Symbol("updateStatus"),be=Symbol("loadedTime"),Xt=Symbol("updateSource"),ra=Symbol("markLoaded"),xe=Symbol("container"),Z=Symbol("input"),Ii=Symbol("canvas"),g=Symbol("scene"),N=Symbol("needsRender"),J=Symbol("tick"),gt=Symbol("onModelLoad"),Me=Symbol("onResize"),A=Symbol("renderer"),Ct=Symbol("progressTracker"),la=Symbol("getLoaded"),Lt=Symbol("getModelIsVisible"),Yt=Symbol("shouldAttemptPreload"),pt=l=>({x:l.x,y:l.y,z:l.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),ql=l=>({u:l.x,v:l.y,toString(){return`${this.u} ${this.v}`}});class Re extends qo{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[Wn]=!1,this[Xn]=!1,this[Kn]=0,this[Yn]="",this[Zn]=null,this[Qn]=ji(()=>{const i=this.getBoundingClientRect();this[Gt](i)},Ul),this[Jn]=ji(i=>{const n=this.modelIsVisible;n!==i&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:n}}))},Hl),this[ta]=null,this[ea]=null,this[sa]=new Bl,this[ia]=()=>{this[ae].textContent=this[qs]},this[na]=()=>{this[ae].textContent=""},this[aa]=i=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:i.sourceEvent}}))},this.attachShadow({mode:"open"});const t=this.shadowRoot;Nr(t),this[xe]=t.querySelector(".container"),this[Z]=t.querySelector(".userInput"),this[Ii]=t.querySelector("canvas"),this[ae]=t.querySelector("#status"),this[oa]=this[Z].getAttribute("aria-label");let e,s;if(this.isConnected){const i=this.getBoundingClientRect();e=i.width,s=i.height}else e=jl,s=Gl;this[g]=new Nl({canvas:this[Ii],element:this,width:e,height:s}),Promise.resolve().then(()=>{this[Gt](this.getBoundingClientRect())}),xs&&(this[ke]=new ResizeObserver(i=>{if(!this[A].isPresenting)for(let n of i)n.target===this&&this[Gt](n.contentRect)})),Ts?this[Ne]=new IntersectionObserver(i=>{for(let n of i)if(n.target===this){const a=this.modelIsVisible;this[Et]=n.isIntersecting,this[ms](a),this[Et]&&!this.loaded&&this[Xt]()}},{root:null,rootMargin:"0px",threshold:1e-5}):this[Et]=!0}static get is(){return"model-viewer"}static set modelCacheSize(t){P[dt].evictionThreshold=t}static get modelCacheSize(){return P[dt].evictionThreshold}static set minimumRenderScale(t){t>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),t<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),lt.singleton.minScale=t}static get minimumRenderScale(){return lt.singleton.minScale}get loaded(){return this[la]()}get[(Wn=Et,Xn=$t,Kn=be,Yn=qs,Zn=Ft,Qn=js,Jn=ms,ta=ke,ea=Ne,sa=Ct,A)](){return lt.singleton}get modelIsVisible(){return this[Lt]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),xs?this[ke].observe(this):self.addEventListener("resize",this[js]),Ts&&this[Ne].observe(this),this.addEventListener("focus",this[Ws]),this.addEventListener("blur",this[Xs]);const t=this[A];t.addEventListener("contextlost",this[Gs]),t.registerScene(this[g]),this[Ft]!=null&&(self.clearTimeout(this[Ft]),this[Ft]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),xs?this[ke].unobserve(this):self.removeEventListener("resize",this[js]),Ts&&this[Ne].unobserve(this),this.removeEventListener("focus",this[Ws]),this.removeEventListener("blur",this[Xs]);const t=this[A];t.removeEventListener("contextlost",this[Gs]),t.unregisterScene(this[g]),this[Ft]=self.setTimeout(()=>{this[g].dispose(),this[Ft]=null},zl)}updated(t){super.updated(t),t.has("src")&&(this.src==null?(this[$t]=!1,this[be]=0,this[g].reset()):this.src!==this[g].url&&(this[$t]=!1,this[be]=0,this[Xt]())),t.has("alt")&&this[Z].setAttribute("aria-label",this[Se]),t.has("withCredentials")&&(P.withCredentials=this.withCredentials),t.has("generateSchema")&&(this.generateSchema?this[g].updateSchema(this.src):this[g].updateSchema(null))}toDataURL(t,e){return this[A].displayCanvas(this[g]).toDataURL(t,e)}async toBlob(t){const e=t?t.mimeType:void 0,s=t?t.qualityArgument:void 0,i=t?t.idealAspect:void 0,{width:n,height:a,idealAspect:o,aspect:r}=this[g],{dpr:c,scaleFactor:d}=this[A];let u=n*d*c,m=a*d*c,h=0,b=0;if(i===!0)if(o>r){const v=m;m=Math.round(u/o),b=(v-m)/2}else{const v=u;u=Math.round(m*o),h=(v-u)/2}z.width=u,z.height=m;try{return new Promise(async(v,p)=>{if(z.getContext("2d").drawImage(this[A].displayCanvas(this[g]),h,b,u,m,0,0,u,m),z.msToBlob&&(!e||e==="image/png"))return v(z.msToBlob());if(!z.toBlob)return v(await Vl(z.toDataURL(e,s)));z.toBlob(E=>{if(!E)return p(new Error("Unable to retrieve canvas blob"));v(E)},e,s)})}finally{this[Gt]({width:n,height:a})}}registerRenderer(t){this[g].externalRenderer=t}unregisterRenderer(){this[g].externalRenderer=null}get[Se](){return this[Oi]}get[Oi](){return this.alt==null||this.alt==="null"?this[oa]:this.alt}[la](){return this[$t]}[Lt](){return this.loaded&&this[Et]}[Yt](){return!!this.src&&this[Et]}[Gt]({width:t,height:e}){this[xe].style.width=`${t}px`,this[xe].style.height=`${e}px`,this[Me]({width:parseFloat(t),height:parseFloat(e)})}[J](t,e){}[ra](){this[$t]||(this[$t]=!0,this[be]=performance.now())}[N](){this[g].queueRender()}[gt](){}[_i](t){this[qs]=t;const e=this.getRootNode();e!=null&&e.activeElement===this&&this[ae].textContent!=t&&(this[ae].textContent=t)}[(ia=Ws,na=Xs,Me)](t){this[g].setSize(t.width,t.height)}async[(aa=Gs,Xt)](){const t=this[g];if(this.loaded||!this[Yt]()||this.src===t.url)return;this.generateSchema&&t.updateSchema(this.src),this[_i]("Loading"),t.stopAnimation();const e=this[Ct].beginActivity(),s=this.src;try{const i=t.setSource(s,a=>e(K(a,0,1)*.95)),n=this[hs]();await Promise.all([i,n]),this[ra](),this[gt](),await new Promise(a=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:s}})),a()})})})}catch(i){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:i}}))}finally{e(1)}}}ws([w({type:String})],Re.prototype,"alt",void 0);ws([w({type:String})],Re.prototype,"src",void 0);ws([w({type:Boolean,attribute:"with-credentials"})],Re.prototype,"withCredentials",void 0);ws([w({type:Boolean,attribute:"generate-schema"})],Re.prototype,"generateSchema",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ks=globalThis&&globalThis.__decorate||function(l,t,e,s){var i=arguments.length,n=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,t,e,s);else for(var o=l.length-1;o>=0;o--)(a=l[o])&&(n=(i<3?a(n):i>3?a(t,e,n):a(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n};const ca=1e3,Ys=Symbol("changeAnimation"),at=Symbol("paused"),Wl={repetitions:1/0,pingpong:!1},Xl=l=>{var t;class e extends l{constructor(...i){super(i),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[t]=!0,this[g].subscribeMixerEvent("loop",n=>{const a=n.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:a}}))}),this[g].subscribeMixerEvent("finished",()=>{this[at]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[g].animationNames:[]}get duration(){return this[g].duration}get paused(){return this[at]}get currentTime(){return this[g].animationTime}set currentTime(i){this[g].animationTime=i,this[N]()}get timeScale(){return this[g].animationTimeScale}set timeScale(i){this[g].animationTimeScale=i}pause(){this[at]||(this[at]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(i){this.availableAnimations.length>0&&(this[at]=!1,this[Ys](i),this.dispatchEvent(new CustomEvent("play")))}[(t=at,gt)](){super[gt](),this[at]=!0,this.autoplay&&this.play()}[J](i,n){super[J](i,n),!(this[at]||!this[Lt]()&&!this[A].isPresenting)&&(this[g].updateAnimation(n/ca),this[N]())}updated(i){super.updated(i),i.has("autoplay")&&this.autoplay&&this.play(),i.has("animationName")&&this[Ys]()}[Ys](i=Wl){var n;const a=(n=i.repetitions)!==null&&n!==void 0?n:1/0,o=i.pingpong?eo:a===1?gr:so;this[g].playAnimation(this.animationName,this.animationCrossfadeDuration/ca,o,a),this[at]&&(this[g].updateAnimation(0),this[N]())}}return Ks([w({type:Boolean})],e.prototype,"autoplay",void 0),Ks([w({type:String,attribute:"animation-name"})],e.prototype,"animationName",void 0),Ks([w({type:Number,attribute:"animation-crossfade-duration"})],e.prototype,"animationCrossfadeDuration",void 0),e};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=Symbol("hotspotMap"),Zs=Symbol("mutationCallback"),oe=Symbol("observer"),Qs=Symbol("addHotspot"),ha=Symbol("removeHotspot"),Js=new ja,ua=new ki,Kl=l=>{var t,e,s;class i extends l{constructor(){super(...arguments),this[t]=new Map,this[e]=a=>{a.forEach(o=>{(!(o instanceof MutationRecord)||o.type==="childList")&&(o.addedNodes.forEach(r=>{this[Qs](r)}),o.removedNodes.forEach(r=>{this[ha](r)}),this[N]())})},this[s]=new MutationObserver(this[Zs])}connectedCallback(){super.connectedCallback();for(let o=0;o<this.children.length;++o)this[Qs](this.children[o]);const{ShadyDOM:a}=self;a==null?this[oe].observe(this,{childList:!0}):this[oe]=a.observeChildren(this,this[Zs])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:a}=self;a==null?this[oe].disconnect():a.unobserveChildren(this[oe])}[(t=yt,e=Zs,s=oe,J)](a,o){super[J](a,o);const r=this[g],{annotationRenderer:c}=r,d=r.getCamera();r.shouldRender()&&(r.updateHotspots(d.position),c.domElement.style.display="",c.render(r,d))}updateHotspot(a){const o=this[yt].get(a.name);o!=null&&(o.updatePosition(a.position),o.updateNormal(a.normal),this[N]())}queryHotspot(a){const o=this[yt].get(a);if(o==null)return null;const r=pt(o.position),c=pt(o.normal),d=o.facingCamera,u=this[g],m=u.getCamera(),h=new D;h.setFromMatrixPosition(o.matrixWorld),h.project(m);const b=u.width/2,v=u.height/2;h.x=h.x*b+b,h.y=-(h.y*v)+v;const p=pt(new D(h.x,h.y,h.z));return!Number.isFinite(p.x)||!Number.isFinite(p.y)?null:{position:r,normal:c,canvasPosition:p,facingCamera:d}}positionAndNormalFromPoint(a,o){const r=this[g],c=r.getNDC(a,o),d=r.positionAndNormalFromPoint(c);if(d==null)return null;Js.copy(r.target.matrixWorld).invert();const u=pt(d.position.applyMatrix4(Js));ua.getNormalMatrix(Js);const m=pt(d.normal.applyNormalMatrix(ua));let h=null;return d.uv!=null&&(h=ql(d.uv)),{position:u,normal:m,uv:h}}[Qs](a){if(!(a instanceof HTMLElement&&a.slot.indexOf("hotspot")===0))return;let o=this[yt].get(a.slot);o!=null?o.increment():(o=new Oo({name:a.slot,position:a.dataset.position,normal:a.dataset.normal}),this[yt].set(a.slot,o),this[g].addHotspot(o)),this[g].queueRender()}[ha](a){if(!(a instanceof HTMLElement))return;const o=this[yt].get(a.slot);!o||(o.decrement()&&(this[g].removeHotspot(o),this[yt].delete(a.slot)),this[g].queueRender())}}return i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=l=>t=>{try{const e=Rt(t),s=(e.length?e[0].terms:[]).filter(n=>n&&n.type==="ident").map(n=>n.value).filter(n=>l.indexOf(n)>-1),i=new Set;for(const n of s)i.add(n);return i}catch{}return new Set};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt=globalThis&&globalThis.__decorate||function(l,t,e,s){var i=arguments.length,n=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,t,e,s);else for(var o=l.length-1;o>=0;o--)(a=l[o])&&(n=(i<3?a(n):i>3?a(t,e,n):a(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n};let da=!1,ma=!1;const pa="#model-viewer-no-ar-fallback",Zl=Yl(["quick-look","scene-viewer","webxr","none"]),Ql="webxr scene-viewer quick-look",B={QUICK_LOOK:"quick-look",SCENE_VIEWER:"scene-viewer",WEBXR:"webxr",NONE:"none"},ot=Symbol("arButtonContainer"),fa=Symbol("enterARWithWebXR"),ga=Symbol("openSceneViewer"),ba=Symbol("openIOSARQuickLook"),Jl=Symbol("canActivateAR"),Ve=Symbol("arMode"),ti=Symbol("arModes"),Nt=Symbol("arAnchor"),Be=Symbol("preload"),ze=Symbol("onARButtonContainerClick"),ei=Symbol("onARStatus"),si=Symbol("onARTracking"),ii=Symbol("onARTap"),re=Symbol("selectARMode"),ni=Symbol("triggerLoad"),tc=l=>{var t,e,s,i,n,a,o,r,c,d;class u extends l{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes=Ql,this.iosSrc=null,this.xrEnvironment=!1,this[t]=!1,this[e]=this.shadowRoot.querySelector(".ar-button"),this[s]=document.createElement("a"),this[i]=new Set,this[n]=B.NONE,this[a]=!1,this[o]=h=>{h.preventDefault(),this.activateAR()},this[r]=({status:h})=>{(h===mt.NOT_PRESENTING||this[A].arRenderer.presentedScene===this[g])&&(this.setAttribute("ar-status",h),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:h}})),h===mt.NOT_PRESENTING?this.removeAttribute("ar-tracking"):h===mt.SESSION_STARTED&&this.setAttribute("ar-tracking",Ri.TRACKING))},this[c]=({status:h})=>{this.setAttribute("ar-tracking",h),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:h}}))},this[d]=h=>{h.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[Ve]!==B.NONE}connectedCallback(){super.connectedCallback(),this[A].arRenderer.addEventListener("status",this[ei]),this.setAttribute("ar-status",mt.NOT_PRESENTING),this[A].arRenderer.addEventListener("tracking",this[si]),this[Nt].addEventListener("message",this[ii])}disconnectedCallback(){super.disconnectedCallback(),this[A].arRenderer.removeEventListener("status",this[ei]),this[A].arRenderer.removeEventListener("tracking",this[si]),this[Nt].removeEventListener("message",this[ii])}update(h){super.update(h),h.has("arScale")&&(this[g].canScale=this.arScale!=="fixed"),h.has("arPlacement")&&(this[g].updateShadow(),this[N]()),h.has("arModes")&&(this[ti]=Zl(this.arModes)),(h.has("ar")||h.has("arModes")||h.has("src")||h.has("iosSrc"))&&this[re]()}async activateAR(){switch(this[Ve]){case B.QUICK_LOOK:this[ba]();break;case B.WEBXR:await this[fa]();break;case B.SCENE_VIEWER:this[ga]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities");break}}async[(t=Jl,e=ot,s=Nt,i=ti,n=Ve,a=Be,o=ze,r=ei,c=si,d=ii,re)](){let h=B.NONE;if(this.ar){if(this.src!=null)for(const b of this[ti]){if(b==="webxr"&&ao&&!da&&await this[A].arRenderer.supportsPresentation()){h=B.WEBXR;break}if(b==="scene-viewer"&&xr&&!ma){h=B.SCENE_VIEWER;break}if(b==="quick-look"&&Ui){h=B.QUICK_LOOK;break}}h===B.NONE&&this.iosSrc!=null&&Ui&&(h=B.QUICK_LOOK)}if(h!==B.NONE)this[ot].classList.add("enabled"),this[ot].addEventListener("click",this[ze]);else if(this[ot].classList.contains("enabled")){this[ot].removeEventListener("click",this[ze]),this[ot].classList.remove("enabled");const b=mt.FAILED;this.setAttribute("ar-status",b),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:b}}))}this[Ve]=h}async[fa](){console.log("Attempting to present in AR with WebXR..."),await this[ni]();try{this[ot].removeEventListener("click",this[ze]);const{arRenderer:h}=this[A];h.placeOnWall=this.arPlacement==="wall",await h.present(this[g],this.xrEnvironment)}catch(h){console.warn("Error while trying to present in AR with WebXR"),console.error(h),await this[A].arRenderer.stopPresenting(),da=!0,console.warn("Falling back to next ar-mode"),await this[re](),this.activateAR()}finally{this[re]()}}async[ni](){this.loaded||(this[Be]=!0,this[Xt](),await Cr(this,"load"),this[Be]=!1)}[Yt](){return super[Yt]()||this[Be]}[ga](){const h=self.location.toString(),b=new URL(h),v=new URL(this.src,h),p=new URLSearchParams(v.search);if(b.hash=pa,p.set("mode","ar_preferred"),p.has("disable_occlusion")||p.set("disable_occlusion","true"),this.arScale==="fixed"&&p.set("resizable","false"),this.arPlacement==="wall"&&p.set("enable_vertical_placement","true"),p.has("sound")){const y=new URL(p.get("sound"),h);p.set("sound",y.toString())}if(p.has("link")){const y=new URL(p.get("link"),h);p.set("link",y.toString())}const E=`intent://arvr.google.com/scene-viewer/1.0?${p.toString()+"&file="+encodeURIComponent(v.toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(b.toString())};end;`,f=()=>{self.location.hash===pa&&(ma=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[re]())};self.addEventListener("hashchange",f,{once:!0}),this[Nt].setAttribute("href",E),console.log("Attempting to present in AR with Scene Viewer..."),this[Nt].click()}async[ba](){const h=!this.iosSrc;this[ot].classList.remove("enabled");const b=h?await this.prepareUSDZ():this.iosSrc,v=new URL(b,self.location.toString());if(h){const f=self.location.toString(),y=new URL(f),x=new URL(this.src,y);x.hash&&(v.hash=x.hash)}this.arScale==="fixed"&&(v.hash&&(v.hash+="&"),v.hash+="allowsContentScaling=0");const p=this[Nt];p.setAttribute("rel","ar");const E=document.createElement("img");p.appendChild(E),p.setAttribute("href",v.toString()),h&&p.setAttribute("download","model.usdz"),p.style.display="none",p.isConnected||this.shadowRoot.appendChild(p),console.log("Attempting to present in AR with Quick Look..."),p.click(),p.removeChild(E),h&&URL.revokeObjectURL(b),this[ot].classList.add("enabled")}async prepareUSDZ(){const h=this[Ct].beginActivity();await this[ni]();const{model:b,shadow:v}=this[g];if(b==null)return"";let p=!1;v!=null&&(p=v.visible,v.visible=!1),h(.2);const f=await new br().parse(b),y=new Blob([f],{type:"model/vnd.usdz+zip"}),x=URL.createObjectURL(y);return h(1),v!=null&&(v.visible=p),x}}return kt([w({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),kt([w({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),kt([w({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),kt([w({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),kt([w({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),kt([w({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _o,va,ya;const Qt=Symbol("evaluate"),as=Symbol("lastValue");class R{constructor(){this[_o]=null}static evaluatableFor(t,e=ft){if(t instanceof R)return t;if(t.type==="number")return t.unit==="%"?new ec(t,e):t;switch(t.name.value){case"calc":return new nc(t,e);case"env":return new sc(t)}return ft}static evaluate(t){return t instanceof R?t.evaluate():t}static isConstant(t){return t instanceof R?t.isConstant:!0}static applyIntrinsics(t,e){const{basis:s,keywords:i}=e,{auto:n}=i;return s.map((a,o)=>{const r=n[o]==null?a:n[o];let c=t[o]?t[o]:r;if(c.type==="ident"){const d=c.value;d in i&&(c=i[d][o])}return(c==null||c.type==="ident")&&(c=r),c.unit==="%"?I(c.number/100*a.number,a.unit):(c=Q(c,a),c.unit!==a.unit?a:c)})}get isConstant(){return!1}evaluate(){return(!this.isConstant||this[as]==null)&&(this[as]=this[Qt]()),this[as]}}_o=as;const wa=Symbol("percentage"),ai=Symbol("basis");class ec extends R{constructor(t,e){super(),this[wa]=t,this[ai]=e}get isConstant(){return!0}[Qt](){return I(this[wa].number/100*this[ai].number,this[ai].unit)}}const Ue=Symbol("identNode");class sc extends R{constructor(t){super(),this[va]=null;const e=t.arguments.length?t.arguments[0].terms[0]:null;e!=null&&e.type==="ident"&&(this[Ue]=e)}get isConstant(){return!1}[(va=Ue,Qt)](){if(this[Ue]!=null)switch(this[Ue].value){case"window-scroll-y":const t=window.pageYOffset,e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);return{type:"number",number:t/(e-window.innerHeight)||0,unit:null}}return ft}}const ic=/[\*\/]/,Vt=Symbol("evaluator");class nc extends R{constructor(t,e=ft){if(super(),this[ya]=null,t.arguments.length!==1)return;const s=t.arguments[0].terms.slice(),i=[];for(;s.length;){const n=s.shift();if(i.length>0){const a=i[i.length-1];if(a.type==="operator"&&ic.test(a.value)){const o=i.pop(),r=i.pop();if(r==null)return;i.push(new xa(o,R.evaluatableFor(r,e),R.evaluatableFor(n,e)));continue}}i.push(n.type==="operator"?n:R.evaluatableFor(n,e))}for(;i.length>2;){const[n,a,o]=i.splice(0,3);if(a.type!=="operator")return;i.unshift(new xa(a,R.evaluatableFor(n,e),R.evaluatableFor(o,e)))}i.length===1&&(this[Vt]=i[0])}get isConstant(){return this[Vt]==null||R.isConstant(this[Vt])}[(ya=Vt,Qt)](){return this[Vt]!=null?R.evaluate(this[Vt]):ft}}const Sa=Symbol("operator"),oi=Symbol("left"),ri=Symbol("right");class xa extends R{constructor(t,e,s){super(),this[Sa]=t,this[oi]=e,this[ri]=s}get isConstant(){return R.isConstant(this[oi])&&R.isConstant(this[ri])}[Qt](){const t=Q(R.evaluate(this[oi])),e=Q(R.evaluate(this[ri])),{number:s,unit:i}=t,{number:n,unit:a}=e;if(a!=null&&i!=null&&a!=i)return ft;const o=i||a;let r;switch(this[Sa].value){case"+":r=s+n;break;case"-":r=s-n;break;case"/":r=s/n;break;case"*":r=s*n;break;default:return ft}return{type:"number",number:r,unit:o}}}const li=Symbol("evaluatables"),Ta=Symbol("intrinsics");class Io extends R{constructor(t,e){super(),this[Ta]=e;const s=t[0],i=s!=null?s.terms:[];this[li]=e.basis.map((n,a)=>{const o=i[a];return o==null?{type:"ident",value:"auto"}:o.type==="ident"?o:R.evaluatableFor(o,n)})}get isConstant(){for(const t of this[li])if(!R.isConstant(t))return!1;return!0}[Qt](){const t=this[li].map(e=>R.evaluate(e));return R.applyIntrinsics(t,this[Ta]).map(e=>e.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fo,$o,ko,No;const Bt=Symbol("instances"),Ma=Symbol("activateListener"),Ea=Symbol("deactivateListener"),ci=Symbol("notifyInstances"),Aa=Symbol("notify"),Ra=Symbol("callback");class X{constructor(t){this[Ra]=t}static[ci](){for(const t of X[Bt])t[Aa]()}static[(Fo=Bt,Ma)](){window.addEventListener("scroll",this[ci],{passive:!0})}static[Ea](){window.removeEventListener("scroll",this[ci])}observe(){X[Bt].size===0&&X[Ma](),X[Bt].add(this)}disconnect(){X[Bt].delete(this),X[Bt].size===0&&X[Ea]()}[Aa](){this[Ra]()}}X[Fo]=new Set;const Ca=Symbol("computeStyleCallback"),Vo=Symbol("astWalker"),ve=Symbol("dependencies"),Bo=Symbol("onScroll");class ac{constructor(t){this[$o]={},this[ko]=new Ol(["function"]),this[No]=()=>{this[Ca]({relatedState:"window-scroll"})},this[Ca]=t}observeEffectsFor(t){const e={},s=this[ve];this[Vo].walk(t,i=>{const{name:n}=i,o=i.arguments[0].terms[0];if(!(n.value!=="env"||o==null||o.type!=="ident"))switch(o.value){case"window-scroll-y":if(e["window-scroll"]==null){const r="window-scroll"in s?s["window-scroll"]:new X(this[Bo]);r.observe(),delete s["window-scroll"],e["window-scroll"]=r}break}});for(const i in s)s[i].disconnect();this[ve]=e}dispose(){for(const t in this[ve])this[ve][t].disconnect()}}$o=ve,ko=Vo,No=Bo;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=l=>{const t=l.observeEffects||!1,e=l.intrinsics instanceof Function?l.intrinsics:()=>l.intrinsics;return(s,i)=>{const n=s.updated,a=s.connectedCallback,o=s.disconnectedCallback,r=Symbol(`${i}StyleEffector`),c=Symbol(`${i}StyleEvaluator`),d=Symbol(`${i}UpdateEvaluator`),u=Symbol(`${i}EvaluateAndSync`);Object.defineProperties(s,{[r]:{value:null,writable:!0},[c]:{value:null,writable:!0},[d]:{value:function(){const m=Rt(this[i]);this[c]=new Io(m,e(this)),this[r]==null&&t&&(this[r]=new ac(()=>this[u]())),this[r]!=null&&this[r].observeEffectsFor(m)}},[u]:{value:function(){if(this[c]==null)return;const m=this[c].evaluate();this[l.updateHandler](m)}},updated:{value:function(m){m.has(i)&&(this[d](),this[u]()),n.call(this,m)}},connectedCallback:{value:function(){a.call(this),this.requestUpdate(i,this[i])}},disconnectedCallback:{value:function(){o.call(this),this[r]!=null&&(this[r].dispose(),this[r]=null)}}})}};/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=.018,La=2,rc=300,lc=new Kt,Da=new D,Pa=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:"none"}),He=Math.PI/8,je=.04,Ge=10,$={USER_INTERACTION:"user-interaction",NONE:"none",AUTOMATIC:"automatic"};class cc extends Ee{constructor(t,e,s){super(),this.camera=t,this.element=e,this.scene=s,this.orbitSensitivity=1,this.inputSensitivity=1,this.changeSource=$.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new ki,this.panPerPixel=0,this.spherical=new Qe,this.goalSpherical=new Qe,this.thetaDamper=new V,this.phiDamper=new V,this.radiusDamper=new V,this.logFov=Math.log(Pa.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new V,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=i=>{if(this.enablePan)i.preventDefault();else for(const n of this.pointers)this.onPointerUp(new PointerEvent("pointercancel",Object.assign(Object.assign({},this.startPointerPosition),{pointerId:n.id})))},this.touchModeZoom=(i,n)=>{if(!this._disableZoom){const a=this.twoTouchDistance(this.pointers[0],this.pointers[1]),o=je*(this.lastSeparation-a)*50/this.scene.height;this.lastSeparation=a,this.userAdjustOrbit(0,0,o)}this.panPerPixel>0&&this.movePan(i,n)},this.disableScroll=i=>{i.preventDefault()},this.touchModeRotate=(i,n)=>{const{touchAction:a}=this._options;if(!this.touchDecided&&a!=="none"){this.touchDecided=!0;const o=Math.abs(i),r=Math.abs(n);if(this.changeSource===$.USER_INTERACTION&&(a==="pan-y"&&r>o||a==="pan-x"&&o>r)){this.touchMode=null;return}else this.element.addEventListener("touchmove",this.disableScroll,{passive:!1})}this.handleSinglePointerMove(i,n)},this.onPointerDown=i=>{if(this.pointers.length>2)return;const{element:n}=this;this.pointers.length===0&&(n.addEventListener("pointermove",this.onPointerMove),n.addEventListener("pointerup",this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=i.clientX,this.startPointerPosition.clientY=i.clientY,this.startTime=performance.now());try{n.setPointerCapture(i.pointerId)}catch{}this.pointers.push({clientX:i.clientX,clientY:i.clientY,id:i.pointerId}),this.isUserPointing=!1,i.pointerType==="touch"?(this.changeSource=i.altKey?$.AUTOMATIC:$.USER_INTERACTION,this.onTouchChange(i)):(this.changeSource=$.USER_INTERACTION,this.onMouseDown(i))},this.onPointerMove=i=>{const n=this.pointers.find(c=>c.id===i.pointerId);if(n==null)return;const a=this.pointers.length,o=(i.clientX-n.clientX)/a,r=(i.clientY-n.clientY)/a;o===0&&r===0||(n.clientX=i.clientX,n.clientY=i.clientY,i.pointerType==="touch"?(this.changeSource=i.altKey?$.AUTOMATIC:$.USER_INTERACTION,this.touchMode!==null&&this.touchMode(o,r)):(this.changeSource=$.USER_INTERACTION,this.panPerPixel>0?this.movePan(o,r):this.handleSinglePointerMove(o,r)))},this.onPointerUp=i=>{const{element:n}=this,a=this.pointers.findIndex(o=>o.id===i.pointerId);a!==-1&&this.pointers.splice(a,1),this.panPerPixel>0&&!i.altKey&&this.resetRadius(),this.pointers.length===0?(n.removeEventListener("pointermove",this.onPointerMove),n.removeEventListener("pointerup",this.onPointerUp),n.removeEventListener("touchmove",this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(i)):this.touchMode!==null&&this.onTouchChange(i),this.scene.element[os].style.opacity=0,n.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end"})},this.onWheel=i=>{this.changeSource=$.USER_INTERACTION;const n=i.deltaY*(i.deltaMode==1?18:1)*je/30;this.userAdjustOrbit(0,0,n),i.preventDefault()},this.onKeyDown=i=>{const{changeSource:n}=this;this.changeSource=$.USER_INTERACTION,(i.shiftKey&&this.enablePan?this.panKeyCodeHandler(i):this.orbitZoomKeyCodeHandler(i))?i.preventDefault():this.changeSource=n},this._options=Object.assign({},Pa),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:t}=this;t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointercancel",this.onPointerUp),this._disableZoom||t.addEventListener("wheel",this.onWheel),t.addEventListener("keydown",this.onKeyDown),t.addEventListener("touchmove",()=>{},{passive:!1}),t.addEventListener("contextmenu",this.onContext),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:t}=this;t.removeEventListener("pointerdown",this.onPointerDown),t.removeEventListener("pointermove",this.onPointerMove),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp),t.removeEventListener("wheel",this.onWheel),t.removeEventListener("keydown",this.onKeyDown),t.removeEventListener("contextmenu",this.onContext),t.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(t){this._disableZoom!=t&&(this._disableZoom=t,t===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(t=new Qe){return t.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(t){Object.assign(this._options,t),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(t,e){this.camera.near=Math.max(t,e/1e3),this.camera.far=e,this.camera.updateProjectionMatrix()}updateAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}setOrbit(t=this.goalSpherical.theta,e=this.goalSpherical.phi,s=this.goalSpherical.radius){const{minimumAzimuthalAngle:i,maximumAzimuthalAngle:n,minimumPolarAngle:a,maximumPolarAngle:o,minimumRadius:r,maximumRadius:c}=this._options,{theta:d,phi:u,radius:m}=this.goalSpherical,h=K(t,i,n);!isFinite(i)&&!isFinite(n)&&(this.spherical.theta=this.wrapAngle(this.spherical.theta-h)+h);const b=K(e,a,o),v=K(s,r,c);return h===d&&b===u&&v===m?!1:(this.goalSpherical.theta=h,this.goalSpherical.phi=b,this.goalSpherical.radius=v,this.goalSpherical.makeSafe(),!0)}setRadius(t){this.goalSpherical.radius=t,this.setOrbit()}setFieldOfView(t){const{minimumFieldOfView:e,maximumFieldOfView:s}=this._options;t=K(t,e,s),this.goalLogFov=Math.log(t)}setDamperDecayTime(t){this.thetaDamper.setDecayTime(t),this.phiDamper.setDecayTime(t),this.radiusDamper.setDecayTime(t),this.fovDamper.setDecayTime(t)}adjustOrbit(t,e,s){const{theta:i,phi:n,radius:a}=this.goalSpherical,{minimumRadius:o,maximumRadius:r,minimumFieldOfView:c,maximumFieldOfView:d}=this._options,u=this.spherical.theta-i,m=Math.PI-.001,h=i-K(t,-m-u,m-u),b=n-e,v=s===0?0:((s>0?r:o)-a)/(Math.log(s>0?d:c)-this.goalLogFov),p=a+s*(isFinite(v)?v:(r-o)*2);if(this.setOrbit(h,b,p),s!==0){const E=this.goalLogFov+s;this.setFieldOfView(Math.exp(E))}}jumpToGoal(){this.update(0,ho)}update(t,e){if(this.isStationary())return;const{maximumPolarAngle:s,maximumRadius:i}=this._options,n=this.spherical.theta-this.goalSpherical.theta;Math.abs(n)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=Math.sign(n)*2*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,e,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,e,s),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,e,i),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,e,1),this.moveCamera()}updateTouchActionStyle(){const{style:t}=this.element;if(this._interactionEnabled){const{touchAction:e}=this._options;this._disableZoom&&e!=="none"?t.touchAction="manipulation":t.touchAction=e}else t.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}dispatchChange(){this.dispatchEvent({type:"change",source:this.changeSource})}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new to(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix()),this.dispatchChange()}userAdjustOrbit(t,e,s){this.adjustOrbit(t*this.orbitSensitivity*this.inputSensitivity,e*this.orbitSensitivity*this.inputSensitivity,s*this.inputSensitivity),this.dispatchChange()}wrapAngle(t){const e=(t+Math.PI)/(2*Math.PI);return(e-Math.floor(e))*2*Math.PI-Math.PI}pixelLengthToSphericalAngle(t){return 2*Math.PI*t/this.element.clientHeight}twoTouchDistance(t,e){const{clientX:s,clientY:i}=t,{clientX:n,clientY:a}=e,o=n-s,r=a-i;return Math.sqrt(o*o+r*r)}handleSinglePointerMove(t,e){const s=this.pixelLengthToSphericalAngle(t),i=this.pixelLengthToSphericalAngle(e);this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start"})),this.userAdjustOrbit(s,i,0)}initializePan(){const{theta:t,phi:e}=this.spherical,s=t-this.scene.yaw;this.panPerPixel=oc/this.scene.height,this.panProjection.set(-Math.cos(s),-Math.cos(e)*Math.sin(s),0,0,Math.sin(e),0,Math.sin(s),-Math.cos(e)*Math.cos(s),0)}movePan(t,e){const{scene:s}=this,i=Da.set(t,e,0).multiplyScalar(this.inputSensitivity),n=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;i.multiplyScalar(n);const a=s.getTarget();a.add(i.applyMatrix3(this.panProjection)),s.boundingSphere.clampPoint(a,a),s.setTarget(a.x,a.y,a.z),this.dispatchChange()}recenter(t){if(performance.now()>this.startTime+rc||Math.abs(t.clientX-this.startPointerPosition.clientX)>La||Math.abs(t.clientY-this.startPointerPosition.clientY)>La)return;const{scene:e}=this,s=e.positionAndNormalFromPoint(e.getNDC(t.clientX,t.clientY));if(s==null){const{cameraTarget:i}=e.element;e.element.cameraTarget="",e.element.cameraTarget=i,this.userAdjustOrbit(0,0,1)}else e.target.worldToLocal(s.position),e.setTarget(s.position.x,s.position.y,s.position.z)}resetRadius(){const{scene:t}=this,e=t.positionAndNormalFromPoint(lc.set(0,0));if(e==null)return;t.target.worldToLocal(e.position);const s=t.getTarget(),{theta:i,phi:n}=this.spherical,a=i-t.yaw,o=Da.set(Math.sin(n)*Math.sin(a),Math.cos(n),Math.sin(n)*Math.cos(a)),r=o.dot(e.position.sub(s));s.add(o.multiplyScalar(r)),t.setTarget(s.x,s.y,s.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-r)}onTouchChange(t){if(this.pointers.length===1)this.touchMode=this.touchModeRotate;else{if(this._disableZoom){this.touchMode=null,this.element.removeEventListener("touchmove",this.disableScroll);return}this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener("touchmove",this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&this.touchMode!=null&&(this.initializePan(),t.altKey||(this.scene.element[os].style.opacity=1))}}onMouseDown(t){this.panPerPixel=0,this.enablePan&&(t.button===2||t.ctrlKey||t.metaKey||t.shiftKey)&&(this.initializePan(),this.scene.element[os].style.opacity=1),this.element.style.cursor="grabbing"}orbitZoomKeyCodeHandler(t){let e=!0;switch(t.key){case"PageUp":this.userAdjustOrbit(0,0,je);break;case"PageDown":this.userAdjustOrbit(0,0,-1*je);break;case"ArrowUp":this.userAdjustOrbit(0,-He,0);break;case"ArrowDown":this.userAdjustOrbit(0,He,0);break;case"ArrowLeft":this.userAdjustOrbit(-He,0,0);break;case"ArrowRight":this.userAdjustOrbit(He,0,0);break;default:e=!1;break}return e}panKeyCodeHandler(t){this.initializePan();let e=!0;switch(t.key){case"ArrowUp":this.movePan(0,-1*Ge);break;case"ArrowDown":this.movePan(0,Ge);break;case"ArrowLeft":this.movePan(-1*Ge,0);break;case"ArrowRight":this.movePan(Ge,0);break;default:e=!1;break}return e}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=l=>l<.5?2*l*l:-1+(4-2*l)*l,hc=(l,t,e=zo)=>s=>l+(t-l)*e(s),uc=(l,t)=>{const e=i=>n=>i+=n,s=t.map(e(0));return i=>{i=K(i,0,1),i*=s[s.length-1];const n=s.findIndex(r=>r>=i),a=n<1?0:s[n-1],o=s[n];return l[n]((i-a)/(o-a))}},Wt=l=>{const t=[],e=[];let s=l.initialValue;for(let i=0;i<l.keyframes.length;++i){const n=l.keyframes[i],{value:a,frames:o}=n,r=n.ease||zo,c=hc(s,a,r);t.push(c),e.push(o),s=a}return uc(t,e)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O=globalThis&&globalThis.__decorate||function(l,t,e,s){var i=arguments.length,n=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,t,e,s);else for(var o=l.length-1;o>=0;o--)(a=l[o])&&(n=(i<3?a(n):i>3?a(t,e,n):a(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n};const dc=5e3,mc=Wt({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),pc=Wt({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),fc=30,gc=12,Uo="0deg 75deg 105%",bc="auto auto auto",vc="auto",yc=2.2,wc=["front","right","back","left"],Sc=["upper-","","lower-"],xc=3e3,Tc=". Use mouse, touch or arrow keys to move.",qe={AUTO:"auto",NONE:"none"},hi={BASIC:"basic",WIGGLE:"wiggle"},Mc={PAN_Y:"pan-y",PAN_X:"pan-x",NONE:"none"},Oa=()=>({basis:[ys(I(fc,"deg"))],keywords:{auto:[null]}}),Ec=()=>({basis:[ys(I(gc,"deg"))],keywords:{auto:[null]}}),Ho=(()=>{const l=Rt(Uo)[0].terms,t=Q(l[0]),e=Q(l[1]);return s=>{const i=s[g].idealCameraDistance();return{basis:[t,e,I(i,"m")],keywords:{auto:[null,null,I(105,"%")]}}}})(),Ac=l=>{const t=yc*l[g].boundingSphere.radius;return{basis:[I(-1/0,"rad"),I(Math.PI/8,"rad"),I(t,"m")],keywords:{auto:[null,null,null]}}},Rc=l=>{const t=Ho(l),s=new Io([],t).evaluate()[2];return{basis:[I(1/0,"rad"),I(Math.PI-Math.PI/8,"rad"),I(s,"m")],keywords:{auto:[null,null,null]}}},Cc=l=>{const t=l[g].boundingBox.getCenter(new D);return{basis:[I(t.x,"m"),I(t.y,"m"),I(t.z,"m")],keywords:{auto:[null,null,null]}}},jo=Math.PI/2,Lc=Math.PI/3,Dc=jo/2,Pc=2*Math.PI,M=Symbol("controls"),os=Symbol("panElement"),ui=Symbol("promptElement"),We=Symbol("promptAnimatedContainer"),di=Symbol("fingerAnimatedContainers"),Xe=Symbol("deferInteractionPrompt"),_a=Symbol("updateAria"),Ia=Symbol("updateCameraForRadius"),Ke=Symbol("onChange"),le=Symbol("onPointerChange"),wt=Symbol("waitingToPromptUser"),Ye=Symbol("userHasInteracted"),zt=Symbol("promptElementVisibleTime"),ce=Symbol("lastPromptOffset"),mi=Symbol("lastSpherical"),he=Symbol("jumpCamera"),pi=Symbol("initialized"),ue=Symbol("maintainThetaPhi"),Fa=Symbol("syncCameraOrbit"),$a=Symbol("syncFieldOfView"),ka=Symbol("syncCameraTarget"),Na=Symbol("syncMinCameraOrbit"),Va=Symbol("syncMaxCameraOrbit"),Ba=Symbol("syncMinFieldOfView"),za=Symbol("syncMaxFieldOfView"),Oc=l=>{var t,e,s,i,n,a,o,r,c,d,u,m,h,b,v;class p extends l{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=Uo,this.cameraTarget=bc,this.fieldOfView=vc,this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=xc,this.interactionPrompt=qe.AUTO,this.interactionPromptStyle=hi.WIGGLE,this.orbitSensitivity=1,this.touchAction=Mc.NONE,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=uo,this[t]=this.shadowRoot.querySelector(".interaction-prompt"),this[e]=this.shadowRoot.querySelector("#prompt"),this[s]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[i]=this.shadowRoot.querySelector(".pan-target"),this[n]=0,this[a]=1/0,this[o]=!1,this[r]=!1,this[c]=new cc(this[g].camera,this[Z],this[g]),this[d]=new Qe,this[u]=!1,this[m]=!1,this[h]=!1,this[b]=({source:f})=>{this[_a](),this[N](),f===$.USER_INTERACTION&&(this[Ye]=!0,this[Xe]()),this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:f}}))},this[v]=f=>{f.type==="pointer-change-start"?this[xe].classList.add("pointer-tumbling"):this[xe].classList.remove("pointer-tumbling")}}get inputSensitivity(){return this[M].inputSensitivity}set inputSensitivity(f){this[M].inputSensitivity=f}getCameraOrbit(){const{theta:f,phi:y,radius:x}=this[mi];return{theta:f,phi:y,radius:x,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return pt(this[A].isPresenting?this[A].arRenderer.target:this[g].getTarget())}getFieldOfView(){return this[M].getFieldOfView()}getMinimumFieldOfView(){return this[M].options.minimumFieldOfView}getMaximumFieldOfView(){return this[M].options.maximumFieldOfView}getIdealAspect(){return this[g].idealAspect}jumpCameraToGoal(){this[he]=!0,this.requestUpdate(he,!1)}resetInteractionPrompt(){this[ce]=0,this[zt]=1/0,this[Ye]=!1,this[wt]=this.interactionPrompt===qe.AUTO&&this.cameraControls}zoom(f){const y=new WheelEvent("wheel",{deltaY:-30*f});this[Z].dispatchEvent(y)}connectedCallback(){super.connectedCallback(),this[M].addEventListener("change",this[Ke]),this[M].addEventListener("pointer-change-start",this[le]),this[M].addEventListener("pointer-change-end",this[le])}disconnectedCallback(){super.disconnectedCallback(),this[M].removeEventListener("change",this[Ke]),this[M].removeEventListener("pointer-change-start",this[le]),this[M].removeEventListener("pointer-change-end",this[le])}updated(f){super.updated(f);const y=this[M],x=this[g];if(f.has("cameraControls")&&(this.cameraControls?(y.enableInteraction(),this.interactionPrompt===qe.AUTO&&(this[wt]=!0)):(y.disableInteraction(),this[Xe]()),this[Z].setAttribute("aria-label",this[Se])),f.has("disableZoom")&&(y.disableZoom=this.disableZoom),f.has("disablePan")&&(y.enablePan=!this.disablePan),f.has("disableTap")&&(y.enableTap=!this.disableTap),(f.has("interactionPrompt")||f.has("cameraControls")||f.has("src"))&&(this.interactionPrompt===qe.AUTO&&this.cameraControls&&!this[Ye]?this[wt]=!0:this[Xe]()),f.has("interactionPromptStyle")&&(this[We].style.opacity=this.interactionPromptStyle==hi.BASIC?"1":"0"),f.has("touchAction")){const C=this.touchAction;y.applyOptions({touchAction:C}),y.updateTouchActionStyle()}f.has("orbitSensitivity")&&(y.orbitSensitivity=this.orbitSensitivity),f.has("interpolationDecay")&&(y.setDamperDecayTime(this.interpolationDecay),x.setTargetDamperDecayTime(this.interpolationDecay)),this[he]===!0&&Promise.resolve().then(()=>{y.jumpToGoal(),x.jumpToGoal(),this[he]=!1})}async updateFraming(){const f=this[g],y=f.adjustedFoV(f.framedFoVDeg);await f.updateFraming();const x=f.adjustedFoV(f.framedFoVDeg),C=this[M].getFieldOfView()/y;this[M].setFieldOfView(x*C),this[ue]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(f,y,x){const C=this[Z],j=this[di];if(j[0].style.opacity==="1"){console.warn("interact() failed because an existing interaction is running.");return}const F=new Array;F.push({x:Wt(y.x),y:Wt(y.y)});const ct=[{x:F[0].x(0),y:F[0].y(0)}];x!=null&&(F.push({x:Wt(x.x),y:Wt(x.y)}),ct.push({x:F[1].x(0),y:F[1].y(0)}));let Jt=performance.now();const{width:Ce,height:Le}=this[g],De=q=>{for(const[Dt,tt]of ct.entries()){const{style:Pt}=j[Dt];Pt.transform=`translateX(${Ce*tt.x}px) translateY(${Le*tt.y}px)`,q==="pointerdown"?Pt.opacity="1":q==="pointerup"&&(Pt.opacity="0");const Go={pointerId:Dt-5678,pointerType:"touch",target:C,clientX:Ce*tt.x,clientY:Le*tt.y,altKey:!0};C.dispatchEvent(new PointerEvent(q,Go))}},Ni=()=>{const{changeSource:q}=this[M];if(q!==$.AUTOMATIC||!C.isConnected){for(const tt of this[di])tt.style.opacity="0";De("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:q}})),document.removeEventListener("visibilitychange",Ss);return}const Dt=Math.min(1,(performance.now()-Jt)/f);for(const[tt,Pt]of ct.entries())Pt.x=F[tt].x(Dt),Pt.y=F[tt].y(Dt);De("pointermove"),Dt<1?requestAnimationFrame(Ni):(De("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:q}})),document.removeEventListener("visibilitychange",Ss))},Ss=()=>{let q=0;document.visibilityState==="hidden"?q=performance.now()-Jt:Jt=performance.now()-q};document.addEventListener("visibilitychange",Ss),De("pointerdown"),requestAnimationFrame(Ni)}[(t=ui,e=We,s=di,i=os,n=ce,a=zt,o=Ye,r=wt,c=M,d=mi,u=he,m=pi,h=ue,$a)](f){const y=this[g];y.framedFoVDeg=f[0]*180/Math.PI,this[M].setFieldOfView(y.adjustedFoV(y.framedFoVDeg))}[Fa](f){const y=this[M];if(this[ue]){const{theta:x,phi:C}=this.getCameraOrbit();f[0]=x,f[1]=C,this[ue]=!1}y.changeSource=$.NONE,y.setOrbit(f[0],f[1],f[2])}[Na](f){this[M].applyOptions({minimumAzimuthalAngle:f[0],minimumPolarAngle:f[1],minimumRadius:f[2]}),this.jumpCameraToGoal()}[Va](f){this[M].applyOptions({maximumAzimuthalAngle:f[0],maximumPolarAngle:f[1],maximumRadius:f[2]}),this[Ia](f[2]),this.jumpCameraToGoal()}[Ba](f){this[M].applyOptions({minimumFieldOfView:f[0]*180/Math.PI}),this.jumpCameraToGoal()}[za](f){const y=this[g].adjustedFoV(f[0]*180/Math.PI);this[M].applyOptions({maximumFieldOfView:y}),this.jumpCameraToGoal()}[ka](f){const[y,x,C]=f;this[A].arRenderer.isPresenting||this[g].setTarget(y,x,C),this[M].changeSource=$.NONE,this[A].arRenderer.updateTarget()}[J](f,y){if(super[J](f,y),this[A].isPresenting||!this[Lt]())return;const x=this[M],C=this[g],j=performance.now();if(this[wt]&&this.loaded&&j>this[be]+this.interactionPromptThreshold&&(this[wt]=!1,this[zt]=j,this[ui].classList.add("visible")),isFinite(this[zt])&&this.interactionPromptStyle===hi.WIGGLE){const F=(j-this[zt])/dc%1,ct=mc(F),Jt=pc(F);if(this[We].style.opacity=`${Jt}`,ct!==this[ce]){const Ce=ct*C.width*.05,Le=(ct-this[ce])*Math.PI/16;this[We].style.transform=`translateX(${Ce}px)`,x.changeSource=$.AUTOMATIC,x.adjustOrbit(Le,0,0),this[ce]=ct}}x.update(f,y),C.updateTarget(y)&&this[Ke]({type:"change",source:x.changeSource})}[Xe](){this[wt]=!1,this[ui].classList.remove("visible"),this[zt]=1/0}[Ia](f){const y=Math.max(this[g].boundingSphere.radius,f),x=0,C=2*y;this[M].updateNearFar(x,C)}[_a](){const{theta:f,phi:y}=this[M].getCameraSpherical(this[mi]),x=(4+Math.floor((f%Pc+Dc)/jo))%4,C=Math.floor(y/Lc),j=wc[x],F=Sc[C];this[_i](`View from stage ${F}${j}`)}get[Se](){return super[Se]+(this.cameraControls?Tc:"")}async[Me](f){const y=this[M],x=this[g],C=x.adjustedFoV(x.framedFoVDeg);super[Me](f);const j=x.adjustedFoV(x.framedFoVDeg)/C,F=y.getFieldOfView()*(isFinite(j)?j:1);y.updateAspect(this[g].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[M].setFieldOfView(F),this.jumpCameraToGoal()}[gt](){super[gt](),this[pi]?this[ue]=!0:this[pi]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}}return b=Ke,v=le,O([w({type:Boolean,attribute:"camera-controls"})],p.prototype,"cameraControls",void 0),O([ut({intrinsics:Ho,observeEffects:!0,updateHandler:Fa}),w({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],p.prototype,"cameraOrbit",void 0),O([ut({intrinsics:Cc,observeEffects:!0,updateHandler:ka}),w({type:String,attribute:"camera-target",hasChanged:()=>!0})],p.prototype,"cameraTarget",void 0),O([ut({intrinsics:Oa,observeEffects:!0,updateHandler:$a}),w({type:String,attribute:"field-of-view",hasChanged:()=>!0})],p.prototype,"fieldOfView",void 0),O([ut({intrinsics:Ac,updateHandler:Na}),w({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],p.prototype,"minCameraOrbit",void 0),O([ut({intrinsics:Rc,updateHandler:Va}),w({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],p.prototype,"maxCameraOrbit",void 0),O([ut({intrinsics:Ec,updateHandler:Ba}),w({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],p.prototype,"minFieldOfView",void 0),O([ut({intrinsics:Oa,updateHandler:za}),w({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],p.prototype,"maxFieldOfView",void 0),O([w({type:Number,attribute:"interaction-prompt-threshold"})],p.prototype,"interactionPromptThreshold",void 0),O([w({type:String,attribute:"interaction-prompt"})],p.prototype,"interactionPrompt",void 0),O([w({type:String,attribute:"interaction-prompt-style"})],p.prototype,"interactionPromptStyle",void 0),O([w({type:Number,attribute:"orbit-sensitivity"})],p.prototype,"orbitSensitivity",void 0),O([w({type:String,attribute:"touch-action"})],p.prototype,"touchAction",void 0),O([w({type:Boolean,attribute:"disable-zoom"})],p.prototype,"disableZoom",void 0),O([w({type:Boolean,attribute:"disable-pan"})],p.prototype,"disablePan",void 0),O([w({type:Boolean,attribute:"disable-tap"})],p.prototype,"disableTap",void 0),O([w({type:Number,attribute:"interpolation-decay"})],p.prototype,"interpolationDecay",void 0),p};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fi=globalThis&&globalThis.__decorate||function(l,t,e,s){var i=arguments.length,n=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,t,e,s);else for(var o=l.length-1;o>=0;o--)(a=l[o])&&(n=(i<3?a(n):i>3?a(t,e,n):a(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n};const _c=100,Ic="https://www.gstatic.com/draco/versioned/decoders/1.4.1/",Fc="https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/",gi={AUTO:"auto",MANUAL:"manual"},Ua={AUTO:"auto",LAZY:"lazy",EAGER:"eager"},St=Symbol("defaultProgressBarElement"),bi=Symbol("posterContainerElement"),Ut=Symbol("defaultPosterElement"),de=Symbol("shouldDismissPoster"),vi=Symbol("hidePoster"),Ze=Symbol("modelIsRevealed"),yi=Symbol("updateProgressBar"),$c=Symbol("ariaLabelCallToAction"),wi=Symbol("onProgress"),kc=l=>{var t,e,s,i,n,a,o,r;class c extends l{constructor(...u){super(...u),this.poster=null,this.reveal=gi.AUTO,this.loading=Ua.AUTO,this[t]=!1,this[e]=!1,this[s]=this.shadowRoot.querySelector(".slot.poster"),this[i]=this.shadowRoot.querySelector("#default-poster"),this[n]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[a]=this[Ut].getAttribute("aria-label"),this[o]=Er(v=>{const p=this[St].parentNode;requestAnimationFrame(()=>{this[St].style.transform=`scaleX(${v})`,v===0&&(p.removeChild(this[St]),p.appendChild(this[St])),v===1?this[St].classList.add("hide"):this[St].classList.remove("hide")})},_c),this[r]=v=>{const p=v.detail.totalProgress;p===1&&(this[yi].flush(),this.loaded&&(this[de]||this.reveal===gi.AUTO)&&this[vi]()),this[yi](p),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:p}}))};const m=self.ModelViewerElement||{},h=m.dracoDecoderLocation||Ic;P.setDRACODecoderLocation(h);const b=m.ktx2TranscoderLocation||Fc;P.setKTX2TranscoderLocation(b),m.meshoptDecoderLocation&&P.setMeshoptDecoderLocation(m.meshoptDecoderLocation)}static set dracoDecoderLocation(u){P.setDRACODecoderLocation(u)}static get dracoDecoderLocation(){return P.getDRACODecoderLocation()}static set ktx2TranscoderLocation(u){P.setKTX2TranscoderLocation(u)}static get ktx2TranscoderLocation(){return P.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(u){P.setMeshoptDecoderLocation(u)}static get meshoptDecoderLocation(){return P.getMeshoptDecoderLocation()}static mapURLs(u){lt.singleton.loader[xt].manager.setURLModifier(u)}dismissPoster(){this.loaded?this[vi]():(this[de]=!0,this[Xt]())}showPoster(){const u=this[bi];if(u.classList.contains("show"))return;u.classList.add("show"),this[Z].classList.remove("show");const m=this[Ut];m.removeAttribute("tabindex"),m.removeAttribute("aria-hidden");const h=this.modelIsVisible;this[Ze]=!1,this[ms](h)}getDimensions(){return pt(this[g].size)}getBoundingBoxCenter(){return pt(this[g].boundingBox.getCenter(new D))}connectedCallback(){super.connectedCallback(),this.showPoster(),this[Ct].addEventListener("progress",this[wi])}disconnectedCallback(){super.disconnectedCallback(),this[Ct].removeEventListener("progress",this[wi])}async updated(u){super.updated(u),u.has("poster")&&this.poster!=null&&(this[Ut].style.backgroundImage=`url(${this.poster})`),u.has("alt")&&this[Ut].setAttribute("aria-label",this[Oi]),(u.has("reveal")||u.has("loading"))&&this[Xt]()}[(t=Ze,e=de,s=bi,i=Ut,n=St,a=$c,o=yi,r=wi,Yt)](){return!!this.src&&(this[de]||this.loading===Ua.EAGER||this.reveal===gi.AUTO&&this[Et])}[vi](){this[de]=!1;const u=this[bi];if(!u.classList.contains("show"))return;u.classList.remove("show"),this[Z].classList.add("show");const m=this.modelIsVisible;this[Ze]=!0,this[ms](m);const h=this.getRootNode();h&&h.activeElement===this&&this[Z].focus();const b=this[Ut];b.setAttribute("aria-hidden","true"),b.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[Lt](){return super[Lt]()&&this[Ze]}}return fi([w({type:String})],c.prototype,"poster",void 0),fi([w({type:String})],c.prototype,"reveal",void 0),fi([w({type:String})],c.prototype,"loading",void 0),c};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si=globalThis&&globalThis.__decorate||function(l,t,e,s){var i=arguments.length,n=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,t,e,s);else for(var o=l.length-1;o>=0;o--)(a=l[o])&&(n=(i<3?a(n):i>3?a(t,e,n):a(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n};const Nc=Math.PI/32,Vc=3e3,Bc={basis:[ys(I(Nc,"rad"))],keywords:{auto:[null]}},Ht=Symbol("autoRotateStartTime"),xi=Symbol("radiansPerSecond"),Ha=Symbol("syncRotationRate"),Ti=Symbol("onCameraChange"),zc=l=>{var t,e,s;class i extends l{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=Vc,this.rotationPerSecond="auto",this[t]=performance.now(),this[e]=0,this[s]=a=>{!this.autoRotate||a.detail.source==="user-interaction"&&(this[Ht]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[Ti]),this[Ht]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[Ti]),this[Ht]=performance.now()}updated(a){super.updated(a),a.has("autoRotate")&&(this[Ht]=performance.now())}[(t=Ht,e=xi,Ha)](a){this[xi]=a[0]}[J](a,o){if(super[J](a,o),!this.autoRotate||!this[Lt]()||this[A].isPresenting)return;const r=Math.min(o,a-this[Ht]-this.autoRotateDelay);r>0&&(this[g].yaw=this.turntableRotation+this[xi]*r*.001)}get turntableRotation(){return this[g].yaw}resetTurntableRotation(a=0){this[g].yaw=a}}return s=Ti,Si([w({type:Boolean,attribute:"auto-rotate"})],i.prototype,"autoRotate",void 0),Si([w({type:Number,attribute:"auto-rotate-delay"})],i.prototype,"autoRotateDelay",void 0),Si([ut({intrinsics:Bc,updateHandler:Ha}),w({type:String,attribute:"rotation-per-second"})],i.prototype,"rotationPerSecond",void 0),i},Uc=l=>{var t;const e=n=>{if(n.shadowRoot==null||n.hasAttribute("data-js-focus-visible"))return()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(n.shadowRoot);else{const a=()=>{self.applyFocusVisiblePolyfill(n.shadowRoot)};return self.addEventListener("focus-visible-polyfill-ready",a,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",a)}}return()=>{}},s=Symbol("endPolyfillCoordination");class i extends l{constructor(){super(...arguments),this[t]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[s]==null&&(this[s]=e(this))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this[s]!=null&&(this[s](),this[s]=null)}}return t=s,i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=Kl(Cl(zc(_r(Oc(tc(kc(Xl(Uc(Re)))))))));customElements.define("model-viewer",Hc);
