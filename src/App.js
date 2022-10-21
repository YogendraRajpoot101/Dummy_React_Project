import logo from "./logo.svg";
import "./App.css";

function App() {
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
  // window.onload = onloadCall();
  // function onloadCall() {
  //   const url = window.location.href;
  //   console.log("url=>", url);
  //   const value = url.split("?")[1];
  //   console.log("value=>", value);
  //   if (value !== undefined) {
  //     params = value;
  //   }
  // }
  //***************************window onload*************************************/
  //***************************window event listener*****************************/
  function receive(event) {
    if (
      event.origin !==
      "https://yogibiz.myshopify.com/admin/themes/136317108523/editor"
    ) {
      // return;
    }
    console.log(
      "Received Message : ",
      event,
      "\n"
      // JSON.stringify(event),
      // "\n",
      // JSON.stringify(event.data),
      // "\n",
      // event.origin
    );
  }
  // window.addEventListener("message", receive, true);
  //*****************************************************************************/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: "45px" }}>Yogendra Rajpoot</p>
        <p style={{ fontSize: "20px", marginTop: "-2%" }}>Software Developer</p>
        <p style={{ fontSize: "20px", marginTop: "-1%" }}>
          Logic Is Everywhere.
        </p>
        <p>Message Receive from Iframe :- {params}</p>
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
