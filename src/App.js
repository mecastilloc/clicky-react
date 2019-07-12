import React, { Component } from 'react';
import data from './data.json';
import Card from './components/Card';
import Inst from './components/Inst';
import Navbar from './components/Navbar';
import Message from './components/Message';






class App extends Component {
  state = {
      cards: data,
      score: 0,
      topScore: 0,
      clickedCards: [],
      messageText: "Mey Game",
      color: "orangered",
      bg: "black"
  }
 

  // Randomize array function from 'Fisher-Yates Shuffle'
  reArrangeCards = (array) => {
    let currentIndex = array.length;

    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({cards:data});
  }

  renderCards = (array) => {
    return this.state.cards.map(card => (
      <section className='col s4 m3 l3' key={card.id} id={card.id}>
        <Card
          name={card.name} 
          image={card.image} 
          reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
          clickedCharacter={() => {this.clickedCard(card.id)}}/>
      </section>
      )
    )
  }


  render() {
    return (
      
      <div className="container-fluid">
        <Navbar message= {this.state.messageText} score={this.state.score} topScore={this.state.topScore}/>
       <Inst />
        <div className="container row cardWrapper">
          {this.renderCards(this.state.cards)}
        </div>
        <Message text={this.state.footerText}/>
      </div>
    );
  }
  clickedCard = (id) => {
    const [pageBody] = document.getElementsByTagName('body');

    if (this.state.clickedCards.includes(id)) {
      this.setState({score: 0, clickedCards: []})

      pageBody.classList.add('shakeWrapper')
      this.setState({footerText: 'You picked that already! Start Over.'})
      setTimeout(() => {
        pageBody.classList.remove('shakeWrapper');
      }, 500);
      setTimeout(() => {
        this.setState({footerText: ""})
      }, 1800)

    } else {
      this.setState({clickedCards: [...this.state.clickedCards, id]})
      this.setState({score: this.state.score + 1})
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})

      } 
      if (this.state.score === 11) {
        this.setState({footerText: 'You Won! Play again?'})
        this.setState({score: 0, clickedCards: [], cards: data})
        setTimeout(() => {
          this.setState({footerText: ''})
        }, 1800)
      } 
    }
  }
}





export default App;
