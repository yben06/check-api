import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [listOfUser, setlistOfUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setlistOfUser(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {listOfUser.map((User, index) => (
        <div key={index}>
          <ul>
            <li>
              <span details={User}>{User.id}</span>
            </li>
            <li>
              <span details={User}>{User.name}</span>
            </li>
            <li>
              <span details={User}>{User.username}</span>
            </li>
            <li>
              <span details={User}>{User.email}</span>
            </li>
            <li>
              <span details={User}>
                {User.address.street}
                {User.address.suite}
                {User.address.city}
                {User.address.zipcode}
              </span>
            </li>
            <li>
              <span details={User}>
                {User.address.geo.lat}
                {User.address.geo.lng}
              </span>
            </li>
            <li>
              <span details={User}>{User.phone}</span>
            </li>
            <li>
              <span details={User}>{User.website}</span>
            </li>
            <li>
              <span details={User}>
                {User.company.name}
                {User.company.catchPhrase}
                {User.company.bs}
              </span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
