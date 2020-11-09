import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
      <Person />
      <Person />
      <Person />
      <p>this is my message</p>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href="#">hello again</a>
        </li>
      </ul>
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
