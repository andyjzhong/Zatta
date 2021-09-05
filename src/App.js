import './App.css';
import Landing from './components/Landing'
import Navigation from './components/Navigation';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div class='bg-gray-50' >
      <Login/>
      <Navigation/>
     <Landing/>
     <Footer/>
    </div>
  );
}

export default App;
