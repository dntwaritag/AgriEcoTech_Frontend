import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosclient from "../axiosClient";

function RemedieDetail() {
    const [disease, setDisease] = useState(null); // Initialize as null
    const { _id } = useParams();

    useEffect(() => {
        fetchRemedieData();
    }, []);

    const fetchRemedieData = () => {
        axiosclient.get(`/remedie/${_id}`)
            .then(({ data }) => {
                console.log("Fetched data:", data); // Log entire response data
                if (data) {
                    setDisease(data); // Set the fetched data to state
                } else {
                    console.error("Unexpected data structure:", data);
                }
            })
            .catch((error) => {
                console.error("Error fetching remedie data:", error);
            });
    };

    if (!disease) {
        return <div>Loading...</div>; // Display a loading message while data is being fetched
    }

    console.log("Rendering disease data:", disease);

    return (
        <>
            <div className="remedie-thumb-wrapper">
                <img src={disease.image || "/images/agri1.jpeg"} alt={disease.title || "Remedie Image"} />
                <h1>{disease.title || "Remedie Title"}</h1>
            </div>
            <div className="remedie-detail-container">
                <div className="remedies-body">
                <p dangerouslySetInnerHTML={{ __html: disease.description || "No description available." }} />
                </div>
            </div>
        </>
    );
}

export default RemedieDetail;
