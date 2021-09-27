import React from 'react';
import './Card.css';

const Card: React.FC<any> = (props: any) => {
    console.log(props);
    return (
        <div className="card">
            {props.children}
        </div>
    )
}

export default Card;