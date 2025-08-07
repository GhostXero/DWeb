import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Clock,
  Wrench,
  FileText,
  BookOpen,
  Users
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Services: [
      { name: "Boligventilation", href: "/services/boligventilation" },
      { name: "Komfortventilation", href: "/services/komfortventilation" },
      { name: "Industriventilation", href: "/services/industriventilation" },
      { name: "Energioptimering", href: "/services/energioptimering" },
      { name: "Affugtning & Befugtning", href: "/services/affugtning-befugtning" },
      { name: "Service & Vedligehold", href: "/services/service-vedligehold" }
    ],
    OmOs: [
      { name: "Virksomhedshistorie", href: "/about/history" },
      { name: "Vores Team", href: "/about/team" },
      { name: "Case Studies", href: "/about/cases" }
    ],
    Ressourcer: [
      { name: "Blog & Guides", href: "/resources/blog" },
      { name: "FAQ", href: "/resources/faq" }
    ],
    HurtigeLinks: [
      { name: "Kontakt Os", href: "/contact" },
      { name: "Få Tilbud", href: "/contact" }
    ]
  };

  return (
    <footer className="bg-muted border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-foreground">Deber Ventilation</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Professionelle ventilationsløsninger siden 1976. Vi leverer 
              skræddersyede løsninger til både bolig og industri med fokus på 
              kvalitet, energieffektivitet og optimalt indeklima.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Karetmagervej 27, 7000 Fredericia</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+45 75 95 44 22</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@deberventilation.dk</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>Man-Fre: 08:00-16:00</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="tech-heading mb-4 flex items-center">
              <Wrench className="h-5 w-5 mr-2 text-primary" />
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.Services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="tech-heading mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Om Os
            </h3>
            <ul className="space-y-2">
              {footerLinks.OmOs.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="tech-heading mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              Ressourcer
            </h3>
            <ul className="space-y-2">
              {footerLinks.Ressourcer.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="tech-heading mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Hurtige Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.HurtigeLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 Deber Ventilation ApS. CVR: 33 05 31 26. Alle rettigheder forbeholdes.
            </div>
            <div className="flex items-center space-x-6">
              <Link 
                href="https://www.facebook.com/deberventilation" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/deber-ventilation" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <div className="text-muted-foreground text-sm">
                Designet med ❤️ i Danmark
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;