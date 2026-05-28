import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 z-50">
            <Droplets className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-primary'}`} />
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-foreground' : 'text-foreground'}`}>
              Calgary <span className="text-primary">Soft Water</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">CALL FOR A FREE QUOTE</span>
              <a href="tel:4035550178" className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors">
                <Phone className="w-4 h-4" />
                (403) 555-0178
              </a>
            </div>
            <Button asChild className="font-semibold shadow-md shadow-primary/20">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>

          <button
            className="md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-foreground'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background z-40 transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-bold ${
                location === link.href ? "text-primary" : "text-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col items-center gap-4 mt-8">
            <a href="tel:4035550178" className="flex items-center gap-2 text-xl font-bold text-primary">
              <Phone className="w-5 h-5" />
              (403) 555-0178
            </a>
            <Button asChild size="lg" className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
