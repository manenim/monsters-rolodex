import React from 'react'
import './card.styles.css'

const Card = (props) => {
    return (
        <div className = "card-container">
            <img src = {`https://robohash.org/${props.monster.id}}?set=set4/?size=20x20`} alt = 'monster' />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card
