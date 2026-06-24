import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>Counter App</h1>

      <Counter
        title="Counter One"
        initialValue={0}
      />

      <Counter
        title="Counter Two"
        initialValue={10}
      />
    </div>
  );
}

export default App;