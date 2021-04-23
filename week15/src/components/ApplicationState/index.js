let state = {
    arms: 0,
    legs: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment1':
            return {arms: state.arms + 1, legs: state.legs};
        case 'increment2':
            return {arms: state.arms, legs: state.legs + 1};
        case 'decrement1':
            return {arms: state.arms - 1, legs: state.legs}; 
        case 'decrement2':
            return {arms: state.arms, legs: state.legs -1};  
        default:
            throw new Error();     
    }
}

export {state, reducer};