let parent = document.getElementById("root");

// let heading1 = document.createElement("h1");
// heading1.innerText = "Hello React";
// heading1.style.backgroundColor = "orange";
// heading1.style.fontSize = "20px";
// // console.log(heading1);

// let heading2 = document.createElement("h3");
// heading2.innerText = "Bahut Easy hein";
// heading2.style.backgroundColor = "yellow";
// heading2.style.fontSize = "20px";
// console.log(heading2);

// Craeting the Function

let React = {
  createElement: function (tag, styles, children) {
    let ele = document.createElement(tag);
    ele.innerText = children;
    for (let key in styles) {
      ele.style[key] = styles[key];
    }
    return ele;
  },
};

let heading1 = React.createElement(
  "h1",
  { backgroundColor: "orange", fontSize: "20px" },
  "Hello React",
);
let para = React.createElement(
  "p",
  { backgroundColor: "yellow", fontSize: "40px" },
  "Bahut Easy hein",
);

let ReactDOM = {
  render: function (root, ele) {
    root.append(ele);
  },
};

ReactDOM.render(parent, heading1);
ReactDOM.render(parent, para);

// add karne k liye
// root.append(heading1);
// root.append(para);
// root.append(heading2);
