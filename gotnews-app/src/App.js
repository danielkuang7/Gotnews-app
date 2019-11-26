import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Contents from './components/Contents';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Search submit={this.handleSubmit} />
    <Contents news={this.state.news}/>
    <Footer />
    </div>
  );
}

export default App;
