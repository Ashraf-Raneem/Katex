import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import About from "../sections/about/About";
import Account from "../sections/account/Account";
import Advert from "../sections/advert/Advert";
import Hero from "../sections/hero/Hero";
import QuickStart from "../sections/quick-start/QuickStart";
import WalletPage from "../sections/wallets/WalletPage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WalletPage />
      <QuickStart />
      <Advert />
      <Account />
      <Footer />
    </div>
  );
};

export default Home;
