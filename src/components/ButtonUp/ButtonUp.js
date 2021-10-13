import "./button-up.scss";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const ButtonUp = () => {
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 700){
          setVisible(true)
        } 
        else if (scrolled <= 700){
          setVisible(false)
        }
      };

      window.addEventListener('scroll', toggleVisible);

    return (
        <div id="up-arrow">
            <Link to={location} alt="arrow up" style={{display: visible ? 'inline' : 'none'}}><i class="bi bi-arrow-up-square-fill"></i></Link>
        </div>
    );
};

export default ButtonUp;
