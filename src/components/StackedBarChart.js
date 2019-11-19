import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class StackedBarChart extends Component {
  constructor(props) {
    super(props)

    this.updateCharts = this.props.updateCharts.bind(this)

    this.state = {
      optionsStackedBarChart: {
        theme: {
          mode: 'dark',
          palette: 'palette6'
        },
        chart: {
          stacked: true,
          stackType: '100%',
          background: '#282c34',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        stroke: {
          width: 1
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
        xaxis: {
          categories: this.props.chartContent.categories || [],
          labels: {
            formatter: function (val) {
              return val + "K"
            },
            style: { fontSize: '16px' }
          }
        },
        yaxis: {
          title: {
            text: undefined
          },
          labels: {
            style: { fontSize: '16px' }
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K"
            }
          },
          style: { fontSize: '16px' }
        },
        fill: {
          opacity: 1

        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40,
          fontSize: '18px'
        }
      }
    }
  }

  render () {
    return (
      <div className="col mixed-chart">
        <Chart options={this.state.optionsStackedBarChart} series={this.props.chartContent.series} type="bar" width="600" />
      </div>
    )
  }
}

export default StackedBarChart