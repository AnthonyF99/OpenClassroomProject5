import footerlogo from "../../assets/logo-footer.png";
import "../../styles/footer.scss";

function Footer() {
  return (
    <footer>
      <img src={footerlogo} alt="logo footer"></img>
      <h4>© 2020 Kasa. All rights reserved</h4>
    </footer>
  );
}

export default Footer;
