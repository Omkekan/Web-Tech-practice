import React, { useState } from "react";

const UseStateHookCom = () => {
    const [myName, setMyname] = useState("Om");
    const [count, setCount] = useState(0);
    
    // Updated paths to point to the public/images folder
    const [menu, setMenu] = useState([
        { title: "Burgur", price: 15, path: "/images/burgur.jpg" },
        { title: "pancake", price: 40, path: "/images/pancake.jpg" },
        { title: "pizza", price: 30, path: "/images/pizza.jpg" },
        { title: "Pastery", price: 60, path: "/images/pestry.jpg" },
        { title: "salad", price: 10, path: "/images/salad.jpg" }
    ]);

    return (
        <div>
            <h2>This is use state hook comp</h2>
            
            <strong>Name: {myName}</strong>{" "}
            <button type="button" className="btn btn-outline-primary" onClick={() => setMyname("Om Kekan")}>
                change
            </button>
            <hr />
            
            <strong>Counter: {count}</strong>{" "}
            <button type="button" className="btn btn-outline-primary" onClick={() => setCount(count + 1)}>
                increment count
            </button>
            <hr />
            
            <div className="d-flex flex-wrap gap-3">
                {menu.length > 0 && menu.map((val, index) => {
                    return (
                        <div className="card border-primary" key={index} style={{ width: "200px" }}>
                            {/* The src will now look for e.g., http://localhost:3000/images/samosa.jpg */}
                            <img src={val.path} alt={val.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                            <div className="card-body border-primary">
                                <h5>Title: {val.title}</h5>
                                <p>Price: {val.price} &#8377;</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UseStateHookCom;