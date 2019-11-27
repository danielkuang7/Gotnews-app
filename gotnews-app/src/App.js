import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Contents from './components/Contents';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      news: []
    };
  };

render() {
  return (
    <div className="App">
    <Header />
    <Search submit={this.handleSubmit} />
    <Contents news={this.state.news}/>
    <Footer />
    </div>
  );
 }
}

export default App;
