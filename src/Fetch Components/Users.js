import { useEffect, useState } from "react";
import { API_URL } from "../global_constants";
import { User } from "../Components/Users";

export default function Fetchusers() {
    const [profile, setProfile] = useState([]);

    // GET - METHOD
    const getProfile = () => {
        fetch(`${API_URL}/users`)
            .then((data) => data.json())
            .then((ur) => setProfile(ur));
    };
    useEffect(getProfile, []);
    return (
        <div className="user">
            {profile.map(
                ({ reatedAt, name, avatar, id }) => (
                    <User
                        key={id}
                        name={name}
                        avatar={avatar}
                    />
                )
            )}
        </div>
    )
};