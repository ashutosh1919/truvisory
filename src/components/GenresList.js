import React, {Component} from 'react';
import styled from 'styled-components';
import {Button} from 'reactstrap';
// import {data} from '../Content';
import {lightTheme, darkTheme, device} from '../theme';
import {Fade} from 'react-reveal';
import { Route, Redirect, Link, NavLink} from "react-router-dom";
import Posts from './Posts';
import history from "./../history";


export const GenreDiv = styled.div`
    width: 100%;
    margin-top: 80px;
    margin-bottom: 50px;
    z-index: 2;
    align-items: center;
    justify-content: center;
    @media ${device.tablet} {
        margin-top:50px;
    }
`;

export const ContDiv = styled.div`
					width: 50%;
                    background: transparent;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    @media ${device.tablet} {
                        width: 80%;
                        margin-top: 30px;
                    }
                `;
                
export const GenreItem = styled.div`
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`;

export const GenreButton = styled(Button)`
    width: 60%;
    margin: 10px;
    border-radius: 20px;
    font-size: 18px;
    font-family: "Gilroy Light";
    font-weight: bold;
    letter-spacing: 1.4px;
`;

function GenresList(props){

        const theme = props.theme==='light'?lightTheme: darkTheme;
        const opp = props.theme==='light'?darkTheme: lightTheme;
        return (
					<GenreDiv>
						<ContDiv>
							<GenreItem>
								<Fade bottom duration="3000" distance="20px">
									{/* <NavLink to="/tech"> */}
									<a href="/truvisory/#/tech" style={{ textDecoration: "none" }}>
									<GenreButton
										style={{
											background: opp.body,
											color: theme.body,
											borderRadius: `2px solid ${theme.text}`,
											":hover": {
												background: theme.body,
												color: theme.text,
											},
										}}
										// onClick={() => history.replace("/truvisory/#/tech")}
									>
										Technology
									</GenreButton>
									</a>
									{/* </NavLink> */}
								</Fade>
							</GenreItem>
							<GenreItem>
								<Fade bottom duration="3000" distance="20px">
									{/* <NavLink to="/design"> */}
									<a href="/truvisory/#/design" style={{ textDecoration: "none" }}>
									<GenreButton
										style={{
											background: opp.body,
											color: theme.body,
											borderRadius: `2px solid ${theme.text}`,
											":hover": {
												background: theme.body,
												color: theme.text,
											},
										}}
										// onClick={() => history.push("/design")}
									>
										Design
									</GenreButton>
									</a>
									{/* </NavLink> */}
								</Fade>
							</GenreItem>
							<GenreItem>
								<Fade bottom duration="3000" distance="20px">
									{/* <NavLink to="/motivation"> */}
									<a href="/truvisory/#/motivation" style={{ textDecoration: "none" }}>
									<GenreButton
										style={{
											background: opp.body,
											color: theme.body,
											borderRadius: `2px solid ${theme.text}`,
											":hover": {
												background: theme.body,
												color: theme.text,
											},
										}}
										// onClick={() => history.push("/motivation")}
									>
										Motivation
									</GenreButton>
									</a>
									{/* </NavLink> */}
								</Fade>
							</GenreItem>
							<GenreItem>
								<Fade bottom duration="3000" distance="20px">
									{/* <NavLink to="/selfbranding"> */}
									<a href="/truvisory/#/selfbranding" style={{ textDecoration: "none" }}>
									<GenreButton
										style={{
											background: opp.body,
											color: theme.body,
											borderRadius: `2px solid ${theme.text}`,
											":hover": {
												background: theme.body,
												color: theme.text,
											},
										}}
										// onClick={() => history.push("/selfbranding")}
									>
										Self Branding
									</GenreButton>
									</a>
									{/* </NavLink> */}
								</Fade>
							</GenreItem>
							{/* {data.data.map((genre) => {
								return (
									<GenreItem>
										<Fade bottom duration="3000" distance="20px">
											<Link
												to={{
													pathname: "/posts"
												}}
											>
												<GenreButton
													style={{
														background: opp.body,
														color: theme.body,
														borderRadius: `2px solid ${theme.text}`,
														":hover": {
															background: theme.body,
															color: theme.text,
														},
                                                    }}
												>
													{genre.title}
												</GenreButton>
											</Link>
										</Fade>
									</GenreItem>
								);
							})} */}
						</ContDiv>
					</GenreDiv>
				);
}

export default GenresList;