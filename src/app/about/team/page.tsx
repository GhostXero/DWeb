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
  Mail,
  Building,
  TrendingUp,
  MapPin,
  Clock,
  Wrench,
  GraduationCap,
  Briefcase
} from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  const leadership = [
    {
      name: "Tom Gram Pedersen",
      position: "Adm. Direktør",
      email: "tgp@deberventilation.dk",
      phone: "+45 2334 0372",
      experience: "20+ år",
      education: "Ejer og adm. direktør siden 2004",
      bio: "Tom Gram Pedersen er administrerende direktør og medejer af Deber Ventilation. Han overtog virksomheden i 2004 fra sin far Henry Pedersen, en af grundlæggerne af Deber Ventilation. Tom har været med til at udvikle virksomheden til en moderne ventilationsvirksomhed med fokus på kvalitet og service.",
      expertise: ["Ledelse", "Forretningsudvikling", "Kunderelationer", "Strategisk planlægning"],
      image: "/api/placeholder/200/200"
    },
    {
      name: "Kasper Kiehn",
      position: "Direktør",
      email: "kk@deberventilation.dk",
      phone: "+45 2585 3097",
      experience: "15+ år",
      education: "Direktør med teknisk baggrund",
      bio: "Kasper Kiehn er direktør i Deber Ventilation og bidrager med sin tekniske ekspertise og ledelseserfaring til virksomhedens fortsatte udvikling og vækst.",
      expertise: ["Teknisk ledelse", "Projektstyring", "Forretningsudvikling", "Kvalitetssikring"],
      image: "/api/placeholder/200/200"
    },
    {
      name: "Søs Dahlhus",
      position: "Administrationschef",
      email: "sd@deberventilation.dk",
      phone: "+45 2575 7907",
      experience: "10+ år",
      education: "Administration og ledelse",
      bio: "Søs Dahlhus er administrationschef med ansvar for den daglige administration og koordinering af virksomhedens administrative funktioner.",
      expertise: ["Administration", "HR", "Økonomistyring", "Koordination"],
      image: "/api/placeholder/200/200"
    }
  ];

  const specialists = [
    {
      name: "Nikolaj Thomsen",
      position: "HVAC Specialist/afdelingsleder",
      department: "Teknisk Afdeling",
      email: "nit@deberventilation.dk",
      experience: "15+ år",
      certifications: ["HVAC Specialist", "Afdelingsleder"],
      specialties: ["Teknisk rådgivning", "Projektledelse", "Systemdesign"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Morten Gram",
      position: "Overmontør, værkstedsansvarlig",
      department: "Værksted",
      email: "mg@deberventilation.dk",
      experience: "20+ år",
      certifications: ["Overmontør", "Værkstedsansvarlig"],
      specialties: ["Værkstedsledelse", "Montage", "Kvalitetskontrol"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Viney Geertsen",
      position: "Servicekoordinator",
      department: "Service",
      email: "vg@deberventilation.dk",
      experience: "10+ år",
      certifications: ["Servicekoordinator"],
      specialties: ["Serviceplanlægning", "Kundekontakt", "Koordinering"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Frederik Bang",
      position: "Projektleder",
      department: "Projekt",
      email: "frederik@deberventilation.dk",
      experience: "12+ år",
      certifications: ["Projektledelse"],
      specialties: ["Projektstyring", "Kundekontakt", "Planlægning"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Knut Dalsgaard",
      position: "Projektleder",
      department: "Projekt",
      email: "knu@deberventilation.dk",
      experience: "15+ år",
      certifications: ["Projektledelse"],
      specialties: ["Projektstyring", "Teknisk rådgivning", "Planlægning"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Tore Sørensen",
      position: "Projektleder",
      department: "Projekt",
      email: "tore@deberventilation.dk",
      experience: "10+ år",
      certifications: ["Projektledelse"],
      specialties: ["Projektstyring", "Kundekontakt", "Teknisk rådgivning"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Jane Gram",
      position: "Tegner",
      department: "Teknisk Afdeling",
      email: "jane@deberventilation.dk",
      experience: "8+ år",
      certifications: ["Teknisk tegner"],
      specialties: ["Teknisk tegning", "CAD", "Design"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Jette Tørnæs",
      position: "Tegner",
      department: "Teknisk Afdeling",
      email: "jette@deberventilation.dk",
      experience: "6+ år",
      certifications: ["Teknisk tegner"],
      specialties: ["Teknisk tegning", "CAD", "Dokumentation"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Lau Boysen",
      position: "Servicetekniker",
      department: "Service",
      email: "lau@deberventilation.dk",
      experience: "8+ år",
      certifications: ["Servicetekniker"],
      specialties: ["Service", "Fejlfinding", "Kundebetjening"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Michael Nielsen",
      position: "Servicetekniker",
      department: "Service",
      email: "michael@deberventilation.dk",
      experience: "10+ år",
      certifications: ["Servicetekniker"],
      specialties: ["Service", "Installation", "Vedligehold"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Kasper Rosenborg",
      position: "Servicetekniker",
      department: "Service",
      email: "kasper@deberventilation.dk",
      experience: "7+ år",
      certifications: ["Servicetekniker"],
      specialties: ["Service", "Montage", "Kundebetjening"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Andreas Christensen",
      position: "Montør",
      department: "Installation",
      email: "andreas@deberventilation.dk",
      experience: "5+ år",
      certifications: ["Montør"],
      specialties: ["Montage", "Installation", "Svejsning"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Loke Vesterholm",
      position: "Montør",
      department: "Installation",
      email: "loke@deberventilation.dk",
      experience: "4+ år",
      certifications: ["Montør"],
      specialties: ["Montage", "Installation", "Rørarbejde"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Bente Meyhoff",
      position: "Bogholderi",
      department: "Administration",
      email: "bm@deberventilation.dk",
      experience: "12+ år",
      certifications: ["Bogholderi"],
      specialties: ["Regnskab", "Bogføring", "Administration"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Jens Andreasen",
      position: "Lager",
      department: "Lager",
      email: "jens@deberventilation.dk",
      experience: "8+ år",
      certifications: ["Lagermedarbejder"],
      specialties: ["Lagerstyring", "Logistik", "Varemodtagelse"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Bo Bisgaard",
      position: "Arbejdsmand/lager",
      department: "Lager",
      email: "bo@deberventilation.dk",
      experience: "6+ år",
      certifications: ["Lagermedarbejder"],
      specialties: ["Lagerarbejde", "Vedligehold", "Logistik"],
      image: "/api/placeholder/150/150"
    },
    {
      name: "Michael Dahlhus",
      position: "Rens og arbejdsmand",
      department: "Service",
      email: "michael.d@deberventilation.dk",
      experience: "5+ år",
      certifications: ["Servicemedarbejder"],
      specialties: ["Rens", "Vedligehold", "Service"],
      image: "/api/placeholder/150/150"
    }
  ];

  const departments = [
    {
      name: "Ledelse",
      head: "Tom Gram Pedersen",
      employees: 3,
      description: "Strategisk ledelse og forretningsudvikling",
      color: "blue"
    },
    {
      name: "Teknisk Afdeling",
      head: "Nikolaj Thomsen",
      employees: 4,
      description: "Design, beregning og teknisk rådgivning",
      color: "green"
    },
    {
      name: "Projekt",
      head: "Frederik Bang",
      employees: 3,
      description: "Projektledelse og kundekontakt",
      color: "orange"
    },
    {
      name: "Service",
      head: "Viney Geertsen",
      employees: 5,
      description: "Service, vedligehold og kundesupport",
      color: "purple"
    },
    {
      name: "Installation",
      head: "Morten Gram",
      employees: 4,
      description: "Montage og installation af ventilationsanlæg",
      color: "pink"
    },
    {
      name: "Administration",
      head: "Søs Dahlhus",
      employees: 3,
      description: "Økonomi, bogholderi og administration",
      color: "indigo"
    },
    {
      name: "Lager",
      head: "Jens Andreasen",
      employees: 2,
      description: "Lagerstyring og logistik",
      color: "yellow"
    }
  ];

  const stats = [
    {
      number: "20+",
      label: "Specialiserede medarbejdere",
      icon: Users
    },
    {
      number: "300+",
      label: "Samlet års erfaring",
      icon: Clock
    },
    {
      number: "7",
      label: "Afdelinger",
      icon: Building
    },
    {
      number: "18",
      label: "Specialister",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Forside</Link>
            <span className="text-gray-400">/</span>
            <Link href="/about" className="text-blue-600 hover:text-blue-800">Om Os</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Vores Team</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white h-[30vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-12 w-12 text-blue-200" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Vores Team
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Mød vores dedikerede team af specialister. Hvert medlem af vores team 
              er specialist inden for sit område. Sammen sørger vi for at hjælpe dér, 
              hvor jeres behov er, samt rådgive jer om de bedste løsninger til netop jeres projekt.
            </p>
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
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ledelsen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mød vores erfarne ledelsesteam der styrer virksomheden med vision, 
              ekspertise og engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-xl">{leader.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {leader.position}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Briefcase className="h-4 w-4" />
                      <span>{leader.experience} erfaring</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <GraduationCap className="h-4 w-4" />
                      <span>{leader.education}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {leader.bio}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Ekspertise:</p>
                      <div className="flex flex-wrap gap-1">
                        {leader.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <a href={`mailto:${leader.email}`} className="text-blue-600 hover:text-blue-800">
                          {leader.email}
                        </a>
                      </div>
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-blue-600" />
                        <a href={`tel:${leader.phone}`} className="text-blue-600 hover:text-blue-800">
                          {leader.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vores Afdelinger
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi er organiseret i specialiserede afdelinger der sikrer ekspertise 
              og effektivitet i alle vores arbejdsområder.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                    <Badge variant="outline">{dept.employees} medarbejdere</Badge>
                  </div>
                  <CardDescription className="text-sm">
                    Afdelingsleder: {dept.head}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vores Specialister
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mød vores team af specialiserede medarbejdere der hver dag leverer 
              ekspertise og kvalitet i alle vores projekter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((specialist, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-lg">{specialist.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {specialist.position}
                  </CardDescription>
                  <Badge variant="outline" className="text-xs">
                    {specialist.department}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Briefcase className="h-4 w-4" />
                      <span>{specialist.experience} erfaring</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Certificeringer:</p>
                      <div className="flex flex-wrap gap-1">
                        {specialist.certifications.map((cert, certIndex) => (
                          <Badge key={certIndex} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Specialer:</p>
                      <div className="flex flex-wrap gap-1">
                        {specialist.specialties.map((specialty, specialtyIndex) => (
                          <Badge key={specialtyIndex} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex items-center justify-center space-x-2 text-sm">
                        <Mail className="h-4 w-4 text-blue-600" />
                        <a href={`mailto:${specialist.email}`} className="text-blue-600 hover:text-blue-800">
                          {specialist.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vores Kultur
              </h2>
              <p className="text-lg text-gray-600">
                Vi er mere end bare kolleger - vi er et team der arbejder sammen 
                for at skabe de bedste resultater for vores kunder.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2 text-yellow-500" />
                    Vores Værdier
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm"><strong>Kvalitet:</strong> Vi leverer altid det bedste</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm"><strong>Samarbejde:</strong> Vi lytter og arbejder sammen</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm"><strong>Innovation:</strong> Vi tænker nyt og fremadrettet</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm"><strong>Ansvarlighed:</strong> Vi tager ansvar for vores handlinger</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                    Karrieremuligheder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Vi er altid på udkig efter nye talenter der vil være med til at 
                    forme fremtiden for ventilation. Vi tilbyder:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Faglig udvikling og efteruddannelse</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Gode arbejdsforhold og fleksibilitet</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Konkurrencedygtige løn- og ansættelsesvilkår</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span className="text-sm">Et godt socialt arbejdsmiljø</span>
                    </li>
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
              Har du spørgsmål til vores team?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Vores erfarne team står klar til at hjælpe dig med rådgivning, 
              tilbud eller svar på dine spørgsmål om ventilation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-[#3b5370] hover:bg-white">
                <Mail className="mr-2 h-5 w-5" />
                Kontakt os
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-[#3b5370] hover:bg-white">
                <ArrowRight className="mr-2 h-5 w-5" />
                Tilbage til Om Os
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}