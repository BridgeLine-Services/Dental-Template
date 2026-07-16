// ============================================================
// Central data source for the dental website template.
// Replace these mock values with your real practice data.
// ============================================================

export const siteConfig = {
  name: "Bright Smile Dental",
  tagline: "Your Smile, Our Passion",
  phone: "(555) 123-4567",
  emergencyPhone: "(555) 911-0000",
  email: "info@brightsmiledental.com",
  sms: "(555) 123-4567",
  address: {
    street: "1234 Wellness Boulevard, Suite 200",
    city: "Springfield",
    state: "CA",
    zip: "90210",
  },
  hours: [
    { day: "Monday", hours: "8:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "8:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "8:00 AM – 7:00 PM" },
    { day: "Thursday", hours: "8:00 AM – 5:00 PM" },
    { day: "Friday", hours: "8:00 AM – 3:00 PM" },
    { day: "Saturday", hours: "By appointment only" },
    { day: "Sunday", hours: "Closed" },
  ],
  emergencyHours: "24/7 emergency availability — call anytime",
  social: {
    facebook: "https://facebook.com/brightsmiledental",
    instagram: "https://instagram.com/brightsmiledental",
    twitter: "https://twitter.com/brightsmiledental",
    youtube: "https://youtube.com/@brightsmiledental",
    linkedin: "https://linkedin.com/company/brightsmiledental",
  },
  rating: 4.9,
  reviewCount: 487,
  yearsInBusiness: 25,
  patientsServed: "15,000+",
  languages: ["English", "Spanish", "Mandarin", "Vietnamese"],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.0335160845!2d-118.40036!3d34.0901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1234567890",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Dentists", href: "/dentists" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
];

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  image: string;
  benefits: string[];
  whatToExpect: string[];
  faqs: { q: string; a: string }[];
  startingPrice: string;
  duration: string;
}

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    shortDescription:
      "Comprehensive routine care including exams, cleanings, and cavity prevention.",
    longDescription:
      "Our general dentistry services are the foundation of a healthy smile. We provide thorough examinations, professional cleanings, digital X-rays, oral cancer screenings, and personalized hygiene education to keep your teeth and gums in optimal condition. Regular visits every six months help us catch problems early—when they're easier and less expensive to treat.",
    icon: "stethoscope",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    benefits: [
      "Early detection of cavities and gum disease",
      "Professional cleaning removes tartar build-up",
      "Oral cancer screenings at every visit",
      "Personalized home-care coaching",
    ],
    whatToExpect: [
      "Comprehensive oral examination (45–60 min)",
      "Digital X-rays (low-radiation, instant results)",
      "Professional cleaning and polishing",
      "Oral cancer screening",
      "Personalized treatment plan if needed",
    ],
    faqs: [
      {
        q: "How often should I visit the dentist?",
        a: "Most patients benefit from checkups every six months. If you have gum disease or other ongoing concerns, we may recommend more frequent visits.",
      },
      {
        q: "Are dental X-rays safe?",
        a: "Yes. We use digital X-rays which emit up to 80% less radiation than traditional film X-rays, and we always use lead aprons for additional safety.",
      },
    ],
    startingPrice: "$89",
    duration: "45–60 minutes",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDescription:
      "Transform your smile with veneers, bonding, contouring, and more.",
    longDescription:
      "Cosmetic dentistry combines art and science to create a smile you'll love. Whether you want a subtle improvement or a complete smile makeover, we offer veneers, dental bonding, tooth contouring, gum reshaping, and full-smire design consultations. We use digital smile previews so you can see your results before we begin.",
    icon: "sparkles",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
    benefits: [
      "Digital smile preview before treatment",
      "Customized smile design",
      "Natural-looking results",
      "Boost in confidence",
    ],
    whatToExpect: [
      "Smile design consultation (digital imaging)",
      "Custom treatment plan",
      "Preparation and temporaries (if needed)",
      "Final placement and polishing",
      "Follow-up to ensure perfect fit and comfort",
    ],
    faqs: [
      {
        q: "How long does a smile makeover take?",
        a: "Depending on the procedures involved, a full smile makeover can take anywhere from two visits over a couple of weeks to several months for complex cases.",
      },
      {
        q: "Will my cosmetic work look natural?",
        a: "Absolutely. We custom-shade every restoration to match your natural teeth and facial features for a seamless, beautiful result.",
      },
    ],
    startingPrice: "$250",
    duration: "Varies by treatment",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription:
      "Professional in-office and take-home whitening for a brighter smile.",
    longDescription:
      "Get a noticeably whiter smile in a single visit. Our professional whitening systems are stronger and more effective than over-the-counter products, lifting years of stains from coffee, tea, wine, and tobacco. Choose from in-office power whitening (results in about an hour) or custom take-home trays for gradual whitening on your schedule.",
    icon: "sun",
    image:
      "https://images.unsplash.com/photo-1601012810303-5a7c7088f9f1?w=800&q=80",
    benefits: [
      "Up to 8 shades whiter in one visit",
      "Safe for enamel",
      "Custom take-home trays available",
      "Long-lasting results with touch-ups",
    ],
    whatToExpect: [
      "Shade assessment and consultation (10 min)",
      "Protective barrier applied to gums",
      "Whitening gel applied (2–3 cycles)",
      "LED light activation",
      "Post-treatment shade comparison",
    ],
    faqs: [
      {
        q: "Will whitening make my teeth sensitive?",
        a: "Some patients experience mild, temporary sensitivity. We use desensitizing agents to minimize discomfort, and it typically resolves within 48 hours.",
      },
      {
        q: "How long do results last?",
        a: "With good oral hygiene and occasional touch-ups, results can last 1–2 years. Avoiding staining foods and drinks helps maintain your bright smile.",
      },
    ],
    startingPrice: "$199",
    duration: "60–90 minutes",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription:
      "Permanent tooth replacement that looks, feels, and functions like natural teeth.",
    longDescription:
      "Dental implants are the gold standard for tooth replacement. A titanium post is surgically placed in the jawbone, where it fuses with the bone to create a permanent anchor for a custom crown. Implants preserve bone health, prevent adjacent teeth from shifting, and restore full chewing power. We handle the entire process in-house, from 3D imaging and placement to the final restoration.",
    icon: "anchor",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7316153a8?w=800&q=80",
    benefits: [
      "Permanent, natural-feeling replacement",
      "Prevents bone loss",
      "Doesn't damage adjacent teeth",
      "Restores full chewing power",
    ],
    whatToExpect: [
      "3D CBCT scan and consultation",
      "Implant placement surgery (60–90 min)",
      "Healing period (3–6 months for osseointegration)",
      "Abutment placement",
      "Custom crown fabrication and fitting",
    ],
    faqs: [
      {
        q: "Are implants covered by insurance?",
        a: "Many insurance plans cover a portion of the implant procedure. We'll verify your benefits and provide a detailed cost breakdown before starting.",
      },
      {
        q: "How long do implants last?",
        a: "With proper care, dental implants can last a lifetime. The crown on top may need replacement after 10–15 years due to normal wear.",
      },
    ],
    startingPrice: "$1,800",
    duration: "3–6 months (full process)",
  },
  {
    slug: "invisalign",
    title: "Invisalign® Clear Aligners",
    shortDescription:
      "Straighten your teeth discreetly with custom, removable clear aligners.",
    longDescription:
      "Invisalign uses a series of custom-made, nearly invisible aligners to gradually move your teeth into their ideal position. Unlike traditional braces, the aligners are removable—so you can eat what you want, brush and floss normally, and keep your treatment private. We use 3D digital scanning to map your entire treatment plan before you start, so you'll see your future smile before you begin.",
    icon: "align-center",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e8f3a6f5f8?w=800&q=80",
    benefits: [
      "Nearly invisible aligners",
      "Removable for eating and cleaning",
      "Fewer office visits than braces",
      "Digital preview of your final smile",
    ],
    whatToExpect: [
      "Free consultation with 3D digital scan (no goopy impressions)",
      "Custom treatment plan with ClinCheck® software",
      "Series of aligners worn 20–22 hours/day",
      "Check-ups every 6–8 weeks",
      "Retainers after treatment to maintain results",
    ],
    faqs: [
      {
        q: "How much does Invisalign cost?",
        a: "Treatment typically ranges from $3,500 to $8,000 depending on complexity. We offer free consultations and flexible financing to fit your budget.",
      },
      {
        q: "How long does Invisalign treatment take?",
        a: "Most cases are completed in 12–18 months, though simpler cases can finish in as little as 6 months. Complex cases may take up to 24 months.",
      },
    ],
    startingPrice: "$3,500",
    duration: "6–18 months",
  },
  {
    slug: "veneers",
    title: "Porcelain Veneers",
    shortDescription:
      "Ultra-thin porcelain shells that transform chipped, stained, or misshapen teeth.",
    longDescription:
      "Veneers are wafer-thin, custom-made shells of high-grade porcelain bonded to the front of your teeth to create a flawless smile. They're ideal for correcting chips, cracks, gaps, discoloration, and minor misalignment. Our veneers are crafted by master ceramists to match the translucency and texture of natural teeth, giving you a bright, realistic result that can last 10–15+ years.",
    icon: "gem",
    image:
      "https://images.unsplash.com/photo-1581585099522-f6ac2efe1ff5?w=800&q=80",
    benefits: [
      "Natural, luminous appearance",
      "Stain-resistant porcelain",
      "Minimal tooth preparation",
      "Lasts 10–15+ years with proper care",
    ],
    whatToExpect: [
      "Smile design consultation",
      "Minimal tooth preparation (0.5mm)",
      "Digital impressions for the lab",
      "Temporary veneers while lab fabricates finals",
      "Bonding of final veneers (1–2 weeks later)",
    ],
    faqs: [
      {
        q: "Are veneers reversible?",
        a: "Traditional veneers involve removing a small amount of enamel, making them a permanent treatment. We also offer no-prep veneers for eligible candidates.",
      },
      {
        q: "Do veneers stain?",
        a: "Porcelain veneers are highly stain-resistant. However, the bonding material at the edges can stain, so we recommend limiting coffee, tea, and red wine.",
      },
    ],
    startingPrice: "$950",
    duration: "2 visits over 2–3 weeks",
  },
  {
    slug: "crowns",
    title: "Dental Crowns",
    shortDescription:
      "Custom caps that restore strength, shape, and appearance to damaged teeth.",
    longDescription:
      "A dental crown is a custom-fitted cap that covers a damaged or weakened tooth, restoring its strength, shape, and appearance. We offer porcelain, ceramic, and zirconia crowns that blend seamlessly with your natural teeth. Using CEREC technology, we can design, mill, and place a permanent crown in a single visit—no temporary crowns, no second appointment.",
    icon: "crown",
    image:
      "https://images.unsplash.com/photo-1609844445148-15f1a4a0a1d3?w=800&q=80",
    benefits: [
      "Same-day crowns available with CEREC",
      "Natural-looking, metal-free options",
      "Protects and strengthens weak teeth",
      "Long-lasting (10–15+ years)",
    ],
    whatToExpect: [
      "Tooth preparation and digital impression",
      "Crown designed on computer (CEREC)",
      "Milled in-office while you wait (~15 min)",
      "Bonded and polished the same day",
    ],
    faqs: [
      {
        q: "Does getting a crown hurt?",
        a: "The procedure is done under local anesthesia, so you should be comfortable throughout. Some mild sensitivity after is normal and resolves in a few days.",
      },
      {
        q: "How long does a crown last?",
        a: "With good oral hygiene and regular checkups, crowns typically last 10–15 years or longer. Avoid chewing hard objects like ice to prevent damage.",
      },
    ],
    startingPrice: "$850",
    duration: "1–2 visits",
  },
  {
    slug: "bridges",
    title: "Dental Bridges",
    shortDescription:
      "Replace one or more missing teeth with a fixed, natural-looking bridge.",
    longDescription:
      "A dental bridge literally 'bridges' the gap created by one or more missing teeth. It consists of crowns on the teeth on either side of the gap (abutment teeth) with a false tooth (pontic) in between. Bridges restore your ability to chew and speak properly, prevent remaining teeth from shifting, and maintain your facial shape. We offer traditional, cantilever, and Maryland bonded bridges.",
    icon: "bridge",
    image:
      "https://images.unsplash.com/photo-1581585099434-7a7c2f9e1e3d?w=800&q=80",
    benefits: [
      "Restores chewing and speaking",
      "Prevents teeth from shifting",
      "Maintains facial shape",
      "Fixed (non-removable) solution",
    ],
    whatToExpect: [
      "Preparation of abutment teeth",
      "Digital impression",
      "Temporary bridge placed",
      "Final bridge fitted and cemented (2–3 weeks later)",
    ],
    faqs: [
      {
        q: "How long does a bridge last?",
        a: "With proper care, dental bridges can last 10–15 years or more. Good oral hygiene and regular checkups are essential for longevity.",
      },
      {
        q: "How do I clean under a bridge?",
        a: "We'll show you how to use a floss threader or interdental brush to clean under the pontic. A water flosser is also very effective.",
      },
    ],
    startingPrice: "$1,200",
    duration: "2–3 visits over 3 weeks",
  },
  {
    slug: "root-canals",
    title: "Root Canals",
    shortDescription:
      "Save infected or severely damaged teeth with comfortable endodontic treatment.",
    longDescription:
      "Root canal therapy removes infected or inflamed pulp from inside the tooth, relieving pain and saving the natural tooth from extraction. Contrary to popular belief, modern root canals are no more uncomfortable than a routine filling. We use advanced rotary instruments and 3D imaging for precise, efficient treatment. After the procedure, the tooth is sealed and typically crowned for long-term protection.",
    icon: "activity",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    benefits: [
      "Relieves tooth pain quickly",
      "Saves the natural tooth",
      "Prevents infection from spreading",
      "Virtually painless with modern techniques",
    ],
    whatToExpect: [
      "Diagnosis with digital X-rays and pulp testing",
      "Local anesthesia for comfort",
      "Infected pulp removed, canals cleaned and shaped",
      "Canals filled with biocompatible material",
      "Temporary filling; crown placed at follow-up",
    ],
    faqs: [
      {
        q: "Is a root canal painful?",
        a: "With modern anesthesia and techniques, root canal treatment is virtually painless. Most patients report it feels similar to getting a filling. The relief from the toothache is often immediate.",
      },
      {
        q: "How long does recovery take?",
        a: "Most patients return to normal activities the next day. Mild sensitivity for a few days is normal and managed with over-the-counter pain relievers.",
      },
    ],
    startingPrice: "$750",
    duration: "1–2 visits, 60–90 min each",
  },
  {
    slug: "fillings",
    title: "Dental Fillings",
    shortDescription:
      "Tooth-colored composite fillings that repair cavities and blend seamlessly.",
    longDescription:
      "We use mercury-free, tooth-colored composite resin fillings that bond directly to your tooth structure and blend perfectly with your natural enamel. Composite fillings require less drilling than traditional amalgam fillings, preserve more healthy tooth, and provide a seamless, natural appearance. We also replace old, dark amalgam fillings with esthetic composite restorations.",
    icon: "puzzle",
    image:
      "https://images.unsplash.com/photo-1601012810303-5a7c7088f9f1?w=800&q=80",
    benefits: [
      "Tooth-colored, mercury-free",
      "Bonds to tooth for added strength",
      "Less drilling than amalgam",
      "Immediate results in one visit",
    ],
    whatToExpect: [
      "Local anesthesia for comfort",
      "Decay removed with gentle handpiece",
      "Tooth etched and bonding agent applied",
      "Composite resin layered and cured with light",
      "Shaped, polished, and bite checked",
    ],
    faqs: [
      {
        q: "Are composite fillings as durable as metal fillings?",
        a: "Yes. Modern composite resins are highly durable and can last 7–10+ years. They also bond to the tooth, which actually strengthens it.",
      },
      {
        q: "Can you replace my old silver fillings?",
        a: "Absolutely. We safely remove amalgam fillings using SMART protocol (Safe Mercury Amalgam Removal Technique) and replace them with tooth-colored composites.",
      },
    ],
    startingPrice: "$150",
    duration: "30–60 minutes",
  },
  {
    slug: "extractions",
    title: "Tooth Extractions",
    shortDescription:
      "Gentle removal of damaged or problematic teeth, including surgical extractions.",
    longDescription:
      "Sometimes a tooth can't be saved and needs to be removed. Our team performs both simple and surgical extractions with a focus on comfort and a smooth recovery. We offer socket preservation grafting to maintain bone for future implants, and provide detailed aftercare instructions. For anxious patients, we offer sedation options to make the experience as stress-free as possible.",
    icon: "scissors",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7316153a8?w=800&q=80",
    benefits: [
      "Gentle, comfortable techniques",
      "Sedation options available",
      "Socket preservation for future implants",
      "Detailed aftercare support",
    ],
    whatToExpect: [
      "X-rays and assessment",
      "Local anesthesia (or sedation if requested)",
      "Gentle tooth removal",
      "Gauze placed; aftercare instructions given",
      "Follow-up call next day",
    ],
    faqs: [
      {
        q: "How long does it take to recover from an extraction?",
        a: "Most patients recover in 5–7 days. Swelling peaks around day 2–3 and then subsides. We provide detailed aftercare instructions and a follow-up call.",
      },
      {
        q: "Will I have a gap after extraction?",
        a: "We discuss replacement options at your consultation—implants, bridges, or partial dentures—so you don't have a visible gap long-term.",
      },
    ],
    startingPrice: "$200",
    duration: "45–90 minutes",
  },
  {
    slug: "dentures",
    title: "Dentures",
    shortDescription:
      "Custom full and partial dentures for a confident, functional smile.",
    longDescription:
      "Modern dentures are more comfortable and natural-looking than ever. We offer full dentures, partial dentures, and implant-supported dentures (All-on-4®) for maximum stability. Each denture is custom-designed to fit your facial structure and skin tone for a natural appearance. Implant-supported options eliminate slipping and let you eat the foods you love with confidence.",
    icon: "smile",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
    benefits: [
      "Natural-looking, custom-designed",
      "Full, partial, and implant-supported options",
      "All-on-4® for permanent stability",
      "Restore chewing and speaking",
    ],
    whatToExpect: [
      "Comprehensive consultation and impressions",
      "Bite registration and try-in",
      "Final denture fabricated",
      "Delivery and adjustments",
      "Follow-up for comfort and fit",
    ],
    faqs: [
      {
        q: "How long do dentures last?",
        a: "Dentures typically last 5–10 years. Your jawbone changes over time, so relining or replacing may be needed for a continued proper fit.",
      },
      {
        q: "Are implant-supported dentures better?",
        a: "Implant-supported dentures offer superior stability, prevent bone loss, and let you eat harder foods. They're an excellent option for patients who want a more permanent solution.",
      },
    ],
    startingPrice: "$1,000",
    duration: "3–5 visits over 4–6 weeks",
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDescription:
      "Gentle, fun dental care for children from their first tooth through the teen years.",
    longDescription:
      "We love seeing kids! Our pediatric dental services are designed to make every visit positive and fun. From the first tooth onward, we provide gentle cleanings, fluoride treatments, sealants, and age-appropriate education. Our team is trained in behavior management techniques to help anxious children feel comfortable. We create a welcoming environment with games, prizes, and a kid-friendly approach that builds lifelong healthy habits.",
    icon: "baby",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e8f3a6f5f8?w=800&q=80",
    benefits: [
      "Kid-friendly, welcoming environment",
      "Sealants and fluoride for prevention",
      "Behavior management for anxious kids",
      "Builds positive dental habits for life",
    ],
    whatToExpect: [
      "Fun, welcoming check-in with prizes",
      "Gentle cleaning and fluoride treatment",
      "Digital X-rays (when appropriate)",
      "Sealants on permanent molars",
      "Parent education and home-care coaching",
    ],
    faqs: [
      {
        q: "When should my child first visit the dentist?",
        a: "The American Academy of Pediatric Dentistry recommends the first visit by the first birthday or when the first tooth appears—whichever comes first.",
      },
      {
        q: "How do you help anxious children?",
        a: "We use tell-show-do techniques, positive reinforcement, and a fun environment. For very anxious children, we offer mild sedation options. Our team is specially trained to make kids feel safe.",
      },
    ],
    startingPrice: "$75",
    duration: "30–45 minutes",
  },
  {
    slug: "emergency-dentistry",
    title: "Emergency Dentistry",
    shortDescription:
      "Same-day appointments for dental emergencies—pain, trauma, broken teeth, and more.",
    longDescription:
      "Dental emergencies don't wait, and neither do we. We reserve same-day appointments for emergencies and offer 24/7 phone guidance. Whether you have a severe toothache, a knocked-out tooth, a broken crown, or facial trauma, call us immediately. Quick action can mean the difference between saving and losing a tooth.",
    icon: "siren",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    benefits: [
      "Same-day emergency appointments",
      "24/7 phone guidance",
      "Quick action can save teeth",
      "Pain relief as fast as possible",
    ],
    whatToExpect: [
      "Call immediately—we'll triage over the phone",
      "Same-day appointment scheduled if needed",
      "Rapid assessment and pain relief",
      "Treatment: reimplantation, temporary repair, or extraction",
      "Follow-up appointment for definitive care",
    ],
    faqs: [
      {
        q: "What counts as a dental emergency?",
        a: "Severe toothache, knocked-out tooth, broken or chipped tooth with pain, lost filling or crown, dental abscess/swelling, or facial trauma. When in doubt, call us.",
      },
      {
        q: "What should I do if a tooth is knocked out?",
        a: "Pick up the tooth by the crown (not the root), gently rinse it, and try to reinsert it. If not, store it in milk or saliva and call us immediately. Time is critical—ideally within 30 minutes.",
      },
    ],
    startingPrice: "$125",
    duration: "Same-day",
  },
  {
    slug: "gum-disease-treatment",
    title: "Gum Disease Treatment",
    shortDescription:
      "Comprehensive periodontal care from scaling and root planing to maintenance.",
    longDescription:
      "Gum disease (periodontal disease) affects nearly half of adults and is the leading cause of tooth loss. We offer comprehensive periodontal treatment including deep cleaning (scaling and root planing), antibiotic therapy, laser treatment, and ongoing maintenance. Early-stage gum disease (gingivitis) is reversible; advanced periodontitis can be managed to prevent tooth loss and protect your overall health.",
    icon: "heart-pulse",
    image:
      "https://images.unsplash.com/photo-1601012810303-5a7c7088f9f1?w=800&q=80",
    benefits: [
      "Stops disease progression",
      "Prevents tooth loss",
      "Improves overall health",
      "Laser treatment options",
    ],
    whatToExpect: [
      "Comprehensive periodontal assessment",
      "Deep cleaning (scaling and root planing)",
      "Local antibiotic therapy if needed",
      "Re-evaluation after 4–6 weeks",
      "Periodic maintenance cleanings (3–4 months)",
    ],
    faqs: [
      {
        q: "Is gum disease linked to other health problems?",
        a: "Yes. Research links gum disease to heart disease, diabetes, stroke, and pregnancy complications. Treating gum disease improves your overall health.",
      },
      {
        q: "Can gum disease be cured?",
        a: "Early-stage gingivitis is reversible with treatment and good home care. Advanced periodontitis can't be cured but can be controlled to prevent further damage.",
      },
    ],
    startingPrice: "$250",
    duration: "2+ visits",
  },
  {
    slug: "sedation-dentistry",
    title: "Sedation Dentistry",
    shortDescription:
      "Relax comfortably through any procedure with nitrous oxide, oral, or IV sedation.",
    longDescription:
      "Dental anxiety is real, and we take it seriously. We offer three levels of sedation to help you relax: nitrous oxide (laughing gas) for mild anxiety, oral conscious sedation for moderate anxiety, and IV sedation for complex procedures or severe phobia. Sedation makes long procedures feel like minutes and helps patients who have avoided the dentist for years get the care they need.",
    icon: "moon",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7316153a8?w=800&q=80",
    benefits: [
      "Reduces anxiety and fear",
      "Makes long procedures feel short",
      "Multiple procedures in one visit",
      "Safe and closely monitored",
    ],
    whatToExpect: [
      "Sedation consultation and medical history review",
      "Appropriate sedation method selected",
      "Monitoring throughout the procedure",
      "Comfortable, relaxed experience",
      "Recovery with a companion (for oral/IV sedation)",
    ],
    faqs: [
      {
        q: "Is dental sedation safe?",
        a: "Yes. We carefully review your medical history and monitor vital signs throughout. Nitrous oxide is extremely safe and wears off quickly. Oral and IV sedation require a companion for the ride home.",
      },
      {
        q: "Will I be unconscious?",
        a: "No. With oral and IV sedation you're in a state of deep relaxation but still conscious and able to respond. Nitrous oxide produces a mild, pleasant feeling that wears off within minutes.",
      },
    ],
    startingPrice: "$100",
    duration: "Varies by procedure",
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    shortDescription:
      "In-house surgical procedures including extractions, implants, and bone grafting.",
    longDescription:
      "Our oral surgery services cover a wide range of procedures, from routine and surgical extractions to dental implant placement, bone grafting, sinus lifts, and biopsies. Having these procedures done in-house means continuity of care with a team you trust. We use 3D CBCT imaging for precise planning and offer sedation for comfort.",
    icon: "scalpel",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    benefits: [
      "In-house, no referral needed",
      "3D CBCT imaging for precision",
      "Sedation available for comfort",
      "Continuity of care with your dental team",
    ],
    whatToExpect: [
      "3D CBCT scan and surgical planning",
      "Sedation consultation if requested",
      "Surgical procedure",
      "Detailed aftercare instructions",
      "Follow-up to monitor healing",
    ],
    faqs: [
      {
        q: "Will I need to go to a different office for oral surgery?",
        a: "No. We perform most oral surgery procedures in-house, so you stay with the team you know and trust. Complex cases may be referred to a specialist.",
      },
      {
        q: "How painful is oral surgery?",
        a: "Procedures are performed under local anesthesia and sedation as needed. Post-operative discomfort is managed with prescribed or over-the-counter pain medication and typically subsides within a few days.",
      },
    ],
    startingPrice: "$300",
    duration: "Varies by procedure",
  },
  {
    slug: "wisdom-teeth-removal",
    title: "Wisdom Teeth Removal",
    shortDescription:
      "Comfortable extraction of wisdom teeth, including impacted and complex cases.",
    longDescription:
      "Wisdom teeth (third molars) typically emerge between ages 17–25 and often cause problems due to lack of space. We evaluate wisdom teeth with panoramic and 3D imaging, and recommend removal when they're impacted, causing pain, damaging adjacent teeth, or prone to infection. We offer sedation for a comfortable experience and provide detailed recovery guidance.",
    icon: "tooth",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7316153a8?w=800&q=80",
    benefits: [
      "3D imaging for precise planning",
      "Sedation for a comfortable experience",
      "Prevents future problems",
      "Detailed recovery guidance",
    ],
    whatToExpect: [
      "Panoramic and 3D CBCT evaluation",
      "Sedation consultation",
      "Extraction of wisdom teeth (typically all 4 at once)",
      "Recovery at home (3–5 days)",
      "Follow-up to confirm healing",
    ],
    faqs: [
      {
        q: "When should wisdom teeth be removed?",
        a: "Ideally between ages 16–20 when roots are still forming, making extraction easier and recovery faster. However, we evaluate each patient individually.",
      },
      {
        q: "How long is recovery?",
        a: "Most patients return to normal activities in 3–5 days. Swelling peaks at day 2–3. We provide ice packs, detailed instructions, and a follow-up call.",
      },
    ],
    startingPrice: "$250",
    duration: "45–90 minutes",
  },
  {
    slug: "preventive-care",
    title: "Preventive Care",
    shortDescription:
      "Proactive treatments and education to keep your smile healthy for life.",
    longDescription:
      "Prevention is the best dentistry. Our preventive care program includes regular cleanings, fluoride treatments, dental sealants, custom mouthguards, oral cancer screenings, and personalized home-care coaching. We believe that preventing problems is far better—and far less expensive—than treating them. Our team works with you to build healthy habits that last a lifetime.",
    icon: "shield",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    benefits: [
      "Prevents cavities and gum disease",
      "Saves money long-term",
      "Custom mouthguards for sports",
      "Builds lifelong healthy habits",
    ],
    whatToExpect: [
      "Comprehensive examination",
      "Professional cleaning and polishing",
      "Fluoride treatment and sealants (as needed)",
      "Oral cancer screening",
      "Custom home-care plan",
    ],
    faqs: [
      {
        q: "Are sealants just for kids?",
        a: "While commonly applied to children's molars, sealants benefit adults too—especially those with deep grooves in their teeth or high decay risk.",
      },
      {
        q: "Do I need a custom mouthguard?",
        a: "If you play sports or grind your teeth at night (bruxism), a custom mouthguard protects your teeth from injury or wear. Over-the-counter options don't fit as well or protect as effectively.",
      },
    ],
    startingPrice: "$89",
    duration: "45–60 minutes",
  },
];

