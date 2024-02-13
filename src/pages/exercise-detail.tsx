import React, { FunctionComponent, useEffect, useState } from "react";
import { RouteComponentProps, Link} from 'react-router-dom';
import Exercise from "../models/exercise";
import Exercises from "../models/mock-exercise";

type Params = { id: string }; 

const ExercisesDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
    const [exercice, setExercise] = useState<Exercise|null>(null);
    
    useEffect(() => {
        Exercises.forEach(exercice => {
            if (match.params.id === exercice.id.toString()){
                setExercise(exercice);
            }
        })
    }, [match.params.id]);

    return (
        <div>
            { exercice ? (
                <div>
                    <div>
                        <p>Id: {exercice.id}</p>
                        <p>Upload time: {exercice.upload_time}</p>
                        <p>Polar user: {exercice.polar_user}</p>
                        <p>Device: {exercice.device}</p>
                        <p>Device id: {exercice.device_id}</p>
                        <p>Start time: {exercice.start_time}</p>
                        <p>Start time utc offset: {exercice.start_time_utc_offset}</p>
                        <p>Duration: {exercice.duration}</p>
                        <p>Heart rate average: {exercice.heart_rate.average}</p>
                        <p>Heart rate maximum: {exercice.heart_rate.maximum}</p>
                        <p>Sport: {exercice.sport}</p>
                        <p>Has route: {exercice.has_route}</p>
                        <p>Detailed sport info: {exercice.detailed_sport_info}</p>
                        <p>Calories: {exercice.calories}</p>
                        <p>Fat percentage: {exercice.fat_percentage}</p>
                        <p>Carbonhydrate perrcentage: {exercice.carbohydrate_percentage}</p>
                        <p>Protein percentage: {exercice.protein_percentage}</p>
                    </div>
                    <div>
                        <Link to="/">Retour</Link>
                    </div>
                </div>
            ) : (
                <h4>Aucun Exercice à afficher...</h4>
            )}
        </div>
    );
}

export default ExercisesDetail;