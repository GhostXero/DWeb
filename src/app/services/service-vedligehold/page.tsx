'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Shield,
  Zap,
  Users,
  Clock,
  Award,
  FileText,
  Phone,
  MessageCircle
} from "lucide-react";

export default function ServiceVedligeholdPage() {
  const services = [
    {
      icon: Wrench,
      title: "Serviceeftersyn",
      description: "Regelmæssigt serviceeftersyn af alle typer ventilationsanlæg for optimal drift",
      features: ["Årlig service", "Fejlfinding", "Optimering", "Dokumentation"],
      interval: "Årligt"
    },
    {
      icon: Shield,
      title: "Vedligeholdelsesaftaler",
      description: "Skræddersyede vedligeholdelsesaftaler der sikrer kontinuerlig drift",
      features: ["Fast pris", "Prioriteret service", "24/7 nødservice", "Fuld dækning"],
      interval: "Løbende"
    },
    {
      icon: Zap,
      title: "Reparation",
      description: "Hurtig og professionel reparation af alle ventilationskomponenter",
      features: ["Akut hjælp", "Reservedele", "Garanti", "Efterfølgende test"],
      interval: "Efter behov"
    },
    {
      icon: Users,
      title: "Rengøring",
      description: "Grundig rengøring af ventilationskanaler og komponenter",
      features: ["Kanalrens", "Filterudskiftning", "Desinfektion", "Luftkvalitetstest"],
      interval: "Efter behov"
    }
  ];

  const benefits = [
    {
      title: "Forlænget levetid",
      description: "Regelmæssig vedligeholdelse forlænger anlæggets levetid markant",
      icon: Clock
    },
    {
      title: "Energibesparelser",
      description: "Velvedligeholdte anlæg bruger mindre energi og sparer penge",
      icon: Zap
    },
    {
      title: "Bedre indeklima",
      description: "Optimal drift sikrer bedre luftkvalitet og indeklima",
      icon: Award
    },
    {
      title: "Mindre nedetid",
      description: "Forebyggende vedligeholdelse minimerer uforudsete nedbrud",
      icon: Shield
    }
  ];

  const serviceProcess = [
    {
      step: 1,
      title: "Kontakt og booking",
      description: "Kontakt os for at booke service eller vedligeholdelse",
      icon: Phone
    },
    {
      step: 2,
      title: "Forberedelse",
      description: "Vi forbereder service baseret på anlæggets historik og behov",
      icon: FileText
    },
    {
      step: 3,
      title: "Udførelse",
      description: "Vores teknikere udfører service med professionelt udstyr",
      icon: Wrench
    },
    {
      step: 4,
      title: "Rapportering",
      description: "Du modtager en detaljeret rapport med anbefalinger",
      icon: MessageCircle
    }
  ];

  const serviceTypes = [
    {
      name: "Basis Service",
      price: "Fra 800 kr",
      description: "Grundlæggende serviceeftersyn af ventilationsanlæg",
      includes: ["Visuel inspektion", "Filterkontrol", "Måling af drift", "Rengøring af filtre"],
      suitableFor: "Små anlæg og boligventilation"
    },
    {
      name: "Komplet Service",
      price: "Fra 1.500 kr",
      description: "Omfattende service af større ventilationsanlæg",
      includes: ["Fuld inspektion", "Udskiftning af filtre", "Justering af system", "Detaljeret rapport"],
      suitableFor: "Erhverv og større boliganlæg"
    },
    {
      name: "Premium Serviceaftale",
      price: "Fra 5.000 kr/år",
      description: "Komplet servicepakke med årlige besøg og nødservice",
      includes: ["2 årlige servicebesøg", "24/7 nødservice", "Fuld dækning", "Prioriteret support"],
      suitableFor: "Virksomheder og kritiske anlæg"
    }
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
                src="https://thehealthyhome.me/img/d584822a-4902-4053-80fd-c83ccc26a1bd/ac-duct-cleaning.jpg" 
                alt="Professional ventilation service and maintenance" 
                className="w-full h-full object-cover object-left"
              />
            </div>
            {/* Right Image */}
            <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
              <img 
                src="https://server-service.uz/wp-content/uploads/2018/08/obsluzhivanie-ventilyatsii-i-konditsionirovaniya-vk.jpg" 
                alt="Ventilation system cleaning and repair" 
                className="w-full h-full object-cover object-right"
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
            {/* Subtle divider line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-6 lg:py-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-white leading-tight">
              Service & 
              <span className="tech-gradient-text bg-clip-text text-transparent block">Vedligehold</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm lg:text-base text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Regelmæssig service og vedligeholdelse sikrer optimal drift, længere levetid 
              og bedre indeklima. Investér i dit ventilationsanlæg for fremtidig sikkerhed.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
              <Button size="sm" className="tech-button text-sm px-4 py-2 bg-white text-primary hover:bg-white/90">
                Se serviceaftaler
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 opacity-80">
              <div className="text-white/70 text-xs">Professionel service</div>
              <div className="text-white/70 text-xs">•</div>
              <div className="text-white/70 text-xs">Energioptimering</div>
              <div className="text-white/70 text-xs">•</div>
              <div className="text-white/70 text-xs font-medium">Erfaring siden 1976</div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Service Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fordele ved årlig service og serviceaftaler
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                I en tid hvor energieffektivitet og indeklima er i fokus, spiller ventilationsanlæg en afgørende rolle. 
                Selv det bedste anlæg kræver regelmæssig vedligeholdelse for at fungere optimalt.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Hvorfor årlig service er essentielt</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Opretholde effektiviteten",
                    description: "Over tid kan filtre tilstoppes, og komponenter slides, hvilket reducerer anlæggets ydeevne."
                  },
                  {
                    title: "Spare energi",
                    description: "Et velvedligeholdt anlæg bruger mindre energi og giver lavere driftsomkostninger."
                  },
                  {
                    title: "Forlænge levetiden",
                    description: "Regelmæssig vedligeholdelse kan markant forlænge anlæggets levetid."
                  },
                  {
                    title: "Forbedre luftkvaliteten",
                    description: "Rene filtre og velfungerende komponenter sikrer ren og sund luft."
                  },
                  {
                    title: "Forebygge nedbrud",
                    description: "Tidlig opdagelse af problemer undgår kostbare reparationer og driftsstop."
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Agreement Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fordele ved en serviceaftale
              </h2>
              <p className="text-lg text-gray-600">
                En serviceaftale er den mest effektive måde at sikre, at dit ventilationsanlæg får den nødvendige opmærksomhed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Planlagt vedligeholdelse",
                  description: "Automatisk planlægning og udførelse af årlig service, så du ikke behøver at huske på det."
                },
                {
                  title: "Økonomisk forudsigelighed",
                  description: "Faste, forudsigelige omkostninger, hvilket letter budgetplanlægningen."
                },
                {
                  title: "Prioriteret service",
                  description: "Fortrinsret ved akutte problemer, hvilket minimerer driftsforstyrrelser."
                },
                {
                  title: "Ekspertise og kontinuitet",
                  description: "Adgang til specialiserede teknikere, der kender dit specifikke anlæg."
                },
                {
                  title: "Dokumentation",
                  description: "Regelmæssige servicerapporter giver klart overblik over anlæggets tilstand."
                },
                {
                  title: "Optimering over tid",
                  description: "Løbende justering for at imødekomme ændrede behov og nye teknologier."
                }
              ].map((benefit, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{benefit.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Service Includes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hvad indeholder en typisk årlig service?
              </h2>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Inspektion og rengøring af alle komponenter",
                  "Udskiftning af filtre",
                  "Kontrol og justering af ventilatorer og motorer",
                  "Eftersyn af kanaler og spjæld",
                  "Kontrol af styring og automatik",
                  "Test af alarmer og sikkerhedsfunktioner",
                  "Energioptimering og ydelseskontrol"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventilation Cleaning Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ventilationsrens
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vigtigheden af regelmæssig rensning af dit ventilationsanlæg for et sundt indeklima.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Undgå nedsat effektivitet</h3>
                <p className="text-gray-600 mb-4">
                  Over tid ophobes støv, fedtpartikler, pollen og mikroorganismer i ventilationskanalerne. 
                  Dette reducerer luftstrømmen og forringer luftkvaliteten markant.
                </p>
                <div className="space-y-2">
                  {[
                    "Højere energiregninger",
                    "Øget slitage på komponenter",
                    "Reduceret levetid for systemet"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fordele ved rensning</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Forbedret indeklima",
                      desc: "Reduktion af allergener og irritanter i luften"
                    },
                    {
                      title: "Forebyggelse af lugtgener",
                      desc: "Friskere og mere behagelig luft"
                    },
                    {
                      title: "Bedre søvnkvalitet",
                      desc: "Øget produktivitet og velvære"
                    },
                    {
                      title: "Reduceret brandfare",
                      desc: "Mindre risiko ved ophobning af fedt og støv"
                    },
                    {
                      title: "Forlænget levetid",
                      desc: "Mindre slitage og færre reparationer"
                    }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">{benefit.title}</h4>
                        <p className="text-gray-600 text-xs">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Professionel ekspertise gør forskellen</h3>
              <p className="text-gray-600 mb-4">
                En grundig rensning kræver professionel ekspertise. Vores erfarne teknikere har:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Specialiseret udstyr til effektiv rengøring",
                  "Indgående kendskab til forskellige systemer",
                  "Evnen til at identificere potentielle problemer"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Investering i fremtiden
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At investere i årlig service og en serviceaftale for dit ventilationsanlæg er en investering 
                i bygningens sundhed og din økonomiske fremtid. Det sikrer optimal drift, energieffektivitet 
                og giver ro i sindet.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I en verden, hvor indeklima og energiforbrug er stadig vigtigere faktorer, er proaktiv 
                vedligeholdelse ikke længere en luksus, men en nødvendighed.
              </p>
            </div>
            
            <div>
              {/* Empty space where the button was */}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Sikr dit indeklima med professionel service
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Lad ikke dit ventilationsanlæg blive overset. Kontakt os i dag for at høre mere om 
              skræddersyede serviceaftaler og professionel ventilationsrens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Service & Vedligehold")}`}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-[#3b5370] text-[#3b5370] hover:bg-[#3b5370] hover:text-white">
                  Bestil Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}