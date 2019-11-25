import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem 4rem 2rem 4rem;
  margin: 0;
  display: inline-block;
`;

const Title = styled.div`
  font-weight: 400;
  font-size: 1.3rem;
`;

const Copy = styled.p`
  font-size: 1rem;
`;

const CardContainer = styled.div`
  margin: auto;
  padding: 1rem 0 3rem 0;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Column = styled.div`
  display: inline-block;
  text-align: left;
  width: 40%;
  padding: 0 16px;
  vertical-align: text-top;
  @media (max-width: 600px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 0.1rem 0 0 0;
  text-align: left;
  border-radius: 10px;
  background-color: #f1f1f1;
  overflow: hidden;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  text-align: center;
`;

const CardContent = styled.div`
  padding: 0 0.2rem;
`;
const CardImage = styled.img`
  width: 100%;
  margin-bottom: -3px;
`;

export class AppBody extends React.Component {
  render() {
    return (
      <Container>
        <Title>About Avenue</Title>
        <Copy>
          Avenue is a route optimization app that takes your waypoints and
          orders them in the most efficient way (by considering waypoint
          priorities, distance to each other, and real-time traffic data).
          Waypoints are added through your contact address book, searching via
          Google Maps, or using previous waypoints.
        </Copy>
        <CardContainer>
          <Column>
            <Card>
              <CardTitle>Features</CardTitle>
              <CardContent>
                <Copy>
                  <span role="img" aria-label="Check mark" />
                  {"✓ "}
                  Cloud-based route optimizer with real-time traffic
                  consideration.
                </Copy>
                <Copy>
                  <span role="img" aria-label="Check mark" />
                  {"✓ "}
                  Waypoint searching via Google Maps for the most up-to-date
                  information.
                </Copy>
                <Copy>
                  <span role="img" aria-label="Check mark" />
                  {"✓ "}
                  Driving direction paths and time estimates for realistic
                  distances and timelines.
                </Copy>
                <Copy>
                  <span role="img" aria-label="Check mark" />
                  {"✓ "}
                  Easiy start driving directions to any waypoint.
                </Copy>
              </CardContent>
              <CardImage
                src="https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FMap.jpg?alt=media&token=483bdfad-56a8-4b52-ae62-b17db7b0cdc4"
                alt="Screenshot of app displaying route's waypoints with real-time traffic dependent driving directions."
              />
            </Card>
          </Column>
          <Column>
            <Card>
              <CardTitle>Track</CardTitle>
              <CardContent>
                <Copy>
                  <span role="img" aria-label="Check mark" />
                  {"✓ "}
                  Travel Time
                </Copy>
                <Copy>
                  <span role="img" aria-label="Check mark" />
                  {"✓ "}
                  Miles driven
                </Copy>
                <Copy>
                  <span role="img" aria-label="Check mark" />
                  {"✓ "}
                  Jobs completed
                </Copy>
                <Copy>
                  <span role="img" aria-label="Check mark" />
                  {"✓ "}
                  Metrics available for each waypoint and aggregated by route.
                </Copy>
              </CardContent>
              <CardImage
                src="https://firebasestorage.googleapis.com/v0/b/avenue-6986d.appspot.com/o/Screenshots%2FDistance.jpg?alt=media&token=c3269bc0-b00c-4015-b414-3409af1a944f"
                alt="Screenshot of app displaying route's aggregate distance and time"
              />
            </Card>
          </Column>
        </CardContainer>
        {/* <Title>About Us</Title> */}
      </Container>
    );
  }
}
