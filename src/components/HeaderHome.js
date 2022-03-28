import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import TrelloLogo from '../ui/TrelloLogo'

const HeaderHome = () => {
	const navigate=useNavigate()
	const onLogin=()=>{
		navigate('/Login',{replace:true})
	}
	return (
		<HeaderStyled>
			<div>
				<TrelloLogo/>
			</div>
			<div>
				<button onClick={onLogin}>Log In</button>
			</div>
		</HeaderStyled>
	)
}

const HeaderStyled = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #ece8ff;
	button {
		background-color: #0065ff;
		position: relative;
		right: 55px;
		padding: 0.6rem 3rem;
		border-style: none;
		border-radius: 3px;
		font-size: 24px;
		font-weight: 300;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
		}
	}
`

export default HeaderHome
