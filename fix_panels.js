const fs = require('fs');
let h = fs.readFileSync('index.html', 'utf8');
fs.writeFileSync('index.html.bak5', h);

// Remove ALL previous panel positioning/animation CSS we added
h = h.replace(/\n#p-commodities \.ctop[\s\S]*?(?=\n#|\n@|\n\/\*|<\/style>)/g, '');
h = h.replace(/\n#page-markets \.ctop[\s\S]*?(?=\n#|\n@|\n\/\*|<\/style>)/g, '');
h = h.replace(/\n#p-commodities \.cback[\s\S]*?(?=\n#|\n@|\n\/\*|<\/style>)/g, '');
h = h.replace(/\n@media\(max-width:960px\)\{#p-commodities[\s\S]*?\n\}/g, '');

// Add clean CSS - positions only (NO transform - let animation handle it)
const css = `
/* === 4 CFD PANELS - FOREX MIRROR LAYOUT === */
#p-commodities .ctop,#p-stocks .ctop,#p-indices .ctop,#p-crypto .ctop{
  left:50%;top:8%;z-index:5;animation:fTop 4.5s ease-in-out infinite}
#p-commodities .ctop .ci,#p-stocks .ctop .ci,#p-indices .ctop .ci,#p-crypto .ctop .ci{
  width:clamp(220px,26vw,370px);filter:drop-shadow(0 0 28px rgba(0,229,255,.55)) drop-shadow(0 0 60px rgba(0,180,216,.35))}
#p-commodities .cback1,#p-stocks .cback1,#p-indices .cback1,#p-crypto .cback1{
  left:2%;top:45%;z-index:3;animation:fA 5.8s ease-in-out infinite .3s}
#p-commodities .cback1 .ci,#p-stocks .cback1 .ci,#p-indices .cback1 .ci,#p-crypto .cback1 .ci{
  width:clamp(185px,22vw,310px);opacity:.94}
#p-commodities .cback2,#p-stocks .cback2,#p-indices .cback2,#p-crypto .cback2{
  left:42%;top:48%;z-index:2;animation:fB 6.5s ease-in-out infinite .9s}
#p-commodities .cback2 .ci,#p-stocks .cback2 .ci,#p-indices .cback2 .ci,#p-crypto .cback2 .ci{
  width:clamp(160px,19vw,270px);opacity:.87}
#p-commodities .cback3,#p-stocks .cback3,#p-indices .cback3,#p-crypto .cback3{
  right:0%;top:55%;z-index:1;animation:fC 7s ease-in-out infinite 1.5s}
#p-commodities .cback3 .ci,#p-stocks .cback3 .ci,#p-indices .cback3 .ci,#p-crypto .cback3 .ci{
  width:clamp(138px,16.5vw,235px);opacity:.80}

/* TABLET */
@media(max-width:960px){
  #p-commodities .ctop .ci,#p-stocks .ctop .ci,#p-indices .ctop .ci,#p-crypto .ctop .ci{width:clamp(160px,38vw,240px)}
  #p-commodities .cback1 .ci,#p-stocks .cback1 .ci,#p-indices .cback1 .ci,#p-crypto .cback1 .ci{width:clamp(135px,32vw,200px)}
  #p-commodities .cback2 .ci,#p-stocks .cback2 .ci,#p-indices .cback2 .ci,#p-crypto .cback2 .ci{width:clamp(115px,28vw,172px)}
  #p-commodities .cback3 .ci,#p-stocks .cback3 .ci,#p-indices .cback3 .ci,#p-crypto .cback3 .ci{width:clamp(98px,24vw,148px)}}

/* MOBILE */
@media(max-width:768px){
  #page-markets .markets-page>div{flex-direction:column!important}
  #page-markets .tabs{width:100%!important;flex-direction:row!important;overflow-x:auto!important;padding:0!important;border-right:none!important;border-bottom:1px solid rgba(0,229,255,.08)!important}
  #page-markets .tab{padding:13px 16px!important;border-left:none!important;border-bottom:2px solid transparent!important;font-size:11px!important;font-weight:400!important;white-space:nowrap!important}
  #page-markets .tab.on{font-size:12px!important;font-weight:700!important;border-left:none!important;border-bottom:2px solid var(--accent)!important}
  #page-markets .pbody{grid-template-columns:1fr!important;min-height:auto!important}
  #page-markets .scene{min-height:280px!important;overflow:visible!important}
  #page-markets .v12fg{padding:28px 20px!important}
  #page-markets .fbar{grid-template-columns:repeat(2,1fr)!important}
  #p-commodities .ctop .ci,#p-stocks .ctop .ci,#p-indices .ctop .ci,#p-crypto .ctop .ci{width:clamp(130px,35vw,190px)}
  #p-commodities .cback1 .ci,#p-stocks .cback1 .ci,#p-indices .cback1 .ci,#p-crypto .cback1 .ci{width:clamp(110px,29vw,160px)}
  #p-commodities .cback2 .ci,#p-stocks .cback2 .ci,#p-indices .cback2 .ci,#p-crypto .cback2 .ci{width:clamp(92px,25vw,135px)}
  #p-commodities .cback3 .ci,#p-stocks .cback3 .ci,#p-indices .cback3 .ci,#p-crypto .cback3 .ci{width:clamp(78px,21vw,115px)}}

/* SMALL MOBILE */
@media(max-width:480px){
  #page-markets .tab{font-size:9px!important;padding:11px 10px!important}
  #page-markets .scene{min-height:220px!important}}
`;

const si = h.lastIndexOf('</style>');
h = h.slice(0, si) + css + h.slice(si);
fs.writeFileSync('index.html', h);
console.log('Done!', (h.length/1024).toFixed(1), 'KB');
