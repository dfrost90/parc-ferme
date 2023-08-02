import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { fetchData } from '../utils/helpers';
import { CURRENT_DRIVERS_STND_URL, DRIVER_INFO_URL } from '../utils/constants';

const DriversContext = createContext();

export const DriversProvider = ({ children }) => {
  const [loadingDrivers, setLoadingDrivers] = useState(true);
  const [drivers, setDrivers] = useState([]);

  const driverProviderValue = useMemo(
    () => ({ loadingDrivers, drivers }),
    [loadingDrivers, drivers]
  );

  useEffect(() => {
    (async () => {
      const data = await fetchData(CURRENT_DRIVERS_STND_URL);

      setDrivers(data.StandingsTable.StandingsLists[0].DriverStandings);
      setLoadingDrivers(false);
    })();
  }, []);

  return (
    <DriversContext.Provider value={driverProviderValue}>
      {children}
    </DriversContext.Provider>
  );
};

export const useDriversContext = () => useContext(DriversContext);

DriversProvider.propTypes = {
  children: PropTypes.element,
};
