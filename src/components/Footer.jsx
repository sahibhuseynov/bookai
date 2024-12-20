import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <footer className="footer footer-center bg-white text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
        <Link to="/"><FaTwitter size={30} /></Link>
        <Link to="/"><FaInstagramSquare size={30} /></Link>
        <Link to="/"><FaWhatsappSquare size={30} /></Link>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All rights reserved by Huseynov. © 2024</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer