import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  Wrench, 
  Zap, 
  Droplets, 
  Factory, 
  FileText, 
  Settings,
  Shield,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Boligventilation",
      description: "Professionelle ventilationsløsninger til private boliger",
      longDescription: "Vi specialiserer os i ventilationsløsninger til alle typer boliger - fra lejligheder til villaer. Vores systemer sikrer et sundt indeklima, reducerer fugtproblemer og forbedrer luftkvaliteten i dit hjem.",
      features: [
        "Skræddersyede løsninger til din bolig",
        "Energioptimerede systemer",
        "Støjsvag drift",
        "Let vedligehold",
        "Forbedret indeklima",
        "Reduceret risiko for fugtskader"
      ],
      href: "/services/boligventilation",
      category: "Residential"
    },
    {
      icon: Users,
      title: "Komfortventilation",
      description: "Optimal komfort og indeklima for enhver bygning",
      longDescription: "Vores komfortventilationssystemer er designet til at levere perfekt temperatur og luftkvalitet året rundt. Ideel til kontorer, butikker og andre kommercielle bygninger hvor komfort er i fokus.",
      features: [
        "Konstant temperaturkontrol",
        "Optimal luftfugtighed",
        "Automatisk regulering",
        "Energibesparende drift",
        "Støjsvag operation",
        "Integreret styring"
      ],
      href: "/services/komfortventilation",
      category: "Comfort"
    },
    {
      icon: Factory,
      title: "Industriventilation",
      description: "Avancerede ventilationsanlæg til industrielle formål",
      longDescription: "Vi leverer robuste ventilationsløsninger til industrielle miljøer. Vores systemer håndterer støv, dampe, varme og andre udfordringer i produktionsmiljøer.",
      features: [
        "Høj kapacitet og ydeevne",
        "Robust konstruktion",
        "Specialfilter til støv og dampe",
        "Eksplosionsbeskyttelse",
        "ATEX-certificerede løsninger",
        "Minimal nedetid"
      ],
      href: "/services/industriventilation",
      category: "Industrial"
    },
    {
      icon: Zap,
      title: "Energioptimering",
      description: "Reducer energiforbruget med smarte ventilationsløsninger",
      longDescription: "Vi hjælper virksomheder og private med at optimere deres ventilationsanlæg for maksimal energieffektivitet. Vores løsninger kan reducere energiforbruget med op til 40%.",
      features: [
        "Energianalyse og optimering",
        "Intelligent styring",
        "Varmegenvinding",
        "Automatisk regulering",
        "Energimonitorering",
        "ROI-beregninger"
      ],
      href: "/services/energioptimering",
      category: "Optimization"
    },
    {
      icon: Droplets,
      title: "Affugtning & Befugtning",
      description: "Fugtkontrol for optimalt indeklima",
      longDescription: "Professionelle løsninger til fugtkontrol i alle typer bygninger. Vi kombinerer affugtning og befugtning for at opnå det perfekte indeklima uanset årstid.",
      features: [
        "Præcis fugtkontrol",
        "Automatisk regulering",
        "Energibesparende teknologi",
        "Støjsvag drift",
        "Integreret med ventilation",
        "Minimal vedligehold"
      ],
      href: "/services/affugtning-befugtning",
      category: "Climate Control"
    },
    {
      icon: FileText,
      title: "Projektering",
      description: "Skræddersyede projekter fra start til slut",
      longDescription: "Vi tilbyder komplet projektering af ventilationsanlæg fra idé til færdig installation. Vores erfarne ingeniører sikrer optimal løsning til netop dine behov.",
      features: [
        "Komplet projektering",
        "3D-tegninger og visualisering",
        "Beregninger og dimensionering",
        "Myndighedsbehandling",
        "Tidsplanlægning",
        "Budgettering"
      ],
      href: "/services/projektering",
      category: "Planning"
    },
    {
      icon: Settings,
      title: "Indregulering",
      description: "Præcis indregulering for optimal drift",
      longDescription: "Professionel indregulering af ventilationsanlæg sikrer optimal ydeevne og energieffektivitet. Vi bruger avanceret måleudstyr til at finjustere dit anlæg.",
      features: [
        "Præcis måling og justering",
        "Tryktest og dokumentation",
        "Luftmængdekontrol",
        "Energieffektiv optimering",
        "Dokumentation og rapportering",
        "Efterfølgende service"
      ],
      href: "/services/indregulering",
      category: "Commissioning"
    },
    {
      icon: Shield,
      title: "Service & Vedligehold",
      description: "Professionel service og vedligehold af ventilationsanlæg",
      longDescription: "Vi tilbyder serviceaftaler og vedligehold for at sikre langsigtet drift og optimal ydeevne af dit ventilationsanlæg. Regelmæssig service forlænger levetiden og sikrer energieffektivitet.",
      features: [
        "Serviceaftaler tilpasset dine behov",
        "Regelmæssig vedligehold",
        "Akut service",
        "Reservedele og reparation",
        "Driftsovervågning",
        "Energioptimering ved service"
      ],
      href: "/services/service-vedligehold",
      category: "Maintenance"
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative tech-gradient text-primary-foreground py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vores Ventilationsservices
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-primary-foreground/90">
              Vi leverer komplette ventilationsløsninger til både private og erhverv. 
              Med over 45 års erfaring sikrer vi den bedste løsning til netop dine behov.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Ventilationsservices")}`}>
                <Button size="lg" className="bg-white text-primary hover:bg-primary/90 hover:text-white border border-primary text-lg px-8 py-3">
                  Få et uforpligtende tilbud
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="outline" className="px-4 py-2 text-sm border-primary text-primary">
              Alle Services ({services.length})
            </Badge>
            {categories.map((category) => {
              const count = services.filter(s => s.category === category).length;
              return (
                <Badge key={category} variant="secondary" className="px-4 py-2 text-sm bg-primary text-primary-foreground">
                  {category} ({count})
                </Badge>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="tech-card hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="tech-heading text-xl">{service.title}</CardTitle>
                        <Badge variant="outline" className="text-xs mt-1 border-primary text-primary">
                          {service.category}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="tech-text text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="tech-text text-sm text-gray-600 mb-4">
                      {service.longDescription}
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="tech-text text-sm text-gray-700">{service.features[0]}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="tech-text text-sm text-gray-700">{service.features[1]}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="tech-text text-sm text-gray-700">{service.features[2]}</span>
                      </div>
                    </div>
                    <Link href={service.href}>
                      <Button className="w-full group bg-primary hover:bg-primary/90">
                        Læs mere om {service.title}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="tech-heading text-3xl font-bold mb-4">
              Er du i tvivl om hvilken løsning der passer til dig?
            </h2>
            <p className="tech-text mb-6 max-w-2xl mx-auto">
              Vores eksperter står klar til at hjælpe dig med at finde den perfekte ventilationsløsning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Ventilationsservices")}`}>
                <Button size="lg" className="bg-white text-primary hover:bg-primary/90 hover:text-white border border-primary px-8">
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