(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(3),c=t.n(r),i=(t(14),t(1)),o=t(4),l=t(5),m=t(7),h=t(6),u=t(8),p=(t(16),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(s)))).state={username:"",email:"",pass:"",accept:!1,message:"",errors:{username:!1,email:!1,pass:!1,accept:!1}},t.messages={username_incorrect:"The name must be longer than 10 characters and cannot contain spaces",email_incorrect:"You need @ in email",password_incorrect:"Password must be 8 characters",accept_incorrect:"Unconfirmed consent"},t.handleChange=function(e){var a=e.target.name,n=e.target.type;if("text"===n||"password"===n||"email"===n){var s=e.target.value;t.setState(Object(i.a)({},a,s))}else if("checkbox"===n){var r=e.target.checked;t.setState(Object(i.a)({},a,r))}},t.handleSubmit=function(e){e.preventDefault();var a=t.formValidation();a.correct?t.setState({username:"",email:"",pass:"",accept:!1,message:"The form has been sent",errors:{username:!1,email:!1,pass:!1,accept:!1}}):t.setState({errors:{username:!a.username,email:!a.email,pass:!a.password,accept:!a.accept}})},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"formValidation",value:function(){var e=!1,a=!1,t=!1,n=!1,s=!1;return this.state.username.length>10&&-1===this.state.username.indexOf(" ")&&(e=!0),-1!==this.state.email.indexOf("@")&&(a=!0),8===this.state.pass.length&&(t=!0),this.state.accept&&(n=!0),e&&a&&t&&n&&(s=!0),{correct:s,username:e,email:a,password:t,accept:n}}},{key:"componentDidUpdate",value:function(){var e=this;console.log("update"),""!==this.state.message&&setTimeout(function(){return e.setState({message:""})},4e3)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",null,s.a.createElement("h1",{className:"App-header"},"Form Validation - React"),s.a.createElement("p",{className:"App-description"},"Task for learning more about React and form validation. You can find the code on"," ",s.a.createElement("a",{className:"App-link",href:"https://github.com/Krystian2017/FormValidation_REACT"},"my GitHub account."))),s.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},s.a.createElement("label",{htmlFor:"user"},"Your name:",s.a.createElement("input",{type:"text",id:"user",name:"username",value:this.state.username,onChange:this.handleChange}),this.state.errors.username&&s.a.createElement("span",null,this.messages.username_incorrect)),s.a.createElement("label",{htmlFor:"email"},"Your email:",s.a.createElement("input",{type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange}),this.state.errors.email&&s.a.createElement("span",null,this.messages.email_incorrect)),s.a.createElement("label",{htmlFor:"password"},"Your password:",s.a.createElement("input",{type:"password",id:"password",name:"pass",value:this.state.pass,onChange:this.handleChange}),this.state.errors.pass&&s.a.createElement("span",null,this.messages.password_incorrect)),s.a.createElement("label",{htmlFor:"accept"},s.a.createElement("input",{type:"checkbox",id:"accept",name:"accept",checked:this.state.accept,onChange:this.handleChange})," ","I accept"," ",s.a.createElement("a",{className:"App-link",href:"#"},"the terms and conditions")),this.state.errors.accept&&s.a.createElement("span",null,this.messages.accept_incorrect),s.a.createElement("button",null,"Sign up")),this.state.message&&s.a.createElement("h3",null,this.state.message))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.957a7936.chunk.js.map