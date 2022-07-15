// https://daveceddia.com/usecontext-hook/
// https://www.w3schools.com/react/react_usecontext.asp
import Component1 from "./components/Component1";
import "./styles.css";
const App = () => {
  return (
    <>
      <h1>createContext & useContext</h1>
      <p>
        How to use <code>useContext</code> and <code>createContext</code> and
        avoid prop drilling...
      </p>
      <Component1 />
    </>
  );
};

export default App;
