import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact, useListFaqs } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().nullable(),
  subject: z.string().optional().nullable(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  serviceInterest: z.string().optional().nullable(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  const { data: faqs, isLoading: faqsLoading } = useListFaqs();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      serviceInterest: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitContact.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Message Sent!",
            description: "We'll get back to you within 1 business day.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to send message. Please try again or call us.",
          });
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us | Calgary Soft Water Calgary" 
        description="Contact Calgary Soft Water in Calgary. Get in touch for water treatment services, support, or a free consultation. Serving Calgary and surrounding areas."
      />
      
      {/* Header */}
      <section className="bg-primary/5 py-20 border-b">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions about your water? Need service on an existing system? Our local experts are ready to help.
          </p>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 font-serif">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We're a local Calgary business, not a call center. When you reach out, you'll speak directly with a water treatment expert who knows the area.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-muted-foreground text-sm mb-1">For immediate assistance or to book a free quote.</p>
                    <a href="tel:4035550178" className="text-xl font-bold text-primary hover:underline">(403) 555-0178</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-1">We respond to all emails within 1 business day.</p>
                    <a href="mailto:info@calgarysoftwater.ca" className="text-lg font-medium hover:text-primary transition-colors">info@calgarysoftwater.ca</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Service Area</h3>
                    <p className="text-muted-foreground">Calgary, Airdrie, Cochrane, Okotoks, Chestermere, Strathmore, Canmore, Banff, and Rocky View County.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hours of Operation</h3>
                    <ul className="text-muted-foreground space-y-1 mt-2">
                      <li className="flex justify-between w-48"><span className="font-medium">Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
                      <li className="flex justify-between w-48"><span className="font-medium">Saturday:</span> <span>9:00 AM - 4:00 PM</span></li>
                      <li className="flex justify-between w-48"><span className="font-medium text-muted-foreground/70">Sunday:</span> <span className="text-muted-foreground/70">Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 mt-8">
              <h3 className="font-bold text-lg mb-2">Looking for a Quote?</h3>
              <p className="text-muted-foreground text-sm mb-4">Our quote request form allows you to provide details about your water issues so we can prepare better.</p>
              <Button asChild variant="outline" className="w-full bg-white hover:bg-primary hover:text-white transition-colors">
                <Link href="/quote">Go to Quote Form <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm h-full">
              <h2 className="text-2xl font-bold mb-6 font-serif">Send a Message</h2>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" {...form.register("name")} placeholder="John Doe" />
                    {form.formState.errors.name && <p className="text-destructive text-sm">{form.formState.errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" {...form.register("email")} placeholder="john@example.com" />
                    {form.formState.errors.email && <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" {...form.register("phone")} placeholder="(403) 555-0123" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceInterest">Topic</Label>
                    <Controller
                      name="serviceInterest"
                      control={form.control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="service">Service/Repair Existing System</SelectItem>
                            <SelectItem value="new-system">New System Installation</SelectItem>
                            <SelectItem value="water-testing">Water Testing</SelectItem>
                            <SelectItem value="filters">Filter Replacement</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" {...form.register("subject")} placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    {...form.register("message")} 
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[150px]"
                  />
                  {form.formState.errors.message && <p className="text-destructive text-sm">{form.formState.errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg h-14" 
                  disabled={submitContact.isPending}
                >
                  {submitContact.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20 border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold font-serif text-center mb-10">Frequently Asked Questions</h2>
          
          {faqsLoading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white p-4 rounded-lg border">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : faqs && faqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl border p-4 shadow-sm">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger className="text-left font-medium text-lg hover:text-primary">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-center text-muted-foreground">No FAQs available at the moment.</p>
          )}
        </div>
      </section>
    </div>
  );
}
