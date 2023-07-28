import { useEffect, useState } from 'react';
import { PointsWrapper, ConstructorsWrapper as Wrapper } from './wrappers';

import { GiRaceCar } from 'react-icons/gi';
import axios from 'axios';
import { CURRENT_CONSTRUCTORS_STND_URL } from '../utils/constants';
import Loading from './Loading';

const Constructors = () => {
  const [loading, setLoading] = useState(true);
  const [constructors, setConstructors] = useState([]);
  const [maxPoints, setMaxPoints] = useState(0);

  const fetchConstructors = async (url) => {
    try {
      const resp = await axios.get(url);
      const data =
        resp.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

      setConstructors(data);
      setMaxPoints(data[0].points);
    } catch (error) {
      console.log('error: ', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchConstructors(`${CURRENT_CONSTRUCTORS_STND_URL}?limit=5`);
  }, []);

  return (
    <Wrapper className="block">
      <div className="section-title">
        <span className="title-text">constructors standings</span>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <ul className="team-list">
          {constructors.map((constructor) => {
            const { Constructor, points } = constructor;
            return (
              <li
                key={Constructor.constructorId}
                className={`team team-${Constructor.constructorId}`}
                style={{
                  width: `calc(${(points * 100) / maxPoints}% + 120px)`,
                }}
              >
                <h5 className="name">{Constructor.name}</h5>
                <PointsWrapper className="points">
                  <span className="points-value">{points}</span>
                  <span className="points-pts">pts</span>
                </PointsWrapper>
                <div className="image">
                  <GiRaceCar />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
};

export default Constructors;
