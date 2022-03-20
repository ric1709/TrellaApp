import React from 'react'
import styled from 'styled-components'

const StyledHelper = styled.div`
	padding-top: 16px;
	border-top: 1px solid rgb(213, 216, 222);
	text-align: center;
	ul {
		display: flex;
		list-style: none;
		padding: 0px;
	}
    p{
        margin: 0px 8px;
    }
`

function UserHelper(props) {
	return (
		<StyledHelper>
			<ul>
				<li><a href=""><span>Не удается войти в систему?</span></a></li>
				<p>•</p>
				<li><a href=""><span>Регистрация аккаунта</span></a></li>
			</ul>
		</StyledHelper>
	)
}

export default UserHelper
