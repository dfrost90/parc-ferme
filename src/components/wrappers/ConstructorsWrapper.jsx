import { styled } from 'styled-components';

const ConstructorsWrapper = styled.section`
  .team-list {
    counter-reset: team;
    padding: 0 20px;
  }
  .team {
    align-items: center;
    border-radius: var(--border-radius);
    display: flex;
    justify-content: space-between;
    margin: 12px 0;
    max-width: 100%;
    min-width: 180px;
    overflow: hidden;
    padding: 12px 80px 12px 20px;
    position: relative;
    transition: var(--transition);

    &:hover {
      background-position-x: 48px;
      padding-left: 64px;
    }

    &::before {
      counter-increment: team;
      content: counter(team);
      font-size: 3rem;
      font-family: 'Russo One';
      left: 0;
      position: absolute;
      text-align: center;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
    }

    &-mercedes {
      background-size: 100% 100%;
      background-image: linear-gradient(
        90deg,
        var(--palette-mercedes-2) 0%,
        transparent 100%
      );
      color: var(--palette-mercedes-1);

      &:hover {
        box-shadow: inset 0 0 0 2px var(--palette-mercedes-2);
      }

      &::before,
      .points,
      .image {
        color: var(--palette-mercedes-2);
      }
    }

    &-ferrari {
      background-image: linear-gradient(
        90deg,
        var(--palette-ferrari-2) 0%,
        transparent 100%
      );
      color: var(--palette-ferrari-1);

      &:hover {
        box-shadow: inset 0 0 0 2px var(--palette-ferrari-2);
      }

      &::before,
      .points,
      .image {
        color: var(--palette-ferrari-2);
      }
    }
    &-red_bull {
      background-image: linear-gradient(
        90deg,
        var(--palette-red_bull-2) 0%,
        transparent 100%
      );
      color: var(--palette-red_bull-1);

      &:hover {
        box-shadow: inset 0 0 0 2px var(--palette-red_bull-2);
      }

      &::before,
      .points,
      .image {
        color: var(--palette-red_bull-2);
      }
    }
    &-aston_martin {
      background-image: linear-gradient(
        90deg,
        var(--palette-aston_martin-2) 0%,
        transparent 100%
      );
      color: var(--palette-aston_martin-1);

      &:hover {
        box-shadow: inset 0 0 0 2px var(--palette-aston_martin-2);
      }

      &::before,
      .points,
      .image {
        color: var(--palette-aston_martin-2);
      }
    }
    &-mclaren {
      background-image: linear-gradient(
        90deg,
        var(--palette-mclaren-2) 0%,
        transparent 100%
      );
      color: var(--palette-mclaren-1);

      &:hover {
        box-shadow: inset 0 0 0 2px var(--palette-mclaren-2);
      }
      &::before,
      .points,
      .image {
        color: var(--palette-mclaren-2);
      }
    }
    &-alpine {
      background-image: linear-gradient(
        90deg,
        var(--palette-alpine-2) 0%,
        transparent 100%
      );

      color: var(--palette-alpine-1);
      &:hover {
        box-shadow: inset 0 0 0 2px var(--palette-alpine-2);
      }
      &::before,
      .points,
      .image {
        color: var(--palette-alpine-2);
      }
    }
    &-williams {
      background-image: linear-gradient(
        90deg,
        var(--palette-williams-2) 0%,
        transparent 100%
      );
      color: var(--palette-williams-1);

      &:hover {
        box-shadow: inset 0 0 0 2px var(--palette-williams-2);
      }

      &::before,
      .points,
      .image {
        color: var(--palette-williams-2);
      }
    }
    &-haas {
      background-image: linear-gradient(
        90deg,
        var(--palette-haas-2) 0%,
        transparent 100%
      );

      color: var(--palette-haas-1);
      &:hover {
        box-shadow: inset 0 0 0 2px var(--palette-haas-2);
      }
      &::before,
      .points,
      .image {
        color: var(--palette-haas-2);
      }
    }
    &-alfa {
      background-image: linear-gradient(
        90deg,
        var(--palette-alfa-2) 0%,
        transparent 100%
      );

      color: var(--palette-alfa-1);
      &:hover {
        box-shadow: inset 0 0 0 2px var(--palette-alfa-2);
      }
      &::before,
      .points,
      .image {
        color: var(--palette-alfa-2);
      }
    }
    &-alphatauri {
      background-image: linear-gradient(
        90deg,
        var(--palette-alphatauri-2) 0%,
        transparent 100%
      );
      color: var(--palette-alphatauri-1);

      &:hover {
        box-shadow: inset 0 0 0 2px var(--palette-alphatauri-2);
      }

      &::before,
      .points,
      .image {
        color: var(--palette-alphatauri-2);
      }
    }

    .name {
      margin: 0;
      max-width: 140px;
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      z-index: 1;
    }

    .points {
      margin-left: auto;
      position: relative;
      z-index: 1;
    }

    .image {
      font-size: 5rem;
      position: absolute;
      top: 0;
      right: 20px;
      z-index: 1;
    }
  }
`;

export default ConstructorsWrapper;
