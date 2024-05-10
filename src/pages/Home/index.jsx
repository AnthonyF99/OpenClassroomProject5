import Cards from "../../components/Cards/cards";
import Banner from "../../components/Banner/banner";
import "../../styles/main.scss";

import homeImage from "../../assets/Banner.png";

function Home() {
  return (
    <main>
      <div className="App">
        <Banner imageUrl={homeImage} isHomePage={true} />
        <Cards />
      </div>
    </main>
  );
}

export default Home;
