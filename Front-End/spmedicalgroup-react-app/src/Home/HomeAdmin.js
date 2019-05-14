import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import logo from '../assets/img/icon-login.png'
import background from '../assets/img/background.jpg'
class HomeAdmin extends Component {
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
                                <li className="header__list-item" style={{borderLeft: "none"}}><Link to="/homeadmin">Home</Link></li>
                                <li className="header__list-item"><Link to="/consultasadmin">Consultas</Link></li>
                                <li className="header__list-item"><Link to="/usuarios">Usuarios</Link></li>
                                <li className="header__list-item"><Link to="/medicos">Medicos</Link></li>
                                <li className="header__list-item"><Link to="/login" style={{ color: "red", textDecoration: "none" }}>Deslogar</Link></li>
                            </ul>
                        </nav>
                    </div>

                </header>
                <main>
                    {/* Section com imagem de fundo */}
                    <section className="main__section">
                        <div className="main__section-item">
                        <img  src={logo}/>
                        <h2>Sp Medical Group</h2>
                        <p>Sempre cuidando de você...</p>
                        </div>
                    </section>

                </main>
            </div>
        )
    }
}

export default HomeAdmin