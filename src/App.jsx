import "./App.css";
import RandomPass from "./components/RandomPass";
import Practice from "./practiceComponents/Practice";
function App() {
  return (
    <>
      <h1 className="app__name">Random Password Generator</h1>
      <RandomPass />
      {/* <Practice /> */}
    </>
  );
}

export default App;
