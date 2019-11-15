import React from "react";
import styled from "styled-components";


export default function Header() {
  const Heading = styled.div`
  font-size: 20px;
  text-shadow: 2px 2px BlueViolet;
  text-align: center;
`
  return (
    <Heading className="ui centered">
      <h2 className="ui center">Rick &amp; Morty Fan Page</h2>
    </Heading>
  );
}
