import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Timer from "./Timer";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  // const [isActive, setIsActive] = useState(true);

  async function getData() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    console.log(data);
  }

  // useEffect(() => {
  //   getData();
  // }, [count]);

  useEffect(function () {
    getData();
  });

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div>
      {/* {isActive && <Timer />}

      <button
        onClick={() => {
          setIsActive(false);
        }}
      >
        Unmount
      </button> */}

      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
