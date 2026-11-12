import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
  ChevronRight,
  Menu,
  X,
  Eye,
  Instagram,
  Facebook,
  Share2,
  CheckCircle2,
  ChevronLeft,
  ShoppingBag,
  ExternalLink,
  Send
} from 'lucide-react';

/* ==========================================================================
   BRAND & ASSET CONFIGURATION
   Easily swap the logo or update brand details here.
   ========================================================================== */
export const LOGO_URL = "/logo-transparent.png";      // Transparent logo for light backgrounds
export const LOGO_WHITE_URL = "/logo-white.png";      // White logo for dark sections
export const LOGO_ORIGINAL_URL = "/logo.png";         // Original logo with soft background
export const FLYER_URL = "/assets/aistudio/P.ELITE-1.jpg_7d3f40a4.jpeg";

export const BRAND = {
  name: "P.Elite Luxe Collection",
  tagline: "Curating Luxury for Her…",
  phoneDisplay: "059 435 9140",
  phoneNumber: "233594359140",
  whatsappUrl: "https://wa.me/233594359140",
  location: "Sunyani, Bono Region, Ghana",
  deliveryNote: "Delivery available within Sunyani and nationwide across Ghana.",
  openingHours: "Mon - Sat: 8:30 AM - 7:00 PM | Sun: 1:00 PM - 6:00 PM",
};

/**
 * Helper to generate pre-filled WhatsApp link for any product or category
 */
export function getWhatsAppProductLink(productName: string, category?: string) {
  const text = encodeURIComponent(
    `Hello P.Elite Luxe Collection, I'm interested in "${productName}"${category ? ` (${category})` : ''}. Please send me the price, available colors/sizes, and delivery details.`
  );
  return `https://wa.me/${BRAND.phoneNumber}?text=${text}`;
}

export function getWhatsAppCategoryLink(categoryName: string) {
  const text = encodeURIComponent(
    `Hello P.Elite Luxe Collection, I'd like to see your latest collection and prices for "${categoryName}".`
  );
  return `https://wa.me/${BRAND.phoneNumber}?text=${text}`;
}

/* ==========================================================================
   COLLECTIONS DATA (Categories)
   ========================================================================== */
export interface CollectionCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

export const COLLECTIONS: CollectionCategory[] = [
  {
    id: "nightwear",
    name: "Ladies Night Wear",
    subtitle: "Silky Satin & Lace Loungewear",
    description: "Sumptuous silk satin robes, slip chemises, and delicate camisole pajama sets tailored for radiant evenings and comforting luxury.",
    image: "/images/cat_nightwear_1794469275070.jpg",
    badge: "Most Loved"
  },
  {
    id: "panties",
    name: "Ladies Panties",
    subtitle: "Fine Lace & Seamless Everyday Intimates",
    description: "Breathable stretch fabrics, scalloped French floral lace, and invisible seamless cuts made to feel like a second skin.",
    image: "/images/cat_panties_1794469276233.jpg",
    badge: "Pure Comfort"
  },
  {
    id: "slippers",
    name: "Slippers",
    subtitle: "Statement Slides & Plush Footwear",
    description: "Glamorous slide slippers accented with polished gold buckles, cloud-soft memory footbeds, and plush faux-fur details.",
    image: "/images/cat_slippers_1794469276934.jpg",
    badge: "Trending"
  },
  {
    id: "bags",
    name: "Ladies Bags",
    subtitle: "Designer Inspired Totes & Mini Bags",
    description: "Architectural structured top-handle bags, chic crossbody bags, and vibrant luxury statement purses with fine gold-tone hardware.",
    image: "/images/cat_bags_1794469276834.jpg",
    badge: "Statement Pieces"
  },
  {
    id: "more",
    name: "And Many More",
    subtitle: "Babydoll Lingerie & Gift Sets",
    description: "Sensual butterfly sheer babydolls, sleep eye-masks, beauty vanity essentials, and curated gift boxes for birthdays and special moments.",
    image: "/images/product_babydoll_chemise_1794469294368.jpg",
    badge: "Special Selection"
  }
];

/* ==========================================================================
   PRODUCTS DATA (Easy to edit & expand; strictly NO prices shown)
   ========================================================================== */
