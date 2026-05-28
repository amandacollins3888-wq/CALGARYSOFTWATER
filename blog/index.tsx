import { SEO } from "@/components/seo";

export default function BlogList() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO 
        title="Water Quality Blog" 
        description="Read the latest tips, guides, and articles about water treatment, well water, and home water systems in Calgary."
      />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 text-center">Water Quality Blog</h1>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Tips, guides, and news from our water treatment experts.
        </p>
        <p className="text-center text-muted-foreground">Content coming soon.</p>
      </div>
    </div>
  );
}
