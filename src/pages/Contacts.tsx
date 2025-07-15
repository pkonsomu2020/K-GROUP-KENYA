import ContactSection from "@/components/ContactSection"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Phone } from "lucide-react";

const Contacts = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["020-2113473", "0768550331"],
      description: "Call or WhatsApp for immediate response"
    },
  ];
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