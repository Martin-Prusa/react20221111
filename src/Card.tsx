import React, { ReactNode } from 'react';
import './Card.css';

interface CardPropsTypes {
    children: ReactNode
  }

function Card({children}: CardPropsTypes) {
    return (
    <div className='card'>  
        {children}
    </div>
    )
}

export default Card