(window["webpackJsonpnra-calc"]=window["webpackJsonpnra-calc"]||[]).push([[0],{238:function(e,t,a){e.exports=a(406)},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(204),i=(a(245),a(25)),o=a(27),s=a(26),c=a(28),m=(a(246),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return r.a.createElement("header",{className:"AppHeader"},r.a.createElement("h1",null,a.props.children))},a}return Object(c.a)(t,e),t}(r.a.Component)),u=(a(247),a(248),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).render=function(){return r.a.createElement("footer",{className:"AppFooter"},r.a.createElement("p",null,a.props.children))},a}return Object(c.a)(t,e),t}(r.a.Component)),h=a(30),p=a(16),v=(a(249),a(424)),g=a(219),d=a(416),f=a(421),b=a(104),E=a(67),y=a(418),C=function(e,t){return e/1e3*t-44},O=function(e,t,a){var n=w.get(a),r=n.millRateHigh,l=n.millRateLow,i=n.millRateAvg,o=n.incentiveYears;return{estHigh:k(e,t,r,o),estLow:k(e,t,l,o),estAverage:k(e,t,i,o)}},k=function(e,t,a,n){var r=C(.115*e,a),l=.05*(t-e),i=C(.115*(e+l),a),o=.115*(t-l)/1e3*a;return{incentiveYears:n,currentTaxes:r,newTaxes:i,incrementalTaxSavings:o,payPerYear:i,savePerYear:o,savings:o*n}},w=new Map([["Area 1",{millRateLow:166.699688,millRateHigh:184.882947,millRateAvg:168.0502949,incentiveYears:10}],["Area 2 East",{millRateLow:151.970885,millRateHigh:187.634256,millRateAvg:168.6046749,incentiveYears:10}],["Area 2 East - State Avenue Corridor",{millRateLow:166.699688,millRateHigh:172.831745,millRateAvg:171.7744938,incentiveYears:10}],["Area 2 West",{millRateLow:166.699688,millRateHigh:176.91593,millRateAvg:166.7490233,incentiveYears:10}],["Area 3",{millRateLow:172.760032,millRateHigh:180.7673,millRateAvg:172.8878387,incentiveYears:10}],["Area 4",{millRateLow:166.699688,millRateHigh:176.931593,millRateAvg:174.3241988,incentiveYears:10}],["Bonner Springs Zone 3",{millRateLow:166.87731,millRateHigh:166.87731,millRateAvg:166.87731,incentiveYears:10}],["Bonner Springs Zone 4",{millRateLow:166.87731,millRateHigh:180.76073,millRateAvg:166.8845297,incentiveYears:10}],["Edwardsville",{millRateLow:166.87731,millRateHigh:180.76073,millRateAvg:180.6365491,incentiveYears:10}]]),A=a(417),j=a(143),R=a.n(j),S=a(205),Y=a(419),z=a(425),H=a(422),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).getAreaFromClick=function(e){a.props.setZoneFromMap(e.layer.feature.properties.Name),a.setState({selection:e.layer.feature}),a.handleHighlight()},a.render=function(){return r.a.createElement(Y.a,{style:{width:"100%"},center:a.state.position,zoom:a.state.zoom,doubleClickZoom:!1},r.a.createElement(z.a,{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(H.a,{key:a.state.polygons,data:a.state.polygons,onClick:a.getAreaFromClick,style:{color:"green"}}),a.state.highlight&&r.a.createElement(H.a,{key:a.state.selection,data:a.state.selection,style:{color:"yellow"}}))},a.state={polygons:[],position:[39.1155,-94.7478],zoom:11,selection:[],highlight:!1},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"handleHighlight",value:function(){!0===this.state.highlight?this.setState({highlight:!1}):this.setState({highlight:!0})}},{key:"componentDidMount",value:function(){var e=Object(S.a)(R.a.mark(function e(){var t,a;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opendata.arcgis.com/datasets/adb3297a0cb14d32b0274aaffa469538_0.geojson");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({polygons:a}),console.log(this.state.polygons);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(r.a.Component),I={textAlign:"center",marginBottom:"1em"},T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleOpen=function(){a.setState({modalOpen:!0})},a.handleClose=function(){a.setState({modalOpen:!1})},a.state={modalOpen:!1},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:I},r.a.createElement(A.a,{trigger:r.a.createElement(y.a,{fluid:!0,size:"large",onClick:this.handleOpen,color:this.props.zone?this.props.successColor:void 0},this.props.zone?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{name:"checkmark"})," Zone is set: ",this.props.zone):this.props.message),open:this.state.modalOpen,onClose:this.handleClose},r.a.createElement(A.a.Header,null,this.props.message),r.a.createElement(A.a.Content,{image:!0},r.a.createElement(x,{setZoneFromMap:this.props.setZoneFromMap})),this.props.zone&&r.a.createElement(A.a.Actions,null,r.a.createElement(y.a,{primary:!0,fluid:!0,size:"large",onClick:this.handleClose},r.a.createElement(E.a,{name:"checkmark"}),"Done"))))}}]),t}(r.a.Component),F=[{key:"s",text:"Single-Family",value:"single"},{key:"m",text:"Multi-Family",value:"multi"},{key:"oh",text:"Other",value:"other"}],L=[{key:"c",text:"New Construction",value:"construction"},{key:"r",text:"Rehabilitation",value:"rehabilitation"},{key:"oi",text:"Other",value:"other"}];function $(e){var t=e.toString().replace(/,*\$*/g,"");return parseInt(Math.floor(t))}function P(e){return e.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}var N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleCurrent=function(e){a.setState({current:$(e.target.value)})},a.handleImprovements=function(e){a.setState({afterImprovements:$(e.target.value)})},a.handleZone=function(e){a.setState({zone:$(e.target.value)})},a.setZoneFromMap=function(e){a.setState({zone:e})},a.render=function(){return r.a.createElement(v.a,{textAlign:"left",className:"NRACalculator"},r.a.createElement(g.a,null,r.a.createElement(d.a,{size:"large"},r.a.createElement(f.a,{stacked:!0},r.a.createElement(d.a.Input,{label:"Current Value",labelPosition:"left",placeholder:"Current Value",onChange:a.handleCurrent},r.a.createElement(b.a,null,"$"),r.a.createElement("input",null)),r.a.createElement(d.a.Input,{label:"Est. Value After Improvements",labelPosition:"left",placeholder:"Est. Value After Improvements",onChange:a.handleImprovements},r.a.createElement(b.a,null,"$"),r.a.createElement("input",null)),r.a.createElement(d.a.Select,{fluid:!0,label:"Home Type",options:F,placeholder:"Home Type"}),r.a.createElement(d.a.Select,{fluid:!0,label:"Improvement Type",options:L,placeholder:"Improvement Type"}),r.a.createElement(T,{setZoneFromMap:a.setZoneFromMap,message:r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{name:"map"})," Select Your Zone"),successColor:"green",zone:a.state.zone}),r.a.createElement(y.a,{color:"blue",fluid:!0,size:"large",onClick:a.handleSubmit},r.a.createElement(E.a,{name:"calculator"}),"Calculate Rebate"),a.state.estimates&&r.a.createElement(f.a,{basic:!0,textAlign:"center"},r.a.createElement("p",null,"These estimates provide a range depending on the mill rate, which vary within each zone."),r.a.createElement("p",null,r.a.createElement("b",null,"Pay Per Year:")," $",P(a.state.estimates.estLow.payPerYear)," - $",P(a.state.estimates.estHigh.payPerYear),", Avg: $",P(a.state.estimates.estAverage.payPerYear)),r.a.createElement("p",null,r.a.createElement("b",null,"Savings Per Year:")," $",P(a.state.estimates.estLow.savePerYear)," - $",P(a.state.estimates.estHigh.savePerYear),", Avg: $",P(a.state.estimates.estAverage.savePerYear)),r.a.createElement("p",null,r.a.createElement("b",null,a.state.estimates.estAverage.incentiveYears," Year Savings:")," $",P(a.state.estimates.estLow.savings)," - $",P(a.state.estimates.estHigh.savings),", Avg: $",P(a.state.estimates.estAverage.savings)))))))},a.state={current:"",afterImprovements:"",zone:"",estimates:""},a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(){this.state.current&&this.state.afterImprovements&&this.state.zone&&(this.setState({estimates:O(this.state.current,this.state.afterImprovements,this.state.zone)}),console.log(this.state.estimates))}}]),t}(r.a.Component),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,a=t.activeTab,n=t.label,l="tab-list-item";return a===n&&(l+=" tab-list-active"),r.a.createElement("li",{className:l,onClick:e},n)}}]),t}(n.Component),M=(a(405),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(c.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,a=this.state.activeTab;return r.a.createElement("div",{className:"tabs"},r.a.createElement("ol",{className:"tab-list"},t.map(function(t){var n=t.props.label;return r.a.createElement(Z,{activeTab:a,key:n,label:n,onClick:e})})),r.a.createElement("div",{className:"tab-content"},t.map(function(e){if(e.props.label===a)return e.props.children})))}}]),t}(n.Component));var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null,"Neighborhood Revitalization Act Calculator"),r.a.createElement(M,null,r.a.createElement("div",{label:"Calculator"},r.a.createElement("p",null,"This is an effort by the Unified Government of Wyandotte County and Kansas City, Kansas to promote revitalization of designated areas through tax incentives on new construction and improvements. Start below to estimate your potential tax incentive."),r.a.createElement(N,null)),r.a.createElement("div",{label:"Resources"},"Helpful links to redirect users to additional material, application forms, etc."),r.a.createElement("div",{label:"Contact"},"Contact information")),r.a.createElement(u,null,"Created in partnership with ",r.a.createElement("a",{href:"https://codeforkc.org"},"Code for KC"),r.a.createElement("br",null),"Contribute code on ",r.a.createElement("a",{href:"https://github.com/codeforkansascity/nra_calc"},"Github")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(l.render)(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[238,1,2]]]);
//# sourceMappingURL=main.e4098236.chunk.js.map