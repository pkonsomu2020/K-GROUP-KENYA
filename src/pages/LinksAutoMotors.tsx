import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LinksAutoLogo from "/COMPANY LOGOS/LINKSAUTOMOTORS.jpg";
import heroImg from "/COMPANY LOGOS/LINKSAUTOMOTORS.jpg";
import Banner from "@/components/Banner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Phone, Smartphone, Facebook, Instagram, Youtube } from "lucide-react";

const galleryImages = [
  "/GALLERY/links auto motors/links 1.jpg",
  "/GALLERY/links auto motors/links 2.jpg",
  "/GALLERY/links auto motors/links 3.jpg",
  "/GALLERY/links auto motors/links 4.jpg",
  "/GALLERY/links auto motors/links 5.jpg",
  "/GALLERY/links auto motors/links 6.jpg"
];

const LinksAutoMotors = () => (
  <div className="min-h-screen bg-background pt-16">
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
    {/* Hero Banner */}
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 bg-brand-black overflow-hidden">
      <img src="/dj-kach-hero.jpg" alt="Banner Background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="relative w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-brand-red mt-0 mb-4 overflow-hidden">
          <img src={LinksAutoLogo} alt="Links Auto Motors" className="object-cover w-full h-full" />
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-2">Links Auto Motors</h1>
        <span className="text-brand-red font-bold text-2xl mb-4 block">Drive the Future with Confidence.</span>
        <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-0 leading-relaxed">
          Automotive wing of K-GROUP KENYA, providing high-quality cars, trade-in, financing, and auto services for urban and rural mobility.
        </p>
      </div>
    </section>

    {/* About Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="brand-section-title">About Us</h2>
          <p className="text-brand-black mb-4 text-lg">
            Links Auto Motors is your go-to source for premium pre-owned and new vehicles. We offer trade-in, financing, import assistance, and full auto servicing with verified vehicle history and transparent pricing.
          </p>
          <ul className="list-disc list-inside text-brand-black mb-4">
            <li>Car Sales (SUVs, Sedans, Vans, Trucks)</li>
            <li>Trade-In & Financing Support</li>
            <li>Car Import Assistance</li>
            <li>Spare Parts & Auto Servicing</li>
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-brand-red mb-2">Contacts</h3>
            <ul className="text-black text-lg">
              <li>Phone: 020-2113473</li>
              <li>Phone: 0768550331</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <img src={galleryImages[0]} alt="Links Auto Motors Gallery" className="rounded-xl shadow-lg object-cover w-full h-64" />
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="py-16 px-4 bg-brand-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="brand-section-title text-white">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {galleryImages.map((img, idx) => (
            <img key={idx} src={img} alt="Links Auto Motors Gallery" className="rounded-xl shadow-lg object-cover w-full h-56" />
          ))}
        </div>
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="py-16 px-4 bg-brand-red text-white text-center">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get Your Next Car Today</h2>
        <p className="mb-6 text-lg">Contact us for car sales, trade-ins, servicing, or to book a test drive. Experience quality and confidence with Links Auto Motors.</p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="tel:0202113473" className="bg-white text-brand-red font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition flex items-center gap-2">
              <Phone className="w-5 h-5 text-brand-red" />
              020-2113473
            </a>
            <a href="tel:0768550331" className="bg-white text-brand-red font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-brand-red" />
              0768550331
            </a>
          </div>
          <div className="flex gap-4 justify-center mt-2">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200"><Facebook className="w-8 h-8" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200"><Instagram className="w-8 h-8" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200"><Youtube className="w-8 h-8" /></a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
export default LinksAutoMotors; 