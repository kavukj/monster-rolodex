import React from 'react';
import './card-list.styles.css';
import { Card } from '../cards/card.component';

export const CardList = props => (
    <div className = "cardList">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}> </Card>
        ))}
    </div>
)
