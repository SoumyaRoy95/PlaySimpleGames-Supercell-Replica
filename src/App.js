import React from 'react'
import './App.css';
import Dashboard from './Pages/dashboard'
import Footer from './Fragments/Footer/footer'

const App = () => {
  return (
    <div className="page-container">
      <div className='content-wrap'>
        <Dashboard/>

      </div>
      
      <Footer />
    </div>
  );
}

export default App;
