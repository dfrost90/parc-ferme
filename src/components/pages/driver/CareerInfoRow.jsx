import PropTypes from 'prop-types';

const CareerInfoRow = ({ title, value }) => {
  return (
    <div className="career-row">
      <h6 className="career-row-title">{title}:</h6>
      <div className="career-row-value">
        {title === 'championships' ? value.join(', ') || 0 : value}
      </div>
    </div>
  );
};

CareerInfoRow.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
};

export default CareerInfoRow;
