import { Link } from "wouter";
import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="w-8 h-8 text-primary" />
              <span className="font-bold text-2xl text-white">
                Calgary <span className="text-primary">Soft Water</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Transforming Calgary homes with clean, pure water since 2008. Precision and care in every system, genuine warmth in every interaction.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors text-slate-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors text-slate-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors text-slate-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/well-water-systems" className="text-slate-400 hover:text-primary transition-colors">Well Water Systems</Link>
              </li>
              <li>
                <Link href="/water-softeners" className="text-slate-400 hover:text-primary transition-colors">Water Softeners</Link>
              </li>
              <li>
                <Link href="/water-filtration" className="text-slate-400 hover:text-primary transition-colors">Whole Home Filtration</Link>
              </li>
              <li>
                <Link href="/reverse-osmosis" className="text-slate-400 hover:text-primary transition-colors">Reverse Osmosis (RO)</Link>
              </li>
              <li>
                <Link href="/uv-purification" className="text-slate-400 hover:text-primary transition-colors">UV Purification</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-primary transition-colors">Blog & Resources</Link>
              </li>
              <li>
                <Link href="/quote" className="text-slate-400 hover:text-primary transition-colors">Get a Free Quote</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Serving Calgary, Airdrie, Cochrane, Okotoks, Chestermere, and surrounding areas.</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:4035550178" className="hover:text-primary transition-colors font-medium text-white">(403) 555-0178</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@calgarysoftwater.ca" className="hover:text-primary transition-colors">info@calgarysoftwater.ca</a>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-slate-900 rounded-lg border border-slate-800">
              <h4 className="font-semibold text-white mb-2 text-sm">Business Hours</h4>
              <ul className="text-sm text-slate-400 space-y-1">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Calgary Soft Water. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> BBB Accredited</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Licensed & Insured</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> WQA Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
