import './App.css';
import Landing from './components/Landing'
import { Route , Switch } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div class='bg-gray-50' >
      
      
    <Switch>
    <Route exact path="/Login" component ={Login}/>
    
    <Landing/>
    
    </Switch>
      <Route  exact path = '/dashboard'
              component = { Dashboard } />
    </div>
  );
}

export default App;
