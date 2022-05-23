import React from "react";

function Info()
{
  return (
  <nav className="headpage">
     <img src= {require("../Images/image1.jpg")} alt="demo" className="image-logo" /><br/>
      <h2 className="head2"> Geetha B </h2>
      <h5 className="head5">Software Engineer</h5>
      <button type="button" className="btn">Gmail</button>
      <button type="button" className="btn">LinkedIn</button>
     
     
  
</nav>
    )
}

export default Info