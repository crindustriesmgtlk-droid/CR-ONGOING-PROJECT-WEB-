const fs=require('fs');let h=fs.readFileSync('index.html','utf8');let s=h.indexOf('nav-logo-img');let s2=h.indexOf('src="',s)+5;let e=h.indexOf('"',s2);let logo=h.substring(s2,e);let fav='<link rel="icon" href="'+logo+'">';h=h.replace('<meta charset="UTF-8">','<meta charset="UTF-8">'+fav);fs.writeFileSync('index.html',h);console.log('DONE');

const fs=require('fs');let h=fs.readFileSync('index.html','utf8');let s=h.indexOf('nav-logo-img');let s2=h.indexOf('src="',s)+5;let e=h.indexOf('"',s2);let logo=h.substring(s2,e);let fav='<link rel="icon" href="'+logo+'">';h=h.replace('<meta charset="UTF
node fix.js
