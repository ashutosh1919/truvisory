import React, { Component } from "react";
import Header from "./Header";
import Landing from "./Landing";
import GenresList from "./GenresList";
import Footer from "./Footer";
import styled from "styled-components";
// import { HashRouter, Switch, Route } from "react-router-dom";

export const MainDiv = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default class Home extends Component {
  render() {
    return (
      <MainDiv>
        <Header theme={this.props.theme} onToggle={this.props.onToggle} />
        <Landing theme={this.props.theme} />
        <GenresList theme={this.props.theme} onToggle={this.props.onToggle} />
        <Footer theme={this.props.theme} />
      </MainDiv>
    );
  }
}
