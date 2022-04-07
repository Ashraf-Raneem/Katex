import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar/Navbar2";
import About from "./sections/about/About";
import Account from "./sections/account/Account";
import Advert from "./sections/advert/Advert";
import Hero from "./sections/hero/Hero";
import QuickStart from "./sections/quick-start/QuickStart";
import WalletPage from "./sections/wallets/WalletPage";

const App = () => {
  return (
    <div className="App">
      <Navbar2 />
      <Hero />
      <About />
      <WalletPage />
      <QuickStart />
      <Advert />
      <Account />
    </div>
  );
};

export default App;
