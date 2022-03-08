import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Container, Card, Button, Row, Col } from "reactstrap";
import { signup, getUser, login } from "./App/module";

import "./App.css";

import HomePage from "./App/Homepage/index";
import Meet from "./App/Meet";
import Webinar from "./App/Webinar";
import Authenticate from "./App/Meet/Authenticate";
import { CustomModal } from "./App/Common/Modal";

const WrapperRoute = ({
  component: Component,
  user,
  setShowLogin,
  showLogin,
  setShowRegister,
  showRegister,
  userlogin,
  setUserlogin,
  userReg,
  setUserReg,
  handleRegister,
  handleLogin,
  isClassActive,
  setClassState,
  isWebinarActive,
  setWebinarState,
  ...restProps
}) => {
  return (
    <Route
      {...restProps}
      render={(props) => {
        return (
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
              <img
                src="./images/zen-logo.png"
                height="67"
                className="offset-1"
                alt="Zen Class Logo"
              />

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <span
                      className={
                        isClassActive
                          ? "nav-link active-link tab active"
                          : "nav-link tab"
                      }
                      onClick={() => {
                        props.history.push("/");
                        setClassState(true);
                        setWebinarState(false);
                      }}
                    >
                      Classroom{" "}
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className={
                        isWebinarActive
                          ? "nav-link active-link tab active"
                          : "nav-link tab"
                      }
                      onClick={() => {
                        props.history.push("/webinar");
                        setWebinarState(true);
                        setClassState(false);
                      }}
                    >
                      Webinar
                    </span>
                  </li>
                  <li>
                    {user !== null ? (
                      <a
                        href={`${
                          process.env.REACT_APP_PORTAL_URL
                        }/validate/${localStorage.getItem("$zen_auth_token")}`}
                        rel="noreferrer"
                        target={"_blank"}
                      >
                        {user.name}
                      </a>
                    ) : (
                      <>
                        <button
                          className="button-border"
                          onClick={() => {
                            setShowLogin(!showLogin);
                          }}
                        >
                          Login
                        </button>
                        <button
                          className="button-fill"
                          onClick={() => {
                            setShowRegister(!showRegister);
                          }}
                        >
                          Sign Up
                        </button>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </nav>

            {showRegister ? (
              <CustomModal isModalOpen={showRegister}>
                <div className="">
                  <div className="modal-header">
                    <div className="d-flex justify-content-between w-100">
                      <h5 className="modal-title">Signup</h5>
                      <span
                        className="close pointer"
                        onClick={() => {
                          setShowRegister(!showRegister);
                        }}
                      >
                        X
                      </span>
                    </div>
                  </div>

                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder=" Name"
                          value={userReg.name}
                          onChange={(e) =>
                            setUserReg((usr) => ({
                              ...usr,
                              name: e.target.value,
                            }))
                          }
                        />

                        <input
                          type="text"
                          placeholder="Email"
                          value={userReg.email}
                          onChange={(e) =>
                            setUserReg((usr) => ({
                              ...usr,
                              email: e.target.value,
                            }))
                          }
                        />

                        <input
                          type="text"
                          placeholder="Mobile"
                          value={userReg.mobile}
                          onChange={(e) =>
                            setUserReg((usr) => ({
                              ...usr,
                              mobile: e.target.value,
                            }))
                          }
                        />

                        <input
                          type="password"
                          name="password"
                          value={userReg.password}
                          onChange={(e) =>
                            setUserReg((usr) => ({
                              ...usr,
                              password: e.target.value,
                            }))
                          }
                          placeholder="Password"
                          required
                        />

                        <button onClick={handleRegister}>Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </CustomModal>
            ) : null}

            {showLogin ? (
              <CustomModal isModalOpen={showLogin}>
                <div className="">
                  <div className="modal-header">
                    <div className="d-flex justify-content-between w-100">
                      <h5 className="modal-title">SIGN IN</h5>
                      <span
                        className="close pointer"
                        onClick={() => {
                          setShowLogin(!showLogin);
                        }}
                      >
                        X
                      </span>
                    </div>
                  </div>

                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <p>Email</p>
                        <input
                          type="text"
                          placeholder="Email"
                          value={userlogin.email}
                          onChange={(e) =>
                            setUserlogin((usr) => ({
                              ...usr,
                              email: e.target.value,
                            }))
                          }
                        />
                        <p>Password</p>
                        <input
                          type="password"
                          placeholder="Password"
                          value={userlogin.password}
                          onChange={(e) =>
                            setUserlogin((usr) => ({
                              ...usr,
                              password: e.target.value,
                            }))
                          }
                        />
                        <Button color="success" onClick={handleLogin}>
                          Login
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </CustomModal>
            ) : null}

            <Component />
          </>
        );
      }}
    />
  );
};

function App() {
  const [user, setUser] = useState(null);

  const [userlogin, setUserlogin] = useState({ email: "", password: "" });
  const [userReg, setUserReg] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isClassActive, setClassState] = useState(true);
  const [isWebinarActive, setWebinarState] = useState(false);
  const [isSignupModalActive, setSignupModal] = useState(false);
  const [isLoginModalActive, setLoginModal] = useState(false);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("$zen_auth_token");
  };

  useEffect(() => {
    const token = localStorage.getItem("$zen_auth_token");
    console.log("token:::", token);
    if (token) {
      getUser(token)
        .then((data) => {
          setUser(data);
        })
        .catch(() => {
          logout();
        });
    } else {
      logout();
    }
  }, []);

  const handleLogin = () => {
    const { email, password } = userlogin;
    login(email, password).then((data) => {
      const { user: userData, token } = data;
      setUser(userData);
      localStorage.setItem("$zen_auth_token", token);
      setShowLogin(!showLogin);
    });
  };

  const handleAuth = (userData, token) => {
    setUser(userData);
    localStorage.setItem("$zen_auth_token", token);
  };

  const handleRegister = () => {
    const { name, email, mobile, password } = userReg;
    signup(name, email, mobile, password).then(() => {
      console.log("heyyy done");
      setSignupModal(!isSignupModalActive);
    });
  };

  return (
    <Router>
      <div className="App">
        <div className="containter-fluid">
          <Switch>
            <WrapperRoute
              exact
              path="/"
              component={HomePage}
              user={user}
              setShowLogin={setShowLogin}
              showLogin={showLogin}
              setShowRegister={setShowRegister}
              showRegister={showRegister}
              userlogin={userlogin}
              setUserlogin={setUserlogin}
              userReg={userReg}
              isClassActive={isClassActive}
              setClassState={setClassState}
              isWebinarActive={isWebinarActive}
              setWebinarState={setWebinarState}
              setUserReg={setUserReg}
              handleRegister={handleRegister}
              handleLogin={handleLogin}
              isSignupModalActive={isSignupModalActive}
              setSignupModal={setSignupModal}
              isLoginModalActive={isLoginModalActive}
              setLoginModal={setLoginModal}
            />
            <WrapperRoute
              exact
              path="/webinar"
              component={Webinar}
              user={user}
              setShowLogin={setShowLogin}
              showLogin={showLogin}
              setShowRegister={setShowRegister}
              showRegister={showRegister}
              userlogin={userlogin}
              setUserlogin={setUserlogin}
              userReg={userReg}
              setUserReg={setUserReg}
              handleRegister={handleRegister}
              handleLogin={handleLogin}
              isClassActive={isClassActive}
              setClassState={setClassState}
              isWebinarActive={isWebinarActive}
              setWebinarState={setWebinarState}
              isSignupModalActive={isSignupModalActive}
              setSignupModal={setSignupModal}
              isLoginModalActive={isLoginModalActive}
              setLoginModal={setLoginModal}
            />
            <Route
              exact
              path="/webinar/:webinar_id"
              render={() => <Meet user={user} />}
            />
            <Route
              exact
              path="/webinar/:webinar_id/:token"
              render={() => <Authenticate handleAuth={handleAuth} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
