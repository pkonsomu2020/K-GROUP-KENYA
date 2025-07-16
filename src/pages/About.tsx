import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, offset: 80 });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
      <main>
        <AboutSection />
        {/* Company Story */}
        <section className="py-20" data-aos="fade-up">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              K-GROUP KENYA began as a vision to empower industries and nurture creativity across Kenya. From humble beginnings in media and events, we have grown into a multidisciplinary group with a footprint in automotive, education, broadcasting, and more. Our journey is defined by innovation, integrity, and a relentless drive to make a positive impact in every sector we touch.
            </p>
          </div>
        </section>
        {/* Vision & Mission */}
        <section className="py-20 bg-muted/30" data-aos="fade-up">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
              <p className="text-lg text-muted-foreground mb-4">
                To be the leading catalyst for positive change in Africa, inspiring excellence and innovation across industries.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To empower communities, nurture talent, and deliver exceptional value through our diverse subsidiaries, while upholding the highest standards of integrity and service.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <img src="/COMPANY LOGOS/K-GROUP.jpg" alt="K-GROUP Logo" className="w-40 h-40 rounded-full shadow-lg border-4 border-secondary bg-background object-contain" data-aos="zoom-in" />
            </div>
          </div>
        </section>
        {/* Leadership */}
        <section className="py-20" data-aos="fade-up">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Leadership</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our leadership team is composed of passionate professionals and visionaries who drive our mission forward. Their expertise spans media, business, education, and community development.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-background rounded-xl shadow-lg p-6 w-64" data-aos="fade-up" data-aos-delay="100">
                <img src="/COMPANY LOGOS/K-GROUP.jpg" alt="CEO" className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-secondary object-contain" />
                <h4 className="font-bold text-xl mb-1">John Kach</h4>
                <p className="text-secondary font-semibold mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">Visionary leader, entrepreneur, and music minister with a passion for empowering youth and communities.</p>
              </div>
              {/* Add more leaders as needed */}
            </div>
          </div>
        </section>
        {/* Timeline */}
        <section className="py-20 bg-muted/30" data-aos="fade-up">
          <div className="max-w-5xl mx-auto px-4 mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-14 text-secondary text-center">Our Journey</h2>
            <ol className="relative border-l-4 border-secondary ml-12">
              <li className="mb-20 ml-8" data-aos="fade-right">
                <span className="absolute -left-8 flex items-center justify-center w-16 h-16 bg-secondary rounded-full ring-8 ring-background">
                  <span className="text-white font-bold text-2xl">2012</span>
                </span>
                <div className="ml-24">
                  <h3 className="font-bold text-2xl mb-2">Founded</h3>
                  <p className="text-muted-foreground text-lg">K-GROUP KENYA is established, focusing on media and event services.</p>
                </div>
              </li>
              <li className="mb-20 ml-8" data-aos="fade-right" data-aos-delay="100">
                <span className="absolute -left-8 flex items-center justify-center w-16 h-16 bg-secondary rounded-full ring-8 ring-background">
                  <span className="text-white font-bold text-2xl">2016</span>
                </span>
                <div className="ml-24">
                  <h3 className="font-bold text-2xl mb-2">Expansion</h3>
                  <p className="text-muted-foreground text-lg">Launched automotive and education subsidiaries, broadening our impact.</p>
                </div>
              </li>
              <li className="mb-20 ml-8" data-aos="fade-right" data-aos-delay="200">
                <span className="absolute -left-8 flex items-center justify-center w-16 h-16 bg-secondary rounded-full ring-8 ring-background">
                  <span className="text-white font-bold text-2xl">2020</span>
                </span>
                <div className="ml-24">
                  <h3 className="font-bold text-2xl mb-2">Digital Era</h3>
                  <p className="text-muted-foreground text-lg">Embraced digital broadcasting and online platforms, reaching a wider audience.</p>
                </div>
              </li>
              <li className="ml-8" data-aos="fade-right" data-aos-delay="300">
                <span className="absolute -left-8 flex items-center justify-center w-16 h-16 bg-secondary rounded-full ring-8 ring-background">
                  <span className="text-white font-bold text-2xl">2024</span>
                </span>
                <div className="ml-24">
                  <h3 className="font-bold text-2xl mb-2">Today</h3>
                  <p className="text-muted-foreground text-lg">A multidisciplinary group empowering industries, nurturing creativity, and driving innovation across Kenya and beyond.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        {/* Call to Action */}
        <section className="py-20 text-center" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you are a creative, entrepreneur, or community leader, K-GROUP KENYA welcomes you to partner with us. Let’s build a brighter future together.
          </p>
          <a href="/contacts" className="brand-btn text-lg">Contact Us</a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 