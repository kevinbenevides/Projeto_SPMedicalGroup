import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class HomePaciente extends Component{
    render(){
        return(
            <main>
                <div>
                    <nav>
                        <img src="#"/>
                        <ul className="">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/consultaspaciente">Consultas</Link></li>
                            <li><Link to="/login" style={{color:"red", textDecoration:"none"}}>Deslogar</Link></li>
                        </ul>
                    </nav>
                </div>
            </main>
        )
    }
}

export default HomePaciente