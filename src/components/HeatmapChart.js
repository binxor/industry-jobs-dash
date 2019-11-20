import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class HeatmapChart extends Component {
  constructor(props) {
    super(props)

    this.updateCharts = this.props.updateCharts.bind(this)

    this.state = {
      optionsHeatmapChart: {
        theme: {
          mode: 'dark',
          palette: 'palette6'
        },
        chart: {
          background: '#282c34',
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: true
        },
        xaxis: {
          type: 'category',
          categories: this.props.chartContent.categories,
          labels: {
            style: { fontSize: '16px' }
          }
        },
        yaxis: {
          labels: {
            style: { fontSize: '14px' }
          }
        },
        tooltip: {
          style: { fontSize: '16px' }
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
        grid: {
          padding: {
            right: 20
          }
        }
      }
    }
  }

  render () {
    return (
      <div className="col">
        <Chart options={this.state.optionsHeatmapChart} series={this.props.chartContent.series} type="heatmap" width="600" />
      </div>
    )
  }
}
export default HeatmapChart