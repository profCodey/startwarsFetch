import "./home.css";
import logo from "../../Assets/starwars.svg.png";
import Button from "../button/button";

function Home() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="starwars logo" />
      </div>

      <Button />
    </div>
  );
}

export default Home;
