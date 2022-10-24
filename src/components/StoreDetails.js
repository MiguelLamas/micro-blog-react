import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const StoreDetails = () => {
  const { id } = useParams();
  const { data: store, error, isPending } = useFetch("http://localhost:8000/stores/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/stores/" + store.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    })
  }

  return (
    <div className="store-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {store && (
        <article>
          <h2>{store.name}</h2>
          <p>{store.location}</p>
          <div>{store.description}</div>
          <p>{store.address}</p>
          <a href={store.website} target="_blank" rel="noopener noreferrer">{store.website}</a>
          <div>
          <button onClick={handleClick}>Delete</button>
          </div>
        </article>
      )}
    </div>
  );
};

export default StoreDetails;
