import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
	text-align: center;
	padding: 40px 0px;
	color: rgb(255, 255, 255);
    margin: 14px auto;
	div {
		display: inline-block;
		height: 40px;
		position: relative;
		user-select: none;
	}
	img {
		height: 100%;
		width: 100%;
	}
`

function Header(props) {
	return (
		<StyledHeader>
			<div>
				<img
					src='https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.318/static/media/trello-logo-blue.f7627b3a.svg'
					alt='Trello Logo'
				/>
			</div>
		</StyledHeader>
	)
}

export default Header
