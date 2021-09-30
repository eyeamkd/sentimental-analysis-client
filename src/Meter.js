import React from "react"; 
import  './Meter.css';

function Meter() {
  return (
    <div>
      <div class="meter">
        <div class="progress">
          <div class="hold left">
            <div class="fill"></div>
          </div>
          <div class="hold right">
            <div class="fill"></div>
          </div>
        </div>

        <div class="shadow"></div>

        <div class="line"></div>
        <div class="pin"></div>
      </div>
    </div>
  );
}

export default Meter;
