import React from "react";
import ProfileCard from "./ProfileCard";

function App(){
 return(
  <div>
    <div>Persoanl digital assistants</div>
    <ProfileCard title="Alexa" handle="@alex99"/>
    <ProfileCard title="Google" handle="@Google23"/>
    <ProfileCard title="Siri" handle="@siri45" />
  </div>
 )
}

export default App;