import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const csrLogos = [
  "/COMPANY LOGOS/K-GROUP KENYA CSR - BLACK BG.jpg",
  "/COMPANY LOGOS/K-GROUP KENYA CSR - WHITE BG.jpg"
];

const galleryImages = [
  ...[...Array(6)].map((_, i) => `/CSR PAGE/miale home ${i + 1}.jpg`),
  ...[...Array(27)].map((_, i) => `/CSR PAGE/nyumba ya tumaini ${i + 1}.jpg`)
];

const CSR = () => (
  <div className="min-h-screen bg-background pt-16">
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-12 bg-brand-black overflow-hidden">
      {/* Background image with overlay */}
      <img src="/CSR PAGE/miale home 1.jpg" alt="CSR Background" className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" />
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-20 flex flex-col items-center w-full">
        {/* Logo in circle with red border */}
        <div className="relative w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-brand-red mt-0 mb-4 overflow-hidden">
          <img src={csrLogos[0]} alt="CSR Logo" className="object-contain w-full h-full" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 drop-shadow-lg">CSR & Missions</h1>
        <span className="text-brand-red font-bold text-2xl mb-4 block">Compassion in Action. Faith in Motion.</span>
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-0 leading-relaxed">
          K-GROUP KENYA is committed to making a difference through Corporate Social Responsibility (CSR) and Christian Missions.
        </p>
      </div>
    </section>
    {/* About CSR & Missions */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold uppercase mb-4 text-brand-red">Our Mission</h2>
          <p className="text-brand-black mb-4 text-lg">
            We believe in giving back to society and living out our faith through action. Our CSR and Missions initiatives include regular visits to children’s homes, providing essential supplies, mentorship, and spiritual support. We partner with local organizations to maximize impact and foster hope, dignity, and transformation.
          </p>
          <ul className="list-disc list-inside text-brand-black mb-4">
            <li>Children’s Home Visits & Support</li>
            <li>Christian Missionary Outreach</li>
            <li>Community Empowerment Projects</li>
            <li>Mentorship & Spiritual Guidance</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img src={csrLogos[0]} alt="CSR Logo Black" className="rounded-xl shadow-lg object-contain w-48 h-48 bg-white p-4" />
        </div>
      </div>
    </section>
    {/* Gallery Section */}
    <section className="py-16 px-4 bg-brand-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="brand-section-title text-white">Gallery</h2>
        <div className="mt-8 relative">
          <Carousel
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((img, idx) => (
                <CarouselItem key={idx} className="flex items-center justify-center">
                  <img
                    src={img}
                    alt={`CSR Gallery ${idx + 1}`}
                    className="rounded-xl shadow-lg object-contain max-h-[500px] mx-auto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 z-20" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2 z-20" />
          </Carousel>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default CSR; 