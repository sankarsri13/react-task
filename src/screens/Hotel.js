import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/style.css";
const main_container = {
  width: "100vw",
  height: "100vh",
  fontFamily: "Montserrat",
};
const hotel_image = {
  width: "100%",
  maxHeight: "100%",
  filter: "blur(5px)",
};
const info = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "rgba(255,255,255,0.6)",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  backdropFilter: "blur(5px)",
};
export default function Hotel({ match }) {
  let hotel_id = match.params.id;
  let [res, setRes] = useState([]);
  function getResponse() {
    axios
      .get(`http://localhost:8106/api/hotel/${hotel_id}`)
      .then((response) => {
        console.log(response);
        setRes(response.data);
      });
  }
  useEffect(() => {
    getResponse();
  }, []);
  return (
    <div style={main_container}>
      <img src={res.Hotel_url} alt="" style={hotel_image} />
      <div style={info}>
        <h1>{res.Name}</h1>
        <h2>{res.Star} Star Hotel</h2>
        <h2>Rs.{res.Price} /night</h2>
        <h2>Average rating of {res.Rating}/10 by the users</h2>
      </div>
    </div>
  );
}
