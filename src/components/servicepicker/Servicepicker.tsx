import React, { useState } from "react";

const services = ["Haircut", "hairCOlor", "wash"];
const Servicepicker = ({ setService, service }: any) => {
  return (
    <div>
      <h1>THIS IS SERVICES</h1>
      <button onClick={() => setService("SETTED")}>setService</button>
      {service}
    </div>
  );
};

export default Servicepicker;
