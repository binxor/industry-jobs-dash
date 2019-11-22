import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class RadarChart extends Component {

  constructor(props) {
    super(props);

    this.updateCharts = this.props.updateCharts.bind(this)

    this.state = {
      optionsRadar: {
        theme: {
          mode: 'dark',
          palette: 'palette6'
        },
        chart: {
          foreColor: '#fff',
          background: '#282c34',
          toolbar: {
            show: false
          }
        },
        markers: {
          size: 5,
          hover: {
            size: 10
          }
        },
        labels: this.props.chartContent.categories || [],
        title: {
          align: 'center',
          margin: 0,
          offsetY: 10,
          floating: true,
          style: {
            fontSize: '22px'
          },
          // text: this.props.chartContent.title || ''
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 5
        },
        dataLabels: {
          style: { fontSize: '14px' }
        },
        tooltip: {
          style: { fontSize: '16px' }
        }
      }
    }
  }

  render () {
    return (
      <Chart
        type="radar"
        options={this.state.optionsRadar}
        series={this.props.chartContent.series}
        height={this.props.height||350}
        width={this.props.width||500}
      />
    )
  }

}

export default RadarChart