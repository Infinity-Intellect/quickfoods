(this.webpackJsonpfooddelivery=this.webpackJsonpfooddelivery||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/quickfoodslogo.4c410abf.png"},37:function(e,t,a){e.exports=a.p+"static/media/wallpaper3.b5fd3fbe.gif"},39:function(e,t,a){e.exports=a(69)},44:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),l=(a(44),a(45),a(16)),i=a.n(l),s=a(31),m=a(4),u=a(5),d=a(7),h=a(6),p=a(8),b=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{style:f,onClick:this.props.onClick},"Add")))}}]),t}(n.Component),f={width:"70px",height:"30px",borderStyle:"solid",backgroundColor:"white",borderWidth:"3px",borderColor:"#34a4eb",color:"black",fontSize:"1em",borderRadius:"15px"},E=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:v},r.a.createElement("p",{style:{textAlign:"center"}},this.props.count))}}]),t}(n.Component),v={borderStyle:"solid",backgroundColor:"white",borderWidth:"3px",borderColor:"#34a4eb",width:"40%",height:"75%",color:"black",borderRadius:"15px"},g=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).increaseCount=function(){var e=a.state.count;e+=1,a.setState({count:e})},a.decreaseCount=function(){var e=a.state.count;e>0&&(e-=1),a.setState({count:e})},a.state={count:0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container",style:y},r.a.createElement("div",{className:"row",style:{paddingTop:"20px"}},r.a.createElement("div",{className:"col text-left"},r.a.createElement("h4",null,this.props.item.itemname)),r.a.createElement("div",{className:"col text-right"},r.a.createElement("h3",null,"Rs. ",this.props.item.price))),r.a.createElement("div",{className:"row",style:{marginTop:"40px"}},r.a.createElement("div",{className:"col-4 "},r.a.createElement(E,{count:this.state.count})),r.a.createElement("div",{className:"col-4"}),r.a.createElement("div",{className:"col-4"},r.a.createElement(b,{onClick:function(){e.increaseCount(),e.props.onClick()}}))))}}]),t}(n.Component),y={boxShadow:"2px 0px 4px white",width:"290px",height:"200px",borderStyle:"solid",borderRadius:"15px",borderColor:"#6b6d70",backgroundColor:"#2d425e",color:"white"},k=a(32),C=a.n(k),w=a(33),j=a.n(w),x=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid",style:O},r.a.createElement("div",{className:"row",style:{padding:"3%"}},r.a.createElement("div",{className:"col-1 "},r.a.createElement("img",{alt:"Logo",src:j.a,width:"50px"})),r.a.createElement("div",{className:"col-2 ",align:"left",style:N},r.a.createElement("h1",null,"QuickFoods")),r.a.createElement("div",{className:"col-8",align:"center",style:{marginTop:"2%"}},r.a.createElement("input",{type:"text",placeholder:"Find your tongue's desire",style:S,onChange:this.props.onChange}))))}}]),t}(n.Component),O={backgroundColor:"#151e2b",boxShadow:"2px 0px 4px #eb4934",backgroundAttachment:"fixed"},N={color:"white",marginTop:"2%"},S={fontFamily:"",backgroundColor:"#151e2b",fontSize:"1.2em",paddingRight:"4%",textAlign:"right",color:"white",width:"80%",height:"40px",borderStyle:"none",borderBottomStyle:"solid",borderBottomWidth:"4px",borderBottomColor:"#eb4934"},T=a(70),I=a(12),B=function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).showCart=function(){a.setState({displayCart:!0})},a.hideCart=function(){a.setState({displayCart:!1})},a.search=function(e){return function(t){return t.itemname.toLowerCase().includes(e.toLowerCase())||!t}},a.searchHandler=function(e){a.setState({searchterm:e.target.value})},a.updateNumberOfItems=function(){a.setState({nItems:a.state.nItems+3})},a.updateCart=function(e){var t=!1,n=a.state.cart;if(0!==n.length&&n.forEach((function(r){r.item.itemname===e.itemname&&(r.count+=1,a.setState({cart:n}),t=!0)})),!1===t){var r={item:e,count:1};n.push(r),a.setState({cart:n})}},a.state={menu:[],searchterm:"",nItems:6,cart:[],displayCart:!1,isAdd:!0};return document.title="QuickFoods Home",a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://api.jsonbin.io/b/5dd2b22a2e22356f234db9d2").then((function(e){t.setState({menu:e.data})}));case 2:this.setState({loading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!0===this.state.loading)return r.a.createElement("h1",null,"Loading ....");var t=this.state.menu;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(x,{onChange:this.searchHandler})),r.a.createElement("div",{className:"row justify-content-center",style:{marginTop:"2%"}},r.a.createElement(I.b,{to:{pathname:"/cart",state:{cart:this.state.cart}}},r.a.createElement(T.a,{className:"btn",size:"lg",style:{backgroundColor:"#334580",borderColor:"#334580"}},"Proceed To Cart"))),r.a.createElement("div",{className:"row"},t.filter(this.search(this.state.searchterm)).slice(0,this.state.nItems).map((function(t){return r.a.createElement("div",{key:t.itemname,className:"col-4",style:{paddingTop:"3%",paddingBottom:"2%"}},r.a.createElement(g,{item:t,onClick:function(){return e.updateCart(t)}}))}))),r.a.createElement("div",{className:"row justify-content-center"},this.state.nItems<t.length?r.a.createElement(T.a,{style:{marginBottom:"2%"},variant:"dark",size:"lg",onClick:this.updateNumberOfItems},"Click for more"):r.a.createElement("div",{className:"alert alert-info"},"That's It ",r.a.createElement("strong",null,"Folks")," ! We'll ask the"," ",r.a.createElement("strong",null,"Chef")," to add more items")))}}]),t}(n.Component);var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=a(13),W=function(e){function t(e){var a;return Object(m.a)(this,t),a=Object(d.a)(this,Object(h.a)(t).call(this,e)),document.title="QuickFoods Cart",a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.location.state.cart,t=[],a=0;e.forEach((function(e){var a=e.item.price*e.count;t.push({itemname:e.item.itemname,price:e.item.price,totalprice:a,quantity:e.count})}));for(var n=0,c=0;c<t.length;c++)n+=t[c].totalprice;return r.a.createElement("div",{className:"container"},r.a.createElement("table",{className:"table table-hover table-dark",style:{color:"white",marginTop:"5%"}},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Price(per item)"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price")),e.length>0?t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("th",null,++a),r.a.createElement("td",null,e.itemname),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,e.totalprice))})):r.a.createElement("div",{className:"alert alert-info",style:{marginTop:"3%"}},"Your cart is ",r.a.createElement("strong",null,"empty"),", Don't leave empty-handed !"),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("td",null),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,n)))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-1"},r.a.createElement(I.b,{to:"/"},r.a.createElement(T.a,{variant:"secondary"},"Back"))),r.a.createElement("div",{className:"col-1"},e.length>0?r.a.createElement(I.b,{to:"/"},r.a.createElement(T.a,{variant:"success"},"Order")):null)))}}]),t}(n.Component),R=a(37),q=a.n(R);document.body.style="background-image:url("+q.a+")",document.body.style.backgroundAttachment="fixed";var z=r.a.createElement(I.a,{basename:"/quickfoods"},r.a.createElement("div",null,r.a.createElement(F.a,{exact:!0,path:"/",component:A}),r.a.createElement(F.a,{path:"/cart",component:W})));o.a.render(z,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.dba8c1a9.chunk.js.map