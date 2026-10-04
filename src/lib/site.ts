export const phoneNumber = "+91 95752 52555";
export const whatsappNumber = "+91 95752 52555";

const waMessage =
  "Hi Level Up MMA Academy — I'd like to know about batch timings and a free trial class.";

export const telHref = "tel:+" + phoneNumber.replace(/\D/g, "");

export const waLink = (message: string) =>
  "https://wa.me/" + whatsappNumber.replace(/\D/g, "") + "?text=" + encodeURIComponent(message);

export const waHref = waLink(waMessage);

export const navLinks = [
  { href: "#disciplines", label: "Disciplines" },
  { href: "#pathway", label: "Results" },
  { href: "#coaches", label: "Coaches" },
  { href: "#centres", label: "Centres" },
  { href: "#gallery", label: "Gallery" },
];

export const stats = [
  { value: "3", label: "Centres in Korba" },
  { value: "7+", label: "Disciplines taught" },
  { value: "29", label: "State medals, 2025" },
  { value: "1", label: "World C'ship silver" },
];

export const values = [
  "Discipline",
  "Confidence",
  "Self-defence",
  "Sportsmanship",
  "Fitness",
  "Perseverance",
];

export const disciplines = [
  { num: "01", name: "Mixed Martial Arts", blurb: "Striking, grappling and clinch work together. Conditioning-heavy sessions, controlled sparring only.", who: "Teens & adults" },
  { num: "02", name: "Karate", blurb: "Traditional kihon, kata and kumite, with belt gradings. The academy's strongest competition stream.", who: "Age 5+" },
  { num: "03", name: "Taekwondo", blurb: "Speed, kicking range and footwork. Regular state-level squad participation.", who: "Age 5+" },
  { num: "04", name: "Boxing", blurb: "Stance, guard, pad rounds and bag work. Good for fitness, good for the ring.", who: "Age 10+" },
  { num: "05", name: "Judo", blurb: "Throws, breakfalls and ground control — the best confidence builder for older children.", who: "Age 8+" },
  { num: "06", name: "Ju-Jitsu", blurb: "Close-range control, escapes and submissions. Less about size and strength, more about technique.", who: "Age 10+" },
  { num: "07", name: "Self-defence", blurb: "Short practical courses covering awareness, escapes and simple counters. Special batches for girls and school groups.", who: "All ages" },
  { num: "08", name: "Fitness & conditioning", blurb: "Strength, mobility and cardio — alongside martial arts training or on its own.", who: "Adults" },
];

export const disciplinePhotos = [
  { src: "/photos/a07.webp", alt: "Karate kata demonstration", caption: "Karate · Kata" },
  { src: "/photos/b12.webp", alt: "Flying kick onto a pad", caption: "Taekwondo · Pad work", position: "40% center" },
  { src: "/photos/b11.webp", alt: "Boxing gloves at a self-defence session", caption: "Self-defence · Workshops" },
];

export const pathway = [
  { step: "STEP 01", name: "Beginner batch", blurb: "Basics, discipline and fitness. No experience needed, and the first class is free." },
  { step: "STEP 02", name: "District competition", blurb: "The academy is linked to Korba's district Karate-Do and Taekwondo associations, so local events come around regularly." },
  { step: "STEP 03", name: "State championship", blurb: "Selected athletes compete at Chhattisgarh state events in Raipur, Bilaspur and beyond." },
  { step: "STEP 04", name: "National & beyond", blurb: "State medalists qualify for the national rounds. The academy's own coaching team carries international-level credentials." },
];

export const results = [
  { label: "Karate · Independence Cup 2025", figure: "29", text: "Medals won by Level Up athletes at the state-level Karate championship in Raipur, 26–27 July 2025. Seven athletes then qualified for the national round at Talkatora Indoor Stadium, New Delhi." },
  { label: "Taekwondo · State level", figure: "13/13", text: "Thirteen athletes sent to a state-level Taekwondo championship, thirteen came back with medals — under coach Sneha Banjare and manager Ayush Nirala. A separate 20th state championship in Bilaspur took a 17-athlete squad." },
  { label: "World Karate Championship, UAE 2024", figure: "SILVER", text: "Sneha Banjare, senior −68 kg. She reached the final after beating opponents from 11 countries and was reported as the only woman from Chhattisgarh in the Indian contingent.", highlight: true },
];

