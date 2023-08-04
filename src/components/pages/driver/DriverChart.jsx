import { useState } from 'react';
import { ChartWrapper as Wrapper } from '../../wrappers';
import { Chart } from 'react-google-charts';
import { useEffect } from 'react';
import { fetchData } from '../../../utils/helpers';
import { DRIVER_INFO_URL } from '../../../utils/constants';
import { useParams } from 'react-router-dom';
import Loading from '../../common/Loading';
import CareerInfo from './CareerInfo';

const DriverChart = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState([]);
  const [driver, setDriver] = useState(null);

  const columns = [
    { type: 'string', id: 'Constructor' },
    { type: 'string', id: 'Info' },
    { type: 'string', role: 'tooltip' },
    { type: 'date', id: 'Season Start Date' },
    { type: 'date', id: 'Season End Date' },
  ];

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData(
          `${DRIVER_INFO_URL}/${id}/driverStandings.json`
        );
        const chart = data.StandingsTable.StandingsLists.reduce(
          (acc, current) => {
            let row = [];

            current.DriverStandings[0].Constructors.map((constructor) => {
              row = [
                constructor.name,
                `${
                  current.DriverStandings[0].position === '1' ? 'Winner' : ''
                }`,
                `Position: ${current.DriverStandings[0].position}`,
                new Date(current.season, 0, 1, 0, 0, 0),
                new Date(parseInt(current.season) + 1, 0, 1, 0, 0, 0),
              ];
            });
            return [...acc, row];
          },
          []
        );
        const driverData = data.StandingsTable.StandingsLists.reduce(
          (acc, current) => {
            acc.careerPoints += parseInt(current.DriverStandings[0].points);

            acc.wins += parseInt(current.DriverStandings[0].wins);

            if (current.DriverStandings[0].position === '1') {
              acc.championships = [...acc.championships, current.season];
            }

            return acc;
          },
          {
            careerPoints: 0,
            championships: '',
            wins: 0,
          }
        );
        setChartData(chart);
        setDriver(driverData);
      } catch (error) {
        console.log(`There was an error ${error}`);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CareerInfo {...driver} />
          <Chart
            chartType="Timeline"
            data={[columns, ...chartData]}
            width="100%"
            height="280px"
            options={{
              allowHtml: true,
              timeline: {
                colorByRowLabel: true,
              },
            }}
          />
        </>
      )}
    </Wrapper>
  );
};

export default DriverChart;
