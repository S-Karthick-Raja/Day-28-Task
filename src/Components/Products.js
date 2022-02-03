
export function Product({ pic, name, price, type, about1, about2, about3, deleteButton, editButton }) {
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
                        <div style={{ marginBottom: "1px", marginTop: "15px" }}>
                            {editButton} {deleteButton}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
