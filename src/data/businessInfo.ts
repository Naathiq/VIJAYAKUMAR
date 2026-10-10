export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  details: string[];
  recommendedFor: string;
}

export interface ServiceArea {
  name: string;
  type: 'Primary Hub' | 'Nearby Area' | 'Extended Area';
  popularLandmarks?: string;
}

export const BUSINESS_INFO = {
  name: "MJ ELECTRICAL SERVICES",
  shortName: "MJ Electrical",
  owner: "Vijayakumar",
  phone: "+91 99405 08887",
  rawPhone: "+919940508887",
  cleanPhone: "9940508887",
  email: "vijaytrdcom@gmail.com",
  address: "68/331, Chittoor Road, Pachalam, Kochi, Keralam – 682018",
  street: "68/331, Chittoor Road",
  locality: "Pachalam",
  city: "Kochi",
  state: "Keralam",
  pincode: "682018",
  whatsappUrl: "https://wa.me/919940508887?text=Hello%20MJ%20Electrical%20Services,%20I%20need%20an%20electrician%20for:",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=68%2F331%2C+Chittoor+Road%2C+Pachalam%2C+Kochi%2C+Keralam+682018",
  mapsEmbedUrl: "https://maps.google.com/maps?q=68/331,+Chittoor+Road,+Pachalam,+Kochi,+Keralam+682018&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "electrical-maintenance",
    title: "Electrical Maintenance",
    iconName: "Wrench",
    shortDesc: "Comprehensive periodic inspection, servicing, and upkeep of residential and commercial electrical systems.",
    details: [
      "Switchboard and distribution board testing",
      "Wiring health inspection & socket testing",
      "Loose connection tightening to prevent sparks",
      "Preventive maintenance for homes and commercial shops"
    ],
    recommendedFor: "Homes, apartments, offices & retail shops"
  },
  {
    id: "lighting-installation-repair",
    title: "Lighting Installation & Repair",
    iconName: "Lightbulb",
    shortDesc: "Complete installation, replacement, and repair of modern LED lights, decorative fixtures, and utility illumination.",
    details: [
      "LED ceiling lights, strip lights, and panel fixtures",
      "Chandelier and decorative fixture mounting",
      "Outdoor, garden, and security floodlight installation",
      "Flickering light diagnostics and switch replacements"
    ],
    recommendedFor: "Living rooms, kitchens, commercial facades & exteriors"
  },
  {
    id: "power-electrical-works",
    title: "Power/Electrical Works",
    iconName: "Zap",
    shortDesc: "Heavy-duty electrical installations, circuit setup, and power line wiring for appliances and infrastructure.",
    details: [
      "AC, water heater (geyser), and motor pump wiring",
      "New electrical line laying & renovation rewiring",
      "MCB, RCCB, and main switchboard configuration",
      "Single-phase and three-phase power load arrangements"
    ],
    recommendedFor: "New constructions, renovations & heavy appliances"
  },
  {
    id: "emergency-electrical-service",
    title: "Emergency Electrical Service",
    iconName: "Flame",
    shortDesc: "Urgent on-call electrical assistance across Kochi for sudden power outages, burning odors, or hazard situations.",
    details: [
      "Sudden blackout and single-line failure resolution",
      "Burning switch or smoking socket intervention",
      "Tripping circuit breaker / MCB troubleshooting",
      "Rapid dispatch for critical electrical hazards"
    ],
    recommendedFor: "Immediate domestic or business power emergencies"
  },
  {
    id: "energy-efficiency-solutions",
    title: "Energy Efficiency Solutions",
    iconName: "Leaf",
    shortDesc: "Smart solutions to optimize energy usage, lower power bills, and upgrade to high-efficiency components.",
    details: [
      "Transition from high-wattage bulbs to energy-efficient LEDs",
      "Load balancing across phases to reduce heat and waste",
      "Timer and sensor switch installation for pumps/lights",
      "Recommendations to lower monthly electricity bills"
    ],
    recommendedFor: "Cost-conscious households & commercial spaces"
  },
  {
    id: "electrical-backups",
    title: "Electrical Backups",
    iconName: "BatteryCharging",
    shortDesc: "Reliable setup and wiring for inverters, battery backup systems, and generator changeover switches.",
    details: [
      "Home inverter and UPS wiring & setup",
      "Dedicated essential-load backup circuit segregation",
      "Manual and automatic generator changeover switches",
      "Battery terminal servicing and backup line testing"
    ],
    recommendedFor: "Homes and offices needing uninterrupted power supply"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Reliable Service",
    desc: "Dependable, transparent electrical service you can count on for your home or business.",
    icon: "ShieldCheck"
  },
  {
    title: "Quick Response",
    desc: "Prompt local arrival in Pachalam and neighboring Kochi localities when you need support.",
    icon: "Clock"
  },
  {
    title: "Professional Electrical Work",
    desc: "Strict adherence to electrical safety practices, proper wire gauge sizing, and secure connections.",
    icon: "Award"
  },
  {
    title: "Emergency Support",
    desc: "Ready on-call assistance for dangerous sparks, tripping breakers, or unexpected power cuts.",
    icon: "PhoneCall"
  },
  {
    title: "Energy-Efficient Solutions",
    desc: "Practical advice and implementations to optimize power usage and decrease unnecessary energy bills.",
    icon: "TrendingDown"
  },
  {
    title: "Customer-Focused Service",
    desc: "Direct communication with MJ Electrical Services, clear explanations, and respectful in-home service.",
    icon: "HeartHandshake"
  }
];

