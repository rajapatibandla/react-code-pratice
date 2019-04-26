import { Router, Route } from "react-router";
import MyComponet from "./MyComponet";

function MyComponetRoute() {
  return (
    <Router>
      <switch>
        <Route path={"/mycomponet/MyComponet"} component={MyComponet} />
      </switch>
    </Router>
  );
}
