import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import data from "../data";


function Main() {

    const [people, setPeople] = useState(data);

    function handleClick() {
        setPeople([]);
    }

    return(
        <div className="main">
            <Header 
                length={people.length}
            />
            <div className="listContainer">
                {people.map(person => (
                    
                    <List
                        key={person.key} 
                        name={person.name}
                        image={person.image}
                        age={person.age}
                    />
                    
                    
                ))}
            </div>
            <button type="submit" className="btn" onClick={handleClick}>clear all</button>
        </div>
    )
}

export default Main;