import { useContext } from "react";
import { UserContext } from "./Component1";
const Component4 = () => {
  const userName = useContext(UserContext);
  return (
    <>
      <div>
        <h2>Component 4</h2>
        <p>
          Getting user info in this component from <strong>Component1</strong>
        </p>
        <h4>{`This is ${userName}!`}</h4>
      </div>
    </>
  );
};

export default Component4;
