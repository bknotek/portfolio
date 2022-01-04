import React from "react";
import styled from "@emotion/styled";

const VideosContainer = ({ videoSrc, title, info }) => {
  const Container = styled.div`
    width: 550px;
    height: 400px;
    background-color: white;
    border: solid black 4px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 40px;
    -webkit-filter: drop-shadow(-3px 3px62px rgba(0, 0, 0, 0.2));
    filter: drop-shadow(-3px 3px 6px rgba(0, 0, 0, 0.5));

    @media (max-width: 620px) {
      width: 300px;
      height: 200px;
      margin-right: auto;
      margin-left: auto;
    }
  `;

  const InfoDiv = styled.div`
    width: 100%;
    height: 40px;
    background-color: black;
    float: left;

    p {
      color: white;
      font-size: 14px;
      float: left;
      font-weight: bold;
      line-height: 20px;
    }

    a {
      color: white;
      font-size: 14px;
      float: right;
      font-weight: bold;
      line-height: 45px;
      text-decoration: none;
    }

    @media (max-width: 620px) {
      height: 30px;

      p {
        line-height: 5px;
      }

      a {
        line-height: 35px;
      }
    }
  `;

  const SiteImgDiv = styled.div`
    width: 100%;
    height: 360px;

    float: left;
    background-size: cover;

    @media (max-width: 620px) {
      height: 170px;
    }
  `;

  return (
    <Container>
      <SiteImgDiv>
        <video width="100%" height="100%" controls>
          <source src="build/videos/OnTrack.mp4" type="video/mp4" />
        </video>
      </SiteImgDiv>
      <InfoDiv>
        <p>{title}</p>
        <a>{info}</a>
      </InfoDiv>
    </Container>
  );
};

export default VideosContainer;
