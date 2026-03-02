import { useEffect } from "react";
import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import Skills from "./pages/Skills";
import Building from "./pages/Building";
import Particles from "./components/background/particles";
import "./App.css";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen text-white selection:bg-emerald-500/30 selection:text-emerald-500 relative bg-black">
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <Particles
            particleCount={300}
            particleSpread={15}
            speed={0.15}
            particleColors={['#10b981', '#ffffff', '#059669']}
            moveParticlesOnHover={true}
            particleHoverFactor={1.5}
            alphaParticles={true}
            particleBaseSize={120}
          />
        </div>
        <div className="relative z-10 w-full h-full">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Building />} />
              <Route path="/building" element={<Building />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/demo/:id" element={<Demo />} />
            </Routes>
          </main>

          <footer className="border-t border-white/5 bg-black/50 py-12 backdrop-blur-md">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm text-white/40 mb-2 font-bold tracking-[0.2em] uppercase">
                Portfolio still in building process
              </p>
              <p className="text-xs text-muted-foreground">
                © 2026 ujwal.<span className="text-[#ff2e63] uppercase">cook</span>.exe • Built with Passion and Caffeine
              </p>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
