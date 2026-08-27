"use client";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, Download } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { navItems } from "../data/portfolio";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("hk-theme");
    const selected = saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.dataset.theme = selected;
    const frame = requestAnimationFrame(() => { setTheme(selected); setScrolled(scrollY > 30); });
    const onScroll = () => setScrolled(scrollY > 30); addEventListener("scroll", onScroll); return () => { cancelAnimationFrame(frame); removeEventListener("scroll", onScroll); };
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); addEventListener("keydown", key); return () => { document.body.style.overflow = ""; removeEventListener("keydown", key); }; }, [open]);
  const toggleTheme = () => { const next = theme === "dark" ? "light" : "dark"; setTheme(next); document.documentElement.dataset.theme = next; localStorage.setItem("hk-theme", next); };
  return <>
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <a className="monogram" href="#home" aria-label="Hisham Khan, home">HK</a>
      <nav aria-label="Primary navigation">{navItems.map(x => <a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</nav>
      <div className="nav-actions">
        <button className="cv-button is-disabled" type="button" disabled title="CV file has not been supplied yet"><Download size={14}/> <span>CV pending</span></button>
        <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? <Sun size={17}/> : <Moon size={17}/>}</button>
        <button className="icon-button menu-button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><Menu size={19}/></button>
      </div>
    </header>
    <AnimatePresence>{open && <motion.div className="mobile-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="mobile-menu-top"><span className="monogram">HK</span><button className="icon-button" onClick={() => setOpen(false)} aria-label="Close menu"><X/></button></div>
      <nav aria-label="Mobile navigation">{navItems.map((x,i) => <motion.a key={x} href={`#${x.toLowerCase()}`} onClick={() => setOpen(false)} initial={{ opacity:0,y:18 }} animate={{opacity:1,y:0}} transition={{delay:.05*i}}><small>0{i+1}</small>{x}</motion.a>)}</nav>
      <p>Electrical Engineering / Renewable Energy / Power Electronics</p>
    </motion.div>}</AnimatePresence>
  </>;
}
