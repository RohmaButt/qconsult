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
          {/* <h1 className="logo"> */}
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="Images/logos/logo_black.png"
              width={90}
              height="auto"
              alt="Description of the image"
            />
          </a>
          {/* </h1> */}

          <ul>
            <li>
              <a href="# current">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
