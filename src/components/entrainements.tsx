import React, { FunctionComponent, useEffect, useState } from "react";
import SESSIONDETAIL from "../models/session-detail";
import ListOfSessions from "../models/listofsessions";
import '../styles/entrainement.css';

const Entrainements: FunctionComponent = () => {
    
    const [listOfSessions, setListOfSessions] = useState<ListOfSessions[]>([]);
    const [listOfSessionsFilter, setLlistOfSessionsFilter] = useState<ListOfSessions[]>([]);
    const [listSportName, setListSportName] = useState<string[]>([]);
    const [session, setSession] = useState<SESSIONDETAIL[]>([]);
    const [sessionID, setSessionID] = useState('');

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
            setListOfSessions(formattedData.reverse());
            // console.log(LISTOFSESSIONS);
          });
    }, []);

    useEffect(() => {
        fetch('https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/lastsession')
         .then(res=> res.json())
         .then(data => {goToSession(data[0])})
    }, []);

    const goToSession = (id: string) => {
        // console.log(id)
        fetch(`https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/getsession?id=${id}`)
            .then(res => res.json())
            .then((data: any[]) => {   
                const formattedData: SESSIONDETAIL[] = data.map(data => ({
                    SESSIONID: data[0],
                    SESSION_YEAR: data[1],
                    SESSION_MONTH: data[2],
                    SESSION_DAY: data[3],
                    USERID: data[4],
                    SEX: data[5],
                    BIRTHDAY: data[6],
                    HEIGHT: data[7],
                    WEIGHT: data[8],
                    VO2MAX: data[9],
                    AEROBICTHRESHOLD: data[10],
                    ANAEROBICTHRESHOLD: data[11],
                    SPORT: data[12],
                    STARTTIME: data[13],
                    STARTTIMEEXO: data[14],
                    STOPTIME: data[15],
                    STOPTIMEEXO: data[16],
                    DURATION_CALCULATED: data[17],
                    DURATION2: data[18],
                    LATITUDE: data[19],
                    LONGITUDE: data[20],
                    DISTANCE: data[21],
                    ASCENT: data[22],
                    DESCENT: data[23],
                    MAXIMUMHEARTRATE: data[24],
                    AVERAGEHEARTRATE: data[25],
                    KILOCALORIES: data[26],
                    AVGSPEED: data[27],
                    MAXSPEED: data[28],
                    AVGCADENCE: data[29],
                    MAXCADENCE: data[30],
                    TIMEINZONE1: data[31],
                    TIMEINZONE2: data[32],
                    TIMEINZONE3: data[33],
                    TIMEINZONE4: data[34],
                    TIMEINZONE5: data[35],
                    CARDIOLOAD: data[36],
                    MUSCLELOAD: data[37],
                    CARDIOLOADINTERPRETATION: data[38],
                    MUSCLELOADINTERPRETATION: data[39],
                    PERCEIVEDLOAD: data[40],
                    PERCEIVEDLOADINTERPRETATION: data[41],
                    RUNNINGVERIFIED: data[42],
                    CATEGORYSESSION: data[43]
                }));
                setSession(formattedData);
                setSessionID(id)
                // console.log(id)
            });
    }

    
    useEffect(() => {
        setLlistOfSessionsFilter(listOfSessions);
    }, [listOfSessions]);

    useEffect(() => {
        const sportName = new Set<string>();
        listOfSessions.forEach(session => {
            sportName.add(session.SPORT);
        });
        setListSportName(Array.from(sportName));
    }, [listOfSessions])

    const postFormSession = () => {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title: 'info post request'})
        };
        fetch('', options)
            .then(response => response.json())
            // .then(data => setPostId(data.id))
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

        return `Durée: ${partOne}.`;
    }

    const formatDistance = (distance: number): string => {
        const [partOne] = distance.toString().split('.');

        return `(${partOne} m)`
    }

    const sportNameFiltre = (event: string) => {
        if (event === ""){
            setLlistOfSessionsFilter(listOfSessions);
        } else {
            setLlistOfSessionsFilter(listOfSessions.filter(session => session.SPORT === event ));
        }
    }

    return (
        <div id="Entrainements" className="Entrainements">
            <div className="session-list">
                <h3 className="title-session">Liste des entrainements</h3>
                <form className="from-filter-session-list" onSubmit={(event) => {event.preventDefault()}}>
                    <select id="sportName" onBlur={(event) => sportNameFiltre(event.target.value)}>
                        <option value="">Tous les entrainments</option>
                        {listSportName.map((sport) => (
                            <option value={sport}>{sport}</option>
                        ))}
                    </select>
                    <input type="submit" value="Filtrer" />
                </form>
                <ul className="SessionList_Ul">
                    {listOfSessionsFilter.map(session => (
                        <li key={session.SESSIONID}>
                            <input type="radio" name="btn-session" id={session.SESSIONID} onClick={() => goToSession(session.SESSIONID)} checked={sessionID === session.SESSIONID} />
                                <label htmlFor={session.SESSIONID} className="label-item">
                                        <strong> {session.SPORT} </strong>
                                        <small>{formatDistance(session.DISTANCE)}</small>
                                        <small> {formatDate(session.SESSIONID)} </small>
                                </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <SessionDetail /> */}

            <div className="TabSessionDetail">
            {session.map(session => (
                <div className="session-detail" key={session.SESSIONID}>
                    <h3 className="title-session-detail">{session.SPORT}</h3>
                    <div className="session-detail-item">
                        <p>STARTTIME: {session.STARTTIME}</p>
                        <p>STOPTIME: {session.STOPTIME}</p>
                        <p>DURATION_CALCULATED: {session.DURATION_CALCULATED}</p>
                        <p>DURATION2: {session.DURATION2}</p>
                        <p>DISTANCE: {session.DISTANCE}</p>
                        <p>MAXIMUMHEARTRATE: {session.MAXIMUMHEARTRATE}</p>
                        <p>AVERAGEHEARTRATE: {session.AVERAGEHEARTRATE}</p>
                        <p>KILOCALORIES: {session.KILOCALORIES}</p>
                        <p>AVGSPEED: {session.AVGSPEED }</p>
                        <p>MAXSPEED: {session.MAXSPEED}</p>
                        <p>AVGCADENCE: {session.AVGCADENCE}</p>
                        <p>MAXCADENCE: {session.MAXCADENCE}</p>
                    </div>
                </div>
            ))}
            </div>
                        
            {/* <EtatPhysique /> */}
            
            <div className="formEnriched">
                <h3 className="title-form-enriched">Enriched</h3>
                <form action="">
                    <label htmlFor="">Ressenti de la session: </label>
                    <select name="" id="">
                        <option value="">-- Choisi ton état physique --</option>
                        <option value="TresFatiguer">Très Fatiguer</option>
                        <option value="Fatiguer">Fatiguer</option>
                        <option value="EnForme">En forme</option>
                        <option value="Super">Super</option>
                    </select>
                    <label htmlFor="">Type d'équipement</label>
                    <select name="" id="">
                        <option value="">-- Choisi ton équipement --</option>
                        <option value="ChaussureNormal">Chaussure normal</option>
                        <option value="ChausureSpécial">Chaussure spécial</option>
                    </select>
                    <div>
                        <input type="checkbox" id="verified" />
                        <label htmlFor="verified">Session vérifier</label>
                    </div>
                    <label htmlFor="">Poids: </label>
                    <input type="number" value="70" />
                    <input type="submit" value={"Sauvegarder"} />
                </form>
            </div>
        </div>
    )
}

export default Entrainements;