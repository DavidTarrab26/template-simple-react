import './blog.css'
import Foto1 from './img/nocheDeBrujas.jpg'
import Foto2 from './img/educacion.jpg'

const Blog = () => {
    return ( 
        <div className="fondo d-flex align-items-center container-fluid">
            <div className='adentro container'>
                <h2>Episodio "Especial de Noche de Brujas VII", Octubre 27, 1996.</h2>
                <img src={Foto1} className='img' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium omnis labore iste numquam quisquam perferendis repellat. Quidem vitae natus praesentium quae, aut illum enim perspiciatis laborum quam iure reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate iure quidem quos ipsa et dicta expedita, sapiente quis ut dolorem aut alias illo reiciendis deleniti voluptatibus! Enim, sit explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum necessitatibus assumenda aperiam sunt perspiciatis obcaecati, eligendi deleniti atque odio molestias dolorem sit labore eius nam, amet exercitationem nesciunt fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores laboriosam, at omnis repellendus eius illum dicta beatae autem consectetur quae sed nemo sunt corporis hic voluptas! Saepe, molestias velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quod ex eius. Quibusdam distinctio nulla perferendis non illo, eius deleniti nihil. Maiores deserunt molestiae consequatur iste non quia voluptatibus. Dolore?</p>
                <h2>Episodio "Lucha educativa", Abril 16, 1995.</h2>
                <img src={Foto2} className='img' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium omnis labore iste numquam quisquam perferendis repellat. Quidem vitae natus praesentium quae, aut illum enim perspiciatis laborum quam iure reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptate iure quidem quos ipsa et dicta expedita, sapiente quis ut dolorem aut alias illo reiciendis deleniti voluptatibus! Enim, sit explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum necessitatibus assumenda aperiam sunt perspiciatis obcaecati, eligendi deleniti atque odio molestias dolorem sit labore eius nam, amet exercitationem nesciunt fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maiores laboriosam, at omnis repellendus eius illum dicta beatae autem consectetur quae sed nemo sunt corporis hic voluptas! Saepe, molestias velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quod ex eius. Quibusdam distinctio nulla perferendis non illo, eius deleniti nihil. Maiores deserunt molestiae consequatur iste non quia voluptatibus. Dolore?</p>
            </div>
        </div>
      );
}
 
export default Blog;