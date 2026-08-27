import { BatteryCharging, BriefcaseBusiness, Flame, ShieldCheck, Sun, Waves, Wind, Zap } from "lucide-react";

export const profile = {
  name: "Hisham Khan",
  title: "Electrical & Electronic Engineering Graduate",
  email: "hishamsarkarkhan@gmail.com",
  phone: "+92 344 5373988",
  phoneHref: "+923445373988",
  address: ["Mohallah Arab Khel", "Khar Batkhela", "District Malakand", "Pakistan"],
  disciplines: ["Renewable Energy", "Power Electronics", "Solar / PV Systems"],
  socials: [] as { label: string; href: string }[],
};

export const expertise = [
  { title: "Renewable Energy", description: "Understanding of renewable-energy technologies and sustainable electrical-power systems.", icon: Sun },
  { title: "Solar / PV Systems", description: "Academic exposure to photovoltaic generation and DC-to-AC power conversion.", icon: BatteryCharging },
  { title: "Power Electronics", description: "Inverter operation, switching concepts, power conversion and electronic components.", icon: Zap },
  { title: "Inverter Systems", description: "Final Year Project experience with a high-efficiency pure sine-wave PV inverter.", icon: Waves },
  { title: "Wind Power", description: "Academic understanding of wind-energy generation principles.", icon: Wind },
  { title: "Electrical Safety", description: "Exposure to electrical safety concepts and fire-alarm systems.", icon: ShieldCheck },
];

export const education = [
  { type: "University", title: "BS Electrical & Electronic Engineering", place: "COMSATS University Islamabad", campus: "Abbottabad Campus", description: "Engineering education focused on electrical and electronic systems with project exposure to renewable energy and power electronics." },
  { type: "F.Sc.", title: "Oxford Education Academy", place: "Batkhela", campus: "", description: "" },
  { type: "Matriculation", title: "Cambridge Public School & College", place: "Khar Batkhela", campus: "", description: "" },
];

export const technicalSkills = ["Renewable Energy", "Solar / PV Systems", "Power Electronics", "Inverter Fundamentals", "Wind Power Generation", "Fire Alarm Concepts", "Electrical Safety", "Technical Problem Solving"];
export const professionalSkills = ["Communication", "Marketing", "Business Skills", "Team Collaboration", "Presentation", "Client Interaction"];
export const projectFocus = ["Photovoltaic DC-to-AC conversion", "Pure sine-wave output", "Efficiency-oriented design", "Power electronics", "System integration", "Protection considerations"];
export const projectSpecs = [
  { label: "Rated Power", value: "1.5 kW" }, { label: "Application", value: "PV Energy Conversion" },
  { label: "Output", value: "Pure Sine Wave AC" }, { label: "Field", value: "Power Electronics" },
];
export const interestCards = [
  { title: "Solar Energy", code: "PV / DC", icon: Sun, description: "Photovoltaic generation and sustainable solar-electric systems." },
  { title: "Wind Power", code: "KINETIC / AC", icon: Wind, description: "Clean generation principles built around moving air and electrical machines." },
  { title: "Power Conversion", code: "DC → AC", icon: Zap, description: "Efficient control and conversion between electrical power forms." },
];

export const navItems = ["Home", "About", "Expertise", "Project", "Education", "Certificates", "Contact"];
export const quickIcons = { BriefcaseBusiness, Flame };
