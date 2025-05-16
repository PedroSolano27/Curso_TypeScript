// Componente de spinner
import React from "react";
import "./Spinner.css";

type Props = {
  className: string
}

function Spinner({className}: Props) {
  return (
    <div className={`lds-ring ${className}`}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  );
}

export default Spinner;