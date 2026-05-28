import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useListProducts } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function ReverseOsmosis() {
  const { data: products, isLoading: productsLoading } = useListProducts({ category: "reverse-osmosis" });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Reverse Osmosis Water Systems Calgary | Calgary Soft Water"
        description="99.9% pure drinking water from your Calgary tap. Under-sink reverse osmosis systems starting at $799 installed. Free quote. (403) 555-0178."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2560&auto=format&fit=crop" alt="Pure drinking water" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-5 bg-primary/20 text-primary border-primary/30">99.9% Pure Drinking Water</Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6 leading-tight">
              Better Than Bottled. <br /><span className="text-primary italic font-light">Right From Your Tap.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A reverse osmosis system removes up to 99.9% of dissolved contaminants — heavy metals, nitrates, fluoride, arsenic, and more. The result is premium drinking water at a fraction of the cost of bottled water.
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

      {/* Cost Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">The Math</p>
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Stop Paying for Bottled Water</h2>
            <p className="text-lg text-muted-foreground">Most Calgary families spend $600–$1,400 per year on bottled water. An RO system pays for itself in under 18 months.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Bottled Water (5 years)", cost: "$5,400–$7,200", color: "bg-red-50 border-red-100", textColor: "text-red-600", note: "Family of 4 · $90–$120/month" },
              { label: "RO System (5 years)", cost: "$1,175–$1,500", color: "bg-green-50 border-green-100", textColor: "text-green-600", note: "Install + filter replacements" },
              { label: "Your 5-Year Savings", cost: "$4,000–$5,700", color: "bg-primary/5 border-primary/20", textColor: "text-primary", note: "Plus zero plastic waste" },
            ].map(({ label, cost, color, textColor, note }) => (
              <div key={label} className={`rounded-2xl border p-8 text-center ${color}`}>
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">{label}</p>
                <p className={`text-3xl font-black mb-2 ${textColor}`}>{cost}</p>
                <p className="text-xs text-muted-foreground">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What RO Removes */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop" alt="Under-sink reverse osmosis system" className="rounded-2xl shadow-2xl w-full h-[480px] object-cover" />
              <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-black">99.9%</p>
                <p className="text-sm font-medium">TDS Removal</p>
              </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeIn} className="text-sm font-bold text-primary uppercase tracking-wider mb-3">What Gets Removed</motion.p>
              <motion.h2 variants={fadeIn} className="text-4xl font-bold font-serif text-foreground mb-6">What Reverse Osmosis Removes From Your Water</motion.h2>
              <motion.div variants={{ visible: { transition: { staggerChildren: 0.07 } } }} className="grid grid-cols-2 gap-3">
                {[
                  "Lead & heavy metals", "Nitrates & nitrites", "Arsenic (common in AB wells)", "Fluoride",
                  "Chlorine & chloramines", "Pharmaceuticals", "Bacteria & viruses", "TDS (dissolved solids)",
                  "Herbicides & pesticides", "PFAS / PFOA", "Chromium-6", "Mercury",
                ].map((item) => (
                  <motion.div key={item} variants={fadeIn} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeIn} className="mt-8 p-4 bg-primary/5 border border-primary/15 rounded-xl">
                <p className="text-sm text-foreground"><span className="font-bold text-primary">Note on nitrates:</span> Nitrates above 10 mg/L are a health risk for infants. RO is the most effective point-of-use solution for homes in agricultural areas of Alberta.</p>
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
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Reverse Osmosis Systems</h2>
            <p className="text-lg text-muted-foreground">Professional under-sink installation with a dedicated faucet and pressurized storage tank.</p>
          </div>
          {productsLoading ? (
            <Skeleton className="h-72 rounded-2xl max-w-2xl mx-auto" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products?.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:border-primary/20 transition-all" data-testid={`card-product-${p.id}`}>
                  {p.popular && <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>}
                  <h3 className="text-xl font-bold text-foreground mb-3">{p.name}</h3>
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
          <h2 className="text-4xl font-bold font-serif mb-4">Try the Best Drinking Water of Your Life</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">Book a free in-home water test. We'll show you what's in your water and what an RO system will do for your family.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-10 font-bold text-primary" asChild><Link href="/quote">Book Free Water Test</Link></Button>
            <Button size="lg" variant="outline" className="h-14 px-10 font-bold text-white border-white/40 hover:bg-white/10" asChild><a href="tel:4035550178">(403) 555-0178</a></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
