import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NotFoundPage() {
	return (
		<StyledMainDiv>
			<StyledDiv >
                <img src="https://cdn-icons-png.flaticon.com/512/6358/6358129.png" alt="" />
            </StyledDiv>
			<div className='text'>
				<span>Oops...</span>
				<br />
				page not found
                <br/>
                <Link to={'/MainPage'} replace={true}>Go back to MainPage</Link>
			</div>
            
		</StyledMainDiv>
	)
}
const StyledMainDiv = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-content: center;
	justify-content: center;
    margin-top: 70px;
    .text span{
        font-size: 50px;
    }
    .text{
        font-size: 40px;
    }
`
const StyledDiv = styled.div`
	width: 100%;
	text-align: center;
	
`

export default NotFoundPage
