import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingCallButton } from "@/components/ui/floating-call";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Quote from "@/pages/quote";
import Contact from "@/pages/contact";
import About from "@/pages/about";
import WellWaterSystems from "@/pages/well-water-systems";
import WaterSofteners from "@/pages/water-softeners";
import WaterFiltration from "@/pages/water-filtration";
import ReverseOsmosis from "@/pages/reverse-osmosis";
import UvPurification from "@/pages/uv-purification";
import BlogList from "@/pages/blog/index";
import BlogDetail from "@/pages/blog/detail";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/quote" component={Quote} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/well-water-systems" component={WellWaterSystems} />
          <Route path="/water-softeners" component={WaterSofteners} />
          <Route path="/water-filtration" component={WaterFiltration} />
          <Route path="/reverse-osmosis" component={ReverseOsmosis} />
          <Route path="/uv-purification" component={UvPurification} />
          <Route path="/blog" component={BlogList} />
          <Route path="/blog/:id" component={BlogDetail} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
