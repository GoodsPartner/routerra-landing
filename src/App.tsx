import { Hero } from "@/components/hero.component.tsx";
import { Price } from "@/components/price.component.tsx";
import { WhyUs } from "@/components/why-us.component";
import { Benefits } from "@/components/benefits.component";
import { Features } from "./components/features.component";
import { CTA } from "./components/cta.component";

function App() {
  return (
    <div>
      
      <Hero />
      <Benefits />
      <Price />
      <Features />
      <WhyUs />
      <CTA />
    </div>
  );
}

export default App;
