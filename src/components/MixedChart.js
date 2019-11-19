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
        title: {
          text: this.props.chartContent.title || '',
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 10,
          floating: false,
          style: {
            fontSize: '22px'
          }
        },
        legend: {
          fontSize: '18px'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            endingShape: 'arrow'
          }
        },
        stroke: {
          width: [ 4, 4, 4, 4, 4 ],
        },
        xaxis: {
          categories: this.props.chartContent.categories,
          labels: {
            style: { fontSize: '16px' }
          }
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
          max: 100,
          labels: {
            style: { fontSize: '16px' }
          }
        }
      }
    }
  }

  render () {
    return (
      <div className="col mixed-chart">
        <Chart options={this.state.optionsMixedChart} series={this.props.chartContent.series} type="line" width="600" />
      </div>
    )
  }
}
export default MixedChart;