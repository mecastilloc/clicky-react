import React, { Component } from 'react';
import Card from './components/Card';
import data from './data.json';





class App extends Component {
  state = {
      cards: data,
      
  }
 

 

  renderCards = (array) => {
    return this.state.cards.map(card => (
      <section className='col s4 m3 l3' key={card.id} id={card.id}>
        <Card
          name={card.name} 
          image={card.image} 
          reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
          clickedCharacter={() => {this.clickedCharacter(card.id)}}/>
      </section>
      )
    )
  }


  render() {
    return (
      <div className="container-fluid">
       
        <div className="container row cardWrapper">
          {this.renderCards(this.state.cards)}
        </div>
      
      </div>
    );
  }
}





export default App;
