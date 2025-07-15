import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const teamMembers = [
  {
    name: "John Kach",
    role: "Founder & CEO",
    photo: "/COMPANY LOGOS/K-GROUP.jpg",
    bio: "Visionary leader, entrepreneur, and music minister with a passion for empowering youth and communities."
  },
  {
    name: "Grace Mwangi",
    role: "Head of Events",
    photo: "/COMPANY LOGOS/BREAKOUTEVENTS.jpg",
    bio: "Expert in event planning and logistics, ensuring every event is memorable and impactful."
  },
  {
    name: "Samuel Otieno",
    role: "Lead Sound Engineer",
    photo: "/COMPANY LOGOS/KACHSOUNDMEDIA.jpg",
    bio: "Bringing technical excellence and creativity to every production and live event."
  },
  {
    name: "Mary Wanjiru",
    role: "Media & Communications",
    photo: "/COMPANY LOGOS/KBRTV - WHITE.jpg",
    bio: "Storyteller and media strategist, amplifying the K-GROUP KENYA brand across platforms."
  },
  {
    name: "David Kimani",
    role: "Automotive Specialist",
    photo: "/COMPANY LOGOS/LINKSAUTOMOTORS.jpg",
    bio: "Automotive expert dedicated to quality service and customer satisfaction."
  }
];

const Team = () => (
  <div className="min-h-screen bg-background pt-16">
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-brand-red mb-4">Meet Our Team</h1>
        <p className="text-lg text-brand-black max-w-2xl mx-auto">
          Our dedicated team brings together diverse talents and expertise to drive K-GROUP KENYA's mission of empowering industries and nurturing creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-brand-black rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full object-cover border-4 border-brand-red mb-4 bg-white" />
            <h2 className="text-2xl font-bold text-brand-red mb-1">{member.name}</h2>
            <h3 className="text-lg font-semibold text-white mb-2">{member.role}</h3>
            <p className="text-white text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Team; 