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

const pricingTiers = [
  {
    name: "Basic",
    price: "299",
    description: "Perfect for simple tax returns with standard deductions",
    features: [
      "Personal tax return preparation (1040)",
      "Standard deductions",
      "W-2 income reporting",
      "Basic investment income",
      "Electronic filing",
      "Year-round support",
    ],
    tooltips: {
      "Basic investment income": "Includes interest, dividends, and capital gains/losses from standard investments",
    },
    highlighted: false,
  },
  {
    name: "Professional",
    price: "499",
    description: "Ideal for individuals with multiple income sources",
    features: [
      "Everything in Basic, plus:",
      "Multiple income sources",
      "Rental property income",
      "Self-employment income",
      "Itemized deductions",
      "Tax planning consultation",
      "Priority support",
    ],
    tooltips: {
      "Tax planning consultation": "One 30-minute session with a tax expert to plan for the upcoming year",
    },
    highlighted: true,
  },
  {
    name: "Premium",
    price: "899",
    description: "Comprehensive coverage for complex tax situations",
    features: [
      "Everything in Professional, plus:",
      "Complex investments",
      "Estate and trust income",
      "Foreign income reporting",
      "Quarterly tax planning",
      "Audit protection",
      "Dedicated tax advisor",
    ],
    tooltips: {
      "Complex investments": "Including cryptocurrency, options, and alternative investments",
      "Audit protection": "Full representation in case of an IRS audit",
    },
    highlighted: false,
  },
];

const commonFeatures = [
  "Secure document upload",
  "Digital copy of returns",
  "Record keeping guidance",
  "Basic tax planning",
];

export default function PersonalPricing() {
  return (
    <div className="min-h-screen bg-stone-50">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Choose the right plan for your tax needs. All plans include our core features and expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <TooltipProvider>
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-xl border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg ${
                    tier.highlighted ? 'ring-2 ring-stone-900' : ''
                  }`}
                >
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
                      <span className="ml-1 text-sm font-light text-stone-600">/year</span>
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
                </div>
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
              Included in All Plans
            </h2>
            <p className="text-lg text-stone-600 font-light">
              Every plan comes with our core features and commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {commonFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-stone-100">
                  <Check className="h-5 w-5 text-stone-700" />
                </div>
                <div>
                  <h3 className="text-lg font-normal text-stone-900">{feature}</h3>
                  <p className="mt-1 text-sm font-light text-stone-600">
                    {feature === "Secure document upload" && "256-bit encrypted portal for safe file sharing"}
                    {feature === "Digital copy of returns" && "Access your returns anytime in our secure portal"}
                    {feature === "Record keeping guidance" && "Best practices for maintaining tax records"}
                    {feature === "Basic tax planning" && "Annual review of your tax situation"}
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
            Not Sure Which Plan to Choose?
          </h2>
          <p className="text-lg text-stone-600 font-light mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our tax experts to find the perfect plan for your needs.
          </p>
          <Button size="lg" className="font-normal" asChild>
            <Link href="/book-consultation">
              Book Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 