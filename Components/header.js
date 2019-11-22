import React from "react";
import styled from "styled-components";
import { ImageCarousel } from './imageCarousel'

const HeaderContainer = styled.div`
  background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,1) 100%), url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 0;
  padding-bottom: 1rem;
  margin: 0;
`

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
  font-weight: 900;
`;

const HeaderSubtitle = styled.h3`
  font-weight: 400;
  font-size: 1.3rem;
  margin-top: -1rem;
  padding-bottom: 2.5rem;
`;

const imageUrls = [
    "https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FIMG_0068.PNG?alt=media&token=da6c62c1-aaef-41ee-9d1b-966aa18ac0e3",
    "https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FIMG_0069.PNG?alt=media&token=22ae16a4-106a-4fa2-b8db-e642ea5843e6",
    "https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FIMG_0070.PNG?alt=media&token=c7f221fc-191e-4bc6-8ec7-89d8bf5a5746",
    "https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FIMG_0071.PNG?alt=media&token=8acadf02-3f90-48a2-9aba-943ebaaf7ae2",
    "https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FIMG_0072.PNG?alt=media&token=9d4ccd3a-0c8e-4ed3-a2b5-6bd3d4790a9a",
    "https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FIMG_0073.PNG?alt=media&token=e774d917-c738-4745-828d-89ce72ba9d4c",
    "https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FIMG_0074.PNG?alt=media&token=74dd4900-121b-42ca-a557-731afab7751f",
    "https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FIMG_0075.PNG?alt=media&token=c8e13fef-a07f-49fc-b2cd-422ccf464512",
    "https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FIMG_0077.PNG?alt=media&token=f4eabf05-fa8a-4cf2-8a86-01d66cd9a2fc"
  ];

export class AppHeader extends React.Component {

  render() {
    return (
      <HeaderContainer img="https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/77.jpg?alt=media&token=9c19638a-d719-4656-bc39-2fad7566cab3">
        <HeaderBackground >
          <HeaderLogo src="https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Badge.svg?alt=media&token=fe6f98d4-3b64-45f3-b1ec-b4be4b420c4b" />
        </HeaderBackground>
        <HeaderTitle>The Avenue App</HeaderTitle>
        <HeaderSubtitle>Add Value to Your Route</HeaderSubtitle>
        <ImageCarousel urls={imageUrls}/>
      </HeaderContainer>
    );
  }
}
