'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  CheckCircle, 
  ArrowRight,
  Home,
  Factory,
  Thermometer,
  Shield,
  Zap,
  Settings,
  Leaf,
  BarChart3,
  Clock,
  Award,
  TrendingUp,
  Users,
  Building,
  Wrench,
  FlaskConical,
  TreePine
} from "lucide-react";

export default function AffugtningBefugtningPage() {
  // Affugtningstyper
  const dehumidificationTypes = [
    {
      icon: Zap,
      title: "Adsorptionsaffugtning",
      subtitle: "Præcision og fleksibilitet",
      description: "Adsorptionsaffugtere er særligt velegnede til industrielle miljøer, hvor præcis fugtkontrol er kritisk.",
      features: [
        "Effektiv fugtkontrol selv ved lave temperaturer",
        "Mulighed for at opnå meget lave dugpunkter",
        "Fleksibel integration i eksisterende ventilationssystemer"
      ],
      applications: [
        "Farmaceutisk produktion",
        "Fødevareforarbejdning", 
        "Elektronikfremstilling"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Settings,
      title: "Affugtning via køle- og varmeflade",
      subtitle: "Energieffektiv løsning",
      description: "Denne metode er særligt velegnet til større industrielle rum og kan integreres i eksisterende HVAC-systemer.",
      features: [
        "Mulighed for samtidig temperatur- og fugtstyring",
        "Potentiale for energigenvinding og optimering",
        "Skalerbarhed til meget store luftmængder"
      ],
      applications: [
        "Større ventilationsanlæg",
        "Lagerfaciliteter",
        "Produktionshaller med varierende varmebelastning"
      ],
      color: "from-blue-600 to-blue-700"
    }
  ];

  // Befugtningstyper
  const humidificationTypes = [
    {
      icon: Leaf,
      title: "Adiabatisk befugtning",
      subtitle: "Den bæredygtige løsning",
      description: "Adiabatisk befugtning er en energieffektiv metode, der udnytter naturlige processer til at regulere luftfugtigheden.",
      process: [
        "Luften opvarmes til cirka 38°C ved hjælp af en forvarmeflade",
        "Koldt vand tilføres den opvarmede luft",
        "Vandfordampningen sænker lufttemperaturen og øger luftfugtigheden"
      ],
      benefits: [
        "Energieffektiv: Bruger kun 0,68 kWh pr. liter tilført vand",
        "Omkostningseffektiv: Udnytter billigere fjernvarme i stedet for elektricitet",
        "Miljøvenlig: Reducerer det samlede energiforbrug"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Thermometer,
      title: "Dampbefugtning",
      subtitle: "Præcis kontrol for mindre systemer",
      description: "Dampbefugtning er en velafprøvet metode, der er særligt velegnet til mindre luftmængder, men kan også anvendes i større installationer.",
      process: [
        "Vand opvarmes til dampform",
        "Dampen frigives direkte i luftstrømmen",
        "Luftfugtigheden øges præcist og hurtigt"
      ],
      benefits: [
        "Præcis kontrol: Giver mulighed for nøjagtig regulering af luftfugtigheden",
        "Ca. 0.8-0.9 KWh. Pr. liter fordampet vand",
        "Hurtig respons: Kan hurtigt justere luftfugtigheden efter behov",
        "Velegnet til mindre systemer: Ideel til kontorer, laboratorier og mindre produktionsområder"
      ],
      color: "from-green-600 to-green-700"
    }
  ];

  // Industrier der drager fordel
  const industries = [
    {
      icon: FlaskConical,
      title: "Medicinalindustrien",
      description: "Kræver ekstrem præcision i fugtkontrol for at sikre produktkvalitet og overholdelse af regulativer.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building,
      title: "Fødevareproduktion",
      description: "Affugtning forebygger bakterievækst og forlænger produkters holdbarhed.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Wrench,
      title: "Metalforarbejdning",
      description: "Kontrolleret luftfugtighed reducerer risikoen for korrosion og forbedrer svejseprocesser.",
      color: "from-blue-700 to-blue-800"
    },
    {
      icon: TreePine,
      title: "Papir- og træindustri",
      description: "Optimal fugtighed er afgørende for materialekvalitet og forebyggelse af deformation.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Thermometer,
      title: "Kolde og uopvarmede rum",
      description: "Hvor kondensering nemt kan ske, grundet skiftende og lave temperaturer.",
      color: "from-blue-600 to-blue-700"
    }
  ];

  // Fordele ved professionel affugtning
  const dehumidificationBenefits = [
    {
      icon: TrendingUp,
      title: "Øget produktkvalitet",
      description: "Stabil luftfugtighed sikrer ensartet produktkvalitet og reducerer fejlproduktion."
    },
    {
      icon: Zap,
      title: "Forbedret energieffektivitet",
      description: "Præcis fugtstyring kan reducere energiforbruget til opvarmning og køling."
    },
    {
      icon: Users,
      title: "Sundere arbejdsmiljø",
      description: "Kontrolleret luftfugtighed mindsker risikoen for skimmelsvamp og bakterievækst."
    },
    {
      icon: Shield,
      title: "Beskyttelse af udstyr",
      description: "Korrekt affugtning forlænger levetiden på maskiner og elektronisk udstyr."
    },
    {
      icon: BarChart3,
      title: "Optimeret produktionsflow",
      description: "Stabile luftforhold muliggør mere præcis planlægning og færre produktionsstop."
    }
  ];

  // Fordele ved befugtning i ventilationssystemer
  const humidificationBenefits = [
    {
      icon: Zap,
      title: "Reduceret energiforbrug",
      description: "Ved at implementere befugtning kan virksomheder ofte reducere deres samlede energiforbrug til ventilation og klimakontrol."
    },
    {
      icon: Award,
      title: "Forbedret produktkvalitet",
      description: "Korrekt luftfugtighed kan være afgørende for mange produktionsprocesser og kan bidrage til at reducere fejl og spild."
    },
    {
      icon: Users,
      title: "Øget medarbejdertrivsel",
      description: "Et optimalt indeklima med korrekt luftfugtighed kan forbedre medarbejdernes komfort og produktivitet."
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
                src="https://goblueox.com/wp-content/uploads/2019/08/1-1-1024x594.jpg" 
                alt="Industrial dehumidification system" 
                className="w-full h-full object-cover object-left"
              />
            </div>
            {/* Right Image */}
            <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden">
              <img 
                src="https://www.munters.com/globalassets/digizuite/14976-en-adobestock_230150928-32-standard-photo.webp?v=638470812422630000" 
                alt="Industrial humidification system" 
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
              Affugtning & 
              <span className="tech-gradient-text bg-clip-text text-transparent block">Befugtning</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm lg:text-base text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Effektiv affugtning og befugtning er nøglen til optimal produktion og indeklima. 
              I moderne produktionsvirksomheder spiller præcis fugtstyring en afgørende rolle for 
              både produktkvalitet, medarbejdertrivsel og energieffektivitet.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
              <Button size="sm" className="tech-button text-sm px-4 py-2 bg-white text-primary hover:bg-white/90">
                Læs mere om vores teknologi
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 opacity-80">
              <div className="text-white/70 text-xs">Specialiseret Service</div>
              <div className="text-white/70 text-xs">•</div>
              <div className="text-white/70 text-xs">Sikker og effektiv fugtkontrol</div>
              <div className="text-white/70 text-xs">•</div>
              <div className="text-white/70 text-xs font-medium">Erfaring siden 1976</div>
            </div>
          </div>
        </div>
      </section>

      {/* Affugtning Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Affugtning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Præcis fugtfjernelse er essentielt for optimal produktion og komfort. 
              Ved at vælge den rette affugtningsløsning kan I forbedre produktkvaliteten, 
              arbejdsmiljøet og opnå betydelige energibesparelser.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {dehumidificationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${type.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${type.color} text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{type.title}</CardTitle>
                        <p className="text-sm text-gray-500">{type.subtitle}</p>
                      </div>
                    </div>
                    <CardDescription className="text-lg">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Fordele:</h4>
                        <div className="space-y-2">
                          {type.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Ideel til:</h4>
                        <div className="space-y-2">
                          {type.applications.map((app, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="h-2 w-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Industries Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Industrier der drager fordel af professionel affugtning
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    <div className={`h-1 bg-gradient-to-r ${industry.color} group-hover:h-2 transition-all duration-300`}></div>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${industry.color} text-white`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">{industry.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-600">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Dehumidification Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Fordele ved professionel affugtning i industrien
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dehumidificationBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Befugtning Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Befugtning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Korrekt befugtning spiller en central rolle i moderne ventilationsløsninger. 
              Den rette luftfugtighed sikrer et sundt indeklima og effektive produktionsforhold 
              i mange virksomheder.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {humidificationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${type.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${type.color} text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{type.title}</CardTitle>
                        <p className="text-sm text-gray-500">{type.subtitle}</p>
                      </div>
                    </div>
                    <CardDescription className="text-lg">
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Process:</h4>
                        <div className="space-y-2">
                          {type.process.map((step, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="h-5 w-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-semibold text-gray-600">{idx + 1}</span>
                              </div>
                              <span className="text-gray-700">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Fordele:</h4>
                        <div className="space-y-2">
                          {type.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Humidification Integration Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Fordele ved befugtning i ventilationsanlæg
            </h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {humidificationBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-lg bg-green-100 text-green-600">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-lg">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Choice Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Valg af den rette befugtningsløsning
              </h2>
              <p className="text-lg text-gray-600">
                Valget mellem adiabatisk befugtning og dampbefugtning afhænger af flere faktorer:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl">Systemstørrelse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Adiabatisk befugtning er ofte mere fordelagtig for større systemer, 
                    mens dampbefugtning kan være ideel for mindre installationer.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl">Energiomkostninger</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Adiabatisk befugtning er generelt mere energieffektiv, især ved større luftmængder.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl">Præcisionskrav</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Dampbefugtning giver mulighed for mere præcis kontrol, hvilket kan være afgørende i visse produktionsprocesser.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-emerald-500">
                <CardHeader>
                  <CardTitle className="text-xl">Bæredygtighed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Adiabatisk befugtning er den mere miljøvenlige løsning, da den bruger mindre energi og udnytter naturlige processer.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Komplet løsning fra start til slut
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Be- og affugtning kan også implementeres sammen i ventilationsanlægget, så man får et klimastyret ventilationsanlæg. 
              Deber Ventilation er med fra projektering til ibrugtagning og varetager hele entreprisen fra start til slut.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Settings className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-semibold mb-2">Projektering</h3>
                  <p className="text-blue-100">Skræddersyet design til jeres specifikke behov</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Wrench className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-semibold mb-2">Installation</h3>
                  <p className="text-blue-100">Professionel implementering af systemet</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 h-full">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-semibold mb-2">Service & Vedligehold</h3>
                  <p className="text-blue-100">Løbende optimering og support af systemet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Skræddersyet fugtkontrol til jeres behov
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Deber Ventilation leverer den ideelle balance mellem præcision, 
              effektivitet og bæredygtighed i jeres fugtstyringsløsning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Affugtning & Befugtning")}`}>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white border-[#3b5370] text-[#3b5370] hover:bg-[#3b5370] hover:text-white">
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