import { styled } from 'styled-components';

const BioWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 20px;

  @media (min-width: 992px) {
    gap: 20px;
  }

  .image-wrapper {
    width: 80px;

    @media (min-width: 992px) {
      width: 220px;
    }

    img {
      max-width: 100%;
    }
  }

  .bio-row {
    margin-bottom: 12px;
  }

  .bio-row-title {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default BioWrapper;
