import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Users,
  ArrowRight,
  Phone,
  FileText,
  Calculator,
  Leaf,
  BarChart3,
  Settings,
  Database,
  Lightbulb,
  Clock,
  DollarSign,
  Building,
  Factory
} from "lucide-react";

export default function EnergioptimeringPage() {
  const optimizationSteps = [
    {
      step: "1",
      title: "Gennemgang af dit nuværende system",
      description: "Vi starter med en grundig analyse af dit eksisterende ventilationsanlæg for at identificere optimeringspotentiale",
      icon: BarChart3
    },
    {
      step: "2", 
      title: "Intelligent styring af tekniske installationer",
      description: "Implementering af smart styring der sikrer optimal drift baseret på faktiske behov",
      icon: Settings
    },
    {
      step: "3",
      title: "Eliminering af unødvendigt strømforbrug",
      description: "Identifikation og eliminering af spild i systemet for at minimere energiforbruget",
      icon: Zap
    },
    {
      step: "4",
      title: "Potentiel udskiftning af forældet udstyr",
      description: "Vurdering af om ældre udstyr bør udskiftes med mere energieffektive alternativer",
      icon: Building
    }
  ];

  const optimizationAreas = [
    {
      title: "Varmeanlæg",
      description: "Optimering af varmeanlæg for maksimal energieffektivitet",
      icon: TrendingUp
    },
    {
      title: "Elektriske motorer",
      description: "Modernisering af motorer for at reducere strømforbrug",
      icon: Zap
    },
    {
      title: "Kompressorer",
      description: "Effektiv styring af kompressorer for minimalt energiforbrug",
      icon: Factory
    },
    {
      title: "Ventilationssystemer",
      description: "Optimering af selve ventilationssystemet for bedst mulig ydeevne",
      icon: Settings
    },
    {
      title: "Pumper",
      description: "Intelligent styring af pumper for at eliminere unødvendigt forbrug",
      icon: Database
    },
    {
      title: "Køleanlæg",
      description: "Optimering af køleanlæg for maksimal effektivitet",
      icon: Leaf
    }
  ];

  const benefits = [
    {
      title: "Store reduktioner i energiforbruget",
      description: "Betydelige besparelser på både varme- og elregningen",
      icon: DollarSign
    },
    {
      title: "Markant lavere driftsomkostninger",
      description: "Reducerede udgifter til drift og vedligehold",
      icon: TrendingUp
    },
    {
      title: "Kort tilbagebetalingstid",
      description: "Investeringen betaler sig selv hurtigt tilbage",
      icon: Clock
    },
    {
      title: "Forbedret indeklima",
      description: "Bedre komfort uden at gå på kompromis med luftkvaliteten",
      icon: Users
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Identificering af optimeringspotentiale",
      description: "Vi analyserer dit nuværende system og identificerer områder med størst besparelsespotentiale"
    },
    {
      step: "2",
      title: "Beregning af forventede besparelser",
      description: "Vi udarbejder præcise beregninger af de forventede energibesparelser og økonomiske gevinster"
    },
    {
      step: "3",
      title: "Foreslå konkrete løsninger",
      description: "Vi præsenterer skræddersyede løsninger der er tilpasset dine specifikke behov og budget"
    },
    {
      step: "4",
      title: "Estimering af tilbagebetalingstid",
      description: "Vi beregner nøjagtigt hvornår din investering vil være betalt hjem via opnåede besparelser"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <nav className="bg-background border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-primary hover:text-primary/80">Forside</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/services" className="text-primary hover:text-primary/80">Services</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Energioptimering</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-emerald-700 text-primary-foreground py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-12 w-12 text-primary-foreground/80" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Energioptimering
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-primary-foreground/90">
              I en tid med stigende energipriser er det vigtigere end nogensinde at fokusere på energioptimering. 
              Ved at optimere dit ventilationsanlæg kan du ikke bare forbedre indeklimaet, men også opnå 
              betydelige økonomiske besparelser. Lad os finde en løsning til, hvordan du kan reducere dine 
              energiudgifter gennem intelligent styring og moderne teknologi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Energioptimering")}`}>
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-700 hover:text-white border border-green-700 text-lg px-8 py-3">
                  Få et uforpligtende tilbud
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 tech-heading">
                Spar penge med intelligent ventilation
              </h2>
              <p className="tech-text max-w-3xl mx-auto">
                Energioptimering af dit ventilationsanlæg er en effektiv måde at reducere dine driftsomkostninger på.
              </p>
            </div>

            {/* Optimization Steps */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Sådan sparer du penge</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {optimizationSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <Card key={index} className="tech-card text-center">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-green-600">{step.step}</span>
                          </div>
                        </div>
                        <CardTitle className="tech-heading">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="tech-text">{step.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Optimization Areas */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Intelligent styring giver mærkbare besparelser</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {optimizationAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <Card key={index} className="tech-card text-center">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <Icon className="h-8 w-8 text-green-600" />
                        </div>
                        <CardTitle className="tech-heading">{area.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="tech-text">{area.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="mt-8 text-center">
                <p className="tech-text max-w-2xl mx-auto">
                  Intelligent styring sikrer, at disse systemer kun kører, når der er behov for det, 
                  hvilket eliminerer spild og reducerer dit energiforbrug markant.
                </p>
              </div>
            </div>

            {/* Modernization */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Modernisering af forældet udstyr</h3>
              <div className="max-w-3xl mx-auto">
                <Card className="tech-card">
                  <CardContent className="p-8">
                    <p className="tech-text text-center">
                      En del af optimeringsprocessen indebærer at vurdere dit nuværende udstyr. Ældre ventilationsanlæg 
                      og relaterede systemer kan være energislugende sammenlignet med moderne alternativer. Ved at udskifte 
                      utidssvarende udstyr med energieffektive modeller kan du opnå yderligere besparelser.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Betydelige besparelser med kort tilbagebetalingstid</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="tech-card text-center">
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <Icon className="h-8 w-8 text-green-600" />
                        </div>
                        <CardTitle className="tech-heading">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="tech-text">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="mt-8 text-center">
                <p className="tech-text max-w-2xl mx-auto">
                  Mange oplever, at deres investering i energioptimering betaler sig selv tilbage inden for en 
                  overraskende kort periode takket være de opnåede besparelser.
                </p>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Lad os beregne din besparelse</h3>
              <div className="max-w-4xl mx-auto">
                <p className="tech-text text-center mb-8">
                  Hvert ventilationsanlæg er unikt, og potentialet for besparelser varierer. For at give dig et præcist billede af, 
                  hvad du kan spare, tilbyder vi en grundig gennemgang og beregning specifikt for dit anlæg.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {processSteps.map((step, index) => (
                    <Card key={index} className="tech-card">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-green-600">{step.step}</span>
                          </div>
                          <CardTitle className="tech-heading">{step.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="tech-text">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 tech-heading">Tag det første skridt mod besparelser</h3>
              <p className="tech-text mb-6 max-w-3xl mx-auto">
                Energioptimering af dit ventilationsanlæg er en intelligent investering i både din økonomi og miljøet. 
                Ved at udnytte moderne teknologi og smart styring kan du opnå betydelige besparelser uden at gå 
                på kompromis med indeklimaet.
              </p>
              <p className="tech-text mb-6 max-w-3xl mx-auto">
                Lad os sammen tage det første skridt mod et mere energieffektivt ventilationssystem. Kontakt os i dag 
                for en uforpligtende gennemgang og beregning af dit anlæg.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
                <p className="tech-text">
                  Energioptimering er ikke bare godt for miljøet - det er også godt for din bundlinje. 
                  Lad os hjælpe dig med at realisere potentialet i dit ventilationsanlæg og skabe en mere 
                  bæredygtig og økonomisk fremtid for din virksomhed eller bolig.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/contact?service=${encodeURIComponent("Energioptimering")}`}>
                  <Button size="lg" className="bg-white text-green-600 hover:bg-green-700 hover:text-white border border-green-600 px-8">
                    <FileText className="mr-2 h-5 w-5" />
                    Kontakt os i dag
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}