(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(37)},19:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n,i=a(1),s=a.n(i),r=a(12),c=a.n(r),o=a(3),u=a(4),p=a(6),l=a(5),m=a(7),d=(a(19),a(10)),f=a.n(d),h={apiKey:"AIzaSyDJjLaet5LsbEDvEWMmpyZQsQUybMuDJbE",authDomain:"shoplist-91bcd.firebaseapp.com",databaseURL:"https://shoplist-91bcd.firebaseio.com",projectId:"shoplist-91bcd",storageBucket:"shoplist-91bcd.appspot.com",messagingSenderId:"851332853131",appId:"1:851332853131:web:4f3a1a6ca192f9e6"},b=(a(33),function(e){function t(e){return Object(o.a)(this,t),Object(p.a)(this,Object(l.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement("i",{className:"fas fa-shopping-cart"}),s.a.createElement("h1",null,this.props.title))}}]),t}(s.a.Component)),v=(a(34),s.a.Component,a(35),function(e){function t(e){return Object(o.a)(this,t),Object(p.a)(this,Object(l.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"shopList"},s.a.createElement("input",{type:"text",onKeyUp:this.props.addItem,placeholder:"Add item..."}),s.a.createElement("div",{className:"itemsList"},this.props.items))}}]),t}(s.a.Component)),j=(a(36),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(l.a)(t).call(this,e))).decrement=function(e){a.state.units>1&&a.setState({units:a.state.units-1},function(){a.props.updateItem(a.state)})},a.increment=function(e){a.setState({units:a.state.units+1},function(){a.props.updateItem(a.state)})},a.state={id:a.props.id,units:a.props.units||0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"item",id:this.props.id},s.a.createElement("div",null,s.a.createElement("p",null,this.props.title),s.a.createElement("div",{className:"buttoner"},s.a.createElement("i",{className:"fas fa-trash-alt removeBtn",onClick:this.props.removeEvt}))))}}]),t}(s.a.Component)),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(l.a)(t).call(this,e))).configFirebase=function(){var e={apiKey:h.apiKey,authDomain:h.authDomain,databaseURL:h.databaseURL,projectId:h.projectId,storageBucket:h.storageBucket,messagingSenderId:h.messagingSenderId,appId:h.appId};f.a.initializeApp(e),n=f.a.database()},a.getAllItems=function(){n.ref("items").on("value",function(e){var t=e.val(),n=[];for(var i in t)if(t.hasOwnProperty(i)){var r=t[i],c=s.a.createElement(j,{key:r.id,id:r.id,title:r.title,units:r.units,updateItem:a.updateItem,removeEvt:a.removeItem});n.push(c)}a.setState({shopList:n})})},a.addItem=function(e){if("Enter"===e.key){var t=Date.now(),a=e.target.value;n.ref("items/"+t).set({id:t,title:a,units:1}).then(function(){}).catch(function(e){return console.log(e)}),e.target.value=""}},a.updateItem=function(e){n.ref("items/".concat(e.id)).update({units:e.units})},a.removeItem=function(e){var t=e.target.parentNode.parentNode.parentNode.id;""!==t&&n.ref("items/"+t).remove()},a.state={shopList:[],cartList:[]},a.configFirebase(),a.getAllItems(),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,{title:"ShopList"}),s.a.createElement("div",{className:"lists"},s.a.createElement(v,{title:"Shop List",items:this.state.shopList,addItem:this.addItem})))}}]),t}(s.a.Component);c.a.render(s.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a484b0ef.chunk.js.map