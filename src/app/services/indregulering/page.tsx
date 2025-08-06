'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Zap,
  Shield,
  Users,
  Thermometer,
  Gauge
} from "lucide-react";

export default function IndreguleringPage() {
  const services = [
    {
      icon: Settings,
      title: "Indregulering af Anlæg",
      description: "Præcis indstilling og optimering af ventilationsanlæg for maksimal ydeevne",
      features: ["Luftmåling", "Balancejustering", "Tryktest", "Dokumentation"]
    },
    {
      icon: TrendingUp,
      title: "Energioptimering",
      description: "Justering af systemet for at opnå bedst mulig energieffektivitet",
      features: ["Energianalyse", "Optimering af drift", "Overvågning", "Rapportering"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Forberedelse",
      description: "Gennemgang af anlæggets specifikationer og krav",
      icon: Users,
      details: ["Dokumentation", "Systemgennemgang", "Kravanalyse", "Forberedelse af udstyr"]
    },
    {
      step: 2,
      title: "Måling og Analyse",
      description: "Præcis måling af luftmængder og systemparametre",
      icon: Gauge,
      details: ["Luftmængdemåling", "Trykmåling", "Temperaturmåling", "Systemanalyse"]
    },
    {
      step: 3,
      title: "Justering",
      description: "Finjustering af alle komponenter for optimal balance",
      icon: Settings,
      details: ["Spjældjustering", "Ventiljustering", "Pumpejustering", "Systembalancering"]
    },
    {
      step: 4,
      title: "Verifikation",
      description: "Endelig test og dokumentation af systemets ydeevne",
      icon: Shield,
      details: ["Endelig test", "Dokumentation", "Brugeruddannelse", "Overdragelse"]
    }
  ];

  const benefits = [
    "Optimal luftkvalitet",
    "Energibesparelser",
    "Længere levetid",
    "Bedre komfort",
    "Fuld dokumentation",
    "Professionel service"
  ];

  const equipment = [
    {
      name: "Luftmålingsudstyr",
      description: "Præcise instrumenter til måling af luftmængder og hastigheder",
      icon: Thermometer
    },
    {
      name: "Trykmålere",
      description: "Avanceret udstyr til måling af trykforskelle i systemet",
      icon: Gauge
    },
    {
      name: "Balanceringsværktøj",
      description: "Specialværktøj til præcis justering af ventilationskomponenter",
      icon: Settings
    },
    {
      name: "Analyseudstyr",
      description: "Udstyr til avanceret analyse af systemets ydeevne",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-visible">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {/* Single Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src="https://www.ceproinc.com/wp-content/uploads/2022/05/front_row1_menu_8-3000x2000.jpg" 
                alt="Professional ventilation system adjustment" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-6 lg:py-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-white leading-tight">
              Professionel 
              <span className="tech-gradient-text bg-clip-text text-transparent block">Indregulering</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm lg:text-base text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Præcis finjustering af ventilationsanlæg for optimal balance og maksimal ydeevne. 
              Vi sikrer effektiv gennemstrømning og minimalt energiforbrug.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
              <Button size="sm" className="tech-button text-sm px-4 py-2 bg-white text-primary hover:bg-white/90">
                Læs om vores proces
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 opacity-80">
              <div className="text-white/70 text-xs">Præcis justering</div>
              <div className="text-white/70 text-xs">•</div>
              <div className="text-white/70 text-xs">Energioptimering</div>
              <div className="text-white/70 text-xs">•</div>
              <div className="text-white/70 text-xs font-medium">Erfaring siden 1976</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Indregulering Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hvad er indregulering, og hvorfor er det vigtigt?
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Indregulering af et ventilationsanlæg er processen, hvor vi finjusterer systemet for at opnå den optimale balance mellem indblæsning og udsugning af luft. Dette sikrer en effektiv gennemstrømning af frisk luft i alle rum, samtidig med at energiforbruget holdes på et minimum.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Et korrekt indreguleret ventilationsanlæg:</h3>
                <ul className="space-y-2">
                  {[
                    "Forbedrer indeklimaet markant",
                    "Reducerer energiforbruget",
                    "Minimerer støjgener",
                    "Forlænger anlæggets levetid"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vores ekspertise og tilgang
              </h2>
              <p className="text-lg text-gray-600">
                Som specialister i indregulering af ventilationsanlæg anvender vi den nyeste teknologi og vores omfattende erfaring til at optimere dit system. Vores proces involverer:
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                "Grundig inspektion af hele ventilationssystemet",
                "Måling af luftstrømme ved alle ind- og udblæsningsventiler",
                "Justering af spjæld og ventiler for at opnå den rette balance",
                "Finjustering af anlæggets indstillinger for optimal ydelse",
                "Dokumentation af alle målinger og justeringer"
              ].map((step, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fordele ved professionel indregulering
              </h2>
              <p className="text-lg text-gray-600">
                Ved at vælge Deber Ventilation til indregulering af dit ventilationsanlæg, opnår du en række fordele:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Forbedret indeklima",
                  description: "Korrekt indregulering sikrer en jævn fordeling af frisk luft i alle rum, hvilket reducerer risikoen for skimmelsvamp, allergener og andre luftbårne irritanter."
                },
                {
                  title: "Energibesparelser",
                  description: "Et velafbalanceret system arbejder mere effektivt, hvilket kan resultere i betydelige besparelser på din energiregning."
                },
                {
                  title: "Reduceret støjniveau",
                  description: "Ved at justere luftstrømmene til den lavest mulige hastighed, minimerer vi støj fra ventilationssystemet."
                },
                {
                  title: "Øget komfort",
                  description: "En jævn luftfordeling eliminerer træk og kolde zoner, hvilket skaber et mere behageligt indeklima."
                },
                {
                  title: "Længere levetid for anlægget",
                  description: "Et korrekt indreguleret system udsættes for mindre slitage, hvilket forlænger dets levetid og reducerer vedligeholdelsesomkostningerne."
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

      {/* When to Consider Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hvornår bør du overveje indregulering?
              </h2>
              <p className="text-lg text-gray-600">
                Det anbefales at få dit ventilationsanlæg indreguleret:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Efter installation af et nyt system",
                "Ved ombygning eller renovering af din bolig",
                "Hvis du oplever problemer med indeklimaet eller høje energiregninger",
                "Som en del af den regelmæssige vedligeholdelse (typisk hvert 3-5 år)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vores løfte til dig
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Hos Deber ventilation er vi dedikerede til at levere den højeste kvalitet i indregulering af ventilationsanlæg. Vi forstår, at hvert system er unikt, og vi skræddersyr vores service til dine specifikke behov. Vores team af erfarne teknikere arbejder effektivt og professionelt for at minimere forstyrrelser i din hverdag.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ved at vælge os, investerer du ikke bare i en service, men i et sundere, mere komfortabelt og energieffektivt hjem eller arbejdsplads. Lad os hjælpe dig med at optimere dit ventilationsanlæg og nyde fordelene ved et perfekt indreguleret system.
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
              Optimér dit indeklima og reducér energiomkostninger
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Kontakt os i dag for professionel indregulering af dit ventilationsanlæg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=Indregulering">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-[#3b5370] text-[#3b5370] hover:bg-[#3b5370] hover:text-white">
                  Bestil Indregulering
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}