import React, { FunctionComponent, useState } from "react";
import ListOfSessions from "../models/listofsessions";

type Props ={
    session: ListOfSessions;
    backgroundColor?: string
};

const SessionCard: FunctionComponent<Props> = ({session, backgroundColor = '#ACE4FC'}) => {
    
    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(backgroundColor);
    }

    const hideBorder = () => {
        setColor('white');
    }

    const formatDate = (date: string):string =>{

        const [datePart, timePart] = date.split('T');
        const [year, month, day] = datePart.split('-');
        const [hourMinuteSecond] = timePart.split('.');
        const [hour, minute] = hourMinuteSecond.split(':'); 

        return `${hour}:${minute} | ${day}.${month}.${year}`;
    }

    const formatDuration = (duration: number): string => {

        const [partOne] = duration.toString().split('.');

        return `${partOne}.`;
    }

    const formatDistance = (distance: number): string => {
        const [partOne] = distance.toString().split('.');

        return `${partOne} m.`
    }

    return(
        <div>
            <div className="card" style={{ backgroundColor: color }} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
                <div className="card-item">
                    <strong> {session.SPORT} </strong>
                    <small> {formatDate(session.SESSIONID)} </small>
                </div>
                <div className="card-item2">
                    <small> Durée: {formatDuration(session.DURATION2)} </small>
                    <small> Distance: {formatDistance(session.DISTANCE)} </small>
                </div>
            </div>
        </div>
    )
}

export default SessionCard;