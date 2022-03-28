import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../ui/Button'
import ModalCard from '../../ui/ModalCard'
import Caption from './Caption'
import CardList from './CardList'

function Card(props) {
	const [onClick, setOnClick] = useState(false)
	const [changeCaption,setChangeCaption]=useState(false)
	const onClickHanlder = () => {
		setOnClick(true)
	}
	return (
		<StyledCards key={props.id}>
			{changeCaption && <ModalCard  cancel={setChangeCaption} />}
			<div>
				<textarea
					className='text1'
					cols='20'
					rows='1'
					defaultValue={props.title}
				></textarea>
				<button className='btn-icon'>
					<img
						className='icon'
						src='https://img.icons8.com/material-outlined/344/more.png'
						alt=''
					/>
				</button>
			</div>
			<Caption change={setChangeCaption} tasks={props.tasks}/>
			{onClick && <CardList click={setOnClick} id={props.id} />}
			{!onClick && (
				<div className='div'>
					<Button
						onClick={onClickHanlder}
						className='button'
						title={'+ Добавить карточку'}
					></Button>
					<button className='btn-icon'>
						<img
							className='icon'
							src='https://img.icons8.com/ios/344/details-pane.png'
							alt=''
						/>
					</button>
				</div>
			)}
		</StyledCards>
	)
}

const StyledCards = styled.div`
	width: 250px;
	box-sizing: border-box;
	height: 100%;
	flex-direction: column;
	background-color: white;
	box-shadow: 1px grey;
	border-radius: 3px;
	display: flex;
	padding: 5px;
	margin: 0 15px;

	.icon {
		width: 20px;
		height: 20px;
		align-items: center;
	}
	.text1 {
		width: 200px;
		height: 23px;
		font-size: larger;
		border-style: none;
		border-radius: 3px;
		box-sizing: border-box;
		resize: none;
		font-size: 16px;
		align-items: center;
	}
	.btn-icon {
		width: 25px;
		height: 23px;
		align-items: center;
		/* padding: 6px 0 0px 0; */
		border-style: none;
		background: white;
		margin-left: 10px;
		margin-top: 6px;
		cursor: pointer;
	}
	.button {
		background-color: white;
		width: 200px;
		height: 30px;
		font-style: italic;
		color: #172b4d;
		cursor: pointer;
		align-items: center;
		padding: 0;
		margin: 0;
		:hover {
			background: #172b4d;
			opacity: 0.9;
			color: white;
		}
		.div {
			display: flex;
			align-items: center;
		}
	}
`
export default Card
