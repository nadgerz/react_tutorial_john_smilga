import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return <section>this is a booklist</section>;
}

const Book = () => {
  return <article></article>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
