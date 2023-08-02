import moment from 'moment/moment';
import { LAST_RESULTS_URL } from '../../utils/constants';
import { useEffect, useState } from 'react';
import { fetchData } from './../../utils/helpers';
import Logo from './Logo';
import { LatestWrapper as Wrapper } from '../wrappers';
import BounceLoader from 'react-spinners/BounceLoader';

const Latest = () => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await fetchData(`${LAST_RESULTS_URL}?limit=3`);

      setResult(data.RaceTable.Races[0]);
      setLoading(false);
    })();
  }, []);

  return (
    <Wrapper>
      <div className="header-wrapper">
        <div className="race-info">
          {loading ? (
            <BounceLoader color={'var(--palette-6)'} />
          ) : (
            <>
              <div className="info-label">latest result</div>
              <div className="circuit">
                <h2 className="circuit-name">
                  {result?.Circuit.circuitName.toUpperCase()}
                </h2>
                <div className="date">
                  {moment(result?.date).format(`D[\n]MMM YYYY`).toUpperCase()}
                </div>
              </div>
            </>
          )}
        </div>
        <Logo />
      </div>
      <ul className="race-results">
        {result?.Results.map((pos) => {
          return (
            <li key={pos.number} className="result">
              <div className="position">{pos.positionText}</div>
              <div className="driver">
                {pos.Driver.givenName} {pos.Driver.familyName.toUpperCase()}
              </div>
              {pos.Time && <div className="time">{pos.Time.time}</div>}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Latest;
