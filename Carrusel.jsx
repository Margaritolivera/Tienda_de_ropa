import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../img/img1.jpg';
import img6 from '../../img/img12.jpg';
import img2 from '../../img/img4.jpg';
import img3 from '../../img/img5.jpg';
import img4 from '../../img/img8.jpg';
import img5 from '../../img/img9.jpg';

function Carrusel() {
  // Estilo para el contenedor que centrará el carrusel
  const carouselContainerStyle = {
    backgroundColor: 'gainsboro',
    margin: '2%',
    maxWidth: '70%',
    maxHeight: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // Estilo para las imágenes en el carrusel
  const imageStyle = {
    margin: '2%',
    maxWidth: '20%', // Ajusta el ancho de la imagen al 100% del contenedor
    maxHeight: '5%', // Ajusta la altura máxima de la imagen a 300px (ajusta esto según tus necesidades)
  };
  const divStyle = {
    maxWidth: '100%', // Ajusta el ancho de la imagen al 100% del contenedor
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={divStyle}>
    <div style={carouselContainerStyle}>
      <Carousel showArrows={true} showStatus={false} showThumbs={false}>
        <div>
          <img src={img1} alt="Slide 1" style={imageStyle} />
        </div>
        <div>
          <img src={img3} alt="Slide 2" style={imageStyle} />
        </div>
        <div>
          <img src={img5} alt="Slide 3" style={imageStyle} />
        </div>
        <div>
          <img src={img2} alt="Slide 4" style={imageStyle} />
        </div>
        <div>
          <img src={img4} alt="Slide 5" style={imageStyle} />
        </div>
        <div>
          <img src={img6} alt="Slide 6" style={imageStyle} />
        </div>
      </Carousel>
    </div>
    </div>
  );
}

export default Carrusel;
