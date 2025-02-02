import React from 'react';
import { Link } from 'react-router-dom';
import Foto from './img/header-simpsons.gif';

class Navbar extends React.Component {

    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <img src={Foto} />
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="template-simple-react/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="template-simple-react/Blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="template-simple-react/Contacto">Contacto</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                            <button className="btn btn-outline-danger" type="submit">Busqueda</button>
                        </form>
                        </div>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default Navbar;