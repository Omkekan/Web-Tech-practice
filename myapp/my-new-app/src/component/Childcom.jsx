import React from 'react';

const ChildCom = (props) => {
    const {newItem, newPrice, parentmethod} = props; // destructurung of prop

    return(
        <div>
            <h2> this is child Component</h2>
            <div>Samosa:<strong>{newItem}</strong></div>
                <div>Price:<strong>{newPrice}</strong></div> 
                <button type="button" onClick={parentmethod} > change item data </button>
        </div>

    )
}
export default ChildCom;