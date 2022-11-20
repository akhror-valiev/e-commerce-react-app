import React from "react";
import "./Error.scss";
import { error } from "../../utils/images";

const Error = () => {
    return (
        <div className="container py-5">
            <div className="flex flex-center error">
                <img src={error} alt='Error' />
            </div>
        </div>
    );
};

export default Error;