import { useContext, useRef } from "react";
import { authoriseContext } from "../contextApi/createApi";

const Home = () => {
  const nameRef = useRef(null);
  console.log("Home Page");
  const { isAuthorised, chnageAuthorise, name, setName } =
    useContext(authoriseContext);

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
          <h3> Welcome {name && name}</h3>

          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
          <section>
            <input type="text" ref={nameRef} />
          </section>
          <button
            onClick={() => {
              authorise();
              setName(() => nameRef.current.value);
            }}
          >
            Authorise yourself By Entering Name.
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
