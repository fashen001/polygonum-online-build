(window.webpackJsonp=window.webpackJsonp||[]).push([[9,19],{383:function(e,t,r){var content=r(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("7132a15d",content,!0,{sourceMap:!1})},384:function(e,t,r){var n=r(15)(!1);n.push([e.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),e.exports=n},419:function(e,t,r){"use strict";r(10),r(6),r(9),r(12),r(7),r(13);var n=r(2),o=(r(383),r(29));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},425:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{el:2,items:["Token sale","Steam early access","ICO 0.3$+","Listing on exchange","Release Steam & Google Play"]}}},o=r(28),l=r(38),c=r.n(l),d=r(379),v=r(419),h=r(400),f=r(375),m=r(401),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("v-stepper",{staticClass:"elevation-0 transparent "},[r("v-stepper-header",[e._l(e.items,(function(i,t){return[r("v-stepper-step",{key:i,attrs:{complete:2>i,step:t+1}},[e._v(" "+e._s(i)+" ")]),e._v(" "),i!==e.items?r("v-divider",{key:i}):e._e()]}))],2)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VContainer:d.a,VDivider:v.a,VStepper:h.a,VStepperHeader:f.a,VStepperStep:m.a})}}]);