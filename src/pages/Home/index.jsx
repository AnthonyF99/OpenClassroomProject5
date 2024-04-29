import Cards from "../../components/Cards";
import Banner from "../../components/Banner";
import "../../styles/main.scss";

import homeImage from "../../assets/Banner.png";

function Home() {
  return (
    <div className="App">
      <Banner imageUrl={homeImage} isHomePage={true} />
      <Cards />
    </div>
  );
}

export default Home;
