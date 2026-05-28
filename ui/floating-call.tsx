import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down a bit
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="tel:4035550178"
      className="fixed bottom-6 right-6 z-50 md:hidden bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-in fade-in zoom-in"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 animate-pulse" />
    </a>
  );
}
