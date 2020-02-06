import axios from "axios";

function Auth() {
  let loggedIn = false;

  function logIn(username, password, cb) {
    axios
      .post("/api/authenticate", { username: username, password: password })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        cb(response.data);
      });
  }

  function logOut() {
    localStorage.removeItem("token");
    loggedIn = false;
    window.location.reload(false);
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function isLoggedIn() {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  return {
    isLoggedIn,
    logIn,
    logOut,
    getToken,
    loggedIn
  };
}

export default Auth();
