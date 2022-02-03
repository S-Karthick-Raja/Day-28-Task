import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { API_URL } from "../global_constants";

export function Editproducts() {
    const { id } = useParams();

    const [camera, setCamera] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/camera/${id}`, { method: "GET" })
            .then((data) => data.json())
            .then((mv) => setCamera(mv));
    }, [id]);

    // only show the update user when the data is available
    return camera ? <UpdateProducts camera={camera} /> : "";
}

function UpdateProducts({ camera, id }) {
    const [name, setName] = useState(camera.name);
    const [pic, setPic] = useState(camera.pic);
    const [type, setType] = useState(camera.type);
    const [about1, setAbout1] = useState(camera.about1);
    const [about2, setAbout2] = useState(camera.about2);
    const [about3, setAbout3] = useState(camera.about3);
    const [price, setPrice] = useState(camera.price);

    const history = useHistory();

    const editproduct = (id) => {
        const UpdatedProduct = {
            name,
            pic,
            type,
            about1,
            about2,
            about3,
            price,
        };

        fetch(`${API_URL}/camera/${camera.id}`, {
            method: "PUT",
            body: JSON.stringify(UpdatedProduct),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => history.push("/products"));
    };
    return (
        <div className="wrap-user-list">
            <div className="Add-user-list">
                <TextField
                    className="text-field"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    id="filled-basic"
                    label="User Name"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={pic}
                    onChange={(event) => setPic(event.target.value)}
                    id="filled-basic"
                    label="User url"
                    variant="filled"
                    type="url"
                    focused
                />
                <TextField
                    className="text-field"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                    id="filled-basic"
                    label="Type"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={about1}
                    onChange={(event) => setAbout1(event.target.value)}
                    id="filled-basic"
                    label="About-1"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={about2}
                    onChange={(event) => setAbout2(event.target.value)}
                    id="filled-basic"
                    label="About-2"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={about3}
                    onChange={(event) => setAbout3(event.target.value)}
                    id="filled-basic"
                    label="About-3"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    id="filled-basic"
                    label="Price"
                    variant="filled"
                    focused
                />
            </div>
            <div className="add-button">
                <Button
                    onClick={editproduct}
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
