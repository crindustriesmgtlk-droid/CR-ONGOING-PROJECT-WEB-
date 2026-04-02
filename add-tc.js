var fs=require("fs");
var c=fs.readFileSync("index.html","utf8");
var q='"';
var sq="'";
var modal="<div id="+q+"tc-modal"+q+" style="+q+"display:none;position:fixed;inset:0;z-index:9999;background:rgba(2,9,18,.95);overflow-y:auto;padding:40px 20px;"+q+">"
+"<div style="+q+"max-width:760px;margin:0 auto;background:rgba(10,20,40,.98);border:1px solid rgba(0,229,255,.2);border-radius:12px;padding:40px;"+q+">"
+"<div style="+q+"display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;"+q+">"
+"<h2 style="+q+"font-family:Orbitron,monospace;font-size:16px;font-weight:700;color:#fff;"+q+">TERMS AND CONDITIONS</h2>"
+"<button onclick="+q+"document.getElementById("+sq+"tc-modal"+sq+").style.display="+sq+"none"+sq+q+" style="+q+"background:transparent;border:1px solid rgba(0,229,255,.3);color:#00e5ff;padding:6px 14px;border-radius:4px;cursor:pointer;"+q+">CLOSE</button>"
+"</div>"
+"<p style="+q+"font-size:10px;color:rgba(207,216,220,.4);margin-bottom:18px;"+q+">Last updated: April 2026 - CR Industries</p>"
+"<div style="+q+"margin-bottom:16px;padding:16px;background:rgba(239,83,80,.06);border:1px solid rgba(239,83,80,.2);border-radius:8px;"+q+">"
+"<h3 style="+q+"font-size:12px;font-weight:700;color:#ef5350;margin-bottom:8px;"+q+">RISK DISCLOSURE</h3>"
+"<p style="+q+"font-size:11px;color:rgba(207,216,220,.75);line-height:1.8;"+q+">Trading CFDs, forex, stocks, indices, cryptocurrencies and commodities involves a high level of risk. Your capital is at risk and you may lose more than your initial investment. Past performance is not indicative of future results. Only trade with money you can afford to lose.</p>"
+"</div>"
+"<div style="+q+"margin-bottom:16px;padding:16px;background:rgba(0,229,255,.04);border:1px solid rgba(0,229,255,.1);border-radius:8px;"+q+">"
+"<h3 style="+q+"font-size:12px;font-weight:700;color:#00e5ff;margin-bottom:8px;"+q+">1. ELIGIBILITY</h3>"
+"<p style="+q+"font-size:11px;color:rgba(207,216,220,.75);line-height:1.8;"+q+">You must be at least 18 years of age to register. All information provided must be accurate and complete. CR Industries reserves the right to suspend accounts found in violation of these terms.</p>"
+"</div>"
+"<div style="+q+"margin-bottom:16px;padding:16px;background:rgba(0,229,255,.04);border:1px solid rgba(0,229,255,.1);border-radius:8px;"+q+">"
+"<h3 style="+q+"font-size:12px;font-weight:700;color:#00e5ff;margin-bottom:8px;"+q+">2. KYC AGREEMENT</h3>"
+"<p style="+q+"font-size:11px;color:rgba(207,216,220,.75);line-height:1.8;"+q+">All users must complete identity verification before accessing full features or making withdrawals. Required: valid government-issued photo ID and proof of address dated within 3 months.</p>"
+"</div>"
+"<div style="+q+"margin-bottom:16px;padding:16px;background:rgba(0,229,255,.04);border:1px solid rgba(0,229,255,.1);border-radius:8px;"+q+">"
+"<h3 style="+q+"font-size:12px;font-weight:700;color:#00e5ff;margin-bottom:8px;"+q+">3. WITHDRAWAL POLICY</h3>"
+"<p style="+q+"font-size:11px;color:rgba(207,216,220,.75);line-height:1.8;"+q+">All withdrawals are subject to manual review. Processing time is 1 to 3 business days. Withdrawals are only processed to verified accounts in the account holder name.</p>"
+"</div>"
+"<div style="+q+"margin-bottom:16px;padding:16px;background:rgba(0,229,255,.04);border:1px solid rgba(0,229,255,.1);border-radius:8px;"+q+">"
+"<h3 style="+q+"font-size:12px;font-weight:700;color:#00e5ff;margin-bottom:8px;"+q+">4. PRIVACY AND DATA</h3>"
+"<p style="+q+"font-size:11px;color:rgba(207,216,220,.75);line-height:1.8;"+q+">CR Industries collects and processes data in accordance with applicable laws. Your data is used solely for account management and compliance. We do not sell your data to third parties.</p>"
+"</div>"
+"<div style="+q+"margin-bottom:16px;padding:16px;background:rgba(0,229,255,.04);border:1px solid rgba(0,229,255,.1);border-radius:8px;"+q+">"
+"<h3 style="+q+"font-size:12px;font-weight:700;color:#00e5ff;margin-bottom:8px;"+q+">5. GOVERNING LAW</h3>"
+"<p style="+q+"font-size:11px;color:rgba(207,216,220,.75);line-height:1.8;"+q+">These terms are governed by applicable financial services regulations. CR Industries is in Beta phase. By using this platform you accept these terms in full.</p>"
+"</div>"
+"<div style="+q+"text-align:center;margin-top:24px;"+q+">"
+"<button onclick="+q+"document.getElementById("+sq+"tc-modal"+sq+").style.display="+sq+"none"+sq+";var cb=document.getElementById("+sq+"tc-checkbox"+sq+");if(cb)cb.checked=true;"+q+" style="+q+"background:#00e5ff;color:#020912;border:none;padding:10px 30px;border-radius:4px;font-weight:700;font-size:11px;cursor:pointer;"+q+">I UNDERSTAND AND ACCEPT</button>"
+"</div>"
+"</div></div>";

var checkbox="<div style="+q+"margin-top:14px;display:flex;align-items:flex-start;gap:10px;"+q+">"
+"<input type="+q+"checkbox"+q+" id="+q+"tc-checkbox"+q+" required style="+q+"width:16px;height:16px;margin-top:2px;accent-color:#00e5ff;cursor:pointer;flex-shrink:0;"+q+"/>"
+"<label for="+q+"tc-checkbox"+q+" style="+q+"font-size:11px;color:rgba(207,216,220,.7);line-height:1.6;cursor:pointer;"+q+">I have read and agree to the <a onclick="+q+"document.getElementById("+sq+"tc-modal"+sq+").style.display="+sq+"block"+sq+q+" style="+q+"color:#00e5ff;text-decoration:underline;cursor:pointer;"+q+">Terms and Conditions</a> including Risk Disclosure, KYC and Withdrawal Policy. <span style="+q+"color:#ef5350;"+q+">*</span></label>"
+"</div>";

c=c.replace("</body>",modal+"</body>");
c=c.replace("</form>",checkbox+"</form>");
fs.writeFileSync("index.html",c);
console.log("Done - TC modal and checkbox added successfully");
