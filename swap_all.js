const fs = require('fs'), path = require('path');

// Restore from original backup (before any swaps)
const bak = fs.existsSync('index.html.bak4') ? 'index.html.bak4' : 'index.html.bak3';
let h = fs.readFileSync(bak, 'utf8');
console.log('Restored from', bak, ':', (h.length/1024).toFixed(1), 'KB');

const dir = path.join(__dirname);
function b64(name) {
  const f = path.join(dir, name+'.png');
  if(!fs.existsSync(f)){console.log('MISSING:',f);process.exit(1);}
  return fs.readFileSync(f).toString('base64');
}

// Load all 16 cards
const C = {
  // Commodities: Gold=main, Silver, Oil, Brent
  cg: b64('com_gold'), cs: b64('com_silver'), co: b64('com_oil'), cb: b64('com_brent'),
  // Stocks: NVIDIA=main, Meta, Amazon, Apple
  sn: b64('stk_nvidia'), sm: b64('stk_meta'), sa: b64('stk_amazon'), sp: b64('stk_apple'),
  // Indices: NASDAQ=main, SP500, DAX, Dow
  in_: b64('idx_nasdaq'), is: b64('idx_sp500'), id: b64('idx_dax'), iw: b64('idx_dow'),
  // Crypto: Bitcoin=main, Ethereum, Solana, Tron
  cb_: b64('cry_btc'), ce: b64('cry_eth'), cs_: b64('cry_sol'), ct: b64('cry_tron'),
};
console.log('All 16 cards loaded');

// Build 4-card scene HTML (same layout as forex: ctop + cback1/2/3)
function fourCardScene(main, b1, b2, b3) {
  return `<div class="scene">
<div class="cu cback3"><img src="data:image/png;base64,${b3}" class="ci"></div>
<div class="cu cback2"><img src="data:image/png;base64,${b2}" class="ci"></div>
<div class="cu cback1"><img src="data:image/png;base64,${b1}" class="ci"></div>
<div class="cu ctop"><img src="data:image/png;base64,${main}" class="ci"></div>
</div>`;
}

// Replace scene div in a panel
function replaceScene(html, panelId, sceneHtml) {
  const s = html.indexOf(`id="p-${panelId}"`);
  if(s===-1){console.log('Panel not found:',panelId);return html;}
  
  // Find scene div start
  const sceneIdx = html.indexOf('class="scene"', s);
  if(sceneIdx===-1){console.log('Scene not found in',panelId);return html;}
  const sceneStart = html.lastIndexOf('<div', sceneIdx);
  
  // Find scene div end
  let i=html.indexOf('>',sceneStart)+1, depth=1;
  while(i<html.length&&depth>0){
    if(html[i]==='<'){
      const sl=html.slice(i);
      if(/^<div[\s>]/i.test(sl))depth++;
      else if(/^<\/div>/i.test(sl)){depth--;if(!depth)break;}
    }
    i++;
  }
  const sceneEnd = i+6;
  
  console.log(`✔ ${panelId}: scene replaced (${((sceneEnd-sceneStart)/1024).toFixed(0)}KB → ${(sceneHtml.length/1024).toFixed(0)}KB)`);
  return html.slice(0,sceneStart) + sceneHtml + html.slice(sceneEnd);
}

// Replace each panel's scene with 4-card layout
h = replaceScene(h, 'commodities', fourCardScene(C.cg, C.cs, C.co, C.cb));
h = replaceScene(h, 'stocks',      fourCardScene(C.sn, C.sm, C.sa, C.sp));
h = replaceScene(h, 'indices',     fourCardScene(C.in_, C.is, C.id, C.iw));
h = replaceScene(h, 'crypto',      fourCardScene(C.cb_, C.ce, C.cs_, C.ct));

fs.writeFileSync('index.html', h);
console.log('Done!', (h.length/1024).toFixed(1), 'KB');
