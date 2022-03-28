import React from 'react'
import styled from 'styled-components'
import Header from '../components/Login/Header'
import LoginForm from '../components/Login/LoginForm'
import UserHelper from '../components/Login/UserHelper'

const StyledSection = styled.section`
	display: flex;
    width: 420px;
	flex-direction: column;
	margin: 0px auto 32px ;
	padding: 32px 40px;
	background: rgb(255, 255, 255);
	border-radius: 3px;
	box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;
	box-sizing: border-box;
	color: rgb(94, 108, 132);
	.main_div {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		color: rgb(94, 108, 132);
		font-size: 16px;
		.title {
			color: rgb(94, 108, 132);
			font-size: 16px;
			text-align: center;
		}
		.trello {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-weight: bold;
			line-height: 20px;
			height: 20px;
			margin-top: 8px;
			max-width: 100%;
		}
	}
`

function LoginPage() {
	return (
		<>
        <Header/>
        <StyledSection>
			<div className='main_div'>
				<div className='title'>Войдите, чтобы перейти далее:</div>
				<div className='trello'>Trello</div>
			</div>
            <LoginForm/>
            <UserHelper/>
		</StyledSection>
        </>
	)
}

export default LoginPage
