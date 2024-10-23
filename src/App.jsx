// src/App.jsx
import './App.css';
import CarouselProduct1 from './components/CarouselProduct1';
import CarouselProduct2 from './components/CarouselProduct2';
import CarouselProduct3 from './components/CarouselProduct3';
import CarouselProduct4 from './components/CarouselProduct4';
import CarouselProduct5 from './components/CarouselProduct5';
import CarouselProduct6 from './components/CarouselProduct6';
import CarouselProduct7 from './components/CarouselProduct7';
import { data } from './assets/data';
import { FaInstagram } from 'react-icons/fa'; // Importa el ícono de Instagram

function App() {
  return (
    <>
      <div className='App'>
        <div className="card">
          <h2>Callera Cobra Pro</h2>
          <CarouselProduct1 images={data[0].images} productName="Callera Cobra Pro" />
        </div>

        <div className="card">
          <h2>Callera Black Shield</h2>
          <CarouselProduct2 images={data[1].images} productName="Callera Black Shield" />
        </div>

        <div className="card">
          <h2>Cinta de Tela</h2>
          <CarouselProduct3 images={data[2].images} productName="Cinta de Tela" />
        </div>

        <div className="card">
          <h2>Cinturón lumbar</h2>
          <CarouselProduct4 images={data[3].images} productName="Cinturón lumbar" />
        </div>

        <div className="card">
          <h2>Muñequera de Toalla</h2>
          <CarouselProduct5 images={data[4].images} productName="Muñequera de Toalla" />
        </div>

        <div className="card">
          <h2>Rodilleras</h2>
          <CarouselProduct6 images={data[5].images} productName="Rodilleras" />
        </div>

        <div className="card">
          <h2>Muñequera elástica</h2>
          <CarouselProduct7 images={data[6].images} productName="Muñequera elástica" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Tienda de Luciano Tito</p>
        <a href="https://www.instagram.com/_lucianotice/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={25} />
        </a>
      </footer>
    </>
  );
}

export default App;
