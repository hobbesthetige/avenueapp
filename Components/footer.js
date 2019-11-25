import React from "react";
import styled from "styled-components";
import IOSBadgeButton from "./badge";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10rem;
  background-color: #f1f1f1;
`;

const HStack = styled.div`
  display: inline-block;
`;

const HBlock1 = styled.div`
  margin: 0.8rem 0.4rem 0.2rem 0.4rem;
  height: 44px;
`;

const HBlock2 = styled.div`
  margin: 0 0.4rem 0.4rem 0.4rem;
`;
// const BadgeContainer = styled.div`
//   margin-top: 1rem;
// `;
export class AppFooter extends React.Component {
  render() {
    return (
      <Container>
        <HStack>
          <HBlock1>
            <IOSBadgeButton />
          </HBlock1>
          <HBlock2>
            <p>
              Avenue is created and maintained by two veteran brothers. Check
              out our company website at{" "}
              <a href="https://bluehouselogistics.com">
                www.bluehouselogistics.com
              </a>
            </p>
            <p>
              By using Avenue, you agree to its{" "}
              <a href="https://bluehouselogistics.com/privacy-policy">
                Privacy Policy
              </a>{" "}
              <nbsp />
              and{" "}
              <a href="https://app.termly.io/document/terms-of-use-for-website/d60cc374-9837-4b64-83d6-34a688f03b7f">
                Terms of Service
              </a>
              .
            </p>
          </HBlock2>
        </HStack>
      </Container>
    );
  }
}
