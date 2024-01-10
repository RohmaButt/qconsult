//https://codepen.io/amal84/pen/vYPNqbO

import Image from "next/image";
import "./style.css";

export default function Navbar() {
  // const nav = document.querySelector(".nav");

  // window.addEventListener("scroll", fixNav);

  function fixNav() {
    // if (window.scrollY > nav.offsetHeight + 150) {
    //   nav.classList.add("active");
    // } else {
    //   nav.classList.remove("active");
    // }
  }
  return (
    <>
      <nav className="nav">
        <div className="container">
          <h1 className="logo">
            <a href="/">Qonsult</a>
          </h1>
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
    </>
  );
}