import React, { useState } from 'react';
// import mac from "./macpro.jpeg"
import Items from './Items';
import Details from './Details';

const Merchandise = () => {
    const [id, setId] = useState(1)

    const handleItemSelection = (id) => {
        setId(id)
    }

    return (
        <div className="row">
            <div className="col-lg-3 col-sm-6">
                <Items handleItemSelection={handleItemSelection}></Items>
            </div>
            <div className="col-lg-6 col-sm-12">
                <Details id={id}></Details>
            </div>
        </div>
    );

}

export default Merchandise;