import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class RingChart extends Component {

  constructor(props) {
    super(props);

    this.updateCharts = this.props.updateCharts.bind(this)

    this.state = {
      options: {
        theme: {
          mode: 'dark',
          palette: 'palette10'
        },
        chart: {
          background: '#282c34',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            offsetY: -20,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: true,
              }
            }
          },
        },
        title: {
          text: this.props.chartContent.title || '',
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: '22px'
          }
        },
        labels: this.props.chartContent.categories,
        legend: {
          show: true,
          floating: true,
          fontSize: '18px',
          position: 'left',
          offsetX: -1,
          offsetY: 10,
          labels: {
            useSeriesColors: true,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + '$' + Math.floor(20*opts.w.globals.series[opts.seriesIndex].toLocaleString())/10 + 'K'
          },
          itemMargin: {
            horizontal: 0,
          }
        },
        responsive: [ {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        } ]
      }
    }
  }

  render () {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.props.chartContent.series} type="radialBar" height="350" width="400" />
      </div>
    );
  }
}

export default RingChart