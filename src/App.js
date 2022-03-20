import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import LoginPage from './components/Login/LoginPage'
import MainPage from './components/Main/MainPage'

const StyledDiv = styled.div`
	height: 100%;
	display: flex;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`

function App() {
	return (
		<StyledDiv>
			<BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/MainPage' element={<MainPage />}/>
            </Routes>
        </BrowserRouter>
		</StyledDiv>
	)
}

export default App
