import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class MixedChart extends Component {

  constructor(props) {
    super(props);

    this.updateCharts = this.props.updateCharts.bind(this)

    this.state = {
      optionsMixedChart: {
        theme: {
          mode: 'dark', 
          palette: 'palette3'
        },
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false
          },
          background: '#000'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            endingShape: 'arrow'
          }
        },
        stroke: {
          width: [ 4, 4, 4 ],
        },
        xaxis: {
          categories: this.props.chartContent.categories
        },
        markers: {
          size: 6,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          },
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 100
        }
      }
    }
  }

  render () {
    return (
      <div className="col mixed-chart">
        <Chart options={this.state.optionsMixedChart} series={this.props.chartContent.series} type="line" width="500" />
      </div>
    )
  }
}
export default MixedChart;