export type Coach = {
  name: string;
  role: string;
  note: string;
  ig?: string;
  photo?: string;
};

export const coaches: Coach[] = [
  { name: "Avinash Banjare", role: "Director / Operator", note: "President, Korba District Karate-Do Sports Association. President, Amateur Taekwondo Association of Korba.", ig: "avinash_banjare01", photo: "/coaches/avinash-banjare.webp" },
  { name: "Sneha Banjare", role: "Technical Director / Coach", note: "International Karate medalist — silver, World Karate Championship (UAE, 2024), senior −68 kg.", ig: "_sneha18._", photo: "/coaches/sneha-banjare.webp" },
  { name: "Premraj Banjare", role: "NIS Coach", note: "NIS-qualified coach working across the academy's training centres, with a focus on strength and fitness.", ig: "premrajfitness", photo: "/coaches/premraj-banjare.webp" },
  { name: "Isha Sonwani", role: "Coach", note: "Coaching across junior batches and competition preparation." },
  { name: "Rani Markam", role: "Coach", note: "Coaching across junior batches and competition preparation." },
  { name: "Anish Khare", role: "Coach", note: "Coaching across junior batches and competition preparation.", photo: "/coaches/anish-khare.webp" },
];

const mapHref = (place: string) =>
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Level Up MMA Academy " + place + " Korba").replace(/%20/g, "+");

export const centres = [
  { name: "Niharika / Kalpataru", address: "1st Floor, Kalpataru Building, MIG-60, Niharika Road, Niharika Chowk, Korba 495677", disciplines: "Karate · Taekwondo · Self-defence · Fitness", img: "/photos/b09.webp", imgAlt: "Students at the Niharika centre", mapHref: mapHref("Niharika") },
  { name: "City Center Mall", address: "First Floor, City Center Mall, 31 Power House Road, Korba 495677", disciplines: "MMA · Boxing · Judo · Taekwondo · Fitness", img: "/photos/b05.webp", imgAlt: "Training floor at the City Center Mall centre", mapHref: mapHref("City Center Mall") },
  { name: "Balco", address: "Near Dr. B. R. Ambedkar Stadium, Civic Center Road, Balco, Korba", disciplines: "Karate · Taekwondo · Self-defence", img: "/photos/a06.webp", imgAlt: "Class at the Balco centre", mapHref: mapHref("Balco") },
];

export const centreOptions = [
  ...centres.map((c) => c.name),
  "Any — please suggest",
];

type GallerySpan = "big" | "wide" | "tall";

export const gallery: { src: string; alt: string; span?: GallerySpan }[] = [
  { src: "/photos/a09.webp", alt: "Two students sparring with a high kick", span: "big" },
  { src: "/photos/b03.webp", alt: "Junior class stretching on the mat" },
  { src: "/photos/a08.webp", alt: "Student in a Karate stance" },
  { src: "/photos/a03.webp", alt: "Award presented to a coach at an academy function", span: "wide" },
  { src: "/photos/b01.webp", alt: "Kids practising techniques in pairs" },
  { src: "/photos/b09.webp", alt: "Students lined up in front of the academy banner" },
  { src: "/photos/b04.webp", alt: "Families and students celebrating with garlands after a championship", span: "wide" },
  { src: "/photos/a05.webp", alt: "Black-belt team and guests at the academy" },
  { src: "/photos/b07.webp", alt: "Students holding certificates" },
  { src: "/photos/b10.webp", alt: "Certificate being presented to a student", span: "tall" },
  { src: "/photos/a06.webp", alt: "Large class seated on the mat" },
  { src: "/photos/b02.webp", alt: "Students and parents at an academy celebration", span: "wide" },
  { src: "/photos/b08.webp", alt: "Students and guests with certificates at a visit" },
];

export const interests = ["MMA", "Karate", "Taekwondo", "Boxing", "Judo", "Ju-Jitsu", "Fitness"];
