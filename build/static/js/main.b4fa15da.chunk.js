(this.webpackJsonptest_auth=this.webpackJsonptest_auth||[]).push([[0],{52:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(0),n=c.n(r),s=c(19),i=c.n(s),j=c(16),o=c.n(j),u=c(18),l=c(8),d=c(58),b=c(56),O=c(57),p=c(54),h=c(33),x=(c(44),h.a.initializeApp({apiKey:"AIzaSyAxjTI7BQ9M9d2wz6HkeYOd8oNfggyzjCE",authDomain:"test-auth-6fe95.firebaseapp.com",databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyAxjTI7BQ9M9d2wz6HkeYOd8oNfggyzjCE",REACT_APP_FIREBASE_APP_ID:"1:1073986962957:web:416d29cc210c7e52c3f744",REACT_APP_FIREBASE_AUTH_DOMAIN:"test-auth-6fe95.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"1073986962957",REACT_APP_FIREBASE_PROJECT_ID:"test-auth-6fe95",REACT_APP_FIREBASE_STORAGE_BUCKET:"test-auth-6fe95.appspot.com"}).REACT_APP_FIREBASE_DATABASE_URL,projectId:"test-auth-6fe95",storageBucket:"test-auth-6fe95.appspot.com",messagingSenderId:"1073986962957",appId:"1:1073986962957:web:416d29cc210c7e52c3f744"})),m=x.auth(),f=n.a.createContext();function v(){return Object(r.useContext)(f)}function w(e){var t=e.children,c=Object(r.useState)(),n=Object(l.a)(c,2),s=n[0],i=n[1],j=Object(r.useState)(!0),o=Object(l.a)(j,2),u=o[0],d=o[1];Object(r.useEffect)((function(){return m.onAuthStateChanged((function(e){i(e),d(!1)}))}),[]);var b={currentUser:s,login:function(e,t){return m.signInWithEmailAndPassword(e,t)},signup:function(e,t){return m.createUserWithEmailAndPassword(e,t)},logout:function(){return m.signOut()},resetPassword:function(e){return m.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(a.jsx)(f.Provider,{value:b,children:!u&&t})}var g=c(7),E=c(10);function S(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(),n=v().signup,s=Object(r.useState)(""),i=Object(l.a)(s,2),j=i[0],h=i[1],x=Object(r.useState)(!1),m=Object(l.a)(x,2),f=m[0],w=m[1],S=Object(g.g)();function P(){return(P=Object(u.a)(o.a.mark((function a(r){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),t.current.value===c.current.value){a.next=3;break}return a.abrupt("return",h("Passwords do not match"));case 3:return a.prev=3,h(""),w(!0),a.next=8,n(e.current.value,t.current.value);case 8:S.push("/"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),h("Failed to create an account");case 14:w(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),j&&Object(a.jsx)(b.a,{variant:"danger",children:j}),Object(a.jsxs)(O.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(a.jsxs)(O.a.Group,{id:"email",children:[Object(a.jsx)(O.a.Label,{children:"Email"}),Object(a.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(a.jsxs)(O.a.Group,{id:"password",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(a.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(a.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(a.jsx)(O.a.Control,{type:"password",ref:c,required:!0})]}),Object(a.jsx)(p.a,{disabled:f,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(a.jsx)(E.b,{to:"/login",children:"Log In"})]})]})}var P=c(55);function A(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=v(),i=s.currentUser,j=s.logout,O=Object(g.g)();function h(){return(h=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,j();case 4:O.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),c&&Object(a.jsx)(b.a,{variant:"danger",children:c}),Object(a.jsx)("strong",{children:"Email:"})," ",i.email,Object(a.jsx)(E.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(a.jsx)("div",{className:"w-100 text-center mt-2",children:Object(a.jsx)(p.a,{variant:"link",onClick:function(){return h.apply(this,arguments)},children:"Log Out"})})]})}function _(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=v().login,n=Object(r.useState)(""),s=Object(l.a)(n,2),i=s[0],j=s[1],h=Object(r.useState)(!1),x=Object(l.a)(h,2),m=x[0],f=x[1],w=Object(g.g)();function S(){return(S=Object(u.a)(o.a.mark((function a(r){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,j(""),f(!0),a.next=6,c(e.current.value,t.current.value);case 6:w.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),j("Failed to log in");case 12:f(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),i&&Object(a.jsx)(b.a,{variant:"danger",children:i}),Object(a.jsxs)(O.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(a.jsxs)(O.a.Group,{id:"email",children:[Object(a.jsx)(O.a.Label,{children:"Email"}),Object(a.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(a.jsxs)(O.a.Group,{id:"password",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(a.jsx)(p.a,{disabled:m,className:"w-100",type:"submit",children:"Log In"})]}),Object(a.jsx)("div",{className:"w-100 text-center mt-3",children:Object(a.jsx)(E.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(a.jsx)(E.b,{to:"/signup",children:"Sign Up"})]})]})}var y=c(23),R=c(37);function C(e){var t=e.component,c=Object(R.a)(e,["component"]),r=v().currentUser;return Object(a.jsx)(g.b,Object(y.a)(Object(y.a)({},c),{},{render:function(e){return r?Object(a.jsx)(t,Object(y.a)({},e)):Object(a.jsx)(g.a,{to:"/login"})}}))}function N(){var e=Object(r.useRef)(),t=v().resetPassword,c=Object(r.useState)(""),n=Object(l.a)(c,2),s=n[0],i=n[1],j=Object(r.useState)(""),h=Object(l.a)(j,2),x=h[0],m=h[1],f=Object(r.useState)(!1),w=Object(l.a)(f,2),g=w[0],S=w[1];function P(){return(P=Object(u.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,m(""),i(""),S(!0),c.next=7,t(e.current.value);case 7:m("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),i("Failed to reset password");case 13:S(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),s&&Object(a.jsx)(b.a,{variant:"danger",children:s}),x&&Object(a.jsx)(b.a,{variant:"success",children:x}),Object(a.jsxs)(O.a,{onSubmit:function(e){return P.apply(this,arguments)},children:[Object(a.jsxs)(O.a.Group,{id:"email",children:[Object(a.jsx)(O.a.Label,{children:"Email"}),Object(a.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(a.jsx)(p.a,{disabled:g,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(a.jsx)("div",{className:"w-100 text-center mt-3",children:Object(a.jsx)(E.b,{to:"/login",children:"Login"})})]})}),Object(a.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(a.jsx)(E.b,{to:"/signup",children:"Sign Up"})]})]})}function I(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(),n=v(),s=n.currentUser,i=n.updatePassword,j=n.updateEmail,o=Object(r.useState)(""),u=Object(l.a)(o,2),h=u[0],x=u[1],m=Object(r.useState)(!1),f=Object(l.a)(m,2),w=f[0],S=f[1],P=Object(g.g)();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{children:Object(a.jsxs)(d.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),h&&Object(a.jsx)(b.a,{variant:"danger",children:h}),Object(a.jsxs)(O.a,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==c.current.value)return x("Passwords do not match");var r=[];S(!0),x(""),e.current.value!==s.email&&r.push(j(e.current.value)),t.current.value&&r.push(i(t.current.value)),Promise.all(r).then((function(){P.push("/")})).catch((function(){x("Failed to update account")})).finally((function(){S(!1)}))},children:[Object(a.jsxs)(O.a.Group,{id:"email",children:[Object(a.jsx)(O.a.Label,{children:"Email"}),Object(a.jsx)(O.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(a.jsxs)(O.a.Group,{id:"password",children:[Object(a.jsx)(O.a.Label,{children:"Password"}),Object(a.jsx)(O.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(a.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(a.jsx)(O.a.Label,{children:"Password Confirmation"}),Object(a.jsx)(O.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(a.jsx)(p.a,{disabled:w,className:"w-100",type:"submit",children:"Update"})]})]})}),Object(a.jsx)("div",{className:"w-100 text-center mt-2",children:Object(a.jsx)(E.b,{to:"/",children:"Cancel"})})]})}var k=function(){return Object(a.jsx)(P.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(a.jsx)("div",{className:"w-100",style:{maxWidth:"400px"},children:Object(a.jsx)(E.a,{children:Object(a.jsx)(w,{children:Object(a.jsxs)(g.d,{children:[Object(a.jsx)(C,{exact:!0,path:"/",component:A}),Object(a.jsx)(C,{path:"/update-profile",component:I}),Object(a.jsx)(g.b,{path:"/signup",component:S}),Object(a.jsx)(g.b,{path:"/login",component:_}),Object(a.jsx)(g.b,{path:"/forgot-password",component:N})]})})})})})};c(51);i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.b4fa15da.chunk.js.map