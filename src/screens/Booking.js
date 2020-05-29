import React, { useState, useEffect } from "react";
import axios from "axios";
import CityCard from "../components/CityCard";
const container_style = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};
const h1_style = {
  textAlign: "center",
};
export default function Booking() {
  let [res, setRes] = useState([]);
  function getResponse() {
    axios.get("http://localhost:8106/api/cities/").then((response) => {
      //console.log(response);
      setRes(response.data);
    });
  }
  useEffect(() => {
    getResponse();
  }, []);
  return (
    <div>
      <h1 style={h1_style}>Choose a city</h1>
      <div style={container_style}>
        {res.map((r) => (
          <CityCard name={r.name} url={r.url} id={r.id} />
        ))}
      </div>
    </div>
  );
}