export interface Dentist {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
  education: string[];
  experience: string;
  certifications: string[];
  languages: string[];
  expertise: string[];
  funFacts: string[];
  reviews: { author: string; rating: number; text: string; date: string }[];
}

export const dentists: Dentist[] = [
  {
    id: "1",
    name: "Dr. Sarah Mitchell",
    title: "DDS — Founder & Lead Cosmetic Dentist",
    photo: "https://i.pravatar.cc/400?img=45",
    bio: "Dr. Mitchell founded Bright Smile Dental in 2001 with a vision of compassionate, comprehensive dental care. She is a graduate of UCLA School of Dentistry and has pursued advanced training in cosmetic dentistry at the Las Vegas Institute. Her passion is creating beautiful, life-changing smile makeovers while ensuring every patient feels comfortable and cared for.",
    education: [
      "DDS, University of California, Los Angeles (UCLA) — 1998",
      "B.S. Biology, Stanford University — 1994",
      "Advanced Cosmetic Training, Las Vegas Institute (LVI)",
    ],
    experience: "25+ years of clinical experience",
    certifications: [
      "ADA Member",
      "American Academy of Cosmetic Dentistry (AACD)",
      "Invisalign® Certified Provider",
      "Fellow, Academy of General Dentistry (FAGD)",
    ],
    languages: ["English", "Spanish"],
    expertise: [
      "Cosmetic Dentistry",
      "Veneers",
      "Smile Makeovers",
      "Invisalign®",
    ],
    funFacts: [
      "Has completed over 1,000 smile makeovers",
      "Volunteers with Give Back a Smile program",
      "Was a competitive figure skater in college",
    ],
    reviews: [
      {
        author: "Jennifer R.",
        rating: 5,
        text: "Dr. Mitchell completely transformed my smile. I used to hide my teeth in photos—now I can't stop smiling! The entire process was comfortable and the results are stunning.",
        date: "2024-03-15",
      },
      {
        author: "Mark T.",
        rating: 5,
        text: "Best dentist I've ever been to. Dr. Mitchell is gentle, thorough, and genuinely cares about her patients. The veneers she placed look completely natural.",
        date: "2024-01-20",
      },
    ],
  },
  {
    id: "2",
    name: "Dr. James Chen",
    title: "DMD — Implant & Oral Surgery Specialist",
    photo: "https://i.pravatar.cc/400?img=12",
    bio: "Dr. Chen specializes in dental implants and oral surgery. He completed his oral surgery residency at UCSF and has placed over 5,000 implants. He is known for his gentle surgical technique and commitment to making even the most complex procedures comfortable and stress-free. Patients appreciate his calm demeanor and thorough explanations.",
    education: [
      "DMD, Harvard School of Dental Medicine — 2005",
      "B.S. Bioengineering, UC San Diego — 2001",
      "Oral & Maxillofacial Surgery Residency, UCSF — 2009",
    ],
    experience: "19+ years of clinical experience",
    certifications: [
      "ADA Member",
      "American Association of Oral and Maxillofacial Surgeons",
      "Diplomate, American Board of Oral & Maxillofacial Surgery",
      "Fellow, International Congress of Oral Implantologists",
    ],
    languages: ["English", "Mandarin"],
    expertise: [
      "Dental Implants",
      "Oral Surgery",
      "Wisdom Teeth Removal",
      "Bone Grafting",
    ],
    funFacts: [
      "Has placed over 5,000 dental implants",
      "Holds a patent for a surgical instrument",
      "Runs marathons to raise money for dental charities",
    ],
    reviews: [
      {
        author: "David L.",
        rating: 5,
        text: "I was terrified of getting implants. Dr. Chen made the entire process painless and explained everything step by step. My implants feel like my natural teeth.",
        date: "2024-04-02",
      },
      {
        author: "Susan K.",
        rating: 5,
        text: "Dr. Chen removed all four of my wisdom teeth and I barely had any swelling. His skill is incredible and he has such a calming presence.",
        date: "2024-02-10",
      },
    ],
  },
  {
    id: "3",
    name: "Dr. Maria Rodriguez",
    title: "DDS — Pediatric & Preventive Care Dentist",
    photo: "https://i.pravatar.cc/400?img=32",
    bio: "Dr. Rodriguez has a gift for making children love coming to the dentist. She completed a pediatric dental residency at Boston University and has been creating positive dental experiences for children for over 15 years. She believes that every child deserves a healthy start and a positive relationship with dental care. Kids love her fun, interactive approach.",
    education: [
      "DDS, Boston University Henry M. Goldman School of Dental Medicine — 2008",
      "B.A. Psychology, UC Berkeley — 2004",
      "Pediatric Dental Residency, Boston University — 2010",
    ],
    experience: "16+ years of clinical experience",
    certifications: [
      "ADA Member",
      "American Academy of Pediatric Dentistry (AAPD)",
      "Board Certified Pediatric Dentist",
      "PALS Certified (Pediatric Advanced Life Support)",
    ],
    languages: ["English", "Spanish"],
    expertise: [
      "Pediatric Dentistry",
      "Preventive Care",
      "Sealants & Fluoride",
      "Behavior Management",
    ],
    funFacts: [
      "Has a therapy dog named Biscuit who visits the office",
      "Writes children's books about dental care",
      "Was featured in 'Top Dentists' magazine three years running",
    ],
    reviews: [
      {
        author: "Amanda P.",
        rating: 5,
        text: "My 4-year-old actually asks to go to the dentist now! Dr. Rodriguez is amazing with kids. She makes it fun and my daughter isn't scared at all.",
        date: "2024-03-28",
      },
      {
        author: "Robert H.",
        rating: 5,
        text: "Dr. Rodriguez transformed my son's fear of dentists into excitement. She's patient, kind, and genuinely great with children. Highly recommend!",
        date: "2024-01-15",
      },
    ],
  },
  {
    id: "4",
    name: "Dr. Emily Park",
    title: "DDS — Orthodontist & Invisalign® Provider",
    photo: "https://i.pravatar.cc/400?img=20",
    bio: "Dr. Park is our orthodontics specialist, focusing on Invisalign® and clear aligner therapy. She graduated from the University of Pennsylvania School of Dental Medicine and completed her orthodontic residency at New York University. She has been a Diamond Plus Invisalign Provider, placing her in the top 1% of Invisalign providers nationwide. Patients love her precise, personalized treatment plans.",
    education: [
      "DDS, University of Pennsylvania School of Dental Medicine — 2011",
      "B.S. Biomedical Engineering, Johns Hopkins — 2007",
      "Orthodontic Residency, New York University — 2014",
    ],
    experience: "13+ years of clinical experience",
    certifications: [
      "ADA Member",
      "American Association of Orthodontists (AAO)",
      "Invisalign® Diamond Plus Provider (Top 1%)",
      "Board Certified Orthodontist",
    ],
    languages: ["English", "Korean"],
    expertise: [
      "Invisalign®",
      "Clear Aligners",
      "Orthodontics",
      "Interceptive Orthodontics",
    ],
    funFacts: [
      "Treated over 2,000 Invisalign cases",
      "Developed an app to help patients track aligner wear time",
      "Enjoys photography in her free time",
    ],
    reviews: [
      {
        author: "Lisa M.",
        rating: 5,
        text: "Dr. Park fixed my crowded teeth with Invisalign in just 9 months. The results are amazing and the process was so easy. She's truly an expert.",
        date: "2024-04-10",
      },
      {
        author: "Kevin W.",
        rating: 5,
        text: "As an adult, I was hesitant about braces. Dr. Park made Invisalign easy and discreet. My smile is perfect now and nobody even knew I was in treatment!",
        date: "2024-02-22",
      },
    ],
  },
];

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: "google" | "video" | "written";
  treatment?: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Jennifer R.",
    rating: 5,
    text: "I can't say enough good things about Bright Smile Dental. From the friendly front desk to the gentle, thorough care from Dr. Mitchell, every visit has been wonderful. I used to dread going to the dentist—now I actually look forward to it!",
    date: "2024-04-15",
    source: "google",
    treatment: "Veneers",
  },
  {
    id: "r2",
    author: "Michael B.",
    rating: 5,
    text: "Dr. Chen placed two dental implants and the process was much easier than I expected. He explained everything clearly and made sure I was comfortable the whole time. The implants feel like my natural teeth.",
    date: "2024-03-28",
    source: "google",
    treatment: "Dental Implants",
  },
  {
    id: "r3",
    author: "Sarah L.",
    rating: 5,
    text: "My kids LOVE going to see Dr. Rodriguez! She makes every visit fun and educational. The office is kid-friendly and the staff is amazing. Best pediatric dentist in the area!",
    date: "2024-03-15",
    source: "google",
    treatment: "Pediatric Dentistry",
  },
  {
    id: "r4",
    author: "David K.",
    rating: 5,
    text: "I had a dental emergency on a Saturday and they got me in the same day. The team was professional, caring, and took care of my severe toothache immediately. I'm so grateful for their quick response.",
    date: "2024-02-20",
    source: "google",
    treatment: "Emergency Dentistry",
  },
  {
    id: "r5",
    author: "Amanda P.",
    rating: 5,
    text: "Dr. Park transformed my smile with Invisalign. The 3D preview was so cool—I could see my results before starting! The entire process took less than a year and I'm thrilled with the results.",
    date: "2024-02-10",
    source: "google",
    treatment: "Invisalign",
  },
  {
    id: "r6",
    author: "Robert H.",
    rating: 5,
    text: "I've been a patient for over 10 years. The quality of care has always been exceptional. They use the latest technology, the office is spotless, and everyone genuinely cares about your experience.",
    date: "2024-01-28",
    source: "google",
  },
  {
    id: "r7",
    author: "Lisa M.",
    rating: 5,
    text: "The whitening treatment gave me a brighter smile in just one visit. I was amazed at the difference—my teeth are several shades whiter. Highly recommend!",
    date: "2024-01-15",
    source: "google",
    treatment: "Teeth Whitening",
  },
  {
    id: "r8",
    author: "James W.",
    rating: 5,
    text: "I used to have terrible dental anxiety. The sedation option changed everything for me. I was relaxed the entire time and finally got the dental work I'd been putting off for years.",
    date: "2024-01-05",
    source: "google",
    treatment: "Sedation Dentistry",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "proper-brushing-technique",
    title: "Are You Brushing Your Teeth Correctly? A Step-by-Step Guide",
    excerpt:
      "You brush twice a day, but are you doing it right? Learn the proper technique that dentists recommend for a cleaner, healthier mouth.",
    content:
      "Brushing your teeth seems simple, but most people aren't doing it optimally. Here's the technique dentists recommend:\n\n**1. Choose the right brush.** A soft-bristled brush is best—hard bristles can damage enamel and gums. Replace your brush every 3–4 months or when bristles fray.\n\n**2. Angle at 45 degrees.** Hold the brush at a 45-degree angle to your gums. This lets the bristles clean along the gumline where plaque hides.\n\n**3. Use gentle, circular motions.** Don't scrub—use small, gentle circles. Brushing too hard wears enamel and causes gum recession.\n\n**4. Brush for two minutes.** Divide your mouth into four quadrants and spend 30 seconds on each. Use a timer or an electric brush with a built-in timer.\n\n**5. Don't forget your tongue.** Bacteria build up on the tongue and cause bad breath. Brush or scrape it gently.\n\n**6. Wait 30 minutes after eating.** Acidic foods soften enamel, and brushing immediately can wear it away. Wait 30 minutes for enamel to re-harden.\n\nFollowing these steps removes plaque effectively, prevents cavities, and keeps your gums healthy. Combine with daily flossing and regular dental visits for optimal oral health.",
    author: "Dr. Sarah Mitchell",
    date: "2024-04-10",
    image:
      "https://images.unsplash.com/photo-1581585099434-7a7c2f9e1e3d?w=800&q=80",
    category: "Oral Hygiene",
    readTime: "5 min read",
  },
  {
    slug: "flossing-importance",
    title: "Why Flossing Is Non-Negotiable (And How to Do It Right)",
    excerpt:
      "Flossing isn't optional—it's essential. Here's why skipping it costs you more than you think and how to floss like a pro.",
    content:
      "If you're only brushing and not flossing, you're missing 40% of your tooth surfaces. Flossing removes plaque and food particles from between teeth where your brush can't reach. Here's why it matters and how to do it correctly.\n\n**Why flossing is critical:**\n- Prevents cavities between teeth\n- Prevents gum disease (gingivitis and periodontitis)\n- Reduces bad breath\n- May reduce heart disease risk (gum disease is linked to cardiovascular problems)\n\n**How to floss properly:**\n1. Use about 18 inches of floss—wind most around your middle fingers\n2. Hold the floss taut between thumbs and index fingers\n3. Gently guide it between teeth with a sawing motion—don't snap\n4. Curve into a C-shape around each tooth\n5. Slide up and down against the tooth and just under the gumline\n6. Use a clean section of floss for each tooth\n\n**Alternatives:** If traditional floss is difficult, try floss picks, interdental brushes, or a water flosser. Any of these are better than not flossing at all.\n\n**When to floss:** Once a day, either before or after brushing. Consistency matters more than timing.\n\nMake flossing a daily habit and your gums—and your dentist—will thank you.",
    author: "Dr. Sarah Mitchell",
    date: "2024-03-20",
    image:
      "https://images.unsplash.com/photo-1601012810303-5a7c7088f9f1?w=800&q=80",
    category: "Oral Hygiene",
    readTime: "4 min read",
  },
  {
    slug: "teeth-whitening-options",
    title: "Professional vs. At-Home Whitening: Which Is Right for You?",
    excerpt:
      "Considering teeth whitening? Compare professional and over-the-counter options to make the best choice for your smile.",
    content:
      "A brighter smile can boost your confidence, but with so many whitening options, it's hard to know which to choose. Here's a comparison to help you decide.\n\n**Professional In-Office Whitening:**\n- Results: Up to 8 shades whiter in one hour\n- Cost: $199–$500\n- Safety: Monitored by a dental professional, protective barriers used\n- Sensitivity: Managed with desensitizing agents\n- Best for: Fast, dramatic results\n\n**Professional Take-Home Trays:**\n- Results: Gradual, up to 6 shades over 2–4 weeks\n- Cost: $250–$400\n- Safety: Custom-fitted trays prevent gel from contacting gums\n- Sensitivity: Mild, manageable\n- Best for: Those who prefer gradual whitening at home\n\n**Over-the-Counter Products:**\n- Results: 1–3 shades over several weeks\n- Cost: $20–$100\n- Safety: One-size-fits-all trays can cause gum irritation\n- Sensitivity: Can be significant with high-concentration gels\n- Best for: Budget-conscious, mild whitening needs\n\n**Recommendation:** Professional whitening offers the best combination of safety, speed, and results. We can assess your teeth, recommend the ideal approach, and ensure your enamel and gums are protected throughout the process.\n\nSchedule a free whitening consultation to find out which option is right for your smile.",
    author: "Dr. Sarah Mitchell",
    date: "2024-03-05",
    image:
      "https://images.unsplash.com/photo-1601012810303-5a7c7088f9f1?w=800&q=80",
    category: "Cosmetic Dentistry",
    readTime: "5 min read",
  },
  {
    slug: "dental-implants-guide",
    title: "Dental Implants: Everything You Need to Know",
    excerpt:
      "Thinking about dental implants? Our complete guide covers the process, cost, recovery, and why implants are the gold standard.",
    content:
      "Dental implants are the most advanced tooth replacement option available. Here's everything you need to know before starting treatment.\n\n**What is a dental implant?**\nA titanium post surgically placed in the jawbone that acts as a replacement root. A custom crown is attached on top, creating a complete, natural-looking tooth.\n\n**Why choose implants?**\n- Prevent bone loss (the jawbone shrinks without a tooth root)\n- Don't damage adjacent teeth (unlike bridges)\n- Restore full chewing power\n- Can last a lifetime with proper care\n- Look and feel like natural teeth\n\n**The process:**\n1. **Consultation:** 3D CBCT scan, treatment planning\n2. **Placement:** Impost is placed (60–90 min)\n3. **Healing:** Osseointegration—implant fuses with bone (3–6 months)\n4. **Restoration:** Custom crown attached\n\n**Cost:** $1,800–$4,500 per implant. Many insurance plans cover a portion. We offer financing options including CareCredit.\n\n**Are you a candidate?** Good candidates have healthy gums, adequate jawbone, and don't smoke. If you've lost bone, grafting can restore it.\n\n**Recovery:** Most patients return to work the next day. Mild swelling for 2–3 days is normal.\n\nSchedule a free implant consultation to find out if implants are right for you.",
    author: "Dr. James Chen",
    date: "2024-02-18",
    image:
      "https://images.unsplash.com/photo-1612277795421-9bc7316153a8?w=800&q=80",
    category: "Dental Implants",
    readTime: "6 min read",
  },
  {
    slug: "childrens-dental-care",
    title: "Your Child's First Dental Visit: What to Expect",
    excerpt:
      "Preparing for your child's first dentist appointment? Here's what happens and how to make it a positive experience.",
    content:
      "The American Academy of Pediatric Dentistry recommends the first dental visit by the first birthday. Here's what to expect and how to prepare.\n\n**Before the visit:**\n- Talk positively about the dentist—never use scary words like 'hurt' or 'shot'\n- Read children's books about going to the dentist\n- Play 'dentist' at home to make it fun\n- Schedule for the morning when kids are fresh\n\n**What happens at the first visit:**\n- Gentle examination of teeth, gums, and jaw\n- Cleaning (if cooperative)\n- Fluoride varnish application\n- Assessment of oral development\n- Parent education on brushing, diet, and habits\n- Tips for preventing cavities\n\n**How we make it fun:**\n- Kid-friendly office with games and prizes\n- Tell-show-do approach (we explain, show, then do)\n- Positive reinforcement and praise\n- Special 'first visit' certificate\n\n**Tips for parents:**\n- Stay calm—children pick up on your anxiety\n- Don't promise 'no pain'—say 'the dentist will count your teeth'\n- Bring a comfort item (blanket, toy)\n- Reward bravery with a small treat or sticker\n\nStarting dental visits early builds a lifetime of healthy habits and positive dental experiences. Call us to schedule your child's first visit!",
    author: "Dr. Maria Rodriguez",
    date: "2024-02-01",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e8f3a6f5f8?w=800&q=80",
    category: "Pediatric Dentistry",
    readTime: "5 min read",
  },
  {
    slug: "invisalign-guide",
    title: "Invisalign vs. Traditional Braces: Which Is Better?",
    excerpt:
      "Comparing Invisalign and braces? We break down the pros and cons to help you choose the right treatment.",
    content:
      "Straightening your teeth is an investment in your smile and confidence. Here's how Invisalign compares to traditional braces.\n\n**Invisalign Pros:**\n- Nearly invisible aligners\n- Removable for eating and cleaning\n- Fewer office visits (every 6–8 weeks)\n- No food restrictions\n- Digital preview of results\n- More comfortable (no brackets or wires)\n\n**Invisalign Cons:**\n- Must wear 20–22 hours/day\n- Not suitable for very complex cases\n- Can be lost or damaged if not stored properly\n\n**Traditional Braces Pros:**\n- Effective for all cases, including complex\n- No compliance issues (can't remove them)\n- Sometimes faster for complex cases\n- Cost-effective for severe misalignment\n\n**Traditional Braces Cons:**\n- Visible metal brackets\n- Food restrictions (no sticky/hard foods)\n- Harder to clean around brackets\n- Can cause mouth sores initially\n- More frequent adjustments needed\n\n**Our recommendation:** For most patients, Invisalign is the preferred choice due to its aesthetics, comfort, and convenience. For complex orthodontic cases (severe crowding, large overbites, jaw alignment), traditional braces may be more effective.\n\nSchedule a free Invisalign consultation to find out which option is right for you.",
    author: "Dr. Emily Park",
    date: "2024-01-20",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e8f3a6f5f8?w=800&q=80",
    category: "Invisalign",
    readTime: "5 min read",
  },
  {
    slug: "gum-disease-prevention",
    title: "5 Signs You Might Have Gum Disease (And How to Prevent It)",
    excerpt:
      "Gum disease affects nearly half of adults. Learn the warning signs and how to protect your gums—and your overall health.",
    content:
      "Gum disease is often silent in its early stages, which is why many people don't know they have it. Here are the warning signs to watch for.\n\n**1. Bleeding gums** when brushing or flossing\n**2. Red, swollen, or tender gums**\n**3. Persistent bad breath** that doesn't go away\n**4. Receding gums** (teeth look longer)\n**5. Loose teeth** or changes in your bite\n\n**Stages of gum disease:**\n- **Gingivitis:** Early stage, reversible with professional cleaning and good home care\n- **Periodontitis:** Advanced stage, causes bone loss and is manageable but not curable\n\n**Prevention:**\n1. Brush twice daily for two minutes\n2. Floss every day\n3. Visit the dentist every 6 months (or more often if recommended)\n4. Quit smoking (smoking is a major risk factor)\n5. Eat a balanced diet low in sugar\n6. Manage conditions like diabetes that increase risk\n\n**The health connection:** Gum disease is linked to heart disease, diabetes, stroke, and pregnancy complications. Treating your gums protects more than just your smile.\n\nIf you notice any warning signs, schedule an appointment. Early treatment is simple, effective, and prevents serious complications.",
    author: "Dr. Sarah Mitchell",
    date: "2024-01-08",
    image:
      "https://images.unsplash.com/photo-1601012810303-5a7c7088f9f1?w=800&q=80",
    category: "Gum Health",
    readTime: "4 min read",
  },
  {
    slug: "oral-health-overall-health",
    title: "The Mouth-Body Connection: How Oral Health Affects Your Whole Body",
    excerpt:
      "Your mouth is the gateway to your body. Discover how oral health impacts your heart, brain, and overall wellbeing.",
    content:
      "Research increasingly shows that oral health is deeply connected to overall health. Here's how your mouth affects your body.\n\n**Heart Disease:** Gum disease bacteria can enter the bloodstream and contribute to arterial plaque, increasing heart disease risk by up to 20%.\n\n**Diabetes:** Gum disease makes it harder to control blood sugar, and high blood sugar worsens gum disease—a vicious cycle. Treating gum disease can improve diabetes management.\n\n**Pregnancy:** Hormonal changes during pregnancy increase gum disease risk, which is linked to premature birth and low birth weight. Pregnant women should maintain regular dental visits.\n\n**Respiratory Health:** Bacteria from gum disease can be inhaled into the lungs, contributing to pneumonia and other respiratory infections, especially in older adults.\n\n**Alzheimer's Disease:** Some studies suggest a link between gum disease bacteria and Alzheimer's, though more research is needed.\n\n**What you can do:**\n- Brush twice daily and floss daily\n- Visit your dentist every 6 months\n- Eat a balanced, low-sugar diet\n- Don't smoke\n- Tell your dentist about any medical conditions or medications\n- Stay hydrated (dry mouth increases decay risk)\n\nYour mouth isn't separate from the rest of your body—caring for it is an investment in your overall health.",
    author: "Dr. Sarah Mitchell",
    date: "2023-12-15",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    category: "Oral Health",
    readTime: "5 min read",
  },
];

