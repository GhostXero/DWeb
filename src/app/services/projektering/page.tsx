'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CheckCircle, 
  ArrowRight,
  Users,
  Calendar,
  Settings,
  TrendingUp,
  Building,
  Home
} from "lucide-react";

export default function ProjekteringPage() {
  const processSteps = [
    {
      step: 1,
      title: "Behovsanalyse",
      description: "Vi gennemgår dine behov og krav for at forstå projektets omfang",
      icon: Users,
      details: ["Behovsafdækning", "Kravspecifikation", "Budgfastsættelse", "Tidsplanlægning"]
    },
    {
      step: 2,
      title: "Teknisk Projektering",
      description: "Udarbejdelse af detaljerede tekniske tegninger og specifikationer",
      icon: Settings,
      details: ["Tekniske tegninger", "Dimensionering", "Materialevalg", "Systemdesign"]
    },
    {
      step: 3,
      title: "Implementering",
      description: "Professionel installation og implementering af ventilationsanlægget",
      icon: Building,
      details: ["Projektledelse", "Installation", "Kvalitetskontrol", "Dokumentation"]
    },
    {
      step: 4,
      title: "Idriftsættelse",
      description: "Systemet testes og justeres for optimal ydeevne",
      icon: TrendingUp,
      details: ["Test og måling", "Indregulering", "Brugeruddannelse", "Overdragelse"]
    }
  ];

  const services = [
    {
      icon: Home,
      title: "Boligprojekter",
      description: "Skræddersyede ventilationsløsninger til private boliger",
      features: ["Enfamiliehuse", "Ejendomme", "Lejligheder", "Renoveringsprojekter"]
    },
    {
      icon: Building,
      title: "Erhvervsprojekter",
      description: "Komplekse ventilationsløsninger til erhverv og industri",
      features: ["Kontorbygninger", "Industrianlæg", "Sygehuse", "Skoler og institutioner"]
    }
  ];

  const benefits = [
    "45+ års erfaring",
    "Skræddersyede løsninger",
    "Energioptimerede design",
    "Fuld dokumentation",
    "Professionel projektledelse",
    "Kvalitetssikring"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-visible">
        {/* Background Image Collage with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Left Image */}
            <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
              <img 
                src="https://hobson.dk/files/hobson/billeder/ingeniorbilleder/baerende-konstruktioner.jpg" 
                alt="Professional ventilation planning and design" 
                className="w-full h-full object-cover object-left"
              />
            </div>
            {/* Right Image */}
            <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
              <img 
                src="https://brandt.us/wp-content/uploads/2023/06/Blog-Post-Featured-Image-31-1100x825.png" 
                alt="Technical ventilation system design" 
                className="w-full h-full object-cover object-right"
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
            {/* Subtle divider line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-6 lg:py-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-white leading-tight">
              Professionel 
              <span className="tech-gradient-text bg-clip-text text-transparent block">Projektering</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm lg:text-base text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Optimér dit indeklima med professionel ventilation. I en tid hvor indeklimaet spiller en 
              stadig større rolle for medarbejdertrivsel og produktivitet, er det afgørende at vælge 
              den rette ventilationsløsning til din virksomhed.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
              <Button size="sm" className="tech-button text-sm px-4 py-2 bg-white text-primary hover:bg-white/90">
                Se vores projekter
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 opacity-80">
              <div className="text-white/70 text-xs">Ekspertise i topklasse</div>
              <div className="text-white/70 text-xs">•</div>
              <div className="text-white/70 text-xs">Skræddersyede løsninger</div>
              <div className="text-white/70 text-xs">•</div>
              <div className="text-white/70 text-xs font-medium">Erfaring siden 1976</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ekspertise og erfaring i topklasse
              </h2>
              <p className="text-lg text-gray-600">
                Med årelang erfaring i ventilationsbranchen og et team af højt kvalificerede medarbejdere,
                står vi klar til at håndtere ethvert ventilationsprojekt.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Teknisk Kompetence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Vores eksperter besidder en bred vifte af tekniske uddannelser og praktisk erfaring, 
                    hvilket gør os til din ideelle partner i udviklingen af effektive ventilationsløsninger.
                  </p>
                  <ul className="space-y-2">
                    {["Ingeniører med speciale i HVAC", "Certificerede teknikere", "Erfaren projektledelse", "Opdateret på nyeste teknologi"].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Skræddersyede Løsninger</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Vi forstår, at hver virksomhed har unikke behov og udfordringer. Derfor tilbyder vi:
                  </p>
                  <ul className="space-y-2">
                    {["Grundig analyse af dine specifikke krav", "Innovative og energieffektive løsningsforslag", "Fleksible systemer, der kan tilpasses fremtidige behov", "Skalerbare løsninger til enhver virksomhedsstørrelse"].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vores Projekteringsproces
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi følger en struktureret proces for at sikre kvalitet og effektivitet i alle projekter.
            </p>
          </div>
          
          {/* Early Involvement Benefits */}
          <div className="mb-12">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Tidlig involvering sikrer optimal projektstyring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Præcis økonomistyring",
                      description: "Gennem hele processen med fastholdelse af budget og tidsplan"
                    },
                    {
                      title: "Løbende kvalitetssikring",
                      description: "Kontinuerlig optimering og sikring af høj kvalitet"
                    },
                    {
                      title: "Garanti for resultat",
                      description: "Slutresultatet matcher dine forventninger og behov"
                    }
                  ].map((benefit, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-blue-900 mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      Trin {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Projektering til forskellige formål
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi har ekspertise inden for både bolig- og erhvervsprojektering.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon className="h-10 w-10 text-blue-600" />
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Projekttyper:</h4>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fokus på bæredygtighed og energieffektivitet
              </h2>
              <p className="text-lg text-gray-600">
                I en tid med øget fokus på miljø og energiforbrug, prioriterer vi:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Nyeste teknologi",
                  description: "Implementering af de nyeste energibesparende teknologier",
                  icon: TrendingUp
                },
                {
                  title: "Miljøoptimering",
                  description: "Optimering af systemerne for minimal miljøpåvirkning",
                  icon: Building
                },
                {
                  title: "Energirådgivning",
                  description: "Rådgivning om potentielle energitilskud og støtteordninger",
                  icon: Calendar
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <Icon className="h-8 w-8 text-green-600" />
                        </div>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Komplet projektansvar fra start til slut
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Når du vælger Deber Ventilation, får du en partner, der tager ansvar for hele processen:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Behovsanalyse og rådgivning",
              "Detaljeret projektering og dimensionering",
              "Professionel installation og indregulering",
              "Grundig oplæring i systemets brug",
              "Løbende support og servicering",
              "Fuld dokumentation og overdragelse"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dokumenteret succes og tilfredse kunder
              </h2>
              <p className="text-lg text-gray-600">
                Vores referencer taler for sig selv. Vi har succesfuldt gennemført ventilationsprojekter for en lang række virksomheder.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Brancher vi servicerer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Kontorbygninger og administrative centre",
                      "Produktionsfaciliteter og industrianlæg", 
                      "Sundhedssektoren og laboratorier",
                      "Uddannelsesinstitutioner og offentlige bygninger"
                    ].map((industry, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{industry}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Investér i fremtiden med Deber Ventilation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ved at vælge Deber ventilation som din ventilationspartner, investerer du ikke blot i et anlæg, 
                    men i en langsigtet løsning, der vil gavne din virksomhed på flere fronter:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Øget medarbejderproduktivitet gennem forbedret indeklima",
                      "Reducerede energiomkostninger og CO2-udledning",
                      "Forbedret bygningsværdi og attraktivitet",
                      "Overholdelse af nuværende og fremtidige miljøkrav"
                    ].map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Tag det første skridt mod et optimalt indeklima
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Kontakt os i dag for en uforpligtende samtale om, hvordan vi kan skræddersy den perfekte 
              ventilationsløsning til netop jeres behov. Lad os sammen skabe et sundere, mere produktivt 
              og bæredygtigt arbejdsmiljø for din virksomhed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=Projektering">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-[#3b5370] text-[#3b5370] hover:bg-[#3b5370] hover:text-white">
                  Anmod om projektering
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}