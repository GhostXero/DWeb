'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu, 
  Phone, 
  Mail, 
  ChevronDown,
  Home,
  Users,
  FileText,
  BookOpen,
  Contact
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    {
      title: "Forside",
      href: "/",
      icon: Home
    },
    {
      title: "Services",
      href: "/services",
      icon: FileText,
      submenu: [
        { title: "Boligventilation", href: "/services/boligventilation" },
        { title: "Komfortventilation", href: "/services/komfortventilation" },
        { title: "Industriventilation", href: "/services/industriventilation" },
        { title: "Energioptimering", href: "/services/energioptimering" },
        { title: "Affugtning & Befugtning", href: "/services/affugtning-befugtning" },
        { title: "Projektering", href: "/services/projektering" },
        { title: "Indregulering", href: "/services/indregulering" },
        { title: "Service & Vedligehold", href: "/services/service-vedligehold" }
      ]
    },
    {
      title: "Om Os",
      href: "/about",
      icon: Users,
      submenu: [
        { title: "Virksomhedshistorie", href: "/about/history" },
        { title: "Vores Team", href: "/about/team" },
        { title: "Case Studies", href: "/about/cases" }
      ]
    },
    {
      title: "Ressourcer",
      href: "/resources",
      icon: BookOpen,
      submenu: [
        { title: "Blog & Guides", href: "/resources/blog" },
        { title: "FAQ", href: "/resources/faq" }
      ]
    },
    {
      title: "Kontakt",
      href: "/contact",
      icon: Contact
    }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navigationItems.map((item) => (
        <div key={item.title} className="relative group">
          <Link
            href={item.href}
            className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive(item.href)
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            } ${mobile ? "w-full justify-start" : ""}`}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
            {item.submenu && <ChevronDown className="h-3 w-3" />}
          </Link>
          
          {item.submenu && (
            <div className={`${
              mobile 
                ? "pl-6 mt-2 space-y-1" 
                : "absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
            }`}>
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={`block px-4 py-2 text-sm ${
                    mobile
                      ? "text-muted-foreground hover:text-foreground hover:bg-accent rounded"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  } ${pathname === subItem.href ? "bg-primary text-primary-foreground" : ""}`}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
         {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
           <Image 
            src="/logo.png"  // Changed to local path
            alt="Deber Ventilation - Professionelle ventilationsløsninger siden 1976" 
            width={300}
            height={100}
           className="w-auto h-36"
           priority
          />
         </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavItems />
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+45 75 95 44 22</span>
            </div>
            <Button size="sm" className="tech-button">
              Få tilbud
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <NavItems mobile />
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <Phone className="h-4 w-4" />
                    <span>+45 75 95 44 22</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <Mail className="h-4 w-4" />
                    <span>info@deberventilation.dk</span>
                  </div>
                  <Button className="w-full tech-button">
                    Få tilbud
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;