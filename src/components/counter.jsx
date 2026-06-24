import useCounter from "../hooks/useCounter";

function Counter({ title, initialValue }) {
  const { count, increment, decrement, reset } =
    useCounter(initialValue);

  return (
    <div className="card">
      <h2>{title}</h2>

      <h1>{count}</h1>

      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  );
}

export default Counter;