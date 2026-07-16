import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;