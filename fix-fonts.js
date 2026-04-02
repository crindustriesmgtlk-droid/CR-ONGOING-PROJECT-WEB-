var fs=require("fs");
var c=fs.readFileSync("index.html","utf8");
var o='<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">';
var n='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@400;500;600&display=swap">';
c=c.split(o).join(n);
fs.writeFileSync("index.html",c);
console.log("Done - fonts optimised");
