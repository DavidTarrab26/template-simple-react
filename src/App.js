import Navbar from './componentes/Navbar/Navbar';
import Footer from './componentes/footer/Footer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Blog from './componentes/blog/Blog';
import Contacto from './componentes/contacto/Contacto';
import Inicio from './componentes/inicio/Inicio';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/Inicio" element={<Inicio />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
