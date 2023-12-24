import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Gallery.css";
const Gallery = () => {
  const images = [
    {
      id: 1,
      name: "./Images/s1.jpg",
    },
    {
      id: 2,
      name: "./Images/s2.jpg",
    },
    {
      id: 3,
      name: "./Images/s3.jpg",
    }
  ];

  return (
    <>
      <h3 style={{ textAlign: "center", marginBottom: '25px' }}>
        <span><b style={{ color: '#d19411' }}>G</b>allery<b style={{ color: '#d19411' }}>S</b>ection</span>
      </h3>
      <div
        className="Carousalslide"
        style={{
          height: "80%",
          width: "100%",
          marginBottom: "20px"
        }}
      >
        <Carousel
          autoPlay={true}
          interval={3000}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          infiniteLoop={true}
        >
          {images.map((data) => (
            <div className="galleryimages" key={data.id} style={{ height: "450px", width: "70%", margin: "auto", marginTop: '10px' }}>
              <img src={data.name} alt={`Image ${data.id}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Gallery;
