import React from "react";
import styled from "styled-components";
import Carousel, { Modal, ModalGateway } from "react-images";
import { images } from "../SupportingFiles/Images";

const Container = styled.div`
  padding: 0;
  margin-top: -1.4rem;
`;

const HList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0.3em;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
`;

const ListItem = styled.li`
  display: inline;
  padding: 0.3rem;
  cursor: pointer;
`;
const Image = styled.img`
  height: 20rem;
  border-radius: 0.7rem;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.33);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.33);
`;

export class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0, viewerIsOpen: false };
  }

  ImageList(props = []) {
    const urls = props.map(prop => prop.src);
    console.log(urls);
    const listItems = urls.map((url, index) => (
      <ListItem key={url + index} onClick={() => this.openImage(index)}>
        <Image src={url} />
      </ListItem>
    ));
    return <HList>{listItems}</HList>;
  }

  openImage = index => {
    this.setState({ currentImage: index, viewerIsOpen: true });
  };

  closeImage = () => {
    this.setState({ currentImage: 0, viewerIsOpen: false });
  };

  render() {
    return (
      <div>
        <Container>{this.ImageList(images)}</Container>
        <ModalGateway>
          {this.state.viewerIsOpen ? (
            <Modal onClose={this.closeImage}>
              <Carousel
                currentIndex={this.state.currentImage}
                views={images.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}
