import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
