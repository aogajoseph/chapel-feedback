import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-100 text-right text-sm">
      <Link to="/privacy-policy" className="mx-2 hover:underline">
        Privacy Policy
      </Link>
      <Link to="/terms-of-service" className="mx-2 hover:underline">
        Terms of Service
      </Link>
    </footer>
  );
};

export default Footer;
