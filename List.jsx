import React from "react";

function List(props) {
    return (
        <div className="list">
            <img src={props.image} alt={props.name}></img>
            <>
                <h3>{props.name}</h3>
                <p>{props.age}</p>
            </>
            <br />
        </div>
    )
}

export default List;