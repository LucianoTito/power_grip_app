// CINTA DE TELA
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './styles/CarouselProducts.css';

const CarouselProduct3 = ({ images, productName }) => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    if (listNode) {
      listNode.style.transform = `translateX(-${currentIndex * 100}%)`; // Desplazamiento
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex(curr => (curr === 0 ? 0 : curr - 1));
    } else {
      setCurrentIndex(curr => (curr === images.length - 1 ? curr : curr + 1));
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Función para abrir WhatsApp con un mensaje que incluye el nombre del producto
  const handleContact = () => {
    const phoneNumber = "5493874527977"; 
    const message = `Hola, estoy interesado en el producto: ${productName}.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="slider-container">
       <div className='arrow-container'>
       <div className="leftArrow" onClick={() => scrollToImage('prev')}>
        &#10092;
        </div>
        <div className="rightArrow" onClick={() => scrollToImage('next')}>
        &#10093;
        </div>

      </div>
      
      <div className="container-images">
        <ul ref={listRef}>
          {images.map((item) => (
            <li key={item.id}>
              <img src={item.imgUrl}/>
            </li>
          ))}
        </ul>
      </div>
      <div className="dots-container">
        {images.map((_, idx) => (
          <div key={idx}
            className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(idx)}>
            &#9865;
          </div>
        ))}
      </div>
      <p>Es talle único.

Las muñequeras de tela son perfectas para entrenamientos funcionales variados, ya que con un simple giro/ajuste logras mayor/menor compresión según el ejercicio que realices.

Detalles:
-60cm de largo
-8cm de ancho. Con dedal elástico para una mejor colocación y ajuste.
La muñequera es de tela militar, un tejido antidesgarro debido a que incorpora en su entramado hilos de nylon. Se utiliza para fabricar ropa de faena militar y equipamiento que requiera gran durabilidad. Por eso la calidad es PREMIUM.</p>
          <p><strong>Precio: $8.000</strong></p>
          {/* Botón de contacto */}
      <button className="contact-button" onClick={handleContact}>
        Contactar al vendedor
      </button>
    </div>
  );
};

CarouselProduct3.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired
  })).isRequired,
  productName: PropTypes.string.isRequired,
};

export default CarouselProduct3;

