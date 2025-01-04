import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

const pricingTiers = [
  {
    name: "Small Business",
    price: "799",
    description: "Perfect for small businesses and startups",
    features: [
      "Business tax return preparation",
      "Quarterly tax planning",
      "Basic bookkeeping",
      "Payroll tax filings",
      "1099 preparation",
      "Year-round support",
    ],
    tooltips: {
      "Basic bookkeeping": "Monthly reconciliation and basic financial statements",
    },
    highlighted: false,
  },
  {
    name: "Business Pro",
    price: "1,499",
    description: "Ideal for growing businesses with complex needs",
    features: [
      "Everything in Small Business, plus:",
      "Advanced bookkeeping",
      "Monthly financial reporting",
      "Tax strategy sessions",
      "Business advisory services",
      "Dedicated account manager",
      "Priority support",
    ],
    tooltips: {
      "Advanced bookkeeping": "Weekly reconciliation, detailed financial statements, and cash flow analysis",
      "Tax strategy sessions": "Quarterly meetings with a tax strategist to optimize your tax position",
    },
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "2,999",
    description: "Comprehensive solutions for established businesses",
    features: [
      "Everything in Business Pro, plus:",
      "CFO advisory services",
      "International tax planning",
      "Multi-state tax compliance",
      "Audit protection",
      "Custom reporting",
      "24/7 priority support",
    ],
    tooltips: {
      "CFO advisory services": "Strategic financial planning and growth strategy consulting",
      "Audit protection": "Full representation and support during tax audits",
    },
    highlighted: false,
  },
];

const commonFeatures = [
  "Secure business portal",
  "Real-time collaboration",
  "Tax deadline management",
  "Compliance monitoring",
];

const featureDescriptions = {
  "Secure business portal": "Enterprise-grade security for all your financial documents and communications",
  "Real-time collaboration": "Direct access to your tax team through our secure platform",
  "Tax deadline management": "Proactive monitoring and reminders for all tax obligations",
  "Compliance monitoring": "Continuous oversight of tax compliance requirements",
};

export default function BusinessPricing() {
  return (
    <div className="min-h-screen bg-stone-50">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight">
              Business Tax Solutions
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Scalable tax services designed to grow with your business. Choose the plan that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <TooltipProvider>
              {pricingTiers.map((tier) => (
                <Card key={tier.name} className={cn(
                  "relative p-8",
                  tier.highlighted && "border-2 border-stone-900"
                )}>
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="rounded-full bg-stone-900 px-4 py-1 text-sm text-white">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-normal text-stone-900">{tier.name}</h3>
                      <p className="mt-2 text-sm font-light text-stone-600">{tier.description}</p>
                    </div>
                    
                    <div className="flex items-baseline">
                      <span className="text-4xl font-normal text-stone-900">${tier.price}</span>
                      <span className="ml-1 text-sm font-light text-stone-600">/month</span>
                    </div>

                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-stone-700 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-stone-600 font-light">
                            {feature}
                            {tier.tooltips?.[feature] && (
                              <Tooltip>
                                <TooltipTrigger>
                                  <HelpCircle className="h-4 w-4 inline-block ml-1 text-stone-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-sm">{tier.tooltips[feature]}</p>
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full font-normal" asChild>
                      <Link href="/book-consultation">Get Started</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </TooltipProvider>
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-normal text-stone-900 mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-stone-600 font-light">
              Every plan includes essential tools to manage your business taxes effectively
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {commonFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-stone-100">
                  <Check className="h-5 w-5 text-stone-700" />
                </div>
                <div>
                  <h3 className="text-lg font-normal text-stone-900">{feature}</h3>
                  <p className="mt-1 text-sm font-light text-stone-600">
                    {featureDescriptions[feature]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-stone-600 font-light mb-8 max-w-2xl mx-auto">
            Let's discuss your business needs and create a tailored tax strategy that works for you.
          </p>
          <Button size="lg" className="font-normal" asChild>
            <Link href="/book-consultation">
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 