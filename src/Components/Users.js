import Button from "@mui/material/Button";
import { Delete, Edit } from "@mui/icons-material";


export function User({ name, avatar }) {
    return (
        <div className="user-container">
            <img className="user-avatar" src={avatar} alt={name} />
            <div>
                <p className="user-name">{name}</p>
                <Button
                    style={{marginRight:"10px"}}
                    color="success"
                    variant="contained"
                    endIcon={<Edit />}
                >
                    Edit
                </Button>
                <Button
                    color="error"
                    variant="contained"
                    endIcon={<Delete />}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}
