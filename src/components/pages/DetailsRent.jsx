//import React from 'react';
import { useParams } from "react-router-dom";

const DetailsRent = () => {

    const params = useParams();
    console.log(params.id);

    return (
        <div>
            <h1>DetailsRent</h1>
        </div>
    );
};

export default DetailsRent;