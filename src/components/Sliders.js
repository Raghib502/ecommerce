//import { Carousel } from "bootstrap";
import React from "react";
import { sliderItems } from "./../data";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";

const Sliders = () => {
  return (
    <Carousel
      className="container d-block w-100"
      style={{ backgroundColor: "#4f3549" }}
    >
      {sliderItems.map((item) => (
        <Carousel.Item>
          <img
            style={{ width: "25%", height: "25%" }}
            className=""
            src={item.img}
            fluid
            alt=""
          />

          <Carousel.Caption className="">
            <h3>{item.title}</h3>
            <p style={{}}>{item.desc}</p>
            <button>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Sliders;
