import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return <h4>This is Steve and this is my first component</h4>;
}

/*
const Greeting = () => {
	return React.createElement('h1', {}, 'Booyah!')
}
 */

ReactDom.render(<Greeting />, document.getElementById("root"));
