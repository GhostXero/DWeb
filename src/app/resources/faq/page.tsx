'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  ArrowRight,
  Search,
  Phone,
  MessageCircle,
  FileText
} from "lucide-react";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Generelle spørgsmål",
      icon: HelpCircle,
      questions: [
        {
          question: "Hvad koster et ventilationsanlæg?",
          answer: "Prisen på et ventilationsanlæg varierer afhængigt af størrelse, type og kompleksitet. Et standard anlæg til en almindelig familiebolig koster typisk mellem 30.000-80.000 kr inkl. installation. Vi giver altid et uforpligtende tilbud baseret på dine specifikke behov."
        },
        {
          question: "Hvor lang tid tager installationen?",
          answer: "Installationstiden afhænger af anlæggets størrelse og kompleksitet. For et standard anlæg i en eksisterende bolig tager det typisk 1-3 dage. Ved nybyggeri eller større industrielle anlæg kan det tage flere uger."
        },
        {
          question: "Hvilken vedligeholdelse kræver anlægget?",
          answer: "Et ventilationsanlæg kræver regelmæssig vedligeholdelse for at fungere optimalt. Dette inkluderer filterskift hver 3-6 måneder, årlig service af en professionel, og rengøring af kanaler og komponenter efter behov."
        },
        {
          question: "Få I tilskud til ventilation?",
          answer: "Ja, der findes forskellige tilskudsordninger til energioptimerede ventilationsanlæg. Vi hjælper gerne med at identificere relevante tilskud og assistere med ansøgningsprocessen. Kontakt os for mere information om aktuelle muligheder."
        }
      ]
    },
    {
      title: "Tekniske spørgsmål",
      icon: FileText,
      questions: [
        {
          question: "Hvad er forskellen på forskellige typer ventilation?",
          answer: "Der findes primært tre typer: 1) Naturlig ventilation - bruger vinduer og træk, 2) Mekanisk udsugning - udsuger luft og suger frisk luft ind gennem ventiler, 3) Balanced ventilation - både udsuger og tilfører mekanisk med varmegenvinding. Balanced ventilation er den mest energieffektive."
        },
        {
          question: "Hvordan måler man rigtig ventilation?",
          answer: "Rigtig ventilation måles gennem luftmængde (m³/time), luftskifte (antal gange timen), og CO2-niveau. Et godt indeklima har typisk et luftskifte på 0.5-1 gang i timen og CO2-niveau under 1000 ppm. Vi bruger professionelt måleudstyr til præcis vurdering."
        },
        {
          question: "Kan jeg selv installere ventilationsanlæg?",
          answer: "Vi anbefaler altid at få et ventilationsanlæg installeret af professionelle. Korrekt installation er afgørende for anlæggets effektivitet, levetid og for at sikre at det opfylder byggekrav. Fejlinstallation kan føre til dårlig luftkvalitet og unødvendige energiomkostninger."
        },
        {
          question: "Hvad er et varmegenvindingsanlæg?",
          answer: "Et varmegenvindingsanlæg (VX-anlæg) er en type balanced ventilation, der genbruger varmen fra den udsugede luft til at opvarme den friske indblæste luft. Dette kan genvinde op til 90% af varmen, hvilket giver betydelige energibesparelser og bedre komfort."
        }
      ]
    },
    {
      title: "Service og vedligeholdelse",
      icon: MessageCircle,
      questions: [
        {
          question: "Hvor ofte skal anlægget serviceres?",
          answer: "Vi anbefaler årlig service af alle ventilationsanlæg for at sikre optimal drift og forlænge levetiden. Ved intensiv brug eller i støvede miljøer kan hyppigere service være nødvendig. Vi tilbyder serviceaftaler der sikrer regelmæssig vedligeholdelse."
        },
        {
          question: "Hvad koster en service?",
          answer: "Prisen for en service varierer afhængigt af anlæggets type og størrelse. Et typisk servicebesøg til en bolig koster mellem 800-1500 kr ekskl. reservedele. Vi giver altid et fast prisoverslag inden vi påbegynder arbejdet."
        },
        {
          question: "Kan I hjælpe med fejlfinding?",
          answer: "Ja, vi tilbyder professionel fejlfinding på alle typer ventilationsanlæg. Vores teknikere har mange års erfaring og kan diagnosticere og løse de fleste problemer hurtigt. Kontakt os for at beskrive problemet, så vi kan hjælpe dig videre."
        },
        {
          question: "Tilbyder I serviceaftaler?",
          answer: "Ja, vi tilbyder skræddersyede serviceaftaler til både private og erhvervskunder. En serviceaftale sikrer regelmæssig vedligeholdelse, prioriteret service ved problemer, og ofte bedre priser. Vi skræddersyr aftalen efter dine specifikke behov og anlæg."
        }
      ]
    }
  ];

  const stillNeedHelp = [
    {
      title: "Kontakt vores support",
      description: "Vores tekniske support er klar til at hjælpe dig med alle dine spørgsmål",
      icon: Phone,
      action: "Ring til os",
      contact: "+45 75 95 44 22"
    },
    {
      title: "Send en besked",
      description: "Har du et specifikt spørgsmål? Send os en besked, så vender vi tilbage hurtigst muligt",
      icon: MessageCircle,
      action: "Skriv til os",
      contact: "info@deberventilation.dk"
    },
    {
      title: "Læs mere",
      description: "Find flere informationer i vores guides og dokumentation",
      icon: FileText,
      action: "Se ressourcer",
      contact: "Gå til bibliotek"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 h-[40vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <HelpCircle className="mr-2 h-4 w-4" />
              Ofte Stillede Spørgsmål
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Har du spørgsmål om ventilation?
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Find svar på de mest almindelige spørgsmål om ventilation, installation og service. 
              Kan du ikke finde det du søger, er vores eksperter klar til at hjælpe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Søg i FAQs..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button className="whitespace-nowrap">
                Søg
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {faqCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center space-x-3">
                      <Icon className="h-8 w-8 text-blue-600" />
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {category.questions.map((item, idx) => (
                        <div key={idx} className="border-l-4 border-blue-200 pl-4">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {item.question}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mangler du stadig hjælp?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vores team af eksperter står klar til at hjælpe dig med personlig rådgivning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stillNeedHelp.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      {item.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      {item.contact}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Lad os hjælpe dig videre
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Uanset om du har brug for rådgivning, tilbud eller service, er vi klar til at hjælpe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#contact-form">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-white text-[#3b5370] border-white hover:bg-[#3b5370] hover:text-white">
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