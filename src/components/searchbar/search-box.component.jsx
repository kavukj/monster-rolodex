import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => (
    //We will take placeholder as props object because it can be dynamic accodiring to what we want to search.
    <input type='search'
    className='search'
    placeholder={props.placeholder}
    onChange= {props.handleChangeEvent}
    />
)

/*
Both methods of declaring props are correct
export const SearchBox = ({placeholder,handleChangeEvent}) => (
    <input type='search'
    className='search' 
    placeholder={placeholder}
    onChange= {handleChangeEvent}
    />
)
*/