import "./home.css";
import logo from "../../Assets/starwars.svg.png";
import male from "../../Assets/starwarsMale.png"
import female from "../../Assets/starwarsFemale.png"
import Button from "../button/button";

function Home() {
  return (
    <div className="container">
      <div className="left">
        <img className ="female" src={female} alt="starwars female character" />
      </div>
      <div className="middle">
        <div className="logo">
          <img src={logo} alt="starwars logo" />
        </div>
        <Button />
      </div>
      <div className="right">
        <img src={male} alt="starwars male character" />
      </div>
    </div>
  );
}

export default Home;
