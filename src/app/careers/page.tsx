import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Zap, Building2 } from "lucide-react";
import Link from "next/link";

const positions = [
  {
    title: "Senior Tax Accountant",
    type: "Full-time",
    location: "Hybrid",
    department: "Tax Services",
    description: "Lead complex tax engagements and mentor junior team members while providing exceptional client service.",
  },
  {
    title: "Tax Advisory Associate",
    type: "Full-time",
    location: "Remote",
    department: "Advisory",
    description: "Help clients navigate complex tax situations and provide strategic planning advice.",
  },
  {
    title: "Client Experience Manager",
    type: "Full-time",
    location: "On-site",
    department: "Operations",
    description: "Ensure exceptional service delivery and maintain strong client relationships.",
  }
];

const values = [
  {
    icon: Heart,
    title: "Client First",
    description: "We put our clients' needs at the heart of everything we do."
  },
  {
    icon: Users,
    title: "Team Growth",
    description: "Continuous learning and development opportunities for all team members."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Embracing new technologies and approaches to deliver better results."
  },
  {
    icon: Building2,
    title: "Work-Life Balance",
    description: "Flexible working arrangements that respect your personal time."
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-stone-50">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Build your career with a company that values innovation, growth, and work-life balance.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-normal text-stone-900 mb-4">Our Values</h2>
            <p className="text-stone-600 font-light max-w-2xl mx-auto">
              What makes working at Focus your Finance different
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="bg-white border-stone-200/50">
                <CardHeader>
                  <value.icon className="h-8 w-8 text-stone-700 mb-4" />
                  <CardTitle className="text-xl font-normal">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-stone-600 font-light">
                  {value.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-normal text-stone-900 mb-4">Open Positions</h2>
            <p className="text-stone-600 font-light max-w-2xl mx-auto">
              Find your next opportunity with us
            </p>
          </div>
          <div className="grid gap-6">
            {positions.map((position) => (
              <Card key={position.title} className="group hover:border-stone-300 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-normal text-stone-900">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm font-light text-stone-600">
                        <span>{position.type}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.department}</span>
                      </div>
                      <p className="text-stone-600 font-light pt-2">{position.description}</p>
                    </div>
                    <Button className="shrink-0 group-hover:translate-x-1 transition-transform" asChild>
                      <Link href={`/careers/${position.title.toLowerCase().replace(/ /g, '-')}`}>
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 