import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const store = { name, description, address, website, location };

    setIsPending(true);

    fetch("http://localhost:8000/stores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(store),
    }).then(() => {
      console.log("new store added");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Record Store</h2>
      <form onSubmit={handleSubmit}>
        <label>Store Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Store Description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Store Address:</label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>Store Website:</label>
        <input
          type="text"
          required
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <label>Author:</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="Central London">Central London</option>
          <option value="North London">North London</option>
          <option value="East London">East London</option>
          <option value="South London">South London</option>
          <option value="West London">West London</option>
          <option value="London Suburbs">London Suburbs</option>
        </select>
        {!isPending && <button>Add Store</button>}
        {isPending && <button disabled>Adding New Store...</button>}
        <p>{name}</p>
        <p>{description}</p>
        <p>{address}</p>
        <p>{website}</p>
        <p>{location}</p>
      </form>
    </div>
  );
};

export default Create;
