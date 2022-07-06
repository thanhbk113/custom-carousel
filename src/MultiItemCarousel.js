import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouse.css";
import { multiData } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue" }} />
    </div>
  );
};

const MultiItemCarouse = () => {
  return (
    <div style={{ margin: "30px" }}>
      <Slider
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        slidesToShow={4}
        slidesToScroll={3}
        infinite={false}
      >
        {multiData.map((item) => (
          <div>
            <Card item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  console.log(item);
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        alt=""
        src={item}
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px"
        }}
      />
      <p style={{ fontSize: "14px", padding: "5px 0" }}>TOP TRENDING TV</p>
      <p style={{ fontSize: "16px", padding: "5px", color: "green" }}>
        From 300${" "}
      </p>
      <p style={{ fontSize: "14px", padding: "5px", color: "gray" }}>
        Up to 1,000$
      </p>
    </div>
  );
};

export default MultiItemCarouse;
