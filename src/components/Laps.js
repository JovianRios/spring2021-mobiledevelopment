import React, {useState} from 'react';

function Laps () {
    const [reps, setReps] = useState(0);

    return (
        <div>
        <h2>Laps Ran: {reps}</h2>
        <button class="submit" onClick={()=> setReps(reps + 1)}>Reps</button><br></br>
        <button class="submit" onClick={()=> setReps(0)}>Reset</button>
        </div>
    )
}

export default Laps;