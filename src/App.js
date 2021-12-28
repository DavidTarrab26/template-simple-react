import Carrusel from './componentes/carrusel/Carrusel';
import Navbar from './componentes/Navbar/Navbar';
import Carta from './componentes/cards/Carta';
import Footer from './componentes/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Carrusel />
      <div className='centro'>
        <Carta />
      </div>
      <Footer />
    </div>
  );
}

export default App;
