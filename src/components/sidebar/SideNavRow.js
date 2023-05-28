import React from "react";
import { useAmazonContext } from "../../Contexts/AmazonContext";

export default function SideNavRow(props) {
  const { setSubContainer, setSubContainerEntries } = useAmazonContext();

  const openRow = () => {
    setSubContainer(true);
    setSubContainerEntries(props.entries);
  };

  return (
    <div
      className="sidenavRow"
      style={props.styleVariable}
      onClick={() => props.entries && openRow()}
    >
      <div className="sidenavRowText">
        {props.number}
        &nbsp; &nbsp;
        {props.title}
      </div>
      <i class="fas fa-chevron-right"></i>
    </div>
  );
}
