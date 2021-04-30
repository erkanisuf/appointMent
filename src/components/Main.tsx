import React, { useState } from "react";
import Servicepicker from "./servicepicker/Servicepicker";
import Timepicker from "./timepicker/Timepicker";

const Main = () => {
  const [page, setPage] = useState<number>(0);
  const [service, setService] = useState<string>("");
  const showpage = () => {
    switch (page) {
      case 1:
        return <Servicepicker service={service} setService={setService} />;
      case 2:
        return <Timepicker />;
      default:
        return <p>error</p>;
    }
  };
  return (
    <div>
      <button onClick={() => setPage((prev) => prev + 1)}> NEXT</button>
      <button onClick={() => setPage((prev) => prev - 1)}> Back</button>
      {showpage()}
    </div>
  );
};

export default Main;
