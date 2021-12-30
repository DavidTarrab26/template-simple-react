import './contacto.css'
const Contacto = () => {
    return ( 
        <div className="fondo2 container-fluid">
                <div className="contenedor shadow">
                    <div className="mb-3 form">
                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3 form">
                        <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <button type="button" className="btn btn-outline-danger btn1">ENVIAR</button>
            </div>
            
            
        </div>
     );
}
 
export default Contacto;