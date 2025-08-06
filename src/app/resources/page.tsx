'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  HelpCircle, 
  ArrowRight,
  Calendar,
  User,
  FileText,
  Search
} from "lucide-react";

export default function ResourcesPage() {
  const blogPosts = [
    {
      title: "Sådan vælger du det rigtige ventilationsanlæg",
      excerpt: "En guide til at vælge det bedste ventilationsanlæg til din bolig eller virksomhed",
      date: "15. marts 2024",
      author: "Mette Nielsen",
      category: "Guide",
      image: "/images/residential-ventilation.jpg"
    },
    {
      title: "Energioptimering af eksisterende ventilationsanlæg",
      excerpt: "Tips og tricks til at reducere energiforbruget i dit nuværende anlæg",
      date: "8. marts 2024",
      author: "Lars Jensen",
      category: "Energi",
      image: "/images/ventilation-control.jpg"
    },
    {
      title: "Indeklima i moderne boliger",
      excerpt: "Hvorfor god ventilation er afgørende for et sundt indeklima",
      date: "1. marts 2024",
      author: "Peter Hansen",
      category: "Indeklima",
      image: "/images/residential-ventilation.jpg"
    }
  ];

  const faqCategories = [
    {
      title: "Generelle spørgsmål",
      questions: [
        "Hvad koster et ventilationsanlæg?",
        "Hvor lang tid tager installationen?",
        "Hvilken vedligeholdelse kræver anlægget?",
        "Få I tilskud til ventilation?"
      ]
    },
    {
      title: "Tekniske spørgsmål",
      questions: [
        "Hvad er forskellen på forskellige typer ventilation?",
        "Hvordan måler man rigtig ventilation?",
        "Kan jeg selv installere ventilationsanlæg?",
        "Hvad er et varmegenvindingsanlæg?"
      ]
    },
    {
      title: "Service og vedligeholdelse",
      questions: [
        "Hvor ofte skal anlægget serviceres?",
        "Hvad koster en service?",
        "Kan I hjælpe med fejlfinding?",
        "Tilbyder I serviceaftaler?"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#3b5370]/5 to-[#3b5370]/10 h-[40vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-[#3b5370] text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              Viden og Ressourcer
            </Badge>
            <h1 className="tech-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ressourcer og Viden om Ventilation
            </h1>
            <p className="tech-text text-xl text-gray-600 mb-8 leading-relaxed">
              Find guides, artikler, FAQs og downloads der hjælper dig med at forstå 
              og vælge de bedste ventilationsløsninger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-[#3b5370] text-[#3b5370] hover:bg-[#3b5370] hover:text-white">
                <HelpCircle className="mr-2 h-5 w-5" />
                Se FAQs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
              Seneste Blogindlæg
            </h2>
            <p className="tech-text text-lg text-gray-600 max-w-2xl mx-auto">
              Få ekspertråd og indsigt i de nyeste trends inden for ventilation og indeklima.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="tech-card hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="tech-text">{post.date}</span>
                    <User className="h-4 w-4 ml-4" />
                    <span className="tech-text">{post.author}</span>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2 bg-[#3b5370] text-white">
                    {post.category}
                  </Badge>
                  <CardTitle className="tech-heading text-xl">{post.title}</CardTitle>
                  <CardDescription className="tech-text text-gray-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-[#3b5370] text-[#3b5370] hover:bg-[#3b5370] hover:text-white">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="px-8 bg-[#3b5370] hover:bg-[#2d3f55]">
              Se alle blogindlæg
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
              Ofte Stillede Spørgsmål
            </h2>
            <p className="tech-text text-lg text-gray-600 max-w-2xl mx-auto">
              Find svar på de mest almindelige spørgsmål om ventilation og vores services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {faqCategories.map((category, index) => (
              <Card key={index} className="tech-card hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="tech-heading text-xl flex items-center space-x-2">
                    <HelpCircle className="h-6 w-6 text-[#3b5370]" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.questions.map((question, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-lg border border-gray-200 hover:border-[#3b5370] transition-colors cursor-pointer">
                        <div className="flex items-center space-x-2">
                          <Search className="h-4 w-4 text-gray-400" />
                          <span className="tech-text text-sm text-gray-700">{question}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="px-8 bg-[#3b5370] hover:bg-[#2d3f55]">
              Se alle FAQs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Har du flere spørgsmål?
            </h2>
            <p className="text-xl mb-8 text-white">
              Vores eksperter er klar til at hjælpe dig med professionel rådgivning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#contact-form">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white bg-white text-[#3b5370] hover:bg-[#3b5370] hover:text-white">
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