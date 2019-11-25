import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class MixedChart extends Component {

  constructor(props) {
    super(props);

    this.updateCharts = this.props.updateCharts.bind(this)

    this.findMax = (data) => {
      let allValues = data.flatMap(d => d[ 'data' ])
      let max = Math.max(...allValues)
      let chartMax = Math.ceil(max / 50000) * 50000
      return chartMax;
    }
    this.state = {
      optionsMixedChart: {
        theme: {
          mode: 'dark',
          palette: 'palette6'
        },
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: false
          },
          background: '#282c34'
        },
        fill: {
          type: 'solid',
          opacity: [ 0.35, 0.8 ],
        },
        tooltip: {
          style: { fontSize: '16px' },
          y: {
            formatter: function (val) {
              return '$ ' + val.toLocaleString()
            }
          }
        },
        title: {
          // text: this.props.chartContent.title || '',
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
            columnWidth: '50%'
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
          size: 1,
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
          max: this.findMax(this.props.chartContent.series),
          labels: {
            style: { fontSize: '16px' }
          }
        }
      }
    }
  }

  render () {
    return (
      <Chart
        type="line"
        options={this.state.optionsMixedChart}
        series={this.props.chartContent.series}
        height={this.props.height||"350"}
        width={this.props.height||"500"}
      />
    )
  }
}
export default MixedChart;