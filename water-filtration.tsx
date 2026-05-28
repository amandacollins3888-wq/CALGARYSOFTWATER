import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useListProducts } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Phone, Filter, Zap } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function WaterFiltration() {
  const { data: products, isLoading: productsLoading } = useListProducts({ category: "filtration" });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Whole-Home Water Filtration Calgary | Calgary Soft Water"
        description="Remove chlorine, chloramines, and contaminants from every tap in your Calgary home. Whole-house carbon filtration systems. Free quote. (403) 555-0178."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1548940740-204726a19be3?q=80&w=2560&auto=format&fit=crop" alt="Crystal clear filtered water" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/65 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-5 bg-primary/20 text-primary border-primary/30">Whole-Home Filtration</Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6 leading-tight">
              Clean Water at<br /><span className="text-primary italic font-light">Every Tap.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Calgary's municipal water is safe — but it smells like a swimming pool. Chlorine and chloramines used for disinfection affect your water's taste, dry out your skin and hair, and accelerate wear on appliances. Whole-home filtration removes it all before it reaches any tap.
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

      {/* What We Remove */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">What Gets Removed</p>
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">What's in Calgary's Municipal Water</h2>
            <p className="text-lg text-muted-foreground">Safe to drink doesn't mean it tastes good or is gentle on your body. Here's what our filtration systems remove.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Chlorine", effect: "Dry skin & hair, bleach taste and smell", removal: "99%" },
              { name: "Chloramines", effect: "Harsh disinfectant byproduct", removal: "99%" },
              { name: "VOCs", effect: "Volatile organic compounds from pipes", removal: "95%" },
              { name: "THMs", effect: "Trihalomethanes — disinfection byproducts", removal: "90%" },
              { name: "Sediment", effect: "Dirt, rust, sand from aging pipes", removal: "99%" },
              { name: "Herbicides", effect: "Agricultural runoff traces", removal: "85%" },
            ].map(({ name, effect, removal }) => (
              <div key={name} className="bg-primary/5 border border-primary/10 rounded-2xl p-5 text-center">
                <div className="text-2xl font-black text-primary mb-1">{removal}</div>
                <div className="font-bold text-foreground mb-2 text-sm">{name}</div>
                <div className="text-xs text-muted-foreground leading-tight">{effect}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop" alt="Family enjoying clean water at home" className="rounded-2xl shadow-2xl w-full h-[480px] object-cover" />
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeIn} className="text-sm font-bold text-primary uppercase tracking-wider mb-3">The Difference</motion.p>
              <motion.h2 variants={fadeIn} className="text-4xl font-bold font-serif text-foreground mb-6">What Changes When You Filter Your Whole Home</motion.h2>
              <motion.div variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="space-y-4">
                {[
                  "No more chlorine taste or smell from any tap",
                  "Showers that are gentler on skin and hair — no more dry itch",
                  "Cooking with filtered water that doesn't affect food flavour",
                  "Better tasting coffee, tea, and ice",
                  "Laundry comes out brighter — chlorine damages fibres over time",
                  "No chlorine smell when running a bath or shower",
                  "Extends life of water-using appliances",
                  "No filter jugs or bottled water needed",
                ].map((benefit) => (
                  <motion.div key={benefit} variants={fadeIn} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{benefit}</p>
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
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Whole-Home Filtration Systems</h2>
          </div>
          {productsLoading ? (
            <Skeleton className="h-72 rounded-2xl max-w-2xl mx-auto" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products?.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:border-primary/20 transition-all" data-testid={`card-product-${p.id}`}>
                  {p.popular && <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>}
                  <div className="flex items-center gap-3 mb-4"><Filter className="w-7 h-7 text-primary" /><h3 className="text-xl font-bold text-foreground">{p.name}</h3></div>
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
          <h2 className="text-4xl font-bold font-serif mb-4">Taste the Difference — Risk Free</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">Book your free water assessment today. 30-day satisfaction guarantee on all installations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-10 font-bold text-primary" asChild><Link href="/quote">Book Free Assessment</Link></Button>
            <Button size="lg" variant="outline" className="h-14 px-10 font-bold text-white border-white/40 hover:bg-white/10" asChild><a href="tel:4035550178">(403) 555-0178</a></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
