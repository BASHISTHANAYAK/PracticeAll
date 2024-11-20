import { useDispatch, useSelector } from "react-redux";
import { actionsToDo } from "../redux/action";

const DisplayPage = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("datas-", data.todos.allUserInfo);
  //delete
  function deleteTodo(id) {
    dispatch({ type: actionsToDo.DELETE_A_DATA, payload: id });
  }
  return (
    <div>
      {data.todos.allUserInfo.map((obj) => (
        <div key={obj.id} style={{ border: "2px solid green" }}>
          <h1>Todo Name: {obj.todoName}</h1>
          <h3>Status: {obj.status}</h3>
          <button onClick={() => deleteTodo(obj.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayPage;
