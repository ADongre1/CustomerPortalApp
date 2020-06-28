import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Main from './components/Main/Main'

function App() {
  return (
    
    <div className="App">
      <header>
      <HeaderBar/>
      </header>
      <main id="main">
        <Main/>
      </main>
      <footer>
        Sample Footer Bar
      </footer>
      
    </div>
  );
}

export default App;
