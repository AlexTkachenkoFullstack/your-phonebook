"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[970],{9949:function(n,e,t){t.r(e),t.d(e,{default:function(){return Un}});var i,a,o,r,d,s,c,p,l,x,m,f,u,h,g,b,v=t(2791),Z=t(168),j=t(3081),y=t(5705),w=t(3524),z=(0,j.Z)(y.l0)(i||(i=(0,Z.Z)(["\n  display: flex;\n  background-color: #d5f7d7;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.1);\n  border: none;\n  border-radius: 20px;\n  height: auto;\n  padding: 20px;\n  opacity: 0.9;\n  margin-left: auto;\n  margin-right: auto;\n  @media screen and "," {\n    width: 400px;\n  }\n  @media screen and "," {\n    width: 500px;\n  }\n  @media screen and "," {\n    width: 800px;\n  }\n"])),w.H.xs,w.H.md,w.H.lg),H=j.Z.label(a||(a=(0,Z.Z)(["\n  font-size: 30px;\n  font-weight: 400;\n  margin-bottom: 15px;\n  position: relative;\n  font-family: 'Bagel Fat One', cursive;\n"]))),k=(0,j.Z)(y.gN)(o||(o=(0,Z.Z)(["\n  border: 1px solid #b3b90d;\n  padding: 5px;\n  margin-bottom: 30px;\n  width: 100%;\n  height: 40px;\n  font-size: 28px;\n  border-radius: 10px;\n  font-family: 'Caveat', cursive;\n  outline: none;\n  @media screen and "," {\n    width: 360px;\n  }\n  @media screen and "," {\n    width: 458px;\n  }\n  @media screen and "," {\n    width: 760px;\n  }\n\n  &:hover,\n  &:focus {\n    border-color: #00b1ff;\n    background-color: #9efeff;\n  }\n"])),w.H.xs,w.H.md,w.H.lg),C=(0,j.Z)(y.gN)(r||(r=(0,Z.Z)(["\n  border: 1px solid #b3b90d;\n  padding: 5px;\n  margin-bottom: 30px;\n  width: 100%;\n  height: 40px;\n  font-size: 28px;\n  border-radius: 10px;\n  font-family: 'Caveat', cursive;\n  @media screen and "," {\n    width: 360px;\n  }\n  @media screen and "," {\n    width: 458px;\n  }\n  @media screen and "," {\n    width: 760px;\n  }\n\n  &:hover,\n  &:focus {\n    border-color: #00b1ff;\n    background-color: #9efeff;\n    outline: none;\n  }\n"])),w.H.xs,w.H.md,w.H.lg),F=j.Z.button(d||(d=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 400;\n  width: 130px;\n  height: 50px;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-radius: 8px;\n  cursor: pointer;\n  @media screen and "," {\n    font-size: 16px;\n  }\n  @media screen and "," {\n    width: 150px;\n    height: 50px;\n    font-size: 20px;\n  }\n  @media screen and "," {\n    font-size: 20px;\n  }\n\n  color: #111;\n  outline: none;\n  font-family: 'Bagel Fat One', cursive;\n  &:hover,\n  &:focus {\n    background-color: #76a4ff;\n    scale: 1.05;\n    box-shadow: 0px 0px 14px 3px #32edd7;\n  }\n"])),w.H.xs,w.H.md,w.H.lg),B=j.Z.div(s||(s=(0,Z.Z)(["\n  font-size: 24px;\n  color: red;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n"]))),I=t(6727),S=t(9434),_=t(3634),N=function(n){return n.contacts.items},O=function(n){return n.contacts.isLoading},E=t(184),P=I.Ry({name:I.Z_("It should be string").required("It shouldn't be empty").max(16).trim().matches(),phone:I.Z_().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid").required("It shouldn't be empty")}),D={name:"",phone:""},L=function(n){var e=n.name;return(0,E.jsx)(y.Bc,{name:e,render:function(n){return(0,E.jsxs)(B,{children:[" ",n]})}})},V=function(){var n=(0,S.v9)(N),e=(0,S.I0)();return(0,E.jsx)(y.J9,{initialValues:D,onSubmit:function(t,i){var a=t.name,o=t.phone;n.some((function(n){var e=n.name;return a===e}))?alert("".concat(a," is already in contacts")):(e((0,_.je)({name:a,number:o.toString()})),i.resetForm())},validationSchema:P,children:(0,E.jsxs)(z,{autoComplete:"off",children:[(0,E.jsxs)(H,{children:["Name",(0,E.jsx)(k,{type:"text",name:"name"}),(0,E.jsx)(L,{name:"name"})]}),(0,E.jsxs)(H,{children:["Number",(0,E.jsx)(C,{type:"tel",name:"phone"}),(0,E.jsx)(L,{name:"phone"})]}),(0,E.jsx)(F,{type:"submit",children:"Add contact"})]})})},q=function(n){return 0===n.length?0:n.length},R=j.Z.div(c||(c=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n"]))),X=j.Z.p(p||(p=(0,Z.Z)(["\n  margin: 0;\n  font-size: 28px;\n  padding-left: 0px;\n  font-family: 'Caveat', cursive;\n  @media screen and "," {\n    padding-left: 90px;\n    font-size: 36px;\n  }\n  @media screen and "," {\n    font-size: 40px;\n    padding-left: 150px;\n  }\n"])),w.H.md,w.H.lg),A=j.Z.p(l||(l=(0,Z.Z)(["\n  margin: 0;\n  font-weight: 700;\n  font-size: 28px;\n  font-family: 'Caveat', cursive;\n  text-indent: 5px;\n  @media screen and "," {\n    font-size: 36px;\n  }\n  @media screen and "," {\n    font-size: 40px;\n  }\n"])),w.H.md,w.H.lg),M=function(){var n=(0,S.v9)(N);return(0,E.jsxs)(R,{children:[(0,E.jsx)(X,{children:"Total contacts:"}),(0,E.jsx)(A,{children:q(n)})]})},T=t.p+"static/media/5143237.8ec9ed15a4b7d79dfc34.jpg",U=j.Z.h1(x||(x=(0,Z.Z)(["\n  margin: 0;\n  padding-bottom: 10px;\n  text-align: center;\n  font-family: 'Bagel Fat One', cursive;\n"]))),$=j.Z.h2(m||(m=(0,Z.Z)(["\n  margin: 0;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  font-family: 'Bagel Fat One', cursive;\n"]))),J=j.Z.div(f||(f=(0,Z.Z)(["\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 100vh;\n  height: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-size: 100% auto;\n  background-repeat: repeat;\n  background-attachment: fixed;\n  padding: 24px;\n  padding-top: 70px;\n  box-shadow: 0px 0px 100px 50px #000;\n\n  @media screen and "," {\n    width: 480px;\n    background-size: auto 480px;\n  }\n  @media screen and "," {\n    width: 768px;\n    background-size: 768px;\n  }\n  @media screen and "," {\n    width: 1200px;\n    background-size: 1200px;\n  }\n"])),T,w.H.xs,w.H.md,w.H.lg),Y=j.Z.div(u||(u=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),G=(j.Z.p(h||(h=(0,Z.Z)(["\n  font-size: 20px;\n  margin-bottom: 10px;\n  padding-top: 0;\n  padding-left: 25px;\n  text-indent: 0;\n  margin-top: 0;\n  font-family: 'Bagel Fat One', cursive;\n\n  @media screen and "," {\n    font-size: 32px;\n    padding-left: 112px;\n  }\n  @media screen and "," {\n    font-size: 40px;\n    padding-left: 175px;\n  }\n"])),w.H.md,w.H.lg),j.Z.label(g||(g=(0,Z.Z)(["\n  font-size: 20px;\n  margin-bottom: 10px;\n  padding-left: 25px;\n  font-family: 'Bagel Fat One', cursive;\n  @media screen and "," {\n    font-size: 32px;\n    padding-left: 112px;\n  }\n  @media screen and "," {\n    font-size: 40px;\n    padding-left: 175px;\n  }\n"])),w.H.md,w.H.lg)),K=j.Z.input(b||(b=(0,Z.Z)(["\n  width: auto;\n  height: 40px;\n  border-color: #b3b90d;\n  font-size: 32px;\n  border-radius: 8px;\n  padding-left: 15px;\n  margin-left: 20px;\n  cursor: pointer;\n  outline: none;\n  opacity: 0.8;\n  font-size: 16px;\n  font-family: 'Caveat', cursive;\n  @media screen and "," {\n    font-size: 16px;\n    width: 395px;\n  }\n\n  @media screen and "," {\n    width: 500px;\n    margin-left: 112px;\n    font-size: 18px;\n  }\n  @media screen and "," {\n    width: 575px;\n    margin-left: 170px;\n    font-size: 20px;\n  }\n\n  &:hover,\n  &:hover {\n    animation: pulsare 2s ease-in-out;\n    border-color: #9bf7fa;\n    opacity: 1;\n  }\n\n  @keyframes pulsare {\n    0% {\n      box-shadow: 0 0 10px #5ddcff, 0 0 20px #4e00c2;\n      background-color: #9bf7fa;\n    }\n  }\n"])),w.H.xs,w.H.md,w.H.lg),Q=t(1634),W=t(5095),nn=t.n(W);var en,tn,an,on,rn,dn,sn,cn,pn,ln,xn,mn,fn,un,hn,gn=function(){var n=(0,S.I0)();return(0,E.jsxs)(Y,{children:[(0,E.jsx)(G,{htmlFor:"findContacts",children:"Find contacts by name"}),(0,E.jsx)(K,{type:"text",id:"findContacts",onChange:nn()((function(e){n((0,Q.bI)(e.target.value))}),1e3)})]})},bn=j.Z.ul(en||(en=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  margin-top: 10px;\n  padding-left: 0;\n  margin-right: auto;\n  margin-left: auto;\n  @media screen and "," {\n    width: 445px;\n  }\n  @media screen and "," {\n    width: 680px;\n  }\n  @media screen and "," {\n    width: 800px;\n  }\n"])),w.H.xs,w.H.md,w.H.lg),vn=j.Z.div(tn||(tn=(0,Z.Z)(["\n  font-size: 37px;\n  font-family: 'Caveat', cursive;\n"]))),Zn=t(9439),jn=t(3703),yn=t(71),wn=j.Z.li(an||(an=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n"]))),zn=j.Z.div(on||(on=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n"]))),Hn=(0,j.Z)(yn.umg)(rn||(rn=(0,Z.Z)(["\n  width: 24px;\n  height: 24px;\n  color: #00005a;\n"]))),kn=j.Z.p(dn||(dn=(0,Z.Z)(["\n  font-size: 16px;\n  font-weight: 600;\n  color: #00005a;\n  margin-right: 15px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  margin-right: auto;\n  text-indent: 3px;\n  font-family: 'Caveat', cursive;\n  @media screen and "," {\n    font-size: 18px;\n  }\n  @media screen and "," {\n    font-size: 27px;\n  }\n  @media screen and "," {\n    font-size: 27px;\n  }\n"])),w.H.xs,w.H.md,w.H.lg),Cn=(0,j.Z)(jn.Z)(sn||(sn=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50px;\n  height: 20px;\n  background-color: #aed219;\n  border-radius: 20px;\n  margin-right: 5px;\n  @media screen and "," {\n    height: 20px;\n    width: 50px;\n  }\n  @media screen and "," {\n    height: 32px;\n    width: 90px;\n  }\n  @media screen and "," {\n    width: 90px;\n  }\n\n  &:hover,\n  &:focus {\n    transform: scaleX(1.05);\n    background-color: #f0d800;\n    box-shadow: 4px 6px 11px rgb(4 12 129 / 93%);\n  }\n"])),w.H.xs,w.H.md,w.H.lg),Fn=j.Z.button(cn||(cn=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 20px;\n  background-color: #f47c74;\n  border-radius: 20px;\n  border: none;\n  @media screen and "," {\n    height: 20px;\n    width: 40px;\n  }\n  @media screen and "," {\n    height: 32px;\n    width: 70px;\n  }\n  @media screen and "," {\n    width: 70px;\n  }\n\n  &:hover,\n  &:focus {\n    transform: scaleX(1.05);\n    background-color: #f22020db;\n    box-shadow: 4px 6px 11px rgb(4 12 129 / 93%);\n  }\n"])),w.H.xs,w.H.md,w.H.lg),Bn=j.Z.p(pn||(pn=(0,Z.Z)(["\n  font-size: 8px;\n  margin: 0;\n  text-indent: unset;\n  color: black;\n  @media screen and "," {\n    font-size: 12px;\n  }\n  @media screen and "," {\n    font-size: 12px;\n  }\n"])),w.H.md,w.H.lg),In=t(4164),Sn=t(6747),_n=t(8424),Nn=j.Z.h3(ln||(ln=(0,Z.Z)(["\nfont-size: 36px;\nfont-family: 'Dancing Script', cursive;\n"]))),On=j.Z.form(xn||(xn=(0,Z.Z)(["\n    display: flex;\n    row-gap: 5px;\n    flex-direction: column;\n"]))),En=j.Z.div(mn||(mn=(0,Z.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-bottom: 10px;\n"]))),Pn=j.Z.label(fn||(fn=(0,Z.Z)(["\nfont-size: 24px;\nfont-weight: 700;\nmargin-bottom: 5px;\nfont-family: 'Dancing Script', cursive;\n"]))),Dn=j.Z.input(un||(un=(0,Z.Z)(["\nfont-size: 26px;\nfont-family: 'Caveat', cursive;\nborder-radius: 20px;\noutline:none;\nborder: 1px solid #b3b90d;\npadding-left:10px;\n\n&:hover, &:focus{\n    border-color: #00b1ff;\n    background-color: #9efeff;\n}\n"]))),Ln=j.Z.button(hn||(hn=(0,Z.Z)(["\nfont-family: 'Bagel Fat One', cursive;\nwidth: 70px;\nmargin-left: auto;\nmargin-right: auto;\nborder-radius: 15px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 20px;\nletter-spacing: 1px;\nbackground-color:#e7e257;\noutline:none;\nborder: 2px solid #33b5cd91;\n\n&:hover, &:focus{\n    background-color:#f3eb19;\n\n}\n"]))),Vn={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"#86e2e3",border:"2px solid #33b5cd91",boxShadow:"0px 0px 37px 25px #33b5cd91",borderRadius:5,outline:"none",p:4};var qn=function(n){var e=n.onCloseModal,t=n.open,i=n.id,a=n.name,o=n.number,r=(0,S.I0)();return(0,E.jsx)("div",{children:(0,E.jsx)(_n.Z,{open:t,onClose:function(){return e()},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,E.jsxs)(Sn.Z,{sx:Vn,children:[(0,E.jsx)(Nn,{children:"Change name or number"}),(0,E.jsxs)(On,{onSubmit:function(n){n.preventDefault();var t,a=n.target.elements.name.value,o=n.target.elements.number.value;if(t=o,new RegExp(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm).test(t)){var d={name:a,number:o};r((0,_.fB)({id:i,contact:d})),e()}else alert("Please enter a valid phone number")},children:[(0,E.jsxs)(En,{children:[(0,E.jsx)(Pn,{htmlFor:"modalName",children:" Name "}),(0,E.jsx)(Dn,{maxLength:16,id:"modalName",type:"text",name:"name",defaultValue:a})]}),(0,E.jsxs)(En,{children:[(0,E.jsx)(Pn,{htmlFor:"modalNumber",children:" Phone number "}),(0,E.jsx)(Dn,{maxLength:13,id:"modalNumber",type:"tel",name:"number",defaultValue:o})]}),(0,E.jsx)(Ln,{type:"submit",children:"Save"})]})]})})})},Rn=document.getElementById("modal-root"),Xn=function(n){var e=n.id,t=n.name,i=n.number,a=(0,v.useState)(!1),o=(0,Zn.Z)(a,2),r=o[0],d=o[1],s=(0,v.useState)(!1),c=(0,Zn.Z)(s,2),p=c[0],l=c[1],x=(0,S.I0)();return(0,E.jsxs)(wn,{children:[(0,E.jsx)(Hn,{}),(0,E.jsxs)(zn,{children:[(0,E.jsxs)(kn,{children:[t,": ",i]}),(0,E.jsx)(Cn,{type:"button",onClick:function(){return d(!0)},children:(0,E.jsx)(Bn,{children:"Change"})}),(0,E.jsx)(Fn,{disabled:p,type:"button",onClick:function(n){l(!0),x((0,_.xX)(e))},children:p?(0,E.jsx)(Bn,{children:"deleting"}):(0,E.jsx)(Bn,{children:"DELETE"})})]}),(0,In.createPortal)((0,E.jsx)(qn,{onCloseModal:function(){return d(!1)},open:r,id:e,name:t,number:i}),Rn)]})},An=function(n){return n.filter},Mn=function(){var n=(0,S.v9)(N),e=(0,S.v9)(An),t=n.filter((function(n){return n.name.toUpperCase().includes(e.toUpperCase())}));return(0,E.jsxs)(bn,{children:[0===n.length&&!e&&(0,E.jsx)(vn,{children:"Your phone book is empty. Add contacts to it."}),0===t.length&&e?(0,E.jsx)(vn,{children:"Contacts matching your request were not found"}):null===t||void 0===t?void 0:t.map((function(n){var e=n.id,t=n.name,i=n.number;return(0,E.jsx)(Xn,{id:e,name:t,number:i},e)}))]})},Tn=t(6477),Un=function(){var n=(0,S.I0)(),e=(0,S.v9)((function(n){return n.auth.token})),t=(0,S.v9)(O);return(0,v.useEffect)((function(){e&&n((0,_.VC)())}),[e,n]),(0,E.jsx)(J,{children:t?(0,E.jsx)(Tn.k,{}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(U,{children:"Phonebook"}),(0,E.jsx)(V,{}),(0,E.jsx)(M,{}),(0,E.jsx)(gn,{}),(0,E.jsx)($,{children:"Contacts"}),(0,E.jsx)(Mn,{})]})})}}}]);
//# sourceMappingURL=970.cba41d74.chunk.js.map