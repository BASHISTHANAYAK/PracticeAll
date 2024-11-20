import { useState } from "react";

const Form = () => {
  const [giveDetails, setGiveDetails] = useState({
    todoName: "",
    todoDetails: "",
    status: "",
  });

  //fillDetails
  function fillDetails(event) {
    const { name, value } = event.target;
    if (name !== "status") {
      setGiveDetails((pre) => ({ ...pre, [name]: value }));
    } else {
      setGiveDetails((pre) => ({ ...pre, status: value }));
    }
  }
  console.log(giveDetails);

  return (
    <div>
      <form>
        <input
          type="text"
          name="todoName"
          placeholder="todo name"
          value={giveDetails.todoName}
          onInput={fillDetails}
        />
        <br />
        <input
          type="text"
          name="todoDetails"
          placeholder="toto details"
          value={giveDetails.todoDetails}
          onInput={fillDetails}
        />
        <br />
        <label>status</label>
        <hr />
        <input
          type="radio"
          name="status"
          onInput={fillDetails}
          value="completed"
        />{" "}
        completed
        <br />
        <input
          type="radio"
          name="status"
          onInput={fillDetails}
          value="incompleted"
        />{" "}
        incompleted
      </form>
    </div>
  );
};

export default Form;
