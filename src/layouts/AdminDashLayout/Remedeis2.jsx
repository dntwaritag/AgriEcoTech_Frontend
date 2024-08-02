import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import axiosclient from "../../axiosClient";
function Remedies2() {
    const [diseases, setDeseases] = useState([]); // Initialize as an empty array

    useEffect(() => {
      fetchSoilData()
    }, []);
    const fetchSoilData = () => {
      axiosclient.get('/remedie').then(({ data }) => {
        console.log(data);
        setDeseases(data.data);
      });
    };

    const deleteSoil = (id) => {
      axiosclient.delete(`/remedie/${id}`).then(() => {
        // After successful deletion, fetch the updated soil data
        fetchSoilData();
        console.log('deleted successfully')
      }).catch((error) => {
        console.error("There was an error deleting the desease record!", error);
      });
    };
  
  
    // Function to truncate text
  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  };
  
  const maxLength = 50; // Set your desired maximum length
  
    return (
        <div className="Researches-wrapper">
            <div className="research-h1">
            <h1> Our Remedies</h1>
            </div>
                <div className="Researches-container">
                    {diseases.map((item,index)=>(
                        <>
                          <div className="research-content" key={item._id}>
                        <img src={item.image} alt="" />
                        <div className="research-desc">
                            <h1>{item.title}</h1>
                            <p dangerouslySetInnerHTML={{ __html: truncateText(item.description, maxLength) }} />
                               
                            
                            <div className="Readmore-research">
                                <Link to={`/remedies/${item._id}`}>
                                    Read more{" "}
                                    <span>
                                        <FaArrowRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                        </>
                    ))}
                
                </div>
           
        </div>
    );
}

export default Remedies2;
