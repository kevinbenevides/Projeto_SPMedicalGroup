import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <main>
        <div>
          <nav>
            <img src="#"/>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
          <div>

          </div>
        </div>
      </main>
    );
  }
}

export default App;
