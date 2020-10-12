
import * as React from 'react';
import {useState} from 'react'



const ListingCard = (props, updateListing) => {


// const initialState = {
//     price: "40",
//     address: "123 Elm St",
//     bedrooms: "2 bedrooms",
//    room_type: "King Size",
//     bathrooms: "2 Bathrooms",
//     beds: "2 beds",
//   };

//   const [property, setProperty] = useState(initialState);

  return (
    <div className="property-card">
      {}
      <p>Bedrooms: {props.property.name}</p>
      <p>Bathrooms: {props.property.year}</p>
      {/* <p>Beds: {props.property.beds}</p> */}
      <p>Bed Type: {props.property.color}</p>
      {/* <p>address: {props.property.address}</p>
      <p>Price: {props.property.price}</p> */}
         <button onClick={props.updateCard}>
    Update Listing
    </button>

    <button onClick={props.deleteCard}>
        Delete Listing
      </button>
    </div>
  );
};
export default ListingCard;
