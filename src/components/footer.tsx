import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { services } from "@/lib/constants/navigation";
import { socialLinks } from "@/lib/constants/company-data";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-white font-normal text-lg">Focus your Finance</h3>
            <p className="font-light text-sm leading-relaxed">
              Professional tax services for individuals and businesses.
            </p>
            <div className="flex gap-4">
              <Link href={socialLinks.facebook} className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href={socialLinks.twitter} className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href={socialLinks.linkedin} className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href={socialLinks.instagram} className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-normal mb-4">Services</h4>
            <ul className="space-y-2 font-light text-sm">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-normal mb-4">Company</h4>
            <ul className="space-y-2 font-light text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-normal mb-4">Contact</h4>
            <ul className="space-y-2 font-light text-sm">
              <li>123 Tax Street</li>
              <li>Suite 100</li>
              <li>City, State 12345</li>
              <li className="pt-2">
                <Link href="tel:+1234567890" className="hover:text-white">
                  (123) 456-7890
                </Link>
              </li>
              <li>
                <Link href="mailto:info@focusyourfinance.com" className="hover:text-white">
                  info@focusyourfinance.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 md:mt-12 pt-8 text-sm font-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left">&copy; 2024 Focus your Finance. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 