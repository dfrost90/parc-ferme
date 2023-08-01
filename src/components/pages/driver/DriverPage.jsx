import { MdOutlineArrowBack } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { DriverPageWrapper as Wrapper } from '../../wrappers';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DRIVER_INFO } from '../../../utils/constants';
import Loading from '../../common/Loading';
import Bio from './Bio';

const DriverPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [driver, setDriver] = useState(null);

  const fetchInfo = async (url) => {
    try {
      const resp = await axios.get(url);
      const driverData = resp.data;

      setDriver(driverData.MRData.DriverTable.Drivers[0]);
      setLoading(false);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    fetchInfo(`${DRIVER_INFO}${id}.json`);
  }, [id]);

  return (
    <Wrapper>
      <aside className="page-aside">
        <Link type="button" className="page-back" to="/">
          <MdOutlineArrowBack />
          <span className="page-back-text">back to home</span>
        </Link>
      </aside>
      <section className="block">
        {loading ? (
          <>
            <h1 className="section-title">DriverPage</h1>
            <Loading />
          </>
        ) : (
          <>
            <h1 className="section-title">
              {driver.givenName} {driver.familyName.toUpperCase()}
            </h1>
            <Bio {...driver} />
          </>
        )}
      </section>
    </Wrapper>
  );
};

export default DriverPage;
