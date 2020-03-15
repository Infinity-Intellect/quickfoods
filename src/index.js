import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter } from "react-router-dom";
import CartView from "./views/CartView.js";
import wallpaper from "./wallpaper3.gif";

document.body.style = "background-image:url(" + wallpaper + ")";
document.body.style.backgroundAttachment = "fixed";

const Routing = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/cart" component={CartView} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(Routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
