import { SEO } from "@/components/seo";
import { useParams } from "wouter";

export default function BlogDetail() {
  const params = useParams();
  
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <SEO 
        title="Blog Post" 
        description="Water treatment blog post."
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6 text-center">Blog Post {params.id}</h1>
        <p className="text-center text-muted-foreground">Content coming soon.</p>
      </div>
    </div>
  );
}
