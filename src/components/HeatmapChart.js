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
          palette: 'palette3'
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
        colors: [ "#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794', '#46AF78',
          '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'
        ],
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