import React from "react";

const getSeason = (lat, month) => {
  if (month > 11 || month < 3) {
    if (lat > 0) {
      return "Winter.";
    } else {
      return "Summer";
    }
  } else if (month < 12 && month > 8) {
    if (lat > 0) {
      return "Fall";
    } else {
      return "Spring";
    }
  } else if (month < 9 && month > 5) {
    if (lat > 0) {
      return "Summer";
    } else {
      return "Winter.";
    }
  } else {
    if (lat > 0) {
      return "Spring";
    } else {
      return "Fall";
    }
  }
};

const SeasonDisplay = props => {
  return (
    <div>
      <h1>
        The season is currently{" "}
        {getSeason(props.latitude, new Date().getMonth())}
        {""} where you reside.
      </h1>
    </div>
  );
};

export default SeasonDisplay;
