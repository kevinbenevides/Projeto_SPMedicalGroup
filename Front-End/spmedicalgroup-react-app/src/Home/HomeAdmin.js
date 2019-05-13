import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import login from '../assets/img/icon-login.png'
import background from '../assets/img/background.jpg'
class HomeAdmin extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className=" flexbox wrapper">
                        <div className="header__image">
                            <img src={login} alt="Logo do WeWish!" />
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
                    <section className="main__section" style={{}}>
                        {/*<img className="main__section-item" src={background}/> */}
                        <div className="main__section-item">
                        </div>
                    </section>

                </main>
            </div>
        )
    }
}

export default HomeAdmin