import './App.css';
import Landing from './components/Landing'
import { Route , Switch } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import MainApp from './components/mainApp';


function App() {
  return (
    <div class='bg-gray-50' >
      
      
    <Switch>
    <Route exact path="/Login" component ={Login}/>
    
    <Landing/>
    
    </Switch>
      <Route  exact path = '/dashboard'
              component = { Dashboard } />

      <MainApp />
    </div>
  );
}

export default App;
