import React from 'react';
import './App.css';
import Visualizer from './components/Visualizer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Algorithm Visualizer</h1>
      </header>
      <main>
        <Visualizer />
      </main>
    </div>
  );
}

export default App;