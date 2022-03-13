import React from "react";
import loginVideo from "../assets/video.mp4";
import logo from "../assets/logowhite.png";
import ImageOne from "../assets/img1.png";
import ImageTwo from "../assets/img2.png";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { useNavigation } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={loginVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay={true}
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-start items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "auto",
              fontFamily: "Eczar",
            }}
          >
            <h1
              className="text-white m-32 text-6xl mb-0"
              style={{ marginTop: "0", fontSize: "5rem", fontWeight: "600" }}
            >
              Stonks
            </h1>
            <p className="text-white m-5 text-2xl">
              A Cryptotrading market predictor solution
            </p>
            <div className="shadow-2xl">
              <GoogleLogin
                clintId=""
                render={(renderProps) => (
                  <button className="bg-white flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none m-5">
                    <FcGoogle className="mr-4" /> Sign in with google
                  </button>
                )}
              />
            </div>
          </div>
          <img
            src={ImageOne}
            alt="rocket going up"
            className="h-60 w-60 absolute right-20 bottom-5"
          />
          <img
            src={ImageTwo}
            alt="Space Ship"
            className="absolute right-60 bottom-59"
            style={{ bottom: "20rem",right:"10rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
