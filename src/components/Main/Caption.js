import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


function Caption(props) {
	const navigate=useNavigate()
	const onChange=(id,title)=>{
		props.change(prev=>!prev)
		// navigate(`tasks/${id}/${title}` )
	}
	return (
		<StyledCaption>
			{props.tasks.map((el) => (
				<div key={el.id} onClick={() => onChange(el.id,el.text)}>
					<label>{el.text}</label>
				</div>
			))}
		</StyledCaption>
	)
}

const StyledCaption = styled.div`
	max-height: 300px;
	height: 100%;
	overflow: scroll;
	div {
		width: 230px;
		height: 30px;
		display: flex;
		align-items: center;
		background: purple;
		font-size: 16px;
		border-radius: 3px;
		color: white;
		margin: 5px;
	}
	label {
		padding: 15px;
	}
`

export default Caption
