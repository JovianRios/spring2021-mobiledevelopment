import React, {Component} from 'react'

class Arms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reps: 0
        };
    };

    render () {
        return (
          <div>
              <h2>Arm Reps: {this.state.reps}</h2>
              <button class="submit" onClick={()=> this.setState({reps: this.state.reps +1})}>Reps</button><br></br>
              <button class="submit" onClick={()=> this.setState({reps: 0})}>Reset</button>
          </div>
        );
      }
    }
      
      export default Arms;

