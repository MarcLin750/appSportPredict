import React, { FunctionComponent, useState, useEffect } from "react";
import SessionList from "./entrainement";
import '../styles/tab-home.css';


const TabHome: FunctionComponent = () => {

    const [activeTab, setActiveTab] = useState<string>('Entrainements');

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
                <SessionList />
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