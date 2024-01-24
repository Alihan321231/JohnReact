import React from "react";
import './recent.css'
function Recent(){
    return(
        <div>
            <div id="recent">
                <div className="container">
                    <div className="recent">
                        <h3>Recent posts <span>View all</span></h3>
                        <div className="block-1">
                            <div className="block">
                                
                                <h2>Making a design system from <br /> scratch</h2>
                                <p className="p-1">12 Feb 2020&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design,Pattern</p>
                                <p>Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                            </div>
                            <div className="block">
                                <h2>Creating pixel perfect icons in <br /> Figma</h2>
                                <p className="p-1">12 Feb 2020&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Figma, Icon Design </p>
                                <p>Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint. Velit officia consequat <br /> duis enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recent;
