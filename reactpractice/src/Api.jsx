import React, { useEffect, useState } from "react";

const Api = () => {
  const [api, setApi] = useState([]);
  useEffect(() => {
    async function apicall() {
      let arr = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await arr.json();
      setApi(data);
    }
    apicall();
  }, []);

  return (
    <div>
      {api.map((items) => (
        <p>
          {items.title} <input type="checkbox" checked={items.completed} />
        </p>
      ))}
    </div>
  );
};

export default Api;

// obj.JSON.STRINGIFY()   arr=>.map

// stopwatch 
