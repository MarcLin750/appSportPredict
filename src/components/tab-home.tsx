import React, { FunctionComponent, useState, useEffect } from "react";
// import SessionList from "./session-list";
// import Entrainement from "./entrainement";
// import SessionDetail from "./entrainement";
import EtatPhysique from "./etat-physique";

import SessionCard from "./session-card";
import ListOfSessions from "../models/listofsessions";
import SESSIONDETAIL from "../models/session-detail";

import '../styles/tab-home.css';


const TabHome: FunctionComponent = () => {

    const [activeTab, setActiveTab] = useState<string>('Entrainements');

    const [listOfSessions, setListOfSessions] = useState<ListOfSessions[]>([]);
    
    const [session, setSession] = useState<SESSIONDETAIL[]>([]);
    // const [sessionID, setSessionID] = useState('');

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
         .then(data => goToSession(data[0]))
    }, []);

    const goToSession = (id: string) => {
        // console.log(id)
        fetch(`https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/getsession/?id=${id}`)
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
            });
    }
    
    return (
        <div>
            <div className="tab-bar">
                <input type="radio" name="btn-tab" id="Entrainements" onClick={() => setActiveTab('Entrainements')}  checked={activeTab === 'Entrainements'} />
                <label htmlFor="Entrainements">Entrainements</label>
                <input type="radio" name="btn-tab" id="Analyse" onClick={() => setActiveTab('Analyse')}/>
                <label htmlFor="Analyse">Analyse</label>
                <input type="radio" name="btn-tab" id="Chat-GPT" onClick={() => setActiveTab('Chat-GPT')}/>
                <label htmlFor="Chat-GPT">Chat GPT</label>
            </div>
            {activeTab === 'Entrainements' && (
                <div id="Entrainements" className="Entrainements">
                    {/* <ExerciseList /> */}
                    {/* <SessionList /> */}

                    <div className="session-list">
                        <h2 className="title-session">Liste des entrainements</h2>
                        <ul className="SessionList_Ul">
                            {listOfSessions.map((session, index) => (
                                <div>
                                    <input type="radio" name="btn-session" id={session.SESSIONID} key={session.SESSIONID} onClick={() => goToSession(session.SESSIONID)}/>
                                        <label htmlFor={session.SESSIONID}>
                                            <SessionCard session={session}/> 
                                        </label>
                                </div>
                            ))}
                        </ul>
                    </div>

                    {/* <SessionDetail /> */}

                    <div className="entrainement">
                            <ul className="SessionDetail_Ul"style={{ overflowY: "scroll"}}>
                            {session.map(session => (
                                <div className="session-detail" key={session.SESSIONID}>
                                    <h1 style={{paddingLeft: "20px"}}>{session.SPORT}</h1>
                                        <p>SESSIONID: {session.SESSIONID}</p>
                                        <p>SESSION_YEAR: {session.SESSION_YEAR}</p>
                                        <p>SESSION_MONTH: {session.SESSION_MONTH}</p>
                                        <p>SESSION_DAY: {session.SESSION_DAY}</p>
                                        <p>USERID: {session.USERID}</p>
                                        <p>SEX: {session.SEX}</p>
                                        <p>BIRTHDAY: {session.BIRTHDAY}</p>
                                        <p>HEIGHT: {session.HEIGHT}</p>
                                        <p>WEIGHT: {session.WEIGHT}</p>
                                        <p>VO2MAX: {session.VO2MAX}</p>
                                        <p>AEROBICTHRESHOLD: {session.AEROBICTHRESHOLD}</p>
                                        <p>ANAEROBICTHRESHOLD: {session.ANAEROBICTHRESHOLD}</p>
                                        <p>SPORT: {session.SPORT}</p>
                                        <p>STARTTIME: {session.STARTTIME}</p>
                                        <p>STARTTIMEEXO: {session.STARTTIMEEXO}</p>
                                        <p>STOPTIME: {session.STOPTIME}</p>
                                        <p>STOPTIMEEXO: {session.STOPTIMEEXO}</p>
                                        <p>DURATION_CALCULATED: {session.DURATION_CALCULATED}</p>
                                        <p>DURATION2: {session.DURATION2}</p>
                                        <p>LATITUDE: {session.LATITUDE}</p>
                                        <p>LONGITUDE: {session.LONGITUDE}</p>
                                        <p>DISTANCE: {session.DISTANCE}</p>
                                        <p>ASCENT: {session.ASCENT}</p>
                                        <p>DESCENT: {session.DESCENT}</p>
                                        <p>MAXIMUMHEARTRATE: {session.MAXIMUMHEARTRATE}</p>
                                        <p>AVERAGEHEARTRATE: {session.AVERAGEHEARTRATE}</p>
                                        <p>KILOCALORIES: {session.KILOCALORIES}</p>
                                        <p>AVGSPEED: {session.AVGSPEED }</p>
                                        <p>MAXSPEED: {session.MAXSPEED}</p>
                                        <p>AVGCADENCE: {session.AVGCADENCE}</p>
                                        <p>MAXCADENCE: {session.MAXCADENCE}</p>
                                        <p>TIMEINZONE1: {session.TIMEINZONE1}</p>
                                        <p>TIMEINZONE2: {session.TIMEINZONE2}</p>
                                        <p>TIMEINZONE3: {session.TIMEINZONE3}</p>
                                        <p>TIMEINZONE4: {session.TIMEINZONE4}</p>
                                        <p>TIMEINZONE5: {session.TIMEINZONE5}</p>
                                        <p>CARDIOLOAD: {session.CARDIOLOAD}</p>
                                        <p>MUSCLELOAD: {session.MUSCLELOAD}</p>
                                        <p>CARDIOLOADINTERPRETATION: {session.CARDIOLOADINTERPRETATION}</p>
                                        <p>MUSCLELOADINTERPRETATION: {session.MUSCLELOADINTERPRETATION}</p>
                                        <p>PERCEIVEDLOAD: {session.PERCEIVEDLOAD}</p>
                                        <p>PERCEIVEDLOADINTERPRETATION: {session.PERCEIVEDLOADINTERPRETATION}</p>
                                        <p>RUNNINGVERIFIED: {session.RUNNINGVERIFIED}</p>
                                        <p>CATEGORYSESSION: {session.CATEGORYSESSION}</p>
                                </div>
                            ))}
                            </ul>
                    </div>

                    <EtatPhysique />
                </div>
            )}
            {activeTab === 'Analyse' && (
                <div id="Analyse" className="Analyse">
                    <h1>Montrer les optimisations possibles</h1>
                </div>
            )}
            {activeTab === 'Chat-GPT' && (
                <div id="Chat-GPT" className="Chat-GPT">
                    <h1>Pose ta question</h1>
                </div>
            )}
        </div>
    )
}

export default TabHome;