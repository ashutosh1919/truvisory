import React, { Component } from "react";
import Home from "./Home";
import Posts from "./Posts";
import styled from "styled-components";
import { HashRouter, Route, Redirect } from "react-router-dom";

export const MainDiv = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default class Main extends Component {
  render() {
    return (
      <div>
        {/* <Home
					theme={this.props.theme}
					onToggle={this.props.onToggle}
									/> */}
        <HashRouter basename="/">
          {/* <Switch> */}
          <Route
            exact
            path="/"
            render={() => (
              <Home theme={this.props.theme} onToggle={this.props.onToggle} />
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
