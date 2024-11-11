import { useState } from "react";
import { authoriseContext } from "./createApi";
import PropTypes from "prop-types";

const AuthoriseProvider = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  //   chnage authoriseState
  function chnageAuthorise() {
    setIsAuthorised((pre) => !pre);
  }

  return (
    <authoriseContext.Provider value={{ isAuthorised, chnageAuthorise }}>
      {children}
    </authoriseContext.Provider>
  );
};

// adding propValidations
AuthoriseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthoriseProvider;
