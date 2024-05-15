import React from "react";
import data from "../../constants/data";
import "./Places.css";
import { useNavigate } from "react-router-dom";

const Work = () => {
    const navigate = useNavigate(); 

    return (
        <div className="work">
            <div className="work__content grid">
                {data.works.map((work, index) => (
                    <div className="work__content--item" key={index} onClick={() => navigate(`/details/${index}`)}>
                        <img src={work.img} alt={work.name} className="img" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
