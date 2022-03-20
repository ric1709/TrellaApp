import React from 'react'
import styled from 'styled-components'
import leftimg from '../../assets/leftLarge.svg'
import rightimg from '../../assets/rightLarge.svg'

const StyeledBackground = styled.div`
	z-index: -900;
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	overflow: hidden;
	overflow-x: hidden;
	overflow-y: hidden;
`
const StyledImgOnTheLeft=styled.div`
    position: absolute;
    width: 400px;
    bottom: 0;
    left: 0;
    z-index: -999;
    max-width: 30%;
`
const StyledImgOnTheRight=styled.div`
    position: absolute;
    width: 400px;
    bottom: 0;
    right: 0;
    z-index: -999;
    max-width: 30%;
`

function Background(props) {
	return <StyeledBackground>
        <StyledImgOnTheLeft><img src={leftimg} alt="Icon" /></StyledImgOnTheLeft>
        <StyledImgOnTheRight><img src={rightimg} alt="Icon" /></StyledImgOnTheRight>
    </StyeledBackground>
    
}

export default Background
