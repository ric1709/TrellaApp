import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import OtherOptions from './OtherOptions'
import Background from './Background'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	margin: 0px auto;
	width: 300px;
	padding: 25px;
	h3 {
		color: red;
	}
	input {
		margin-top: 10px;
	}
	button {
		height: 40px !important;
		line-height: 40px !important;
	}
`

function LoginForm() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { isInvalid, isAuth } = useSelector((state) => state.auth)
	const [data, setData] = useState({
		email: '',
		password: '',
	})

	const onChangeEmailHandler = (e) => {
		setData((state) => {
			return {
				...state,
				email: e.target.value,
			}
		})
	}
	const onChangePasswordHandler = (e) => {
		setData((state) => {
			return {
				...state,
				password: e.target.value,
			}
		})
	}
	const ButtonNav = () => {
		if (isAuth === true) {
			navigate('/MainPage', { replace: true })
		}
	}
	const onSubmitHandler = (e) => {
		e.preventDefault()
		if (data.email.trim().length > 0 && data.password.trim().length > 0) {
			dispatch(authActions.login(data))
		} else alert('U didnt fill blanks')
	}

	return (
		<StyledForm onSubmit={onSubmitHandler}>
			{isInvalid && <h3>Email or password is incorrect</h3>}
			<Input
				placeholder='Введите адрес электронной почты'
				onChange={onChangeEmailHandler}
				type='email'
			/>
			<Input
				placeholder='Введите password'
				onChange={onChangePasswordHandler}
				type='password'
			/>
			<Button title={'Continue'} type='submit' onClick={ButtonNav} />
			<OtherOptions />
			{ReactDOM.createPortal(
				<Background />,
				document.getElementById('background'),
			)}
		</StyledForm>
	)
}

export default LoginForm
