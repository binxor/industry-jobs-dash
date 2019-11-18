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
      <div className="col mixed-chart">
        <Chart options={this.state.optionsCandyCane} series={this.props.chartContent.series} height={140} type="bar" width={500} />
      </div>
    )
  }
}
export default CandyCaneChart;