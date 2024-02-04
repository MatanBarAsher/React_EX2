import "./App.css";
import CCColors from "./ClassComps/CCColors";
import CCTable from "./ClassComps/CCTable";
import CCForm from "./ClassComps/CCForm";

function App() {
  return (
    <>
      <h1>Home Assignment 1</h1>
      <p>Matan Bar Aser & Yael Terner</p>
      <div>
        <h2>Question 1:</h2>
        <CCColors />
      </div>

      <div>
        <h2>Question 2:</h2>
        <CCForm />
      </div>

      <div>
        <h2>Question 3:</h2>
        <CCTable />
      </div>
    </>
  );
}

export default App;
