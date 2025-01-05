"use client";

import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-50">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
              Have questions? We're here to help. Reach out to our team for expert assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-normal text-stone-900">
                Contact Information
              </h2>
              <div className="space-y-6">
                <Card className="border-stone-200/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-md bg-stone-100">
                        <MapPin className="h-5 w-5 text-stone-700" />
                      </div>
                      <div>
                        <h3 className="text-base font-normal text-stone-900 mb-1">Office Location</h3>
                        <p className="text-stone-600 font-light">
                          123 Tax Street<br />
                          Suite 100<br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-stone-200/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-md bg-stone-100">
                        <Phone className="h-5 w-5 text-stone-700" />
                      </div>
                      <div>
                        <h3 className="text-base font-normal text-stone-900 mb-1">Phone</h3>
                        <p className="text-stone-600 font-light">
                          <a href="tel:+1234567890" className="hover:text-stone-900 transition-colors">
                            (123) 456-7890
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-stone-200/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-md bg-stone-100">
                        <Mail className="h-5 w-5 text-stone-700" />
                      </div>
                      <div>
                        <h3 className="text-base font-normal text-stone-900 mb-1">Email</h3>
                        <p className="text-stone-600 font-light">
                          <a href="mailto:info@focusyourfinance.com" className="hover:text-stone-900 transition-colors">
                            info@focusyourfinance.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-stone-200/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-normal">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-normal text-stone-600">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-normal text-stone-600">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-normal text-stone-600">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-normal text-stone-600">Subject</label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-normal text-stone-600">Message</label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full font-normal">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 