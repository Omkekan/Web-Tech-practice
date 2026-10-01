import React from "react";
import imgPath from "../shared/constant/constantdata"

const Myimgcom = ()=> {
    return(
        <div>
            <h2> Food Images</h2>
            <img src={imgPath.burgur} alt="burgur" height="200px" width="200px"></img>
            <img src={imgPath.paneer} alt="burgur" height="200px" width="200px"></img>
            <img src={imgPath.pastery} alt="burgur" height="200px" width="200px"></img>
            <img src={imgPath.pizza} alt="burgur" height="200px" width="200px"></img>
            <video controls height="200px" width="300px">
                <source src={imgPath.vide} />
            </video>
        </div>
    )
}

export default Myimgcom