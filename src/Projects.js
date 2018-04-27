import React, { Component } from 'react';

import './css/Project.css';


export default class Projects extends Component {
  componentDidMount() {
    window.scrollTo({top: 0});
    
    setTimeout(() => {
      document
      .getElementsByClassName('projComponent')[0]
      .classList
      .add('showing'); 
    }, 70);

    setTimeout(() => {
      document
      .getElementsByClassName('projAside')[0]
      .children[0]
      .classList
      .add('lateShow'); 
    }, 210);
  }
  render() {
    return (
      <div className="projComponent">
        <header className="projectsPage">
          <div className="projHead">
            <h1>
              Projects.
            </h1>
          </div>
          <div className="projAside">
            <div>
              <p>
                A few of our recent projects we're proud of as a team.
              </p>
              <span className="projAside__cover"></span>
            </div>
          </div>
          <div className="projBack"></div>
        </header>
        {/* <section className="projSection">
          <div className="projPicture mike"></div>
          <div className="projDescWrap mike">
            <div className="projTitleWrap mike">
              <h3>Michael Pendergrass.</h3>
            </div>
            <div className="projDesc">
              <p>
                Anti Social helped take michael pendergrass from
              </p>
            </div>
          </div>
        </section>
        <section className="projSection">
          <div className="projDescWrap">
            <div className="projTitleWrap thecure">
              <h3>Project Title.</h3>
            </div>
            <div className="projDesc">
              <p>
                1ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur sapiente laboriosam vitae, eaque tempore voluptatum molestiae fugit ratione tenetur, vero itaque, dolor corporis velit molestias. Eius mollitia eum nesciunt quisquam!
              </p>
            </div>
          </div>
          <div className="projPicture thecure"></div>
        </section> */}
        <div>
          <h1 style={{
            margin: '50vh 0vh',
            textAlign: 'center'
          }}>
            Sorry! Under Construction
          </h1>
        </div>
        <section className="cnt">
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
                  <a href="https://twitter.com/AntiSocialMS">
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
            @copy
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