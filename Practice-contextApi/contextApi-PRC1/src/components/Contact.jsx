import { useContext } from "react";
import { authoriseContext } from "../contextApi/createApi";

const Contact = () => {
  console.log("Contact Page");

  const { isAuthorised, name } = useContext(authoriseContext);

  return (
    <div>
      contact
      <h3>
        {isAuthorised ? `Authorized person Name is - ${name}` : "Not Authorized"}
      </h3>
    </div>
  );
};

export default Contact;
