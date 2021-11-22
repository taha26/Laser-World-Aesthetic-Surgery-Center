import './App.css';

import { Appbar } from "./Components/Appbar/Appbar"
import { Header } from "./Components/Header/Header"
import { Home } from './Components/Home/Home';
import { Appointment } from './Components/Appointment/Appointment';
import { Contact } from './Components/Contact/Contact';
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
