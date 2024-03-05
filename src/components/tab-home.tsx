import React, { FunctionComponent, useState, useEffect } from "react";
import SessionList from "./entrainement";
import '../styles/tab-home.css';
import Analyse from "./analyse";


const TabHome: FunctionComponent = () => {

    const [activeTab, setActiveTab] = useState<string>('Entrainements');

    return (
        <div className="page-tab">
            <div className="tab-bar">
                <input type="radio" name="btn-tab" id="Entrainements" onClick={() => setActiveTab('Entrainements')}  checked={activeTab === 'Entrainements'} />
                <label htmlFor="Entrainements">Entrainements</label>
                <input type="radio" name="btn-tab" id="AnalyseAxe1" onClick={() => setActiveTab('AnalyseAxe1')}/>
                <label htmlFor="AnalyseAxe1">Segment / sequence</label>
                <input type="radio" name="btn-tab" id="AnalyseAxe2" onClick={() => setActiveTab('AnalyseAxe2')}/>
                <label htmlFor="AnalyseAxe2">Session complète</label>
                <input type="radio" name="btn-tab" id="AnalyseAxe3" onClick={() => setActiveTab('AnalyseAxe3')}/>
                <label htmlFor="AnalyseAxe3">Plage de données</label>
            </div>
            {activeTab === 'Entrainements' && (
                <SessionList />
            )}
            {activeTab === 'AnalyseAxe1' && (
                <Analyse />
            )}
            {activeTab === 'AnalyseAxe2' && (
                <div id="AnalyseAxe2" className="AnalyseAxe2">
                    <h1>Analyse d'une session complète</h1>
                </div>
            )}
            {activeTab === 'AnalyseAxe3' && (
                <div id="AnalyseAxe3" className="AnalyseAxe3">
                    <h1>Analyse d'un groupement de session sur plage de données</h1>
                </div>
            )}
        </div>
    )
}

export default TabHome;