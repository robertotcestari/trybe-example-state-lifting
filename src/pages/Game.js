import React, { Component } from 'react';
import zombieImg from '../assets/zombie.png'
import shotSound from '../assets/shot.mp3'

class Game extends Component {
  state = {
    killedCount: 0
  }

  audio = new Audio(shotSound)

  handleClick = () => {
    this.audio.pause()
    this.audio.currentTime = 0;
    this.setState((prev) => ({killedCount: prev.killedCount +1}))
    this.audio.play()
  }
  render() {
    return <div>
      
      <h1>Mate o Zumbi!</h1>
      <p>Clique para matar!</p>
      <img src={zombieImg} onClick={this.handleClick} alt="Zombie"/>
      <h2>Você já matou <span className='counter'>{this.state.killedCount}</span> Zumbis!</h2>
    </div>;
  }
}

export default Game;
