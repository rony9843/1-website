import { default as React, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserInfoContext } from "../../App";

export default function PrivateRoute({ children, ...rest }) {
  // use context
  const [loggingUserInfo, setLoginUsserInfo] = useContext(UserInfoContext);
  console.log("this is navbar page : ", loggingUserInfo.displayName);

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          loggingUserInfo.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/MyAccount",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
}
