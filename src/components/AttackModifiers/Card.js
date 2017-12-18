import React from 'react';
import * as classNames from "classnames";

import {END_ACTIONS} from "./constants";

import "./Card.css";

export function Card({card, mostRecent}) {
    return (
        <div className={classNames({
            "AttackModifiers--Card": true,
            "AttackModifiers--Card--Shuffle": !mostRecent && card.endAction === END_ACTIONS.RESHUFFLE,
            "AttackModifiers--Card--MostRecent": mostRecent,
        })}>
            <div>{card.modifier}</div>
            {card.endAction && <div>{card.endAction}</div>}
        </div>
    );
}