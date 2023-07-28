import { CURRENT_DRIVERS_STND_URL } from '../utils/constants';
import { useEffect, useState } from 'react';
import { PointsWrapper, DriversWrapper as Wrapper } from './wrappers';
import axios from 'axios';
import Loading from './Loading';
import ShowMore from './ShowMore';

const Drivers = () => {
  const [loading, setLoading] = useState(true);
  const [showTopTen, setShowTopTen] = useState(false);
  const [drivers, setDrivers] = useState([]);

  const fetchDrivers = async (url) => {
    try {
      const resp = await axios.get(url);
      setDrivers(
        resp.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      );
    } catch (error) {
      console.log('error: ', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDrivers(`${CURRENT_DRIVERS_STND_URL}?limit=10`);
  }, []);

  return (
    <Wrapper className="block">
      <div className="section-title">
        <span className="title-text">drivers standings</span>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ul
            className={`${
              showTopTen ? 'drivers-list show-ten' : 'drivers-list'
            }`}
          >
            {drivers.map((driver) => {
              return (
                <li key={driver.Driver.driverId} className="driver">
                  <div className="driver-image">
                    <img
                      src={`/src/assets/images/drivers/${driver.Driver.code}.jpg`}
                      alt={`${driver.Driver.givenName} ${driver.Driver.familyName}`}
                    />
                  </div>
                  <div className="driver-info">
                    <h5 className="driver-name">
                      {driver.Driver.givenName}{' '}
                      {driver.Driver.familyName.toUpperCase()}
                    </h5>
                    <div
                      className={`driver-team team-${driver.Constructors[0].constructorId}`}
                    >
                      <span className="permanent-number">
                        {driver.Driver.permanentNumber}
                      </span>
                      {driver.Constructors[0].name.toLowerCase()}
                    </div>
                  </div>
                  <PointsWrapper className="driver-points">
                    <span className="points-value">{driver.points}</span>
                    <span className="points-pts">pts</span>
                  </PointsWrapper>
                </li>
              );
            })}
          </ul>
          <ShowMore
            funcOnClick={() => setShowTopTen(!showTopTen)}
            showMoreVal={showTopTen}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Drivers;
