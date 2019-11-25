import React from "react";
import styled from "styled-components";

const IOSBadge = styled.button`
  padding: 0;
  margin-bottom: 2.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const IOSBadgeImage = styled.img``;

export default class AppHeader extends React.Component {
  render() {
    return (
      <form>
        <IOSBadge
          type="submit"
          formAction="https://itunes.apple.com/app/id1481918803"
        >
          <IOSBadgeImage
            src="https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg?alt=media&token=ba95676f-9b8a-4c85-b6a9-5b2a18115f34"
            alt="Download the Avenue App on the iOS App Store"
          />
        </IOSBadge>
      </form>
    );
  }
}
