import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <>
      <section>this is a booklist</section>
      <Book />
      <Image />
    </>
  );
}

const Book = () => {
  return <article>this is a book</article>;
};

const Image = () => (
  <img
    src="https://books.adrianmejia.com/dsajs-data-structures-algorithms-javascript/images/dsajs-cover-320h2.png"
    alt="Book Image"
  />
);

ReactDom.render(<BookList />, document.getElementById("root"));
