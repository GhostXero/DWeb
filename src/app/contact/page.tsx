'use client';

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useForm } from "@/hooks/useForm";
import { z } from "zod";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users,
  Building,
  CheckCircle,
  AlertCircle,
  Send,
  Calendar,
  FileText,
  Wrench,
  Star,
  ArrowRight
} from "lucide-react";

// Define form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Navn skal være mindst 2 tegn'),
  company: z.string().optional(),
  email: z.string().email('Indtast en gyldig email'),
  phone: z.string().min(8, 'Telefonnummer skal være mindst 8 tegn'),
  service: z.string().optional(),
  message: z.string().min(10, 'Besked skal være mindst 10 tegn'),
});

export default function ContactPage() {
  const searchParams = useSearchParams();

  // Initialize form with validation
  const {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldValue
  } = useForm({
    initialValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    },
    schema: contactSchema,
    onSubmit: async (formData) => {
      try {
        // Submit to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Der opstod en fejl under afsendelse.');
        }

        console.log('Form submitted successfully:', data);
      } catch (error) {
        console.error('Form submission error:', error);
        throw error;
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  // Initialize form data with URL parameters and handle scrolling
  useEffect(() => {
    // Ensure we're on the client side before accessing window
    if (typeof window === 'undefined') {
      return;
    }

    // Safely get service parameter
    let serviceParam = null;
    try {
      serviceParam = searchParams.get('service');
      
      // Fallback: parse from URL directly if searchParams doesn't work
      if (!serviceParam) {
        const urlParams = new URLSearchParams(window.location.search);
        serviceParam = urlParams.get('service');
      }
    } catch (error) {
      console.warn('Failed to get service parameter:', error);
    }
    
    // Set the service field if we have a valid parameter
    if (serviceParam && typeof serviceParam === 'string') {
      try {
        const decodedService = decodeURIComponent(serviceParam);
        setFieldValue('service', decodedService, false); // Don't validate on initial set
      } catch (error) {
        console.warn('Failed to decode service parameter:', error);
        setFieldValue('service', serviceParam, false); // Don't validate on initial set
      }
    }
    
    // Handle scrolling to contact form
    const scrollToForm = () => {
      try {
        const element = document.getElementById('contact-form');
        if (element) {
          // Only scroll if the user explicitly requested it via hash
          const hash = window.location.hash;
          if (hash === '#contact-form') {
            setTimeout(() => {
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }, 300);
          }
          // Don't auto-scroll for service parameters - let users navigate freely
        }
      } catch (error) {
        console.warn('Failed to scroll to form:', error);
      }
    };
    
    // Only scroll if explicitly requested via hash
    const hash = window.location.hash;
    const hasContactHash = hash === '#contact-form';
    
    if (hasContactHash) {
      scrollToForm();
    }
  }, [searchParams, setFieldValue]);

  const services = [
    "Boligventilation",
    "Komfortventilation", 
    "Industriventilation",
    "Energioptimering",
    "Affugtning & Befugtning",
    "Projektering",
    "Indregulering",
    "Service & Vedligehold",
    "Andet"
  ];

  const offices = [
    {
      name: "Hovedkontor - Fredericia",
      address: "Karetmagervej 27, 7000 Fredericia",
      phone: "+45 75 95 44 22",
      email: "info@deberventilation.dk",
      hours: "Man-Fre: 08:00-16:00",
      map: "Fredericia"
    },
    {
      name: "Afdeling - Aarhus",
      address: "Høegh-Guldbergs Gade 15, 8000 Aarhus C",
      phone: "+45 75 95 44 24",
      email: "aarhus@deberventilation.dk",
      hours: "Man-Fre: 08:00-16:00",
      map: "Aarhus"
    }
  ];

  const emergencyContacts = [
    {
      service: "Akut Service",
      phone: "+45 75 95 44 22",
      description: "24/7 akut service for eksisterende kunder",
      available: true
    },
    {
      service: "Teknisk Support",
      phone: "+45 75 95 44 25",
      description: "Teknisk hjælp og fejlfinding",
      available: true
    },
    {
      service: "Salg & Rådgivning",
      phone: "+45 75 95 44 26",
      description: "Nye projekter og rådgivning",
      available: true
    }
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 h-[40vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-12 w-12 text-primary" />
            </div>
            <Badge variant="secondary" className="mb-4">
              <Phone className="mr-2 h-4 w-4" />
              Kontakt Os
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kontakt Os
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Vi er klar til at hjælpe dig med dine ventilationsbehov. 
              Uanset om du har brug for rådgivning, et tilbud eller akut assistance, 
              så står vores erfarne team klar til at hjælpe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                <Phone className="mr-2 h-5 w-5" />
                Ring til os: +45 75 95 44 22
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white">
                <Mail className="mr-2 h-5 w-5" />
                Send os en mail
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="tech-card text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#3b5370]/10 rounded-full">
                      <Phone className="h-8 w-8 text-[#3b5370]" />
                    </div>
                  </div>
                  <CardTitle className="tech-heading text-lg">{contact.service}</CardTitle>
                  <CardDescription className="tech-text">{contact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#3b5370]" />
                      <span className="tech-text text-sm text-[#3b5370]">Tilgængelig nu</span>
                    </div>
                    <div className="tech-heading text-2xl font-bold text-[#3b5370]">
                      {contact.phone}
                    </div>
                    <Button variant="outline" className="w-full border-[#3b5370] text-[#3b5370] hover:bg-[#3b5370] hover:text-white">
                      Ring nu
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Offices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form">
              <div className="text-center mb-8">
                <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
                  Send os en besked
                </h2>
                <p className="tech-text text-lg text-gray-600">
                  Udfyld formularen, så kontakter vi dig hurtigst muligt.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="border-[#3b5370]/20 bg-[#3b5370]/5">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle className="h-8 w-8 text-[#3b5370]" />
                      <div>
                        <h3 className="tech-heading text-lg font-semibold text-[#3b5370]">Tak for din henvendelse!</h3>
                        <p className="tech-text text-[#3b5370]">Vi har modtaget din besked og kontakter dig snarest.</p>
                      </div>
                    </div>
                    <Button 
                      onClick={reset}
                      variant="outline"
                      className="w-full border-[#3b5370] text-[#3b5370] hover:bg-[#3b5370] hover:text-white"
                    >
                      Send en ny besked
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="tech-card">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Navn *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            className={`w-full ${touched.name && errors.name ? 'border-red-500' : ''}`}
                          />
                          {touched.name && errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Virksomhed
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={values.company}
                            onChange={handleChange}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            className={`w-full ${touched.email && errors.email ? 'border-red-500' : ''}`}
                          />
                          {touched.email && errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Telefon *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={values.phone}
                            onChange={handleChange}
                            className={`w-full ${touched.phone && errors.phone ? 'border-red-500' : ''}`}
                          />
                          {touched.phone && errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Service interesse
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={values.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b5370]"
                        >
                          <option value="">Vælg en service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Besked *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={values.message}
                          onChange={handleChange}
                          className={`w-full ${touched.message && errors.message ? 'border-red-500' : ''}`}
                          placeholder="Beskriv dit projekt eller dine behov..."
                        />
                        {touched.message && errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>

                      {errors.submit && (
                        <div className="bg-red-50 border border-red-200 rounded-md p-3">
                          <p className="text-red-700 text-sm">{errors.submit}</p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#3b5370] hover:bg-[#2d3f55]"
                        size="lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sender...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send besked
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Offices */}
            <div>
              <div className="text-center mb-8">
                <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
                  Vores Kontorer
                </h2>
                <p className="tech-text text-lg text-gray-600">
                  Besøg os på en af vores lokationer eller kontakt os direkte.
                </p>
              </div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="tech-card hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center tech-heading">
                        <Building className="h-5 w-5 mr-2 text-[#3b5370]" />
                        {office.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                          <span className="tech-text text-gray-600">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-gray-400" />
                          <a href={`tel:${office.phone}`} className="text-[#3b5370] hover:text-[#2d3f55]">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-gray-400" />
                          <a href={`mailto:${office.email}`} className="text-[#3b5370] hover:text-[#2d3f55]">
                            {office.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-gray-400" />
                          <span className="tech-text text-gray-600">{office.hours}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Info */}
              <Card className="mt-8 bg-[#3b5370]/5 border-[#3b5370]/20">
                <CardContent className="p-6">
                  <h3 className="tech-heading font-semibold text-[#3b5370] mb-3 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Hurtig Information
                  </h3>
                  <div className="space-y-2 text-sm text-[#3b5370]">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#3b5370]" />
                      <span className="tech-text">Vi svarer typisk inden for 24 timer på henvendelser</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#3b5370]" />
                      <span className="tech-text">Akut service tilgængelig 24/7 for eksisterende kunder</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-[#3b5370]" />
                      <span className="tech-text">CVR: 33 05 31 26</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-[#3b5370]" />
                      <span className="tech-text">EAN: 5790002389665</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-[#3b5370]" />
                      <span className="tech-text">Faktura mail: deberventilation@e-scan.dk</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#3b5370]" />
                      <span className="tech-text">Gratis uforpligtende tilbud og rådgivning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#3b5370]" />
                      <span className="tech-text">Dækker hele Danmark med vores servicebiler</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
              Vores Serviceområder
            </h2>
            <p className="tech-text text-lg text-gray-600 max-w-2xl mx-auto">
              Vi dækker hele Danmark med særligt fokus på disse områder.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Fredericia", "Kolding", "Vejle", "Horsens",
              "Aarhus", "Odense", "Esbjerg", "Aalborg",
              "København", "Roskilde", "Helsingør", "Næstved"
            ].map((city, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-[#3b5370]/5 transition-colors">
                <MapPin className="h-6 w-6 text-[#3b5370] mx-auto mb-2" />
                <span className="tech-text text-sm font-medium text-gray-700">{city}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="tech-text text-gray-600 mb-4">
              Ser du ikke din by? Vi dækker hele Danmark - kontakt os for mere information.
            </p>
            <Button variant="outline" className="border-[#3b5370] text-[#3b5370] hover:bg-[#3b5370] hover:text-white">
              Se hele dækningsområdet
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="tech-heading text-3xl font-bold text-gray-900 mb-4">
                Ofte Stillede Spørgsmål
              </h2>
              <p className="tech-text text-lg text-gray-600">
                Få svar på de mest almindelige spørgsmål om vores services og kontakt.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Hvor hurtigt kan I komme ud til akut opgaver?",
                  answer: "For eksisterende kunder med serviceaftaler tilbyder vi 24/7 akut service. For nye kunder stræber vi efter at være fremme inden for 24-48 timer afhængig af opgavens karakter og placering."
                },
                {
                  question: "Hvad koster et typisk ventilationsprojekt?",
                  answer: "Prisen varierer meget afhængigt af projektets omfang, kompleksitet og valgte løsninger. Vi tilbyder altid gratis uforpligtende tilbud og besøg for at vurdere dine specifikke behov."
                },
                {
                  question: "Tilbyder I finansiering af større projekter?",
                  answer: "Ja, vi har samarbejdspartnere der kan tilbyde finansieringsløsninger til større ventilationsprojekter. Kontakt os for at høre mere om mulighederne."
                },
                {
                  question: "Hvilke garantier giver I på jeres arbejde?",
                  answer: "Vi giver fuld arbejdsgaranti på alle vores installationer. Derudover følger vi producenternes garantier på udstyr, som typisk er 2-5 år afhængigt af produktet."
                }
              ].map((faq, index) => (
                <Card key={index} className="tech-card">
                  <CardContent className="p-6">
                    <h3 className="tech-heading font-semibold text-gray-900 mb-2 flex items-center">
                      <Star className="h-5 w-5 text-[#3b5370] mr-2" />
                      {faq.question}
                    </h3>
                    <p className="tech-text text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3b5370] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="tech-heading text-3xl font-bold mb-4">
              Lad os komme i gang med dit projekt
            </h2>
            <p className="tech-text text-xl mb-8">
              Uanset omfanget af dit projekt, så er vi klar til at hjælpe. 
              Kontakt os i dag for en uforpligtende samtale om dine behov.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Book et møde
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-[#3b5370]">
                <FileText className="mr-2 h-5 w-5" />
                Få tilbud nu
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}