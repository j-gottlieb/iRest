(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(2),o=n.n(i),l=(n(14),n(3)),u=n(4),r=n(6),c=n(5),m=n(7),d=(n(16),function(e){return s.a.createElement("div",null,s.a.createElement("h3",null,e.message),s.a.createElement("input",{type:"number",onChange:function(t){return e.handleChange(t,e.isOn)},required:!0,defaultValue:e.minutes}))}),h=function(e){return s.a.createElement("div",null,s.a.createElement("h1",{style:{fontSize:100,marginLeft:100}},e.minutes,e.seconds?":":"",e.seconds))},f=function(e){return s.a.createElement("div",null,s.a.createElement("button",{onClick:function(t){return e.action(!0)}},e.label))},g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={seconds:null,minutes:null,minutesOn:20,minutesOff:2,isCounting:!1,secondsRemaining:"",volume:.5},n.beep=function(){var e=new Audio("notification.mp3");e.volume=n.state.volume,e.play()},n.tick=function(){var e=Math.floor(n.state.secondsRemaining/60),t=n.state.secondsRemaining-60*e;n.setState({minutes:e,seconds:t}),t<10&&n.setState({seconds:"0"+t}),0===n.state.secondsRemaining&&(clearInterval(n.intervalHandle),n.beep(),n.setState({isCounting:!1},function(){n.startCountDown(n.state.on)})),n.setState({secondsRemaining:n.state.secondsRemaining-1})},n.startCountDown=function(e){var t,a;n.state.isCounting||(n.intervalHandle=setInterval(n.tick,1e3),e?(t=60*n.state.minutesOn-1,a=!1):(t=60*n.state.minutesOff-1,a=!0),n.setState({secondsRemaining:t,on:a,isCounting:!0}))},n.stopCountDown=function(){clearInterval(n.intervalHandle),n.setState({isCounting:!1,minutes:null,seconds:null})},n.handleChange=function(e,t){var a=e.target.value;t?n.setState({minutesOn:a}):n.setState({minutesOff:a})},n.setVolume=function(e){var t=e.target.value;n.setState({volume:t})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"iRest"),s.a.createElement(d,{isOn:!0,message:"Input on-screen time:",minutes:this.state.minutesOn,handleChange:this.handleChange}),s.a.createElement(d,{isOn:!1,message:"Input off-screen time:",minutes:this.state.minutesOff,handleChange:this.handleChange}),s.a.createElement(f,{action:this.startCountDown,label:"Start"}),s.a.createElement(f,{action:this.stopCountDown,label:"Stop"}),s.a.createElement(h,{minutes:this.state.minutes,seconds:this.state.seconds}),s.a.createElement("label",null,"Volume"),s.a.createElement("input",{type:"range",min:"0",max:"1",value:this.state.volume,onChange:this.setVolume,step:".01"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.1872b571.chunk.js.map