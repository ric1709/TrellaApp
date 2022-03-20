import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Cards from './Cards'
import MainHeader from './MainHeader'

const StyledMainPage = createGlobalStyle`
    body{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background-image: url('https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
        background-repeat: no-repeat;
    }
    
`

function MainPage(props) {
	return (
		<>
			<StyledMainPage />
			<MainHeader />
            <Cards/>
		</>
	)
}

export default MainPage
