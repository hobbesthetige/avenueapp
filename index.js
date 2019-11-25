import React from "react";
import { render } from "react-dom";
import { AppWrapper, GlobalStyle, PageContainer, ContentWrap } from "./Styled";
import { AppHeader, AppBody, AppFooter } from "./Components/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <PageContainer>
          <ContentWrap>
            <AppHeader />
            <AppBody />
            <AppFooter />
          </ContentWrap>
        </PageContainer>
      </AppWrapper>
    );
  }
}

render(<App />, document.getElementById("root"));
