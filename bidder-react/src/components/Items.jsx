import React, { useState, useEffect } from 'react';
import Item from './Item';

const Items = ({ handleItemSelection }) => {
    // const items = [{ id: 1, name: "pro", price: "200" }, { id: 2, name: "Pro Book", price: "150" }]
    const [items, setItems] = useState([]);
    const [xyz, setXyz] = useState(0);
    useEffect(() => {
        fetch('http://localhost:8080/api/items')
            .then(res => res.json())
            .then((data) => {
                setItems(data)
            })
            .catch(console.log);
    }, []);
    return (
        <>
            {items.map((item, index) => {
                return <Item key={item.id} id={item.id} name={item.name} price={item.price} handleItemSelection={handleItemSelection}></Item>
            })}
        </>
    );
}
export default Items;