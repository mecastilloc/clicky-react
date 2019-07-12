import React, { Component } from 'react';
import data from './data.json';
import Card from './components/Card';
import Inst from './components/Inst';
import Header from './components/Header';


class App extends Component {
  state = {
    cards: data,
    selectedTeams: [],
    uScore: 0,
    maxScore: 0,
    messageText: "Memory Game",
    class: "start"
  }


  // Randomize array function from 'Fisher-Yates Shuffle'
  randomCards = (array) => {
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

    this.setState({ cards: data });
  }

  renderCards = () => {
    return this.state.cards.map(card => (
      <section className='col s4 m3 l3' key={card.id} id={card.id}>
        <Card
          name={card.name}
          image={card.image}
          randomize={() => { this.randomCards(this.state.cards) }}
          selectedCard={() => { this.selected(card.id) }} />
      </section>
    )
    )
  }


  selected = (id) => {
    const [selector] = document.getElementsByTagName('body');

    if (this.state.selectedTeams.includes(id)) {
      this.setState({ uScore: 0, selectedTeams: [] })

      selector.classList.add('shakeWrapper')
      this.setState({ messageText: 'WRONG! Try Again', class: 'loose' })
      setTimeout(() => {
        selector.classList.remove('shakeWrapper');
      }, 500);
      setTimeout(() => {
        this.setState({ messageText: "Memory Game", class: 'start' })
      }, 2500)

    } else {
      this.setState({ selectedTeams: [...this.state.selectedTeams, id] })
      this.setState({ uScore: this.state.uScore + 1 })
      if (this.state.uScore >= this.state.maxScore) {
        this.setState({ maxScore: this.state.uScore + 1 })

      }
      if (this.state.uScore === 11) {
        this.setState({ messageText: 'You Won!!!', class: 'win' })

        setTimeout(() => {
          this.setState({ messageText: 'Memory Game', class: 'start' })
          this.setState({ uScore: 0, selectedTeams: [], cards: data })
        }, 2500)
      }
    }
  }


  render() {
    return (

      <div className="container-fluid">
        <Inst />
        <Header 
        class={this.state.class} 
        message={this.state.messageText} 
        uScore={this.state.uScore} 
        maxScore={this.state.maxScore} />
        
        <div className="container row cardWrapper">
          {this.renderCards(this.state.cards)}
        </div>

      </div>
    );
  }

}


export default App;
