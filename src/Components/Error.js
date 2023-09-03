import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const errormsg = useRouteError();
  return (
    <div>
      <h3>Error</h3>
      <h4>OOPS</h4>
      <h4>
        {errormsg.status}:{errormsg.statusText}
      </h4>
    </div>
  );
}

export default Error;
