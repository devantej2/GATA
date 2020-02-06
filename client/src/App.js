import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import authenticatedAxios from "./utils/AuthenticatedAxios";
import ProtectedRoute from "./Pages/ProtectedRoute";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import UserContext from "./context/UserContext";
import SignUp from "./Pages/SignUp";

class App extends Component {
  state = {
    user: null
  };

  setUser = user => {
    this.setState({ user });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      authenticatedAxios
        .get("/api/me")
        .then(response => this.setUser(response.data));
    }
  }

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <div>
          <header>
            <nav>
              <Link to="/">Home</Link> | <Link to="/login">Login</Link>
            </nav>
          </header>

          <UserContext.Provider
            value={{
              user: user,
              setUser: setUser
            }}
          >
            <ProtectedRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUp} />
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
