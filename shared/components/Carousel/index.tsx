import "./style.css";
export default function Carousel() {
  return (
    <section id="images-slider">
      <ul className="slides">
        <input type="radio" name="radio-btn" id="img-1" checked />
        <li className="slide-container">
          <div className="slide">
            <img src="images/" />
          </div>
          <div className="nav">
            <label htmlFor="img-6" className="prev">
              <i className="fas fa-chevron-circle-left fa-3x"></i>
            </label>
            <label htmlFor="img-2" className="next">
              <i className="fas fa-chevron-circle-right fa-3x"></i>
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-2" />
        <li className="slide-container">
          <div className="slide">
            <img src="https://picsum.photos/609/421/?random" />
          </div>
          <div className="nav">
            <label htmlFor="img-1" className="prev">
              <i className="fas fa-chevron-circle-left fa-3x"></i>
            </label>
            <label htmlFor="img-3" className="next">
              <i className="fas fa-chevron-circle-right fa-3x"></i>
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-3" />
        <li className="slide-container">
          <div className="slide">
            <img src="https://picsum.photos/609/422/?random" />
          </div>
          <div className="nav">
            <label htmlFor="img-2" className="prev">
              <i className="fas fa-chevron-circle-left fa-3x"></i>
            </label>
            <label htmlFor="img-4" className="next">
              <i className="fas fa-chevron-circle-right fa-3x"></i>
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-4" />
        <li className="slide-container">
          <div className="slide">
            <img src="https://picsum.photos/609/423/?random" />
          </div>
          <div className="nav">
            <label htmlFor="img-3" className="prev">
              <i className="fas fa-chevron-circle-left fa-3x"></i>
            </label>
            <label htmlFor="img-5" className="next">
              <i className="fas fa-chevron-circle-right fa-3x"></i>
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-5" />
        <li className="slide-container">
          <div className="slide">
            <img src="https://picsum.photos/609/424/?random" />
          </div>
          <div className="nav">
            <label htmlFor="img-4" className="prev">
              <i className="fas fa-chevron-circle-left fa-3x"></i>
            </label>
            <label htmlFor="img-6" className="next">
              <i className="fas fa-chevron-circle-right fa-3x"></i>
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-6" />
        <li className="slide-container">
          <div className="slide">
            <img src="https://picsum.photos/609/425/?random" />
          </div>
          <div className="nav">
            <label htmlFor="img-5" className="prev">
              <i className="fas fa-chevron-circle-left fa-3x"></i>
            </label>
            <label htmlFor="img-1" className="next">
              <i className="fas fa-chevron-circle-right fa-3x"></i>
            </label>
          </div>
        </li>

        <li className="nav-dots">
          <label htmlFor="img-1" className="nav-dot" id="img-dot-1"></label>
          <label htmlFor="img-2" className="nav-dot" id="img-dot-2"></label>
          <label htmlFor="img-3" className="nav-dot" id="img-dot-3"></label>
          <label htmlFor="img-4" className="nav-dot" id="img-dot-4"></label>
          <label htmlFor="img-5" className="nav-dot" id="img-dot-5"></label>
          <label htmlFor="img-6" className="nav-dot" id="img-dot-6"></label>
        </li>
      </ul>
    </section>
  );
}
