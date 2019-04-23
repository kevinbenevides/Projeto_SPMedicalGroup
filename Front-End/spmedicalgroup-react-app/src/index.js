import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './Home/App';
import Login from './Login/Login'
import HomeAdmin from './Home/HomeAdmin'
import ConsultasAdmin from './Consultas/ConsultasAdmin'
import ConsultasMedico from './Consultas/ConsultasMedico'
import ConsultasPaciente from './Consultas/ConsultasPaciente'
import { UsuarioAutenticado } from './services/auth'
import * as serviceWorker from './serviceWorker';
import {parseJwt} from './services/auth';

const PermissaoAdmin = ({ component: Component }) => (
    <Route
      render = { props => UsuarioAutenticado() && parseJwt().Role == "Administrador" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );

  const PermissaoComum = ({ component: Component }) => (
    <Route
      render={props =>
        UsuarioAutenticado() && parseJwt().Role == "Paciente" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );

    
  const PermissaoMedico = ({ component: Component }) => (
    <Route
      render={props =>
        UsuarioAutenticado() && parseJwt().Role == "Medico" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );

const routing = (
    <Router>
    <div>
        <Switch>
            <Route exact path ="/" component={App}/>
            <Route path="/login" component={Login}/>
            <PermissaoAdmin path="/consultasadmin" component={ConsultasAdmin}/>
            <PermissaoComum path="/consultaspaciente" component={ConsultasPaciente}/>
            <PermissaoMedico path="/consultasmedico" component={ConsultasMedico}/>
            <PermissaoAdmin path="/homeadmin" component={HomeAdmin}/>
        </Switch>
    </div>
</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
