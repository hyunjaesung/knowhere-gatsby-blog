(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{155:function(t,e,n){"use strict";n.d(e,"a",function(){return h}),n.d(e,"b",function(){return s});n(159);var a=n(164),i=n.n(a),c=n(165),o=n.n(c);o.a.overrideThemeStyles=function(){return{a:{color:"var(--textLink)"},hr:{background:"var(--hr)"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},'a.anchor svg[aria-hidden="true"]':{stroke:"var(--textLink)"},"p code":{fontSize:"1rem"},"h1 code, h2 code, h3 code, h4 code, h5 code, h6 code":{fontSize:"inherit"},"li code":{fontSize:"1rem"},blockquote:{color:"inherit",borderLeftColor:"inherit",opacity:"0.8"},"blockquote.translation":{fontSize:"1em"}}},delete o.a.googleFonts;var r=new i.a(o.a);var h=r.rhythm,s=r.scale},158:function(t,e,n){"use strict";n(18);var a=n(7),i=n.n(a),c=n(156),o=n.n(c),r=n(0),h=n.n(r),s=n(36),l=n(77),d=n.n(l),u=n(37),g=n.n(u);n(160);function m(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}var a=t.pageX;if(void 0!==a)return{x:a,y:t.pageY}}return{x:0,y:0}}var A=function(t){function e(e){var n;return(n=t.call(this,e)||this).handleClick=n.handleClick.bind(g()(g()(n))),n.handleTouchStart=n.handleTouchStart.bind(g()(g()(n))),n.handleTouchMove=n.handleTouchMove.bind(g()(g()(n))),n.handleTouchEnd=n.handleTouchEnd.bind(g()(g()(n))),n.handleTouchCancel=n.handleTouchCancel.bind(g()(g()(n))),n.handleFocus=n.handleFocus.bind(g()(g()(n))),n.handleBlur=n.handleBlur.bind(g()(g()(n))),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}i()(e,t);var n=e.prototype;return n.componentWillReceiveProps=function(t){"checked"in t&&(this.setState({checked:!!t.checked}),this.previouslyChecked=!!t.checked)},n.handleClick=function(t){var e=this.input;if(this.previouslyChecked=e.checked,t.target!==e&&!this.moved)return t.preventDefault(),e.focus(),void e.click();this.setState({checked:e.checked})},n.handleTouchStart=function(t){this.startX=m(t).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},n.handleTouchMove=function(t){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var e=m(t).x;this.state.checked&&e+15<this.startX?(this.setState({checked:!1}),this.startX=e):!this.state.checked&&e-15>this.startX&&(this.setState({checked:!0}),this.startX=e)}},n.handleTouchEnd=function(t){if(this.touchMoved){var e=this.input;t.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&e.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},n.handleTouchCancel=function(t){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},n.handleFocus=function(t){var e=this.props.onFocus;e&&e(t),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},n.handleBlur=function(t){var e=this.props.onBlur;e&&e(t),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},n.getIcon=function(t){var n=this.props.icons;return n?void 0===n[t]?e.defaultProps.icons[t]:n[t]:null},n.render=function(){var t=this,e=this.props,n=e.className,a=(e.icons,d()(e,["className","icons"])),i="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(n?" "+n:"");return h.a.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},h.a.createElement("div",{className:"react-toggle-track"},h.a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),h.a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),h.a.createElement("div",{className:"react-toggle-thumb"}),h.a.createElement("input",Object.assign({},a,{ref:function(e){t.input=e},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},e}(r.PureComponent),v=n(163),p=n.n(v),f=n(155),b=n(161),y=n.n(b),S=n(162),k=n.n(S),C=n(157);function I(){var t=o()(["\n  font-family: 'Righteous', cursive;\n"]);return I=function(){return t},t}function j(){var t=o()(["\n  font-family: 'Righteous', cursive;\n"]);return j=function(){return t},t}var G=C.a.h1(j()),x=(C.a.h3(I()),function(t){function e(){for(var e,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))||this).state={theme:null},e}i()(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){t.setState({theme:window.__theme})}},n.renderHeader=function(){var t=this.props,e=t.location,n=t.title;return"/"===e.pathname?h.a.createElement(G,{style:Object.assign({},Object(f.b)(.75),{marginBottom:0,marginTop:0})},h.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textTitle)"},to:"/"},n)):h.a.createElement(G,{style:Object.assign({},Object(f.b)(.75),{marginBottom:0,marginTop:0,lineHeight:"2.625rem"})},h.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"light"===this.state.theme?"#0984e3":"#a29bfe"},to:"/"},n))},n.render=function(){var t=this.props.children;return h.a.createElement("div",{style:{color:"var(--textNormal)",background:"var(--bg)",transition:"color 0.2s ease-out, background 0.2s ease-out",minHeight:"100vh"}},h.a.createElement(p.a,{meta:[{name:"theme-color",content:"light"===this.state.theme?"#ffa8c5":"#282c35"}]}),h.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(f.a)(24),padding:"2.625rem "+Object(f.a)(.75)}},h.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2.625rem"}},this.renderHeader(),null!==this.state.theme?h.a.createElement(A,{icons:{checked:h.a.createElement("img",{src:k.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}}),unchecked:h.a.createElement("img",{src:y.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}})},checked:"dark"===this.state.theme,onChange:function(t){return window.__setPreferredTheme(t.target.checked?"dark":"light")}}):h.a.createElement("div",{style:{height:"24px"}})),t))},e}(h.a.Component));e.a=x},159:function(t,e,n){},160:function(t,e,n){},161:function(t,e){t.exports="data:image/png;base64,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"},162:function(t,e){t.exports="data:image/png;base64,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"},174:function(t,e,n){"use strict";function a(t,e){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var a=[e,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=t).toLocaleDateString.apply(n,a)}n.d(e,"a",function(){return a})},175:function(t,e,n){"use strict";var a=n(7),i=n.n(a),c=n(156),o=n.n(c),r=n(0),h=n.n(r),s=n(181),l=n.n(s),d=n(155);function u(){var t=o()(["\n  font-size: 23px;\n  font-family: 'Just Another Hand', cursive;\n  font-weight: 500;\n"]);return u=function(){return t},t}var g=n(157).a.div(u()),m=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){return h.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2)}},h.a.createElement("img",{src:l.a,alt:"스티브성",style:{marginRight:Object(d.a)(.5),marginBottom:0,width:Object(d.a)(2),height:Object(d.a)(2),borderRadius:"50%"}}),h.a.createElement("div",{class:"blogby",style:{maxWidth:310}},h.a.createElement(g,null,"Blog by SteveSung")))},e}(h.a.Component);e.a=m},177:function(t,e,n){"use strict";n(18);var a=n(198),i=n(0),c=n.n(i),o=n(163),r=n.n(o),h=n(1),s=n.n(h),l=n(36),d="3236765318";function u(t){var e=t.meta,n=t.image,i=t.title,o=t.description,h=t.slug,s=t.lang,u=void 0===s?"en":s;return c.a.createElement(l.StaticQuery,{query:d,render:function(t){var a=t.site.siteMetadata,s=o||a.description,l=n?a.siteUrl+"/"+n:null,d=""+a.siteUrl+h;return c.a.createElement(r.a,Object.assign({htmlAttributes:{lang:u}},i?{titleTemplate:"%s — "+a.title,title:i}:{title:a.title+" by SteveSung"},{meta:[{name:"description",content:s},{property:"og:url",content:d},{property:"og:title",content:i||a.title},{property:"og:description",content:s},{name:"twitter:card",content:"summary"},{name:"twitter:creator"},{name:"twitter:title",content:i||a.title},{name:"twitter:description",content:s}].concat(l?[{property:"og:image",content:l},{name:"twitter:image",content:l}]:[]).concat(e)}))},data:a})}u.defaultProps={meta:[],title:"",slug:""},u.propTypes={description:s.a.string,image:s.a.string,meta:s.a.array,slug:s.a.string,title:s.a.string.isRequired},e.a=u},181:function(t,e,n){t.exports=n.p+"static/profile-pic-3b493fbdef8053588e23ce47cc712094.jpg"},198:function(t){t.exports={data:{site:{siteMetadata:{title:"Knowhere",author:"Steve Sung",description:"Something by SteveSung. I explain with words and code.",siteUrl:"https://overreacted.io",social:{twitter:"nothing"}}}}}}}]);
//# sourceMappingURL=2-dfda937195b62d80d449.js.map