import React from "react";
import mac from "../macpro.jpeg";
const Item = ({ id, name, price, handleItemSelection }) => {
    const handleClick = () => {
        handleItemSelection(id)
    }
    return (
        <div className="card text-left">
            <img className="card-img-top" src={mac} />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{price}</p>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Select</button>
        </div>
    );
}

export default Item;