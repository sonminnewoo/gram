import React from "react";
import { useParams } from "react-router-dom";
import data from "../../constants/data";

const DetailPage = () => {
    const { id } = useParams();
    const work = data.works[id];

    return (
        <div>
            <h1>{work.title}</h1>
            <img src={work.img} alt={work.title} />
            <p>{work.description}</p>
        </div>
    );
}

export default DetailPage;
