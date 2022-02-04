import React, { Component } from 'react';

class Profile extends Component {
  state = {
    profileName: ''
  }
  render() {
    return <div><h1>Esse é o perfil de <br /> {this.state.profileName}</h1>
    
    <label htmlFor="name">
      Seu nome: 
      <input type="text" onChange={(e) => this.setState({profileName: e.target.value})} value={this.state.name} />
    </label>
    
    
    </div>;
  }
}

export default Profile;
