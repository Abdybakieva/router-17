
import styled from 'styled-components'

function Button({ children, bgColor, butWidth,onClick }) {
  return (
    <StyledButton bgColor={bgColor} butWidth={butWidth} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.butWidth};
  text-align: center;
  color: black;
  height: 35px;
  border: none;
  border-radius: 20px;
`;