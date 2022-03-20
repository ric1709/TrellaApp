import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
	margin-top: 24px;
	border-width: 0px;
	border-radius: 3px;
	box-sizing: border-box;
	display: inline-flex;
	font-size: 14px;
	font-style: normal;
	max-width: 100%;
	text-align: center;
	text-decoration: none;
	transition: background 0.1s ease-out 0s,
	box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
	white-space: nowrap;
	background: var(--ds-background-boldBrand-resting, #0052cc);
	cursor: pointer;
	padding: 0px 10px;
	width: 100%;
	justify-content: center;
	color: white;
	
`

function Button(props) {
	return <ButtonStyled {...props}>{props.title}</ButtonStyled>
}

export default Button
