import Footer from './components/Pages/Footer/Footer.js';
import HeroSection from './components/Pages/HeroSection/HeroSection.js';
import Navbar from './components/Pages/Navbar/Navbar.js'
import ProductCarousel from './components/Pages/ProductCarousel/ProductCarousel.js';
import ProductView from './components/Pages/ProductView/ProductView.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <ProductView />
      <ProductCarousel />
      <Footer />
    </div>
  );
}

export default App;
