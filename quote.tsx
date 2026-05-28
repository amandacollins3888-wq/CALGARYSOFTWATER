import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRequestQuote } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  waterSource: z.enum(["municipal", "well", "other"], {
    required_error: "Please select a water source",
  }),
  issues: z.array(z.string()).optional().default([]),
  services: z.array(z.string()).optional().default([]),
  notes: z.string().optional(),
  preferredTime: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const WATER_ISSUES = [
  { id: "hard-water", label: "Hard Water / Scale Buildup" },
  { id: "iron", label: "Iron / Rust Stains" },
  { id: "sulfur", label: "Sulfur / Rotten Egg Smell" },
  { id: "chlorine", label: "Chlorine Taste / Smell" },
  { id: "bacteria", label: "Bacteria Concerns" },
  { id: "cloudy", label: "Cloudy / Murky Water" },
  { id: "taste-odor", label: "Bad Taste or Odor generally" },
  { id: "dont-know", label: "I don't know, I just want a test" },
];

const SERVICES = [
  { id: "softener", label: "Water Softener" },
  { id: "filtration", label: "Whole Home Filtration" },
  { id: "ro", label: "Reverse Osmosis (Drinking Water)" },
  { id: "uv", label: "UV Purification" },
  { id: "well-system", label: "Well Water System" },
  { id: "maintenance", label: "Maintenance / Service" },
];

export default function Quote() {
  const { toast } = useToast();
  const requestQuote = useRequestQuote();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      waterSource: "municipal",
      issues: [],
      services: [],
      notes: "",
      preferredTime: "morning",
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    requestQuote.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Quote Request Sent!",
            description: "We'll be in touch shortly to schedule your consultation.",
          });
          form.reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to send request. Please try again or call us.",
          });
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO 
        title="Get a Free Quote | Water Test" 
        description="Request a free quote and water test in Calgary. Tell us about your water problems and we'll provide a custom solution for your home."
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-4">Get a Free Quote & Water Test</h1>
          <p className="text-xl text-muted-foreground">
            Take the first step toward perfect water. Fill out the form below and one of our experts will contact you.
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold mb-4 font-serif border-b pb-2">1. Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" {...form.register("phone")} placeholder="(403) 555-0123" />
                  {form.formState.errors.phone && <p className="text-destructive text-sm">{form.formState.errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Service Address *</Label>
                  <Input id="address" {...form.register("address")} placeholder="123 Main St, Calgary, AB" />
                  {form.formState.errors.address && <p className="text-destructive text-sm">{form.formState.errors.address.message}</p>}
                </div>
              </div>
            </div>

            {/* Water Info */}
            <div>
              <h2 className="text-xl font-bold mb-4 font-serif border-b pb-2">2. Water Information</h2>
              
              <div className="space-y-4 mb-6">
                <Label className="text-base">What is your water source? *</Label>
                <Controller
                  name="waterSource"
                  control={form.control}
                  render={({ field }) => (
                    <RadioGroup 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <div className="flex items-center space-x-2 bg-muted/50 p-3 rounded-lg border border-border flex-1">
                        <RadioGroupItem value="municipal" id="municipal" />
                        <Label htmlFor="municipal" className="cursor-pointer flex-1">City / Municipal</Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-muted/50 p-3 rounded-lg border border-border flex-1">
                        <RadioGroupItem value="well" id="well" />
                        <Label htmlFor="well" className="cursor-pointer flex-1">Private Well</Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-muted/50 p-3 rounded-lg border border-border flex-1">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="cursor-pointer flex-1">Other / Don't Know</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
                {form.formState.errors.waterSource && <p className="text-destructive text-sm">{form.formState.errors.waterSource.message}</p>}
              </div>

              <div className="space-y-4">
                <Label className="text-base">What issues are you experiencing? (Check all that apply)</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WATER_ISSUES.map((issue) => (
                    <Controller
                      key={issue.id}
                      name="issues"
                      control={form.control}
                      render={({ field }) => (
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id={`issue-${issue.id}`}
                            checked={field.value.includes(issue.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, issue.id])
                                : field.onChange(field.value.filter((val) => val !== issue.id));
                            }}
                          />
                          <Label htmlFor={`issue-${issue.id}`} className="font-normal cursor-pointer">{issue.label}</Label>
                        </div>
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Services & Details */}
            <div>
              <h2 className="text-xl font-bold mb-4 font-serif border-b pb-2">3. Additional Details</h2>
              
              <div className="space-y-4 mb-6">
                <Label className="text-base">Products/Services you are interested in:</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((service) => (
                    <Controller
                      key={service.id}
                      name="services"
                      control={form.control}
                      render={({ field }) => (
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id={`service-${service.id}`}
                            checked={field.value.includes(service.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, service.id])
                                : field.onChange(field.value.filter((val) => val !== service.id));
                            }}
                          />
                          <Label htmlFor={`service-${service.id}`} className="font-normal cursor-pointer">{service.label}</Label>
                        </div>
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="preferredTime">Preferred Time for Contact</Label>
                <Controller
                  name="preferredTime"
                  control={form.control}
                  render={({ field }) => (
                    <RadioGroup 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="morning" id="morning" />
                        <Label htmlFor="morning" className="cursor-pointer font-normal">Morning</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="afternoon" id="afternoon" />
                        <Label htmlFor="afternoon" className="cursor-pointer font-normal">Afternoon</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="evening" id="evening" />
                        <Label htmlFor="evening" className="cursor-pointer font-normal">Evening</Label>
                      </div>
                    </RadioGroup>
                  )}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes or Questions</Label>
                <Textarea 
                  id="notes" 
                  {...form.register("notes")} 
                  placeholder="Tell us a bit more about what you're looking for..."
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full text-lg h-14" 
              disabled={requestQuote.isPending}
            >
              {requestQuote.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                "Request Free Quote"
              )}
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              By submitting this form, you agree to be contacted by Calgary Soft Water. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
