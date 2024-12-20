//RODILLERA
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './styles/CarouselProducts.css';

const CarouselProduct6 = ({ images, productName }) => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    if (listNode) {
      listNode.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((curr) => (curr === 0 ? 0 : curr - 1));
    } else {
      setCurrentIndex((curr) => (curr === images.length - 1 ? curr : curr + 1));
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Función para abrir WhatsApp con un mensaje que incluye el nombre del producto
  const handleContact = () => {
    const phoneNumber = "5493874527977"; // Reemplaza con tu número
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
              <img src={item.imgUrl} alt={`Image ${item.id}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className="dots-container">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`dot-container-item ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          >
            &#9865;
          </div>
        ))}
      </div>
      <p>CALIDAD PREMIUM.
                Rodilleras de 5mm reforzadas con 4 costuras y diseño de 4 piezas para lograr la mejor ergonomia y ajuste a la rodilla.
                Material: Nepreno.</p>
          <p><strong>Precio: $48.000</strong> </p>
      {/* Botón de contacto */}
      <button className="contact-button" onClick={handleContact}>
        Contactar al vendedor
      </button>
    </div>
  );
};

CarouselProduct6.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  productName: PropTypes.string.isRequired,
};

export default CarouselProduct6;