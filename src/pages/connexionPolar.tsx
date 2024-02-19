import React, { FunctionComponent, useState } from "react";

const ConnexionPolar: FunctionComponent = () => {
  interface SessionData {
    session_id: string;
    sport: string;
    duration2: number;
    distance: number;
  }

  const [sessions, setSession] = useState<SessionData[]>([]);

  const handleClick = () => {

    // const headers = { 'Content-Type': 'application/json'}

    fetch('https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/listofsessions')
      .then(response => response.json())
      .then((data: any[]) => {
        const formattedData: SessionData[] = data.map(data => ({
          "session_id": data[0],
          "sport": data[1],
          "duration2": data[2],
          "distance": data[3]
        }));
        setSession(formattedData);
        console.log(formattedData)
      });
  }

  return (
    <div>
      <h1>Polar Info</h1>
      <button onClick={handleClick}>Afficher les sessions</button>
      <div>
        {/* {sessions.map((session, i) =>  (
            <div key={i}>
                "session_id": "{session[0]}",
                "sport": "{session[1]}",
                "duration2": "{session[2]}",
                "distance": "{session[3]}"
            </div>
        ))} */}
         {sessions.map((session, i) => (
            <div key={i}>
              <p>Session ID: {session.session_id}</p>
              <p>Sport: {session.sport}</p>
              <p>Duration: {session.duration2}</p>
              <p>Distance: {session.distance}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ConnexionPolar;