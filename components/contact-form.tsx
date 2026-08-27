"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
export function ContactForm() {
  const [sent, setSent] = useState(false); const [errors, setErrors] = useState<Record<string,string>>({});
  function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); const fd = new FormData(e.currentTarget); const next: Record<string,string> = {}; ["name","email","subject","message"].forEach(k => { if(!String(fd.get(k)||"").trim()) next[k] = "This field is required."; }); const email=String(fd.get("email")||""); if(email && !/^\S+@\S+\.\S+$/.test(email)) next.email="Enter a valid email."; setErrors(next); if(!Object.keys(next).length) setSent(true); }
  if(sent) return <div className="form-success" role="status"><CheckCircle2/><h3>Your message is ready.</h3><p>This portfolio does not have an email provider connected yet. Please email Hisham directly at <a href="mailto:hishamsarkarkhan@gmail.com">hishamsarkarkhan@gmail.com</a>.</p><button onClick={()=>setSent(false)}>Write another message</button></div>;
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-grid">{[["name","Name *","Hisham Khan"],["email","Email *","you@company.com"],["company","Company / Organization","Organization name"],["subject","Subject *","Engineering opportunity"]].map(([id,label,placeholder])=><label key={id}>{label}<input id={id} name={id} type={id==="email"?"email":"text"} placeholder={placeholder} aria-invalid={!!errors[id]} />{errors[id]&&<span className="field-error">{errors[id]}</span>}</label>)}</div>
    <label>Message *<textarea name="message" rows={5} placeholder="Tell me about the opportunity or project…" aria-invalid={!!errors.message}/>{errors.message&&<span className="field-error">{errors.message}</span>}</label>
    <div className="form-bottom"><p>Submitting validates the form; delivery requires an email provider.</p><button className="button primary" type="submit">Send message <ArrowUpRight size={16}/></button></div>
  </form>;
}
