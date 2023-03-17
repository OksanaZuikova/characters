import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import "./facebookLoginButton.css";

class MyComponent extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="210813141541383"
        style={{
          height: "40px",
          width: "200px",
          background: "white",
          border: "1px solid #dadce0",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onSuccess={(response) => {
          console.log("Login Success!", response);
        }}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
          console.log("Get Profile Success!", response);
        }}
      />
    );
  }
}

export default MyComponent;
