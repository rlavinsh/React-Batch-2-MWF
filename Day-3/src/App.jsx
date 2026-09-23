import React from "react";

const App = () => {
  const firstName = "Rahul";
  function greet() {
    console.log("welcome students");
  }
  const arr = [1, 2, 3];
  const age = 17;
  const isAdmin = false;
  const user = {
    email: "hello@gmail.com",
  };
  return (
    <div>
      <h1 className="header">Hello {firstName}</h1>
      {greet()}
      {console.log(2 + 2)}
      {console.log(2 * 10 + 2)}
      {/* {if(age>18){
        console.log("Eligible")
      }} */}

      {age > 18 ? "Eligible" : "Not Eligible"}
      {/* {for(let i=0;i<arr.length;i++){
        console.log(arr[i])
      }} */}

      {arr.map((val) => {
        console.log(val);
      })}

      {isAdmin ? console.log("Welcome") : console.log("Please login first")}

      {/* {user} */}
    </div>
  );
};

export default App;
