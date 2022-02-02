import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { Topbar } from "./Components/Topbar";
import Fetchproducts from "./Fetch Components/Products";
import Fetchusers from "./Fetch Components/Users";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Fetchproducts} />
          <Route exact path="/users" component={Fetchusers} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
