import React, { useState } from "react";
import styled from "styled-components";
import styles from "./Buttons.module.css";

const Buttonn = styled.button`
  font-family: "Century Gothic", serif;
  padding: 10px 50px;
  color: ${(props) => (props.mouse ? "red" : "blue")};
  font-size: 50px;
`;

function Button() {
  const [mouse, setMouse] = useState(false);

  const mouseDown = () => setMouse(!mouse);
  const Share = () => {
    if (navigator.share) {
      navigator.share({
        text: "Sharing for first time",
        url: "/#/topic/2.2#2.2.1",
        title: "The Number of Pillars",
      });
    } else {
      navigator.clipboard.writeText("Copied to Clipboard");
    }
  };

  return (
    <Buttonn className={styles.SampleButton} onClick={Share}>
      Share
    </Buttonn>
  );
}

export default Button;
