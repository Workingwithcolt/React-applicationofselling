(this.webpackJsonpreactsecond=this.webpackJsonpreactsecond||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var c,a,i,r,s,l,o,u,b,d,m,p,j,h,g,O=n(8),f=n.n(O),v=n(44),x=n.n(v),y=n(57),N=(n(67),n(18)),k=n(15),w=Object(k.a)([function(e){return e.shop}],(function(e){return e.collections})),C=Object(k.a)([w],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),U=n(17),I=n(32),E=(n(73),n(7)),S=["children","isGoogleSignIn","inverted"],T=function(e){var t=e.children,n=(e.isGoogleSignIn,e.inverted),c=Object(I.a)(e,S);return Object(E.jsx)("button",Object(U.a)(Object(U.a)({className:"".concat(n?"inverted":""," custom-button")},c),{},{children:t}))},A=function(e){return{type:"ADD_ITEM",payload:e}},B=(n(75),Object(N.b)(null,(function(e){return{addItem:function(t){return e(A(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,a=t.price,i=t.imageUrl;return Object(E.jsxs)("div",{className:"collection-item",children:[Object(E.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),Object(E.jsxs)("div",{className:"collection-footer",children:[Object(E.jsx)("span",{className:"name",children:c}),Object(E.jsx)("span",{className:"price",children:a})]}),Object(E.jsx)(T,{onClick:function(){return n(t)},className:"custom-button",inverted:!0,children:"ADD TO CART "})]})}))),M=Object(N.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(k.a)([w],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(E.jsxs)("div",{className:"collection-page",children:[Object(E.jsx)("h2",{className:"title",children:n}),Object(E.jsx)("div",{className:"items",children:c.map((function(e){return Object(E.jsx)(B,{item:e},e.id)}))})]})})),D=(n(76),n(0)),R=n.n(D),G=n(1),P=n(2),W=n(3),q=n(11),H=n(12),_=(n(78),Object(k.a)([function(e){return e.user}],(function(e){return e.currentUser}))),J=n(34),L=(n(79),n(80),Object(J.f)((function(e){var t=e.title,n=e.imageUrl,c=e.size,a=e.history,i=e.linkUrl,r=e.match;return Object(E.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(r.url).concat(i))},children:[Object(E.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(E.jsxs)("div",{className:"content",children:[Object(E.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(E.jsx)("span",{children:Object(E.jsx)("p",{className:"subtitle",children:"SHOP NOW"})})]})]})}))),V=(n(88),Object(k.a)([function(e){return e.directory}],(function(e){return e.section}))),z=["id"],F=Object(k.b)({section:V}),K=Object(N.b)(F)((function(e){var t=e.section;return Object(E.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(I.a)(e,z);return Object(E.jsx)(L,Object(U.a)({},n),t)}))})})),Q=function(){return Object(E.jsx)("div",{className:"homepage",children:Object(E.jsx)(K,{})})},Y=(n(89),function(e){var t=e.title,n=e.items;return Object(E.jsxs)("div",{className:"collection-preview",children:[Object(E.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(E.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(E.jsx)(B,{item:e},e.id)}))})]})}),X=(n(90),["id"]),Z=Object(k.b)({collections:C}),$=Object(N.b)(Z)((function(e){var t=e.collections;return Object(E.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(I.a)(e,X);return Object(E.jsx)(Y,Object(U.a)({},n),t)}))})})),ee=function(e){var t=e.match.path;return console.log(t+"This our path"),Object(E.jsxs)("div",{className:"shop-page",children:[Object(E.jsx)(J.b,{exact:!0,path:"".concat(t),component:$}),Object(E.jsx)(J.b,{exact:!0,path:"".concat(t,"/:collectionId"),component:M})]})},te=(n(91),n(92),n(60)),ne=n.n(te),ce=function(e){var t=e.price,n=100*t;return Object(E.jsx)("div",{children:Object(E.jsx)(ne.a,{className:"size",label:"Pay Now",name:"CRWN Clothing Ltd",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("payment is sucessfull!!")},stripeKey:"pk_test_51KAWW5SH8wo4i4KS8iFnoC9MLb4Fe724CqX70UtKywt96eE2E2D9JPDAoIOOQeAMeiPtDfl0qV6s6k9syMkkYzjQ00MZ3oCEXk"})})},ae=function(e){return e.cart},ie=Object(k.a)([ae],(function(e){return e.cartItems})),re=Object(k.a)([ae],(function(e){return e.hidden})),se=Object(k.a)([ie],(function(e){return null!=e&&void 0!=e?e.reduce((function(e,t){return e+t.quantity}),0):0})),le=Object(k.a)([ie],(function(e){return null!=e?e.reduce((function(e,t){return e+t.quantity*t.price}),0):"0"})),oe=(n(93),Object(N.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:"CLEAR_ITEM_FROM_CART",payload:e}}(t))},addItem:function(t){return e(A(t))},removeItem:function(t){return e(function(e){return{type:"REMOVE_ITEM",payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,a=e.removeItem,i=t.name,r=t.imageUrl,s=t.price,l=t.quantity;return Object(E.jsxs)("div",{className:"checkout-item",children:[Object(E.jsx)("div",{className:"image-container",children:Object(E.jsx)("img",{src:r,alt:"item"})}),Object(E.jsx)("span",{className:"name",children:i}),Object(E.jsxs)("span",{className:"quantity",children:[Object(E.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(E.jsx)("span",{className:"value",children:l}),Object(E.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(E.jsxs)("span",{className:"price",children:["$",s]}),Object(E.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),ue=Object(k.b)({cartItems:ie,total:le}),be=Object(N.b)(ue)((function(e){var t=e.cartItems,n=e.total;return Object(E.jsxs)("div",{className:"checkout-page",children:[Object(E.jsxs)("div",{className:"checkout-header",children:[Object(E.jsx)("div",{className:"header-block",children:Object(E.jsx)("span",{children:"Product"})}),Object(E.jsx)("div",{className:"header-block",children:Object(E.jsx)("span",{children:"Description"})}),Object(E.jsx)("div",{className:"header-block",children:Object(E.jsx)("span",{children:"Quantity"})}),Object(E.jsx)("div",{className:"header-block",children:Object(E.jsx)("span",{children:"Price"})}),Object(E.jsx)("div",{className:"header-block",children:Object(E.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(E.jsx)(oe,{cartItem:e},e.id)})),Object(E.jsxs)("div",{className:"total",children:["TOTAL:$",n]}),Object(E.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(E.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/20  -CVV:123"]}),Object(E.jsx)(ce,{className:"stipebutton",price:n})]})})),de=(n(94),n(95),function(e){var t=e.item,n=t.imageUrl,c=t.price,a=t.name,i=t.quantity;return Object(E.jsxs)("div",{className:"cart-item",children:[Object(E.jsx)("img",{src:n,alt:"item"}),Object(E.jsxs)("div",{className:"item-details",children:[Object(E.jsx)("span",{className:"name",children:a}),Object(E.jsxs)("span",{className:"price",children:[i," x $",c]})]})]})}),me=Object(k.b)({CartItemss:ie,hidden:re}),pe=Object(J.f)(Object(N.b)(me)((function(e){var t=e.CartItemss,n=e.history,c=e.dispatch;return Object(E.jsxs)("div",{className:"cart-dropdown",children:[Object(E.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(E.jsx)(de,{item:e},e.id)})):Object(E.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(E.jsxs)(T,{onClick:function(){n.push("/checkout"),c({type:"TOGGLE_CART_HIDDEN"})},children:[" "," Go To CHECKOUT "," "]})]})}))),je=n(29),he=n(50),ge={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;return t.type,e},fe=n(61),ve=n.n(fe),xe="SET_CURRENT_USER",ye={currentUser:null},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;return t.type===xe?{currentUser:t.payload}:e},ke=n(21),we=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(U.a)(Object(U.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(ke.a)(e),[Object(U.a)(Object(U.a)({},t),{},{quantity:1})])},Ce=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!=t.id})):e.map((function(e){return e.id===t.id?Object(U.a)(Object(U.a)({},e),{},{quantity:e.quantity-1}):e}))},Ue={hidden:!1,cartItems:[]},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_CART_HIDDEN":return Object(U.a)(Object(U.a)({},e),{},{hidden:!e.hidden});case"ADD_ITEM":return Object(U.a)(Object(U.a)({},e),{},{cartItems:we(e.cartItems,t.payload)});case"CLEAR_ITEM_FROM_CART":return Object(U.a)(Object(U.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!=t.payload.id}))});case"REMOVE_ITEM":return Object(U.a)(Object(U.a)({},e),{},{cartItems:Ce(e.cartItems,t.payload)});default:return e}},Ee={section:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Te={key:"root",storage:ve.a,whitelist:["cart"]},Ae=Object(je.b)({user:Ne,cart:Ie,directory:Se,shop:Oe}),Be=Object(he.a)(Te,Ae),Me=["title","titleId"];function De(){return De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},De.apply(this,arguments)}function Re(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ge(e,t){var n=e.title,f=e.titleId,v=Re(e,Me);return O.createElement("svg",De({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":f},v),n?O.createElement("title",{id:f},n):null,O.createElement("g",null,O.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),O.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),O.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),O.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),O.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),c||(c=O.createElement("g",null)),a||(a=O.createElement("g",null)),i||(i=O.createElement("g",null)),r||(r=O.createElement("g",null)),s||(s=O.createElement("g",null)),l||(l=O.createElement("g",null)),o||(o=O.createElement("g",null)),u||(u=O.createElement("g",null)),b||(b=O.createElement("g",null)),d||(d=O.createElement("g",null)),m||(m=O.createElement("g",null)),p||(p=O.createElement("g",null)),j||(j=O.createElement("g",null)),h||(h=O.createElement("g",null)),g||(g=O.createElement("g",null)))}var Pe=O.forwardRef(Ge),We=(n.p,n(98),Object(k.b)({itemCount:se})),qe=Object(N.b)(We,(function(e){return{toggleCartHidden:function(){return e({type:"TOGGLE_CART_HIDDEN"})}}}))((function(e){var t=e.itemCount,n=e.toggleCartHidden;return Object(E.jsxs)("div",{className:"cart-icon",onClick:n,children:[Object(E.jsx)(Pe,{className:"shopping-icon"}),Object(E.jsx)("span",{className:"item-count",children:t})]})})),He=(n(99),n(53)),_e=(n(100),n(39)),Je=n(35),Le=He.a.initializeApp({apiKey:"AIzaSyAcQ9ATVB4Rh5QUkV3v6aSHvGaJN5oIxi4",authDomain:"crown-db-d6dc8.firebaseapp.com",projectId:"crown-db-d6dc8",storageBucket:"crown-db-d6dc8.appspot.com",messagingSenderId:"385991468843",appId:"1:385991468843:web:403b3645fb6a5871c5476e",measurementId:"G-KCWEW3W0CG"}),Ve=Object(_e.b)(),ze=Object(Je.b)(Le),Fe=function(){var e=Object(G.a)(R.a.mark((function e(t,n){var c,a,i,r,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(""!==n){e.next=17;break}return c=t.displayName,a=t.email,i=t.metadata,console.log(c),console.log(a),console.log(i.creationTime),e.prev=7,e.next=10,Object(_e.c)(Object(_e.a)(Ve,"users/".concat(c)),{displayName:c,email:a,createAt:i.creationTime},{merge:!0});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.log(e.t0);case 15:e.next=29;break;case 17:return r=t.email,s=t.metadata,console.log(n),console.log(r),console.log(s.creationTime),e.prev=21,e.next=24,Object(_e.c)(Object(_e.a)(Ve,"users/".concat(n)),{displayName:n,email:r,createAt:s.creationTime},{merge:!0});case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(21),console.log(e.t1);case 29:case"end":return e.stop()}}),e,null,[[7,12],[21,26]])})));return function(t,n){return e.apply(this,arguments)}}(),Ke=n(25),Qe=Object(k.b)({currentUser:_,hidden:re,CartItems:ie}),Ye=Object(N.b)(Qe)((function(e){var t=e.currentUser,n=e.hidden,c=e.CartItems;return Object(E.jsxs)("div",{className:"header",children:[Object(E.jsx)(Ke.b,{to:"/",className:"logo-container",children:Object(E.jsx)("h1",{className:"logo",children:"LOGO"})}),Object(E.jsxs)("div",{className:"options",children:[console.log(n+"Cget"),Object(E.jsx)(Ke.b,{to:"/shop",className:"option",children:"SHOP"}),Object(E.jsx)(Ke.b,{to:"/shop",className:"option",children:"CONTACT"}),Object(E.jsx)(Ke.b,{to:"/shop",className:"option",children:"HELP"}),t?Object(E.jsx)("div",{className:"option",onClick:function(){return ze.signOut()},children:"SIGN OUT"}):Object(E.jsx)(Ke.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(E.jsx)(qe,{})]}),n?Object(E.jsx)(pe,{CartItems:c}):""]})})),Xe=(n(103),n(5)),Ze=(n(104),n(105),["handleChange","label"]),$e=function(e){var t=e.handleChange,n=e.label,c=Object(I.a)(e,Ze);return Object(E.jsxs)("div",{className:"group",children:[Object(E.jsx)("input",Object(U.a)({className:"form-input",onChange:t},c)),n?Object(E.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})},et=function(e){Object(q.a)(n,e);var t=Object(H.a)(n);function n(e){var c;return Object(P.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,a=t.value;c.setState(Object(Xe.a)({},n,a))},c.handleSubmit=function(){var e=Object(G.a)(R.a.mark((function e(t){var n,a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.state,a=n.email,i=n.password,e.next=4,Object(Je.c)(ze,a,i).then((function(e){console.log("C");e.user;console.log("sign in is done")})).catch((function(e){Object(Je.a)(ze,a,i).then((function(e){e.user})).catch((function(e){console.log(e+"It is an error")}))}));case 4:c.setState({email:"",password:""});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.state={email:"",password:"",isSignIn:!1},c}return Object(W.a)(n,[{key:"render",value:function(){var e=this;return Object(E.jsxs)("div",{className:"sign-in",children:[Object(E.jsx)("h2",{children:"already have an account"}),Object(E.jsx)("span",{children:"Sign in with your email and password"}),Object(E.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(E.jsx)($e,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),Object(E.jsx)($e,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),Object(E.jsxs)("div",{className:"buttons",children:[Object(E.jsx)(T,{type:"submit",children:"Sign in"}),Object(E.jsxs)(T,{onClick:function(){var t=new He.a.auth.GoogleAuthProvider;He.a.auth().signInWithPopup(t).then((function(t){console.log(t),e.setState({isSignIn:!0})})).catch((function(e){console.log(e)}))},isGoogleSignIn:this.state.isSignIn,children:["","Sign in A With Google",""]})]})]})]})}}]),n}(f.a.Component),tt=et,nt=(n(106),function(e){Object(q.a)(n,e);var t=Object(H.a)(n);function n(){var e;return Object(P.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(G.a)(R.a.mark((function t(n){var c,a,i,r,s,l;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=e.state,a=c.displayName,i=c.email,r=c.password,s=c.confirmpassword,r===s){t.next=5;break}return alert("Password Dont Match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,Object(Je.a)(ze,i,r).then((function(e){var t=e.user;return console.log(e),console.log("dfdnjf"),t})).catch((function(e){console.log(e)}));case 8:l=t.sent,console.log("sd"),Fe(l,a),e.setState({displayName:"",email:"",password:"",confirmpassword:""}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[5,14]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(Xe.a)({},c,a))},e.state={displayName:"",email:"",password:"",confirmpassword:""},e}return Object(W.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,c=e.password,a=e.confirmpassword;return Object(E.jsxs)("div",{className:"sign-up",children:[Object(E.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(E.jsx)("span",{children:"Sign up with Your email and password "}),Object(E.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(E.jsx)($e,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(E.jsx)($e,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(E.jsx)($e,{type:"password",name:"password",value:c,onChange:this.handleChange,label:"password",required:!0}),Object(E.jsx)($e,{type:"password",name:"confirmpassword",value:a,onChange:this.handleChange,label:"confirm password",required:!0}),Object(E.jsx)(T,{type:"submit",children:"SIGN UP"})]})]})}}]),n}(f.a.Component)),ct=nt,at=function(){return Object(E.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(E.jsx)(tt,{}),Object(E.jsx)(ct,{})]})},it=function(e){Object(q.a)(n,e);var t=Object(H.a)(n);function n(){var e;Object(P.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).unsubscribeFromAuth=null,e}return Object(W.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ze.onAuthStateChanged(function(){var t=Object(G.a)(R.a.mark((function t(n){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&(Fe(n),e({user:n}),console.log(n)),e(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(E.jsxs)("div",{children:[Object(E.jsx)(Ye,{}),Object(E.jsxs)(J.d,{children:[Object(E.jsx)(J.b,{exact:!0,path:"/",component:Q}),Object(E.jsx)(J.b,{path:"/shop",component:ee}),Object(E.jsx)(J.b,{exact:!0,path:"/checkout",component:be}),Object(E.jsx)(J.b,{exact:!0,path:"/signIn",render:function(){return e.props.currentUser?Object(E.jsx)(J.a,{to:"/"}):Object(E.jsx)(at,{})}})]})]})}}]),n}(f.a.Component),rt=Object(N.b)((function(e){return{currentUser:_(e)}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:xe,payload:e}}(t))}}}))(it),st=n(62),lt=[n.n(st).a],ot=Object(je.c)(Be,je.a.apply(void 0,lt)),ut=Object(he.b)(ot);x.a.render(Object(E.jsx)(N.a,{store:ot,children:Object(E.jsx)(Ke.a,{children:Object(E.jsx)(y.a,{persistor:ut,children:Object(E.jsx)(rt,{})})})}),document.getElementById("root"))},67:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.3c2e1d19.chunk.js.map