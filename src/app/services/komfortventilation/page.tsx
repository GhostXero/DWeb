import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Wind, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Brain,
  Heart,
  Shield,
  School,
  Baby,
  Users,
  Filter,
  Leaf,
  Activity,
  Cloud,
  Thermometer
} from "lucide-react";

export default function KomfortventilationPage() {
  const workplaceBenefits = [
    {
      title: "Øget koncentration og fokus",
      description: "Bedre luftkvalitet forbedrer medarbejdernes evne til at koncentrere sig",
      icon: Brain
    },
    {
      title: "Reduceret træthed og hovedpine",
      description: "Færre symptomer på dårligt indeklima fører til færre gener",
      icon: Heart
    },
    {
      title: "Færre sygedage",
      description: "Bedre luftkvalitet reducerer sygdomsrisiko og sygefravær",
      icon: Shield
    },
    {
      title: "Forbedret kreativitet",
      description: "Optimalt indeklima fremmer problemløsningsevner og kreativ tænkning",
      icon: Brain
    }
  ];

  const schoolBenefits = [
    {
      title: "Bedre koncentrationsevne",
      description: "Elever kan koncentrere sig bedre i et optimalt indeklima",
      icon: Brain
    },
    {
      title: "Øget indlæringskapacitet",
      description: "Bedre luftkvalitet forbedrer elevernes evne til at lære og huske",
      icon: School
    },
    {
      title: "Reduceret smittefare",
      description: "Mindre risiko for spredning af luftbårne sygdomme",
      icon: Shield
    },
    {
      title: "Forbedret trivsel",
      description: "Bedre miljø for både elever og lærere",
      icon: Users
    }
  ];

  const kindergartenBenefits = [
    {
      title: "Reduceret infektionsrisiko",
      description: "Færre luftvejsinfektioner blandt børn",
      icon: Shield
    },
    {
      title: "Bedre søvnkvalitet",
      description: "Optimalt indeklima fremmer bedre søvn for børnene",
      icon: Baby
    },
    {
      title: "Øget komfort",
      description: "Bedre trivsel for både børn og personale",
      icon: Users
    },
    {
      title: "Minimeret eksponering",
      description: "Mindre eksponering for skadelige partikler og allergener",
      icon: Filter
    }
  ];

  const technologies = [
    {
      step: "1",
      title: "Varmegenvinding",
      description: "Genbruger energi fra den udgående luft for maksimal energieffektivitet",
      icon: Leaf
    },
    {
      step: "2",
      title: "Behovsstyret ventilation",
      description: "Tilpasser luftmængden automatisk efter det faktiske behov",
      icon: Activity
    },
    {
      step: "3",
      title: "HEPA-filtre",
      description: "Effektivt fjerner selv de mindste partikler fra luften",
      icon: Filter
    },
    {
      step: "4",
      title: "CO2-sensorer",
      description: "Automatisk justering af ventilationen baseret på rummets belastning",
      icon: Cloud
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
            <span className="text-muted-foreground">Komfortventilation</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative tech-gradient text-primary-foreground py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Wind className="h-12 w-12 text-primary-foreground/80" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Komfortventilation
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-primary-foreground/90">
              Komfortventilation er et system, der sikrer en konstant tilførsel af frisk luft og fjernelse 
              af forurenet luft i bygninger. Dette opnås gennem en kombination af mekanisk ventilation og 
              naturlig luftcirkulation. Formålet er at skabe et behageligt indeklima ved at regulere 
              temperatur, luftfugtighed og luftkvalitet.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-primary-foreground/90">
              Nøglen til et sundt og produktivt indeklima
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Komfortventilation")}`}>
                <Button size="lg" className="bg-white text-primary hover:bg-primary/90 hover:text-white border border-primary text-lg px-8 py-3">
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
                Betydningen af et godt indeklima
              </h2>
              <p className="tech-text max-w-3xl mx-auto">
                Et godt indeklima er afgørende for trivsel og produktivitet. 
                Komfortventilation bidrager til et sundere og mere produktivt miljø.
              </p>
            </div>

            {/* Workplace Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">På arbejdspladsen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workplaceBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="tech-card">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon className="h-8 w-8 text-primary" />
                          <CardTitle className="tech-heading">{benefit.title}</CardTitle>
                        </div>
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
                  Ved at investere i et effektivt komfortventilationssystem kan virksomheder skabe et sundere 
                  og mere produktivt arbejdsmiljø, hvilket i sidste ende gavner både medarbejdere og bundlinjen.
                </p>
              </div>
            </div>

            {/* School Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">I skoler</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {schoolBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="tech-card">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon className="h-8 w-8 text-primary" />
                          <CardTitle className="tech-heading">{benefit.title}</CardTitle>
                        </div>
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
                  Studier har vist, at elever i velventilerede klasseværelser præsterer op til 15% bedre i tests 
                  sammenlignet med elever i dårligt ventilerede rum. Dette understreger vigtigheden af at 
                  prioritere komfortventilation i uddannelsesinstitutioner.
                </p>
              </div>
            </div>

            {/* Kindergarten Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">I børnehaver og vuggestuer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {kindergartenBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="tech-card">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon className="h-8 w-8 text-primary" />
                          <CardTitle className="tech-heading">{benefit.title}</CardTitle>
                        </div>
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
                  Ved at sikre et optimalt indeklima i disse institutioner kan vi skabe de bedste forudsætninger 
                  for børnenes udvikling og sundhed.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Teknologiske løsninger</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technologies.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <Card key={index} className="tech-card">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-primary">{tech.step}</span>
                          </div>
                          <CardTitle className="tech-heading">{tech.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="tech-text">{tech.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="mt-8 text-center">
                <p className="tech-text max-w-2xl mx-auto">
                  Disse teknologier sikrer ikke kun et bedre indeklima, men bidrager også til at reducere 
                  energiforbruget og dermed bygningens miljøpåvirkning.
                </p>
              </div>
            </div>

            {/* Not Just Luxury */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Komfortventilation er ikke blot en luksus</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="tech-card">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 tech-heading">Moderne samfund</h4>
                    <p className="tech-text">
                      I vores moderne samfund tilbringer vi størstedelen af vores tid indendørs - på 
                      arbejdspladser, i skoler, børnehaver og vuggestuer. Derfor er det afgørende at sikre 
                      et behageligt og sundt indeklima i disse bygninger.
                    </p>
                  </CardContent>
                </Card>

                <Card className="tech-card">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 tech-heading">Central rolle</h4>
                    <p className="tech-text">
                      Komfortventilation spiller en central rolle i at opretholde et optimalt indeklima 
                      og er essentielt for vores velvære, sundhed og produktivitet.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <p className="tech-text max-w-2xl mx-auto">
                  Det er på tide at anerkende vigtigheden af komfortventilation og gøre det til en 
                  integreret del af vores bygningsdesign og -drift. Kun sådan kan vi sikre, at de steder, 
                  hvor vi tilbringer størstedelen af vores tid, aktivt bidrager til vores velvære og produktivitet.
                </p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 tech-heading">Bliv kontaktet omkring komfortventilation</h3>
              <p className="tech-text mb-6 max-w-2xl mx-auto">
                Lad os hjælpe dig med at skabe det optimale indeklima for din bygning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Komfortventilation")}`}>
                <Button size="lg" className="bg-white text-primary hover:bg-primary/90 hover:text-white border border-primary px-8">
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