"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4807],{16082:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=i(74848),o=i(28453);const n={sidebar_position:1},r="Spotify",a={id:"integrations/spotify",title:"Spotify",description:"Micanto uses the spotify api to get missing covers for albums and artist images.",source:"@site/docs/integrations/spotify.md",sourceDirName:"integrations",slug:"/integrations/spotify",permalink:"/docs/integrations/spotify",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Sync",permalink:"/docs/commands/sync"},next:{title:"Localization",permalink:"/docs/localization"}},l={},c=[{value:"How to setup",id:"how-to-setup",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"spotify",children:"Spotify"}),"\n",(0,s.jsx)(t.p,{children:"Micanto uses the spotify api to get missing covers for albums and artist images."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-setup",children:"How to setup"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Create a spotify developer account ",(0,s.jsx)(t.a,{href:"https://developer.spotify.com/",children:"https://developer.spotify.com/"})]}),"\n",(0,s.jsx)(t.li,{children:"Go to your dashboard and create an app. Give it a name and a description"}),"\n",(0,s.jsx)(t.li,{children:"After setting up you will get a Client ID and a Client Secret. You need both of them"}),"\n",(0,s.jsx)(t.li,{children:"Go to your webserver and edit the .env file in your document root. Mostly /var/www/html/.env"}),"\n",(0,s.jsx)(t.li,{children:"Add the credentials to your .env file with. e.g.:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"SPOTIFY_CLIENT_ID=yourclientid\nSPOTIFY_CLIENT_SECRET=yourclientsecret\n"})}),"\n",(0,s.jsx)(t.p,{children:"If you now resync your library or edit tracks/albums it will check if spotify api is enabled and if there is an image/cover missing and will try to get it via the spotify api."})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);