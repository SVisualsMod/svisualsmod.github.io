import{r as wrap}from"./rolldown-runtime-C60lm6uB-beta20-rshift.js";
import{r as react}from"./framework-BgSIrAUN-beta20-rshift.js";
const React=wrap(react(),1);
const endpoint="https://svisuals-metrics-7k4p9x2.davi5780d.chatgpt.site/api/track";
function visitorId(){try{const key="svisuals_visitor_id";let id=localStorage.getItem(key);if(!id){id=crypto.randomUUID();localStorage.setItem(key,id);}return id;}catch{return "";}}
function send(event){
 const body=JSON.stringify({event,path:location.pathname,visitorId:visitorId(),eventId:crypto.randomUUID()});
 const fallback=()=>navigator.sendBeacon?.(endpoint,new Blob([body],{type:"text/plain;charset=UTF-8"}));
 void fetch(endpoint,{method:"POST",headers:{"Content-Type":"text/plain;charset=UTF-8"},body,keepalive:true,credentials:"omit"})
 .then(r=>{if(!r.ok)fallback();else if(event!=="visit")window.dispatchEvent(new Event("svisuals-download-recorded"));}).catch(fallback);
}
function Tracker(){
 React.useEffect(()=>{
  send("visit");
  let lastHref="",lastAt=0;
  const seen=new WeakSet();
  const onClick=event=>{
   if(!event.isTrusted||event.defaultPrevented||seen.has(event)||!(event.target instanceof Element))return;
   const a=event.target.closest("a[download]");if(!a)return;
   const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;
   const p=u.pathname.toLowerCase(),kind=p.endsWith(".jar")?"mod_download":p.endsWith(".svisuals")?"config_download":p.endsWith(".zip")?"bundle_download":null;
   if(!kind)return;const now=performance.now();if(lastHref===u.href&&now-lastAt<800)return;
   seen.add(event);lastHref=u.href;lastAt=now;send(kind);
  };
  document.addEventListener("click",onClick,true);
  return()=>document.removeEventListener("click",onClick,true);
 },[]);return null;
}
export{Tracker as default};
