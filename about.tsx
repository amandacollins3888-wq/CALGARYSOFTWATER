import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Award, Users, MapPin, Phone, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Calgary Soft Water | Calgary Water Treatment Since 2008"
        description="Calgary Soft Water is a Calgary-based, family-owned water treatment company serving Alberta since 2008. WQA certified, BBB accredited. Meet our team."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2560&auto=format&fit=crop" alt="Calgary Soft Water team installing water treatment system" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-2xl">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-white mb-6 leading-tight">
            Calgary-Born.<br /><span className="text-primary italic font-light">Water Obsessed.</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Calgary Soft Water was founded in Calgary in 2008 by a team of water treatment professionals who believed homeowners deserved straight answers — not sales pressure. Seventeen years later, that's still how we operate.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop" alt="Team of water treatment professionals" className="w-full h-[520px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border">
                <div className="text-4xl font-black text-primary mb-1">2008</div>
                <div className="text-sm text-muted-foreground font-medium">Founded in Calgary, AB</div>
              </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeIn} className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Who We Are</motion.p>
              <motion.h2 variants={fadeIn} className="text-4xl font-bold font-serif text-foreground mb-6">Neighbors Helping Neighbors Drink Better Water</motion.h2>
              <motion.div variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="space-y-5 text-muted-foreground leading-relaxed">
                <motion.p variants={fadeIn}>
                  Calgary Soft Water was started by Mark Jensen, a water treatment specialist who spent a decade with a national company before going independent. He was tired of seeing homeowners sold systems they didn't need. So he started a company built on a different premise: test first, recommend second, never oversell.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Today, our team of 12 certified water specialists serves Calgary, Airdrie, Cochrane, Okotoks, and dozens of rural Alberta communities. We drive the same streets, drink the same water, and live in the same communities as our customers.
                </motion.p>
                <motion.p variants={fadeIn}>
                  We've installed over 3,100 water treatment systems across southern Alberta. Every single one came with a promise: if your water quality isn't dramatically better, we'll make it right — no questions asked.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-4xl font-bold font-serif text-foreground mb-4">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle2, title: "Honesty First", desc: "We test your water and share the results before recommending anything. We'll tell you when you don't need a system just as readily as when you do." },
              { icon: Heart, title: "Local & Family-Owned", desc: "We're not a franchise or a national call center. We're your neighbors. Every decision we make is about building long-term relationships in this community." },
              { icon: Award, title: "Certified Excellence", desc: "Every technician is a certified Water Quality Specialist (CWS). We stay current with continuing education because water science evolves and your water deserves the best." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-border/50 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "2,400+", label: "Happy Customers", icon: Users },
              { value: "17+", label: "Years in Business", icon: Award },
              { value: "3,100+", label: "Systems Installed", icon: CheckCircle2 },
              { value: "4.9★", label: "Google Rating (312 reviews)", icon: Heart },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-black text-foreground mb-1">{value}</p>
                <p className="text-sm text-muted-foreground font-medium">{label}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl border border-border/50 p-10">
            <h3 className="text-2xl font-bold font-serif text-foreground mb-8 text-center">Certifications & Memberships</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { cert: "WQA Certified", detail: "Water Quality Association — CWS-II & CWS-III" },
                { cert: "BBB Accredited", detail: "Better Business Bureau — A+ Rating" },
                { cert: "NSF Certified", detail: "NSF International product certifications" },
                { cert: "Licensed & Insured", detail: "Fully licensed contractor in Alberta" },
              ].map(({ cert, detail }) => (
                <div key={cert} className="text-center p-5 bg-white rounded-xl border border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-bold text-foreground text-sm mb-1">{cert}</p>
                  <p className="text-xs text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-slate-50 border-y">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Where We Work</p>
          <h2 className="text-4xl font-bold font-serif text-foreground mb-4">Our Service Area</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">We serve Calgary and all of southern Alberta. Rural and acreage properties are our specialty — we know well water.</p>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto mb-8">
            {["Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere", "Strathmore", "Canmore", "Banff", "High River", "Nanton", "Crossfield", "Didsbury", "Carstairs", "Rocky View County", "Foothills County", "Wheatland County", "Mountain View County"].map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-white border border-primary/20 text-foreground font-medium text-sm shadow-sm flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-primary" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info & CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Get In Touch</p>
              <h2 className="text-4xl font-bold font-serif text-foreground mb-6">Ready to Talk About Your Water?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">We're a local team — when you call, you'll reach a water specialist, not a call center. We'll answer your questions honestly and schedule your free water test at a time that works for you.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border">
                  <Phone className="w-5 h-5 text-primary" />
                  <div><p className="font-bold text-foreground">(403) 555-0178</p><p className="text-xs text-muted-foreground">Call or text anytime during business hours</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border">
                  <Clock className="w-5 h-5 text-primary" />
                  <div><p className="font-bold text-foreground">Mon–Fri 8am–6pm · Sat 9am–4pm</p><p className="text-xs text-muted-foreground">Sunday closed</p></div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div><p className="font-bold text-foreground">Calgary, Alberta</p><p className="text-xs text-muted-foreground">info@calgarysoftwater.ca</p></div>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-10 text-primary-foreground text-center shadow-xl shadow-primary/20">
              <Award className="w-12 h-12 mx-auto mb-5 text-primary-foreground/70" />
              <h3 className="text-3xl font-bold font-serif mb-4">Free Water Test. No Obligation.</h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">We'll come to your home, test your water on the spot, explain every result in plain language, and only recommend a system if you genuinely need one.</p>
              <Button size="lg" variant="secondary" className="w-full h-14 font-bold text-primary text-base" asChild>
                <Link href="/quote">Book Your Free Water Test</Link>
              </Button>
              <p className="mt-4 text-sm text-primary-foreground/60">Or call (403) 555-0178 for same-week appointments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
