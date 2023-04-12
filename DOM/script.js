const pState = document.getElementById("stateId");
const setButton = document.getElementById("setStateId");

function useState(initialState) {
  let state = initialState;

  function setState(value) {
    console.log(value);
    state = value;
    pState.textContent = value;
  }

  return [state, setState];
}

const [state, setState] = useState("This is the initial state");

pState.textContent = state;

setButton.addEventListener("click", () => setState("New state"));

console.log(state);
