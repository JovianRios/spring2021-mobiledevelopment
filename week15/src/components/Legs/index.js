import React from 'react';

function Legs (props) {

    return (
        <div>
        <h2>Leg Reps: {props.state.legs}</h2>
        <button onClick={()=> props.dispatch({"type": "increment2"})}>Add Leg Rep</button><br></br>
        <button onClick={()=> props.dispatch({"type": "decrement2"})}>Remove Leg Rep</button>
        </div>
    )
}

export default Legs;