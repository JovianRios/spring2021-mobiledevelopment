import React, {useState} from 'react';

function Legs () {
    const [reps, setReps] = useState(0);

    return (
        <div>
        <h2>Leg Reps: {reps}</h2>
        <button onClick={()=> setReps(reps + 1)}>Reps</button>
        <button onClick={()=> setReps(0)}>Reset</button>
        </div>
    )
}

export default Legs;