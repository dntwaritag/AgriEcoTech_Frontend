import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import research1 from "/images/agri6.jpeg";
import research2 from "/images/agri7.jpeg";
import research3 from "/images/agri18.jpg";
import research4 from "/images/Agri11.jpg";
function HomeRemedies() {
    return (
        <div className="Researches-wrapper">
            <div className="research-h1">
            <h1> Our Remedies</h1>
            </div>
                <div className="Researches-container">
                    <div className="research-content">
                        <img src={research1} alt="" />
                        <div className="research-desc">
                            <h1>how to treat crops</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.
                            </p>
                            <div className="Readmore-research">
                                <Link>
                                    Read more{" "}
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="research-content">
                        <img src={research4} alt="" />
                        <div className="research-desc">
                            <h1>Symptoms about crolplast desease</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.
                            </p>
                            <div className="Readmore-research">
                                <Link>
                                    Read more{" "}
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="research-content">
                        <img src={research3} alt="" />
                        <div className="research-desc">
                            <h1>Treat seeds</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.
                            </p>
                            <div className="Readmore-research">
                                <Link>
                                    Read more{" "}
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="research-content">
                        <img src={research2} alt="" />
                        <div className="research-desc">
                            <h1>Reseach about new deseases</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.
                            </p>
                            <div className="Readmore-research">
                                <Link>
                                    Read more{" "}
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
           
        </div>
    );
}

export default HomeRemedies;
