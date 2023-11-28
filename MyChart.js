import React, { Component } from 'react';
import Highcharts from 'highcharts';
import Boost from 'highcharts/modules/boost';
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Legend,
  LineSeries,
  Tooltip,
} from 'react-jsx-highcharts';

Boost(Highcharts);

class MyChart extends Component {
  state = {
    seriesData: Array.from({ length: 25 }, (_, i) => ({
      name: `Series ${i + 1}`,
      data: this.generateRandomData(),
    })),
  };

  generateRandomData() {
    const oneDay = 8.64e7;
    const date = Date.now();
    return Array.from({ length: 100 }, (_, i) => [date + i * oneDay, Math.random() * 100]);
  }

  render() {
    const { seriesData } = this.state;

    return (
      <HighchartsChart boost={Boost}>
        <Chart height={400} />

        <Title>25 Measure Points</Title>

        <Legend layout="vertical" align="right" verticalAlign="middle" />

        <XAxis type="datetime">
          <XAxis.Title>Time</XAxis.Title>
        </XAxis>

        <YAxis>
          {seriesData.map((series, i) => (
            <LineSeries key={i} name={series.name} data={series.data} />
          ))}
        </YAxis>

        <Tooltip shared />

      </HighchartsChart>
    );
  }
}

export default withHighcharts(MyChart, Highcharts);
