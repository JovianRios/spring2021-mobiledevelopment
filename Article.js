// Imports Component
import Component from './Component.js';

// Creates class of Article which is a child of Component
class Article extends Component {
  
  // Constructor accepts the three parameters shown below
  constructor(title, author, text) {
    
    // This Super pushes back to Article
    super(title, author, text);
  }
  
  // Returns HTML code with the title, author, and text of this Article
  render() {
    // Use [return `] to render and reference ${this.props...}  
    return `
      <Article>
      
          <h1>THIS IS ME, Y'ALL!</h1>

          <title>${this.props.title}</title>

          <author>${this.props.author}</author>
          
          <text>${this.props.text}</text>
      
      </Article>`;
  }
}
// Exports class Article
export default Article;