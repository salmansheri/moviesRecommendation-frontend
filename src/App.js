import React from 'react'
// import { Home } from './pages';
import { Navbar, Sidebar } from './components'
import './App.css';

function App() {
  return (
    <div>
    <Navbar />
    <div className="container">
    
      <Sidebar />
     
      <div className="other">
        Other
      </div>
      
    </div>
    </div>
    
  );
}

export default App;
