import React, { FunctionComponent } from "react";
import TabHome from "../components/tab-home";
import { useHistory } from "react-router-dom";

import '../styles/home.css';

const Home: FunctionComponent = () =>{

    const history = useHistory();

    // const goToChargerLesEntrainements = () => {
    //     history.push('/connexion-polar')
    // }

    return(
        <div >
            <div className="menu">
                <button className="btn-home">
                    Sauvegarder
                </button>
                {/* <button className="btn-home" onClick={goToChargerLesEntrainements}>
                    Charger les entrainements
                </button> */}
                <button className="btn-home">
                    Charger les entrainements
                </button>
                <button className="btn-home">
                    Supprimer l'entrainement
                </button>
            </div>
            <TabHome />
        </div>
    )
}

export default Home;