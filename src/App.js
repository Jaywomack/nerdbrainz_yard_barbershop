import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Barbers from "./components/Barbers";

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Barbers />

      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
