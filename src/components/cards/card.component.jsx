import React from 'react';
import './cards.styles.css';

//This is a fucntional component and not class component unlinke App.js file
//So being a funtional component it does not have access to state, lifecycle methods, etc.
//It only works on props.
export const Card = (props) => (
    //size is optional &size=180x180
    <div className="cards">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2>{props.monster.name}</h2>
        <h3>{props.monster.email}</h3>
    </div>
   
)