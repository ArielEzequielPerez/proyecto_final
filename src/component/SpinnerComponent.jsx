import React from "react";
import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerComponent() {
  return (
    <div className="constainer center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
