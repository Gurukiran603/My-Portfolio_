import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "emailjs-com";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  Download
} from "lucide-react";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Log a visit view for analytics
    const logVisit = async () => {
      try {
        await addDoc(collection(db, "visits"), {
          path: "/contact",
          timestamp: serverTimestamp(),
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : "",
        });
      } catch (e) {
        // no-op in UI; avoid blocking UX
        console.error("Visit log failed", e);
      }
    };
    logVisit();
  }, []);
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kiranguru603@gmail.com",
      href: "mailto:your.kiranguru603@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9741708339",
      href: "tel:+919741708339"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/gurukiran603",
      color: "hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/csgurukiran?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "hover:text-sky-500"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to contribute to your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-up">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm actively seeking opportunities as a fresh software engineer. 
                  Whether you have a project in mind, want to discuss tech, or just 
                  want to connect, I'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-primary/10 transition-colors group"
                    >
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {item.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`p-3 glass-card rounded-lg hover:bg-primary/10 transition-all group ${social.color}`}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Resume Download */}
              <div className="glass-card p-6 rounded-xl">
                <h4 className="font-semibold mb-3">Resume</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Download my latest resume to learn more about my background and skills.
                </p>
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-6">Send Message</h3>
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget as HTMLFormElement;
                  const formData = new FormData(form);
                  const payload = {
                    firstName: String(formData.get("firstName") || ""),
                    lastName: String(formData.get("lastName") || ""),
                    email: String(formData.get("email") || ""),
                    subject: String(formData.get("subject") || ""),
                    message: String(formData.get("message") || ""),
                  };
                  try {
                    setSubmitting(true);
                    // Save to Firestore
                    await addDoc(collection(db, "contacts"), {
                      ...payload,
                      timestamp: serverTimestamp(),
                    });

                    // Send notification email via EmailJS
                    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
                    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
                    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
                    if (serviceId && templateId && publicKey) {
                      await emailjs.send(
                        serviceId,
                        templateId,
                        {
                          from_name: `${payload.firstName} ${payload.lastName}`.trim(),
                          from_email: payload.email,
                          subject: payload.subject,
                          message: payload.message,
                        },
                        publicKey,
                      );
                    }

                    alert("Thanks! Your message has been sent.");
                    form.reset();
                  } catch (err) {
                    console.error(err);
                    alert("Sorry, something went wrong. Please try again later.");
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      name="firstName"
                      id="firstName"
                      placeholder="gurukiran"
                      className="bg-secondary/50 border-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      id="lastName"
                      placeholder="c s"
                      className="bg-secondary/50 border-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="kiranguru603@gmail.com"
                    className="bg-secondary/50 border-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    id="subject"
                    placeholder="Job Opportunity / Project Collaboration"
                    className="bg-secondary/50 border-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    className="bg-secondary/50 border-primary/20 resize-none"
                  />
                </div>

                <Button disabled={submitting} className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4 mr-2" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;