import React from "react";
import styled from "styled-components";
import { ImageCarousel } from "./imageCarousel";
import IOSBadgeButton from "./badge";

const HeaderContainer = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 55%,
      rgba(255, 255, 255, 1) 100%
    ),
    url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 0;
  margin: 0;
`;

const HeaderBackground = styled.div`
  padding: 0;
  color: white;
`;

const HeaderLogo = styled.img`
  height: 180px;
  padding-top: 3rem;
`;

const HeaderTitle = styled.h1`
  font-size: 2.3rem;
  -webkit-text-shadow: 0 0 15px rgba(255, 255, 255, 1);
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 15px rgba(255, 255, 255, 1);
`;

const HeaderSubtitle = styled.h3`
  font-weight: 400;
  font-size: 1.3rem;
  margin-top: -1rem;
  -webkit-text-shadow: 0 0 15px rgba(255, 255, 255, 1);
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 15px rgba(255, 255, 255, 1);
`;

const IOSBadge = styled.button`
  padding: 0;
  margin-bottom: 2.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const IOSBadgeImage = styled.img``;

export class AppHeader extends React.Component {
  render() {
    return (
      <HeaderContainer img="https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/77.jpg?alt=media&token=9c19638a-d719-4656-bc39-2fad7566cab3">
        <HeaderBackground>
          <HeaderLogo src="https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Badge.svg?alt=media&token=fe6f98d4-3b64-45f3-b1ec-b4be4b420c4b" />
        </HeaderBackground>
        <HeaderTitle>Avenue: Route Planner</HeaderTitle>
        <HeaderSubtitle>Adding Value to Your Route</HeaderSubtitle>
        <IOSBadgeButton />
        <ImageCarousel />
      </HeaderContainer>
    );
  }
}
