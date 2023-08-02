import PropTypes from 'prop-types';
import { ConstructorWrapper as Wrapper } from '../../wrappers';

const Constructor = ({ constructorId, name }) => {
  return (
    <Wrapper>
      {constructorId && (
        <img
          src={`/assets/images/constructors/${constructorId}.png`}
          alt={`logo of ${name}`}
        />
      )}
    </Wrapper>
  );
};

Constructor.propTypes = {
  constructorId: PropTypes.string,
  name: PropTypes.string,
};

export default Constructor;
