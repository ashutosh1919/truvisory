import React, {Component} from 'react';
import Header from './Header';
import Landing from './Landing';
import GenresList from './GenresList';
import Footer from './Footer';
import Home from './Home';
import Posts from './Posts';
import styled from 'styled-components';
import {HashRouter, Switch, Route, Redirect, Router, BrowserRouter} from 'react-router-dom';
import history from './../history';

export const MainDiv = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export default class Main extends Component {
    render(){
        const props = this.props;
        return (
					<div>
						{/* <Home
					theme={this.props.theme}
					onToggle={this.props.onToggle}
									/> */}
						<HashRouter basename='/'>
							{/* <Switch> */}
							<Route
								exact
								path="/"
								exact
								render={() => (
									<Home
										theme={this.props.theme}
										onToggle={this.props.onToggle}
									/>
								)}
							/>
							<Route
								path="/tech"
								render={() => (
									<Posts
										theme={this.props.theme}
										onToggle={this.props.onToggle}
										from="tech"
									/>
								)}
							/>
							<Route
								path="/design"
								render={() => (
									<Posts
										theme={this.props.theme}
										onToggle={this.props.onToggle}
										from="design"
									/>
								)}
							/>
							<Route
								path="/motivation"
								render={() => (
									<Posts
										theme={this.props.theme}
										onToggle={this.props.onToggle}
										from="motivation"
									/>
								)}
							/>
							<Route
								path="/selfbranding"
								render={() => (
									<Posts
										theme={this.props.theme}
										onToggle={this.props.onToggle}
										from="selfbranding"
									/>
								)}
							/>
							<Redirect to="/" />
							{/* </Switch> */}
						</HashRouter>
					</div>
				);
    }
} 