import React from 'react';
import Foto1 from './img/carrousel-1.jpg';
import Foto2 from './img/carrousel-2.jpg';
import Foto3 from './img/carrousel-3.jpg';

class Carrusel extends React.Component {

    render() { 
        return ( 
            <div>
               <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={Foto1} class="d-block w-100"></img>
                        </div>
                        <div className="carousel-item">
                        <img src={Foto2} className="d-block w-100"></img>
                        </div>
                        <div className="carousel-item">
                        <img src={Foto3} className="d-block w-100"></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> 
            </div>
         );
    }
}
 
export default Carrusel;