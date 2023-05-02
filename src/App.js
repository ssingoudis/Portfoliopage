import React from 'react';

//import styles
import './App.css';

//import components
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import FlashNotice from './components/flash-notice/flash-notice';
import BasicAlerts from './components/alerts/alerts';


function App() {

  return (
    <div className="App">

    <Navbar />
    <Home />

    <Contact />
    {/* <FlashNotice /> */}
    {/* <BasicAlerts /> */}
    <Footer />

    </div>
  );
}

export default App;