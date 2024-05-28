import Banner from "../../components/Banner/banner";
import "../../styles/main.scss";
import aboutImage from "../../assets/Bannerabout.png";
import Collapse from "../../components/Collapse/collapse";
import aboutsData from "../../datas/aboutlist.json";

function About() {
  return (
    <div className="about-banner">
      <Banner imageUrl={aboutImage} isHomePage={false} />
      <div className="about-collapse-menu">
        {aboutsData.map((item) => (
          <Collapse
            key={item.id}
            title={item.title}
            content={<p>{item.content}</p>}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
