// Imports Component
import Component from './Component.js';

// Creates class of Sidebar which is a child of Component
class Sidebar extends Component {

  // Constructor accepts the props
  constructor (props) {
        
    // This Super pushes back to Sidebar
    super(props);
  }
    
  // Returns HTML code of props mentioned
  render () {
   
    // Sets up the string
    let responseHTML = '';

    // Loops through each item and makes a list of them
    this.props.menu.forEach( (item) => {
      
      // This adds an item to the existing value
      responseHTML += '<li>' + item + '</li>'
    });

    // Creates an unordered list for each item 
    responseHTML = '<ul>' + responseHTML + '</ul>';

    // Renders each item mentioned
    return responseHTML;
  }
}
// Exports class Sidebar
export default Sidebar;
