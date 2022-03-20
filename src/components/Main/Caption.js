import React from 'react'
import styled from 'styled-components'


function Caption(props) {
	const onChange=()=>{
		props.change(prev=>!prev)
	}
	return (
		<StyledCaption>
			{props.tasks.map((el) => (
				<div key={el.id} onClick={onChange}>
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
