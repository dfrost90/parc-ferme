import { styled } from 'styled-components';

const LoadingWrapper = styled.div`
  font-size: 10rem;
  text-align: center;

  svg {
    animation: spinner 1s infinite linear;
  }
`;

export default LoadingWrapper;
