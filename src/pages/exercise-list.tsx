import React, { FunctionComponent, useState, useEffect } from "react";
import Exercise from "../models/exercise";
import Exercises from "../models/mock-exercise";
import ExerciceCard from "../components/exercise-card";

const ExerciseList: FunctionComponent = () => {
    // initialisation de exercises avec le model Exercise[] avec un tableau vide
    const [exercises, setExercises] = useState<Exercise[]>([]);
    
    // hook d'effet qui prend 2 paramètre la fonction set qui prend les argument d'exercises et 
    // un tableau vide pour éviter de déclencher le hook d'effet pour chaque modification du composant
    useEffect(() => {
        setExercises(Exercises);
    }, []);

    return (
        <div>
            <h1>Liste d'exercice</h1>
            <div>
                {exercises.map(exercise => (
                    <ExerciceCard key={exercise.id} exercise={exercise} />
                ))}
            </div>
        </div>
    )
}

export default ExerciseList;