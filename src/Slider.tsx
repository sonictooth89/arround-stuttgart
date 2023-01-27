import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './img1.jpg';
import image2 from './img2.jpg';
import image3 from './IMG_5691.jpg'; 

function Slider() {
  return (
    <div>
      <Carousel variant='light' interval={7000}>
      <Carousel.Item>
        <img
          src={image1}
          className="d-block w-100"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Vineyard</h3>
          <p>The vineyards arround Stuttgart city.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Max-Eyth-See</h3>
          <p>The beautiful Lake in Stuttgart</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Stuttgart-West</h3>
          <p>
            View of the city center.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;