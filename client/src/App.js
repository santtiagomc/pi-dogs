import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Detail from './components/Detail';
import CreateDog from './components/CreateDog';
import About from './components/CreateDog'
import Favorites from './components/Favorites';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
     <Switch>
       <Route exact path = "/" component = {LandingPage}/>
       <Route exact path = '/dogs' component = {Home}/>
       <Route path = '/dogs/create' component={CreateDog}/>
       <Route path = '/dogs/:id' component={Detail}/>
       <Route path = '/about' component = {About}/>
       <Route path = '/favorites' component ={Favorites}/>
       </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;