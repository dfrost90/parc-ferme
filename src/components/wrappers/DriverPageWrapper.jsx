import { styled } from 'styled-components';

const DriverPageWrapper = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }

  .block {
    flex: 0 1 100%;
    margin: 0;
    overflow: hidden;
    position: relative;
  }

  .page-aside {
    position: relative;
  }

  .page-back {
    color: var(--palette-5);
    display: block;
    padding: 12px 0;
    text-align: center;

    &:hover {
      color: var(--palette-1);
    }

    @media (min-width: 992px) {
      font-size: 4rem;
      padding: 12px 20px;
    }

    svg {
      vertical-align: middle;
    }
  }

  .page-back-text {
    font-family: 'Montserrat', sans-serif;
    vertical-align: middle;

    @media (min-width: 992px) {
      transform: rotate(-180deg);
      writing-mode: tb-rl;
    }
  }
`;

export default DriverPageWrapper;
