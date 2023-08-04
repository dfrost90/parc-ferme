import { CareerInfoWrapper as Wrapper } from '../../wrappers';
import CareerInfoRow from './CareerInfoRow';
const CareerInfo = ({ careerPoints, wins, championships }) => {
  return (
    <Wrapper>
      <CareerInfoRow {...{ title: 'points', value: careerPoints }} />
      <CareerInfoRow {...{ title: 'wins', value: wins }} />
      <CareerInfoRow
        {...{ title: 'championships', value: [...championships] }}
      />
    </Wrapper>
  );
};

export default CareerInfo;
