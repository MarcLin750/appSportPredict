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
    
    const formatDate = (date: string):string =>{
        const [datePart, timePart] = date.split('T');
        const [year, month, day] = datePart.split('-');
        const [hourMinuteSecond] = timePart.split('.');
        const [hour, minute] = hourMinuteSecond.split(':'); 

        return `${hour}:${minute} | ${day}.${month}.${year}`;
    }

    function formatDateStartSession(dateString: string): string {
        const months = [
            "janvier", "février", "mars", "avril", "mai", "juin",
            "juillet", "août", "septembre", "octobre", "novembre", "décembre"
        ];
    
        const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    
        const date = new Date(dateString);
        const day = days[date.getDay()];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours() - 1;
        const minutes = date.getMinutes();
    
        const formattedDate = `${hours}h${minutes} | ${day}, ${date.getDate()} ${month} ${year}. `;
        return formattedDate;
    }

    function formatSeconds(seconds: number): string {
        seconds = Math.round(seconds)
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
    
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    function formatMeters(meters: number): string {
        const kilometers = meters / 1000;
        if (kilometers > 0) {
            return `${kilometers.toFixed(3)} km`
        } else {
            return 'N/A';
        }
    }

    function formatBpm(bpm: number): string {
        const heartrate = bpm ;
        if (heartrate !== null) {
            return `${heartrate} bpm`
        } else {
            return 'N/A'
        }
    }

    function formatKmh(speed: number | null): string {
        if (speed !== null) {
            return `${speed.toFixed(2)} km/h`;
        } else {
            return "N/A";
        }
    }
    
    function formatPpm(ppm: number | null): string {
        if (ppm !== null) {
            return `${ppm} ppm`;
        } else {
            return "N/A";
        }
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
                    {listOfSessionsFilterSport.length > 0 ? (listOfSessionsFilterSport.map(session => (
                        <li key={session.SESSIONID}>
                            <input type="radio" name="btn-session" id={session.SESSIONID} onClick={() => goToSession(session.SESSIONID)} checked={sessionID === session.SESSIONID} />
                                <label htmlFor={session.SESSIONID} className="label-item">
                                        <strong> {session.SPORT} </strong>
                                        <small>({formatMeters(session.DISTANCE)})</small>
                                        <small> {formatDate(session.SESSIONID)} </small>
                                </label>
                        </li>
                    ))
                    ) : (
                        Array.from({ length: 20 }).map((_, index) => (
                            <li key={index}>
                              <input
                                type="radio"
                                name="btn-session"
                                id={`placeholder-session-list-${index}`}
                                checked={index === 0} // Le premier élément est le seul qui sera coché
                              />
                              <label htmlFor={`placeholder-session-list-${index}`} className="label-item placeholder-glow">
                                <strong className="placeholder placeholder-glow border rounded-2 p-2.8 col-3"></strong>
                                <small className="placeholder placeholder-glow border rounded-2 p-2.6 col-2"></small>
                                <small className="placeholder placeholder-glow border rounded-2 p-2.6 col-5"></small>
                              </label>
                            </li>
                        ))
                    )}
                </ul>
            </div>

            {/* <SessionDetail /> */}

            <div className="TabSessionDetail">
            {session.length > 0 ? (session.map(session => (
                <div className="session-detail" key={session.SESSIONID}>
                    <h3 className="title-session-detail">{session.SPORT}</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <small>Début de la session:</small><br/><strong>{formatDateStartSession(session.STARTTIME)}</strong>
                            </div>
                            {/* <div className="col-6">
                                <small>Repos depuis la dernière scéance:</small><br/><strong>...</strong>
                            </div> */}
                            <div className="col-6">
                                <small>Fin de la session:</small><br/><strong>{formatDateStartSession(session.STOPTIME)}</strong>
                            </div>
                            {/* <div className="col-6">
                                <small>Nombre de segments dans la séance:</small><br/><strong>...</strong>
                            </div> */}
                            <div className="col-6">
                                <small>Durée de la session (HH:MM:SS):</small><br/><strong>{formatSeconds(session.DURATION_CALCULATED)}</strong>
                            </div>
                            {/* <div className="col-6">
                                <small>Vitesse moyenne pour les séances de même type:</small><br/><strong>...</strong>
                            </div> */}
                            <div className="col-6">
                                <small>Durée de l'effort:</small><br/><strong>{formatSeconds(session.DURATION2)}</strong>
                            </div>
                            <div className="col-6">
                                <small>Distance:</small><br/><strong>{formatMeters(session.DISTANCE)}</strong>
                            </div>
                            <div className="col-6">
                                <small>Fréquence cardiaque Max:</small><br/><strong>{formatBpm(session.MAXIMUMHEARTRATE)}</strong>
                            </div>
                            <div className="col-6">
                                <small>Fréquence cardiaque Moyenne:</small><br/><strong>{formatBpm(session.AVERAGEHEARTRATE)}</strong>
                            </div>
                            <div className="col-6">
                                <small>Fréquence cardiaque Moyenne:</small><br/><strong>{formatBpm(session.AVERAGEHEARTRATE)}</strong>
                            </div>
                            <div className="col-6">
                                <small>Kilocalories:</small><br/><strong>{session.KILOCALORIES} kcal</strong>
                            </div>
                            <div className="col-6">
                                <small>Vitesse Max:</small><br/><strong>{formatKmh(session.MAXSPEED)}</strong>
                            </div>
                            <div className="col-6">
                                <small>Vitesse Moyenne:</small><br/><strong>{formatKmh(session.AVGSPEED)}</strong>
                            </div>
                            <div className="col-6">
                                <small>Cadence Max:</small><br/><strong>{formatPpm(session.MAXCADENCE)}</strong>
                            </div>
                            <div className="col-6">
                                <small>Cadence Moyenne:</small><br/><strong>{formatPpm(session.AVGCADENCE)}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            ) : (
                <div className="session-detail">
                    <h3 className="title-session-detail">Chargement de la session...</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 placeholder-glow">
                                <small>Début de la session:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-9"></div>
                            </div>
                            {/* <div className="col-6 placeholder-glow">
                                <small>Repos depuis la dernière scéance:</small><br/><strong>...</strong>
                            </div> */}
                            <div className="col-6 placeholder-glow">
                                <small>Fin de la session:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-9"></div>
                            </div>
                            {/* <div className="col-6 placeholder-glow">
                                <small>Nombre de segments dans la séance:</small><br/><strong>...</strong>
                            </div> */}
                            <div className="col-6 placeholder-glow">
                                <small>Durée de la session (HH:MM:SS):</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-3"></div>
                            </div>
                            {/* <div className="col-6 placeholder-glow">
                                <small>Vitesse moyenne pour les séances de même type:</small><br/><strong>...</strong>
                            </div> */}
                            <div className="col-6 placeholder-glow">
                                <small>Durée de l'effort:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-3"></div>
                            </div>
                            <div className="col-6 placeholder-glow">
                                <small>Distance:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-2"></div>
                            </div>
                            <div className="col-6 placeholder-glow">
                                <small>Fréquence cardiaque Max:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-2"></div>
                            </div>
                            <div className="col-6 placeholder-glow">
                                <small>Fréquence cardiaque Moyenne:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-2"></div>
                            </div>
                            <div className="col-6 placeholder-glow">
                                <small>Fréquence cardiaque Moyenne:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-2"></div>
                            </div>
                            <div className="col-6 placeholder-glow">
                                <small>Kilocalories:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-2"></div>
                            </div>
                            <div className="col-6 placeholder-glow">
                                <small>Vitesse Max:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-2"></div>
                            </div>
                            <div className="col-6 placeholder-glow">
                                <small>Vitesse Moyenne:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-2"></div>
                            </div>
                            <div className="col-6 placeholder-glow">
                                <small>Cadence Max:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-2"></div>
                            </div>
                            <div className="col-6 placeholder-glow">
                                <small>Cadence Moyenne:</small><br/><div className="placeholder placeholder-glow border rounded-2 p-2.4 col-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
                        <label htmlFor="">Type de semelle:</label>
                        <div className="w-100"></div>
                        <select className="form-select form-select-sm">
                            <option value="">-- Choisis le type --</option>
                            <option value="ChaussureCarbone">Semelle carbone</option>
                            <option value="ChausureLiège">Semelle liège</option>
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
                    <div>
                        <label>Mesure des lactates:</label>
                        <select className="form-select form-select-sm">
                            <option value="">
                                Taux de lactates
                            </option>
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