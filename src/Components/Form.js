import React, { useState } from "react";

const Form = (props) => {
  const { boxColorArray, setBoxColorArray } = props;
  const [color, setColor] = useState("");
  const [size, setSize] = useState(50);

  const submitHandler = (event) => {
    event.preventDefault();
    setBoxColorArray([...boxColorArray, { color, size: size + "px" }]);
    setColor("");
    setSize(50);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">Color</label>
        <input
          type="text"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />
        <label htmlFor="firstName">Pixels</label>
        <input
          type="text"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
