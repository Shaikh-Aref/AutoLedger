
import Slider from 'react-slick';
import { logos } from '../../constants/carLogo.js';


// CarouselComponent to display logos in a carousel
export const CarouselLogo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
return (
    <div className="app">
      <h2 className="heading">Brands we serve</h2>
      <Slider {...settings} className="carousel">
        {logos.map((logo, index) => (
          <div key={index} className="logo-container">
            <img src={logo.src} alt={logo.alt} className="logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CarouselLogo;