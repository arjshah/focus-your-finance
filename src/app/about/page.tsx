import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, History, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Sarah Chen, CPA",
    role: "Founder & CEO",
    image: "/team/sarah-chen.jpg",
    bio: "With over 20 years of experience in tax strategy and financial planning, Sarah founded Focus your Finance to provide personalized tax solutions that help clients achieve their financial goals.",
    credentials: ["Certified Public Accountant", "Master's in Taxation", "Former Big 4 Tax Partner"],
  },
  {
    name: "Michael Rodriguez, EA",
    role: "Head of Tax Planning",
    image: "/team/michael-rodriguez.jpg",
    bio: "Michael specializes in complex tax planning strategies for both individuals and businesses, with particular expertise in investment and retirement tax optimization.",
    credentials: ["Enrolled Agent", "CFP®", "15+ Years Experience"],
  },
  {
    name: "David Park, CPA",
    role: "Director of Business Services",
    image: "/team/david-park.jpg",
    bio: "David leads our business tax services division, bringing extensive experience in corporate tax strategy and multi-state tax compliance.",
    credentials: ["Certified Public Accountant", "MBA", "Former Corporate Tax Director"],
  },
  {
    name: "Emily Thompson",
    role: "Client Success Director",
    image: "/team/emily-thompson.jpg",
    bio: "Emily ensures our clients receive exceptional service and support throughout their journey with Focus your Finance.",
    credentials: ["10+ Years Client Service", "Tax Operations Specialist"],
  },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We maintain the highest ethical standards in all our dealings, ensuring your financial interests are always protected.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description: "Every strategy we develop is tailored to your unique situation and goals, never a one-size-fits-all solution.",
  },
  {
    icon: History,
    title: "Proven Expertise",
    description: "Our team brings decades of combined experience and maintains current expertise through ongoing education.",
  },
];

const stats = [
  { number: "20+", label: "Years of Experience" },
  { number: "5,000+", label: "Satisfied Clients" },
  { number: "$100M+", label: "Tax Savings Achieved" },
  { number: "98%", label: "Client Retention" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight">
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Founded on the principle that everyone deserves expert tax guidance, we've built a team dedicated to your financial success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-normal text-stone-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-stone-600 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-3xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="bg-stone-50">
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-lg bg-stone-100 mb-4">
                      <value.icon className="h-6 w-6 text-stone-700" />
                    </div>
                    <h3 className="text-xl font-normal text-stone-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-stone-600 font-light">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-3xl mx-auto">
              Expert professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-48 h-48 md:h-auto shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={1048}
                        height={1048}
                        className="object-cover h-full w-full"
                        priority={member.role === "Founder & CEO"}
                      />
                    </div>
                    <div className="p-4 md:p-8 flex-1">
                      <h3 className="text-xl font-normal text-stone-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-stone-600 font-light mb-4">
                        {member.role}
                      </p>
                      <p className="text-stone-600 font-light mb-4">
                        {member.bio}
                      </p>
                      <ul className="space-y-1">
                        {member.credentials.map((credential) => (
                          <li key={credential} className="text-sm text-stone-600 font-light">
                            • {credential}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-stone-600 font-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help you achieve your financial goals.
          </p>
          <Button size="lg" className="font-normal" asChild>
            <Link href="/book-consultation">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 