import React from "react";
import ProfileCard from "./ProfileCard";
import alexa from "./images/alexa.png";
import cortana from "./images/cortana.png"
import siri from "./images/siri.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <h1>Personal digital assistants</h1>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alex99" image={alexa} />
            </div>
            <div className="column is-4">
              <ProfileCard title="Google" handle="@Google23" image={cortana} />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri45" image={siri} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;