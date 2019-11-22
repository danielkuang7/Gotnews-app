import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
    <Header />
    <Search submit={this.handleSubmit} />
    </div>
  );
}

export default App;
