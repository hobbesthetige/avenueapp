import React from "react";
import styled from "styled-components";

const Container = styled.div`
 padding: 0;
 margin-top: -1.4rem;
`;

const HeaderBackground = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: 12rem;
  padding: 0rem 1rem 1rem 1rem;
  color: white;
`;

const HList = styled.ul`
list-style-type: none;
  margin: 0;
  padding: 0;
  white-space:nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
`

const ListItem = styled.li`
display: inline;
padding: 0.3rem;
`
const Image = styled.img`
  height: 20rem;
  border-radius: 0.7rem;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.33); 
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.33);
`;

export class ImageCarousel extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { urls: props.urls }
  }

  ImageList(urls) {
    const listItems = urls.map((url) =>
      <ListItem>
            <Image src={url} />
      </ListItem>
    );
    return (
      <HList>{listItems}</HList>
    );
  }

  render() {
    const urls = this.state.urls;
     
    return (
      <Container>
        {this.ImageList(urls)}
      </Container>
    );
  }
}