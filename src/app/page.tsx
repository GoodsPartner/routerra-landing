import { Header } from './components/header.component'
import { Hero } from './components/hero.component';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div style={{ background: "linear-gradient(180deg, #f8fafc 0%, rgba(248, 250, 252, 0) 100%)" }}>
        <Header />
        <Hero />
      </div>
    </main>
  );
}
