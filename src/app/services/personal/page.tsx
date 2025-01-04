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
import { Check, ArrowRight, FileCheck, Shield, Calculator, Clock } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Comprehensive Tax Return Preparation",
    description: "Expert preparation of your personal tax returns with attention to every detail and potential deduction.",
    icon: FileCheck,
  },
  {
    title: "Maximum Deduction Strategy",
    description: "Strategic approach to identify and apply all eligible deductions and credits to minimize your tax liability.",
    icon: Calculator,
  },
  {
    title: "Year-Round Support",
    description: "Continuous tax advice and support throughout the year, not just during tax season.",
    icon: Clock,
  },
  {
    title: "Audit Protection",
    description: "Professional representation and support in case of an audit by tax authorities.",
    icon: Shield,
  },
];

const benefits = [
  "Maximize your tax refund potential",
  "Save time with expert handling of complex tax situations",
  "Reduce stress with clear communication and guidance",
  "Stay compliant with current tax laws and regulations",
  "Get personalized tax planning advice",
  "Access year-round tax support",
];

const faqs = [
  {
    question: "What documents do I need to provide for tax preparation?",
    answer: "Generally, you'll need to provide W-2s, 1099s, receipts for deductions, social security numbers for dependents, and any relevant tax forms from investments or property ownership. We'll provide a comprehensive checklist based on your specific situation.",
  },
  {
    question: "How long does the tax preparation process take?",
    answer: "Most personal tax returns can be completed within 1-2 weeks. However, complex returns may take longer. We'll provide you with a specific timeline after reviewing your tax situation.",
  },
  {
    question: "What if I have tax returns from previous years that need to be filed?",
    answer: "We can help with unfiled tax returns from previous years. Our team will work with you to gather the necessary information and file these returns properly to bring you into compliance.",
  },
  {
    question: "Do you provide electronic filing?",
    answer: "Yes, we offer secure electronic filing for all tax returns. This ensures faster processing and quicker refunds if applicable.",
  },
  {
    question: "What happens if I receive an audit notice?",
    answer: "Our audit protection service includes full representation before tax authorities. We'll handle all communications, document preparation, and meetings with auditors on your behalf.",
  },
  {
    question: "Can you help with tax planning throughout the year?",
    answer: "Yes, we provide year-round tax planning services to help you make informed financial decisions that optimize your tax position.",
  },
];

export default function PersonalTaxServices() {
  return (
    <div className="min-h-screen bg-stone-50">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight">
              Personal Tax Services
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Expert tax preparation and planning services tailored to your individual needs, ensuring maximum returns and complete peace of mind.
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

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-stone-900 mb-4">
              Why Choose Our Personal Tax Services?
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-3xl mx-auto">
              Experience the difference of working with tax professionals who prioritize your financial success.
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
              A streamlined approach to handling your tax needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We discuss your tax situation and gather preliminary information.",
              },
              {
                step: "2",
                title: "Document Collection",
                description: "Using our checklist, you provide all necessary tax documents.",
              },
              {
                step: "3",
                title: "Preparation & Review",
                description: "We prepare your returns and review them with you in detail.",
              },
              {
                step: "4",
                title: "Filing & Planning",
                description: "We file your returns and provide future tax planning advice.",
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
              Find answers to common questions about our personal tax services
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-stone-600 font-light mb-8 max-w-2xl mx-auto">
            Schedule your free consultation today and let us help you optimize your tax situation.
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