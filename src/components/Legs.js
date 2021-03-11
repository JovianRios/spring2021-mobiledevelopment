import React, {useState} from 'react';

function Legs () {
    const [reps, setReps] = useState(0);

    return (
        <div>
        <h2>Leg Reps: {reps}</h2>
        <button class="submit" onClick={()=> setReps(reps + 1)}>Reps</button><br></br>
        <button class="submit" onClick={()=> setReps(0)}>Reset</button>
        </div>
    )
}

export default Legs;