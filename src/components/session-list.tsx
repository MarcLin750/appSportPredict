import React, { FunctionComponent, useState, useEffect } from "react";
import ListOfSessions from "../models/listofsessions";
import SessionCard from "./session-card";

import '../styles/session-list.css'

const SessionList: FunctionComponent = () => {
    const [listOfSessions, setListOfSessions] = useState<ListOfSessions[]>([]);
    
    useEffect(() => {
        // Appel à l'API et traitement des données
        fetch('https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/listofsessions')
          .then(response => response.json())
          .then((data: any[]) => {
            // Mapping des données et formatage
            const formattedData: ListOfSessions[] = data.map(data => ({
              SESSIONID: data[0],
              SPORT: data[1],
              DURATION2: data[2],
              DISTANCE: data[3]
            }));
            
            // Assignation des données formatées à LISTOFSESSIONS
            setListOfSessions(formattedData);
        
            // console.log(LISTOFSESSIONS);
          });
    }, []);

    return(
        <div className="session-list">
            <h2 className="title-session">Liste des entrainements</h2>
            <ul style={{ overflowY: "scroll"}}>
                {listOfSessions.map(session => (
                    <SessionCard key={session.SESSIONID} session={session}/> 
                ))}
            </ul>
        </div>
    )
}

export default SessionList;