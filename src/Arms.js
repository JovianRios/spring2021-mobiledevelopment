import React, {Component} from 'react'

class Arms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0
        };
    };

    render () {
        return (
          <div>
              <h2>Arms Day: {this.state.arms}</h2>
          </div>
        );
      }
    }
      
      export default Arms;

