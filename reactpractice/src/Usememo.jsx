// usememo is used to memoize the values and it has dependency array it the value changes it will agaon compute the operation.
// react.memo is a higher order function whih will only re render if the props passed to child componenet is changed.
import { useState } from "react";
import Childmemo from "./Childmemo";

const Usememo = () => {
  const initalState = [
    {
      name: "vinit",
      age: 12,
    },
    {
      name: "visdfnit",
      age: 12,
    },
    {
      name: "vsdfinit",
      age: 12,
    },
    {
      name: "vinsdfit",
      age: 12,
    },
    {
      name: "viniwet",
      age: 12,
    },
  ];
  const [users, setUsers] = useState(initalState);
  return (
    <>
      <div>
        {users.map((item) => (
          <Childmemo name={item.name} age={item.age} />
        ))}
      </div>
      <button
        onClick={() => {
          let newList = [...users].slice(0, users.length - 1);
          setUsers(newList);
        }}
      >
        delete last
      </button>
    </>
  );
};

export default Usememo;

// Parent 5 child
//   -chile 1
//   -child 2
//   -child 3
//   -child 4
//   -child 5  - dlete chile 5

// if you delete child 5 then all the children will rerender

//   -chile 1 -rerender
//   -child 2 -rerender
//   -child 3 -rerender
//   -child 4 -rerender
//   -child 5 -rerender

// but when you use Rect.memo to wrap the component before exporing it then
// it will only rerender the child 5

//   -chile 1
//   -child 2
//   -child 3
//   -child 4
//   -child 5 - rerender i.e it will be removed from the dom
