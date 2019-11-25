import React, { Component } from 'react';
import Chart from '../../node_modules/react-apexcharts';

class RadialChart extends Component {

  constructor(props) {
    super(props);

    this.updateCharts = this.props.updateCharts.bind(this)

    this.state = {
      optionsRadial: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: '70%',
              background: 'transparent',
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: 'front',
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: '#fff',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              showOn: 'always',
              name: {
                offsetY: -20,
                show: true,
                color: '#fff',
                fontSize: '30px'
              },
              value: {
                formatter: function (val) {
                  return val + '%';
                },
                color: '#11fff1',
                fontSize: '50px',
                show: true,
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: [ '#000' ],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [ 0, 100 ]
          }
        },
        stroke: {
          lineCap: 'round'
        },
        labels: [ this.props.chartContent.title || 'Percent' ],
      }
    };
  }

  render () {
    return (
      <Chart
        type="radialBar"
        options={this.state.optionsRadial}
        series={this.props.chartContent.series}
        height={this.props.height||"350"}
      />
    )
  }

}

export default RadialChart;