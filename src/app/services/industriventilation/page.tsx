import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Factory, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Settings,
  Shield,
  Zap
} from "lucide-react";

export default function IndustriventilationPage() {
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
            <span className="text-muted-foreground">Industriventilation</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-600 to-gray-800 text-primary-foreground py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Factory className="h-12 w-12 text-primary-foreground/80" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Industriventilation
            </h1>
            <p className="text-xl mb-8 leading-relaxed text-primary-foreground/90">
              Vi arbejder fremtidsorienteret og med fokus på behovene hos morgendagens industri. 
              Hver enkelt branche stiller specifikke krav til en effektiv ventilation, angående luftmængde og regulering.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-primary-foreground/90">
              Vi hjælper altid med at finde en løsning, der passer ind i jeres behov. 
              Vi dækker alle former for ventilation, så vi kan være jeres samarbejdspartner hvad enten 
              det drejer sig om rumventilation, udsugningsanlæg, emhætter, punktudsugning, procesudsugning eller andet I har brug for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/contact?service=${encodeURIComponent("Industriventilation")}`}>
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
                Professionelle løsninger til industrien
              </h2>
              <p className="tech-text max-w-3xl mx-auto">
                Med mange års erfaring leverer vi skræddersyede ventilationsløsninger 
                der opfylder de strenge krav i moderne industrivirksomheder.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="tech-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Settings className="h-8 w-8 text-primary" />
                    <CardTitle className="tech-heading">Skræddersyede løsninger</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="tech-text">
                    Vi designer ventilationsløsninger der præcist matcher din branches specifikke 
                    behov for luftkvalitet, temperaturkontrol og energieffektivitet.
                  </p>
                </CardContent>
              </Card>

              <Card className="tech-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Zap className="h-8 w-8 text-primary" />
                    <CardTitle className="tech-heading">Energieffektivitet</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="tech-text">
                    Vores moderne ventilationssystemer er designet til at minimere energiforbruget 
                    uden at gå på kompromis med ydeevnen og sikkerheden.
                  </p>
                </CardContent>
              </Card>

              <Card className="tech-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <CardTitle className="tech-heading">Compliance og sikkerhed</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="tech-text">
                    Vi sikrer overholdelse af alle gældende regulativer og standarder inden for 
                    industriventilation og arbejdsmiljø.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Service Areas */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center tech-heading">Vores serviceområder</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Rumventilation",
                  "Udsugningsanlæg", 
                  "Emhætter",
                  "Punktudsugning",
                  "Procesudsugning",
                  "ATEX-løsninger"
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
                  { title: "Analyse", desc: "Grundig gennemgang af dine behov" },
                  { title: "Design", desc: "Skræddersyet løsningsdesign" },
                  { title: "Installation", desc: "Professionel implementering" },
                  { title: "Support", desc: "Løbende vedligehold og service" }
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

            {/* Contact CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 tech-heading">Kontakt os for en skræddersyet løsning</h3>
              <p className="tech-text mb-6 max-w-2xl mx-auto">
                Uanset om du står over for en komplet modernisering eller har brug for en specifik 
                løsning, er vi klar til at hjælpe med de bedste og mest fremtidssikrede løsninger.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=Industriventilation">
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