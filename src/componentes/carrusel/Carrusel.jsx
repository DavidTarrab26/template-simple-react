import React from 'react';
import Foto1 from './img/carrousel-1.jpg';
import Foto2 from './img/carrousel-2.jpg';
import Foto3 from './img/carrousel-3.jpg';

class Carrusel extends React.Component {

    render() { 
        return ( 
            <div>
               <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={Foto1} class="d-block w-100"></img>
                        </div>
                        <div class="carousel-item">
                        <img src={Foto2} class="d-block w-100"></img>
                        </div>
                        <div class="carousel-item">
                        <img src={Foto3} class="d-block w-100"></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> 
            </div>
         );
    }
}
 
export default Carrusel;