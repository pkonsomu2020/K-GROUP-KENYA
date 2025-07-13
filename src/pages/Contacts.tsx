import ContactSection from "@/components/ContactSection"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />
      <div className="pt-0">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;