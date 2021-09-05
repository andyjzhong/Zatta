import './App.css';
import Landing from './components/Landing'
import { Route , Switch } from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <div class='bg-gray-50' >
      
      
    <Switch>
    <Route exact path="/Login" component ={Login}/>
    
    
   
    
    <Landing/>
    
    </Switch>
    
    
     
    </div>
  );
}

export default App;
