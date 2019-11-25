import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class CandyCaneChart extends Component {

  constructor(props) {
    super(props);

    this.updateCharts = this.props.updateCharts.bind(this)

    this.state = {
      optionsCandyCane: {
        theme: {
          mode: 'dark',
          palette: 'palette6'
        },
        chart: {
          stacked: true,
          stackType: '100%',
          foreColor: '#fff',
          background: '#282c34',
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          width: 0,
        },
        xaxis: {
          categories: this.props.chartContent.categories,
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        fill: {
          opacity: 1,
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: "vertical",
            shadeIntensity: 0.35,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [ 90, 0, 100 ]
          },
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'right',
        }
      }
    }
  }

  render () {
    return (
      <Chart
        type="bar"
        options={this.state.optionsCandyCane}
        series={this.props.chartContent.series}
        height={this.props.height || 140}
        width={this.props.width || 600}
      />
    )
  }
}
export default CandyCaneChart;