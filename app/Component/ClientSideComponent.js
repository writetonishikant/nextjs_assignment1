"use client";
import { useState } from "react";
import classes from "../page.module.css";
const ClientSideComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>This is a Client-Side Component</h3>
      <p>Count: {count}</p><br/>
      <button onClick={increment}>Increment</button>
      <br/><br/>
      <div className={classes.description}>
        <p>Here component is rendered and managed by client side.</p>
        <p>State is updating and rerendring at every time user perform onClick event. This means the code is running on the client side.</p>
      </div>
    </div>
  );
};

export default ClientSideComponent;
