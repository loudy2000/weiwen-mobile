(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1004:function(e,t){},1162:function(e,t){},1286:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(63),o=n.n(c),i=(n(538),n(272)),s=n.n(i),l=n(64),u=n(65),d=n(67),m=n(66),h=n(68),f=(n(594),n(595),n(523)),p=n.n(f),g=(n(191),n(108)),E=n.n(g),b=(n(604),n(135)),v=n.n(b),y=(n(608),n(174)),w=n.n(y),x=(n(610),n(175)),k=n.n(x),O=(n(615),n(273)),j=n.n(O),S=n(281),C=n(32),D=n.n(C),I=n(109),T=n(274),R=n.n(T),A=function(e){var t=e.type,n=e.text,a=e.onClick;return r.a.createElement("span",{onClick:a},r.a.createElement("i",{class:"iconfont "+t,style:{marginRight:8}}),n)},L=n(176),F=n(530),z=n(276),P=n(526),M="https",_="api.jungle.alohaeos.com",B=443,H="e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473",N=new P.JsSignatureProvider(["5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr"]),J=M+"://"+_+":"+B,W=new z.JsonRpc(J,{fetch:fetch}),Y=(new z.Api({rpc:W,signatureProvider:N,chainId:H,textDecoder:new TextDecoder,textEncoder:new TextEncoder}),function(){var e=Object(I.a)(D.a.mark(function e(t,n){var a;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get_table_rows(Object(F.a)({json:!0,code:"weiwendapps2",scope:"weiwendapps2",table:t,limit:9999,reverse:!0,key_type:"i64",index_position:1},n));case 2:return a=e.sent,e.abrupt("return",a.rows);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()),K=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).onRefresh=Object(I.a)(D.a.mark(function e(){var t;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({refreshing:!0,isLoading:!0}),e.next=3,Y("posttable");case 3:t=e.sent,n.setState({data:t}),n.rData=n.genOnePageData(),n.setState({dataSource:n.state.dataSource.cloneWithRows(n.rData),refreshing:!1,isLoading:!1}),n.pageIndex=0;case 8:case"end":return e.stop()}},e)})),n.onEndReached=function(e){n.state.isLoading||(n.setState({isLoading:!0}),setTimeout(function(){n.rData=[].concat(Object(S.a)(n.rData),Object(S.a)(n.genOnePageData(++n.pageIndex))),n.setState({dataSource:n.state.dataSource.cloneWithRows(n.rData),isLoading:!1})},600))},n.pageIndex=0;var a=new j.a.DataSource({rowHasChanged:function(e,t){return e!==t}});return n.state={data:[],dataSource:a,refreshing:!0,isLoading:!0},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"genOnePageData",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=[],n=0;n<10;n++){var a=this.state.data[10*e+n];void 0!==a&&t.push(a)}return t}},{key:"componentDidMount",value:function(){var e=Object(I.a)(D.a.mark(function e(){var t;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y("posttable");case 2:t=e.sent,this.setState({data:t}),this.rData=this.genOnePageData(),this.setState({dataSource:this.state.dataSource.cloneWithRows(this.rData),refreshing:!1,isLoading:!1});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderAttachment",value:function(e,t){return 1===e?r.a.createElement("a",{href:t},r.a.createElement(A,{type:"icon-link",text:t})):2===e?r.a.createElement("a",{href:L.a(t)},r.a.createElement(A,{type:"icon-link",text:t})):3===e?r.a.createElement("a",{href:L.a(t),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:L.a(t),alt:"",style:{width:230,height:100}})):""}},{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(E.a,{mode:"dark",rightContent:"\u53d1\u5e03"},"\u5fae\u6587"),r.a.createElement(j.a,{dataSource:this.state.dataSource,renderRow:function(t,n,a){var c=t;return r.a.createElement("div",{key:a,style:{padding:"0 15px"}},r.a.createElement(k.a,{full:!0},r.a.createElement(k.a.Header,{title:c.author,thumb:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",extra:r.a.createElement("span",{style:{fontSize:"14px"}},R()(R()(c.time).valueOf()+288e5).format("YYYY-MM-DD HH:mm"))}),r.a.createElement(k.a.Body,null,r.a.createElement(w.a,{size:"xs"}),r.a.createElement("div",{className:"item-content"},c.content),r.a.createElement(w.a,{size:"lg"}),c.attachtype?r.a.createElement("div",{className:"item-attach"},e.renderAttachment(c.attachtype,c.attachment)):"",r.a.createElement(w.a,{size:"lg"}),r.a.createElement(v.a,{style:{color:"rgba(0,0,0,.45)",fontSize:"14px"}},r.a.createElement(v.a.Item,null,r.a.createElement(A,{type:"icon-money",text:parseFloat(c.balance).toFixed(2)})),r.a.createElement(v.a.Item,null,r.a.createElement(A,{type:"icon-dianzan",text:c.like_num,onClick:function(){console.log("like:"+c.id)}})),r.a.createElement(v.a.Item,null,r.a.createElement(A,{type:"icon-comment",text:c.comment_num,onClick:function(){console.log("comment:"+c.id)}}))))))},renderSeparator:function(e,t){return r.a.createElement("div",{key:t,style:{backgroundColor:"#F5F5F9",height:8,borderTop:"1px solid #ECECED",borderBottom:"1px solid #ECECED"}})},renderFooter:function(){return r.a.createElement("div",{style:{padding:10,textAlign:"center"}},e.state.isLoading?"\u52a0\u8f7d\u4e2d...":"\u52a0\u8f7d\u5b8c\u6210")},style:{height:document.documentElement.clientHeight},pullToRefresh:r.a.createElement(p.a,{refreshing:this.state.refreshing,onRefresh:this.onRefresh}),onEndReached:this.onEndReached,pageSize:5}))}}]),t}(a.Component),U=n(1207),X=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isConnected:!1,info:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isConnected:U.isConnected()}),U.getEosBalance({account:"weiwendapps2",contract:"weiwentoken2",symbol:"WEI"}).then(function(t){e.setState({info:t})})}},{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(E.a,{mode:"dark"},"\u6d88\u606f"),r.a.createElement("div",null,"isConnected: ",this.state.isConnected),r.a.createElement("div",null,"info: ",this.state.info))}}]),t}(a.Component),Z=(n(1216),n(277)),V=n.n(Z),q=n(173),G=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).displayLoginModal=function(e){var t=n.props.ual,a=t.showModal,r=t.hideModal;e?a():r()},n.login=function(){return n.displayLoginModal(!0)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.ual.logout;return r.a.createElement(a.Fragment,null,r.a.createElement(E.a,{mode:"dark"},"\u6211\u7684"),r.a.createElement(V.a,{onClick:this.login},"Login"),r.a.createElement(V.a,{onClick:e},"Logout"))}}]),t}(a.Component),Q=Object(q.withUAL)(G),$=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={selectedTab:"home"},n.createTabItem=function(e,t,a,c,o){var i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return r.a.createElement(s.a.Item,{title:e,key:t,icon:r.a.createElement("i",{class:"iconfont "+a}),selectedIcon:r.a.createElement("i",{class:"iconfont "+c}),selected:n.state.selectedTab===t,onPress:function(){n.setState({selectedTab:t})},badge:i},r.a.createElement("div",{style:{height:document.documentElement.clientHeight-50}},o))},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(s.a,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white"},this.createTabItem("\u9996\u9875","home","icon-home","icon-home1",r.a.createElement(K,null)),this.createTabItem("\u6d88\u606f","msg","icon-xiaoxi-control","icon-xiaoxi-control1",r.a.createElement(X,null),1),this.createTabItem("\u6211\u7684","my","icon-geren","icon-geren-copy",r.a.createElement(Q,null)))}}]),t}(a.Component),ee={chainId:H,rpcEndpoints:[{protocol:M,host:_,port:B}]},te=[ee],ne=[new(n(529).TokenPocket)([ee])];o.a.render(r.a.createElement(q.UALProvider,{chains:te,authenticators:ne,appName:"\u5fae\u6587"},r.a.createElement($,null)),document.getElementById("root"))},176:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return c});var a=n(525),r=n.n(a),c=(n(275),r()("ipfs.infura.io","5001",{protocol:"https"}),function(e){return"https://ipfs.io/ipfs/"+e})}).call(this,n(2).Buffer)},389:function(e,t){},426:function(e,t){},467:function(e,t){},533:function(e,t,n){e.exports=n(1286)},594:function(e,t,n){},636:function(e,t){},638:function(e,t){},644:function(e,t){},646:function(e,t){},677:function(e,t){},678:function(e,t){},708:function(e,t){},921:function(e,t){},931:function(e,t){}},[[533,1,2]]]);
//# sourceMappingURL=main.a6e25c4b.chunk.js.map