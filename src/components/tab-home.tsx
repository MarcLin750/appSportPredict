import React, { FunctionComponent, useState } from "react";
import ExerciseList from "./exercise-list";
import Entrainement from "./entrainement";
import EtatPhysique from "./etat-physique";

import '../styles/tab-home.css';

const TabHome: FunctionComponent = () => {

    const [activeTab, setActiveTab] = useState<string>('Entrainements');

    return (
        <div>
            <div className="tab-bar">
                <button className="btn-tab" onClick={() => setActiveTab('Entrainements')}>Entrainements</button>
                <button className="btn-tab" onClick={() => setActiveTab('Analyse')}>Analyse</button>
                <button className="btn-tab" onClick={() => setActiveTab('Chat-GPT')}>Chat GPT</button>
            </div>
            {activeTab === 'Entrainements' && (
                <div id="Entrainements" className="Entrainements">
                    <ExerciseList />
                    <Entrainement />
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