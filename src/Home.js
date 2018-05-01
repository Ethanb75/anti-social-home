import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import files
import mac from './assets/life.svg';
import laptopPhone from './assets/phone_lap.svg'



import './font-awesome/css/font-awesome.min.css';

let interval,
  sexy__title,
  titleCover,
  i = 0,
  titles = ["#'s", 'Logos', 'Photos', 'Brands', 'Sites', 'Apps', 'Graphics', 'Video'];

function setNewTitle() {
  if (i === titles.length) {
    i = 0;
  }
  sexy__title.textContent = titles[i];
  i++;
}

export default class Home extends Component {
  linkClicked(ev, otherTarget) {
    document.getElementsByClassName('activeLink')[0].classList.remove('activeLink');
    if (otherTarget) {
      otherTarget.classList.add('activeLink');
    } else {
      ev.target.classList.add('activeLink');
    }
  }

  componentDidMount() {
    //scroll window up
    window.scrollTo({ top: 0 });

    sexy__title = document.querySelector('.title');
    titleCover = document.querySelector('.cover');

    interval = setInterval(function () {
      titleCover.classList.add('cover-show');
      setTimeout(function () {
        return setNewTitle();
      }, 500);
      setTimeout(function () {
        titleCover.classList.remove('cover-show');
      }, 1500);
    }, 4000);

    //timeout to add smooth show
    setTimeout(() => {
      document
        .getElementsByClassName('hmeComponent')[0]
        .classList
        .add('showing');
    }, 70);
  }
  componentWillUnmount() {
    clearInterval(interval);
  }
  render() {
    return (
      <div className="hmeComponent">
        <header className="sexy">
          <div className="sexy__title">
            <div>
              <h1>
                We Make,
                <span>
                  <span className="title">Apps</span>
                  <span className="cover"></span>
                </span>
              </h1>
              <p>
                Anti Social marketing is a digital, social media, and seo marketing company from Atlanta, GA.
                We help businesses with online marketing strategies.
              </p>
              <div className="titleBtns">
                <button onClick={() => document.querySelector('.abt div:first-child').scrollIntoView({ behavior: 'smooth' })}>
                  Learn More
                </button>
                <button onClick={() => document.getElementsByClassName('cnt')[0].scrollIntoView({ behavior: 'smooth' })}>
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="abt">
          <div className="abt__img">
            <img src={mac} alt="Laptop with digital service." />
          </div>
          <div className="abt__text">
            <h3>
              Grow your digital brand using modern advertising services.
            </h3>
            <p>
              Anti Social helps Atlanta based companies establish a professional appearance online.
              By building a strong digital footprint, we drive sales or interest while ensuring a professional first impression online.
            </p>
            <div className="learnMore">
              <Link onClick={ev => this.linkClicked(ev, document.getElementById('aboutBtn'))} to="/about">Learn about us <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            </div>
          </div>
        </section>
        <section className="projects">
          <div className="projText">
            <h3>
              We also make content.
            </h3>
            <p>
              Ontop of marketing and seo, Anti social is a creative agency. We offer a wide range of media curation including logos, websites, photos, videos and graphics.
            </p>
            <span>
              <Link to="/projects" onClick={ev => this.linkClicked(ev, document.getElementById('projectsBtn'))}>see our work <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            </span>
          </div>
          <div className="projImg">
            <img src={laptopPhone} alt="Phone displaying development project" />
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonials__header">
            <h2>Love From Past Customers. </h2>
          </div>
          <div className="testimonials__quotes">
            <div>
              <div className="quoteSlider">
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <div className="quoteSlider__wrap">
                  <div className="quote quote--active">
                    <p>
                      1ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sapiente laboriosam vitae, eaque tempore voluptatum molestiae fugit ratione tenetur, vero itaque, dolor corporis velit molestias. Eius mollitia eum nesciunt quisquam!
                              </p>
                    <span>
                      <em>Company Name.</em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cnt">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 160"><path d="M81.067 72.994c81.068 0 243.2-36.497 375.467-28.08 132.266 8.42 234.666 61.753 294.375 67.7 59.707 5.948 76.707-35.448 157.774-62.114C989.75 23.834 1134.874 11.917 1280 0H0c0 36.497 0 72.994 81.067 72.994z" fill="#FF3333" /></svg>
          <div className="contact">
            <div className="infoWrap">
              <div className="contact__info">
                <div className="contact__item" aria-label="phone">
                  470-429-0044
              </div>
                <div className="contact__item" aria-label="email">
                  <a href="mailto:ceejay.barber@antisocial.to?subject=Hello">
                    Ceejay.Barber@antisocial.to
                  </a>
                </div>
                <div className="contact__item social" aria-label="social">
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="https://twitter.com/AntiSocialMS" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="bye">
                <p>
                  Email or call to speak with a founder directly.
                  Please include name, and a little about your vision.
              </p>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="copy">
            &copy; copy
          </div>
          <span className="spacer"></span>
          <div className="careers">
            careers
          </div>
        </footer>
      </div>
    )
  }
}