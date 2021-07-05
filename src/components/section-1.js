import React from "react";


function Section1() {
    let maDate = new Date();
  return (
    <div>
          <p>{maDate.getDate()}/{maDate.getMonth()+1}/{maDate.getFullYear()}</p>
    </div>
  );
}

export default Section1;
