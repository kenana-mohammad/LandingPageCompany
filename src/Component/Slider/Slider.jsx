import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../../assets/t.jpg"
import slider2 from "../../assets/3.jpg"
import slider3 from "../../assets/4.jpg"
import "./Slider.css"
function DarkVariantExample() {
  return (
    <div className="slide">
    <Carousel  data-bs-theme="dark" className='km-carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100  img-carousel"
          src={slider1}
          alt="First slide"
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100  img-carousel"
          src={slider3}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  img-carousel"
          src={slider2}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>

    </div>
  );
}

export default DarkVariantExample;
