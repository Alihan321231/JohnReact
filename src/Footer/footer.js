import React from "react";
import fb from '../images/fb.svg'
import ins from '../images/insta.svg'
import tw from '../images/twitter.svg'
import li from '../images/Linkedin.svg'
import './footer.css'
function Footer(){
    return(
        <div>
            <div className="footer">
            <img src={fb} alt="" />
            <img src={ins} alt="" />
            <img src={tw} alt="" />
            <img src={li} alt="" />
            <p>Copyright ©2020 All rights reserved </p>


            </div>
        </div>
    )
}

export default Footer