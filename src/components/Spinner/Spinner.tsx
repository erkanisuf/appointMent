import React from "react";

interface ISpinner {
  children: React.ReactNode;
  data: any;
  loading: boolean;
  error: boolean;
}
const Spinner: React.FC<ISpinner> = ({ children, data, error, loading }) => {
  if (!data) {
    return <h1>Nodata</h1>;
  } else if (error) {
    return <h1>Error something went wrong!Try again..</h1>;
  } else if (loading) {
    return <h1>Loading..</h1>;
  } else return <div>{children}</div>;
};

export default Spinner;
