import { background, Image } from "@chakra-ui/react";
import React from "react";

const home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"calc(100vh - 75px)",
        backgroundColor:"#999"
  
      }}
    >
      <div style={{fontSize:"35px", color:"black"}}> Welcome to DPS!!</div>
    </div>
  );
};

export default home;
