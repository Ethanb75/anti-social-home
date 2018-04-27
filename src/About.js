import React, { Component } from 'react';

import './css/About.css';
import me from './assets/me.jpg';
import ceej from './assets/ceej.jpg';
import josh from './assets/josh_bio.jpg'
import incline from './assets/incline.svg';



export default class About extends Component {
  componentDidMount() {
    window.scrollTo({top: 0});

    setTimeout(() => {
      document
      .getElementsByClassName('abtComponent')[0]
      .classList
      .add('showing'); 
    }, 70);

    setTimeout(() => {
      document
      .getElementsByClassName('abtAside')[0]
      .children[0]
      .classList
      .add('lateShow'); 
    }, 210);
  }

  render() {
    return (
      <div className="abtComponent">
        <header className="about">
          <div className="abtHead">
            <h1>
              About Us.
            </h1>
          </div>
          <div className="abtAside">
            <div>
              <p>
                Meet the team you'll be working with from start to finish.
              </p>
              <span className="abtAside__cover"></span>
            </div>
          </div>
          <div className="abtHead__back"></div>
        </header>
        <p className="staffHeader">
          staff
        </p>
        <section className="profiles">
          <div className="profile">
            <div className="profile__pic">
              <img src={ceej} />
            </div>
            <div className="profile__desc">
              <div>
                <h3>
                  Ceejay Barber
                </h3>
                <span>
                  Founder / CEO heading marketing
                  <i class="fa fa-line-chart" aria-hidden="true"></i>
                  <i class="fa fa-camera-retro" aria-hidden="true"></i>
                  <i class="fa fa-hashtag" aria-hidden="true"></i>
                </span>
                <p>
                  A big Gnarly to all the people that actually took the time to get to know the team. 
                  I’m Ceejay Barber. A young entrepreneur from Atlanta Georgia with dreams of creating my own lane in this “Silicon Valley” digital industry. 
                  Online Networking is something that I’m very passionate about and I love to share my knowledge with anyone I come in contact with. 
                  Digital Marketing is something that I enjoy a little bit more than 3rd person shooters and that says a lot.
                </p>
              </div>
            </div>
          </div>
          <div className="profile rev">
            <div className="profile__desc">
              <div>
                <h3>
                  Ethan Bellora
                </h3>
                <span>
                  CTO heading development
                  <i class="fa fa-code" aria-hidden="true"></i>
                  <i class="fa fa-server" aria-hidden="true"></i>
                  <i class="fa fa-search" aria-hidden="true"></i>
                </span>
                <p>
                  Ethan's a full stack web developer, SEO specialist, and User Experience guru from Atlanta Georgia. 
                  He's been curating online solutions and providing administration for small companies and non-profits for a year before joing Ceejay in his mission.
                  He believes the key to a successful, interactive, lead generating online experience is to work hands on with the client to translate their passion to code.
                </p>
              </div>
            </div>
            <div className="profile__pic">
              <img src={me} />
            </div>
          </div>
          <div className="profile">
            <div className="profile__pic">
              <img src={josh} />
            </div>
            <div className="profile__desc">
              <div>
                <h3>
                  Josh Crocker
                </h3>
                <span>
                  Media production specialist
                  <i class="fa fa-camera-retro" aria-hidden="true"></i>
                  <i class="fa fa-film" aria-hidden="true"></i>
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
                <p>
                  This Joshua Crocker, he is currently enrolled at Kennesaw State University working on getting a bachelor's degree in information security. He is the chief video editor and content overseer for Anti-Social Marketing Solutions. 
                  He loves working with others to bounce ideas off one another to come up with the best solutions that benefits everyone. 
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="abtContact">
          <img src={incline} />
          <div className="abtCnt">
           <div className="infoWrap">
            <div className="contact__info abtInfo">
              <div className="contact__item" aria-label="phone">
                470-429-0044
              </div>
              <div className="contact__item contact__itemW" aria-label="email">
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
            <div className="bye byeW">
              <p>
                Email or call to speak with a founder directly. 
                Please include name, and a little about your vision.
              </p>
            </div>
           </div>
          </div>
        </section>
        <footer className="abtFoot">
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