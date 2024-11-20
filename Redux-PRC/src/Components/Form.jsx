import { useReducer } from "react";

// Action type constants for clarity and maintainability
const actionTypes = {
  TODO_NAME: 'TODO_NAME',
  TODO_DETAILS: 'TODO_DETAILS',
  STATUS: 'STATUS',
};

const initialData = {
  todoName: "",
  todoDetails: "",
  status: "",
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case actionTypes.TODO_NAME:
      return { ...state, todoName: action.payload };
    case actionTypes.TODO_DETAILS:
      return { ...state, todoDetails: action.payload };
    case actionTypes.STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  // fillDetails function to handle form updates
  function fillDetails(event) {
    const { name, value } = event.target;
    console.log({ name, value });

    // Dispatch the action based on the input name
    if (name === "status") {
      dispatch({ type: actionTypes.STATUS, payload: value });
    } else if (name === "todoName") {
      dispatch({ type: actionTypes.TODO_NAME, payload: value });
    } else if (name === "todoDetails") {
      dispatch({ type: actionTypes.TODO_DETAILS, payload: value });
    }
  }

  console.log(state);

  return (
    <div>
      <form>
        <input
          type="text"
          name="todoName"
          placeholder="Todo Name"
          value={state.todoName}
          onChange={fillDetails} // Changed to onChange for better practice
        />
        <br />
        <input
          type="text"
          name="todoDetails"
          placeholder="Todo Details"
          value={state.todoDetails}
          onChange={fillDetails} // Changed to onChange for better practice
        />
        <br />
        <label>Status</label>
        <hr />
        <input
          type="radio"
          name="status"
          onChange={fillDetails} // Changed to onChange for better practice
          value="completed"
        />{" "}
        Completed
        <br />
        <input
          type="radio"
          name="status"
          onChange={fillDetails} // Changed to onChange for better practice
          value="incompleted"
        />{" "}
        Incompleted
      </form>
    </div>
  );
};

export default Form;
