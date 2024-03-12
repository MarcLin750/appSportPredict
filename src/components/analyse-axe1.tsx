import React, { FunctionComponent, useEffect } from "react";
import '../styles/analyse-axe1.css'

const AnalyseAxe1: FunctionComponent = () => {

    useEffect(() => {
        let allGridItems = Array.from(document.getElementsByClassName("grid-item"));
        let popupBg = document.getElementById("popup-bg") as HTMLImageElement;
        let popupImg = document.getElementById('popup-img') as HTMLImageElement;
    
        const openPopup = (e: Event) => {
            if (e instanceof MouseEvent) {
                let gridItemClicked = (e.target as Element).closest(".grid-item");
                if (gridItemClicked) {
                    let clickedImageName = gridItemClicked.id;
                    popupBg.classList.add("active");
                    popupImg.src = `https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/getgraph?graph=${clickedImageName}`; 
                }
            }
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
                <h1>Graph segment / sequence</h1>
                <div id="popup-bg">
                    <div id="popup-content">
                        <div id="popup-close">
                            <img src="../images/croix.png" className="close-circle" />
                        </div>
                        <img id="popup-img" src="#" />
                    </div>
                </div>
                <div className="grid">
                    <div className="grid-item" id="segment">
                        <img src="../images/segmentIcon.png" alt="graph segment" className="grid-img" />
                        <p>Segment</p>
                    </div>
                    <div className="grid-item" id="timeinzone">
                        <img src="../images/timeInZoneIcon.png" alt="graph time in zone" className="grid-img" />
                        <p>Sequence</p>
                    </div>
                    <div  id="distpersession">
                        {/* <img src="../images/graph_distance_per_session.png" alt="graph segment" className="" onclick="{() => { openLink() }}" /> */}

                        {/* <img src="../images/graph_distance_per_session.png" alt="graph segment" className="" onclick="{() => { openLink() }}" /> */}

                        <p>Distance per session
                            <div className='new-line'>
                                <a target="_blank" href="https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/graph?name=dist_per_session&sessionFrom=2022-01-01&sessionTo=2022-12-31"><img src="../images/graph_distance_per_session.png" title="Distance per Session" alt="Distance per Session" style={{ width: 150, height: 150 }} /></a>
                            </div>
                        </p>
                        
                        <p>Speed Vs Heartrate
                            <div className='new-line'>
                                <a target="_blank" href="https://sport-predict-insightful-lizard-pk.cfapps.eu12.hana.ondemand.com/graph?name=chart_ratio_speed_heartrate_in_sequences"><img src="../images/chart_ratio_speed_heartrate_in_sequences.png" title="Speed VS Heartrate" alt="Ratio Speed - Heartrate" style={{ width: 150, height: 150 }} /></a>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyseAxe1;