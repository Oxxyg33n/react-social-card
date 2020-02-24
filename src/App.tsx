import * as React from 'react';
import SocialCard from "./components/SocialCard/SocialCard";
import socialCardImg1 from "./components/SocialCard/image/social-card-react-2.png"
import socialCardImg2 from "./components/SocialCard/image/social_card_img.png"
import "./App.sass"

class App extends React.Component {
  render() {
      return (
          <section className="section">
              <div className="columns">
                  <div className="column">
                      <SocialCard
                          shares={20}
                          likes={67}
                          comments={98}
                          image=''
                      />
                  </div>
                  <div className="column">
                      <SocialCard
                          shares={0}
                          likes={351}
                          comments={33}
                          image={socialCardImg1}
                      />
                  </div>
                  <div className="column">
                      <SocialCard
                          shares={2}
                          likes={0}
                          comments={0}
                          image={socialCardImg2}
                      />
                  </div>
              </div>
          </section>
      );
  }
}

export default App;
