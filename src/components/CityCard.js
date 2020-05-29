import React from "react";
import { Link } from "react-router-dom";
const style = {
  height: "100%",
  width: "100%",
};
const heading_style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "rgba(255,255,255,0.6)",

  padding: "10px",
};
const cardStyle = {
  height: "400px",
  width: "400px",
  border: "1px solid gray",
  margin: "40px",
  textAlign: "center",
  position: "relative",
  boxShadow: "2px 5px 10px gray",
  borderRadius: "5px",
  cursor: "pointer",
};
const link_style = {
  textDecoration: "none",
  color: "black",
};
export default function CityCard({ name, url, id }) {
  return (
    <Link to={`/hotels/${id}`} style={link_style}>
      <div style={cardStyle} onClick={() => console.log(id)}>
        <h1 style={heading_style}>{name}</h1>
        <img src={url} alt="" style={style} />
      </div>
    </Link>
  );
}
