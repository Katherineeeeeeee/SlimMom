"use strict";(self.webpackChunkslim_mom=self.webpackChunkslim_mom||[]).push([[252],{5399:function(e,t,n){n.d(t,{Z:function(){return d}});var a="ErrorMessage_errorMessageBlock__6NGFY",r="ErrorMessage_errorMessageTitle__gIqHi",o="ErrorMessage_errorMessageText__TKpdd",l=n(4668),s=n(184),i=function(e){var t=e.status;return(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)("div",{className:l.Z.boo,children:(0,s.jsx)("div",{className:l.Z.face,id:"face"})}),(0,s.jsx)("p",{className:r,children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),(0,s.jsx)("p",{className:o,children:t})]})},d=i;i.defaultProps={status:{}}},3713:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(2791),r={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"},o=n(184),l=function(e){var t=e.setModalOpen,n=e.overlayClass,l=void 0===n?"overlay":n,s=e.modalClass,i=void 0===s?"modal":s,d=e.children;function c(){document.querySelector("body").classList.remove("no-scroll")}(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&(c(),t(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);var u=function(){c(),t(!1)};return(0,o.jsx)("div",{className:r[l],onClick:function(e){e.target===e.currentTarget&&(c(),t(!1))},children:(0,o.jsxs)("div",{className:r[i],children:[(0,o.jsx)("div",{className:r.mobileClose,children:(0,o.jsx)("span",{onClick:u,className:r.closeM})}),(0,o.jsx)("span",{onClick:u,className:r.closeOther}),d]})})}},9833:function(e,t,n){n.d(t,{Z:function(){return o}});var a={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb Button_btn__cIIwi",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},r=n(184),o=function(e){var t=e.text,n=void 0===t?"+":t,o=e.type,l=void 0===o?"submit":o,s=e.btnClass,i=void 0===s?"btnPlus":s,d=e.handleClick;return(0,r.jsx)("button",{className:a[i],onClick:d,type:l,children:n})}},4834:function(e,t,n){n.d(t,{Z:function(){return a.Z}});var a=n(9833)},5406:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(184),r=function(e){var t=e.children;return(0,a.jsx)("div",{className:"container",children:t})}},6146:function(e,t,n){n.d(t,{Z:function(){return i}});var a="TextField_label__kp4Pv",r="TextField_input__JDykO",o="TextField_span__qcPmc",l=n(184),s=function(e){var t=e.type,n=e.name,s=e.value,i=e.handleChange,d=e.placeholder,c=e.required,u=e.pattern,_=e.title;return(0,l.jsxs)("label",{className:a,children:[(0,l.jsx)("input",{className:r,type:t,name:n,value:s,onChange:i,required:c,pattern:u,title:_}),(0,l.jsx)("span",{className:o,children:d})]})},i=s;s.defaultProps={type:"text",required:!1}},8704:function(e,t,n){n.d(t,{E:function(){return a}});var a={name:{name:"name",type:"text",placeholder:"\u0406\u043c\u02bc\u044f*",title:"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0454 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044f \u043d\u0435 \u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432",required:!0},email:{name:"email",type:"text",placeholder:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430*",required:!0},password:{name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c (\u0432\u0456\u0434 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432)*",required:!0,title:"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"},height:{name:"height",type:"text",placeholder:"\u0417\u0440\u0456\u0441\u0442 (100-250)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 100 \u0434\u043e 250."},age:{name:"age",type:"text",placeholder:"\u0412\u0456\u043a (18-100)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 18 \u0434\u043e 100."},weight:{name:"weight",type:"text",placeholder:"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0430\u0433\u0430 (20-250)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 250."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"\u0411\u0430\u0436\u0430\u043d\u0430 \u0432\u0430\u0433\u0430 (20-500)*",required:!0,title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0446\u0456\u043b\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 500."},bloodType:{name:"blodtype",type:"text",placeholder:"\u0413\u0440\u0443\u043f\u0430 \u043a\u0440\u043e\u0432\u0456*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"\u0424\u0456\u043b\u044c\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e"}}},1307:function(e,t,n){n.d(t,{Z:function(){return a.Z}});var a=n(6146)},5252:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(1413),r=n(885),o=n(2791),l=n(7689),s=n(5290),i=n(5294),d=n(9434),c=n(4805),u="Register_register__vVHbT",_="Register_title__flBV1",m="Register_form__aX9qD",h="Register_wrap__rHFtG",p="Register_imgDesktop__elIqv",f=n(8704),g=n(1307),v=n(4834),x=n(5406),b=n(5399),j=n(3713),y=n(9146),N=n(8010),w=n(9869),Z=n(184),C=function(){var e=(0,c.useMediaQuery)({query:"(min-resolution: 2dppx)"}),t=(0,d.I0)(),n=(0,o.useState)(!1),C=(0,r.Z)(n,2),M=C[0],q=C[1],k=(0,d.v9)(w.NH),F=(0,d.v9)(w.K4),P=(0,s.cI)({defaultValues:{username:"",email:"",password:""}}),D=P.control,E=P.handleSubmit,L=P.reset;return!k&&F?(0,Z.jsx)(l.Fg,{to:"/login"}):(0,Z.jsx)("section",{className:u,children:(0,Z.jsxs)(x.Z,{children:[(0,Z.jsx)("h2",{className:_,children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"}),(0,Z.jsxs)("form",{className:m,onSubmit:E((function(e,n){n.preventDefault(),t((0,i.z2)(e)),q(!0),L()})),children:[(0,Z.jsx)(s.Qr,{control:D,name:"username",rules:{required:!0,maxLength:16},render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,Z.jsx)(g.Z,(0,a.Z)({value:r,control:D,handleChange:n},f.E.name))}}),(0,Z.jsx)(s.Qr,{control:D,name:"email",rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,Z.jsx)(g.Z,(0,a.Z)({value:r,control:D,handleChange:n},f.E.email))}}),(0,Z.jsx)(s.Qr,{control:D,name:"password",rules:{required:!0,minLength:8,maxLength:30},render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,Z.jsx)(g.Z,(0,a.Z)({value:r,control:D,handleChange:n},f.E.password))}}),(0,Z.jsx)("div",{className:h,children:(0,Z.jsx)(v.Z,{text:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",btnClass:"btnLight"})})]}),!e&&(0,Z.jsx)("img",{className:p,src:y,alt:"background"}),e&&(0,Z.jsx)("img",{className:p,src:N,alt:"background"}),M&&k&&(0,Z.jsx)(j.Z,{setModalOpen:q,children:(0,Z.jsx)(b.Z,{status:k})})]})})},M=function(){return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(C,{})})}},4668:function(e,t){t.Z={container:"NotFound_container__KNX4B",title:"NotFound_title__f917b",txt:"NotFound_txt__VshUQ",booWrapper:"NotFound_booWrapper__2b5FM",boo:"NotFound_boo__bQlpM",floating:"NotFound_floating__P8jYD",face:"NotFound_face__jV+a5",shadow:"NotFound_shadow__wSXLX",floatingShadow:"NotFound_floatingShadow__fkJav"}},9146:function(e,t,n){e.exports=n.p+"static/media/bcgD.06d7e880436282e9dadf.png"},8010:function(e,t,n){e.exports=n.p+"static/media/bcgD@2x.7d5af67d05df6e0bba78.png"}}]);
//# sourceMappingURL=252.525dc178.chunk.js.map