import React from "react";
import Card from "./components/Card";
import Card1 from "./components/Card1";
import profileData from "./profiles.json";
const App = () => {
  // console.log(profileData);

  const skills = ["HTML", "CSS", "JS"];
  const user = {
    email: "hello123@gmail.com",
  };

  function greet(userName) {
    console.log(`hello ${userName}`);
  }

  return (
    <div className="parent">
      {/* {profileData.map((user) => {
        return (
          <Card
            key={user.id}
            imageUrl={user.imageUrl}
            name={user.username}
            profile={user.profile}
            btnText={user.buttonText}
          />
        );
      })} */}
      <Card1 age={25} skills={skills} user={user} greet={greet} />
    </div>
  );
};

export default App;
