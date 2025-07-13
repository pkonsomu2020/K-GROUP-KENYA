import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LinksAutoLogo from "/COMPANY LOGOS/LINKSAUTOMOTORS.jpg";
import heroImg from "/COMPANY LOGOS/LINKSAUTOMOTORS.jpg";
import Banner from "@/components/Banner";

const galleryImages = [
  heroImg,
  // Add more images as needed
];

const LinksAutoMotors = () => (
  <div className="min-h-screen bg-background pt-16">
    <Navigation />
    {/* Hero Banner */}
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-8 pb-12 bg-brand-black overflow-hidden">
      <img src="/src/assets/dj-kach-hero.jpg" alt="Banner Background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="w-48 h-48 rounded-full bg-white border-4 border-brand-red flex items-center justify-center mx-auto mb-2 overflow-hidden">
          <img src={LinksAutoLogo} alt="Links Auto Motors" className="w-40 h-40 object-contain" />
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold text-black mb-2">Links Auto Motors</h1>
        <span className="text-brand-red font-bold text-2xl mb-4 block">Drive the Future with Confidence.</span>
        <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto mb-0 leading-relaxed">
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
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get Your Next Car Today</h2>
        <p className="mb-6 text-lg">Contact us for car sales, trade-ins, servicing, or to book a test drive. Experience quality and confidence with Links Auto Motors.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="/contacts" className="brand-btn-outline">Contact Us</a>
          <a href="https://www.facebook.com/linksautomotors" target="_blank" rel="noopener noreferrer" className="brand-btn-outline">Facebook Page</a>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);
export default LinksAutoMotors; 