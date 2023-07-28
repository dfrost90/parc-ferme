import { styled } from 'styled-components';

const ShowMoreWrapper = styled.div`
  background-image: linear-gradient(transparent, var(--palette-1) 41%);
  bottom: 0;
  left: 0;
  padding: 28px 20px 20px;
  position: absolute;
  text-align: center;
  width: 100%;

  .show-ten + & {
    background: 0;
    margin: 8px 0 0;
    padding: 0;
    position: static;

    @media (min-width: 992px) {
      margin: 12px 0 0;
    }
  }
`;

export default ShowMoreWrapper;
