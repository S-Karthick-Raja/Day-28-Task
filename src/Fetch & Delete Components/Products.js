import { Product } from "../Components/Products";
import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../global_constants";
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";


export default function Fetchproducts() {
  const [camera, setCamera] = useState([]);
  const history = useHistory();

  // GET - METHOD
  const getCamera = () => {
    fetch(`${API_URL}/camera`)
      .then((data) => data.json())
      .then((ur) => setCamera(ur));
  };
  useEffect(getCamera, []);

  // DELETE- METHOD
  const deletecamera = (id) => {
    fetch(`${API_URL}/camera/${id}`, {
      method: "DELETE",
    }).then(() => getCamera())
  };


  return (
    <div className="product">
      {camera.map(
        ({ name, pic, price, type, id, about1, about2, about3 }) => (
          <Product
            key={id}
            name={name}
            pic={pic}
            price={price}
            type={type}
            about1={about1}
            about2={about2}
            about3={about3}
            editButton={
              <Button
                color="success"
                aria-label="edit-camera"
                onClick={() => history.push("/camera/edit/" + id)}
              >
                Edit <EditIcon />
              </Button>
            }
            deleteButton={
              <Button
                onClick={() => deletecamera(id)}
                color="error"
                aria-label="delete-camera"
              >
                Delete <DeleteIcon />
              </Button>
            }
          />
        )
      )}
    </div>
  )
};