(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,name:"Arizona",image:"/images/arizona.png"},{id:2,name:"Buffalo",image:"/images/buffalo.png"},{id:3,name:"Dallas",image:"/images/dallas.png"},{id:4,name:"Detroit",image:"/images/detroit.png"},{id:5,name:"Green Bay",image:"/images/gb.png"},{id:6,name:"Indianapolis",image:"/images/indy.png"},{id:7,name:"Los Angeles",image:"/images/larams.png"},{id:8,name:"miami",image:"/images/miami.png"},{id:9,name:"Oakland",image:"/images/oakland.png"},{id:10,name:"San Francisco",image:"/images/sf.png"},{id:11,name:"Tampa Bay",image:"/images/tampa.png"},{id:12,name:"Tennessee",image:"/images/tenn.png"}]},11:function(e,a,t){e.exports=t(17)},17:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(3),c=t.n(r),i=t(8),m=t(7),l=t(4),o=t(5),d=t(9),u=t(6),g=t(10),f=t(1);var p=function(e){return s.a.createElement("div",{className:"card img-container",onClick:function(){return function(e){e.randomize(),e.selectedCard(e.id)}(e)}},s.a.createElement("img",{alt:e.name,src:e.image}))};var E=function(){return s.a.createElement("div",{className:"instructions"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("h4",{className:"center"},"Game Rules"),s.a.createElement("ol",null,s.a.createElement("li",null,"The goal is to select all images just once"),s.a.createElement("li",null,"When you click an image, the images will rearrange."),s.a.createElement("li",null,"You Lose if you select one team twice"),s.a.createElement("li",null,"You Win if you select all teams in 12 clicks"),s.a.createElement("li",null,"The game restarts after any  Win or Loose"))),s.a.createElement("br",null),s.a.createElement("div",{className:"modal-footer center"},s.a.createElement("button",{className:"btn",onClick:function(){document.getElementsByClassName("instructions")[0].classList.add("hide")}},"Play !")))};var h=function(e){return s.a.createElement("div",{className:"navbar-fixed"},s.a.createElement("nav",null,s.a.createElement("div",{className:"nav-wrapper container"},s.a.createElement("span",{style:{cursor:"pointer"},className:"left",onClick:function(){document.getElementsByClassName("instructions")[0].classList.remove("hide")}},"Game Rules"),s.a.createElement("span",{href:"/",className:"brand-logo center ".concat(e.class)},e.message),s.a.createElement("ul",{className:"right"},s.a.createElement("li",{id:"points"},"Points: ",e.uScore),s.a.createElement("li",{id:"max"},"Max: ",e.maxScore)))))},S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={cards:f,selectedTeams:[],uScore:0,maxScore:0,messageText:"Memory Game",class:"start"},t.randomCards=function(e){for(var a=e.length;0!==a;){var n=Math.floor(Math.random()*a),s=e[a-=1];e[a]=e[n],e[n]=s}t.setState({cards:f})},t.renderCards=function(){return t.state.cards.map(function(e){return s.a.createElement("section",{className:"col s4 m3 l3",key:e.id,id:e.id},s.a.createElement(p,{name:e.name,image:e.image,randomize:function(){t.randomCards(t.state.cards)},selectedCard:function(){t.selected(e.id)}}))})},t.selected=function(e){var a=document.getElementsByTagName("body"),n=Object(m.a)(a,1)[0];t.state.selectedTeams.includes(e)?(t.setState({uScore:0,selectedTeams:[]}),n.classList.add("shakeWrapper"),t.setState({messageText:"WRONG! Try Again",class:"loose"}),setTimeout(function(){n.classList.remove("shakeWrapper")},500),setTimeout(function(){t.setState({messageText:"Memory Game",class:"start"})},2500)):(t.setState({selectedTeams:[].concat(Object(i.a)(t.state.selectedTeams),[e])}),t.setState({uScore:t.state.uScore+1}),t.state.uScore>=t.state.maxScore&&t.setState({maxScore:t.state.uScore+1}),11===t.state.uScore&&(t.setState({messageText:"You Won!!!",class:"win"}),setTimeout(function(){t.setState({messageText:"Memory Game",class:"start"}),t.setState({uScore:0,selectedTeams:[],cards:f})},2500)))},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement(E,null),s.a.createElement(h,{class:this.state.class,message:this.state.messageText,uScore:this.state.uScore,maxScore:this.state.maxScore}),s.a.createElement("div",{className:"container row cardWrapper"},this.renderCards(this.state.cards)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.ffc946fe.chunk.js.map