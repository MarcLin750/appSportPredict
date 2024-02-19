import React, { FunctionComponent, useState } from "react";
import ListOfSessions from "../models/listofsessions";

type Props ={
    session: ListOfSessions;
    backgroundColor?: string
}

const SessionCard: FunctionComponent<Props> = ({session, backgroundColor = '#ACE4FC'}) => {
    
    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(backgroundColor);
    }

    const hideBorder = () => {
        setColor('');
    }

    return(
        <div>
            <div className="card" style={{ backgroundColor: color }} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
                <div className="card-item">
                    <h4> {session.sport} </h4>
                    <h5> {session.session_id} </h5>
                </div>
                <div className="card-item2">
                    <h5> Durée: {session.duration2} </h5>
                    <h5> Distance: {session.distance} </h5>
                </div>
            </div>
        </div>
    )
}

export default SessionCard;