export interface Product {
  id: string;
  name: string;
  category: "Night Wear" | "Panties" | "Slippers" | "Bags";
  image: string;
  tagline: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Lavender Lace Silk Cami & Shorts Set",
    category: "Night Wear",
    image: "/images/cat_nightwear_1794469275070.jpg",
    tagline: "Ultra-soft lilac satin with French scalloped eyelash lace.",
    features: ["Breathable mulberry satin", "Adjustable delicate straps", "Relaxed comfort fit"]
  },
  {
    id: "p2",
    name: "Royal Plum Long Satin Kimono Robe",
    category: "Night Wear",
    image: "/images/product_kimono_robe_1794469293224.jpg",
    tagline: "Floor-length deep purple satin robe with detachable tie sash.",
    features: ["Deep plum luster finish", "Wide bell sleeves", "Internal security tie"]
  },
  {
    id: "p3",
    name: "Burgundy Wine & Black Lace Chemise Set",
    category: "Night Wear",
    image: "/images/product_babydoll_chemise_1794469294368.jpg",
    tagline: "Romantic wine red satin chemise with intricate black lace embroidery.",
    features: ["Scalloped neckline", "Includes matching panty", "Silky lightweight drape"]
  },
  {
    id: "p4",
    name: "Empress Silk Satin 2-Piece Lounge Set",
    category: "Night Wear",
    image: "/images/hero_boutique_silk_1794469261405.jpg",
    tagline: "Regal violet nightwear duo with rich gold-embroidered geometric cuffs.",
    features: ["Premium heavyweight satin", "Smooth satin lapel", "Generous bespoke drape"]
  },
  {
    id: "p5",
    name: "Blush Pink Gold-Buckle Slide Slippers",
    category: "Slippers",
    image: "/images/cat_slippers_1794469276934.jpg",
    tagline: "Chic pastel slide sandals with polished gold hardware buckle.",
    features: ["Cushioned ergonomic sole", "Anti-slip bottom grip", "Indoor & outdoor friendly"]
  },
  {
    id: "p6",
    name: "Pearl-Embellished Blush Faux-Fur Slides",
    category: "Slippers",
    image: "/images/product_fluffy_slippers_1794469295429.jpg",
    tagline: "Sumptuous cloud-like faux fur slippers adorned with cluster pearls.",
    features: ["Plush high-density foam", "Hand-set pearl & bead brooch", "Chic bedroom glam"]
  },
  {
    id: "p7",
    name: "Rose Quartz Structured Mini Handbag",
    category: "Bags",
    image: "/images/product_pink_handbag_1794469294511.jpg",
    tagline: "Fine-grain leather top-handle purse with turn-lock and gold curb chain.",
    features: ["Textured durable leather", "Dual carry: handle & chain strap", "Multiple compartments"]
  },
  {
    id: "p8",
    name: "Emerald Green Luxury Crossbody Bag",
    category: "Bags",
    image: "/images/cat_bags_1794469276834.jpg",
    tagline: "Vibrant emerald green structured silhouette with bright gold hardware.",
    features: ["Gold metal push clasp", "Premium vegan calfskin", "Fits phone, gloss & cards"]
  },
  {
    id: "p9",
    name: "Ivory Cream Structured Chic Flap Bag",
    category: "Bags",
    image: "/images/cat_bags_1794469276834.jpg",
    tagline: "Classic pristine white flap bag with gold chain and matching luggage tag.",
    features: ["Scratch-resistant finish", "Timeless evening look", "Structured boxy silhouette"]
  },
  {
    id: "p10",
    name: "Signature 3-Pack Floral Lace Panties",
    category: "Panties",
    image: "/images/cat_panties_1794469276233.jpg",
    tagline: "Curated trio in Classic Black, Rich Wine, and Petal Pink lace.",
    features: ["Soft scalloped edges", "Cotton lined gusset", "Zero pinch waistband"]
  },
  {
    id: "p11",
    name: "Midnight Noir Sheer Hipster Panty",
    category: "Panties",
    image: "/images/cat_panties_1794469276233.jpg",
    tagline: "Delicate sheer floral lace with mini satin bow and pearl charm.",
    features: ["Seamless no-show back", "Soft four-way stretch", "Gentle on sensitive skin"]
  },
  {
    id: "p12",
    name: "Violet Silk Satin Sleep Camisole",
    category: "Night Wear",
    image: "/images/cat_nightwear_1794469275070.jpg",
    tagline: "Classic lavender satin slip top with plunging lace-trimmed V-neck.",
    features: ["Silky skin-friendly satin", "Drapey relaxed waist", "Pairs with shorts or robe"]
  }
];

/* ==========================================================================
   REVIEWS & TESTIMONIALS
   ========================================================================== */
