import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Places from "./screens/Places";
import Guide from "./screens/Guide";
import Blogs from "./screens/Blogs";
import Contact from "./screens/Contact";

function App() {
  return (
    <div style={{ maxWidth: "100vw" }}>
      <Home />
      <About />
      <Places />
      <Guide />
      <Blogs />
      <Contact />
    </div>
  );
}
export default App;