export interface FAQItem {
  q: string;
  a: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    q: "Do you accept my insurance?",
    a: "We accept most major PPO insurance plans, including Delta Dental, Cigna, Aetna, MetLife, United Healthcare, and many others. We'll verify your benefits before your appointment and file claims on your behalf. For HMO plans, please call us to confirm. If you don't have insurance, we offer a membership plan and financing options.",
    category: "Insurance & Financing",
  },
  {
    q: "Do you take dental emergencies?",
    a: "Yes! We reserve same-day appointments for dental emergencies and offer 24/7 phone guidance. If you have severe tooth pain, a broken or knocked-out tooth, swelling, or facial trauma, call us immediately at (555) 123-4567. Quick action can save your tooth.",
    category: "Emergencies",
  },
  {
    q: "How much does Invisalign cost?",
    a: "Invisalign treatment typically ranges from $3,500 to $8,000 depending on the complexity of your case. We offer free consultations to assess your needs and provide an exact cost. We also offer flexible financing and monthly payment plans to make treatment affordable. Many insurance plans cover a portion of Invisalign treatment.",
    category: "Invisalign & Orthodontics",
  },
  {
    q: "What if I'm nervous about going to the dentist?",
    a: "Dental anxiety is very common, and we're here to help. We offer three levels of sedation: nitrous oxide (laughing gas) for mild anxiety, oral conscious sedation for moderate anxiety, and IV sedation for severe phobia. Our team is specially trained to create a calm, comfortable environment. We'll never judge or rush you—your comfort is our priority.",
    category: "Comfort & Sedation",
  },
  {
    q: "Do you offer financing or payment plans?",
    a: "Yes! We offer several options: CareCredit (0% interest plans for qualified applicants), in-house monthly payment plans, and our Dental Membership Plan for uninsured patients. We'll work with you to make treatment affordable. Ask about our financing options at your consultation.",
    category: "Insurance & Financing",
  },
  {
    q: "Are you accepting new patients?",
    a: "Yes, we are always welcoming new patients! We offer a new patient special that includes a comprehensive exam, X-rays, and cleaning at a discounted rate. Call us or book online to schedule your first visit. We'll make you feel at home from the moment you walk in.",
    category: "General",
  },
  {
    q: "What ages do you treat?",
    a: "We treat patients of all ages, from toddlers to seniors. Dr. Rodriguez specializes in pediatric dentistry for children, while our other dentists provide comprehensive care for teens, adults, and seniors. We're a true family dental practice—everyone is welcome.",
    category: "General",
  },
  {
    q: "How often should I get a dental checkup?",
    a: "Most patients benefit from checkups every six months. If you have gum disease, a history of frequent cavities, or other ongoing concerns, we may recommend more frequent visits (every 3–4 months). Regular visits help us catch problems early when they're easier and less expensive to treat.",
    category: "General",
  },
  {
    q: "What should I do if a tooth is knocked out?",
    a: "Pick up the tooth by the crown (not the root), gently rinse it with water (don't scrub), and try to reinsert it into the socket. If that's not possible, store it in milk or your saliva and call us immediately. Time is critical—ideally, the tooth should be reimplanted within 30 minutes.",
    category: "Emergencies",
  },
  {
    q: "Do you offer a discount for cash patients?",
    a: "Yes! We offer a Dental Membership Plan for patients without insurance. For an annual fee, you receive two cleanings, two exams, X-rays, and discounts on other procedures. We also offer a 5% discount for treatment paid in full with cash or check.",
    category: "Insurance & Financing",
  },
  {
    q: "How long does a teeth whitening treatment take?",
    a: "Our in-office whitening treatment takes about 60–90 minutes and can whiten your teeth up to 8 shades in a single visit. We also offer custom take-home trays for gradual whitening over 2–4 weeks if you prefer to whiten at home.",
    category: "Cosmetic Dentistry",
  },
  {
    q: "Are dental implants safe?",
    a: "Yes. Dental implants have been used for over 50 years and have a success rate of 95–98%. They're made of biocompatible titanium, which naturally fuses with your jawbone. Dr. Chen has placed over 5,000 implants with excellent outcomes. We use 3D imaging for precise placement and offer sedation for comfort.",
    category: "Dental Implants",
  },
];

