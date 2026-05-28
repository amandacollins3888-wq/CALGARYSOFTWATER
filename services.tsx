import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO 
        title="Water Treatment Services" 
        description="Comprehensive water treatment services in Calgary. We offer well water systems, water softeners, whole-home filtration, reverse osmosis, and UV purification."
      />
      
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 text-center">Our Services</h1>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          From removing hard water minerals to ensuring your well water is safe from bacteria, we have a customized solution for every Calgary home.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Well Water Systems" 
            href="/well-water-systems"
            description="Comprehensive treatment for private wells. Remove iron, sulfur (rotten egg smell), bacteria, and turbidity."
            image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
          />
          <ServiceCard 
            title="Water Softeners" 
            href="/water-softeners"
            description="Eliminate hard water problems. Protect your plumbing, appliances, skin, and hair from mineral buildup."
            image="https://images.unsplash.com/photo-1585834971714-3860bbec94eb?q=80&w=800&auto=format&fit=crop"
          />
          <ServiceCard 
            title="Whole Home Filtration" 
            href="/water-filtration"
            description="Clean water from every tap. Carbon and sediment filters to remove chlorine, chemicals, and particulates."
            image="https://images.unsplash.com/photo-1548811579-017fa2aca5ea?q=80&w=800&auto=format&fit=crop"
          />
          <ServiceCard 
            title="Reverse Osmosis" 
            href="/reverse-osmosis"
            description="Premium drinking water right at your sink. Removes up to 99% of contaminants for bottled-water quality."
            image="https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=800&auto=format&fit=crop"
          />
          <ServiceCard 
            title="UV Purification" 
            href="/uv-purification"
            description="Chemical-free disinfection. Neutralize bacteria, viruses, and cysts to ensure your water is microbiologically safe."
            image="https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=800&auto=format&fit=crop"
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, description, href, image }: { title: string, description: string, href: string, image: string }) {
  return (
    <div className="group rounded-2xl overflow-hidden border bg-card hover:shadow-xl transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground mb-6">{description}</p>
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Link href={href}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
}
