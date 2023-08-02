import { styled } from 'styled-components';

const ConstructorWrapper = styled.div`
  bottom: 0;
  height: 120px;
  left: 0;
  padding: 20px;
  position: absolute;
  width: 120px;

  @media (min-width: 992px) {
    left: auto;
    right: 0;
    width: 240px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: left;

    @media (min-width: 992px) {
      object-position: right;
    }
  }
`;

export default ConstructorWrapper;
