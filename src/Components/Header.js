import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  const HeaderDiv = styled.div`
    width: 100%;
    height: 230px;
    background-color: #fbfaef;
    position: fixed;
    z-index: 1;
    -webkit-filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
    filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));

    @media (max-width: 620px) {
      height: 180px;
    }
  `;

  const NameDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 180px;

    img {
      width: 100%;
    }

    @media (max-width: 620px) {
      width: 150px;
      height: 140px;
    }
  `;

  const NavBar = styled.div`
    width: 400px;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: space-evenly;

    list-style-type: none;

    @media (max-width: 620px) {
      width: 300px;
    }
  `;

  const LogosLink = styled.li`
    color: black;
    cursor: pointer;
    margin: 0px;
    justify-content: space-evenly;
    justify-content: center;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #90f200;
      text-decoration-thickness: 6px;
    }
  `;

  const SitesLink = styled.li`
    color: black;
    cursor: pointer;
    margin: 0px;
    justify-content: space-evenly;
    justify-content: center;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #c3f400;
      text-decoration-thickness: 6px;
    }
  `;

  const ResumeDiv = styled.div`
    position: absolute;
    width: 90px;
    height: 30px;
    background-color: black;
    color: white;
    text-align: center;
    line-height: 30px;
    font-weight: 500;

    a {
      text-decoration: none;
      font-weight: 700;
      color: white;
    }
  `;
  const LinksDiv = styled.div`
    position: absolute;
    width: 90px;
    height: 30px;
    background-color: black;
    text-align: center;
    line-height: 30px;
    right: 0;

    a {
      text-decoration: none;
      font-weight: 700;
      color: white;
    }
  `;

  return (
    <HeaderDiv>
      <ResumeDiv>
        <a
          href="https://pdfhost.io/v/1X7ia0nea_RESUME_001.pdf
          "
          target="blank"
        >
          RESUME
        </a>
      </ResumeDiv>
      <LinksDiv>
        <a href="mailto: knotek27@yahoo.com">E-MAIL</a>
      </LinksDiv>
      <NameDiv>
        <img src="bk-portfolio/build/mstile-150x150.png" alt="Top Name Icon" />
      </NameDiv>
      <NavBar>
        <LogosLink>LOGOS</LogosLink>
        <SitesLink>SITES</SitesLink>
      </NavBar>
    </HeaderDiv>
  );
};

export default Header;
