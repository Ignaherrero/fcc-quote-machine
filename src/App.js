import React from 'react';
import './App.css';
import Display from './Components/Display';
let Color = ['#e09d2e', '#159076', '#471332', '#e14f3c', '#da61c2', '#4a1560', '#9640cc', '#ad49fd', '#9640cc', '#ad49fd', '#4f57e3', '#5319b7', '#257ace', '#e76144', '#487d00', '#cb035f', '#7e0fca', '#a2620b', '#131847', '#754582', '#a71277', '#35573f', '#171b0c', '#93506c', '#1a0e69', '#3e3854', '#6b2fed', '#ff0000', '#000000', '#0000ff', '#008000', '#808080'];
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [],
      newQuote: '',
      newAuthor: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.getQuotes = this.getQuotes.bind(this);
  }

  componentDidMount() {
    this.getQuotes()
  }
  getQuotes() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then((response) => {
        if (response.status === 200) {
          console.log('Success')
          return response.json()
        } else {
          console.log('Network response was not ok', response.status)
          return
        }
      })
      .then((data) => {
        let randomQuoteIndex = Math.floor(Math.random() * (data.quotes.length - 1 + 1)) + 1;
        this.setState({
          quotes: data.quotes,
          newQuote: data.quotes[randomQuoteIndex].quote,
          newAuthor: data.quotes[randomQuoteIndex].author,
        });
      })
      .catch(error => console.log('error:', error));
    this.changeColor()
  }
  handleClick() {
    let randomQuoteIndex = Math.floor(Math.random() * (this.state.quotes.length - 1 + 1)) + 1;
    let quotes = this.state.quotes;
    let author = '';
    let quote = '';
    quotes.forEach(function (element, random) {
      if (random === randomQuoteIndex) {
        author = element.author
        quote = element.quote
      }
    });
    this.setState({
      newAuthor: author,
      newQuote: quote
    });
    this.changeColor()
  }
  changeColor() {
    let randomColorIndex = Math.floor(Math.random() * (Color.length - 1 + 1)) + 1
    document.body.style.backgroundColor = Color[randomColorIndex]
    document.getElementById('text').style.color = Color[randomColorIndex]
    document.getElementById('author').style.color = Color[randomColorIndex]
    document.getElementById('tweet-quote').style.color = Color[randomColorIndex]
    document.getElementById('new-quote').style.color = Color[randomColorIndex]
    document.body.style.backgroundColor = Color[randomColorIndex]
    document.body.style.transition = "2s"
  }

  render() {
    return (
      <div id="container">
        <h1>Random Quote Machine</h1>
        <div id="quote-box">
          <Display state={this.state} onClick={this.onClick} />
          <button id="new-quote" onClick={this.handleClick}><i className="fas fa-paper-plane"></i> New Quote</button>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.newQuote + " -" + this.state.newAuthor}`} ><i className="fab fa-twitter"></i></a>
        </div >
      </div >
    );
  }
}

export default App