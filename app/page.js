import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import MemoryLane  from './components/MemoryLane';
import StatsStrip  from './components/StatsStrip';
import About       from './components/About';
import Vibes       from './components/Vibes';
import MemeCreator from './components/MemeCreator';
import Community   from './components/Community';
import Disclaimer  from './components/Disclaimer';
import Footer      from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MemoryLane />
        <StatsStrip />
        <About />
        <Vibes />
        <MemeCreator />
        <Community />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}
