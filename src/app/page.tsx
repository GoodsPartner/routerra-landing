import { Faq } from './components/faq.component';
import { Footer } from './components/footer.component';
import { Header } from './components/header.component'
import { Hero } from './components/hero.component';
import { Steps } from './components/steps.component';
import { Testimonials } from './components/testimonials.component';
import { Demo } from './components/demo.component';
export default function Home() {
  return (
    <main className="min-h-screen">
      <div style={{ background: "linear-gradient(180deg, #f8fafc 0%, rgba(248, 250, 252, 0) 100%)" }}>
        <Header />
        <Hero />
      </div>
      <Steps />
      <Testimonials />
      <Demo />
      <Faq />
      <Footer />

    </main>
  );
}
