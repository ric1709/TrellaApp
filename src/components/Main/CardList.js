import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { addTasks, cardActions, fetchTasks } from '../../store/addCard'

function CardList(props) {
	const dispatch = useDispatch()
	const [caption, setCaption] = useState('')
	const onCencelHandler = () => {
		props.click(false)
	}
	const onAddCaption = (e) => {
		setCaption(e.target.value)
	}
	const onAddCaptionHandler = () => {
		if (caption.trim().length > 0) {
			const data = {
				text: caption,
				id: Math.random().toString(),
			}
			dispatch(cardActions.onAdd({ data, id: props.id }))
		}
		setCaption('')
	}
	return (
		<StyledList>
			<textarea
				rows='20'
				className='text2'
				onChange={onAddCaption}
				value={caption}
				placeholder='Ввести заголовок для этой карточки'
				autoFocus='autofocus'
			></textarea>
			<div className='addCont'>
				<div className='btnCont'>
					<Button
						className='button2'
						onClick={onAddCaptionHandler}
						title={'Add Card'}
					></Button>
					<img
						onClick={onCencelHandler}
						className='icon'
						src='https://img.icons8.com/ios/344/cancel.png'
						alt=''
					/>
				</div>
				<img
					className='icon'
					src='https://img.icons8.com/material-outlined/344/more.png'
					alt=''
				/>
			</div>
		</StyledList>
	)
}

const StyledList = styled.div`
	width: 240px;
	height: 100%;
	.button2 {
		background-color: #172b4d;
		width: 150px;
		height: 30px;
		font-style: italic;
		color: red;
		cursor: pointer;
		align-items: center;
		padding: 0;
		margin: 0;
	}
	.btnCont {
		display: flex;
		width: 180px;
		justify-content: space-between;
	}
	.addCont {
		display: flex;
		justify-content: space-between;
	}
	.icon {
		margin-top: 5px;
		cursor: pointer;
		width: 20px;
		height: 20px;
	}
	.text2 {
		width: 100%;
		height: 60px;
		border-style: none;
		background: whitesmoke;
		max-height: 150px;
		max-width: 240px;
		min-width: 240px;
		min-height: 60px;
		font-size: larger;
		border-radius: 3px;
		box-sizing: border-box;
		font-size: 16px;
		align-items: center;
	}
`

export default CardList
