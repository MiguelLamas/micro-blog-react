import React from "react";
import StoreList from "./StoreList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: stores, isPending, error } = useFetch('http://localhost:8000/stores');


  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { stores && <StoreList stores={stores} title="Record Stores in London" /> }
    </div>
  );
};

export default Home;
 