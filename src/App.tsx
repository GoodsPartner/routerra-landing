import {Header} from "@/components/header.component.tsx";
import {Hero} from "@/components/hero.component.tsx";
import {Price} from "@/components/price.component.tsx";
import {WhyUs} from "@/components/why-us.component";


function App() {

  return (
    <div className={'p-4 max-w-screen-xl mx-auto'}>
        <Header/>
        <Hero/>
        <Price/>
        <WhyUs/>
    </div>
  )
}

export default App
