// Imports Sidebar
import Sidebar from './components/Sidebar.js';

// Passes the values to the constructor method of Sidebar
let s = new Sidebar({
  menu: [
    'Albert Eggstein',
    'Attila the Hen',
    'Attila the Hen',
    'Dixie Chick',
    'Gregory Peck',
    'Mary Poopins'
  ]
});

// Exports the HTML in the console
console.log(s.render());