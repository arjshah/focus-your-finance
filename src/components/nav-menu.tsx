"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { services } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function NavMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Toggling menu, current state:', mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-stone-50/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-normal text-stone-800">
            Focus your Finance
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-normal">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-stone-900/50 to-stone-900 p-6 no-underline outline-none focus:shadow-md"
                            href="/services"
                          >
                            <div className="mb-2 mt-4 text-lg font-normal text-white">
                              Our Services
                            </div>
                            <p className="text-sm leading-tight text-stone-100 font-light">
                              Comprehensive tax and financial services for individuals and businesses
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </div>
                      {services.map((service) => (
                        <NavigationMenuLink
                          key={service.href}
                          asChild
                        >
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100"
                          >
                            <div className="text-sm font-normal text-stone-900">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-stone-600 font-light">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-normal">Pricing</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px]">
                      <div className="grid grid-cols-1 gap-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/pricing/personal"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100"
                          >
                            <div className="text-sm font-normal">Personal Tax Pricing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-stone-600 font-light">
                              Transparent pricing for individual tax services
                            </p>
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/pricing/business"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-stone-100 focus:bg-stone-100"
                          >
                            <div className="text-sm font-normal">Business Tax Pricing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-stone-600 font-light">
                              Competitive rates for business tax services
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/portal" legacyBehavior passHref>
                    <NavigationMenuLink className="text-base font-normal">
                      Client Portal
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button size="sm" className="ml-2 font-normal" asChild>
                    <Link href="/book-consultation">
                      Book Consultation
                    </Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              className="p-1"
              onClick={toggleMenu}
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[64px] bg-white border-b shadow-lg md:hidden z-50">
          <div className="container px-4 py-4 space-y-4">
            {/* Services Section */}
            <div className="space-y-2">
              <div className="px-3 py-2 text-sm font-medium text-stone-500">Services</div>
              <Link 
                href="/services/personal"
                className="block px-3 py-2 rounded-md hover:bg-stone-100 text-base font-normal"
                onClick={toggleMenu}
              >
                Personal Tax Services
              </Link>
              <Link 
                href="/services/business"
                className="block px-3 py-2 rounded-md hover:bg-stone-100 text-base font-normal"
                onClick={toggleMenu}
              >
                Business Tax Services
              </Link>
              <Link 
                href="/services/planning"
                className="block px-3 py-2 rounded-md hover:bg-stone-100 text-base font-normal"
                onClick={toggleMenu}
              >
                Tax Planning
              </Link>
            </div>

            {/* Pricing Section */}
            <div className="space-y-2">
              <div className="px-3 py-2 text-sm font-medium text-stone-500">Pricing</div>
              <Link 
                href="/pricing/personal"
                className="block px-3 py-2 rounded-md hover:bg-stone-100 text-base font-normal"
                onClick={toggleMenu}
              >
                Personal Tax Pricing
              </Link>
              <Link 
                href="/pricing/business"
                className="block px-3 py-2 rounded-md hover:bg-stone-100 text-base font-normal"
                onClick={toggleMenu}
              >
                Business Tax Pricing
              </Link>
            </div>

            <Link 
              href="/portal"
              className="block px-3 py-2 rounded-md hover:bg-stone-100 text-base font-normal"
              onClick={toggleMenu}
            >
              Client Portal
            </Link>

            <div className="pt-2">
              <Button className="w-full font-normal" asChild>
                <Link href="/book-consultation" onClick={toggleMenu}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 