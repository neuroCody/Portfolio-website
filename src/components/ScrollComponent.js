import React from 'react';
import { Card } from 'reactstrap';

const Card = Card;

const options = { 
    root: null, // it is the viewport
    threshold: 0,
    rootMargin: "-150px" 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        console.log(entry.target);
    })
}, options); 

function Observer(props) {
    return(
        observer.observe(props)
    )
}

export default  Observer;
