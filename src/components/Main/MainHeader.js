import React from 'react'
import styled from 'styled-components'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import lupa from '../../assets/lupa.svg'

const MainHeader = () => {
	return (
		<Container>
			<HeaderDiv>
				<div className='block_for_icon_and_ul'>
					<img src='https://img.icons8.com/color/48/000000/trello.png' />
					<h1>TRELLO</h1>
					<ul>
						<li>Рабочие пространства</li>
						<li>Недавние</li>
						<li>В избранном</li>
						<li>Шаблоны</li>
					</ul>
					<Button title={'Создать'}></Button>
				</div>

				<div>
					<div className='search'>
						<img src={lupa} alt='Lupa' />
						<Input placeholder='Search' type='search' />
					</div>
				</div>
			</HeaderDiv>
		</Container>
	)
}
const HeaderDiv = styled.div`
	height: 50px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #565958;
	.block_for_icon_and_ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		h1 {
			color: #ffffff;
		}
		ul {
			display: flex;
			padding: 35px;
			li {
				list-style: none;
				padding: 15px;
				color: #ffffff;
			}
		}
		img {
			width: 30px;
		}
		h1 {
			font-size: 25px;
		}
		button {
			width: 75px;
			height: 28px;
			background: #787a79;
			color: #ffffff;
			border-radius: 6px;
			border: none;
			position: relative;
			bottom: 12px;
			line-height: 30px;
			text-align: center;
			&:hover {
				opacity: 0.8;
			}
		}
	}
	.search {
		display: flex;
        text-align: center;
		background: #787a79;
		width: 250px;
		height: 34px;
		border-radius: 6px;
		padding: 2px;
		input {
			background: none;
			border: none;
			outline: none;
			padding: 5px 5px 10px;
			font-size: 16px;
			&::placeholder {
				color: #ffffff;
			}
		}
		img {
			width: 30px;
		}
	}
`
const Container = styled.div`
	width: 100%;
	margin: 0 auto;
`

export default MainHeader
