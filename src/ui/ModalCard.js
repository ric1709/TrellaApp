import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

function ModalCard(props) {
	const onCancel=()=>{
		props.cancel(prev=>!prev)
	}

	return (
		<>
			{ReactDOM.createPortal(
				<StyledModal>
					<Header>
					<h1>Title</h1>
					</Header>
					<Main>
						<h3>Caption</h3>
						<textarea
							cols='30'
							rows='10'
							placeholder='Add more details...'
						></textarea>
						<ButtonBlock>
							<button onClick={onCancel}>Cancel</button>
							<button onClick={onCancel}>Save</button>
						</ButtonBlock>
					</Main>
				</StyledModal>,
				document.getElementById('modal'),
			)}
			{ReactDOM.createPortal(
				<StyledBackdrop onClick={onCancel}/>,
				document.getElementById('backdrop'),
			)}
		</>
	)
}

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
const Main = styled.main`
	padding: 10px;
	textarea {
		width: 520px;
		height: 150px;
		padding: 12px 20px;
		border: 2px solid silver;
		border-radius: 4px;
		font-size: 16px;
		resize: none;
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

export default ModalCard
