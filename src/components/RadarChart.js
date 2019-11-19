import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class RadarChart extends Component {

  constructor(props) {
    super(props);

    this.updateCharts = this.props.updateCharts.bind(this)

    this.state = {
      optionsRadar: {
        chart: {
          foreColor: '#fff',
          background: '#282c34',
          toolbar: {
            show: false
          },
          markers: {
            size: 5,
            hover: {
              size: 10
            }
          }
        },
        theme: {
          mode: 'dark',
          palette: 'palette6'
        },
        labels: this.props.chartContent.categories || [],
        title: {
          align: 'center',
          margin: 0,
          offsetY: 30,
          floating: true,
          style: {
            fontSize: '22px'
          },
          text: this.props.chartContent.title || ''
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 5
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: undefined,
          formatter: function (val, opts) {
              return val
          },
          textAnchor: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
              fontSize: '16px',
          }
        }
      }
    }
  }

  render () {
    return (
      <div className="col mixed-chart">
        <Chart options={this.state.optionsRadar} series={this.props.chartContent.series} height={500} type="radar" width={500} />
      </div>
    )
  }

}

export default RadarChart