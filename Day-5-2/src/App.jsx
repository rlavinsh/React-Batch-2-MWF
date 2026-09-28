import React from "react";

const App = () => {
  function handleMouseEnter() {
    console.log("Mouse Enter");
  }
  function handleMouseLeave() {
    console.log("Mouse Leave");
  }
  function handleInput(event) {
    console.log(event.target.value);

    console.log("user typing..");
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }
  return (
    <div>
      <h1
        style={{ border: "2px solid black", margin: "5px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hello
      </h1>
      <button
        onClick={() => {
          console.log("Hello React");
        }}
      >
        click
      </button>
      <br />
      <br />
      {/* <input type="text" placeholder="Enter your Name" onChange={handleInput} /> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={handleInput}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
