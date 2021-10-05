import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import { useEffect , useState } from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Teachers from './components/Teachers/Teachers';

function App() {
  const [services , setServices] = useState([])
  useEffect(()=>{
      fetch('./servicesData.json').then(res=> res.json()).then(data => setServices(data))
  } ,[])
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/home">
            <Home services={services}></Home>
          </Route>
          <Route exact path="/">
            <Home services={services}></Home>
          </Route>
          <Route exact path="/services">
            <Services services={services}></Services>
          </Route>
          <Route exact path="/teachers">
            <Teachers services={services}></Teachers>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
