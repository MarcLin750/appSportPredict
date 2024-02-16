import React, { FunctionComponent, useState } from "react";

const ConnexionPolar: FunctionComponent = () => {

  const [sessions, setSession] = useState([]);

  const handleClick = () => {

    // const headers = { 'Content-Type': 'application/json'}

    fetch('https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/listofsessions')
      .then(response => response.json())
      .then(data => setSession(data));
  }

  return (
    <div>
      <h1>Polar Info</h1>
      <button onClick={handleClick}>Afficher les sessions</button>
      <div>
        {sessions.map((session, index) => (
          <div key={index}>
            Session {index + 1}: {session}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConnexionPolar;