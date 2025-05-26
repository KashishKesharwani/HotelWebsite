
import './App.css';
import About from './Components/Aboutus';
import Facility from './Components/Facility';
import Footer from './Components/Footer';
import Homepage from './Components/Home';
import Hotel from './Components/HotelSection';
import Navbar from './Components/Navbar';
import Package from './Components/package';

function App() {
  return (
   <>
   <Navbar/>
   <Homepage/>
   <Hotel/>
   <Package/>
   <Facility/>
   <About/>
   <Footer/>
   </>
  );
}

export default App;
