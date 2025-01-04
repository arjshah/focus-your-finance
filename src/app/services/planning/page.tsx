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
import { Check, ArrowRight, LineChart, Target, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Strategic Tax Planning",
    description: "Develop comprehensive tax strategies to minimize liability and maximize savings through careful planning and forecasting.",
    icon: Target,
  },
  {
    title: "Financial Forecasting",
    description: "Use advanced analytics to project future tax obligations and plan accordingly for optimal financial outcomes.",
    icon: LineChart,
  },
  {
    title: "Tax-Efficient Strategies",
    description: "Implement sophisticated tax-efficient strategies for investments, retirement, and wealth transfer.",
    icon: Lightbulb,
  },
  {
    title: "Long-term Growth Planning",
    description: "Create sustainable tax strategies that support your long-term financial growth and wealth preservation goals.",
    icon: TrendingUp,
  },
];

const benefits = [
  "Reduce your overall tax liability",
  "Plan for major life events and transitions",
  "Optimize investment and retirement strategies",
  "Stay ahead of tax law changes",
  "Make informed financial decisions",
  "Protect and grow your wealth",
];

const faqs = [
  {
    question: "What is tax planning and why is it important?",
    answer: "Tax planning is a proactive approach to managing your finances to minimize tax liability legally. It's important because it helps you make informed decisions throughout the year, rather than just at tax time, potentially saving you significant money and helping you achieve your financial goals more efficiently.",
  },
  {
    question: "When should I start tax planning?",
    answer: "The best time to start tax planning is at the beginning of the tax year, but it's never too late to start. Major life events like marriage, buying a home, starting a business, or approaching retirement are also crucial times to engage in tax planning.",
  },
  {
    question: "How often should tax planning be reviewed?",
    answer: "We recommend quarterly reviews of your tax planning strategy, with more frequent updates if there are significant changes in tax laws or your personal/business situation. This ensures your strategy remains optimized throughout the year.",
  },
  {
    question: "What areas does tax planning cover?",
    answer: "Tax planning covers various aspects including income timing, deduction optimization, investment strategies, retirement planning, estate planning, business structure optimization, and charitable giving strategies.",
  },
  {
    question: "How do tax law changes affect planning?",
    answer: "Tax laws change frequently, and these changes can significantly impact your financial strategy. Our team stays current with all tax law changes and proactively adjusts your tax planning strategy to ensure optimal outcomes.",
  },
  {
    question: "Can tax planning help with retirement?",
    answer: "Yes, tax planning is crucial for retirement preparation. We help structure your retirement savings and withdrawals in the most tax-efficient manner, considering various account types (Traditional IRA, Roth IRA, 401(k), etc.) and timing strategies.",
  },
];

export default function TaxPlanning() {
  return (
    <div className="min-h-screen bg-stone-50">
      <NavMenu />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 tracking-tight">
              Strategic Tax Planning
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Forward-thinking tax strategies to optimize your financial future. Plan smarter, save more, and achieve your long-term goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="font-normal w-full sm:w-auto" asChild>
                <Link href="/book-consultation">
                  Start Planning Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="h-full">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-stone-700 mb-4" />
                  <CardTitle className="font-normal">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-stone-600 font-light">
                  {feature.description}
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
              Benefits of Strategic Planning
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-3xl mx-auto">
              Maximize your financial potential with proactive tax planning
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
              Our Planning Process
            </h2>
            <p className="text-lg text-stone-600 font-light max-w-3xl mx-auto">
              A systematic approach to optimizing your tax position
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Analysis",
                description: "Comprehensive review of your financial situation and goals.",
              },
              {
                step: "2",
                title: "Strategy",
                description: "Develop customized tax planning strategies.",
              },
              {
                step: "3",
                title: "Implementation",
                description: "Execute strategies with careful timing and precision.",
              },
              {
                step: "4",
                title: "Monitoring",
                description: "Regular reviews and adjustments to optimize results.",
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
              Common questions about tax planning
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
            Ready to Optimize Your Tax Strategy?
          </h2>
          <p className="text-lg text-stone-600 font-light mb-8 max-w-2xl mx-auto">
            Let's create a comprehensive tax plan that helps you achieve your financial goals.
          </p>
          <Button size="lg" className="font-normal" asChild>
            <Link href="/book-consultation">
              Schedule Your Planning Session
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 