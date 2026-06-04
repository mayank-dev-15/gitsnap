#!/usr/bin/env node
const { execSync } = require("child_process");
const cmd = process.argv[2];
function exec(c){try{return execSync(c,{timeout:10000}).toString().trim()}catch(e){return null}}
function snaps(){const l=exec("git log gitsnap-snapshots --oneline --grep=\"[gitsnap]\" 2>/dev/null");return l?l.split("
").filter(Boolean).map(line=>{const[h,...m]=line.split(" ");return{hash:h,msg:m.join(" ")}}):[]}
if(!cmd){console.log("Usage: node gitsnap.js snapshot|list|restore|clean");process.exit(0)}
if(cmd==="snapshot"){const msg=process.argv.slice(3).join(" ")||"snap "+new Date().toISOString();exec("git stash push -m gitsnap-auto 2>/dev/null");exec("git branch gitsnap-snapshots 2>/dev/null");exec("git add -A");exec("git commit -m \"[gitsnap] "+msg+"\" --no-verify 2>/dev/null");const h=exec("git rev-parse --short HEAD");console.log("✓ Snapshot: "+h+" - "+msg)}
else if(cmd==="list"){const s=snaps();if(!s.length){console.log("No snapshots");return}s.forEach((x,i)=>console.log((i+1)+". "+x.hash+"  "+x.msg.replace("[gitsnap]","").trim()))}
else if(cmd==="restore"){const id=process.argv[3];const s=snaps();const snap=s.find(x=>x.hash.startsWith(id))||s[parseInt(id)-1];if(!snap){console.error("Not found");process.exit(1)}exec("git checkout "+snap.hash+" -- .");exec("git add -A");exec("git commit -m \"[gitsnap] Restored to "+snap.hash+"\" --no-verify");console.log("✓ Restored to "+snap.hash)}
else if(cmd==="clean"){const keep=parseInt(process.argv[3])||5;const s=snaps();if(s.length<=keep)console.log(s.length+" snapshots (keeping "+keep+")");else{const rem=s.slice(keep);rem.forEach(x=>exec("git revert --no-commit "+x.hash+" 2>/dev/null"));console.log("✓ Cleaned "+rem.length+", "+keep+" remaining")}}