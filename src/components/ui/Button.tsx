import styled from "styled-components/macro";

export const Button = styled.button<{ primary?: boolean, disabled?: boolean }>`
color: #fff;
padding: 6px 16px;
max-width: 190px;
cursor: pointer;
margin: 6px 3px;
font-weight: bold;
border: none;
width: 100%;
text-transform: uppercase;
&:disabled {
    opacity: 0.4;
  }
pointer-events: ${props => props.disabled ? "none" : "auto"};
background-color:${props => props.primary ? '#1976d2' : '#4caf50'};
transition: .3s;
&:hover{
    background-color:${props => props.primary ? '#04519e' : '#1b791f'};
}
`;