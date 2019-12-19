import React, { FunctionComponent } from "react";
import { ProgressIndicator, ProgressSpinner } from "@jsluna/progress";
import "./spinner.css";

type SpinnerPropType = {
  spinnerShowing: Boolean;
};

const Spinner: FunctionComponent<SpinnerPropType> = ({ spinnerShowing }) => {
  return (
    <ProgressIndicator page loading={spinnerShowing}>
      <ProgressSpinner size="large" />
      Loading...
      <img
        className="spinnerImage"
        src="googlespinnerImage.png"
        alt="Smiley face"
        width="35"
      />
    </ProgressIndicator>
  );
};

export default Spinner;
