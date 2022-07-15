import { createContext, useState } from "react";
import Component2 from "./Component2";
const UserContext = createContext();
const Component1 = () => {
  const [user, setUser] = useState("Khan");
  return (
    <>
      <UserContext.Provider value={user}>
        <div>
          <h2>Component 1</h2>
          <h4>{`This is ${user}!`}</h4>
        </div>
        <button
          onClick={() => {
            setUser("Hassan Khan");
          }}
        >
          Change Name
        </button>
        <Component2 name={user} />
      </UserContext.Provider>
    </>
  );
};

export default Component1;
export { UserContext };
