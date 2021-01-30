// Component is the parent
class Component {
  // Constructor accepts the three parameters shown below
  constructor (title, author, text) {
    this.props = {};
    this.props.title = title;
    this.props.author = author;
    this.props.text = text;

  }
  // Renders the three parameters mentioned in Constructor by using ${this.props...}
  render () {
    return `
      <Article>
        <title>${this.props.title}</title>
        <span>${this.props.author}</span>
        <div>${this.props.text}</div>
      </Article>`;
  }
}
// Exports class Component
export default Component;