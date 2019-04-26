import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class HomeMedico extends Component{
    render(){
        return(
            <main>
                <div>
                    <nav>
                        <img/>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/consultasmedico">Consultas</Link></li>
                            <li><Link to="/login" style={{color:"red", textDecoration:"none"}}>Deslogar</Link></li>
                        </ul>
                    </nav>
                </div>
            </main>
        )
    }
}

export default HomeMedico;