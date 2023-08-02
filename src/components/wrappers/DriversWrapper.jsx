import { styled } from 'styled-components';

const DriversWrapper = styled.section`
  overflow: hidden;
  position: relative;

  .drivers-list {
    max-height: calc(88px * 5);
    overflow: hidden;

    &.show-ten {
      overflow: visible;
      max-height: 100%;
    }
  }

  .driver {
    align-items: center;
    color: var(--palette-6);
    display: flex;
    padding: 12px 20px;
    transition: var(--transition);

    &:not(:first-child) {
      border-top: 1px dashed var(--palette-6);
    }
  }

  .driver:hover {
    background-color: #0000000e;

    .driver-image {
      border-radius: var(--border-radius);
    }

    .driver-icon {
      margin-right: 0;
      opacity: 1;
    }
  }

  .driver-image {
    background-color: #00000033;
    border-radius: 16px 16px 32px 16px;
    border: 2px solid var(--palette-4);
    height: 64px;
    width: 64px;
    overflow: hidden;
    transition: var(--transition);
  }

  img {
    max-width: 100%;
  }

  .driver-info {
    padding: 0 20px;
  }

  .driver-name {
    font-size: 1.4rem;
    margin: 0;

    @media (min-width: 992px) {
      font-size: 1.8rem;
    }
  }

  .driver-team {
    border-radius: calc(var(--border-radius) / 2);
    color: var(--palette-1);
    display: inline-block;
    font-weight: 700;
    margin-top: 4px;
    padding: 4px 8px;
    text-transform: lowercase;
  }

  .permanent-number {
    display: inline-block;
    font-family: 'Russo One', sans-serif;
    margin-right: 4px;
    vertical-align: middle;
  }

  .driver-points {
    margin-left: auto;
  }

  .driver-icon {
    font-size: 3rem;
    opacity: 0;
    padding: 12px;
    margin-right: -54px;
    transition: var(--transition);
  }

  .team-ferrari {
    background-color: var(--palette-ferrari-1);
  }
  .team-mercedes {
    background-color: var(--palette-mercedes-1);
  }
  .team-red_bull {
    background-color: var(--palette-red_bull-1);
  }
  .team-aston_martin {
    background-color: var(--palette-aston_martin-2);
  }
  .team-mclaren {
    background-color: var(--palette-mclaren-1);
  }
  .team-alpine {
    background-color: var(--palette-alpine-1);
  }
  .team-williams {
    background-color: var(--palette-williams-1);
  }
  .team-haas {
    background-color: var(--palette-haas-1);
  }
  .team-alfa {
    background-color: var(--palette-alfa-2);
  }
  .team-alphatauri {
    background-color: var(--palette-alphatauri-1);
  }
`;

export default DriversWrapper;
