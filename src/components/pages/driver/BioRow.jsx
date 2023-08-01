import PropTypes from 'prop-types';

const BioRow = ({ name, value, link = '' }) => {
  if (link) {
    return (
      <div className="bio-row">
        <div className="bio-row-title">{name}: </div>
        <div className="bio-row-value">
          <a href={link} target="_blank" rel="nofollow noreferrer noopener">
            {value}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bio-row">
      <div className="bio-row-title">{name}: </div>
      <div className="bio-row-value">{value}</div>
    </div>
  );
};

BioRow.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  link: PropTypes.string,
};

export default BioRow;
