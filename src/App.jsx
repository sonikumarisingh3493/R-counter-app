import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">
        Counter App
      </h1>

      <p className="subtitle">
        Track and manage multiple counters with a custom React hook
      </p>

      <div className="counter-container">
        <Counter
          title=" Daily Progress Counter"
          initialValue={0}
        />

        <Counter
          title=" Goal Tracker Counter"
          initialValue={10}
        />
      </div>
    </div>
  );
}

export default App;