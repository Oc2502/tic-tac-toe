import React, { useState } from "react";

const MatrixBox = (props) => {
  const [currentValue, setCurrentValue] = useState(null);

  const onBoxClick = (e) => {
    if (currentValue === null && !props.winner) {
      setCurrentValue(props.player);
      const key = props.id;
      props.onClick(currentValue, key);
    }
  };

  return (
    <div
      className="box"
      value={currentValue}
      onClick={onBoxClick}
      key={`${props.id}`}
    >
      {currentValue}
    </div>
  );
};

export default MatrixBox;
