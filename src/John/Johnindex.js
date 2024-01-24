import React from "react";
import './Johnindex.css';
import ellips from '../images/Ellipse 1.svg';

function John(){
    return(
        <div>
            <div id="john">
                <div className="container">
                    <div className="john">
                       
                        <div className="john1">
                            <h1>Hi, I am John, <br /> Creative Technologist</h1>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                            <button>Download Resume</button>
                        </div>
                        <img src={ellips} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default John
