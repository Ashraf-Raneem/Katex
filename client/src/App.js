import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar/Navbar2";
import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";

const App = () => {
  return (
    <div className="App">
      <Navbar2 />
      <Hero />
      <About />
    </div>
  );
};

export default App;
