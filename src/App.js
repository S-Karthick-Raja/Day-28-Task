import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import { Topbar } from "./Components/Topbar";
import Fetchproducts from "./Fetch & Delete Components/Products";
import Fetchusers from "./Fetch & Delete Components/Users";
import { Editusers } from "./Edit Component/Edituser";
import { Addusers } from "./Add Component/Addusers";
import { Editproducts } from "./Edit Component/Editproduct";
import { Addcameras } from "./Add Component/Addcameras";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Fetchproducts} />
          <Route exact path="/users" component={Fetchusers} />
          <Route path="/users/edit/:id"> <Editusers  /> </Route>
          <Route path="/camera/edit/:id"> <Editproducts  /> </Route>
          <Route path="/Addusers"> <Addusers /> </Route>
          <Route path="/Addcameras"> <Addcameras /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
