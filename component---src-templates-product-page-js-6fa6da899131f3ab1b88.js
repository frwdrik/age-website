"use strict";(self.webpackChunkapahce_age_project=self.webpackChunkapahce_age_project||[]).push([[298],{5158:function(e,t,a){a.r(t),a.d(t,{ProductPageTemplate:function(){return b},default:function(){return y}});var i,n=a(7294),s=a(7059),l=a(1767),r=a(7436),c=function(e){var t=e.gridItems;return n.createElement("div",{className:"columns is-multiline"},t.map((function(e){return n.createElement("div",{key:e.text,className:"column is-6"},n.createElement("section",{className:"section"},n.createElement("div",{className:"has-text-centered"},n.createElement("div",{style:{width:"240px",display:"inline-block"}},n.createElement(r.Z,{imageInfo:e}))),n.createElement("p",null,e.text)))})))},m=new Uint8Array(16);function o(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(m)}var d=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var u=function(e){return"string"==typeof e&&d.test(e)},g=[],p=0;p<256;++p)g.push((p+256).toString(16).substr(1));var E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase();if(!u(a))throw TypeError("Stringified UUID is invalid");return a};var h=function(e,t,a){var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){a=a||0;for(var n=0;n<16;++n)t[a+n]=i[n];return t}return E(i)},f=function(e){var t=e.testimonials;return n.createElement("div",null,t.map((function(e){return n.createElement("article",{key:h(),className:"message"},n.createElement("div",{className:"message-body"},e.quote,n.createElement("br",null),n.createElement("cite",null," – ",e.author)))})))},v=function(e){var t=e.data;return n.createElement("div",{className:"columns"},t.map((function(e){return n.createElement("div",{key:e.plan,className:"column"},n.createElement("section",{className:"section"},n.createElement("h4",{className:"has-text-centered has-text-weight-semibold"},e.plan),n.createElement("h2",{className:"is-size-1 has-text-weight-bold has-text-primary has-text-centered"},"$",e.price),n.createElement("p",{className:"has-text-weight-semibold"},e.description),n.createElement("ul",null,e.items.map((function(e){return n.createElement("li",{key:e,className:"is-size-5"},e)})))))})))};function N(e){var t=e.height,a=void 0===t?400:t,i=e.img,l=e.title,r=e.subheading,c=e.imgPosition,m=void 0===c?"top left":c;return n.createElement(n.Fragment,null,n.createElement("div",{className:"margin-top-0",style:{display:"grid",alignItems:"center"}},null!=i&&i.url?n.createElement("img",{src:i,objectFit:"cover",objectPosition:m,style:{gridArea:"1/1",height:a,width:"100%"},aspectratio:3,alt:"",formats:["auto","webp","avif"]}):n.createElement(s.G,{image:i,objectFit:"cover",objectPosition:m,style:{gridArea:"1/1",maxHeight:a},layout:"fullWidth",aspectratio:3,alt:"",formats:["auto","webp","avif"]}),(l||r)&&n.createElement("div",{style:{gridArea:"1/1",position:"relative",placeItems:"center",display:"grid"}},l&&n.createElement("h1",{className:"has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen",style:{boxShadow:"rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",backgroundColor:"rgb(255, 68, 0)",color:"white",lineHeight:"1",padding:"0.25em"}},l),r&&n.createElement("h3",{className:"has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen",style:{boxShadow:"rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",backgroundColor:"rgb(255, 68, 0)",color:"white",lineHeight:"1",padding:"0.25rem",marginTop:"0.5rem"}},r))))}var b=function(e){var t=e.image,a=e.title,i=e.heading,l=e.description,m=e.intro,o=e.main,d=e.testimonials,u=e.fullImage,g=e.pricing,p=(0,s.c)(t)||t,E=(0,s.c)(u)||u;return n.createElement("div",{className:"content"},n.createElement(N,{img:p,title:a}),n.createElement("section",{className:"section section--gradient"},n.createElement("div",{className:"container"},n.createElement("div",{className:"section"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-7 is-offset-1"},n.createElement("h3",{className:"has-text-weight-semibold is-size-2"},i),n.createElement("p",null,l))),n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-10 is-offset-1"},n.createElement(c,{gridItems:m.blurbs}),n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-7"},n.createElement("h3",{className:"has-text-weight-semibold is-size-3"},o.heading),n.createElement("p",null,o.description))),n.createElement("div",{className:"tile is-ancestor"},n.createElement("div",{className:"tile is-vertical"},n.createElement("div",{className:"tile"},n.createElement("div",{className:"tile is-parent is-vertical"},n.createElement("article",{className:"tile is-child"},n.createElement(r.Z,{imageInfo:o.image1}))),n.createElement("div",{className:"tile is-parent"},n.createElement("article",{className:"tile is-child"},n.createElement(r.Z,{imageInfo:o.image2})))),n.createElement("div",{className:"tile is-parent"},n.createElement("article",{className:"tile is-child"},n.createElement(r.Z,{imageInfo:o.image3}))))),n.createElement(f,{testimonials:d})))))),n.createElement(N,{img:E,imgPosition:"bottom"}),n.createElement("section",{className:"section section--gradient"},n.createElement("div",{className:"container"},n.createElement("div",{className:"section"},n.createElement("div",{className:"columns"},n.createElement("div",{className:"column is-10 is-offset-1"},n.createElement("h2",{className:"has-text-weight-semibold is-size-2"},g.heading),n.createElement("p",{className:"is-size-5"},g.description),n.createElement(v,{data:g.plans})))))))},y=function(e){var t=e.data.markdownRemark.frontmatter;return n.createElement(l.Z,null,n.createElement(b,{image:t.image,title:t.title,heading:t.heading,description:t.description,intro:t.intro,main:t.main,testimonials:t.testimonials,fullImage:t.full_image,pricing:t.pricing}))}}}]);
//# sourceMappingURL=component---src-templates-product-page-js-6fa6da899131f3ab1b88.js.map