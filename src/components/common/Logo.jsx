import { LogoWrapper as Wrapper } from '../wrappers';
import { GiCarWheel } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">
        <span>parc</span>
        <GiCarWheel />
        <span>fermé</span>
      </Link>
    </Wrapper>
  );
};

export default Logo;
