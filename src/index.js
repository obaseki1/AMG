import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/app";
import Coaches from "./components/coaches";
import Programs from './components/programs'

ReactDOM.render(
    
  
  <Router history={browserHistory}>
    <Route path="/app" component={App} />
    <Route path="/coaches" component={Coaches} />
    <Route path="/programs" component={Programs} />
  </Router>,
  document.getElementById("root")
);