export interface GalleryItem {
  id: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "Smile Makeovers",
    beforeImage:
      "https://images.unsplash.com/photo-1581585099434-7a7c2f9e1e3d?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1601012810303-5a7c7088f9f1?w=800&q=80",
    title: "Full Smile Makeover",
    description:
      "Combination of veneers and whitening to transform stained, chipped teeth into a radiant smile.",
  },
  {
    id: "g2",
    category: "Veneers",
    beforeImage:
      "https://images.unsplash.com/photo-1612277795421-9bc7316153a8?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
    title: "Porcelain Veneers",
    description:
      "Gaps and discoloration corrected with custom porcelain veneers for a seamless smile.",
  },
  {
    id: "g3",
    category: "Whitening",
    beforeImage:
      "https://images.unsplash.com/photo-1581585099434-7a7c2f9e1e3d?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1601012810303-5a7c7088f9f1?w=800&q=80",
    title: "Professional Whitening",
    description:
      "Years of coffee stains lifted in a single in-office whitening session.",
  },
  {
    id: "g4",
    category: "Implants",
    beforeImage:
      "https://images.unsplash.com/photo-1612277795421-9bc7316153a8?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    title: "Single Tooth Implant",
    description:
      "Missing front tooth replaced with a natural-looking dental implant.",
  },
  {
    id: "g5",
    category: "Invisalign",
    beforeImage:
      "https://images.unsplash.com/photo-1581585099434-7a7c2f9e1e3d?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1629909613654-28e8f3a6f5f8?w=800&q=80",
    title: "Invisalign Treatment",
    description:
      "Crowded teeth straightened in 11 months with Invisalign clear aligners.",
  },
  {
    id: "g6",
    category: "Crowns",
    beforeImage:
      "https://images.unsplash.com/photo-1612277795421-9bc7316153a8?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1609844445148-15f1a4a0a1d3?w=800&q=80",
    title: "CEREC Crown Restoration",
    description:
      "Severely decayed tooth restored with a same-day CEREC ceramic crown.",
  },
];

