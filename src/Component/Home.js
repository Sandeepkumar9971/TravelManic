import React, { useState, useEffect } from "react";
import "./Home.css";
import { Registerform } from "./Registerform";
// import { Modal } from '@mui/material';

const Home = () => {
  const places = [
    {
      id: "1",
      name: "Thailand",
    },
    {
      id: "2",
      name: "Goa",
    },
    {
      id: "3",
      name: "Singapore",
    },
    {
      id: "4",
      name: "Malaysia",
    },
    {
      id: "5",
      name: "Paris",
    },
    {
      id: "6",
      name: "Tokyo",
    },
    {
      id: "7",
      name: "New York",
    },
    {
      id: "8",
      name: "Paris",
    },
    {
      id: "9",
      name: "Tokyo",
    },
    {
      id: "10",
      name: "New York",
    },
  ];

  const [randomPlace, setRandomPlace] = useState(places[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * places.length);
      // console.log(randomIndex)
      setRandomPlace(places[randomIndex]);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="header" style={{ backgroundImage: 'url("home.jpg")' }}>
        <div style={{ position: "relative", width:'550px' }}>
          <h2 style={{ marginTop: "0px", fontSize: "2rem" }}>
            Welcome to world
          </h2>

          <div>
            <span style={{ fontWeight: "700", fontSize: "4rem" }}>Visit </span>
            <span
              style={{ fontWeight: "700", fontSize: "4rem", color: "#a4a43d" }}
            >
              {randomPlace.name}
            </span>
          </div>
          <div></div>
        </div>
        <div style={{ position: 'relative', width: 400 }}>
          <Registerform />
        </div>
      </div>
    </>
  );
};

export default Home;
