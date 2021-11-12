import './App.css';

import { Appbar } from "./Components/Appbar/Appbar"
import { Header } from "./Components/Header/Header"
import { Slider } from './Components/Slider/Slider';


function App() {
  return (
    <div className="App">
      <Appbar />
      <Header />
      <Slider />
    </div>
  );
}

export default App;