// Initial Service Areas list centered on Pachalam, Kochi
// Designed so new locations can be easily configured or expanded
export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Pachalam", type: "Primary Hub", popularLandmarks: "Chittoor Road, Pachalam Bridge, Railway gate" },
  { name: "Vaduthala", type: "Primary Hub", popularLandmarks: "Vaduthala Bridge, Don Bosco area" },
  { name: "Kaloor", type: "Nearby Area", popularLandmarks: "Kaloor Stadium, Deshabhimani Junction" },
  { name: "Ernakulam North", type: "Nearby Area", popularLandmarks: "North Railway Station, Town Hall" },
  { name: "Marine Drive", type: "Nearby Area", popularLandmarks: "Shanmugham Road, High Court Junction" },
  { name: "Edappally", type: "Nearby Area", popularLandmarks: "Toll Junction, LuLu area, Bypass" },
  { name: "Palarivattom", type: "Nearby Area", popularLandmarks: "Palarivattom Junction, Pipeline" },
  { name: "MG Road & Jos Junction", type: "Extended Area", popularLandmarks: "Central Kochi, Ravipuram" },
  { name: "Kadavanthra & Panampilly", type: "Extended Area", popularLandmarks: "Kadavanthra Junction, Giri Nagar" },
  { name: "Elamakkara & Ponekkara", type: "Nearby Area", popularLandmarks: "AIMS Road, Bhavans area" },
  { name: "Cheranalloor", type: "Extended Area", popularLandmarks: "Container Road, Chittoor South" },
  { name: "Fort Kochi & Mattancherry", type: "Extended Area", popularLandmarks: "West Kochi via prior booking" }
];

export const EMERGENCY_SAFETY_TIPS = [
  {
    step: "1",
    title: "Turn Off Main Power",
    text: "If safe to do so without touching exposed wiring or water, switch off your main distribution board (MCB / Isolator)."
  },
  {
    step: "2",
    title: "Do Not Touch Sparks or Water",
    text: "Never touch buzzing sockets, burning cords, or puddles near submerged electrical appliances."
  },
  {
    step: "3",
    title: "Call MJ Electrical Immediately",
    text: "Dial +91 99405 08887 directly for swift emergency guidance and on-site troubleshooting."
  }
];
