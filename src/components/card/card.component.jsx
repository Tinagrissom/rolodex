import React from 'react';

import './card.styles.css';

export const Card = (props) => (
 <div className='card-container'>
     <img alt="contact" src={"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80&size=180x180"}
     <h1> {props.contact.name}</h1>
 </div>
)