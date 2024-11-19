import { useReducer, useRef } from "react";
let intialState = {

  allUsersData: [],
};
const Form = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "addUser":
        return {
          ...state,
          allUsersData: [...state.allUsersData, action.payload],
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, intialState);
  const emailRef = useRef();
  const nameRef = useRef();

  //submitForm
  function submitForm(e) {
    e.preventDefault();
    let obj = {
      id: Date.now(),
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    dispatch({ type: "addUser", payload: obj });
  }
  console.log(state);

  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="email" ref={emailRef} />
        <br />
        <input type="text" ref={nameRef} />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <section>
        <h1>Users Details</h1>

        {state.allUsersData.length > 0 &&
          state.allUsersData.map((obj, i) => (
            <h2 key={Date.now() + i}>Email: {obj.email}</h2>
          ))}
      </section>
    </>
  );
};

export default Form;
