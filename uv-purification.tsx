import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useListProducts } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Phone, Zap, Sun, Shield } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function UvPurification() {
  const { data: products, isLoading: productsLoading } = useListProducts({ category: "uv-purification" });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="UV Water Purification Calgary | Calgary Soft Water"
        description="Kill 99.99% of bacteria, viruses, and Giardia without chemicals. NSF-certified UV purification systems for well water homes in Calgary and rural Alberta. (403) 555-0178."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=2560&auto=format&fit=crop" alt="UV purification system" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-5 bg-primary/20 text-primary border-primary/30">NSF/ANSI 55 Class A Certified</Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6 leading-tight">
              Kill 99.99% of Bacteria. <br /><span className="text-primary italic font-light">Without Chemicals.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              UV disinfection destroys the DNA of bacteria, viruses, E. coli, Giardia, and Cryptosporidium — without adding anything to your water. No chlorine. No taste. No odor. Just safe water.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 font-semibold shadow-lg" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10" asChild>
                <a href="tel:4035550178"><Phone className="w-4 h-4 mr-2" />(403) 555-0178</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why UV */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Why UV</p>
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">The Most Effective Disinfection Technology Available</h2>
            <p className="text-lg text-muted-foreground">UV-C light at 254nm wavelength is proven to be more effective than chlorine against Giardia and Cryptosporidium — two of Alberta's most common waterborne pathogens in private wells.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "99.99% Kill Rate", desc: "Destroys bacteria, viruses, and protozoa on contact. Effective against Giardia and Cryptosporidium, which chlorine often can't eliminate." },
              { icon: Sun, title: "No Chemicals Added", desc: "UV light destroys pathogens' DNA without adding anything to your water. No chlorine taste, no disinfection byproducts, no health trade-offs." },
              { icon: Zap, title: "Automatic & Always On", desc: "Once installed, the UV system works 24/7 without any manual operation. One lamp replacement per year is all the maintenance required." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center p-8 bg-slate-50 rounded-2xl border border-border/50">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs UV */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1572204098219-3e0fc5bd77a4?q=80&w=1200&auto=format&fit=crop" alt="Rural Alberta well water safety" className="rounded-2xl shadow-2xl w-full h-[460px] object-cover" />
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeIn} className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Who Needs UV Treatment</motion.p>
              <motion.h2 variants={fadeIn} className="text-4xl font-bold font-serif text-foreground mb-6">Is UV Purification Right for Your Home?</motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground mb-6 leading-relaxed">UV purification is essential — not optional — for certain homes. Health Canada recommends UV disinfection as the primary treatment method for private well owners.</motion.p>
              <motion.div variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="space-y-4 mb-8">
                {[
                  { label: "You're on a private well", note: "Well water has no ongoing disinfection. Bacteria can enter through surface water, aging casings, or flooding." },
                  { label: "Your well water tested positive for coliform", note: "Any coliform result requires immediate disinfection treatment." },
                  { label: "You're in a flood-prone area", note: "Spring snowmelt in Alberta can contaminate wells. UV provides year-round protection." },
                  { label: "You have an immune-compromised family member", note: "For infants, elderly, or immunocompromised individuals, UV is a critical safeguard." },
                  { label: "You've never tested for bacteria", note: "Most well owners don't test annually. Bacteria can be present for years without symptoms." },
                ].map(({ label, note }) => (
                  <motion.div key={label} variants={fadeIn} className="p-4 bg-white rounded-xl border border-border/50">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{note}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Our Systems</p>
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">UV Disinfection Systems</h2>
          </div>
          {productsLoading ? (
            <Skeleton className="h-72 rounded-2xl max-w-2xl mx-auto" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products?.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:border-primary/20 transition-all" data-testid={`card-product-${p.id}`}>
                  {p.popular && <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>}
                  <div className="flex items-center gap-3 mb-4"><Sun className="w-6 h-6 text-primary" /><h3 className="text-xl font-bold text-foreground">{p.name}</h3></div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{p.description}</p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Features</p>
                      <ul className="space-y-2">{p.features.slice(0, 5).map((f) => <li key={f} className="text-xs text-foreground flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />{f}</li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Benefits</p>
                      <ul className="space-y-2">{p.benefits.slice(0, 5).map((b) => <li key={b} className="text-xs text-foreground flex items-start gap-2"><Zap className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />{b}</li>)}</ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t">
                    <div><p className="text-xs text-muted-foreground">Starting at</p><p className="text-2xl font-bold text-foreground">{p.price}</p></div>
                    <Button asChild><Link href="/quote">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-4">Protect Your Family From Waterborne Pathogens</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">We'll test your well water for bacteria free of charge — and recommend a UV system only if you actually need one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-10 font-bold text-primary" asChild><Link href="/quote">Book Free Well Water Test</Link></Button>
            <Button size="lg" variant="outline" className="h-14 px-10 font-bold text-white border-white/40 hover:bg-white/10" asChild><a href="tel:4035550178">(403) 555-0178</a></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
