import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useListProducts, useListFaqs } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Phone, Zap, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function WaterSofteners() {
  const { data: products, isLoading: productsLoading } = useListProducts({ category: "softener" });
  const { data: faqs, isLoading: faqsLoading } = useListFaqs({ category: "water-softener" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Water Softeners Calgary | Hard Water Solutions | Calgary Soft Water"
        description="Calgary water softener installation and service. Eliminate hard water scale, protect your appliances, and enjoy softer skin. Free water test. (403) 555-0178."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2560&auto=format&fit=crop" alt="Clean modern kitchen with soft water" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-5 bg-primary/20 text-primary border-primary/30">Calgary Hard Water Specialists</Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6 leading-tight">
              End Hard Water. <br /><span className="text-primary italic font-light">For Good.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Calgary's water is some of the hardest in Canada — averaging 16–18 grains per gallon. Our water softeners eliminate scale buildup, protect your appliances, and give you noticeably softer skin and hair starting day one.
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

      {/* Hard Water Impact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=1200&auto=format&fit=crop" alt="Hard water limescale buildup on shower head" className="rounded-2xl shadow-2xl w-full h-[440px] object-cover" />
              <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-3xl font-black">16–18</p>
                <p className="text-sm font-medium">GPG Hardness</p>
                <p className="text-xs text-primary-foreground/70">Calgary average</p>
              </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeIn} className="text-sm font-bold text-primary uppercase tracking-wider mb-3">The Hidden Cost of Hard Water</motion.p>
              <motion.h2 variants={fadeIn} className="text-4xl font-bold font-serif text-foreground mb-6">Hard Water Is Costing You Money Every Day</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Scale buildup from hard water is the silent killer of appliances. Just 6mm of scale in your water heater reduces efficiency by 40%. Here's what untreated hard water does to your home over time.
              </motion.p>
              <motion.div variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="space-y-4 mb-8">
                {[
                  { area: "Water Heater", impact: "Up to 29% more energy — scale insulates heating elements" },
                  { area: "Dishwasher & Washer", impact: "Lifespan reduced by 30–50% from scale buildup" },
                  { area: "Plumbing & Fixtures", impact: "Corrosion and reduced flow from mineral deposits" },
                  { area: "Skin & Hair", impact: "Dry, itchy skin and dull hair — soap can't lather in hard water" },
                  { area: "Cleaning Time", impact: "2x more time cleaning soap scum, spots, and scale" },
                ].map(({ area, impact }) => (
                  <motion.div key={area} variants={fadeIn} className="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground">{area}: </span>
                      <span className="text-muted-foreground text-sm">{impact}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Softeners Work */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Ion Exchange — The Proven Technology</h2>
            <p className="text-lg text-muted-foreground">Water softeners use a process called ion exchange to swap calcium and magnesium minerals for a tiny amount of sodium — leaving you with genuinely soft water.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Hard Water Enters", desc: "Your home's water supply flows through the top of the resin tank, full of calcium and magnesium." },
              { step: "2", title: "Ion Exchange", desc: "The water passes through a bed of resin beads. Calcium and magnesium ions attach to the resin, releasing sodium ions in exchange." },
              { step: "3", title: "Soft Water Out", desc: "Pure soft water — free of hardness minerals — exits the tank and flows through your entire home." },
              { step: "4", title: "Auto Regeneration", desc: "When the resin is saturated, the softener automatically flushes with salt brine to restore the resin. You just top up the salt tank." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-black mx-auto mb-5 shadow-lg shadow-primary/25">{step}</div>
                <h3 className="font-bold text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeIn} className="text-sm font-bold text-primary uppercase tracking-wider mb-3">What Changes</motion.p>
              <motion.h2 variants={fadeIn} className="text-4xl font-bold font-serif text-foreground mb-6">What Life Looks Like With Soft Water</motion.h2>
              <motion.div variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="space-y-4">
                {[
                  "No more white scale on faucets, showerheads, or around taps",
                  "Silky smooth skin and noticeably softer hair after every shower",
                  "Dishes come out of the dishwasher spotless — every time",
                  "Soaps and shampoos lather twice as much — you use less",
                  "Water heater runs up to 29% more efficiently",
                  "Laundry comes out brighter and softer — no mineral buildup in fabrics",
                  "Plumbing lasts longer — no more mineral corrosion",
                  "Less time cleaning soap scum and limescale deposits",
                ].map((benefit) => (
                  <motion.div key={benefit} variants={fadeIn} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{benefit}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeIn} className="mt-8">
                <Button size="lg" className="h-14 px-8 font-semibold shadow-lg shadow-primary/25" asChild>
                  <Link href="/quote">Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>
            </motion.div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" alt="Happy family enjoying soft water" className="rounded-2xl shadow-2xl w-full h-[500px] object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Our Systems</p>
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Water Softener Systems</h2>
            <p className="text-lg text-muted-foreground">High-efficiency softeners tuned for Calgary's notoriously hard water.</p>
          </div>
          {productsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"><Skeleton className="h-72 rounded-2xl" /><Skeleton className="h-72 rounded-2xl" /></div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products?.map((p) => (
                <div key={p.id} className="bg-white rounded-2xl border border-border/50 p-8 hover:shadow-xl hover:border-primary/20 transition-all" data-testid={`card-product-${p.id}`}>
                  {p.popular && <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>}
                  <h3 className="text-2xl font-bold text-foreground mb-3">{p.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{p.description}</p>
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Features</p>
                      <ul className="space-y-2">{p.features.slice(0, 4).map((f) => <li key={f} className="text-sm text-foreground flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{f}</li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Benefits</p>
                      <ul className="space-y-2">{p.benefits.slice(0, 4).map((b) => <li key={b} className="text-sm text-foreground flex items-start gap-2"><Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />{b}</li>)}</ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t border-border/50">
                    <div><p className="text-xs text-muted-foreground">Starting at</p><p className="text-2xl font-bold text-foreground">{p.price}</p></div>
                    <Button asChild><Link href="/quote">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      {!faqsLoading && faqs && faqs.length > 0 && (
        <section className="py-20 border-t">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-4xl font-bold font-serif text-foreground">Water Softener Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl border border-border/50 overflow-hidden" data-testid={`faq-${faq.id}`}>
                  <button className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors" onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <span className={`text-primary text-xl font-bold transition-transform flex-shrink-0 ${openFaq === faq.id ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {openFaq === faq.id && <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Droplets className="w-12 h-12 mx-auto mb-4 text-primary-foreground/60" />
          <h2 className="text-4xl font-bold font-serif mb-4">Find Out How Soft Your Water Can Be</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">We'll test your water hardness for free and show you exactly what a water softener would do for your home.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-10 font-bold text-primary" asChild>
              <Link href="/quote">Book Free Water Test</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 font-bold text-white border-white/40 hover:bg-white/10" asChild>
              <a href="tel:4035550178">(403) 555-0178</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
