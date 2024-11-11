import { useContext } from "react";
import { authoriseContext } from "../contextApi/createApi";

const Home = () => {
  console.log("Home Page");
  const { isAuthorised, chnageAuthorise } = useContext(authoriseContext);

  //logout
  function logout() {
    console.log("Logout clicked...");
    chnageAuthorise();
  }

  //Authorise
  function authorise() {
    console.log("Authorise clicked...");
    chnageAuthorise();
  }
  return (
    <div>
      <h2>Home</h2>
      <h4>{isAuthorised ? "Authorized✅" : "NotAuthorized❌"}</h4>
      {isAuthorised ? (
        <div>
          Welcome <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={authorise}>Authorise yourself.</button>
      )}
    </div>
  );
};

export default Home;
