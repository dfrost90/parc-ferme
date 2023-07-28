import { LogoWrapper as Wrapper } from './wrappers';
import { GiCarWheel } from 'react-icons/gi';

const Logo = () => {
  return (
    <Wrapper>
      <span>parc</span>
      <GiCarWheel />
      <span>fermé</span>
    </Wrapper>
  );
};

export default Logo;
