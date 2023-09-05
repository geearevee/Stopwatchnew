import React from "react";

const childmemo = ({ name, age }) => {
  return (
    <div>
      {name}, hi {age}
    </div>
  );
};

export default React.memo(childmemo);
