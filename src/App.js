import './App.css';

import { Appbar } from "./Components/Appbar/Appbar"
import { Header } from "./Components/Header/Header"
import { Home } from './Components/Home/Home';
import { Appointment } from './Components/Appointment/Appointment';
import { Contact } from './Components/Contact/Contact';
import { About } from './Components/About/About';
import { FUE } from './Components/Services/FUE';
import { PRP } from './Components/Services/PRP';
import { PRPHair } from './Components/Services/PRPHair';
import { Microneedling } from './Components/Services/Microneedling';
import { Hydrofacial } from './Components/Services/Hydrofacial';
import { Filler } from './Components/Services/Filler';
import { FaceScalp } from './Components/Services/FaceScalp';
import { Electro } from './Components/Services/Electro';
import { ChemicalPeels } from './Components/Services/ChemicalPeels';
import { Botox } from './Components/Services/Botox';
import { Acne } from './Components/Services/Acne';
import { Absorbtion } from './Components/Services/Absorbtion';
import { Whitening } from './Components/Services/Whitening';

import Footer from './Components/footer/Footer';


import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Router className="App">
      <Appbar />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Appointment' component={Appointment} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/About' component={About} />
        <Route exact path='/FUE' component={FUE} />
        <Route exact path='/PRP' component={PRP} />
        <Route exact path='/PRPHair' component={PRPHair} />
        <Route exact path='/Microneedling' component={Microneedling} />
        <Route exact path='/Hydrofacial' component={Hydrofacial} />
        <Route exact path='/Filler' component={Filler} />
        <Route exact path='/FaceScalp' component={FaceScalp} />
        <Route exact path='/Electro' component={Electro} />
        <Route exact path='/ChemicalPeels' component={ChemicalPeels} />
        <Route exact path='/Botox' component={Botox} />
        <Route exact path='/Acne' component={Acne} />
        <Route exact path='/Absorbtion' component={Absorbtion} />
        <Route exact path='/Whitening' component={Whitening} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
