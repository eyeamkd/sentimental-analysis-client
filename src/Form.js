import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Form() {
  const [selectedValue, setselectedValue] = React.useState(""); 

  const onRadioButtonSelected = (event) => {
        setselectedValue(event.target.value); 
        console.log("Selected value is", event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Module</FormLabel>
      <RadioGroup
        aria-label="gender"
        defaultValue="female"
        name="radio-buttons-group" 
        onChange={onRadioButtonSelected}
        style={{ color: "black" }}
      >
        <FormControlLabel
          value="text-summarization"
          control={<Radio />}
          label="Text Summarization"
        />
        <FormControlLabel
          value="named-enitity-recognition"
          control={<Radio />}
          label="Named Enitity Recognition"
        />
        <FormControlLabel
          value="senitment-analysis"
          control={<Radio />}
          label="Sentiment Analysis"
        />
        <FormControlLabel
          value="key-phrase-extraction"
          control={<Radio />}
          label="Key Phrase Extraction"
        />
      </RadioGroup>
    </FormControl>
  );
}
