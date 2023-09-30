// Alert.js
import React, { useState, useEffect } from "react";
import "../../styles/Reuseble/alert.css";

function Alert({ type, message }) {
  console.log(message);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [4000]);

  return visible && <div className={`alert alert-${type}`}>{message}</div>;
}

export default Alert;
