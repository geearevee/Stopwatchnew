// USE PROMISE USING CALLBACK FUNCTION

import React from "react";
import { useState } from "react"; // React.useState

const Promises = () => {
  const [data, setData] = useState("");
  new Promise((resolve, reject) => {
    let x = 5;
    if (x > 4) {
      resolve("resolved555");
    } else {
      reject("Notresolved444");
    }
  })
    .then((result) => {
      setData(result);
    })
    .catch((error) => console.error(error));
  return <div>{data}</div>;
};

export default Promises;
