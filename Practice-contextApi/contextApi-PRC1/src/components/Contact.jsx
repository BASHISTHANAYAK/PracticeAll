import { useContext } from "react";
import { authoriseContext } from "../contextApi/createApi";

const Contact = () => {
  console.log("Contact Page");

  const { isAuthorised } = useContext(authoriseContext);

  return (
    <div>
      contact
      <h3>{isAuthorised ? "Authorized" : "Not Authorized"}</h3>
    </div>
  );
};

export default Contact;
