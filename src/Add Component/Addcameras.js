import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../global_constants";

export function Addcameras() {
    const [name, setName] = useState("");
    const [pic, setPic] = useState("");
    const [type, setType] = useState("");
    const [about1, setAbout1] = useState("");
    const [about2, setAbout2] = useState("");
    const [about3, setAbout3] = useState("");
    const [price, setPrice] = useState("");
    const history = useHistory();

    const addCamera = () => {
        const newCameras = {
            name,
            pic,
            type,
            about1,
            about2,
            about3,
            price,
        };

        fetch(`${API_URL}/camera`, {
            method: "POST",
            body: JSON.stringify(newCameras),
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
                <Button onClick={addCamera} variant="contained" endIcon={<SendIcon />}>
                    Add User
                </Button>
            </div>
        </div>
    );
}
