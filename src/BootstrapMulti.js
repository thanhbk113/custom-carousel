import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BootstrapMulti.css";
import { multiData } from "./data";
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder
} from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white" }} />
    </div>
  );
};

const BootstrapMultiCarouse = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%" }}>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToShow={4}
          slidesToScroll={3}
        >
          {multiData.map((item) => (
            <div>
              <Card item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  console.log(item);
  return (
    <div
      style={{
        textAlign: "center",
        margin: 20,
        padding: "0 10px",
        width: 220,
        boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
        borderRadius: "7px"
      }}
    >
      <span style={{ float: "right", padding: "5px" }}>
        <FavoriteBorder />
      </span>
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
      <p
        style={{
          fontSize: "18px",
          padding: "5px 0",
          fontWeight: 400,
          color: "gray"
        }}
      >
        Top Trending Tv
      </p>
      <p>
        <Rating value={Math.random() * 5 + 1} precision={0.5} />
      </p>
      <span
        style={{
          textDecoration: "line-through",
          color: "gray",
          marginRight: 7,
          fontWeight: 300
        }}
      >
        ${Math.floor(Math.random() * 4300 + 3000)}
      </span>
      <span style={{ color: "gray", fontWeight: 700 }}>
        ${Math.floor(Math.random() * 2300 + 1280)}
      </span>
      <p style={{ fontSize: "16px", padding: "5px", color: "green" }}>
        From 300${" "}
      </p>
      <p style={{ fontSize: "14px", padding: "5px", color: "gray" }}>
        Up to 1,000$
      </p>
      <button>Add to card</button>
    </div>
  );
};

export default BootstrapMultiCarouse;
