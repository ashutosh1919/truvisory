import React, {Component} from 'react';
import styled from 'styled-components';
import {device} from '../theme';
import Logo from './Logo';
import ToggleSwitch from './ToggleSwitch';
import {Slide} from 'react-reveal';

export const HeaderDiv = styled.div`
					width: 100%;
					// margin: 20px;
					padding-left: 30px;
					padding-right: 30px;
					align-items: center;
					display: block;
					@media ${device.mobileL} {
						padding-left: 10px;
						margin: 10px;
						padding-right: 10px;
					}
					@media ${device.tablet} {
						padding-left: 20px;
						margin: 10px;
						padding-right: 20px;
					}
				`;

export default class Header extends Component{

    render(){
        return (
					<HeaderDiv>
							<Logo theme={this.props.theme} />
						<ToggleSwitch
							theme={this.props.theme}
							onToggle={this.props.onToggle}
						/>
					</HeaderDiv>
				);
    }
}