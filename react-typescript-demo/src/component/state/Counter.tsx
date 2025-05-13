import { useReducer } from "react";

// userReducer is used to Manage state.
// We use usereducer, when we have lots of state and methods

// We had use state earlier.

// const [count, setCount] = useState(0);

// const increaseCount = () => { setCount((prev) => prev + 1);};

// const decreaseCount = () => { setCount((prev) => prev 1);};

type CounterState = { count: number };

//discrimanate unions

type payloadState = {
  type: "increment" | "decrement";
  payload: number;
};

type actionState = {
  type: "reset";
};

type actionPayloadState = payloadState | actionState;

//discrimanate unions

const intialState = { count: 0 };

//If we have complex logic, the next state depends upon previous state, we use usereducer hook

function reducer(state: CounterState, action: actionPayloadState) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return intialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <div>Count: {state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        increment 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      >
        decrement 10
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Counter;
