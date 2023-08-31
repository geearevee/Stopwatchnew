import { useState } from "react";
import { useRef } from "react";
function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const referance = useRef();
  function addtodo() {
    setTodo([...todo, referance.current.value]);
  }

  function del(index) {
    let newtodo = todo.filter((items, idx) => idx != index);
    setTodo(newtodo);
  }

  return (
    <>
      <input ref={referance} type="text" />
      <button onClick={addtodo}>Add</button>

      <div>
        {todo.map((items, index) => (
          <>
            <p>{items}</p>
            <button onClick={() => del(index)}>Del</button>
          </>
        ))}
      </div>
    </>
  );
}

export default Todo;
