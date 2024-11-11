import { useContext } from "react";
import { authoriseContext } from "../contextApi/createApi";

const About = () => {
  console.log("About Page");

  const { isAuthorised } = useContext(authoriseContext);
  return (
    <div>
      about
      <h3>{isAuthorised ? "Authorized" : "Not Authorized"}</h3>
    </div>
  );
};

export default About;
