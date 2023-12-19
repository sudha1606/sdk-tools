import React, { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import LoginInstagram from "./LoginInstagram";
import WeatherApp from "./WeatherApp";
import "./App.css"; 

function App() {
  const [profile, setProfile] = useState(null);

  return (
    <div>
      <WeatherApp />

      {!profile ? (
        <LoginSocialFacebook
          appId="6957644194314903"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <div className="facebook-login-container">
            <FacebookLoginButton className="facebook-login-button" />
          </div>
        </LoginSocialFacebook>
      ) : (
        ""
      )}

      {profile ? (
        <div className="profile-info-container">
          <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} alt="Profile" />
        </div>
      ) : (
        ""
      )}

      <div className="instagram-login-container">
        <LoginInstagram />
      </div>
    </div>
  );
}

export default App;


