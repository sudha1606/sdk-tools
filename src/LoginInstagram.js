import React from 'react'
import {LoginSocialInstagram} from "reactjs-social-login"
import {InstagramLoginButton} from 'react-social-login-buttons'
import { useState } from 'react'


function LoginInstagram() {
  const[profile,setProfile]=useState(null)
  return(
  <div>
  {!profile ? (
      <LoginSocialInstagram
      appId="1546795609469870"
      onResolve={(response)=>{
        console.log(response);
        setProfile(response.data)
      }}
      onReject={(error)=>{
        console.log(error);
      }}
      >
      <InstagramLoginButton />
    </LoginSocialInstagram>
    ) : (
      ""
    )}

    {profile ? (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.picture.data.url}/>
    </div>
    ): (
      ""
    )}
    </div>
  )
}

export default LoginInstagram