import ContactSection from "@/components/ContactSection"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contacts;