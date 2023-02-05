import React from 'react'
import { Home, TvSeries, Movies, MyList } from './pages';
import { Navbar, Sidebar } from './components'
import './App.css';

function App() {
  return (
    <div>
    <Navbar />
    <div className="container">
    
      <Sidebar />
     
      <div className="other">
  {/*<TvSeries /> */ }
  {/*<Movies /> */}
        <MyList />
        

         
      </div>
      
    </div>
    </div>
    
  );
}

export default App;
