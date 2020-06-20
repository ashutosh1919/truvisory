import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../theme";

export const FooterText = styled.h3`
  font-family: "Google Sans Regular";
  width: 60%;
  margin: 0 auto;
  padding: 0;
  letter-spacing: 1.5px;
  line-height: 1.3;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  @media ${device.tablet} {
    width: 90%;
  }
`;

export default class Footer extends Component {
  render() {
    return <FooterText>Made with ❤️ By Ashutosh Hathidara</FooterText>;
  }
}
