import Banner from "../../components/Banner";
import "../../styles/main.scss";
import aboutImage from "../../assets/Bannerabout.png";

function About() {
  return (
    <div className="about">
      <Banner imageUrl={aboutImage} isHomePage={false} />
    </div>
  );
}

export default About;
