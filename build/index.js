(()=>{"use strict";const e=window.React,t=window.wp.blocks,r=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.components,l=JSON.parse('{"UU":"create-block/copyright-date-block"}'),o=(0,e.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"}));(0,t.registerBlockType)(l.UU,{edit:function({attributes:t,setAttributes:l}){const{fallbackCurrYear:o,showStartingYear:c,startingYear:s}=t,i=(new Date).getFullYear().toString();let w=i;return c&&s&&(w=s+" - "+i),(0,e.useEffect)((()=>{i!=o&&l({fallbackCurrYear:i})}),[i,o,l]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(n.PanelBody,{title:(0,r.__)("Settings")},(0,e.createElement)(n.ToggleControl,{label:(0,r.__)("Show Starting Year"),checked:!!c,onChange:e=>{l({showStartingYear:e})}}),c&&(0,e.createElement)(n.TextControl,{label:(0,r.__)("Starting Year"),value:s||"",onChange:e=>{l({startingYear:e})}}))),(0,e.createElement)("p",{...(0,a.useBlockProps)()},"© ",w))},icon:o,save:function({attributes:t}){const{fallbackCurrYear:r,showStartingYear:n,startingYear:l}=t;if(!r)return null;let o=r;return n&&l&&(o=l+" - "+r),(0,e.createElement)("p",{...a.useBlockProps.save()},"©  ",o)}})})();