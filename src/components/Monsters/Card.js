import React from 'react';
import * as classNames from 'classnames';

import * as elements from "../../lib/elements";

import "./Card.css";

function Action({action, border}) {
    return (<div className={classNames({"Card--Action": true, "Card--Action--Border": border})}>
        {typeof(action) === "string" ? action : action.action}
        {action.image && <img className="Card--Image" src={action.image} alt="extra info for card"/>}
    </div>);
}

export function Card({className, card}) {
    return (
        <div className={className}>
            <div>^{card.initiative}</div>
            {card.actions.map((a, i) => {
                if (a.type === "element") {
                    // use element
                    return (
                        <div className={classNames("Card--ElementUsage", "Card--Action--Border")} key={i}>
                            {a.use && <div className={classNames("Card--Element", "Card--Element--Used")}>
                                <img className={classNames("Card--Element", "Card--Element--Icon", "Card--Element--UsedElement")} src={elements.iconForElement(a.use)} alt="use element"/>
                                <img className={classNames("Card--Element", "Card--Element--Icon", "Card--Element--UsedOverlay")} src={elements.useElementIcon} alt="use element"/>
                            </div>}
                            {a.use && <div className="Card--Element--Separator">:</div>}
                            {(a.action || a.image) && <div><Action action={a} /></div>}
                            {a.create && <div className={"Card--Element"}>
                                <img className={classNames("Card--Element", "Card--Element--Icon")} src={elements.iconForElement(a.create)} alt="use element"/>
                            </div>}
                        </div>
                    );
                }
                return (<Action key={i} action={a} border/>);
            })}
            {card.endAction && <div><strong>{card.endAction}</strong></div>}
        </div>
    );
}