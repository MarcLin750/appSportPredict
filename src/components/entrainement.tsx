import React, { FunctionComponent, useEffect, useState } from "react";
import SESSIONDETAIL from "../models/session-detail";
import '../styles/entrainement.css';

const SessionDetail: FunctionComponent = () => {

    const [session, setSession] = useState<SESSIONDETAIL[]>([]);
    const [sessionID, setSessionID] = useState('2019-12-24T12:02:06.605');

    useEffect(() => {
        fetch('https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/lastsession')
         .then(res=> res.json())
         .then(data => setSessionID(data[0]))
    })

    useEffect(() => {
        fetch(`https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/getsession/?id=${sessionID}`)
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
    }, []);


    return (
        <div className="entrainement">
            <h1 style={{paddingLeft: "20px"}}>Running</h1>

                {session.map(session => (
                    <div className="session-detail" key={session.SESSIONID}>
                        <small>SESSIONID: {session.SESSIONID}</small>
                        <small>SESSION_YEAR: {session.SESSION_YEAR}</small>
                        <small>SESSION_MONTH: {session.SESSION_MONTH}</small>
                        <small>SESSION_DAY: {session.SESSION_DAY}</small>
                        <small>USERID: {session.USERID}</small>
                        <small>SEX: {session.SEX}</small>
                        <small>BIRTHDAY: {session.BIRTHDAY}</small>
                        <small>HEIGHT: {session.HEIGHT}</small>
                        <small>WEIGHT: {session.WEIGHT}</small>
                        <small>VO2MAX: {session.VO2MAX}</small>
                        <small>AEROBICTHRESHOLD: {session.AEROBICTHRESHOLD}</small>
                        <small>ANAEROBICTHRESHOLD: {session.ANAEROBICTHRESHOLD}</small>
                        <small>SPORT: {session.SPORT}</small>
                        <small>STARTTIME: {session.STARTTIME}</small>
                        <small>STARTTIMEEXO: {session.STARTTIMEEXO}</small>
                        <small>STOPTIME: {session.STOPTIME}</small>
                        <small>STOPTIMEEXO: {session.STOPTIMEEXO}</small>
                        <small>DURATION_CALCULATED: {session.DURATION_CALCULATED}</small>
                        <small>DURATION2: {session.DURATION2}</small>
                        <small>LATITUDE: {session.LATITUDE}</small>
                        <small>LONGITUDE: {session.LONGITUDE}</small>
                        <small>DISTANCE: {session.DISTANCE}</small>
                        <small>ASCENT: {session.ASCENT}</small>
                        <small>DESCENT: {session.DESCENT}</small>
                        <small>MAXIMUMHEARTRATE: {session.MAXIMUMHEARTRATE}</small>
                        <small>AVERAGEHEARTRATE: {session.AVERAGEHEARTRATE}</small>
                        <small>KILOCALORIES: {session.KILOCALORIES}</small>
                        <small>AVGSPEED: {session.AVGSPEED }</small>
                        <small>MAXSPEED: {session.MAXSPEED}</small>
                        <small>AVGCADENCE: {session.AVGCADENCE}</small>
                        <small>MAXCADENCE: {session.MAXCADENCE}</small>
                        <small>TIMEINZONE1: {session.TIMEINZONE1}</small>
                        <small>TIMEINZONE2: {session.TIMEINZONE2}</small>
                        <small>TIMEINZONE3: {session.TIMEINZONE3}</small>
                        <small>TIMEINZONE4: {session.TIMEINZONE4}</small>
                        <small>TIMEINZONE5: {session.TIMEINZONE5}</small>
                        <small>CARDIOLOAD: {session.CARDIOLOAD}</small>
                        <small>MUSCLELOAD: {session.MUSCLELOAD}</small>
                        <small>CARDIOLOADINTERPRETATION: {session.CARDIOLOADINTERPRETATION}</small>
                        <small>MUSCLELOADINTERPRETATION: {session.MUSCLELOADINTERPRETATION}</small>
                        <small>PERCEIVEDLOAD: {session.PERCEIVEDLOAD}</small>
                        <small>PERCEIVEDLOADINTERPRETATION: {session.PERCEIVEDLOADINTERPRETATION}</small>
                        <small>RUNNINGVERIFIED: {session.RUNNINGVERIFIED}</small>
                        <small>CATEGORYSESSION: {session.CATEGORYSESSION}</small>
                    </div>
                ))}

        </div>
    )
}

export default SessionDetail;