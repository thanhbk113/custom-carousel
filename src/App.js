import BootstrapMultiCarouse from "./BootstrapMulti";
import Carouse from "./Carouse";
import Ipl from "./Ipl";
import MultiItemCarouse from "./MultiItemCarousel";
import "./styles.css";
import Testimonial from "./Testimonial";

export default function App() {
  return (
    <div className="App">
      {/* <Carouse /> */}
      <MultiItemCarouse />
      <Ipl />
      {/* <BootstrapMultiCarouse /> */}
      {/* <Testimonial /> */}
    </div>
  );
}
