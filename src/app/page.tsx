'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Users, 
  Wrench, 
  Zap, 
  Droplets, 
  Factory, 
  FileText, 
  Phone,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Home,
      title: "Boligventilation",
      description: "Professionelle ventilationsløsninger til private boliger",
      href: "/services/boligventilation",
      image: "/images/residential-ventilation.jpg"
    },
    {
      icon: Users,
      title: "Komfortventilation",
      description: "Optimal komfort og indeklima for enhver bygning",
      href: "/services/komfortventilation",
      image: "/images/ventilation-control.jpg"
    },
    {
      icon: Factory,
      title: "Industriventilation",
      description: "Avancerede ventilationsanlæg til industrielle formål",
      href: "/services/industriventilation",
      image: "/images/industrial-ventilation.jpg"
    },
    {
      icon: Zap,
      title: "Energioptimering",
      description: "Reducer energiforbruget med smarte ventilationsløsninger",
      href: "/services/energioptimering",
      image: "/images/ventilation-control.jpg"
    },
    {
      icon: Droplets,
      title: "Affugtning & Befugtning",
      description: "Fugtkontrol for optimalt indeklima",
      href: "/services/affugtning-befugtning",
      image: "/images/ventilation-installation.jpg"
    },
    {
      icon: FileText,
      title: "Projektering",
      description: "Skræddersyede projekter fra start til slut",
      href: "/services/projektering",
      image: "/images/ventilation-installation.jpg"
    }
  ];

  const testimonials = [
    {
      name: "Hotel Haraldskær",
      company: "Hotel & Erhverv",
      content: "Deber Ventilation har leveret en professionel løsning der perfekt imødekommer vores komplekse ventilationsbehov på hotellet.",
      rating: 5,
      year: "2023"
    },
    {
      name: "Region Syddanmark",
      company: "Sygehus",
      content: "Deber Ventilation har demonstreret høj ekspertise i kompleks sygehusventilation med strenge krav til luftkvalitet.",
      rating: 5,
      year: "2025"
    },
    {
      name: "Chr. Hansen (Novonesis)",
      company: "Laboratorium",
      content: "En teknisk avanceret løsning der sikrer både sikkerhed og effektivitet i vores laboratorier.",
      rating: 5,
      year: "2025"
    }
  ];

  const benefits = [
    "Erfaring siden 1976",
    "Kvalitet, tidsfrister og overholdelse af priser i højsæde",
    "Specialiseret udelukkende i ventilation",
    "Komplette løsninger fra filter til store anlæg",
    "Professionel rådgivning og projektering",
    "Pålidelig service og vedligehold"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-visible">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://airmec.co.uk/images/42.jpg"
            alt="Modern ventilation system installation - Professional ventilation solutions by Deber Ventilation"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-6 lg:py-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-white leading-tight">
              Vi sikrer det gode 
              <span className="tech-gradient-text bg-clip-text text-transparent block">indeklima</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm lg:text-base text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Professionelle ventilationsløsninger fra simple udsugningsanlæg til avancerede 
              komfort- og industrisanlæg
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-3 gap-2 mb-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2">
                <div className="text-xl font-bold text-white mb-0">45+</div>
                <div className="text-white/80 text-xs">års erfaring</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2">
                <div className="text-xl font-bold text-white mb-0">1000+</div>
                <div className="text-white/80 text-xs">tilfredse kunder</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2">
                <div className="text-xl font-bold text-white mb-0">24/7</div>
                <div className="text-white/80 text-xs">service</div>
              </div>
            </div>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
              <Button size="sm" className="tech-button text-sm px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
                Få et tilbud
              </Button>
              <Link href="/about/cases">
                <Button size="sm" className="tech-button text-sm px-4 py-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:bg-primary/90 active:border-primary/90 transition-all duration-200">
                  Referencer
                </Button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 opacity-80">
              <div className="text-white/70 text-xs">Certificeret ventilationsvirksomhed</div>
              <div className="text-white/70 text-xs">•</div>
              <div className="text-white/70 text-xs">Medlem af brancheforeningen</div>
              <div className="text-white/70 text-xs">•</div>
              <div className="text-white/70 text-xs font-medium">Erfaring siden 1976</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 tech-heading">
              Hvorfor vælge Deber Ventilation?
            </h2>
            <p className="tech-text max-w-2xl mx-auto">
              Med speciale i ventilation siden 1976, leverer vi kvalitetsløsninger hvor 
              præcision, pålidelighed og overholdelse af aftaler er i centrum.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Erfaring siden 1976",
              "Specialiseret i ventilation", 
              "Kvalitet og pålidelighed",
              "Komplette løsninger",
              "Professionel rådgivning",
              "Løbende service og support"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-card border border-border tech-card">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="tech-text font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise and Services Combined */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 tech-heading">
                Vores ekspertise og services
              </h2>
              <p className="tech-text max-w-3xl mx-auto">
                Vi leverer skræddersyede ventilationsløsninger til alle behov - fra små 
                boliganlæg til komplekse industrielle installationer med avanceret styring.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Service Areas */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold mb-6 tech-heading">Vores kerneområder</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Boligventilation",
                      description: "Optimalt indeklima i private boliger",
                      icon: Home
                    },
                    {
                      title: "Komfortventilation", 
                      description: "Avancerede systemer til erhverv",
                      icon: Users
                    },
                    {
                      title: "Industriventilation",
                      description: "Specialløsninger til industri",
                      icon: Factory
                    },
                    {
                      title: "Energioptimering",
                      description: "Effektive og besparende løsninger",
                      icon: Zap
                    },
                    {
                      title: "Affugtning & Befugtning",
                      description: "Præcis klimastyring",
                      icon: Droplets
                    },
                    {
                      title: "Projektering",
                      description: "Komplet rådgivning og planlægning",
                      icon: FileText
                    }
                  ].map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Card key={index} className="tech-card">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <Icon className="h-5 w-5 text-primary" />
                            <div>
                              <h4 className="font-medium tech-heading">{service.title}</h4>
                              <p className="text-sm tech-text">{service.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
              
              {/* Company Heritage */}
              <div>
                <h3 className="text-xl font-semibold mb-6 tech-heading">Vores historie</h3>
                <Card className="tech-card">
                  <CardContent className="p-6">
                    <p className="tech-text mb-4">
                      Stiftet i 1976 af ingeniør Bent Deber og smed Henry Pedersen. 
                      Gennem generationer har vi opbygget en virksomhed baseret på 
                      faglig stolthed og kundetilfredshed.
                    </p>
                    <div className="space-y-2">
                      {["Stiftet 1976", "Familiedrevet", "45+ års erfaring", "Fortsat udvikling"].map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="tech-text text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Technical Capabilities */}
            <div className="bg-card border border-border rounded-lg p-6 tech-card">
              <h3 className="text-lg font-semibold mb-4 tech-heading">Teknisk ekspertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Balanceret ventilation", "Komplet automatik", "Lydoptimering", "Energibesparelse"].map((capability, idx) => (
                  <div key={idx} className="text-center">
                    <CheckCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                    <span className="tech-text text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 tech-heading">
              Hvad vores kunder siger
            </h2>
            <p className="tech-text max-w-2xl mx-auto">
              Tilfredse kunder er vores bedste anbefaling.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="tech-card text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg tech-heading">{testimonial.name}</CardTitle>
                  <CardDescription className="tech-text">{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="tech-text italic">"{testimonial.content}"</p>
                  <div className="mt-4">
                    <Badge variant="outline">{testimonial.year}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project References Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 tech-heading">
              Udvalgte projekter og referencer
            </h2>
            <p className="tech-text max-w-2xl mx-auto">
              Vi har gennemført adskillige projekter for både private og offentlige kunder. 
              Her er et udpluk af vores seneste referencer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hotel Haraldskær",
                description: "Ny ventilation til restaurant, industrikøkken, konferencesal og værelser",
                year: "2023",
                type: "Hotel & Erhverv",
                image: "https://cdn-main.ideal.shop/images/by_hash/7db94b446abe2a9ce0ad8c27ac072867e79520e8268cb67a4061c631590a56dd/800-0/hotel_haraldskaer.png"
              },
              {
                title: "Sønderborg Sygehus",
                description: "Etablering af ventilation i hele underetagen og renrum til Cystostatik",
                year: "2025",
                type: "Sundhedssektor",
                image: "https://cdn-main.ideal.shop/images/by_hash/fd7ec638dfb32d4e90a10355a8bf6c09ab6508bb6c475c40a7b68dc742e02fcf/800-0/soenderborg_sundhedshus.png"
              },
              {
                title: "Chr. Hansen (Novonesis)",
                description: "Ventilationsentreprise på nyt kontor og laboratorium med procesventilation",
                year: "2025",
                type: "Laboratorium",
                image: "https://cdn-main.ideal.shop/images/by_hash/cb171127e7bec66d3639262399f8d25c3a271e6efc5751397fdd01350ffc4af8/800-0/chr_hansen.png"
              },
              {
                title: "Sofie Amaliegården",
                description: "Decentral ventilation i 100 boliger med procesudsug og komfort ventilation",
                year: "2025",
                type: "Bolig",
                image: "https://cdn-main.ideal.shop/images/by_hash/6a73af3e30cf2b297598c2538251cc8a69dafdf3dd89de8d1477419c21f8baf3/800-0/sofie_amaliegaarden.png"
              },
              {
                title: "Kolding Sygehus",
                description: "3 operationsstuer med køle/varmeflader og procesventilation",
                year: "2024",
                type: "Sundhedssektor",
                image: "https://cdn-main.ideal.shop/images/by_hash/4679e406016fe6a263aa1721aa9015c513635983994054b501fa456e4a6bb6df/800-0/kolding_sygehus.png"
              },
              {
                title: "DEME Offshore",
                description: "Komfort og procesventilation for nyt kontor med integreret køl",
                year: "2024",
                type: "Kontor",
                image: "https://cdn-main.ideal.shop/images/by_hash/770f6f0c2293be3faa27477fd63b28aa87035136f61b1745e2b3e10d94e219c6/800-0/deme_offshore.png"
              }
            ].map((project, index) => (
              <Card key={index} className="tech-card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg tech-heading">{project.title}</CardTitle>
                    <Badge variant="secondary">{project.year}</Badge>
                  </div>
                  <Badge variant="outline" className="w-fit">{project.type}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="tech-text text-sm">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/about/cases">
              <Button size="lg" className="px-10 py-4 bg-[#276084] !bg-[#276084] border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 active:border-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Se alle vores referencer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 tech-gradient text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Vi glæder os til at servicere dig
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Uanset om du har brug for et filterskift, et helt nyt ventilationsanlæg eller 
              professionel rådgivning, står vi klar til at hjælpe. Kontakt os i dag for en 
              uforpligtende samtale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#contact-form">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white text-[#3b5370] border-[#3b5370] hover:bg-[#3b5370] hover:text-white">
                  Kontakt os i dag
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}