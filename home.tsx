import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useGetSiteStats, useListTestimonials, useListBlogPosts, useSubmitContact } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Droplets, Shield, Award, CheckCircle2, Star, ArrowRight, Phone, Clock, MapPin, Zap, Filter, Sun, Waves, ThumbsUp, Users, Wrench, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const quickContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10, "Please describe your water concern"),
});
type QuickContactForm = z.infer<typeof quickContactSchema>;

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

export default function Home() {
  const { data: stats, isLoading: statsLoading } = useGetSiteStats();
  const { data: testimonials, isLoading: testimonialsLoading } = useListTestimonials();
  const { data: blogPosts, isLoading: blogPostsLoading } = useListBlogPosts();
  const submitContact = useSubmitContact();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<QuickContactForm>({
    resolver: zodResolver(quickContactSchema),
    defaultValues: { name: "", email: "", phone: "", serviceInterest: "", message: "" },
  });

  function onSubmit(data: QuickContactForm) {
    submitContact.mutate(
      { data: { name: data.name, email: data.email, phone: data.phone ?? null, serviceInterest: data.serviceInterest ?? null, message: data.message, subject: "Quick Contact from Homepage" } },
      {
        onSuccess: () => {
          setSubmitted(true);
          form.reset();
          toast({ title: "Message sent!", description: "We'll contact you within 1 business day." });
        },
        onError: () => {
          toast({ title: "Something went wrong", description: "Please call us at (403) 555-0178.", variant: "destructive" });
        },
      }
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Calgary's Trusted Water Treatment Experts | Calgary Soft Water"
        description="Calgary Soft Water provides premium water softeners, filtration, and reverse osmosis systems for Calgary, Airdrie, and surrounding areas. Get a free water test today!"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2560&auto=format&fit=crop"
            alt="Crystal clear mountain water in Alberta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/70 to-slate-900/30" />
        </div>

        <div className="container mx-auto px-4 relative z-20 py-32 md:py-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Headline */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Serving Calgary & Surrounding Areas Since 2008
              </motion.div>

              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
                Calgary's<br />
                <span className="text-primary italic font-light">Purest Water</span><br />
                Starts Here.
              </motion.h1>

              <motion.p variants={fadeIn} className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
                From iron-stained well water to hard city water — we test, diagnose, and solve every water quality problem with proven systems and genuine local expertise.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="text-base px-8 h-14 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all font-semibold" asChild>
                  <Link href="/quote">Book a Free Water Test</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 h-14 border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all font-semibold" asChild>
                  <a href="tel:4035550178"><Phone className="w-4 h-4 mr-2" />(403) 555-0178</a>
                </Button>
              </motion.div>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-6 text-sm text-slate-300">
                {[
                  { icon: Star, text: `${stats?.googleRating ?? "4.9"}★ Google Rating (${stats?.reviewCount ?? 312} reviews)` },
                  { icon: Shield, text: "WQA Certified" },
                  { icon: Award, text: "BBB Accredited" },
                  { icon: CheckCircle2, text: "10-Year Warranty" },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    {text}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Quick Contact Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Message Received!</h3>
                    <p className="text-muted-foreground mb-6">We'll call you within 1 business day to schedule your free water test.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">Free — No Obligation</Badge>
                      <h2 className="text-2xl font-bold text-foreground">Get a Free Water Test</h2>
                      <p className="text-muted-foreground text-sm mt-1">Tell us about your water and we'll contact you within 24 hours.</p>
                    </div>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground">Full Name *</FormLabel>
                              <FormControl><Input placeholder="Jane Smith" data-testid="input-name" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="phone" render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground">Phone</FormLabel>
                              <FormControl><Input placeholder="(403) 555-0123" data-testid="input-phone" {...field} /></FormControl>
                              <FormMessage />
                            </FormItem>
                          )} />
                        </div>
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-foreground">Email Address *</FormLabel>
                            <FormControl><Input placeholder="jane@example.com" type="email" data-testid="input-email" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="serviceInterest" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-foreground">What's Your Main Concern?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service">
                                  <SelectValue placeholder="Select a concern..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="hard-water">Hard Water / Scale Buildup</SelectItem>
                                <SelectItem value="iron-staining">Iron / Rust Staining</SelectItem>
                                <SelectItem value="sulfur-smell">Sulfur / Rotten Egg Smell</SelectItem>
                                <SelectItem value="bacteria">Bacteria / Safety Concern</SelectItem>
                                <SelectItem value="drinking-water">Better Drinking Water</SelectItem>
                                <SelectItem value="well-water">Well Water System</SelectItem>
                                <SelectItem value="other">Other / Not Sure</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="message" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-foreground">Tell Us More *</FormLabel>
                            <FormControl><Textarea placeholder="Describe your water problem..." className="resize-none h-20" data-testid="input-message" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <Button type="submit" className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/25" disabled={submitContact.isPending} data-testid="button-submit">
                          {submitContact.isPending ? "Sending..." : "Send My Request"}
                        </Button>
                      </form>
                    </Form>
                    <p className="text-xs text-muted-foreground text-center mt-3">Or call now: <a href="tel:4035550178" className="font-semibold text-primary hover:underline">(403) 555-0178</a></p>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="py-10 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: statsLoading ? "..." : `${stats?.happyCustomers?.toLocaleString() ?? "2,400"}+`, label: "Happy Customers" },
              { value: statsLoading ? "..." : `${stats?.systemsInstalled?.toLocaleString() ?? "3,100"}+`, label: "Systems Installed" },
              { value: statsLoading ? "..." : `${stats?.yearsExperience ?? 17}+`, label: "Years Experience" },
              { value: statsLoading ? "..." : `${stats?.warrantyYears ?? 10}-Year`, label: "Parts & Labor Warranty" },
            ].map(({ value, label }) => (
              <div key={label} className="space-y-1">
                <p className="text-4xl md:text-5xl font-bold">{value}</p>
                <p className="text-primary-foreground/80 font-medium text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HARD WATER PROBLEM SECTION ── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1200&auto=format&fit=crop"
                  alt="Limescale buildup on faucet from hard water"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border max-w-[200px]">
                <div className="text-3xl font-bold text-primary mb-1">16–18 GPG</div>
                <div className="text-sm text-muted-foreground font-medium">Average Calgary water hardness — among the highest in Canada</div>
              </div>
            </div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.p variants={fadeIn} className="text-sm font-bold text-primary uppercase tracking-wider mb-3">The Problem</motion.p>
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 leading-tight">Is Your Water Working Against You?</motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Calgary's water is some of the hardest in Canada. Left untreated, it silently destroys your appliances, clogs your plumbing, dries out your skin, and costs you money every single month.
              </motion.p>
              <motion.div variants={staggerContainer} className="space-y-4 mb-10">
                {[
                  { symptom: "White crusty scale on taps, showerheads & kettles" },
                  { symptom: "Orange or brown stains in your toilet and sinks" },
                  { symptom: "Dry, itchy skin and dull hair after showering" },
                  { symptom: "Spots on dishes even after washing" },
                  { symptom: "Rotten egg or sulfur smell from well water" },
                  { symptom: "Higher energy bills from scale in your water heater" },
                ].map(({ symptom }) => (
                  <motion.div key={symptom} variants={fadeIn} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <p className="text-foreground font-medium">{symptom}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeIn}>
                <Button size="lg" className="h-13 px-8 font-semibold shadow-lg shadow-primary/25" asChild>
                  <Link href="/quote">Get a Free Water Test — We'll Diagnose the Problem</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Our Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-5">Complete Water Treatment for Every Home</h2>
            <p className="text-lg text-muted-foreground">Whether you're on city water or a private well, we have the right system for your exact water chemistry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Water Softeners",
                description: "Eliminate hard water minerals that damage plumbing, dry out skin, and ruin appliances. Calgary-tuned systems that use 50% less salt.",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
                href: "/water-softeners",
                icon: Droplets,
                badge: "Most Popular",
              },
              {
                title: "Well Water Systems",
                description: "Iron staining, sulfur smell, bacteria? We test your well and build a custom multi-stage treatment system for your exact contaminants.",
                image: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?q=80&w=800&auto=format&fit=crop",
                href: "/well-water-systems",
                icon: Waves,
                badge: "Rural Specialist",
              },
              {
                title: "Reverse Osmosis",
                description: "99.9% pure drinking water right at your kitchen tap. Better than bottled water — installed under your sink for under $800.",
                image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=800&auto=format&fit=crop",
                href: "/reverse-osmosis",
                icon: Award,
                badge: null,
              },
              {
                title: "Whole-Home Filtration",
                description: "Remove chlorine, chloramines, and VOCs from every tap in your home. Better tasting water, healthier showers, no chemical smell.",
                image: "https://images.unsplash.com/photo-1572204098219-3e0fc5bd77a4?q=80&w=800&auto=format&fit=crop",
                href: "/water-filtration",
                icon: Filter,
                badge: null,
              },
              {
                title: "UV Purification",
                description: "Kill 99.99% of bacteria, viruses, and Giardia without chemicals. Essential for any home on well water in Alberta.",
                image: "https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=800&auto=format&fit=crop",
                href: "/uv-purification",
                icon: Sun,
                badge: null,
              },
              {
                title: "Annual Service & Maintenance",
                description: "Keep your system performing at peak with yearly maintenance. We service all major brands — Calgary Soft Water customers get priority scheduling.",
                image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
                href: "/services",
                icon: Wrench,
                badge: null,
              },
            ].map(({ title, description, image, href, icon: Icon, badge }) => (
              <Link href={href} key={title}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 cursor-pointer h-full flex flex-col" data-testid={`card-service-${title}`}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {badge && (
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">{badge}</span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
                    <div className="mt-4 flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">The Process</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-5">Pure Water in 4 Simple Steps</h2>
            <p className="text-lg text-muted-foreground">We make it easy. From your first call to crystal-clear water — our process is transparent, pressure-free, and fast.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", icon: Phone, title: "Book Your Free Test", desc: "Call, text, or fill out our form. We'll schedule a free in-home water analysis at a time that works for you — usually within 48 hours." },
              { step: "02", icon: Zap, title: "We Test Your Water", desc: "Our certified water specialist visits your home and tests for hardness, iron, pH, bacteria, TDS, and other contaminants specific to your area." },
              { step: "03", icon: CheckCircle2, title: "We Recommend the Right System", desc: "No upselling. We show you the lab results and recommend only the system that addresses your actual water chemistry — at a price that fits your budget." },
              { step: "04", icon: ThumbsUp, title: "Professional Installation", desc: "Our licensed technicians install your system in 2–4 hours, clean up completely, and walk you through operation and maintenance before we leave." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <motion.div key={step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: parseInt(step) * 0.1 }} className="relative">
                <div className="text-8xl font-black text-primary/8 absolute -top-4 -left-2 leading-none select-none">{step}</div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="h-14 px-10 font-semibold shadow-lg shadow-primary/25" asChild>
              <Link href="/quote">Start Step 1 — It's Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2560&auto=format&fit=crop" alt="Clean water" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Why Calgary Soft Water</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-5">The Difference Is in the Details</h2>
            <p className="text-lg text-slate-400">We're not a big-box store or a call center. We're local Calgary people who care about your family's water.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "All technicians are certified water specialists (CWS) and fully insured. Your home and family are protected on every visit." },
              { icon: HeartHandshake, title: "No-Pressure Guarantee", desc: "We test first, recommend second. We'll never push you toward a system you don't need. Our reputation is built on honest advice." },
              { icon: Award, title: "10-Year Warranty", desc: "All systems come with a 10-year parts and labor warranty. We stand behind every installation, every time." },
              { icon: Clock, title: "Fast Installation", desc: "Most systems installed in 2–4 hours. We book a full appointment block so we're never rushed, and we always leave your home clean." },
              { icon: MapPin, title: "Local & Family Owned", desc: "Founded in Calgary in 2008. We know your water because we drink it too. Our team lives in the communities we serve." },
              { icon: Users, title: "2,400+ Happy Customers", desc: "Over 17 years, we've transformed thousands of Calgary-area homes. Read our 300+ verified Google reviews to hear it from your neighbors." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Reviews</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-5">What Your Neighbors Are Saying</h2>
            <div className="flex items-center justify-center gap-2 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              <span className="ml-2 text-foreground font-bold text-lg">{stats?.googleRating ?? "4.9"}</span>
              <span className="text-muted-foreground">({stats?.reviewCount ?? 312} Google reviews)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <Card key={i} className="border-none shadow-sm">
                    <CardContent className="p-8 space-y-4">
                      <div className="flex gap-1">{Array.from({ length: 5 }).map((_, j) => <Skeleton key={j} className="w-5 h-5 rounded" />)}</div>
                      <Skeleton className="h-24 w-full" />
                      <div className="flex items-center gap-3"><Skeleton className="w-12 h-12 rounded-full" /><div className="space-y-2"><Skeleton className="h-4 w-24" /><Skeleton className="h-3 w-16" /></div></div>
                    </CardContent>
                  </Card>
                ))
              : testimonials?.slice(0, 6).map((t) => (
                  <Card key={t.id} className="border-none bg-white shadow-sm hover:shadow-xl transition-all duration-300" data-testid={`card-testimonial-${t.id}`}>
                    <CardContent className="p-8">
                      <div className="flex gap-1 text-amber-400 mb-5">
                        {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-foreground/85 mb-6 italic leading-relaxed">"{t.text}"</p>
                      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                        <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary text-base flex-shrink-0">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.location}</p>
                          <p className="text-xs text-primary font-medium mt-0.5">{t.service}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      {!blogPostsLoading && blogPosts && blogPosts.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Water Knowledge</p>
                <h2 className="text-4xl font-bold font-serif text-foreground">Learn About Your Water</h2>
              </div>
              <Button variant="outline" asChild className="hidden md:flex">
                <Link href="/blog">View All Articles <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.slice(0, 3).map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id}>
                  <div className="group cursor-pointer" data-testid={`card-blog-${post.id}`}>
                    <div className="aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-slate-100">
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <Droplets className="w-12 h-12 text-primary/40" />
                        </div>
                      )}
                    </div>
                    <Badge variant="outline" className="mb-3 text-xs text-primary border-primary/30 bg-primary/5">{post.category}</Badge>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-tight mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                    <p className="text-xs text-muted-foreground mt-3">{post.author} · {new Date(post.publishedAt).toLocaleDateString("en-CA", { month: "long", day: "numeric", year: "numeric" })}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SERVICE AREA ── */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Service Area</p>
          <h2 className="text-3xl font-bold font-serif text-foreground mb-6">Proudly Serving Calgary & Surrounding Communities</h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {["Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere", "Strathmore", "Canmore", "Banff", "High River", "Nanton", "Rocky View County", "Foothills County", "Wheatland County", "Mountain View County"].map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-white border border-primary/20 text-foreground font-medium text-sm shadow-sm">
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground text-sm">Not on the list? Call us — we likely service your area.</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2560&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.p variants={fadeIn} className="text-sm font-bold text-primary-foreground/70 uppercase tracking-wider mb-3">Take the First Step</motion.p>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">Ready for Water You Can Trust?</motion.h2>
            <motion.p variants={fadeIn} className="text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/85 leading-relaxed">
              Book your free in-home water test today. No pressure, no obligation — just honest answers about your water quality and what it'll take to fix it.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-base font-bold text-primary shadow-xl hover:bg-white" asChild>
                <Link href="/quote">Book Free Water Test</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-base font-bold text-white border-white/40 hover:bg-white/10 hover:border-white" asChild>
                <a href="tel:4035550178"><Phone className="w-4 h-4 mr-2" />Call (403) 555-0178</a>
              </Button>
            </motion.div>
            <motion.p variants={fadeIn} className="mt-8 text-primary-foreground/60 text-sm flex items-center justify-center gap-6">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" />Free — No Obligation</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" />Same-Week Appointments</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" />WQA Certified</span>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
