import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // const [first, setFirst] = useState("");
  // const [second, setSecond] = useState("");
  let first, second;

  // const [params, setParams] = useState("");
  // useEffect(() => {
  //   window.onload = onloadCall();
  //   function onloadCall() {
  //     const url = window.location.href;
  //     console.log("url=>", url);
  //     const value = url.split("?")[1];
  //     console.log("value=>", value);
  //     if (value === undefined) {
  //       setParams("no message");
  //     } else {
  //       setParams(value);
  //     }
  //   }
  // }, []);

  // console.log("params", params);
  //**********************************************************/

  let params = "no message";
  window.onload = onloadCall();
  function onloadCall() {
    const url = window.location.href;
    console.log("url===>", url);
    const value = url.split("?")[1];
    console.log("value=>", value);
    if (value !== undefined) {
      params = value;
    }
  }
  //***************************window onload*************************************/
  //***************************window event listener*****************************/
  // function receive(event) {
  //   console.log("origin", event.origin);
  //   if (event.origin !== "https://yogibiz.myshopify.com") {
  //     return;
  //   }
  //   console.log("Received Message ==>> ", event.data, "\n", event.origin, "\n");
  // }

  // window.onload = func();

  // function func() {
  //   window.addEventListener("message", receive, false);
  // }
  // func();
  //*****************************************************************************/
  //****************************window event listener with useEffect*************/
  // function receive(event) {
  //   // console.log("origin", event.origin);
  //   console.log("22");
  //   if (event.origin !== "https://yogibiz.myshopify.com") {
  //     return;
  //   }
  //   console.log(
  //     "Received Message ==>> ",
  //     event.data,
  //     "\n",
  //     "==>",
  //     event.data.message,
  //     "\n",
  //     "==>",
  //     event.data.team,
  //     "\n",
  //     event.origin,
  //     "\n"
  //   );
  //   first = event.data.message;
  //   second = event.data.team;
  //   // setFirst(event.data.message);
  //   // setSecond(event.data.team);
  // }

  // function func() {
  //   window.addEventListener("message", receive, false);
  // }
  // useEffect(() => {
  //   return () => {
  //     console.log("count");
  //     func(); //function to invoke event
  //     // window.onload = func();
  //   };
  // }, []);
  // //*****************************************************************************/
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: "45px" }}>Yogendra Rajpoot</p>
        <p style={{ fontSize: "20px", marginTop: "-2%" }}>Software Developer</p>
        <p style={{ fontSize: "20px", marginTop: "-1%" }}>
          Logic Is Everywhere.
        </p>

        <p>
          1<sup>st</sup> Message Receive from parent Iframe :- {params}
        </p>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
