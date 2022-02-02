import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { API_URL } from "../global_constants";

export function Editcamera() {
  const { id } = useParams();
  const [camera, setCamera] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}/camera/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((ur) => setCamera(ur));
  }, [id]);

  // only show the update movie when the data is available
  return camera ? <UpdateCamera camera={camera} /> : "";
}

function UpdateCamera({ camera }) {
  const [name, setName] = useState(camera.name);
  const [pic, setPic] = useState(camera.pic);
  const [price, setPrice] = useState(camera.price);
  const [type, setType] = useState(camera.type);
  const [about1, setAbout1] = useState(camera.about1);
  const [about2, setAbout2] = useState(camera.about2);
  const [about3, setAbout3] = useState(camera.about3);
  const history = useHistory();

  const editcamera = (id) => {
    const UpdateCamera = {
      id,
      name,
      pic,
      price,
      type,
      about1,
      about2,
      about3,
    };

    fetch(`${API_URL}/movies/${camera.id}`, {
      method: "PUT",
      body: JSON.stringify(UpdateCamera),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/camera"));
  };
  return (
    <div className="wrap-movie-list">
      <div className="Add-movie-list">
        <TextField
          className="text-field"
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Camera Name"
          color="primary"
          focused
        />
        <TextField
          className="text-field"
          value={pic}
          onChange={(event) => setPic(event.target.value)}
          label="Pic URL"
          color="primary"
          type="url"
          focused
        />
        <TextField
          className="text-field"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          label="Price"
          color="primary"
          type="number"
          focused
        />
        <TextField
          className="text-field"
          value={type}
          onChange={(event) => setType(event.target.value)}
          label="Camera Body Type"
          color="primary"
          focused
        />
        <TextField
          className="text-field"
          value={about1}
          onChange={(event) => setAbout1(event.target.value)}
          label="Specification-1"
          color="primary"
          focused
        />
        <TextField
          className="text-field"
          value={about2}
          onChange={(event) => setAbout2(event.target.value)}
          label="Specification-2"
          color="primary"
          focused
        />
        <TextField
          className="text-field"
          value={about3}
          onChange={(event) => setAbout3(event.target.value)}
          label="Specification-3"
          color="primary"
          focused
        />
      </div>
      <div className="add-button">
        <Button
          onClick={editcamera}
          color="success"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
