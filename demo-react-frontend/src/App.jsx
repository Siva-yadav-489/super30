import ReactRouter from "./components/ReactRouter/ReactRouter";
import UseEffExample from "./components/UseEffExample";
import PrevTracker from "./components/useRef/PrevTracker";
import Form2Inputs from "./components/useRef/Form2Inputs";
import RenderCount from "./components/useRef/RenderCount";

function App() {
  return (
    <div className="m-16">
      <UseEffExample />
      <hr />
      <ReactRouter />
      <hr />
      <Form2Inputs />
      <hr />
      <PrevTracker />
      <hr />
      <RenderCount />
    </div>
  );
}

export default App;
