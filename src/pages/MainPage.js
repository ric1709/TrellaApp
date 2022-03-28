import React from 'react'
import { Outlet } from 'react-router-dom'
import  { createGlobalStyle } from 'styled-components'
import Cards from '../components/Main/Cards'




const StyledMainPage = createGlobalStyle`
    body{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background-image: url('https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
        background-repeat: no-repeat;
    }
    
`

function MainPage() {
	return (
		<>
			<StyledMainPage />
            <Outlet/>
            <Cards/>
            
		</>
	)
}

export default MainPage;
