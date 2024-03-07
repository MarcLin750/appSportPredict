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
        <div className="home">
            {/* <div className="menu">
                <input type="radio" name="btn-home" id="Sauvegarder" />
                <label htmlFor="Sauvegarder">Sauvegarder</label>
                
                <input type="radio" name="btn-home" id="Charger_les_entrainements" />
                <label htmlFor="Charger_les_entrainements">Charger les entrainements</label>

                <input type="radio" name="btn-home" id="Supprimer_entrainement" />
                <label htmlFor="Supprimer_entrainement">Supprimer l'entrainement</label>
            </div> */}
            <TabHome />
        </div>
    )
}

export default Home;