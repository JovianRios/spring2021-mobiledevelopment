import React, {useState} from 'react';

function Legs () {
    const [reps, setReps] = useState(0);

    return (
        <div>
        <h2>Leg Reps: {reps}</h2>
        </div>
    )
}

export default Legs;