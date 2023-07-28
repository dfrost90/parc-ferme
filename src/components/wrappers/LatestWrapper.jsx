import { styled } from 'styled-components';

const LatestWrapper = styled.div`
  background-color: var(--palette-9);
  color: var(--palette-1);
  padding: 0;

  @media (min-width: 992px) {
    padding: 20px 20px 0;
  }

  .header-wrapper {
    display: flex;
    flex-flow: row wrap;

    @media (min-width: 992px) {
      flex-flow: row nowrap;
      justify-content: space-between;
    }
  }

  .circuit {
    align-items: center;
    display: flex;
  }

  .info-label {
    color: var(--palette-3);
    font-weight: 700;
    font-size: 1.4rem;
  }

  .race-info {
    order: 1;
    max-width: 100%;

    @media (min-width: 992px) {
      max-width: calc(100% - 250px);
      order: 0;
    }
  }

  .circuit-name {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .date {
    font-size: 1.2rem;
    line-height: 1;
    padding: 0 4px;
    white-space: pre;
  }

  .race-results {
    margin: 8px auto 0;
  }

  .result {
    display: flex;
    font-weight: 700;
    padding: 8px 0;

    &:not(:first-child) {
      border-top: 1px dashed var(--palette-6);
    }
  }

  .driver {
    padding: 0 12px;
  }

  .position {
    color: var(--palette-3);
    font-weight: 700;
  }

  .time {
    color: var(--palette-3);
    margin-left: auto;
  }
`;

export default LatestWrapper;
