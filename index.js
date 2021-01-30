// Imports Article
import Article from './Article.js';

// Passes the values of title, author, and text to the constructor method of Article
let article = new Article ("This is the title!", "Me", "This is an example article!");

// Exports the HTML in the console
console.log(article.render() );