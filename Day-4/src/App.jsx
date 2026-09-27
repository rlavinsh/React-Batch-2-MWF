import React from "react";
import Card from "./components/Card";
import Card1 from "./components/Card1";
import profileData from "./profiles.json";
const App = () => {
  // console.log(profileData);

  return (
    <div className="parent">
      {profileData.map((user) => {
        return (
          <Card
            key={user.id}
            imageUrl={user.imageUrl}
            name={user.username}
            profile={user.profile}
            btnText={user.buttonText}
          />
        );
      })}
    </div>
  );
};

export default App;
