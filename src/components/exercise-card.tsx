import React, { FunctionComponent, useState } from "react";
import Exercise from "../models/exercise";
import { useHistory } from "react-router-dom";
import '../styles/exercise-card.css';

type Props = {
    exercise: Exercise,
    backgroundColor?: string
};

const ExerciceCard: FunctionComponent<Props> = ({exercise, backgroundColor = '#ACE4FC'}) =>{

    const [color, setColor] = useState<string>();
    const history = useHistory();

    const showBorder = () => {
        setColor(backgroundColor);
    }

    const hideBorder = () => {
        setColor('');
    }

    const goToExercise = (id: string) => {
        history.push(`/exercises/${id}`)
    }

    return (
        <div className="card" onClick={() => goToExercise(exercise.id)} style={{ backgroundColor: color }} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card-item" >
                <h4>
                    {exercise.sport} 
                </h4> 
                <p>
                    {exercise.start_time}
                </p>
            </div>
            <h5 className="sport-detail">
                {exercise.detailed_sport_info}
            </h5>
        </div>
    )
}

export default ExerciceCard;