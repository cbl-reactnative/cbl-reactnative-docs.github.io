"use strict";(self.webpackChunkcbl_reactnative_docs=self.webpackChunkcbl_reactnative_docs||[]).push([[608],{3169:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});a(7294);var r=a(3692),s=a(5999),i=a(1944),c=a(6040),n=a(2503),l=a(5893);function d(e){let{year:t,posts:a}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{as:"h3",id:t,children:t}),(0,l.jsx)("ul",{children:a.map((e=>(0,l.jsx)("li",{children:(0,l.jsxs)(r.Z,{to:e.metadata.permalink,children:[e.metadata.formattedDate," - ",e.metadata.title]})},e.metadata.date)))})]})}function h(e){let{years:t}=e;return(0,l.jsx)("section",{className:"margin-vert--lg",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,l.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,l.jsx)(d,{...e})},t)))})})})}function o(e){let{archive:t}=e;const a=(0,s.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,s.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),d=function(e){const t=e.reduce(((e,t)=>{const a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.d,{title:a,description:r}),(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("header",{className:"hero hero--primary",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(n.Z,{as:"h1",className:"hero__title",children:a}),(0,l.jsx)("p",{className:"hero__subtitle",children:r})]})}),(0,l.jsx)("main",{children:d.length>0&&(0,l.jsx)(h,{years:d})})]})]})}}}]);