import React from "react";
import ReactDom from "react-dom";

import "./index.css";

function BookList() {
  return (
    <>
      <section>this is a booklist</section>
      <Book />
      <Book />
      <Book />
    </>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://books.adrianmejia.com/dsajs-data-structures-algorithms-javascript/images/dsajs-cover-320h2.png"
    width="100px"
    alt="Book Image"
  />
);

const Author = () => <h2>Adrian Mejia</h2>;

const Title = () => <h1>Data Algorithms</h1>;

ReactDom.render(<BookList />, document.getElementById("root"));
