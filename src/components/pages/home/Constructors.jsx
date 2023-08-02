import { GiRaceCar } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { CURRENT_CONSTRUCTORS_STND_URL } from '../../../utils/constants';
import { PointsWrapper, ConstructorsWrapper as Wrapper } from '../../wrappers';
import { fetchData } from './../../../utils/helpers';
import Loading from './../../common/Loading';

const Constructors = () => {
  const [loading, setLoading] = useState(true);
  const [constructors, setConstructors] = useState([]);
  const [maxPoints, setMaxPoints] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetchData(`${CURRENT_CONSTRUCTORS_STND_URL}?limit=5`);
      setConstructors(
        data.StandingsTable.StandingsLists[0].ConstructorStandings
      );
      setMaxPoints(
        data.StandingsTable.StandingsLists[0].ConstructorStandings[0].points
      );
      setLoading(false);
    })();
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
