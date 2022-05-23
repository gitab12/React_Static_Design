import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
function Footer()
{
    return(
        <div className="foot">
       
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        <FontAwesomeIcon icon={faFacebook} size="2x" />
        <FontAwesomeIcon icon={faTwitter} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />

    
        
        </div>
    )
}

export default Footer