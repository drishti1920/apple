import HeroSection from './components/Pages/HeroSection/HeroSection.js';
import Navbar from './components/Pages/Navbar/Navbar.js'
import ProductView from './components/Pages/ProductView/ProductView.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <ProductView />
    </div>
  );
}

export default App;
