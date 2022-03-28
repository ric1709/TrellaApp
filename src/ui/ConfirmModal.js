import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { cardActions } from '../store/addCard'

function ConfirmModal(props) {
	const dispatch = useDispatch()
	return (
		<>
			{ReactDOM.createPortal(
				<StyledBackdrop />,
				document.getElementById('backdrop1'),
			)}
			,
			{ReactDOM.createPortal(
				<StyledModal>
					<Header>
						<h1>Leave Site?</h1>
					</Header>
					<Main>
						<h2>
							Changes that you made may not be saved,because I do
							not have backend!!!
						</h2>
						<ButtonBlock>
							<button onClick={props.cancel}>Cancel</button>
							<button
								onClick={() => {
									dispatch(cardActions.clear())
									props.confirm()
								}}
							>
								Confirm
							</button>
						</ButtonBlock>
					</Main>
				</StyledModal>,
				document.getElementById('modal1'),
			)}
		</>
	)
}
const Main = styled.main`
	padding: 10px;
	h2 {
		font-size: 16px;
	}
`
const StyledBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 10;
	background: rgba(0, 0, 0, 0.75);
	cursor: alias;
`
const StyledModal = styled.div`
	width: 600px;
	height: auto;
	padding: 5px 10px;
	box-sizing: border-box;
	background-color: white;
	border-radius: 5px;
	position: relative;
	margin: 0 auto;
	z-index: 20;
`
const Header = styled.header`
	width: 100%;
	border-radius: 4px;
	background-color: silver;
	display: flex;
	padding: 1px;
	h1 {
		margin-left: 10px;
	}
`
const ButtonBlock = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 10px 5px;
	button {
		padding: 10px 20px;
		max-width: fit-content;
		border-radius: 4px;
		border: none;
		background: silver;
		cursor: pointer;
		&:hover {
			opacity: 0.8;
			background: blue;
			color: papayawhip;
		}
		&:active {
			border-color: blue;
		}
	}
`
export default ConfirmModal