export interface Offer {
  id: string;
  title: string;
  description: string;
  details: string[];
  badge: string;
  cta: string;
}

export const specialOffers: Offer[] = [
  {
    id: "o1",
    title: "New Patient Special",
    description:
      "Comprehensive exam, digital X-rays, and professional cleaning for just $89.",
    details: [
      "Full oral examination",
      "Digital X-rays (low radiation)",
      "Professional cleaning & polishing",
      "Oral cancer screening",
      "Personalized treatment plan",
    ],
    badge: "Save $200",
    cta: "Claim This Offer",
  },
  {
    id: "o2",
    title: "Whitening Discount",
    description:
      "Get professional in-office whitening for $149 (regularly $250) — new patients only.",
    details: [
      "In-office power whitening",
      "Up to 8 shades whiter",
      "Single 60–90 min session",
      "Custom take-home trays available at discount",
      "Results last 1–2 years with touch-ups",
    ],
    badge: "40% Off",
    cta: "Book Whitening",
  },
  {
    id: "o3",
    title: "Free Implant Consultation",
    description:
      "Complimentary 3D CBCT scan, consultation, and treatment plan for dental implants.",
    details: [
      "Full 3D CBCT scan (a $350 value)",
      "One-on-one consultation with Dr. Chen",
      "Customized treatment plan",
      "Financing options review",
      "No obligation",
    ],
    badge: "Free $350 Value",
    cta: "Schedule Consultation",
  },
  {
    id: "o4",
    title: "Free Invisalign Consultation",
    description:
      "Includes 3D digital scan, ClinCheck® preview, and personalized cost estimate.",
    details: [
      "3D digital scan (no goopy impressions)",
      "Digital smile preview",
      "Customized treatment timeline",
      "Flexible financing options",
      "No obligation to start treatment",
    ],
    badge: "Free Preview",
    cta: "Start Your Smile",
  },
];

export const insuranceProviders = [
  "Delta Dental",
  "Cigna",
  "Aetna",
  "MetLife",
  "United Healthcare",
  "Guardian",
  "Humana",
  "Anthem Blue Cross",
  "Blue Shield",
  "Dental Dental Premier",
  "Principal",
  "Assurant",
];

export const certifications = [
  "ADA Member",
  "American Academy of Cosmetic Dentistry",
  "American Academy of Pediatric Dentistry",
  "American Association of Orthodontists",
  "Fellow, Academy of General Dentistry",
  "Invisalign® Diamond Plus Provider",
];

export const paymentMethods = [
  "Cash",
  "Check",
  "All major credit cards (Visa, Mastercard, Amex, Discover)",
  "CareCredit financing",
  "HSA / FSA",
  "Apple Pay / Google Pay",
];

// Trust stats
export const trustStats = [
  { label: "Years in Business", value: "25+" },
  { label: "Patients Served", value: "15,000+" },
  { label: "Google Rating", value: "4.9★" },
  { label: "Expert Dentists", value: "4" },
];
