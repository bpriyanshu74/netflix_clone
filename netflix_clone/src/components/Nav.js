import React, { useEffect, useState } from 'react';
import "../style/Nav.css";

function Nav() {
    const [show,handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else handleShow(false)
            
        });
    },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo" src="https://thumbs.dreamstime.com/b/humpolec-czech-republic-march-netflix-company-logo-button-social-media-phone-icon-symbol-editorial-web-217003419.jpg" alt="netflix_logo" />
        <img className="nav_user" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix_user"  />
    </div>
  )
}

export default Nav