import Logo from "../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" className="logo" />
      <a href="/">Home</a>
    </header>
  );
};

export default Header;
