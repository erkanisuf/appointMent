import React from "react";
import { SadIcon, SpinnerIcon } from "../../utils/IconsStyled";

interface ISpinner {
  children: React.ReactNode;
  data: any;
  loading: boolean;
  error: boolean;
  errorlist?: string[];
}
const Spinner: React.FC<ISpinner> = ({
  children,
  data,
  error,
  loading,
  errorlist,
}) => {
  if (!data) {
    return <div>Nodata</div>;
  } else if (error) {
    return (
      <div>
        {" "}
        {error && (
          <>
            <SadIcon />
            <p>Something Went wrong !</p>
            {errorlist?.map((el: string, index: number) => {
              return (
                <div style={{ color: "red" }} key={index}>
                  {el}
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  } else if (loading) {
    return (
      <div>
        <SpinnerIcon />
        <p>Please wait while loading...</p>
      </div>
    );
  } else return <div>{children}</div>;
};

export default Spinner;
