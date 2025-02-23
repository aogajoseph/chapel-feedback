import logo from "../assets/logo.png"; // Ensure you have a logo in the assets folder
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 bg-white shadow-md flex items-center">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10" />
      </Link>
    </header>
  );
};

export default Header;
