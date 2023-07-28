import { styled } from 'styled-components';

const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  font-family: 'Comfortaa', sans-serif;
  justify-content: center;
  padding: 10px 0;
  text-transform: lowercase;
  user-select: none;
  width: 100%;

  @media (min-width: 992px) {
    font-size: 3.6rem;
    padding: 0;
    justify-content: flex-end;
    width: auto;
  }

  svg {
    animation: spinner 20s infinite linear;
  }
`;

export default LogoWrapper;
