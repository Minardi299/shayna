const bookingUrl = import.meta.env.VITE_BOOKING_URL
if (!bookingUrl) {
  throw new Error(
    "VITE_BOOKING_URL is not set. Add it to your .env file (see .env.example)."
  )
}

export const SITE = {
  name: "Shayna's Nails & Spa",
  phone: "(480) 704-1245",
  phoneHref: "tel:+14807041245",
  bookingUrl,
  addressLines: ["4221 E. Chandler Blvd #B-121", "Phoenix, AZ 85048"],
  mapsUrl:
    "https://maps.google.com/?q=4221+E+Chandler+Blvd+%23B-121,+Phoenix,+AZ+85048",
  hours: [
    { days: "Mon – Sat", time: "9:00 am – 7:00 pm" },
    { days: "Sunday", time: "10:00 am – 5:00 pm" },
  ],
  facebookUrl: "https://www.facebook.com/shaynanailsandspa",
  instagramUrl: "https://www.instagram.com/shaynanailsandspa",
  googleUrl: "https://www.google.com/search?q=Shayna%E2%80%99s+Nails+%26+Spa",
  privacyEffectiveDate: "05/19/23",
}

export const REVIEW_STATS = { rating: "4.8", count: "989" }

export type Review = { name: string; date: string; text: string }

// Real Google reviews for the studio. Refresh from the Google listing as needed.
export const REVIEWS: Review[] = [
  {
    name: "Lori Noonan",
    date: "2 months ago",
    text: "Hands down my favorite nail place in the Valley. Family owned and operated — after going a few times you become family. They are truly caring and community driven.",
  },
  {
    name: "Laura Underwood",
    date: "4 months ago",
    text: "This was my first time here since my usual place is closed right now. I had Tom and he did an amazing job! Took his time and made sure I was happy with my nails. Will definitely be back.",
  },
  {
    name: "DI",
    date: "2 months ago",
    text: "My first pedicure experience at Shayna's. Linda was amazing at her job — she took her time, was friendly and patient, and did not rush. I am really happy with the service and would definitely come back.",
  },
  {
    name: "Nitzi",
    date: "6 months ago",
    text: "They provide good customer service, and they're super friendly and welcoming. I love getting my pedicures done with them. Ana and Pink do an excellent job!",
  },
  {
    name: "Brookie Conwell",
    date: "7 months ago",
    text: "They were very friendly and got me and my husband right in. I did the cat eyes on my toes — love the look. The massage was just what I needed. I will go back when I'm in town.",
  },
  {
    name: "Robyn Monroe",
    date: "4 months ago",
    text: "I booked online and got a confirmation text a couple of days later. I didn't feel like the techs or the salon were rushing to get people in and out. I got a mani-pedi with gel and the deluxe package for toes, and was so happy with the results. I would definitely go back.",
  },
]

export const HERO_SLIDES = [
  { src: "/images/hero/hero1.jpg", alt: "Manicure at Shayna's" },
  { src: "/images/hero/hero2.jpg", alt: "Nail art detail" },
  { src: "/images/hero/hero3.jpg", alt: "Finished nails" },
]

export const MARQUEE = [
  "Gel & Dip",
  "Dead Sea Pedicure",
  "Pink & White",
  "Waxing",
  "Kids Care",
  "Nail Art",
]

export type ServiceTeaser = {
  title: string
  price: string
  text: string
  img: string
  alt: string
}

export const SERVICE_TEASERS: ServiceTeaser[] = [
  {
    title: "Manicures",
    price: "from $20",
    text: "Regular, gel polish, gel french and Dead Sea rituals. Shaped, cuticles cared for, no rushing.",
    img: "/images/services/manicures.jpg",
    alt: "Manicure",
  },
  {
    title: "Spa pedicures",
    price: "from $32",
    text: "Regular through Deluxe, Special and the Dead Sea Gold, Diamond & Royal treatments.",
    img: "/images/services/pedicures.jpg",
    alt: "Spa pedicure",
  },
  {
    title: "Waxing",
    price: "from $6",
    text: "Brows, lip, chin, full face, underarms, bikini and Brazilian — gentle wax, quick work.",
    img: "/images/services/waxing.jpg",
    alt: "Waxing",
  },
]

