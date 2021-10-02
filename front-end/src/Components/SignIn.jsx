import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const SignIn = ({ isOpen }) => {
  //login or registration mode
  const [mode, setMode] = useState("login");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");


  const onModeChange = (value) => {
    setMode(value);
  };
  const onLoginChange = (e) => {
    setLogin(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };
  const logIn = (e) => {
    e.preventDefault();
    if (mode === "register" && password===repeatPassword) {
      console.log("passowrd match")
    }else if()
  };
  useEffect(() => {
    setMode("login");
  }, []);
  return (
    <div
      className={`modal-dialog ${
        isOpen && "show"
      } fade modal-dialog-centered top-100 start-50 translate-middle-x position-absolute`}
    >
      <div className="modal-content bg-light w-400">
        <div className="modal-body p-4 p-md-5 ">
          <div className="icon d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faUser} className="mx-2 " />
          </div>
          <h3 className="text-center mb-4">Sign In</h3>

          <form onSubmit={(e) => logIn(e)} className="login-form">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control rounded-left"
                placeholder="Username"
                onChange={onLoginChange}
                required
              />
            </div>
            <div className="form-group d-flex mb-3">
              <input
                type="password"
                className="form-control rounded-left"
                placeholder="Password"
                onChange={onPasswordChange}
                required
              />
            </div>
            {mode === "register" && (
              <div className="form-group d-flex mb-3">
                <input
                  type="password"
                  className="form-control rounded-left"
                  placeholder="Repeat password"
                  onChange={onRepeatPasswordChange}
                  required
                />
              </div>
            )}
            <div className="form-group mb-3">
              <button
                type="submit"
                className="form-control btn btn-primary rounded submit px-3 text-capitalize"
              >
                {mode}
              </button>
            </div>
          </form>
        </div>
        <div className="modal-footer justify-content-center">
          {mode === "login" ? (
            <p>
              Not a member?{" "}
              <button
                type="button"
                className="border border-primary bg-transparent"
                onClick={() => onModeChange("register")}
              >
                Create an account
              </button>
            </p>
          ) : (
            <p>
              Have account?{" "}
              <button
                type="button"
                className="border border-primary bg-transparent"
                onClick={() => onModeChange("login")}
              >
                Sign In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
