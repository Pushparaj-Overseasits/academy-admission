import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import Admin2 from "layouts/Admin2";
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/admin2" component={Admin2} />
      <Route path="/auth" component={Auth} />
     
      <Route path="/" exact component={Index} />
      
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
