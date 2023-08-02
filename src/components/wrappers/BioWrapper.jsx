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

    span {
      display: inline-block;
      vertical-align: middle;
    }
  }

  .bio-row-title {
    font-family: 'Montserrat', sans-serif;
    text-transform: capitalize;
  }

  .bio-row-flag {
    display: inline-block;
    margin-right: 4px;
    vertical-align: middle;
    width: 16px;
  }
`;

export default BioWrapper;
