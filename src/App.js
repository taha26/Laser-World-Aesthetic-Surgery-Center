import './App.css';

import { Appbar } from "./Components/Appbar/Appbar"
import { Header } from "./Components/Header/Header"
import { Slider } from './Components/Slider/Slider';
import { TwoPicDiv } from './Components/TwoPicDiv/TwoPicDiv';
import { AfterBeforeSlider } from './Components/AfterBeforeSlider/AfterBeforeSlider';
import { Why } from './Components/Why/Why';
import Footer from './Components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Appbar />
      <Header />
      <Slider />
      <TwoPicDiv />
      <AfterBeforeSlider />
      <Why />
      <Footer />
    </div>
  );
}

export default App;
