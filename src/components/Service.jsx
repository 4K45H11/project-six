import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from "../assets/3.jpg";
// import img2 from "../assets/4.jpg";

const Service = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={"https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Service;