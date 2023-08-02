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
  constructor,
}) => {
  return (
    <Wrapper className="bio">
      <div className="image-wrapper">
        {code && (
          <img
            src={`/assets/images/drivers/${code}.jpg`}
            alt={`picture of ${givenName} ${familyName}`}
          />
        )}
      </div>
      <div className="bio-info">
        <BioRow name="Date of Birth" value={dateOfBirth} />
        <BioRow
          name="nationality"
          value={nationality}
          nationality={nationality}
        />
        <BioRow name="Number" value={permanentNumber} />
        <BioRow name="Wiki" value="open link" link={url} />
        <BioRow
          name="constructor"
          value={constructor?.name}
          nationality={constructor?.nationality}
        />
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
  constructor: PropTypes.object,
};

export default Bio;
