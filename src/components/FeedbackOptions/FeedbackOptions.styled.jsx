import styled from '@emotion/styled';

const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: calc(0.5em + 8px) calc(0.9em + 8px);
  color: #373b44;
  background: conic-gradient(from 90deg at 3px 3px, #0000 90deg, #373b44 0) 8px
    8px / calc(100% - 3px - 2 * 8px) calc(100% - 3px - 2 * 8px);
  transition: 0.3s linear, color 0s, background-color 0s;
  outline: 3px solid #0000;
  font-size: 28px;
  font-family: inherit;
  text-shadow: inherit;

  border: none;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: conic-gradient(from 90deg at 3px 3px, #0000 90deg, #373b44 0) 0
      0 / calc(100% - 3px) calc(100% - 3px);
    outline-color: #373b44;
  }

  &:active {
    background: #373b44;
    color: #fff;
  }
`;

export { Button, ButtonList };
