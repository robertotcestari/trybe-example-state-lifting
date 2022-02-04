import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/'>Jogo</Link>
          <Link to='/perfil'>Perfil</Link>
        </nav>
      </div>
    );
  }
}

export default Header;
