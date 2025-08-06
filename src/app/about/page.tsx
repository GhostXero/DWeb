import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Award,
  ArrowRight,
  Phone,
  FileText,
  Calendar,
  MapPin,
  Building,
  TrendingUp,
  Heart,
  Leaf
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const milestones = [
    {
      year: "1976",
      title: "Grundlæggelse",
      description: "Deber Ventilation blev grundlagt i Fredericia med fokus på kvalitet og service"
    },
    {
      year: "1985",
      title: "Første Industriprojekt",
      description: "Udførelse af første store industrielle ventilationsprojekt"
    },
    {
      year: "1995",
      title: "Energioptimering",
      description: "Introduktion af energieffektive ventilationsløsninger"
    },
    {
      year: "2010",
      title: "Teknologisk Løft",
      description: "Investering i avanceret teknologi og specialiseret udstyr"
    },
    {
      year: "2020",
      title: "Bæredygtig Fokus",
      description: "Styrket fokus på grønne og bæredygtige ventilationsløsninger"
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Implementering af AI-drevet overvågning og optimering"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Kvalitet",
      description: "Vi leverer altid løsninger af højeste kvalitet med fokus på holdbarhed og pålidelighed"
    },
    {
      icon: Heart,
      title: "Kundecentreret",
      description: "Vores kunders behov er altid i centrum - vi lytter og rådgiver baseret på jeres specifikke krav"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Vi følger konstant med i den nyeste teknologi for at levere de bedste løsninger"
    },
    {
      icon: TrendingUp,
      title: "Bæredygtighed",
      description: "Vi fokuserer på energieffektive og miljøvenlige løsninger der gavner både kunde og klima"
    }
  ];

  const stats = [
    {
      number: "45+",
      label: "Års erfaring",
      icon: Calendar
    },
    {
      number: "2000+",
      label: "Fuldførte projekter",
      icon: Building
    },
    {
      number: "500+",
      label: "Tilfredse kunder",
      icon: Users
    },
    {
      number: "25+",
      label: "Specialiserede medarbejdere",
      icon: Star
    }
  ];

  const certifications = [
    {
      name: "DS/EN ISO 9001",
      description: "Kvalitetsledelsessystem",
      icon: Award
    },
    {
      name: "DS/EN ISO 14001",
      description: "Miljøledelsessystem",
      icon: Leaf
    },
    {
      name: "DS/EN ISO 45001",
      description: "Arbejdsmiljøledelsessystem",
      icon: Shield
    },
    {
      name: "Teknologisk Institut",
      description: "Godkendt måleteknisk virksomhed",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative tech-gradient text-primary-foreground py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Om Deber Ventilation
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-primary-foreground/90">
              Siden 1976 har vi været din pålidelige partner i ventilationsbranchen. 
              Med en stærk tradition for kvalitet, innovation og kundeservice leverer 
              vi ventilationsløsninger der skaber værdi for både private og virksomheder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Om Deber Ventilation")}#contact-form`}>
                <Button size="lg" className="bg-white text-primary hover:bg-primary/90 hover:text-white border border-primary text-lg px-8 py-3">
                  Få et uforpligtende tilbud
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="tech-heading text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="tech-text text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
              Vores Historie
            </h2>
            <p className="tech-text text-lg text-gray-600 max-w-2xl mx-auto">
              Rejsen fra en lokal ventilationsvirksomhed til en anerkendt 
              brancheleder med fokus på kvalitet og innovation.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center -translate-x-1/2">
                      <span className="text-white text-sm font-bold">{milestone.year.slice(-2)}</span>
                    </div>
                    <div className="ml-12 tech-card p-6 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="tech-heading text-lg font-semibold">{milestone.title}</h3>
                        <Badge variant="outline" className="border-primary text-primary">{milestone.year}</Badge>
                      </div>
                      <p className="tech-text text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/about/history">
              <Button variant="outline" className="px-6 border-primary text-primary hover:bg-primary hover:text-white">
                Læs mere om vores historie
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
              Vores Værdier
            </h2>
            <p className="tech-text text-lg text-gray-600 max-w-2xl mx-auto">
              Vores værdier er fundamentet for alt hvad vi gør. De guider vores 
              beslutninger og handlinger hver dag.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="tech-card text-center hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="tech-heading text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="tech-text text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
              Certificeringer
            </h2>
            <p className="tech-text text-lg text-gray-600 max-w-2xl mx-auto">
              Vi er certificeret efter de højeste standarder for kvalitet, 
              miljø og arbejdsmiljø.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="tech-card text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="tech-heading text-lg">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="tech-text text-gray-600">{cert.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
              Mød Vores Team
            </h2>
            <p className="tech-text text-lg text-gray-600 max-w-2xl mx-auto">
              Vores team består af dedikerede fagfolk med mange års erfaring 
              i ventilationsbranchen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="tech-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="tech-heading text-lg">Erik Jensen</CardTitle>
                <CardDescription className="tech-text">Adm. Direktør</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="tech-text text-sm text-gray-600">
                  Over 25 års erfaring i ventilationsbranchen med fokus på strategi og forretningsudvikling.
                </p>
              </CardContent>
            </Card>
            <Card className="tech-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="tech-heading text-lg">Mette Nielsen</CardTitle>
                <CardDescription className="tech-text">Teknisk Direktør</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="tech-text text-sm text-gray-600">
                  Ekspert i tekniske løsninger og projektledelse med speciale i energioptimering.
                </p>
              </CardContent>
            </Card>
            <Card className="tech-card text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <CardTitle className="tech-heading text-lg">Lars Hansen</CardTitle>
                <CardDescription className="tech-text">Driftschef</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="tech-text text-sm text-gray-600">
                  Ansvarlig for drift og service med fokus på kvalitet og kundetilfredshed.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/about/team">
              <Button variant="outline" className="px-6 border-primary text-primary hover:bg-primary hover:text-white">
                Mød hele vores team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
                Vores Beliggenhed
              </h2>
              <p className="tech-text text-lg text-gray-600">
                Vi er strategisk placeret i Fredericia med nem adgang til hele Danmark.
              </p>
            </div>
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="flex items-center tech-heading">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Deber Ventilation ApS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Adresse</h4>
                    <p className="tech-text text-gray-600 mb-4">
                      Karetmagervej 27<br />
                      7000 Fredericia<br />
                      Danmark
                    </p>
                    <h4 className="font-semibold mb-3">Kontakt</h4>
                    <p className="tech-text text-gray-600">
                      Telefon: +45 75 95 44 22<br />
                      Email: info@deberventilation.dk<br />
                      Åbningstid: Man-Fre 08:00-16:00
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">CVR Information</h4>
                    <p className="tech-text text-gray-600 mb-4">
                      CVR: 33 05 31 26<br />
                      Virksomhedsform: Anpartsselskab<br />
                      EAN: 5790002389665<br />
                      Faktura mail: deberventilation@e-scan.dk
                    </p>
                    <h4 className="font-semibold mb-3">Serviceområde</h4>
                    <p className="tech-text text-gray-600">
                      Vi dækker hele Danmark med særligt fokus på 
                      Trekantområdet og Fyn.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="tech-heading text-3xl font-bold mb-4">
              Lad os arbejde sammen
            </h2>
            <p className="tech-text mb-6 max-w-2xl mx-auto">
              Uanset om du er privatperson eller virksomhed, så står vi klar 
              til at hjælpe dig med den bedste ventilationsløsning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Om Deber Ventilation")}#contact-form`}>
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