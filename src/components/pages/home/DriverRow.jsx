import PropTypes from 'prop-types';
import { BiSolidChevronsRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { PointsWrapper } from './../../wrappers/';

const DriverRow = ({ Driver, Constructors, points }) => {
  return (
    <li>
      <Link to={`/driver/${Driver.driverId}`} className="driver">
        <div className="driver-image">
          <img
            src={`/assets/images/drivers/${Driver.code}.jpg`}
            alt={`${Driver.givenName} ${Driver.familyName}`}
          />
        </div>
        <div className="driver-info">
          <h5 className="driver-name">
            {Driver.givenName} {Driver.familyName.toUpperCase()}
          </h5>
          <div className={`driver-team team-${Constructors[0].constructorId}`}>
            <span className="permanent-number">{Driver.permanentNumber}</span>
            {Constructors[0].name.toLowerCase()}
          </div>
        </div>
        <PointsWrapper className="driver-points">
          <span className="points-value">{points}</span>
          <span className="points-pts">pts</span>
        </PointsWrapper>
        <div className="driver-icon">
          <BiSolidChevronsRight />
        </div>
      </Link>
    </li>
  );
};

DriverRow.propTypes = {
  Driver: PropTypes.object,
  Constructors: PropTypes.array,
  points: PropTypes.string,
};

export default DriverRow;
