import React, {Component} from 'react';
import {Button} from 'reactstrap';
import styled from 'styled-components';
import {lightTheme, darkTheme} from '../theme';

export const StyledStarButton = styled(Button)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
	margin-top: 30px;
	border-radius: 5px;
    padding: 7px;
    border: none;
`;

export const ButtonText = styled.p`
					margin: 0 5px 0 5px;
                    padding: 0;
                    letter-spacing: 2px;
					font-size: 15px;
                    font-weight: bold;
                    font-family: "Gilroy Light";
				`;

export default class StarButton extends Component {

									render() {
										const theme =
											this.props.theme === "light" ? lightTheme : darkTheme;
										const opp =
											this.props.theme === "light" ? darkTheme : lightTheme;
										return (
												<a
													href="https://github.com/ashutosh1919/truvisory"
													target="_blank"
													style={{ textDecoration: "none" }}
												>
													<StyledStarButton style={{ background: theme.text }}>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															aria-hidden="true"
															focusable="false"
															width="30px"
															height="30px"
															style={{ margin: 0, padding: 0 }}
															preserveAspectRatio="xMidYMid meet"
															viewBox="0 0 50 50"
														>
															<path
																fill-rule="evenodd"
																clip-rule="evenodd"
																fill={opp.text}
																d="M25 10c-8.3 0-15 6.7-15 15c0 6.6 4.3 12.2 10.3 14.2c.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2c-.7-1.7-1.7-2.2-1.7-2.2c-1.4-.9.1-.9.1-.9c1.5.1 2.3 1.5 2.3 1.5c1.3 2.3 3.5 1.6 4.4 1.2c.1-1 .5-1.6 1-2c-3.3-.4-6.8-1.7-6.8-7.4c0-1.6.6-3 1.5-4c-.2-.4-.7-1.9.1-4c0 0 1.3-.4 4.1 1.5c1.2-.3 2.5-.5 3.8-.5c1.3 0 2.6.2 3.8.5c2.9-1.9 4.1-1.5 4.1-1.5c.8 2.1.3 3.6.1 4c1 1 1.5 2.4 1.5 4c0 5.8-3.5 7-6.8 7.4c.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7c6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"
															/>
														</svg>
														<ButtonText style={{ color: opp.text }}>
															<span style={{ color: "#fb6340" }}>STAR ME</span>{" "}
															ON GITHUB
														</ButtonText>
													</StyledStarButton>
												</a>
										);
									}
								}