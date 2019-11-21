import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class BarChart extends Component {

  constructor(props) {
    super(props);

    this.updateCharts = this.props.updateCharts.bind(this)

    this.state = {
      options: {
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
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: [ '#fff' ],
            fontSize: '16px'
          },
          offsetX: 0,
          formatter: function (val, opt) {
            return '$ ' + val.toLocaleString()
          }
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
          style: { fontSize: '16px' },
          title: {
            formatter: function (val, opt) {
              return val + ' Years'
            }
          }
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
      }
    }
  }

  render () {
    return (
      <Chart 
        type="bar"
        options={this.state.options}
        series={this.props.chartContent.series}
        height={this.props.height||"350"}
        width={this.props.height||"500"}
      />
    );
  }
}

export default BarChart