import { BrowserRouter , Switch , Route } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
        <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Courses></Courses>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
