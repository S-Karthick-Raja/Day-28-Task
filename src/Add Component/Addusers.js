import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../global_constants";

export function Addusers() {
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const history = useHistory();

    const addUser = () => {
        const newUsers = {
            name,
            avatar,
        };

        fetch(`${API_URL}/users`, {
            method: "POST",
            body: JSON.stringify(newUsers),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => history.push("/users"));
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
                    value={avatar}
                    onChange={(event) => setAvatar(event.target.value)}
                    id="filled-basic"
                    label="User url"
                    variant="filled"
                    type="url"
                    focused
                />
            </div>
            <div className="add-button">
                <Button onClick={addUser} variant="contained" endIcon={<SendIcon />}>
                    Add User
                </Button>
            </div>
        </div>
    );
}
