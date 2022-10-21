import React from 'react';
import { Link } from "react-router-dom";

const StoreList = ({stores, name}) => {
    
    return ( 
        <div className="store-list">
        <h2>{ name }</h2>
            {stores.map((store) => (
        <div className="store-preview" key={store.id}>
        <Link to={`/stores/${store.id}`}>
        <h2>{ store.name }</h2>
          <p>{ store.location }</p>
        </Link>
        </div>
      ))}
        </div>
     );
}
 
export default StoreList; 