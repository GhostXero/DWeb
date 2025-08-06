import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Award,
  ArrowRight,
  Phone,
  FileText,
  Users,
  Building,
  TrendingUp,
  MapPin,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function HistoryPage() {
  const timeline = [
    {
      year: "1976",
      title: "Grundlæggelse af Deber Ventilation",
      description: "Deber Ventilation blev grundlagt i Fredericia af ingeniør Bent Deber og smed Henry Pedersen. De to grundlæggere startede virksomheden med en vision om at levere kvalitetsventilation til både private og erhverv, og lagde fundamentet for en virksomhed bygget på ekspertise og pålidelighed.",
      image: "/api/placeholder/400/300",
      highlights: ["Grundlæggere: Bent Deber og Henry Pedersen", "Beliggenhed: Fredericia", "Fokus: Kvalitet og service"]
    },
    {
      year: "1980-2004",
      title: "Vækst og udvikling",
      description: "Efter en årrække flyttede Bent Deber til Hjørring, mens Henry Pedersen forblev i Fredericia. De fortsatte deres succesfulde samarbejde i Deber Ventilation og opbyggede en stærk virksomhed med fokus på kvalitet, tidsfrister og overholdelse af priser.",
      image: "/api/placeholder/400/300",
      highlights: ["Samarbejde på tværs af lokationer", "Vækst i ventilationsbranchen", "Fokus på kvalitet og pålidelighed"]
    },
    {
      year: "2004",
      title: "Generationsskifte",
      description: "Henrys søn, Tom Gram Pedersen, overtog virksomheden i 2004. Samarbejdet med de to tidligere ejere, Bent Deber og Henry Pedersen, fortsatte i en lang årrække, hvilket sikrede en glidende overgang og bevarelse af virksomhedens værdier og ekspertise.",
      image: "/api/placeholder/400/300",
      highlights: ["Tom Gram Pedersen overtager", "Kontinuitet i samarbejdet", "Bevarelse af virksomhedens værdier"]
    },
    {
      year: "2010",
      title: "Omdannelse til anpartsselskab",
      description: "I 2010 blev Deber Ventilation omdannet til et anpartsselskab i forbindelse med køb af K-Vent ApS. Samtidig købte Jens Andreassen og Andresens VVS sig ind i virksomheden – begge tidligere ejere af K-Vent ApS. Dette markerede en ny æra for virksomheden med styrket kapital og udvidet ekspertise.",
      image: "/api/placeholder/400/300",
      highlights: ["Omdannelse til ApS", "Opkøb af K-Vent ApS", "Nye ejere med branchekendskab"]
    },
    {
      year: "2015",
      title: "Ejerstruktur ændring",
      description: "I 2015 solgte Jens Andreassen sin andel til Morten Gram Pedersen. Jens forblev dog i sin stilling i Deber Ventilation ApS, hvilket sikrede kontinuitet i ledelsen og bevarelse af den viden og erfaring, han havde bidraget med gennem årene.",
      image: "/api/placeholder/400/300",
      highlights: ["Morten Gram Pedersen bliver medejer", "Kontinuitet i ledelsen", "Stabilitet i virksomheden"]
    },
    {
      year: "2016-2020",
      title: "Udvidelse af teamet",
      description: "Gennem de sidste par år har virksomheden haft held med at ansætte nye og meget kompetente medarbejdere, hvilket har udvidet mandskabet betydeligt. I dag har flere medarbejdere kørende i marken, hvilket styrker virksomhedens kapacitet og serviceevne.",
      image: "/api/placeholder/400/300",
      highlights: ["Udvidelse af medarbejderstab", "Større kapacitet", "Forbedret service"]
    },
    {
      year: "2021-Nu",
      title: "Vækst og fremtidssikring",
      description: "Deber Ventilation fortsætter sin udvikling med fokus på at forbedre og effektivisere virksomheden. Virksomheden bestræber sig på at ansætte flere medarbejdere for at kunne tilbyde gode arbejde og ekspertise til større projekter, samtidig med at der prioriteres tid til selv den mindste kunde.",
      image: "/api/placeholder/400/300",
      highlights: ["Kontinuerlig udvikling", "Fokus på alle kunder", "Fremtidssikring af virksomheden"]
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "45+ års erfaring",
      description: "Mere end fire årtiers dedikeret ekspertise i ventilationsbranchen"
    },
    {
      icon: Building,
      title: "2000+ projekter",
      description: "Fuldført tusindvis af vellykkede ventilationsprojekter"
    },
    {
      icon: Users,
      title: "500+ kunder",
      description: "Tilfredse kunder i både private og offentlige sector"
    },
    {
      icon: Shield,
      title: "Fuldt certificeret",
      description: "Certificeret efter de højeste standarder for kvalitet og miljø"
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
            <span className="text-gray-600">Virksomhedshistorie</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white h-[30vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-blue-200" />
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">
              Virksomhedshistorie
            </h1>
            <p className="text-sm lg:text-base text-blue-100 leading-relaxed">
              Fra grundlæggelsen i 1976 af ingeniør Bent Deber og smed Henry Pedersen 
              til i dag at være en anerkendt ventilationsvirksomhed.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-full">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vores Tidslinje
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Følg vores rejse fra grundlæggelsen i 1976 af Bent Deber og Henry Pedersen 
              til i dag. Hvert periode har bragt nye udfordringer, muligheder og milepæle 
              i vores virksomheds udvikling.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Main timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="absolute left-8 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center -translate-x-1/2 z-10">
                      <span className="text-white font-bold text-sm">{item.year}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-20 bg-white rounded-lg shadow-sm p-6 flex-1">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-2/3">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.highlights.map((highlight, highlightIndex) => (
                              <Badge key={highlightIndex} variant="secondary" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="lg:w-1/3">
                          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Calendar className="h-12 w-12 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vores Filosofi
              </h2>
              <p className="text-lg text-gray-600">
                De værdier der driver os hver dag.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vores Forretningsfilosofi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Deber Ventilation er en virksomhed, hvor kvalitet, tidsfrister og overholdelse af priser er i højsædet. Vi arbejder udelukkende med ventilation, og kan løfte alle opgaver inden for dette område, lige fra et filterskift i et mindre boliganlæg til store anlæg i industri eller i kontor og institutioner.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Vi bestræber os på både glade medarbejdere og kunder. Vores arbejdsområde er ikke begrænset til Trekantsområdet, da vi i dag udfører en del arbejde både på Sjælland, Fyn og Sønderjylland.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kundeudtalelse</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-gray-600 leading-relaxed mb-4 italic">
                    "Vi har i mange år samarbejdet med Deber Ventilation, fordi vi altid får generelt gode løsninger, gode opfølgninger på opgaverne og tidsplanen overholdes altid. Vi får altid en god dialog og ærlig snak om tingene og der er aldrig behov for en second opinion. Deadline overholdes altid, som er meget vigtigt for vores forretning og dermed kan vi varmt anbefale Deber Ventilation."
                  </blockquote>
                  <footer className="text-gray-700 font-medium">
                    — Tømrer- Snedkermester / Niels Kruse
                  </footer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vores Udvikling
              </h2>
              <p className="text-lg text-gray-600">
                Hvordan vi ser på fremtiden.
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Vi har gennem de sidste par år været heldige at få ansat nogle nye og meget kompetente hænder, og dermed udvidet vores mandskab, så vi i dag har flere mand kørende i marken. Det er en udvikling vi både selv har søgt, men som selvfølgelig også er en følge af udviklingen i branchen.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Vi bestræber os på, at forblive i denne udvikling, og arbejder hele tiden på at forbedre og effektivisere os. Vi arbejder på, at vi ved at udvikle og os både på kontoret og hos medarbejderne i marken, i løbet af kort tid har mulighed for at få et par medarbejdere mere ind, hvormed vi kan tilbyde vores gode arbejde og ekspertise til lidt større projekter.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Vi har dog som meget høj prioritering, at vi hele tiden har tid og plads til selv den mindste kunde, der skal have skiftet filter. Vi vil altid have tid til at kunne passe vores trofaste kunder, uanset størrelse på disse.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Det er også vigtigt for os, at vores medarbejdere har det godt. At vi er med til at give dem en god hverdag. De skal kunne komme på arbejde med et smil, og det smil skal også gerne være på læben, når arbejdsdagen er slut, så de kan møde familie og venner med glæde, når arbejdsdagen er slut.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Vi har været så heldige, at vores kundekartotek er stødt stigende – og vigtigst af alt de forbliver som kunder! Det er vores overordnede mål. At vi forlader et arbejde, hvor kunden er tilfreds. Hvor de har fået det de gerne ville have. At der ikke kommer overraskende regninger til dem. De ved hvad de kan forvente af os – og vi gør vores yderste for at leve op til det – hver gang!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vores Grundlæggere
              </h2>
              <p className="text-lg text-gray-600">
                Mød mændene bag visionen der startede det hele.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                    <h3 className="text-xl font-bold mb-2">Bent Deber</h3>
                    <p className="text-gray-600 mb-4">
                      <strong>Grundlægger (1976-2004)</strong>
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Ingeniør Bent Deber var en af grundlæggerne af Deber Ventilation. 
                      Med sin tekniske baggrund og vision for kvalitetsventilation lagde han 
                      sammen med Henry Pedersen fundamentet for virksomheden. Efter en årrække 
                      flyttede han til Hjørring, men fortsatte det succesfulde samarbejde 
                      med Henry Pedersen.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                    <h3 className="text-xl font-bold mb-2">Henry Pedersen</h3>
                    <p className="text-gray-600 mb-4">
                      <strong>Grundlægger (1976-2004)</strong>
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Smed Henry Pedersen var med til at grundlægge Deber Ventilation i 1976. 
                      Han forblev i Fredericia og var drivkraften i virksomhedens daglige drift 
                      og udvikling. Hans fokus på kvalitet, tidsfrister og overholdelse af priser 
                      blev centrale værdier i virksomheden, der stadig bæres videre i dag.
                    </p>
                  </div>
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
              Lad os skabe historie sammen
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Med 45+ års erfaring er vi klar til at hjælpe dig med din 
              næste ventilationsudfordring. Bliv en del af vores historie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-[#3b5370] hover:bg-white">
                <FileText className="mr-2 h-5 w-5" />
                Få et uforpligtende tilbud
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