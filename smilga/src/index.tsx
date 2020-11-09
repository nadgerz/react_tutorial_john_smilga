import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function BookList() {
  return (
    <>
      <p>this is a booklist</p>
      <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://books.adrianmejia.com/dsajs-data-structures-algorithms-javascript/images/dsajs-cover-320h2.png"
    alt="Book Image"
  />
);

const Author = () => <h2>Adrian Mejia</h2>;

const Title = () => <h1>Data Algorithms</h1>;

ReactDom.render(<BookList />, document.getElementById("root"));
