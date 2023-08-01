import axios from 'axios';
import { CURRENT_DRIVERS_STND_URL } from '../../../utils/constants';
import { useEffect, useState } from 'react';
import { DriversWrapper as Wrapper } from '../../wrappers';
import Loading from './../../common/Loading';
import ShowMore from './../../common/ShowMore';
import DriverRow from './DriverRow';

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
      setLoading(false);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    fetchDrivers(`${CURRENT_DRIVERS_STND_URL}`);
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
              return <DriverRow key={driver.Driver.driverId} {...driver} />;
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
