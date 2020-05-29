import React, { useState, useEffect } from "react";
import axios from "axios";
import HotelCard from "../components/HotelCard";
const container_style = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};
export default function HotelListing({ match }) {
  let city_id = match.params.id;
  let [res, setRes] = useState([]);
  function getResponse() {
    axios
      .get(`http://localhost:8106/api/cities/${city_id}`)
      .then((response) => {
        console.log(response);
        setRes(response.data);
      });
  }
  useEffect(() => {
    getResponse();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Found {res.length} results</h1>
      <div style={container_style}>
        {res.map((r) => (
          <HotelCard name={r.Name} url={r.Hotel_url} id={r.ID} key={r.ID} />
        ))}
      </div>
    </div>
  );
}
