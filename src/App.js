import './App.css';

import { Appbar } from "./Components/Appbar/Appbar"
import { Header } from "./Components/Header/Header"
import { Home } from './Components/Home/Home';
import { Appointment } from './Components/Appointment/Appointment';
import { Contact } from './Components/Contact/Contact';
import { About } from './Components/About/About';
import { FUE } from './Components/Services/FUE';
import { PRP } from './Components/Services/PRP';

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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
