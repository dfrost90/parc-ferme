import { MdOutlineArrowBack } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { DriverPageWrapper as Wrapper } from '../../wrappers';
import { useEffect, useState } from 'react';
import Loading from '../../common/Loading';
import Bio from './Bio';
import { useDriversContext } from '../../../context/drivers_context';
import Constructor from './Constructor';
import DriverChart from './DriverChart';

const DriverPage = () => {
  const { id } = useParams();
  const { drivers, loadingDrivers: loading } = useDriversContext();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const findDriver = drivers?.find(
      (driver) => driver.Driver?.driverId === id
    );
    setDriver({
      ...findDriver?.Driver,
      points: findDriver?.points,
      constructor: { ...findDriver?.Constructors[0] },
    });
  }, [id, drivers]);

  return (
    <Wrapper>
      <aside className="page-aside">
        <Link type="button" className="page-back" to="/">
          <MdOutlineArrowBack />
          <span className="page-back-text">back</span>
        </Link>
      </aside>
      <div className="content">
        <section className={`block ${driver?.constructor.constructorId}`}>
          {!loading && driver ? (
            <>
              <h1 className="section-title">
                {driver?.givenName} {driver?.familyName?.toUpperCase()}
              </h1>
              <>
                <Bio {...driver} />
                <Constructor {...driver.constructor} />
              </>
            </>
          ) : (
            <>
              <h1 className="section-title">DriverPage</h1>
              <Loading />
            </>
          )}
        </section>
        <section className="block">
          <h2 className="section-title">career</h2>
          <DriverChart />
        </section>
      </div>
    </Wrapper>
  );
};

export default DriverPage;
