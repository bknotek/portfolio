import React from "react";
import styled from "@emotion/styled";
import { SideBySideMagnifier } from "react-image-magnifiers";

const LogoContainer = ({ colors, details, alt, imgSrc }) => {
  const Container = styled.div`
    width: 240px;
    height: 225px;
    background-color: white;
    border: solid black 4px;
    margin: 30px;
    -webkit-filter: drop-shadow(-3px 3px62px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(-3px 3px 6px rgba(0, 0, 0, 0.5));

    @media (max-width: 620px) {
      width: 150px;
      height: 150px;
      margin: 10px;
    }
  `;

  const PaletteDiv = styled.div`
    width: 240px;
    height: 10px;
    position: absolute;
    z-index: 2;

    @media (max-width: 620px) {
      width: 150px;
    }
  `;

  const ColorDiv1 = styled.div`
    width: 10px;
    height: 100%;
    background-color: ${colors[0]};
    float: left;
  `;

  const ColorDiv2 = styled.div`
    width: 10px;
    height: 100%;
    background-color: ${colors[1]};
    float: left;
  `;

  const ColorDiv3 = styled.div`
    width: 10px;
    height: 100%;
    background-color: ${colors[2]};
    float: left;
  `;

  const ColorDiv4 = styled.div`
    width: 10px;
    height: 100%;
    background-color: ${colors[3]};
    float: left;
  `;

  const ColorDiv5 = styled.div`
    width: 10px;
    height: 100%;
    background-color: ${colors[4]};
    float: left;
  `;
  const LogoDiv = styled.div`
    width: 100%;
    height: 200px;
    background-color: white;
    float: left;

    @media (max-width: 620px) {
      height: 125px;
    }
  `;

  const InfoDiv = styled.div`
    width: 100%;
    height: 25px;
    background-color: black;
    float: left;

    p {
      color: white;
      font-size: 10px;
      float: right;
      font-weight: bold;
      line-height: 10px;
    }
  `;

  return (
    <Container>
      <PaletteDiv>
        <ColorDiv1></ColorDiv1>
        <ColorDiv2></ColorDiv2>
        <ColorDiv3></ColorDiv3>
        <ColorDiv4></ColorDiv4>
        <ColorDiv5></ColorDiv5>
      </PaletteDiv>
      <LogoDiv>
        <SideBySideMagnifier
          imageSrc={imgSrc}
          alwaysInPlace="true"
          fillAvailableSpace="true"
          fillAlignTop="true"
          fillGapBottom="true"
          overlayOpacity="1"
          overlayBackgroundColor="eeeeee"
        />
      </LogoDiv>
      <InfoDiv>
        <p>{details}</p>
      </InfoDiv>
    </Container>
  );
};

export default LogoContainer;
