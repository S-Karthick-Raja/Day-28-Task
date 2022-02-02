import { Delete, Edit } from "@mui/icons-material";
import Button from "@mui/material/Button";


export function Product({ pic, name, price, type, about1, about2, about3 }) {
    return (
        <div>
            <section>
                <div className="laptop-container">
                    <div className="mainbody">
                        <img className="image" src={pic} alt={name} />
                        <h5>{name}</h5>
                        <p className="bodytype"> {type}</p>
                        <div className="about">
                            <ul>
                                <li> {about1} </li>
                                <li> {about2} </li>
                                <li> {about3} </li>
                            </ul>
                        </div>
                        <div className="price-tag">
                            <p className="price"> MRP Rs.{price}</p>
                            <p className="pricetax">inclusive of all taxes</p>
                        </div>
                        <div>
                            <Button
                                style={{ marginBottom: "10px", marginTop:"10px" }}
                                color="success"
                                variant="contained"
                                endIcon={<Edit />}
                            >
                                Edit
                            </Button>
                        </div>
                        <div>
                            <Button
                                style={{ marginBottom: "10px", marginTop:"10px" }}
                                color="error"
                                variant="contained"
                                endIcon={<Delete />}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
