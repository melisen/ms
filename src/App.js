
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Productos from './Components/Productos/Productos';
import Servicios from './Components/Servicios/Servicios';
import Contacto from './Components/Contacto/Contacto';
import ServDetailContainer from './Components/Servicios/ServDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProdDetailContainer from './Components/Productos/ProdDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <>
    
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/Productos' element={<Productos />} />
        <Route path='/category/Servicios' element={<Servicios />} />
        <Route path='/category/Contacto' element={<Contacto />} />
        <Route path='/serv/:ServId' element={<ServDetailContainer />} />
        <Route path='/prod/:ProdId' element={<ProdDetailContainer />} />
      </Routes>

      <Footer />
      
    </>
    </BrowserRouter>
  );
}

export default App;
