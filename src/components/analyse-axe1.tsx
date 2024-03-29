import React, { FunctionComponent, useState, useEffect } from "react";
import '../styles/analyse-axe1.css'

const AnalyseAxe1: FunctionComponent = () => {

    const [loading, setLoading] = useState(true);
    const [graphName, setGraphName] = useState('');
    const [showIframe, setShowIframe] = useState(false);

    const handleLoad = () => {
        // Une fois que l'iframe est chargé, nous mettons loading à false
        setLoading(false);
    };

    useEffect(() => {
        let allGridItems = Array.from(document.getElementsByClassName("grid-item"));
        let popupBg = document.getElementById("popup-bg") as HTMLImageElement;
        let popupImg = document.getElementById('popup-img') as HTMLImageElement;
    
        const openPopup = (e: Event) => {
            if (e instanceof MouseEvent) {
            let gridItemClicked = (e.target as Element).closest(".grid-item");
            if (gridItemClicked) {
                let clickedImageName = gridItemClicked.id;
                if(clickedImageName === "segment" || clickedImageName === "timeinzone") {
                    popupBg.classList.add("active");
                    popupImg.src = `https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/getgraph?graph=${clickedImageName}`;
                } else if ( clickedImageName === "sessionDetailsHeartrate_2022_06_09" || clickedImageName === "sessionDetailsSpeed_2022_06_09") {
                    popupBg.classList.add("active");
                    popupImg.src = `../images/${clickedImageName}.png`
                }else {
                    setGraphName(clickedImageName);
                    setShowIframe(true);
                    // window.open(`https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/graph?name=${clickedImageName}`);
                }
            }}
        };

        const closePopup = () => {
            popupBg.classList.remove("active");
        }
    
        allGridItems.forEach(el => el.addEventListener("click", openPopup));
        popupImg.addEventListener("click", (e) => e.stopPropagation());
        popupBg.addEventListener("click", closePopup);
    
        return () => {
            allGridItems.forEach(el => el.removeEventListener("click", openPopup));
        };
    }, [graphName]);
    
    return(
        <div id="Analyse" className="AnalyseAxe1">
            <div className="analyse-graph">
                <h1 className="title-smart-analysis">Smart analysis</h1>
                <div id="popup-bg">
                    <div id="popup-content">
                        <div id="popup-close">
                            <img src="../images/croix.png" className="close-circle" alt="croix"/>
                        </div>
                        <img id="popup-img" src="#" alt="#"/>
                    </div>
                </div>
                <div className="smart-analysis">
                    <div className="grid">
                        {/* <div className="grid-item" id="segment">
                            <img src="../images/segmentIcon.png" alt="graph_segment" className="grid-img" />
                            <p>Segment</p>
                        </div> */}
                        <div className="grid-item" id="timeinzone_aggregation&date_ref=2023-12-31&last_n_days=900&nb_days_aggregated=90">
                            <img src="../images/timeinzone_aggregation.png" alt="timeinzone_aggregation&date_ref=2023-12-31&last_n_days=900&nb_days_aggregated=90" className="grid-img" />
                            <p>Temps passé dans les zones</p>
                        </div>
                        <div className="grid-item" id="sessionDetailsSpeed_2022_06_09">
                            <img src="../images/sessionDetailsSpeed_2022_06_09.png" alt="graph_segment" className="grid-img" />
                            <p>Details de la vitesse</p>
                        </div>
                        <div className="grid-item" id="sessionDetailsHeartrate_2022_06_09">
                            <img src="../images/sessionDetailsHeartrate_2022_06_09.png" alt="graph_segment" className="grid-img" />
                            <p>Details du bpm</p>
                        </div>
                        <div className="grid-item" id="timeinzone">
                            <img src="../images/timeInZoneIcon.png" alt="graph_time_in_zone" className="grid-img" />
                            <p>Analyse des vitesses / bpm par distance</p>
                        </div>
                        <div className="grid-item" id="relationship_between_cadence_stride_speed&date_from=2020-01-01&date_to=2023-12-01">
                            <img src="../images/relation_cfv.png" alt="relation_cfv" className="grid-img" />
                            <p>Relation entre cadence, foulée et vitesse</p>
                        </div>
                        <div className="grid-item" id="rest_influence&date_from=2020-01-01&date_to=2023-12-01&last_n_days=3">
                            <img src="../images/influenceduring2session.png" alt="rest_influence&date_from=2020-01-01&date_to=2023-12-01&last_n_days=3" className="grid-img" />
                            <p>Influence du repos entre 2 sessions</p>
                        </div>
                        <div className="grid-item" id="previous_number_of_session_influence&date_from=2020-01-01&date_to=2023-12-01&last_n_days=3">
                            <img src="../images/influence3lastday.png" alt="previous_number_of_session_influence&date_from=2020-01-01&date_to=2023-12-01&last_n_days=3" className="grid-img" />
                            <p>Influence nbr sessions des 3 derniers jours sur la vitesse (par catégorie de distance)</p>
                        </div>
                        <div className="grid-item" id="dist_per_session">
                            <img src="../images/dist_per_session.png" alt="dist_per_session" className="grid-img" />
                            <p>Distance par session</p>
                        </div>
                        <div className="grid-item" id="chart_ratio_speed_heartrate_in_sequences">
                            <img src="../images/speed_vs_heartrate.png" alt="chart_ratio_speed_heartrate_in_sequences" className="grid-img" />
                            <p>Vitesse / bpm</p>
                        </div>
                    </div>
                    <div className="ifram-graph">
                    <div className="position-relative w-100 h-100">
                            {loading && !showIframe && (
                                <div className="placeholder-glow">
                                    <img width="58%" style={{ marginLeft: '14vw', marginTop: '2vh'}} src="../images/imageAnalyseSportive.jpg" alt="runninganalys"/>
                                </div>
                            )}
                            {showIframe && (
                                <iframe
                                    title="graph"
                                    width="100%"
                                    height="100%"
                                    src={`https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/graph?name=${graphName}`}
                                    onLoad={handleLoad}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyseAxe1;