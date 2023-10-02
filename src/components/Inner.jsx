import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Inner.css';

function Inner() {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="link_to_slide1">
          <img
            className="d-block w-100 img-fluid" // Added img-fluid class for responsive images
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1695984008899_icccricketwcoctdesktop.jpg"
            alt="First slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="link_to_slide2">
          <img
            className="d-block w-100 img-fluid" // Added img-fluid class for responsive images
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1695986750593_lolladesktop.jpg"
            alt="Second slide"
          />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="link_to_slide3">
          <img
            className="d-block w-100 img-fluid" // Added img-fluid class for responsive images
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1696064777807_web.jpg"
            alt="Third slide"
          />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default Inner;
