import React from 'react';

function Arms (props) {

    return (
        <div>
        <h2>Arm Reps: {props.state.arms}</h2>
        <button onClick={()=> props.dispatch({"type": "increment1"})}>Add Arm Rep</button><br></br>
        <button onClick={()=> props.dispatch({"type": "decrement1"})}>Remove Arm Rep</button>
        </div>
    )
}

export default Arms;