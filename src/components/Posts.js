import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import TechList from "./TechList";
import SelfBrandingList from "./SelfBrandingList";
import MotivationList from "./MotivationList";
import DesignList from "./DesignList";

export const MainDiv = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

function GetProperComp(props) {
  if (props.from === "tech") return <TechList />;
  else if (props.from === "design") return <DesignList />;
  else if (props.from === "motivation") return <MotivationList />;
  else if (props.from === "selfbranding") return <SelfBrandingList />;
  return <div></div>;
}

export default class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <MainDiv>
        <Header theme={this.props.theme} onToggle={this.props.onToggle} />
        <GetProperComp from={this.props.from} />
        <Footer theme={this.props.theme} />
      </MainDiv>
    );
  }
}
