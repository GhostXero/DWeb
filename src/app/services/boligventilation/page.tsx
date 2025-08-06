import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Shield,
  Zap,
  Users
} from "lucide-react";

export default function BoligventilationPage() {
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
            <span className="text-muted-foreground">Boligventilation</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative tech-gradient text-primary-foreground py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Home className="h-12 w-12 text-primary-foreground/80" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Boligventilation
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-primary-foreground/90">
              Har du overvejet at opgradere dit indeklima og få installeret et ventilationsanlæg i din bolig? 
              Så kan du søge om tilskud til energirenovering gennem Energirenoveringspuljen.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-primary-foreground/90">
              Boligventilation er en afgørende faktor for vores indeklima og generelle velvære. 
              Kontakt os, hvis du vil høre mere om god ventilation, og hvordan den kan forbedre dit hjem og din livskvalitet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Boligventilation")}`}>
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
                Bedre indeklima i din bolig
              </h2>
              <p className="tech-text max-w-3xl mx-auto">
                Med moderne boligventilation sikrer du et sundt og behageligt 
                indeklima for dig og din familie.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="tech-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <CardTitle className="tech-heading">Bedre indeklima</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="tech-text">
                    Et velfungerende ventilationssystem sikrer konstant tilførsel af frisk luft 
                    og fjerner forurenet luft for et sundere hjemmemiljø.
                  </p>
                </CardContent>
              </Card>

              <Card className="tech-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="tech-heading">Sundhedsmæssige gevinster</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="tech-text">
                    God ventilation har direkte positiv indvirkning på helbredet og 
                    kan reducere symptomer på astma, allergier og luftvejsproblemer.
                  </p>
                </CardContent>
              </Card>

              <Card className="tech-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Zap className="h-8 w-8 text-primary" />
                    <CardTitle className="tech-heading">Energibesparelser</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="tech-text">
                    Moderne systemer med varmegenvinding kan genbruge op til 90% 
                    af varmen og give betydelige besparelser på varmeregningen.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Service Areas */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Vores løsninger</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Mekanisk ventilation",
                  "Varmegenvinding", 
                  "Fugtstyring",
                  "Automatisk styring",
                  "Støjsvage anlæg",
                  "Energioptimerede systemer"
                ].map((service, index) => (
                  <Card key={index} className="tech-card">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="tech-text font-medium">{service}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Vores proces</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { title: "Kartlægning", desc: "Gennemgang af bolig og behov" },
                  { title: "Design", desc: "Skræddersyet løsningsforslag" },
                  { title: "Installation", desc: "Professionel montør" },
                  { title: "Service", desc: "Løbende vedligehold" }
                ].map((step, index) => (
                  <Card key={index} className="tech-card text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      <h4 className="font-semibold mb-2 tech-heading">{step.title}</h4>
                      <p className="text-sm tech-text">{step.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Yderligere fordele</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="tech-card">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Users className="h-8 w-8 text-primary" />
                      <CardTitle className="tech-heading">Forbedret komfort</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="tech-text">
                      Konstant temperatur og luftkvalitet forbedrer din livskvalitet 
                      og søvnkvalitet markant.
                    </p>
                  </CardContent>
                </Card>

                <Card className="tech-card">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <Shield className="h-8 w-8 text-primary" />
                      <CardTitle className="tech-heading">Forebyggelse af fugtskader</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="tech-text">
                      Regulering af luftfugtigheden forebygger fugtskader og 
                      skimmelsvamp i din bolig.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 tech-heading">Få et uforpligtende tilbud</h3>
              <p className="tech-text mb-6 max-w-2xl mx-auto">
                Lad os vurdere din boligs ventilationsbehov og anbefale den bedste løsning 
                baseret på boligens størrelse, indretning og dine specifikke behov.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=Boligventilation">
                <Button size="lg" className="bg-white text-primary hover:bg-primary/90 hover:text-white border border-primary px-8">
                  Få et uforpligtende tilbud
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