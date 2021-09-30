import axios from "axios";
import { useState } from "react";
import "./App.css";
import Input from "./Input";
// const qs = require("qs");

function App() {
  const [sentiment, setsentiment] = useState("");

  const analyse = async (text) => { 

  // await  axios.post('https://gg-sae.azurewebsites.net/analyse',text, {headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   }}).then(resp => {
  //     console.log("Response from the API is",resp);
  //   }) 

  axios.get('https://gg-sae.azurewebsites.net/').then((resp)=>{
      console.log("Response is",resp);
  }) 

  axios.post('https://gg-sae.azurewebsites.net/analyse',text).then((resp)=>{
    console.log("Analysed text is", resp); 
    setsentiment(resp)
  })

    // var data = qs.stringify({
    //   text: text,
    // });
    // var config = {
    //   method: "post",
    //   url: "https://gg-sae.azurewebsites.net/analyse",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   text,
    // };
    // console.log("config is ", config);
    // return axios(config)
    //   .then(function (response) {
    //     const resp = JSON.stringify(response.data);
    //     console.log(resp);
    //     return resp;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
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
        <Input/>
        <button onClick={onTextSubmitted}>Submit text</button>
        <p>{sentiment}</p>
        {/* <div>
          <Meter />
        </div> */}
      </header>
    </div>
  );
}

export default App;
