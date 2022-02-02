import { Product } from "../Components/Products";
import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../global_constants";


export default function Fetchproducts() {
    const [camera, setCamera] = useState([]);

    // GET - METHOD
    const getCamera = () => {
      fetch(`${API_URL}/camera`)
        .then((data) => data.json())
        .then((ur) => setCamera(ur));
    };
    useEffect(getCamera, []);
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
              />
            )
          )}
        </div>
    )
};