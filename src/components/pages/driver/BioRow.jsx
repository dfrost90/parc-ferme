import PropTypes from 'prop-types';
import { findFlagUrlByNationality } from 'country-flags-svg';

const BioRow = ({ name, value, link = '', nationality = '' }) => {
  if (link) {
    return (
      <div className="bio-row">
        <div className="bio-row-title">{name}: </div>
        <div className="bio-row-value">
          <a
            href={link}
            className="btn-link"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            {value}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bio-row">
      <div className="bio-row-title">{name}: </div>
      <div className="bio-row-value">
        {nationality && value && (
          <img
            src={findFlagUrlByNationality(nationality)}
            alt={`${value} flag`}
            className="bio-row-flag"
          />
        )}
        <span>{value}</span>
      </div>
    </div>
  );
};

BioRow.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  link: PropTypes.string,
  nationality: PropTypes.string,
};

export default BioRow;
