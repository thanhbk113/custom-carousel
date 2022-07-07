import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { multiData } from "./data";
import { useRef } from "react";
import "./ipl.css";
import { ButtonBase } from "@material-ui/core";

const Ipl = () => {
  const sliderRef = useRef(null);
  console.log(sliderRef);
  return (
    <div>
      {/* <h1>IPL</h1> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Match HightLights</h1>
        <div
          style={{
            display: "flex",
          }}
        >
          <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            onClick={() => sliderRef.current.slickPrev()}
            className="slider-button"
          >
            <ArrowBackIos />
          </ButtonBase>
          <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            onClick={() => sliderRef.current.slickNext()}
            className="slider-button"
          >
            <ArrowForwardIos />
          </ButtonBase>
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider
          dots
          ref={sliderRef}
          slidesToShow={4}
          slidesToScroll={4}
          infinite
          dotsClass="slick-dots line-indicator"
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          {multiData.map((item) => (
            <div>
              <img
                src={item}
                alt=""
                style={{
                  width: "100%",
                  height: "170px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Ipl;
