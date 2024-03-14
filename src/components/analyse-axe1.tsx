import React, { FunctionComponent, useState, useEffect } from "react";
import '../styles/analyse-axe1.css'

const AnalyseAxe1: FunctionComponent = () => {

    const [loading, setLoading] = useState(true);

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
                } else {
                    window.open(`https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/graph?name=${clickedImageName}`);
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
    }, []);
    
    return(
        <div id="Analyse" className="AnalyseAxe1">
            <div className="analyse-graph">
                <h1 className="title-smart-analysis">Smart analysis</h1>
                <div id="popup-bg">
                    <div id="popup-content">
                        <div id="popup-close">
                            <img src="../images/croix.png" className="close-circle" />
                        </div>
                        <img id="popup-img" src="#" />
                    </div>
                </div>
                <div className="smart-analysis">
                    <div className="grid">
                        <div className="grid-item" id="segment">
                            <img src="../images/segmentIcon.png" alt="graph_segment" className="grid-img" />
                            <p>Segment</p>
                        </div>
                        <div className="grid-item" id="timeinzone">
                            <img src="../images/timeInZoneIcon.png" alt="graph_time_in_zone" className="grid-img" />
                            <p>Sequence</p>
                        </div>
                        <div className="grid-item" id="dist_per_session">
                            <img src="../images/dist_per_session.png" alt="dist_per_session" className="grid-img" />
                            <p>Distance par session</p>
                        </div>
                        <div className="grid-item" id="chart_ratio_speed_heartrate_in_sequences">
                            <img src="../images/speed_vs_heartrate.png" alt="chart_ratio_speed_heartrate_in_sequences" className="grid-img" />
                            <p>Speed Vs HeartRate</p>
                        </div>
                        <div className="grid-item" id="timeinzone_aggregation&date_ref=2023-12-31&last_n_days=900&nb_days_aggregated=90">
                            <img src="../images/timeinzone_aggregation.png" alt="timeinzone_aggregation&date_ref=2023-12-31&last_n_days=900&nb_days_aggregated=90" className="grid-img" />
                            <p>Graph 3 dernier mois</p>
                        </div>
                    </div>
                    <div className="ifram-graph">
                        <div className="position-relative w-100 h-100">
                            {loading && (
                                <div className="placeholder-glow">
                                    {/* <div className="placeholder border rounded-2 w-100"  style={{height: '40vh', marginTop: '10vh'}}></div> */}
                                    <img width="58%" style={{ marginLeft: '14vw', marginTop: '2vh'}} src="../images/imageAnalyseSportive.jpg" />
                                </div>
                            )}
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/graph?name=dist_per_session"
                                onLoad={handleLoad}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyseAxe1;