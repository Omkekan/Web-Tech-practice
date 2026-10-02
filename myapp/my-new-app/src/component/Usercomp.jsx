import React from "react";

const Usercomp=(props) =>{

    return(
        <div>
            {props.name === "Om" ? (
                <p>Not a valid</p>
            ):(
                <h2> User component{props.name}</h2>
            )}
        </div>
    )
}

export default Usercomp