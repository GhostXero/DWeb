'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  ArrowRight,
  Calendar,
  User,
  Search,
  Filter
} from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Sådan vælger du det rigtige ventilationsanlæg",
      excerpt: "En omfattende guide til at vælge det bedste ventilationsanlæg til din bolig eller virksomhed. Lær om forskellige typer, størrelser og funktioner.",
      date: "15. marts 2024",
      author: "Mette Nielsen",
      category: "Guide",
      readTime: "5 min",
      image: "/images/residential-ventilation.jpg",
      content: "Valget af det rigtige ventilationsanlæg er afgørende for et sundt indeklima og energieffektiv drift. I denne guide gennemgår vi de vigtigste overvejelser..."
    },
    {
      title: "Energioptimering af eksisterende ventilationsanlæg",
      excerpt: "Få professionelle tips og tricks til at reducere energiforbruget i dit nuværende ventilationsanlæg uden at gå på kompromis med luftkvaliteten.",
      date: "8. marts 2024",
      author: "Lars Jensen",
      category: "Energi",
      readTime: "7 min",
      image: "/images/ventilation-control.jpg",
      content: "Mange ældre ventilationsanlæg kan optimeres for at opnå betydelige energibesparelser. Her er vores bedste råd..."
    },
    {
      title: "Indeklima i moderne boliger",
      excerpt: "Hvorfor god ventilation er afgørende for et sundt indeklima i tætte, energieffektive boliger. Lær om udfordringer og løsninger.",
      date: "1. marts 2024",
      author: "Peter Hansen",
      category: "Indeklima",
      readTime: "6 min",
      image: "/images/residential-ventilation.jpg",
      content: "Moderne boliger bliver stadig tættere for at opnå energieffektivitet, men det skaber udfordringer for indeklimaet..."
    },
    {
      title: "Ventilation i industrielle miljøer",
      excerpt: "Specielle krav og løsninger til ventilation i industrielle miljøer. Fra støvkontrol til procesventilation og arbejdsmiljø.",
      date: "22. februar 2024",
      author: "Sofie Andersen",
      category: "Industri",
      readTime: "8 min",
      image: "/images/industrial-ventilation.jpg",
      content: "Industrielle miljøer stiller særlige krav til ventilationssystemer. Her ser vi på de vigtigste overvejelser..."
    },
    {
      title: "Fugtkontrol i boligen",
      excerpt: "Hvordan man undgår fugtproblemer og skimmelsvamp gennem korrekt ventilation og fugtkontrol. Praktiske råd til husejere.",
      date: "15. februar 2024",
      author: "Mette Nielsen",
      category: "Fugt",
      readTime: "4 min",
      image: "/images/ventilation-control.jpg",
      content: "Fugtproblemer er en af de mest almindelige årsager til dårligt indeklima og skader på bygninger. Her er vores guide..."
    },
    {
      title: "Fremtidens ventilationsteknologi",
      excerpt: "De nyeste trends og teknologier inden for ventilation. Fra smart home integration til AI-drevet styring og bæredygtige løsninger.",
      date: "8. februar 2024",
      author: "Lars Jensen",
      category: "Teknologi",
      readTime: "9 min",
      image: "/images/ventilation-installation.jpg",
      content: "Ventilationsteknologien udvikler sig hurtigt med nye smarte løsninger og integrationer. Her ser vi på fremtidens muligheder..."
    }
  ];

  const categories = [
    "Alle",
    "Guide",
    "Energi",
    "Indeklima",
    "Industri",
    "Fugt",
    "Teknologi"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 h-[30vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="mr-2 h-4 w-4" />
              Blog & Guides
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Viden om Ventilation
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Få ekspertråd, guides og indsigt i de nyeste trends inden for ventilation og indeklima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Søg i artikler..." 
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

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="mb-2"
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <User className="h-4 w-4 ml-4" />
                    <span>{post.author}</span>
                    <span className="ml-auto">• {post.readTime}</span>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Få vores nyhedsbrev
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Modtag eksklusive tips, guides og nyheder om ventilation direkte i din indbakke.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Din e-mail adresse" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="whitespace-nowrap">
                Tilmeld
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Har du brug for professionel rådgivning?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Vores eksperter er klar til at hjælpe dig med at finde den bedste ventilationsløsning.
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