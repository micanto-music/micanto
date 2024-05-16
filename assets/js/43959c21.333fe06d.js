"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[957],{94010:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=i(74848),o=i(28453);const r={},l="Sync",s={id:"commands/sync",title:"Sync",description:"Getting your music into micanto is pretty simple. You just to tell micanto in the setup where to look for mp3 files.",source:"@site/docs/commands/sync.md",sourceDirName:"commands",slug:"/commands/sync",permalink:"/docs/commands/sync",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Spotify",permalink:"/docs/integrations/spotify"}},a={},c=[{value:"Sync via CLI (recommend)",id:"sync-via-cli-recommend",level:2},{value:"Sync automatically by watching your library folder",id:"sync-automatically-by-watching-your-library-folder",level:3},{value:"1. Install inotify-tools",id:"1-install-inotify-tools",level:4},{value:"2. Create a watcher script",id:"2-create-a-watcher-script",level:4},{value:"3. Run it in background",id:"3-run-it-in-background",level:4},{value:"Sync via Frontend (not recommend)",id:"sync-via-frontend-not-recommend",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"sync",children:"Sync"}),"\n",(0,t.jsx)(e.p,{children:"Getting your music into micanto is pretty simple. You just to tell micanto in the setup where to look for mp3 files.\nIt will search recursively through all folders inside that folder."}),"\n",(0,t.jsx)(e.h2,{id:"sync-via-cli-recommend",children:"Sync via CLI (recommend)"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["So go to your server via ssh and go to your document root. Mostly it is ",(0,t.jsx)(e.code,{children:"/var/www/html"})]}),"\n",(0,t.jsxs)(e.li,{children:["call the sync command with ",(0,t.jsx)(e.code,{children:"php artisan micanto:sync"})]}),"\n",(0,t.jsx)(e.li,{children:"This will take some time and your library should fill up"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"sync-automatically-by-watching-your-library-folder",children:"Sync automatically by watching your library folder"}),"\n",(0,t.jsx)(e.h4,{id:"1-install-inotify-tools",children:"1. Install inotify-tools"}),"\n",(0,t.jsx)(e.p,{children:"for ubuntu and debian it works like this:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"sudo apt-get install inotify-tools\n"})}),"\n",(0,t.jsx)(e.h4,{id:"2-create-a-watcher-script",children:"2. Create a watcher script"}),"\n",(0,t.jsxs)(e.p,{children:["Just create a file called ",(0,t.jsx)(e.code,{children:"watch"})," in micantos root directoy with the following content:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sh",children:'#!/bin/bash\n\nMUSIC_PATH=/var/www/music/\nPHP_BIN=/usr/bin/php\n\ninotifywait -rme move,close_write,delete --format "%e %w%f" MUSIC_PATH | while read file; do\n  $PHP_BIN artisan micanto:sync "${file}"\ndone\n'})}),"\n",(0,t.jsx)(e.h4,{id:"3-run-it-in-background",children:"3. Run it in background"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sh",children:"$ chmod +x watch\n$ ./watch\n[Ctrl+z]\n$ bg\n$ disown -h\n"})}),"\n",(0,t.jsx)(e.h2,{id:"sync-via-frontend-not-recommend",children:"Sync via Frontend (not recommend)"}),"\n",(0,t.jsx)(e.p,{children:'You can start a sync in the frontend by clicking the "update" icon on the right headerbar but:'}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsx)(e.p,{children:"The bigger your library is, the longer it takes. Starting a sync in the frontend is only recommend for small updates, not for initial imports!"})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}}}]);