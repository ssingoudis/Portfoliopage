//import styles
import './App.css';

//import components
import Mainpage from './pages/mainpage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import { Routes, Route } from 'react-router-dom';


function App() {

  //remove the '#' from the url on anchor tags
  const removeHashFromUrl = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  return (
    <div className="App">
      <Navbar removeHashFromUrl={removeHashFromUrl}/>
      <Mainpage removeHashFromUrl={removeHashFromUrl}/>
      <Footer removeHashFromUrl={removeHashFromUrl}/>
    </div>
  );
}

export default App;