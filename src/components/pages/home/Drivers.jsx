import axios from 'axios';
import { CURRENT_DRIVERS_STND_URL } from '../../../utils/constants';
import { useEffect, useState } from 'react';
import { DriversWrapper as Wrapper } from '../../wrappers';
import Loading from './../../common/Loading';
import ShowMore from './../../common/ShowMore';
import DriverRow from './DriverRow';
import { useDriversContext } from '../../../context/drivers_context';

const Drivers = () => {
  const { drivers, loadingDrivers: loading } = useDriversContext();
  const [showTopTen, setShowTopTen] = useState(false);

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
