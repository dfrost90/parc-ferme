import PropTypes from 'prop-types';
import BioRow from './BioRow';
import { BioWrapper as Wrapper } from '../../wrappers';

const Bio = ({
  givenName,
  familyName,
  dateOfBirth,
  nationality,
  permanentNumber,
  code,
  url,
}) => {
  return (
    <Wrapper className="bio">
      <div className="image-wrapper">
        <img
          src={`/assets/images/drivers/${code}.jpg`}
          alt={`picture of ${givenName} ${familyName}`}
        />
      </div>
      <div className="bio-info">
        <BioRow name="Date of Birth" value={dateOfBirth} />
        <BioRow name="Nationality" value={nationality} />
        <BioRow name="Number" value={permanentNumber} />
        <BioRow name="Wiki" value="open link" link={url} />
      </div>
    </Wrapper>
  );
};

Bio.propTypes = {
  givenName: PropTypes.string,
  familyName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  nationality: PropTypes.string,
  permanentNumber: PropTypes.string,
  code: PropTypes.string,
  url: PropTypes.string,
};

export default Bio;
