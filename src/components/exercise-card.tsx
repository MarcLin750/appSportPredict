import React, { FunctionComponent, useState } from "react";
import Exercise from "../models/exercise";
import './exercise-card.css';

type Props = {
    exercise: Exercise,
    borderColor?: string
};

const ExerciceCard: FunctionComponent<Props> = ({exercise, borderColor = '#009688'}) =>{

    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    return (
        <div className="card" style={{ borderColor: color}} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <h4>
                Exercice : {exercise.sport}
            </h4> 
            <p>
                Date : {exercise.start_time}
            </p>
        </div>
    )
}

export default ExerciceCard;