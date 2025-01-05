import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Calendar, Building2, UserRound, ArrowRight, ChevronRight, Star, Facebook, Twitter, Linkedin, Instagram, Menu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/constants/navigation";
import { testimonials, clientLogos, socialLinks } from "@/lib/constants/company-data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NavMenu } from "@/components/nav-menu";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.png"
            alt="Professional tax services"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]" />
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
              Expert Tax Solutions for Your
              <span className="block mt-2">Financial Success</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-100 max-w-2xl mx-auto font-light leading-relaxed">
              Professional tax services tailored to your needs. We help individuals and businesses navigate complex tax landscapes with confidence.
            </p>
            <div className="pt-6 md:pt-8">
              <Button 
                size="lg" 
                className="font-normal w-full sm:w-auto bg-white text-stone-900 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8" 
                asChild
              >
                <Link href="/book-consultation">
                  Book Initial Consultation <Calendar className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-normal text-stone-900 mb-8 md:mb-12 text-center">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <UserRound className="h-10 w-10 text-stone-700 mb-4" />
                <CardTitle className="font-normal">Personal Tax Services</CardTitle>
                <CardDescription className="font-light">
                  Comprehensive tax planning and preparation for individuals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="font-normal">
                  <Link href="/services/personal" className="flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Building2 className="h-10 w-10 text-stone-700 mb-4" />
                <CardTitle className="font-normal">Business Tax Services</CardTitle>
                <CardDescription className="font-light">
                  Strategic tax solutions for businesses of all sizes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="font-normal">
                  <Link href="/services/business" className="flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Calendar className="h-10 w-10 text-stone-700 mb-4" />
                <CardTitle className="font-normal">Tax Planning</CardTitle>
                <CardDescription className="font-light">
                  Forward-thinking tax strategies to optimize your finances.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="font-normal">
                  <Link href="/services/planning" className="flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-normal text-stone-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 md:h-5 w-4 md:w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Link 
              href="https://google.com/reviews" 
              className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors"
            >
              4.9 out of 5 based on 200+ Google Reviews
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="rounded-full object-cover w-14 h-14 md:w-16 md:h-16 ring-2 ring-stone-100"
                        priority
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base font-normal">{testimonial.name}</CardTitle>
                      <CardDescription className="font-light text-sm">
                        {testimonial.role} at {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 font-light leading-relaxed">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
