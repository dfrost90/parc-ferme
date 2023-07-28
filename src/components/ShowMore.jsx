import { PropTypes } from 'prop-types';
import { ShowMoreWrapper as Wrapper } from './wrappers';

const ShowMore = ({ funcOnClick, showMoreVal }) => {
  const handleClick = () => {
    funcOnClick();
  };
  return (
    <Wrapper>
      {funcOnClick && !showMoreVal && (
        <button className="btn-link" type="button" onClick={handleClick}>
          show more
        </button>
      )}
    </Wrapper>
  );
};

ShowMore.propTypes = {
  funcOnClick: PropTypes.func,
  showMoreVal: PropTypes.bool,
};

export default ShowMore;
