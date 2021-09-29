import logo from "./logo.svg";
import "./App.css";
import { useState } from "react"; 
import axios from 'axios';
const qs = require('qs');

function App() {
  const [sentiment, setsentiment] = useState("");

  const analyse = async (text) => {
    var data = qs.stringify({
      text: text,
    });
    var config = {
      method: "post",
      url: "https://gg-sae.azurewebsites.net/analyse",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie:
          "ARRAffinity=9e89c1d60cfdd954c8867d82790648aafd773e27a2d4103f500276884301a0da; ARRAffinitySameSite=9e89c1d60cfdd954c8867d82790648aafd773e27a2d4103f500276884301a0da",
      },
      data: data,
    };
    console.log("config is ", config);
    return axios(config)
      .then(function (response) {
        const resp = JSON.stringify(response.data);
        console.log(resp);
        return resp;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onTextSubmitted = async () => {
    console.log("Button clicked");
    let response = await analyse(document.getElementById("sentence").value);
    console.log(response);
    setsentiment(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" id="sentence"></input>
        <button onClick={onTextSubmitted}>Submit text</button>
        <p>{sentiment}</p>
      </header>
    </div>
  );
}

export default App;
