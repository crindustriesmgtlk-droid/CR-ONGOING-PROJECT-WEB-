var fs=require("fs");
var c=fs.readFileSync("index.html","utf8");

// Fix 1: Make Google Fonts non-blocking
var oldFont='<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">';
var newFont='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@400;500;600&display=swap" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@400;500;600&display=swap"></noscript>';
c=c.split(oldFont).join(newFont);

// Fix 2: Remove expensive backdrop-filter blur from nav
c=c.split('backdrop-filter:blur(24px);').join('');
c=c.split('backdrop-filter: blur(24px);').join('');

// Fix 3: Add font-display swap and defer canvas init
var oldBody='body{font-family:\'Inter\',sans-serif;background:var(--navy);color:var(--silver);overflow-x:hidden;}';
var newBody='body{font-family:\'Inter\',sans-serif;background:var(--navy);color:var(--silver);overflow-x:hidden;font-display:swap;}';
c=c.split(oldBody).join(newBody);

// Fix 4: Add critical CSS hint in head
var oldMeta='<meta name="viewport" content="width=device-width, initial-scale=1.0">';
var newMeta='<meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#020912"><style>body{background:#020912;color:#cfd8dc;font-family:Inter,sans-serif;}nav{position:fixed;top:0;left:0;right:0;z-index:500;background:rgba(2,9,18,.97);border-bottom:1px solid rgba(0,229,255,.15);}</style>';
c=c.split(oldMeta).join(newMeta);

fs.writeFileSync("index.html",c);
console.log("Done - performance optimised");
