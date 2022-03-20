import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { cardActions } from '../../store/addCard'
import Card from './Card'

function Cards() {
	const [clicked, setClicked] = useState(false)
	const [added, setAdded] = useState(false)
	const dispatch = useDispatch()
	const [data, setData] = useState('')
	const column = useSelector((state) => state.addCard)

	const onClickHandler = () => {
		setClicked(true)
	}
	const onCencelHandler = () => {
		setClicked(false)
	}
	const onAddColumn = (e) => {
		setData(e.target.value)
	}
	
	const onAddColumnHandler = () => {
		if (data.trim().length > 0) {
			const columnData = {
				title: data,
				columnId: Math.random().toString(),
				tasks: [],
			}
			dispatch(cardActions.onAddColumn(columnData))
		}
		setAdded(true)
		setData('')
		setClicked(false)
	}
	return (
		<CardAdder>
			{added &&
				column.map((el) => (
					<Card
						key={Math.random().toString()}
						title={el.title}
						tasks={el.tasks}
						id={el.columnId}
					/>
				))}
			{!clicked && (
				<button className='btn' onClick={onClickHandler}>
					+ Add another column
				</button>
			)}
			{clicked && (
				<StyledInput>
					<input
						type='text'
						autoFocus='autofocus'
						placeholder='Ввести заголовок списка'
						onChange={onAddColumn}
						value={data}
					/>

					<div className='add_cencel'>
						<button onClick={onAddColumnHandler} className='btnAdd'>
							Add Column
						</button>
						<img
							className='icon'
							src='https://img.icons8.com/ios/344/cancel.png'
							alt=''
							onClick={onCencelHandler}
						/>
					</div>
				</StyledInput>
			)}
		</CardAdder>
	)
}

const CardAdder = styled.div`
	.btn {
		width: 180px;
		height: 40px;
		margin: 15px;
		background: grey;
		border-style: none;
		border-radius: 5px;
		opacity: 0.9;
		font-size: 16px;
		color: white;
		cursor: pointer;
	}
	display: flex;
	position: relative;
	top: 55px;
	left: 55px;
`
const StyledInput = styled.div`
	width: 250px;
	height: 80px;
	background: white;
	opacity: 0.9;
	margin: 0 15px;
	border-radius: 5px;
	input {
		width: 230px;
		height: 30px;
		margin: 5px;
		font-size: 16px;
		border-radius: 3px;
		border-style: none;
	}
	.btnAdd {
		width: 130px;
		height: 30px;
		background: #0079bf;
		border-style: none;
		border-radius: 3px;
		font-size: 16px;
		opacity: 0.8;
		margin-left: 5px;
		cursor: pointer;
	}
	.icon {
		cursor: pointer;
		width: 30px;
		height: 30px;
	}
	.add_cencel {
		display: flex;
		justify-content: space-between;
		width: 170px;
	}
`

export default Cards
