import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import "../assets/css/navbar.css"
import logo from '../assets/img/icon-login.png'
class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className=" flexbox wrapper">
            <div className="header__image">
              <img src={logo} alt="Logo do SpMedicalGroup!" />
            </div>
            <nav className="header__navbar">
              <ul className="header__list">
                <li className="header__list-item" style={{ borderLeft: "none" }}><Link to="/homeadmin">Home</Link></li>
                <li className="header__list-item"><Link to="/login" style={{ color: "blue", textDecoration: "none" }}>Login</Link></li>
              </ul>
            </nav>
          </div>

        </header>
        <main>
          {/* Section com imagem de fundo */}
          <section className="main__section">
            <div className="main__section-item">
              <img src={logo} />
              <h2>Sp Medical Group</h2>
              <p>Sempre cuidando de você...</p>
            </div>
          </section>

        </main>
      </div>
    );
  }
}

export default App;
