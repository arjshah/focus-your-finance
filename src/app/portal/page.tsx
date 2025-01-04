import { NavMenu } from "@/components/nav-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ClientPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-50">
      <NavMenu />
      
      <div className="container mx-auto px-4 pt-20 md:pt-32 pb-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-900 mb-6">
              <Lock className="h-8 w-8 text-stone-100" />
            </div>
            <h1 className="text-3xl font-normal text-stone-900 mb-3">
              Client Portal
            </h1>
            <p className="text-stone-600 font-light">
              Access your tax documents and manage your services
            </p>
          </div>

          <Card className="backdrop-blur-sm bg-white/80">
            <CardHeader>
              <CardTitle className="text-xl font-normal">Sign In</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-normal text-stone-600" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-normal text-stone-600" htmlFor="password">
                      Password
                    </label>
                    <Link 
                      href="/portal/reset-password"
                      className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    className="w-full"
                  />
                </div>
                <Button className="w-full font-normal">
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-stone-600 text-sm font-light">
              <Shield className="h-4 w-4" />
              <span>Bank-level security with 256-bit encryption</span>
            </div>
          </div>

          {/* New Client Section */}
          <div className="mt-8 pt-8 border-t border-stone-200 text-center">
            <p className="text-stone-600 font-light mb-4">
              New to Focus your Finance?
            </p>
            <Button variant="outline" className="font-normal" asChild>
              <Link href="/book-consultation">
                Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 