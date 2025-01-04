import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ArrowRight, Building2, ChartBar, Users, ShieldCheck } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Business Tax Compliance",
    description: "Comprehensive tax preparation and filing services ensuring full compliance with current regulations.",
    icon: Building2,
  },
  {
    title: "Financial Analysis",
    description: "Detailed financial analysis and reporting to support informed business decisions.",
    icon: ChartBar,
  },
  {
    title: "Payroll Tax Management",
    description: "Complete payroll tax processing and reporting services for businesses of all sizes.",
    icon: Users,
  },
  {
    title: "Tax Risk Management",
    description: "Proactive risk assessment and mitigation strategies to protect your business.",
    icon: ShieldCheck,
  },
];

const benefits = [
  "Minimize your business tax liability legally and ethically",
  "Stay compliant with changing tax regulations",
  "Improve cash flow through strategic tax planning",
  "Access expert advice for business decisions",
  "Reduce the risk of tax audits",
  "Save time and focus on growing your business",
];

const faqs = [
  {
    question: "What types of businesses do you serve?",
    answer: "We serve businesses of all sizes and structures, including sole proprietorships, partnerships, LLCs, S-corporations, and C-corporations. Our services are tailored to meet the specific needs of each business type.",
  },
  {
    question: "How often should I consult with a tax professional?",
    answer: "We recommend quarterly reviews to ensure your business stays on track with tax obligations and to identify potential tax-saving opportunities. However, we're available year-round for any tax-related questions or concerns.",
  },
  {
    question: "Can you help with state and local tax requirements?",
    answer: "Yes, we provide comprehensive tax services covering federal, state, and local tax requirements. This includes sales tax, use tax, and other state-specific business taxes.",
  },
  {
    question: "Do you provide international tax services?",
    answer: "Yes, we assist businesses with international operations, including foreign tax compliance, transfer pricing, and international tax planning strategies.",
  },
  {
    question: "What records should I maintain for tax purposes?",
    answer: "We'll provide a detailed checklist of required records, typically including income and expense records, bank statements, payroll records, and receipts. We also offer guidance on record-keeping systems and best practices.",
  },
  {
    question: "How do you handle tax disputes or audits?",
    answer: "Our team provides full representation during tax audits and disputes. We'll manage all communications with tax authorities, prepare required documentation, and work to resolve any issues efficiently.",
  },
];

export default function BusinessTaxServices() {
  return (
    <div className="min-h-screen bg-stone-50">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight">
              Business Tax Services
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Strategic tax solutions to help your business thrive. We handle the complexities of business taxation so you can focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="font-normal w-full sm:w-auto" asChild>
                <Link href="/book-consultation">
                  Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-white transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-md bg-stone-100">
                      <feature.icon className="h-6 w-6 text-stone-700" />
                    </div>
                    <CardTitle className="text-xl font-normal">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain structurally similar but with business-focused content */}
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-4">
              Why Choose Our Business Tax Services?
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-3xl mx-auto">
              Partner with tax experts who understand the complexities of business finance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4">
                <div className="p-1">
                  <Check className="h-5 w-5 text-stone-700" />
                </div>
                <p className="text-stone-600 font-light">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-3xl mx-auto">
              A systematic approach to managing your business taxes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Initial Assessment",
                description: "We evaluate your business structure and tax situation.",
              },
              {
                step: "2",
                title: "Strategy Development",
                description: "Create a customized tax strategy for your business.",
              },
              {
                step: "3",
                title: "Implementation",
                description: "Execute tax planning strategies and maintain compliance.",
              },
              {
                step: "4",
                title: "Ongoing Support",
                description: "Regular reviews and adjustments to optimize tax position.",
              },
            ].map((step) => (
              <div key={step.step} className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center mx-auto">
                  <span className="text-xl font-normal text-stone-700">{step.step}</span>
                </div>
                <h3 className="text-lg font-normal text-stone-900">{step.title}</h3>
                <p className="text-stone-600 font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-stone-600 font-light">
              Common questions about our business tax services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-normal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-6">
            Ready to Optimize Your Business Taxes?
          </h2>
          <p className="text-lg text-stone-600 font-light mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your business tax needs and discover how we can help.
          </p>
          <Button size="lg" className="font-normal" asChild>
            <Link href="/book-consultation">
              Book Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 