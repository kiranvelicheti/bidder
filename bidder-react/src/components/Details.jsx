import React from 'react';

const Details = ({ id }) => {
    const itemDetails = [{ id: 1, description: "Device to work", name: "Apple MacBook Pro" },
    { id: 2, description: "Device to work in home", name: "Apple MacBook Air" }];

    return <>
        {itemDetails
            .filter(itemDetail => itemDetail.id === id)
            .map(itemDetail => {
                return <div key={itemDetail.id}>
                    < div >{itemDetail.name}</div>
                    <div>{itemDetail.description}</div>
                </div>;
            })}
    </>
}

export default Details;