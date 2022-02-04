import React, { Component } from 'react';

class Profile extends Component {
  state = {
    name: ''
  }
  render() {
    return <div><h1>Esse é o perfil de {this.state.name}</h1>
    
    <label htmlFor="name">
      Seu nome: 
      <input type="text" onChange={(e) => this.setState({name: e.target.value})} value={this.state.name} />
    </label>
    
    
    </div>;
  }
}

export default Profile;
