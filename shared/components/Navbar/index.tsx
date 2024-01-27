//https://codepen.io/amal84/pen/vYPNqbO

import Image from "next/image";
import img0 from "@/public/Images/logos/qonsult_1.jpeg";

import "./style.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="d-flex flex-row container">
        <a href="/" className="title-name">
          Qonsult <sub className="subscript">ai</sub>
        </a>
        {/* <Image src={img0} alt="logo" width={60} height={60} /> */}
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
