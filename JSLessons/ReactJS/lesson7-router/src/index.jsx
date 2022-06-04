import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AppRouter from "./routers/AppRouter";
import './sass/style.css';


class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <AppRouter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
