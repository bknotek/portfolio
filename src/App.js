import React, { useState, useEffect } from "react";
import "./App.css";
import LogoContainer from "./Components/LogoContainer.js";
import SitesContainer from "./Components/SitesContainer.js";
import Footer from "./Components/Footer.js";
import styled from "@emotion/styled";

function App() {
  const [LogoSectionDiv, setLogoSectionDiv] = useState({
    display: "visible",
    underline: "underline",
  });
  const [SiteSectionDiv, setSiteSectionDiv] = useState({
    display: "none",
    underline: "none",
  });

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
    text-decoration: ${LogoSectionDiv.underline};
    text-decoration-thickness: 6px;
    text-decoration-color: #90f200;
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
    text-decoration: ${SiteSectionDiv.underline};
    text-decoration-thickness: 6px;
    text-decoration-color: #c3f400;
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

  const MainContainer = styled.div`
    background-color: #fafaf6;
  `;

  const LogoSection = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    padding-top: 250px;
    grid-gap: 10px 10px;
    display: ${LogoSectionDiv.display};
    @media (max-width: 930px) {
      grid-template-columns: auto auto;
    }

    @media (max-width: 620px) {
      grid-template-columns: auto auto;
      grid-gap: -10px -10px;
      padding-top: 210px;
    }
  `;

  const SitesSections = styled.div`
    width: 90%;

    margin-left: auto;
    margin-right: auto;
    padding-top: 250px;
    display: ${SiteSectionDiv.display};
    @media (max-width: 620px) {
      padding-top: 210px;
    }
  `;

  const FooterDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: black;
    display: flex;
    justify-content: center;

    p {
      color: white;
      line-height: 20px;
      font-weight: 700;
    }
  `;

  function setLogoSection() {
    setLogoSectionDiv({
      display: "display",
      underline: "underline",
    });
    setSiteSectionDiv({
      display: "none",
      underline: "none",
    });
  }

  function setSiteSection() {
    setLogoSectionDiv({
      display: "none",
      underline: "none",
    });
    setSiteSectionDiv({
      display: "display",
      underline: "underline",
    });
  }

  return (
    <MainContainer>
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
          <img src="NAME-ICON.png" alt="Top Name Icon" />
        </NameDiv>
        <NavBar>
          <LogosLink onClick={setLogoSection}>LOGOS</LogosLink>
          <SitesLink onClick={setSiteSection}>SITES</SitesLink>
        </NavBar>
      </HeaderDiv>
      <LogoSection>
        <LogoContainer
          details="Taco Truck"
          alt="Logo1"
          colors={["#c1272d", "#ffce4a", "#f59320"]}
          imgSrc="logos/UpsideDownTacos_logo.jpg"
        />
        <LogoContainer
          details="Junk Removal Company"
          alt="Logo1"
          colors={["#fe0000", "#ffa638", "#ffca30"]}
          imgSrc="logos/TossItOutJunkRemoval_logo.jpg"
        />
        <LogoContainer
          details="Home Inspector"
          alt="Logo1"
          colors={["#f1653b", "#000000"]}
          imgSrc="logos/HillsHomeInspection_logo.jpg"
        />
        <LogoContainer
          details="Medical Services"
          alt="Logo1"
          colors={["#23225e", "#ed212a"]}
          imgSrc="logos/Developed_Medical_logo.jpg"
        />
        <LogoContainer
          details="Masonry Services"
          alt="Logo1"
          colors={["#05014b", "#fbb03b"]}
          imgSrc="logos/NMasonry_logo.jpg"
        />
        <LogoContainer
          details="Sporting Goods Store"
          alt="Logo1"
          colors={["#425aa8", "#ccecf9"]}
          imgSrc="logos/SportsWorld_logo.jpg"
        />
        <LogoContainer
          details="Accountant"
          alt="Logo1"
          colors={["#2a32ff", "#654cfc", "#a668f9", "#000000"]}
          imgSrc="logos/OkOnBooks_logo.jpg"
        />
        <LogoContainer
          details="Baked Goods Delivery"
          alt="Logo1"
          colors={["#fdfde5", "#b54e9d", "#e0a0c5", "fbb869"]}
          imgSrc="logos/AstridBakes_logo.jpg"
        />
        <LogoContainer
          details="General Contracting"
          alt="Logo1"
          colors={["#0abbb5", "#eba221", "#c54731"]}
          imgSrc="logos/GreyStonesRemodeling_logo.jpg"
        />
        <LogoContainer
          details="Cleaning Company"
          alt="Logo1"
          colors={["#009245", "#3fa9f5", "#d35822", "#000000", "#d3d3d3"]}
          imgSrc="logos/McnealsSpotlessCleaningServices_logo.jpg"
        />
        <LogoContainer
          details="Construction Company"
          alt="Logo1"
          colors={["#961a24", "#8a8889", "#060709"]}
          imgSrc="logos/BellAirConstruction_logo.jpg"
        />

        <LogoContainer
          details="Medical Sales"
          alt="Logo1"
          colors={["#ffdca9", "#ed1c24", "#fff7d5", "0f75bc", "000000"]}
          imgSrc="logos/DylanKnotek_logo.jpg"
        />
        <LogoContainer
          details="HVAC Company"
          alt="Logo1"
          colors={["#014377", "#ed4020"]}
          imgSrc="logos/FairWay_logo.jpg"
        />
        <LogoContainer
          details="Logistics Company"
          alt="Logo1"
          colors={["#1b190e", "#fffcf3"]}
          imgSrc="logos/FreightFWDG1LLC_logo.jpg"
        />

        <LogoContainer
          details="Junk Removal Company"
          alt="Logo1"
          colors={["#0e74bc", "#000000"]}
          imgSrc="logos/LarryPRocell_logo.jpg"
        />
        <LogoContainer
          details="Bar & Grill"
          alt="Logo1"
          colors={["#fdb72c", "#000000"]}
          imgSrc="logos/Margarets_logo.jpg"
        />
        <LogoContainer
          details="Cleaning Company"
          alt="Logo1"
          colors={["#55a4da", "#050708"]}
          imgSrc="logos/MarysHouseCleaning_logo.jpg"
        />

        <LogoContainer
          details="Pizza Restaurant"
          alt="Logo1"
          colors={["#ed1c24", "#000000"]}
          imgSrc="logos/NeutrinosPizza_logo.jpg"
        />

        <LogoContainer
          details="Drone Photography"
          alt="Logo1"
          colors={["#67b9e8", "#c7e9f4", "#000000"]}
          imgSrc="logos/SKYPOV_logo.jpg"
        />

        <LogoContainer
          details="Physical Therapy"
          alt="Logo1"
          colors={["#ed2224", "#000000"]}
          imgSrc="logos/Synergy_logo.jpg"
        />

        <LogoContainer
          details="Ice Cream Shop"
          alt="Logo1"
          colors={["#000000"]}
          imgSrc="logos/TritonTreats_logo.jpg"
        />

        <LogoContainer
          details="Hoover Overhead Doors"
          alt="Logo1"
          colors={["#ff6a06"]}
          imgSrc="logos/HooverOverheadDoor_logo.jpg"
        />

        <LogoContainer
          details="Dee Moore Salon"
          alt="Logo1"
          colors={["#000000"]}
          imgSrc="logos/DeeMooreSalon_logo.jpg"
        />

        <LogoContainer
          details="GIT Financial Services"
          alt="Logo1"
          colors={["#e7cc75", "#ad7425", "#047968", "#43ba85"]}
          imgSrc="logos/GITFinancialServices_logo.jpg"
        />

        <LogoContainer
          details="Nancy's Nail Salon & Spa"
          alt="Logo1"
          colors={["#8c6eae", "#e9bd72"]}
          imgSrc="logos/NancysNailSalonSpa_logo.jpg"
        />

        <LogoContainer
          details="Niz Tree Services Corp"
          alt="Logo1"
          colors={["#019245", "#fdee21"]}
          imgSrc="logos/NizTreeServicesCorp_logo.jpg"
        />
      </LogoSection>
      <SitesSections>
        <SitesContainer
          imgSrc="sites/HillsHomeInspection_Site.jpg"
          software="React App"
          link="http://hillshomeinspections.com/"
        ></SitesContainer>
        <SitesContainer
          imgSrc="sites/SportsWorld_Site.jpg"
          software="Wordpress Site"
          link="https://sportsworlduniforms.com/sports-home/"
        ></SitesContainer>
      </SitesSections>
      <FooterDiv>
        <p>Brandon Knotek 2021</p>
      </FooterDiv>
    </MainContainer>
  );
}

export default App;
