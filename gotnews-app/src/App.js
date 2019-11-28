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

  getApi(userInput){
    let endpoint = `https://newsapi.org/v2/everything?q=${userInput}&apiKey=68ffa4b23c77482d84a39a32d65858dd`
    fetch(endpoint)
    .then(response => response.json())
    .then(jsonData =>{
      this.setState({news: jsonData.articles})
    });
  };

  handleSubmit(userInput){
    this.getApi(userInput)
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
