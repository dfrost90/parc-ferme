import { styled } from 'styled-components';

const DriverPageWrapper = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-wrap: wrap;

  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }

  .content {
    display: flex;
    flex: 0 1 100%;
    flex-flow: row wrap;
  }

  .block {
    flex: 1 1 100%;
    overflow: hidden;
    position: relative;

    &.aston_martin {
      background: linear-gradient(
        120deg,
        var(--palette-1) 41%,
        var(--palette-aston_martin-1)
      );
    }
    &.red_bull {
      background: linear-gradient(
        120deg,
        var(--palette-1) 41%,
        var(--palette-red_bull-2)
      );
    }
    &.mercedes {
      background: linear-gradient(
        120deg,
        var(--palette-1) 41%,
        var(--palette-mercedes-2)
      );
    }
    &.ferrari {
      background: linear-gradient(
        120deg,
        var(--palette-1) 41%,
        var(--palette-ferrari-2)
      );
    }
    &.mclaren {
      background: linear-gradient(
        120deg,
        var(--palette-1) 41%,
        var(--palette-mclaren-1)
      );
    }
    &.alpine {
      background: linear-gradient(
        120deg,
        var(--palette-1) 41%,
        var(--palette-alpine-2)
      );
    }
    &.williams {
      background: linear-gradient(
        120deg,
        var(--palette-1) 41%,
        var(--palette-williams-2)
      );
    }
    &.haas {
      background: linear-gradient(
        120deg,
        var(--palette-1) 41%,
        var(--palette-haas-2)
      );
    }
    &.alfa {
      background: linear-gradient(
        120deg,
        var(--palette-1) 41%,
        var(--palette-alfa-2)
      );
    }
    &.alphatauri {
      background: linear-gradient(
        120deg,
        var(--palette-1) 41%,
        var(--palette-alphatauri-2)
      );
    }
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
