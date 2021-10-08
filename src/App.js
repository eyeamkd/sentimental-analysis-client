import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Input from "./Input";
// const qs = require("qs"); 

const endpoints = {
  'text-summarization':'summarize',
  'key-phrase-extraction':'extract',
  'named-enitiy-recognition':'entity-recog',
  'senitment-analysis':'analyse'
}

function App() {
  const [sentiment, setsentiment] = useState("");

  const analyse = async (text) => { 
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      text 
    });
    var config = {
      method: 'post',
      url: 'https://gg-sae.azurewebsites.net/analyse',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data)); 
      setsentiment(JSON.stringify(response.data));
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
        <h1 style={{color:'black', fontFamily:'monospace'}}>Sentiment Analyser POC</h1>
        <Input/> 
        <Form/>
        <button style={{padding:'25px', border:'1px solid black', borderRadius:'10px', fontSize:'18px'}} onClick={onTextSubmitted}>Submit text</button>
        <p style={{color:'black'}}>{sentiment}</p>
        {/* <div>
          <Meter />
        </div> */}
      </header>
    </div>
  );
}

export default App;
