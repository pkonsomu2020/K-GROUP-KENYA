import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"
import { useState } from 'react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["020-2113473", "0768550331"],
      description: "Call or WhatsApp for immediate response"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["kachsoundmedia@gmail.com"],
      description: "Professional inquiries and bookings"
    },
    {
      icon: MapPin,
      title: "Location", 
      details: ["Dolfine Plaza, Magadi Rd, Ongata Rongai"],
      description: "Available for events nationwide"
    },
    {
      icon: Clock,
      title: "Availability",
      details: ["Mon-Fri: 9AM-6PM", "Weekends: By appointment"],
      description: "Flexible scheduling for events"
    }
  ]

  const socialPlatforms = [
    { name: "Facebook", icon: Facebook, handle: "@kachsoundntertainment", color: "text-blue-600", url: "https://www.facebook.com/kachsoundntertainment/" },
    { name: "Instagram", icon: Instagram, handle: "@kachsoundmedia", color: "text-pink-600", url: "https://www.instagram.com/kachsoundmedia/" },
    { name: "YouTube", icon: Youtube, handle: "@kachsoundmedia4437", color: "text-red-600", url: "https://www.youtube.com/@kachsoundmedia4437" },
    { name: "WhatsApp", icon: MessageCircle, handle: "+254 772 082000", color: "text-green-600", url: "https://wa.me/254772082000" }
  ]

  const eventTypes = [
    "Church Service",
    "Wedding Ceremony", 
    "Corporate Event",
    "Festival/Concert",
    "Youth Event",
    "Revival Meeting",
    "Birthday Party",
    "Other"
  ]

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '', message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSelect = (name, value) => {
    setForm(f => ({ ...f, [name]: value }));
  };

  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";
  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess('');
    setError('');
    // Map fields for /api/bookings
    const bookingPayload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      companyEnquire: form.company,
      additionalDetails: form.message
    };
    try {
      const res = await fetch(`${API_BASE}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingPayload)
      });
      const data = await res.json();
      if (data.success) {
        setSuccess('Your message has been sent!');
        setForm({
          firstName: '', lastName: '', email: '', phone: '', company: '', message: ''
        });
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Failed to send. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-divine">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to book K-GROUP KENYA for your next event? Have questions about our services? 
            We'd love to hear from you and help create an unforgettable experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-divine">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-foreground">{detail}</p>
                        ))}
                        <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-divine">Follow the Journey</h3>
              <div className="space-y-3">
                {socialPlatforms.map((platform, index) => {
                  const Icon = platform.icon
                  return (
                    <a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-background transition-colors group"
                    >
                      <Icon className={`w-5 h-5 ${platform.color} group-hover:scale-110 transition-transform`} />
                      <div>
                        <div className="font-medium text-sm">{platform.name}</div>
                        <div className="text-xs text-muted-foreground">{platform.handle}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <Card className="card-divine">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 text-green-800 p-3 rounded-full inline-flex mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours, usually much sooner!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-divine">
              <CardHeader>
                <CardTitle className="text-2xl text-divine">Book K-GROUP KENYA</CardTitle>
                <p className="text-muted-foreground">
                  Fill out this form and we'll get back to you with a customized quote for your event.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        value={form.firstName} 
                        onChange={handleChange} 
                        placeholder="Enter your first name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        value={form.lastName} 
                        onChange={handleChange} 
                        placeholder="Enter your last name" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={handleChange} 
                        placeholder="your@email.com" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={form.phone} 
                        onChange={handleChange} 
                        placeholder="+254 700 000 000" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="company">Company Enquire *</Label>
                    <select id="company" name="company" value={form.company} onChange={handleChange} required className="w-full px-4 py-2 rounded border border-gray-300 text-black">
                      <option value="">Select one of the companies</option>
                      <option value="kach-sound-media">Kach Sound Media</option>
                      <option value="links-auto-motors">Links Auto Motors</option>
                      <option value="breakout-events">Breakout Events</option>
                      <option value="kbr-tv">KBR TV</option>
                      <option value="kbr-radio">KBR Radio</option>
                      <option value="breakout-bible-fellowship">Breakout Bible Fellowship</option>
                      <option value="kbr-academy">KBR Academy</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      placeholder="Tell us more about your event, special requirements, music preferences, etc."
                      rows={4}
                    />
                  </div>
                  <Button variant="divine" size="lg" className="w-full" type="submit" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Send Booking Request'}
                    <Mail className="w-5 h-5 ml-2" />
                  </Button>
                </form>
                {success && (
                  <div className="mt-6 text-center text-green-600">
                    {success}
                  </div>
                )}
                {error && (
                  <div className="mt-6 text-center text-red-600">
                    {error}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection