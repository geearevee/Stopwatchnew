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
/*
  When do you use a Promise?
  - When you want to do something asynchronously


  if(....){}
  - some code that will require a lot of time to execute , this code is such that it 
    doesn't really affect the rest of the code only certain piece of code rely on this.
  for such kind of sutuation we use promises or async await 
  - promises were indroduced in ES6
  - async await was introduced in ES8
  while{}
  ... normall codel
  ... nomalr
*/

// const Promises = () => {
//   const [data, setData] = React.useState("loading..");
//   let someVar = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello World");
//     }, 2000);
//   })

//   someVar.then((data) => {
//     setData(data);
//   }).catch((e) => {
//     console.log(e);
//   })

//   async function getData() {
//     await setTimeout(() => {
//     }, 2000);
//     setData("Hello World");
//   }
//   try{
//     getData();

//   }catch(e){
//     console.log(e)
//   }

//   return <div>{data}</div>;
// };

// export default Promises;
