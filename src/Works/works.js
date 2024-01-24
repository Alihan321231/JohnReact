import React from "react";
import './works.css'
import image1 from '../images/Rectangle 30.svg'
import image2 from '../images/Rectangle 32.svg'; 
import image3 from '../images/Rectangle 34.svg'; 

function Works() {
    return (
        <div>
        <div id="works">
            <div className="container">
                <h4>Featured works</h4>
                <div className="works">
                    <div className="block-1">
                        <img src={image1} alt="" />
                        <div className="blocktext">
                            <h1>Designing Dashboards</h1>
                            <div className="fgh">
                                <button>2020</button>
                                <p>Dashboard</p>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>

                    <div className="block-1">
                        <img src={image2} alt="" />
                        <div className="blocktext">
                            <h1>Vibrant Portraits of 2020</h1>
                            <div className="fgh">
                                <button>2018</button>
                                <p>Illustration</p>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>

                    <div className="block-1">
                        <img src={image3} alt="" />
                        <div className="blocktext">
                            <h1>36 Days of Malayalam type</h1>
                            <div className="fgh">
                                <button>2018</button>
                                <p>Typography</p>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        </div>
    );
}

export default Works;
