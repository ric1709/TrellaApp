import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	margin-bottom: 16px;
	border-width: 0px;
	display: inline-flex;
	font-size: inherit;
	padding: 0px 10px;
	width: 100%;
	font-weight: bold;
	color: var(--ds-text-highEmphasis, #42526e);
	line-height: 40px !important;
	background: rgb(255, 255, 255) !important;
	box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0px !important;
	img {
		height: 18px;
		width: 18px;
	}
    .title{
        justify-content: center;
        flex-grow: 1;
    }
`

function OptionButtons(props) {
	return (
		<StyledButton>
			<span>
				<img src={props.url} alt={props.alt} />
			</span>
            <span className='title'>
                <span>{props.title}</span>
            </span>
		</StyledButton>
	)
}

export default OptionButtons
