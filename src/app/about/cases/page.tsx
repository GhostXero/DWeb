import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Award,
  ArrowRight,
  Phone,
  FileText,
  Users,
  TrendingUp,
  MapPin,
  Clock,
  Home,
  Factory,
  Briefcase,
  Leaf,
  DollarSign,
  Settings,
  Wrench
} from "lucide-react";
import Link from "next/link";

export default function CasesPage() {
  const caseStudies = [
    {
      title: "Hotel Haraldskær - Komplet Ventilationsløsning",
      category: "Hotel & Erhverv",
      client: "Hotel Haraldskær",
      location: "Vejen",
      year: "2023",
      totalentreprenor: "LIST BYG",
      projektering: "Deber Ventilation",
      anlaeg: "Exhausto VEX4080, VEX170, VEX150, VEX40",
      challenge: "Ny ventilation til hotel med komplekse behov inklusive restaurant, industrikøkken, konferencesal, værelser og kælder",
      solution: "Komplet ventilationsløsning med brandsikring via spjældsikring og ABV for elevatorer. Renovering tilpasset eksisterende og ny bygningsmasse",
      result: "Succesfuld implementering af ventilationssystem der opfylder alle krav til hotel og industrikøkken med optimal komfort og sikkerhed",
      image: "https://cdn-main.ideal.shop/images/by_hash/7db94b446abe2a9ce0ad8c27ac072867e79520e8268cb67a4061c631590a56dd/800-0/hotel_haraldskaer.png",
      technologies: ["Hotelventilation", "Industrikøkken", "Brandsikring", "Spjældsikring", "ABV Systemer"],
      testimonial: "Deber Ventilation har leveret en professionel løsning der perfekt imødekommer vores komplekse ventilationsbehov på hotellet."
    },
    {
      title: "Sønderborg Sygehus - Underset Ventilation",
      category: "Sygehus",
      client: "Region Syddanmark",
      location: "Sønderborg",
      year: "2025",
      totalentreprenor: "Fagentreprise",
      projektering: "Norconsult og Deber Ventilation",
      anlaeg: "Systemair Geniox, NB Ventilation",
      challenge: "Etablering af ventilation i hele underetagen på Sønderborg Sygehus inklusive renrum til Cystostatik (kræftmedicin)",
      solution: "Komfortventilation i renrum med høje krav til luftkvalitet. Ventilation samt styringssystem fra NETAVENT til procesventilation",
      result: "Projekt gennemført over 2,5 år med alle krav opfyldt til specialventilation i kritiske rum",
      image: "https://cdn-main.ideal.shop/images/by_hash/fd7ec638dfb32d4e90a10355a8bf6c09ab6508bb6c475c40a7b68dc742e02fcf/800-0/soenderborg_sundhedshus.png",
      technologies: ["Sygehusventilation", "Renrum", "Cystostatik", "NETAVENT Styring", "Systemair Geniox"],
      testimonial: "Deber Ventilation har demonstreret høj ekspertise i kompleks sygehusventilation med strenge krav til luftkvalitet."
    },
    {
      title: "Chr. Hansen (Novonesis) - Laboratorieventilation",
      category: "Laboratorium",
      client: "Chr. Hansen",
      location: "Hørsholm",
      year: "2025",
      totalentreprenor: "Egil Rasmussen",
      projektering: "Sweco og Deber Ventilation",
      anlaeg: "Systemair Geniox",
      challenge: "Ventilationsentreprise til nyt kontor og laboratorium med behov for integreret køl og procesventilation til stinkskabe og kemiskabe",
      solution: "Ventilation med integreret køl for sikring af behageligt indeklima. Procesventilation for alle stinkskabe og kemiskabe med styring fra LAB-VENT",
      result: "Sikret balance i rummene med optimal ventilation til laboratoriearbejde og komfortable kontorforhold",
      image: "https://cdn-main.ideal.shop/images/by_hash/cb171127e7bec66d3639262399f8d25c3a271e6efc5751397fdd01350ffc4af8/800-0/chr_hansen.png",
      technologies: ["Laboratorieventilation", "Integreret køl", "Procesventilation", "LAB-VENT Styring", "Kemiskabe"],
      testimonial: "En teknisk avanceret løsning der sikrer både sikkerhed og effektivitet i vores laboratorier."
    },
    {
      title: "Sofie Amaliegården - Boligventilation",
      category: "Bolig",
      client: "BoligNU",
      location: "København",
      year: "2025",
      totalentreprenor: "Egil Rasmussen",
      projektering: "Rambøll og Deber Ventilation",
      anlaeg: "Genvex Eco190XL og Exhausto VEX340",
      challenge: "Etablering af ventilation i 100 boliger inklusive procesudsug fra vaskerum og naturlig udluftning",
      solution: "Decentral ventilation i boliger med komfortventilation med CO2 og temperaturstyring i beboerlokale. Procesudsug fra vaskerum i kælder",
      result: "Effektiv ventilationsløsning til alle boliger med optimal komfort og luftkvalitet",
      image: "https://cdn-main.ideal.shop/images/by_hash/6a73af3e30cf2b297598c2538251cc8a69dafdf3dd89de8d1477419c21f8baf3/800-0/sofie_amaliegaarden.png",
      technologies: ["Boligventilation", "Decentral anlæg", "CO2 Styring", "Temperaturstyring", "Genvex"],
      testimonial: "Deber Ventilation har leveret en pålidelig løsning der sikrer godt indeklima i alle vores boliger."
    },
    {
      title: "Hirsehaven - Stort Boligprojekt",
      category: "Bolig",
      client: "Heimstaden",
      location: "Hjørring",
      year: "2024",
      totalentreprenor: "Raundahl og Moesby",
      projektering: "Deber Ventilation",
      anlaeg: "Genvex eco 275",
      challenge: "Installation af ventilation i stort boligprojekt med behov for decentrale løsninger og hjælpeventilation",
      solution: "132 decentrale ventilationsanlæg og 18 tagventilatorer som fungerer som hjælpeventilatorer på afkastene",
      result: "Effektiv ventilationsløsning til alle boliger med optimal luftcirkulation",
      image: "https://cdn-main.ideal.shop/images/by_hash/4479094fe6c1ed3e4b87ccea6d4a32a2746fd3cf66576a82624f039bd4d3487d/800-0/hirsehaven.png",
      technologies: ["Boligventilation", "Decentral anlæg", "Tagventilatorer", "Genvex", "Hjælpeventilation"],
      testimonial: "En imponerende løsning der håndterer ventilation i vores store boligprojekt med stor professionalisme."
    },
    {
      title: "Kolding Sygehus - Operationsstuer",
      category: "Sygehus",
      client: "Region Syddanmark",
      location: "Kolding",
      year: "2024",
      totalentreprenor: "Fagentreprise",
      projektering: "Ingeniør'ne",
      anlaeg: "Exhausto VEX4030",
      challenge: "Udførelse af 3 operationsstuer med køle/varmeflader og behov for procesventilation med højtryksventilatorer",
      solution: "Operationsstuer med køle/varmeflader for temperatur sikring. Indblæsning gennem LAF bænke og procesventilation med højtryksventilatorer",
      result: "Operationsstuer der opfylder alle krav til sterilt miljø med effektiv bort ventilation af dampe under operationer",
      image: "https://cdn-main.ideal.shop/images/by_hash/4679e406016fe6a263aa1721aa9015c513635983994054b501fa456e4a6bb6df/800-0/kolding_sygehus.png",
      technologies: ["Operationsstuer", "Køle/flader", "LAF Bænke", "Højtryksventilatorer", "Procesventilation"],
      testimonial: "Deber Ventilation har leveret operationsstuer i absolut topklasse der opfylder alle vores strenge krav."
    },
    {
      title: "DEME Offshore - Kontorventilation",
      category: "Kontor",
      client: "DEME Offshore",
      location: "Esbjerg",
      year: "2024",
      totalentreprenor: "Kjærh og Trillingsgaard",
      projektering: "Deber Ventilation",
      anlaeg: "Exhausto VEX4080RHP og VEX170CF",
      challenge: "Komfort og procesventilation for nyt kontorbyggeri med behov for integreret køl og brandsikring",
      solution: "Ventilation med integreret køl for behageligt indeklima året rundt. Brandsikring som spjældsikret system med røgudluftning til kælder",
      result: "Effektiv ventilationsløsning der sikrer optimalt arbejdsmiljø med fuld brandsikring",
      image: "https://cdn-main.ideal.shop/images/by_hash/770f6f0c2293be3faa27477fd63b28aa87035136f61b1745e2b3e10d94e219c6/800-0/deme_offshore.png",
      technologies: ["Kontorventilation", "Integreret køl", "Brandsikring", "Spjældsikring", "Røgudluftning"],
      testimonial: "En professionel løsning der skaber perfekt arbejdsmiljø i vores nye kontorfaciliteter."
    },
    {
      title: "Sydhavnsvej Haderslev - Smart Boligventilation",
      category: "Bolig",
      client: "HAB",
      location: "Haderslev",
      year: "2024",
      totalentreprenor: "Bo Michelsen",
      projektering: "Viggo Madsen og Deber Ventilation",
      anlaeg: "Trykstyret ventilator fra Airforce og Tridium",
      challenge: "Installation af behovstyret smart ventilation og CTS i 88 boliger med fjernovervågning",
      solution: "Behovstyret ventilation med rumfølere og CTS i hver bolig. Brandsikring som røgventileret system",
      result: "Moderne ventilationsløsning med fuld fjernovervågning og optimal energieffektivitet",
      image: "https://cdn-main.ideal.shop/images/by_hash/34a2a028a8f8fabe39dd80d5c46a793683e7caedabf94cfdda539d503e1fb198/800-0/sydhavnsvej_hab.png",
      technologies: ["Smart ventilation", "CTS Styring", "Rumfølere", "Fjernovervågning", "Røgventilering"],
      testimonial: "Deber Ventilation har leveret en fremtidssikret løsning med imponerende teknologi."
    },
    {
      title: "Hotel Sixtus - Hotelventilation",
      category: "Hotel & Erhverv",
      client: "Hotel Sixtus",
      location: "Vejle",
      year: "2024",
      totalentreprenor: "LIST BYG",
      projektering: "Artelia og Deber Ventilation",
      anlaeg: "IV og Nilan",
      challenge: "Ventilation med integreret køl til nye konferencesale og 18 nye værelser med decentrale anlæg",
      solution: "Ventilation med integreret køl til konferencesale. Decentrale ventilationsanlæg i værelser med spjældsikret brandsikring",
      result: "Komplet ventilationsløsning der opfylder alle krav til moderne hotel med konferencefaciliteter",
      image: "https://cdn-main.ideal.shop/images/by_hash/68013b38f9c1b2eee5024a194a9ed59997cceedfb183a334f1aa2dbb698f19ca/800-0/hotel_sixtus.png",
      technologies: ["Hotelventilation", "Integreret køl", "Decentrale anlæg", "Konference", "Spjældsikring"],
      testimonial: "En imponerende løsning der har forbedret både komfort og effektivitet på vores hotel."
    },
    {
      title: "Tovværket - Boligprojekt",
      category: "Bolig",
      client: "Lejerbo",
      location: "København",
      year: "2023",
      totalentreprenor: "Raundahl og Morsby",
      projektering: "Ingeniør'ne og Deber Ventilation",
      anlaeg: "ECO275",
      challenge: "Installation af ventilation i boligprojekt med decentrale anlæg og brandsikring",
      solution: "88 decentrale ventilationsanlæg med brandsikring som røgventileret system",
      result: "Effektiv ventilationsløsning til alle boliger med optimal sikkerhed",
      image: "https://cdn-main.ideal.shop/images/by_hash/38632dff514b5d45a8af5f7107ad87c08f833016e86ea98a85377448733c5a0f/800-0/tovvaerket.png",
      technologies: ["Boligventilation", "Decentrale anlæg", "Røgventilering", "ECO275", "Brandsikring"],
      testimonial: "Deber Ventilation har leveret en pålidelig løsning der sikrer godt indeklima i alle boliger."
    },
    {
      title: "Fredericia Genbrug - Genbrugsstation",
      category: "Industri",
      client: "Fredericia Kommune",
      location: "Fredericia",
      year: "2021",
      totalentreprenor: "Egil Rasmussen",
      projektering: "Cowi",
      anlaeg: "IV Søgren for kontorer, og udsugningsventilatorer",
      challenge: "Ventilationsentreprise på ny genbrugsstation med kontorer, butik, sorteringshal og farligt affald",
      solution: "Komfortventilation i kontorer, omklædning og butik via centralt anlæg. Udsugning fra farligt affald via sug fra spande, containere og oliekar",
      result: "Moderne genbrugsstation med optimal ventilation til alle områder inklusive håndtering af farligt affald",
      image: "https://cdn-main.ideal.shop/images/by_hash/d90266e984522ea823489a7c84ccd640dff28f9b3b41dca9ff8e182f8ca7fcf2/800-0/16.jpg",
      technologies: ["Industriventilation", "Komfortventilation", "Udsugning", "Farligt affald", "Centralt anlæg"],
      testimonial: "En professionel løsning der håndterer komplekse ventilationsbehov på vores genbrugsstation."
    },
    {
      title: "Nytorv - Seniorboliger",
      category: "Bolig",
      client: "Pierre Ejendomme",
      location: "Kolding",
      year: "2021",
      totalentreprenor: "CJ Anlæg",
      projektering: "Deber Ventilation",
      anlaeg: "Genvex ECO 190 XL",
      challenge: "Ombygning af kontorbygning til 33 seniorboliger med pladsudfordringer til installationer",
      solution: "30 decentrale ventilationsanlæg placeret over nedhængte lofter med by-pass funktion og fugtstyring. Brandsikring som spjældsikret system",
      result: "Energivenlige seniorboliger med optimal ventilation og fuld brandsikring trods pladsudfordringer",
      image: "https://cdn-main.ideal.shop/images/by_hash/31883d21c31cd74e8cb0cb0f173238f2139d5b8b98370731e62b10e0660db60b/800-0/20210803_120945.jpg",
      technologies: ["Seniorboliger", "Decentrale anlæg", "By-pass funktion", "Fugtstyring", "Spjældsikring"],
      testimonial: "En kreativ løsning der har løst vores pladsudfordringer uden at gå på kompromis med kvaliteten."
    },
    {
      title: "Møllehuset - Børnehave",
      category: "Institution",
      client: "Vejle kommune",
      location: "Gårslev",
      year: "2021",
      totalentreprenor: "Tømrer og Snedkerværkstedet Løsning",
      projektering: "Wesenberg Rådgivende Ingeniør",
      anlaeg: "Airmaster og Exhausto VEX240",
      challenge: "Ventilationsentreprise på ombygning og tilbygning af børnehave med begrænset plads til installationer",
      solution: "Behovstyret ventilation med Airmaster i eksisterende bygning. Centralt anlæg i tilbygning med kombineret CO2 og temperaturføler. Brandsikring som spjældsikret system",
      result: "Optimal ventilation i børnehave med pladsoptimerede løsninger der sikrer godt indeklima for børnene",
      image: "https://cdn-main.ideal.shop/images/by_hash/603f67ac1aebd9b078e552d068161320584514230073f0c294dff462f2b6d9d1/800-0/17.jpg",
      technologies: ["Børnehave", "Airmaster", "Behovsstyring", "CO2 styring", "Spjældsikring"],
      testimonial: "En fleksibel løsning der passer perfekt til en børnehave med begrænset plads."
    },
    {
      title: "ALFA Tower - Bolig og Bibliotek",
      category: "Bolig",
      client: "Oxdal ejendomme",
      location: "Vejen",
      year: "2020",
      totalentreprenor: "Oxdal",
      projektering: "Ingeniør'ne/Deber Ventilation",
      anlaeg: "Exhausto",
      challenge: "Ventilation til ombygning af kontorbygning til 33 seniorboliger, bibliotek og p-kælder med synlige installationer",
      solution: "30 decentrale ventilationsanlæg i boliger, komfortventilation i bibliotek med VAV spjæld og rumstyring, brandventilation i p-kælder. Centralsug til emhætter via tagventilatorer",
      result: "Succesfuld ombygning med avanceret ventilation der opfylder alle krav til bolig, bibliotek og parkering",
      image: "https://cdn-main.ideal.shop/images/by_hash/48ae2ff21ac09eaaec8791526591bcfdedf5d01ae6d0debd9984ad70f4d4ca3d/800-0/IMG_9090.JPG",
      technologies: ["Boligventilation", "Bibliotek", "VAV spjæld", "Centralsug", "Brandventilation"],
      testimonial: "En imponerende teknisk løsning der har forvandlet en kontorbygning til moderne boliger."
    },
    {
      title: "IP Schmidt Gården - Seniorhus",
      category: "Institution",
      client: "Fredericia kommune",
      location: "Fredericia",
      year: "2019",
      totalentreprenor: "Deber Ventilation",
      projektering: "MOE",
      anlaeg: "NB Ventilation",
      challenge: "Hovedentreprise med udskiftning af 3 gamle ventilationsanlæg til 2 nye større anlæg med energibesparelse",
      solution: "Demontering af 3 gamle anlæg og installation af 2 nye anlæg med VAV for behovsstyring og energibesparelse. Nye emhætter til køkken og nye lofter med energibesparende lamper",
      result: "Energioptimeret løsning der har reduceret driftsomkostningerne markant i seniorhuset",
      image: "https://cdn-main.ideal.shop/images/by_hash/39ffa9682a677bba6de7f5c394b1d8f990d8a8cebe311c573f7331a069b221f7/800-0/1.png",
      technologies: ["Seniorhus", "Hovedentreprise", "VAV styring", "Energibesparelse", "Emhætter"],
      testimonial: "En energivenlig løsning der har forbedret både indeklima og økonomi i vores seniorhus."
    }
  ];

  const categories = [...new Set(caseStudies.map(caseStudy => caseStudy.category))];
  
  const stats = [
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
      number: "25%",
      label: "Gennemsnitlig energibesparelse",
      icon: Leaf
    },
    {
      number: "15+",
      label: "Brancher dækket",
      icon: Briefcase
    }
  ];

  const getIconForCategory = (category) => {
    const iconMap = {
      "Hotel & Erhverv": Building,
      "Sygehus": Shield,
      "Laboratorium": Briefcase,
      "Bolig": Home,
      "Kontor": Users,
      "Industri": Factory,
      "Institution": Star
    };
    return iconMap[category] || Building;
  };

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
            <span className="text-gray-600">Case Studies</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white h-[30vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Building className="h-12 w-12 text-purple-200" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Se hvordan vi har hjulpet vores kunder med at løse deres 
              ventilationsudfordringer. Hvert projekt er unikt, men vores 
              fokus på kvalitet, innovation og kundetilfredshed er altid den samme.
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
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Alle Cases ({caseStudies.length})
            </Badge>
            {categories.map((category) => {
              const count = caseStudies.filter(c => c.category === category).length;
              return (
                <Badge key={category} variant="secondary" className="px-4 py-2 text-sm">
                  {category} ({count})
                </Badge>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Udvalgte Projekter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Her præsenterer vi et udvalg af vores seneste og mest spændende 
              projekter fra forskellige brancher og applikationer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => {
              const CategoryIcon = getIconForCategory(caseStudy.category);
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="w-full h-48 bg-gray-200">
                        <img 
                          src={caseStudy.image} 
                          alt={caseStudy.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{caseStudy.title}</CardTitle>
                            <div className="flex items-center space-x-2 mb-2">
                              <CategoryIcon className="h-4 w-4 text-purple-600" />
                              <Badge variant="outline" className="text-xs">
                                {caseStudy.category}
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {caseStudy.year}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-sm text-gray-600 mb-3">
                          <strong>Kunde:</strong> {caseStudy.client} | <strong>Location:</strong> {caseStudy.location}
                        </CardDescription>
                        {caseStudy.totalentreprenor && (
                          <CardDescription className="text-sm text-gray-600 mb-1">
                            <strong>Totalentreprenør:</strong> {caseStudy.totalentreprenor}
                          </CardDescription>
                        )}
                        {caseStudy.projektering && (
                          <CardDescription className="text-sm text-gray-600 mb-1">
                            <strong>Projektering:</strong> {caseStudy.projektering}
                          </CardDescription>
                        )}
                        {caseStudy.anlaeg && (
                          <CardDescription className="text-sm text-gray-600 mb-3">
                            <strong>Anlæg:</strong> {caseStudy.anlaeg}
                          </CardDescription>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Udfordring:</p>
                            <p className="text-sm text-gray-600">{caseStudy.challenge}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Løsning:</p>
                            <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Resultat:</p>
                            <p className="text-sm text-green-600">{caseStudy.result}</p>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Hvad vores kunder siger
              </h2>
              <p className="text-lg text-gray-600">
                Tilfredse kunder er vores bedste anbefaling.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.slice(0, 4).map((caseStudy, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "{caseStudy.testimonial}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{caseStudy.client}</p>
                        <p className="text-sm text-gray-600">{caseStudy.category}</p>
                      </div>
                      <Badge variant="outline">{caseStudy.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vores Proces
              </h2>
              <p className="text-lg text-gray-600">
                Sådan sikrer vi succes i alle vores projekter.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Analyse", desc: "Grundig gennemgang af behov og udfordringer" },
                { step: "2", title: "Design", desc: "Skræddersyet løsning med teknisk beregning" },
                { step: "3", title: "Implementering", desc: "Professionel installation med minimal forstyrrelse" },
                { step: "4", title: "Test", desc: "Grundig testning og dokumentation" },
                { step: "5", title: "Support", desc: "Løbende support og vedligehold" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Klar til dit næste projekt?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Lad os hjælpe dig med at realisere dine ventilationsmål. 
              Vi har ekspertisen og erfaringen til at sikre succes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-[#3b5370] hover:bg-white">
                <FileText className="mr-2 h-5 w-5" />
                Få et uforpligtende tilbud
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-[#3b5370] hover:bg-white">
                <ArrowRight className="mr-2 h-5 w-5" />
                Kontakt os direkte
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}