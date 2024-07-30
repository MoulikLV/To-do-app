import React, { useState } from "react";

const Inputcontainer = ({value,handleInput,addTodo,inputref,handlekey}) => {

  

  return (
    <div className="input-container">
      <input type="text" value={value} onChange={handleInput} ref={inputref} placeholder="Add to do" onKeyDown={handlekey} />
      <button onClick={addTodo}>+</button>
     
    </div>
  );
};

export default Inputcontainer;
