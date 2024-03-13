import React, { FunctionComponent, useEffect, useState } from "react";
import SESSIONDETAIL from "../models/session-detail";
import ListOfSessions from "../models/listofsessions";
import '../styles/entrainement.css';

const Entrainements: FunctionComponent = () => {
    
    const [listOfSessions, setListOfSessions] = useState<ListOfSessions[]>([]);
    const [listOfSessionsFilterSport, setLlistOfSessionsFilterSport] = useState<ListOfSessions[]>([]);
    const [listSportName, setListSportName] = useState<string[]>([]);
    const [session, setSession] = useState<SESSIONDETAIL[]>([]);
    const [sessionID, setSessionID] = useState('');
    const apiSportPredicLink = 'https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com';
    
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');

    // Récupère les dates pour le filtre
    useEffect(() => {
        const formattedDate = getDate();
        const formattedDateNow = getDateNow();
        // console.log(formattedDate);
        setDateFrom(formattedDate);
        setDateTo(formattedDateNow);
    }, []);

    useEffect(() =>  {
        getListOfSessions(dateFrom, dateTo);
    }, [dateFrom, dateTo]);

    useEffect(() => {
        fetch(`${apiSportPredicLink}/lastsession`)
         .then(res=> res.json())
         .then(data => {goToSession(data)})
    }, []);

    useEffect(() => {
        setLlistOfSessionsFilterSport(listOfSessions);
    }, [listOfSessions]);

    useEffect(() => {
        const sportName = new Set<string>();
        listOfSessions.forEach(session => {
            sportName.add(session.SPORT);
        });
        setListSportName(Array.from(sportName));
    }, [listOfSessions])

    const getDate = () => {
        const dateNow = new Date();
        const year = dateNow.getFullYear() - 1; // 2023 car pas de session 2024 ...
        const month = dateNow.getMonth() + 1 <= 1 ? dateNow.getMonth() + 1 : dateNow.getMonth(); // recule de 2 mois 
        const day = dateNow.getDay();
        const newmonth = month < 10 ? '0' + month : month; // ajoute un 0 si la mois contient qu'un chiffre 
        const newday = day < 10 ? '0' + day : day;

        return `${year}-${newmonth}-${newday}`;
    }

    const getDateNow = () => {
        const dateNow = new Date();
        const year = dateNow.getFullYear(); // 2023 car pas de session 2024 ...
        const month = dateNow.getMonth() + 1; // recule de 2 mois 
        const day = dateNow.getDay();
        const newmonth = month < 10 ? '0' + month : month; // ajoute un 0 si la mois contient qu'un chiffre 
        const newday = day < 10 ? '0' + day : day;

        return `${year}-${newmonth}-${newday}`;
    }

    const getListOfSessions = (dateFrom?: string, dateTo?: string) => {
        // Appel à l'API et traitement des données
        fetch(`${apiSportPredicLink}/listofsessions?fromSession=${dateFrom}&toSession=${dateTo}`)
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
            // console.log(listOfSessions);
          });
    }

    const getDateFrom = (event: string) => {
        setDateFrom(event);
    }

    const getDateTo = (event: string) => {
        setDateTo(event);
    }

    const goToSession = (id: string) => {
        // console.log(id)
        fetch(`${apiSportPredicLink}/getsession?id=${id}`)
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
        const distanceTrue = distance ? distance : 0;
        const [partOne] = distanceTrue.toString().split('.');
        return `(${partOne} m)`
    }

    const sportNameFiltre = (event: string) => {
        if (event === ""){
            setLlistOfSessionsFilterSport(listOfSessions);
        } else {
            setLlistOfSessionsFilterSport(listOfSessions.filter(session => session.SPORT === event ));
        }
    }

    return (
        <div id="Entrainements" className="Entrainements">
            <div className="session-list">
                <h3 className="title-session">Liste des entrainements</h3>
                <form className="from-filter-session-list" onSubmit={(event) => {event.preventDefault()}} >
                    <select className="form-select form-select-sm m-2" id="sportName" onChange={(event) => sportNameFiltre(event.target.value)}>
                        <option value="">Tous les entrainments</option>
                        {listSportName.map((sport) => (
                            <option key={sport} value={sport}>{sport}</option>
                        ))}
                    </select>
                    <div className="input-group input-group-sm m-2">
                        <span className="input-group-text">Du</span>
                        <input type="date" className="form-control" value={dateFrom} onChange={(event) => getDateFrom(event.target.value)} />
                        <span className="input-group-text">au</span>
                        <input type="date" className="form-control" value={dateTo} onChange={(event) => getDateTo(event.target.value)} />
                    </div>
                </form>
                <ul className="SessionList_Ul">
                    {listOfSessionsFilterSport.map(session => (
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
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <small>Début de la session:</small><br/><strong>{session.STARTTIME}</strong>
                            </div>
                            <div className="col-6">
                                <small>Repos depuis la dernière scéance:</small><br/><strong>...</strong>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-6">
                                <small>Fin de la session:</small><br/><strong>{session.STOPTIME}</strong>
                            </div>
                            <div className="col-6">
                                <small>Nombre de segments dans la séance:</small><br/><strong>...</strong>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-6">
                                <small>Durée calculée:</small><br/><strong>{session.DURATION_CALCULATED}</strong>
                            </div>
                            <div className="col-6">
                                <small>Vitesse moyenne pour les séances de même type:</small><br/><strong>...</strong>
                            </div>
                            <div className="col-8">
                                <small>Durée 2:</small><br/><strong>{session.DURATION2}</strong>
                            </div>
                            <div className="col-8">
                                <small>Distance:</small><br/><strong>{session.DISTANCE}</strong>
                            </div>
                            <div className="col-8">
                                <small>Fréquence cardiaque Max:</small><br/><strong>{session.MAXIMUMHEARTRATE}</strong>
                            </div>
                            <div className="col-8">
                                <small>Fréquence cardiaque Moyenne:</small><br/><strong>{session.AVERAGEHEARTRATE}</strong>
                            </div>
                            <div className="col-8">
                                <small>Fréquence cardiaque Moyenne:</small><br/><strong>{session.AVERAGEHEARTRATE}</strong>
                            </div>
                            <div className="col-8">
                                <small>Kilocalories:</small><br/><strong>{session.KILOCALORIES}</strong>
                            </div>
                            <div className="col-8">
                                <small>Vitesse Max:</small><br/><strong>{session.MAXSPEED}</strong>
                            </div>
                            <div className="col-8">
                                <small>Vitesse Moyenne:</small><br/><strong>{session.AVGSPEED}</strong>
                            </div>
                            <div className="col-8">
                                <small>Cadence Max:</small><br/><strong>{session.MAXCADENCE}</strong>
                            </div>
                            <div className="col-8">
                                <small>Cadence Moyenne:</small><br/><strong>{session.AVGCADENCE}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>

            {/* <EtatPhysique /> */}
            
            <div className="formEnriched">
                <h3 className="title-form-enriched">Données complémentaires</h3>
                <form>
                    <div>
                        <label>Type:</label>
                        <div className="w-100"></div>
                        <select className="form-select form-select-sm">
                            <option value="">Fractionné</option>
                        </select>
                    </div>
                    <div>
                        <label>Lieu: </label>
                        <div className="w-100"></div>
                        <select className="form-select form-select-sm">
                            <option value="Exterieur-stade">Extérieur - Stade</option>
                            <option value="Interieur-stade">Interieur - Stade</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <label>Poids:</label>
                        <div className="w-100"></div>
                        <input type="number" className="form-control" value="70" />
                        <span className="input-group-text">kg</span>
                    </div>
                    <div>
                        <label htmlFor="">Type d'équipement</label>
                        <div className="w-100"></div>
                        <select className="form-select form-select-sm">
                            <option value="">-- Choisis ton équipement --</option>
                            <option value="ChaussureNormal">Chaussures normales</option>
                            <option value="ChausureSpécial">Chaussures spéciales</option>
                        </select>
                    </div>
                    <div>
                        <label>Etat avant la séance:</label>
                        <div className="w-100"></div>
                        <select className="form-select form-select-sm">
                            <option value="">-- Choisis ton état physique --</option>
                            <option value="Fatiguer">Fatigué</option>
                            <option value="EnForme">En forme</option>
                            <option value="Super">Super</option>
                        </select>
                    </div>
                    <div>
                        <label>Ressenti de la séance:</label>
                        <div className="w-100"></div>
                        <select className="form-select form-select-sm">
                            <option value="">-- Choisis ton ressenti --</option>
                            <option value="Fatiguer">Fatigué</option>
                            <option value="EnForme">En forme</option>
                            <option value="Super">Super</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="verified" />
                        <label className="form-check-label" htmlFor="verified">
                        Session vérifiée
                        </label>
                    </div>
                    <input type="button" className="btn btn-success" value={"Sauvegarder"} />
                </form>
            </div>
        </div>
    )
}

export default Entrainements;