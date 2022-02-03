

export function User({ name, avatar, deleteButton, editButton }) {
    
    
    return (
        <section className="user-main">
        <div className="user-container">
            <img className="user-avatar" src={avatar} alt={name} />
            <div>
                <p className="user-name">{name}</p>
                <div>
                     {editButton} {deleteButton}
                </div>
            </div>
        </div>
        </section>
    );
}

