import './App.css';

import { Appbar } from "./Components/Appbar/Appbar"
import { Header } from "./Components/Header/Header"
import { Slider } from './Components/Slider/Slider';
import { TwoPicDiv } from './Components/TwoPicDiv/TwoPicDiv';
import Footer from './Components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Appbar />
      <Header />
      <Slider />
      <TwoPicDiv />
      <Footer />
    </div>
  );
}

export default App;