export const GALLERY: { src: string; alt: string }[] = [
  { src: "/images/gallery/g01.jpg", alt: "Nail work" },
  { src: "/images/gallery/g02.jpg", alt: "Gel french manicure" },
  { src: "/images/gallery/g03.jpg", alt: "Nail work" },
  { src: "/images/gallery/g04.jpg", alt: "Pink and white full set" },
  { src: "/images/gallery/g05.jpg", alt: "Nail work" },
  { src: "/images/gallery/g06.jpg", alt: "Nail work" },
  { src: "/images/gallery/g07.jpg", alt: "Nail work" },
  { src: "/images/gallery/g08.jpg", alt: "Nail work" },
  { src: "/images/gallery/g09.jpg", alt: "Nail work" },
  { src: "/images/gallery/g10.jpg", alt: "Manicure and pedicure" },
  { src: "/images/gallery/g11.jpg", alt: "Nail work" },
  { src: "/images/gallery/g12.jpg", alt: "Nail work" },
  { src: "/images/gallery/g13.jpg", alt: "Nail work" },
  { src: "/images/gallery/g14.jpg", alt: "Nail work" },
  { src: "/images/gallery/g15.jpg", alt: "Nail work" },
]

export type Service = {
  name: string
  cash: string
  card: string
}

export type ServiceGroup = {
  id: string
  title: string
  note?: string
  items: Service[]
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "mani-pedi",
    title: "Manicure & Pedicure",
    items: [
      { name: "Regular Manicure", cash: "$20", card: "$20.60" },
      { name: "Regular Pedicure", cash: "$32", card: "$32.96" },
      { name: "Regular Manicure & Pedicure", cash: "$48", card: "$49.44" },
    ],
  },
  {
    id: "deluxe",
    title: "Deluxe Spa Pedicure",
    items: [
      { name: "Deluxe Pedicure", cash: "$40", card: "$41.20" },
      { name: "Deluxe Manicure & Pedicure", cash: "$55", card: "$56.65" },
    ],
  },
  {
    id: "special",
    title: "Special Pedicure",
    items: [
      { name: "Special Pedicure", cash: "$47", card: "$48.41" },
      { name: "Special Manicure & Pedicure", cash: "$65", card: "$66.95" },
    ],
  },
  {
    id: "gel",
    title: "Gel Polish Manicure",
    note: "long lasting ✿",
    items: [
      { name: "Gel Polish Manicure", cash: "$33", card: "$33.99" },
      { name: "Gel French Manicure", cash: "$38", card: "$39.14" },
    ],
  },
  {
    id: "artificial",
    title: "Artificial Nails",
    items: [
      { name: "Regular Fill", cash: "$28", card: "$28.84" },
      { name: "Regular Full Set", cash: "$40", card: "$41.20" },
      { name: "White Tip Full Set", cash: "$45", card: "$46.35" },
      { name: "Pink & White Full Set", cash: "$55", card: "$56.65" },
      { name: "Pink & White Backfill", cash: "$45", card: "$46.35" },
    ],
  },
  {
    id: "dip",
    title: "Nail Dip Powder",
    items: [
      { name: "SNS Dip Polish", cash: "$45", card: "$46.35" },
      { name: "SNS Dip French", cash: "$55", card: "$56.65" },
    ],
  },
  {
    id: "deadsea",
    title: "Dead Sea",
    note: "our signature ✿",
    items: [
      { name: "Gold Pedicure", cash: "$40", card: "$41.20" },
      { name: "Diamond Pedicure", cash: "$45", card: "$46.35" },
      { name: "Royal Pedicure", cash: "$55", card: "$56.65" },
      { name: "Diamond Manicure", cash: "$25", card: "$25.75" },
      { name: "Royal Manicure", cash: "$30", card: "$30.90" },
    ],
  },
  {
    id: "kids",
    title: "Kids Care",
    items: [
      { name: "Manicure (with design)", cash: "$15", card: "$15.45" },
      { name: "Manicure (no design)", cash: "$13", card: "$13.39" },
      { name: "Pedicure (with design)", cash: "$20", card: "$20.60" },
      { name: "Pedicure (no design)", cash: "$17", card: "$17.51" },
    ],
  },
  {
    id: "waxing",
    title: "Waxing",
    items: [
      { name: "Eyebrows", cash: "$12", card: "$12.36" },
      { name: "Upper Lip", cash: "$6", card: "$6.18" },
      { name: "Chin", cash: "$10", card: "$10.30" },
      { name: "Full Face", cash: "$40", card: "$41.20" },
      { name: "Underarms", cash: "$15+", card: "$15.45+" },
      { name: "Bikini Line", cash: "$30", card: "$30.90" },
      { name: "Brazilian", cash: "$55+", card: "$56.65+" },
    ],
  },
]
