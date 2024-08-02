import {Header} from "@/components/header.component.tsx";
import {Hero} from "@/components/hero.component.tsx";
import {Benefits} from "@/components/benefits.component"
import { Features } from "./components/features.component";
import { CTA } from "./components/cta.component";


function App() {

  return (
    <div className={''}>
        <Header/>
        <Hero/>
        <Benefits />
        <Features />
        <CTA />
    </div>
  )
}

export default App