export const TESTIMONIALS = [
  {
    quote: "The purple satin robe is even more breathtaking in person! The silk feels so smooth and cool against the skin, and delivery right to my home in Sunyani took less than 2 hours. Ordering through WhatsApp was warm, fast, and effortless.",
    author: "Ama B.",
    location: "Sunyani, Bono Region",
    item: "Purchased Royal Plum Silk Kimono Robe"
  },
  {
    quote: "I bought the blush pink buckle slippers and two sets of nightwear for my bridal shower. The quality is a 10 out of 10, packaged so tastefully in discrete wrapping. The sister responding on WhatsApp is so polite and patient!",
    author: "Nana Akua K.",
    location: "Kumasi, Ashanti Region",
    item: "Purchased Slide Slippers & Cami Set"
  },
  {
    quote: "Ordered a mini handbag and lace panties collection dispatched to Accra. Everything arrived intact the next day via VIP parcel service. The bag leather is solid and looks so expensive. I will definitely be ordering again!",
    author: "Efua M.",
    location: "East Legon, Accra",
    item: "Purchased Structured Handbag & Lace Trio"
  }
];

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Custom contact form state for WhatsApp inquiry builder
  const [inquiryCategory, setInquiryCategory] = useState("Ladies Night Wear");
  const [inquiryMessage, setInquiryMessage] = useState("");

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleCustomWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello P.Elite Luxe Collection,\nI am reaching out regarding: ${inquiryCategory}.\n${inquiryMessage ? `My inquiry: "${inquiryMessage}"\n` : ''}Please send me available designs, sizes, and pricing. Thank you!`
    );
    window.open(`https://wa.me/${BRAND.phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F9] text-[#2D1B2D] font-body relative overflow-x-hidden selection:bg-[#F8D7EE] selection:text-[#4A1942]">
      
      {/* ====================================================================
          TOP ANNOUNCEMENT BAR
          ==================================================================== */}
      <div className="bg-[#4A1942] text-white text-xs font-medium py-2 px-4 text-center tracking-wide border-b border-[#B0198C]/30 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#F8D7EE] shrink-0" />
        <span className="truncate">
          Curating Luxury for Her • Express Delivery within Sunyani & Nationwide Across Ghana
        </span>
        <span className="hidden md:inline text-[#F8D7EE]/60">•</span>
        <a 
          href={BRAND.whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hidden md:inline-flex items-center gap-1 text-[#F8D7EE] hover:text-white transition-colors underline underline-offset-2 shrink-0 font-semibold"
        >
          <MessageCircle className="w-3 h-3 text-[#25D366]" /> Chat on WhatsApp: {BRAND.phoneDisplay}
        </a>
      </div>

      {/* ====================================================================
          1. STICKY NAVBAR
          Following Top Bar Contract: Brand zone (1-line) — Nav links — Primary CTA
          ==================================================================== */}
      <header className="sticky top-0 z-40 glass-nav border-b border-[#F8D7EE]/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Zone 1: Brand Wordmark & Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group focus:outline-hidden">
            <div className="h-12 w-auto py-0.5 flex items-center">
              <img 
                src={LOGO_URL} 
                alt="P.Elite Luxe Collection Logo" 
                className="h-11 w-auto max-w-[200px] object-contain transition-transform group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to original logo if transparent logo fails
                  (e.target as HTMLImageElement).src = LOGO_ORIGINAL_URL;
                }}
              />
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A1942]/80">
            <a href="#collections" className="hover:text-[#B0198C] transition-colors whitespace-nowrap shrink-0">Collections</a>
            <a href="#showcase" className="hover:text-[#B0198C] transition-colors whitespace-nowrap shrink-0">Showcase</a>
            <a href="#how-to-order" className="hover:text-[#B0198C] transition-colors whitespace-nowrap shrink-0">How to Order</a>
            <a href="#why-us" className="hover:text-[#B0198C] transition-colors whitespace-nowrap shrink-0">Why Choose Us</a>
            <a href="#gallery" className="hover:text-[#B0198C] transition-colors whitespace-nowrap shrink-0">Gallery</a>
            <a href="#contact" className="hover:text-[#B0198C] transition-colors whitespace-nowrap shrink-0">Contact</a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8573F] hover:bg-[#D04832] text-white px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#E8573F]" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#4A1942] hover:bg-[#F8D7EE]/40 transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[#F8D7EE] px-6 py-5 shadow-xl transition-all">
            <div className="flex flex-col gap-4 text-base font-medium text-[#4A1942]">
              <a 
                href="#collections" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#B0198C] transition-colors"
              >
                Collections
              </a>
              <a 
                href="#showcase" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#B0198C] transition-colors"
              >
                Product Showcase
              </a>
              <a 
                href="#how-to-order" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#B0198C] transition-colors"
              >
                How to Order
              </a>
              <a 
                href="#why-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#B0198C] transition-colors"
              >
                Why Choose Us
              </a>
              <a 
                href="#gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#B0198C] transition-colors"
              >
                Gallery & Looks
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#B0198C] transition-colors"
              >
                Contact & Location
              </a>

              <div className="pt-3 border-t border-[#F8D7EE] flex flex-col gap-2">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold shadow-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Chat directly on WhatsApp ({BRAND.phoneDisplay})</span>
                </a>
                <p className="text-xs text-center text-[#4A1942]/60 mt-1">
                  Sunyani, Ghana • Nationwide Delivery
                </p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ====================================================================
          2. HERO SECTION
          Full-width elegant banner with brand flyer palette, logo, and CTAs
          ==================================================================== */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
        {/* Subtle Silk Glow Gradients in Background */}
        <div className="satin-curve top-10 left-[-10%] w-[500px] h-[500px] rounded-full" />
        <div className="satin-curve bottom-0 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#B0198C]/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Brand Logo & Kicker Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8D7EE]/70 border border-[#B0198C]/20 text-[#4A1942] text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#B0198C]" />
                <span>Sunyani, Ghana • Exclusive Women's Boutique</span>
              </div>

              {/* Logo in Hero Section */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src={LOGO_URL} 
                  alt="P.Elite Luxe Collection Brand Mark" 
                  className="h-16 sm:h-20 w-auto object-contain drop-shadow-xs"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#4A1942] leading-[1.15] text-balance">
                Curating Luxury for Her…
              </h1>

              {/* Subtitle / Value Proposition */}
              <p className="text-base sm:text-lg text-[#4A1942]/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience feminine elegance crafted for the modern woman. Discover our exclusive collections of rich silk night wear, comfortable luxury panties, designer slide slippers, and statement bags.
              </p>

              {/* Delivery Assurance Pill */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#4A1942] font-medium bg-white/80 backdrop-blur-xs py-2 px-4 rounded-xl border border-[#F8D7EE] w-fit mx-auto lg:mx-0 shadow-xs">
                <Truck className="w-4 h-4 text-[#B0198C] shrink-0" />
                <span>{BRAND.deliveryNote}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#collections"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#4A1942] hover:bg-[#370F30] text-white font-semibold text-sm sm:text-base text-center shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
                >
                  View Collections
                </a>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E8573F] hover:bg-[#D04832] text-white font-semibold text-sm sm:text-base text-center shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#E8573F]" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Trust Features Strip */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#F8D7EE]/80 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B0198C] shrink-0" />
                  <span className="text-xs text-[#4A1942]/80 font-medium">100% Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B0198C] shrink-0" />
                  <span className="text-xs text-[#4A1942]/80 font-medium">Fast Local Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#B0198C] shrink-0" />
                  <span className="text-xs text-[#4A1942]/80 font-medium">Discreet Packaging</span>
                </div>
              </div>
            </div>

            {/* Right Media Column - High Fashion Editorial Look */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Silk Frame Background */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#B0198C]/20 via-[#F8D7EE] to-[#E8573F]/20 rounded-3xl transform rotate-2 blur-xs" />
                
                {/* Primary Hero Showcase Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#F8D7EE]">
                  <img
                    src="/images/hero_boutique_silk_1794469261405.jpg"
                    alt="P.Elite Luxe Royal Silk Satin Nightwear"
                    className="w-full h-[430px] sm:h-[490px] object-cover object-top hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Scrim & Floating Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A1942]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-widest text-[#F8D7EE] font-semibold">New Season Arrival</span>
                        <h3 className="text-xl font-display font-bold">Royal Silk Collection</h3>
                        <p className="text-xs text-white/80">Premium Night Wear • Slippers • Bags</p>
                      </div>
                      <a
                        href={getWhatsAppProductLink("Royal Silk Collection", "Hero Showcase")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba59] text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
                        title="Inquire about this look on WhatsApp"
                      >
                        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating Preview Card (Mini) */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-[#F8D7EE] flex items-center gap-3 max-w-[240px]">
                  <img
                    src="/images/cat_slippers_1794469276934.jpg"
                    alt="Luxury Slide Slippers"
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-[10px] text-[#B0198C] font-semibold uppercase tracking-wider">Best Seller</span>
                    <p className="text-xs font-semibold text-[#4A1942] leading-tight">Gold Buckle Slides</p>
                    <span className="text-[11px] text-[#4A1942]/70">Available in all sizes</span>
                  </div>
                </div>

                {/* Second Floating Badge */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#4A1942] text-white rounded-2xl py-2 px-3.5 shadow-xl border border-[#B0198C]/40 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F8D7EE]" />
                  <span className="text-xs font-semibold">Sunyani's #1 Luxe Store</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================
          3. COLLECTIONS (CATEGORY CARDS)
          Ladies Night Wear, Ladies Panties, Slippers, Ladies Bags, And Many More
          ==================================================================== */}
      <section id="collections" className="py-16 md:py-24 bg-white/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#B0198C] uppercase">
              Curated Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#4A1942] mt-2 mb-4">
              Explore Our Signature Collections
            </h2>
            <div className="w-16 h-1 bg-[#E8573F] mx-auto rounded-full mb-4" />
            <p className="text-sm sm:text-base text-[#4A1942]/70">
              Handpicked with exquisite materials and contemporary silhouettes. Inquire directly on WhatsApp for prices and custom sizing.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COLLECTIONS.map((cat, idx) => (
              <div
                key={cat.id}
                className={`group bg-white rounded-2xl overflow-hidden border border-[#F8D7EE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                  idx === 0 ? "lg:col-span-2 md:col-span-2 lg:flex-row" : ""
                }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${idx === 0 ? "lg:w-1/2 h-72 lg:h-auto" : "h-64"}`}>
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#4A1942]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className={`p-6 sm:p-7 flex flex-col justify-between flex-1 ${idx === 0 ? "lg:w-1/2" : ""}`}>
                  <div>
                    <span className="text-xs font-semibold text-[#B0198C] uppercase tracking-wider">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-[#4A1942] mt-1 mb-3">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-[#4A1942]/70 leading-relaxed mb-6">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FAF0F8] flex items-center justify-between">
                    <button
                      onClick={() => {
                        // Switch active filter in showcase section and scroll down
                        setActiveCategory(
                          cat.id === "nightwear" ? "Night Wear"
                          : cat.id === "panties" ? "Panties"
                          : cat.id === "slippers" ? "Slippers"
                          : cat.id === "bags" ? "Bags"
                          : "All"
                        );
                        const el = document.getElementById("showcase");
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-[#4A1942] hover:text-[#B0198C] flex items-center gap-1 group-hover:underline cursor-pointer"
                    >
                      <span>Explore Designs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={getWhatsAppCategoryLink(cat.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#E8573F] hover:bg-[#D04832] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-[#E8573F]" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ====================================================================
          4. PRODUCT SHOWCASE GRID
          8 to 12 product cards with image & name only (NO PRICES).
          Includes category filter & WhatsApp inquiry button.
          ==================================================================== */}
      <section id="showcase" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#B0198C] uppercase">
              Visual Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#4A1942] mt-1">
              Curated Lookbook
            </h2>
            <p className="text-sm text-[#4A1942]/70 mt-2 max-w-lg">
              Tap any item to view high-resolution details or order directly on WhatsApp. Prices and size availability provided instantly on chat.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center flex-wrap gap-2 p-1.5 bg-white rounded-2xl border border-[#F8D7EE] shadow-xs">
            {["All", "Night Wear", "Panties", "Slippers", "Bags"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#4A1942] text-white shadow-xs font-semibold"
                    : "text-[#4A1942]/70 hover:text-[#4A1942] hover:bg-[#FAF0F8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#F8D7EE] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image Slot */}
              <div 
                className="relative aspect-square overflow-hidden bg-[#FAF0F8] cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Category kicker */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#4A1942] bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-md shadow-xs">
                    {product.category}
                  </span>
                </div>

                {/* Quick View overlay icon */}
                <div className="absolute inset-0 bg-[#4A1942]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#4A1942] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-[#B0198C]" /> View Details
                  </span>
                </div>
              </div>

              {/* Product Info (strictly NO price shown) */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 
                    onClick={() => setSelectedProduct(product)}
                    className="font-display font-bold text-base sm:text-lg text-[#4A1942] group-hover:text-[#B0198C] transition-colors line-clamp-2 cursor-pointer"
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#4A1942]/65 mt-1 line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Order on WhatsApp Action Button */}
                <div className="mt-4 pt-3 border-t border-[#FAF0F8]">
                  <a
                    href={getWhatsAppProductLink(product.name, product.category)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#FAF0F8] hover:bg-[#E8573F] text-[#4A1942] hover:text-white py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-200 group/btn"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover/btn:text-white transition-colors" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All on WhatsApp Strip */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#F8D7EE]/60 via-white to-[#F8D7EE]/60 border border-[#F8D7EE] rounded-2xl p-6 sm:p-8">
          <h4 className="text-lg sm:text-xl font-display font-bold text-[#4A1942]">
            Looking for a specific color, size, or style?
          </h4>
          <p className="text-xs sm:text-sm text-[#4A1942]/75 max-w-lg mx-auto mt-1 mb-5">
            We have new weekly arrivals directly in our Sunyani boutique that may not be displayed on the page yet. Send us a message with what you have in mind!
          </p>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Chat with Personal Shopper on WhatsApp</span>
          </a>
        </div>

      </section>

      {/* ====================================================================
          5. HOW TO ORDER
          3 simple steps with icons: Browse -> Message on WhatsApp -> Get Delivered
          ==================================================================== */}
      <section id="how-to-order" className="py-16 md:py-24 bg-[#FAF0F8] relative border-y border-[#F8D7EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#B0198C] uppercase">
              Simple & Seamless
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#4A1942] mt-2 mb-4">
              How to Order in 3 Easy Steps
            </h2>
            <div className="w-16 h-1 bg-[#E8573F] mx-auto rounded-full mb-4" />
            <p className="text-sm sm:text-base text-[#4A1942]/70">
              No complicated checkouts or password registrations. Connect directly with our friendly boutique team in Sunyani via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[#F8D7EE] shadow-sm relative flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-[#FAF0F8] border border-[#F8D7EE] text-[#4A1942] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-8 h-8 text-[#B0198C]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B0198C] mb-2">Step 01</span>
              <h3 className="text-xl font-display font-bold text-[#4A1942] mb-3">Browse the Collection</h3>
              <p className="text-sm text-[#4A1942]/70 leading-relaxed">
                Explore our catalog of ladies night wear, slippers, bags, and panties. Tap on the item you desire or screenshot your favorite design.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[#F8D7EE] shadow-sm relative flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-[#E8573F]/10 border border-[#E8573F]/20 text-[#E8573F] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-[#E8573F]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8573F] mb-2">Step 02</span>
              <h3 className="text-xl font-display font-bold text-[#4A1942] mb-3">Message us on WhatsApp</h3>
              <p className="text-sm text-[#4A1942]/70 leading-relaxed">
                Click any "Order on WhatsApp" button. A pre-filled chat opens with our team at <strong className="text-[#4A1942] font-semibold">{BRAND.phoneDisplay}</strong> to discuss pricing, colors, and sizing.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[#F8D7EE] shadow-sm relative flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-[#25D366]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] mb-2">Step 03</span>
              <h3 className="text-xl font-display font-bold text-[#4A1942] mb-3">Get Your Order Delivered</h3>
              <p className="text-sm text-[#4A1942]/70 leading-relaxed">
                Confirm your order. We deliver quickly within Sunyani and dispatch parcels nationwide across Ghana in discreet, luxury packaging.
              </p>
            </div>

          </div>

          {/* Quick CTA */}
          <div className="mt-12 text-center">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4A1942] hover:bg-[#370F30] text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Start an Order on WhatsApp Now</span>
            </a>
          </div>

        </div>
      </section>

      {/* ====================================================================
          6. WHY CHOOSE US
          4 icon cards: Premium Quality, Stylish Designs, Fast Delivery, Easy WhatsApp Ordering
          ==================================================================== */}
      <section id="why-us" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-[#B0198C] uppercase">
            The P.Elite Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#4A1942] mt-2 mb-4">
            Why Choose P.Elite Luxe Collection
          </h2>
          <div className="w-16 h-1 bg-[#E8573F] mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-[#4A1942]/70">
            Dedicated to providing Ghanaian women with timeless comfort, confident silhouettes, and warm personalized care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-[#F8D7EE] shadow-xs hover:border-[#B0198C]/40 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0F8] text-[#B0198C] flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#4A1942] mb-2">Premium Quality</h3>
            <p className="text-xs sm:text-sm text-[#4A1942]/70 leading-relaxed">
              Silky non-static satin, French-inspired scalloped lace, durable leather hardware, and plush memory-cushion footwear soles.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-[#F8D7EE] shadow-xs hover:border-[#B0198C]/40 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0F8] text-[#B0198C] flex items-center justify-center mb-5">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#4A1942] mb-2">Stylish Designs</h3>
            <p className="text-xs sm:text-sm text-[#4A1942]/70 leading-relaxed">
              Carefully curated looks that balance tasteful sensuality, feminine confidence, and luxurious everyday comfort.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-[#F8D7EE] shadow-xs hover:border-[#B0198C]/40 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0F8] text-[#B0198C] flex items-center justify-center mb-5">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#4A1942] mb-2">Fast Delivery</h3>
            <p className="text-xs sm:text-sm text-[#4A1942]/70 leading-relaxed">
              Same-day delivery within Sunyani and reliable nationwide parcel courier service across Accra, Kumasi, Takoradi, and all regions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-[#F8D7EE] shadow-xs hover:border-[#B0198C]/40 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0F8] text-[#25D366] flex items-center justify-center mb-5">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#4A1942] mb-2">Easy WhatsApp Ordering</h3>
            <p className="text-xs sm:text-sm text-[#4A1942]/70 leading-relaxed">
              Chat directly with our real boutique stylists. Inquire about colors, sizes, or special gifts with zero hassle.
            </p>
          </div>

        </div>

      </section>

      {/* ====================================================================
          7. GALLERY & LIGHTBOX
          Masonry / Grid photo gallery of boutique pieces with Lightbox
          ==================================================================== */}
      <section id="gallery" className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#B0198C] uppercase">
              Brand Atmosphere
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#4A1942] mt-2 mb-4">
              Luxe Looks & Boutique Gallery
            </h2>
            <div className="w-16 h-1 bg-[#E8573F] mx-auto rounded-full mb-4" />
            <p className="text-sm sm:text-base text-[#4A1942]/70">
              A glimpse into the elegance of P.Elite Luxe Collection. Click any image to view in full resolution.
            </p>
          </div>

          {/* Masonry / Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            {/* Gallery Item 1: Original Brand Flyer */}
            <div 
              onClick={() => setLightboxImage(FLYER_URL)}
              className="group relative rounded-2xl overflow-hidden aspect-3/4 bg-[#FAF0F8] cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={FLYER_URL}
                alt="P.Elite Luxe Official Brand Flyer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1942]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-xs font-semibold text-[#F8D7EE]">Official Flyer</span>
                <p className="text-sm font-display font-bold">P.Elite Luxe Collection</p>
              </div>
            </div>

            {/* Gallery Item 2: Hero Editorial */}
            <div 
              onClick={() => setLightboxImage("/images/hero_boutique_silk_1794469261405.jpg")}
              className="group relative rounded-2xl overflow-hidden aspect-3/4 bg-[#FAF0F8] cursor-pointer shadow-sm hover:shadow-xl transition-all md:col-span-2"
            >
              <img
                src="/images/hero_boutique_silk_1794469261405.jpg"
                alt="Royal Silk Satin Robe Nightwear"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1942]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end text-white">
                <span className="text-xs font-semibold text-[#F8D7EE]">Signature Editorial</span>
                <p className="text-base font-display font-bold">Royal Plum Silk Robe Collection</p>
              </div>
            </div>

            {/* Gallery Item 3: Bags */}
            <div 
              onClick={() => setLightboxImage("/images/cat_bags_1794469276834.jpg")}
              className="group relative rounded-2xl overflow-hidden aspect-3/4 bg-[#FAF0F8] cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src="/images/cat_bags_1794469276834.jpg"
                alt="Luxury Mini Handbags"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1942]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-xs font-semibold text-[#F8D7EE]">Boutique Display</span>
                <p className="text-sm font-display font-bold">Chic Designer Handbags</p>
              </div>
            </div>

            {/* Gallery Item 4: Slippers */}
            <div 
              onClick={() => setLightboxImage("/images/cat_slippers_1794469276934.jpg")}
              className="group relative rounded-2xl overflow-hidden aspect-3/4 bg-[#FAF0F8] cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src="/images/cat_slippers_1794469276934.jpg"
                alt="Gold Buckle Slide Slippers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1942]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-xs font-semibold text-[#F8D7EE]">Footwear Glamour</span>
                <p className="text-sm font-display font-bold">Blush Pink Buckle Slides</p>
              </div>
            </div>

            {/* Gallery Item 5: Lace Panties */}
            <div 
              onClick={() => setLightboxImage("/images/cat_panties_1794469276233.jpg")}
              className="group relative rounded-2xl overflow-hidden aspect-3/4 bg-[#FAF0F8] cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src="/images/cat_panties_1794469276233.jpg"
                alt="Luxury Lace Panties"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1942]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-xs font-semibold text-[#F8D7EE]">Delicate Details</span>
                <p className="text-sm font-display font-bold">Lace Intimates Trio</p>
              </div>
            </div>

            {/* Gallery Item 6: Lavender Cami Set */}
            <div 
              onClick={() => setLightboxImage("/images/cat_nightwear_1794469275070.jpg")}
              className="group relative rounded-2xl overflow-hidden aspect-3/4 bg-[#FAF0F8] cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src="/images/cat_nightwear_1794469275070.jpg"
                alt="Silk Satin Nightwear Cami"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1942]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-xs font-semibold text-[#F8D7EE]">Silky Loungewear</span>
                <p className="text-sm font-display font-bold">Lavender Lace Cami Set</p>
              </div>
            </div>

            {/* Gallery Item 7: Kimono Robe Mannequin */}
            <div 
              onClick={() => setLightboxImage("/images/product_kimono_robe_1794469293224.jpg")}
              className="group relative rounded-2xl overflow-hidden aspect-3/4 bg-[#FAF0F8] cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src="/images/product_kimono_robe_1794469293224.jpg"
                alt="Plum Silk Robe"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A1942]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-xs font-semibold text-[#F8D7EE]">Bespoke Drape</span>
                <p className="text-sm font-display font-bold">Long Plum Satin Kimono</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ====================================================================
          8. TESTIMONIALS CAROUSEL
          Sample customer reviews in carousel format
          ==================================================================== */}
      <section className="py-16 md:py-24 bg-[#FAF0F8] relative border-y border-[#F8D7EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-[#B0198C] uppercase">
              Customer Love
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#4A1942] mt-1">
              What Our Clients Say
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#F8D7EE] shadow-lg relative">
            <div className="flex flex-col items-center text-center">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 text-[#E8573F] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base sm:text-xl font-display italic text-[#4A1942] leading-relaxed mb-6">
                "{TESTIMONIALS[activeReviewIdx].quote}"
              </blockquote>

              {/* Author & Item */}
              <div className="flex flex-col items-center">
                <h4 className="font-bold text-base text-[#4A1942]">
                  {TESTIMONIALS[activeReviewIdx].author}
                </h4>
                <p className="text-xs text-[#B0198C] font-semibold mt-0.5">
                  {TESTIMONIALS[activeReviewIdx].location}
                </p>
                <span className="text-[11px] text-[#4A1942]/60 mt-1 bg-[#FAF0F8] px-3 py-1 rounded-full">
                  {TESTIMONIALS[activeReviewIdx].item}
                </span>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={() => setActiveReviewIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                  className="p-2.5 rounded-full border border-[#F8D7EE] hover:bg-[#FAF0F8] text-[#4A1942] transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveReviewIdx(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeReviewIdx === idx ? "w-8 bg-[#4A1942]" : "w-2.5 bg-[#F8D7EE]"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveReviewIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                  className="p-2.5 rounded-full border border-[#F8D7EE] hover:bg-[#FAF0F8] text-[#4A1942] transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ====================================================================
          9. CALL-TO-ACTION BANNER
          "Ready to treat yourself? Message us on WhatsApp for prices and orders"
          ==================================================================== */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#4A1942] via-[#370F30] to-[#5a1b50] text-white">
        
        {/* Decorative elements */}
        <div className="satin-curve top-0 right-0 w-[400px] h-[400px] bg-[#B0198C]/20" />
        <div className="satin-curve bottom-0 left-0 w-[400px] h-[400px] bg-[#E8573F]/15" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center justify-center mb-6">
            <img 
              src={LOGO_WHITE_URL} 
              alt="P.Elite Luxe Collection White Logo" 
              className="h-14 sm:h-16 w-auto object-contain opacity-95"
              referrerPolicy="no-referrer"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold leading-tight mb-4">
            Ready to Treat Yourself to Pure Luxury?
          </h2>
          
          <p className="text-base sm:text-lg text-[#F8D7EE]/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Message us on WhatsApp to inquire about current prices, sizing recommendations, and same-day delivery in Sunyani or dispatch across Ghana.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E8573F] hover:bg-[#D04832] text-white px-8 py-4 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-6 h-6 fill-white text-[#E8573F]" />
              <span>Message Us on WhatsApp for Prices & Orders</span>
            </a>
            
            <a
              href={`tel:${BRAND.phoneNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-full text-base font-semibold border border-white/20 transition-colors"
            >
              <Phone className="w-5 h-5 text-[#F8D7EE]" />
              <span>Call: {BRAND.phoneDisplay}</span>
            </a>
          </div>

          <p className="text-xs text-[#F8D7EE]/70 mt-6 tracking-wide">
            ✓ Quick WhatsApp Responses • ✓ Discreet & Secure Delivery • ✓ Located in Sunyani, Ghana
          </p>

        </div>
      </section>

      {/* ====================================================================
          10. CONTACT & LOCATION SECTION
          Phone, WhatsApp, Sunyani Location, Map Placeholder, Opening Hours
          ==================================================================== */}
      <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-[#B0198C] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#4A1942] mt-2 mb-4">
            Visit & Contact P.Elite Luxe
          </h2>
          <div className="w-16 h-1 bg-[#E8573F] mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-[#4A1942]/70">
            We are always thrilled to assist you with inquiries, custom requests, and order assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp Form */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone / WhatsApp Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#F8D7EE] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F8] text-[#25D366] flex items-center justify-center mb-4">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#4A1942]/60 uppercase font-semibold">Phone & WhatsApp</span>
                  <p className="text-lg font-bold text-[#4A1942] mt-1">{BRAND.phoneDisplay}</p>
                  <p className="text-xs text-[#4A1942]/70 mt-1">Direct inquiries & instant replies</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#FAF0F8]">
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#B0198C] hover:text-[#4A1942] flex items-center gap-1"
                  >
                    <span>Open WhatsApp Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#F8D7EE] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F8] text-[#B0198C] flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-[#4A1942]/60 uppercase font-semibold">Boutique Location</span>
                  <p className="text-lg font-bold text-[#4A1942] mt-1">Sunyani, Ghana</p>
                  <p className="text-xs text-[#4A1942]/70 mt-1">Bono Region, Ghana</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#FAF0F8]">
                  <span className="text-xs font-semibold text-[#4A1942]/80">
                    Nationwide Dispatch
                  </span>
                </div>
              </div>

              {/* Opening Hours Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#F8D7EE] shadow-xs sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F8] text-[#4A1942] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-[#4A1942]/60 uppercase font-semibold">Business Hours</span>
                    <p className="text-sm font-semibold text-[#4A1942] mt-1">
                      Monday to Saturday: 8:30 AM – 7:00 PM
                    </p>
                    <p className="text-sm font-semibold text-[#4A1942]">
                      Sunday: 1:00 PM – 6:00 PM
                    </p>
                    <p className="text-xs text-[#B0198C] mt-2 font-medium">
                      *WhatsApp inquiries welcome 24/7!
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Quick-Inquiry Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F8D7EE] shadow-xs">
              <h3 className="font-display font-bold text-xl text-[#4A1942] mb-1">
                Send a Direct WhatsApp Message
              </h3>
              <p className="text-xs text-[#4A1942]/70 mb-5">
                Select your interest and we will automatically format your WhatsApp chat with our Sunyani team.
              </p>

              <form onSubmit={handleCustomWhatsAppSend} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A1942] mb-1">
                    What are you looking for?
                  </label>
                  <select
                    value={inquiryCategory}
                    onChange={(e) => setInquiryCategory(e.target.value)}
                    className="w-full bg-[#FAF0F8] border border-[#F8D7EE] rounded-xl px-4 py-2.5 text-sm text-[#4A1942] focus:outline-hidden focus:ring-2 focus:ring-[#B0198C]/40"
                  >
                    <option value="Ladies Night Wear">Ladies Night Wear (Robes, Pajamas, Cami Sets)</option>
                    <option value="Ladies Panties">Ladies Panties (Lace, Seamless, Everyday)</option>
                    <option value="Slippers">Slippers (Slide Sandals, Fluffy Slides)</option>
                    <option value="Ladies Bags">Ladies Bags (Mini Bags, Handbags, Totes)</option>
                    <option value="Gift Set or Babydoll">Gift Set / Babydoll Lingerie</option>
                    <option value="General Boutique Inquiry">General Inquiry / Pricing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A1942] mb-1">
                    Any specific details? (optional: size, preferred color, delivery location)
                  </label>
                  <textarea
                    rows={3}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="e.g. Do you have the purple satin robe in Medium? Can you deliver to Fiapre in Sunyani today?"
                    className="w-full bg-[#FAF0F8] border border-[#F8D7EE] rounded-xl p-3 text-sm text-[#4A1942] placeholder-[#4A1942]/40 focus:outline-hidden focus:ring-2 focus:ring-[#B0198C]/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-semibold text-sm shadow-md transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to WhatsApp</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Google Maps & Location Showcase Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-[#F8D7EE] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold tracking-wider uppercase text-[#B0198C]">Our Hub</span>
                  <h3 className="text-2xl font-display font-bold text-[#4A1942]">Sunyani, Bono Region</h3>
                </div>
                <div className="bg-[#FAF0F8] text-[#4A1942] px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-[#F8D7EE]">
                  <MapPin className="w-3.5 h-3.5 text-[#E8573F]" />
                  <span>Ghana</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#4A1942]/75 leading-relaxed mb-6">
                Based in the vibrant capital of the Bono Region, P.Elite Luxe Collection offers immediate local delivery within Sunyani and reliable parcel transport nationwide across all regions of Ghana.
              </p>

              {/* Stylized Map View / Embed Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#F8D7EE] bg-[#FAF0F8] h-72 sm:h-80 shadow-inner group">
                <iframe
                  title="Sunyani Ghana Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63259.98929007255!2d-2.3592185!3d7.3399434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfda5fcf216ec9bf%3A0xb3fc72545bf48130!2sSunyani%2C%20Ghana!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  className="w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#F8D7EE] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#4A1942] text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#F8D7EE]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#4A1942]">P.Elite Luxe Collection</p>
                      <p className="text-[11px] text-[#4A1942]/70">Sunyani, Bono Region, Ghana</p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sunyani,+Ghana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#B0198C] hover:underline whitespace-nowrap"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Nationwide Delivery Notice */}
            <div className="mt-6 pt-5 border-t border-[#FAF0F8] flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#E8573F] shrink-0" />
              <p className="text-xs text-[#4A1942]/80 leading-normal">
                <strong>Nationwide Dispatch:</strong> Daily parcel departures to Accra, Kumasi, Takoradi, Tamale, Cape Coast, Ho, and Koforidua via certified parcel operators.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ====================================================================
          11. FOOTER
          Logo, Brand Name, Tagline, Quick Links, Social Icons, Copyright
          ==================================================================== */}
      <footer className="bg-[#4A1942] text-white pt-16 pb-12 border-t border-[#B0198C]/30 relative overflow-hidden">
        
        {/* Subtle Silk Glow */}
        <div className="satin-curve bottom-0 right-0 w-[400px] h-[400px] bg-[#B0198C]/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F8D7EE]/15">
            
            {/* Col 1: Brand & Logo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="h-14 w-auto flex items-center">
                <img 
                  src={LOGO_WHITE_URL} 
                  alt="P.Elite Luxe Collection Brand Mark" 
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-sm text-[#F8D7EE]/80 italic font-display text-lg">
                "{BRAND.tagline}"
              </p>
              <p className="text-xs text-[#F8D7EE]/70 max-w-sm leading-relaxed">
                Ghanaian women's luxury boutique specializing in premium silk satin night wear, intimates, chic slippers, and designer bags.
              </p>
              <div className="text-xs text-[#F8D7EE]/80 flex items-center gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#E8573F]" />
                <span>Sunyani, Bono Region, Ghana</span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold tracking-widest text-[#F8D7EE] uppercase">
                Explore
              </h4>
              <ul className="space-y-2 text-xs text-white/80">
                <li><a href="#collections" className="hover:text-[#F8D7EE] transition-colors">Ladies Night Wear</a></li>
                <li><a href="#collections" className="hover:text-[#F8D7EE] transition-colors">Ladies Panties & Intimates</a></li>
                <li><a href="#collections" className="hover:text-[#F8D7EE] transition-colors">Slide & Plush Slippers</a></li>
                <li><a href="#collections" className="hover:text-[#F8D7EE] transition-colors">Ladies Handbags</a></li>
                <li><a href="#showcase" className="hover:text-[#F8D7EE] transition-colors">Catalog Lookbook</a></li>
                <li><a href="#how-to-order" className="hover:text-[#F8D7EE] transition-colors">How to Order</a></li>
              </ul>
            </div>

            {/* Col 3: Customer Care & Social */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-bold tracking-widest text-[#F8D7EE] uppercase">
                WhatsApp Customer Care
              </h4>
              <p className="text-xs text-[#F8D7EE]/80 leading-relaxed">
                Connect with our team for questions, sizes, colors, and direct orders:
              </p>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Chat: {BRAND.phoneDisplay}</span>
              </a>

              {/* Social Media Links */}
              <div className="pt-2">
                <span className="text-[11px] text-[#F8D7EE]/60 block mb-2 uppercase tracking-wider font-semibold">
                  Follow Our Journey
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/40 flex items-center justify-center text-[#25D366] transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Notes */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8D7EE]/60 text-center sm:text-left">
            <p>© 2026 P.Elite Luxe Collection. All rights reserved.</p>
            <p>Curating Luxury for Her • Sunyani, Ghana • Nationwide Delivery</p>
          </div>
        </div>

      </footer>

      {/* ====================================================================
          FLOATING WHATSAPP BUTTON (Fixed bottom-right on all screens)
          With gentle pulse animation and tooltip
          ==================================================================== */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
        <span className="hidden sm:inline-block bg-[#4A1942] text-white text-xs font-semibold py-1.5 px-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-[#B0198C]/40">
          Order on WhatsApp
        </span>
        <a
          href={BRAND.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 animate-pulse-wa"
          aria-label="Chat with P.Elite Luxe on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
        </a>
      </div>

      {/* ====================================================================
          PRODUCT QUICK VIEW MODAL
          Allows inspecting product details before ordering on WhatsApp
          ==================================================================== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#F8D7EE] relative flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#4A1942] flex items-center justify-center shadow-md transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="md:w-1/2 aspect-square md:aspect-auto bg-[#FAF0F8] relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#4A1942] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
              </div>
            </div>

            {/* Modal Details */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#B0198C] uppercase tracking-wider">
                  P.Elite Luxe Collection
                </span>
                <h3 className="text-2xl font-display font-bold text-[#4A1942] mt-1 mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A1942]/75 leading-relaxed mb-4">
                  {selectedProduct.tagline}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-[#4A1942] uppercase tracking-wider block">
                    Product Highlights:
                  </span>
                  {selectedProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#4A1942]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B0198C] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Assurance note */}
                <div className="bg-[#FAF0F8] p-3 rounded-xl border border-[#F8D7EE] text-[11px] text-[#4A1942]/80 mb-6">
                  📍 Available at our Sunyani boutique. Instant inquiry for prices, size charts & nationwide delivery.
                </div>
              </div>

              {/* Order on WhatsApp Button */}
              <a
                href={getWhatsAppProductLink(selectedProduct.name, selectedProduct.category)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#E8573F] hover:bg-[#D04832] text-white py-3.5 rounded-full font-semibold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#E8573F]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* ====================================================================
          IMAGE LIGHTBOX MODAL (For Gallery)
          ==================================================================== */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="P.Elite Luxe Full View"
              className="max-h-[85vh] w-auto max-w-full object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}

    </div>
  );
}
