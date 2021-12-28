import React from 'react';
import './Carta.css'
import Maggie from './img/maggie.jpg';
import Homer from './img/homer.jpg';
import Bart from './img/bart.jpg';


class Carta extends React.Component {

    render() { 
        return ( 
            <div className='row container-fluid'>
                <div className='col-4 carta'>
                    <div class="card" style={{width: "18rem"}}>
                        <img src={Maggie} class="card-img-top"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Leer mas</a>
                        </div>
                    </div>
                </div>
                
                <div className='col-4 carta'>
                    <div class="card" style={{width: "18rem"}}>
                        <img src={Homer} class="card-img-top"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Leer mas</a>
                        </div>
                    </div>
                </div>

                <div className='col-4 carta'>
                    <div class="card" style={{width: "18rem"}}>
                        <img src={Bart} class="card-img-top"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-danger">Leer mas</a>
                        </div>
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default Carta;