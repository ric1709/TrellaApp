import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import LoadingSpinner from './components/LoadingSpinner'
import Layout from './components/Main/Layout'
import HomePage from './pages/HomePage'

const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const MainPage = React.lazy(() => import('./pages/MainPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))


function App() {
	return (
		<StyledDiv>
			<Suspense fallback={<LoadingSpinner/>} >
				<Routes>
					<Route path='/' element={<Navigate to={'/Home'} />} />
					<Route path='/Home' element={<HomePage />} />
					<Route path='/Login' element={<LoginPage />} />
					<Route path='/MainPage' element={<Layout />}>
						<Route path='/MainPage' element={<MainPage />} />
					</Route>
					<Route path='/*' element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</StyledDiv>
	)
}

const StyledDiv = styled.div`
	height: 100%;
	display: flex;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
`

export default App
