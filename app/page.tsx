import { ArrowDown, ArrowRight, ArrowUp, Award, Check, Download, Mail, MapPin, Phone, Zap } from "lucide-react";
import { ContactForm } from "../components/contact-form";
import { Navigation } from "../components/navigation";
import { Reveal } from "../components/reveal";
import { education, expertise, interestCards, professionalSkills, profile, projectFocus, projectSpecs, technicalSkills } from "../data/portfolio";

const Heading = ({ index, label, title }: { index:string; label:string; title:string }) => <div className="section-heading"><p>{index} / {label}</p><h2>{title}</h2></div>;

export default function Home() {
  const year = new Date().getFullYear();
  return <main>
    <Navigation />
    <section className="hero" id="home">
      <Reveal className="hero-copy">
        <div className="eyebrow"><i /> Electrical &amp; Electronic Engineer</div>
        <h1>Engineering energy.<br/><em>Powering possibilities.</em></h1>
        <div className="identity-row"><p className="name">{profile.name}</p><p className="disciplines">{profile.disciplines.map((x,i)=><span key={x}>{i>0&&<b>•</b>}{x}</span>)}</p></div>
        <p className="intro">Electrical and electronic engineering graduate focused on renewable-energy systems, power electronics and photovoltaic technologies. Interested in designing efficient, reliable and sustainable engineering solutions for real-world energy challenges.</p>
        <div className="hero-actions"><a className="button primary" href="#project">Explore my work <ArrowDown size={16}/></a><span className="button secondary is-disabled" title="CV file has not been supplied yet">CV available soon <Download size={15}/></span></div>
        <a className="availability" href="#contact"><i/> Available for Engineering Opportunities <ArrowRight size={14}/></a>
      </Reveal>
      <Reveal className="system-panel" delay={.15}>
        <div className="panel-top"><span>FYP SYSTEM CONCEPT</span><span className="status"><i/> ACTIVE</span></div>
        <div className="energy-core"><div className="orb"><span>1.5</span><small>kW</small></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="node solar">PV INPUT<small>DC ENERGY</small></span><span className="node output">AC OUTPUT<small>PURE SINE</small></span></div>
        <div className="wave" aria-label="Animated pure sine wave concept"><div className="wave-line">∿∿∿∿∿∿∿</div></div>
        <div className="telemetry"><span><small>CONVERSION</small>DC → AC</span><span><small>FIELD</small>POWER ELECTRONICS</span></div>
      </Reveal>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i/></a>
    </section>

    <section className="section about-section" id="about"><Reveal><Heading index="01" label="ABOUT" title="Engineering a sustainable future." /></Reveal>
      <div className="about-grid"><Reveal><p className="lead">Hisham Khan is an Electrical &amp; Electronic Engineering graduate from COMSATS University Islamabad, Abbottabad Campus, with academic and project exposure to renewable-energy systems, photovoltaic power conversion and power electronics.</p><p>His engineering interests center on efficient energy conversion, solar technologies, electrical systems and practical solutions that contribute to a more sustainable energy future.</p></Reveal>
        <div className="stat-grid">{[["1.5 kW","PV Inverter Project"],["03","Languages"],["Renewable","Energy Focus"],["COMSATS","Engineering Graduate"]].map((x,i)=><Reveal key={x[0]} delay={i*.07} className="stat-card"><strong>{x[0]}</strong><span>{x[1]}</span></Reveal>)}</div>
      </div>
    </section>

    <section className="section expertise-section" id="expertise"><Reveal><Heading index="02" label="EXPERTISE" title="Engineering capabilities." /></Reveal>
      <div className="card-grid">{expertise.map((item,i)=><Reveal key={item.title} delay={(i%3)*.06} className="expert-card"><div className="card-index">0{i+1}</div><item.icon/><h3>{item.title}</h3><p>{item.description}</p><span className="card-arrow">↗</span></Reveal>)}</div>
    </section>

    <section className="section project-section" id="project"><Reveal><Heading index="03" label="FEATURED PROJECT" title="Final Year Project." /></Reveal>
      <Reveal className="project-stage">
        <div className="project-copy"><p className="kicker">DESIGN &amp; DEVELOPMENT</p><h3>1.5 kW High-Efficiency Pure Sine-Wave <em>Photovoltaic Inverter</em></h3><p>The project explored the design and development of a 1.5 kW photovoltaic inverter intended to convert DC energy from a solar source into a clean AC pure sine-wave output.</p><p>The work provided practical exposure to renewable-energy conversion, inverter topology, power electronics, switching and control concepts, component considerations, electrical protection and system-level engineering trade-offs.</p></div>
        <div className="power-flow" aria-label="Solar photovoltaic energy conversion flow">{["SUNLIGHT","SOLAR PV","DC POWER","1.5 kW INVERTER","PURE SINE WAVE","AC OUTPUT"].map((x,i)=><div className="flow-step" key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong>{i<5&&<i/>}</div>)}</div>
      </Reveal>
      <div className="spec-grid">{projectSpecs.map((x,i)=><Reveal className="spec-card" key={x.label} delay={i*.05}><small>{x.label}</small><strong>{x.value}</strong></Reveal>)}</div>
      <div className="project-detail-grid"><Reveal className="focus-card"><p className="kicker">PROJECT FOCUS</p><ul>{projectFocus.map(x=><li key={x}><Check size={15}/>{x}</li>)}</ul></Reveal><Reveal className="scope-card"><div className="scope-top"><span>PURE SINE WAVE OUTPUT</span><small>PHOTOVOLTAIC INVERTER CONCEPT</small></div><div className="scope-grid"/><div className="scope-wave">∿∿∿∿∿∿∿∿</div><div className="scope-bottom"><span>OUTPUT SIGNAL</span><span className="status"><i/> CLEAN AC CONCEPT</span></div></Reveal></div>
    </section>

    <section className="section interests" id="energy"><Reveal><Heading index="04" label="ENGINEERING INTERESTS" title="Building around clean energy." /></Reveal><div className="interest-grid">{interestCards.map((x,i)=><Reveal className="interest-card" key={x.title} delay={i*.08}><div className="interest-icon"><x.icon/></div><small>{x.code}</small><h3>{x.title}</h3><p>{x.description}</p><div className="energy-line"/></Reveal>)}</div></section>

    <section className="section education-section" id="education"><Reveal><Heading index="05" label="EDUCATION" title="Academic journey." /></Reveal>
      <div className="timeline">{education.map((x,i)=><Reveal className="timeline-item" key={x.type}><div className="timeline-number">0{i+1}</div><div><p className="kicker">{x.type}</p><h3>{x.title}</h3><strong>{x.place}</strong>{x.campus&&<span>{x.campus}</span>}{x.description&&<p>{x.description}</p>}</div></Reveal>)}</div>
    </section>

    <section className="section skills-section" id="capabilities"><Reveal><Heading index="06" label="CAPABILITIES" title="Technical & professional skills." /></Reveal>
      <div className="skills-grid"><Reveal className="skill-panel"><div className="skill-title"><Zap/><span>Technical Capabilities</span></div><div className="skill-tags">{technicalSkills.map(x=><span key={x}>{x}</span>)}</div></Reveal><Reveal className="skill-panel"><div className="skill-title"><ArrowUp/><span>Professional Capabilities</span></div><div className="skill-tags">{professionalSkills.map(x=><span key={x}>{x}</span>)}</div></Reveal></div>
      <Reveal className="languages"><p className="kicker">LANGUAGES</p><div>{["Urdu","English","Pashto"].map((x,i)=><span key={x}><small>0{i+1}</small>{x}</span>)}</div></Reveal>
    </section>

    <section className="section certificate-section" id="certificates"><Reveal><Heading index="07" label="LEARNING & PARTICIPATION" title="Beyond the classroom." /></Reveal>
      <Reveal className="certificate-card"><div className="certificate-mark"><Award/><span>CERTIFICATE<br/>OF PARTICIPATION</span></div><div className="certificate-copy"><p className="kicker">11–12 DECEMBER 2025</p><h3>Artificial Intelligence Wire Free Sewer Vision Hackathon</h3><p>Internet Society SIG Artificial Intelligence <b>&amp;</b> COMSATS University Islamabad, Abbottabad Campus</p><small>Participation credential • Image preview will appear when the original certificate is added.</small></div><div className="certificate-seal"><span>HK</span><small>PARTICIPANT</small></div></Reveal>
    </section>

    <section className="career-section"><Reveal><p className="kicker">NEXT CHAPTER / ENGINEERING OPPORTUNITIES</p><h2>Ready to turn engineering knowledge into <em>real-world impact.</em></h2><p>Seeking an entry-level opportunity in electrical/electronic engineering, renewable energy, solar/PV systems, power electronics, technical operations or engineering sales where I can apply my academic foundation, expand my hands-on engineering capability and contribute to efficient and sustainable solutions.</p><a className="button primary" href="#contact">Let&apos;s work together <ArrowRight size={16}/></a></Reveal></section>

    <section className="section contact-section" id="contact"><Reveal><Heading index="08" label="CONTACT" title="Let’s build something meaningful." /></Reveal>
      <div className="contact-grid"><Reveal className="contact-info"><p>Open to conversations about graduate roles, engineering opportunities and work in renewable energy.</p>
        <a href={`mailto:${profile.email}`}><span><Mail/></span><div><small>EMAIL</small><strong>{profile.email}</strong></div></a><a href={`tel:${profile.phoneHref}`}><span><Phone/></span><div><small>PHONE</small><strong>{profile.phone}</strong></div></a><div className="contact-address"><span><MapPin/></span><div><small>LOCATION</small><strong>{profile.address.join(", ")}</strong></div></div>
        <div className="open-status"><i/> Available for Engineering Opportunities</div>
      </Reveal><Reveal><ContactForm/></Reveal></div>
    </section>
    <footer><div><a className="footer-logo" href="#home">HK</a><p><strong>Hisham Khan</strong><br/>Electrical &amp; Electronic Engineering<br/><span>Renewable Energy • Power Electronics • Solar/PV</span></p></div><div className="footer-links">{["Home","About","Project","Education","Contact"].map(x=><a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div><div className="footer-bottom"><span>© {year} Hisham Khan. All rights reserved.</span><span>Batkhela, Malakand, Pakistan</span><a href="#home">Back to top <ArrowUp size={14}/></a></div></footer>
  </main>;
}
