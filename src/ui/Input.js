import React from 'react';
import styled from 'styled-components';

const StyledInput=styled.input`
   height: 2.7rem;
   background: transparent;
   border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));;
   border-radius: 2px;
   box-shadow: grey;
   box-sizing: border-box;
   font-size: 14px;

`

function Input(props) {
    return (
      <StyledInput {...props}/>
    );
}

export default Input;