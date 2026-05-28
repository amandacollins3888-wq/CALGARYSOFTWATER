import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useListProducts, useListFaqs } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Phone, Shield, Zap, Droplets, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function WellWaterSystems() {
  const { data: products, isLoading: productsLoading } = useListProducts({ category: "well-water" });
  const { data: faqs, isLoading: faqsLoading } = useListFaqs({ category: "well-water" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Well Water Treatment Systems Calgary | Calgary Soft Water"
        description="Iron staining, sulfur smell, bacteria? Calgary Soft Water designs custom well water treatment systems for rural Alberta homes. Free water test. Call (403) 555-0178."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?q=80&w=2560&auto=format&fit=crop" alt="Rural Alberta well water" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-5 bg-primary/20 text-primary border-primary/30">Alberta Well Water Specialists</Badge>
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6 leading-tight">
              Your Well Water. <br /><span className="text-primary italic font-light">Perfectly Clean.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Alberta well water is complex. Iron, sulfur, bacteria, hardness, and arsenic are all common — often in the same well. We test first, then design a system that addresses every contaminant in your specific water.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 font-semibold shadow-lg" asChild>
                <Link href="/quote">Book a Free Well Water Test</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10" asChild>
                <a href="tel:4035550178"><Phone className="w-4 h-4 mr-2" />(403) 555-0178</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Common Problems</p>
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">What's in Your Well Water?</h2>
            <p className="text-lg text-muted-foreground">Alberta well water problems are predictable by geography — and every one has a proven solution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                color: "bg-orange-50 border-orange-100",
                iconColor: "text-orange-500 bg-orange-100",
                icon: AlertTriangle,
                problem: "Iron & Rust Staining",
                symptoms: ["Orange stains on toilets, sinks, laundry", "Metallic taste in water", "Reddish-brown discolouration"],
                solution: "Air injection iron filter with catalytic media",
              },
              {
                color: "bg-yellow-50 border-yellow-100",
                iconColor: "text-yellow-600 bg-yellow-100",
                icon: AlertTriangle,
                problem: "Sulfur / Rotten Egg Smell",
                symptoms: ["Rotten egg or sulfur odor", "Smell stronger from hot water", "Corrodes plumbing fixtures"],
                solution: "Aeration oxidation + carbon filtration",
              },
              {
                color: "bg-red-50 border-red-100",
                iconColor: "text-red-500 bg-red-100",
                icon: Shield,
                problem: "Bacteria & E. coli",
                symptoms: ["Invisible — no taste or smell", "Coliform or E. coli in lab tests", "Post-flooding or spring melt risk"],
                solution: "NSF-certified UV disinfection lamp",
              },
              {
                color: "bg-blue-50 border-blue-100",
                iconColor: "text-blue-500 bg-blue-100",
                icon: Droplets,
                problem: "Hardness (Scale Buildup)",
                symptoms: ["White scale on fixtures & showers", "Soap won't lather properly", "Shortened appliance lifespan"],
                solution: "High-capacity ion exchange water softener",
              },
              {
                color: "bg-slate-50 border-slate-100",
                iconColor: "text-slate-500 bg-slate-200",
                icon: AlertTriangle,
                problem: "Sediment & Turbidity",
                symptoms: ["Cloudy or hazy water", "Grit or particles in water", "Clogs faucet aerators"],
                solution: "Whole-home sediment pre-filter",
              },
              {
                color: "bg-purple-50 border-purple-100",
                iconColor: "text-purple-500 bg-purple-100",
                icon: Shield,
                problem: "Nitrates & Arsenic",
                symptoms: ["No visible signs — lab test only", "Common near farmland and certain geology", "Health risk for infants"],
                solution: "Reverse osmosis under-sink system",
              },
            ].map(({ color, iconColor, icon: Icon, problem, symptoms, solution }) => (
              <motion.div key={problem} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className={`rounded-2xl border p-6 ${color}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">{problem}</h3>
                <ul className="space-y-1.5 mb-4">
                  {symptoms.map((s) => (
                    <li key={s} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 flex-shrink-0" />{s}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-bold text-primary uppercase tracking-wide">Solution: {solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Our Approach</p>
              <h2 className="text-4xl font-bold font-serif text-foreground mb-6">We Test Before We Recommend — Always</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every well is different. We never recommend a system without first testing your water. Our certified specialists test for over 15 parameters and show you the results before presenting any solutions.
              </p>
              <div className="space-y-5">
                {[
                  { step: "1", title: "Free In-Home Water Test", desc: "We test for iron, sulfur, hardness, pH, TDS, turbidity, and bacteria. We show you every result in plain language." },
                  { step: "2", title: "Custom System Design", desc: "We design a treatment train that solves every issue in your water — in the right order, at the right capacity for your household." },
                  { step: "3", title: "Professional Installation", desc: "Licensed technicians install your system cleanly and completely, with full explanation of operation and maintenance." },
                  { step: "4", title: "Ongoing Support", desc: "Annual service, media replacement, and free water re-testing included. We're your water quality partner for life." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">{step}</div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1582560475093-ba66accbc095?q=80&w=1200&auto=format&fit=crop" alt="Water treatment technician testing well water" className="w-full h-[520px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">Free Water Test</div>
                    <div className="text-xs text-muted-foreground">No obligation — results in hand same day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Our Systems</p>
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Well Water Treatment Systems</h2>
            <p className="text-lg text-muted-foreground">Proven technology for Alberta's most challenging water conditions.</p>
          </div>
          {productsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => <Skeleton key={i} className="h-72 rounded-2xl" />)}
            </div>
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
                      <ul className="space-y-2">
                        {p.features.slice(0, 4).map((f) => (
                          <li key={f} className="text-sm text-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Benefits</p>
                      <ul className="space-y-2">
                        {p.benefits.slice(0, 4).map((b) => (
                          <li key={b} className="text-sm text-foreground flex items-start gap-2">
                            <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />{b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-5 border-t border-border/50">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting at</p>
                      <p className="text-2xl font-bold text-foreground">{p.price}</p>
                    </div>
                    <Button asChild>
                      <Link href="/quote">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      {!faqsLoading && faqs && faqs.length > 0 && (
        <section className="py-20 bg-slate-50 border-t">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-4xl font-bold font-serif text-foreground">Common Well Water Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-xl border border-border/50 overflow-hidden" data-testid={`faq-${faq.id}`}>
                  <button className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors" onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                    <span className={`text-primary transition-transform flex-shrink-0 ${openFaq === faq.id ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-4">Get Your Well Water Tested — Free</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">We'll come to your home, test your water on the spot, and give you a straight answer about what's in it and how to fix it.</p>
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
